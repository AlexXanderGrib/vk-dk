import * as Schema from "@vk-dk/schema";
import fetch from "node-fetch";

export function stringify<obj extends object>(obj: obj): string {
  const keys = Object.keys(obj);

  const meaningfulKeys = keys.filter(
    (key) => obj[key as keyof obj] !== undefined // skip if undefined
  );

  const pairs = meaningfulKeys.map((key) => {
    const value = obj[key as keyof obj];

    const format = (val: string) =>
      `${encodeURIComponent(key)}=${encodeURIComponent(val)}`;

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

export async function call(method: string, params: object): Promise<any> {
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
  const domains = Schema.Methods._exportedDomains;

  return (
    domains
      .map((domain) => ({
        [domain]: new Proxy(
          {},
          {
            get(_, prop: string) {
              return (params: any) =>
                call(`${domain}.${prop}`, { access_token, v, ...params });
            }
          }
        )
      }))
      // Merging objects
      .reduce((a, b) => ({ ...a, ...b }))
  );
}

export default class API extends Schema.Methods._domainsSpecifier {
  /**
   * @param {string} token Access token for VKontakte API
   * @param {(string|number)} [version=5.107] VKontakte API version
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
  constructor(private token: string, private version: string | number = 5.107) {
    super();

    const realAPI = createAPI(token, String(version));

    Object.assign(this, realAPI);
  }

  /**
   * Access token that passed to constructor
   * @readonly Dynamically changed token can produce shit code.
   */
  get accessToken() {
    return this.token;
  }

  /**
   *  This function executes the `code` on VK's server side and can contain up to **25 calls to API**
   *
   * @see https://vk.com/dev/execute
   * @param code Code on VKScript language (like es3 but a little bit shit) to execute on VK's servers
   */
  execute<result extends any>(
    ...code: [string] | [TemplateStringsArray, ...any[]]
  ): Promise<result> {
    const [codeString, ...substitutions] = code;

    const fullCode =
      typeof codeString === "object"
        ? String.raw(codeString, ...substitutions)
        : String(codeString);

    return call("execute", {
      code: fullCode,
      access_token: this.token,
      v: String(this.version)
    });
  }

  /**
   * This is an **experimental** function for wrap default `execute`.
   *
   * @param {Fn} func function to evaluate using `execute` vk method
   */

  // evaluate<Fn extends (API: Schema.SyncMethods._domainsSpecifier) => any>(
  //   func: Fn,
  //   contextVariables?: Record<string, any>
  // ): ReturnType<Fn> {
  //   const functionPredicates = [
  //     /^(function\s*\(API\))\s*{/,
  //     /^(\(API\)|API)\s*=>\s*{/
  //   ];

  //   const functionText = func.toString();

  // }
}
