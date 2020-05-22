import * as Schema from "@vk-dk/schema";
import fetch from "node-fetch";
// import { URLSearchParams } from "url";
import { stringify, ParsedUrlQueryInput } from "querystring";

async function call(method: string, params: ParsedUrlQueryInput): Promise<any> {
  /**
   * Обёртка в буфер, это очень специально. Эту технику
   * придумали древние китайцы 100тыщ лет назад. Без неё
   * всё сломается.
   */
  const body = Buffer.from(
    stringify(
      Object.keys(params)
        .map((key) => {
          const value = params[key as keyof typeof params];
          // let result: string;

          const r = (x: string) => ({ [key]: x });

          if (Array.isArray(value)) {
            return r(value.join(","));
          }

          if (typeof value === "object") {
            return r(JSON.stringify(value));
          }

          // if (typeof value === "undefined") {
          //   return {};
          // }

          return r(String(value));
        })
        .reduce((a, b) => ({ ...a, ...b }))
    )
  );

  const raw = await fetch(`https://api.vk.com/method/${method}`, {
    body,
    method: "POST",
    headers: {
      Connection: "keep-alive"
    },
    compress: false
  });

  const json = await raw.json();

  if (json.response) return json.response;

  if (json.error) {
    const fullErrorMsg =
      json.error.error_msg +
      "\nRequest Params:\n" +
      (json.error.request_params || [])
        .map(
          ({ key, value }: { key: string; value: any }) => `${key} = ${value}`
        )
        .join("\n");
    /**
     * Я что-то напортачил с кастомными ошибками, так-как
     * их конструктор больше не принимает сообщение, а я хочу
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

  throw new Error(
    `Returned JSON does not contains 'response' or 'error' fields and looks like: ${raw}`
  );
}

function createAPI(access_token: string, v: string) {
  return Schema.Methods._exportedDomains
    .map((domain) => {
      return {
        [domain]: new Proxy(
          {},
          {
            get(_, prop: string) {
              return (params: any) =>
                call(`${domain}.${prop}`, { access_token, v, ...params });
            }
          }
        )
      };
    })
    .reduce((a, b) => ({ ...a, ...b }));
}

export default class API extends Schema.Methods._domainsSpecifier {
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
   * // Pavel Durov
   */
  constructor(token: string, v: string | number = 5.103) {
    super();

    const realAPI = createAPI(token, String(v));

    Object.assign(this, realAPI);
  }
}
