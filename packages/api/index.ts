import * as Schema from "@vk-dk/schema";
import fetch from "node-fetch";

function stringify<obj extends object>(obj: obj): string {
  return Object.keys(obj)
    .map((key) => {
      const value = obj[key as keyof typeof obj];

      const format = (val: string) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(val)}`;

      if (Array.isArray(value)) {
        return format(value.join(","));
      }

      if (typeof value === "object") {
        return format(JSON.stringify(value));
      }

      return format(String(value));
    })
    .join("&");
}

async function call(method: string, params: object): Promise<any> {
  /**
   * Обёртка в буфер, это очень специально. Эту технику
   * придумали древние китайцы 100тыщ лет назад. Без неё
   * всё сломается.
   */
  const body = Buffer.from(stringify(params));

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
