import * as Schema from "@vk-dk/schema";
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
    constructor(token: string, v?: string | number);
}
