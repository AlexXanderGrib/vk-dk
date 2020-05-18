/// <reference types="node" />
import { URL } from "url";
export declare namespace Objects {
    type AccountAccountCounters = {
        /**
         * New app requests number
         * @minimum 1
         */
        app_requests?: number;
        /**
         * New events number
         * @minimum 1
         */
        events?: number;
        /**
         * New faves number
         * @minimum 1
         */
        faves?: number;
        /**
         * New friends requests number
         * @minimum 1
         */
        friends?: number;
        /**
         * New friends suggestions number
         * @minimum 1
         */
        friends_suggestions?: number;
        /**
         * New friends recommendations number
         * @minimum 1
         */
        friends_recommendations?: number;
        /**
         * New gifts number
         * @minimum 1
         */
        gifts?: number;
        /**
         * New groups number
         * @minimum 1
         */
        groups?: number;
        menu_discover_badge?: number;
        /**
         * New messages number
         * @minimum 1
         */
        messages?: number;
        /**
         * New memories number
         * @minimum 1
         */
        memories?: number;
        /**
         * New notes number
         * @minimum 1
         */
        notes?: number;
        /**
         * New notifications number
         * @minimum 1
         */
        notifications?: number;
        /**
         * New photo tags number
         * @minimum 1
         */
        photos?: number;
        /**
         * New sdk number
         * @minimum 1
         */
        sdk?: number;
    };
    type AccountInfo = {
        wishlists_ae_promo_banner_show?: Objects.BaseBoolInt;
        /**
         * Two factor authentication is enabled
         */
        "2fa_required"?: Objects.BaseBoolInt;
        audio_ads?: Objects.AudioAdsConfig;
        /**
         * Country code
         */
        country?: string;
        /**
         * Information whether HTTPS-only is enabled
         */
        https_required?: Objects.BaseBoolInt;
        /**
         * Information whether user has been processed intro
         */
        intro?: Objects.BaseBoolInt;
        show_vk_apps_intro?: boolean;
        /**
         * Ads slot id for MyTarget
         */
        mini_apps_ads_slot_id?: number;
        qr_promotion?: number;
        link_redirects?: object;
        /**
         * Language ID
         */
        lang?: number;
        /**
         * Information whether wall comments should be hidden
         */
        no_wall_replies?: Objects.BaseBoolInt;
        /**
         * Information whether only owners posts should be shown
         */
        own_posts_default?: Objects.BaseBoolInt;
        subscriptions?: number[];
    };
    type AccountNameRequest = {
        /**
         * First name in request
         */
        first_name?: string;
        /**
         * Request ID needed to cancel the request
         */
        id?: number;
        /**
         * Last name in request
         */
        last_name?: string;
        status?: Objects.AccountNameRequestStatus;
        /**
         * Text to display to user
         */
        lang?: string;
        /**
         * href for link in lang field
         */
        link_href?: string;
        /**
         * label to display for link in lang field
         */
        link_label?: string;
    };
    /**
     * Request status
     * @enum {string} success, processing, declined, was_accepted, was_declined, declined_with_link
     */
    type AccountNameRequestStatus = "success" | "processing" | "declined" | "was_accepted" | "was_declined" | "declined_with_link";
    type AccountOffer = {
        /**
         * Offer description
         */
        description?: string;
        /**
         * Offer ID
         */
        id?: number;
        /**
         * URL of the preview image
         * @format uri
         */
        img?: string | URL;
        /**
         * Instruction how to process the offer
         */
        instruction?: string;
        /**
         * Instruction how to process the offer (HTML format)
         */
        instruction_html?: string;
        /**
         * Offer price
         */
        price?: number;
        /**
         * Offer short description
         */
        short_description?: string;
        /**
         * Offer tag
         */
        tag?: string;
        /**
         * Offer title
         */
        title?: string;
        /**
         * Currency amount
         */
        currency_amount?: number;
        /**
         * Link id
         */
        link_id?: number;
        /**
         * Link type
         * @enum {string} profile, group, app
         */
        link_type?: "profile" | "group" | "app";
    };
    type AccountPushConversations = {
        /**
         * Items count
         */
        count?: number;
        items?: Objects.AccountPushConversationsItem[];
    };
    type AccountPushConversationsItem = {
        /**
         * Time until that notifications are disabled in seconds
         */
        disabled_until: number;
        /**
         * Peer ID
         */
        peer_id: number;
        /**
         * Information whether the sound are enabled
         */
        sound: Objects.BaseBoolInt;
    };
    type AccountPushParams = {
        msg?: Objects.AccountPushParamsMode[];
        chat?: Objects.AccountPushParamsMode[];
        like?: Objects.AccountPushParamsSettings[];
        repost?: Objects.AccountPushParamsSettings[];
        comment?: Objects.AccountPushParamsSettings[];
        mention?: Objects.AccountPushParamsSettings[];
        reply?: Objects.AccountPushParamsOnoff[];
        new_post?: Objects.AccountPushParamsOnoff[];
        wall_post?: Objects.AccountPushParamsOnoff[];
        wall_publish?: Objects.AccountPushParamsOnoff[];
        friend?: Objects.AccountPushParamsOnoff[];
        friend_found?: Objects.AccountPushParamsOnoff[];
        friend_accepted?: Objects.AccountPushParamsOnoff[];
        group_invite?: Objects.AccountPushParamsOnoff[];
        group_accepted?: Objects.AccountPushParamsOnoff[];
        birthday?: Objects.AccountPushParamsOnoff[];
        event_soon?: Objects.AccountPushParamsOnoff[];
        app_request?: Objects.AccountPushParamsOnoff[];
        sdk_open?: Objects.AccountPushParamsOnoff[];
    };
    /**
     * Settings parameters
     * @enum {string} on, off, no_sound, no_text
     */
    type AccountPushParamsMode = "on" | "off" | "no_sound" | "no_text";
    /**
     * Settings parameters
     * @enum {string} on, off
     */
    type AccountPushParamsOnoff = "on" | "off";
    /**
     * Settings parameters
     * @enum {string} on, off, fr_of_fr
     */
    type AccountPushParamsSettings = "on" | "off" | "fr_of_fr";
    type AccountPushSettings = {
        /**
         * Information whether notifications are disabled
         */
        disabled?: Objects.BaseBoolInt;
        /**
         * Time until that notifications are disabled in Unixtime
         */
        disabled_until?: number;
        settings?: Objects.AccountPushParams;
        conversations?: Objects.AccountPushConversations;
    };
    type AccountUserSettings = Objects.UsersUserMin & Objects.UsersUserSettingsXtr & {
        /**
         * URL of square photo of the user with 200 pixels in width
         * @format uri
         */
        photo_200?: string | URL;
    };
    type AccountUserSettingsInterest = {
        title: string;
        value: string;
    };
    type AccountUserSettingsInterests = {
        activities?: Objects.AccountUserSettingsInterest;
        interests?: Objects.AccountUserSettingsInterest;
        music?: Objects.AccountUserSettingsInterest;
        tv?: Objects.AccountUserSettingsInterest;
        movies?: Objects.AccountUserSettingsInterest;
        books?: Objects.AccountUserSettingsInterest;
        games?: Objects.AccountUserSettingsInterest;
        quotes?: Objects.AccountUserSettingsInterest;
        about?: Objects.AccountUserSettingsInterest;
    };
    /**
     *
     * @enum {string} id, title, address, additional_address, country_id, city_id, metro_station_id, latitude, longitude, distance, work_info_status, timetable, phone, time_offset
     */
    type AddressesFields = "id" | "title" | "address" | "additional_address" | "country_id" | "city_id" | "metro_station_id" | "latitude" | "longitude" | "distance" | "work_info_status" | "timetable" | "phone" | "time_offset";
    /**
     * Current user's role
     * @enum {string} admin, manager, reports
     */
    type AdsAccessRole = "admin" | "manager" | "reports";
    type AdsAccesses = {
        /**
         * Client ID
         */
        client_id?: string;
        role?: Objects.AdsAccessRole;
    };
    type AdsAccount = {
        access_role: Objects.AdsAccessRole;
        /**
         * Account ID
         */
        account_id: number;
        /**
         * Information whether account is active
         */
        account_status: Objects.BaseBoolInt;
        account_type: Objects.AdsAccountType;
    };
    /**
     * Account type
     * @enum {string} general, agency
     */
    type AdsAccountType = "general" | "agency";
    type AdsAd = {
        /**
         * Ad format
         */
        ad_format: number;
        /**
         * Ad platform
         */
        ad_platform?: number
        /** Ad platform
         */
         | string;
        /**
         * Total limit
         */
        all_limit: number;
        approved: Objects.AdsAdApproved;
        /**
         * Campaign ID
         */
        campaign_id: number;
        /**
         * Category ID
         */
        category1_id?: number;
        /**
         * Additional category ID
         */
        category2_id?: number;
        cost_type: Objects.AdsAdCostType;
        /**
         * Cost of a click, kopecks
         */
        cpc?: number;
        /**
         * Cost of 1000 impressions, kopecks
         */
        cpm?: number;
        /**
         * Cost of an action, kopecks
         */
        cpa?: number;
        /**
         * Cost of 1000 impressions optimized, kopecks
         */
        ocpm?: number;
        /**
         * Max cost of target actions for autobidding, kopecks
         */
        autobidding_max_cost?: number;
        /**
         * Information whether disclaimer is enabled
         */
        disclaimer_medical?: Objects.BaseBoolInt;
        /**
         * Information whether disclaimer is enabled
         */
        disclaimer_specialist?: Objects.BaseBoolInt;
        /**
         * Information whether disclaimer is enabled
         */
        disclaimer_supplements?: Objects.BaseBoolInt;
        /**
         * Ad ID
         */
        id: number;
        /**
         * Impressions limit
         */
        impressions_limit?: number;
        /**
         * Information whether impressions are limited
         */
        impressions_limited?: Objects.BaseBoolInt;
        /**
         * Ad title
         */
        name: string;
        status: Objects.AdsAdStatus;
        /**
         * Information whether the ad is a video
         */
        video?: Objects.BaseBoolInt;
    };
    /**
     * Review status
     */
    type AdsAdApproved = number;
    /**
     * Cost type
     */
    type AdsAdCostType = number;
    type AdsAdLayout = {
        /**
         * Ad format
         */
        ad_format: number;
        /**
         * Campaign ID
         */
        campaign_id: number;
        cost_type: Objects.AdsAdCostType;
        /**
         * Ad description
         */
        description: string;
        /**
         * Ad ID
         */
        id: number;
        /**
         * Image URL
         * @format uri
         */
        image_src: string | URL;
        /**
         * URL of the preview image in double size
         * @format uri
         */
        image_src_2x?: string | URL;
        /**
         * Domain of advertised object
         */
        link_domain?: string;
        /**
         * URL of advertised object
         * @format uri
         */
        link_url: string | URL;
        /**
         * link to preview an ad as it is shown on the website
         */
        preview_link?: number
        /** link to preview an ad as it is shown on the website
         */
         | string;
        /**
         * Ad title
         */
        title: string;
        /**
         * Information whether the ad is a video
         */
        video?: Objects.BaseBoolInt;
    };
    /**
     * Ad atatus
     */
    type AdsAdStatus = number;
    type AdsCampaign = {
        /**
         * Campaign's total limit, rubles
         */
        all_limit: string;
        /**
         * Campaign's day limit, rubles
         */
        day_limit: string;
        /**
         * Campaign ID
         */
        id: number;
        /**
         * Campaign title
         */
        name: string;
        /**
         * Campaign start time, as Unixtime
         */
        start_time: number;
        status: Objects.AdsCampaignStatus;
        /**
         * Campaign stop time, as Unixtime
         */
        stop_time: number;
        type: Objects.AdsCampaignType;
    };
    /**
     * Campaign status
     */
    type AdsCampaignStatus = number;
    /**
     * Campaign type
     * @enum {string} normal, vk_apps_managed, mobile_apps, promoted_posts
     */
    type AdsCampaignType = "normal" | "vk_apps_managed" | "mobile_apps" | "promoted_posts";
    type AdsCategory = {
        /**
         * Category ID
         * @minimum 1
         */
        id: number;
        /**
         * Category name
         */
        name: string;
        subcategories?: Objects.BaseObjectWithName[];
    };
    type AdsClient = {
        /**
         * Client's total limit, rubles
         */
        all_limit: string;
        /**
         * Client's day limit, rubles
         */
        day_limit: string;
        /**
         * Client ID
         */
        id: number;
        /**
         * Client name
         */
        name: string;
    };
    type AdsCriteria = {
        /**
         * Age from
         */
        age_from?: number;
        /**
         * Age to
         */
        age_to?: number;
        /**
         * Apps IDs
         */
        apps?: string;
        /**
         * Apps IDs to except
         */
        apps_not?: string;
        /**
         * Days to birthday
         */
        birthday?: number;
        /**
         * Cities IDs
         */
        cities?: string;
        /**
         * Cities IDs to except
         */
        cities_not?: string;
        /**
         * Country ID
         */
        country?: number;
        /**
         * Districts IDs
         */
        districts?: string;
        /**
         * Communities IDs
         */
        groups?: string;
        /**
         * Interests categories IDs
         */
        interest_categories?: string;
        /**
         * Interests
         */
        interests?: string;
        /**
         * Information whether the user has proceeded VK payments before
         */
        paying?: Objects.BaseBoolInt;
        /**
         * Positions IDs
         */
        positions?: string;
        /**
         * Religions IDs
         */
        religions?: string;
        /**
         * Retargeting groups IDs
         */
        retargeting_groups?: string;
        /**
         * Retargeting groups IDs to except
         */
        retargeting_groups_not?: string;
        /**
         * School graduation year from
         */
        school_from?: number;
        /**
         * School graduation year to
         */
        school_to?: number;
        /**
         * Schools IDs
         */
        schools?: string;
        sex?: Objects.AdsCriteriaSex;
        /**
         * Stations IDs
         */
        stations?: string;
        /**
         * Relationship statuses
         */
        statuses?: string;
        /**
         * Streets IDs
         */
        streets?: string;
        /**
         * Travellers only
         */
        travellers?: Objects.BasePropertyExists;
        /**
         * University graduation year from
         */
        uni_from?: number;
        /**
         * University graduation year to
         */
        uni_to?: number;
        /**
         * Browsers
         */
        user_browsers?: string;
        /**
         * Devices
         */
        user_devices?: string;
        /**
         * Operating systems
         */
        user_os?: string;
    };
    /**
     * Sex
     */
    type AdsCriteriaSex = number;
    type AdsDemoStats = {
        /**
         * Object ID
         */
        id?: number;
        stats?: Objects.AdsDemostatsFormat;
        type?: Objects.AdsObjectType;
    };
    type AdsDemostatsFormat = {
        age?: Objects.AdsStatsAge[];
        cities?: Objects.AdsStatsCities[];
        /**
         * Day as YYYY-MM-DD
         */
        day?: string;
        /**
         * Month as YYYY-MM
         */
        month?: string;
        /**
         * 1 if period=overall
         */
        overall?: number;
        sex?: Objects.AdsStatsSex[];
        sex_age?: Objects.AdsStatsSexAge[];
    };
    type AdsFloodStats = {
        /**
         * Requests left
         */
        left: number;
        /**
         * Time to refresh in seconds
         */
        refresh: number;
    };
    type AdsLinkStatus = {
        /**
         * Reject reason
         */
        description: string;
        /**
         * URL
         * @format uri
         */
        redirect_url: string | URL;
        /**
         * Link status
         */
        status: string;
    };
    /**
     * Object type
     * @enum {string} ad, campaign, client, office
     */
    type AdsObjectType = "ad" | "campaign" | "client" | "office";
    type AdsParagraphs = {
        /**
         * Rules paragraph
         */
        paragraph?: string;
    };
    type AdsPromotedPostReach = {
        /**
         * Hides amount
         */
        hide: number;
        /**
         * Object ID from 'ids' parameter
         */
        id: number;
        /**
         * Community joins
         */
        join_group: number;
        /**
         * Link clicks
         */
        links: number;
        /**
         * Subscribers reach
         */
        reach_subscribers: number;
        /**
         * Total reach
         */
        reach_total: number;
        /**
         * Reports amount
         */
        report: number;
        /**
         * Community clicks
         */
        to_group: number;
        /**
         * 'Unsubscribe' events amount
         */
        unsubscribe: number;
        /**
         * Video views for 100 percent
         */
        video_views_100p?: number;
        /**
         * Video views for 25 percent
         */
        video_views_25p?: number;
        /**
         * Video views for 3 seconds
         */
        video_views_3s?: number;
        /**
         * Video views for 50 percent
         */
        video_views_50p?: number;
        /**
         * Video views for 75 percent
         */
        video_views_75p?: number;
        /**
         * Video starts
         */
        video_views_start?: number;
    };
    type AdsRejectReason = {
        /**
         * Comment text
         */
        comment?: string;
        rules?: Objects.AdsRules[];
    };
    type AdsRules = {
        paragraphs?: Objects.AdsParagraphs[];
        /**
         * Comment
         */
        title?: string;
    };
    type AdsStats = {
        /**
         * Object ID
         */
        id?: number;
        stats?: Objects.AdsStatsFormat;
        type?: Objects.AdsObjectType;
        views_times?: Objects.AdsStatsViewsTimes;
    };
    type AdsStatsAge = {
        /**
         * Clicks rate
         */
        clicks_rate?: number;
        /**
         * Impressions rate
         */
        impressions_rate?: number;
        /**
         * Age interval
         */
        value?: string;
    };
    type AdsStatsCities = {
        /**
         * Clicks rate
         */
        clicks_rate?: number;
        /**
         * Impressions rate
         */
        impressions_rate?: number;
        /**
         * City name
         */
        name?: string;
        /**
         * City ID
         */
        value?: number;
    };
    type AdsStatsFormat = {
        /**
         * Clicks number
         */
        clicks?: number;
        /**
         * Day as YYYY-MM-DD
         */
        day?: string;
        /**
         * Impressions number
         */
        impressions?: number;
        /**
         * Events number
         */
        join_rate?: number;
        /**
         * Month as YYYY-MM
         */
        month?: string;
        /**
         * 1 if period=overall
         */
        overall?: number;
        /**
         * Reach
         */
        reach?: number;
        /**
         * Spent funds
         */
        spent?: number;
        /**
         * Clickthoughs to the advertised site
         */
        video_clicks_site?: number;
        /**
         * Video views number
         */
        video_views?: number;
        /**
         * Video views (full video)
         */
        video_views_full?: number;
        /**
         * Video views (half of video)
         */
        video_views_half?: number;
    };
    type AdsStatsSex = {
        /**
         * Clicks rate
         */
        clicks_rate?: number;
        /**
         * Impressions rate
         */
        impressions_rate?: number;
        value?: Objects.AdsStatsSexValue;
    };
    type AdsStatsSexAge = {
        /**
         * Clicks rate
         */
        clicks_rate?: number;
        /**
         * Impressions rate
         */
        impressions_rate?: number;
        /**
         * Sex and age interval
         */
        value?: string;
    };
    /**
     * Sex
     * @enum {string} f, m
     */
    type AdsStatsSexValue = "f" | "m";
    type AdsStatsViewsTimes = {
        views_ads_times_1?: number;
        views_ads_times_2?: number;
        views_ads_times_3?: number;
        views_ads_times_4?: number;
        views_ads_times_5?: string;
        views_ads_times_6?: number;
        views_ads_times_7?: number;
        views_ads_times_8?: number;
        views_ads_times_9?: number;
        views_ads_times_10?: number;
        views_ads_times_11_plus?: number;
    };
    type AdsTargSettings = {
        /**
         * Ad ID
         */
        id?: number;
        /**
         * Campaign ID
         */
        campaign_id?: number;
    } & Objects.AdsCriteria;
    type AdsTargStats = {
        /**
         * Audience
         */
        audience_count: number;
        /**
         * Recommended CPC value for 50% reach (old format)
         */
        recommended_cpc?: number;
        /**
         * Recommended CPM value for 50% reach (old format)
         */
        recommended_cpm?: number;
        /**
         * Recommended CPC value for 50% reach
         */
        recommended_cpc_50?: number;
        /**
         * Recommended CPM value for 50% reach
         */
        recommended_cpm_50?: number;
        /**
         * Recommended CPC value for 70% reach
         */
        recommended_cpc_70?: number;
        /**
         * Recommended CPM value for 70% reach
         */
        recommended_cpm_70?: number;
        /**
         * Recommended CPC value for 90% reach
         */
        recommended_cpc_90?: number;
        /**
         * Recommended CPM value for 90% reach
         */
        recommended_cpm_90?: number;
    };
    type AdsTargSuggestions = {
        /**
         * Object ID
         */
        id?: number;
        /**
         * Object name
         */
        name?: string;
    };
    type AdsTargSuggestionsCities = {
        /**
         * Object ID
         */
        id?: number;
        /**
         * Object name
         */
        name?: string;
        /**
         * Parent object
         */
        parent?: string;
    };
    type AdsTargSuggestionsRegions = {
        /**
         * Object ID
         */
        id?: number;
        /**
         * Object name
         */
        name?: string;
        /**
         * Object type
         */
        type?: string;
    };
    type AdsTargSuggestionsSchools = {
        /**
         * Full school title
         */
        desc?: string;
        /**
         * School ID
         */
        id?: number;
        /**
         * School title
         */
        name?: string;
        /**
         * City name
         */
        parent?: string;
        type?: Objects.AdsTargSuggestionsSchoolsType;
    };
    /**
     * School type
     * @enum {string} school, university, faculty, chair
     */
    type AdsTargSuggestionsSchoolsType = "school" | "university" | "faculty" | "chair";
    type AdsTargetGroup = {
        /**
         * Audience
         */
        audience_count?: number;
        /**
         * Site domain
         */
        domain?: string;
        /**
         * Group ID
         */
        id?: number;
        /**
         * Number of days for user to be in group
         */
        lifetime?: number;
        /**
         * Group name
         */
        name?: string;
        /**
         * Pixel code
         */
        pixel?: string;
    };
    type AdsUsers = {
        accesses: Objects.AdsAccesses[];
        /**
         * User ID
         */
        user_id: number;
    };
    type AppsApp = Objects.AppsAppMin & {
        /**
         * Application author's URL
         * @format uri
         */
        author_url?: string | URL;
        /**
         * URL of the app banner with 1120 px in width
         * @format uri
         */
        banner_1120?: string | URL;
        /**
         * URL of the app banner with 560 px in width
         * @format uri
         */
        banner_560?: string | URL;
        /**
         * URL of the app icon with 16 px in width
         * @format uri
         */
        icon_16?: string | URL;
        /**
         * Is new flag
         */
        is_new?: Objects.BaseBoolInt;
        /**
         * Is push enabled
         */
        push_enabled?: Objects.BaseBoolInt;
        /**
         * Screen orientation
         */
        screen_orientation?: number;
        friends?: number[];
        /**
         * Catalog position
         */
        catalog_position?: number;
        /**
         * Application description
         */
        description?: string;
        /**
         * Genre name
         */
        genre?: string;
        /**
         * Genre ID
         */
        genre_id?: number;
        /**
         * Information whether the application is multilanguage
         */
        international?: boolean;
        /**
         * Information whether application is in mobile catalog
         */
        is_in_catalog?: number;
        leaderboard_type?: Objects.AppsAppLeaderboardType;
        /**
         * Members number
         */
        members_count?: number;
        /**
         * Application ID in store
         */
        platform_id?: string;
        /**
         * Date when the application has been published in Unixtime
         */
        published_date?: number;
        /**
         * Screen name
         */
        screen_name?: string;
        /**
         * Application section name
         */
        section?: string;
    };
    /**
     * Leaderboard type
     */
    type AppsAppLeaderboardType = number;
    type AppsAppMin = {
        type: Objects.AppsAppType;
        /**
         * Application ID
         */
        id: number;
        /**
         * Application title
         */
        title: string;
        /**
         * Application author's ID
         */
        author_owner_id?: number;
        /**
         * Is application installed
         */
        is_installed?: boolean;
        /**
         * URL of the app icon with 139 px in width
         * @format uri
         */
        icon_139?: string | URL;
        /**
         * URL of the app icon with 150 px in width
         * @format uri
         */
        icon_150?: string | URL;
        /**
         * URL of the app icon with 278 px in width
         * @format uri
         */
        icon_278?: string | URL;
        /**
         * URL of the app icon with 576 px in width
         * @format uri
         */
        icon_576?: string | URL;
        /**
         * URL of the app icon with 75 px in width
         * @format uri
         */
        icon_75?: string | URL;
    };
    /**
     * Application type
     * @enum {string} app, game, site, standalone, vk_app, community_app, html5_game, mini_app
     */
    type AppsAppType = "app" | "game" | "site" | "standalone" | "vk_app" | "community_app" | "html5_game" | "mini_app";
    type AppsLeaderboard = {
        /**
         * Level
         */
        level?: number;
        /**
         * Points number
         */
        points?: number;
        /**
         * Score number
         */
        score?: number;
        /**
         * User ID
         */
        user_id: number;
    };
    /**
     * Scope description
     */
    type AppsScope = {
        /**
         * Scope name
         */
        name: string;
        /**
         * Scope title
         */
        title?: string;
    };
    type AudioAudio = {
        /**
         * Artist name
         */
        artist: string;
        /**
         * Audio ID
         */
        id: number;
        /**
         * Title
         */
        title: string;
        /**
         * URL of mp3 file
         * @format uri
         */
        url?: string | URL;
        /**
         * Duration in seconds
         */
        duration: number;
        /**
         * Date when uploaded
         */
        date?: number;
        /**
         * Album ID
         */
        album_id?: number;
        /**
         * Genre ID
         */
        genre_id?: number;
        /**
         * Performer name
         */
        performer?: string;
    };
    type BaseBoolInt = number;
    type BaseCity = {
        /**
         * City ID
         * @minimum 1
         */
        id: number;
        /**
         * City title
         */
        title: string;
    };
    type BaseCommentsInfo = {
        /**
         * Information whether current user can comment the post
         */
        can_post?: Objects.BaseBoolInt;
        /**
         * Comments number
         */
        count?: number;
        /**
         * Information whether groups can comment the post
         */
        groups_can_post?: boolean;
    };
    type BaseCountry = {
        /**
         * Country ID
         * @minimum 1
         */
        id: number;
        /**
         * Country title
         */
        title: string;
    };
    type BaseError = {
        /**
         * Error code
         */
        error_code?: number;
        /**
         * Error message
         */
        error_msg?: string;
        request_params?: Objects.BaseRequestParam[];
    };
    type BaseGeo = {
        coordinates?: Objects.BaseGeoCoordinates;
        place?: Objects.BasePlace;
        /**
         * Information whether a map is showed
         */
        showmap?: number;
        /**
         * Place type
         */
        type?: string;
    };
    type BaseGeoCoordinates = {
        latitude: number;
        longitude: number;
    };
    type BaseImage = {
        id?: string;
        /**
         * Image height
         */
        height: number;
        /**
         * Image url
         * @format uri
         */
        url: string | URL;
        /**
         * Image width
         */
        width: number;
    };
    type BaseLikes = {
        /**
         * Likes number
         */
        count?: number;
        /**
         * Information whether current user likes the photo
         */
        user_likes?: Objects.BaseBoolInt;
    };
    type BaseLikesInfo = {
        /**
         * Information whether current user can like the post
         */
        can_like: Objects.BaseBoolInt;
        /**
         * Information whether current user can repost
         */
        can_publish?: Objects.BaseBoolInt;
        /**
         * Likes number
         */
        count: number;
        /**
         * Information whether current uer has liked the post
         */
        user_likes: number;
    };
    type BaseLink = {
        application?: Objects.BaseLinkApplication;
        button?: Objects.BaseLinkButton;
        /**
         * Link caption
         */
        caption?: string;
        /**
         * Link description
         */
        description?: string;
        /**
         * Link ID
         */
        id?: string;
        is_favorite?: boolean;
        photo?: Objects.PhotosPhoto;
        /**
         * String ID of the page with article preview
         */
        preview_page?: string;
        /**
         * URL of the page with article preview
         * @format uri
         */
        preview_url?: string | URL;
        product?: Objects.BaseLinkProduct;
        rating?: Objects.BaseLinkRating;
        /**
         * Link title
         */
        title?: string;
        /**
         * Link URL
         * @format uri
         */
        url: string | URL;
        target_object?: Objects.LinkTargetObject;
        /**
         * Information whether the current link is external
         */
        is_external?: boolean;
        /**
         * Preview article
         */
        preview_article?: Objects.ArticlesArticle;
        /**
         * Video from link
         */
        video?: Objects.VideoVideo;
        /**
         * Amp for link
         */
        amp?: Objects.SnippetsAmp;
    };
    type BaseLinkApplication = {
        /**
         * Application Id
         */
        app_id?: number;
        store?: Objects.BaseLinkApplicationStore;
    };
    type BaseLinkApplicationStore = {
        /**
         * Store Id
         */
        id?: number;
        /**
         * Store name
         */
        name?: string;
    };
    type BaseLinkButton = {
        /**
         * Button action
         */
        action?: Objects.BaseLinkButtonAction;
        /**
         * Button title
         */
        title?: string;
        /**
         * Target block id
         */
        block_id?: string;
        /**
         * Target section id
         */
        section_id?: string;
        /**
         * Owner id
         */
        owner_id?: number;
        /**
         * Button icon name, e.g. 'phone' or 'gift'
         */
        icon?: string;
        style?: Objects.BaseLinkButtonStyle;
    };
    type BaseLinkButtonAction = {
        type?: Objects.BaseLinkButtonActionType;
        /**
         * Action URL
         * @format uri
         */
        url?: string | URL;
        consume_reason?: string;
    };
    /**
     * Action type
     * @enum {string} open_url
     */
    type BaseLinkButtonActionType = "open_url";
    /**
     * Button style
     */
    type BaseLinkButtonStyle = string;
    type BaseLinkProduct = {
        price: Objects.MarketPrice;
        merchant?: string;
        orders_count?: number;
    };
    type BaseLinkRating = {
        /**
         * Count of reviews
         */
        reviews_count?: number;
        /**
         * Count of stars
         */
        stars?: number;
    };
    type BaseMessageError = {
        /**
         * Error code
         */
        code?: number;
        /**
         * Error message
         */
        description?: string;
    };
    type BaseObject = {
        /**
         * Object ID
         */
        id: number;
        /**
         * Object title
         */
        title: string;
    };
    type BaseObjectCount = {
        /**
         * Items count
         */
        count?: number;
    };
    type BaseObjectWithName = {
        /**
         * Object ID
         */
        id: number;
        /**
         * Object name
         */
        name: string;
    };
    /**
     * Returns 1 if request has been processed successfully
     */
    type BaseOkResponse = number;
    type BasePlace = {
        /**
         * Place address
         */
        address?: string;
        /**
         * Checkins number
         */
        checkins?: number;
        /**
         * City name
         */
        city?: string;
        /**
         * Country name
         */
        country?: string;
        /**
         * Date of the place creation in Unixtime
         */
        created?: number;
        /**
         * URL of the place's icon
         * @format uri
         */
        icon?: string | URL;
        /**
         * Place ID
         */
        id?: number;
        /**
         * Place latitude
         */
        latitude?: number;
        /**
         * Place longitude
         */
        longitude?: number;
        /**
         * Place title
         */
        title?: string;
        /**
         * Place type
         */
        type?: string;
    };
    type BasePropertyExists = number;
    type BaseRepostsInfo = {
        /**
         * Reposts number
         */
        count?: number;
        /**
         * Information whether current user has reposted the post
         */
        user_reposted?: number;
    };
    type BaseRequestParam = {
        /**
         * Parameter name
         */
        key?: string;
        /**
         * Parameter value
         */
        value?: string;
    };
    type BaseSex = number;
    type BaseSticker = {
        /**
         * Sticker ID
         */
        sticker_id?: number;
        /**
         * Pack ID
         */
        product_id?: number;
        images?: Objects.BaseImage[];
        images_with_background?: Objects.BaseImage[];
        /**
         * URL of sticker animation script
         * @format uri
         */
        animation_url?: string | URL;
        /**
         * Array of sticker animation script objects
         */
        animations?: Objects.BaseStickerAnimation[];
        /**
         * Information whether the sticker is allowed
         */
        is_allowed?: boolean;
    };
    type BaseStickerAnimation = {
        /**
         * Type of animation script
         * @enum {string} light, dark
         */
        type?: "light" | "dark";
        /**
         * URL of animation script
         * @format uri
         */
        url?: string | URL;
    };
    type BaseUploadServer = {
        /**
         * Upload URL
         * @format uri
         */
        upload_url: string | URL;
    };
    /**
     *
     * @enum {string} about, action_button, activities, activity, addresses, admin_level, age_limits, author_id, ban_info, bdate, blacklisted, blacklisted_by_me, books, can_create_topic, can_message, can_post, can_see_all_posts, can_see_audio, can_send_friend_request, can_upload_video, can_write_private_message, career, city, common_count, connections, contacts, counters, country, cover, crop_photo, deactivated, description, domain, education, exports, finish_date, fixed_post, followers_count, friend_status, games, has_market_app, has_mobile, has_photo, home_town, id, interests, is_admin, is_closed, is_favorite, is_friend, is_hidden_from_feed, is_member, is_messages_blocked, can_send_notify, is_subscribed, last_seen, links, lists, maiden_name, main_album_id, main_section, market, member_status, members_count, military, movies, music, name, nickname, occupation, online, online_status, personal, phone, photo_100, photo_200, photo_200_orig, photo_400_orig, photo_50, photo_id, photo_max, photo_max_orig, quotes, relation, relatives, schools, screen_name, sex, site, start_date, status, timezone, trending, tv, type, universities, verified, wall_comments, wiki_page, vk_admin_status
     */
    type BaseUserGroupFields = "about" | "action_button" | "activities" | "activity" | "addresses" | "admin_level" | "age_limits" | "author_id" | "ban_info" | "bdate" | "blacklisted" | "blacklisted_by_me" | "books" | "can_create_topic" | "can_message" | "can_post" | "can_see_all_posts" | "can_see_audio" | "can_send_friend_request" | "can_upload_video" | "can_write_private_message" | "career" | "city" | "common_count" | "connections" | "contacts" | "counters" | "country" | "cover" | "crop_photo" | "deactivated" | "description" | "domain" | "education" | "exports" | "finish_date" | "fixed_post" | "followers_count" | "friend_status" | "games" | "has_market_app" | "has_mobile" | "has_photo" | "home_town" | "id" | "interests" | "is_admin" | "is_closed" | "is_favorite" | "is_friend" | "is_hidden_from_feed" | "is_member" | "is_messages_blocked" | "can_send_notify" | "is_subscribed" | "last_seen" | "links" | "lists" | "maiden_name" | "main_album_id" | "main_section" | "market" | "member_status" | "members_count" | "military" | "movies" | "music" | "name" | "nickname" | "occupation" | "online" | "online_status" | "personal" | "phone" | "photo_100" | "photo_200" | "photo_200_orig" | "photo_400_orig" | "photo_50" | "photo_id" | "photo_max" | "photo_max_orig" | "quotes" | "relation" | "relatives" | "schools" | "screen_name" | "sex" | "site" | "start_date" | "status" | "timezone" | "trending" | "tv" | "type" | "universities" | "verified" | "wall_comments" | "wiki_page" | "vk_admin_status";
    type BaseUserId = {
        /**
         * User ID
         */
        user_id?: number;
    };
    /**
     * Sort type
     */
    type BoardDefaultOrder = number;
    type BoardTopic = {
        /**
         * Comments number
         */
        comments?: number;
        /**
         * Date when the topic has been created in Unixtime
         */
        created?: number;
        /**
         * Creator ID
         */
        created_by?: number;
        /**
         * Topic ID
         */
        id?: number;
        /**
         * Information whether the topic is closed
         */
        is_closed?: Objects.BaseBoolInt;
        /**
         * Information whether the topic is fixed
         */
        is_fixed?: Objects.BaseBoolInt;
        /**
         * Topic title
         */
        title?: string;
        /**
         * Date when the topic has been updated in Unixtime
         */
        updated?: number;
        /**
         * ID of user who updated the topic
         */
        updated_by?: number;
    };
    type BoardTopicComment = {
        attachments?: Objects.WallCommentAttachment[];
        /**
         * Date when the comment has been added in Unixtime
         */
        date: number;
        /**
         * Author ID
         */
        from_id: number;
        /**
         * Comment ID
         * @minimum 1
         */
        id: number;
        /**
         * Real position of the comment
         */
        real_offset?: number;
        /**
         * Comment text
         */
        text: string;
        /**
         * Information whether current user can edit the comment
         */
        can_edit?: Objects.BaseBoolInt;
        likes?: Objects.BaseLikesInfo;
    };
    type BoardTopicPoll = {
        /**
         * Current user's answer ID
         */
        answer_id: number;
        answers: Objects.PollsAnswer[];
        /**
         * Date when poll has been created in Unixtime
         */
        created: number;
        /**
         * Information whether the poll is closed
         */
        is_closed?: Objects.BaseBoolInt;
        /**
         * Poll owner's ID
         */
        owner_id: number;
        /**
         * Poll ID
         * @minimum 1
         */
        poll_id: number;
        /**
         * Poll question
         */
        question: string;
        /**
         * Votes number
         */
        votes: string;
    };
    type CallbackBoardPostDelete = {
        topic_owner_id: number;
        topic_id: number;
        id: number;
    };
    type CallbackConfirmationMessage = {
        type: Objects.CallbackMessageType;
        group_id: number;
        secret: string;
    };
    type CallbackGroupChangePhoto = {
        user_id: number;
        photo: Objects.PhotosPhoto;
    };
    type CallbackGroupChangeSettings = {
        user_id: number;
        self: Objects.BaseBoolInt;
    };
    type CallbackGroupJoin = {
        user_id: number;
        join_type: Objects.CallbackGroupJoinType;
    };
    /**
     *
     * @enum {string} join, unsure, accepted, approved, request
     */
    type CallbackGroupJoinType = "join" | "unsure" | "accepted" | "approved" | "request";
    type CallbackGroupLeave = {
        user_id?: number;
        self?: Objects.BaseBoolInt;
    };
    type CallbackGroupMarket = number;
    type CallbackGroupOfficerRole = number;
    type CallbackGroupOfficersEdit = {
        admin_id: number;
        user_id: number;
        level_old: Objects.CallbackGroupOfficerRole;
        level_new: Objects.CallbackGroupOfficerRole;
    };
    type CallbackGroupSettingsChanges = {
        title?: string;
        description?: string;
        access?: Objects.GroupsGroupIsClosed;
        screen_name?: string;
        public_category?: number;
        public_subcategory?: number;
        age_limits?: Objects.GroupsGroupFullAgeLimits;
        website?: string;
        enable_status_default?: Objects.GroupsGroupWall;
        enable_audio?: Objects.GroupsGroupAudio;
        enable_video?: Objects.GroupsGroupVideo;
        enable_photo?: Objects.GroupsGroupPhotos;
        enable_market?: Objects.CallbackGroupMarket;
    };
    type CallbackMarketComment = {
        id: number;
        from_id: number;
        date: number;
        text?: string;
        market_owner_od?: number;
        photo_id?: number;
    };
    type CallbackMarketCommentDelete = {
        owner_id: number;
        id: number;
        user_id: number;
        item_id: number;
    };
    type CallbackMessageAllow = {
        user_id: number;
        key: string;
    };
    type CallbackMessageBase = {
        type: Objects.CallbackMessageType;
        object: object;
        group_id: number;
    };
    type CallbackMessageDeny = {
        user_id: number;
    };
    /**
     *
     * @enum {string} confirmation, group_change_photo, group_change_settings, group_officers_edit, lead_forms_new, market_comment_delete, market_comment_edit, market_comment_restore, message_allow, message_deny, message_read, message_reply, message_typing_state, messages_edit, photo_comment_delete, photo_comment_edit, photo_comment_restore, poll_vote_new, user_block, user_unblock, video_comment_delete, video_comment_edit, video_comment_restore, wall_reply_delete, wall_reply_restore, wall_repost
     */
    type CallbackMessageType = "confirmation" | "group_change_photo" | "group_change_settings" | "group_officers_edit" | "lead_forms_new" | "market_comment_delete" | "market_comment_edit" | "market_comment_restore" | "message_allow" | "message_deny" | "message_read" | "message_reply" | "message_typing_state" | "messages_edit" | "photo_comment_delete" | "photo_comment_edit" | "photo_comment_restore" | "poll_vote_new" | "user_block" | "user_unblock" | "video_comment_delete" | "video_comment_edit" | "video_comment_restore" | "wall_reply_delete" | "wall_reply_restore" | "wall_repost";
    type CallbackPhotoComment = {
        id: number;
        from_id: number;
        date: number;
        text: string;
        photo_owner_od: number;
    };
    type CallbackPhotoCommentDelete = {
        id: number;
        owner_id: number;
        user_id: number;
        photo_id: number;
    };
    type CallbackPollVoteNew = {
        owner_id: number;
        poll_id: number;
        option_id: number;
        user_id: number;
    };
    type CallbackQrScan = {
        user_id: number;
        data: string;
        type: string;
        subtype: string;
        reread: boolean;
    };
    type CallbackUserBlock = {
        admin_id: number;
        user_id: number;
        unblock_date: number;
        reason: number;
        comment?: string;
    };
    type CallbackUserUnblock = {
        admin_id: number;
        user_id: number;
        by_end_date: number;
    };
    type CallbackVideoComment = {
        id: number;
        from_id: number;
        date: number;
        text: string;
        video_owner_od: number;
    };
    type CallbackVideoCommentDelete = {
        id: number;
        owner_id: number;
        user_id: number;
        video_id: number;
    };
    type CallbackWallCommentDelete = {
        owner_id: number;
        id: number;
        user_id: number;
        post_id: number;
    };
    type CommentThread = {
        /**
         * Information whether current user can comment the post
         */
        can_post?: boolean;
        /**
         * Comments number
         */
        count: number;
        /**
         * Information whether groups can comment the post
         */
        groups_can_post?: boolean;
        items?: Objects.WallWallComment[];
        /**
         * Information whether recommended to display reply button
         */
        show_reply_button?: boolean;
    };
    type DatabaseCity = Objects.BaseObject & {
        /**
         * Area title
         */
        area?: string;
        /**
         * Region title
         */
        region?: string;
        /**
         * Information whether the city is included in important cities list
         */
        important?: Objects.BaseBoolInt;
    };
    type DatabaseFaculty = {
        /**
         * Faculty ID
         */
        id?: number;
        /**
         * Faculty title
         */
        title?: string;
    };
    type DatabaseRegion = {
        /**
         * Region ID
         */
        id?: number;
        /**
         * Region title
         */
        title?: string;
    };
    type DatabaseSchool = {
        /**
         * School ID
         */
        id?: number;
        /**
         * School title
         */
        title?: string;
    };
    type DatabaseStation = {
        /**
         * City ID
         * @minimum 1
         */
        city_id?: number;
        /**
         * Hex color code without #
         */
        color?: string;
        /**
         * Station ID
         * @minimum 1
         */
        id: number;
        /**
         * Station name
         */
        name: string;
    };
    type DatabaseUniversity = {
        /**
         * University ID
         */
        id?: number;
        /**
         * University title
         */
        title?: string;
    };
    type DocsDoc = {
        /**
         * Access key for the document
         */
        access_key?: string;
        /**
         * Date when file has been uploaded in Unixtime
         */
        date: number;
        /**
         * File extension
         */
        ext: string;
        /**
         * Document ID
         */
        id: number;
        is_licensed?: Objects.BaseBoolInt;
        /**
         * Document owner ID
         */
        owner_id: number;
        preview?: Objects.DocsDocPreview;
        /**
         * File size in bites
         */
        size: number;
        /**
         * Document title
         */
        title: string;
        /**
         * Document type
         */
        type: number;
        /**
         * File URL
         * @format uri
         */
        url?: string | URL;
        /**
         * Document tags
         */
        tags?: string[];
    };
    /**
     * Doc attachment type
     * @enum {string} doc, graffiti, audio_message
     */
    type DocsDocAttachmentType = "doc" | "graffiti" | "audio_message";
    type DocsDocPreview = {
        photo?: Objects.DocsDocPreviewPhoto;
        video?: Objects.DocsDocPreviewVideo;
    };
    type DocsDocPreviewPhoto = {
        sizes?: Objects.PhotosPhotoSizes[];
    };
    type DocsDocPreviewVideo = {
        /**
         * Video file size in bites
         */
        filesize: number;
        /**
         * Video's height in pixels
         */
        height: number;
        /**
         * Video URL
         * @format uri
         */
        src: string | URL;
        /**
         * Video's width in pixels
         */
        width: number;
    };
    type DocsDocTypes = {
        /**
         * Number of docs
         */
        count?: number;
        /**
         * Doc type ID
         */
        id?: number;
        /**
         * Doc type title
         */
        name?: string;
    };
    type DocsDocUploadResponse = {
        /**
         * Uploaded file data
         */
        file?: string;
    };
    type EventsEventAttach = {
        /**
         * address of event
         */
        address?: string;
        /**
         * text of attach
         */
        button_text: string;
        /**
         * array of friends ids
         */
        friends: number[];
        /**
         * event ID
         */
        id: number;
        /**
         * is favorite
         */
        is_favorite: boolean;
        /**
         * Current user's member status
         */
        member_status?: Objects.GroupsGroupFullMemberStatus;
        /**
         * text of attach
         */
        text: string;
        /**
         * event start time
         */
        time?: number;
    };
    type FaveBookmark = {
        /**
         * Timestamp, when this item was bookmarked
         */
        added_date: number;
        link?: Objects.BaseLink;
        post?: Objects.WallWallpostFull;
        product?: Objects.MarketMarketItem;
        /**
         * Has user seen this item
         */
        seen: boolean;
        tags: Objects.FaveTag[];
        /**
         * Item type
         */
        type: Objects.FaveBookmarkType;
        video?: Objects.VideoVideo;
    };
    /**
     *
     * @enum {string} post, video, product, article, link
     */
    type FaveBookmarkType = "post" | "video" | "product" | "article" | "link";
    type FavePage = {
        /**
         * Some info about user or group
         */
        description: string;
        group?: Objects.GroupsGroupFull;
        tags: Objects.FaveTag[];
        /**
         * Item type
         */
        type: Objects.FavePageType;
        /**
         * Timestamp, when this page was bookmarked
         */
        updated_date?: number;
        user?: Objects.UsersUserFull;
    };
    /**
     *
     * @enum {string} user, group, hints
     */
    type FavePageType = "user" | "group" | "hints";
    type FaveTag = {
        /**
         * Tag id
         */
        id?: number;
        /**
         * Tag name
         */
        name?: string;
    };
    type FriendsFriendStatus = {
        friend_status: Objects.FriendsFriendStatusStatus;
        /**
         * MD5 hash for the result validation
         */
        sign?: string;
        /**
         * User ID
         * @minimum 1
         */
        user_id: number;
    };
    /**
     * Friend status with the user
     */
    type FriendsFriendStatusStatus = number;
    type FriendsFriendsList = {
        /**
         * List ID
         */
        id: number;
        /**
         * List title
         */
        name: string;
    };
    type FriendsMutualFriend = {
        /**
         * Total mutual friends number
         */
        common_count?: number;
        common_friends?: number[];
        /**
         * User ID
         */
        id?: number;
    };
    type FriendsRequests = {
        /**
         * ID of the user by whom friend has been suggested
         */
        from?: string;
        mutual?: Objects.FriendsRequestsMutual;
        /**
         * User ID
         * @minimum 1
         */
        user_id?: number;
    };
    type FriendsRequestsMutual = {
        /**
         * Total mutual friends number
         */
        count?: number;
        users?: number[];
    };
    type FriendsRequestsXtrMessage = {
        /**
         * ID of the user by whom friend has been suggested
         */
        from?: string;
        /**
         * Message sent with a request
         */
        message?: string;
        mutual?: Objects.FriendsRequestsMutual;
        /**
         * User ID
         * @minimum 1
         */
        user_id?: number;
    };
    type FriendsUserXtrLists = Objects.UsersUserFull & {
        lists?: number[];
    };
    type FriendsUserXtrPhone = Objects.UsersUserFull & {
        /**
         * User phone
         */
        phone?: string;
    };
    type GiftsGift = {
        /**
         * Date when gist has been sent in Unixtime
         */
        date?: number;
        /**
         * Gift sender ID
         */
        from_id?: number;
        gift?: Objects.GiftsLayout;
        /**
         * Hash
         */
        gift_hash?: string;
        /**
         * Gift ID
         */
        id?: number;
        /**
         * Comment text
         */
        message?: string;
        privacy?: Objects.GiftsGiftPrivacy;
    };
    /**
     * Gift privacy
     */
    type GiftsGiftPrivacy = number;
    type GiftsLayout = {
        /**
         * Gift ID
         */
        id?: number;
        /**
         * URL of the preview image with 512 px in width
         * @format uri
         */
        thumb_512?: string | URL;
        /**
         * URL of the preview image with 256 px in width
         * @format uri
         */
        thumb_256?: string | URL;
        /**
         * URL of the preview image with 48 px in width
         * @format uri
         */
        thumb_48?: string | URL;
        /**
         * URL of the preview image with 96 px in width
         * @format uri
         */
        thumb_96?: string | URL;
        /**
         * ID of the sticker pack, if the gift is representing one
         */
        stickers_product_id?: number;
        /**
         * ID of the build of constructor gift
         */
        build_id?: string;
        /**
         * Keywords used for search
         */
        keywords?: string;
    };
    type GroupsAddress = {
        /**
         * Additional address to the place (6 floor, left door)
         */
        additional_address?: string;
        /**
         * String address to the place (Nevsky, 28)
         */
        address?: string;
        /**
         * City id of address
         */
        city_id?: number;
        /**
         * Country id of address
         */
        country_id?: number;
        /**
         * Distance from the point
         */
        distance?: number;
        /**
         * Address id
         */
        id: number;
        /**
         * Address latitude
         */
        latitude?: number;
        /**
         * Address longitude
         */
        longitude?: number;
        /**
         * Metro id of address
         */
        metro_station_id?: number;
        /**
         * Address phone
         */
        phone?: string;
        /**
         * Time offset int minutes from utc time
         */
        time_offset?: number;
        /**
         * Week timetable for the address
         */
        timetable?: Objects.GroupsAddressTimetable;
        /**
         * Title of the place (Zinger, etc)
         */
        title?: string;
        /**
         * Status of information about timetable
         */
        work_info_status?: Objects.GroupsAddressWorkInfoStatus;
    };
    /**
     * Timetable for a week
     */
    type GroupsAddressTimetable = {
        /**
         * Timetable for friday
         */
        fri?: Objects.GroupsAddressTimetableDay;
        /**
         * Timetable for monday
         */
        mon?: Objects.GroupsAddressTimetableDay;
        /**
         * Timetable for saturday
         */
        sat?: Objects.GroupsAddressTimetableDay;
        /**
         * Timetable for sunday
         */
        sun?: Objects.GroupsAddressTimetableDay;
        /**
         * Timetable for thursday
         */
        thu?: Objects.GroupsAddressTimetableDay;
        /**
         * Timetable for tuesday
         */
        tue?: Objects.GroupsAddressTimetableDay;
        /**
         * Timetable for wednesday
         */
        wed?: Objects.GroupsAddressTimetableDay;
    };
    /**
     * Timetable for one day
     */
    type GroupsAddressTimetableDay = {
        /**
         * Close time of the break in minutes
         */
        break_close_time?: number;
        /**
         * Start time of the break in minutes
         */
        break_open_time?: number;
        /**
         * Close time in minutes
         */
        close_time: number;
        /**
         * Open time in minutes
         */
        open_time: number;
    };
    /**
     * Status of information about timetable
     * @enum {string} no_information, temporarily_closed, always_opened, timetable, forever_closed
     */
    type GroupsAddressWorkInfoStatus = "no_information" | "temporarily_closed" | "always_opened" | "timetable" | "forever_closed";
    type GroupsAddressesInfo = {
        /**
         * Information whether addresses is enabled
         */
        is_enabled: boolean;
        /**
         * Main address id for group
         */
        main_address_id?: number;
    };
    type GroupsBanInfo = {
        /**
         * Administrator ID
         * @minimum 1
         */
        admin_id?: number;
        /**
         * Comment for a ban
         */
        comment?: string;
        /**
         * Show comment for user
         */
        comment_visible?: boolean;
        is_closed?: boolean;
        /**
         * Date when user has been added to blacklist in Unixtime
         */
        date?: number;
        /**
         * Date when user will be removed from blacklist in Unixtime
         */
        end_date?: number;
        reason?: Objects.GroupsBanInfoReason;
    };
    /**
     * Ban reason
     */
    type GroupsBanInfoReason = number;
    type GroupsBannedItem = Objects.GroupsOwnerXtrBanInfo;
    type GroupsCallbackServer = {
        id: number;
        title: string;
        creator_id: number;
        url: string;
        secret_key: string;
        /**
         *
         * @enum {string} unconfigured, failed, wait, ok
         */
        status: "unconfigured" | "failed" | "wait" | "ok";
    };
    type GroupsCallbackSettings = {
        /**
         * API version used for the events
         */
        api_version?: string;
        events?: Objects.GroupsLongPollEvents;
    };
    type GroupsContactsItem = {
        /**
         * Contact description
         */
        desc?: string;
        /**
         * Contact email
         */
        email?: string;
        /**
         * Contact phone
         */
        phone?: string;
        /**
         * User ID
         */
        user_id?: number;
    };
    type GroupsCountersGroup = {
        /**
         * Addresses number
         */
        addresses?: number;
        /**
         * Photo albums number
         */
        albums?: number;
        /**
         * Audios number
         */
        audios?: number;
        /**
         * Audio playlists number
         */
        audio_playlists?: number;
        /**
         * Docs number
         */
        docs?: number;
        /**
         * Market items number
         */
        market?: number;
        /**
         * Photos number
         */
        photos?: number;
        /**
         * Topics number
         */
        topics?: number;
        /**
         * Videos number
         */
        videos?: number;
    };
    type GroupsCover = {
        /**
         * Information whether cover is enabled
         */
        enabled: Objects.BaseBoolInt;
        images?: Objects.BaseImage[];
    };
    /**
     *
     * @enum {string} market, member_status, is_favorite, is_subscribed, city, country, verified, description, wiki_page, members_count, counters, cover, can_post, can_see_all_posts, activity, fixed_post, can_create_topic, can_upload_video, has_photo, status, main_album_id, links, contacts, site, main_section, trending, can_message, is_market_cart_enabled, is_messages_blocked, can_send_notify, online_status, start_date, finish_date, age_limits, ban_info, action_button, author_id, phone, has_market_app, addresses, live_covers, is_adult, can_subscribe_posts, warning_notification, msg_push_allowed, stories_archive_count
     */
    type GroupsFields = "market" | "member_status" | "is_favorite" | "is_subscribed" | "city" | "country" | "verified" | "description" | "wiki_page" | "members_count" | "counters" | "cover" | "can_post" | "can_see_all_posts" | "activity" | "fixed_post" | "can_create_topic" | "can_upload_video" | "has_photo" | "status" | "main_album_id" | "links" | "contacts" | "site" | "main_section" | "trending" | "can_message" | "is_market_cart_enabled" | "is_messages_blocked" | "can_send_notify" | "online_status" | "start_date" | "finish_date" | "age_limits" | "ban_info" | "action_button" | "author_id" | "phone" | "has_market_app" | "addresses" | "live_covers" | "is_adult" | "can_subscribe_posts" | "warning_notification" | "msg_push_allowed" | "stories_archive_count";
    /**
     *
     * @enum {string} admin, editor, moder, groups, publics, events, has_addresses
     */
    type GroupsFilter = "admin" | "editor" | "moder" | "groups" | "publics" | "events" | "has_addresses";
    type GroupsGroup = {
        admin_level?: Objects.GroupsGroupAdminLevel;
        /**
         * Information whether community is banned
         */
        deactivated?: string;
        /**
         * Finish date in Unixtime format
         */
        finish_date?: number;
        /**
         * Community ID
         */
        id?: number;
        /**
         * Information whether current user is administrator
         */
        is_admin?: Objects.BaseBoolInt;
        /**
         * Information whether current user is advertiser
         */
        is_advertiser?: Objects.BaseBoolInt;
        is_closed?: Objects.GroupsGroupIsClosed;
        /**
         * Information whether current user is member
         */
        is_member?: Objects.BaseBoolInt;
        /**
         * Community name
         */
        name?: string;
        /**
         * URL of square photo of the community with 100 pixels in width
         * @format uri
         */
        photo_100?: string | URL;
        /**
         * URL of square photo of the community with 200 pixels in width
         * @format uri
         */
        photo_200?: string | URL;
        /**
         * URL of square photo of the community with 50 pixels in width
         * @format uri
         */
        photo_50?: string | URL;
        /**
         * Domain of the community page
         */
        screen_name?: string;
        /**
         * Start date in Unixtime format
         */
        start_date?: number;
        type?: Objects.GroupsGroupType;
    };
    type GroupsGroupAccess = number;
    /**
     * Level of current user's credentials as manager
     */
    type GroupsGroupAdminLevel = number;
    /**
     *
     * @default 1
     */
    type GroupsGroupAgeLimits = number;
    type GroupsGroupAttach = {
        /**
         * group ID
         */
        id: number;
        /**
         * text of attach
         */
        text: string;
        /**
         * activity or category of group
         */
        status: string;
        /**
         * size of group
         */
        size: number;
        /**
         * is favorite
         */
        is_favorite: boolean;
    };
    type GroupsGroupAudio = number;
    type GroupsGroupBanInfo = {
        /**
         * Ban comment
         */
        comment?: string;
        /**
         * End date of ban in Unixtime
         */
        end_date?: number;
        reason?: Objects.GroupsBanInfoReason;
    };
    type GroupsGroupCategory = {
        /**
         * Category ID
         */
        id: number;
        /**
         * Category name
         */
        name: string;
        subcategories?: Objects.BaseObjectWithName[];
    };
    type GroupsGroupCategoryFull = {
        /**
         * Category ID
         */
        id: number;
        /**
         * Category name
         */
        name: string;
        /**
         * Pages number
         */
        page_count: number;
        page_previews: Objects.GroupsGroup[];
        subcategories?: Objects.GroupsGroupCategory[];
    };
    type GroupsGroupCategoryType = {
        id: number;
        name: string;
    };
    type GroupsGroupDocs = number;
    type GroupsGroupFull = Objects.GroupsGroup & {
        market?: Objects.GroupsMarketInfo;
        /**
         * Current user's member status
         */
        member_status?: Objects.GroupsGroupFullMemberStatus;
        /**
         * Information whether community is adult
         */
        is_adult?: Objects.BaseBoolInt;
        /**
         * Information whether community is hidden from current user's newsfeed
         */
        is_hidden_from_feed?: Objects.BaseBoolInt;
        /**
         * Information whether community is in faves
         */
        is_favorite?: Objects.BaseBoolInt;
        /**
         * Information whether current user is subscribed
         */
        is_subscribed?: Objects.BaseBoolInt;
        city?: Objects.BaseObject;
        country?: Objects.BaseCountry;
        /**
         * Information whether community is verified
         */
        verified?: Objects.BaseBoolInt;
        /**
         * Community description
         */
        description?: string;
        /**
         * Community's main wiki page title
         */
        wiki_page?: string;
        /**
         * Community members number
         */
        members_count?: number;
        counters?: Objects.GroupsCountersGroup;
        cover?: Objects.GroupsCover;
        /**
         * Information whether current user can post on community's wall
         */
        can_post?: Objects.BaseBoolInt;
        /**
         * Information whether current user can see all posts on community's wall
         */
        can_see_all_posts?: Objects.BaseBoolInt;
        /**
         * Type of group, start date of event or category of public page
         */
        activity?: string;
        /**
         * Fixed post ID
         */
        fixed_post?: number;
        /**
         * Information whether current user can create topic
         */
        can_create_topic?: Objects.BaseBoolInt;
        /**
         * Information whether current user can upload doc
         */
        can_upload_doc?: Objects.BaseBoolInt;
        /**
         * Information whether current user can upload story
         */
        can_upload_story?: Objects.BaseBoolInt;
        /**
         * Information whether current user can upload video
         */
        can_upload_video?: Objects.BaseBoolInt;
        /**
         * Information whether community has photo
         */
        has_photo?: Objects.BaseBoolInt;
        /**
         * Community status
         */
        status?: string;
        /**
         * Community's main photo album ID
         */
        main_album_id?: number;
        links?: Objects.GroupsLinksItem[];
        contacts?: Objects.GroupsContactsItem[];
        /**
         * Information about wall status in community
         */
        wall?: number;
        /**
         * Community's website
         */
        site?: string;
        main_section?: Objects.GroupsGroupFullMainSection;
        /**
         * Information whether the community has a "fire" pictogram.
         */
        trending?: Objects.BaseBoolInt;
        /**
         * Information whether current user can send a message to community
         */
        can_message?: Objects.BaseBoolInt;
        /**
         * Information whether community can send a message to current user
         */
        is_messages_blocked?: Objects.BaseBoolInt;
        /**
         * Information whether community can send notifications by phone number to current user
         */
        can_send_notify?: Objects.BaseBoolInt;
        /**
         * Status of replies in community messages
         */
        online_status?: Objects.GroupsOnlineStatus;
        /**
         * Information whether age limit
         */
        age_limits?: Objects.GroupsGroupFullAgeLimits;
        /**
         * User ban info
         */
        ban_info?: Objects.GroupsGroupBanInfo;
        /**
         * Information whether community has installed market app
         */
        has_market_app?: boolean;
        /**
         * Info about addresses in groups
         */
        addresses?: Objects.GroupsAddressesInfo;
        /**
         * Information whether current user is subscribed to podcasts
         */
        is_subscribed_podcasts?: boolean;
        /**
         * Owner in whitelist or not
         */
        can_subscribe_podcasts?: boolean;
        /**
         * Can subscribe to wall
         */
        can_subscribe_posts?: boolean;
    };
    type GroupsGroupFullAgeLimits = number;
    /**
     * Main section of community
     */
    type GroupsGroupFullMainSection = number;
    type GroupsGroupFullMemberStatus = number;
    /**
     * Information whether community is closed
     */
    type GroupsGroupIsClosed = number;
    type GroupsGroupLink = {
        /**
         * Link label
         */
        name?: string;
        /**
         * Link description
         */
        desc?: string;
        /**
         * Information whether the title can be edited
         */
        edit_title?: Objects.BaseBoolInt;
        /**
         * Link ID
         */
        id?: number;
        /**
         * Information whether the image on processing
         */
        image_processing?: Objects.BaseBoolInt;
        /**
         * Link URL
         * @format uri
         */
        url?: string | URL;
    };
    type GroupsGroupMarketCurrency = number;
    type GroupsGroupPhotos = number;
    type GroupsGroupPublicCategoryList = {
        id?: number;
        name?: string;
        subcategories?: Objects.GroupsGroupCategoryType[];
    };
    /**
     *
     * @enum {string} moderator, editor, administrator
     */
    type GroupsGroupRole = "moderator" | "editor" | "administrator";
    /**
     *
     * @enum {string} 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42
     */
    type GroupsGroupSubject = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42;
    type GroupsGroupTopics = number;
    /**
     * Community type
     * @enum {string} group, page, event
     */
    type GroupsGroupType = "group" | "page" | "event";
    type GroupsGroupVideo = number;
    type GroupsGroupWall = number;
    type GroupsGroupWiki = number;
    type GroupsGroupXtrInvitedBy = {
        admin_level?: Objects.GroupsGroupXtrInvitedByAdminLevel;
        /**
         * Community ID
         */
        id?: number;
        /**
         * Inviter ID
         * @minimum 1
         */
        invited_by?: number;
        /**
         * Information whether current user is manager
         */
        is_admin?: Objects.BaseBoolInt;
        /**
         * Information whether current user is advertiser
         */
        is_advertiser?: Objects.BaseBoolInt;
        /**
         * Information whether community is closed
         */
        is_closed?: Objects.BaseBoolInt;
        /**
         * Information whether current user is member
         */
        is_member?: Objects.BaseBoolInt;
        /**
         * Community name
         */
        name?: string;
        /**
         * URL of square photo of the community with 100 pixels in width
         * @format uri
         */
        photo_100?: string | URL;
        /**
         * URL of square photo of the community with 200 pixels in width
         * @format uri
         */
        photo_200?: string | URL;
        /**
         * URL of square photo of the community with 50 pixels in width
         * @format uri
         */
        photo_50?: string | URL;
        /**
         * Domain of the community page
         */
        screen_name?: string;
        type?: Objects.GroupsGroupXtrInvitedByType;
    };
    /**
     * Level of current user's credentials as manager
     */
    type GroupsGroupXtrInvitedByAdminLevel = number;
    /**
     * Community type
     * @enum {string} group, page, event
     */
    type GroupsGroupXtrInvitedByType = "group" | "page" | "event";
    type GroupsGroupsArray = {
        /**
         * Communities number
         */
        count: number;
        items: number[];
    };
    type GroupsLinksItem = {
        /**
         * Link description
         */
        desc?: string;
        /**
         * Information whether the link title can be edited
         */
        edit_title?: Objects.BaseBoolInt;
        /**
         * Link ID
         */
        id?: number;
        /**
         * Link title
         */
        name?: string;
        /**
         * URL of square image of the link with 100 pixels in width
         * @format uri
         */
        photo_100?: string | URL;
        /**
         * URL of square image of the link with 50 pixels in width
         * @format uri
         */
        photo_50?: string | URL;
        /**
         * Link URL
         * @format uri
         */
        url?: string | URL;
    };
    type GroupsLongPollEvents = {
        audio_new: Objects.BaseBoolInt;
        board_post_delete: Objects.BaseBoolInt;
        board_post_edit: Objects.BaseBoolInt;
        board_post_new: Objects.BaseBoolInt;
        board_post_restore: Objects.BaseBoolInt;
        group_change_photo: Objects.BaseBoolInt;
        group_change_settings: Objects.BaseBoolInt;
        group_join: Objects.BaseBoolInt;
        group_leave: Objects.BaseBoolInt;
        group_officers_edit: Objects.BaseBoolInt;
        lead_forms_new?: Objects.BaseBoolInt;
        market_comment_delete: Objects.BaseBoolInt;
        market_comment_edit: Objects.BaseBoolInt;
        market_comment_new: Objects.BaseBoolInt;
        market_comment_restore: Objects.BaseBoolInt;
        message_allow: Objects.BaseBoolInt;
        message_deny: Objects.BaseBoolInt;
        message_new: Objects.BaseBoolInt;
        message_read: Objects.BaseBoolInt;
        message_reply: Objects.BaseBoolInt;
        message_typing_state: Objects.BaseBoolInt;
        messages_edit: Objects.BaseBoolInt;
        photo_comment_delete: Objects.BaseBoolInt;
        photo_comment_edit: Objects.BaseBoolInt;
        photo_comment_new: Objects.BaseBoolInt;
        photo_comment_restore: Objects.BaseBoolInt;
        photo_new: Objects.BaseBoolInt;
        poll_vote_new: Objects.BaseBoolInt;
        user_block: Objects.BaseBoolInt;
        user_unblock: Objects.BaseBoolInt;
        video_comment_delete: Objects.BaseBoolInt;
        video_comment_edit: Objects.BaseBoolInt;
        video_comment_new: Objects.BaseBoolInt;
        video_comment_restore: Objects.BaseBoolInt;
        video_new: Objects.BaseBoolInt;
        wall_post_new: Objects.BaseBoolInt;
        wall_reply_delete: Objects.BaseBoolInt;
        wall_reply_edit: Objects.BaseBoolInt;
        wall_reply_new: Objects.BaseBoolInt;
        wall_reply_restore: Objects.BaseBoolInt;
        wall_repost: Objects.BaseBoolInt;
    };
    type GroupsLongPollServer = {
        /**
         * Long Poll key
         */
        key: string;
        /**
         * Long Poll server address
         */
        server: string;
        /**
         * Number of the last event
         */
        ts: string;
    };
    type GroupsLongPollSettings = {
        /**
         * API version used for the events
         */
        api_version?: string;
        events: Objects.GroupsLongPollEvents;
        /**
         * Shows whether Long Poll is enabled
         */
        is_enabled: boolean;
    };
    type GroupsMarketInfo = {
        /**
         * Contact person ID
         */
        contact_id?: number;
        currency?: Objects.MarketCurrency;
        /**
         * Currency name
         */
        currency_text?: string;
        /**
         * Information whether the market is enabled
         */
        enabled?: Objects.BaseBoolInt;
        /**
         * Main market album ID
         */
        main_album_id?: number;
        /**
         * Maximum price
         */
        price_max?: string;
        /**
         * Minimum price
         */
        price_min?: string;
    };
    type GroupsMemberRole = {
        /**
         * User ID
         */
        id?: number;
        permissions?: Objects.GroupsMemberRolePermission[];
        role?: Objects.GroupsMemberRoleStatus;
    };
    /**
     *
     * @enum {string} ads
     */
    type GroupsMemberRolePermission = "ads";
    /**
     * User's credentials as community admin
     * @enum {string} moderator, editor, administrator, creator
     */
    type GroupsMemberRoleStatus = "moderator" | "editor" | "administrator" | "creator";
    type GroupsMemberStatus = {
        /**
         * Information whether user is a member of the group
         */
        member: Objects.BaseBoolInt;
        /**
         * User ID
         * @minimum 1
         */
        user_id: number;
    };
    type GroupsMemberStatusFull = {
        /**
         * Information whether user can be invited
         */
        can_invite?: Objects.BaseBoolInt;
        /**
         * Information whether user's invite to the group can be recalled
         */
        can_recall?: Objects.BaseBoolInt;
        /**
         * Information whether user has been invited to the group
         */
        invitation?: Objects.BaseBoolInt;
        /**
         * Information whether user is a member of the group
         */
        member: Objects.BaseBoolInt;
        /**
         * Information whether user has send request to the group
         */
        request?: Objects.BaseBoolInt;
        /**
         * User ID
         * @minimum 1
         */
        user_id: number;
    };
    /**
     * Online status of group
     */
    type GroupsOnlineStatus = {
        /**
         * Estimated time of answer (for status = answer_mark)
         */
        minutes?: number;
        status: Objects.GroupsOnlineStatusType;
    };
    /**
     * Type of online status of group
     * @enum {string} none, online, answer_mark
     */
    type GroupsOnlineStatusType = "none" | "online" | "answer_mark";
    type GroupsOwnerXtrBanInfo = {
        ban_info?: Objects.GroupsBanInfo;
        /**
         * Information about group if type = group
         */
        group?: Objects.GroupsGroup;
        /**
         * Information about group if type = profile
         */
        profile?: Objects.UsersUser;
        type?: Objects.GroupsOwnerXtrBanInfoType;
    };
    /**
     * Owner type
     * @enum {string} group, profile
     */
    type GroupsOwnerXtrBanInfoType = "group" | "profile";
    /**
     * User's credentials as community admin
     * @enum {string} moderator, editor, administrator, creator
     */
    type GroupsRoleOptions = "moderator" | "editor" | "administrator" | "creator";
    type GroupsSettingsTwitter = {
        /**
         *
         * @enum {string} loading, sync
         */
        status: "loading" | "sync";
        name?: string;
    };
    type GroupsSubjectItem = {
        /**
         * Subject ID
         */
        id: number;
        /**
         * Subject title
         */
        name: string;
    };
    type GroupsTokenPermissionSetting = {
        name: string;
        setting: number;
    };
    type GroupsUserXtrRole = Objects.UsersUserFull & {
        role?: Objects.GroupsRoleOptions;
    };
    type LeadsChecked = {
        /**
         * Reason why user can't start the lead
         */
        reason?: string;
        result?: Objects.LeadsCheckedResult;
        /**
         * Session ID
         */
        sid?: string;
        /**
         * URL user should open to start the lead
         * @format uri
         */
        start_link?: string | URL;
    };
    /**
     * Information whether user can start the lead
     * @enum {string} true, false
     */
    type LeadsCheckedResult = "true" | "false";
    type LeadsComplete = {
        /**
         * Offer cost
         */
        cost?: number;
        /**
         * Offer limit
         */
        limit?: number;
        /**
         * Amount of spent votes
         */
        spent?: number;
        success?: Objects.BaseOkResponse;
        /**
         * Information whether test mode is enabled
         */
        test_mode?: Objects.BaseBoolInt;
    };
    type LeadsEntry = {
        /**
         * Application ID
         */
        aid?: number;
        /**
         * Comment text
         */
        comment?: string;
        /**
         * Date when the action has been started in Unixtime
         */
        date?: number;
        /**
         * Session string ID
         */
        sid?: string;
        /**
         * Start date in Unixtime (for status=2)
         */
        start_date?: number;
        /**
         * Action type
         */
        status?: number;
        /**
         * Information whether test mode is enabled
         */
        test_mode?: Objects.BaseBoolInt;
        /**
         * User ID
         */
        uid?: number;
    };
    type LeadsLead = {
        /**
         * Completed offers number
         */
        completed?: number;
        /**
         * Offer cost
         */
        cost?: number;
        days?: Objects.LeadsLeadDays;
        /**
         * Impressions number
         */
        impressions?: number;
        /**
         * Lead limit
         */
        limit?: number;
        /**
         * Amount of spent votes
         */
        spent?: number;
        /**
         * Started offers number
         */
        started?: number;
    };
    type LeadsLeadDays = {
        /**
         * Completed offers number
         */
        completed?: number;
        /**
         * Impressions number
         */
        impressions?: number;
        /**
         * Amount of spent votes
         */
        spent?: number;
        /**
         * Started offers number
         */
        started?: number;
    };
    type LeadsStart = {
        /**
         * Information whether test mode is enabled
         */
        test_mode?: Objects.BaseBoolInt;
        /**
         * Session data
         */
        vk_sid?: string;
    };
    /**
     *
     * @enum {string} post, comment, photo, audio, video, note, market, photo_comment, video_comment, topic_comment, market_comment, sitepage
     */
    type LikesType = "post" | "comment" | "photo" | "audio" | "video" | "note" | "market" | "photo_comment" | "video_comment" | "topic_comment" | "market_comment" | "sitepage";
    type LinkTargetObject = {
        /**
         * Object type
         */
        type?: string;
        /**
         * Owner ID
         */
        owner_id?: number;
        /**
         * Item ID
         */
        item_id?: number;
    };
    type MarketCurrency = {
        /**
         * Currency ID
         */
        id: number;
        /**
         * Currency sign
         */
        name: string;
    };
    type MarketMarketAlbum = {
        /**
         * Items number
         */
        count: number;
        /**
         * Market album ID
         * @minimum 1
         */
        id: number;
        /**
         * Market album owner's ID
         */
        owner_id: number;
        photo?: Objects.PhotosPhoto;
        /**
         * Market album title
         */
        title: string;
        /**
         * Date when album has been updated last time in Unixtime
         */
        updated_time: number;
    };
    type MarketMarketCategory = {
        /**
         * Category ID
         */
        id: number;
        /**
         * Category name
         */
        name: string;
        section: Objects.MarketSection;
    };
    type MarketMarketItem = {
        /**
         * Access key for the market item
         */
        access_key?: string;
        availability: Objects.MarketMarketItemAvailability;
        /**
         * Title for button for url
         */
        button_title?: string;
        category: Objects.MarketMarketCategory;
        /**
         * Date when the item has been created in Unixtime
         */
        date?: number;
        /**
         * Item description
         */
        description: string;
        external_id?: string;
        /**
         * Item ID
         */
        id: number;
        is_favorite?: boolean;
        /**
         * Item owner's ID
         */
        owner_id: number;
        price: Objects.MarketPrice;
        /**
         * URL of the preview image
         * @format uri
         */
        thumb_photo: string | URL;
        /**
         * Item title
         */
        title: string;
        /**
         * URL to item
         * @format uri
         */
        url?: string | URL;
        variants_grouping_id?: number;
        is_main_variant?: boolean;
    };
    /**
     * Information whether the item is available
     */
    type MarketMarketItemAvailability = number;
    type MarketMarketItemFull = Objects.MarketMarketItem & {
        albums_ids?: number[];
        photos?: Objects.PhotosPhoto[];
        /**
         * Information whether current use can comment the item
         */
        can_comment?: Objects.BaseBoolInt;
        /**
         * Information whether current use can repost the item
         */
        can_repost?: Objects.BaseBoolInt;
        likes?: Objects.BaseLikes;
        reposts?: Objects.BaseRepostsInfo;
        /**
         * Views number
         */
        views_count?: number;
    };
    type MarketPrice = {
        /**
         * Amount
         */
        amount?: string;
        currency?: Objects.MarketCurrency;
        discount_rate?: number;
        old_amount?: string;
        /**
         * Text
         */
        text?: string;
    };
    type MarketSection = {
        /**
         * Section ID
         */
        id: number;
        /**
         * Section name
         */
        name: string;
    };
    /**
     * Media restrictions
     */
    type MediaRestriction = {
        text?: string;
        title: string;
        button?: Objects.VideoRestrictionButton;
        /**
         * Need show restriction always or not
         */
        always_shown?: Objects.BaseBoolInt;
        /**
         * Need blur current video or not
         */
        blur?: Objects.BaseBoolInt;
        /**
         * Can play video or not
         */
        can_play?: Objects.BaseBoolInt;
        /**
         * Can preview video or not
         */
        can_preview?: Objects.BaseBoolInt;
        card_icon?: Objects.BaseImage[];
        list_icon?: Objects.BaseImage[];
    };
    type MessageChatPreview = {
        admin_id?: number;
        joined?: boolean;
        local_id?: number;
        members?: number[];
        members_count?: number;
        title?: string;
    };
    type MessagesAudioMessage = {
        /**
         * Access key for audio message
         */
        access_key?: string;
        /**
         * Audio message duration in seconds
         */
        duration: number;
        /**
         * Audio message ID
         */
        id: number;
        /**
         * MP3 file URL
         * @format uri
         */
        link_mp3: string | URL;
        /**
         * OGG file URL
         * @format uri
         */
        link_ogg: string | URL;
        /**
         * Audio message owner ID
         */
        owner_id: number;
        waveform: number[];
    };
    type MessagesChat = {
        /**
         * Chat creator ID
         */
        admin_id: number;
        /**
         * Chat ID
         */
        id: number;
        /**
         * Shows that user has been kicked from the chat
         */
        kicked?: Objects.BaseBoolInt;
        /**
         * Shows that user has been left the chat
         */
        left?: Objects.BaseBoolInt;
        /**
         * URL of the preview image with 100 px in width
         * @format uri
         */
        photo_100?: string | URL;
        /**
         * URL of the preview image with 200 px in width
         * @format uri
         */
        photo_200?: string | URL;
        /**
         * URL of the preview image with 50 px in width
         * @format uri
         */
        photo_50?: string | URL;
        push_settings?: Objects.MessagesChatPushSettings;
        /**
         * Chat title
         */
        title?: string;
        /**
         * Chat type
         */
        type: string;
        users: number[];
        /**
         * If provided photo is default
         */
        is_default_photo?: boolean;
    };
    type MessagesChatFull = {
        /**
         * Chat creator ID
         */
        admin_id: number;
        /**
         * Chat ID
         */
        id: number;
        /**
         * Shows that user has been kicked from the chat
         */
        kicked?: Objects.BaseBoolInt;
        /**
         * Shows that user has been left the chat
         */
        left?: Objects.BaseBoolInt;
        /**
         * URL of the preview image with 100 px in width
         * @format uri
         */
        photo_100?: string | URL;
        /**
         * URL of the preview image with 200 px in width
         * @format uri
         */
        photo_200?: string | URL;
        /**
         * URL of the preview image with 50 px in width
         * @format uri
         */
        photo_50?: string | URL;
        push_settings?: Objects.MessagesChatPushSettings;
        /**
         * Chat title
         */
        title?: string;
        /**
         * Chat type
         */
        type: string;
        users: Objects.MessagesUserXtrInvitedBy[];
    };
    type MessagesChatPushSettings = {
        /**
         * Time until that notifications are disabled
         */
        disabled_until?: number;
        /**
         * Information whether the sound is on
         */
        sound?: Objects.BaseBoolInt;
    };
    type MessagesChatRestrictions = {
        /**
         * Only admins can promote users to admins
         */
        admins_promote_users?: boolean;
        /**
         * Only admins can change chat info
         */
        only_admins_edit_info?: boolean;
        /**
         * Only admins can edit pinned message
         */
        only_admins_edit_pin?: boolean;
        /**
         * Only admins can invite users to this chat
         */
        only_admins_invite?: boolean;
        /**
         * Only admins can kick users from this chat
         */
        only_admins_kick?: boolean;
    };
    type MessagesConversation = {
        peer: Objects.MessagesConversationPeer;
        /**
         * ID of the last message in conversation
         */
        last_message_id: number;
        /**
         * Last message user have read
         */
        in_read: number;
        /**
         * Last outcoming message have been read by the opponent
         */
        out_read: number;
        /**
         * Unread messages number
         */
        unread_count?: number;
        important?: boolean;
        unanswered?: boolean;
        /**
         *
         * @enum {string} business_notify
         */
        special_service_type?: "business_notify";
        message_request_data?: Objects.MessagesMessageRequestData;
        /**
         * Ids of messages with mentions
         */
        mentions?: number[];
        current_keyboard?: Objects.MessagesKeyboard;
    };
    type MessagesConversationMember = {
        /**
         * Is it possible for user to kick this member
         */
        can_kick?: boolean;
        invited_by?: number;
        is_admin?: boolean;
        is_owner?: boolean;
        is_message_request?: boolean;
        join_date?: number;
        /**
         * Message request date
         */
        request_date?: number;
        member_id: number;
    };
    type MessagesConversationPeer = {
        id: number;
        local_id?: number;
        type: Objects.MessagesConversationPeerType;
    };
    /**
     * Peer type
     * @enum {string} chat, email, user, group
     */
    type MessagesConversationPeerType = "chat" | "email" | "user" | "group";
    type MessagesConversationWithMessage = {
        conversation?: Objects.MessagesConversation;
        last_message?: Objects.MessagesMessage;
    };
    type MessagesForeignMessage = {
        attachments?: Objects.MessagesMessageAttachment[];
        /**
         * Conversation message ID
         */
        conversation_message_id?: number;
        /**
         * Date when the message was created
         */
        date: number;
        /**
         * Message author's ID
         */
        from_id: number;
        fwd_messages?: Objects.MessagesForeignMessage[];
        geo?: Objects.BaseGeo;
        /**
         * Message ID
         */
        id?: number;
        /**
         * Peer ID
         */
        peer_id?: number;
        reply_message?: Objects.MessagesForeignMessage;
        /**
         * Message text
         */
        text: string;
        /**
         * Date when the message has been updated in Unixtime
         */
        update_time?: number;
        /**
         * Was the audio message inside already listened by you
         */
        was_listened?: boolean;
        /**
         * Additional data sent along with message for developer convenience
         */
        payload?: string;
    };
    type MessagesGraffiti = {
        /**
         * Access key for graffiti
         */
        access_key?: string;
        /**
         * Graffiti height
         */
        height: number;
        /**
         * Graffiti ID
         */
        id: number;
        /**
         * Graffiti owner ID
         */
        owner_id: number;
        /**
         * Graffiti URL
         * @format uri
         */
        url: string | URL;
        /**
         * Graffiti width
         */
        width: number;
    };
    type MessagesHistoryAttachment = {
        attachment: Objects.MessagesHistoryMessageAttachment;
        /**
         * Message ID
         */
        message_id: number;
        /**
         * Message author's ID
         */
        from_id: number;
    };
    type MessagesHistoryMessageAttachment = {
        audio?: Objects.AudioAudio;
        audio_message?: Objects.MessagesAudioMessage;
        doc?: Objects.DocsDoc;
        graffiti?: Objects.MessagesGraffiti;
        link?: Objects.BaseLink;
        market?: Objects.BaseLink;
        photo?: Objects.PhotosPhoto;
        share?: Objects.BaseLink;
        type: Objects.MessagesHistoryMessageAttachmentType;
        video?: Objects.VideoVideo;
        wall?: Objects.BaseLink;
    };
    /**
     * Attachments type
     * @enum {string} photo, video, audio, doc, link, market, wall, share, graffiti, audio_message
     */
    type MessagesHistoryMessageAttachmentType = "photo" | "video" | "audio" | "doc" | "link" | "market" | "wall" | "share" | "graffiti" | "audio_message";
    type MessagesKeyboard = {
        /**
         * Community or bot, which set this keyboard
         */
        author_id?: number;
        buttons: Objects.MessagesKeyboardButton[][];
        /**
         * Should this keyboard disappear on first use
         */
        one_time: boolean;
        inline?: boolean;
    };
    type MessagesKeyboardButton = {
        action: Objects.MessagesKeyboardButtonAction;
        /**
         * Button color
         * @enum {string} default, positive, negative, primary
         */
        color?: "default" | "positive" | "negative" | "primary";
    };
    /**
     * Description of the action, that should be performed on button click
     */
    type MessagesKeyboardButtonAction = {
        /**
         * Fragment value in app link like vk.com/app{app_id}_-654321#hash
         */
        app_id?: number;
        /**
         * Fragment value in app link like vk.com/app123456_-654321#{hash}
         */
        hash?: string;
        /**
         * Label for button
         */
        label?: string;
        /**
         * link for button
         */
        link?: string;
        /**
         * Fragment value in app link like vk.com/app123456_{owner_id}#hash
         */
        owner_id?: number;
        /**
         * Additional data sent along with message for developer convenience
         */
        payload?: string;
        /**
         * Button type
         */
        type: Objects.MessagesTemplateActionTypeNames;
    };
    type MessagesLastActivity = {
        /**
         * Information whether user is online
         */
        online: Objects.BaseBoolInt;
        /**
         * Time when user was online in Unixtime
         */
        time: number;
    };
    type MessagesLongpollMessages = {
        /**
         * Total number
         */
        count?: number;
        items?: Objects.MessagesMessage[];
    };
    type MessagesLongpollParams = {
        /**
         * Key
         */
        key?: string;
        /**
         * Persistent timestamp
         */
        pts?: number;
        /**
         * Server URL
         */
        server?: string;
        /**
         * Timestamp
         */
        ts?: string;
    };
    type MessagesMessage = {
        action?: Objects.MessagesMessageAction;
        /**
         * Only for messages from community. Contains user ID of community admin, who sent this message.
         */
        admin_author_id?: number;
        attachments?: Objects.MessagesMessageAttachment[];
        /**
         * Unique auto-incremented number for all messages with this peer
         */
        conversation_message_id?: number;
        /**
         * Date when the message has been sent in Unixtime
         */
        date: number;
        /**
         * Is it an deleted message
         */
        deleted?: Objects.BaseBoolInt;
        /**
         * Message author's ID
         */
        from_id: number;
        /**
         * Forwarded messages
         */
        fwd_messages?: Objects.MessagesForeignMessage[];
        geo?: Objects.BaseGeo;
        /**
         * Message ID
         */
        id: number;
        /**
         * Is it an important message
         */
        important?: boolean;
        is_hidden?: boolean;
        /**
         * this message is cropped for bot
         */
        is_cropped?: boolean;
        keyboard?: Objects.MessagesKeyboard;
        /**
         * Members number
         */
        members_count?: number;
        /**
         * Information whether the message is outcoming
         */
        out: Objects.BaseBoolInt;
        payload?: string;
        /**
         * Peer ID
         */
        peer_id: number;
        /**
         * ID used for sending messages. It returned only for outgoing messages
         */
        random_id?: number;
        ref?: string;
        ref_source?: string;
        reply_message?: Objects.MessagesForeignMessage;
        /**
         * Message text
         */
        text: string;
        /**
         * Date when the message has been updated in Unixtime
         */
        update_time?: number;
        /**
         * Was the audio message inside already listened by you
         */
        was_listened?: boolean;
    };
    type MessagesMessageAction = {
        /**
         * Message ID
         */
        conversation_message_id?: number;
        /**
         * Email address for chat_invite_user or chat_kick_user actions
         */
        email?: string;
        /**
         * User or email peer ID
         */
        member_id?: number;
        /**
         * Message body of related message
         */
        message?: string;
        photo?: Objects.MessagesMessageActionPhoto;
        /**
         * New chat title for chat_create and chat_title_update actions
         */
        text?: string;
        type: Objects.MessagesMessageActionStatus;
    };
    type MessagesMessageActionPhoto = {
        /**
         * URL of the preview image with 100px in width
         * @format uri
         */
        photo_100: string | URL;
        /**
         * URL of the preview image with 200px in width
         * @format uri
         */
        photo_200: string | URL;
        /**
         * URL of the preview image with 50px in width
         * @format uri
         */
        photo_50: string | URL;
    };
    /**
     * Action status
     * @enum {string} chat_photo_update, chat_photo_remove, chat_create, chat_title_update, chat_invite_user, chat_kick_user, chat_pin_message, chat_unpin_message, chat_invite_user_by_link
     */
    type MessagesMessageActionStatus = "chat_photo_update" | "chat_photo_remove" | "chat_create" | "chat_title_update" | "chat_invite_user" | "chat_kick_user" | "chat_pin_message" | "chat_unpin_message" | "chat_invite_user_by_link";
    type MessagesMessageAttachment = {
        audio?: Objects.AudioAudio;
        audio_message?: Objects.MessagesAudioMessage;
        doc?: Objects.DocsDoc;
        gift?: Objects.GiftsLayout;
        graffiti?: Objects.MessagesGraffiti;
        link?: Objects.BaseLink;
        market?: Objects.MarketMarketItem;
        market_market_album?: Objects.MarketMarketAlbum;
        photo?: Objects.PhotosPhoto;
        sticker?: Objects.BaseSticker;
        story?: Objects.StoriesStory;
        type: Objects.MessagesMessageAttachmentType;
        video?: Objects.VideoVideo;
        wall?: Objects.WallWallpostFull;
        wall_reply?: Objects.WallWallComment;
    };
    /**
     * Attachment type
     * @enum {string} photo, audio, video, doc, link, market, market_album, gift, sticker, wall, wall_reply, article, graffiti, audio_message
     */
    type MessagesMessageAttachmentType = "photo" | "audio" | "video" | "doc" | "link" | "market" | "market_album" | "gift" | "sticker" | "wall" | "wall_reply" | "article" | "graffiti" | "audio_message";
    type MessagesMessageRequestData = {
        /**
         * Status of message request
         */
        status?: string;
        /**
         * Message request sender id
         */
        inviter_id?: number;
        /**
         * Message request date
         */
        request_date?: number;
    };
    type MessagesPinnedMessage = {
        attachments?: Objects.MessagesMessageAttachment[];
        /**
         * Unique auto-incremented number for all messages with this peer
         */
        conversation_message_id?: number;
        /**
         * Date when the message has been sent in Unixtime
         */
        date: number;
        /**
         * Message author's ID
         */
        from_id: number;
        /**
         * Forwarded messages
         */
        fwd_messages?: Objects.MessagesForeignMessage[];
        geo?: Objects.BaseGeo;
        /**
         * Message ID
         */
        id: number;
        /**
         * Peer ID
         */
        peer_id: number;
        reply_message?: Objects.MessagesForeignMessage;
        /**
         * Message text
         */
        text: string;
        keyboard?: Objects.MessagesKeyboard;
    };
    /**
     * Template action type names
     * @enum {string} text, start, location, vkpay, open_app, open_photo, open_link
     */
    type MessagesTemplateActionTypeNames = "text" | "start" | "location" | "vkpay" | "open_app" | "open_photo" | "open_link";
    type MessagesUserXtrInvitedBy = Objects.UsersUserXtrType & {
        /**
         * ID of the inviter
         */
        invited_by?: number;
    };
    /**
     *
     * @enum {string} post, photo, video, topic, note
     */
    type NewsfeedCommentsFilters = "post" | "photo" | "video" | "topic" | "note";
    type NewsfeedEventActivity = {
        /**
         * address of event
         */
        address?: string;
        /**
         * text of attach
         */
        button_text: string;
        /**
         * array of friends ids
         */
        friends: number[];
        /**
         * Current user's member status
         */
        member_status: Objects.GroupsGroupFullMemberStatus;
        /**
         * text of attach
         */
        text: string;
        /**
         * event start time
         */
        time?: number;
    };
    /**
     *
     * @enum {string} post, photo, photo_tag, wall_photo, friend, note, audio, video
     */
    type NewsfeedFilters = "post" | "photo" | "photo_tag" | "wall_photo" | "friend" | "note" | "audio" | "video";
    /**
     *
     * @enum {string} wall, tag, profilephoto, video, photo, audio
     */
    type NewsfeedIgnoreItemType = "wall" | "tag" | "profilephoto" | "video" | "photo" | "audio";
    type NewsfeedItemAudio = Objects.NewsfeedItemBase & {
        audio?: Objects.NewsfeedItemAudioAudio;
        /**
         * Post ID
         */
        post_id?: number;
    };
    type NewsfeedItemAudioAudio = {
        /**
         * Audios number
         */
        count?: number;
        items?: Objects.AudioAudio[];
    };
    type NewsfeedItemBase = {
        type: Objects.NewsfeedNewsfeedItemType;
        /**
         * Item source ID
         */
        source_id: number;
        /**
         * Date when item has been added in Unixtime
         */
        date: number;
    };
    type NewsfeedItemDigest = Objects.NewsfeedItemBase & {
        button_text?: string;
        /**
         * id of feed in digest
         */
        feed_id?: string;
        items?: Objects.WallWallpost[];
        main_post_ids?: string[];
        /**
         * type of digest
         * @enum {string} list, grid
         */
        template?: "list" | "grid";
        title?: string;
        track_code?: string;
    };
    type NewsfeedItemFriend = Objects.NewsfeedItemBase & {
        friends?: Objects.NewsfeedItemFriendFriends;
    };
    type NewsfeedItemFriendFriends = {
        /**
         * Number of friends has been added
         */
        count?: number;
        items?: Objects.BaseUserId[];
    };
    type NewsfeedItemHolidayRecommendationsBlockHeader = {
        /**
         * Title of the header
         */
        title?: string;
        /**
         * Subtitle of the header
         */
        subtitle?: string;
        image?: Objects.BaseImage[];
        action?: Objects.BaseLinkButtonAction;
    };
    type NewsfeedItemNote = Objects.NewsfeedItemBase & {
        notes?: Objects.NewsfeedItemNoteNotes;
    };
    type NewsfeedItemNoteNotes = {
        /**
         * Notes number
         */
        count?: number;
        items?: Objects.NewsfeedNewsfeedNote[];
    };
    type NewsfeedItemPhoto = Objects.NewsfeedItemBase & {
        photos?: Objects.NewsfeedItemPhotoPhotos;
        /**
         * Post ID
         */
        post_id?: number;
    };
    type NewsfeedItemPhotoPhotos = {
        /**
         * Photos number
         */
        count?: number;
        items?: Objects.NewsfeedNewsfeedPhoto[];
    };
    type NewsfeedItemPhotoTag = Objects.NewsfeedItemBase & {
        photo_tags?: Objects.NewsfeedItemPhotoTagPhotoTags;
        /**
         * Post ID
         */
        post_id?: number;
    };
    type NewsfeedItemPhotoTagPhotoTags = {
        /**
         * Tags number
         */
        count?: number;
        items?: Objects.NewsfeedNewsfeedPhoto[];
    };
    type NewsfeedItemPromoButton = Objects.NewsfeedItemBase & {
        text?: string;
        title?: string;
        action?: Objects.NewsfeedItemPromoButtonAction;
        images?: Objects.NewsfeedItemPromoButtonImage[];
        track_code?: string;
    };
    type NewsfeedItemPromoButtonAction = {
        url?: string;
        type?: string;
        target?: string;
    };
    type NewsfeedItemPromoButtonImage = {
        width?: number;
        height?: number;
        url?: string;
    };
    type NewsfeedItemTopic = Objects.NewsfeedItemBase & {
        comments?: Objects.BaseCommentsInfo;
        likes?: Objects.BaseLikesInfo;
        /**
         * Topic post ID
         */
        post_id: number;
        /**
         * Post text
         */
        text: string;
    };
    type NewsfeedItemVideo = Objects.NewsfeedItemBase & {
        video?: Objects.NewsfeedItemVideoVideo;
    };
    type NewsfeedItemVideoVideo = {
        /**
         * Tags number
         */
        count?: number;
        items?: Objects.VideoVideo[];
    };
    type NewsfeedItemWallpost = Objects.NewsfeedItemBase & {
        activity?: Objects.NewsfeedEventActivity;
        attachments?: Objects.WallWallpostAttachment[];
        comments?: Objects.BaseCommentsInfo;
        copy_history?: Objects.WallWallpost[];
        feedback?: Objects.NewsfeedItemWallpostFeedback;
        geo?: Objects.BaseGeo;
        /**
         * Information whether the post in favorites list
         */
        is_favorite?: boolean;
        likes?: Objects.BaseLikesInfo;
        /**
         * Information whether the post is marked as ads
         */
        marked_as_ads?: Objects.BaseBoolInt;
        /**
         * Post ID
         */
        post_id?: number;
        post_source?: Objects.WallPostSource;
        post_type?: Objects.NewsfeedItemWallpostType;
        reposts?: Objects.BaseRepostsInfo;
        /**
         * Post signer ID
         */
        signer_id?: number;
        /**
         * Post text
         */
        text?: string;
        /**
         * Count of views
         */
        views?: Objects.WallViews;
    };
    type NewsfeedItemWallpostFeedback = {
        type: Objects.NewsfeedItemWallpostFeedbackType;
        question: string;
        answers?: Objects.NewsfeedItemWallpostFeedbackAnswer[];
        /**
         *
         * @maximum 5
         * @minimum 2
         */
        stars_count?: number;
        gratitude?: string;
    };
    type NewsfeedItemWallpostFeedbackAnswer = {
        title: string;
        id: string;
    };
    /**
     *
     * @enum {string} buttons, stars
     */
    type NewsfeedItemWallpostFeedbackType = "buttons" | "stars";
    /**
     * Post type
     * @enum {string} post, copy, reply
     */
    type NewsfeedItemWallpostType = "post" | "copy" | "reply";
    type NewsfeedList = {
        /**
         * List ID
         */
        id: number;
        /**
         * List title
         */
        title: string;
    };
    type NewsfeedListFull = Objects.NewsfeedList & {
        /**
         * Information whether reposts hiding is enabled
         */
        no_reposts?: Objects.BaseBoolInt;
        source_ids?: number[];
    };
    type NewsfeedNewsfeedItem = Objects.NewsfeedItemWallpost | Objects.NewsfeedItemPhoto | Objects.NewsfeedItemPhotoTag | Objects.NewsfeedItemFriend | Objects.NewsfeedItemNote | Objects.NewsfeedItemAudio | Objects.NewsfeedItemVideo | Objects.NewsfeedItemTopic | Objects.NewsfeedItemDigest | Objects.NewsfeedItemPromoButton;
    /**
     * Item type
     * @enum {string} post, photo, photo_tag, wall_photo, friend, note, audio, video, topic, digest, stories
     */
    type NewsfeedNewsfeedItemType = "post" | "photo" | "photo_tag" | "wall_photo" | "friend" | "note" | "audio" | "video" | "topic" | "digest" | "stories";
    type NewsfeedNewsfeedNote = {
        /**
         * Comments Number
         */
        comments?: number;
        /**
         * Note ID
         */
        id?: number;
        /**
         * integer
         */
        owner_id?: number;
        /**
         * Note title
         */
        title?: string;
    };
    type NewsfeedNewsfeedPhoto = Objects.PhotosPhoto & {
        likes?: Objects.BaseLikes;
        comments?: Objects.BaseObjectCount;
        /**
         * Information whether current user can comment the photo
         */
        can_comment?: Objects.BaseBoolInt;
        /**
         * Information whether current user can repost the photo
         */
        can_repost?: Objects.BaseBoolInt;
    };
    type NotesNote = {
        read_comments?: number;
        /**
         * Information whether current user can comment the note
         */
        can_comment?: Objects.BaseBoolInt;
        /**
         * Comments number
         */
        comments: number;
        /**
         * Date when the note has been created in Unixtime
         */
        date: number;
        /**
         * Note ID
         * @minimum 1
         */
        id: number;
        /**
         * Note owner's ID
         * @minimum 1
         */
        owner_id: number;
        /**
         * Note text
         */
        text?: string;
        /**
         * Note text in wiki format
         */
        text_wiki?: string;
        /**
         * Note title
         */
        title: string;
        /**
         * URL of the page with note preview
         * @format uri
         */
        view_url: string | URL;
    };
    type NotesNoteComment = {
        /**
         * Date when the comment has beed added in Unixtime
         */
        date: number;
        /**
         * Comment ID
         */
        id: number;
        /**
         * Comment text
         */
        message: string;
        /**
         * Note ID
         */
        nid: number;
        /**
         * Note ID
         */
        oid: number;
        /**
         * ID of replied comment
         */
        reply_to?: number;
        /**
         * Comment author's ID
         */
        uid: number;
    };
    type NotificationsFeedback = {
        attachments?: Objects.WallWallpostAttachment[];
        /**
         * Reply author's ID
         */
        from_id?: number;
        geo?: Objects.BaseGeo;
        /**
         * Item ID
         */
        id?: number;
        likes?: Objects.BaseLikesInfo;
        /**
         * Reply text
         */
        text?: string;
        /**
         * Wall owner's ID
         */
        to_id?: number;
    };
    type NotificationsNotification = {
        /**
         * Date when the event has been occurred
         */
        date?: number;
        feedback?: Objects.NotificationsFeedback;
        parent?: Objects.NotificationsNotificationParent;
        reply?: Objects.NotificationsReply;
        /**
         * Notification type
         */
        type?: string;
    };
    type NotificationsNotificationItem = object;
    type NotificationsNotificationParent = Objects.WallWallpostToId & Objects.PhotosPhoto & Objects.BoardTopic & Objects.VideoVideo & Objects.NotificationsNotificationsComment;
    type NotificationsNotificationsComment = {
        /**
         * Date when the comment has been added in Unixtime
         */
        date?: number;
        /**
         * Comment ID
         * @minimum 1
         */
        id?: number;
        /**
         * Author ID
         */
        owner_id?: number;
        photo?: Objects.PhotosPhoto;
        post?: Objects.WallWallpost;
        /**
         * Comment text
         */
        text?: string;
        topic?: Objects.BoardTopic;
        video?: Objects.VideoVideo;
    };
    type NotificationsReply = {
        /**
         * Date when the reply has been created in Unixtime
         */
        date?: number;
        /**
         * Reply ID
         */
        id?: number;
        /**
         * Reply text
         */
        text?: number;
    };
    type NotificationsSendMessageError = {
        /**
         * Error code
         */
        code?: number;
        /**
         * Error description
         */
        description?: string;
    };
    type NotificationsSendMessageItem = {
        /**
         * User ID
         */
        user_id?: number;
        /**
         * Notification status
         */
        status?: boolean;
        error?: Objects.NotificationsSendMessageError;
    };
    type OauthError = {
        /**
         * Error type
         */
        error: string;
        /**
         * Error description
         */
        error_description: string;
        /**
         * URI for validation
         */
        redirect_uri?: string;
    };
    type OrdersAmount = {
        amounts?: Objects.OrdersAmountItem[];
        /**
         * Currency name
         */
        currency?: string;
    };
    type OrdersAmountItem = {
        /**
         * Votes amount in user's currency
         */
        amount?: number;
        /**
         * Amount description
         */
        description?: string;
        /**
         * Votes number
         */
        votes?: string;
    };
    type OrdersOrder = {
        /**
         * Amount
         */
        amount?: number;
        /**
         * App order ID
         */
        app_order_id?: number;
        /**
         * Cancel transaction ID
         */
        cancel_transaction_id?: number;
        /**
         * Date of creation in Unixtime
         */
        date?: number;
        /**
         * Order ID
         */
        id?: number;
        /**
         * Order item
         */
        item?: string;
        /**
         * Receiver ID
         */
        receiver_id?: number;
        /**
         * Order status
         */
        status?: string;
        /**
         * Transaction ID
         */
        transaction_id?: number;
        /**
         * User ID
         */
        user_id?: number;
    };
    type OrdersSubscription = {
        /**
         * Cancel reason
         */
        cancel_reason?: string;
        /**
         * Date of creation in Unixtime
         */
        create_time: number;
        /**
         * Subscription ID
         */
        id: number;
        /**
         * Subscription order item
         */
        item_id: string;
        /**
         * Date of next bill in Unixtime
         */
        next_bill_time?: number;
        /**
         * Pending cancel state
         */
        pending_cancel?: boolean;
        /**
         * Subscription period
         */
        period: number;
        /**
         * Date of last period start in Unixtime
         */
        period_start_time: number;
        /**
         * Subscription price
         */
        price: number;
        /**
         * Subscription status
         */
        status: string;
        /**
         * Is test subscription
         */
        test_mode?: boolean;
        /**
         * Date of trial expire in Unixtime
         */
        trial_expire_time?: number;
        /**
         * Date of last change in Unixtime
         */
        update_time: number;
    };
    type OwnerState = {
        state?: number;
        /**
         * wiki text to describe user state
         */
        description?: string;
    };
    type PagesPrivacySettings = number;
    type PagesWikipage = {
        /**
         * Page creator ID
         */
        creator_id?: number;
        /**
         * Page creator name
         */
        creator_name?: number;
        /**
         * Last editor ID
         */
        editor_id?: number;
        /**
         * Last editor name
         */
        editor_name?: string;
        /**
         * Community ID
         * @minimum 1
         */
        group_id: number;
        /**
         * Page ID
         * @minimum 1
         */
        id: number;
        /**
         * Page title
         */
        title: string;
        /**
         * Views number
         */
        views: number;
        /**
         * Edit settings of the page
         */
        who_can_edit: Objects.PagesPrivacySettings;
        /**
         * View settings of the page
         */
        who_can_view: Objects.PagesPrivacySettings;
    };
    type PagesWikipageFull = {
        /**
         * Date when the page has been created in Unixtime
         */
        created: number;
        /**
         * Page creator ID
         */
        creator_id?: number;
        /**
         * Information whether current user can edit the page
         */
        current_user_can_edit?: Objects.BaseBoolInt;
        /**
         * Information whether current user can edit the page access settings
         */
        current_user_can_edit_access?: Objects.BaseBoolInt;
        /**
         * Date when the page has been edited in Unixtime
         */
        edited: number;
        /**
         * Last editor ID
         */
        editor_id?: number;
        /**
         * Community ID
         * @minimum 1
         */
        group_id: number;
        /**
         * Page content, HTML
         */
        html?: string;
        /**
         * Page ID
         * @minimum 1
         */
        id: number;
        /**
         * Page content, wiki
         */
        source?: string;
        /**
         * Page title
         */
        title: string;
        /**
         * URL of the page preview
         * @format uri
         */
        view_url: string | URL;
        /**
         * Views number
         */
        views: number;
        /**
         * Edit settings of the page
         */
        who_can_edit: Objects.PagesPrivacySettings;
        /**
         * View settings of the page
         */
        who_can_view: Objects.PagesPrivacySettings;
    };
    type PagesWikipageHistory = {
        /**
         * Version ID
         */
        id: number;
        /**
         * Page size in bytes
         */
        length: number;
        /**
         * Date when the page has been edited in Unixtime
         */
        date: number;
        /**
         * Last editor ID
         */
        editor_id: number;
        /**
         * Last editor name
         */
        editor_name: string;
    };
    type PhotosCommentXtrPid = {
        attachments?: Objects.WallCommentAttachment[];
        /**
         * Date when the comment has been added in Unixtime
         */
        date: number;
        /**
         * Author ID
         */
        from_id: number;
        /**
         * Comment ID
         * @minimum 1
         */
        id: number;
        likes?: Objects.BaseLikesInfo;
        /**
         * Photo ID
         * @minimum 1
         */
        pid: number;
        /**
         * Replied comment ID
         */
        reply_to_comment?: number;
        /**
         * Replied user ID
         */
        reply_to_user?: number;
        /**
         * Comment text
         */
        text: string;
        parents_stack?: number[];
        thread?: Objects.CommentThread;
    };
    type PhotosImage = {
        /**
         * Height of the photo in px.
         */
        height?: number;
        type?: Objects.PhotosImageType;
        /**
         * Photo URL.
         * @format uri
         */
        url?: string | URL;
        /**
         * Width of the photo in px.
         */
        width?: number;
    };
    /**
     * Photo's type.
     * @enum {string} s, m, x, l, o, p, q, r, y, z, w
     */
    type PhotosImageType = "s" | "m" | "x" | "l" | "o" | "p" | "q" | "r" | "y" | "z" | "w";
    type PhotosMarketAlbumUploadResponse = {
        /**
         * Community ID
         */
        gid?: number;
        /**
         * Uploading hash
         */
        hash?: string;
        /**
         * Uploaded photo data
         */
        photo?: string;
        /**
         * Upload server number
         */
        server?: number;
    };
    type PhotosMarketUploadResponse = {
        /**
         * Crop data
         */
        crop_data?: string;
        /**
         * Crop hash
         */
        crop_hash?: string;
        /**
         * Community ID
         */
        group_id?: number;
        /**
         * Uploading hash
         */
        hash?: string;
        /**
         * Uploaded photo data
         */
        photo?: string;
        /**
         * Upload server number
         */
        server?: number;
    };
    type PhotosMessageUploadResponse = {
        /**
         * Uploading hash
         */
        hash?: string;
        /**
         * Uploaded photo data
         */
        photo?: string;
        /**
         * Upload server number
         */
        server?: number;
    };
    type PhotosOwnerUploadResponse = {
        /**
         * Uploading hash
         */
        hash?: string;
        /**
         * Uploaded photo data
         */
        photo?: string;
        /**
         * Upload server number
         */
        server?: number;
    };
    type PhotosPhoto = {
        /**
         * Access key for the photo
         */
        access_key?: string;
        /**
         * Album ID
         */
        album_id: number;
        /**
         * Date when uploaded
         */
        date: number;
        /**
         * Original photo height
         */
        height?: number;
        /**
         * Photo ID
         */
        id: number;
        images?: Objects.PhotosImage[];
        /**
         * Latitude
         */
        lat?: number;
        /**
         * Longitude
         */
        long?: number;
        /**
         * Photo owner's ID
         */
        owner_id: number;
        /**
         * Post ID
         * @minimum 1
         */
        post_id?: number;
        sizes?: Objects.PhotosPhotoSizes[];
        /**
         * Photo caption
         */
        text?: string;
        /**
         * ID of the user who have uploaded the photo
         * @minimum 1
         */
        user_id?: number;
        /**
         * Original photo width
         */
        width?: number;
        /**
         * Whether photo has attached tag links
         */
        has_tags?: boolean;
    };
    type PhotosPhotoAlbum = {
        /**
         * Date when the album has been created in Unixtime
         */
        created: number;
        /**
         * Photo album description
         */
        description?: string;
        /**
         * Photo album ID
         */
        id: number;
        /**
         * Album owner's ID
         */
        owner_id: number;
        /**
         * Photos number
         */
        size: number;
        thumb?: Objects.PhotosPhoto;
        /**
         * Photo album title
         */
        title: string;
        /**
         * Date when the album has been updated last time in Unixtime
         */
        updated: number;
    };
    type PhotosPhotoAlbumFull = {
        /**
         * Information whether current user can upload photo to the album
         */
        can_upload?: Objects.BaseBoolInt;
        /**
         * Information whether album comments are disabled
         */
        comments_disabled?: Objects.BaseBoolInt;
        /**
         * Date when the album has been created in Unixtime
         */
        created: number;
        /**
         * Photo album description
         */
        description?: string;
        /**
         * Photo album ID
         */
        id: number;
        /**
         * Album owner's ID
         */
        owner_id: number;
        /**
         * Photos number
         */
        size: number;
        sizes?: Objects.PhotosPhotoSizes[];
        /**
         * Thumb photo ID
         */
        thumb_id?: number;
        /**
         * Information whether the album thumb is last photo
         */
        thumb_is_last?: Objects.BaseBoolInt;
        /**
         * URL of the thumb image
         * @format uri
         */
        thumb_src?: string | URL;
        /**
         * Photo album title
         */
        title: string;
        /**
         * Date when the album has been updated last time in Unixtime
         */
        updated: number;
        /**
         * Information whether only community administrators can upload photos
         */
        upload_by_admins_only?: Objects.BaseBoolInt;
    };
    type PhotosPhotoFull = {
        /**
         * Access key for the photo
         */
        access_key?: string;
        /**
         * Album ID
         */
        album_id: number;
        /**
         * Information whether current user can comment the photo
         */
        can_comment?: Objects.BaseBoolInt;
        comments?: Objects.BaseObjectCount;
        /**
         * Date when uploaded
         */
        date: number;
        /**
         * Original photo height
         */
        height?: number;
        /**
         * Photo ID
         */
        id: number;
        images?: Objects.PhotosImage[];
        /**
         * Latitude
         */
        lat?: number;
        likes?: Objects.BaseLikes;
        /**
         * Longitude
         */
        long?: number;
        /**
         * Photo owner's ID
         */
        owner_id: number;
        /**
         * Post ID
         * @minimum 1
         */
        post_id?: number;
        reposts?: Objects.BaseObjectCount;
        tags?: Objects.BaseObjectCount;
        /**
         * Photo caption
         */
        text?: string;
        /**
         * ID of the user who have uploaded the photo
         * @minimum 1
         */
        user_id?: number;
        /**
         * Original photo width
         */
        width?: number;
    };
    type PhotosPhotoFullXtrRealOffset = {
        /**
         * Access key for the photo
         */
        access_key?: string;
        /**
         * Album ID
         */
        album_id: number;
        can_comment?: Objects.BaseBoolInt;
        comments?: Objects.BaseObjectCount;
        /**
         * Date when uploaded
         */
        date: number;
        /**
         * Original photo height
         */
        height?: number;
        /**
         * Returns if the photo is hidden above the wall
         */
        hidden?: Objects.BasePropertyExists;
        /**
         * Photo ID
         */
        id: number;
        /**
         * Latitude
         */
        lat?: number;
        likes?: Objects.BaseLikes;
        /**
         * Longitude
         */
        long?: number;
        /**
         * Photo owner's ID
         */
        owner_id: number;
        /**
         * URL of image with 1280 px width
         * @format uri
         */
        photo_1280?: string | URL;
        /**
         * URL of image with 130 px width
         * @format uri
         */
        photo_130?: string | URL;
        /**
         * URL of image with 2560 px width
         * @format uri
         */
        photo_2560?: string | URL;
        /**
         * URL of image with 604 px width
         * @format uri
         */
        photo_604?: string | URL;
        /**
         * URL of image with 75 px width
         * @format uri
         */
        photo_75?: string | URL;
        /**
         * URL of image with 807 px width
         * @format uri
         */
        photo_807?: string | URL;
        /**
         * Post ID
         * @minimum 1
         */
        post_id?: number;
        /**
         * Real position of the photo
         */
        real_offset?: number;
        reposts?: Objects.BaseObjectCount;
        sizes?: Objects.PhotosPhotoSizes[];
        tags?: Objects.BaseObjectCount;
        /**
         * Photo caption
         */
        text?: string;
        /**
         * ID of the user who have uploaded the photo
         * @minimum 1
         */
        user_id?: number;
        /**
         * Original photo width
         */
        width?: number;
    };
    type PhotosPhotoSizes = {
        /**
         * Height in px
         */
        height: number;
        /**
         * URL of the image
         * @format uri
         */
        url: string | URL;
        type: Objects.PhotosPhotoSizesType;
        /**
         * Width in px
         */
        width: number;
    };
    /**
     * Size type
     * @enum {string} s, m, x, o, p, q, r, k, l, y, z, c, w
     */
    type PhotosPhotoSizesType = "s" | "m" | "x" | "o" | "p" | "q" | "r" | "k" | "l" | "y" | "z" | "c" | "w";
    type PhotosPhotoTag = {
        /**
         * Date when tag has been added in Unixtime
         */
        date: number;
        /**
         * Tag ID
         */
        id: number;
        /**
         * ID of the tag creator
         */
        placer_id: number;
        /**
         * Tag description
         */
        tagged_name: string;
        /**
         * Tagged user ID
         */
        user_id: number;
        /**
         * Information whether the tag is reviewed
         */
        viewed: Objects.BaseBoolInt;
        /**
         * Coordinate X of the left upper corner
         */
        x: number;
        /**
         * Coordinate X of the right lower corner
         */
        x2: number;
        /**
         * Coordinate Y of the left upper corner
         */
        y: number;
        /**
         * Coordinate Y of the right lower corner
         */
        y2: number;
    };
    type PhotosPhotoUpload = {
        /**
         * Album ID
         */
        album_id: number;
        /**
         * URL to upload photo
         * @format uri
         */
        upload_url: string | URL;
        /**
         * Fallback URL if upload_url returned error
         * @format uri
         */
        fallback_upload_url?: string | URL;
        /**
         * User ID
         */
        user_id: number;
        /**
         * Group ID
         */
        group_id?: number;
    };
    type PhotosPhotoUploadResponse = {
        /**
         * Album ID
         */
        aid?: number;
        /**
         * Uploading hash
         */
        hash?: string;
        /**
         * Uploaded photos data
         */
        photos_list?: string;
        /**
         * Upload server number
         */
        server?: number;
    };
    type PhotosPhotoXtrRealOffset = {
        /**
         * Access key for the photo
         */
        access_key?: string;
        /**
         * Album ID
         */
        album_id: number;
        /**
         * Date when uploaded
         */
        date: number;
        /**
         * Original photo height
         */
        height?: number;
        /**
         * Returns if the photo is hidden above the wall
         */
        hidden?: Objects.BasePropertyExists;
        /**
         * Photo ID
         */
        id: number;
        /**
         * Latitude
         */
        lat?: number;
        /**
         * Longitude
         */
        long?: number;
        /**
         * Photo owner's ID
         */
        owner_id: number;
        /**
         * URL of image with 1280 px width
         * @format uri
         */
        photo_1280?: string | URL;
        /**
         * URL of image with 130 px width
         * @format uri
         */
        photo_130?: string | URL;
        /**
         * URL of image with 2560 px width
         * @format uri
         */
        photo_2560?: string | URL;
        /**
         * URL of image with 604 px width
         * @format uri
         */
        photo_604?: string | URL;
        /**
         * URL of image with 75 px width
         * @format uri
         */
        photo_75?: string | URL;
        /**
         * URL of image with 807 px width
         * @format uri
         */
        photo_807?: string | URL;
        /**
         * Post ID
         * @minimum 1
         */
        post_id?: number;
        /**
         * Real position of the photo
         */
        real_offset?: number;
        sizes?: Objects.PhotosPhotoSizes[];
        /**
         * Photo caption
         */
        text?: string;
        /**
         * ID of the user who have uploaded the photo
         * @minimum 1
         */
        user_id?: number;
        /**
         * Original photo width
         */
        width?: number;
    };
    type PhotosPhotoXtrTagInfo = {
        /**
         * Access key for the photo
         */
        access_key?: string;
        /**
         * Album ID
         */
        album_id: number;
        /**
         * Date when uploaded
         */
        date: number;
        /**
         * Original photo height
         */
        height?: number;
        /**
         * Photo ID
         */
        id: number;
        /**
         * Latitude
         */
        lat?: number;
        /**
         * Longitude
         */
        long?: number;
        /**
         * Photo owner's ID
         */
        owner_id: number;
        /**
         * URL of image with 1280 px width
         * @format uri
         */
        photo_1280?: string | URL;
        /**
         * URL of image with 130 px width
         * @format uri
         */
        photo_130?: string | URL;
        /**
         * URL of image with 2560 px width
         * @format uri
         */
        photo_2560?: string | URL;
        /**
         * URL of image with 604 px width
         * @format uri
         */
        photo_604?: string | URL;
        /**
         * URL of image with 75 px width
         * @format uri
         */
        photo_75?: string | URL;
        /**
         * URL of image with 807 px width
         * @format uri
         */
        photo_807?: string | URL;
        /**
         * ID of the tag creator
         */
        placer_id?: number;
        /**
         * Post ID
         * @minimum 1
         */
        post_id?: number;
        sizes?: Objects.PhotosPhotoSizes[];
        /**
         * Date when tag has been added in Unixtime
         */
        tag_created?: number;
        /**
         * Tag ID
         */
        tag_id?: number;
        /**
         * Photo caption
         */
        text?: string;
        /**
         * ID of the user who have uploaded the photo
         * @minimum 1
         */
        user_id?: number;
        /**
         * Original photo width
         */
        width?: number;
    };
    type PhotosWallUploadResponse = {
        /**
         * Uploading hash
         */
        hash?: string;
        /**
         * Uploaded photo data
         */
        photo?: string;
        /**
         * Upload server number
         */
        server?: number;
    };
    type PollsAnswer = {
        /**
         * Answer ID
         */
        id: number;
        /**
         * Answer rate in percents
         */
        rate: number;
        /**
         * Answer text
         */
        text: string;
        /**
         * Votes number
         */
        votes: number;
    };
    type PollsPoll = {
        /**
         * Information whether the field is anonymous
         */
        anonymous: boolean;
        /**
         * Current user's answer ID
         */
        answer_id: number;
        answers: Objects.PollsAnswer[];
        /**
         * Date when poll has been created in Unixtime
         */
        created: number;
        /**
         * Poll ID
         * @minimum 1
         */
        id: number;
        /**
         * Poll owner's ID
         */
        owner_id: number;
        /**
         * Poll question
         */
        question: string;
        /**
         * Votes number
         */
        votes: string;
    };
    type PollsVoters = {
        /**
         * Answer ID
         */
        answer_id?: number;
        users?: Objects.PollsVotersUsers;
    };
    type PollsVotersUsers = {
        /**
         * Votes number
         */
        count?: number;
        items?: number[];
    };
    type PrettyCardsPrettyCard = {
        /**
         * Button key
         */
        button?: string;
        /**
         * Button text in current language
         */
        button_text?: string;
        /**
         * Card ID (long int returned as string)
         */
        card_id: string;
        images?: Objects.BaseImage[];
        /**
         * Link URL
         */
        link_url: string;
        /**
         * Photo ID (format "<owner_id>_<media_id>")
         */
        photo: string;
        /**
         * Price if set (decimal number returned as string)
         */
        price?: string;
        /**
         * Old price if set (decimal number returned as string)
         */
        price_old?: string;
        /**
         * Title
         */
        title: string;
    };
    type SearchHint = {
        app?: Objects.AppsApp;
        /**
         * Object description
         */
        description: string;
        /**
         * Information whether the object has been found globally
         */
        global?: Objects.BaseBoolInt;
        group?: Objects.GroupsGroup;
        profile?: Objects.UsersUserMin;
        section: Objects.SearchHintSection;
        type: Objects.SearchHintType;
    };
    /**
     * Section title
     * @enum {string} groups, events, publics, correspondents, people, friends, mutual_friends
     */
    type SearchHintSection = "groups" | "events" | "publics" | "correspondents" | "people" | "friends" | "mutual_friends";
    /**
     * Object type
     * @enum {string} group, profile, vk_app
     */
    type SearchHintType = "group" | "profile" | "vk_app";
    type SecureLevel = {
        /**
         * Level
         */
        level?: number;
        /**
         * User ID
         */
        uid?: number;
    };
    type SecureSmsNotification = {
        /**
         * Application ID
         */
        app_id?: string;
        /**
         * Date when message has been sent in Unixtime
         */
        date?: string;
        /**
         * Notification ID
         */
        id?: string;
        /**
         * Messsage text
         */
        message?: string;
        /**
         * User ID
         */
        user_id?: string;
    };
    type SecureTokenChecked = {
        /**
         * Date when access_token has been generated in Unixtime
         */
        date?: number;
        /**
         * Date when access_token will expire in Unixtime
         */
        expire?: number;
        /**
         * Returns if successfully processed
         */
        success?: Objects.BaseOkResponse;
        /**
         * User ID
         */
        user_id?: number;
    };
    type SecureTransaction = {
        /**
         * Transaction date in Unixtime
         */
        date?: number;
        /**
         * Transaction ID
         */
        id?: number;
        /**
         * From ID
         */
        uid_from?: number;
        /**
         * To ID
         */
        uid_to?: number;
        /**
         * Votes number
         */
        votes?: number;
    };
    /**
     * Activity stats
     */
    type StatsActivity = {
        /**
         * Comments number
         */
        comments?: number;
        /**
         * Reposts number
         */
        copies?: number;
        /**
         * Hidden from news count
         */
        hidden?: number;
        /**
         * Likes number
         */
        likes?: number;
        /**
         * New subscribers count
         */
        subscribed?: number;
        /**
         * Unsubscribed count
         */
        unsubscribed?: number;
    };
    type StatsCity = {
        /**
         * Visitors number
         */
        count?: number;
        /**
         * City name
         */
        name?: string;
        /**
         * City ID
         */
        value?: number;
    };
    type StatsCountry = {
        /**
         * Country code
         */
        code?: string;
        /**
         * Visitors number
         */
        count?: number;
        /**
         * Country name
         */
        name?: string;
        /**
         * Country ID
         */
        value?: number;
    };
    type StatsPeriod = {
        activity?: Objects.StatsActivity;
        /**
         * Unix timestamp
         */
        period_from?: number;
        /**
         * Unix timestamp
         */
        period_to?: number;
        reach?: Objects.StatsReach;
        visitors?: Objects.StatsViews;
    };
    /**
     * Reach stats
     */
    type StatsReach = {
        age?: Objects.StatsSexAge[];
        cities?: Objects.StatsCity[];
        countries?: Objects.StatsCountry[];
        /**
         * Reach count from mobile devices
         */
        mobile_reach?: number;
        /**
         * Reach count
         */
        reach?: number;
        /**
         * Subscribers reach count
         */
        reach_subscribers?: number;
        sex?: Objects.StatsSexAge[];
        sex_age?: Objects.StatsSexAge[];
    };
    type StatsSexAge = {
        /**
         * Visitors number
         */
        count?: number;
        /**
         * Sex/age value
         */
        value: string;
        reach?: number;
        reach_subscribers?: number;
        count_subscribers?: number;
    };
    /**
     * Views stats
     */
    type StatsViews = {
        age?: Objects.StatsSexAge[];
        cities?: Objects.StatsCity[];
        countries?: Objects.StatsCountry[];
        /**
         * Number of views from mobile devices
         */
        mobile_views?: number;
        sex?: Objects.StatsSexAge[];
        sex_age?: Objects.StatsSexAge[];
        /**
         * Views number
         */
        views?: number;
        /**
         * Visitors number
         */
        visitors?: number;
    };
    type StatsWallpostStat = {
        post_id?: number;
        /**
         * Hidings number
         */
        hide?: number;
        /**
         * People have joined the group
         */
        join_group?: number;
        /**
         * Link clickthrough
         */
        links?: number;
        /**
         * Subscribers reach
         */
        reach_subscribers?: number;
        reach_subscribers_count?: number;
        /**
         * Total reach
         */
        reach_total?: number;
        reach_total_count?: number;
        reach_viral?: number;
        reach_ads?: number;
        /**
         * Reports number
         */
        report?: number;
        /**
         * Clickthrough to community
         */
        to_group?: number;
        /**
         * Unsubscribed members
         */
        unsubscribe?: number;
        sex_age?: Objects.StatsSexAge[];
    };
    type StatusStatus = {
        audio?: Objects.AudioAudio;
        /**
         * Status text
         */
        text?: string;
    };
    type StorageValue = {
        key: string;
        value: string;
    };
    type StoriesClickableSticker = {
        clickable_area: Objects.StoriesClickableArea[];
        /**
         * Clickable sticker ID
         */
        id: number;
        hashtag?: string;
        link_object?: Objects.BaseLink;
        mention?: string;
        tooltip_text?: string;
        owner_id?: number;
        story_id?: number;
        question?: string;
        question_button?: string;
        place_id?: number;
        market_item?: Objects.MarketMarketItem;
        audio?: Objects.AudioAudio;
        audio_start_time?: number;
        /**
         *
         * @enum {string} transparent, blue_gradient, red_gradient, underline, blue, green, white, question_reply, light, impressive
         */
        style?: "transparent" | "blue_gradient" | "red_gradient" | "underline" | "blue" | "green" | "white" | "question_reply" | "light" | "impressive";
        /**
         *
         * @enum {string} hashtag, mention, link, question, place, market_item, music, story_reply, owner, post, poll, sticker, app
         */
        type: "hashtag" | "mention" | "link" | "question" | "place" | "market_item" | "music" | "story_reply" | "owner" | "post" | "poll" | "sticker" | "app";
        /**
         *
         * @enum {string} market_item, aliexpress_product
         */
        subtype?: "market_item" | "aliexpress_product";
        post_owner_id?: number;
        post_id?: number;
        poll?: Objects.PollsPoll;
        /**
         * Color, hex format
         */
        color?: string;
        /**
         * Sticker ID
         */
        sticker_id?: number;
        /**
         * Sticker pack ID
         */
        sticker_pack_id?: number;
        app?: Objects.AppsAppMin;
        /**
         * Additional context for app sticker
         */
        app_context?: string;
        /**
         * Whether current user has unread interaction with this app
         */
        has_new_interactions?: boolean;
        /**
         * Whether current user allowed broadcast notify from this app
         */
        is_broadcast_notify_allowed?: boolean;
    };
    type StoriesClickableStickers = {
        clickable_stickers: Objects.StoriesClickableSticker[];
        original_height: number;
        original_width: number;
    };
    type StoriesFeedItem = {
        /**
         * Type of Feed Item
         * @enum {string} promo_stories, stories, live_active, live_finished, community_grouped_stories, app_grouped_stories
         */
        type: "promo_stories" | "stories" | "live_active" | "live_finished" | "community_grouped_stories" | "app_grouped_stories";
        /**
         * Author stories
         */
        stories?: Objects.StoriesStory[];
        /**
         * Grouped stories of various authors (for types community_grouped_stories/app_grouped_stories type)
         */
        grouped?: Objects.StoriesFeedItem[];
        /**
         * App, which stories has been grouped (for type app_grouped_stories)
         */
        app?: Objects.AppsAppMin;
        /**
         * Additional data for promo stories (for type promo_stories)
         */
        promo_data?: Objects.StoriesPromoBlock;
    };
    /**
     * Additional data for promo stories
     */
    type StoriesPromoBlock = {
        /**
         * Promo story title
         */
        name: string;
        /**
         * RL of square photo of the story with 50 pixels in width
         */
        photo_50: string;
        /**
         * RL of square photo of the story with 100 pixels in width
         */
        photo_100: string;
        /**
         * Hide animation for promo story
         */
        not_animated: boolean;
    };
    type StoriesReplies = {
        /**
         * Replies number.
         */
        count: number;
        /**
         * New replies number.
         */
        new?: number;
    };
    type StoriesStatLine = {
        name: string;
        counter?: number;
        is_unavailable?: boolean;
    };
    type StoriesStory = {
        /**
         * Access key for private object.
         */
        access_key?: string;
        /**
         * Information whether current user can comment the story (0 - no, 1 - yes).
         */
        can_comment?: Objects.BaseBoolInt;
        /**
         * Information whether current user can reply to the story (0 - no, 1 - yes).
         */
        can_reply?: Objects.BaseBoolInt;
        /**
         * Information whether current user can see the story (0 - no, 1 - yes).
         */
        can_see?: Objects.BaseBoolInt;
        /**
         * Information whether current user can like the story.
         */
        can_like?: boolean;
        /**
         * Information whether current user can share the story (0 - no, 1 - yes).
         */
        can_share?: Objects.BaseBoolInt;
        /**
         * Information whether current user can hide the story (0 - no, 1 - yes).
         */
        can_hide?: Objects.BaseBoolInt;
        /**
         * Date when story has been added in Unixtime.
         */
        date?: number;
        /**
         * Story expiration time. Unixtime.
         */
        expires_at?: number;
        /**
         * Story ID.
         */
        id: number;
        /**
         * Information whether the story is deleted (false - no, true - yes).
         */
        is_deleted?: boolean;
        /**
         * Information whether the story is expired (false - no, true - yes).
         */
        is_expired?: boolean;
        link?: Objects.StoriesStoryLink;
        /**
         * Story owner's ID.
         */
        owner_id: number;
        parent_story?: Objects.StoriesStory;
        /**
         * Access key for private object.
         */
        parent_story_access_key?: string;
        /**
         * Parent story ID.
         */
        parent_story_id?: number;
        /**
         * Parent story owner's ID.
         */
        parent_story_owner_id?: number;
        photo?: Objects.PhotosPhoto;
        /**
         * Replies counters to current story.
         */
        replies?: Objects.StoriesReplies;
        /**
         * Information whether current user has seen the story or not (0 - no, 1 - yes).
         */
        seen?: Objects.BaseBoolInt;
        type?: Objects.StoriesStoryType;
        clickable_stickers?: Objects.StoriesClickableStickers;
        video?: Objects.VideoVideo;
        /**
         * Views number.
         */
        views?: number;
        /**
         * Information whether story has question sticker and current user can send question to the author
         */
        can_ask?: Objects.BaseBoolInt;
        /**
         * Information whether story has question sticker and current user can send anonymous question to the author
         */
        can_ask_anonymous?: Objects.BaseBoolInt;
        narratives_count?: number;
        first_narrative_title?: string;
    };
    type StoriesStoryLink = {
        /**
         * Link text
         */
        text: string;
        /**
         * Link URL
         * @format uri
         */
        url: string | URL;
    };
    type StoriesStoryStats = {
        answer: Objects.StoriesStoryStatsStat;
        bans: Objects.StoriesStoryStatsStat;
        open_link: Objects.StoriesStoryStatsStat;
        replies: Objects.StoriesStoryStatsStat;
        shares: Objects.StoriesStoryStatsStat;
        subscribers: Objects.StoriesStoryStatsStat;
        views: Objects.StoriesStoryStatsStat;
        likes: Objects.StoriesStoryStatsStat;
    };
    type StoriesStoryStatsStat = {
        /**
         * Stat value
         */
        count?: number;
        state: Objects.StoriesStoryStatsState;
    };
    /**
     * Statistic state
     * @enum {string} on, off, hidden
     */
    type StoriesStoryStatsState = "on" | "off" | "hidden";
    /**
     * Story type.
     * @enum {string} photo, video, live_active, live_finished
     */
    type StoriesStoryType = "photo" | "video" | "live_active" | "live_finished";
    /**
     *
     * @enum {string} to_store, vote, more, book, order, enroll, fill, signup, buy, ticket, write, open, learn_more, view, go_to, contact, watch, play, install, read, calendar
     */
    type StoriesUploadLinkText = "to_store" | "vote" | "more" | "book" | "order" | "enroll" | "fill" | "signup" | "buy" | "ticket" | "write" | "open" | "learn_more" | "view" | "go_to" | "contact" | "watch" | "play" | "install" | "read" | "calendar";
    type StoriesViewersItem = {
        /**
         * user has like for this object
         */
        is_liked: boolean;
        /**
         * user id
         */
        user_id: number;
        user?: Objects.UsersUserFull;
    };
    type UsersCareer = {
        /**
         * City ID
         */
        city_id?: number;
        /**
         * Company name
         */
        company?: string;
        /**
         * Country ID
         */
        country_id?: number;
        /**
         * From year
         */
        from?: number;
        /**
         * Community ID
         */
        group_id?: number;
        /**
         * Career ID
         */
        id?: number;
        /**
         * Position
         */
        position?: string;
        /**
         * Till year
         */
        until?: number;
    };
    type UsersCropPhoto = {
        crop?: Objects.UsersCropPhotoCrop;
        photo?: Objects.PhotosPhoto;
        rect?: Objects.UsersCropPhotoRect;
    };
    type UsersCropPhotoCrop = {
        /**
         * Coordinate X of the left upper corner
         */
        x?: number;
        /**
         * Coordinate X of the right lower corner
         */
        x2?: number;
        /**
         * Coordinate Y of the left upper corner
         */
        y?: number;
        /**
         * Coordinate Y of the right lower corner
         */
        y2?: number;
    };
    type UsersCropPhotoRect = {
        /**
         * Coordinate X of the left upper corner
         */
        x?: number;
        /**
         * Coordinate X of the right lower corner
         */
        x2?: number;
        /**
         * Coordinate Y of the left upper corner
         */
        y?: number;
        /**
         * Coordinate Y of the right lower corner
         */
        y2?: number;
    };
    type UsersExports = {
        facebook?: number;
        livejournal?: number;
        twitter?: number;
    };
    /**
     *
     * @enum {string} photo_id, verified, sex, bdate, city, country, home_town, has_photo, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, lists, domain, has_mobile, contacts, site, education, universities, schools, status, last_seen, followers_count, counters, common_count, occupation, nickname, relatives, relation, personal, connections, exports, wall_comments, activities, interests, music, movies, tv, books, games, about, quotes, can_post, can_see_all_posts, can_see_audio, can_write_private_message, can_send_friend_request, is_favorite, is_hidden_from_feed, timezone, screen_name, maiden_name, crop_photo, is_friend, friend_status, career, military, blacklisted, blacklisted_by_me, can_subscribe_posts, descriptions, trending, mutual, friendship_weeks, can_invite_to_chats, stories_archive_count
     */
    type UsersFields = "photo_id" | "verified" | "sex" | "bdate" | "city" | "country" | "home_town" | "has_photo" | "photo_50" | "photo_100" | "photo_200_orig" | "photo_200" | "photo_400_orig" | "photo_max" | "photo_max_orig" | "online" | "lists" | "domain" | "has_mobile" | "contacts" | "site" | "education" | "universities" | "schools" | "status" | "last_seen" | "followers_count" | "counters" | "common_count" | "occupation" | "nickname" | "relatives" | "relation" | "personal" | "connections" | "exports" | "wall_comments" | "activities" | "interests" | "music" | "movies" | "tv" | "books" | "games" | "about" | "quotes" | "can_post" | "can_see_all_posts" | "can_see_audio" | "can_write_private_message" | "can_send_friend_request" | "is_favorite" | "is_hidden_from_feed" | "timezone" | "screen_name" | "maiden_name" | "crop_photo" | "is_friend" | "friend_status" | "career" | "military" | "blacklisted" | "blacklisted_by_me" | "can_subscribe_posts" | "descriptions" | "trending" | "mutual" | "friendship_weeks" | "can_invite_to_chats" | "stories_archive_count";
    type UsersLastSeen = {
        /**
         * Type of the platform that used for the last authorization
         */
        platform?: number;
        /**
         * Last visit date (in Unix time)
         */
        time?: number;
    };
    type UsersMilitary = {
        /**
         * Country ID
         */
        country_id: number;
        /**
         * From year
         */
        from?: number;
        /**
         * Military ID
         */
        id?: number;
        /**
         * Unit name
         */
        unit: string;
        /**
         * Unit ID
         */
        unit_id: number;
        /**
         * Till year
         */
        until?: number;
    };
    type UsersOccupation = {
        /**
         * ID of school, university, company group
         */
        id?: number;
        /**
         * Name of occupation
         */
        name?: string;
        /**
         * Type of occupation
         */
        type?: string;
    };
    type UsersPersonal = {
        /**
         * User's views on alcohol
         */
        alcohol?: number;
        /**
         * User's inspired by
         */
        inspired_by?: string;
        langs?: string[];
        /**
         * User's personal priority in life
         */
        life_main?: number;
        /**
         * User's personal priority in people
         */
        people_main?: number;
        /**
         * User's political views
         */
        political?: number;
        /**
         * User's religion
         */
        religion?: string;
        /**
         * User's religion id
         */
        religion_id?: number;
        /**
         * User's views on smoking
         */
        smoking?: number;
    };
    type UsersRelative = {
        /**
         * Date of child birthday (format dd.mm.yyyy)
         */
        birth_date?: string;
        /**
         * Relative ID
         */
        id?: number;
        /**
         * Name of relative
         */
        name?: string;
        /**
         * Relative type
         * @enum {string} parent, child, grandparent, grandchild, sibling
         */
        type: "parent" | "child" | "grandparent" | "grandchild" | "sibling";
    };
    type UsersSchool = {
        /**
         * City ID
         */
        city?: number;
        /**
         * School class letter
         */
        class?: string;
        /**
         * Country ID
         */
        country?: number;
        /**
         * School ID
         */
        id?: string;
        /**
         * School name
         */
        name?: string;
        /**
         * School type ID
         */
        type?: number;
        /**
         * School type name
         */
        type_str?: string;
        /**
         * Year the user started to study
         */
        year_from?: number;
        /**
         * Graduation year
         */
        year_graduated?: number;
        /**
         * Year the user finished to study
         */
        year_to?: number;
    };
    type UsersSubscriptionsItem = Objects.UsersUserXtrType | Objects.GroupsGroupFull;
    type UsersUniversity = {
        /**
         * Chair ID
         */
        chair?: number;
        /**
         * Chair name
         */
        chair_name?: string;
        /**
         * City ID
         */
        city?: number;
        /**
         * Country ID
         */
        country?: number;
        /**
         * Education form
         */
        education_form?: string;
        /**
         * Education status
         */
        education_status?: string;
        /**
         * Faculty ID
         */
        faculty?: number;
        /**
         * Faculty name
         */
        faculty_name?: string;
        /**
         * Graduation year
         */
        graduation?: number;
        /**
         * University ID
         */
        id?: number;
        /**
         * University name
         */
        name?: string;
    };
    type UsersUser = Objects.UsersUserMin & {
        /**
         * User sex
         */
        sex?: Objects.BaseSex;
        /**
         * Domain name of the user's page
         */
        screen_name?: string;
        /**
         * URL of square photo of the user with 50 pixels in width
         * @format uri
         */
        photo_50?: string | URL;
        /**
         * URL of square photo of the user with 100 pixels in width
         * @format uri
         */
        photo_100?: string | URL;
        /**
         * Information whether the user is online
         */
        online?: Objects.BaseBoolInt;
        /**
         * Information whether the user is online in mobile site or application
         */
        online_mobile?: Objects.BaseBoolInt;
        /**
         * Application ID
         */
        online_app?: number;
        /**
         * Information whether the user is verified
         */
        verified?: Objects.BaseBoolInt;
        /**
         * Information whether the user has a "fire" pictogram.
         */
        trending?: Objects.BaseBoolInt;
        friend_status?: Objects.FriendsFriendStatusStatus;
        mutual?: Objects.FriendsRequestsMutual;
    };
    type UsersUserConnections = {
        /**
         * User's Skype nickname
         */
        skype: string;
        /**
         * User's Facebook account
         */
        facebook: string;
        /**
         * User's Facebook name
         */
        facebook_name?: string;
        /**
         * User's Twitter account
         */
        twitter: string;
        /**
         * User's Livejournal account
         */
        livejournal?: string;
        /**
         * User's Instagram account
         */
        instagram: string;
    };
    type UsersUserCounters = {
        /**
         * Albums number
         */
        albums?: number;
        /**
         * Audios number
         */
        audios?: number;
        /**
         * Followers number
         */
        followers?: number;
        /**
         * Friends number
         */
        friends?: number;
        /**
         * Gifts number
         */
        gifts?: number;
        /**
         * Communities number
         */
        groups?: number;
        /**
         * Notes number
         */
        notes?: number;
        /**
         * Online friends number
         */
        online_friends?: number;
        /**
         * Public pages number
         */
        pages?: number;
        /**
         * Photos number
         */
        photos?: number;
        /**
         * Subscriptions number
         */
        subscriptions?: number;
        /**
         * Number of photos with user
         */
        user_photos?: number;
        /**
         * Number of videos with user
         */
        user_videos?: number;
        /**
         * Videos number
         */
        videos?: number;
    };
    type UsersUserFull = Objects.UsersUser & {
        /**
         * User's first name in nominative case
         */
        first_name_nom?: string;
        /**
         * User's first name in genitive case
         */
        first_name_gen?: string;
        /**
         * User's first name in dative case
         */
        first_name_dat?: string;
        /**
         * User's first name in accusative case
         */
        first_name_acc?: string;
        /**
         * User's first name in instrumental case
         */
        first_name_ins?: string;
        /**
         * User's first name in prepositional case
         */
        first_name_abl?: string;
        /**
         * User's last name in nominative case
         */
        last_name_nom?: string;
        /**
         * User's last name in genitive case
         */
        last_name_gen?: string;
        /**
         * User's last name in dative case
         */
        last_name_dat?: string;
        /**
         * User's last name in accusative case
         */
        last_name_acc?: string;
        /**
         * User's last name in instrumental case
         */
        last_name_ins?: string;
        /**
         * User's last name in prepositional case
         */
        last_name_abl?: string;
        /**
         * User nickname
         */
        nickname?: string;
        /**
         * User maiden name
         */
        maiden_name?: string;
        /**
         * Domain name of the user's page
         */
        domain?: string;
        /**
         * User's date of birth
         */
        bdate?: string;
        city?: Objects.BaseObject;
        country?: Objects.BaseCountry;
        /**
         * User's timezone
         */
        timezone?: number;
        owner_state?: Objects.OwnerState;
        /**
         * URL of square photo of the user with 200 pixels in width
         * @format uri
         */
        photo_200?: string | URL;
        /**
         * URL of square photo of the user with maximum width
         * @format uri
         */
        photo_max?: string | URL;
        /**
         * URL of user's photo with 200 pixels in width
         * @format uri
         */
        photo_200_orig?: string | URL;
        /**
         * URL of user's photo with 400 pixels in width
         * @format uri
         */
        photo_400_orig?: string | URL;
        /**
         * URL of user's photo of maximum size
         * @format uri
         */
        photo_max_orig?: string | URL;
        /**
         * ID of the user's main photo
         */
        photo_id?: string;
        /**
         * Information whether the user has main photo
         */
        has_photo?: Objects.BaseBoolInt;
        /**
         * Information whether the user specified his phone number
         */
        has_mobile?: Objects.BaseBoolInt;
        /**
         * Information whether the user is a friend of current user
         */
        is_friend?: Objects.BaseBoolInt;
        /**
         * Information whether current user can comment wall posts
         */
        wall_comments?: Objects.BaseBoolInt;
        /**
         * Information whether current user can post on the user's wall
         */
        can_post?: Objects.BaseBoolInt;
        /**
         * Information whether current user can see other users' audio on the wall
         */
        can_see_all_posts?: Objects.BaseBoolInt;
        /**
         * Information whether current user can see the user's audio
         */
        can_see_audio?: Objects.BaseBoolInt;
        /**
         * Information whether current user can write private message
         */
        can_write_private_message?: Objects.BaseBoolInt;
        /**
         * Information whether current user can send a friend request
         */
        can_send_friend_request?: Objects.BaseBoolInt;
        /**
         * Information whether current user can be invited to the community
         */
        can_be_invited_group?: boolean;
        /**
         * User's mobile phone number
         */
        mobile_phone?: string;
        /**
         * User's additional phone number
         */
        home_phone?: string;
        /**
         * User's website
         */
        site?: string;
        status_audio?: Objects.AudioAudio;
        /**
         * User's status
         */
        status?: string;
        /**
         * User's status
         */
        activity?: string;
        last_seen?: Objects.UsersLastSeen;
        exports?: Objects.UsersExports;
        crop_photo?: Objects.UsersCropPhoto;
        /**
         * Number of user's followers
         */
        followers_count?: number;
        /**
         * Information whether current user is in the requested user's blacklist.
         */
        blacklisted?: Objects.BaseBoolInt;
        /**
         * Information whether the requested user is in current user's blacklist
         */
        blacklisted_by_me?: Objects.BaseBoolInt;
        /**
         * Information whether the requested user is in faves of current user
         */
        is_favorite?: Objects.BaseBoolInt;
        /**
         * Information whether the requested user is hidden from current user's newsfeed
         */
        is_hidden_from_feed?: Objects.BaseBoolInt;
        /**
         * Number of common friends with current user
         */
        common_count?: number;
        occupation?: Objects.UsersOccupation;
        career?: Objects.UsersCareer[];
        military?: Objects.UsersMilitary[];
        /**
         * University ID
         */
        university?: number;
        /**
         * University name
         */
        university_name?: string;
        /**
         * Faculty ID
         */
        faculty?: number;
        /**
         * Faculty name
         */
        faculty_name?: string;
        /**
         * Graduation year
         */
        graduation?: number;
        /**
         * Education form
         */
        education_form?: string;
        /**
         * User's education status
         */
        education_status?: string;
        /**
         * User hometown
         */
        home_town?: string;
        /**
         * User relationship status
         */
        relation?: Objects.UsersUserRelation;
        relation_partner?: Objects.UsersUserMin;
        personal?: Objects.UsersPersonal;
        universities?: Objects.UsersUniversity[];
        schools?: Objects.UsersSchool[];
        relatives?: Objects.UsersRelative[];
        /**
         * Information whether current user is subscribed to podcasts
         */
        is_subscribed_podcasts?: boolean;
        /**
         * Owner in whitelist or not
         */
        can_subscribe_podcasts?: boolean;
        /**
         * Can subscribe to wall
         */
        can_subscribe_posts?: boolean;
    };
    type UsersUserMin = {
        /**
         * Returns if a profile is deleted or blocked
         */
        deactivated?: string;
        /**
         * User first name
         */
        first_name: string;
        /**
         * Returns if a profile is hidden.
         */
        hidden?: number;
        /**
         * User ID
         */
        id: number;
        /**
         * User last name
         */
        last_name: string;
        can_access_closed?: boolean;
        is_closed?: boolean;
    };
    type UsersUserRelation = number;
    type UsersUserSettingsXtr = {
        connections?: Objects.UsersUserConnections;
        /**
         * User's date of birth
         */
        bdate?: string;
        /**
         * Information whether user's birthdate are hidden
         */
        bdate_visibility?: number;
        city?: Objects.BaseCity;
        country?: Objects.BaseCountry;
        /**
         * User first name
         */
        first_name?: string;
        /**
         * User's hometown
         */
        home_town: string;
        /**
         * User last name
         */
        last_name?: string;
        /**
         * User maiden name
         */
        maiden_name?: string;
        name_request?: Objects.AccountNameRequest;
        personal?: Objects.UsersPersonal;
        /**
         * User phone number with some hidden digits
         */
        phone?: string;
        /**
         * User relationship status
         */
        relation?: Objects.UsersUserRelation;
        relation_partner?: Objects.UsersUserMin;
        /**
         * Information whether relation status is pending
         */
        relation_pending?: Objects.BaseBoolInt;
        relation_requests?: Objects.UsersUserMin[];
        /**
         * Domain name of the user's page
         */
        screen_name?: string;
        /**
         * User sex
         */
        sex?: Objects.BaseSex;
        /**
         * User status
         */
        status: string;
        status_audio?: Objects.AudioAudio;
        interests?: Objects.AccountUserSettingsInterests;
        languages?: string[];
    };
    /**
     * Object type
     * @enum {string} profile
     */
    type UsersUserType = "profile";
    type UsersUserXtrCounters = Objects.UsersUserFull & {
        counters?: Objects.UsersUserCounters;
    };
    type UsersUserXtrType = Objects.UsersUser & {
        type?: Objects.UsersUserType;
    };
    type UsersUsersArray = {
        /**
         * Users number
         */
        count: number;
        items: number[];
    };
    type UtilsDomainResolved = {
        /**
         * Object ID
         */
        object_id?: number;
        /**
         * Group ID
         */
        group_id?: number;
        type?: Objects.UtilsDomainResolvedType;
    };
    /**
     * Object type
     * @enum {string} user, group, application, page
     */
    type UtilsDomainResolvedType = "user" | "group" | "application" | "page";
    type UtilsLastShortenedLink = {
        /**
         * Access key for private stats
         */
        access_key?: string;
        /**
         * Link key (characters after vk.cc/)
         */
        key?: string;
        /**
         * Short link URL
         * @format uri
         */
        short_url?: string | URL;
        /**
         * Creation time in Unixtime
         */
        timestamp?: number;
        /**
         * Full URL
         * @format uri
         */
        url?: string | URL;
        /**
         * Total views number
         */
        views?: number;
    };
    type UtilsLinkChecked = {
        /**
         * Link URL
         * @format uri
         */
        link?: string | URL;
        status?: Objects.UtilsLinkCheckedStatus;
    };
    /**
     * Link status
     * @enum {string} not_banned, banned, processing
     */
    type UtilsLinkCheckedStatus = "not_banned" | "banned" | "processing";
    type UtilsLinkStats = {
        /**
         * Link key (characters after vk.cc/)
         */
        key?: string;
        stats?: Objects.UtilsStats[];
    };
    type UtilsLinkStatsExtended = {
        /**
         * Link key (characters after vk.cc/)
         */
        key?: string;
        stats?: Objects.UtilsStatsExtended[];
    };
    type UtilsShortLink = {
        /**
         * Access key for private stats
         */
        access_key?: string;
        /**
         * Link key (characters after vk.cc/)
         */
        key?: string;
        /**
         * Short link URL
         * @format uri
         */
        short_url?: string | URL;
        /**
         * Full URL
         * @format uri
         */
        url?: string | URL;
    };
    type UtilsStats = {
        /**
         * Start time
         */
        timestamp?: number;
        /**
         * Total views number
         */
        views?: number;
    };
    type UtilsStatsCity = {
        /**
         * City ID
         */
        city_id?: number;
        /**
         * Views number
         */
        views?: number;
    };
    type UtilsStatsCountry = {
        /**
         * Country ID
         */
        country_id?: number;
        /**
         * Views number
         */
        views?: number;
    };
    type UtilsStatsExtended = {
        cities?: Objects.UtilsStatsCity[];
        countries?: Objects.UtilsStatsCountry[];
        sex_age?: Objects.UtilsStatsSexAge[];
        /**
         * Start time
         */
        timestamp?: number;
        /**
         * Total views number
         */
        views?: number;
    };
    type UtilsStatsSexAge = {
        /**
         * Age denotation
         */
        age_range?: string;
        /**
         * Views by female users
         */
        female?: number;
        /**
         * Views by male users
         */
        male?: number;
    };
    /**
     * Video live settings
     */
    type VideoLiveSettings = {
        /**
         * If user car rewind live or not
         */
        can_rewind?: Objects.BaseBoolInt;
        /**
         * If live is endless or not
         */
        is_endless?: Objects.BaseBoolInt;
        /**
         * Max possible time for rewind
         */
        max_duration?: number;
    };
    /**
     * Video restriction button
     */
    type VideoRestrictionButton = {
        /**
         *
         * @enum {string} play
         */
        action?: "play";
        title?: string;
    };
    type VideoSaveResult = {
        /**
         * Video access key
         */
        access_key?: string;
        /**
         * Video description
         */
        description?: string;
        /**
         * Video owner ID
         */
        owner_id?: number;
        /**
         * Video title
         */
        title?: string;
        /**
         * URL for the video uploading
         * @format uri
         */
        upload_url?: string | URL;
        /**
         * Video ID
         */
        video_id?: number;
    };
    type VideoVideo = {
        /**
         * Video access key
         */
        access_key?: string;
        /**
         * Date when the video has been added in Unixtime
         */
        adding_date?: number;
        /**
         * Information whether current user can comment the video
         */
        can_comment?: Objects.BaseBoolInt;
        /**
         * Information whether current user can edit the video
         */
        can_edit?: Objects.BaseBoolInt;
        /**
         * Information whether current user can like the video
         */
        can_like?: Objects.BaseBoolInt;
        /**
         * Information whether current user can repost the video
         */
        can_repost?: Objects.BaseBoolInt;
        /**
         * Information whether current user can subscribe to author of the video
         */
        can_subscribe?: Objects.BaseBoolInt;
        /**
         * Information whether current user can add the video to favourites
         */
        can_add_to_faves?: Objects.BaseBoolInt;
        /**
         * Information whether current user can add the video
         */
        can_add?: Objects.BaseBoolInt;
        /**
         * Information whether current user can attach action button to the video
         */
        can_attach_link?: Objects.BaseBoolInt;
        /**
         * 1 if video is private
         */
        is_private?: Objects.BaseBoolInt;
        /**
         * Number of comments
         */
        comments?: number;
        /**
         * Date when video has been uploaded in Unixtime
         */
        date?: number;
        /**
         * Video description
         */
        description?: string;
        /**
         * Video duration in seconds
         */
        duration?: number;
        image?: Objects.VideoVideoImage[];
        first_frame?: Objects.VideoVideoImage[];
        /**
         * Video width
         */
        width?: number;
        /**
         * Video height
         */
        height?: number;
        /**
         * Video ID
         */
        id?: number;
        /**
         * Video owner ID
         */
        owner_id?: number;
        /**
         * Id of the user who uploaded the video if it was uploaded to a group by member
         */
        user_id?: number;
        /**
         * Video title
         */
        title?: string;
        /**
         * Whether video is added to bookmarks
         */
        is_favorite?: boolean;
        /**
         * Video embed URL
         * @format uri
         */
        player?: string | URL;
        /**
         * Returns if the video is processing
         */
        processing?: Objects.BasePropertyExists;
        /**
         * 1 if video is being converted
         */
        converting?: Objects.BaseBoolInt;
        restriction?: Objects.MediaRestriction;
        /**
         * 1 if video is added to user's albums
         */
        added?: Objects.BaseBoolInt;
        /**
         * 1 if user is subscribed to author of the video
         */
        is_subscribed?: Objects.BaseBoolInt;
        track_code?: string;
        /**
         * Information whether the video is repeated
         */
        repeat?: Objects.BasePropertyExists;
        /**
         *
         * @enum {string} video, music_video, movie
         */
        type?: "video" | "music_video" | "movie";
        /**
         * Number of views
         */
        views?: number;
        /**
         * If video is external, number of views on vk
         */
        local_views?: number;
        /**
         * Restriction code
         */
        content_restricted?: number;
        /**
         * Restriction text
         */
        content_restricted_message?: string;
        /**
         * Live donations balance
         */
        balance?: number;
        /**
         * Live stream status
         * @enum {string} waiting, started, finished, failed, upcoming
         */
        live_status?: "waiting" | "started" | "finished" | "failed" | "upcoming";
        /**
         * 1 if the video is a live stream
         */
        live?: Objects.BasePropertyExists;
        /**
         * 1 if the video is an upcoming stream
         */
        upcoming?: Objects.BasePropertyExists;
        /**
         * Number of spectators of the stream
         */
        spectators?: number;
        /**
         * External platform
         */
        platform?: string;
        likes?: Objects.BaseLikes;
        reposts?: Objects.BaseRepostsInfo;
    };
    type VideoVideoAlbumFull = {
        /**
         * Total number of videos in album
         */
        count: number;
        /**
         * Album ID
         */
        id?: number;
        /**
         * Album cover image in different sizes
         */
        image?: Objects.VideoVideoImage[];
        /**
         * Need blur album thumb or not
         */
        image_blur?: Objects.BasePropertyExists;
        /**
         * Information whether album is system
         */
        is_system?: Objects.BasePropertyExists;
        /**
         * Album owner's ID
         */
        owner_id: number;
        /**
         * Album title
         */
        title: string;
        /**
         * Date when the album has been updated last time in Unixtime
         */
        updated_time: number;
    };
    type VideoVideoFiles = {
        /**
         * URL of the external player
         * @format uri
         */
        external?: string | URL;
        /**
         * URL of the mpeg4 file with 240p quality
         * @format uri
         */
        mp4_240?: string | URL;
        /**
         * URL of the mpeg4 file with 360p quality
         * @format uri
         */
        mp4_360?: string | URL;
        /**
         * URL of the mpeg4 file with 480p quality
         * @format uri
         */
        mp4_480?: string | URL;
        /**
         * URL of the mpeg4 file with 720p quality
         * @format uri
         */
        mp4_720?: string | URL;
        /**
         * URL of the mpeg4 file with 1080p quality
         * @format uri
         */
        mp4_1080?: string | URL;
        /**
         * URL of the flv file with 320p quality
         * @format uri
         */
        flv_320?: string | URL;
    };
    type VideoVideoFull = Objects.VideoVideo & {
        files?: Objects.VideoVideoFiles;
        /**
         * Settings for live stream
         */
        live_settings?: Objects.VideoLiveSettings;
        /**
         * Action button
         */
        action_button?: Objects.ActionLinksAction;
    };
    type VideoVideoImage = Objects.BaseImage & {
        with_padding?: Objects.BasePropertyExists;
    };
    type WallAppPost = {
        /**
         * Application ID
         */
        id?: number;
        /**
         * Application name
         */
        name?: string;
        /**
         * URL of the preview image with 130 px in width
         * @format uri
         */
        photo_130?: string | URL;
        /**
         * URL of the preview image with 604 px in width
         * @format uri
         */
        photo_604?: string | URL;
    };
    type WallAttachedNote = {
        /**
         * Comments number
         */
        comments: number;
        /**
         * Date when the note has been created in Unixtime
         */
        date: number;
        /**
         * Note ID
         * @minimum 1
         */
        id: number;
        /**
         * Note owner's ID
         * @minimum 1
         */
        owner_id: number;
        /**
         * Read comments number
         */
        read_comments: number;
        /**
         * Note title
         */
        title: string;
        /**
         * URL of the page with note preview
         * @format uri
         */
        view_url: string | URL;
    };
    type WallCommentAttachment = {
        audio?: Objects.AudioAudio;
        doc?: Objects.DocsDoc;
        link?: Objects.BaseLink;
        market?: Objects.MarketMarketItem;
        market_market_album?: Objects.MarketMarketAlbum;
        note?: Objects.WallAttachedNote;
        page?: Objects.PagesWikipageFull;
        photo?: Objects.PhotosPhoto;
        sticker?: Objects.BaseSticker;
        type: Objects.WallCommentAttachmentType;
        video?: Objects.VideoVideo;
    };
    /**
     * Attachment type
     * @enum {string} photo, audio, video, doc, link, note, page, market_market_album, market, sticker
     */
    type WallCommentAttachmentType = "photo" | "audio" | "video" | "doc" | "link" | "note" | "page" | "market_market_album" | "market" | "sticker";
    type WallGeo = {
        /**
         * Coordinates as string. <latitude> <longtitude>
         */
        coordinates?: string;
        place?: Objects.BasePlace;
        /**
         * Information whether a map is showed
         */
        showmap?: number;
        /**
         * Place type
         */
        type?: string;
    };
    type WallGraffiti = {
        /**
         * Graffiti ID
         */
        id?: number;
        /**
         * Graffiti owner's ID
         */
        owner_id?: number;
        /**
         * URL of the preview image with 200 px in width
         * @format uri
         */
        photo_200?: string | URL;
        /**
         * URL of the preview image with 586 px in width
         * @format uri
         */
        photo_586?: string | URL;
    };
    type WallPostCopyright = {
        id?: number;
        link: string;
        name: string;
        type: string;
    };
    type WallPostSource = {
        /**
         * Additional data
         */
        data?: string;
        /**
         * Platform name
         */
        platform?: string;
        type?: Objects.WallPostSourceType;
        /**
         * URL to an external site used to publish the post
         * @format uri
         */
        url?: string | URL;
    };
    /**
     * Type of post source
     * @enum {string} vk, widget, api, rss, sms
     */
    type WallPostSourceType = "vk" | "widget" | "api" | "rss" | "sms";
    /**
     * Post type
     * @enum {string} post, copy, reply, postpone, suggest
     */
    type WallPostType = "post" | "copy" | "reply" | "postpone" | "suggest";
    type WallPostedPhoto = {
        /**
         * Photo ID
         */
        id?: number;
        /**
         * Photo owner's ID
         */
        owner_id?: number;
        /**
         * URL of the preview image with 130 px in width
         * @format uri
         */
        photo_130?: string | URL;
        /**
         * URL of the preview image with 604 px in width
         * @format uri
         */
        photo_604?: string | URL;
    };
    type WallViews = {
        /**
         * Count
         */
        count?: number;
    };
    type WallWallComment = {
        attachments?: Objects.WallCommentAttachment[];
        /**
         * Date when the comment has been added in Unixtime
         */
        date: number;
        /**
         * Author ID
         */
        from_id: number;
        /**
         * Comment ID
         * @minimum 1
         */
        id: number;
        likes?: Objects.BaseLikesInfo;
        /**
         * Real position of the comment
         */
        real_offset?: number;
        /**
         * Replied comment ID
         */
        reply_to_comment?: number;
        /**
         * Replied user ID
         */
        reply_to_user?: number;
        /**
         * Comment text
         */
        text: string;
        thread?: Objects.CommentThread;
        post_id?: number;
        owner_id?: number;
        parents_stack?: number[];
        deleted?: boolean;
    };
    type WallWallpost = {
        /**
         * Access key to private object
         */
        access_key?: string;
        attachments?: Objects.WallWallpostAttachment[];
        /**
         * Information about the source of the post
         */
        copyright?: Objects.WallPostCopyright;
        /**
         * Date of publishing in Unixtime
         */
        date?: number;
        /**
         * Date of editing in Unixtime
         */
        edited?: number;
        /**
         * Post author ID
         */
        from_id?: number;
        geo?: Objects.WallGeo;
        /**
         * Post ID
         */
        id?: number;
        /**
         * Is post archived, only for post owners
         */
        is_archived?: boolean;
        /**
         * Information whether the post in favorites list
         */
        is_favorite?: boolean;
        /**
         * Count of likes
         */
        likes?: Objects.BaseLikesInfo;
        /**
         * Wall owner's ID
         */
        owner_id?: number;
        post_source?: Objects.WallPostSource;
        post_type?: Objects.WallPostType;
        /**
         * Count of views
         */
        reposts?: Objects.BaseRepostsInfo;
        /**
         * Post signer ID
         */
        signer_id?: number;
        /**
         * Post text
         */
        text?: string;
        /**
         * Count of views
         */
        views?: Objects.WallViews;
    };
    type WallWallpostAttachment = {
        /**
         * Access key for the audio
         */
        access_key?: string;
        album?: Objects.PhotosPhotoAlbum;
        app?: Objects.WallAppPost;
        audio?: Objects.AudioAudio;
        doc?: Objects.DocsDoc;
        event?: Objects.EventsEventAttach;
        group?: Objects.GroupsGroupAttach;
        graffiti?: Objects.WallGraffiti;
        link?: Objects.BaseLink;
        market?: Objects.MarketMarketItem;
        market_album?: Objects.MarketMarketAlbum;
        note?: Objects.WallAttachedNote;
        page?: Objects.PagesWikipageFull;
        photo?: Objects.PhotosPhoto;
        photos_list?: string[];
        poll?: Objects.PollsPoll;
        posted_photo?: Objects.WallPostedPhoto;
        type: Objects.WallWallpostAttachmentType;
        video?: Objects.VideoVideo;
    };
    /**
     * Attachment type
     * @enum {string} photo, posted_photo, audio, video, doc, link, graffiti, note, app, poll, page, album, photos_list, market_market_album, market, event
     */
    type WallWallpostAttachmentType = "photo" | "posted_photo" | "audio" | "video" | "doc" | "link" | "graffiti" | "note" | "app" | "poll" | "page" | "album" | "photos_list" | "market_market_album" | "market" | "event";
    type WallWallpostFull = Objects.WallWallpost & {
        copy_history?: Objects.WallWallpost[];
        /**
         * Information whether current user can edit the post
         */
        can_edit?: Objects.BaseBoolInt;
        /**
         * Post creator ID (if post still can be edited)
         */
        created_by?: number;
        /**
         * Information whether current user can delete the post
         */
        can_delete?: Objects.BaseBoolInt;
        /**
         * Information whether current user can pin the post
         */
        can_pin?: Objects.BaseBoolInt;
        /**
         * Information whether the post is pinned
         */
        is_pinned?: number;
        comments?: Objects.BaseCommentsInfo;
        /**
         * Information whether the post is marked as ads
         */
        marked_as_ads?: Objects.BaseBoolInt;
    };
    type WallWallpostToId = {
        attachments?: Objects.WallWallpostAttachment[];
        comments?: Objects.BaseCommentsInfo;
        /**
         * ID of the source post owner
         */
        copy_owner_id?: number;
        /**
         * ID of the source post
         */
        copy_post_id?: number;
        /**
         * Date of publishing in Unixtime
         */
        date?: number;
        /**
         * Post author ID
         */
        from_id?: number;
        geo?: Objects.WallGeo;
        /**
         * Post ID
         */
        id?: number;
        /**
         * Information whether the post in favorites list
         */
        is_favorite?: boolean;
        likes?: Objects.BaseLikesInfo;
        /**
         * wall post ID (if comment)
         */
        post_id?: number;
        post_source?: Objects.WallPostSource;
        post_type?: Objects.WallPostType;
        reposts?: Objects.BaseRepostsInfo;
        /**
         * Post signer ID
         */
        signer_id?: number;
        /**
         * Post text
         */
        text?: string;
        /**
         * Wall owner's ID
         */
        to_id?: number;
    };
    type WidgetsCommentMedia = {
        /**
         * Media item ID
         */
        item_id?: number;
        /**
         * Media owner's ID
         */
        owner_id?: number;
        /**
         * URL of the preview image (type=photo only)
         * @format uri
         */
        thumb_src?: string | URL;
        type?: Objects.WidgetsCommentMediaType;
    };
    /**
     * Media type
     * @enum {string} audio, photo, video
     */
    type WidgetsCommentMediaType = "audio" | "photo" | "video";
    type WidgetsCommentReplies = {
        /**
         * Information whether current user can comment the post
         */
        can_post?: Objects.BaseBoolInt;
        /**
         * Comments number
         */
        count?: number;
        replies?: Objects.WidgetsCommentRepliesItem[];
    };
    type WidgetsCommentRepliesItem = {
        /**
         * Comment ID
         */
        cid?: number;
        /**
         * Date when the comment has been added in Unixtime
         */
        date?: number;
        likes?: Objects.WidgetsWidgetLikes;
        /**
         * Comment text
         */
        text?: string;
        /**
         * User ID
         */
        uid?: number;
        user?: Objects.UsersUserFull;
    };
    type WidgetsWidgetComment = {
        attachments?: Objects.WallCommentAttachment[];
        /**
         * Information whether current user can delete the comment
         */
        can_delete?: Objects.BaseBoolInt;
        comments?: Objects.WidgetsCommentReplies;
        /**
         * Date when the comment has been added in Unixtime
         */
        date: number;
        /**
         * Comment author ID
         */
        from_id: number;
        /**
         * Comment ID
         */
        id: number;
        likes?: Objects.BaseLikesInfo;
        media?: Objects.WidgetsCommentMedia;
        post_source?: Objects.WallPostSource;
        /**
         * Post type
         */
        post_type: number;
        reposts?: Objects.BaseRepostsInfo;
        /**
         * Comment text
         */
        text: string;
        /**
         * Wall owner
         */
        to_id: number;
        user?: Objects.UsersUserFull;
    };
    type WidgetsWidgetLikes = {
        /**
         * Likes number
         */
        count?: number;
    };
    type WidgetsWidgetPage = {
        comments?: Objects.BaseObjectCount;
        /**
         * Date when widgets on the page has been initialized firstly in Unixtime
         */
        date?: number;
        /**
         * Page description
         */
        description?: string;
        /**
         * Page ID
         */
        id?: number;
        likes?: Objects.BaseObjectCount;
        /**
         * page_id parameter value
         */
        page_id?: string;
        /**
         * URL of the preview image
         * @format uri
         */
        photo?: string | URL;
        /**
         * Page title
         */
        title?: string;
        /**
         * Page absolute URL
         * @format uri
         */
        url?: string | URL;
    };
}
export declare namespace Responses {
    type AccountChangePasswordResponse = {
        response?: {
            /**
             * New token
             */
            token: string;
            /**
             * New secret
             */
            secret?: string;
        };
    };
    type AccountGetActiveOffersResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.AccountOffer[];
        };
    };
    type AccountGetAppPermissionsResponse = {
        /**
         * Permissions mask
         */
        response?: number;
    };
    type AccountGetBannedResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: number[];
            profiles?: Objects.UsersUserMin[];
            groups?: Objects.GroupsGroup[];
        };
    };
    type AccountGetCountersResponse = {
        response?: Objects.AccountAccountCounters;
    };
    type AccountGetInfoResponse = {
        response?: Objects.AccountInfo;
    };
    type AccountGetProfileInfoResponse = {
        response?: Objects.AccountUserSettings;
    };
    type AccountGetPushSettingsResponse = {
        response?: Objects.AccountPushSettings;
    };
    type AccountSaveProfileInfoResponse = {
        response?: {
            /**
             * 1 if changes has been processed
             */
            changed?: Objects.BaseBoolInt;
            name_request?: Objects.AccountNameRequest;
        };
    };
    type AdsAddOfficeUsersResponse = {
        /**
         * true if success
         */
        response?: boolean;
    };
    type AdsCheckLinkResponse = {
        response?: Objects.AdsLinkStatus;
    };
    type AdsCreateAdsResponse = {
        response?: number[];
    };
    type AdsCreateCampaignsResponse = {
        response?: number[];
    };
    type AdsCreateClientsResponse = {
        response?: number[];
    };
    type AdsCreateTargetGroupResponse = {
        response?: {
            /**
             * Group ID
             */
            id?: number;
            /**
             * Pixel code
             */
            pixel?: string;
        };
    };
    type AdsDeleteAdsResponse = {
        response?: number[];
    };
    type AdsDeleteCampaignsResponse = {
        /**
         * 0 if success
         */
        response?: number;
    };
    type AdsDeleteClientsResponse = {
        /**
         * 0 if sucess
         */
        response?: number;
    };
    type AdsGetAccountsResponse = {
        response?: Objects.AdsAccount[];
    };
    type AdsGetAdsLayoutResponse = {
        response?: Objects.AdsAdLayout[];
    };
    type AdsGetAdsTargetingResponse = {
        response?: Objects.AdsTargSettings[];
    };
    type AdsGetAdsResponse = {
        response?: Objects.AdsAd[];
    };
    type AdsGetBudgetResponse = {
        /**
         * Budget
         */
        response?: number;
    };
    type AdsGetCampaignsResponse = {
        response?: Objects.AdsCampaign[];
    };
    type AdsGetCategoriesResponse = {
        response?: {
            /**
             * Old categories
             */
            v1?: Objects.AdsCategory[];
            /**
             * Actual categories
             */
            v2?: Objects.AdsCategory[];
        };
    };
    type AdsGetClientsResponse = {
        response?: Objects.AdsClient[];
    };
    type AdsGetDemographicsResponse = {
        response?: Objects.AdsDemoStats[];
    };
    type AdsGetFloodStatsResponse = {
        response?: Objects.AdsFloodStats;
    };
    type AdsGetOfficeUsersResponse = {
        response?: Objects.AdsUsers[];
    };
    type AdsGetPostsReachResponse = {
        response?: Objects.AdsPromotedPostReach[];
    };
    type AdsGetRejectionReasonResponse = {
        response?: Objects.AdsRejectReason;
    };
    type AdsGetStatisticsResponse = {
        response?: Objects.AdsStats[];
    };
    type AdsGetSuggestionsCitiesResponse = {
        response?: Objects.AdsTargSuggestionsCities[];
    };
    type AdsGetSuggestionsRegionsResponse = {
        response?: Objects.AdsTargSuggestionsRegions[];
    };
    type AdsGetSuggestionsResponse = {
        response?: Objects.AdsTargSuggestions[];
    };
    type AdsGetSuggestionsSchoolsResponse = {
        response?: Objects.AdsTargSuggestionsSchools[];
    };
    type AdsGetTargetGroupsResponse = {
        response?: Objects.AdsTargetGroup[];
    };
    type AdsGetTargetingStatsResponse = {
        response?: Objects.AdsTargStats;
    };
    type AdsGetUploadURLResponse = {
        /**
         * Photo upload URL
         */
        response?: string;
    };
    type AdsGetVideoUploadURLResponse = {
        /**
         * Video upload URL
         */
        response?: string;
    };
    type AdsImportTargetContactsResponse = {
        /**
         * Imported contacts number
         */
        response?: number;
    };
    type AdsRemoveOfficeUsersResponse = {
        /**
         * true if success
         */
        response?: boolean;
    };
    type AdsUpdateAdsResponse = {
        response?: number[];
    };
    type AdsUpdateCampaignsResponse = {
        /**
         * Campaign ID
         */
        response?: number;
    };
    type AdsUpdateClientsResponse = {
        /**
         * Client ID
         */
        response?: number;
    };
    type AppsGetCatalogResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.AppsApp[];
        };
    };
    type AppsGetFriendsListResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.UsersUserFull[];
        };
    };
    type AppsGetLeaderboardExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.AppsLeaderboard[];
            profiles?: Objects.UsersUserMin[];
        };
    };
    type AppsGetLeaderboardResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.AppsLeaderboard[];
        };
    };
    type AppsGetScopesResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.AppsScope[];
        };
    };
    type AppsGetScoreResponse = {
        /**
         * Score number
         */
        response?: number;
    };
    type AppsGetResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.AppsApp[];
        };
    };
    type AppsSendRequestResponse = {
        /**
         * Request ID
         */
        response?: number;
    };
    type AuthRestoreResponse = {
        response?: {
            /**
             * 1 if success
             */
            success?: number;
            /**
             * Parameter needed to grant access by code
             */
            sid?: string;
        };
    };
    type BaseBoolResponse = {
        response?: Objects.BaseBoolInt;
    };
    type BaseGetUploadServerResponse = {
        response?: Objects.BaseUploadServer;
    };
    type BoardAddTopicResponse = {
        /**
         * Topic ID
         */
        response?: number;
    };
    type BoardCreateCommentResponse = {
        /**
         * Comment ID
         */
        response?: number;
    };
    type BoardGetCommentsExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.BoardTopicComment[];
            poll?: Objects.BoardTopicPoll;
            profiles: Objects.UsersUser[];
            groups: Objects.GroupsGroup[];
        };
    };
    type BoardGetCommentsResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.BoardTopicComment[];
            poll?: Objects.BoardTopicPoll;
        };
    };
    type BoardGetTopicsExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.BoardTopic[];
            default_order: Objects.BoardDefaultOrder;
            /**
             * Information whether current user can add topic
             */
            can_add_topics: Objects.BaseBoolInt;
            profiles: Objects.UsersUserMin[];
        };
    };
    type BoardGetTopicsResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.BoardTopic[];
            default_order: Objects.BoardDefaultOrder;
            /**
             * Information whether current user can add topic
             */
            can_add_topics: Objects.BaseBoolInt;
        };
    };
    type DatabaseGetChairsResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.BaseObject[];
        };
    };
    type DatabaseGetCitiesByIdResponse = {
        response?: Objects.BaseObject[];
    };
    type DatabaseGetCitiesResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.DatabaseCity[];
        };
    };
    type DatabaseGetCountriesByIdResponse = {
        response?: Objects.BaseCountry[];
    };
    type DatabaseGetCountriesResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.BaseCountry[];
        };
    };
    type DatabaseGetFacultiesResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.DatabaseFaculty[];
        };
    };
    type DatabaseGetMetroStationsByIdResponse = {
        response?: Objects.DatabaseStation[];
    };
    type DatabaseGetMetroStationsResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.DatabaseStation[];
        };
    };
    type DatabaseGetRegionsResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.DatabaseRegion[];
        };
    };
    type DatabaseGetSchoolClassesResponse = {
        response?: (/** Class ID or letter
         */ 
        /** Class ID or letter
         */
        string
        /** Class ID or letter
         */
         | number)[][];
    };
    type DatabaseGetSchoolsResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.DatabaseSchool[];
        };
    };
    type DatabaseGetUniversitiesResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.DatabaseUniversity[];
        };
    };
    type DocsAddResponse = {
        response?: {
            /**
             * Doc ID
             */
            id?: number;
        };
    };
    type DocsGetByIdResponse = {
        response?: Objects.DocsDoc[];
    };
    type DocsGetTypesResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.DocsDocTypes[];
        };
    };
    type DocsGetUploadServer = {
        response?: Objects.BaseUploadServer;
    };
    type DocsGetResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.DocsDoc[];
        };
    };
    type DocsSaveResponse = {
        response?: {
            type?: Objects.DocsDocAttachmentType;
            audio_message?: Objects.MessagesAudioMessage;
            doc?: Objects.DocsDoc;
            graffiti?: Objects.MessagesGraffiti;
        };
    };
    type DocsSearchResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.DocsDoc[];
        };
    };
    type FaveAddTagResponse = {
        response?: Objects.FaveTag;
    };
    type FaveGetPagesResponse = {
        response?: {
            count?: number;
            items?: Objects.FavePage[];
        };
    };
    type FaveGetTagsResponse = {
        response?: {
            count?: number;
            items?: Objects.FaveTag[];
        };
    };
    type FaveGetExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.FaveBookmark[];
            profiles?: Objects.UsersUserFull[];
            groups?: Objects.GroupsGroup[];
        };
    };
    type FaveGetResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.FaveBookmark[];
        };
    };
    type FriendsAddListResponse = {
        response?: {
            /**
             * List ID
             * @minimum 1
             */
            list_id: number;
        };
    };
    type FriendsAddResponse = {
        /**
         * Friend request status
         */
        response?: number;
    };
    type FriendsAreFriendsResponse = {
        response?: Objects.FriendsFriendStatus[];
    };
    type FriendsDeleteResponse = {
        response?: {
            success: Objects.BaseOkResponse;
            /**
             * Returns 1 if friend has been deleted
             */
            friend_deleted?: number;
            /**
             * Returns 1 if out request has been canceled
             */
            out_request_deleted?: number;
            /**
             * Returns 1 if incoming request has been declined
             */
            in_request_deleted?: number;
            /**
             * Returns 1 if suggestion has been declined
             */
            suggestion_deleted?: number;
        };
    };
    type FriendsGetAppUsersResponse = {
        response?: number[];
    };
    type FriendsGetByPhonesResponse = {
        response: Objects.FriendsUserXtrPhone[];
    };
    type FriendsGetListsResponse = {
        response?: {
            /**
             * Total number of friends lists
             */
            count: number;
            items: Objects.FriendsFriendsList[];
        };
    };
    type FriendsGetMutualResponse = {
        response?: number[];
    };
    type FriendsGetMutualTargetUidsResponse = {
        response?: Objects.FriendsMutualFriend[];
    };
    type FriendsGetOnlineOnlineMobileResponse = {
        response?: {
            online?: number[];
            online_mobile?: number[];
        };
    };
    type FriendsGetOnlineResponse = {
        response?: number[];
    };
    type FriendsGetRecentResponse = {
        response?: number[];
    };
    type FriendsGetRequestsExtendedResponse = {
        response?: {
            /**
             * Total requests number
             */
            count?: number;
            items?: Objects.FriendsRequestsXtrMessage[];
        };
    };
    type FriendsGetRequestsNeedMutualResponse = {
        response?: {
            /**
             * Total requests number
             */
            count?: number;
            items?: Objects.FriendsRequests[];
        };
    };
    type FriendsGetRequestsResponse = {
        response?: {
            /**
             * Total requests number
             */
            count?: number;
            items?: number[];
            /**
             * Total unread requests number
             */
            count_unread?: number;
        };
    };
    type FriendsGetSuggestionsResponse = {
        response?: {
            /**
             * Total results number
             */
            count: number;
            items: Objects.UsersUserFull[];
        };
    };
    type FriendsGetFieldsResponse = {
        response?: {
            /**
             * Total friends number
             */
            count: number;
            items: Objects.FriendsUserXtrLists[];
        };
    };
    type FriendsGetResponse = {
        response?: {
            /**
             * Total friends number
             */
            count: number;
            items: number[];
        };
    };
    type FriendsSearchResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.UsersUserFull[];
        };
    };
    type GiftsGetResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.GiftsGift[];
        };
    };
    type GroupsAddAddressResponse = {
        response?: Objects.GroupsAddress;
    };
    type GroupsAddCallbackServerResponse = {
        response?: {
            server_id?: number;
        };
    };
    type GroupsAddLinkResponse = {
        response?: Objects.GroupsGroupLink;
    };
    type GroupsCreateResponse = {
        response?: Objects.GroupsGroup;
    };
    type GroupsEditAddressResponse = {
        /**
         * Result
         */
        response?: Objects.GroupsAddress;
    };
    type GroupsGetAddressesResponse = {
        response?: {
            /**
             * Total count of addresses
             */
            count: number;
            items: Objects.GroupsAddress[];
        };
    };
    type GroupsGetBannedResponse = {
        response?: {
            /**
             * Total users number
             */
            count: number;
            items: Objects.GroupsBannedItem[];
        };
    };
    type GroupsGetByIdResponse = {
        response?: Objects.GroupsGroupFull[];
    };
    type GroupsGetCallbackConfirmationCodeResponse = {
        response?: {
            /**
             * Confirmation code
             */
            code?: string;
        };
    };
    type GroupsGetCallbackServersResponse = {
        response?: {
            count: number;
            items: Objects.GroupsCallbackServer[];
        };
    };
    type GroupsGetCallbackSettingsResponse = {
        response?: Objects.GroupsCallbackSettings;
    };
    type GroupsGetCatalogInfoExtendedResponse = {
        response?: {
            /**
             * Information whether catalog is enabled for current user
             */
            enabled: number;
            categories?: Objects.GroupsGroupCategoryFull[];
        };
    };
    type GroupsGetCatalogInfoResponse = {
        response?: {
            /**
             * Information whether catalog is enabled for current user
             */
            enabled: number;
            categories?: Objects.GroupsGroupCategory[];
        };
    };
    type GroupsGetCatalogResponse = {
        response?: {
            /**
             * Total communities number
             */
            count: number;
            items: Objects.GroupsGroup[];
        };
    };
    type GroupsGetInvitedUsersResponse = {
        response?: {
            /**
             * Total communities number
             */
            count: number;
            items: Objects.UsersUserFull[];
        };
    };
    type GroupsGetInvitesExtendedResponse = {
        response?: {
            /**
             * Total communities number
             */
            count: number;
            items: Objects.GroupsGroupXtrInvitedBy[];
            profiles: Objects.UsersUserMin[];
            groups: Objects.GroupsGroupFull[];
        };
    };
    type GroupsGetInvitesResponse = {
        response?: {
            /**
             * Total communities number
             */
            count: number;
            items: Objects.GroupsGroupXtrInvitedBy[];
        };
    };
    type GroupsGetLongPollServerResponse = {
        response?: Objects.GroupsLongPollServer;
    };
    type GroupsGetLongPollSettingsResponse = {
        response?: Objects.GroupsLongPollSettings;
    };
    type GroupsGetMembersFieldsResponse = {
        response?: {
            /**
             * Total members number
             */
            count: number;
            items: Objects.GroupsUserXtrRole[];
        };
    };
    type GroupsGetMembersFilterResponse = {
        response?: {
            /**
             * Total members number
             */
            count: number;
            items: Objects.GroupsMemberRole[];
        };
    };
    type GroupsGetMembersResponse = {
        response?: {
            /**
             * Total members number
             */
            count: number;
            items: number[];
        };
    };
    type GroupsGetRequestsFieldsResponse = {
        response?: {
            /**
             * Total communities number
             */
            count: number;
            items: Objects.UsersUserFull[];
        };
    };
    type GroupsGetRequestsResponse = {
        response?: {
            /**
             * Total communities number
             */
            count: number;
            items: number[];
        };
    };
    type GroupsGetSettingsResponse = {
        response?: {
            /**
             * Community access settings
             */
            access?: number;
            /**
             * Community's page domain
             */
            address?: string;
            /**
             * Audio settings
             */
            audio: number;
            /**
             * Articles settings
             */
            articles: number;
            /**
             * City id of group
             */
            city_id: number;
            contacts?: Objects.BaseBoolInt;
            links?: Objects.BaseBoolInt;
            sections_list?: object;
            main_section?: Objects.GroupsGroupFullMainSection;
            secondary_section?: number;
            age_limits?: number;
            /**
             * Country id of group
             */
            country_id: number;
            /**
             * Community description
             */
            description: string;
            /**
             * Docs settings
             */
            docs: number;
            events?: Objects.BaseBoolInt;
            /**
             * Information whether the obscene filter is enabled
             */
            obscene_filter: Objects.BaseBoolInt;
            /**
             * Information whether the stopwords filter is enabled
             */
            obscene_stopwords: Objects.BaseBoolInt;
            /**
             * The list of stop words
             */
            obscene_words: string[];
            event_group_id?: number;
            /**
             * Photos settings
             */
            photos: number;
            /**
             * Information about the group category
             */
            public_category?: number;
            public_category_list?: Objects.GroupsGroupPublicCategoryList[];
            public_date?: string;
            public_date_label?: string;
            /**
             * Information about the group subcategory
             */
            public_subcategory?: number;
            /**
             * URL of the RSS feed
             * @format uri
             */
            rss?: string | URL;
            /**
             * Start date
             */
            start_date?: number;
            /**
             * Finish date in Unixtime format
             */
            finish_date?: number;
            /**
             * Community subject ID
             */
            subject?: number;
            subject_list?: Objects.GroupsSubjectItem[];
            suggested_privacy?: number;
            /**
             * Community title
             */
            title: string;
            /**
             * Topics settings
             */
            topics: number;
            twitter?: Objects.GroupsSettingsTwitter;
            /**
             * Video settings
             */
            video: number;
            /**
             * Wall settings
             */
            wall: number;
            /**
             * Community website
             */
            website?: string;
            /**
             * Community phone
             */
            phone?: string;
            /**
             * Community email
             */
            email?: string;
            /**
             * Wiki settings
             */
            wiki: number;
        };
    };
    type GroupsGetTokenPermissionsResponse = {
        response?: {
            mask: number;
            permissions: Objects.GroupsTokenPermissionSetting[];
        };
    };
    type GroupsGetExtendedResponse = {
        response?: {
            /**
             * Total communities number
             */
            count: number;
            items: Objects.GroupsGroupFull[];
        };
    };
    type GroupsGetResponse = {
        response?: {
            /**
             * Total communities number
             */
            count: number;
            items: number[];
        };
    };
    type GroupsIsMemberExtendedResponse = {
        response?: {
            /**
             * Information whether user is a member of the group
             */
            member: Objects.BaseBoolInt;
            /**
             * Information whether user has been invited to the group
             */
            invitation?: Objects.BaseBoolInt;
            /**
             * Information whether user can be invited
             */
            can_invite?: Objects.BaseBoolInt;
            /**
             * Information whether user's invite to the group can be recalled
             */
            can_recall?: Objects.BaseBoolInt;
            /**
             * Information whether user has sent request to the group
             */
            request?: Objects.BaseBoolInt;
        };
    };
    type GroupsIsMemberResponse = {
        /**
         * Information whether user is a member of the group
         */
        response?: Objects.BaseBoolInt;
    };
    type GroupsIsMemberUserIdsExtendedResponse = {
        response?: Objects.GroupsMemberStatusFull[];
    };
    type GroupsIsMemberUserIdsResponse = {
        response?: Objects.GroupsMemberStatus[];
    };
    type GroupsSearchResponse = {
        response?: {
            /**
             * Total communities number
             */
            count: number;
            items: Objects.GroupsGroup[];
        };
    };
    type LeadsCheckUserResponse = {
        response?: Objects.LeadsChecked;
    };
    type LeadsCompleteResponse = {
        response?: Objects.LeadsComplete;
    };
    type LeadsGetStatsResponse = {
        response?: Objects.LeadsLead;
    };
    type LeadsGetUsersResponse = {
        response?: Objects.LeadsEntry[];
    };
    type LeadsMetricHitResponse = {
        response?: {
            /**
             * Information whether request has been processed successfully
             */
            result?: boolean;
            /**
             * Redirect link
             */
            redirect_link?: string;
        };
    };
    type LeadsStartResponse = {
        response?: Objects.LeadsStart;
    };
    type LikesAddResponse = {
        response?: {
            /**
             * Total likes number
             */
            likes: number;
        };
    };
    type LikesDeleteResponse = {
        response?: {
            /**
             * Total likes number
             */
            likes: number;
        };
    };
    type LikesGetListExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.UsersUserMin[];
        };
    };
    type LikesGetListResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: number[];
        };
    };
    type LikesIsLikedResponse = {
        response?: {
            /**
             * Information whether user liked the object
             */
            liked: Objects.BaseBoolInt;
            /**
             * Information whether user reposted the object
             */
            copied: Objects.BaseBoolInt;
        };
    };
    type MarketAddAlbumResponse = {
        response?: {
            /**
             * Album ID
             */
            market_album_id?: number;
        };
    };
    type MarketAddResponse = {
        response?: {
            /**
             * Item ID
             */
            market_item_id?: number;
        };
    };
    type MarketCreateCommentResponse = {
        /**
         * Comment ID
         */
        response?: number;
    };
    type MarketDeleteCommentResponse = {
        /**
         * Returns 1 if request has been processed successfully (0 if the comment is not found)
         */
        response?: Objects.BaseBoolInt;
    };
    type MarketGetAlbumByIdResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.MarketMarketAlbum[];
        };
    };
    type MarketGetAlbumsResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.MarketMarketAlbum[];
        };
    };
    type MarketGetByIdExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.MarketMarketItemFull[];
        };
    };
    type MarketGetByIdResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.MarketMarketItem[];
        };
    };
    type MarketGetCategoriesResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.MarketMarketCategory[];
        };
    };
    type MarketGetCommentsResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.WallWallComment[];
        };
    };
    type MarketGetExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.MarketMarketItemFull[];
        };
    };
    type MarketGetResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.MarketMarketItem[];
        };
    };
    type MarketRestoreCommentResponse = {
        /**
         * Returns 1 if request has been processed successfully (0 if the comment is not found)
         */
        response?: Objects.BaseBoolInt;
    };
    type MarketSearchExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.MarketMarketItemFull[];
        };
    };
    type MarketSearchResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.MarketMarketItem[];
        };
    };
    type MessagesCreateChatResponse = {
        /**
         * Chat ID
         */
        response?: number;
    };
    type MessagesDeleteChatPhotoResponse = {
        response?: {
            /**
             * Service message ID
             */
            message_id?: number;
            chat?: Objects.MessagesChat;
        };
    };
    type MessagesDeleteConversationResponse = {
        response?: {
            /**
             * Id of the last message, that was deleted
             */
            last_deleted_id: number;
        };
    };
    type MessagesDeleteResponse = {
        response?: object;
    };
    type MessagesEditResponse = {
        /**
         * Result
         */
        response?: Objects.BaseBoolInt;
    };
    type MessagesGetByConversationMessageIdResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.MessagesMessage[];
        };
    };
    type MessagesGetByIdExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.MessagesMessage[];
            profiles: Objects.UsersUserFull[];
            groups?: Objects.GroupsGroupFull[];
        };
    };
    type MessagesGetByIdResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.MessagesMessage[];
        };
    };
    type MessagesGetChatPreviewResponse = {
        response?: {
            preview?: Objects.MessageChatPreview;
            profiles?: Objects.UsersUserFull[];
        };
    };
    type MessagesGetChatChatIdsFieldsResponse = {
        response?: Objects.MessagesChatFull[];
    };
    type MessagesGetChatChatIdsResponse = {
        response?: Objects.MessagesChat[];
    };
    type MessagesGetChatFieldsResponse = {
        response?: Objects.MessagesChatFull;
    };
    type MessagesGetChatResponse = {
        response?: Objects.MessagesChat;
    };
    type MessagesGetConversationMembersResponse = {
        response?: {
            /**
             * Chat members count
             */
            count: number;
            items: Objects.MessagesConversationMember[];
            chat_restrictions?: Objects.MessagesChatRestrictions;
            profiles?: Objects.UsersUserFull[];
            groups?: Objects.GroupsGroupFull[];
        };
    };
    type MessagesGetConversationsByIdExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.MessagesConversation[];
            profiles?: Objects.UsersUser[];
        };
    };
    type MessagesGetConversationsByIdResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.MessagesConversation[];
        };
    };
    type MessagesGetConversationsResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            /**
             * Unread dialogs number
             */
            unread_count?: number;
            items: Objects.MessagesConversationWithMessage[];
            profiles?: Objects.UsersUserFull[];
            groups?: Objects.GroupsGroupFull[];
        };
    };
    type MessagesGetHistoryAttachmentsResponse = {
        response?: {
            items?: Objects.MessagesHistoryAttachment[];
            /**
             * Value for pagination
             */
            next_from?: string;
        };
    };
    type MessagesGetHistoryResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.MessagesMessage[];
            profiles?: Objects.UsersUserFull[];
            groups?: Objects.GroupsGroupFull[];
        };
    };
    type MessagesGetInviteLinkResponse = {
        response?: {
            link?: string;
        };
    };
    type MessagesGetLastActivityResponse = {
        response?: Objects.MessagesLastActivity;
    };
    type MessagesGetLongPollHistoryResponse = {
        response?: {
            history?: number[][];
            groups?: Objects.GroupsGroup[];
            messages?: Objects.MessagesLongpollMessages;
            profiles?: Objects.UsersUserFull[];
            chats?: Objects.MessagesChat[];
            /**
             * Persistence timestamp
             */
            new_pts?: number;
            /**
             * Has more
             */
            more?: boolean;
            conversations?: Objects.MessagesConversation[];
        };
    };
    type MessagesGetLongPollServerResponse = {
        response?: Objects.MessagesLongpollParams;
    };
    type MessagesIsMessagesFromGroupAllowedResponse = {
        response?: {
            is_allowed?: Objects.BaseBoolInt;
        };
    };
    type MessagesJoinChatByInviteLinkResponse = {
        response?: {
            chat_id?: number;
        };
    };
    type MessagesMarkAsImportantResponse = {
        response?: number[];
    };
    type MessagesPinResponse = {
        response?: Objects.MessagesPinnedMessage;
    };
    type MessagesSearchConversationsResponse = {
        response?: {
            /**
             * Total results number
             */
            count?: number;
            items?: Objects.MessagesConversation[];
            profiles?: Objects.UsersUserFull[];
            groups?: Objects.GroupsGroupFull[];
        };
    };
    type MessagesSearchResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.MessagesMessage[];
        };
    };
    type MessagesSendResponse = {
        /**
         * Message ID
         */
        response?: number;
    };
    type MessagesSendUserIdsResponse = {
        response?: {
            peer_id?: number;
            message_id?: number;
            error?: Objects.BaseMessageError;
        }[];
    };
    type MessagesSetChatPhotoResponse = {
        response?: {
            /**
             * Service message ID
             */
            message_id?: number;
            chat?: Objects.MessagesChat;
        };
    };
    type NewsfeedGetBannedExtendedResponse = {
        response?: {
            groups?: Objects.UsersUserFull[];
            profiles?: Objects.GroupsGroupFull[];
        };
    };
    type NewsfeedGetBannedResponse = {
        response?: {
            groups?: number[];
            members?: number[];
        };
    };
    type NewsfeedGetCommentsResponse = {
        response?: {
            items: Objects.NewsfeedNewsfeedItem[];
            profiles: Objects.UsersUserFull[];
            groups: Objects.GroupsGroupFull[];
            /**
             * New from value
             */
            next_from?: string;
        };
    };
    type NewsfeedGetListsExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.NewsfeedListFull[];
        };
    };
    type NewsfeedGetListsResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.NewsfeedList[];
        };
    };
    type NewsfeedGetMentionsResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.WallWallpostToId[];
        };
    };
    type NewsfeedGetRecommendedResponse = {
        response?: {
            items?: Objects.NewsfeedNewsfeedItem[];
            profiles?: Objects.UsersUserFull[];
            groups?: Objects.GroupsGroupFull[];
            /**
             * New offset value
             */
            new_offset?: string;
            /**
             * Next from value
             */
            next_from?: string;
        };
    };
    type NewsfeedGetSuggestedSourcesResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: (Objects.GroupsGroupFull & Objects.UsersUserXtrType)[];
        };
    };
    type NewsfeedGetResponse = {
        response?: {
            items?: Objects.NewsfeedNewsfeedItem[];
            profiles?: Objects.UsersUserFull[];
            groups?: Objects.GroupsGroupFull[];
            /**
             * New from value
             */
            next_from?: string;
        };
    };
    type NewsfeedSaveListResponse = {
        /**
         * List ID
         */
        response?: number;
    };
    type NewsfeedSearchExtendedResponse = {
        response?: {
            items?: Objects.WallWallpostFull[];
            profiles?: Objects.UsersUserFull[];
            groups?: Objects.GroupsGroupFull[];
            suggested_queries?: string[];
            next_from?: string;
            /**
             * Filtered number
             */
            count?: number;
            /**
             * Total number
             */
            total_count?: number;
        };
    };
    type NewsfeedSearchResponse = {
        response?: {
            items?: Objects.WallWallpostFull[];
            suggested_queries?: string[];
            next_from?: string;
            /**
             * Filtered number
             */
            count?: number;
            /**
             * Total number
             */
            total_count?: number;
        };
    };
    type NotesAddResponse = {
        /**
         * Note ID
         */
        response?: number;
    };
    type NotesCreateCommentResponse = {
        /**
         * Comment ID
         */
        response?: number;
    };
    type NotesGetByIdResponse = {
        response?: Objects.NotesNote;
    };
    type NotesGetCommentsResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.NotesNoteComment[];
        };
    };
    type NotesGetResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.NotesNote[];
        };
    };
    type NotificationsGetResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.NotificationsNotificationItem[];
            profiles?: Objects.UsersUser[];
            groups?: Objects.GroupsGroup[];
            /**
             * Time when user has been checked notifications last time
             */
            last_viewed?: number;
            photos?: Objects.PhotosPhoto[];
            videos?: Objects.VideoVideo[];
            apps?: Objects.AppsApp[];
            next_from?: string;
            ttl?: number;
        };
    };
    type NotificationsMarkAsViewedResponse = {
        /**
         * Result
         */
        response?: Objects.BaseBoolInt;
    };
    type NotificationsSendMessageResponse = {
        response?: Objects.NotificationsSendMessageItem[];
    };
    type OkResponse = {
        response?: Objects.BaseOkResponse;
    };
    type OrdersCancelSubscriptionResponse = {
        /**
         * Result
         */
        response?: Objects.BaseBoolInt;
    };
    type OrdersChangeStateResponse = {
        /**
         * New state
         */
        response?: string;
    };
    type OrdersGetAmountResponse = {
        response?: Objects.OrdersAmount;
    };
    type OrdersGetByIdResponse = {
        response?: Objects.OrdersOrder[];
    };
    type OrdersGetUserSubscriptionByIdResponse = {
        response?: Objects.OrdersSubscription;
    };
    type OrdersGetUserSubscriptionsResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.OrdersSubscription[];
        };
    };
    type OrdersGetResponse = {
        response?: Objects.OrdersOrder[];
    };
    type OrdersUpdateSubscriptionResponse = {
        /**
         * Result
         */
        response?: Objects.BaseBoolInt;
    };
    type PagesGetHistoryResponse = {
        response?: Objects.PagesWikipageHistory[];
    };
    type PagesGetTitlesResponse = {
        response?: Objects.PagesWikipage[];
    };
    type PagesGetVersionResponse = {
        response?: Objects.PagesWikipageFull;
    };
    type PagesGetResponse = {
        response?: Objects.PagesWikipageFull;
    };
    type PagesParseWikiResponse = {
        /**
         * HTML source
         */
        response?: string;
    };
    type PagesSaveAccessResponse = {
        /**
         * Page ID
         */
        response?: number;
    };
    type PagesSaveResponse = {
        /**
         * Page ID
         */
        response?: number;
    };
    type PhotosCopyResponse = {
        /**
         * Photo ID
         * @minimum 1
         */
        response?: number;
    };
    type PhotosCreateAlbumResponse = {
        response?: Objects.PhotosPhotoAlbumFull;
    };
    type PhotosCreateCommentResponse = {
        /**
         * Created comment ID
         */
        response?: number;
    };
    type PhotosDeleteCommentResponse = {
        /**
         * Returns 1 if request has been processed successfully, 0 if the comment is not found
         */
        response?: Objects.BaseBoolInt;
    };
    type PhotosGetAlbumsCountResponse = {
        /**
         * Albums number
         */
        response?: number;
    };
    type PhotosGetAlbumsResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.PhotosPhotoAlbumFull[];
        };
    };
    type PhotosGetAllCommentsResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.PhotosCommentXtrPid[];
        };
    };
    type PhotosGetAllExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.PhotosPhotoFullXtrRealOffset[];
            /**
             * Information whether next page is presented
             */
            more?: Objects.BaseBoolInt;
        };
    };
    type PhotosGetAllResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.PhotosPhotoXtrRealOffset[];
            /**
             * Information whether next page is presented
             */
            more?: Objects.BaseBoolInt;
        };
    };
    type PhotosGetByIdExtendedResponse = {
        response?: Objects.PhotosPhotoFull[];
    };
    type PhotosGetByIdResponse = {
        response?: Objects.PhotosPhoto[];
    };
    type PhotosGetCommentsExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            /**
             * Real offset of the comments
             */
            real_offset?: number;
            items: Objects.WallWallComment[];
            profiles: Objects.UsersUserFull[];
            groups: Objects.GroupsGroupFull[];
        };
    };
    type PhotosGetCommentsResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            /**
             * Real offset of the comments
             */
            real_offset?: number;
            items?: Objects.WallWallComment[];
        };
    };
    type PhotosGetMarketUploadServerResponse = {
        response?: Objects.BaseUploadServer;
    };
    type PhotosGetMessagesUploadServerResponse = {
        response?: Objects.PhotosPhotoUpload;
    };
    type PhotosGetNewTagsResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.PhotosPhotoXtrTagInfo[];
        };
    };
    type PhotosGetTagsResponse = {
        response?: Objects.PhotosPhotoTag[];
    };
    type PhotosGetUploadServerResponse = {
        response?: Objects.PhotosPhotoUpload;
    };
    type PhotosGetUserPhotosExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.PhotosPhotoFull[];
        };
    };
    type PhotosGetUserPhotosResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.PhotosPhoto[];
        };
    };
    type PhotosGetWallUploadServerResponse = {
        response?: Objects.PhotosPhotoUpload;
    };
    type PhotosGetExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.PhotosPhotoFull[];
        };
    };
    type PhotosGetResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.PhotosPhoto[];
        };
    };
    type PhotosPutTagResponse = {
        /**
         * Created tag ID
         */
        response?: number;
    };
    type PhotosRestoreCommentResponse = {
        /**
         * Returns 1 if request has been processed successfully, 0 if the comment is not found
         */
        response?: Objects.BaseBoolInt;
    };
    type PhotosSaveMarketAlbumPhotoResponse = {
        response?: Objects.PhotosPhoto[];
    };
    type PhotosSaveMarketPhotoResponse = {
        response?: Objects.PhotosPhoto[];
    };
    type PhotosSaveMessagesPhotoResponse = {
        response?: Objects.PhotosPhoto[];
    };
    type PhotosSaveOwnerCoverPhotoResponse = {
        response?: Objects.BaseImage[];
    };
    type PhotosSaveOwnerPhotoResponse = {
        response?: {
            /**
             * Photo hash
             */
            photo_hash: string;
            /**
             * Uploaded image url
             */
            photo_src: string;
            /**
             * Uploaded image url
             */
            photo_src_big?: string;
            /**
             * Uploaded image url
             */
            photo_src_small?: string;
            /**
             * Returns 1 if profile photo is saved
             */
            saved?: number;
            /**
             * Created post ID
             */
            post_id?: number;
        };
    };
    type PhotosSaveWallPhotoResponse = {
        response?: Objects.PhotosPhoto[];
    };
    type PhotosSaveResponse = {
        response?: Objects.PhotosPhoto[];
    };
    type PhotosSearchResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.PhotosPhoto[];
        };
    };
    type PollsAddVoteResponse = {
        /**
         * Result
         */
        response?: Objects.BaseBoolInt;
    };
    type PollsCreateResponse = {
        response?: Objects.PollsPoll;
    };
    type PollsDeleteVoteResponse = {
        /**
         * Result
         */
        response?: Objects.BaseBoolInt;
    };
    type PollsGetByIdResponse = {
        response?: Objects.PollsPoll;
    };
    type PollsGetVotersResponse = {
        response?: Objects.PollsVoters[];
    };
    type PrettyCardsCreateResponse = {
        response?: {
            /**
             * Owner ID of created pretty card
             */
            owner_id: number;
            /**
             * Card ID of created pretty card
             */
            card_id: string;
        };
    };
    type PrettyCardsDeleteResponse = {
        response?: {
            /**
             * Owner ID of deleted pretty card
             */
            owner_id: number;
            /**
             * Card ID of deleted pretty card
             */
            card_id: string;
            /**
             * Error reason if error happened
             */
            error?: string;
        };
    };
    type PrettyCardsEditResponse = {
        response?: {
            /**
             * Owner ID of edited pretty card
             */
            owner_id: number;
            /**
             * Card ID of edited pretty card
             */
            card_id: string;
        };
    };
    type PrettyCardsGetByIdResponse = {
        response?: Objects.PrettyCardsPrettyCard[];
    };
    type PrettyCardsGetUploadURLResponse = {
        /**
         * Upload URL
         */
        response?: string;
    };
    type PrettyCardsGetResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.PrettyCardsPrettyCard[];
        };
    };
    type SearchGetHintsResponse = {
        response?: {
            count: number;
            items: Objects.SearchHint[];
            suggested_queries?: string[];
        };
    };
    type SecureCheckTokenResponse = {
        response?: Objects.SecureTokenChecked;
    };
    type SecureGetAppBalanceResponse = {
        /**
         * App balance
         */
        response?: number;
    };
    type SecureGetSMSHistoryResponse = {
        response?: Objects.SecureSmsNotification[];
    };
    type SecureGetTransactionsHistoryResponse = {
        response?: Objects.SecureTransaction[];
    };
    type SecureGetUserLevelResponse = {
        response?: Objects.SecureLevel[];
    };
    type SecureGiveEventStickerResponse = {
        response?: {
            user_id?: number;
            status?: string;
        }[];
    };
    type SecureSendNotificationResponse = {
        response?: number[];
    };
    type StatsGetPostReachResponse = {
        response?: Objects.StatsWallpostStat[];
    };
    type StatsGetResponse = {
        response?: Objects.StatsPeriod[];
    };
    type StatusGetResponse = {
        response?: Objects.StatusStatus;
    };
    type StorageGetKeysResponse = {
        response?: string[];
    };
    type StorageGetResponse = {
        /**
         * Value of key
         */
        response?: string;
    };
    type StorageGetV5110Response = {
        response?: Objects.StorageValue[];
    };
    type StorageGetWithKeysResponse = {
        response?: Objects.StorageValue[];
    };
    type StoriesGetBannedExtendedResponse = {
        response?: {
            /**
             * Stories count
             */
            count: number;
            items: number[];
            profiles: Objects.UsersUserFull[];
            groups: Objects.GroupsGroupFull[];
        };
    };
    type StoriesGetBannedResponse = {
        response?: {
            /**
             * Stories count
             */
            count: number;
            items: number[];
        };
    };
    type StoriesGetByIdExtendedResponse = {
        response?: {
            /**
             * Stories count
             */
            count: number;
            items: Objects.StoriesStory[];
            profiles: Objects.UsersUserFull[];
            groups: Objects.GroupsGroupFull[];
        };
    };
    type StoriesGetByIdResponse = {
        response?: {
            /**
             * Stories count
             */
            count: number;
            items: Objects.StoriesStory[];
        };
    };
    type StoriesGetPhotoUploadServerResponse = {
        response?: {
            /**
             * Upload URL
             */
            upload_url: string;
            /**
             * Users ID who can to see story.
             */
            user_ids: number[];
        };
    };
    type StoriesGetStatsV5200Response = {
        response?: {
            preview?: string;
            achievement?: string;
            achievement_subtitle?: string;
            categories?: Objects.StoriesStatCategory[];
        };
    };
    type StoriesGetStatsResponse = {
        response?: Objects.StoriesStoryStats;
    };
    type StoriesGetVideoUploadServerResponse = {
        response?: {
            /**
             * Upload URL
             */
            upload_url: string;
            /**
             * Users ID who can to see story.
             */
            user_ids: number[];
        };
    };
    type StoriesGetViewersExtendedV5115Response = {
        response?: {
            /**
             * Viewers count
             */
            count: number;
            items: Objects.StoriesViewersItem[];
            hidden_reason?: string;
        };
    };
    type StoriesGetViewersExtendedResponse = {
        response?: {
            /**
             * Viewers count
             */
            count: number;
            items: Objects.UsersUserFull[];
        };
    };
    type StoriesGetV5113Response = {
        response?: {
            count: number;
            items: Objects.StoriesFeedItem[];
            profiles?: Objects.UsersUser[];
            groups?: Objects.GroupsGroup[];
            need_upload_screen?: boolean;
        };
    };
    type StoriesGetResponse = {
        response?: {
            /**
             * Stories count
             */
            count: number;
            items: Objects.StoriesStory[][];
            promo_data?: Objects.StoriesPromoBlock;
            profiles?: Objects.UsersUser[];
            groups?: Objects.GroupsGroup[];
            need_upload_screen?: boolean;
        };
    };
    type StoriesUploadResponse = {
        response?: {
            story: Objects.StoriesStory;
        };
    };
    type StreamingGetServerUrlResponse = {
        response?: {
            /**
             * Server host
             */
            endpoint?: string;
            /**
             * Access key
             */
            key?: string;
        };
    };
    type UsersGetFollowersFieldsResponse = {
        response?: {
            /**
             * Total number of available results
             */
            count: number;
            items: Objects.UsersUserFull[];
        };
    };
    type UsersGetFollowersResponse = {
        response?: {
            /**
             * Total friends number
             */
            count: number;
            items: number[];
        };
    };
    type UsersGetSubscriptionsExtendedResponse = {
        response?: {
            /**
             * Total number of available results
             */
            count: number;
            items: Objects.UsersSubscriptionsItem[];
        };
    };
    type UsersGetSubscriptionsResponse = {
        response?: {
            users: Objects.UsersUsersArray;
            groups: Objects.GroupsGroupsArray;
        };
    };
    type UsersGetResponse = {
        response?: Objects.UsersUserXtrCounters[];
    };
    type UsersSearchResponse = {
        response?: {
            /**
             * Total number of available results
             */
            count?: number;
            items?: Objects.UsersUserFull[];
        };
    };
    type UtilsCheckLinkResponse = {
        response?: Objects.UtilsLinkChecked;
    };
    type UtilsGetLastShortenedLinksResponse = {
        response?: {
            /**
             * Total number of available results
             */
            count?: number;
            items?: Objects.UtilsLastShortenedLink[];
        };
    };
    type UtilsGetLinkStatsExtendedResponse = {
        response?: Objects.UtilsLinkStatsExtended;
    };
    type UtilsGetLinkStatsResponse = {
        response?: Objects.UtilsLinkStats;
    };
    type UtilsGetServerTimeResponse = {
        /**
         * Time as Unixtime
         */
        response?: number;
    };
    type UtilsGetShortLinkResponse = {
        response?: Objects.UtilsShortLink;
    };
    type UtilsResolveScreenNameResponse = {
        response?: Objects.UtilsDomainResolved;
    };
    type VideoAddAlbumResponse = {
        response?: {
            /**
             * Created album ID
             */
            album_id: number;
        };
    };
    type VideoCreateCommentResponse = {
        /**
         * Created comment ID
         */
        response?: number;
    };
    type VideoGetAlbumByIdResponse = {
        response?: Objects.VideoVideoAlbumFull;
    };
    type VideoGetAlbumsByVideoExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count?: number;
            items?: Objects.VideoVideoAlbumFull[];
        };
    };
    type VideoGetAlbumsByVideoResponse = {
        response?: number[];
    };
    type VideoGetAlbumsExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.VideoVideoAlbumFull[];
        };
    };
    type VideoGetAlbumsResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.VideoVideoAlbumFull[];
        };
    };
    type VideoGetCommentsExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.WallWallComment[];
            profiles: Objects.UsersUserMin[];
            groups: Objects.GroupsGroupFull[];
        };
    };
    type VideoGetCommentsResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.WallWallComment[];
        };
    };
    type VideoGetExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.VideoVideoFull[];
            profiles: Objects.UsersUserMin[];
            groups: Objects.GroupsGroupFull[];
        };
    };
    type VideoGetResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.VideoVideo[];
        };
    };
    type VideoRestoreCommentResponse = {
        /**
         * Returns 1 if request has been processed successfully, 0 if the comment is not found
         */
        response?: Objects.BaseBoolInt;
    };
    type VideoSaveResponse = {
        response?: Objects.VideoSaveResult;
    };
    type VideoSearchExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.VideoVideo[];
            profiles: Objects.UsersUserMin[];
            groups: Objects.GroupsGroupFull[];
        };
    };
    type VideoSearchResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.VideoVideo[];
        };
    };
    type WallCreateCommentResponse = {
        response?: {
            /**
             * Created comment ID
             */
            comment_id: number;
        };
    };
    type WallEditResponse = {
        response?: {
            /**
             * Edited post ID
             */
            post_id: number;
        };
    };
    type WallGetByIdExtendedResponse = {
        response?: {
            items: Objects.WallWallpostFull[];
            profiles: Objects.UsersUserFull[];
            groups: Objects.GroupsGroupFull[];
        };
    };
    type WallGetByIdResponse = {
        response?: Objects.WallWallpostFull[];
    };
    type WallGetCommentExtendedResponse = {
        response?: {
            items: Objects.WallWallComment[];
            profiles: Objects.UsersUser[];
            groups: Objects.GroupsGroup[];
        };
    };
    type WallGetCommentResponse = {
        response?: {
            items: Objects.WallWallComment[];
        };
    };
    type WallGetCommentsExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.WallWallComment[];
            show_reply_button?: boolean;
            /**
             * Information whether current user can comment the post
             */
            can_post?: boolean;
            /**
             * Information whether groups can comment the post
             */
            groups_can_post?: boolean;
            /**
             * Count of replies of current level
             */
            current_level_count?: number;
            profiles: Objects.UsersUser[];
            groups: Objects.GroupsGroup[];
        };
    };
    type WallGetCommentsResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.WallWallComment[];
            /**
             * Information whether current user can comment the post
             */
            can_post?: boolean;
            /**
             * Information whether groups can comment the post
             */
            groups_can_post?: boolean;
            /**
             * Count of replies of current level
             */
            current_level_count?: number;
        };
    };
    type WallGetRepostsResponse = {
        response?: {
            items: Objects.WallWallpostFull[];
            profiles: Objects.UsersUser[];
            groups: Objects.GroupsGroup[];
        };
    };
    type WallGetExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.WallWallpostFull[];
            profiles: Objects.UsersUserFull[];
            groups: Objects.GroupsGroupFull[];
        };
    };
    type WallGetResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.WallWallpostFull[];
        };
    };
    type WallPostAdsStealthResponse = {
        response?: {
            /**
             * Created post ID
             */
            post_id: number;
        };
    };
    type WallPostResponse = {
        response?: {
            /**
             * Created post ID
             */
            post_id: number;
        };
    };
    type WallRepostResponse = {
        response?: {
            success: Objects.BaseOkResponse;
            /**
             * Created post ID
             */
            post_id: number;
            /**
             * Reposts number
             * @minimum 1
             */
            reposts_count: number;
            /**
             * Reposts number
             */
            likes_count: number;
        };
    };
    type WallSearchExtendedResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.WallWallpostFull[];
            profiles: Objects.UsersUserFull[];
            groups: Objects.GroupsGroupFull[];
        };
    };
    type WallSearchResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            items: Objects.WallWallpostFull[];
        };
    };
    type WidgetsGetCommentsResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            posts: Objects.WidgetsWidgetComment[];
        };
    };
    type WidgetsGetPagesResponse = {
        response?: {
            /**
             * Total number
             */
            count: number;
            pages: Objects.WidgetsWidgetPage[];
        };
    };
}
export declare namespace Methods {
    interface Account {
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/account.ban
         */
        ban<Params extends {
            owner_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Changes a user password after access is successfully restored with the {@link https://vk.com/dev/auth.restore|auth.restore} method.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/account.changePassword
         */
        changePassword<Params extends {
            /**
             * Session id received after the {@link https://vk.com/dev/auth.restore|auth.restore} method is executed. (If the password is changed right after the access was restored)
             */
            restore_sid?: string;
            /**
             * Hash received after a successful OAuth authorization with a code got by SMS. (If the password is changed right after the access was restored)
             */
            change_password_hash?: string;
            /**
             * Current user password.
             */
            old_password?: string;
            /**
             * New password that will be set as a current
             */
            new_password: string;
        }>(params: Params): Promise<Responses.AccountChangePasswordResponse["response"]>;
        /**
         * Returns a list of active ads (offers) which executed by the user will bring him/her respective number of votes to his balance in the application.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/account.getActiveOffers
         */
        getActiveOffers<Params extends {
            offset?: number;
            /**
             * Number of results to return.
             * @maximum 100
             * @default 100
             */
            count?: number;
        }>(params: Params): Promise<Responses.AccountGetActiveOffersResponse["response"]>;
        /**
         * Gets settings of the user in this application.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/account.getAppPermissions
         */
        getAppPermissions<Params extends {
            /**
             * User ID whose settings information shall be got. By default: current user.
             */
            user_id: number;
        }>(params: Params): Promise<Responses.AccountGetAppPermissionsResponse["response"]>;
        /**
         * Returns a user's blacklist.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/account.getBanned
         */
        getBanned<Params extends {
            /**
             * Offset needed to return a specific subset of results.
             */
            offset?: number;
            /**
             * Number of results to return.
             * @maximum 200
             * @default 20
             */
            count?: number;
        }>(params: Params): Promise<Responses.AccountGetBannedResponse["response"]>;
        /**
         * Returns non-null values of user counters.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/account.getCounters
         */
        getCounters<Params extends {
            /**
             * Counters to be returned.
             */
            filter?: (/**
             * @enum {string} friends, messages, photos, videos, notes, gifts, events, groups, sdk, friends_suggestions */ "friends" | "messages" | "photos" | "videos" | "notes" | "gifts" | "events" | "groups" | "sdk" | "friends_suggestions")[];
        }>(params: Params): Promise<Responses.AccountGetCountersResponse["response"]>;
        /**
         * Returns current account info.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/account.getInfo
         */
        getInfo<Params extends {
            /**
             * Fields to return. Possible values: *'country' — user country,, *'https_required' — is "HTTPS only" option enabled,, *'own_posts_default' — is "Show my posts only" option is enabled,, *'no_wall_replies' — are wall replies disabled or not,, *'intro' — is intro passed by user or not,, *'lang' — user language. By default: all.
             */
            fields?: (/**
             * @enum {string} country, https_required, own_posts_default, no_wall_replies, intro, lang */ "country" | "https_required" | "own_posts_default" | "no_wall_replies" | "intro" | "lang")[];
        }>(params: Params): Promise<Responses.AccountGetInfoResponse["response"]>;
        /**
         * Returns the current account info.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/account.getProfileInfo
         */
        getProfileInfo<Params extends never>(params?: Params): Promise<Responses.AccountGetProfileInfoResponse["response"]>;
        /**
         * Gets settings of push notifications.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/account.getPushSettings
         */
        getPushSettings<Params extends {
            /**
             * Unique device ID.
             */
            device_id?: string;
        }>(params: Params): Promise<Responses.AccountGetPushSettingsResponse["response"]>;
        /**
         * Subscribes an iOS/Android/Windows Phone-based device to receive push notifications
         * @async
         * @access user
         *
         * @see https://vk.com/dev/account.registerDevice
         */
        registerDevice<Params extends {
            /**
             * Device token used to send notifications. (for mpns, the token shall be URL for sending of notifications)
             */
            token: string;
            /**
             * String name of device model.
             */
            device_model?: string;
            /**
             * Device year.
             */
            device_year?: number;
            /**
             * Unique device ID.
             */
            device_id: string;
            /**
             * String version of device operating system.
             */
            system_version?: string;
            /**
             * Push settings in a {@link https://vk.com/dev/push_settings|special format}.
             */
            settings?: string;
            sandbox?: boolean;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits current profile info.
         * @async
         * @access user
         * @throws {Errors.ApiErrorInvalidAddress} - Invalid screen name
         * @see https://vk.com/dev/account.saveProfileInfo
         */
        saveProfileInfo<Params extends {
            /**
             * User first name.
             */
            first_name?: string;
            /**
             * User last name.
             */
            last_name?: string;
            /**
             * User maiden name (female only)
             */
            maiden_name?: string;
            /**
             * User screen name.
             */
            screen_name?: string;
            /**
             * ID of the name change request to be canceled. If this parameter is sent, all the others are ignored.
             */
            cancel_request_id?: number;
            /**
             * User sex. Possible values: , * '1' – female,, * '2' – male.
             */
            sex?: number;
            /**
             * User relationship status. Possible values: , * '1' – single,, * '2' – in a relationship,, * '3' – engaged,, * '4' – married,, * '5' – it's complicated,, * '6' – actively searching,, * '7' – in love,, * '0' – not specified.
             */
            relation?: number;
            /**
             * ID of the relationship partner.
             */
            relation_partner_id?: number;
            /**
             * User birth date, format: DD.MM.YYYY.
             */
            bdate?: string;
            /**
             * Birth date visibility. Returned values: , * '1' – show birth date,, * '2' – show only month and day,, * '0' – hide birth date.
             */
            bdate_visibility?: number;
            /**
             * User home town.
             */
            home_town?: string;
            /**
             * User country.
             */
            country_id?: number;
            /**
             * User city.
             */
            city_id?: number;
            /**
             * Status text.
             */
            status?: string;
        }>(params: Params): Promise<Responses.AccountSaveProfileInfoResponse["response"]>;
        /**
         * Allows to edit the current account info.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/account.setInfo
         */
        setInfo<Params extends {
            /**
             * Setting name.
             */
            name?: string;
            /**
             * Setting value.
             */
            value?: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Sets an application screen name (up to 17 characters), that is shown to the user in the left menu.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessMenu} - Access to the menu of the user denied
         * @see https://vk.com/dev/account.setNameInMenu
         */
        setNameInMenu<Params extends {
            /**
             * User ID.
             */
            user_id: number;
            /**
             * Application screen name.
             */
            name?: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Marks a current user as offline.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/account.setOffline
         */
        setOffline<Params extends never>(params?: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Marks the current user as online for 15 minutes.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/account.setOnline
         */
        setOnline<Params extends {
            /**
             * '1' if videocalls are available for current device.
             */
            voip?: boolean;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Change push settings.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/account.setPushSettings
         */
        setPushSettings<Params extends {
            /**
             * Unique device ID.
             */
            device_id: string;
            /**
             * Push settings in a {@link https://vk.com/dev/push_settings|special format}.
             */
            settings?: string;
            /**
             * Notification key.
             */
            key?: string;
            /**
             * New value for the key in a {@link https://vk.com/dev/push_settings|special format}.
             */
            value?: string[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Mutes push notifications for the set period of time.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/account.setSilenceMode
         */
        setSilenceMode<Params extends {
            /**
             * Unique device ID.
             */
            device_id?: string;
            /**
             * Time in seconds for what notifications should be disabled. '-1' to disable forever.
             */
            time?: number;
            /**
             * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'Chat ID', e.g. '2000000001'. For community: '- Community ID', e.g. '-12345'. "
             */
            peer_id?: number;
            /**
             * '1' — to enable sound in this dialog, '0' — to disable sound. Only if 'peer_id' contains user or community ID.
             */
            sound?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/account.unban
         */
        unban<Params extends {
            owner_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Unsubscribes a device from push notifications.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/account.unregisterDevice
         */
        unregisterDevice<Params extends {
            /**
             * Unique device ID.
             */
            device_id?: string;
            sandbox?: boolean;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
    }
    interface Ads {
        /**
         * Adds managers and/or supervisors to advertising account.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.addOfficeUsers
         */
        addOfficeUsers<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Serialized JSON array of objects that describe added managers. Description of 'user_specification' objects see below.
             */
            data: string;
        }>(params: Params): Promise<Responses.AdsAddOfficeUsersResponse["response"]>;
        /**
         * Allows to check the ad link.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/ads.checkLink
         */
        checkLink<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Object type: *'community' — community,, *'post' — community post,, *'application' — VK application,, *'video' — video,, *'site' — external site.
             * @enum {string} community, post, application, video, site
             */
            link_type: "community" | "post" | "application" | "video" | "site";
            /**
             * Object URL.
             */
            link_url: string;
            /**
             * Campaign ID
             */
            campaign_id?: number;
        }>(params: Params): Promise<Responses.AdsCheckLinkResponse["response"]>;
        /**
         * Creates ads.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAdsPartialSuccess} - Some part of the request has not been completed
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.createAds
         */
        createAds<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Serialized JSON array of objects that describe created ads. Description of 'ad_specification' objects see below.
             */
            data: string;
        }>(params: Params): Promise<Responses.AdsCreateAdsResponse["response"]>;
        /**
         * Creates advertising campaigns.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAdsPartialSuccess} - Some part of the request has not been completed
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.createCampaigns
         */
        createCampaigns<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Serialized JSON array of objects that describe created campaigns. Description of 'campaign_specification' objects see below.
             */
            data: string;
        }>(params: Params): Promise<Responses.AdsCreateCampaignsResponse["response"]>;
        /**
         * Creates clients of an advertising agency.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAdsPartialSuccess} - Some part of the request has not been completed
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.createClients
         */
        createClients<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Serialized JSON array of objects that describe created campaigns. Description of 'client_specification' objects see below.
             */
            data: string;
        }>(params: Params): Promise<Responses.AdsCreateClientsResponse["response"]>;
        /**
         * Creates a group to re-target ads for users who visited advertiser's site (viewed information about the product, registered, etc.).
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.createTargetGroup
         */
        createTargetGroup<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * 'Only for advertising agencies.', ID of the client with the advertising account where the group will be created.
             */
            client_id?: number;
            /**
             * Name of the target group — a string up to 64 characters long.
             */
            name: string;
            /**
             * 'For groups with auditory created with pixel code only.', , Number of days after that users will be automatically removed from the group.
             * @maximum 720
             * @default 720
             */
            lifetime?: number;
            target_pixel_id?: number;
            target_pixel_rules?: string;
        }>(params: Params): Promise<Responses.AdsCreateTargetGroupResponse["response"]>;
        /**
         * Archives ads.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAdsObjectDeleted} - Object deleted
         * @throws {Errors.ApiErrorAdsPartialSuccess} - Some part of the request has not been completed
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.deleteAds
         */
        deleteAds<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Serialized JSON array with ad IDs.
             */
            ids: string;
        }>(params: Params): Promise<Responses.AdsDeleteAdsResponse["response"]>;
        /**
         * Archives advertising campaigns.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAdsObjectDeleted} - Object deleted
         * @throws {Errors.ApiErrorAdsPartialSuccess} - Some part of the request has not been completed
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.deleteCampaigns
         */
        deleteCampaigns<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Serialized JSON array with IDs of deleted campaigns.
             */
            ids: string;
        }>(params: Params): Promise<Responses.AdsDeleteCampaignsResponse["response"]>;
        /**
         * Archives clients of an advertising agency.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAdsObjectDeleted} - Object deleted
         * @throws {Errors.ApiErrorAdsPartialSuccess} - Some part of the request has not been completed
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.deleteClients
         */
        deleteClients<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Serialized JSON array with IDs of deleted clients.
             */
            ids: string;
        }>(params: Params): Promise<Responses.AdsDeleteClientsResponse["response"]>;
        /**
         * Deletes a retarget group.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.deleteTargetGroup
         */
        deleteTargetGroup<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * 'Only for advertising agencies.' , ID of the client with the advertising account where the group will be created.
             */
            client_id?: number;
            /**
             * Group ID.
             */
            target_group_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns a list of advertising accounts.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/ads.getAccounts
         */
        getAccounts<Params extends never>(params?: Params): Promise<Responses.AdsGetAccountsResponse["response"]>;
        /**
         * Returns number of ads.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.getAds
         */
        getAds<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Filter by ads. Serialized JSON array with ad IDs. If the parameter is null, all ads will be shown.
             */
            ad_ids?: string;
            /**
             * Filter by advertising campaigns. Serialized JSON array with campaign IDs. If the parameter is null, ads of all campaigns will be shown.
             */
            campaign_ids?: string;
            /**
             * 'Available and required for advertising agencies.' ID of the client ads are retrieved from.
             */
            client_id?: number;
            /**
             * Flag that specifies whether archived ads shall be shown: *0 — show only active ads,, *1 — show all ads.
             */
            include_deleted?: boolean;
            /**
             * Limit of number of returned ads. Used only if ad_ids parameter is null, and 'campaign_ids' parameter contains ID of only one campaign.
             */
            limit?: number;
            /**
             * Offset. Used in the same cases as 'limit' parameter.
             */
            offset?: number;
        }>(params: Params): Promise<Responses.AdsGetAdsResponse["response"]>;
        /**
         * Returns descriptions of ad layouts.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.getAdsLayout
         */
        getAdsLayout<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Filter by ads. Serialized JSON array with ad IDs. If the parameter is null, all ads will be shown.
             */
            ad_ids?: string;
            /**
             * Filter by advertising campaigns. Serialized JSON array with campaign IDs. If the parameter is null, ads of all campaigns will be shown.
             */
            campaign_ids?: string;
            /**
             * 'For advertising agencies.' ID of the client ads are retrieved from.
             */
            client_id?: number;
            /**
             * Flag that specifies whether archived ads shall be shown. *0 — show only active ads,, *1 — show all ads.
             */
            include_deleted?: boolean;
            /**
             * Limit of number of returned ads. Used only if 'ad_ids' parameter is null, and 'campaign_ids' parameter contains ID of only one campaign.
             */
            limit?: number;
            /**
             * Offset. Used in the same cases as 'limit' parameter.
             */
            offset?: number;
        }>(params: Params): Promise<Responses.AdsGetAdsLayoutResponse["response"]>;
        /**
         * Returns ad targeting parameters.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.getAdsTargeting
         */
        getAdsTargeting<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Filter by ads. Serialized JSON array with ad IDs. If the parameter is null, all ads will be shown.
             */
            ad_ids?: string;
            /**
             * Filter by advertising campaigns. Serialized JSON array with campaign IDs. If the parameter is null, ads of all campaigns will be shown.
             */
            campaign_ids?: string;
            /**
             * 'For advertising agencies.' ID of the client ads are retrieved from.
             */
            client_id?: number;
            /**
             * flag that specifies whether archived ads shall be shown: *0 — show only active ads,, *1 — show all ads.
             */
            include_deleted?: boolean;
            /**
             * Limit of number of returned ads. Used only if 'ad_ids' parameter is null, and 'campaign_ids' parameter contains ID of only one campaign.
             */
            limit?: number;
            /**
             * Offset needed to return a specific subset of results.
             */
            offset?: number;
        }>(params: Params): Promise<Responses.AdsGetAdsTargetingResponse["response"]>;
        /**
         * Returns current budget of the advertising account.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.getBudget
         */
        getBudget<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
        }>(params: Params): Promise<Responses.AdsGetBudgetResponse["response"]>;
        /**
         * Returns a list of campaigns in an advertising account.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.getCampaigns
         */
        getCampaigns<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * 'For advertising agencies'. ID of the client advertising campaigns are retrieved from.
             */
            client_id?: number;
            /**
             * Flag that specifies whether archived ads shall be shown. *0 — show only active campaigns,, *1 — show all campaigns.
             */
            include_deleted?: boolean;
            /**
             * Filter of advertising campaigns to show. Serialized JSON array with campaign IDs. Only campaigns that exist in 'campaign_ids' and belong to the specified advertising account will be shown. If the parameter is null, all campaigns will be shown.
             */
            campaign_ids?: string;
            fields?: "ads_count"[];
        }>(params: Params): Promise<Responses.AdsGetCampaignsResponse["response"]>;
        /**
         * Returns a list of possible ad categories.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/ads.getCategories
         */
        getCategories<Params extends {
            /**
             * Language. The full list of supported languages is {@link https://vk.com/dev/api_requests|here}.
             */
            lang?: string;
        }>(params: Params): Promise<Responses.AdsGetCategoriesResponse["response"]>;
        /**
         * Returns a list of advertising agency's clients.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.getClients
         */
        getClients<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
        }>(params: Params): Promise<Responses.AdsGetClientsResponse["response"]>;
        /**
         * Returns demographics for ads or campaigns.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.getDemographics
         */
        getDemographics<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Type of requested objects listed in 'ids' parameter: *ad — ads,, *campaign — campaigns.
             * @enum {string} ad, campaign
             */
            ids_type: "ad" | "campaign";
            /**
             * IDs requested ads or campaigns, separated with a comma, depending on the value set in 'ids_type'. Maximum 2000 objects.
             */
            ids: string;
            /**
             * Data grouping by dates: *day — statistics by days,, *month — statistics by months,, *overall — overall statistics. 'date_from' and 'date_to' parameters set temporary limits.
             * @enum {string} day, month, overall
             */
            period: "day" | "month" | "overall";
            /**
             * Date to show statistics from. For different value of 'period' different date format is used: *day: YYYY-MM-DD, example: 2011-09-27 — September 27, 2011, **0 — day it was created on,, *month: YYYY-MM, example: 2011-09 — September 2011, **0 — month it was created in,, *overall: 0.
             */
            date_from: string;
            /**
             * Date to show statistics to. For different value of 'period' different date format is used: *day: YYYY-MM-DD, example: 2011-09-27 — September 27, 2011, **0 — current day,, *month: YYYY-MM, example: 2011-09 — September 2011, **0 — current month,, *overall: 0.
             */
            date_to: string;
        }>(params: Params): Promise<Responses.AdsGetDemographicsResponse["response"]>;
        /**
         * Returns information about current state of a counter — number of remaining runs of methods and time to the next counter nulling in seconds.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/ads.getFloodStats
         */
        getFloodStats<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
        }>(params: Params): Promise<Responses.AdsGetFloodStatsResponse["response"]>;
        /**
         * Returns a list of managers and supervisors of advertising account.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.getOfficeUsers
         */
        getOfficeUsers<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
        }>(params: Params): Promise<Responses.AdsGetOfficeUsersResponse["response"]>;
        /**
         * Returns detailed statistics of promoted posts reach from campaigns and ads.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.getPostsReach
         */
        getPostsReach<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Type of requested objects listed in 'ids' parameter: *ad — ads,, *campaign — campaigns.
             * @enum {string} ad, campaign
             */
            ids_type: "ad" | "campaign";
            /**
             * IDs requested ads or campaigns, separated with a comma, depending on the value set in 'ids_type'. Maximum 100 objects.
             */
            ids: string;
        }>(params: Params): Promise<Responses.AdsGetPostsReachResponse["response"]>;
        /**
         * Returns a reason of ad rejection for pre-moderation.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.getRejectionReason
         */
        getRejectionReason<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Ad ID.
             */
            ad_id: number;
        }>(params: Params): Promise<Responses.AdsGetRejectionReasonResponse["response"]>;
        /**
         * Returns statistics of performance indicators for ads, campaigns, clients or the whole account.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.getStatistics
         */
        getStatistics<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Type of requested objects listed in 'ids' parameter: *ad — ads,, *campaign — campaigns,, *client — clients,, *office — account.
             * @enum {string} ad, campaign, client, office
             */
            ids_type: "ad" | "campaign" | "client" | "office";
            /**
             * IDs requested ads, campaigns, clients or account, separated with a comma, depending on the value set in 'ids_type'. Maximum 2000 objects.
             */
            ids: string;
            /**
             * Data grouping by dates: *day — statistics by days,, *month — statistics by months,, *overall — overall statistics. 'date_from' and 'date_to' parameters set temporary limits.
             * @enum {string} day, month, overall
             */
            period: "day" | "month" | "overall";
            /**
             * Date to show statistics from. For different value of 'period' different date format is used: *day: YYYY-MM-DD, example: 2011-09-27 — September 27, 2011, **0 — day it was created on,, *month: YYYY-MM, example: 2011-09 — September 2011, **0 — month it was created in,, *overall: 0.
             */
            date_from: string;
            /**
             * Date to show statistics to. For different value of 'period' different date format is used: *day: YYYY-MM-DD, example: 2011-09-27 — September 27, 2011, **0 — current day,, *month: YYYY-MM, example: 2011-09 — September 2011, **0 — current month,, *overall: 0.
             */
            date_to: string;
            /**
             * Additional fields to add to statistics
             */
            stats_fields?: "views_times"[];
        }>(params: Params): Promise<Responses.AdsGetStatisticsResponse["response"]>;
        /**
         * Returns a set of auto-suggestions for various targeting parameters.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/ads.getSuggestions
         */
        getSuggestions<Params extends {
            /**
             * Section, suggestions are retrieved in. Available values: *countries — request of a list of countries. If q is not set or blank, a short list of countries is shown. Otherwise, a full list of countries is shown. *regions — requested list of regions. 'country' parameter is required. *cities — requested list of cities. 'country' parameter is required. *districts — requested list of districts. 'cities' parameter is required. *stations — requested list of subway stations. 'cities' parameter is required. *streets — requested list of streets. 'cities' parameter is required. *schools — requested list of educational organizations. 'cities' parameter is required. *interests — requested list of interests. *positions — requested list of positions (professions). *group_types — requested list of group types. *religions — requested list of religious commitments. *browsers — requested list of browsers and mobile devices.
             * @enum {string} countries, regions, cities, districts, stations, streets, schools, interests, positions, group_types, religions, browsers
             */
            section: "countries" | "regions" | "cities" | "districts" | "stations" | "streets" | "schools" | "interests" | "positions" | "group_types" | "religions" | "browsers";
            /**
             * Objects IDs separated by commas. If the parameter is passed, 'q, country, cities' should not be passed.
             */
            ids?: string;
            /**
             * Filter-line of the request (for countries, regions, cities, streets, schools, interests, positions).
             */
            q?: string;
            /**
             * ID of the country objects are searched in.
             */
            country?: number;
            /**
             * IDs of cities where objects are searched in, separated with a comma.
             */
            cities?: string;
            /**
             * Language of the returned string values. Supported languages: *ru — Russian,, *ua — Ukrainian,, *en — English.
             * @enum {string} ru, ua, en
             */
            lang?: "ru" | "ua" | "en";
        }>(params: Params): Promise<Responses.AdsGetSuggestionsResponse["response"]>;
        /**
         * Returns a list of target groups.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.getTargetGroups
         */
        getTargetGroups<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * 'Only for advertising agencies.', ID of the client with the advertising account where the group will be created.
             */
            client_id?: number;
            /**
             * '1' — to return pixel code.
             */
            extended?: boolean;
        }>(params: Params): Promise<Responses.AdsGetTargetGroupsResponse["response"]>;
        /**
         * Returns the size of targeting audience, and also recommended values for CPC and CPM.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.getTargetingStats
         */
        getTargetingStats<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            client_id?: number;
            /**
             * Serialized JSON object that describes targeting parameters. Description of 'criteria' object see below.
             */
            criteria?: string;
            /**
             * ID of an ad which targeting parameters shall be analyzed.
             */
            ad_id?: number;
            /**
             * Ad format. Possible values: *'1' — image and text,, *'2' — big image,, *'3' — exclusive format,, *'4' — community, square image,, *'7' — special app format,, *'8' — special community format,, *'9' — post in community,, *'10' — app board.
             */
            ad_format?: number;
            /**
             * Platforms to use for ad showing. Possible values: (for 'ad_format' = '1'), *'0' — VK and partner sites,, *'1' — VK only. (for 'ad_format' = '9'), *'all' — all platforms,, *'desktop' — desktop version,, *'mobile' — mobile version and apps.
             */
            ad_platform?: string;
            ad_platform_no_wall?: string;
            ad_platform_no_ad_network?: string;
            /**
             * URL for the advertised object.
             */
            link_url: string;
            /**
             * Domain of the advertised object.
             */
            link_domain?: string;
        }>(params: Params): Promise<Responses.AdsGetTargetingStatsResponse["response"]>;
        /**
         * Returns URL to upload an ad photo to.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/ads.getUploadURL
         */
        getUploadURL<Params extends {
            /**
             * Ad format: *1 — image and text,, *2 — big image,, *3 — exclusive format,, *4 — community, square image,, *7 — special app format.
             */
            ad_format: number;
            icon?: number;
        }>(params: Params): Promise<Responses.AdsGetUploadURLResponse["response"]>;
        /**
         * Returns URL to upload an ad video to.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/ads.getVideoUploadURL
         */
        getVideoUploadURL<Params extends never>(params?: Params): Promise<Responses.AdsGetVideoUploadURLResponse["response"]>;
        /**
         * Imports a list of advertiser's contacts to count VK registered users against the target group.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.importTargetContacts
         */
        importTargetContacts<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * 'Only for advertising agencies.' , ID of the client with the advertising account where the group will be created.
             */
            client_id?: number;
            /**
             * Target group ID.
             */
            target_group_id: number;
            /**
             * List of phone numbers, emails or user IDs separated with a comma.
             */
            contacts: string;
        }>(params: Params): Promise<Responses.AdsImportTargetContactsResponse["response"]>;
        /**
         * Removes managers and/or supervisors from advertising account.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.removeOfficeUsers
         */
        removeOfficeUsers<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Serialized JSON array with IDs of deleted managers.
             */
            ids: string;
        }>(params: Params): Promise<Responses.AdsRemoveOfficeUsersResponse["response"]>;
        /**
         * Edits ads.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.updateAds
         */
        updateAds<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Serialized JSON array of objects that describe changes in ads. Description of 'ad_edit_specification' objects see below.
             */
            data: string;
        }>(params: Params): Promise<Responses.AdsUpdateAdsResponse["response"]>;
        /**
         * Edits advertising campaigns.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAdsPartialSuccess} - Some part of the request has not been completed
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.updateCampaigns
         */
        updateCampaigns<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Serialized JSON array of objects that describe changes in campaigns. Description of 'campaign_mod' objects see below.
             */
            data: string;
        }>(params: Params): Promise<Responses.AdsUpdateCampaignsResponse["response"]>;
        /**
         * Edits clients of an advertising agency.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.updateClients
         */
        updateClients<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * Serialized JSON array of objects that describe changes in clients. Description of 'client_mod' objects see below.
             */
            data: string;
        }>(params: Params): Promise<Responses.AdsUpdateClientsResponse["response"]>;
        /**
         * Edits a retarget group.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWeightedFlood} - Permission denied. You have requested too many actions this day. Try later.
         * @see https://vk.com/dev/ads.updateTargetGroup
         */
        updateTargetGroup<Params extends {
            /**
             * Advertising account ID.
             */
            account_id: number;
            /**
             * 'Only for advertising agencies.' , ID of the client with the advertising account where the group will be created.
             */
            client_id?: number;
            /**
             * Group ID.
             */
            target_group_id: number;
            /**
             * New name of the target group — a string up to 64 characters long.
             */
            name: string;
            /**
             * Domain of the site where user accounting code will be placed.
             */
            domain?: string;
            /**
             * 'Only for the groups that get audience from sites with user accounting code.', Time in days when users added to a retarget group will be automatically excluded from it. '0' – automatic exclusion is off.
             * @maximum 720
             * @default 720
             */
            lifetime?: number;
            target_pixel_id?: number;
            target_pixel_rules?: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
    }
    interface AppWidgets {
        /**
         * Allows to update community app widget
         * @async
         * @access group
         * @throws {Errors.ApiErrorCompile} - Unable to compile code
         * @throws {Errors.ApiErrorRuntime} - Runtime error occurred during code invocation
         * @throws {Errors.ApiErrorBlocked} - Content blocked
         * @throws {Errors.ApiErrorWallAccessPost} - Access to wall's post denied
         * @throws {Errors.ApiErrorWallAccessReplies} - Access to post comments denied
         * @throws {Errors.ApiErrorParamGroupId} - Invalid group id
         * @see https://vk.com/dev/appWidgets.update
         */
        update<Params extends {
            code: string;
            /**
             *
             * @enum {string} compact_list, cover_list, donation, list, match, matches, table, text, tiles
             */
            type: "compact_list" | "cover_list" | "donation" | "list" | "match" | "matches" | "table" | "text" | "tiles";
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
    }
    interface Apps {
        /**
         * Deletes all request notifications from the current app.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/apps.deleteAppRequests
         */
        deleteAppRequests<Params extends never>(params?: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns applications data.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/apps.get
         */
        get<Params extends {
            /**
             * Application ID
             */
            app_id?: number;
            /**
             * List of application ID
             */
            app_ids?: string[];
            /**
             * platform. Possible values: *'ios' — iOS,, *'android' — Android,, *'winphone' — Windows Phone,, *'web' — приложения на vk.com. By default: 'web'.
             * @enum {string} android, ios, web, winphone
             * @default web
             */
            platform?: "android" | "ios" | "web" | "winphone";
            extended?: boolean;
            return_friends?: boolean;
            /**
             * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'contacts', 'education', 'online', 'counters', 'relation', 'last_seen', 'activity', 'can_write_private_message', 'can_see_all_posts', 'can_post', 'universities', (only if return_friends - 1)
             */
            fields?: Objects.UsersFields[];
            /**
             * Case for declension of user name and surname: 'nom' — nominative (default),, 'gen' — genitive,, 'dat' — dative,, 'acc' — accusative,, 'ins' — instrumental,, 'abl' — prepositional. (only if 'return_friends' = '1')
             * @enum {string} nom, gen, dat, acc, ins, abl
             */
            name_case?: "nom" | "gen" | "dat" | "acc" | "ins" | "abl";
        }>(params: Params): Promise<Responses.AppsGetResponse["response"]>;
        /**
         * Returns a list of applications (apps) available to users in the App Catalog.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/apps.getCatalog
         */
        getCatalog<Params extends {
            /**
             * Sort order: 'popular_today' — popular for one day (default), 'visitors' — by visitors number , 'create_date' — by creation date, 'growth_rate' — by growth rate, 'popular_week' — popular for one week
             * @enum {string} popular_today, visitors, create_date, growth_rate, popular_week
             */
            sort?: "popular_today" | "visitors" | "create_date" | "growth_rate" | "popular_week";
            /**
             * Offset required to return a specific subset of apps.
             */
            offset?: number;
            /**
             * Number of apps to return.
             * @default 100
             */
            count: number;
            platform?: string;
            /**
             * '1' — to return additional fields 'screenshots', 'MAU', 'catalog_position', and 'international'. If set, 'count' must be less than or equal to '100'. '0' — not to return additional fields (default).
             */
            extended?: boolean;
            return_friends?: boolean;
            fields?: Objects.UsersFields[];
            name_case?: string;
            /**
             * Search query string.
             */
            q?: string;
            genre_id?: number;
            /**
             * 'installed' — to return list of installed apps (only for mobile platform).
             * @enum {string} favorite, featured, installed, new
             */
            filter?: "favorite" | "featured" | "installed" | "new";
        }>(params: Params): Promise<Responses.AppsGetCatalogResponse["response"]>;
        /**
         * Creates friends list for requests and invites in current app.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/apps.getFriendsList
         */
        getFriendsList<Params extends {
            extended?: boolean;
            /**
             * List size.
             * @maximum 5000
             * @default 20
             */
            count?: number;
            offset?: number;
            /**
             * List type. Possible values: * 'invite' — available for invites (don't play the game),, * 'request' — available for request (play the game). By default: 'invite'.
             * @enum {string} invite, request
             * @default invite
             */
            type?: "invite" | "request";
            /**
             * Additional profile fields, see {@link https://vk.com/dev/fields|description}.
             */
            fields?: Objects.UsersFields[];
        }>(params: Params): Promise<Responses.AppsGetFriendsListResponse["response"]>;
        /**
         * Returns players rating in the game.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/apps.getLeaderboard
         */
        getLeaderboard<Params extends {
            /**
             * Leaderboard type. Possible values: *'level' — by level,, *'points' — by mission points,, *'score' — by score ().
             * @enum {string} level, points, score
             */
            type: "level" | "points" | "score";
            /**
             * Rating type. Possible values: *'1' — global rating among all players,, *'0' — rating among user friends.
             * @default 1
             */
            global?: boolean;
            /**
             * 1 — to return additional info about users
             */
            extended?: boolean;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.AppsGetLeaderboardExtendedResponse["response"]> : Promise<Responses.AppsGetLeaderboardResponse["response"]>;
        /**
         * Returns scopes for auth
         * @async
         * @access user
         *
         * @see https://vk.com/dev/apps.getScopes
         */
        getScopes<Params extends {
            /**
             *
             * @enum {string} group, user
             * @default user
             */
            type?: "group" | "user";
        }>(params: Params): Promise<Responses.AppsGetScopesResponse["response"]>;
        /**
         * Returns user score in app
         * @async
         * @access user
         *
         * @see https://vk.com/dev/apps.getScore
         */
        getScore<Params extends {
            user_id: number;
        }>(params: Params): Promise<Responses.AppsGetScoreResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @throws {Errors.ApiErrorActionFailed} - Unable to process action
         * @see https://vk.com/dev/apps.promoHasActiveGift
         */
        promoHasActiveGift<Params extends {
            /**
             * Id of game promo action
             */
            promo_id: number;
            user_id?: number;
        }>(params: Params): Promise<Responses.BaseBoolResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @throws {Errors.ApiErrorActionFailed} - Unable to process action
         * @see https://vk.com/dev/apps.promoUseGift
         */
        promoUseGift<Params extends {
            /**
             * Id of game promo action
             */
            promo_id: number;
            user_id?: number;
        }>(params: Params): Promise<Responses.BaseBoolResponse["response"]>;
        /**
         * Sends a request to another user in an app that uses VK authorization.
         * @async
         * @access user
         * @throws {Errors.ApiErrorFlood} - Flood control
         * @see https://vk.com/dev/apps.sendRequest
         */
        sendRequest<Params extends {
            /**
             * id of the user to send a request
             */
            user_id: number;
            /**
             * request text
             */
            text?: string;
            /**
             * request type. Values: 'invite' – if the request is sent to a user who does not have the app installed,, 'request' – if a user has already installed the app
             * @enum {string} invite, request
             * @default request
             */
            type?: "invite" | "request";
            name?: string;
            /**
             * special string key to be sent with the request
             */
            key?: string;
            separate?: boolean;
        }>(params: Params): Promise<Responses.AppsSendRequestResponse["response"]>;
    }
    interface Auth {
        /**
         * Checks a user's phone number for correctness.
         * @async
         * @access user
         * @access open
         * @throws {Errors.ApiErrorPhoneAlreadyUsed} - This phone number is used by another user
         * @throws {Errors.ApiErrorAuthDelay} - Processing.. Try later
         * @throws {Errors.ApiErrorParamPhone} - Invalid phone number
         * @see https://vk.com/dev/auth.checkPhone
         */
        checkPhone<Params extends {
            /**
             * Phone number.
             */
            phone: string;
            /**
             * User ID.
             */
            client_id?: number;
            client_secret?: string;
            auth_by_phone?: boolean;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Allows to restore account access using a code received via SMS. " This method is only available for apps with {@link https://vk.com/dev/auth_direct|Direct authorization} access. "
         * @async
         * @access user
         * @access open
         * @throws {Errors.ApiErrorAuthFloodError} - Too many auth attempts, try again later
         * @see https://vk.com/dev/auth.restore
         */
        restore<Params extends {
            /**
             * User phone number.
             */
            phone: string;
            /**
             * User last name.
             */
            last_name: string;
        }>(params: Params): Promise<Responses.AuthRestoreResponse["response"]>;
    }
    interface Board {
        /**
         * Creates a new topic on a community's discussion board.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/board.addTopic
         */
        addTopic<Params extends {
            /**
             * ID of the community that owns the discussion board.
             */
            group_id: number;
            /**
             * Topic title.
             */
            title: string;
            /**
             * Text of the topic.
             */
            text?: string;
            /**
             * For a community: '1' — to post the topic as by the community, '0' — to post the topic as by the user (default)
             */
            from_group?: boolean;
            /**
             * List of media objects attached to the topic, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media object: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media owner. '<media_id>' — Media ID. Example: "photo100172_166443618,photo66748_265827614", , "NOTE: If you try to attach more than one reference, an error will be thrown.",
             */
            attachments?: string[];
        }>(params: Params): Promise<Responses.BoardAddTopicResponse["response"]>;
        /**
         * Closes a topic on a community's discussion board so that comments cannot be posted.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/board.closeTopic
         */
        closeTopic<Params extends {
            /**
             * ID of the community that owns the discussion board.
             */
            group_id: number;
            /**
             * Topic ID.
             */
            topic_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Adds a comment on a topic on a community's discussion board.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/board.createComment
         */
        createComment<Params extends {
            /**
             * ID of the community that owns the discussion board.
             */
            group_id: number;
            /**
             * ID of the topic to be commented on.
             */
            topic_id: number;
            /**
             * (Required if 'attachments' is not set.) Text of the comment.
             */
            message?: string;
            /**
             * (Required if 'text' is not set.) List of media objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media object: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media owner. '<media_id>' — Media ID.
             */
            attachments?: string[];
            /**
             * '1' — to post the comment as by the community, '0' — to post the comment as by the user (default)
             */
            from_group?: boolean;
            /**
             * Sticker ID.
             */
            sticker_id?: number;
            /**
             * Unique identifier to avoid repeated comments.
             */
            guid?: string;
        }>(params: Params): Promise<Responses.BoardCreateCommentResponse["response"]>;
        /**
         * Deletes a comment on a topic on a community's discussion board.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/board.deleteComment
         */
        deleteComment<Params extends {
            /**
             * ID of the community that owns the discussion board.
             */
            group_id: number;
            /**
             * Topic ID.
             */
            topic_id: number;
            /**
             * Comment ID.
             */
            comment_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Deletes a topic from a community's discussion board.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/board.deleteTopic
         */
        deleteTopic<Params extends {
            /**
             * ID of the community that owns the discussion board.
             */
            group_id: number;
            /**
             * Topic ID.
             */
            topic_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits a comment on a topic on a community's discussion board.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/board.editComment
         */
        editComment<Params extends {
            /**
             * ID of the community that owns the discussion board.
             */
            group_id: number;
            /**
             * Topic ID.
             */
            topic_id: number;
            /**
             * ID of the comment on the topic.
             */
            comment_id: number;
            /**
             * (Required if 'attachments' is not set). New comment text.
             */
            message?: string;
            /**
             * (Required if 'message' is not set.) List of media objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media object: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media owner. '<media_id>' — Media ID. Example: "photo100172_166443618,photo66748_265827614"
             */
            attachments?: string[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits the title of a topic on a community's discussion board.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/board.editTopic
         */
        editTopic<Params extends {
            /**
             * ID of the community that owns the discussion board.
             */
            group_id: number;
            /**
             * Topic ID.
             */
            topic_id: number;
            /**
             * New title of the topic.
             */
            title: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Pins a topic (fixes its place) to the top of a community's discussion board.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/board.fixTopic
         */
        fixTopic<Params extends {
            /**
             * ID of the community that owns the discussion board.
             */
            group_id: number;
            /**
             * Topic ID.
             */
            topic_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns a list of comments on a topic on a community's discussion board.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/board.getComments
         */
        getComments<Params extends {
            /**
             * ID of the community that owns the discussion board.
             */
            group_id: number;
            /**
             * Topic ID.
             */
            topic_id: number;
            /**
             * '1' — to return the 'likes' field, '0' — not to return the 'likes' field (default)
             */
            need_likes?: boolean;
            start_comment_id?: number;
            /**
             * Offset needed to return a specific subset of comments.
             */
            offset?: number;
            /**
             * Number of comments to return.
             * @maximum 100
             * @default 20
             */
            count?: number;
            /**
             * '1' — to return information about users who posted comments, '0' — to return no additional fields (default)
             */
            extended?: boolean;
            /**
             * Sort order: 'asc' — by creation date in chronological order, 'desc' — by creation date in reverse chronological order,
             * @enum {string} asc, desc
             */
            sort?: "asc" | "desc";
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.BoardGetCommentsExtendedResponse["response"]> : Promise<Responses.BoardGetCommentsResponse["response"]>;
        /**
         * Returns a list of topics on a community's discussion board.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/board.getTopics
         */
        getTopics<Params extends {
            /**
             * ID of the community that owns the discussion board.
             */
            group_id: number;
            /**
             * IDs of topics to be returned (100 maximum). By default, all topics are returned. If this parameter is set, the 'order', 'offset', and 'count' parameters are ignored.
             */
            topic_ids?: number[];
            /**
             * Sort order: '1' — by date updated in reverse chronological order. '2' — by date created in reverse chronological order. '-1' — by date updated in chronological order. '-2' — by date created in chronological order. If no sort order is specified, topics are returned in the order specified by the group administrator. Pinned topics are returned first, regardless of the sorting.
             */
            order?: number;
            /**
             * Offset needed to return a specific subset of topics.
             */
            offset?: number;
            /**
             * Number of topics to return.
             * @maximum 100
             * @default 40
             */
            count?: number;
            /**
             * '1' — to return information about users who created topics or who posted there last, '0' — to return no additional fields (default)
             */
            extended?: boolean;
            /**
             * '1' — to return the first comment in each topic,, '2' — to return the last comment in each topic,, '0' — to return no comments. By default: '0'.
             */
            preview?: number;
            /**
             * Number of characters after which to truncate the previewed comment. To preview the full comment, specify '0'.
             * @default 90
             */
            preview_length?: number;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.BoardGetTopicsExtendedResponse["response"]> : Promise<Responses.BoardGetTopicsResponse["response"]>;
        /**
         * Re-opens a previously closed topic on a community's discussion board.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/board.openTopic
         */
        openTopic<Params extends {
            /**
             * ID of the community that owns the discussion board.
             */
            group_id: number;
            /**
             * Topic ID.
             */
            topic_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Restores a comment deleted from a topic on a community's discussion board.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/board.restoreComment
         */
        restoreComment<Params extends {
            /**
             * ID of the community that owns the discussion board.
             */
            group_id: number;
            /**
             * Topic ID.
             */
            topic_id: number;
            /**
             * Comment ID.
             */
            comment_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Unpins a pinned topic from the top of a community's discussion board.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/board.unfixTopic
         */
        unfixTopic<Params extends {
            /**
             * ID of the community that owns the discussion board.
             */
            group_id: number;
            /**
             * Topic ID.
             */
            topic_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
    }
    interface Database {
        /**
         * Returns list of chairs on a specified faculty.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/database.getChairs
         */
        getChairs<Params extends {
            /**
             * id of the faculty to get chairs from
             */
            faculty_id: number;
            /**
             * offset required to get a certain subset of chairs
             */
            offset?: number;
            /**
             * amount of chairs to get
             * @maximum 10000
             * @default 100
             */
            count?: number;
        }>(params: Params): Promise<Responses.DatabaseGetChairsResponse["response"]>;
        /**
         * Returns a list of cities.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/database.getCities
         */
        getCities<Params extends {
            /**
             * Country ID.
             */
            country_id: number;
            /**
             * Region ID.
             */
            region_id?: number;
            /**
             * Search query.
             */
            q?: string;
            /**
             * '1' — to return all cities in the country, '0' — to return major cities in the country (default),
             */
            need_all?: boolean;
            /**
             * Offset needed to return a specific subset of cities.
             */
            offset?: number;
            /**
             * Number of cities to return.
             * @maximum 1000
             * @default 100
             */
            count?: number;
        }>(params: Params): Promise<Responses.DatabaseGetCitiesResponse["response"]>;
        /**
         * Returns information about cities by their IDs.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/database.getCitiesById
         */
        getCitiesById<Params extends {
            /**
             * City IDs.
             */
            city_ids?: number[];
        }>(params: Params): Promise<Responses.DatabaseGetCitiesByIdResponse["response"]>;
        /**
         * Returns a list of countries.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/database.getCountries
         */
        getCountries<Params extends {
            /**
             * '1' — to return a full list of all countries, '0' — to return a list of countries near the current user's country (default).
             */
            need_all?: boolean;
            /**
             * Country codes in {@link https://vk.com/dev/country_codes|ISO 3166-1 alpha-2} standard.
             */
            code?: string;
            /**
             * Offset needed to return a specific subset of countries.
             */
            offset?: number;
            /**
             * Number of countries to return.
             * @maximum 1000
             * @default 100
             */
            count?: number;
        }>(params: Params): Promise<Responses.DatabaseGetCountriesResponse["response"]>;
        /**
         * Returns information about countries by their IDs.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/database.getCountriesById
         */
        getCountriesById<Params extends {
            /**
             * Country IDs.
             */
            country_ids?: number[];
        }>(params: Params): Promise<Responses.DatabaseGetCountriesByIdResponse["response"]>;
        /**
         * Returns a list of faculties (i.e., university departments).
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/database.getFaculties
         */
        getFaculties<Params extends {
            /**
             * University ID.
             */
            university_id: number;
            /**
             * Offset needed to return a specific subset of faculties.
             */
            offset?: number;
            /**
             * Number of faculties to return.
             * @maximum 10000
             * @default 100
             */
            count?: number;
        }>(params: Params): Promise<Responses.DatabaseGetFacultiesResponse["response"]>;
        /**
         * Get metro stations by city
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/database.getMetroStations
         */
        getMetroStations<Params extends {
            city_id: number;
            offset?: number;
            /**
             *
             * @maximum 500
             * @default 100
             */
            count?: number;
            extended?: boolean;
        }>(params: Params): Promise<Responses.DatabaseGetMetroStationsResponse["response"]>;
        /**
         * Get metro station by his id
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/database.getMetroStationsById
         */
        getMetroStationsById<Params extends {
            station_ids?: number[];
        }>(params: Params): Promise<Responses.DatabaseGetMetroStationsByIdResponse["response"]>;
        /**
         * Returns a list of regions.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/database.getRegions
         */
        getRegions<Params extends {
            /**
             * Country ID, received in {@link https://vk.com/dev/database.getCountries|database.getCountries} method.
             */
            country_id: number;
            /**
             * Search query.
             */
            q?: string;
            /**
             * Offset needed to return specific subset of regions.
             */
            offset?: number;
            /**
             * Number of regions to return.
             * @maximum 1000
             * @default 100
             */
            count?: number;
        }>(params: Params): Promise<Responses.DatabaseGetRegionsResponse["response"]>;
        /**
         * Returns a list of school classes specified for the country.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/database.getSchoolClasses
         */
        getSchoolClasses<Params extends {
            /**
             * Country ID.
             */
            country_id?: number;
        }>(params: Params): Promise<Responses.DatabaseGetSchoolClassesResponse["response"]>;
        /**
         * Returns a list of schools.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/database.getSchools
         */
        getSchools<Params extends {
            /**
             * Search query.
             */
            q?: string;
            /**
             * City ID.
             */
            city_id: number;
            /**
             * Offset needed to return a specific subset of schools.
             */
            offset?: number;
            /**
             * Number of schools to return.
             * @maximum 10000
             * @default 100
             */
            count?: number;
        }>(params: Params): Promise<Responses.DatabaseGetSchoolsResponse["response"]>;
        /**
         * Returns a list of higher education institutions.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/database.getUniversities
         */
        getUniversities<Params extends {
            /**
             * Search query.
             */
            q?: string;
            /**
             * Country ID.
             */
            country_id?: number;
            /**
             * City ID.
             */
            city_id?: number;
            /**
             * Offset needed to return a specific subset of universities.
             */
            offset?: number;
            /**
             * Number of universities to return.
             * @maximum 10000
             * @default 100
             */
            count?: number;
        }>(params: Params): Promise<Responses.DatabaseGetUniversitiesResponse["response"]>;
    }
    interface Docs {
        /**
         * Copies a document to a user's or community's document list.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/docs.add
         */
        add<Params extends {
            /**
             * ID of the user or community that owns the document. Use a negative value to designate a community ID.
             */
            owner_id: number;
            /**
             * Document ID.
             */
            doc_id: number;
            /**
             * Access key. This parameter is required if 'access_key' was returned with the document's data.
             */
            access_key?: string;
        }>(params: Params): Promise<Responses.DocsAddResponse["response"]>;
        /**
         * Deletes a user or community document.
         * @async
         * @access user
         * @throws {Errors.ApiErrorParamDocDeleteAccess} - Access to document deleting is denied
         * @throws {Errors.ApiErrorParamDocId} - Invalid document id
         * @see https://vk.com/dev/docs.delete
         */
        delete<Params extends {
            /**
             * ID of the user or community that owns the document. Use a negative value to designate a community ID.
             */
            owner_id: number;
            /**
             * Document ID.
             */
            doc_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits a document.
         * @async
         * @access user
         * @throws {Errors.ApiErrorParamDocAccess} - Access to document is denied
         * @throws {Errors.ApiErrorParamDocId} - Invalid document id
         * @throws {Errors.ApiErrorParamDocTitle} - Invalid document title
         * @see https://vk.com/dev/docs.edit
         */
        edit<Params extends {
            /**
             * User ID or community ID. Use a negative value to designate a community ID.
             */
            owner_id: number;
            /**
             * Document ID.
             */
            doc_id: number;
            /**
             * Document title.
             */
            title?: string;
            /**
             * Document tags.
             */
            tags?: string[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns detailed information about user or community documents.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/docs.get
         */
        get<Params extends {
            /**
             * Number of documents to return. By default, all documents.
             */
            count?: number;
            /**
             * Offset needed to return a specific subset of documents.
             */
            offset?: number;
            type?: number;
            /**
             * ID of the user or community that owns the documents. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            return_tags?: boolean;
        }>(params: Params): Promise<Responses.DocsGetResponse["response"]>;
        /**
         * Returns information about documents by their IDs.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/docs.getById
         */
        getById<Params extends {
            /**
             * Document IDs. Example: , "66748_91488,66748_91455",
             */
            docs: string[];
            return_tags?: boolean;
        }>(params: Params): Promise<Responses.DocsGetByIdResponse["response"]>;
        /**
         * Returns the server address for document upload.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesDenySend} - Can't send messages for users without permission
         * @see https://vk.com/dev/docs.getMessagesUploadServer
         */
        getMessagesUploadServer<Params extends {
            /**
             * Document type.
             * @enum {string} audio_message, doc, graffiti
             * @default doc
             */
            type?: "audio_message" | "doc" | "graffiti";
            /**
             * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'Chat ID', e.g. '2000000001'. For community: '- Community ID', e.g. '-12345'. "
             */
            peer_id?: number;
        }>(params: Params): Promise<Responses.BaseGetUploadServerResponse["response"]>;
        /**
         * Returns documents types available for current user.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/docs.getTypes
         */
        getTypes<Params extends {
            /**
             * ID of the user or community that owns the documents. Use a negative value to designate a community ID.
             */
            owner_id: number;
        }>(params: Params): Promise<Responses.DocsGetTypesResponse["response"]>;
        /**
         * Returns the server address for document upload.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/docs.getUploadServer
         */
        getUploadServer<Params extends {
            /**
             * Community ID (if the document will be uploaded to the community).
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.DocsGetUploadServer["response"]>;
        /**
         * Returns the server address for document upload onto a user's or community's wall.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/docs.getWallUploadServer
         */
        getWallUploadServer<Params extends {
            /**
             * Community ID (if the document will be uploaded to the community).
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.BaseGetUploadServerResponse["response"]>;
        /**
         * Saves a document after {@link https://vk.com/dev/upload_files_2|uploading it to a server}.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorSaveFile} - Couldn't save file
         * @see https://vk.com/dev/docs.save
         */
        save<Params extends {
            /**
             * This parameter is returned when the file is {@link https://vk.com/dev/upload_files_2|uploaded to the server}.
             */
            file: string;
            /**
             * Document title.
             */
            title?: string;
            /**
             * Document tags.
             */
            tags?: string;
            return_tags?: boolean;
        }>(params: Params): Promise<Responses.DocsSaveResponse["response"]>;
        /**
         * Returns a list of documents matching the search criteria.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/docs.search
         */
        search<Params extends {
            /**
             * Search query string.
             */
            q: string;
            search_own?: boolean;
            /**
             * Number of results to return.
             * @default 20
             */
            count?: number;
            /**
             * Offset needed to return a specific subset of results.
             */
            offset?: number;
            return_tags?: boolean;
        }>(params: Params): Promise<Responses.DocsSearchResponse["response"]>;
    }
    interface Fave {
        /**
         * Method not described
         * @async
         * @access user
         * @throws {Errors.ApiErrorNotFound} - Not found
         * @see https://vk.com/dev/fave.addArticle
         */
        addArticle<Params extends {
            url: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Adds a link to user faves.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.addLink
         */
        addLink<Params extends {
            /**
             * Link URL.
             */
            link: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.addPage
         */
        addPage<Params extends {
            user_id?: number;
            group_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.addPost
         */
        addPost<Params extends {
            owner_id: number;
            id: number;
            access_key?: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.addProduct
         */
        addProduct<Params extends {
            owner_id: number;
            id: number;
            access_key?: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @throws {Errors.ApiErrorLimits} - Out of limits
         * @see https://vk.com/dev/fave.addTag
         */
        addTag<Params extends {
            name?: string;
            /**
             *
             * @enum {string} back, front
             * @default back
             */
            position?: "back" | "front";
        }>(params: Params): Promise<Responses.FaveAddTagResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.addVideo
         */
        addVideo<Params extends {
            owner_id: number;
            id: number;
            access_key?: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.editTag
         */
        editTag<Params extends {
            id: number;
            name: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.get
         */
        get<Params extends {
            /**
             * '1' — to return additional 'wall', 'profiles', and 'groups' fields. By default: '0'.
             */
            extended?: boolean;
            /**
             *
             * @enum {string} article, link, narrative, page, podcast, post, product, video
             */
            item_type?: "article" | "link" | "narrative" | "page" | "podcast" | "post" | "product" | "video";
            /**
             * Tag ID.
             */
            tag_id?: number;
            /**
             * Offset needed to return a specific subset of users.
             */
            offset?: number;
            /**
             * Number of users to return.
             * @maximum 100
             * @minimum 1
             * @default 50
             */
            count?: number;
            fields?: string;
            is_from_snackbar?: boolean;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.FaveGetExtendedResponse["response"]> : Promise<Responses.FaveGetResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.getPages
         */
        getPages<Params extends {
            /**
             *
             * @maximum 10000
             */
            offset?: number;
            /**
             *
             * @maximum 500
             * @minimum 1
             * @default 50
             */
            count?: number;
            /**
             *
             * @enum {string} groups, hints, users
             */
            type?: "groups" | "hints" | "users";
            fields?: Objects.BaseUserGroupFields[];
            tag_id?: number;
        }>(params: Params): Promise<Responses.FaveGetPagesResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.getTags
         */
        getTags<Params extends never>(params?: Params): Promise<Responses.FaveGetTagsResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.markSeen
         */
        markSeen<Params extends never>(params?: Params): Promise<Responses.BaseBoolResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.removeArticle
         */
        removeArticle<Params extends {
            owner_id: number;
            article_id: number;
        }>(params: Params): Promise<Responses.BaseBoolResponse["response"]>;
        /**
         * Removes link from the user's faves.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.removeLink
         */
        removeLink<Params extends {
            /**
             * Link ID (can be obtained by {@link https://vk.com/dev/faves.getLinks|faves.getLinks} method).
             */
            link_id?: string;
            /**
             * Link URL
             */
            link?: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.removePage
         */
        removePage<Params extends {
            user_id?: number;
            group_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.removePost
         */
        removePost<Params extends {
            owner_id: number;
            id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.removeProduct
         */
        removeProduct<Params extends {
            owner_id: number;
            id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.removeTag
         */
        removeTag<Params extends {
            id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.reorderTags
         */
        reorderTags<Params extends {
            ids: number[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @throws {Errors.ApiErrorNotFound} - Not found
         * @see https://vk.com/dev/fave.setPageTags
         */
        setPageTags<Params extends {
            user_id?: number;
            group_id?: number;
            tag_ids?: number[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @throws {Errors.ApiErrorNotFound} - Not found
         * @see https://vk.com/dev/fave.setTags
         */
        setTags<Params extends {
            /**
             *
             * @enum {string} article, link, narrative, page, podcast, post, product, video
             */
            item_type?: "article" | "link" | "narrative" | "page" | "podcast" | "post" | "product" | "video";
            item_owner_id?: number;
            item_id?: number;
            tag_ids?: number[];
            link_id?: string;
            link_url?: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/fave.trackPageInteraction
         */
        trackPageInteraction<Params extends {
            user_id?: number;
            group_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
    }
    interface Friends {
        /**
         * Approves or creates a friend request.
         * @async
         * @access user
         * @throws {Errors.ApiErrorFriendsAddInEnemy} - Cannot add this user to friends as they have put you on their blacklist
         * @throws {Errors.ApiErrorFriendsAddEnemy} - Cannot add this user to friends as you put him on blacklist
         * @throws {Errors.ApiErrorFriendsAddYourself} - Cannot add user himself as friend
         * @throws {Errors.ApiErrorFriendsAddNotFound} - Cannot add this user to friends as user not found
         * @see https://vk.com/dev/friends.add
         */
        add<Params extends {
            /**
             * ID of the user whose friend request will be approved or to whom a friend request will be sent.
             */
            user_id?: number;
            /**
             * Text of the message (up to 500 characters) for the friend request, if any.
             */
            text?: string;
            /**
             * '1' to pass an incoming request to followers list.
             */
            follow?: boolean;
        }>(params: Params): Promise<Responses.FriendsAddResponse["response"]>;
        /**
         * Creates a new friend list for the current user.
         * @async
         * @access user
         * @throws {Errors.ApiErrorFriendsListLimit} - Reached the maximum number of lists
         * @see https://vk.com/dev/friends.addList
         */
        addList<Params extends {
            /**
             * Name of the friend list.
             */
            name: string;
            /**
             * IDs of users to be added to the friend list.
             */
            user_ids?: number[];
        }>(params: Params): Promise<Responses.FriendsAddListResponse["response"]>;
        /**
         * Checks the current user's friendship status with other specified users.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/friends.areFriends
         */
        areFriends<Params extends {
            /**
             * IDs of the users whose friendship status to check.
             */
            user_ids: number[];
            /**
             * '1' — to return 'sign' field. 'sign' is md5("{id}_{user_id}_{friends_status}_{application_secret}"), where id is current user ID. This field allows to check that data has not been modified by the client. By default: '0'.
             */
            need_sign?: boolean;
        }>(params: Params): Promise<Responses.FriendsAreFriendsResponse["response"]>;
        /**
         * Declines a friend request or deletes a user from the current user's friend list.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/friends.delete
         */
        delete<Params extends {
            /**
             * ID of the user whose friend request is to be declined or who is to be deleted from the current user's friend list.
             */
            user_id?: number;
        }>(params: Params): Promise<Responses.FriendsDeleteResponse["response"]>;
        /**
         * Marks all incoming friend requests as viewed.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/friends.deleteAllRequests
         */
        deleteAllRequests<Params extends never>(params?: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Deletes a friend list of the current user.
         * @async
         * @access user
         * @throws {Errors.ApiErrorFriendsListId} - Invalid list id
         * @see https://vk.com/dev/friends.deleteList
         */
        deleteList<Params extends {
            /**
             * ID of the friend list to delete.
             * @maximum 24
             */
            list_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits the friend lists of the selected user.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/friends.edit
         */
        edit<Params extends {
            /**
             * ID of the user whose friend list is to be edited.
             */
            user_id: number;
            /**
             * IDs of the friend lists to which to add the user.
             */
            list_ids?: number[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits a friend list of the current user.
         * @async
         * @access user
         * @throws {Errors.ApiErrorFriendsListId} - Invalid list id
         * @see https://vk.com/dev/friends.editList
         */
        editList<Params extends {
            /**
             * Name of the friend list.
             */
            name?: string;
            /**
             * Friend list ID.
             */
            list_id: number;
            /**
             * IDs of users in the friend list.
             */
            user_ids?: number[];
            /**
             * (Applies if 'user_ids' parameter is not set.), User IDs to add to the friend list.
             */
            add_user_ids?: number[];
            /**
             * (Applies if 'user_ids' parameter is not set.), User IDs to delete from the friend list.
             */
            delete_user_ids?: number[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns a list of user IDs or detailed information about a user's friends.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/friends.get
         */
        get<Params extends {
            /**
             * User ID. By default, the current user ID.
             */
            user_id?: number;
            /**
             * Sort order: , 'name' — by name (enabled only if the 'fields' parameter is used), 'hints' — by rating, similar to how friends are sorted in My friends section, , This parameter is available only for {@link https://vk.com/dev/standalone|desktop applications}.
             * @enum {string} name, hints
             */
            order?: "name" | "hints";
            /**
             * ID of the friend list returned by the {@link https://vk.com/dev/friends.getLists|friends.getLists} method to be used as the source. This parameter is taken into account only when the uid parameter is set to the current user ID. This parameter is available only for {@link https://vk.com/dev/standalone|desktop applications}.
             */
            list_id?: number;
            /**
             * Number of friends to return.
             * @default 5000
             */
            count?: number;
            /**
             * Offset needed to return a specific subset of friends.
             */
            offset?: number;
            /**
             * Profile fields to return. Sample values: 'uid', 'first_name', 'last_name', 'nickname', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'domain', 'has_mobile', 'rate', 'contacts', 'education'.
             */
            fields?: Objects.UsersFields[];
            /**
             * Case for declension of user name and surname: , 'nom' — nominative (default) , 'gen' — genitive , 'dat' — dative , 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
             * @enum {string} nom, gen, dat, acc, ins, abl
             */
            name_case?: "nom" | "gen" | "dat" | "acc" | "ins" | "abl";
            ref?: string;
        }>(params: Params): Promise<Responses.FriendsGetResponse["response"]>;
        /**
         * Returns a list of IDs of the current user's friends who installed the application.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/friends.getAppUsers
         */
        getAppUsers<Params extends never>(params?: Params): Promise<Responses.FriendsGetAppUsersResponse["response"]>;
        /**
         * Returns a list of the current user's friends whose phone numbers, validated or specified in a profile, are in a given list.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/friends.getByPhones
         */
        getByPhones<Params extends {
            /**
             * List of phone numbers in MSISDN format (maximum 1000). Example: "+79219876543,+79111234567"
             */
            phones?: string[];
            /**
             * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online, counters'.
             */
            fields?: Objects.UsersFields[];
        }>(params: Params): Promise<Responses.FriendsGetByPhonesResponse["response"]>;
        /**
         * Returns a list of the user's friend lists.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/friends.getLists
         */
        getLists<Params extends {
            /**
             * User ID.
             */
            user_id?: number;
            /**
             * '1' — to return system friend lists. By default: '0'.
             */
            return_system?: boolean;
        }>(params: Params): Promise<Responses.FriendsGetListsResponse["response"]>;
        /**
         * Returns a list of user IDs of the mutual friends of two users.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/friends.getMutual
         */
        getMutual<Params extends {
            /**
             * ID of the user whose friends will be checked against the friends of the user specified in 'target_uid'.
             */
            source_uid?: number;
            /**
             * ID of the user whose friends will be checked against the friends of the user specified in 'source_uid'.
             */
            target_uid?: number;
            /**
             * IDs of the users whose friends will be checked against the friends of the user specified in 'source_uid'.
             */
            target_uids?: number[];
            /**
             * Sort order: 'random' — random order
             */
            order?: string;
            /**
             * Number of mutual friends to return.
             */
            count?: number;
            /**
             * Offset needed to return a specific subset of mutual friends.
             */
            offset?: number;
        }>(params: Params): Promise<Responses.FriendsGetMutualResponse["response"]>;
        /**
         * Returns a list of user IDs of a user's friends who are online.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/friends.getOnline
         */
        getOnline<Params extends {
            /**
             * User ID.
             */
            user_id?: number;
            /**
             * Friend list ID. If this parameter is not set, information about all online friends is returned.
             */
            list_id?: number;
            /**
             * '1' — to return an additional 'online_mobile' field, '0' — (default),
             */
            online_mobile?: boolean;
            /**
             * Sort order: 'random' — random order
             */
            order?: string;
            /**
             * Number of friends to return.
             */
            count?: number;
            /**
             * Offset needed to return a specific subset of friends.
             */
            offset?: number;
        }>(params: Params): Promise<Responses.FriendsGetOnlineResponse["response"]>;
        /**
         * Returns a list of user IDs of the current user's recently added friends.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/friends.getRecent
         */
        getRecent<Params extends {
            /**
             * Number of recently added friends to return.
             * @maximum 1000
             * @default 100
             */
            count?: number;
        }>(params: Params): Promise<Responses.FriendsGetRecentResponse["response"]>;
        /**
         * Returns information about the current user's incoming and outgoing friend requests.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/friends.getRequests
         */
        getRequests<Params extends {
            /**
             * Offset needed to return a specific subset of friend requests.
             */
            offset?: number;
            /**
             * Number of friend requests to return (default 100, maximum 1000).
             * @maximum 1000
             * @default 100
             */
            count?: number;
            /**
             * '1' — to return response messages from users who have sent a friend request or, if 'suggested' is set to '1', to return a list of suggested friends
             */
            extended?: boolean;
            /**
             * '1' — to return a list of mutual friends (up to 20), if any
             */
            need_mutual?: boolean;
            /**
             * '1' — to return outgoing requests, '0' — to return incoming requests (default)
             */
            out?: boolean;
            /**
             * Sort order: '1' — by number of mutual friends, '0' — by date
             */
            sort?: number;
            need_viewed?: boolean;
            /**
             * '1' — to return a list of suggested friends, '0' — to return friend requests (default)
             */
            suggested?: boolean;
            ref?: string;
            fields?: Objects.UsersFields[];
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.FriendsGetRequestsExtendedResponse["response"]> : Promise<Responses.FriendsGetRequestsResponse["response"]>;
        /**
         * Returns a list of profiles of users whom the current user may know.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/friends.getSuggestions
         */
        getSuggestions<Params extends {
            /**
             * Types of potential friends to return: 'mutual' — users with many mutual friends , 'contacts' — users found with the {@link https://vk.com/dev/account.importContacts|account.importContacts} method , 'mutual_contacts' — users who imported the same contacts as the current user with the {@link https://vk.com/dev/account.importContacts|account.importContacts} method
             */
            filter?: (/**
             * @enum {string} mutual, contacts, mutual_contacts */ "mutual" | "contacts" | "mutual_contacts")[];
            /**
             * Number of suggestions to return.
             * @maximum 500
             * @default 500
             */
            count?: number;
            /**
             * Offset needed to return a specific subset of suggestions.
             */
            offset?: number;
            /**
             * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online', 'counters'.
             */
            fields?: Objects.UsersFields[];
            /**
             * Case for declension of user name and surname: , 'nom' — nominative (default) , 'gen' — genitive , 'dat' — dative , 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
             * @enum {string} nom, gen, dat, acc, ins, abl
             */
            name_case?: "nom" | "gen" | "dat" | "acc" | "ins" | "abl";
        }>(params: Params): Promise<Responses.FriendsGetSuggestionsResponse["response"]>;
        /**
         * Returns a list of friends matching the search criteria.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/friends.search
         */
        search<Params extends {
            /**
             * User ID.
             */
            user_id: number;
            /**
             * Search query string (e.g., 'Vasya Babich').
             */
            q?: string;
            /**
             * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online',
             */
            fields?: Objects.UsersFields[];
            /**
             * Case for declension of user name and surname: 'nom' — nominative (default), 'gen' — genitive , 'dat' — dative, 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
             * @enum {string} nom, gen, dat, acc, ins, abl
             * @default Nom
             */
            name_case?: "nom" | "gen" | "dat" | "acc" | "ins" | "abl";
            /**
             * Offset needed to return a specific subset of friends.
             */
            offset?: number;
            /**
             * Number of friends to return.
             * @maximum 1000
             * @default 20
             */
            count?: number;
        }>(params: Params): Promise<Responses.FriendsSearchResponse["response"]>;
    }
    interface Gifts {
        /**
         * Returns a list of user gifts.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/gifts.get
         */
        get<Params extends {
            /**
             * User ID.
             */
            user_id?: number;
            /**
             * Number of gifts to return.
             */
            count?: number;
            /**
             * Offset needed to return a specific subset of results.
             */
            offset?: number;
        }>(params: Params): Promise<Responses.GiftsGetResponse["response"]>;
    }
    interface Groups {
        /**
         * Method not described
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorAccessGroups} - Access to the groups list is denied due to the user's privacy settings
         * @throws {Errors.ApiErrorNotFound} - Not found
         * @throws {Errors.ApiErrorGroupTooManyAddresses} - Too many addresses in club
         * @see https://vk.com/dev/groups.addAddress
         */
        addAddress<Params extends {
            group_id: number;
            title: string;
            address: string;
            additional_address?: string;
            /**
             *
             * @minimum 1
             */
            country_id: number;
            /**
             *
             * @minimum 1
             */
            city_id: number;
            metro_id?: number;
            /**
             *
             * @maximum 90
             * @minimum -90
             */
            latitude: number;
            /**
             *
             * @maximum 180
             * @minimum -180
             */
            longitude: number;
            phone?: string;
            work_info_status?: Objects.GroupsAddressWorkInfoStatus;
            timetable?: string;
            is_main_address?: boolean;
        }>(params: Params): Promise<Responses.GroupsAddAddressResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorCallbackApiServersLimit} - Servers number limit is reached
         * @see https://vk.com/dev/groups.addCallbackServer
         */
        addCallbackServer<Params extends {
            group_id: number;
            url: string;
            title: string;
            secret_key?: string;
        }>(params: Params): Promise<Responses.GroupsAddCallbackServerResponse["response"]>;
        /**
         * Allows to add a link to the community.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/groups.addLink
         */
        addLink<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
            /**
             * Link URL.
             */
            link: string;
            /**
             * Description text for the link.
             */
            text?: string;
        }>(params: Params): Promise<Responses.GroupsAddLinkResponse["response"]>;
        /**
         * Allows to approve join request to the community.
         * @async
         * @access user
         * @throws {Errors.ApiErrorLimits} - Out of limits
         * @see https://vk.com/dev/groups.approveRequest
         */
        approveRequest<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
            /**
             * User ID.
             */
            user_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/groups.ban
         */
        ban<Params extends {
            group_id: number;
            owner_id?: number;
            end_date?: number;
            reason?: number;
            comment?: string;
            comment_visible?: boolean;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Creates a new community.
         * @async
         * @access user
         * @throws {Errors.ApiErrorLimits} - Out of limits
         * @see https://vk.com/dev/groups.create
         */
        create<Params extends {
            /**
             * Community title.
             */
            title: string;
            /**
             * Community description (ignored for 'type' = 'public').
             */
            description?: string;
            /**
             * Community type. Possible values: *'group' – group,, *'event' – event,, *'public' – public page
             * @enum {string} event, group, public
             * @default group
             */
            type?: "event" | "group" | "public";
            /**
             * Category ID (for 'type' = 'public' only).
             */
            public_category?: number;
            /**
             * Public page subtype. Possible values: *'1' – place or small business,, *'2' – company, organization or website,, *'3' – famous person or group of people,, *'4' – product or work of art.
             */
            subtype?: number;
        }>(params: Params): Promise<Responses.GroupsCreateResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorNotFound} - Not found
         * @see https://vk.com/dev/groups.deleteCallbackServer
         */
        deleteCallbackServer<Params extends {
            group_id: number;
            server_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Allows to delete a link from the community.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/groups.deleteLink
         */
        deleteLink<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
            /**
             * Link ID.
             */
            link_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/groups.disableOnline
         */
        disableOnline<Params extends {
            group_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits a community.
         * @async
         * @access user
         * @throws {Errors.ApiErrorInvalidAddress} - Invalid screen name
         * @see https://vk.com/dev/groups.edit
         */
        edit<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
            /**
             * Community title.
             */
            title?: string;
            /**
             * Community description.
             */
            description?: string;
            /**
             * Community screen name.
             */
            screen_name?: string;
            /**
             * Community type. Possible values: *'0' – open,, *'1' – closed,, *'2' – private.
             */
            access?: Objects.GroupsGroupAccess;
            /**
             * Website that will be displayed in the community information field.
             */
            website?: string;
            /**
             * Community subject. Possible values: , *'1' – auto/moto,, *'2' – activity holidays,, *'3' – business,, *'4' – pets,, *'5' – health,, *'6' – dating and communication, , *'7' – games,, *'8' – IT (computers and software),, *'9' – cinema,, *'10' – beauty and fashion,, *'11' – cooking,, *'12' – art and culture,, *'13' – literature,, *'14' – mobile services and internet,, *'15' – music,, *'16' – science and technology,, *'17' – real estate,, *'18' – news and media,, *'19' – security,, *'20' – education,, *'21' – home and renovations,, *'22' – politics,, *'23' – food,, *'24' – industry,, *'25' – travel,, *'26' – work,, *'27' – entertainment,, *'28' – religion,, *'29' – family,, *'30' – sports,, *'31' – insurance,, *'32' – television,, *'33' – goods and services,, *'34' – hobbies,, *'35' – finance,, *'36' – photo,, *'37' – esoterics,, *'38' – electronics and appliances,, *'39' – erotic,, *'40' – humor,, *'41' – society, humanities,, *'42' – design and graphics.
             */
            subject?: Objects.GroupsGroupSubject;
            /**
             * Organizer email (for events).
             */
            email?: string;
            /**
             * Organizer phone number (for events).
             */
            phone?: string;
            /**
             * RSS feed address for import (available only to communities with special permission. Contact vk.com/support to get it.
             */
            rss?: string;
            /**
             * Event start date in Unixtime format.
             */
            event_start_date?: number;
            /**
             * Event finish date in Unixtime format.
             */
            event_finish_date?: number;
            /**
             * Organizer community ID (for events only).
             */
            event_group_id?: number;
            /**
             * Public page category ID.
             */
            public_category?: number;
            /**
             * Public page subcategory ID.
             */
            public_subcategory?: number;
            /**
             * Founding date of a company or organization owning the community in "dd.mm.YYYY" format.
             */
            public_date?: string;
            /**
             * Wall settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (groups and events only),, *'3' – closed (groups and events only).
             */
            wall?: Objects.GroupsGroupWall;
            /**
             * Board topics settings. Possbile values: , *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
             */
            topics?: Objects.GroupsGroupTopics;
            /**
             * Photos settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
             */
            photos?: Objects.GroupsGroupPhotos;
            /**
             * Video settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
             */
            video?: Objects.GroupsGroupVideo;
            /**
             * Audio settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
             */
            audio?: Objects.GroupsGroupAudio;
            /**
             * Links settings (for public pages only). Possible values: *'0' – disabled,, *'1' – enabled.
             */
            links?: boolean;
            /**
             * Events settings (for public pages only). Possible values: *'0' – disabled,, *'1' – enabled.
             */
            events?: boolean;
            /**
             * Places settings (for public pages only). Possible values: *'0' – disabled,, *'1' – enabled.
             */
            places?: boolean;
            /**
             * Contacts settings (for public pages only). Possible values: *'0' – disabled,, *'1' – enabled.
             */
            contacts?: boolean;
            /**
             * Documents settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
             */
            docs?: Objects.GroupsGroupDocs;
            /**
             * Wiki pages settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
             */
            wiki?: Objects.GroupsGroupWiki;
            /**
             * Community messages. Possible values: *'0' — disabled,, *'1' — enabled.
             */
            messages?: boolean;
            articles?: boolean;
            addresses?: boolean;
            /**
             * Community age limits. Possible values: *'1' — no limits,, *'2' — 16+,, *'3' — 18+.
             */
            age_limits?: Objects.GroupsGroupAgeLimits;
            /**
             * Market settings. Possible values: *'0' – disabled,, *'1' – enabled.
             */
            market?: boolean;
            /**
             * market comments settings. Possible values: *'0' – disabled,, *'1' – enabled.
             */
            market_comments?: boolean;
            /**
             * Market delivery countries.
             */
            market_country?: number[];
            /**
             * Market delivery cities (if only one country is specified).
             */
            market_city?: number[];
            /**
             * Market currency settings. Possbile values: , *'643' – Russian rubles,, *'980' – Ukrainian hryvnia,, *'398' – Kazakh tenge,, *'978' – Euro,, *'840' – US dollars
             */
            market_currency?: Objects.GroupsGroupMarketCurrency;
            /**
             * Seller contact for market. Set '0' for community messages.
             */
            market_contact?: number;
            /**
             * ID of a wiki page with market description.
             */
            market_wiki?: number;
            /**
             * Obscene expressions filter in comments. Possible values: , *'0' – disabled,, *'1' – enabled.
             */
            obscene_filter?: boolean;
            /**
             * Stopwords filter in comments. Possible values: , *'0' – disabled,, *'1' – enabled.
             */
            obscene_stopwords?: boolean;
            /**
             * Keywords for stopwords filter.
             */
            obscene_words?: string[];
            main_section?: number;
            secondary_section?: number;
            /**
             * Country of the community.
             */
            country?: number;
            /**
             * City of the community.
             */
            city?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorAccessGroups} - Access to the groups list is denied due to the user's privacy settings
         * @throws {Errors.ApiErrorNotFound} - Not found
         * @throws {Errors.ApiErrorGroupTooManyAddresses} - Too many addresses in club
         * @see https://vk.com/dev/groups.editAddress
         */
        editAddress<Params extends {
            group_id: number;
            address_id: number;
            title?: string;
            address?: string;
            additional_address?: string;
            country_id?: number;
            city_id?: number;
            metro_id?: number;
            /**
             *
             * @maximum 90
             * @minimum -90
             */
            latitude?: number;
            /**
             *
             * @maximum 180
             * @minimum -180
             */
            longitude?: number;
            phone?: string;
            work_info_status?: Objects.GroupsAddressWorkInfoStatus;
            timetable?: string;
            is_main_address?: boolean;
        }>(params: Params): Promise<Responses.GroupsEditAddressResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorNotFound} - Not found
         * @see https://vk.com/dev/groups.editCallbackServer
         */
        editCallbackServer<Params extends {
            group_id: number;
            server_id: number;
            url: string;
            title: string;
            secret_key?: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Allows to edit a link in the community.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/groups.editLink
         */
        editLink<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
            /**
             * Link ID.
             */
            link_id: number;
            /**
             * New description text for the link.
             */
            text?: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Allows to add, remove or edit the community manager.
         * @async
         * @access user
         * @throws {Errors.ApiErrorGroupChangeCreator} - Cannot edit creator role
         * @throws {Errors.ApiErrorGroupNotInClub} - User should be in club
         * @throws {Errors.ApiErrorGroupTooManyOfficers} - Too many officers in club
         * @throws {Errors.ApiErrorGroupNeed2fa} - You need to enable 2FA for this action
         * @throws {Errors.ApiErrorGroupHostNeed2fa} - User needs to enable 2FA for this action
         * @see https://vk.com/dev/groups.editManager
         */
        editManager<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
            /**
             * User ID.
             */
            user_id: number;
            /**
             * Manager role. Possible values: *'moderator',, *'editor',, *'administrator'.
             */
            role?: Objects.GroupsGroupRole;
            /**
             * '1' — to show the manager in Contacts block of the community.
             */
            is_contact?: boolean;
            /**
             * Position to show in Contacts block.
             */
            contact_position?: string;
            /**
             * Contact phone.
             */
            contact_phone?: string;
            /**
             * Contact e-mail.
             */
            contact_email?: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/groups.enableOnline
         */
        enableOnline<Params extends {
            group_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns a list of the communities to which a user belongs.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessGroups} - Access to the groups list is denied due to the user's privacy settings
         * @see https://vk.com/dev/groups.get
         */
        get<Params extends {
            /**
             * User ID.
             */
            user_id?: number;
            /**
             * '1' — to return complete information about a user's communities, '0' — to return a list of community IDs without any additional fields (default),
             */
            extended?: boolean;
            /**
             * Types of communities to return: 'admin' — to return communities administered by the user , 'editor' — to return communities where the user is an administrator or editor, 'moder' — to return communities where the user is an administrator, editor, or moderator, 'groups' — to return only groups, 'publics' — to return only public pages, 'events' — to return only events
             */
            filter?: Objects.GroupsFilter[];
            /**
             * Profile fields to return.
             */
            fields?: Objects.GroupsFields[];
            /**
             * Offset needed to return a specific subset of communities.
             */
            offset?: number;
            /**
             * Number of communities to return.
             * @maximum 1000
             */
            count?: number;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.GroupsGetExtendedResponse["response"]> : Promise<Responses.GroupsGetResponse["response"]>;
        /**
         * Returns a list of community addresses.
         * @async
         * @access user
         * @access service
         * @throws {Errors.ApiErrorParamGroupId} - Invalid group id
         * @throws {Errors.ApiErrorAccessGroups} - Access to the groups list is denied due to the user's privacy settings
         * @see https://vk.com/dev/groups.getAddresses
         */
        getAddresses<Params extends {
            /**
             * ID or screen name of the community.
             */
            group_id: number;
            address_ids?: number[];
            /**
             * Latitude of the user geo position.
             * @maximum 90
             * @minimum -90
             */
            latitude?: number;
            /**
             * Longitude of the user geo position.
             * @maximum 180
             * @minimum -180
             */
            longitude?: number;
            /**
             * Offset needed to return a specific subset of community addresses.
             */
            offset?: number;
            /**
             * Number of community addresses to return.
             * @default 10
             */
            count?: number;
            /**
             * Address fields
             */
            fields?: Objects.AddressesFields[];
        }>(params: Params): Promise<Responses.GroupsGetAddressesResponse["response"]>;
        /**
         * Returns a list of users on a community blacklist.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorNotFound} - Not found
         * @see https://vk.com/dev/groups.getBanned
         */
        getBanned<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
            /**
             * Offset needed to return a specific subset of users.
             */
            offset?: number;
            /**
             * Number of users to return.
             * @maximum 200
             * @default 20
             */
            count?: number;
            fields?: Objects.BaseUserGroupFields[];
            owner_id?: number;
        }>(params: Params): Promise<Responses.GroupsGetBannedResponse["response"]>;
        /**
         * Returns information about communities by their IDs.
         * @async
         * @access user
         * @access group
         * @access service
         *
         * @see https://vk.com/dev/groups.getById
         */
        getById<Params extends {
            /**
             * IDs or screen names of communities.
             */
            group_ids?: string[];
            /**
             * ID or screen name of the community.
             */
            group_id?: string;
            /**
             * Group fields to return.
             */
            fields?: Objects.GroupsFields[];
        }>(params: Params): Promise<Responses.GroupsGetByIdResponse["response"]>;
        /**
         * Returns Callback API confirmation code for the community.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/groups.getCallbackConfirmationCode
         */
        getCallbackConfirmationCode<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
        }>(params: Params): Promise<Responses.GroupsGetCallbackConfirmationCodeResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/groups.getCallbackServers
         */
        getCallbackServers<Params extends {
            group_id: number;
            server_ids?: number[];
        }>(params: Params): Promise<Responses.GroupsGetCallbackServersResponse["response"]>;
        /**
         * Returns {@link https://vk.com/dev/callback_api|Callback API} notifications settings.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorNotFound} - Not found
         * @see https://vk.com/dev/groups.getCallbackSettings
         */
        getCallbackSettings<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
            /**
             * Server ID.
             */
            server_id?: number;
        }>(params: Params): Promise<Responses.GroupsGetCallbackSettingsResponse["response"]>;
        /**
         * Returns communities list for a catalog category.
         * @async
         * @access user
         * @throws {Errors.ApiErrorCommunitiesCatalogDisabled} - Catalog is not available for this user
         * @throws {Errors.ApiErrorCommunitiesCategoriesDisabled} - Catalog categories are not available for this user
         * @see https://vk.com/dev/groups.getCatalog
         */
        getCatalog<Params extends {
            /**
             * Category id received from {@link https://vk.com/dev/groups.getCatalogInfo|groups.getCatalogInfo}.
             */
            category_id?: number;
            /**
             * Subcategory id received from {@link https://vk.com/dev/groups.getCatalogInfo|groups.getCatalogInfo}.
             * @maximum 99
             */
            subcategory_id?: number;
        }>(params: Params): Promise<Responses.GroupsGetCatalogResponse["response"]>;
        /**
         * Returns categories list for communities catalog
         * @async
         * @access user
         *
         * @see https://vk.com/dev/groups.getCatalogInfo
         */
        getCatalogInfo<Params extends {
            /**
             * 1 – to return communities count and three communities for preview. By default: 0.
             */
            extended?: boolean;
            /**
             * 1 – to return subcategories info. By default: 0.
             */
            subcategories?: boolean;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.GroupsGetCatalogInfoExtendedResponse["response"]> : Promise<Responses.GroupsGetCatalogInfoResponse["response"]>;
        /**
         * Returns invited users list of a community
         * @async
         * @access user
         *
         * @see https://vk.com/dev/groups.getInvitedUsers
         */
        getInvitedUsers<Params extends {
            /**
             * Group ID to return invited users for.
             */
            group_id: number;
            /**
             * Offset needed to return a specific subset of results.
             */
            offset?: number;
            /**
             * Number of results to return.
             * @default 20
             */
            count?: number;
            /**
             * List of additional fields to be returned. Available values: 'sex, bdate, city, country, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, online_mobile, lists, domain, has_mobile, contacts, connections, site, education, universities, schools, can_post, can_see_all_posts, can_see_audio, can_write_private_message, status, last_seen, common_count, relation, relatives, counters'.
             */
            fields?: Objects.UsersFields[];
            /**
             * Case for declension of user name and surname. Possible values: *'nom' — nominative (default),, *'gen' — genitive,, *'dat' — dative,, *'acc' — accusative, , *'ins' — instrumental,, *'abl' — prepositional.
             * @enum {string} nom, gen, dat, acc, ins, abl
             */
            name_case?: "nom" | "gen" | "dat" | "acc" | "ins" | "abl";
        }>(params: Params): Promise<Responses.GroupsGetInvitedUsersResponse["response"]>;
        /**
         * Returns a list of invitations to join communities and events.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/groups.getInvites
         */
        getInvites<Params extends {
            /**
             * Offset needed to return a specific subset of invitations.
             */
            offset?: number;
            /**
             * Number of invitations to return.
             * @default 20
             */
            count?: number;
            /**
             * '1' — to return additional {@link https://vk.com/dev/fields_groups|fields} for communities..
             */
            extended?: boolean;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.GroupsGetInvitesExtendedResponse["response"]> : Promise<Responses.GroupsGetInvitesResponse["response"]>;
        /**
         * Returns the data needed to query a Long Poll server for events
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/groups.getLongPollServer
         */
        getLongPollServer<Params extends {
            /**
             * Community ID
             */
            group_id: number;
        }>(params: Params): Promise<Responses.GroupsGetLongPollServerResponse["response"]>;
        /**
         * Returns Long Poll notification settings
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/groups.getLongPollSettings
         */
        getLongPollSettings<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
        }>(params: Params): Promise<Responses.GroupsGetLongPollSettingsResponse["response"]>;
        /**
         * Returns a list of community members.
         * @async
         * @access user
         * @access group
         * @access service
         * @throws {Errors.ApiErrorParamGroupId} - Invalid group id
         * @see https://vk.com/dev/groups.getMembers
         */
        getMembers<Params extends {
            /**
             * ID or screen name of the community.
             */
            group_id?: string;
            /**
             * Sort order. Available values: 'id_asc', 'id_desc', 'time_asc', 'time_desc'. 'time_asc' and 'time_desc' are availavle only if the method is called by the group's 'moderator'.
             * @enum {string} id_asc, id_desc, time_asc, time_desc
             * @default id_asc
             */
            sort?: "id_asc" | "id_desc" | "time_asc" | "time_desc";
            /**
             * Offset needed to return a specific subset of community members.
             */
            offset?: number;
            /**
             * Number of community members to return.
             * @default 1000
             */
            count?: number;
            /**
             * List of additional fields to be returned. Available values: 'sex, bdate, city, country, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, online_mobile, lists, domain, has_mobile, contacts, connections, site, education, universities, schools, can_post, can_see_all_posts, can_see_audio, can_write_private_message, status, last_seen, common_count, relation, relatives, counters'.
             */
            fields?: Objects.UsersFields[];
            /**
             * *'friends' – only friends in this community will be returned,, *'unsure' – only those who pressed 'I may attend' will be returned (if it's an event).
             * @enum {string} friends, unsure
             */
            filter?: "friends" | "unsure";
        }>(params: Params): Promise<Responses.GroupsGetMembersResponse["response"]>;
        /**
         * Returns a list of requests to the community.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/groups.getRequests
         */
        getRequests<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
            /**
             * Offset needed to return a specific subset of results.
             */
            offset?: number;
            /**
             * Number of results to return.
             * @maximum 200
             * @default 20
             */
            count?: number;
            /**
             * Profile fields to return.
             */
            fields?: Objects.UsersFields[];
        }>(params: Params): Promise<Responses.GroupsGetRequestsResponse["response"]>;
        /**
         * Returns community settings.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/groups.getSettings
         */
        getSettings<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
        }>(params: Params): Promise<Responses.GroupsGetSettingsResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access group
         *
         * @see https://vk.com/dev/groups.getTokenPermissions
         */
        getTokenPermissions<Params extends never>(params?: Params): Promise<Responses.GroupsGetTokenPermissionsResponse["response"]>;
        /**
         * Allows to invite friends to the community.
         * @async
         * @access user
         * @throws {Errors.ApiErrorLimits} - Out of limits
         * @see https://vk.com/dev/groups.invite
         */
        invite<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
            /**
             * User ID.
             */
            user_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns information specifying whether a user is a member of a community.
         * @async
         * @access user
         * @access group
         * @access service
         *
         * @see https://vk.com/dev/groups.isMember
         */
        isMember<Params extends {
            /**
             * ID or screen name of the community.
             */
            group_id: string;
            /**
             * User ID.
             */
            user_id?: number;
            /**
             * User IDs.
             */
            user_ids?: number[];
            /**
             * '1' — to return an extended response with additional fields. By default: '0'.
             */
            extended?: boolean;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.GroupsIsMemberExtendedResponse["response"]> : Promise<Responses.GroupsIsMemberResponse["response"]>;
        /**
         * With this method you can join the group or public page, and also confirm your participation in an event.
         * @async
         * @access user
         * @throws {Errors.ApiErrorLimits} - Out of limits
         * @see https://vk.com/dev/groups.join
         */
        join<Params extends {
            /**
             * ID or screen name of the community.
             */
            group_id?: number;
            /**
             * Optional parameter which is taken into account when 'gid' belongs to the event: '1' — Perhaps I will attend, '0' — I will be there for sure (default), ,
             */
            not_sure?: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * With this method you can leave a group, public page, or event.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/groups.leave
         */
        leave<Params extends {
            /**
             * ID or screen name of the community.
             */
            group_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Removes a user from the community.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/groups.removeUser
         */
        removeUser<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
            /**
             * User ID.
             */
            user_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Allows to reorder links in the community.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/groups.reorderLink
         */
        reorderLink<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
            /**
             * Link ID.
             */
            link_id: number;
            /**
             * ID of the link after which to place the link with 'link_id'.
             */
            after?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns a list of communities matching the search criteria.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/groups.search
         */
        search<Params extends {
            /**
             * Search query string.
             */
            q: string;
            /**
             * Community type. Possible values: 'group, page, event.'
             * @enum {string} group, page, event
             */
            type?: "group" | "page" | "event";
            /**
             * Country ID.
             */
            country_id?: number;
            /**
             * City ID. If this parameter is transmitted, country_id is ignored.
             */
            city_id?: number;
            /**
             * '1' — to return only upcoming events. Works with the 'type' = 'event' only.
             */
            future?: boolean;
            /**
             * '1' — to return communities with enabled market only.
             */
            market?: boolean;
            /**
             * Sort order. Possible values: *'0' — default sorting (similar the full version of the site),, *'1' — by growth speed,, *'2'— by the "day attendance/members number" ratio,, *'3' — by the "Likes number/members number" ratio,, *'4' — by the "comments number/members number" ratio,, *'5' — by the "boards entries number/members number" ratio.
             */
            sort?: number;
            /**
             * Offset needed to return a specific subset of results.
             */
            offset?: number;
            /**
             * Number of communities to return. "Note that you can not receive more than first thousand of results, regardless of 'count' and 'offset' values."
             * @maximum 1000
             * @default 20
             */
            count?: number;
        }>(params: Params): Promise<Responses.GroupsSearchResponse["response"]>;
        /**
         * Allow to set notifications settings for group.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorNotFound} - Not found
         * @see https://vk.com/dev/groups.setCallbackSettings
         */
        setCallbackSettings<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
            /**
             * Server ID.
             */
            server_id?: number;
            api_version?: string;
            /**
             * A new incoming message has been received ('0' — disabled, '1' — enabled).
             */
            message_new?: boolean;
            /**
             * A new outcoming message has been received ('0' — disabled, '1' — enabled).
             */
            message_reply?: boolean;
            /**
             * Allowed messages notifications ('0' — disabled, '1' — enabled).
             */
            message_allow?: boolean;
            message_edit?: boolean;
            /**
             * Denied messages notifications ('0' — disabled, '1' — enabled).
             */
            message_deny?: boolean;
            message_typing_state?: boolean;
            /**
             * New photos notifications ('0' — disabled, '1' — enabled).
             */
            photo_new?: boolean;
            /**
             * New audios notifications ('0' — disabled, '1' — enabled).
             */
            audio_new?: boolean;
            /**
             * New videos notifications ('0' — disabled, '1' — enabled).
             */
            video_new?: boolean;
            /**
             * New wall replies notifications ('0' — disabled, '1' — enabled).
             */
            wall_reply_new?: boolean;
            /**
             * Wall replies edited notifications ('0' — disabled, '1' — enabled).
             */
            wall_reply_edit?: boolean;
            /**
             * A wall comment has been deleted ('0' — disabled, '1' — enabled).
             */
            wall_reply_delete?: boolean;
            /**
             * A wall comment has been restored ('0' — disabled, '1' — enabled).
             */
            wall_reply_restore?: boolean;
            /**
             * New wall posts notifications ('0' — disabled, '1' — enabled).
             */
            wall_post_new?: boolean;
            /**
             * New wall posts notifications ('0' — disabled, '1' — enabled).
             */
            wall_repost?: boolean;
            /**
             * New board posts notifications ('0' — disabled, '1' — enabled).
             */
            board_post_new?: boolean;
            /**
             * Board posts edited notifications ('0' — disabled, '1' — enabled).
             */
            board_post_edit?: boolean;
            /**
             * Board posts restored notifications ('0' — disabled, '1' — enabled).
             */
            board_post_restore?: boolean;
            /**
             * Board posts deleted notifications ('0' — disabled, '1' — enabled).
             */
            board_post_delete?: boolean;
            /**
             * New comment to photo notifications ('0' — disabled, '1' — enabled).
             */
            photo_comment_new?: boolean;
            /**
             * A photo comment has been edited ('0' — disabled, '1' — enabled).
             */
            photo_comment_edit?: boolean;
            /**
             * A photo comment has been deleted ('0' — disabled, '1' — enabled).
             */
            photo_comment_delete?: boolean;
            /**
             * A photo comment has been restored ('0' — disabled, '1' — enabled).
             */
            photo_comment_restore?: boolean;
            /**
             * New comment to video notifications ('0' — disabled, '1' — enabled).
             */
            video_comment_new?: boolean;
            /**
             * A video comment has been edited ('0' — disabled, '1' — enabled).
             */
            video_comment_edit?: boolean;
            /**
             * A video comment has been deleted ('0' — disabled, '1' — enabled).
             */
            video_comment_delete?: boolean;
            /**
             * A video comment has been restored ('0' — disabled, '1' — enabled).
             */
            video_comment_restore?: boolean;
            /**
             * New comment to market item notifications ('0' — disabled, '1' — enabled).
             */
            market_comment_new?: boolean;
            /**
             * A market comment has been edited ('0' — disabled, '1' — enabled).
             */
            market_comment_edit?: boolean;
            /**
             * A market comment has been deleted ('0' — disabled, '1' — enabled).
             */
            market_comment_delete?: boolean;
            /**
             * A market comment has been restored ('0' — disabled, '1' — enabled).
             */
            market_comment_restore?: boolean;
            /**
             * A vote in a public poll has been added ('0' — disabled, '1' — enabled).
             */
            poll_vote_new?: boolean;
            /**
             * Joined community notifications ('0' — disabled, '1' — enabled).
             */
            group_join?: boolean;
            /**
             * Left community notifications ('0' — disabled, '1' — enabled).
             */
            group_leave?: boolean;
            group_change_settings?: boolean;
            group_change_photo?: boolean;
            group_officers_edit?: boolean;
            /**
             * User added to community blacklist
             */
            user_block?: boolean;
            /**
             * User removed from community blacklist
             */
            user_unblock?: boolean;
            /**
             * New form in lead forms
             */
            lead_forms_new?: boolean;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Sets Long Poll notification settings
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/groups.setLongPollSettings
         */
        setLongPollSettings<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
            /**
             * Sets whether Long Poll is enabled ('0' — disabled, '1' — enabled).
             */
            enabled?: boolean;
            api_version?: string;
            /**
             * A new incoming message has been received ('0' — disabled, '1' — enabled).
             */
            message_new?: boolean;
            /**
             * A new outcoming message has been received ('0' — disabled, '1' — enabled).
             */
            message_reply?: boolean;
            /**
             * Allowed messages notifications ('0' — disabled, '1' — enabled).
             */
            message_allow?: boolean;
            /**
             * Denied messages notifications ('0' — disabled, '1' — enabled).
             */
            message_deny?: boolean;
            /**
             * A message has been edited ('0' — disabled, '1' — enabled).
             */
            message_edit?: boolean;
            message_typing_state?: boolean;
            /**
             * New photos notifications ('0' — disabled, '1' — enabled).
             */
            photo_new?: boolean;
            /**
             * New audios notifications ('0' — disabled, '1' — enabled).
             */
            audio_new?: boolean;
            /**
             * New videos notifications ('0' — disabled, '1' — enabled).
             */
            video_new?: boolean;
            /**
             * New wall replies notifications ('0' — disabled, '1' — enabled).
             */
            wall_reply_new?: boolean;
            /**
             * Wall replies edited notifications ('0' — disabled, '1' — enabled).
             */
            wall_reply_edit?: boolean;
            /**
             * A wall comment has been deleted ('0' — disabled, '1' — enabled).
             */
            wall_reply_delete?: boolean;
            /**
             * A wall comment has been restored ('0' — disabled, '1' — enabled).
             */
            wall_reply_restore?: boolean;
            /**
             * New wall posts notifications ('0' — disabled, '1' — enabled).
             */
            wall_post_new?: boolean;
            /**
             * New wall posts notifications ('0' — disabled, '1' — enabled).
             */
            wall_repost?: boolean;
            /**
             * New board posts notifications ('0' — disabled, '1' — enabled).
             */
            board_post_new?: boolean;
            /**
             * Board posts edited notifications ('0' — disabled, '1' — enabled).
             */
            board_post_edit?: boolean;
            /**
             * Board posts restored notifications ('0' — disabled, '1' — enabled).
             */
            board_post_restore?: boolean;
            /**
             * Board posts deleted notifications ('0' — disabled, '1' — enabled).
             */
            board_post_delete?: boolean;
            /**
             * New comment to photo notifications ('0' — disabled, '1' — enabled).
             */
            photo_comment_new?: boolean;
            /**
             * A photo comment has been edited ('0' — disabled, '1' — enabled).
             */
            photo_comment_edit?: boolean;
            /**
             * A photo comment has been deleted ('0' — disabled, '1' — enabled).
             */
            photo_comment_delete?: boolean;
            /**
             * A photo comment has been restored ('0' — disabled, '1' — enabled).
             */
            photo_comment_restore?: boolean;
            /**
             * New comment to video notifications ('0' — disabled, '1' — enabled).
             */
            video_comment_new?: boolean;
            /**
             * A video comment has been edited ('0' — disabled, '1' — enabled).
             */
            video_comment_edit?: boolean;
            /**
             * A video comment has been deleted ('0' — disabled, '1' — enabled).
             */
            video_comment_delete?: boolean;
            /**
             * A video comment has been restored ('0' — disabled, '1' — enabled).
             */
            video_comment_restore?: boolean;
            /**
             * New comment to market item notifications ('0' — disabled, '1' — enabled).
             */
            market_comment_new?: boolean;
            /**
             * A market comment has been edited ('0' — disabled, '1' — enabled).
             */
            market_comment_edit?: boolean;
            /**
             * A market comment has been deleted ('0' — disabled, '1' — enabled).
             */
            market_comment_delete?: boolean;
            /**
             * A market comment has been restored ('0' — disabled, '1' — enabled).
             */
            market_comment_restore?: boolean;
            /**
             * A vote in a public poll has been added ('0' — disabled, '1' — enabled).
             */
            poll_vote_new?: boolean;
            /**
             * Joined community notifications ('0' — disabled, '1' — enabled).
             */
            group_join?: boolean;
            /**
             * Left community notifications ('0' — disabled, '1' — enabled).
             */
            group_leave?: boolean;
            group_change_settings?: boolean;
            group_change_photo?: boolean;
            group_officers_edit?: boolean;
            /**
             * User added to community blacklist
             */
            user_block?: boolean;
            /**
             * User removed from community blacklist
             */
            user_unblock?: boolean;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/groups.unban
         */
        unban<Params extends {
            group_id: number;
            owner_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
    }
    interface Leads {
        /**
         * Checks if the user can start the lead.
         * @async
         * @access user
         * @throws {Errors.ApiErrorActionFailed} - Unable to process action
         * @see https://vk.com/dev/leads.checkUser
         */
        checkUser<Params extends {
            /**
             * Lead ID.
             */
            lead_id: number;
            /**
             * Value to be return in 'result' field when test mode is used.
             */
            test_result?: number;
            test_mode?: boolean;
            auto_start?: boolean;
            /**
             * User age.
             */
            age?: number;
            /**
             * User country code.
             */
            country?: string;
        }>(params: Params): Promise<Responses.LeadsCheckUserResponse["response"]>;
        /**
         * Completes the lead started by user.
         * @async
         * @access user
         * @access service
         * @throws {Errors.ApiErrorLimits} - Out of limits
         * @throws {Errors.ApiErrorVotes} - Not enough votes
         * @see https://vk.com/dev/leads.complete
         */
        complete<Params extends {
            /**
             * Session obtained as GET parameter when session started.
             */
            vk_sid: string;
            /**
             * Secret key from the lead testing interface.
             */
            secret: string;
            /**
             * Comment text.
             */
            comment?: string;
        }>(params: Params): Promise<Responses.LeadsCompleteResponse["response"]>;
        /**
         * Returns lead stats data.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/leads.getStats
         */
        getStats<Params extends {
            /**
             * Lead ID.
             */
            lead_id: number;
            /**
             * Secret key obtained from the lead testing interface.
             */
            secret?: string;
            /**
             * Day to start stats from (YYYY_MM_DD, e.g.2011-09-17).
             */
            date_start?: string;
            /**
             * Day to finish stats (YYYY_MM_DD, e.g.2011-09-17).
             */
            date_end?: string;
        }>(params: Params): Promise<Responses.LeadsGetStatsResponse["response"]>;
        /**
         * Returns a list of last user actions for the offer.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/leads.getUsers
         */
        getUsers<Params extends {
            /**
             * Offer ID.
             */
            offer_id: number;
            /**
             * Secret key obtained in the lead testing interface.
             */
            secret: string;
            /**
             * Offset needed to return a specific subset of results.
             */
            offset?: number;
            /**
             * Number of results to return.
             * @maximum 1000
             * @default 100
             */
            count?: number;
            /**
             * Action type. Possible values: *'0' — start,, *'1' — finish,, *'2' — blocking users,, *'3' — start in a test mode,, *'4' — finish in a test mode.
             */
            status?: number;
            /**
             * Sort order. Possible values: *'1' — chronological,, *'0' — reverse chronological.
             */
            reverse?: boolean;
        }>(params: Params): Promise<Responses.LeadsGetUsersResponse["response"]>;
        /**
         * Counts the metric event.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/leads.metricHit
         */
        metricHit<Params extends {
            /**
             * Metric data obtained in the lead interface.
             */
            data: string;
        }>(params: Params): Promise<Responses.LeadsMetricHitResponse["response"]>;
        /**
         * Creates new session for the user passing the offer.
         * @async
         * @access user
         * @access service
         * @throws {Errors.ApiErrorLimits} - Out of limits
         * @throws {Errors.ApiErrorActionFailed} - Unable to process action
         * @see https://vk.com/dev/leads.start
         */
        start<Params extends {
            /**
             * Lead ID.
             */
            lead_id: number;
            /**
             * Secret key from the lead testing interface.
             */
            secret: string;
            uid?: number;
            aid?: number;
            test_mode?: boolean;
            force?: boolean;
        }>(params: Params): Promise<Responses.LeadsStartResponse["response"]>;
    }
    interface Likes {
        /**
         * Adds the specified object to the 'Likes' list of the current user.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/likes.add
         */
        add<Params extends {
            /**
             * Object type: 'post' — post on user or community wall, 'comment' — comment on a wall post, 'photo' — photo, 'audio' — audio, 'video' — video, 'note' — note, 'photo_comment' — comment on the photo, 'video_comment' — comment on the video, 'topic_comment' — comment in the discussion, 'sitepage' — page of the site where the {@link https://vk.com/dev/Like|Like widget} is installed
             */
            type: Objects.LikesType;
            /**
             * ID of the user or community that owns the object.
             */
            owner_id?: number;
            /**
             * Object ID.
             */
            item_id: number;
            /**
             * Access key required for an object owned by a private entity.
             */
            access_key?: string;
        }>(params: Params): Promise<Responses.LikesAddResponse["response"]>;
        /**
         * Deletes the specified object from the 'Likes' list of the current user.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/likes.delete
         */
        delete<Params extends {
            /**
             * Object type: 'post' — post on user or community wall, 'comment' — comment on a wall post, 'photo' — photo, 'audio' — audio, 'video' — video, 'note' — note, 'photo_comment' — comment on the photo, 'video_comment' — comment on the video, 'topic_comment' — comment in the discussion, 'sitepage' — page of the site where the {@link https://vk.com/dev/Like|Like widget} is installed
             */
            type: Objects.LikesType;
            /**
             * ID of the user or community that owns the object.
             */
            owner_id?: number;
            /**
             * Object ID.
             */
            item_id: number;
            /**
             * Access key required for an object owned by a private entity.
             */
            access_key?: string;
        }>(params: Params): Promise<Responses.LikesDeleteResponse["response"]>;
        /**
         * Returns a list of IDs of users who added the specified object to their 'Likes' list.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/likes.getList
         */
        getList<Params extends {
            /**
             * , Object type: 'post' — post on user or community wall, 'comment' — comment on a wall post, 'photo' — photo, 'audio' — audio, 'video' — video, 'note' — note, 'photo_comment' — comment on the photo, 'video_comment' — comment on the video, 'topic_comment' — comment in the discussion, 'sitepage' — page of the site where the {@link https://vk.com/dev/Like|Like widget} is installed
             */
            type: Objects.LikesType;
            /**
             * ID of the user, community, or application that owns the object. If the 'type' parameter is set as 'sitepage', the application ID is passed as 'owner_id'. Use negative value for a community id. If the 'type' parameter is not set, the 'owner_id' is assumed to be either the current user or the same application ID as if the 'type' parameter was set to 'sitepage'.
             */
            owner_id?: number;
            /**
             * Object ID. If 'type' is set as 'sitepage', 'item_id' can include the 'page_id' parameter value used during initialization of the {@link https://vk.com/dev/Like|Like widget}.
             */
            item_id?: number;
            /**
             * URL of the page where the {@link https://vk.com/dev/Like|Like widget} is installed. Used instead of the 'item_id' parameter.
             */
            page_url?: string;
            /**
             * Filters to apply: 'likes' — returns information about all users who liked the object (default), 'copies' — returns information only about users who told their friends about the object
             * @enum {string} likes, copies
             */
            filter?: "likes" | "copies";
            /**
             * Specifies which users are returned: '1' — to return only the current user's friends, '0' — to return all users (default)
             */
            friends_only?: number;
            /**
             * Specifies whether extended information will be returned. '1' — to return extended information about users and communities from the 'Likes' list, '0' — to return no additional information (default)
             */
            extended?: boolean;
            /**
             * Offset needed to select a specific subset of users.
             */
            offset?: number;
            /**
             * Number of user IDs to return (maximum '1000'). Default is '100' if 'friends_only' is set to '0', otherwise, the default is '10' if 'friends_only' is set to '1'.
             */
            count?: number;
            skip_own?: boolean;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.LikesGetListExtendedResponse["response"]> : Promise<Responses.LikesGetListResponse["response"]>;
        /**
         * Checks for the object in the 'Likes' list of the specified user.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/likes.isLiked
         */
        isLiked<Params extends {
            /**
             * User ID.
             */
            user_id?: number;
            /**
             * Object type: 'post' — post on user or community wall, 'comment' — comment on a wall post, 'photo' — photo, 'audio' — audio, 'video' — video, 'note' — note, 'photo_comment' — comment on the photo, 'video_comment' — comment on the video, 'topic_comment' — comment in the discussion
             */
            type: Objects.LikesType;
            /**
             * ID of the user or community that owns the object.
             */
            owner_id?: number;
            /**
             * Object ID.
             */
            item_id: number;
        }>(params: Params): Promise<Responses.LikesIsLikedResponse["response"]>;
    }
    interface Market {
        /**
         * Ads a new item to the market.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessMarket} - Access denied
         * @throws {Errors.ApiErrorMarketTooManyItems} - Too many items
         * @throws {Errors.ApiErrorMarketItemHasBadLinks} - Item has bad links in description
         * @see https://vk.com/dev/market.add
         */
        add<Params extends {
            /**
             * ID of an item owner community.
             */
            owner_id: number;
            /**
             * Item name.
             */
            name: string;
            /**
             * Item description.
             */
            description: string;
            /**
             * Item category ID.
             */
            category_id: number;
            /**
             * Item price.
             * @minimum 0.01
             */
            price?: number;
            /**
             *
             * @minimum 0.01
             */
            old_price?: number;
            /**
             * Item status ('1' — deleted, '0' — not deleted).
             */
            deleted?: boolean;
            /**
             * Cover photo ID.
             */
            main_photo_id: number;
            /**
             * IDs of additional photos.
             */
            photo_ids?: number[];
            /**
             * Url for button in market item.
             */
            url?: string;
        }>(params: Params): Promise<Responses.MarketAddResponse["response"]>;
        /**
         * Creates new collection of items
         * @async
         * @access user
         * @throws {Errors.ApiErrorMarketTooManyAlbums} - Too many albums
         * @see https://vk.com/dev/market.addAlbum
         */
        addAlbum<Params extends {
            /**
             * ID of an item owner community.
             */
            owner_id: number;
            /**
             * Collection title.
             */
            title: string;
            /**
             * Cover photo ID.
             */
            photo_id?: number;
            /**
             * Set as main ('1' – set, '0' – no).
             */
            main_album?: boolean;
        }>(params: Params): Promise<Responses.MarketAddAlbumResponse["response"]>;
        /**
         * Adds an item to one or multiple collections.
         * @async
         * @access user
         * @throws {Errors.ApiErrorMarketAlbumNotFound} - Album not found
         * @throws {Errors.ApiErrorMarketItemNotFound} - Item not found
         * @throws {Errors.ApiErrorMarketTooManyItemsInAlbum} - Too many items in album
         * @throws {Errors.ApiErrorMarketItemAlreadyAdded} - Item already added to album
         * @see https://vk.com/dev/market.addToAlbum
         */
        addToAlbum<Params extends {
            /**
             * ID of an item owner community.
             */
            owner_id: number;
            /**
             * Item ID.
             */
            item_id: number;
            /**
             * Collections IDs to add item to.
             */
            album_ids: number[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Creates a new comment for an item.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/market.createComment
         */
        createComment<Params extends {
            /**
             * ID of an item owner community.
             */
            owner_id: number;
            /**
             * Item ID.
             */
            item_id: number;
            /**
             * Comment text (required if 'attachments' parameter is not specified)
             */
            message?: string;
            /**
             * Comma-separated list of objects attached to a comment. The field is submitted the following way: , "'<owner_id>_<media_id>,<owner_id>_<media_id>'", , '' - media attachment type: "'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document", , '<owner_id>' - media owner id, '<media_id>' - media attachment id, , For example: "photo100172_166443618,photo66748_265827614",
             */
            attachments?: string[];
            /**
             * '1' - comment will be published on behalf of a community, '0' - on behalf of a user (by default).
             */
            from_group?: boolean;
            /**
             * ID of a comment to reply with current comment to.
             */
            reply_to_comment?: number;
            /**
             * Sticker ID.
             */
            sticker_id?: number;
            /**
             * Random value to avoid resending one comment.
             */
            guid?: string;
        }>(params: Params): Promise<Responses.MarketCreateCommentResponse["response"]>;
        /**
         * Deletes an item.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessMarket} - Access denied
         * @see https://vk.com/dev/market.delete
         */
        delete<Params extends {
            /**
             * ID of an item owner community.
             */
            owner_id: number;
            /**
             * Item ID.
             */
            item_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Deletes a collection of items.
         * @async
         * @access user
         * @throws {Errors.ApiErrorMarketAlbumNotFound} - Album not found
         * @see https://vk.com/dev/market.deleteAlbum
         */
        deleteAlbum<Params extends {
            /**
             * ID of an collection owner community.
             */
            owner_id: number;
            /**
             * Collection ID.
             */
            album_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Deletes an item's comment
         * @async
         * @access user
         *
         * @see https://vk.com/dev/market.deleteComment
         */
        deleteComment<Params extends {
            /**
             * identifier of an item owner community, "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the {@link https://vk.com/apiclub|VK API} community "
             */
            owner_id: number;
            /**
             * comment id
             */
            comment_id: number;
        }>(params: Params): Promise<Responses.MarketDeleteCommentResponse["response"]>;
        /**
         * Edits an item.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessMarket} - Access denied
         * @throws {Errors.ApiErrorMarketItemNotFound} - Item not found
         * @throws {Errors.ApiErrorMarketItemHasBadLinks} - Item has bad links in description
         * @see https://vk.com/dev/market.edit
         */
        edit<Params extends {
            /**
             * ID of an item owner community.
             */
            owner_id: number;
            /**
             * Item ID.
             */
            item_id: number;
            /**
             * Item name.
             */
            name: string;
            /**
             * Item description.
             */
            description: string;
            /**
             * Item category ID.
             */
            category_id: number;
            /**
             * Item price.
             * @minimum 0.01
             */
            price: number;
            /**
             * Item status ('1' — deleted, '0' — not deleted).
             */
            deleted?: boolean;
            /**
             * Cover photo ID.
             */
            main_photo_id: number;
            /**
             * IDs of additional photos.
             */
            photo_ids?: number[];
            /**
             * Url for button in market item.
             */
            url?: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits a collection of items
         * @async
         * @access user
         * @throws {Errors.ApiErrorMarketAlbumNotFound} - Album not found
         * @see https://vk.com/dev/market.editAlbum
         */
        editAlbum<Params extends {
            /**
             * ID of an collection owner community.
             */
            owner_id: number;
            /**
             * Collection ID.
             */
            album_id: number;
            /**
             * Collection title.
             */
            title: string;
            /**
             * Cover photo id
             */
            photo_id?: number;
            /**
             * Set as main ('1' – set, '0' – no).
             */
            main_album?: boolean;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Chages item comment's text
         * @async
         * @access user
         *
         * @see https://vk.com/dev/market.editComment
         */
        editComment<Params extends {
            /**
             * ID of an item owner community.
             */
            owner_id: number;
            /**
             * Comment ID.
             */
            comment_id: number;
            /**
             * New comment text (required if 'attachments' are not specified), , 2048 symbols maximum.
             */
            message?: string;
            /**
             * Comma-separated list of objects attached to a comment. The field is submitted the following way: , "'<owner_id>_<media_id>,<owner_id>_<media_id>'", , '' - media attachment type: "'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document", , '<owner_id>' - media owner id, '<media_id>' - media attachment id, , For example: "photo100172_166443618,photo66748_265827614",
             */
            attachments?: string[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns items list for a community.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/market.get
         */
        get<Params extends {
            /**
             * ID of an item owner community, "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the {@link https://vk.com/apiclub|VK API} community "
             */
            owner_id: number;
            album_id?: number;
            /**
             * Number of items to return.
             * @maximum 200
             * @default 100
             */
            count?: number;
            /**
             * Offset needed to return a specific subset of results.
             */
            offset?: number;
            /**
             * '1' – method will return additional fields: 'likes, can_comment, car_repost, photos'. These parameters are not returned by default.
             */
            extended?: boolean;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.MarketGetExtendedResponse["response"]> : Promise<Responses.MarketGetResponse["response"]>;
        /**
         * Returns items album's data
         * @async
         * @access user
         *
         * @see https://vk.com/dev/market.getAlbumById
         */
        getAlbumById<Params extends {
            /**
             * identifier of an album owner community, "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the {@link https://vk.com/apiclub|VK API} community "
             */
            owner_id: number;
            /**
             * collections identifiers to obtain data from
             */
            album_ids: number[];
        }>(params: Params): Promise<Responses.MarketGetAlbumByIdResponse["response"]>;
        /**
         * Returns community's collections list.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/market.getAlbums
         */
        getAlbums<Params extends {
            /**
             * ID of an items owner community.
             */
            owner_id: number;
            /**
             * Offset needed to return a specific subset of results.
             */
            offset?: number;
            /**
             * Number of items to return.
             * @maximum 100
             * @default 50
             */
            count?: number;
        }>(params: Params): Promise<Responses.MarketGetAlbumsResponse["response"]>;
        /**
         * Returns information about market items by their ids.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/market.getById
         */
        getById<Params extends {
            /**
             * Comma-separated ids list: {user id}_{item id}. If an item belongs to a community -{community id} is used. " 'Videos' value example: , '-4363_136089719,13245770_137352259'"
             */
            item_ids: string[];
            /**
             * '1' – to return additional fields: 'likes, can_comment, car_repost, photos'. By default: '0'.
             */
            extended?: boolean;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.MarketGetByIdExtendedResponse["response"]> : Promise<Responses.MarketGetByIdResponse["response"]>;
        /**
         * Returns a list of market categories.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/market.getCategories
         */
        getCategories<Params extends {
            /**
             * Number of results to return.
             * @maximum 1000
             * @default 10
             */
            count?: number;
            /**
             * Offset needed to return a specific subset of results.
             */
            offset?: number;
        }>(params: Params): Promise<Responses.MarketGetCategoriesResponse["response"]>;
        /**
         * Returns comments list for an item.
         * @async
         * @access user
         * @throws {Errors.ApiErrorMarketCommentsClosed} - Comments for this market are closed
         * @see https://vk.com/dev/market.getComments
         */
        getComments<Params extends {
            /**
             * ID of an item owner community
             */
            owner_id: number;
            /**
             * Item ID.
             */
            item_id: number;
            /**
             * '1' — to return likes info.
             */
            need_likes?: boolean;
            /**
             * ID of a comment to start a list from (details below).
             */
            start_comment_id?: number;
            offset?: number;
            /**
             * Number of results to return.
             * @maximum 100
             * @default 20
             */
            count?: number;
            /**
             * Sort order ('asc' — from old to new, 'desc' — from new to old)
             * @enum {string} asc, desc
             * @default asc
             */
            sort?: "asc" | "desc";
            /**
             * '1' — comments will be returned as numbered objects, in addition lists of 'profiles' and 'groups' objects will be returned.
             */
            extended?: boolean;
            /**
             * List of additional profile fields to return. See the {@link https://vk.com/dev/fields|details}
             */
            fields?: Objects.UsersFields[];
        }>(params: Params): Promise<Responses.MarketGetCommentsResponse["response"]>;
        /**
         * Removes an item from one or multiple collections.
         * @async
         * @access user
         * @throws {Errors.ApiErrorMarketAlbumNotFound} - Album not found
         * @throws {Errors.ApiErrorMarketItemNotFound} - Item not found
         * @see https://vk.com/dev/market.removeFromAlbum
         */
        removeFromAlbum<Params extends {
            /**
             * ID of an item owner community.
             */
            owner_id: number;
            /**
             * Item ID.
             */
            item_id: number;
            /**
             * Collections IDs to remove item from.
             */
            album_ids: number[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Reorders the collections list.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessMarket} - Access denied
         * @throws {Errors.ApiErrorMarketAlbumNotFound} - Album not found
         * @see https://vk.com/dev/market.reorderAlbums
         */
        reorderAlbums<Params extends {
            /**
             * ID of an item owner community.
             */
            owner_id: number;
            /**
             * Collection ID.
             */
            album_id: number;
            /**
             * ID of a collection to place current collection before it.
             */
            before?: number;
            /**
             * ID of a collection to place current collection after it.
             */
            after?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Changes item place in a collection.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessMarket} - Access denied
         * @throws {Errors.ApiErrorMarketAlbumNotFound} - Album not found
         * @throws {Errors.ApiErrorMarketItemNotFound} - Item not found
         * @see https://vk.com/dev/market.reorderItems
         */
        reorderItems<Params extends {
            /**
             * ID of an item owner community.
             */
            owner_id: number;
            /**
             * ID of a collection to reorder items in. Set 0 to reorder full items list.
             */
            album_id?: number;
            /**
             * Item ID.
             */
            item_id: number;
            /**
             * ID of an item to place current item before it.
             */
            before?: number;
            /**
             * ID of an item to place current item after it.
             */
            after?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Sends a complaint to the item.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/market.report
         */
        report<Params extends {
            /**
             * ID of an item owner community.
             */
            owner_id: number;
            /**
             * Item ID.
             */
            item_id: number;
            /**
             * Complaint reason. Possible values: *'0' — spam,, *'1' — child porn,, *'2' — extremism,, *'3' — violence,, *'4' — drugs propaganda,, *'5' — adult materials,, *'6' — insult.
             */
            reason?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Sends a complaint to the item's comment.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/market.reportComment
         */
        reportComment<Params extends {
            /**
             * ID of an item owner community.
             */
            owner_id: number;
            /**
             * Comment ID.
             */
            comment_id: number;
            /**
             * Complaint reason. Possible values: *'0' — spam,, *'1' — child porn,, *'2' — extremism,, *'3' — violence,, *'4' — drugs propaganda,, *'5' — adult materials,, *'6' — insult.
             */
            reason: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Restores recently deleted item
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessMarket} - Access denied
         * @throws {Errors.ApiErrorMarketRestoreTooLate} - Too late for restore
         * @see https://vk.com/dev/market.restore
         */
        restore<Params extends {
            /**
             * ID of an item owner community.
             */
            owner_id: number;
            /**
             * Deleted item ID.
             */
            item_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Restores a recently deleted comment
         * @async
         * @access user
         *
         * @see https://vk.com/dev/market.restoreComment
         */
        restoreComment<Params extends {
            /**
             * identifier of an item owner community, "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the {@link https://vk.com/apiclub|VK API} community "
             */
            owner_id: number;
            /**
             * deleted comment id
             */
            comment_id: number;
        }>(params: Params): Promise<Responses.MarketRestoreCommentResponse["response"]>;
        /**
         * Searches market items in a community's catalog
         * @async
         * @access user
         *
         * @see https://vk.com/dev/market.search
         */
        search<Params extends {
            /**
             * ID of an items owner community.
             */
            owner_id: number;
            album_id?: number;
            /**
             * Search query, for example "pink slippers".
             */
            q?: string;
            /**
             * Minimum item price value.
             */
            price_from?: number;
            /**
             * Maximum item price value.
             */
            price_to?: number;
            /**
             * Comma-separated tag IDs list.
             */
            tags?: number[];
            sort?: number;
            /**
             * '0' — do not use reverse order, '1' — use reverse order
             * @default 1
             */
            rev?: number;
            /**
             * Offset needed to return a specific subset of results.
             */
            offset?: number;
            /**
             * Number of items to return.
             * @maximum 200
             * @default 20
             */
            count?: number;
            /**
             * '1' – to return additional fields: 'likes, can_comment, car_repost, photos'. By default: '0'.
             * @default 0
             */
            extended?: boolean;
            status?: number;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.MarketSearchExtendedResponse["response"]> : Promise<Responses.MarketSearchResponse["response"]>;
    }
    interface Messages {
        /**
         * Adds a new user to a chat.
         * @async
         * @access user
         * @throws {Errors.ApiErrorLimits} - Out of limits
         * @throws {Errors.ApiErrorMessagesChatNotAdmin} - You are not admin of this chat
         * @throws {Errors.ApiErrorMessagesMessageRequestAlreadySent} - Message request already sent
         * @throws {Errors.ApiErrorMessagesContactNotFound} - Contact not found
         * @throws {Errors.ApiErrorMessagesChatDisabled} - Chat was disabled
         * @throws {Errors.ApiErrorMessagesMemberAccessToGroupDenied} - Can't add user to chat, because user has no access to group
         * @throws {Errors.ApiErrorMessagesChatUnsupported} - Chat not supported
         * @see https://vk.com/dev/messages.addChatUser
         */
        addChatUser<Params extends {
            /**
             * Chat ID.
             * @maximum 100000000
             */
            chat_id: number;
            /**
             * ID of the user to be added to the chat.
             */
            user_id?: number;
            /**
             *
             * @maximum 1000
             */
            visible_messages_count?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Allows sending messages from community to the current user.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/messages.allowMessagesFromGroup
         */
        allowMessagesFromGroup<Params extends {
            /**
             * Group ID.
             */
            group_id: number;
            key?: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Creates a chat with several participants.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesContactNotFound} - Contact not found
         * @see https://vk.com/dev/messages.createChat
         */
        createChat<Params extends {
            /**
             * IDs of the users to be added to the chat.
             */
            user_ids?: number[];
            /**
             * Chat title.
             */
            title?: string;
            group_id?: number;
        }>(params: Params): Promise<Responses.MessagesCreateChatResponse["response"]>;
        /**
         * Deletes one or more messages.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesCantDeleteForAll} - Can't delete this message for everybody
         * @see https://vk.com/dev/messages.delete
         */
        delete<Params extends {
            /**
             * Message IDs.
             */
            message_ids?: number[];
            /**
             * '1' — to mark message as spam.
             */
            spam?: boolean;
            /**
             * Group ID (for group messages with user access token)
             */
            group_id?: number;
            /**
             * '1' — delete message for for all.
             */
            delete_for_all?: boolean;
        }>(params: Params): Promise<Responses.MessagesDeleteResponse["response"]>;
        /**
         * Deletes a chat's cover picture.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesChatNotAdmin} - You are not admin of this chat
         * @throws {Errors.ApiErrorMessagesChatDisabled} - Chat was disabled
         * @see https://vk.com/dev/messages.deleteChatPhoto
         */
        deleteChatPhoto<Params extends {
            /**
             * Chat ID.
             * @maximum 100000000
             */
            chat_id: number;
            group_id?: number;
        }>(params: Params): Promise<Responses.MessagesDeleteChatPhotoResponse["response"]>;
        /**
         * Deletes all private messages in a conversation.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesContactNotFound} - Contact not found
         * @see https://vk.com/dev/messages.deleteConversation
         */
        deleteConversation<Params extends {
            /**
             * User ID. To clear a chat history use 'chat_id'
             */
            user_id?: number;
            /**
             * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
             */
            peer_id?: number;
            /**
             * Group ID (for group messages with user access token)
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.MessagesDeleteConversationResponse["response"]>;
        /**
         * Denies sending message from community to the current user.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/messages.denyMessagesFromGroup
         */
        denyMessagesFromGroup<Params extends {
            /**
             * Group ID.
             */
            group_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits the message.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesDenySend} - Can't send messages for users without permission
         * @throws {Errors.ApiErrorMessagesEditExpired} - Can't edit this message, because it's too old
         * @throws {Errors.ApiErrorMessagesTooBig} - Can't sent this message, because it's too big
         * @throws {Errors.ApiErrorMessagesEditKindDisallowed} - Can't edit this kind of message
         * @throws {Errors.ApiErrorMessagesTooLongMessage} - Message is too long
         * @throws {Errors.ApiErrorMessagesChatUserNoAccess} - You don't have access to this chat
         * @throws {Errors.ApiErrorMessagesKeyboardInvalid} - Keyboard format is invalid
         * @throws {Errors.ApiErrorMessagesTooManyPosts} - Too many posts in messages
         * @throws {Errors.ApiErrorMessagesChatUnsupported} - Chat not supported
         * @see https://vk.com/dev/messages.edit
         */
        edit<Params extends {
            /**
             * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
             */
            peer_id: number;
            /**
             * (Required if 'attachments' is not set.) Text of the message.
             */
            message?: string;
            /**
             * Geographical latitude of a check-in, in degrees (from -90 to 90).
             */
            lat?: number;
            /**
             * Geographical longitude of a check-in, in degrees (from -180 to 180).
             */
            long?: number;
            /**
             * (Required if 'message' is not set.) List of objects attached to the message, separated by commas, in the following format: "<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, 'wall' — wall post, '<owner_id>' — ID of the media attachment owner. '<media_id>' — media attachment ID. Example: "photo100172_166443618"
             */
            attachment?: string;
            /**
             * '1' — to keep forwarded, messages.
             */
            keep_forward_messages?: boolean;
            /**
             * '1' — to keep attached snippets.
             */
            keep_snippets?: boolean;
            /**
             * Group ID (for group messages with user access token)
             */
            group_id?: number;
            dont_parse_links?: boolean;
            message_id?: number;
        }>(params: Params): Promise<Responses.MessagesEditResponse["response"]>;
        /**
         * Edits the title of a chat.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesChatNotAdmin} - You are not admin of this chat
         * @throws {Errors.ApiErrorMessagesChatDisabled} - Chat was disabled
         * @throws {Errors.ApiErrorMessagesChatUnsupported} - Chat not supported
         * @see https://vk.com/dev/messages.editChat
         */
        editChat<Params extends {
            /**
             * Chat ID.
             * @maximum 100000000
             */
            chat_id: number;
            /**
             * New title of the chat.
             */
            title: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns messages by their IDs within the conversation.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/messages.getByConversationMessageId
         */
        getByConversationMessageId<Params extends {
            /**
             * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
             */
            peer_id: number;
            /**
             * Conversation message IDs.
             */
            conversation_message_ids: number[];
            /**
             * Information whether the response should be extended
             */
            extended?: boolean;
            /**
             * Profile fields to return.
             */
            fields?: Objects.UsersFields[];
            /**
             * Group ID (for group messages with group access token)
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.MessagesGetByConversationMessageIdResponse["response"]>;
        /**
         * Returns messages by their IDs.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/messages.getById
         */
        getById<Params extends {
            /**
             * Message IDs.
             */
            message_ids: number[];
            /**
             * Number of characters after which to truncate a previewed message. To preview the full message, specify '0'. "NOTE: Messages are not truncated by default. Messages are truncated by words."
             */
            preview_length?: number;
            /**
             * Information whether the response should be extended
             */
            extended?: boolean;
            /**
             * Profile fields to return.
             */
            fields?: Objects.UsersFields[];
            /**
             * Group ID (for group messages with group access token)
             */
            group_id?: number;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.MessagesGetByIdExtendedResponse["response"]> : Promise<Responses.MessagesGetByIdResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @throws {Errors.ApiErrorMessagesChatUserNoAccess} - You don't have access to this chat
         * @see https://vk.com/dev/messages.getChatPreview
         */
        getChatPreview<Params extends {
            peer_id?: number;
            /**
             * Invitation link.
             */
            link?: string;
            /**
             * Profile fields to return.
             */
            fields?: Objects.UsersFields[];
        }>(params: Params): Promise<Responses.MessagesGetChatPreviewResponse["response"]>;
        /**
         * Returns a list of IDs of users participating in a chat.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesChatUserNoAccess} - You don't have access to this chat
         * @see https://vk.com/dev/messages.getConversationMembers
         */
        getConversationMembers<Params extends {
            /**
             * Peer ID.
             */
            peer_id: number;
            /**
             * Profile fields to return.
             */
            fields?: Objects.UsersFields[];
            /**
             * Group ID (for group messages with group access token)
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.MessagesGetConversationMembersResponse["response"]>;
        /**
         * Returns a list of the current user's conversations.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesChatNotExist} - Chat does not exist
         * @throws {Errors.ApiErrorMessagesContactNotFound} - Contact not found
         * @throws {Errors.ApiErrorMessagesChatUserNoAccess} - You don't have access to this chat
         * @see https://vk.com/dev/messages.getConversations
         */
        getConversations<Params extends {
            /**
             * Offset needed to return a specific subset of conversations.
             */
            offset?: number;
            /**
             * Number of conversations to return.
             * @maximum 200
             * @default 20
             */
            count?: number;
            /**
             * Filter to apply: 'all' — all conversations, 'unread' — conversations with unread messages, 'important' — conversations, marked as important (only for community messages), 'unanswered' — conversations, marked as unanswered (only for community messages)
             * @enum {string} all, important, unanswered, unread
             * @default all
             */
            filter?: "all" | "important" | "unanswered" | "unread";
            /**
             * '1' — return extra information about users and communities
             */
            extended?: boolean;
            /**
             * ID of the message from what to return dialogs.
             */
            start_message_id?: number;
            /**
             * Profile and communities fields to return.
             */
            fields?: Objects.BaseUserGroupFields[];
            /**
             * Group ID (for group messages with group access token)
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.MessagesGetConversationsResponse["response"]>;
        /**
         * Returns conversations by their IDs
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesChatNotExist} - Chat does not exist
         * @throws {Errors.ApiErrorMessagesChatUserNoAccess} - You don't have access to this chat
         * @throws {Errors.ApiErrorMessagesContactNotFound} - Contact not found
         * @see https://vk.com/dev/messages.getConversationsById
         */
        getConversationsById<Params extends {
            /**
             * Destination IDs. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
             */
            peer_ids: number[];
            /**
             * Return extended properties
             */
            extended?: boolean;
            /**
             * Profile and communities fields to return.
             */
            fields?: Objects.BaseUserGroupFields[];
            /**
             * Group ID (for group messages with group access token)
             */
            group_id?: number;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.MessagesGetConversationsByIdExtendedResponse["response"]> : Promise<Responses.MessagesGetConversationsByIdResponse["response"]>;
        /**
         * Returns message history for the specified user or group chat.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesContactNotFound} - Contact not found
         * @see https://vk.com/dev/messages.getHistory
         */
        getHistory<Params extends {
            /**
             * Offset needed to return a specific subset of messages.
             */
            offset?: number;
            /**
             * Number of messages to return.
             * @maximum 200
             * @default 20
             */
            count?: number;
            /**
             * ID of the user whose message history you want to return.
             */
            user_id?: number;
            peer_id?: number;
            /**
             * Starting message ID from which to return history.
             */
            start_message_id?: number;
            /**
             * Sort order: '1' — return messages in chronological order. '0' — return messages in reverse chronological order.
             */
            rev?: number;
            /**
             * Information whether the response should be extended
             */
            extended?: boolean;
            /**
             * Profile fields to return.
             */
            fields?: Objects.UsersFields[];
            /**
             * Group ID (for group messages with group access token)
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.MessagesGetHistoryResponse["response"]>;
        /**
         * Returns media files from the dialog or group chat.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/messages.getHistoryAttachments
         */
        getHistoryAttachments<Params extends {
            /**
             * Peer ID. ", For group chat: '2000000000 + chat ID' , , For community: '-community ID'"
             */
            peer_id: number;
            /**
             * Type of media files to return: *'photo',, *'video',, *'audio',, *'doc',, *'link'.,*'market'.,*'wall'.,*'share'
             * @enum {string} audio, audio_message, doc, graffiti, link, market, photo, share, video, wall
             * @default photo
             */
            media_type?: "audio" | "audio_message" | "doc" | "graffiti" | "link" | "market" | "photo" | "share" | "video" | "wall";
            /**
             * Message ID to start return results from.
             */
            start_from?: string;
            /**
             * Number of objects to return.
             * @maximum 200
             * @default 30
             */
            count?: number;
            /**
             * '1' — to return photo sizes in a
             */
            photo_sizes?: boolean;
            /**
             * Additional profile {@link https://vk.com/dev/fields|fields} to return.
             */
            fields?: Objects.UsersFields[];
            /**
             * Group ID (for group messages with group access token)
             */
            group_id?: number;
            preserve_order?: boolean;
            /**
             *
             * @maximum 45
             * @default 45
             */
            max_forwards_level?: number;
        }>(params: Params): Promise<Responses.MessagesGetHistoryAttachmentsResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesCantSeeInviteLink} - You can't see invite link for this chat
         * @throws {Errors.ApiErrorMessagesCantChangeInviteLink} - You can't change invite link for this chat
         * @see https://vk.com/dev/messages.getInviteLink
         */
        getInviteLink<Params extends {
            /**
             * Destination ID.
             */
            peer_id: number;
            /**
             * 1 — to generate new link (revoke previous), 0 — to return previous link.
             */
            reset?: boolean;
            /**
             * Group ID
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.MessagesGetInviteLinkResponse["response"]>;
        /**
         * Returns a user's current status and date of last activity.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/messages.getLastActivity
         */
        getLastActivity<Params extends {
            /**
             * User ID.
             */
            user_id: number;
        }>(params: Params): Promise<Responses.MessagesGetLastActivityResponse["response"]>;
        /**
         * Returns updates in user's private messages.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesTooOldPts} - Value of ts or pts is too old
         * @throws {Errors.ApiErrorMessagesTooNewPts} - Value of ts or pts is too new
         * @see https://vk.com/dev/messages.getLongPollHistory
         */
        getLongPollHistory<Params extends {
            /**
             * Last value of the 'ts' parameter returned from the Long Poll server or by using {@link https://vk.com/dev/messages.getLongPollHistory|messages.getLongPollHistory} method.
             */
            ts?: number;
            /**
             * Lsat value of 'pts' parameter returned from the Long Poll server or by using {@link https://vk.com/dev/messages.getLongPollHistory|messages.getLongPollHistory} method.
             */
            pts?: number;
            /**
             * Number of characters after which to truncate a previewed message. To preview the full message, specify '0'. "NOTE: Messages are not truncated by default. Messages are truncated by words."
             */
            preview_length?: number;
            /**
             * '1' — to return history with online users only.
             */
            onlines?: boolean;
            /**
             * Additional profile {@link https://vk.com/dev/fields|fields} to return.
             */
            fields?: Objects.UsersFields[];
            /**
             * Maximum number of events to return.
             * @minimum 1000
             * @default 1000
             */
            events_limit?: number;
            /**
             * Maximum number of messages to return.
             * @minimum 200
             * @default 200
             */
            msgs_limit?: number;
            /**
             * Maximum ID of the message among existing ones in the local copy. Both messages received with API methods (for example, , ), and data received from a Long Poll server (events with code 4) are taken into account.
             */
            max_msg_id?: number;
            /**
             * Group ID (for group messages with user access token)
             */
            group_id?: number;
            lp_version?: number;
            /**
             *
             * @maximum 2000
             */
            last_n?: number;
            credentials?: boolean;
        }>(params: Params): Promise<Responses.MessagesGetLongPollHistoryResponse["response"]>;
        /**
         * Returns data required for connection to a Long Poll server.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/messages.getLongPollServer
         */
        getLongPollServer<Params extends {
            /**
             * '1' — to return the 'pts' field, needed for the {@link https://vk.com/dev/messages.getLongPollHistory|messages.getLongPollHistory} method.
             */
            need_pts?: boolean;
            /**
             * Group ID (for group messages with user access token)
             */
            group_id?: number;
            /**
             * Long poll version
             */
            lp_version?: number;
        }>(params: Params): Promise<Responses.MessagesGetLongPollServerResponse["response"]>;
        /**
         * Returns information whether sending messages from the community to current user is allowed.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/messages.isMessagesFromGroupAllowed
         */
        isMessagesFromGroupAllowed<Params extends {
            /**
             * Group ID.
             */
            group_id: number;
            /**
             * User ID.
             */
            user_id: number;
        }>(params: Params): Promise<Responses.MessagesIsMessagesFromGroupAllowedResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @throws {Errors.ApiErrorMessagesChatUserNoAccess} - You don't have access to this chat
         * @throws {Errors.ApiErrorLimits} - Out of limits
         * @see https://vk.com/dev/messages.joinChatByInviteLink
         */
        joinChatByInviteLink<Params extends {
            /**
             * Invitation link.
             */
            link: string;
        }>(params: Params): Promise<Responses.MessagesJoinChatByInviteLinkResponse["response"]>;
        /**
         * Marks and unmarks conversations as unanswered.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/messages.markAsAnsweredConversation
         */
        markAsAnsweredConversation<Params extends {
            /**
             * ID of conversation to mark as important.
             */
            peer_id: number;
            /**
             * '1' — to mark as answered, '0' — to remove the mark
             * @default 1
             */
            answered?: boolean;
            /**
             * Group ID (for group messages with group access token)
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Marks and unmarks messages as important (starred).
         * @async
         * @access user
         *
         * @see https://vk.com/dev/messages.markAsImportant
         */
        markAsImportant<Params extends {
            /**
             * IDs of messages to mark as important.
             */
            message_ids?: number[];
            /**
             * '1' — to add a star (mark as important), '0' — to remove the star
             */
            important?: number;
        }>(params: Params): Promise<Responses.MessagesMarkAsImportantResponse["response"]>;
        /**
         * Marks and unmarks conversations as important.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/messages.markAsImportantConversation
         */
        markAsImportantConversation<Params extends {
            /**
             * ID of conversation to mark as important.
             */
            peer_id: number;
            /**
             * '1' — to add a star (mark as important), '0' — to remove the star
             * @default 1
             */
            important?: boolean;
            /**
             * Group ID (for group messages with group access token)
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Marks messages as read.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/messages.markAsRead
         */
        markAsRead<Params extends {
            /**
             * IDs of messages to mark as read.
             */
            message_ids?: number[];
            /**
             * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
             */
            peer_id?: number;
            /**
             * Message ID to start from.
             */
            start_message_id?: number;
            /**
             * Group ID (for group messages with user access token)
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Pin a message.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesChatNotAdmin} - You are not admin of this chat
         * @throws {Errors.ApiErrorMessagesCantPinOneTimeStory} - Cannot pin one-time story
         * @see https://vk.com/dev/messages.pin
         */
        pin<Params extends {
            /**
             * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'Chat ID', e.g. '2000000001'. For community: '- Community ID', e.g. '-12345'. "
             */
            peer_id: number;
            message_id?: number;
        }>(params: Params): Promise<Responses.MessagesPinResponse["response"]>;
        /**
         * Allows the current user to leave a chat or, if the current user started the chat, allows the user to remove another user from the chat.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesChatNotAdmin} - You are not admin of this chat
         * @throws {Errors.ApiErrorMessagesChatUserNotInChat} - User not found in chat
         * @throws {Errors.ApiErrorMessagesContactNotFound} - Contact not found
         * @throws {Errors.ApiErrorMessagesChatDisabled} - Chat was disabled
         * @throws {Errors.ApiErrorMessagesChatUnsupported} - Chat not supported
         * @see https://vk.com/dev/messages.removeChatUser
         */
        removeChatUser<Params extends {
            /**
             * Chat ID.
             * @maximum 100000000
             */
            chat_id: number;
            /**
             * ID of the user to be removed from the chat.
             */
            user_id?: number;
            member_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Restores a deleted message.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/messages.restore
         */
        restore<Params extends {
            /**
             * ID of a previously-deleted message to restore.
             */
            message_id: number;
            /**
             * Group ID (for group messages with user access token)
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns a list of the current user's private messages that match search criteria.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/messages.search
         */
        search<Params extends {
            /**
             * Search query string.
             */
            q?: string;
            /**
             * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
             */
            peer_id?: number;
            /**
             * Date to search message before in Unixtime.
             */
            date?: number;
            /**
             * Number of characters after which to truncate a previewed message. To preview the full message, specify '0'. "NOTE: Messages are not truncated by default. Messages are truncated by words."
             */
            preview_length?: number;
            /**
             * Offset needed to return a specific subset of messages.
             */
            offset?: number;
            /**
             * Number of messages to return.
             * @maximum 100
             * @default 20
             */
            count?: number;
            extended?: boolean;
            fields?: string[];
            /**
             * Group ID (for group messages with group access token)
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.MessagesSearchResponse["response"]>;
        /**
         * Returns a list of the current user's conversations that match search criteria.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/messages.searchConversations
         */
        searchConversations<Params extends {
            /**
             * Search query string.
             */
            q?: string;
            /**
             * Maximum number of results.
             * @default 20
             */
            count?: number;
            /**
             * '1' — return extra information about users and communities
             */
            extended?: boolean;
            /**
             * Profile fields to return.
             */
            fields?: Objects.UsersFields[];
            /**
             * Group ID (for group messages with user access token)
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.MessagesSearchConversationsResponse["response"]>;
        /**
         * Sends a message.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesUserBlocked} - Can't send messages for users from blacklist
         * @throws {Errors.ApiErrorMessagesDenySend} - Can't send messages for users without permission
         * @throws {Errors.ApiErrorMessagesPrivacy} - Can't send messages to this user due to their privacy settings
         * @throws {Errors.ApiErrorMessagesTooLongMessage} - Message is too long
         * @throws {Errors.ApiErrorMessagesTooLongForwards} - Too many forwarded messages
         * @throws {Errors.ApiErrorMessagesCantFwd} - Can't forward these messages
         * @throws {Errors.ApiErrorMessagesChatUserNoAccess} - You don't have access to this chat
         * @throws {Errors.ApiErrorMessagesKeyboardInvalid} - Keyboard format is invalid
         * @throws {Errors.ApiErrorMessagesChatBotFeature} - This is a chat bot feature, change this status in settings
         * @throws {Errors.ApiErrorMessagesContactNotFound} - Contact not found
         * @throws {Errors.ApiErrorMessagesTooManyPosts} - Too many posts in messages
         * @throws {Errors.ApiErrorMessagesIntentCantUse} - Cannot use this intent
         * @throws {Errors.ApiErrorMessagesIntentLimitOverflow} - Limits overflow for this intent
         * @throws {Errors.ApiErrorMessagesChatUnsupported} - Chat not supported
         * @throws {Errors.ApiErrorMessagesChatDisabled} - Chat was disabled
         * @throws {Errors.ApiErrorMessagesChatNotAdmin} - You are not admin of this chat
         * @see https://vk.com/dev/messages.send
         */
        send<Params extends {
            /**
             * User ID (by default — current user).
             */
            user_id?: number;
            /**
             * Unique identifier to avoid resending the message.
             */
            random_id?: number;
            /**
             * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
             */
            peer_id?: number;
            /**
             * User's short address (for example, 'illarionov').
             */
            domain?: string;
            /**
             * ID of conversation the message will relate to.
             * @maximum 100000000
             */
            chat_id?: number;
            /**
             * IDs of message recipients (if new conversation shall be started).
             */
            user_ids?: number[];
            /**
             * (Required if 'attachments' is not set.) Text of the message.
             */
            message?: string;
            /**
             * Geographical latitude of a check-in, in degrees (from -90 to 90).
             */
            lat?: number;
            /**
             * Geographical longitude of a check-in, in degrees (from -180 to 180).
             */
            long?: number;
            /**
             * (Required if 'message' is not set.) List of objects attached to the message, separated by commas, in the following format: "<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, 'wall' — wall post, '<owner_id>' — ID of the media attachment owner. '<media_id>' — media attachment ID. Example: "photo100172_166443618"
             */
            attachment?: string;
            reply_to?: number;
            /**
             * ID of forwarded messages, separated with a comma. Listed messages of the sender will be shown in the message body at the recipient's. Example: "123,431,544"
             */
            forward_messages?: number[];
            /**
             * Sticker id.
             */
            sticker_id?: number;
            /**
             * Group ID (for group messages with group access token)
             */
            group_id?: number;
            keyboard?: Objects.MessagesKeyboard;
            payload?: string;
            dont_parse_links?: boolean;
            disable_mentions?: boolean;
            /**
             *
             * @enum {string} bot_ad_invite, bot_ad_promo, promo_newsletter
             */
            intent?: "bot_ad_invite" | "bot_ad_promo" | "promo_newsletter";
        }>(params: Params): Promise<Responses.MessagesSendResponse["response"]>;
        /**
         * Changes the status of a user as typing in a conversation.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesGroupPeerAccess} - Your community can't interact with this peer
         * @throws {Errors.ApiErrorMessagesChatUserNoAccess} - You don't have access to this chat
         * @throws {Errors.ApiErrorMessagesContactNotFound} - Contact not found
         * @see https://vk.com/dev/messages.setActivity
         */
        setActivity<Params extends {
            /**
             * User ID.
             */
            user_id?: number;
            /**
             * 'typing' — user has started to type.
             */
            type?: string;
            /**
             * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
             */
            peer_id?: number;
            /**
             * Group ID (for group messages with group access token)
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Sets a previously-uploaded picture as the cover picture of a chat.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorUpload} - Upload error
         * @throws {Errors.ApiErrorPhotoChanged} - Original photo was changed
         * @throws {Errors.ApiErrorMessagesChatNotAdmin} - You are not admin of this chat
         * @see https://vk.com/dev/messages.setChatPhoto
         */
        setChatPhoto<Params extends {
            /**
             * Upload URL from the 'response' field returned by the {@link https://vk.com/dev/photos.getChatUploadServer|photos.getChatUploadServer} method upon successfully uploading an image.
             */
            file: string;
        }>(params: Params): Promise<Responses.MessagesSetChatPhotoResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesChatNotAdmin} - You are not admin of this chat
         * @see https://vk.com/dev/messages.unpin
         */
        unpin<Params extends {
            peer_id: number;
            group_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
    }
    interface Newsfeed {
        /**
         * Prevents news from specified users and communities from appearing in the current user's newsfeed.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/newsfeed.addBan
         */
        addBan<Params extends {
            user_ids?: number[];
            group_ids?: number[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Allows news from previously banned users and communities to be shown in the current user's newsfeed.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/newsfeed.deleteBan
         */
        deleteBan<Params extends {
            user_ids?: number[];
            group_ids?: number[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/newsfeed.deleteList
         */
        deleteList<Params extends {
            list_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns data required to show newsfeed for the current user.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/newsfeed.get
         */
        get<Params extends {
            /**
             * Filters to apply: 'post' — new wall posts, 'photo' — new photos, 'photo_tag' — new photo tags, 'wall_photo' — new wall photos, 'friend' — new friends, 'note' — new notes
             */
            filters?: Objects.NewsfeedFilters[];
            /**
             * '1' — to return news items from banned sources
             */
            return_banned?: boolean;
            /**
             * Earliest timestamp (in Unix time) of a news item to return. By default, 24 hours ago.
             */
            start_time?: number;
            /**
             * Latest timestamp (in Unix time) of a news item to return. By default, the current time.
             */
            end_time?: number;
            /**
             * Maximum number of photos to return. By default, '5'.
             */
            max_photos?: number;
            /**
             * Sources to obtain news from, separated by commas. User IDs can be specified in formats '' or 'u' , where '' is the user's friend ID. Community IDs can be specified in formats '-' or 'g' , where '' is the community ID. If the parameter is not set, all of the user's friends and communities are returned, except for banned sources, which can be obtained with the {@link https://vk.com/dev/newsfeed.getBanned|newsfeed.getBanned} method.
             */
            source_ids?: string;
            /**
             * identifier required to get the next page of results. Value for this parameter is returned in 'next_from' field in a reply.
             */
            start_from?: string;
            /**
             * Number of news items to return (default 50, maximum 100). For auto feed, you can use the 'new_offset' parameter returned by this method.
             */
            count?: number;
            /**
             * Additional fields of {@link https://vk.com/dev/fields|profiles} and {@link https://vk.com/dev/fields_groups|communities} to return.
             */
            fields?: Objects.BaseUserGroupFields[];
            section?: string;
        }>(params: Params): Promise<Responses.NewsfeedGetResponse["response"]>;
        /**
         * Returns a list of users and communities banned from the current user's newsfeed.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/newsfeed.getBanned
         */
        getBanned<Params extends {
            /**
             * '1' — return extra information about users and communities
             */
            extended?: boolean;
            /**
             * Profile fields to return.
             */
            fields?: Objects.UsersFields[];
            /**
             * Case for declension of user name and surname: 'nom' — nominative (default), 'gen' — genitive , 'dat' — dative, 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
             * @enum {string} nom, gen, dat, acc, ins, abl
             */
            name_case?: "nom" | "gen" | "dat" | "acc" | "ins" | "abl";
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.NewsfeedGetBannedExtendedResponse["response"]> : Promise<Responses.NewsfeedGetBannedResponse["response"]>;
        /**
         * Returns a list of comments in the current user's newsfeed.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/newsfeed.getComments
         */
        getComments<Params extends {
            /**
             * Number of comments to return. For auto feed, you can use the 'new_offset' parameter returned by this method.
             * @maximum 100
             * @default 30
             */
            count?: number;
            /**
             * Filters to apply: 'post' — new comments on wall posts, 'photo' — new comments on photos, 'video' — new comments on videos, 'topic' — new comments on discussions, 'note' — new comments on notes,
             */
            filters?: Objects.NewsfeedCommentsFilters[];
            /**
             * Object ID, comments on repost of which shall be returned, e.g. 'wall1_45486'. (If the parameter is set, the 'filters' parameter is optional.),
             */
            reposts?: string;
            /**
             * Earliest timestamp (in Unix time) of a comment to return. By default, 24 hours ago.
             */
            start_time?: number;
            /**
             * Latest timestamp (in Unix time) of a comment to return. By default, the current time.
             */
            end_time?: number;
            /**
             *
             * @maximum 10
             */
            last_comments_count?: number;
            /**
             * Identificator needed to return the next page with results. Value for this parameter returns in 'next_from' field.
             */
            start_from?: string;
            /**
             * Additional fields of {@link https://vk.com/dev/fields|profiles} and {@link https://vk.com/dev/fields_groups|communities} to return.
             */
            fields?: Objects.BaseUserGroupFields[];
        }>(params: Params): Promise<Responses.NewsfeedGetCommentsResponse["response"]>;
        /**
         * Returns a list of newsfeeds followed by the current user.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/newsfeed.getLists
         */
        getLists<Params extends {
            /**
             * numeric list identifiers.
             */
            list_ids?: number[];
            /**
             * Return additional list info
             */
            extended?: boolean;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.NewsfeedGetListsExtendedResponse["response"]> : Promise<Responses.NewsfeedGetListsResponse["response"]>;
        /**
         * Returns a list of posts on user walls in which the current user is mentioned.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/newsfeed.getMentions
         */
        getMentions<Params extends {
            /**
             * Owner ID.
             */
            owner_id?: number;
            /**
             * Earliest timestamp (in Unix time) of a post to return. By default, 24 hours ago.
             */
            start_time?: number;
            /**
             * Latest timestamp (in Unix time) of a post to return. By default, the current time.
             */
            end_time?: number;
            /**
             * Offset needed to return a specific subset of posts.
             */
            offset?: number;
            /**
             * Number of posts to return.
             * @maximum 50
             * @default 20
             */
            count?: number;
        }>(params: Params): Promise<Responses.NewsfeedGetMentionsResponse["response"]>;
        /**
         * , Returns a list of newsfeeds recommended to the current user.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/newsfeed.getRecommended
         */
        getRecommended<Params extends {
            /**
             * Earliest timestamp (in Unix time) of a news item to return. By default, 24 hours ago.
             */
            start_time?: number;
            /**
             * Latest timestamp (in Unix time) of a news item to return. By default, the current time.
             */
            end_time?: number;
            /**
             * Maximum number of photos to return. By default, '5'.
             */
            max_photos?: number;
            /**
             * 'new_from' value obtained in previous call.
             */
            start_from?: string;
            /**
             * Number of news items to return.
             */
            count?: number;
            /**
             * Additional fields of {@link https://vk.com/dev/fields|profiles} and {@link https://vk.com/dev/fields_groups|communities} to return.
             */
            fields?: Objects.BaseUserGroupFields[];
        }>(params: Params): Promise<Responses.NewsfeedGetRecommendedResponse["response"]>;
        /**
         * Returns communities and users that current user is suggested to follow.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/newsfeed.getSuggestedSources
         */
        getSuggestedSources<Params extends {
            /**
             * offset required to choose a particular subset of communities or users.
             */
            offset?: number;
            /**
             * amount of communities or users to return.
             * @maximum 1000
             * @default 20
             */
            count?: number;
            /**
             * shuffle the returned list or not.
             */
            shuffle?: boolean;
            /**
             * list of extra fields to be returned. See available fields for {@link https://vk.com/dev/fields|users} and {@link https://vk.com/dev/fields_groups|communities}.
             */
            fields?: Objects.BaseUserGroupFields[];
        }>(params: Params): Promise<Responses.NewsfeedGetSuggestedSourcesResponse["response"]>;
        /**
         * Hides an item from the newsfeed.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/newsfeed.ignoreItem
         */
        ignoreItem<Params extends {
            /**
             * Item type. Possible values: *'wall' – post on the wall,, *'tag' – tag on a photo,, *'profilephoto' – profile photo,, *'video' – video,, *'audio' – audio.
             */
            type: Objects.NewsfeedIgnoreItemType;
            /**
             * Item owner's identifier (user or community), "Note that community id must be negative. 'owner_id=1' – user , 'owner_id=-1' – community "
             */
            owner_id: number;
            /**
             * Item identifier
             */
            item_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Creates and edits user newsfeed lists
         * @async
         * @access user
         * @throws {Errors.ApiErrorTooManyLists} - Too many feed lists
         * @see https://vk.com/dev/newsfeed.saveList
         */
        saveList<Params extends {
            /**
             * numeric list identifier (if not sent, will be set automatically).
             */
            list_id?: number;
            /**
             * list name.
             */
            title: string;
            /**
             * users and communities identifiers to be added to the list. Community identifiers must be negative numbers.
             */
            source_ids?: number[];
            /**
             * reposts display on and off ('1' is for off).
             */
            no_reposts?: boolean;
        }>(params: Params): Promise<Responses.NewsfeedSaveListResponse["response"]>;
        /**
         * Returns search results by statuses.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/newsfeed.search
         */
        search<Params extends {
            /**
             * Search query string (e.g., 'New Year').
             */
            q?: string;
            /**
             * '1' — to return additional information about the user or community that placed the post.
             */
            extended?: boolean;
            /**
             * Number of posts to return.
             * @maximum 200
             * @default 30
             */
            count?: number;
            /**
             * Geographical latitude point (in degrees, -90 to 90) within which to search.
             */
            latitude?: number;
            /**
             * Geographical longitude point (in degrees, -180 to 180) within which to search.
             */
            longitude?: number;
            /**
             * Earliest timestamp (in Unix time) of a news item to return. By default, 24 hours ago.
             */
            start_time?: number;
            /**
             * Latest timestamp (in Unix time) of a news item to return. By default, the current time.
             */
            end_time?: number;
            start_from?: string;
            /**
             * Additional fields of {@link https://vk.com/dev/fields|profiles} and {@link https://vk.com/dev/fields_groups|communities} to return.
             */
            fields?: Objects.BaseUserGroupFields[];
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.NewsfeedSearchExtendedResponse["response"]> : Promise<Responses.NewsfeedSearchResponse["response"]>;
        /**
         * Returns a hidden item to the newsfeed.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/newsfeed.unignoreItem
         */
        unignoreItem<Params extends {
            /**
             * Item type. Possible values: *'wall' – post on the wall,, *'tag' – tag on a photo,, *'profilephoto' – profile photo,, *'video' – video,, *'audio' – audio.
             */
            type: Objects.NewsfeedIgnoreItemType;
            /**
             * Item owner's identifier (user or community), "Note that community id must be negative. 'owner_id=1' – user , 'owner_id=-1' – community "
             */
            owner_id: number;
            /**
             * Item identifier
             */
            item_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Unsubscribes the current user from specified newsfeeds.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/newsfeed.unsubscribe
         */
        unsubscribe<Params extends {
            /**
             * Type of object from which to unsubscribe: 'note' — note, 'photo' — photo, 'post' — post on user wall or community wall, 'topic' — topic, 'video' — video
             * @enum {string} note, photo, post, topic, video
             */
            type: "note" | "photo" | "post" | "topic" | "video";
            /**
             * Object owner ID.
             */
            owner_id?: number;
            /**
             * Object ID.
             */
            item_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
    }
    interface Notes {
        /**
         * Creates a new note for the current user.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/notes.add
         */
        add<Params extends {
            /**
             * Note title.
             */
            title: string;
            /**
             * Note text.
             */
            text: string;
            privacy_view?: string[];
            privacy_comment?: string[];
        }>(params: Params): Promise<Responses.NotesAddResponse["response"]>;
        /**
         * Adds a new comment on a note.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessNote} - Access to note denied
         * @throws {Errors.ApiErrorAccessNoteComment} - You can't comment this note
         * @see https://vk.com/dev/notes.createComment
         */
        createComment<Params extends {
            /**
             * Note ID.
             */
            note_id: number;
            /**
             * Note owner ID.
             */
            owner_id?: number;
            /**
             * ID of the user to whom the reply is addressed (if the comment is a reply to another comment).
             */
            reply_to?: number;
            /**
             * Comment text.
             */
            message: string;
            guid?: string;
        }>(params: Params): Promise<Responses.NotesCreateCommentResponse["response"]>;
        /**
         * Deletes a note of the current user.
         * @async
         * @access user
         * @throws {Errors.ApiErrorParamNoteId} - Note not found
         * @see https://vk.com/dev/notes.delete
         */
        delete<Params extends {
            /**
             * Note ID.
             */
            note_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Deletes a comment on a note.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessNote} - Access to note denied
         * @throws {Errors.ApiErrorAccessComment} - Access to comment denied
         * @see https://vk.com/dev/notes.deleteComment
         */
        deleteComment<Params extends {
            /**
             * Comment ID.
             */
            comment_id: number;
            /**
             * Note owner ID.
             */
            owner_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits a note of the current user.
         * @async
         * @access user
         * @throws {Errors.ApiErrorParamNoteId} - Note not found
         * @see https://vk.com/dev/notes.edit
         */
        edit<Params extends {
            /**
             * Note ID.
             */
            note_id: number;
            /**
             * Note title.
             */
            title: string;
            /**
             * Note text.
             */
            text: string;
            privacy_view?: string[];
            privacy_comment?: string[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits a comment on a note.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessComment} - Access to comment denied
         * @see https://vk.com/dev/notes.editComment
         */
        editComment<Params extends {
            /**
             * Comment ID.
             */
            comment_id: number;
            /**
             * Note owner ID.
             */
            owner_id?: number;
            /**
             * New comment text.
             */
            message: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns a list of notes created by a user.
         * @async
         * @access user
         * @throws {Errors.ApiErrorParamNoteId} - Note not found
         * @see https://vk.com/dev/notes.get
         */
        get<Params extends {
            /**
             * Note IDs.
             */
            note_ids?: number[];
            /**
             * Note owner ID.
             */
            user_id?: number;
            offset?: number;
            /**
             * Number of notes to return.
             * @maximum 100
             * @default 20
             */
            count?: number;
            sort?: number;
        }>(params: Params): Promise<Responses.NotesGetResponse["response"]>;
        /**
         * Returns a note by its ID.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessNote} - Access to note denied
         * @throws {Errors.ApiErrorParamNoteId} - Note not found
         * @see https://vk.com/dev/notes.getById
         */
        getById<Params extends {
            /**
             * Note ID.
             */
            note_id: number;
            /**
             * Note owner ID.
             */
            owner_id?: number;
            need_wiki?: boolean;
        }>(params: Params): Promise<Responses.NotesGetByIdResponse["response"]>;
        /**
         * Returns a list of comments on a note.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessNote} - Access to note denied
         * @see https://vk.com/dev/notes.getComments
         */
        getComments<Params extends {
            /**
             * Note ID.
             */
            note_id: number;
            /**
             * Note owner ID.
             */
            owner_id?: number;
            sort?: number;
            offset?: number;
            /**
             * Number of comments to return.
             * @maximum 100
             * @default 20
             */
            count?: number;
        }>(params: Params): Promise<Responses.NotesGetCommentsResponse["response"]>;
        /**
         * Restores a deleted comment on a note.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessComment} - Access to comment denied
         * @see https://vk.com/dev/notes.restoreComment
         */
        restoreComment<Params extends {
            /**
             * Comment ID.
             */
            comment_id: number;
            /**
             * Note owner ID.
             */
            owner_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
    }
    interface Notifications {
        /**
         * Returns a list of notifications about other users' feedback to the current user's wall posts.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/notifications.get
         */
        get<Params extends {
            /**
             * Number of notifications to return.
             * @maximum 100
             * @minimum 1
             * @default 30
             */
            count?: number;
            start_from?: string;
            /**
             * Type of notifications to return: 'wall' — wall posts, 'mentions' — mentions in wall posts, comments, or topics, 'comments' — comments to wall posts, photos, and videos, 'likes' — likes, 'reposted' — wall posts that are copied from the current user's wall, 'followers' — new followers, 'friends' — accepted friend requests
             */
            filters?: (/**
             * @enum {string} wall, mentions, comments, likes, reposted, followers, friends */ "wall" | "mentions" | "comments" | "likes" | "reposted" | "followers" | "friends")[];
            /**
             * Earliest timestamp (in Unix time) of a notification to return. By default, 24 hours ago.
             */
            start_time?: number;
            /**
             * Latest timestamp (in Unix time) of a notification to return. By default, the current time.
             */
            end_time?: number;
        }>(params: Params): Promise<Responses.NotificationsGetResponse["response"]>;
        /**
         * Resets the counter of new notifications about other users' feedback to the current user's wall posts.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/notifications.markAsViewed
         */
        markAsViewed<Params extends never>(params?: Params): Promise<Responses.NotificationsMarkAsViewedResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @access service
         * @throws {Errors.ApiErrorGroupAppIsNotInstalledInCommunity} - Application is not installed in community
         * @see https://vk.com/dev/notifications.sendMessage
         */
        sendMessage<Params extends {
            user_ids: number[];
            message: string;
            fragment?: string;
            group_id?: number;
        }>(params: Params): Promise<Responses.NotificationsSendMessageResponse["response"]>;
    }
    interface Orders {
        /**
         * Method not described
         * @async
         * @access user
         * @access service
         * @throws {Errors.ApiErrorAppsSubscriptionNotFound} - Subscription not found
         * @throws {Errors.ApiErrorAppsSubscriptionInvalidStatus} - Subscription is in invalid status
         * @see https://vk.com/dev/orders.cancelSubscription
         */
        cancelSubscription<Params extends {
            user_id: number;
            subscription_id: number;
            pending_cancel?: boolean;
        }>(params: Params): Promise<Responses.OrdersCancelSubscriptionResponse["response"]>;
        /**
         * Changes order status.
         * @async
         * @access user
         * @access service
         * @throws {Errors.ApiErrorLimits} - Out of limits
         * @throws {Errors.ApiErrorActionFailed} - Unable to process action
         * @see https://vk.com/dev/orders.changeState
         */
        changeState<Params extends {
            /**
             * order ID.
             */
            order_id: number;
            /**
             * action to be done with the order. Available actions: *cancel — to cancel unconfirmed order. *charge — to confirm unconfirmed order. Applies only if processing of {@link https://vk.com/dev/payments_status|order_change_state} notification failed. *refund — to cancel confirmed order.
             * @enum {string} cancel, charge, refund
             */
            action: "cancel" | "charge" | "refund";
            /**
             * internal ID of the order in the application.
             */
            app_order_id?: number;
            /**
             * if this parameter is set to 1, this method returns a list of test mode orders. By default — 0.
             */
            test_mode?: boolean;
        }>(params: Params): Promise<Responses.OrdersChangeStateResponse["response"]>;
        /**
         * Returns a list of orders.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/orders.get
         */
        get<Params extends {
            offset?: number;
            /**
             * number of returned orders.
             * @maximum 1000
             * @default 100
             */
            count?: number;
            /**
             * if this parameter is set to 1, this method returns a list of test mode orders. By default — 0.
             */
            test_mode?: boolean;
        }>(params: Params): Promise<Responses.OrdersGetResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/orders.getAmount
         */
        getAmount<Params extends {
            user_id: number;
            votes: string[];
        }>(params: Params): Promise<Responses.OrdersGetAmountResponse["response"]>;
        /**
         * Returns information about orders by their IDs.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/orders.getById
         */
        getById<Params extends {
            /**
             * order ID.
             */
            order_id?: number;
            /**
             * order IDs (when information about several orders is requested).
             */
            order_ids?: number[];
            /**
             * if this parameter is set to 1, this method returns a list of test mode orders. By default — 0.
             */
            test_mode?: boolean;
        }>(params: Params): Promise<Responses.OrdersGetByIdResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @access service
         * @throws {Errors.ApiErrorAppsSubscriptionNotFound} - Subscription not found
         * @see https://vk.com/dev/orders.getUserSubscriptionById
         */
        getUserSubscriptionById<Params extends {
            user_id: number;
            subscription_id: number;
        }>(params: Params): Promise<Responses.OrdersGetUserSubscriptionByIdResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/orders.getUserSubscriptions
         */
        getUserSubscriptions<Params extends {
            user_id: number;
        }>(params: Params): Promise<Responses.OrdersGetUserSubscriptionsResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @access service
         * @throws {Errors.ApiErrorAppsSubscriptionNotFound} - Subscription not found
         * @throws {Errors.ApiErrorAppsSubscriptionInvalidStatus} - Subscription is in invalid status
         * @see https://vk.com/dev/orders.updateSubscription
         */
        updateSubscription<Params extends {
            user_id: number;
            subscription_id: number;
            price: number;
        }>(params: Params): Promise<Responses.OrdersUpdateSubscriptionResponse["response"]>;
    }
    interface Pages {
        /**
         * Allows to clear the cache of particular 'external' pages which may be attached to VK posts.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/pages.clearCache
         */
        clearCache<Params extends {
            /**
             * Address of the page where you need to refesh the cached version
             */
            url: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns information about a wiki page.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/pages.get
         */
        get<Params extends {
            /**
             * Page owner ID.
             */
            owner_id?: number;
            /**
             * Wiki page ID.
             */
            page_id?: number;
            /**
             * '1' — to return information about a global wiki page
             */
            global?: boolean;
            /**
             * '1' — resulting wiki page is a preview for the attached link
             */
            site_preview?: boolean;
            /**
             * Wiki page title.
             */
            title?: string;
            need_source?: boolean;
            /**
             * '1' — to return the page as HTML,
             */
            need_html?: boolean;
        }>(params: Params): Promise<Responses.PagesGetResponse["response"]>;
        /**
         * Returns a list of all previous versions of a wiki page.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessPage} - Access to page denied
         * @throws {Errors.ApiErrorParamPageId} - Page not found
         * @see https://vk.com/dev/pages.getHistory
         */
        getHistory<Params extends {
            /**
             * Wiki page ID.
             */
            page_id: number;
            /**
             * ID of the community that owns the wiki page.
             */
            group_id?: number;
            user_id?: number;
        }>(params: Params): Promise<Responses.PagesGetHistoryResponse["response"]>;
        /**
         * Returns a list of wiki pages in a group.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessPage} - Access to page denied
         * @see https://vk.com/dev/pages.getTitles
         */
        getTitles<Params extends {
            /**
             * ID of the community that owns the wiki page.
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.PagesGetTitlesResponse["response"]>;
        /**
         * Returns the text of one of the previous versions of a wiki page.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessPage} - Access to page denied
         * @see https://vk.com/dev/pages.getVersion
         */
        getVersion<Params extends {
            version_id: number;
            /**
             * ID of the community that owns the wiki page.
             */
            group_id?: number;
            user_id?: number;
            /**
             * '1' — to return the page as HTML
             */
            need_html?: boolean;
        }>(params: Params): Promise<Responses.PagesGetVersionResponse["response"]>;
        /**
         * Returns HTML representation of the wiki markup.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/pages.parseWiki
         */
        parseWiki<Params extends {
            /**
             * Text of the wiki page.
             */
            text: string;
            /**
             * ID of the group in the context of which this markup is interpreted.
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.PagesParseWikiResponse["response"]>;
        /**
         * Saves the text of a wiki page.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessPage} - Access to page denied
         * @throws {Errors.ApiErrorParamPageId} - Page not found
         * @throws {Errors.ApiErrorParamTitle} - Invalid title
         * @see https://vk.com/dev/pages.save
         */
        save<Params extends {
            /**
             * Text of the wiki page in wiki-format.
             */
            text?: string;
            /**
             * Wiki page ID. The 'title' parameter can be passed instead of 'pid'.
             */
            page_id?: number;
            /**
             * ID of the community that owns the wiki page.
             */
            group_id?: number;
            /**
             * User ID
             */
            user_id?: number;
            /**
             * Wiki page title.
             */
            title?: string;
        }>(params: Params): Promise<Responses.PagesSaveResponse["response"]>;
        /**
         * Saves modified read and edit access settings for a wiki page.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessPage} - Access to page denied
         * @throws {Errors.ApiErrorParamPageId} - Page not found
         * @see https://vk.com/dev/pages.saveAccess
         */
        saveAccess<Params extends {
            /**
             * Wiki page ID.
             */
            page_id: number;
            /**
             * ID of the community that owns the wiki page.
             */
            group_id?: number;
            user_id?: number;
            /**
             * Who can view the wiki page: '1' — only community members, '2' — all users can view the page, '0' — only community managers
             */
            view?: number;
            /**
             * Who can edit the wiki page: '1' — only community members, '2' — all users can edit the page, '0' — only community managers
             */
            edit?: number;
        }>(params: Params): Promise<Responses.PagesSaveAccessResponse["response"]>;
    }
    interface Photos {
        /**
         * Confirms a tag on a photo.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.confirmTag
         */
        confirmTag<Params extends {
            /**
             * ID of the user or community that owns the photo.
             */
            owner_id?: number;
            /**
             * Photo ID.
             */
            photo_id: string;
            /**
             * Tag ID.
             */
            tag_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Allows to copy a photo to the "Saved photos" album
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.copy
         */
        copy<Params extends {
            /**
             * photo's owner ID
             */
            owner_id: number;
            /**
             * photo ID
             */
            photo_id: number;
            /**
             * for private photos
             */
            access_key?: string;
        }>(params: Params): Promise<Responses.PhotosCopyResponse["response"]>;
        /**
         * Creates an empty photo album.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAlbumsLimit} - Albums number limit is reached
         * @see https://vk.com/dev/photos.createAlbum
         */
        createAlbum<Params extends {
            /**
             * Album title.
             */
            title: string;
            /**
             * ID of the community in which the album will be created.
             */
            group_id?: number;
            /**
             * Album description.
             */
            description?: string;
            privacy_view?: string[];
            privacy_comment?: string[];
            upload_by_admins_only?: boolean;
            comments_disabled?: boolean;
        }>(params: Params): Promise<Responses.PhotosCreateAlbumResponse["response"]>;
        /**
         * Adds a new comment on the photo.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.createComment
         */
        createComment<Params extends {
            /**
             * ID of the user or community that owns the photo.
             */
            owner_id?: number;
            /**
             * Photo ID.
             */
            photo_id: number;
            /**
             * Comment text.
             */
            message?: string;
            /**
             * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — Media attachment owner ID. '<media_id>' — Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
             */
            attachments?: string[];
            /**
             * '1' — to post a comment from the community
             */
            from_group?: boolean;
            reply_to_comment?: number;
            sticker_id?: number;
            access_key?: string;
            guid?: string;
        }>(params: Params): Promise<Responses.PhotosCreateCommentResponse["response"]>;
        /**
         * Deletes a photo.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.delete
         */
        delete<Params extends {
            /**
             * ID of the user or community that owns the photo.
             */
            owner_id?: number;
            /**
             * Photo ID.
             */
            photo_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Deletes a photo album belonging to the current user.
         * @async
         * @access user
         * @throws {Errors.ApiErrorParamAlbumId} - Invalid album id
         * @see https://vk.com/dev/photos.deleteAlbum
         */
        deleteAlbum<Params extends {
            /**
             * Album ID.
             */
            album_id: number;
            /**
             * ID of the community that owns the album.
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Deletes a comment on the photo.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.deleteComment
         */
        deleteComment<Params extends {
            /**
             * ID of the user or community that owns the photo.
             */
            owner_id?: number;
            /**
             * Comment ID.
             */
            comment_id: number;
        }>(params: Params): Promise<Responses.PhotosDeleteCommentResponse["response"]>;
        /**
         * Edits the caption of a photo.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.edit
         */
        edit<Params extends {
            /**
             * ID of the user or community that owns the photo.
             */
            owner_id?: number;
            /**
             * Photo ID.
             */
            photo_id: number;
            /**
             * New caption for the photo. If this parameter is not set, it is considered to be equal to an empty string.
             */
            caption?: string;
            latitude?: number;
            longitude?: number;
            place_str?: string;
            foursquare_id?: string;
            delete_place?: boolean;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits information about a photo album.
         * @async
         * @access user
         * @throws {Errors.ApiErrorParamAlbumId} - Invalid album id
         * @see https://vk.com/dev/photos.editAlbum
         */
        editAlbum<Params extends {
            /**
             * ID of the photo album to be edited.
             */
            album_id: number;
            /**
             * New album title.
             */
            title?: string;
            /**
             * New album description.
             */
            description?: string;
            /**
             * ID of the user or community that owns the album.
             */
            owner_id?: number;
            privacy_view?: string[];
            privacy_comment?: string[];
            upload_by_admins_only?: boolean;
            comments_disabled?: boolean;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits a comment on a photo.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.editComment
         */
        editComment<Params extends {
            /**
             * ID of the user or community that owns the photo.
             */
            owner_id?: number;
            /**
             * Comment ID.
             */
            comment_id: number;
            /**
             * New text of the comment.
             */
            message?: string;
            /**
             * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — Media attachment owner ID. '<media_id>' — Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
             */
            attachments?: string[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns a list of a user's or community's photos.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/photos.get
         */
        get<Params extends {
            /**
             * ID of the user or community that owns the photos. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * Photo album ID. To return information about photos from service albums, use the following string values: 'profile, wall, saved'.
             */
            album_id?: string;
            /**
             * Photo IDs.
             */
            photo_ids?: string[];
            /**
             * Sort order: '1' — reverse chronological, '0' — chronological
             */
            rev?: boolean;
            /**
             * '1' — to return additional 'likes', 'comments', and 'tags' fields, '0' — (default)
             */
            extended?: boolean;
            /**
             * Type of feed obtained in 'feed' field of the method.
             */
            feed_type?: string;
            /**
             * unixtime, that can be obtained with {@link https://vk.com/dev/newsfeed.get|newsfeed.get} method in date field to get all photos uploaded by the user on a specific day, or photos the user has been tagged on. Also, 'uid' parameter of the user the event happened with shall be specified.
             */
            feed?: number;
            /**
             * '1' — to return photo sizes in a {@link https://vk.com/dev/photo_sizes|special format}
             */
            photo_sizes?: boolean;
            offset?: number;
            /**
             *
             * @maximum 1000
             * @default 50
             */
            count?: number;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.PhotosGetExtendedResponse["response"]> : Promise<Responses.PhotosGetResponse["response"]>;
        /**
         * Returns a list of a user's or community's photo albums.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/photos.getAlbums
         */
        getAlbums<Params extends {
            /**
             * ID of the user or community that owns the albums.
             */
            owner_id?: number;
            /**
             * Album IDs.
             */
            album_ids?: number[];
            /**
             * Offset needed to return a specific subset of albums.
             */
            offset?: number;
            /**
             * Number of albums to return.
             */
            count?: number;
            /**
             * '1' — to return system albums with negative IDs
             */
            need_system?: boolean;
            /**
             * '1' — to return an additional 'thumb_src' field, '0' — (default)
             */
            need_covers?: boolean;
            /**
             * '1' — to return photo sizes in a
             */
            photo_sizes?: boolean;
        }>(params: Params): Promise<Responses.PhotosGetAlbumsResponse["response"]>;
        /**
         * Returns the number of photo albums belonging to a user or community.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.getAlbumsCount
         */
        getAlbumsCount<Params extends {
            /**
             * User ID.
             */
            user_id?: number;
            /**
             * Community ID.
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.PhotosGetAlbumsCountResponse["response"]>;
        /**
         * Returns a list of photos belonging to a user or community, in reverse chronological order.
         * @async
         * @access user
         * @throws {Errors.ApiErrorBlocked} - Content blocked
         * @see https://vk.com/dev/photos.getAll
         */
        getAll<Params extends {
            /**
             * ID of a user or community that owns the photos. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * '1' — to return detailed information about photos
             */
            extended?: boolean;
            /**
             * Offset needed to return a specific subset of photos. By default, '0'.
             */
            offset?: number;
            /**
             * Number of photos to return.
             * @maximum 200
             * @default 20
             */
            count?: number;
            /**
             * '1' – to return image sizes in {@link https://vk.com/dev/photo_sizes|special format}.
             */
            photo_sizes?: boolean;
            /**
             * '1' – to return photos only from standard albums, '0' – to return all photos including those in service albums, e.g., 'My wall photos' (default)
             */
            no_service_albums?: boolean;
            /**
             * '1' – to show information about photos being hidden from the block above the wall.
             */
            need_hidden?: boolean;
            /**
             * '1' – not to return photos being hidden from the block above the wall. Works only with owner_id>0, no_service_albums is ignored.
             */
            skip_hidden?: boolean;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.PhotosGetAllExtendedResponse["response"]> : Promise<Responses.PhotosGetAllResponse["response"]>;
        /**
         * Returns a list of comments on a specific photo album or all albums of the user sorted in reverse chronological order.
         * @async
         * @access user
         * @throws {Errors.ApiErrorParamAlbumId} - Invalid album id
         * @see https://vk.com/dev/photos.getAllComments
         */
        getAllComments<Params extends {
            /**
             * ID of the user or community that owns the album(s).
             */
            owner_id?: number;
            /**
             * Album ID. If the parameter is not set, comments on all of the user's albums will be returned.
             */
            album_id?: number;
            /**
             * '1' — to return an additional 'likes' field, '0' — (default)
             */
            need_likes?: boolean;
            /**
             * Offset needed to return a specific subset of comments. By default, '0'.
             */
            offset?: number;
            /**
             * Number of comments to return. By default, '20'. Maximum value, '100'.
             */
            count?: number;
        }>(params: Params): Promise<Responses.PhotosGetAllCommentsResponse["response"]>;
        /**
         * Returns information about photos by their IDs.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/photos.getById
         */
        getById<Params extends {
            /**
             * IDs separated with a comma, that are IDs of users who posted photos and IDs of photos themselves with an underscore character between such IDs. To get information about a photo in the group album, you shall specify group ID instead of user ID. Example: "1_129207899,6492_135055734, , -20629724_271945303"
             */
            photos: string[];
            /**
             * '1' — to return additional fields, '0' — (default)
             */
            extended?: boolean;
            /**
             * '1' — to return photo sizes in a
             */
            photo_sizes?: boolean;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.PhotosGetByIdExtendedResponse["response"]> : Promise<Responses.PhotosGetByIdResponse["response"]>;
        /**
         * Returns an upload link for chat cover pictures.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.getChatUploadServer
         */
        getChatUploadServer<Params extends {
            /**
             * ID of the chat for which you want to upload a cover photo.
             */
            chat_id: number;
            crop_x?: number;
            crop_y?: number;
            /**
             * Width (in pixels) of the photo after cropping.
             * @minimum 200
             */
            crop_width?: number;
        }>(params: Params): Promise<Responses.BaseGetUploadServerResponse["response"]>;
        /**
         * Returns a list of comments on a photo.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.getComments
         */
        getComments<Params extends {
            /**
             * ID of the user or community that owns the photo.
             */
            owner_id?: number;
            /**
             * Photo ID.
             */
            photo_id: number;
            /**
             * '1' — to return an additional 'likes' field, '0' — (default)
             */
            need_likes?: boolean;
            start_comment_id?: number;
            /**
             * Offset needed to return a specific subset of comments. By default, '0'.
             */
            offset?: number;
            /**
             * Number of comments to return.
             * @maximum 100
             * @default 20
             */
            count?: number;
            /**
             * Sort order: 'asc' — old first, 'desc' — new first
             * @enum {string} asc, desc
             */
            sort?: "asc" | "desc";
            access_key?: string;
            extended?: boolean;
            fields?: Objects.UsersFields[];
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.PhotosGetCommentsExtendedResponse["response"]> : Promise<Responses.PhotosGetCommentsResponse["response"]>;
        /**
         * Returns the server address for market album photo upload.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.getMarketAlbumUploadServer
         */
        getMarketAlbumUploadServer<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
        }>(params: Params): Promise<Responses.BaseGetUploadServerResponse["response"]>;
        /**
         * Returns the server address for market photo upload.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.getMarketUploadServer
         */
        getMarketUploadServer<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
            /**
             * '1' if you want to upload the main item photo.
             */
            main_photo?: boolean;
            /**
             * X coordinate of the crop left upper corner.
             */
            crop_x?: number;
            /**
             * Y coordinate of the crop left upper corner.
             */
            crop_y?: number;
            /**
             * Width of the cropped photo in px.
             * @minimum 400
             */
            crop_width?: number;
        }>(params: Params): Promise<Responses.PhotosGetMarketUploadServerResponse["response"]>;
        /**
         * Returns the server address for photo upload in a private message for a user.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesDenySend} - Can't send messages for users without permission
         * @see https://vk.com/dev/photos.getMessagesUploadServer
         */
        getMessagesUploadServer<Params extends {
            /**
             * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'Chat ID', e.g. '2000000001'. For community: '- Community ID', e.g. '-12345'. "
             */
            peer_id?: number;
        }>(params: Params): Promise<Responses.PhotosGetMessagesUploadServerResponse["response"]>;
        /**
         * Returns a list of photos with tags that have not been viewed.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.getNewTags
         */
        getNewTags<Params extends {
            /**
             * Offset needed to return a specific subset of photos.
             */
            offset?: number;
            /**
             * Number of photos to return.
             * @maximum 100
             * @default 20
             */
            count?: number;
        }>(params: Params): Promise<Responses.PhotosGetNewTagsResponse["response"]>;
        /**
         * Returns the server address for owner cover upload.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/photos.getOwnerCoverPhotoUploadServer
         */
        getOwnerCoverPhotoUploadServer<Params extends {
            /**
             * ID of community that owns the album (if the photo will be uploaded to a community album).
             */
            group_id: number;
            /**
             * X coordinate of the left-upper corner
             */
            crop_x?: number;
            /**
             * Y coordinate of the left-upper corner
             */
            crop_y?: number;
            /**
             * X coordinate of the right-bottom corner
             * @default 795
             */
            crop_x2?: number;
            /**
             * Y coordinate of the right-bottom corner
             * @default 200
             */
            crop_y2?: number;
        }>(params: Params): Promise<Responses.BaseGetUploadServerResponse["response"]>;
        /**
         * Returns an upload server address for a profile or community photo.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.getOwnerPhotoUploadServer
         */
        getOwnerPhotoUploadServer<Params extends {
            /**
             * identifier of a community or current user. "Note that community id must be negative. 'owner_id=1' – user, 'owner_id=-1' – community, "
             */
            owner_id?: number;
        }>(params: Params): Promise<Responses.BaseGetUploadServerResponse["response"]>;
        /**
         * Returns a list of tags on a photo.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.getTags
         */
        getTags<Params extends {
            /**
             * ID of the user or community that owns the photo.
             */
            owner_id?: number;
            /**
             * Photo ID.
             */
            photo_id: number;
            access_key?: string;
        }>(params: Params): Promise<Responses.PhotosGetTagsResponse["response"]>;
        /**
         * Returns the server address for photo upload.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.getUploadServer
         */
        getUploadServer<Params extends {
            /**
             * ID of community that owns the album (if the photo will be uploaded to a community album).
             */
            group_id?: number;
            album_id?: number;
        }>(params: Params): Promise<Responses.PhotosGetUploadServerResponse["response"]>;
        /**
         * Returns a list of photos in which a user is tagged.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.getUserPhotos
         */
        getUserPhotos<Params extends {
            /**
             * User ID.
             */
            user_id?: number;
            /**
             * Offset needed to return a specific subset of photos. By default, '0'.
             */
            offset?: number;
            /**
             * Number of photos to return. Maximum value is 1000.
             * @maximum 1000
             * @default 20
             */
            count?: number;
            /**
             * '1' — to return an additional 'likes' field, '0' — (default)
             */
            extended?: boolean;
            /**
             * Sort order: '1' — by date the tag was added in ascending order, '0' — by date the tag was added in descending order
             */
            sort?: string;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.PhotosGetUserPhotosExtendedResponse["response"]> : Promise<Responses.PhotosGetUserPhotosResponse["response"]>;
        /**
         * Returns the server address for photo upload onto a user's wall.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.getWallUploadServer
         */
        getWallUploadServer<Params extends {
            /**
             * ID of community to whose wall the photo will be uploaded.
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.PhotosGetWallUploadServerResponse["response"]>;
        /**
         * Makes a photo into an album cover.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.makeCover
         */
        makeCover<Params extends {
            /**
             * ID of the user or community that owns the photo.
             */
            owner_id?: number;
            /**
             * Photo ID.
             */
            photo_id: number;
            /**
             * Album ID.
             */
            album_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Moves a photo from one album to another.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.move
         */
        move<Params extends {
            /**
             * ID of the user or community that owns the photo.
             */
            owner_id?: number;
            /**
             * ID of the album to which the photo will be moved.
             */
            target_album_id: number;
            /**
             * Photo ID.
             */
            photo_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Adds a tag on the photo.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.putTag
         */
        putTag<Params extends {
            /**
             * ID of the user or community that owns the photo.
             */
            owner_id?: number;
            /**
             * Photo ID.
             */
            photo_id: number;
            /**
             * ID of the user to be tagged.
             */
            user_id: number;
            /**
             * Upper left-corner coordinate of the tagged area (as a percentage of the photo's width).
             */
            x?: number;
            /**
             * Upper left-corner coordinate of the tagged area (as a percentage of the photo's height).
             */
            y?: number;
            /**
             * Lower right-corner coordinate of the tagged area (as a percentage of the photo's width).
             */
            x2?: number;
            /**
             * Lower right-corner coordinate of the tagged area (as a percentage of the photo's height).
             */
            y2?: number;
        }>(params: Params): Promise<Responses.PhotosPutTagResponse["response"]>;
        /**
         * Removes a tag from a photo.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.removeTag
         */
        removeTag<Params extends {
            /**
             * ID of the user or community that owns the photo.
             */
            owner_id?: number;
            /**
             * Photo ID.
             */
            photo_id: number;
            /**
             * Tag ID.
             */
            tag_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Reorders the album in the list of user albums.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.reorderAlbums
         */
        reorderAlbums<Params extends {
            /**
             * ID of the user or community that owns the album.
             */
            owner_id?: number;
            /**
             * Album ID.
             */
            album_id: number;
            /**
             * ID of the album before which the album in question shall be placed.
             */
            before?: number;
            /**
             * ID of the album after which the album in question shall be placed.
             */
            after?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Reorders the photo in the list of photos of the user album.
         * @async
         * @access user
         * @throws {Errors.ApiErrorParamPhotos} - Invalid photos
         * @see https://vk.com/dev/photos.reorderPhotos
         */
        reorderPhotos<Params extends {
            /**
             * ID of the user or community that owns the photo.
             */
            owner_id?: number;
            /**
             * Photo ID.
             */
            photo_id: number;
            /**
             * ID of the photo before which the photo in question shall be placed.
             */
            before?: number;
            /**
             * ID of the photo after which the photo in question shall be placed.
             */
            after?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Reports (submits a complaint about) a photo.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.report
         */
        report<Params extends {
            /**
             * ID of the user or community that owns the photo.
             */
            owner_id: number;
            /**
             * Photo ID.
             */
            photo_id: number;
            /**
             * Reason for the complaint: '0' – spam, '1' – child pornography, '2' – extremism, '3' – violence, '4' – drug propaganda, '5' – adult material, '6' – insult, abuse
             */
            reason?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Reports (submits a complaint about) a comment on a photo.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.reportComment
         */
        reportComment<Params extends {
            /**
             * ID of the user or community that owns the photo.
             */
            owner_id: number;
            /**
             * ID of the comment being reported.
             */
            comment_id: number;
            /**
             * Reason for the complaint: '0' – spam, '1' – child pornography, '2' – extremism, '3' – violence, '4' – drug propaganda, '5' – adult material, '6' – insult, abuse
             */
            reason?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Restores a deleted photo.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.restore
         */
        restore<Params extends {
            /**
             * ID of the user or community that owns the photo.
             */
            owner_id?: number;
            /**
             * Photo ID.
             */
            photo_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Restores a deleted comment on a photo.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/photos.restoreComment
         */
        restoreComment<Params extends {
            /**
             * ID of the user or community that owns the photo.
             */
            owner_id?: number;
            /**
             * ID of the deleted comment.
             */
            comment_id: number;
        }>(params: Params): Promise<Responses.PhotosRestoreCommentResponse["response"]>;
        /**
         * Saves photos after successful uploading.
         * @async
         * @access user
         * @throws {Errors.ApiErrorParamAlbumId} - Invalid album id
         * @throws {Errors.ApiErrorParamServer} - Invalid server
         * @throws {Errors.ApiErrorParamHash} - Invalid hash
         * @see https://vk.com/dev/photos.save
         */
        save<Params extends {
            /**
             * ID of the album to save photos to.
             */
            album_id?: number;
            /**
             * ID of the community to save photos to.
             */
            group_id?: number;
            /**
             * Parameter returned when photos are {@link https://vk.com/dev/upload_files|uploaded to server}.
             */
            server?: number;
            /**
             * Parameter returned when photos are {@link https://vk.com/dev/upload_files|uploaded to server}.
             */
            photos_list?: string;
            /**
             * Parameter returned when photos are {@link https://vk.com/dev/upload_files|uploaded to server}.
             */
            hash?: string;
            /**
             * Geographical latitude, in degrees (from '-90' to '90').
             */
            latitude?: number;
            /**
             * Geographical longitude, in degrees (from '-180' to '180').
             */
            longitude?: number;
            /**
             * Text describing the photo. 2048 digits max.
             */
            caption?: string;
        }>(params: Params): Promise<Responses.PhotosSaveResponse["response"]>;
        /**
         * Saves market album photos after successful uploading.
         * @async
         * @access user
         * @throws {Errors.ApiErrorParamHash} - Invalid hash
         * @throws {Errors.ApiErrorParamPhoto} - Invalid photo
         * @see https://vk.com/dev/photos.saveMarketAlbumPhoto
         */
        saveMarketAlbumPhoto<Params extends {
            /**
             * Community ID.
             */
            group_id: number;
            /**
             * Parameter returned when photos are {@link https://vk.com/dev/upload_files|uploaded to server}.
             */
            photo: string;
            /**
             * Parameter returned when photos are {@link https://vk.com/dev/upload_files|uploaded to server}.
             */
            server: number;
            /**
             * Parameter returned when photos are {@link https://vk.com/dev/upload_files|uploaded to server}.
             */
            hash: string;
        }>(params: Params): Promise<Responses.PhotosSaveMarketAlbumPhotoResponse["response"]>;
        /**
         * Saves market photos after successful uploading.
         * @async
         * @access user
         * @throws {Errors.ApiErrorParamHash} - Invalid hash
         * @throws {Errors.ApiErrorParamPhoto} - Invalid photo
         * @see https://vk.com/dev/photos.saveMarketPhoto
         */
        saveMarketPhoto<Params extends {
            /**
             * Community ID.
             */
            group_id?: number;
            /**
             * Parameter returned when photos are {@link https://vk.com/dev/upload_files|uploaded to server}.
             */
            photo: string;
            /**
             * Parameter returned when photos are {@link https://vk.com/dev/upload_files|uploaded to server}.
             */
            server: number;
            /**
             * Parameter returned when photos are {@link https://vk.com/dev/upload_files|uploaded to server}.
             */
            hash: string;
            /**
             * Parameter returned when photos are {@link https://vk.com/dev/upload_files|uploaded to server}.
             */
            crop_data?: string;
            /**
             * Parameter returned when photos are {@link https://vk.com/dev/upload_files|uploaded to server}.
             */
            crop_hash?: string;
        }>(params: Params): Promise<Responses.PhotosSaveMarketPhotoResponse["response"]>;
        /**
         * Saves a photo after being successfully uploaded. URL obtained with {@link https://vk.com/dev/photos.getMessagesUploadServer|photos.getMessagesUploadServer} method.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorParamAlbumId} - Invalid album id
         * @throws {Errors.ApiErrorParamServer} - Invalid server
         * @throws {Errors.ApiErrorParamHash} - Invalid hash
         * @see https://vk.com/dev/photos.saveMessagesPhoto
         */
        saveMessagesPhoto<Params extends {
            /**
             * Parameter returned when the photo is {@link https://vk.com/dev/upload_files|uploaded to the server}.
             */
            photo: string;
            server?: number;
            hash?: string;
        }>(params: Params): Promise<Responses.PhotosSaveMessagesPhotoResponse["response"]>;
        /**
         * Saves cover photo after successful uploading.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorParamPhoto} - Invalid photo
         * @see https://vk.com/dev/photos.saveOwnerCoverPhoto
         */
        saveOwnerCoverPhoto<Params extends {
            /**
             * Parameter returned when photos are {@link https://vk.com/dev/upload_files|uploaded to server}.
             */
            hash: string;
            /**
             * Parameter returned when photos are {@link https://vk.com/dev/upload_files|uploaded to server}.
             */
            photo: string;
        }>(params: Params): Promise<Responses.PhotosSaveOwnerCoverPhotoResponse["response"]>;
        /**
         * Saves a profile or community photo. Upload URL can be got with the {@link https://vk.com/dev/photos.getOwnerPhotoUploadServer|photos.getOwnerPhotoUploadServer} method.
         * @async
         * @access user
         * @throws {Errors.ApiErrorParamPhoto} - Invalid photo
         * @see https://vk.com/dev/photos.saveOwnerPhoto
         */
        saveOwnerPhoto<Params extends {
            /**
             * parameter returned after {@link https://vk.com/dev/upload_files|photo upload}.
             */
            server?: string;
            /**
             * parameter returned after {@link https://vk.com/dev/upload_files|photo upload}.
             */
            hash?: string;
            /**
             * parameter returned after {@link https://vk.com/dev/upload_files|photo upload}.
             */
            photo?: string;
        }>(params: Params): Promise<Responses.PhotosSaveOwnerPhotoResponse["response"]>;
        /**
         * Saves a photo to a user's or community's wall after being uploaded.
         * @async
         * @access user
         * @throws {Errors.ApiErrorParamAlbumId} - Invalid album id
         * @throws {Errors.ApiErrorParamServer} - Invalid server
         * @throws {Errors.ApiErrorParamHash} - Invalid hash
         * @see https://vk.com/dev/photos.saveWallPhoto
         */
        saveWallPhoto<Params extends {
            /**
             * ID of the user on whose wall the photo will be saved.
             */
            user_id?: number;
            /**
             * ID of community on whose wall the photo will be saved.
             */
            group_id?: number;
            /**
             * Parameter returned when the the photo is {@link https://vk.com/dev/upload_files|uploaded to the server}.
             */
            photo: string;
            server?: number;
            hash?: string;
            /**
             * Geographical latitude, in degrees (from '-90' to '90').
             */
            latitude?: number;
            /**
             * Geographical longitude, in degrees (from '-180' to '180').
             */
            longitude?: number;
            /**
             * Text describing the photo. 2048 digits max.
             */
            caption?: string;
        }>(params: Params): Promise<Responses.PhotosSaveWallPhotoResponse["response"]>;
        /**
         * Returns a list of photos.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/photos.search
         */
        search<Params extends {
            /**
             * Search query string.
             */
            q?: string;
            /**
             * Geographical latitude, in degrees (from '-90' to '90').
             */
            lat?: number;
            /**
             * Geographical longitude, in degrees (from '-180' to '180').
             */
            long?: number;
            start_time?: number;
            end_time?: number;
            /**
             * Sort order:
             */
            sort?: number;
            /**
             * Offset needed to return a specific subset of photos.
             */
            offset?: number;
            /**
             * Number of photos to return.
             * @maximum 1000
             * @default 100
             */
            count?: number;
            /**
             * Radius of search in meters (works very approximately). Available values: '10', '100', '800', '6000', '50000'.
             * @default 5000
             */
            radius?: number;
        }>(params: Params): Promise<Responses.PhotosSearchResponse["response"]>;
    }
    interface Polls {
        /**
         * Adds the current user's vote to the selected answer in the poll.
         * @async
         * @access user
         * @throws {Errors.ApiErrorPollsAccess} - Access to poll denied
         * @throws {Errors.ApiErrorPollsAnswerId} - Invalid answer id
         * @throws {Errors.ApiErrorPollsPollId} - Invalid poll id
         * @see https://vk.com/dev/polls.addVote
         */
        addVote<Params extends {
            /**
             * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * Poll ID.
             */
            poll_id: number;
            answer_ids: number[];
            is_board?: boolean;
        }>(params: Params): Promise<Responses.PollsAddVoteResponse["response"]>;
        /**
         * Creates polls that can be attached to the users' or communities' posts.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/polls.create
         */
        create<Params extends {
            /**
             * question text
             */
            question?: string;
            /**
             * '1' – anonymous poll, participants list is hidden,, '0' – public poll, participants list is available,, Default value is '0'.
             */
            is_anonymous?: boolean;
            is_multiple?: boolean;
            /**
             *
             * @minimum 1550700000
             */
            end_date?: number;
            /**
             * If a poll will be added to a communty it is required to send a negative group identifier. Current user by default.
             */
            owner_id?: number;
            /**
             * available answers list, for example: " ["yes","no","maybe"]", There can be from 1 to 10 answers.
             */
            add_answers?: string;
            photo_id?: number;
            /**
             *
             * @enum {string} 1, 2, 3, 4, 6, 8, 9
             */
            background_id?: 1 | 2 | 3 | 4 | 6 | 8 | 9;
        }>(params: Params): Promise<Responses.PollsCreateResponse["response"]>;
        /**
         * Deletes the current user's vote from the selected answer in the poll.
         * @async
         * @access user
         * @throws {Errors.ApiErrorPollsAccess} - Access to poll denied
         * @throws {Errors.ApiErrorPollsAnswerId} - Invalid answer id
         * @throws {Errors.ApiErrorPollsPollId} - Invalid poll id
         * @see https://vk.com/dev/polls.deleteVote
         */
        deleteVote<Params extends {
            /**
             * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * Poll ID.
             */
            poll_id: number;
            /**
             * Answer ID.
             */
            answer_id: number;
            is_board?: boolean;
        }>(params: Params): Promise<Responses.PollsDeleteVoteResponse["response"]>;
        /**
         * Edits created polls
         * @async
         * @access user
         *
         * @see https://vk.com/dev/polls.edit
         */
        edit<Params extends {
            /**
             * poll owner id
             */
            owner_id?: number;
            /**
             * edited poll's id
             */
            poll_id: number;
            /**
             * new question text
             */
            question?: string;
            /**
             * answers list, for example: , "["yes","no","maybe"]"
             */
            add_answers?: string;
            /**
             * object containing answers that need to be edited,, key – answer id, value – new answer text. Example: {"382967099":"option1", "382967103":"option2"}"
             */
            edit_answers?: string;
            /**
             * list of answer ids to be deleted. For example: "[382967099, 382967103]"
             */
            delete_answers?: string;
            end_date?: number;
            photo_id?: number;
            /**
             *
             * @enum {string} 0, 1, 2, 3, 4, 6, 8, 9
             */
            background_id?: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 9;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns detailed information about a poll by its ID.
         * @async
         * @access user
         * @throws {Errors.ApiErrorPollsAccess} - Access to poll denied
         * @see https://vk.com/dev/polls.getById
         */
        getById<Params extends {
            /**
             * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * '1' – poll is in a board, '0' – poll is on a wall. '0' by default.
             */
            is_board?: boolean;
            /**
             * Poll ID.
             */
            poll_id: number;
            extended?: boolean;
            /**
             *
             * @maximum 100
             * @default 3
             */
            friends_count?: number;
            fields?: string[];
            /**
             *
             * @enum {string} abl, acc, dat, gen, ins, nom
             * @default nom
             */
            name_case?: "abl" | "acc" | "dat" | "gen" | "ins" | "nom";
        }>(params: Params): Promise<Responses.PollsGetByIdResponse["response"]>;
        /**
         * Returns a list of IDs of users who selected specific answers in the poll.
         * @async
         * @access user
         * @throws {Errors.ApiErrorPollsAccess} - Access to poll denied
         * @throws {Errors.ApiErrorPollsAnswerId} - Invalid answer id
         * @throws {Errors.ApiErrorPollsPollId} - Invalid poll id
         * @throws {Errors.ApiErrorPollsAccessWithoutVote} - Access denied, please vote first
         * @see https://vk.com/dev/polls.getVoters
         */
        getVoters<Params extends {
            /**
             * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * Poll ID.
             */
            poll_id: number;
            /**
             * Answer IDs.
             */
            answer_ids: number[];
            is_board?: boolean;
            /**
             * '1' — to return only current user's friends, '0' — to return all users (default),
             */
            friends_only?: boolean;
            /**
             * Offset needed to return a specific subset of voters. '0' — (default)
             */
            offset?: number;
            /**
             * Number of user IDs to return (if the 'friends_only' parameter is not set, maximum '1000', otherwise '10'). '100' — (default)
             */
            count?: number;
            /**
             * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate (birthdate)', 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online', 'counters'.
             */
            fields?: Objects.UsersFields[];
            /**
             * Case for declension of user name and surname: , 'nom' — nominative (default) , 'gen' — genitive , 'dat' — dative , 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
             * @enum {string} nom, gen, dat, acc, ins, abl
             */
            name_case?: "nom" | "gen" | "dat" | "acc" | "ins" | "abl";
        }>(params: Params): Promise<Responses.PollsGetVotersResponse["response"]>;
    }
    interface PrettyCards {
        /**
         * Method not described
         * @async
         * @access user
         * @throws {Errors.ApiErrorPrettyCardsTooManyCards} - Too many cards
         * @see https://vk.com/dev/prettyCards.create
         */
        create<Params extends {
            owner_id: number;
            photo: string;
            title: string;
            link: string;
            price?: string;
            price_old?: string;
            button?: string;
        }>(params: Params): Promise<Responses.PrettyCardsCreateResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @throws {Errors.ApiErrorPrettyCardsCardNotFound} - Card not found
         * @throws {Errors.ApiErrorPrettyCardsCardIsConnectedToPost} - Card is connected to post
         * @see https://vk.com/dev/prettyCards.delete
         */
        delete<Params extends {
            owner_id: number;
            card_id: number;
        }>(params: Params): Promise<Responses.PrettyCardsDeleteResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @throws {Errors.ApiErrorPrettyCardsCardNotFound} - Card not found
         * @see https://vk.com/dev/prettyCards.edit
         */
        edit<Params extends {
            owner_id: number;
            card_id: number;
            photo?: string;
            title?: string;
            link?: string;
            price?: string;
            price_old?: string;
            button?: string;
        }>(params: Params): Promise<Responses.PrettyCardsEditResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/prettyCards.get
         */
        get<Params extends {
            owner_id: number;
            offset?: number;
            /**
             *
             * @maximum 100
             * @default 10
             */
            count?: number;
        }>(params: Params): Promise<Responses.PrettyCardsGetResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/prettyCards.getById
         */
        getById<Params extends {
            owner_id: number;
            card_ids: number[];
        }>(params: Params): Promise<Responses.PrettyCardsGetByIdResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/prettyCards.getUploadURL
         */
        getUploadURL<Params extends never>(params?: Params): Promise<Responses.PrettyCardsGetUploadURLResponse["response"]>;
    }
    interface Search {
        /**
         * Allows the programmer to do a quick search for any substring.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/search.getHints
         */
        getHints<Params extends {
            /**
             * Search query string.
             */
            q?: string;
            /**
             * Offset for querying specific result subset
             * @maximum 200
             */
            offset?: number;
            /**
             * Maximum number of results to return.
             * @maximum 200
             * @default 9
             */
            limit?: number;
            filters?: string[];
            fields?: string[];
            /**
             *
             * @default 1
             */
            search_global?: boolean;
        }>(params: Params): Promise<Responses.SearchGetHintsResponse["response"]>;
    }
    interface Secure {
        /**
         * Adds user activity information to an application
         * @async
         * @access service
         * @throws {Errors.ApiErrorAppsAlreadyUnlocked} - This achievement is already unlocked
         * @see https://vk.com/dev/secure.addAppEvent
         */
        addAppEvent<Params extends {
            /**
             * ID of a user to save the data
             */
            user_id: number;
            /**
             * there are 2 default activities: , * 1 – level. Works similar to ,, * 2 – points, saves points amount, Any other value is for saving completed missions
             */
            activity_id: number;
            /**
             * depends on activity_id: * 1 – number, current level number,, * 2 – number, current user's points amount, , Any other value is ignored
             */
            value?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Checks the user authentication in 'IFrame' and 'Flash' apps using the 'access_token' parameter.
         * @async
         * @access service
         *
         * @see https://vk.com/dev/secure.checkToken
         */
        checkToken<Params extends {
            /**
             * client 'access_token'
             */
            token?: string;
            /**
             * user 'ip address'. Note that user may access using the 'ipv6' address, in this case it is required to transmit the 'ipv6' address. If not transmitted, the address will not be checked.
             */
            ip?: string;
        }>(params: Params): Promise<Responses.SecureCheckTokenResponse["response"]>;
        /**
         * Returns payment balance of the application in hundredth of a vote.
         * @async
         * @access service
         *
         * @see https://vk.com/dev/secure.getAppBalance
         */
        getAppBalance<Params extends never>(params?: Params): Promise<Responses.SecureGetAppBalanceResponse["response"]>;
        /**
         * Shows a list of SMS notifications sent by the application using {@link https://vk.com/dev/secure.sendSMSNotification|secure.sendSMSNotification} method.
         * @async
         * @access service
         *
         * @see https://vk.com/dev/secure.getSMSHistory
         */
        getSMSHistory<Params extends {
            user_id?: number;
            /**
             * filter by start date. It is set as UNIX-time.
             */
            date_from?: number;
            /**
             * filter by end date. It is set as UNIX-time.
             */
            date_to?: number;
            /**
             * number of returned posts. By default — 1000.
             * @maximum 1000
             * @default 1000
             */
            limit?: number;
        }>(params: Params): Promise<Responses.SecureGetSMSHistoryResponse["response"]>;
        /**
         * Shows history of votes transaction between users and the application.
         * @async
         * @access service
         *
         * @see https://vk.com/dev/secure.getTransactionsHistory
         */
        getTransactionsHistory<Params extends {
            type?: number;
            uid_from?: number;
            uid_to?: number;
            date_from?: number;
            date_to?: number;
            /**
             *
             * @maximum 1000
             * @default 1000
             */
            limit?: number;
        }>(params: Params): Promise<Responses.SecureGetTransactionsHistoryResponse["response"]>;
        /**
         * Returns one of the previously set game levels of one or more users in the application.
         * @async
         * @access service
         *
         * @see https://vk.com/dev/secure.getUserLevel
         */
        getUserLevel<Params extends {
            user_ids: number[];
        }>(params: Params): Promise<Responses.SecureGetUserLevelResponse["response"]>;
        /**
         * Opens the game achievement and gives the user a sticker
         * @async
         * @access service
         *
         * @see https://vk.com/dev/secure.giveEventSticker
         */
        giveEventSticker<Params extends {
            user_ids: number[];
            achievement_id: number;
        }>(params: Params): Promise<Responses.SecureGiveEventStickerResponse["response"]>;
        /**
         * Sends notification to the user.
         * @async
         * @access service
         *
         * @see https://vk.com/dev/secure.sendNotification
         */
        sendNotification<Params extends {
            user_ids?: number[];
            user_id?: number;
            /**
             * notification text which should be sent in 'UTF-8' encoding ('254' characters maximum).
             */
            message: string;
        }>(params: Params): Promise<Responses.SecureSendNotificationResponse["response"]>;
        /**
         * Sends 'SMS' notification to a user's mobile device.
         * @async
         * @access service
         * @throws {Errors.ApiErrorInsufficientFunds} - Application has insufficient funds
         * @throws {Errors.ApiErrorMobileNotActivated} - The mobile number of the user is unknown
         * @see https://vk.com/dev/secure.sendSMSNotification
         */
        sendSMSNotification<Params extends {
            /**
             * ID of the user to whom SMS notification is sent. The user shall allow the application to send him/her notifications (, +1).
             */
            user_id: number;
            /**
             * 'SMS' text to be sent in 'UTF-8' encoding. Only Latin letters and numbers are allowed. Maximum size is '160' characters.
             */
            message: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Sets a counter which is shown to the user in bold in the left menu.
         * @async
         * @access service
         * @throws {Errors.ApiErrorAccessMenu} - Access to the menu of the user denied
         * @see https://vk.com/dev/secure.setCounter
         */
        setCounter<Params extends {
            counters?: string[];
            user_id?: number;
            /**
             * counter value.
             */
            counter?: number;
            increment?: boolean;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
    }
    interface Stats {
        /**
         * Returns statistics of a community or an application.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/stats.get
         */
        get<Params extends {
            /**
             * Community ID.
             */
            group_id?: number;
            /**
             * Application ID.
             */
            app_id?: number;
            timestamp_from?: number;
            timestamp_to?: number;
            /**
             *
             * @default day
             */
            interval?: string;
            intervals_count?: number;
            filters?: string[];
            stats_groups?: string[];
            /**
             *
             * @default true
             */
            extended?: boolean;
        }>(params: Params): Promise<Responses.StatsGetResponse["response"]>;
        /**
         * Returns stats for a wall post.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWallAccessPost} - Access to wall's post denied
         * @see https://vk.com/dev/stats.getPostReach
         */
        getPostReach<Params extends {
            /**
             * post owner community id. Specify with "-" sign.
             */
            owner_id: string;
            /**
             * wall posts id
             */
            post_ids: number[];
        }>(params: Params): Promise<Responses.StatsGetPostReachResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/stats.trackVisitor
         */
        trackVisitor<Params extends {
            id: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
    }
    interface Status {
        /**
         * Returns data required to show the status of a user or community.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/status.get
         */
        get<Params extends {
            /**
             * User ID or community ID. Use a negative value to designate a community ID.
             */
            user_id?: number;
            group_id?: number;
        }>(params: Params): Promise<Responses.StatusGetResponse["response"]>;
        /**
         * Sets a new status for the current user.
         * @async
         * @access user
         * @throws {Errors.ApiErrorStatusNoAudio} - User disabled track name broadcast
         * @see https://vk.com/dev/status.set
         */
        set<Params extends {
            /**
             * Text of the new status.
             */
            text?: string;
            /**
             * Identifier of a community to set a status in. If left blank the status is set to current user.
             */
            group_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
    }
    interface Storage {
        /**
         * Returns a value of variable with the name set by key parameter.
         * @async
         * @access user
         * @access group
         * @access service
         *
         * @see https://vk.com/dev/storage.get
         */
        get<Params extends {
            key?: string;
            keys?: string[];
            user_id?: number;
        }>(params: Params): Promise<Responses.StorageGetV5110Response["response"]>;
        /**
         * Returns the names of all variables.
         * @async
         * @access user
         * @access group
         * @access service
         *
         * @see https://vk.com/dev/storage.getKeys
         */
        getKeys<Params extends {
            /**
             * user id, whose variables names are returned if they were requested with a server method.
             */
            user_id?: number;
            offset?: number;
            /**
             * amount of variable names the info needs to be collected from.
             * @maximum 1000
             * @default 100
             */
            count?: number;
        }>(params: Params): Promise<Responses.StorageGetKeysResponse["response"]>;
        /**
         * Saves a value of variable with the name set by 'key' parameter.
         * @async
         * @access user
         * @access group
         * @access service
         * @throws {Errors.ApiErrorLimits} - Out of limits
         * @see https://vk.com/dev/storage.set
         */
        set<Params extends {
            key: string;
            value?: string;
            user_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
    }
    interface Stories {
        /**
         * Allows to hide stories from chosen sources from current user's feed.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/stories.banOwner
         */
        banOwner<Params extends {
            /**
             * List of sources IDs
             */
            owners_ids: number[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Allows to delete story.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/stories.delete
         */
        delete<Params extends {
            /**
             * Story owner's ID. Current user id is used by default.
             */
            owner_id: number;
            /**
             * Story ID.
             */
            story_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns stories available for current user.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/stories.get
         */
        get<Params extends {
            /**
             * Owner ID.
             */
            owner_id?: number;
            /**
             * '1' — to return additional fields for users and communities. Default value is 0.
             */
            extended?: boolean;
            fields?: Objects.BaseUserGroupFields[];
        }>(params: Params): Promise<Responses.StoriesGetV5113Response["response"]>;
        /**
         * Returns list of sources hidden from current user's feed.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/stories.getBanned
         */
        getBanned<Params extends {
            /**
             * '1' — to return additional fields for users and communities. Default value is 0.
             */
            extended?: boolean;
            /**
             * Additional fields to return
             */
            fields?: Objects.BaseUserGroupFields[];
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.StoriesGetBannedExtendedResponse["response"]> : Promise<Responses.StoriesGetBannedResponse["response"]>;
        /**
         * Returns story by its ID.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorStoryExpired} - Story has already expired
         * @see https://vk.com/dev/stories.getById
         */
        getById<Params extends {
            /**
             * Stories IDs separated by commas. Use format {owner_id}+'_'+{story_id}, for example, 12345_54331.
             */
            stories: string[];
            /**
             * '1' — to return additional fields for users and communities. Default value is 0.
             */
            extended?: boolean;
            /**
             * Additional fields to return
             */
            fields?: Objects.BaseUserGroupFields[];
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.StoriesGetByIdExtendedResponse["response"]> : Promise<Responses.StoriesGetByIdResponse["response"]>;
        /**
         * Returns URL for uploading a story with photo.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesUserBlocked} - Can't send messages for users from blacklist
         * @throws {Errors.ApiErrorStoryIncorrectReplyPrivacy} - Incorrect reply privacy
         * @throws {Errors.ApiErrorBlocked} - Content blocked
         * @see https://vk.com/dev/stories.getPhotoUploadServer
         */
        getPhotoUploadServer<Params extends {
            /**
             * 1 — to add the story to friend's feed.
             */
            add_to_news?: boolean;
            /**
             * List of users IDs who can see the story.
             */
            user_ids?: number[];
            /**
             * ID of the story to reply with the current.
             */
            reply_to_story?: string;
            /**
             * Link text (for community's stories only).
             */
            link_text?: Objects.StoriesUploadLinkText;
            /**
             * Link URL. Internal links on https://vk.com only.
             */
            link_url?: string;
            /**
             * ID of the community to upload the story (should be verified or with the "fire" icon).
             */
            group_id?: number;
            clickable_stickers?: string;
        }>(params: Params): Promise<Responses.StoriesGetPhotoUploadServerResponse["response"]>;
        /**
         * Returns replies to the story.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/stories.getReplies
         */
        getReplies<Params extends {
            /**
             * Story owner ID.
             */
            owner_id: number;
            /**
             * Story ID.
             */
            story_id: number;
            /**
             * Access key for the private object.
             */
            access_key?: string;
            /**
             * '1' — to return additional fields for users and communities. Default value is 0.
             */
            extended?: boolean;
            /**
             * Additional fields to return
             */
            fields?: Objects.BaseUserGroupFields[];
        }>(params: Params): Promise<Responses.StoriesGetV5113Response["response"]>;
        /**
         * Returns stories available for current user.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/stories.getStats
         */
        getStats<Params extends {
            /**
             * Story owner ID.
             */
            owner_id: number;
            /**
             * Story ID.
             */
            story_id: number;
        }>(params: Params): Promise<Responses.StoriesGetStatsResponse["response"]>;
        /**
         * Allows to receive URL for uploading story with video.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorMessagesUserBlocked} - Can't send messages for users from blacklist
         * @throws {Errors.ApiErrorStoryIncorrectReplyPrivacy} - Incorrect reply privacy
         * @throws {Errors.ApiErrorBlocked} - Content blocked
         * @see https://vk.com/dev/stories.getVideoUploadServer
         */
        getVideoUploadServer<Params extends {
            /**
             * 1 — to add the story to friend's feed.
             */
            add_to_news?: boolean;
            /**
             * List of users IDs who can see the story.
             */
            user_ids?: number[];
            /**
             * ID of the story to reply with the current.
             */
            reply_to_story?: string;
            /**
             * Link text (for community's stories only).
             */
            link_text?: Objects.StoriesUploadLinkText;
            /**
             * Link URL. Internal links on https://vk.com only.
             */
            link_url?: string;
            /**
             * ID of the community to upload the story (should be verified or with the "fire" icon).
             */
            group_id?: number;
            clickable_stickers?: string;
        }>(params: Params): Promise<Responses.StoriesGetVideoUploadServerResponse["response"]>;
        /**
         * Returns a list of story viewers.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorStoryExpired} - Story has already expired
         * @see https://vk.com/dev/stories.getViewers
         */
        getViewers<Params extends {
            /**
             * Story owner ID.
             */
            owner_id: number;
            /**
             * Story ID.
             */
            story_id: number;
            /**
             * Maximum number of results.
             * @default 100
             */
            count?: number;
            /**
             * Offset needed to return a specific subset of results.
             */
            offset?: number;
            /**
             * '1' — to return detailed information about photos
             */
            extended?: boolean;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.StoriesGetViewersExtendedV5115Response["response"]> : Promise<Responses.StoriesGetViewersExtendedV5115Response["response"]>;
        /**
         * Hides all replies in the last 24 hours from the user to current user's stories.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/stories.hideAllReplies
         */
        hideAllReplies<Params extends {
            /**
             * ID of the user whose replies should be hidden.
             */
            owner_id: number;
            group_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Hides the reply to the current user's story.
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/stories.hideReply
         */
        hideReply<Params extends {
            /**
             * ID of the user whose replies should be hidden.
             */
            owner_id: number;
            /**
             * Story ID.
             */
            story_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         *
         * @see https://vk.com/dev/stories.search
         */
        search<Params extends {
            q?: string;
            place_id?: number;
            latitude?: number;
            longitude?: number;
            radius?: number;
            mentioned_id?: number;
            /**
             *
             * @maximum 1000
             * @minimum 1
             * @default 20
             */
            count?: number;
            extended?: boolean;
            fields?: string[];
        }>(params: Params): Promise<Responses.StoriesGetV5113Response["response"]>;
        /**
         * Allows to show stories from hidden sources in current user's feed.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/stories.unbanOwner
         */
        unbanOwner<Params extends {
            /**
             * List of hidden sources to show stories from.
             */
            owners_ids: number[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
    }
    interface Streaming {
        /**
         * Allows to receive data for the connection to Streaming API.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/streaming.getServerUrl
         */
        getServerUrl<Params extends never>(params?: Params): Promise<Responses.StreamingGetServerUrlResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/streaming.setSettings
         */
        setSettings<Params extends {
            /**
             *
             * @enum {string} tier_1, tier_2, tier_3, tier_4, tier_5, tier_6, unlimited
             */
            monthly_tier?: "tier_1" | "tier_2" | "tier_3" | "tier_4" | "tier_5" | "tier_6" | "unlimited";
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
    }
    interface Users {
        /**
         * Returns detailed information on users.
         * @async
         * @access user
         * @access group
         * @access service
         *
         * @see https://vk.com/dev/users.get
         */
        get<Params extends {
            /**
             * User IDs or screen names ('screen_name'). By default, current user ID.
             */
            user_ids?: string[];
            /**
             * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'contacts', 'education', 'online', 'counters', 'relation', 'last_seen', 'activity', 'can_write_private_message', 'can_see_all_posts', 'can_post', 'universities', 'can_invite_to_chats'
             */
            fields?: Objects.UsersFields[];
            /**
             * Case for declension of user name and surname: 'nom' — nominative (default), 'gen' — genitive , 'dat' — dative, 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
             * @enum {string} nom, gen, dat, acc, ins, abl
             */
            name_case?: "nom" | "gen" | "dat" | "acc" | "ins" | "abl";
        }>(params: Params): Promise<Responses.UsersGetResponse["response"]>;
        /**
         * Returns a list of IDs of followers of the user in question, sorted by date added, most recent first.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/users.getFollowers
         */
        getFollowers<Params extends {
            /**
             * User ID.
             */
            user_id?: number;
            /**
             * Offset needed to return a specific subset of followers.
             */
            offset?: number;
            /**
             * Number of followers to return.
             * @maximum 1000
             * @default 100
             */
            count?: number;
            /**
             * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online'.
             */
            fields?: Objects.UsersFields[];
            /**
             * Case for declension of user name and surname: 'nom' — nominative (default), 'gen' — genitive , 'dat' — dative, 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
             * @enum {string} nom, gen, dat, acc, ins, abl
             */
            name_case?: "nom" | "gen" | "dat" | "acc" | "ins" | "abl";
        }>(params: Params): Promise<Responses.UsersGetFollowersResponse["response"]>;
        /**
         * Returns a list of IDs of users and communities followed by the user.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/users.getSubscriptions
         */
        getSubscriptions<Params extends {
            /**
             * User ID.
             */
            user_id?: number;
            /**
             * '1' — to return a combined list of users and communities, '0' — to return separate lists of users and communities (default)
             */
            extended?: boolean;
            /**
             * Offset needed to return a specific subset of subscriptions.
             */
            offset?: number;
            /**
             * Number of users and communities to return.
             * @maximum 200
             * @default 20
             */
            count?: number;
            fields?: Objects.UsersFields[];
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.UsersGetSubscriptionsExtendedResponse["response"]> : Promise<Responses.UsersGetSubscriptionsResponse["response"]>;
        /**
         * Reports (submits a complain about) a user.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/users.report
         */
        report<Params extends {
            /**
             * ID of the user about whom a complaint is being made.
             */
            user_id: number;
            /**
             * Type of complaint: 'porn' – pornography, 'spam' – spamming, 'insult' – abusive behavior, 'advertisement' – disruptive advertisements
             * @enum {string} porn, spam, insult, advertisement
             */
            type: "porn" | "spam" | "insult" | "advertisement";
            /**
             * Comment describing the complaint.
             */
            comment?: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns a list of users matching the search criteria.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/users.search
         */
        search<Params extends {
            /**
             * Search query string (e.g., 'Vasya Babich').
             */
            q?: string;
            /**
             * Sort order: '1' — by date registered, '0' — by rating
             */
            sort?: number;
            /**
             * Offset needed to return a specific subset of users.
             */
            offset?: number;
            /**
             * Number of users to return.
             * @maximum 1000
             * @default 20
             */
            count?: number;
            /**
             * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online',
             */
            fields?: Objects.UsersFields[];
            /**
             * City ID.
             */
            city?: number;
            /**
             * Country ID.
             */
            country?: number;
            /**
             * City name in a string.
             */
            hometown?: string;
            /**
             * ID of the country where the user graduated.
             */
            university_country?: number;
            /**
             * ID of the institution of higher education.
             */
            university?: number;
            /**
             * Year of graduation from an institution of higher education.
             */
            university_year?: number;
            /**
             * Faculty ID.
             */
            university_faculty?: number;
            /**
             * Chair ID.
             */
            university_chair?: number;
            /**
             * '1' — female, '2' — male, '0' — any (default)
             */
            sex?: number;
            /**
             * Relationship status: '1' — Not married, '2' — In a relationship, '3' — Engaged, '4' — Married, '5' — It's complicated, '6' — Actively searching, '7' — In love
             */
            status?: number;
            /**
             * Minimum age.
             */
            age_from?: number;
            /**
             * Maximum age.
             */
            age_to?: number;
            /**
             * Day of birth.
             */
            birth_day?: number;
            /**
             * Month of birth.
             */
            birth_month?: number;
            /**
             * Year of birth.
             * @maximum 2100
             * @minimum 1900
             */
            birth_year?: number;
            /**
             * '1' — online only, '0' — all users
             */
            online?: boolean;
            /**
             * '1' — with photo only, '0' — all users
             */
            has_photo?: boolean;
            /**
             * ID of the country where users finished school.
             */
            school_country?: number;
            /**
             * ID of the city where users finished school.
             */
            school_city?: number;
            school_class?: number;
            /**
             * ID of the school.
             */
            school?: number;
            /**
             * School graduation year.
             */
            school_year?: number;
            /**
             * Users' religious affiliation.
             */
            religion?: string;
            /**
             * Name of the company where users work.
             */
            company?: string;
            /**
             * Job position.
             */
            position?: string;
            /**
             * ID of a community to search in communities.
             */
            group_id?: number;
            from_list?: string[];
        }>(params: Params): Promise<Responses.UsersSearchResponse["response"]>;
    }
    interface Utils {
        /**
         * Checks whether a link is blocked in VK.
         * @async
         * @access user
         * @access group
         * @access service
         *
         * @see https://vk.com/dev/utils.checkLink
         */
        checkLink<Params extends {
            /**
             * Link to check (e.g., 'http://google.com').
             */
            url: string;
        }>(params: Params): Promise<Responses.UtilsCheckLinkResponse["response"]>;
        /**
         * Deletes shortened link from user's list.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/utils.deleteFromLastShortened
         */
        deleteFromLastShortened<Params extends {
            /**
             * Link key (characters after vk.cc/).
             */
            key: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns a list of user's shortened links.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/utils.getLastShortenedLinks
         */
        getLastShortenedLinks<Params extends {
            /**
             * Number of links to return.
             * @default 10
             */
            count?: number;
            /**
             * Offset needed to return a specific subset of links.
             */
            offset?: number;
        }>(params: Params): Promise<Responses.UtilsGetLastShortenedLinksResponse["response"]>;
        /**
         * Returns stats data for shortened link.
         * @async
         * @access user
         * @access group
         * @access service
         * @throws {Errors.ApiErrorNotFound} - Not found
         * @see https://vk.com/dev/utils.getLinkStats
         */
        getLinkStats<Params extends {
            /**
             * Link key (characters after vk.cc/).
             */
            key: string;
            /**
             * Source of scope
             * @enum {string} vk_cc, vk_link
             * @default vk_cc
             */
            source?: "vk_cc" | "vk_link";
            /**
             * Access key for private link stats.
             */
            access_key?: string;
            /**
             * Interval.
             * @enum {string} day, forever, hour, month, week
             * @default day
             */
            interval?: "day" | "forever" | "hour" | "month" | "week";
            /**
             * Number of intervals to return.
             * @maximum 100
             * @default 1
             */
            intervals_count?: number;
            /**
             * 1 — to return extended stats data (sex, age, geo). 0 — to return views number only.
             */
            extended?: boolean;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.UtilsGetLinkStatsExtendedResponse["response"]> : Promise<Responses.UtilsGetLinkStatsResponse["response"]>;
        /**
         * Returns the current time of the VK server.
         * @async
         * @access user
         * @access group
         * @access service
         *
         * @see https://vk.com/dev/utils.getServerTime
         */
        getServerTime<Params extends never>(params?: Params): Promise<Responses.UtilsGetServerTimeResponse["response"]>;
        /**
         * Allows to receive a link shortened via vk.cc.
         * @async
         * @access user
         * @access group
         * @access service
         *
         * @see https://vk.com/dev/utils.getShortLink
         */
        getShortLink<Params extends {
            /**
             * URL to be shortened.
             */
            url: string;
            /**
             * 1 — private stats, 0 — public stats.
             */
            private?: boolean;
        }>(params: Params): Promise<Responses.UtilsGetShortLinkResponse["response"]>;
        /**
         * Detects a type of object (e.g., user, community, application) and its ID by screen name.
         * @async
         * @access user
         * @access group
         * @access service
         *
         * @see https://vk.com/dev/utils.resolveScreenName
         */
        resolveScreenName<Params extends {
            /**
             * Screen name of the user, community (e.g., 'apiclub,' 'andrew', or 'rules_of_war'), or application.
             */
            screen_name: string;
        }>(params: Params): Promise<Responses.UtilsResolveScreenNameResponse["response"]>;
    }
    interface Video {
        /**
         * Adds a video to a user or community page.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessVideo} - Access denied
         * @throws {Errors.ApiErrorVideoAlreadyAdded} - This video is already added
         * @see https://vk.com/dev/video.add
         */
        add<Params extends {
            /**
             * identifier of a user or community to add a video to. Use a negative value to designate a community ID.
             */
            target_id?: number;
            /**
             * Video ID.
             */
            video_id: number;
            /**
             * ID of the user or community that owns the video. Use a negative value to designate a community ID.
             */
            owner_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Creates an empty album for videos.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessVideo} - Access denied
         * @throws {Errors.ApiErrorAlbumsLimit} - Albums number limit is reached
         * @see https://vk.com/dev/video.addAlbum
         */
        addAlbum<Params extends {
            /**
             * Community ID (if the album will be created in a community).
             */
            group_id?: number;
            /**
             * Album title.
             */
            title?: string;
            /**
             * new access permissions for the album. Possible values: , *'0' – all users,, *'1' – friends only,, *'2' – friends and friends of friends,, *'3' – "only me".
             */
            privacy?: (/**
             * @enum {string} 0, 1, 2, 3 */ "0" | "1" | "2" | "3")[];
        }>(params: Params): Promise<Responses.VideoAddAlbumResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessVideo} - Access denied
         * @throws {Errors.ApiErrorVideoAlreadyAdded} - This video is already added
         * @see https://vk.com/dev/video.addToAlbum
         */
        addToAlbum<Params extends {
            target_id?: number;
            album_id?: number;
            album_ids?: number[];
            owner_id: number;
            video_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Adds a new comment on a video.
         * @async
         * @access user
         * @throws {Errors.ApiErrorVideoCommentsClosed} - Comments for this video are closed
         * @see https://vk.com/dev/video.createComment
         */
        createComment<Params extends {
            /**
             * ID of the user or community that owns the video.
             */
            owner_id?: number;
            /**
             * Video ID.
             */
            video_id: number;
            /**
             * New comment text.
             */
            message?: string;
            /**
             * List of objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media attachment owner. '<media_id>' — Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
             */
            attachments?: string[];
            /**
             * '1' — to post the comment from a community name (only if 'owner_id'<0)
             */
            from_group?: boolean;
            reply_to_comment?: number;
            sticker_id?: number;
            guid?: string;
        }>(params: Params): Promise<Responses.VideoCreateCommentResponse["response"]>;
        /**
         * Deletes a video from a user or community page.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/video.delete
         */
        delete<Params extends {
            /**
             * Video ID.
             */
            video_id: number;
            /**
             * ID of the user or community that owns the video.
             */
            owner_id?: number;
            target_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Deletes a video album.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessVideo} - Access denied
         * @see https://vk.com/dev/video.deleteAlbum
         */
        deleteAlbum<Params extends {
            /**
             * Community ID (if the album is owned by a community).
             */
            group_id?: number;
            /**
             * Album ID.
             */
            album_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Deletes a comment on a video.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/video.deleteComment
         */
        deleteComment<Params extends {
            /**
             * ID of the user or community that owns the video.
             */
            owner_id?: number;
            /**
             * ID of the comment to be deleted.
             */
            comment_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits information about a video on a user or community page.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/video.edit
         */
        edit<Params extends {
            /**
             * ID of the user or community that owns the video.
             */
            owner_id?: number;
            /**
             * Video ID.
             */
            video_id: number;
            /**
             * New video title.
             */
            name?: string;
            /**
             * New video description.
             */
            desc?: string;
            /**
             * Privacy settings in a {@link https://vk.com/dev/privacy_setting|special format}. Privacy setting is available for videos uploaded to own profile by user.
             */
            privacy_view?: string[];
            /**
             * Privacy settings for comments in a {@link https://vk.com/dev/privacy_setting|special format}.
             */
            privacy_comment?: string[];
            /**
             * Disable comments for the group video.
             */
            no_comments?: boolean;
            /**
             * '1' — to repeat the playback of the video, '0' — to play the video once,
             */
            repeat?: boolean;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits the title of a video album.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessVideo} - Access denied
         * @see https://vk.com/dev/video.editAlbum
         */
        editAlbum<Params extends {
            /**
             * Community ID (if the album edited is owned by a community).
             */
            group_id?: number;
            /**
             * Album ID.
             */
            album_id: number;
            /**
             * New album title.
             */
            title: string;
            /**
             * new access permissions for the album. Possible values: , *'0' – all users,, *'1' – friends only,, *'2' – friends and friends of friends,, *'3' – "only me".
             */
            privacy?: (/**
             * @enum {string} 0, 1, 2, 3 */ "0" | "1" | "2" | "3")[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits the text of a comment on a video.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/video.editComment
         */
        editComment<Params extends {
            /**
             * ID of the user or community that owns the video.
             */
            owner_id?: number;
            /**
             * Comment ID.
             */
            comment_id: number;
            /**
             * New comment text.
             */
            message?: string;
            /**
             * List of objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media attachment owner. '<media_id>' — Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
             */
            attachments?: string[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns detailed information about videos.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessVideo} - Access denied
         * @see https://vk.com/dev/video.get
         */
        get<Params extends {
            /**
             * ID of the user or community that owns the video(s).
             */
            owner_id?: number;
            /**
             * Video IDs, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", Use a negative value to designate a community ID. Example: "-4363_136089719,13245770_137352259"
             */
            videos?: string[];
            /**
             * ID of the album containing the video(s).
             */
            album_id?: number;
            /**
             * Number of videos to return.
             * @maximum 200
             * @default 100
             */
            count?: number;
            /**
             * Offset needed to return a specific subset of videos.
             */
            offset?: number;
            /**
             * '1' — to return an extended response with additional fields
             */
            extended?: boolean;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.VideoGetExtendedResponse["response"]> : Promise<Responses.VideoGetResponse["response"]>;
        /**
         * Returns video album info
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessVideo} - Access denied
         * @see https://vk.com/dev/video.getAlbumById
         */
        getAlbumById<Params extends {
            /**
             * identifier of a user or community to add a video to. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * Album ID.
             */
            album_id: number;
        }>(params: Params): Promise<Responses.VideoGetAlbumByIdResponse["response"]>;
        /**
         * Returns a list of video albums owned by a user or community.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessVideo} - Access denied
         * @see https://vk.com/dev/video.getAlbums
         */
        getAlbums<Params extends {
            /**
             * ID of the user or community that owns the video album(s).
             */
            owner_id?: number;
            /**
             * Offset needed to return a specific subset of video albums.
             */
            offset?: number;
            /**
             * Number of video albums to return.
             * @maximum 100
             * @default 50
             */
            count?: number;
            /**
             * '1' — to return additional information about album privacy settings for the current user
             */
            extended?: boolean;
            need_system?: boolean;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.VideoGetAlbumsExtendedResponse["response"]> : Promise<Responses.VideoGetAlbumsResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessVideo} - Access denied
         * @see https://vk.com/dev/video.getAlbumsByVideo
         */
        getAlbumsByVideo<Params extends {
            target_id?: number;
            owner_id: number;
            video_id: number;
            extended?: boolean;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.VideoGetAlbumsByVideoExtendedResponse["response"]> : Promise<Responses.VideoGetAlbumsByVideoResponse["response"]>;
        /**
         * Returns a list of comments on a video.
         * @async
         * @access user
         * @throws {Errors.ApiErrorVideoCommentsClosed} - Comments for this video are closed
         * @see https://vk.com/dev/video.getComments
         */
        getComments<Params extends {
            /**
             * ID of the user or community that owns the video.
             */
            owner_id?: number;
            /**
             * Video ID.
             */
            video_id: number;
            /**
             * '1' — to return an additional 'likes' field
             */
            need_likes?: boolean;
            start_comment_id?: number;
            /**
             * Offset needed to return a specific subset of comments.
             */
            offset?: number;
            /**
             * Number of comments to return.
             * @maximum 100
             * @default 20
             */
            count?: number;
            /**
             * Sort order: 'asc' — oldest comment first, 'desc' — newest comment first
             * @enum {string} asc, desc
             */
            sort?: "asc" | "desc";
            extended?: boolean;
            fields?: string[];
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.VideoGetCommentsExtendedResponse["response"]> : Promise<Responses.VideoGetCommentsResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessVideo} - Access denied
         * @see https://vk.com/dev/video.removeFromAlbum
         */
        removeFromAlbum<Params extends {
            target_id?: number;
            album_id?: number;
            album_ids?: number[];
            owner_id: number;
            video_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Reorders the album in the list of user video albums.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessVideo} - Access denied
         * @throws {Errors.ApiErrorNotFound} - Not found
         * @see https://vk.com/dev/video.reorderAlbums
         */
        reorderAlbums<Params extends {
            /**
             * ID of the user or community that owns the albums..
             */
            owner_id?: number;
            /**
             * Album ID.
             */
            album_id: number;
            /**
             * ID of the album before which the album in question shall be placed.
             */
            before?: number;
            /**
             * ID of the album after which the album in question shall be placed.
             */
            after?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Reorders the video in the video album.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessVideo} - Access denied
         * @see https://vk.com/dev/video.reorderVideos
         */
        reorderVideos<Params extends {
            /**
             * ID of the user or community that owns the album with videos.
             */
            target_id?: number;
            /**
             * ID of the video album.
             */
            album_id?: number;
            /**
             * ID of the user or community that owns the video.
             */
            owner_id: number;
            /**
             * ID of the video.
             */
            video_id: number;
            /**
             * ID of the user or community that owns the video before which the video in question shall be placed.
             */
            before_owner_id?: number;
            /**
             * ID of the video before which the video in question shall be placed.
             */
            before_video_id?: number;
            /**
             * ID of the user or community that owns the video after which the photo in question shall be placed.
             */
            after_owner_id?: number;
            /**
             * ID of the video after which the photo in question shall be placed.
             */
            after_video_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Reports (submits a complaint about) a video.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/video.report
         */
        report<Params extends {
            /**
             * ID of the user or community that owns the video.
             */
            owner_id: number;
            /**
             * Video ID.
             */
            video_id: number;
            /**
             * Reason for the complaint: '0' – spam, '1' – child pornography, '2' – extremism, '3' – violence, '4' – drug propaganda, '5' – adult material, '6' – insult, abuse
             */
            reason?: number;
            /**
             * Comment describing the complaint.
             */
            comment?: string;
            /**
             * (If the video was found in search results.) Search query string.
             */
            search_query?: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Reports (submits a complaint about) a comment on a video.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/video.reportComment
         */
        reportComment<Params extends {
            /**
             * ID of the user or community that owns the video.
             */
            owner_id: number;
            /**
             * ID of the comment being reported.
             */
            comment_id: number;
            /**
             * Reason for the complaint: , 0 – spam , 1 – child pornography , 2 – extremism , 3 – violence , 4 – drug propaganda , 5 – adult material , 6 – insult, abuse
             */
            reason?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Restores a previously deleted video.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/video.restore
         */
        restore<Params extends {
            /**
             * Video ID.
             */
            video_id: number;
            /**
             * ID of the user or community that owns the video.
             */
            owner_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Restores a previously deleted comment on a video.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/video.restoreComment
         */
        restoreComment<Params extends {
            /**
             * ID of the user or community that owns the video.
             */
            owner_id?: number;
            /**
             * ID of the deleted comment.
             */
            comment_id: number;
        }>(params: Params): Promise<Responses.VideoRestoreCommentResponse["response"]>;
        /**
         * Returns a server address (required for upload) and video data.
         * @async
         * @access user
         * @throws {Errors.ApiErrorAccessVideo} - Access denied
         * @throws {Errors.ApiErrorWallAddPost} - Access to adding post denied
         * @throws {Errors.ApiErrorWallAdsPublished} - Advertisement post was recently added
         * @see https://vk.com/dev/video.save
         */
        save<Params extends {
            /**
             * Name of the video.
             */
            name?: string;
            /**
             * Description of the video.
             */
            description?: string;
            /**
             * '1' — to designate the video as private (send it via a private message), the video will not appear on the user's video list and will not be available by ID for other users, '0' — not to designate the video as private
             */
            is_private?: boolean;
            /**
             * '1' — to post the saved video on a user's wall, '0' — not to post the saved video on a user's wall
             */
            wallpost?: boolean;
            /**
             * URL for embedding the video from an external website.
             */
            link?: string;
            /**
             * ID of the community in which the video will be saved. By default, the current user's page.
             */
            group_id?: number;
            /**
             * ID of the album to which the saved video will be added.
             */
            album_id?: number;
            privacy_view?: string[];
            privacy_comment?: string[];
            no_comments?: boolean;
            /**
             * '1' — to repeat the playback of the video, '0' — to play the video once,
             */
            repeat?: boolean;
            compression?: boolean;
        }>(params: Params): Promise<Responses.VideoSaveResponse["response"]>;
        /**
         * Returns a list of videos under the set search criterion.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/video.search
         */
        search<Params extends {
            /**
             * Search query string (e.g., 'The Beatles').
             */
            q: string;
            /**
             * Sort order: '1' — by duration, '2' — by relevance, '0' — by date added
             */
            sort?: number;
            /**
             * If not null, only searches for high-definition videos.
             */
            hd?: number;
            /**
             * '1' — to disable the Safe Search filter, '0' — to enable the Safe Search filter
             */
            adult?: boolean;
            /**
             * Filters to apply: 'youtube' — return YouTube videos only, 'vimeo' — return Vimeo videos only, 'short' — return short videos only, 'long' — return long videos only
             */
            filters?: (/**
             * @enum {string} youtube, vimeo, short, long */ "youtube" | "vimeo" | "short" | "long")[];
            search_own?: boolean;
            /**
             * Offset needed to return a specific subset of videos.
             */
            offset?: number;
            longer?: number;
            shorter?: number;
            /**
             * Number of videos to return.
             * @maximum 200
             * @default 20
             */
            count?: number;
            extended?: boolean;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.VideoSearchExtendedResponse["response"]> : Promise<Responses.VideoSearchResponse["response"]>;
    }
    interface Wall {
        /**
         * Method not described
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/wall.closeComments
         */
        closeComments<Params extends {
            owner_id: number;
            post_id: number;
        }>(params: Params): Promise<Responses.BaseBoolResponse["response"]>;
        /**
         * Adds a comment to a post on a user wall or community wall.
         * @async
         * @access user
         * @access group
         * @throws {Errors.ApiErrorWallAccessAddReply} - Access to status replies denied
         * @throws {Errors.ApiErrorWallReplyOwnerFlood} - Too many replies
         * @throws {Errors.ApiErrorWallLinksForbidden} - Hyperlinks are forbidden
         * @throws {Errors.ApiErrorWallAccessReplies} - Access to post comments denied
         * @see https://vk.com/dev/wall.createComment
         */
        createComment<Params extends {
            /**
             * User ID or community ID. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * Post ID.
             */
            post_id: number;
            /**
             * Group ID.
             */
            from_group?: number;
            /**
             * (Required if 'attachments' is not set.) Text of the comment.
             */
            message?: string;
            /**
             * ID of comment to reply.
             */
            reply_to_comment?: number;
            /**
             * (Required if 'message' is not set.) List of media objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media ojbect: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media owner. '<media_id>' — Media ID. For example: "photo100172_166443618,photo66748_265827614"
             */
            attachments?: string[];
            /**
             * Sticker ID.
             */
            sticker_id?: number;
            /**
             * Unique identifier to avoid repeated comments.
             */
            guid?: string;
        }>(params: Params): Promise<Responses.WallCreateCommentResponse["response"]>;
        /**
         * Deletes a post from a user wall or community wall.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWallAccessPost} - Access to wall's post denied
         * @see https://vk.com/dev/wall.delete
         */
        delete<Params extends {
            /**
             * User ID or community ID. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * ID of the post to be deleted.
             */
            post_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Deletes a comment on a post on a user wall or community wall.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWallAccessComment} - Access to wall's comment denied
         * @see https://vk.com/dev/wall.deleteComment
         */
        deleteComment<Params extends {
            /**
             * User ID or community ID. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * Comment ID.
             */
            comment_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits a post on a user wall or community wall.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWallAdsPostLimitReached} - Too many ads posts
         * @see https://vk.com/dev/wall.edit
         */
        edit<Params extends {
            /**
             * User ID or community ID. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            post_id: number;
            friends_only?: boolean;
            /**
             * (Required if 'attachments' is not set.) Text of the post.
             */
            message?: string;
            /**
             * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media application owner. '<media_id>' — Media application ID. Example: "photo100172_166443618,photo66748_265827614", May contain a link to an external page to include in the post. Example: "photo66748_265827614,http://habrahabr.ru", "NOTE: If more than one link is being attached, an error is thrown."
             */
            attachments?: string[];
            services?: string;
            signed?: boolean;
            publish_date?: number;
            lat?: number;
            long?: number;
            place_id?: number;
            mark_as_ads?: boolean;
            close_comments?: boolean;
            poster_bkg_id?: number;
            poster_bkg_owner_id?: number;
            poster_bkg_access_hash?: string;
            copyright?: string;
        }>(params: Params): Promise<Responses.WallEditResponse["response"]>;
        /**
         * Allows to edit hidden post.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWallAdsPostLimitReached} - Too many ads posts
         * @see https://vk.com/dev/wall.editAdsStealth
         */
        editAdsStealth<Params extends {
            /**
             * User ID or community ID. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * Post ID. Used for publishing of scheduled and suggested posts.
             */
            post_id: number;
            /**
             * (Required if 'attachments' is not set.) Text of the post.
             */
            message?: string;
            /**
             * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, 'page' — wiki-page, 'note' — note, 'poll' — poll, 'album' — photo album, '<owner_id>' — ID of the media application owner. '<media_id>' — Media application ID. Example: "photo100172_166443618,photo66748_265827614", May contain a link to an external page to include in the post. Example: "photo66748_265827614,http://habrahabr.ru", "NOTE: If more than one link is being attached, an error will be thrown."
             */
            attachments?: string[];
            /**
             * Only for posts in communities with 'from_group' set to '1': '1' — post will be signed with the name of the posting user, '0' — post will not be signed (default)
             */
            signed?: boolean;
            /**
             * Geographical latitude of a check-in, in degrees (from -90 to 90).
             */
            lat?: number;
            /**
             * Geographical longitude of a check-in, in degrees (from -180 to 180).
             */
            long?: number;
            /**
             * ID of the location where the user was tagged.
             */
            place_id?: number;
            /**
             * Link button ID
             */
            link_button?: string;
            /**
             * Link title
             */
            link_title?: string;
            /**
             * Link image url
             */
            link_image?: string;
            /**
             * Link video ID in format "<owner_id>_<media_id>"
             */
            link_video?: string;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Edits a comment on a user wall or community wall.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/wall.editComment
         */
        editComment<Params extends {
            /**
             * User ID or community ID. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * Comment ID.
             */
            comment_id: number;
            /**
             * New comment text.
             */
            message?: string;
            /**
             * List of objects attached to the comment, in the following format: , "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media attachment owner. '<media_id>' — Media attachment ID. For example: "photo100172_166443618,photo66748_265827614"
             */
            attachments?: string[];
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Returns a list of posts on a user wall or community wall.
         * @async
         * @access user
         * @access service
         * @throws {Errors.ApiErrorBlocked} - Content blocked
         * @see https://vk.com/dev/wall.get
         */
        get<Params extends {
            /**
             * ID of the user or community that owns the wall. By default, current user ID. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * User or community short address.
             */
            domain?: string;
            /**
             * Offset needed to return a specific subset of posts.
             */
            offset?: number;
            /**
             * Number of posts to return (maximum 100).
             */
            count?: number;
            /**
             * Filter to apply: 'owner' — posts by the wall owner, 'others' — posts by someone else, 'all' — posts by the wall owner and others (default), 'postponed' — timed posts (only available for calls with an 'access_token'), 'suggests' — suggested posts on a community wall
             * @enum {string} owner, others, all, postponed, suggests
             */
            filter?: "owner" | "others" | "all" | "postponed" | "suggests";
            /**
             * '1' — to return 'wall', 'profiles', and 'groups' fields, '0' — to return no additional fields (default)
             */
            extended?: boolean;
            fields?: Objects.BaseUserGroupFields[];
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.WallGetExtendedResponse["response"]> : Promise<Responses.WallGetResponse["response"]>;
        /**
         * Returns a list of posts from user or community walls by their IDs.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/wall.getById
         */
        getById<Params extends {
            /**
             * User or community IDs and post IDs, separated by underscores. Use a negative value to designate a community ID. Example: "93388_21539,93388_20904,2943_4276,-1_1"
             */
            posts: string[];
            /**
             * '1' — to return user and community objects needed to display posts, '0' — no additional fields are returned (default)
             */
            extended?: boolean;
            /**
             * Sets the number of parent elements to include in the array 'copy_history' that is returned if the post is a repost from another wall.
             * @default 2
             */
            copy_history_depth?: number;
            fields?: Objects.BaseUserGroupFields[];
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.WallGetByIdExtendedResponse["response"]> : Promise<Responses.WallGetByIdResponse["response"]>;
        /**
         * Returns a comment on a post on a user wall or community wall.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWallAccessReplies} - Access to post comments denied
         * @see https://vk.com/dev/wall.getComment
         */
        getComment<Params extends {
            /**
             * User ID or community ID. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * Comment ID.
             */
            comment_id: number;
            extended?: boolean;
            fields?: Objects.BaseUserGroupFields[];
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.WallGetCommentExtendedResponse["response"]> : Promise<Responses.WallGetCommentResponse["response"]>;
        /**
         * Returns a list of comments on a post on a user wall or community wall.
         * @async
         * @access user
         * @access service
         * @throws {Errors.ApiErrorWallAccessReplies} - Access to post comments denied
         * @see https://vk.com/dev/wall.getComments
         */
        getComments<Params extends {
            /**
             * User ID or community ID. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * Post ID.
             */
            post_id?: number;
            /**
             * '1' — to return the 'likes' field, '0' — not to return the 'likes' field (default)
             */
            need_likes?: boolean;
            start_comment_id?: number;
            /**
             * Offset needed to return a specific subset of comments.
             */
            offset?: number;
            /**
             * Number of comments to return (maximum 100).
             */
            count?: number;
            /**
             * Sort order: 'asc' — chronological, 'desc' — reverse chronological
             * @enum {string} asc, desc
             */
            sort?: "asc" | "desc";
            /**
             * Number of characters at which to truncate comments when previewed. By default, '90'. Specify '0' if you do not want to truncate comments.
             */
            preview_length?: number;
            extended?: boolean;
            fields?: Objects.BaseUserGroupFields[];
            /**
             * Comment ID.
             */
            comment_id?: number;
            /**
             * Count items in threads.
             * @maximum 10
             */
            thread_items_count?: number;
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.WallGetCommentsExtendedResponse["response"]> : Promise<Responses.WallGetCommentsResponse["response"]>;
        /**
         * Returns information about reposts of a post on user wall or community wall.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/wall.getReposts
         */
        getReposts<Params extends {
            /**
             * User ID or community ID. By default, current user ID. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * Post ID.
             */
            post_id?: number;
            /**
             * Offset needed to return a specific subset of reposts.
             */
            offset?: number;
            /**
             * Number of reposts to return.
             * @maximum 1000
             * @default 20
             */
            count?: number;
        }>(params: Params): Promise<Responses.WallGetRepostsResponse["response"]>;
        /**
         * Method not described
         * @async
         * @access user
         * @access group
         *
         * @see https://vk.com/dev/wall.openComments
         */
        openComments<Params extends {
            owner_id: number;
            post_id: number;
        }>(params: Params): Promise<Responses.BaseBoolResponse["response"]>;
        /**
         * Pins the post on wall.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/wall.pin
         */
        pin<Params extends {
            /**
             * ID of the user or community that owns the wall. By default, current user ID. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * Post ID.
             */
            post_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Adds a new post on a user wall or community wall. Can also be used to publish suggested or scheduled posts.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWallAdsPublished} - Advertisement post was recently added
         * @throws {Errors.ApiErrorWallAddPost} - Access to adding post denied
         * @throws {Errors.ApiErrorWallTooManyRecipients} - Too many recipients
         * @throws {Errors.ApiErrorWallLinksForbidden} - Hyperlinks are forbidden
         * @throws {Errors.ApiErrorWallAdsPostLimitReached} - Too many ads posts
         * @see https://vk.com/dev/wall.post
         */
        post<Params extends {
            /**
             * User ID or community ID. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * '1' — post will be available to friends only, '0' — post will be available to all users (default)
             */
            friends_only?: boolean;
            /**
             * For a community: '1' — post will be published by the community, '0' — post will be published by the user (default)
             */
            from_group?: boolean;
            /**
             * (Required if 'attachments' is not set.) Text of the post.
             */
            message?: string;
            /**
             * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, 'page' — wiki-page, 'note' — note, 'poll' — poll, 'album' — photo album, '<owner_id>' — ID of the media application owner. '<media_id>' — Media application ID. Example: "photo100172_166443618,photo66748_265827614", May contain a link to an external page to include in the post. Example: "photo66748_265827614,http://habrahabr.ru", "NOTE: If more than one link is being attached, an error will be thrown."
             */
            attachments?: string[];
            /**
             * List of services or websites the update will be exported to, if the user has so requested. Sample values: 'twitter', 'facebook'.
             */
            services?: string;
            /**
             * Only for posts in communities with 'from_group' set to '1': '1' — post will be signed with the name of the posting user, '0' — post will not be signed (default)
             */
            signed?: boolean;
            /**
             * Publication date (in Unix time). If used, posting will be delayed until the set time.
             */
            publish_date?: number;
            /**
             * Geographical latitude of a check-in, in degrees (from -90 to 90).
             */
            lat?: number;
            /**
             * Geographical longitude of a check-in, in degrees (from -180 to 180).
             */
            long?: number;
            /**
             * ID of the location where the user was tagged.
             */
            place_id?: number;
            /**
             * Post ID. Used for publishing of scheduled and suggested posts.
             */
            post_id?: number;
            guid?: string;
            mark_as_ads?: boolean;
            close_comments?: boolean;
            mute_notifications?: boolean;
            copyright?: string;
        }>(params: Params): Promise<Responses.WallPostResponse["response"]>;
        /**
         * Allows to create hidden post which will not be shown on the community's wall and can be used for creating an ad with type "Community post".
         * @async
         * @access user
         * @throws {Errors.ApiErrorWallAdsPublished} - Advertisement post was recently added
         * @throws {Errors.ApiErrorWallAddPost} - Access to adding post denied
         * @throws {Errors.ApiErrorWallTooManyRecipients} - Too many recipients
         * @throws {Errors.ApiErrorWallLinksForbidden} - Hyperlinks are forbidden
         * @see https://vk.com/dev/wall.postAdsStealth
         */
        postAdsStealth<Params extends {
            /**
             * User ID or community ID. Use a negative value to designate a community ID.
             */
            owner_id: number;
            /**
             * (Required if 'attachments' is not set.) Text of the post.
             */
            message?: string;
            /**
             * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, 'page' — wiki-page, 'note' — note, 'poll' — poll, 'album' — photo album, '<owner_id>' — ID of the media application owner. '<media_id>' — Media application ID. Example: "photo100172_166443618,photo66748_265827614", May contain a link to an external page to include in the post. Example: "photo66748_265827614,http://habrahabr.ru", "NOTE: If more than one link is being attached, an error will be thrown."
             */
            attachments?: string[];
            /**
             * Only for posts in communities with 'from_group' set to '1': '1' — post will be signed with the name of the posting user, '0' — post will not be signed (default)
             */
            signed?: boolean;
            /**
             * Geographical latitude of a check-in, in degrees (from -90 to 90).
             */
            lat?: number;
            /**
             * Geographical longitude of a check-in, in degrees (from -180 to 180).
             */
            long?: number;
            /**
             * ID of the location where the user was tagged.
             */
            place_id?: number;
            /**
             * Unique identifier to avoid duplication the same post.
             */
            guid?: string;
            /**
             * Link button ID
             */
            link_button?: string;
            /**
             * Link title
             */
            link_title?: string;
            /**
             * Link image url
             */
            link_image?: string;
            /**
             * Link video ID in format "<owner_id>_<media_id>"
             */
            link_video?: string;
        }>(params: Params): Promise<Responses.WallPostAdsStealthResponse["response"]>;
        /**
         * Reports (submits a complaint about) a comment on a post on a user wall or community wall.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/wall.reportComment
         */
        reportComment<Params extends {
            /**
             * ID of the user or community that owns the wall.
             */
            owner_id: number;
            /**
             * Comment ID.
             */
            comment_id: number;
            /**
             * Reason for the complaint: '0' – spam, '1' – child pornography, '2' – extremism, '3' – violence, '4' – drug propaganda, '5' – adult material, '6' – insult, abuse
             */
            reason?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Reports (submits a complaint about) a post on a user wall or community wall.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/wall.reportPost
         */
        reportPost<Params extends {
            /**
             * ID of the user or community that owns the wall.
             */
            owner_id: number;
            /**
             * Post ID.
             */
            post_id: number;
            /**
             * Reason for the complaint: '0' – spam, '1' – child pornography, '2' – extremism, '3' – violence, '4' – drug propaganda, '5' – adult material, '6' – insult, abuse
             */
            reason?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Reposts (copies) an object to a user wall or community wall.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWallAdsPublished} - Advertisement post was recently added
         * @throws {Errors.ApiErrorWallAddPost} - Access to adding post denied
         * @throws {Errors.ApiErrorWallAdsPostLimitReached} - Too many ads posts
         * @see https://vk.com/dev/wall.repost
         */
        repost<Params extends {
            /**
             * ID of the object to be reposted on the wall. Example: "wall66748_3675"
             */
            object: string;
            /**
             * Comment to be added along with the reposted object.
             */
            message?: string;
            /**
             * Target community ID when reposting to a community.
             */
            group_id?: number;
            mark_as_ads?: boolean;
            mute_notifications?: boolean;
        }>(params: Params): Promise<Responses.WallRepostResponse["response"]>;
        /**
         * Restores a post deleted from a user wall or community wall.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWallAccessPost} - Access to wall's post denied
         * @throws {Errors.ApiErrorWallAddPost} - Access to adding post denied
         * @see https://vk.com/dev/wall.restore
         */
        restore<Params extends {
            /**
             * User ID or community ID from whose wall the post was deleted. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * ID of the post to be restored.
             */
            post_id?: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Restores a comment deleted from a user wall or community wall.
         * @async
         * @access user
         * @throws {Errors.ApiErrorWallAccessComment} - Access to wall's comment denied
         * @see https://vk.com/dev/wall.restoreComment
         */
        restoreComment<Params extends {
            /**
             * User ID or community ID. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * Comment ID.
             */
            comment_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
        /**
         * Allows to search posts on user or community walls.
         * @async
         * @access user
         * @access service
         * @throws {Errors.ApiErrorWallAccessPost} - Access to wall's post denied
         * @see https://vk.com/dev/wall.search
         */
        search<Params extends {
            /**
             * user or community id. "Remember that for a community 'owner_id' must be negative."
             */
            owner_id?: number;
            /**
             * user or community screen name.
             */
            domain?: string;
            /**
             * search query string.
             */
            query?: string;
            /**
             * '1' – returns only page owner's posts.
             */
            owners_only?: boolean;
            /**
             * count of posts to return.
             * @maximum 100
             * @default 20
             */
            count?: number;
            /**
             * Offset needed to return a specific subset of posts.
             */
            offset?: number;
            /**
             * show extended post info.
             */
            extended?: boolean;
            fields?: Objects.BaseUserGroupFields[];
        }>(params: Params): Params["extended"] extends true | 1 ? Promise<Responses.WallSearchExtendedResponse["response"]> : Promise<Responses.WallSearchResponse["response"]>;
        /**
         * Unpins the post on wall.
         * @async
         * @access user
         *
         * @see https://vk.com/dev/wall.unpin
         */
        unpin<Params extends {
            /**
             * ID of the user or community that owns the wall. By default, current user ID. Use a negative value to designate a community ID.
             */
            owner_id?: number;
            /**
             * Post ID.
             */
            post_id: number;
        }>(params: Params): Promise<Responses.OkResponse["response"]>;
    }
    interface Widgets {
        /**
         * Gets a list of comments for the page added through the {@link https://vk.com/dev/Comments|Comments widget}.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/widgets.getComments
         */
        getComments<Params extends {
            widget_api_id?: number;
            url?: string;
            page_id?: string;
            /**
             *
             * @default date
             */
            order?: string;
            fields?: Objects.UsersFields[];
            offset?: number;
            /**
             *
             * @maximum 200
             * @minimum 10
             * @default 10
             */
            count?: number;
        }>(params: Params): Promise<Responses.WidgetsGetCommentsResponse["response"]>;
        /**
         * Gets a list of application/site pages where the {@link https://vk.com/dev/Comments|Comments widget} or {@link https://vk.com/dev/Like|Like widget} is installed.
         * @async
         * @access user
         * @access service
         *
         * @see https://vk.com/dev/widgets.getPages
         */
        getPages<Params extends {
            widget_api_id?: number;
            /**
             *
             * @default friend_likes
             */
            order?: string;
            /**
             *
             * @default week
             */
            period?: string;
            offset?: number;
            /**
             *
             * @maximum 200
             * @minimum 10
             * @default 10
             */
            count?: number;
        }>(params: Params): Promise<Responses.WidgetsGetPagesResponse["response"]>;
    }
    class _domainsSpecifier {
        account: Methods.Account;
        ads: Methods.Ads;
        appWidgets: Methods.AppWidgets;
        apps: Methods.Apps;
        auth: Methods.Auth;
        board: Methods.Board;
        database: Methods.Database;
        docs: Methods.Docs;
        fave: Methods.Fave;
        friends: Methods.Friends;
        gifts: Methods.Gifts;
        groups: Methods.Groups;
        leads: Methods.Leads;
        likes: Methods.Likes;
        market: Methods.Market;
        messages: Methods.Messages;
        newsfeed: Methods.Newsfeed;
        notes: Methods.Notes;
        notifications: Methods.Notifications;
        orders: Methods.Orders;
        pages: Methods.Pages;
        photos: Methods.Photos;
        polls: Methods.Polls;
        prettyCards: Methods.PrettyCards;
        search: Methods.Search;
        secure: Methods.Secure;
        stats: Methods.Stats;
        status: Methods.Status;
        storage: Methods.Storage;
        stories: Methods.Stories;
        streaming: Methods.Streaming;
        users: Methods.Users;
        utils: Methods.Utils;
        video: Methods.Video;
        wall: Methods.Wall;
        widgets: Methods.Widgets;
    }
    const _exportedDomains: readonly ["account", "ads", "appWidgets", "apps", "auth", "board", "database", "docs", "fave", "friends", "gifts", "groups", "leads", "likes", "market", "messages", "newsfeed", "notes", "notifications", "orders", "pages", "photos", "polls", "prettyCards", "search", "secure", "stats", "status", "storage", "stories", "streaming", "users", "utils", "video", "wall", "widgets"];
}
export declare namespace Errors {
    class ApiErrorUnknown extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorDisabled extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorMethod extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorSignature extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorAuth extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorTooMany extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorPermission extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorRequest extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorFlood extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorServer extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorEnabledInTest extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorCaptcha extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorAccess extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorAuthHttps extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorAuthValidation extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorUserDeleted extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorMethodPermission extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorMethodAds extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorMethodDisabled extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorNeedConfirmation extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorNeedTokenConfirmation extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorGroupAuth extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorAppAuth extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorRateLimit extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorPrivateProfile extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorParam extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorParamApiId extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorParamUserId extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorParamTimestamp extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorAccessAlbum extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorAccessAudio extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorAccessGroup extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorAlbumFull extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorVotesPermission extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorAdsPermission extends Error {
        code: number;
        message: string;
        name: string;
    }
    class ApiErrorAdsSpecific extends Error {
        code: number;
        message: string;
        name: string;
    }
    const ErrorsIndex: {
        1: typeof ApiErrorUnknown;
        2: typeof ApiErrorDisabled;
        3: typeof ApiErrorMethod;
        4: typeof ApiErrorSignature;
        5: typeof ApiErrorAuth;
        6: typeof ApiErrorTooMany;
        7: typeof ApiErrorPermission;
        8: typeof ApiErrorRequest;
        9: typeof ApiErrorFlood;
        10: typeof ApiErrorServer;
        11: typeof ApiErrorEnabledInTest;
        14: typeof ApiErrorCaptcha;
        15: typeof ApiErrorAccess;
        16: typeof ApiErrorAuthHttps;
        17: typeof ApiErrorAuthValidation;
        18: typeof ApiErrorUserDeleted;
        20: typeof ApiErrorMethodPermission;
        21: typeof ApiErrorMethodAds;
        23: typeof ApiErrorMethodDisabled;
        24: typeof ApiErrorNeedConfirmation;
        25: typeof ApiErrorNeedTokenConfirmation;
        27: typeof ApiErrorGroupAuth;
        28: typeof ApiErrorAppAuth;
        29: typeof ApiErrorRateLimit;
        30: typeof ApiErrorPrivateProfile;
        100: typeof ApiErrorParam;
        101: typeof ApiErrorParamApiId;
        113: typeof ApiErrorParamUserId;
        150: typeof ApiErrorParamTimestamp;
        200: typeof ApiErrorAccessAlbum;
        201: typeof ApiErrorAccessAudio;
        203: typeof ApiErrorAccessGroup;
        300: typeof ApiErrorAlbumFull;
        500: typeof ApiErrorVotesPermission;
        600: typeof ApiErrorAdsPermission;
        603: typeof ApiErrorAdsSpecific;
    };
}
