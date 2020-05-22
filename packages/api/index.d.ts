import * as Schema from "@vk-dk/schema";
export default class API extends Schema.Methods._domainsSpecifier {
    /**
     * @param {string} token Access token for VKontakte API
     * @param {string|number} version VKontakte API version, @default 5.103
     */
    constructor(token: string, v?: string | number);
}
