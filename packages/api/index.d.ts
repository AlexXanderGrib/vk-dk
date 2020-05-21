import * as Schema from "@vk-dk/schema";
declare const ds: Schema.Methods._domainsSpecifier;
declare type API = typeof ds;
/**
 * Function that creates representation on VK API
 * @param {string} token Access token for VKontakte API
 * @param {string|number} version VKontakte API version, @default 5.103
 *
 * @returns {API} Api representation
 */
export default function API(token: string, version?: number | string): API;
export {};
