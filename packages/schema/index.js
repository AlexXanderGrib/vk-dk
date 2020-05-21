"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Errors = exports.Methods = void 0;
var Methods;
(function (Methods) {
    var _domainsSpecifier = /** @class */ (function () {
        function _domainsSpecifier() {
        }
        return _domainsSpecifier;
    }());
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
    var ApiErrorUnknown = /** @class */ (function (_super) {
        __extends(ApiErrorUnknown, _super);
        function ApiErrorUnknown() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 1;
            _this.message = "Unknown error occurred";
            _this.name = "API_ERROR_UNKNOWN";
            return _this;
        }
        return ApiErrorUnknown;
    }(Error));
    Errors.ApiErrorUnknown = ApiErrorUnknown;
    var ApiErrorDisabled = /** @class */ (function (_super) {
        __extends(ApiErrorDisabled, _super);
        function ApiErrorDisabled() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 2;
            _this.message = "Application is disabled. Enable your application or use test mode";
            _this.name = "API_ERROR_DISABLED";
            return _this;
        }
        return ApiErrorDisabled;
    }(Error));
    Errors.ApiErrorDisabled = ApiErrorDisabled;
    var ApiErrorMethod = /** @class */ (function (_super) {
        __extends(ApiErrorMethod, _super);
        function ApiErrorMethod() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 3;
            _this.message = "Unknown method passed";
            _this.name = "API_ERROR_METHOD";
            return _this;
        }
        return ApiErrorMethod;
    }(Error));
    Errors.ApiErrorMethod = ApiErrorMethod;
    var ApiErrorSignature = /** @class */ (function (_super) {
        __extends(ApiErrorSignature, _super);
        function ApiErrorSignature() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 4;
            _this.message = "Incorrect signature";
            _this.name = "API_ERROR_SIGNATURE";
            return _this;
        }
        return ApiErrorSignature;
    }(Error));
    Errors.ApiErrorSignature = ApiErrorSignature;
    var ApiErrorAuth = /** @class */ (function (_super) {
        __extends(ApiErrorAuth, _super);
        function ApiErrorAuth() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 5;
            _this.message = "User authorization failed";
            _this.name = "API_ERROR_AUTH";
            return _this;
        }
        return ApiErrorAuth;
    }(Error));
    Errors.ApiErrorAuth = ApiErrorAuth;
    var ApiErrorTooMany = /** @class */ (function (_super) {
        __extends(ApiErrorTooMany, _super);
        function ApiErrorTooMany() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 6;
            _this.message = "Too many requests per second";
            _this.name = "API_ERROR_TOO_MANY";
            return _this;
        }
        return ApiErrorTooMany;
    }(Error));
    Errors.ApiErrorTooMany = ApiErrorTooMany;
    var ApiErrorPermission = /** @class */ (function (_super) {
        __extends(ApiErrorPermission, _super);
        function ApiErrorPermission() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 7;
            _this.message = "Permission to perform this action is denied";
            _this.name = "API_ERROR_PERMISSION";
            return _this;
        }
        return ApiErrorPermission;
    }(Error));
    Errors.ApiErrorPermission = ApiErrorPermission;
    var ApiErrorRequest = /** @class */ (function (_super) {
        __extends(ApiErrorRequest, _super);
        function ApiErrorRequest() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 8;
            _this.message = "Invalid request";
            _this.name = "API_ERROR_REQUEST";
            return _this;
        }
        return ApiErrorRequest;
    }(Error));
    Errors.ApiErrorRequest = ApiErrorRequest;
    var ApiErrorFlood = /** @class */ (function (_super) {
        __extends(ApiErrorFlood, _super);
        function ApiErrorFlood() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 9;
            _this.message = "Flood control";
            _this.name = "API_ERROR_FLOOD";
            return _this;
        }
        return ApiErrorFlood;
    }(Error));
    Errors.ApiErrorFlood = ApiErrorFlood;
    var ApiErrorServer = /** @class */ (function (_super) {
        __extends(ApiErrorServer, _super);
        function ApiErrorServer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 10;
            _this.message = "Internal server error";
            _this.name = "API_ERROR_SERVER";
            return _this;
        }
        return ApiErrorServer;
    }(Error));
    Errors.ApiErrorServer = ApiErrorServer;
    var ApiErrorEnabledInTest = /** @class */ (function (_super) {
        __extends(ApiErrorEnabledInTest, _super);
        function ApiErrorEnabledInTest() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 11;
            _this.message = "In test mode application should be disabled or user should be authorized";
            _this.name = "API_ERROR_ENABLED_IN_TEST";
            return _this;
        }
        return ApiErrorEnabledInTest;
    }(Error));
    Errors.ApiErrorEnabledInTest = ApiErrorEnabledInTest;
    var ApiErrorCaptcha = /** @class */ (function (_super) {
        __extends(ApiErrorCaptcha, _super);
        function ApiErrorCaptcha() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 14;
            _this.message = "Captcha needed";
            _this.name = "API_ERROR_CAPTCHA";
            return _this;
        }
        return ApiErrorCaptcha;
    }(Error));
    Errors.ApiErrorCaptcha = ApiErrorCaptcha;
    var ApiErrorAccess = /** @class */ (function (_super) {
        __extends(ApiErrorAccess, _super);
        function ApiErrorAccess() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 15;
            _this.message = "Access denied";
            _this.name = "API_ERROR_ACCESS";
            return _this;
        }
        return ApiErrorAccess;
    }(Error));
    Errors.ApiErrorAccess = ApiErrorAccess;
    var ApiErrorAuthHttps = /** @class */ (function (_super) {
        __extends(ApiErrorAuthHttps, _super);
        function ApiErrorAuthHttps() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 16;
            _this.message = "HTTP authorization failed";
            _this.name = "API_ERROR_AUTH_HTTPS";
            return _this;
        }
        return ApiErrorAuthHttps;
    }(Error));
    Errors.ApiErrorAuthHttps = ApiErrorAuthHttps;
    var ApiErrorAuthValidation = /** @class */ (function (_super) {
        __extends(ApiErrorAuthValidation, _super);
        function ApiErrorAuthValidation() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 17;
            _this.message = "Validation required";
            _this.name = "API_ERROR_AUTH_VALIDATION";
            return _this;
        }
        return ApiErrorAuthValidation;
    }(Error));
    Errors.ApiErrorAuthValidation = ApiErrorAuthValidation;
    var ApiErrorUserDeleted = /** @class */ (function (_super) {
        __extends(ApiErrorUserDeleted, _super);
        function ApiErrorUserDeleted() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 18;
            _this.message = "User was deleted or banned";
            _this.name = "API_ERROR_USER_DELETED";
            return _this;
        }
        return ApiErrorUserDeleted;
    }(Error));
    Errors.ApiErrorUserDeleted = ApiErrorUserDeleted;
    var ApiErrorMethodPermission = /** @class */ (function (_super) {
        __extends(ApiErrorMethodPermission, _super);
        function ApiErrorMethodPermission() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 20;
            _this.message = "Permission to perform this action is denied for non-standalone applications";
            _this.name = "API_ERROR_METHOD_PERMISSION";
            return _this;
        }
        return ApiErrorMethodPermission;
    }(Error));
    Errors.ApiErrorMethodPermission = ApiErrorMethodPermission;
    var ApiErrorMethodAds = /** @class */ (function (_super) {
        __extends(ApiErrorMethodAds, _super);
        function ApiErrorMethodAds() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 21;
            _this.message = "Permission to perform this action is allowed only for standalone and OpenAPI applications";
            _this.name = "API_ERROR_METHOD_ADS";
            return _this;
        }
        return ApiErrorMethodAds;
    }(Error));
    Errors.ApiErrorMethodAds = ApiErrorMethodAds;
    var ApiErrorMethodDisabled = /** @class */ (function (_super) {
        __extends(ApiErrorMethodDisabled, _super);
        function ApiErrorMethodDisabled() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 23;
            _this.message = "This method was disabled";
            _this.name = "API_ERROR_METHOD_DISABLED";
            return _this;
        }
        return ApiErrorMethodDisabled;
    }(Error));
    Errors.ApiErrorMethodDisabled = ApiErrorMethodDisabled;
    var ApiErrorNeedConfirmation = /** @class */ (function (_super) {
        __extends(ApiErrorNeedConfirmation, _super);
        function ApiErrorNeedConfirmation() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 24;
            _this.message = "Confirmation required";
            _this.name = "API_ERROR_NEED_CONFIRMATION";
            return _this;
        }
        return ApiErrorNeedConfirmation;
    }(Error));
    Errors.ApiErrorNeedConfirmation = ApiErrorNeedConfirmation;
    var ApiErrorNeedTokenConfirmation = /** @class */ (function (_super) {
        __extends(ApiErrorNeedTokenConfirmation, _super);
        function ApiErrorNeedTokenConfirmation() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 25;
            _this.message = "Token confirmation required";
            _this.name = "API_ERROR_NEED_TOKEN_CONFIRMATION";
            return _this;
        }
        return ApiErrorNeedTokenConfirmation;
    }(Error));
    Errors.ApiErrorNeedTokenConfirmation = ApiErrorNeedTokenConfirmation;
    var ApiErrorGroupAuth = /** @class */ (function (_super) {
        __extends(ApiErrorGroupAuth, _super);
        function ApiErrorGroupAuth() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 27;
            _this.message = "Group authorization failed";
            _this.name = "API_ERROR_GROUP_AUTH";
            return _this;
        }
        return ApiErrorGroupAuth;
    }(Error));
    Errors.ApiErrorGroupAuth = ApiErrorGroupAuth;
    var ApiErrorAppAuth = /** @class */ (function (_super) {
        __extends(ApiErrorAppAuth, _super);
        function ApiErrorAppAuth() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 28;
            _this.message = "Application authorization failed";
            _this.name = "API_ERROR_APP_AUTH";
            return _this;
        }
        return ApiErrorAppAuth;
    }(Error));
    Errors.ApiErrorAppAuth = ApiErrorAppAuth;
    var ApiErrorRateLimit = /** @class */ (function (_super) {
        __extends(ApiErrorRateLimit, _super);
        function ApiErrorRateLimit() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 29;
            _this.message = "Rate limit reached";
            _this.name = "API_ERROR_RATE_LIMIT";
            return _this;
        }
        return ApiErrorRateLimit;
    }(Error));
    Errors.ApiErrorRateLimit = ApiErrorRateLimit;
    var ApiErrorPrivateProfile = /** @class */ (function (_super) {
        __extends(ApiErrorPrivateProfile, _super);
        function ApiErrorPrivateProfile() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 30;
            _this.message = "This profile is private";
            _this.name = "API_ERROR_PRIVATE_PROFILE";
            return _this;
        }
        return ApiErrorPrivateProfile;
    }(Error));
    Errors.ApiErrorPrivateProfile = ApiErrorPrivateProfile;
    var ApiErrorParam = /** @class */ (function (_super) {
        __extends(ApiErrorParam, _super);
        function ApiErrorParam() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 100;
            _this.message = "One of the parameters specified was missing or invalid";
            _this.name = "API_ERROR_PARAM";
            return _this;
        }
        return ApiErrorParam;
    }(Error));
    Errors.ApiErrorParam = ApiErrorParam;
    var ApiErrorParamApiId = /** @class */ (function (_super) {
        __extends(ApiErrorParamApiId, _super);
        function ApiErrorParamApiId() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 101;
            _this.message = "Invalid application API ID";
            _this.name = "API_ERROR_PARAM_API_ID";
            return _this;
        }
        return ApiErrorParamApiId;
    }(Error));
    Errors.ApiErrorParamApiId = ApiErrorParamApiId;
    var ApiErrorParamUserId = /** @class */ (function (_super) {
        __extends(ApiErrorParamUserId, _super);
        function ApiErrorParamUserId() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 113;
            _this.message = "Invalid user id";
            _this.name = "API_ERROR_PARAM_USER_ID";
            return _this;
        }
        return ApiErrorParamUserId;
    }(Error));
    Errors.ApiErrorParamUserId = ApiErrorParamUserId;
    var ApiErrorParamTimestamp = /** @class */ (function (_super) {
        __extends(ApiErrorParamTimestamp, _super);
        function ApiErrorParamTimestamp() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 150;
            _this.message = "Invalid timestamp";
            _this.name = "API_ERROR_PARAM_TIMESTAMP";
            return _this;
        }
        return ApiErrorParamTimestamp;
    }(Error));
    Errors.ApiErrorParamTimestamp = ApiErrorParamTimestamp;
    var ApiErrorAccessAlbum = /** @class */ (function (_super) {
        __extends(ApiErrorAccessAlbum, _super);
        function ApiErrorAccessAlbum() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 200;
            _this.message = "Access denied";
            _this.name = "API_ERROR_ACCESS_ALBUM";
            return _this;
        }
        return ApiErrorAccessAlbum;
    }(Error));
    Errors.ApiErrorAccessAlbum = ApiErrorAccessAlbum;
    var ApiErrorAccessAudio = /** @class */ (function (_super) {
        __extends(ApiErrorAccessAudio, _super);
        function ApiErrorAccessAudio() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 201;
            _this.message = "Access denied";
            _this.name = "API_ERROR_ACCESS_AUDIO";
            return _this;
        }
        return ApiErrorAccessAudio;
    }(Error));
    Errors.ApiErrorAccessAudio = ApiErrorAccessAudio;
    var ApiErrorAccessGroup = /** @class */ (function (_super) {
        __extends(ApiErrorAccessGroup, _super);
        function ApiErrorAccessGroup() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 203;
            _this.message = "Access to group denied";
            _this.name = "API_ERROR_ACCESS_GROUP";
            return _this;
        }
        return ApiErrorAccessGroup;
    }(Error));
    Errors.ApiErrorAccessGroup = ApiErrorAccessGroup;
    var ApiErrorAlbumFull = /** @class */ (function (_super) {
        __extends(ApiErrorAlbumFull, _super);
        function ApiErrorAlbumFull() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 300;
            _this.message = "This album is full";
            _this.name = "API_ERROR_ALBUM_FULL";
            return _this;
        }
        return ApiErrorAlbumFull;
    }(Error));
    Errors.ApiErrorAlbumFull = ApiErrorAlbumFull;
    var ApiErrorVotesPermission = /** @class */ (function (_super) {
        __extends(ApiErrorVotesPermission, _super);
        function ApiErrorVotesPermission() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 500;
            _this.message = "Permission denied. You must enable votes processing in application settings";
            _this.name = "API_ERROR_VOTES_PERMISSION";
            return _this;
        }
        return ApiErrorVotesPermission;
    }(Error));
    Errors.ApiErrorVotesPermission = ApiErrorVotesPermission;
    var ApiErrorAdsPermission = /** @class */ (function (_super) {
        __extends(ApiErrorAdsPermission, _super);
        function ApiErrorAdsPermission() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 600;
            _this.message = "Permission denied. You have no access to operations specified with given object(s)";
            _this.name = "API_ERROR_ADS_PERMISSION";
            return _this;
        }
        return ApiErrorAdsPermission;
    }(Error));
    Errors.ApiErrorAdsPermission = ApiErrorAdsPermission;
    var ApiErrorAdsSpecific = /** @class */ (function (_super) {
        __extends(ApiErrorAdsSpecific, _super);
        function ApiErrorAdsSpecific() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = 603;
            _this.message = "Some ads error occured";
            _this.name = "API_ERROR_ADS_SPECIFIC";
            return _this;
        }
        return ApiErrorAdsSpecific;
    }(Error));
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
        603: ApiErrorAdsSpecific
    };
})(Errors = exports.Errors || (exports.Errors = {}));
