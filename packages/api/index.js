"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.call = exports.stringify = void 0;
const Schema = require("@vk-dk/schema");
const node_fetch_1 = require("node-fetch");
function stringify(obj) {
    const keys = Object.keys(obj);
    const meaningfulKeys = keys.filter((key) => obj[key] !== undefined // skip if undefined
    );
    const pairs = meaningfulKeys.map((key) => {
        const value = obj[key];
        const format = (val) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`;
        if (Array.isArray(value)) {
            return format(value.join(","));
        }
        if (typeof value === "object") {
            return format(JSON.stringify(value));
        }
        return format(String(value));
    });
    return pairs.join("&");
}
exports.stringify = stringify;
async function call(method, params) {
    /**
     * Обёртка в буфер, это очень специально. Эту технику
     * придумали древние китайцы 100тыщ лет назад. Без неё
     * всё сломается.
     */
    const body = Buffer.from(stringify(params));
    const raw = await node_fetch_1.default(`https://api.vk.com/method/${method}`, {
        body,
        method: "POST",
        headers: {
            Connection: "keep-alive"
        },
        compress: false
    });
    const json = await raw.json();
    if (json.response)
        return json.response;
    if (json.error) {
        const fullErrorMsg = json.error.error_msg +
            "\nRequest Params:\n" +
            (json.error.request_params || [])
                .map(({ key, value }) => `${key} = ${value}`)
                .join("\n");
        /**
         * Я что-то напортачил с кастомными ошибками, так-как
         * их конструктор больше не принимает сообщение. А я хочу
         * чтобы дебаг был простой, поэтому вырублю это на время.
         */
        // if (json.error.error_code in Schema.Errors.ErrorsIndex) {
        //   const errorClass =
        //     Schema.Errors.ErrorsIndex[
        //       json.error.error_code as keyof typeof Schema.Errors.ErrorsIndex
        //     ];
        //   throw new errorClass(fullErrorMsg);
        // }
        throw new Error(fullErrorMsg);
    }
    throw new Error(`Returned JSON does not contains 'response' or 'error' fields and looks like: ${raw}`);
}
exports.call = call;
function createAPI(access_token, v) {
    return Schema.Methods._exportedDomains
        .map((domain) => {
        return {
            [domain]: new Proxy({}, {
                get(_, prop) {
                    return (params) => call(`${domain}.${prop}`, { access_token, v, ...params });
                }
            })
        };
    })
        .reduce((a, b) => ({ ...a, ...b }));
}
class API extends Schema.Methods._domainsSpecifier {
    /**
     * @param {string} token Access token for VKontakte API
     * @param {string|number} version VKontakte API version, @default 5.103
     *
     * @example
     *
     * const api = new API(process.env.TOKEN);
     *
     * api.users.get({ user_ids: ["durov"] })
     *   .then(users => users[0])
     *   .then(founder => console.log(`${founder.first_name} ${founder.last_name}`))
     *
     * "Pavel Durov" // In console
     */
    constructor(token, v = 5.103) {
        super();
        this.token = token;
        this.v = v;
        const realAPI = createAPI(token, String(v));
        Object.assign(this, realAPI);
    }
    /**
     *
     *
     * @param code Code to execute on VK's servers
     */
    execute(...code) {
        const [actualCode, ...substitutions] = code;
        const fullCode = typeof actualCode === "object"
            ? String.raw(actualCode, ...substitutions)
            : String(actualCode);
        return call("execute", {
            code: fullCode,
            access_token: this.token,
            v: String(this.v)
        });
    }
}
exports.default = API;
