__d(
    "WAWebApiParse",
    [
        "PaymentLink",
        "WAArrayBufferUtils",
        "WABase64",
        "WABinary",
        "WALogger",
        "WAWebABProps",
        "WAWebApi",
        "WAWebApiParseUtils",
        "WAWebBroadcastApiParse",
        "WAWebExternalCtxConfig",
        "WAWebFaqUrl",
        "WAWebNewsletterApiParse",
        "WAWebPonyfillsUrlSearchParams",
        "WAWebStatusApiParse",
        "WAWebVoipGatingUtils",
        "WAWebWamEnumDeepLinkType",
        "justknobx",
    ],
    function (a, b, c, d, e, f, g) {
        function h() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "parseCTWADeeplinkToken: failed to parse token: ",
                "",
            ]);
            h = function () {
                return a;
            };
            return a;
        }
        var i = new RegExp(
            "^" +
            (e = d("WAWebApiParseUtils")).ORIGIN +
            e.OPTIONAL_PATH_PART +
            "/accept/?\\?code=(\\w+)(?:&.*)?$",
            "i"
        ),
            j = /^https?:\/\/chat\.whatsapp\.com\/invite\/(\w+)(?:\?.*)?$/i,
            k = /^https?:\/\/chat\.whatsapp\.com\/(\w+)(?:\?.*)?$/i,
            l = /^whatsapp:\/\/chat\/?\?code=(\w+)(?:&.*)?$/i,
            m = function (a) {
                var b = a.match(i);
                if (b) return { code: b[2], url: b[1] || "/" };
                b = a.match(j);
                if (b) return { code: b[1] };
                b = a.match(k);
                if (b) return { code: b[1] };
                b = a.match(l);
                if (b) return { code: b[1] };
            },
            n = "utm_source",
            o = "utm_campaign",
            p = [
                "utm_source",
                "utm_campaign",
                "text",
                "phone",
                "data",
                "source",
                "context",
                "icebreaker",
                "source_url",
                "type",
                "token",
            ];
        function q(a) {
            return p.find(function (b) {
                return b === a;
            });
        }
        var r = 32;
        function s(a) {
            if (!a || typeof a !== "string") return;
            a = d("WABinary").Binary.build(a);
            if (
                a.size() >
                d("WAWebABProps").getABPropConfigValue("ctwa_data_max_length")
            )
                return;
            return a.readBuffer();
        }
        function t(a, b) {
            a = s(a);
            if (!a) return;
            b.conversionTuple == null
                ? (b.conversionTuple = { conversionData: a })
                : (b.conversionTuple.conversionData = a);
        }
        function u(a, b) {
            a = a;
            var c = d("WABinary").numUtf8Bytes(a);
            if (c > r) return;
            b.conversionTuple == null
                ? (b.conversionTuple = { conversionSource: a })
                : (b.conversionTuple.conversionSource = a);
        }
        function v(a, b, c) {
            switch (a) {
                case "source_url":
                    c.ctwaContextLinkData != null
                        ? (c.ctwaContextLinkData.sourceUrl = b)
                        : (c.ctwaContextLinkData = { sourceUrl: b });
                    return;
                case "context":
                    c.ctwaContextLinkData != null
                        ? (c.ctwaContextLinkData.context = b)
                        : (c.ctwaContextLinkData = { context: b });
                    return;
                case "icebreaker":
                    c.ctwaContextLinkData != null
                        ? (c.ctwaContextLinkData.icebreaker = b)
                        : (c.ctwaContextLinkData = { icebreaker: b });
                    return;
            }
        }
        function w(a) {
            if (a != null && a.split(".").length === 3) {
                a = a.split(".")[1].replace(/\s/g, "");
                try {
                    a = d("WABase64").decodeB64UrlSafe(a);
                    return JSON.parse(d("WAArrayBufferUtils").arrayBufferToString(a));
                } catch (a) {
                    d("WALogger")
                        .ERROR(h(), String(a))
                        .sendLogs("ctwa-deeplink-token-parse-error")
                        .tags("ctwa-error");
                    return {};
                }
            }
            return {};
        }
        function x(a) {
            var b = {};
            Object.keys(a).forEach(function (c) {
                var d = a[c];
                if (d == null) return;
                switch (c) {
                    case "data":
                        t(d, b);
                        break;
                    case "source":
                        u(d, b);
                        break;
                    case "source_url":
                    case "context":
                    case "icebreaker":
                        v(c, d, b);
                        break;
                    default:
                        (c === "phone" || c === "text" || c === "type") && (b[c] = d);
                }
            });
            return b;
        }
        function y(a, b) {
            var d = {};
            new (c("WAWebPonyfillsUrlSearchParams"))(a).forEach(function (a, b) {
                b = q(b.toLowerCase());
                if (b == null) return;
                switch (b) {
                    case "data":
                        t(a, d);
                        break;
                    case "source":
                        u(a, d);
                        break;
                    case "source_url":
                    case "context":
                    case "icebreaker":
                        v(b, a, d);
                        break;
                    case "utm_campaign":
                        d.utm != null ? (d.utm.campaign = a) : (d.utm = { campaign: a });
                        break;
                    case "utm_source":
                        d.utm != null ? (d.utm.source = a) : (d.utm = { source: a });
                        break;
                    case "token":
                        if (c("justknobx")._("4413")) {
                            var e = w(a);
                            e = x(e);
                            Object.assign(d, e);
                        }
                        break;
                    default:
                        b, (d[b] = a);
                }
            });
            d.phone != null &&
                d.phone !== "" &&
                ((d.phone = d.phone.replace(/\D/g, "") + "@c.us"),
                    d.ctwaContextLinkData && (d.ctwaContextLinkData.phone = d.phone));
            if (d.ctwaContextLinkData == null) {
                a = T(b);
                a != null && (d.partnertoken = a);
            }
            if (
                (d.phone != null && d.phone !== "") ||
                (d.text != null && d.text !== "")
            )
                return d;
        }
        var z = new RegExp(
            "^" + e.ORIGIN + e.OPTIONAL_PATH_PART + "/send/?\\?(.+)$",
            "i"
        ),
            A = /^https?:\/\/api\.whatsapp\.com\/send\/?\?(.+)$/i,
            B = /^whatsapp:\/\/send\/?\?(.*)$/i,
            C = /^https?:\/\/wa\.me\/?(?:([0-9.]{0,20}))?\/?\??(.+)?$/i,
            D = /^https?:\/\/wa\.me\/?(?:([0-9a-z.]{5,35}))?\/?\??(.+)?$/i;
        f = /^https?:\/\/wa\.me\/p\/([0-9]{0,20})\/([0-9]{0,20})$/i;
        var E = /^whatsapp:\/\/product\/([0-9]{0,20})\/([0-9]{0,20})$/i,
            F = new RegExp(
                "^" +
                e.ORIGIN +
                e.OPTIONAL_NON_CAPTURING_PATH_PART +
                "/product/([0-9]{0,20})/([0-9]{0,20})$",
                "i"
            ),
            G = /^https?:\/\/wa\.me\/p\/([0-9]{0,20})\/([0-9]{0,20})(\/?\?.*)$/i,
            H = /^whatsapp:\/\/product\/([0-9]{0,20})\/([0-9]{0,20})(\/?\?.*)$/i,
            I = new RegExp(
                "^" +
                e.ORIGIN +
                e.OPTIONAL_NON_CAPTURING_PATH_PART +
                "/product/([0-9]{0,20})/([0-9]{0,20})(/?.*)$",
                "i"
            ),
            J = /^https?:\/\/wa\.me\/p\/([^\/]{0,200})\/([0-9]{0,20})$/i,
            aa = /^whatsapp:\/\/product\/([^\/]{0,200})\/([0-9]{0,20})$/i,
            ba = new RegExp(
                "^" +
                e.ORIGIN +
                e.OPTIONAL_NON_CAPTURING_PATH_PART +
                "/product/([^/]{0,200})/([0-9]{0,20})$",
                "i"
            ),
            ca = /^https?:\/\/wa\.me\/p\/([^\/]{0,200})\/([0-9]{0,20})(\/?\?.*)$/i,
            da = /^whatsapp:\/\/product\/([^\/]{0,200})\/([0-9]{0,20})(\/?\?.*)$/i,
            ea = new RegExp(
                "^" +
                e.ORIGIN +
                e.OPTIONAL_NON_CAPTURING_PATH_PART +
                "/product/([^/]{0,200})/([0-9]{0,20})(/?.*)$",
                "i"
            ),
            fa = /^https?:\/\/wa\.me\/biz-add-product\/?(.+)$/i,
            ga = /^whatsapp-smb:\/\/advertise\/?(.+)$/i,
            ha = /^whatsapp-smb:\/\/manage-ads\/?(?:\?.*)?$/,
            ia = /^whatsapp-smb:\/\/meta_verified\/?(?:\?.*)?$/i,
            ja = /^https?:\/\/wa\.me\/biz-catalog-settings\/?(.+)$/i,
            ka = /^https?:\/\/wa\.me\/biz-catalog-boost\/?(.+)$/i,
            la = /^whatsapp:\/\/message_yourself\/?(?:\?.*)?$/i,
            ma = /^https?:\/\/wa\.me\/message_yourself\/?(?:\?.*)?$/i,
            na = new RegExp(
                "^" + e.ORIGIN + e.OPTIONAL_PATH_PART + "/calluser/?\\?(.+)$",
                "i"
            ),
            oa = /^https?:\/\/wa\.me\/call\?\\?(.+)$/i,
            K = [f, E, J, aa],
            L = [F, ba],
            M = [I, ea],
            N = [G, H, ca, da],
            pa = [].concat(K, L, M, N);
        function O(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a.match(b[c]);
                if (d) return d;
            }
        }
        f = function (a) {
            return O(a, pa) != null;
        };
        var qa = new RegExp(
            "^" + e.ORIGIN + e.OPTIONAL_NON_CAPTURING_PATH_PART + "/push/",
            "i"
        ),
            P = /^https?:\/\/wa\.me\/c\/([0-9]{0,20})(?:\?.*)?$/i,
            Q = /^whatsapp:\/\/catalog\/([0-9]{0,20})(?:\?.*)?$/i,
            R = new RegExp(
                "^" +
                e.ORIGIN +
                e.OPTIONAL_NON_CAPTURING_PATH_PART +
                "/catalog/([0-9]{0,20})?$",
                "i"
            ),
            S = new RegExp(
                "^" +
                e.ORIGIN +
                e.OPTIONAL_NON_CAPTURING_PATH_PART +
                "/catalog/([0-9]{0,20})(/?.*)?$",
                "i"
            );
        E = function (a) {
            return [P, Q, R, S].some(function (b) {
                return a.match(b);
            });
        };
        var ra = /^https?:\/\/wa\.me\/favorites\/?(?:\\?.*)?$/i,
            sa = new RegExp(
                "^" +
                e.ORIGIN +
                e.OPTIONAL_NON_CAPTURING_PATH_PART +
                "/favorites/?(?:\\?.*)?$",
                "i"
            );
        function ta(a) {
            var b = a.match(z);
            if (b) {
                var c = y(b[2], a);
                if (c) {
                    c.url = b[1] || "/";
                    return c;
                }
            }
            b = a.match(A);
            if (b) return y(b[1], a);
            b = a.match(B);
            if (b) return y(b[1], a);
            b = a.match(C);
            c = a.match(D);
            if (b) {
                var d;
                b[1]
                    ? (d = { phone: b[1] + "@c.us" })
                    : c && c[1] && !c[2] && (d = { url: a, customURL: c[1] });
                if (b[2]) {
                    c = y(b[2], a);
                    c && (d = babelHelpers["extends"]({}, d, {}, c));
                }
                if (d) {
                    b = T(a);
                    b != null && (d.partnertoken = b);
                }
                return d;
            }
        }
        function T(a) {
            var b = d("WAWebExternalCtxConfig").getExternalCtxUrlParamNames();
            a = new URL(a);
            for (b of b) {
                var c = a.searchParams.get(b);
                if (c != null) return c;
            }
            return null;
        }
        var ua = /^https?:\/\/wa\.me\/community\/create\/?(\?(.*))?$/i;
        function va(a) {
            a = a.match(ua);
            if (a) {
                a = new (c("WAWebPonyfillsUrlSearchParams"))(a[1]).get("entrypoint");
                return { url: "/", entrypointType: a };
            }
        }
        function U(a, b) {
            a = { catalogOwnerJid: a[1] + "@s.whatsapp.net" };
            b = T(b);
            b != null && (a.partnertoken = b);
            return a;
        }
        function V(a) {
            a = new (c("WAWebPonyfillsUrlSearchParams"))(a);
            var b = a.get(n);
            a = a.get(o);
            if (a == null && b == null) return null;
            var d = {};
            b != null && (d.source = b);
            a != null && (d.campaign = a);
            return d;
        }
        function wa(a) {
            var b = a.match(P) || a.match(Q);
            if (b) return U(b, a);
            b = a.match(R);
            if (b) return babelHelpers["extends"]({}, U(b, a), { url: "/" });
            b = a.match(S);
            if (b) {
                var c = V(b[2]);
                return babelHelpers["extends"](
                    {},
                    U(b, a),
                    {},
                    c != null && { utm: c },
                    { url: "/" }
                );
            }
        }
        function W(a, b) {
            a = { productId: a[1], businessOwnerJid: a[2] + "@s.whatsapp.net" };
            b = T(b);
            b != null && (a.partnertoken = b);
            return a;
        }
        function xa(a) {
            var b = O(a, K);
            if (b) return W(b, a);
            b = O(a, L);
            if (b) return babelHelpers["extends"]({}, W(b, a), { url: "/" });
            b = O(a, M);
            if (b) {
                var c = V(b[3]);
                return babelHelpers["extends"](
                    {},
                    W(b, a),
                    {},
                    c != null && { utm: c },
                    { url: "/" }
                );
            }
            b = O(a, N);
            if (b) {
                c = V(b[3]);
                return babelHelpers["extends"](
                    {},
                    W(b, a),
                    {},
                    c != null && { utm: c }
                );
            }
        }
        function ya(a) {
            a = a.match(qa);
            if (a) return { url: "/" };
        }
        function X(a) {
            a = new (c("WAWebPonyfillsUrlSearchParams"))(a);
            var b = a.get("wa_campaign_id");
            if (b == null || b === "") return;
            a = a.get("wa_campaign_type");
            return a == null || a === "" ? null : { campaignId: b, campaignType: a };
        }
        function za(a) {
            a = a.match(ga);
            if (a) return X(a[1]);
        }
        function Aa(a) {
            a = a.match(fa);
            if (a) return X(a[1]);
        }
        function Ba(a) {
            var b = a.match(ja);
            if (b) {
                b = X(b[1]);
                if ((b == null ? void 0 : b.campaignType) === "chat_psa")
                    return {
                        url: d("WAWebFaqUrl").getWhatsappUsePhoneFallbackUrl(),
                        deepLinkType: d("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                            .DEEP_LINK_CATALOG_SETTINGS,
                    };
            }
            b = a.match(ka);
            if (b) {
                a = X(b[1]);
                if ((a == null ? void 0 : a.campaignType) === "chat_psa")
                    return {
                        url: d("WAWebFaqUrl").getWhatsappUsePhoneFallbackUrl(),
                        deepLinkType: d("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
                            .DEEP_LINK_BOOST_CATALOG,
                    };
            }
        }
        function Ca(a) {
            return d("PaymentLink").getPaymentLinkUrlMetaData(a);
        }
        var Da = /^https?:\/\/wa\.me\/stickerpack\/meta-avatar$/i,
            Ea = /^https?:\/\/wa\.me\/edit-profile-picture$/i,
            Y = /^https?:\/\/wa\.me\/stickerpack\/(?!meta-avatar)/i;
        function Z(a) {
            a = a.match(Y);
            return a != null;
        }
        function Fa(a) {
            a = a.match(Da);
            if (a) return { url: d("WAWebFaqUrl").getAvatarFaqUrl() };
        }
        var Ga = /^https?:\/\/wa\.me\/ais\/(\d{14,20})\/?(\?.*)?$/i,
            Ha = new RegExp(
                "^" +
                e.ORIGIN +
                e.OPTIONAL_NON_CAPTURING_PATH_PART +
                "/ais/(\\d{14,20})/?(\\?.*)?$",
                "i"
            );
        function Ia(a) {
            var b;
            a = (
                (b = (b = a.match(Ga)) != null ? b : a.match(Ha)) != null ? b : []
            )[1];
            return a
                ? { resultType: d("WAWebApi").APICmd.UGC_BOT, data: { fbid: a } }
                : null;
        }
        function Ja(a) {
            if (Z(a)) {
                a = new URL(a);
                a = a.pathname.split("/");
                a[0];
                a[1];
                a = a[2];
                return a;
            }
        }
        function Ka(a) {
            var b = a.match(Y);
            if (b) {
                b = Ja(a);
                return { resultType: "STICKER_PACK", data: { url: b } };
            }
        }
        var La = /^https:\/\/call\.whatsapp\.com\/(video|voice)\/(\w+)(?:\?.*)?$/i;
        function $(a) {
            a = a.match(La);
            if (a)
                return {
                    resultType: "CALL_LINK",
                    data: { token: a[2], callType: a[1] },
                };
        }
        function a(a) {
            return $(a) != null;
        }
        function b(a) {
            if (typeof a !== "string")
                return { resultType: d("WAWebApi").APICmd.INVALID };
            var b = m(a);
            if (b) return { resultType: d("WAWebApi").APICmd.GROUP_INVITE, data: b };
            b = wa(a);
            if (b) return { resultType: d("WAWebApi").APICmd.CATALOG, data: b };
            b = xa(a);
            if (b) return { resultType: d("WAWebApi").APICmd.PRODUCT, data: b };
            b = va(a);
            if (b)
                return { resultType: d("WAWebApi").APICmd.CREATE_COMMUNITY, data: b };
            b = Fa(a);
            if (b)
                return { resultType: d("WAWebApi").APICmd.AVATAR_STICKERPACK, data: b };
            b = d("WAWebStatusApiParse").parseStatusPostFeatureLink(a);
            if (b) return { resultType: d("WAWebApi").APICmd.STATUS_POST, data: b };
            b = d("WAWebBroadcastApiParse").parseBroadcastFeatureLink(a);
            if (b) return { resultType: d("WAWebApi").APICmd.BROADCAST, data: b };
            b = d("WAWebNewsletterApiParse").parseNewsletter(a);
            if (b) return { resultType: d("WAWebApi").APICmd.NEWSLETTER, data: b };
            if (
                [la, ma].some(function (b) {
                    return a.match(b);
                })
            )
                return { resultType: d("WAWebApi").APICmd.MESSAGE_YOURSELF };
            if (
                [ra, sa].some(function (b) {
                    return a.match(b);
                })
            )
                return {
                    resultType: d("WAWebApi").APICmd.FAVORITES,
                    data: { url: "/" },
                };
            b = Aa(a);
            if (b != null)
                return { resultType: d("WAWebApi").APICmd.OPEN_CATALOG, data: b };
            b = Ba(a);
            if (b != null)
                return {
                    resultType: d("WAWebApi").APICmd.CATALOG_LINKING_CHAT_PSA,
                    data: b,
                };
            b = Ka(a);
            if (b) {
                return {
                    resultType: d("WAWebApi").APICmd.STICKER_PACK,
                    data: { url: (b = b.data.url) != null ? b : "" },
                };
            }
            b = ta(a);
            if (b) return { resultType: d("WAWebApi").APICmd.MSG_SEND, data: b };
            b = ya(a);
            if (b)
                return { resultType: d("WAWebApi").APICmd.PUSH_NOTIFICATION, data: b };
            b = za(a);
            if (b != null)
                return { resultType: d("WAWebApi").APICmd.ADVERTISE, data: b };
            if (d("WAWebVoipGatingUtils").callLinksEnabledOnWindowsHybrid()) {
                b = $(a);
                if (b) return b;
            }
            if (a.match(ha))
                return {
                    resultType: d("WAWebApi").APICmd.MANAGE_ADS,
                    trigger: "chatListBanner",
                };
            if (a.match(ia))
                return { resultType: d("WAWebApi").APICmd.META_VERIFIED };
            if (a.match(Ea))
                return { resultType: d("WAWebApi").APICmd.EDIT_PROFILE_PICTURE };
            if (
                d("WAWebABProps").getABPropConfigValue(
                    "wa_web_calling_deep_link_error"
                ) &&
                [na, oa].some(function (b) {
                    return a.match(b);
                })
            )
                return {
                    resultType: d("WAWebApi").APICmd.CALL_USER,
                    data: { url: "/" },
                };
            b = Ca(a);
            if (b != null)
                return { resultType: d("WAWebApi").APICmd.PAYMENT_LINK, data: b };
            b = Ia(a);
            return b ? b : { resultType: d("WAWebApi").APICmd.INVALID };
        }
        g.parseConversionData = s;
        g.parseCTWADeeplinkToken = w;
        g.matchProductUrl = f;
        g.matchCatalogUrl = E;
        g.isStickerPackURL = Z;
        g.parseCallLink = $;
        g.isValidCallLink = a;
        g.parseAPICmd = b;
    },
    98
);