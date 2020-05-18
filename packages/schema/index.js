"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors = exports.Methods = void 0;
var Methods;
(function (Methods) {
    class _domainsSpecifier {
    }
    Methods._domainsSpecifier = _domainsSpecifier;
    Methods._exportedDomains = [
        "account",
        "ads",
        "appWidgets",
        "apps",
        "auth",
        "board",
        "database",
        "docs",
        "fave",
        "friends",
        "gifts",
        "groups",
        "leads",
        "likes",
        "market",
        "messages",
        "newsfeed",
        "notes",
        "notifications",
        "orders",
        "pages",
        "photos",
        "polls",
        "prettyCards",
        "search",
        "secure",
        "stats",
        "status",
        "storage",
        "stories",
        "streaming",
        "users",
        "utils",
        "video",
        "wall",
        "widgets",
    ];
})(Methods = exports.Methods || (exports.Methods = {}));
var Errors;
(function (Errors) {
    class ApiErrorUnknown extends Error {
        constructor() {
            super(...arguments);
            this.code = 1;
            this.message = "Unknown error occurred";
            this.name = "API_ERROR_UNKNOWN";
        }
    }
    Errors.ApiErrorUnknown = ApiErrorUnknown;
    class ApiErrorDisabled extends Error {
        constructor() {
            super(...arguments);
            this.code = 2;
            this.message = "Application is disabled. Enable your application or use test mode";
            this.name = "API_ERROR_DISABLED";
        }
    }
    Errors.ApiErrorDisabled = ApiErrorDisabled;
    class ApiErrorMethod extends Error {
        constructor() {
            super(...arguments);
            this.code = 3;
            this.message = "Unknown method passed";
            this.name = "API_ERROR_METHOD";
        }
    }
    Errors.ApiErrorMethod = ApiErrorMethod;
    class ApiErrorSignature extends Error {
        constructor() {
            super(...arguments);
            this.code = 4;
            this.message = "Incorrect signature";
            this.name = "API_ERROR_SIGNATURE";
        }
    }
    Errors.ApiErrorSignature = ApiErrorSignature;
    class ApiErrorAuth extends Error {
        constructor() {
            super(...arguments);
            this.code = 5;
            this.message = "User authorization failed";
            this.name = "API_ERROR_AUTH";
        }
    }
    Errors.ApiErrorAuth = ApiErrorAuth;
    class ApiErrorTooMany extends Error {
        constructor() {
            super(...arguments);
            this.code = 6;
            this.message = "Too many requests per second";
            this.name = "API_ERROR_TOO_MANY";
        }
    }
    Errors.ApiErrorTooMany = ApiErrorTooMany;
    class ApiErrorPermission extends Error {
        constructor() {
            super(...arguments);
            this.code = 7;
            this.message = "Permission to perform this action is denied";
            this.name = "API_ERROR_PERMISSION";
        }
    }
    Errors.ApiErrorPermission = ApiErrorPermission;
    class ApiErrorRequest extends Error {
        constructor() {
            super(...arguments);
            this.code = 8;
            this.message = "Invalid request";
            this.name = "API_ERROR_REQUEST";
        }
    }
    Errors.ApiErrorRequest = ApiErrorRequest;
    class ApiErrorFlood extends Error {
        constructor() {
            super(...arguments);
            this.code = 9;
            this.message = "Flood control";
            this.name = "API_ERROR_FLOOD";
        }
    }
    Errors.ApiErrorFlood = ApiErrorFlood;
    class ApiErrorServer extends Error {
        constructor() {
            super(...arguments);
            this.code = 10;
            this.message = "Internal server error";
            this.name = "API_ERROR_SERVER";
        }
    }
    Errors.ApiErrorServer = ApiErrorServer;
    class ApiErrorEnabledInTest extends Error {
        constructor() {
            super(...arguments);
            this.code = 11;
            this.message = "In test mode application should be disabled or user should be authorized";
            this.name = "API_ERROR_ENABLED_IN_TEST";
        }
    }
    Errors.ApiErrorEnabledInTest = ApiErrorEnabledInTest;
    class ApiErrorCaptcha extends Error {
        constructor() {
            super(...arguments);
            this.code = 14;
            this.message = "Captcha needed";
            this.name = "API_ERROR_CAPTCHA";
        }
    }
    Errors.ApiErrorCaptcha = ApiErrorCaptcha;
    class ApiErrorAccess extends Error {
        constructor() {
            super(...arguments);
            this.code = 15;
            this.message = "Access denied";
            this.name = "API_ERROR_ACCESS";
        }
    }
    Errors.ApiErrorAccess = ApiErrorAccess;
    class ApiErrorAuthHttps extends Error {
        constructor() {
            super(...arguments);
            this.code = 16;
            this.message = "HTTP authorization failed";
            this.name = "API_ERROR_AUTH_HTTPS";
        }
    }
    Errors.ApiErrorAuthHttps = ApiErrorAuthHttps;
    class ApiErrorAuthValidation extends Error {
        constructor() {
            super(...arguments);
            this.code = 17;
            this.message = "Validation required";
            this.name = "API_ERROR_AUTH_VALIDATION";
        }
    }
    Errors.ApiErrorAuthValidation = ApiErrorAuthValidation;
    class ApiErrorUserDeleted extends Error {
        constructor() {
            super(...arguments);
            this.code = 18;
            this.message = "User was deleted or banned";
            this.name = "API_ERROR_USER_DELETED";
        }
    }
    Errors.ApiErrorUserDeleted = ApiErrorUserDeleted;
    class ApiErrorMethodPermission extends Error {
        constructor() {
            super(...arguments);
            this.code = 20;
            this.message = "Permission to perform this action is denied for non-standalone applications";
            this.name = "API_ERROR_METHOD_PERMISSION";
        }
    }
    Errors.ApiErrorMethodPermission = ApiErrorMethodPermission;
    class ApiErrorMethodAds extends Error {
        constructor() {
            super(...arguments);
            this.code = 21;
            this.message = "Permission to perform this action is allowed only for standalone and OpenAPI applications";
            this.name = "API_ERROR_METHOD_ADS";
        }
    }
    Errors.ApiErrorMethodAds = ApiErrorMethodAds;
    class ApiErrorMethodDisabled extends Error {
        constructor() {
            super(...arguments);
            this.code = 23;
            this.message = "This method was disabled";
            this.name = "API_ERROR_METHOD_DISABLED";
        }
    }
    Errors.ApiErrorMethodDisabled = ApiErrorMethodDisabled;
    class ApiErrorNeedConfirmation extends Error {
        constructor() {
            super(...arguments);
            this.code = 24;
            this.message = "Confirmation required";
            this.name = "API_ERROR_NEED_CONFIRMATION";
        }
    }
    Errors.ApiErrorNeedConfirmation = ApiErrorNeedConfirmation;
    class ApiErrorNeedTokenConfirmation extends Error {
        constructor() {
            super(...arguments);
            this.code = 25;
            this.message = "Token confirmation required";
            this.name = "API_ERROR_NEED_TOKEN_CONFIRMATION";
        }
    }
    Errors.ApiErrorNeedTokenConfirmation = ApiErrorNeedTokenConfirmation;
    class ApiErrorGroupAuth extends Error {
        constructor() {
            super(...arguments);
            this.code = 27;
            this.message = "Group authorization failed";
            this.name = "API_ERROR_GROUP_AUTH";
        }
    }
    Errors.ApiErrorGroupAuth = ApiErrorGroupAuth;
    class ApiErrorAppAuth extends Error {
        constructor() {
            super(...arguments);
            this.code = 28;
            this.message = "Application authorization failed";
            this.name = "API_ERROR_APP_AUTH";
        }
    }
    Errors.ApiErrorAppAuth = ApiErrorAppAuth;
    class ApiErrorRateLimit extends Error {
        constructor() {
            super(...arguments);
            this.code = 29;
            this.message = "Rate limit reached";
            this.name = "API_ERROR_RATE_LIMIT";
        }
    }
    Errors.ApiErrorRateLimit = ApiErrorRateLimit;
    class ApiErrorPrivateProfile extends Error {
        constructor() {
            super(...arguments);
            this.code = 30;
            this.message = "This profile is private";
            this.name = "API_ERROR_PRIVATE_PROFILE";
        }
    }
    Errors.ApiErrorPrivateProfile = ApiErrorPrivateProfile;
    class ApiErrorParam extends Error {
        constructor() {
            super(...arguments);
            this.code = 100;
            this.message = "One of the parameters specified was missing or invalid";
            this.name = "API_ERROR_PARAM";
        }
    }
    Errors.ApiErrorParam = ApiErrorParam;
    class ApiErrorParamApiId extends Error {
        constructor() {
            super(...arguments);
            this.code = 101;
            this.message = "Invalid application API ID";
            this.name = "API_ERROR_PARAM_API_ID";
        }
    }
    Errors.ApiErrorParamApiId = ApiErrorParamApiId;
    class ApiErrorParamUserId extends Error {
        constructor() {
            super(...arguments);
            this.code = 113;
            this.message = "Invalid user id";
            this.name = "API_ERROR_PARAM_USER_ID";
        }
    }
    Errors.ApiErrorParamUserId = ApiErrorParamUserId;
    class ApiErrorParamTimestamp extends Error {
        constructor() {
            super(...arguments);
            this.code = 150;
            this.message = "Invalid timestamp";
            this.name = "API_ERROR_PARAM_TIMESTAMP";
        }
    }
    Errors.ApiErrorParamTimestamp = ApiErrorParamTimestamp;
    class ApiErrorAccessAlbum extends Error {
        constructor() {
            super(...arguments);
            this.code = 200;
            this.message = "Access denied";
            this.name = "API_ERROR_ACCESS_ALBUM";
        }
    }
    Errors.ApiErrorAccessAlbum = ApiErrorAccessAlbum;
    class ApiErrorAccessAudio extends Error {
        constructor() {
            super(...arguments);
            this.code = 201;
            this.message = "Access denied";
            this.name = "API_ERROR_ACCESS_AUDIO";
        }
    }
    Errors.ApiErrorAccessAudio = ApiErrorAccessAudio;
    class ApiErrorAccessGroup extends Error {
        constructor() {
            super(...arguments);
            this.code = 203;
            this.message = "Access to group denied";
            this.name = "API_ERROR_ACCESS_GROUP";
        }
    }
    Errors.ApiErrorAccessGroup = ApiErrorAccessGroup;
    class ApiErrorAlbumFull extends Error {
        constructor() {
            super(...arguments);
            this.code = 300;
            this.message = "This album is full";
            this.name = "API_ERROR_ALBUM_FULL";
        }
    }
    Errors.ApiErrorAlbumFull = ApiErrorAlbumFull;
    class ApiErrorVotesPermission extends Error {
        constructor() {
            super(...arguments);
            this.code = 500;
            this.message = "Permission denied. You must enable votes processing in application settings";
            this.name = "API_ERROR_VOTES_PERMISSION";
        }
    }
    Errors.ApiErrorVotesPermission = ApiErrorVotesPermission;
    class ApiErrorAdsPermission extends Error {
        constructor() {
            super(...arguments);
            this.code = 600;
            this.message = "Permission denied. You have no access to operations specified with given object(s)";
            this.name = "API_ERROR_ADS_PERMISSION";
        }
    }
    Errors.ApiErrorAdsPermission = ApiErrorAdsPermission;
    class ApiErrorAdsSpecific extends Error {
        constructor() {
            super(...arguments);
            this.code = 603;
            this.message = "Some ads error occured";
            this.name = "API_ERROR_ADS_SPECIFIC";
        }
    }
    Errors.ApiErrorAdsSpecific = ApiErrorAdsSpecific;
    Errors.ErrorsIndex = {
        1: ApiErrorUnknown,
        2: ApiErrorDisabled,
        3: ApiErrorMethod,
        4: ApiErrorSignature,
        5: ApiErrorAuth,
        6: ApiErrorTooMany,
        7: ApiErrorPermission,
        8: ApiErrorRequest,
        9: ApiErrorFlood,
        10: ApiErrorServer,
        11: ApiErrorEnabledInTest,
        14: ApiErrorCaptcha,
        15: ApiErrorAccess,
        16: ApiErrorAuthHttps,
        17: ApiErrorAuthValidation,
        18: ApiErrorUserDeleted,
        20: ApiErrorMethodPermission,
        21: ApiErrorMethodAds,
        23: ApiErrorMethodDisabled,
        24: ApiErrorNeedConfirmation,
        25: ApiErrorNeedTokenConfirmation,
        27: ApiErrorGroupAuth,
        28: ApiErrorAppAuth,
        29: ApiErrorRateLimit,
        30: ApiErrorPrivateProfile,
        100: ApiErrorParam,
        101: ApiErrorParamApiId,
        113: ApiErrorParamUserId,
        150: ApiErrorParamTimestamp,
        200: ApiErrorAccessAlbum,
        201: ApiErrorAccessAudio,
        203: ApiErrorAccessGroup,
        300: ApiErrorAlbumFull,
        500: ApiErrorVotesPermission,
        600: ApiErrorAdsPermission,
        603: ApiErrorAdsSpecific,
    };
})(Errors = exports.Errors || (exports.Errors = {}));
