import * as Schema from "@vk-dk/schema";
export declare function stringify<obj extends object>(obj: obj): string;
export declare function call(method: string, params: object): Promise<any>;
export default class API extends Schema.Methods._domainsSpecifier {
    private token;
    private v;
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
    constructor(token: string, v?: string | number);
    /**
     *
     *
     * @param code Code to execute on VK's servers
     */
    execute<result extends any>(...code: [string] | [TemplateStringsArray, ...any[]]): Promise<result>;
}
