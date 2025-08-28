__d(
    "WAWebFrontendMsgGetters",
    [
        "WABidi",
        "WALogger",
        "WANullthrows",
        "WAWebAck",
        "WAWebAnimatedEmojiAssetLoader",
        "WAWebAnimatedEmojiGatingUtils",
        "WAWebBizSystemMsgSubtypes",
        "WAWebChatCollection",
        "WAWebChatGroupUtils",
        "WAWebCommonMsgUtils",
        "WAWebEmoji",
        "WAWebFormatNfmText",
        "WAWebGetters",
        "WAWebGettersCaches",
        "WAWebL10N",
        "WAWebMessageAssociation.flow",
        "WAWebMsgDataUtils",
        "WAWebMsgGetters",
        "WAWebMsgKey",
        "WAWebMsgModelUtils",
        "WAWebMsgType",
        "WAWebNewsletterCollection",
        "WAWebNewsletterMembershipUtil",
        "WAWebProductCatalogCatalogConstants",
        "WAWebProtobufsE2E.pb",
        "WAWebPtvGatingUtils",
        "WAWebTemplateButtonSubtype",
        "WAWebUserPrefsMeUser",
        "lodash",
    ],
    function (a, b, c, d, e, f, g) {
        function h() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "getChat: unexpected null chat",
            ]);
            h = function () {
                return a;
            };
            return a;
        }
        function i() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "getChat: msgKey = ",
                ", type = ",
                "",
            ]);
            i = function () {
                return a;
            };
            return a;
        }
        e = d("WAWebGetters").createGetterFactories({
            root: (b = d("WAWebMsgGetters")).getMsgUnsafe,
            createCache: d("WAWebGettersCaches").createFrontendMessagesCache,
        });
        f = e.field;
        var j = e.computed;
        e = e.clearCacheFor;
        e = e;
        var k = j(
            function (a) {
                var b = a[0],
                    c = a[1],
                    e = a[2];
                a = a[3];
                return d("WAWebMsgModelUtils").typeIsMms({
                    type: b,
                    subtype: c,
                    headerType: e,
                    interactiveHeader: a,
                });
            },
            [b.getType, b.getSubtype, b.getHeaderType, b.getInteractiveHeader]
        ),
            l = j(
                function (a) {
                    var b = a[0],
                        c = a[1];
                    a = a[2];
                    return b != null && b < d("WAWebAck").ACK.SENT && c && a;
                },
                [b.getAck, k, b.getIsSentByMe]
            ),
            m = j(
                function (a) {
                    var b = a[0],
                        c = a[1];
                    a = a[2];
                    b = d("WAWebMsgDataUtils").eventTypeFromMsgType(b);
                    if (!a) return d("WAWebCommonMsgUtils").EventType.IGNORE;
                    return c
                        ? b === d("WAWebCommonMsgUtils").EventType.IGNORE
                            ? d("WAWebCommonMsgUtils").EventType.IGNORE
                            : d("WAWebCommonMsgUtils").EventType.NOTEWORTHY
                        : b;
                },
                [b.getMsgUnsafe, b.getInvis, b.getIsNewMsg]
            ),
            n = function (a) {
                switch (a.type) {
                    case "interactive":
                        return d("WAWebMsgGetters").getNativeFlowName(a) != null
                            ? d("WAWebFormatNfmText").formatNFMText(a)
                            : d("WAWebMsgGetters").getCaption(a);
                    case "native_flow":
                        return d("WAWebFormatNfmText").formatNFMText(a);
                }
                return null;
            },
            o = j(
                function (a) {
                    var b = a[0],
                        e = a[1],
                        f = a[2],
                        g = a[3],
                        h = a[4],
                        i = a[5],
                        j = a[6],
                        k = a[7],
                        l = a[8],
                        m = a[9],
                        o = a[10],
                        p = a[11],
                        q = a[12],
                        r = a[13];
                    a = a[14];
                    if (m || o) return e === d("WAWebMsgType").MSG_TYPE.CHAT ? g : h;
                    switch (e) {
                        case "chat":
                        case "interactive_response":
                        case "automated_greeting_message":
                            return g;
                        case "image":
                        case "video":
                        case "ptv":
                        case "document":
                        case "sticker-pack":
                            return h;
                        case "location":
                            return j ? i : void 0;
                        case "payment":
                            return k == null ? void 0 : k.body;
                        case "groups_v4_invite":
                            return i;
                        case "list":
                            return p == null ? void 0 : p.description;
                        case "product":
                            return c("lodash").truncate(f, {
                                length: d("WAWebProductCatalogCatalogConstants")
                                    .MAX_REPLY_PRODUCT_TITLE_LENGTH,
                            });
                        case "hsm":
                            return g;
                        case "template_button_reply":
                            return g;
                        case "interactive":
                            return q != null ? n(b) : h;
                        case "native_flow":
                            return n(b);
                        case "poll_creation":
                        case "poll_result_snapshot":
                            return l;
                        case "newsletter_admin_invite":
                            return r == null ? void 0 : r.inviteMessage;
                        case "event_creation":
                            return a;
                        default:
                            e;
                            return void 0;
                    }
                },
                [
                    b.getMsgUnsafe,
                    b.getType,
                    b.getTitle,
                    b.getBody,
                    b.getCaption,
                    b.getComment,
                    b.getIsLive,
                    b.getPaymentNoteMsg,
                    b.getPollName,
                    b.getIsFromTemplate,
                    b.getIsDynamicReplyButtonsMsg,
                    b.getList,
                    b.getNativeFlowName,
                    b.getNewsletterAdminInviteInfo,
                    b.getEventName,
                ]
            ),
            p = j(
                function (a) {
                    a = a[0];
                    a = a == null ? void 0 : a.newsletterId;
                    if (a == null) return !1;
                    a =
                        (a = c("WAWebNewsletterCollection").get(a)) == null
                            ? void 0
                            : a.newsletterMetadata;
                    return (
                        d("WAWebNewsletterMembershipUtil").iAmAdmin(a) &&
                        !d("WAWebNewsletterMembershipUtil").iAmOwner(a)
                    );
                },
                [b.getNewsletterAdminInviteInfo]
            ),
            q = j(
                function (a) {
                    var b = a[0],
                        c = a[1],
                        e = a[2];
                    a = a[3];
                    if (b === d("WAWebMsgType").MSG_TYPE.VCARD)
                        return c ? d("WABidi").dir(c) : void 0;
                    if (e == null) return;
                    b = (a == null ? void 0 : a.length) ? e.replace(/@\d+@g.us/, "") : e;
                    c = d("WABidi").dir(b);
                    return c;
                },
                [b.getType, b.getSubtype, o, b.getGroupMentions]
            ),
            r = j(
                function (a) {
                    a = a[0];
                    return a === "rtl" || (a === void 0 && c("WAWebL10N").isRTL());
                },
                [q]
            ),
            s = j(
                function (a) {
                    var b = a[0],
                        c = a[1];
                    a = a[2];
                    return b === d("WAWebMsgType").MSG_TYPE.VCARD
                        ? c
                            ? d("WABidi").dir(c) === "rtl"
                            : !1
                        : !!a && d("WABidi").dir(a) === "rtl";
                },
                [b.getType, b.getSubtype, o]
            ),
            t = j(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return b != null || a != null;
                },
                [o, b.getFooter]
            ),
            u = function (a) {
                return d("WAWebMsgGetters").getIsNewsletterMsg(a)
                    ? c("WAWebNewsletterCollection")
                    : d("WAWebChatCollection").ChatCollection;
            };
        function a(a) {
            var b = d("WAWebChatCollection").ChatCollection;
            d("WAWebMsgGetters").getIsNewsletterMsg(a) &&
                (b = c("WAWebNewsletterCollection"));
            return c("WANullthrows")(b.get(c("WAWebMsgKey").from(a.id).remote));
        }
        var v = function (a) {
            var b = u(a).get(c("WAWebMsgKey").from(a.id).remote);
            b == null &&
                (d("WALogger").LOG(i(), a.id.toString(), a.type),
                    d("WALogger").ERROR(h()).sendLogs("get-chat-unexpected-null"));
            return b;
        },
            w = function (a) {
                return u(a).get(c("WAWebMsgKey").from(a.id).remote);
            },
            x = f("carouselCards"),
            y = j(
                function (a) {
                    a = a[0];
                    return a == null ? null : a.slice();
                },
                [x]
            ),
            z = f("buttons"),
            A = j(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return b && a != null && a.length > 0;
                },
                [b.getIsFromTemplate, z]
            ),
            B = j(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    if (!b) return !1;
                    if (a == null) return !1;
                    b = a.at(0);
                    return b == null
                        ? !1
                        : b.subtype ===
                        d("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE
                            .QUICK_REPLY;
                },
                [A, z]
            ),
            C = j(
                function (a) {
                    a = a[0];
                    return a;
                },
                [b.getMsgUnsafe]
            ),
            D = j(
                function (a) {
                    a = a[0];
                    return a.type === d("WAWebMsgType").MSG_TYPE.PRODUCT &&
                        a.id &&
                        a.id.id.startsWith(
                            d("WAWebBizSystemMsgSubtypes").PRODUCT_INQUIRY_TYPE
                        )
                        ? a
                        : null;
                },
                [C, b.getType, b.getId]
            ),
            E = j(
                function (a) {
                    a = a[0];
                    switch (a.type) {
                        case d("WAWebMsgType").MSG_TYPE.GP2:
                            return a;
                        default:
                            return null;
                    }
                },
                [C, b.getType]
            ),
            F = j(
                function (a) {
                    a = a[0];
                    return a.type === d("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION
                        ? a
                        : null;
                },
                [C, b.getType]
            ),
            G = j(
                function (a) {
                    a = a[0];
                    return a.type === "product" ? a : null;
                },
                [C, b.getType]
            ),
            H = j(
                function (a) {
                    a = a[0];
                    return a.type === d("WAWebMsgType").MSG_TYPE.REVOKED ? a : null;
                },
                [C, b.getType]
            ),
            I = f("associationType"),
            J = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    var c = a[2],
                        e = a[3];
                    a[4];
                    var f = a[5];
                    a[6];
                    var g = a[7],
                        h = a[8],
                        i = a[9];
                    a = a[10];
                    return (b.type === d("WAWebMsgType").MSG_TYPE.IMAGE ||
                        (b.type === d("WAWebMsgType").MSG_TYPE.VIDEO && b.isGif !== !0)) &&
                        !c &&
                        !f &&
                        !(
                            h !==
                            d("WAWebMessageAssociation.flow").MessageAssociationType
                                .MEDIA_ALBUM &&
                            h !==
                            d("WAWebMessageAssociation.flow").MessageAssociationType
                                .MEDIA_POLL &&
                            (e != null || g)
                        ) &&
                        !i &&
                        !a
                        ? b
                        : null;
                },
                [
                    C,
                    b.getType,
                    b.getIsNotification,
                    b.getCaption,
                    b.getIsForwarded,
                    H,
                    b.getIsGif,
                    b.getQuotedMsg,
                    I,
                    b.getCtwaContext,
                    b.getIsViewOnce,
                ]
            ),
            K = j(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return d("WAWebMsgModelUtils").notRefiningTypeIsUrl({
                        type: b,
                        subtype: a,
                    });
                },
                [b.getType, b.getSubtype]
            ),
            L = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    var c = a[2];
                    a = a[3];
                    if (c) return null;
                    switch (b.type) {
                        case d("WAWebMsgType").MSG_TYPE.IMAGE:
                        case d("WAWebMsgType").MSG_TYPE.STICKER:
                        case d("WAWebMsgType").MSG_TYPE.AUDIO:
                        case d("WAWebMsgType").MSG_TYPE.PTT:
                        case d("WAWebMsgType").MSG_TYPE.VIDEO:
                        case d("WAWebMsgType").MSG_TYPE.PTV:
                        case d("WAWebMsgType").MSG_TYPE.DOCUMENT:
                            return b;
                    }
                    return a ? b : null;
                },
                [C, b.getType, b.getIsViewOnce, K]
            ),
            M = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    var c = a[2],
                        e = a[3],
                        f = a[4],
                        g = a[5];
                    a = a[6];
                    var h = v(b.unsafe());
                    return b.type === d("WAWebMsgType").MSG_TYPE.STICKER &&
                        !c &&
                        !e &&
                        !f &&
                        !g &&
                        !a &&
                        !d("WAWebChatGroupUtils").isCommunityAnnouncementGroup(h)
                        ? b
                        : null;
                },
                [
                    C,
                    b.getType,
                    b.getIsNotification,
                    H,
                    b.getQuotedMsg,
                    b.getCtwaContext,
                    b.getIsNewsletterMsg,
                ]
            ),
            N = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    return b.type === d("WAWebMsgType").MSG_TYPE.DOCUMENT ? b : null;
                },
                [C, b.getType]
            ),
            O = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    return b.type === d("WAWebMsgType").MSG_TYPE.IMAGE ? b : null;
                },
                [C, b.getType]
            ),
            P = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    return b.type === d("WAWebMsgType").MSG_TYPE.VIDEO ? b : null;
                },
                [C, b.getType]
            ),
            Q = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    return b.type === d("WAWebMsgType").MSG_TYPE.AUDIO ? b : null;
                },
                [C, b.getType]
            ),
            R = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    return b.type === d("WAWebMsgType").MSG_TYPE.PTT ? b : null;
                },
                [C, b.getType]
            ),
            S = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    return b.type === d("WAWebMsgType").MSG_TYPE.PTV ? b : null;
                },
                [C, b.getType]
            ),
            T = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    return b.type === d("WAWebMsgType").MSG_TYPE.POLL_CREATION ? b : null;
                },
                [C, b.getType]
            ),
            U = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    return b.type === d("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
                        b.type === d("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT
                        ? b
                        : null;
                },
                [C, b.getType]
            ),
            V = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    return b.type === d("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT
                        ? b
                        : null;
                },
                [C, b.getType]
            ),
            aa = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    return b.type === d("WAWebMsgType").MSG_TYPE.EVENT_CREATION
                        ? b
                        : null;
                },
                [C, b.getType]
            ),
            ba = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    return b.type === d("WAWebMsgType").MSG_TYPE.ALBUM ? b : null;
                },
                [C, b.getType]
            ),
            ca = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    return b.type === d("WAWebMsgType").MSG_TYPE.CALL_LOG ? b : null;
                },
                [C, b.getType]
            ),
            da = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    return b.type === d("WAWebMsgType").MSG_TYPE.POLL_UPDATE ? b : null;
                },
                [C, b.getType]
            ),
            ea = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    return d("WAWebMsgModelUtils").typeIsMms(b) ? b : null;
                },
                [C, b.getType]
            ),
            fa = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    a[2];
                    return d("WAWebMsgModelUtils").typeIsUrl(b) ? b : null;
                },
                [C, b.getType, b.getSubtype]
            ),
            W = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    return b.type === d("WAWebMsgType").MSG_TYPE.IMAGE ||
                        b.type === d("WAWebMsgType").MSG_TYPE.VIDEO
                        ? b
                        : null;
                },
                [C, b.getType]
            ),
            ga = j(
                function (a) {
                    a[0];
                    var b = a[1],
                        c = a[2];
                    a = a[3];
                    return (b != null || c != null) && a ? (b != null ? b : c) : null;
                },
                [b.getType, W, R, b.getIsViewOnce]
            ),
            ha = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    var c = a[2];
                    a = a[3];
                    if (b.type === d("WAWebMsgType").MSG_TYPE.PTT) return b;
                    return b.type === d("WAWebMsgType").MSG_TYPE.AUDIO && a && c != null
                        ? b
                        : null;
                },
                [C, b.getType, b.getWaveform, b.getIsOpus]
            ),
            X = f("senderObj"),
            ia = f("mediaData"),
            ja = f("replyButtons"),
            ka = f("pendingDeleteForMe", { default: !1 });
        f = f("botPluginType");
        var la = j(
            function (a) {
                var b = a[0],
                    c = a[1];
                a = a[2];
                return (a == null
                    ? void 0
                    : (a = a.id) == null
                        ? void 0
                        : a.isBot()) &&
                    (c ===
                        d("WAWebProtobufsE2E.pb").BotPluginMetadata$PluginType.SEARCH ||
                        c ===
                        d("WAWebProtobufsE2E.pb").BotPluginMetadata$PluginType.REELS)
                    ? b
                    : null;
            },
            [C, f, X]
        ),
            ma = j(
                function (a) {
                    var b = a[0];
                    a[1];
                    a = a[2];
                    return b.type === d("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
                        a != null
                        ? b
                        : null;
                },
                [C, b.getType, b.getRichResponse]
            ),
            na = j(
                function (a) {
                    a = a[0];
                    return d("WAWebMsgModelUtils").getCelebrationAnimationType(a);
                },
                [o]
            ),
            Y = j(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return d("WAWebMsgModelUtils").isAnimatedEmoji(b, a);
                },
                [b.getBody, b.getType]
            ),
            Z = j(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return d("WAWebMsgModelUtils").isSingleEmojiMessageText(b, a);
                },
                [b.getBody, b.getType]
            ),
            $ = j(
                function (a) {
                    var b = a[0],
                        c = a[1];
                    a = a[2];
                    a =
                        d("WAWebAnimatedEmojiGatingUtils").isStaticSingleEmojiUIEnabled() &&
                        a != null;
                    return b === d("WAWebMsgType").MSG_TYPE.CHAT && (c || a);
                },
                [b.getType, Y, Z]
            ),
            oa = j(
                function (a) {
                    var b = a[0],
                        c = a[1],
                        e = a[2];
                    a = a[3];
                    switch (b) {
                        case d("WAWebMsgType").MSG_TYPE.STICKER:
                            return Boolean(!e && !c);
                        case d("WAWebMsgType").MSG_TYPE.CHAT:
                            return !e && a;
                        case d("WAWebMsgType").MSG_TYPE.PTV:
                            return d("WAWebPtvGatingUtils").isPtvReceivingEnabled();
                        default:
                            return !1;
                    }
                },
                [b.getType, b.getCtwaContext, b.getQuotedMsg, $]
            ),
            pa = j(
                function (a) {
                    a = a[0];
                    if (a == null) return;
                    a = d("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(a);
                    if (a == null) return;
                    return d("WAWebAnimatedEmojiAssetLoader").getAnimatedEmojiAsset(a);
                },
                [b.getBody]
            ),
            qa = j(
                function (a) {
                    var b = a[0],
                        c = a[1],
                        d = a[2],
                        e = a[3];
                    a = a[4];
                    var f;
                    b && (f = c ? e.remote : d == null ? void 0 : d.newsletterId);
                    return (b = f) != null ? b : a.id;
                },
                [
                    b.getHasOriginatedFromNewsletter,
                    b.getIsNewsletterMsg,
                    b.getForwardedNewsletterMessageInfo,
                    b.getId,
                    X,
                ]
            ),
            ra = j(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return !b && d("WAWebUserPrefsMeUser").isMeAccount(a);
                },
                [b.getIsNewsletterMsg, b.getSender]
            );
        j = j(
            function (a) {
                var b = a[0],
                    c = a[1];
                a = a[2];
                b = w(b.unsafe());
                var d;
                c && (d = b == null ? void 0 : b.contact);
                return (c = d) != null ? c : a;
            },
            [C, b.getIsNewsletterMsg, X]
        );
        g.clearFrontendMsgGetterCacheFor = e;
        g.getIsMms = k;
        g.getIsUnsentMedia = l;
        g.getEventType = m;
        g.getText = o;
        g.getIsNewsletterInviteAccepted = p;
        g.getDir = q;
        g.getIsRTL = r;
        g.getRtl = s;
        g.getHasBodyOrFooter = t;
        g.getChatCollection = u;
        g.getCurrentChat = a;
        g.getChat = v;
        g.getMaybeChat = w;
        g.getCarouselCardsCollection = x;
        g.getCarouselCards = y;
        g.getButtons = z;
        g.getHasTemplateButtons = A;
        g.getIsQuickReply = B;
        g.getSafeMsg = C;
        g.getAsProductInquiry = D;
        g.getAsGroupNotification = E;
        g.getAsBroadcastNotification = F;
        g.getAsProduct = G;
        g.getAsRevoked = H;
        g.getAssociationType = I;
        g.getAsAlbumAsset = J;
        g.getIsUrlMessage = K;
        g.getAsAutoDownloadableMedia = L;
        g.getAsGroupedSticker = M;
        g.getAsDoc = N;
        g.getAsImage = O;
        g.getAsVideo = P;
        g.getAsAudio = Q;
        g.getAsPtt = R;
        g.getAsPtv = S;
        g.getAsPollCreation = T;
        g.getAsPoll = U;
        g.getAsPollResultSnapshot = V;
        g.getAsEventCreation = aa;
        g.getAsAlbum = ba;
        g.getAsCallLog = ca;
        g.getAsPollUpdate = da;
        g.getAsMms = ea;
        g.getAsUrl = fa;
        g.getAsVisualMedia = W;
        g.getAsViewOnce = ga;
        g.getAsPttLike = ha;
        g.getSenderObj = X;
        g.getMediaData = ia;
        g.getReplyButtons = ja;
        g.getPendingDeleteForMe = ka;
        g.getBotPluginType = f;
        g.getAsBotPluginCarouselMsg = la;
        g.getAsRichResponse = ma;
        g.getCelebrationAnimationCandidate = na;
        g.getIsAnimatedEmoji = Y;
        g.getIsSingleEmoji = Z;
        g.getIsTransparentMsgEmoji = $;
        g.getIsTransparentMsg = oa;
        g.getJSONAssetForAnimatedEmoji = pa;
        g.getMsgSenderId = qa;
        g.getShouldDisplaySelf = ra;
        g.getSenderForReplyMsg = j;
    },
    98
);