__d(
    "WAWebMsgGetters",
    [
        "WABase64",
        "WALogger",
        "WAPhoneFindCC",
        "WATimeUtils",
        "WATypeUtils",
        "WAWebAck",
        "WAWebBizSystemMsgSubtypes",
        "WAWebBotTypes",
        "WAWebBusinessHSMTypes",
        "WAWebCallLogMsgData.flow",
        "WAWebCommonMsgUtils",
        "WAWebConstantsDeprecated",
        "WAWebEphemeralConstants",
        "WAWebEphemeralityWAMUtils",
        "WAWebGetters",
        "WAWebGettersCaches",
        "WAWebInteractiveMessageHeaderMediaType",
        "WAWebMimeTypes",
        "WAWebMsgType",
        "WAWebMusicParsingUtils",
        "WAWebNewsletterIsNewsletterMsg",
        "WAWebPollCreationUtils",
        "WAWebProtobufsE2E.pb",
        "WAWebUserPrefsMeUser",
        "WAWebVcardParsingUtils",
        "WAWebViewMode.flow",
        "WAWebViewModeUtils",
        "WAWebWamEnumEditType",
        "WAWebWid",
        "WAWebWidFactory",
        "gkx",
        "isStringNullOrEmpty",
    ],
    function (a, b, c, d, e, f, g) {
        function h() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "Msg: could not derive isInternational as some data is missing",
            ]);
            h = function () {
                return a;
            };
            return a;
        }
        function i() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "Unexpected non-wid for originalSelfAuthorOrSender; value=",
                "; typeof=",
                "; msg.type=",
                "",
            ]);
            i = function () {
                return a;
            };
            return a;
        }
        function j() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "Unexpected non-wid for originalSelfAuthorOrSender; typeof=",
                "; msg.type=",
                "",
            ]);
            j = function () {
                return a;
            };
            return a;
        }
        a = d("WAWebGetters").createGetterFactories({
            createCache: d("WAWebGettersCaches").createMessagesCache,
        });
        b = a.field;
        e = a.computed;
        f = a.unsafeIdentityGetter;
        a = a.clearCacheFor;
        a = a;
        f = f;
        function k(a) {
            if (a instanceof c("WAWebWid")) return a;
            return a.user != null
                ? d("WAWebWidFactory").createUserWid(a.user, a.server)
                : a;
        }
        var l = b("type"),
            m = b("subtype"),
            n = b("id"),
            o = b("to"),
            p = b("from"),
            q = b("broadcastId"),
            aa = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return a != null ? a : b.remote;
                },
                [n, q]
            ),
            r = b("viewMode"),
            s = b("author"),
            t = b("ack"),
            ba = b("viewCount"),
            ca = b("viewed"),
            u = b("originalSelfAuthor"),
            v = b("kicState"),
            da = b("kicTimestampMs"),
            w = b("list"),
            x = b("latestEditMsgKey"),
            ea = b("errorCode"),
            y = b("ephemeralDuration"),
            fa = b("ephemeralSettingUser"),
            z = b("t", { default: 0 }),
            A = b("backgroundColor"),
            ga = b("headerType"),
            B = b("interactiveHeader"),
            ha = b("interactiveType"),
            ia = b("footer"),
            C = b("mentionedJidList"),
            ja = b("groupMentions", {
                getDefault: function () {
                    return [];
                },
            }),
            D = b("quotedMsg"),
            ka = b("quotedRemoteJid"),
            E = b("quotedParticipant"),
            F = b("rcat"),
            G = b("isViewOnce", { default: !1 }),
            la = b("isGif", { default: !1 }),
            ma = b("gifAttribution", {
                default: d("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution
                    .NONE,
            }),
            na = b("ctwaContext"),
            H = b("mimetype"),
            oa = b("filehash"),
            pa = b("deprecatedMms3Url"),
            qa = b("waveform"),
            I = b("disappearingModeInitiator"),
            J = b("disappearingModeTrigger"),
            ra = b("disappearingModeInitiatedByMe"),
            sa = b("activeBotMsgStreamingInProgress"),
            K = b("bizBotType"),
            ta = b("botTargetSenderJid"),
            ua = b("isSupportAIMessage"),
            va = b("lastBotEditBodyLength"),
            wa = b("botEditType"),
            xa = b("forwardedNewsletterMessageInfo"),
            ya = b("newsletterAdminInviteInfo"),
            za = b("bizSource");
        function Aa(a) {
            return a === "smb_promo";
        }
        var Ba = e(
            function (a) {
                a = a[0];
                return Aa(a);
            },
            [za]
        ),
            Ca = e(
                function (a) {
                    a = a[0];
                    return a != null;
                },
                [D]
            ),
            Da = e(
                function (a) {
                    a = a[0];
                    return d("WAWebMimeTypes").isOpus(a);
                },
                [H]
            ),
            Ea = e(
                function (a) {
                    a = a[0];
                    return a == null ? null : d("WABase64").encodeB64UrlSafe(a, !0);
                },
                [F]
            ),
            Fa = e(
                function (a) {
                    a = a[0];
                    return a == null
                        ? !1
                        : a.some(function (a) {
                            return d("WAWebUserPrefsMeUser").isMeAccount(k(a));
                        });
                },
                [C]
            ),
            Ga = b("local", { default: !1 }),
            L = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return b && a ? d("WAWebUserPrefsMeUser").isMeAccount(k(a)) : !1;
                },
                [D, E]
            );
        L = e(
            function (a) {
                var b = a[0];
                a = a[1];
                return b || a;
            },
            [Fa, L]
        );
        var Ha = b("botPluginReferenceIndex"),
            Ia = e(
                function (a) {
                    var b = a[0],
                        c = a[1],
                        e = a[2];
                    a = a[3];
                    if (c != null) return !1;
                    if (
                        !d("WAWebViewModeUtils").isViewModeVisibleInSurface(
                            d("WAWebViewMode.flow").ViewModeSurface.CHAT,
                            a
                        )
                    )
                        return !1;
                    switch (b) {
                        case "interactive":
                            return e;
                        case "chat":
                        case "image":
                        case "video":
                        case "ptv":
                        case "audio":
                        case "ptt":
                        case "document":
                        case "vcard":
                        case "location":
                        case "ciphertext":
                        case "oversized":
                        case "multi_vcard":
                        case "sticker":
                        case "status":
                        case "product":
                        case "groups_v4_invite":
                        case "poll_creation":
                        case "poll_result_snapshot":
                        case "list":
                        case "newsletter_admin_invite":
                        case "event_creation":
                        case "sticker-pack":
                        case "album":
                        case "rich_response":
                        case "automated_greeting_message":
                            return !0;
                        default:
                            b;
                            return !1;
                    }
                },
                [l, Ha, Ba, r]
            ),
            M = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return c("WAWebWid").isGroup(b) || c("WAWebWid").isGroup(a);
                },
                [p, o]
            ),
            N = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return c("WAWebNewsletterIsNewsletterMsg")({ from: b, to: a });
                },
                [p, o]
            ),
            O = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return b || a != null;
                },
                [N, xa]
            ),
            P = e(
                function (a) {
                    a = a[0];
                    return c("WAWebWid").isStatus(a.remote);
                },
                [n]
            ),
            Ja = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return d("WAWebCommonMsgUtils").isNotificationType(b, a);
                },
                [l, m]
            ),
            Q = e(
                function (a) {
                    var b = a[0],
                        c = a[1],
                        e = a[2];
                    a = a[3];
                    var f = b;
                    if (a) return b.fromMe;
                    return f.self === "in" || e
                        ? !1
                        : d("WAWebUserPrefsMeUser").isMeAccount(c);
                },
                [n, p, Ja, N]
            ),
            R = e(
                function (a) {
                    var b = a[0],
                        c = a[1],
                        e = a[2],
                        f = a[3],
                        g = a[4];
                    a = a[5];
                    return b
                        ? f
                            ? d("WAWebUserPrefsMeUser").getMeUser()
                            : g
                        : c || e || (a == null ? void 0 : a.isBot())
                            ? a
                            : g;
                },
                [Q, M, P, N, p, s]
            ),
            Ka = e(
                function (a) {
                    var b = a[0],
                        e = a[1];
                    a = a[2];
                    b = b || e;
                    b != null &&
                        b.isUser == null &&
                        (c("gkx")("26258")
                            ? d("WALogger")
                                .ERROR(j(), typeof b, a)
                                .sendLogs("non-wid-originalselfauthororsender")
                            : d("WALogger")
                                .ERROR(i(), String(b), typeof b, a)
                                .sendLogs("non-wid-originalselfauthororsender"));
                    return b != null && (b.isUser == null ? void 0 : b.isUser())
                        ? d("WAWebWidFactory").toUserWid(b)
                        : null;
                },
                [u, R, l]
            ),
            La = e(
                function (a) {
                    a = a[0];
                    return (
                        a === d("WAWebMsgType").MSG_TYPE.REACTION ||
                        a === d("WAWebMsgType").MSG_TYPE.REACTION_ENC
                    );
                },
                [l]
            ),
            Ma = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return (
                        b === d("WAWebMsgType").MSG_TYPE.POLL_UPDATE && a === "poll_vote"
                    );
                },
                [l, m]
            ),
            Na = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return (
                        b === d("WAWebMsgType").MSG_TYPE.UNKNOWN ||
                        (b === d("WAWebMsgType").MSG_TYPE.PAYMENT && a === "futureproof")
                    );
                },
                [l, m]
            ),
            Oa = e(
                function (a) {
                    a = a[0];
                    return a === d("WAWebMsgType").MSG_TYPE.STICKER;
                },
                [l]
            ),
            Pa = b("isCarouselCard", { default: !1 }),
            Qa = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return !b && !a;
                },
                [G, Oa]
            ),
            Ra = e(
                function (a) {
                    a = a[0];
                    return a === d("WAWebEphemeralConstants").KeepInChatState.KEPT;
                },
                [v]
            ),
            Sa = e(
                function (a) {
                    a = a[0];
                    return a === d("WAWebEphemeralConstants").KeepInChatState.UNKEPT;
                },
                [v]
            ),
            Ta = e(
                function (a) {
                    a = a[0];
                    return c("WAWebWid").isPSA(a.remote);
                },
                [n]
            ),
            Ua = e(
                function (a) {
                    a = a[0];
                    return c("WAWebWid").isIAS(a.remote);
                },
                [n]
            ),
            Va = e(
                function (a) {
                    a = a[0];
                    return c("WAWebWid").isCAPISupportAccount(a.remote);
                },
                [n]
            ),
            Wa = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return (
                        b === d("WAWebMsgType").MSG_TYPE.LIST &&
                        (a == null ? void 0 : a.listType) ===
                        d("WAWebProtobufsE2E.pb").Message$ListMessage$ListType
                            .PRODUCT_LIST
                    );
                },
                [l, w]
            ),
            Xa = b("title"),
            S = b("body", { default: "" }),
            Ya = b("caption"),
            Za = b("comment"),
            $a = b("pollName", { default: "" }),
            ab = b("pollOptions"),
            bb = b("pollSelectableOptionsCount", { default: 0 }),
            cb = b("pollInvalidated", { default: !1 }),
            db = b("pollContentType", {
                default: d("WAWebPollCreationUtils").PollContentType.TEXT,
            }),
            eb = b("pollVotesSnapshot"),
            fb = b("eventName", { default: "" }),
            gb = b("eventDescription"),
            hb = b("eventStartTime", { default: 0 }),
            ib = b("eventEndTime"),
            jb = b("eventJoinLink"),
            kb = b("eventLocation"),
            lb = b("isEventCanceled", { default: !1 }),
            mb = b("eventInvalidated", { default: !1 }),
            nb = b("replyCount", { default: 0 }),
            ob = b("nativeFlowName"),
            pb = b("nativeFlowButtons"),
            qb = b("paymentCurrency", { default: "" }),
            rb = b("paymentAmount1000", { default: 0 }),
            sb = b("paymentMessageReceiverJid"),
            tb = b("paymentStatus"),
            ub = b("paymentTxnStatus"),
            vb = b("paymentNoteMsg"),
            wb = b("paymentRequestMessageKey"),
            xb = b("paymentExpiryTimestamp"),
            yb = b("paymentInviteServiceType"),
            zb = b("isFromTemplate", { default: !1 }),
            Ab = b("isLive", { default: !1 }),
            T = b("isDynamicReplyButtonsMsg", { default: !1 }),
            Bb = b("dynamicReplyButtons"),
            Cb = e(
                function (a) {
                    var b = a[0],
                        c = a[1];
                    a = a[2];
                    return b === d("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                        c === "ephemeral_setting"
                        ? !1
                        : a != null && a !== 0;
                },
                [l, m, y]
            ),
            Db = e(
                function (a) {
                    a = a[0];
                    return a != null;
                },
                [x]
            ),
            Eb = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return (
                        b === d("WAWebMsgType").MSG_TYPE.PROTOCOL && a === "message_edit"
                    );
                },
                [l, m]
            ),
            Fb = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    if (!b) return null;
                    b = "rgba(86, 150, 255, 255)";
                    a = a;
                    if (a == null || a === 0) return b;
                    b = (a >> 24) & 255;
                    var c = (a >> 16) & 255,
                        d = (a >> 8) & 255;
                    a = a & 255;
                    return "rgba(" + c + ", " + d + ", " + a + ", " + b + ")";
                },
                [P, A]
            ),
            Gb = e(
                function (a) {
                    a = a[0];
                    switch (a) {
                        case "protocol":
                        case "chat":
                        case "location":
                        case "vcard":
                        case "multi_vcard":
                        case "image":
                        case "video":
                        case "ptv":
                        case "audio":
                        case "ptt":
                        case "document":
                        case "sticker":
                        case "status":
                        case "product":
                        case "groups_v4_invite":
                        case "order":
                        case "poll_creation":
                        case "poll_result_snapshot":
                        case "newsletter_admin_invite":
                        case "comment":
                        case "event_creation":
                        case "sticker-pack":
                        case "album":
                        case "rich_response":
                            return !0;
                        default:
                            a;
                            return !1;
                    }
                },
                [l]
            ),
            Hb = e(
                function (a) {
                    var b = a[0],
                        c = a[1];
                    a = a[2];
                    return b.fromMe && c && a;
                },
                [n, Ga, Gb]
            ),
            Ib = b("revokeSender"),
            Jb = e(
                function (a) {
                    a = a[0];
                    return a != null && d("WAWebUserPrefsMeUser").isMeAccount(a);
                },
                [Ib]
            ),
            Kb = e(
                function (a) {
                    var b = a[0],
                        c = a[1];
                    a = a[2];
                    b = b.fromMe;
                    b = b
                        ? c == null
                            ? void 0
                            : c.toString({ legacy: !0 })
                        : a == null
                            ? void 0
                            : a.toString({ legacy: !0 });
                    c = d("WAWebUserPrefsMeUser").getMaybeMeUser();
                    a = c == null ? void 0 : c.toString({ legacy: !0 });
                    if (b && a != null)
                        return (
                            d("WAPhoneFindCC").phoneCC(b) !== d("WAPhoneFindCC").phoneCC(a)
                        );
                    d("WALogger").WARN(h());
                    return !1;
                },
                [n, o, p]
            ),
            Lb = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    if (b === d("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE) {
                        if (
                            d("WAWebBizSystemMsgSubtypes").BIZ_SYSTEM_MSG_SUBTYPES.includes(a)
                        )
                            return !0;
                        if (
                            d(
                                "WAWebBizSystemMsgSubtypes"
                            ).BIZ_SYSTEM_MSG_SUBTYPES_V2.includes(a)
                        )
                            return !0;
                        switch (a) {
                            case "verified_initial_unknown":
                            case "verified_initial_low":
                            case "verified_initial_high":
                            case "verified_transition_any_to_none":
                            case "verified_transition_any_to_high":
                            case "verified_transition_high_to_low":
                            case "verified_transition_high_to_unknown":
                            case "verified_transition_unknown_to_low":
                            case "verified_transition_low_to_unknown":
                            case "verified_transition_none_to_low":
                            case "verified_transition_none_to_unknown":
                            case "biz_verified_transition_top_to_bottom":
                            case "biz_verified_transition_bottom_to_top":
                            case "biz_intro_top":
                            case "biz_intro_bottom":
                            case "biz_name_change":
                            case "biz_move_to_consumer_app":
                            case "biz_two_tier_migration_top":
                            case "biz_two_tier_migration_bottom":
                                return !0;
                            default:
                                return !1;
                        }
                    }
                    return !1;
                },
                [l, m]
            ),
            Mb = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    switch (b) {
                        case "image":
                        case "video":
                        case "audio":
                        case "sticker-pack":
                            return !0;
                        case "interactive":
                            return a == null
                                ? !1
                                : a.mediaType ===
                                d("WAWebInteractiveMessageHeaderMediaType")
                                    .InteractiveMessageHeaderMediaType.IMAGE ||
                                a.mediaType ===
                                d("WAWebInteractiveMessageHeaderMediaType")
                                    .InteractiveMessageHeaderMediaType.VIDEO;
                        default:
                            return !1;
                    }
                },
                [l, B]
            ),
            U = b("isForwarded", { default: !1 }),
            Nb = b("forwardingScore"),
            Ob = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return a == null ? (b ? 1 : 0) : a || 0;
                },
                [U, Nb]
            ),
            Pb = e(
                function (a) {
                    a = a[0];
                    return (
                        a >= c("WAWebConstantsDeprecated").FREQUENTLY_FORWARDED_SENTINEL
                    );
                },
                [Ob]
            ),
            Qb = b("isQuestion", { default: !1 }),
            Rb = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return (
                        b.fromMe &&
                        a != null &&
                        a.some(function (a) {
                            return a.isBot();
                        })
                    );
                },
                [n, C]
            ),
            Sb = e(
                function (a) {
                    var b = a[0],
                        c = a[1],
                        d = a[2];
                    a = a[3];
                    return b || c || a || !d;
                },
                [U, O, Q, Rb]
            ),
            Tb = b("invis", { default: !1 }),
            Ub = b("isNewMsg", { default: !1 }),
            Vb = b("isSendFailure", { default: !1 }),
            Wb = e(
                function (a) {
                    var b = a[0],
                        c = a[1];
                    a = a[2];
                    return (b && c != null && c < d("WAWebAck").ACK.CLOCK) || a;
                },
                [Q, t, Vb]
            ),
            Xb = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    if (b !== d("WAWebMsgType").MSG_TYPE.VCARD) return void 0;
                    try {
                        return d("WAWebVcardParsingUtils").parseVcard(a);
                    } catch (a) {
                        return void 0;
                    }
                },
                [l, S]
            ),
            Yb = b("description"),
            Zb = b("matchedText", { default: "" }),
            $b = b("thumbnail"),
            ac = b("thumbnailHQ"),
            bc = b("musicArtwork"),
            cc = b("richPreviewType", {
                default: d("WAWebProtobufsE2E.pb")
                    .Message$ExtendedTextMessage$PreviewType.NONE,
            }),
            dc = b("paymentLinkMetadata", { default: null }),
            ec = e(
                function (a) {
                    var b = a[0],
                        e = a[1],
                        f = a[2];
                    a = a[3];
                    return (
                        d("WATypeUtils").isString(a) &&
                        (!c("isStringNullOrEmpty")(e) || !c("isStringNullOrEmpty")(f)) &&
                        b != null &&
                        b.includes(a)
                    );
                },
                [S, Xa, Yb, Zb]
            ),
            fc = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return b || a;
                },
                [T, zb]
            ),
            gc = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return (
                        a ||
                        b === d("WAWebMsgType").MSG_TYPE.LIST ||
                        b === d("WAWebMsgType").MSG_TYPE.INTERACTIVE
                    );
                },
                [l, T]
            ),
            hc = 768,
            ic = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    var c = 308;
                    return (a == null ? void 0 : a.isBot()) ? Infinity : b ? c : hc;
                },
                [Pb, R]
            ),
            jc = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return (
                        (b === d("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION &&
                            a === "encrypt") ||
                        d(
                            "WAWebBizSystemMsgSubtypes"
                        ).BIZ_SYSTEM_MSG_SUBTYPES_V2_INIT.includes(a)
                    );
                },
                [l, m]
            ),
            kc = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return (
                        b === d("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
                        a === "disappearing_mode"
                    );
                },
                [l, m]
            ),
            lc = b("kicKey"),
            mc = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    if (b != null)
                        if (b.fromMe) return d("WAWebUserPrefsMeUser").getMaybeMeUser();
                        else if (a && b.participant != null)
                            return d("WAWebWidFactory").toUserWid(b.participant);
                        else if (!a) return d("WAWebWidFactory").toUserWid(b.remote);
                },
                [lc, M]
            ),
            nc = e(
                function (a) {
                    var b = a[0],
                        c = a[1];
                    a = a[2];
                    if (a === "ephemeral_setting") return null;
                    return b == null || b === 0 ? null : c + b;
                },
                [y, z, m]
            ),
            V = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return (
                        b === d("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                        (a === "sender_revoke" || a === "admin_revoke")
                    );
                },
                [l, m]
            ),
            oc = b("revokeDuration"),
            pc = e(
                function (a) {
                    var b = a[0],
                        c = a[1];
                    a = a[2];
                    return c
                        ? b === "admin_revoke"
                            ? d("WAWebWamEnumEditType").EDIT_TYPE.ADMIN_REVOKE
                            : d("WAWebWamEnumEditType").EDIT_TYPE.SENDER_REVOKE
                        : a
                            ? d("WAWebWamEnumEditType").EDIT_TYPE.EDITED
                            : d("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED;
                },
                [m, V, Db]
            ),
            qc = e(
                function (a) {
                    a = a[0];
                    if (a == null) return;
                    return d("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(
                        a
                    );
                },
                [J]
            ),
            rc = e(
                function (a) {
                    a = a[0];
                    if (a == null) return;
                    return d(
                        "WAWebEphemeralityWAMUtils"
                    ).getWamDisappearingModeInitiatedByMe(a);
                },
                [ra]
            ),
            sc = e(
                function (a) {
                    a = a[0];
                    if (a == null) return;
                    return d("WAWebEphemeralityWAMUtils").getWamDisappearingModeInitiator(
                        a
                    );
                },
                [I]
            ),
            tc = b("inviteCode", { default: "" }),
            uc = b("inviteCodeExp", { default: "" }),
            vc = b("inviteGrp", { default: "" }),
            wc = b("inviteGrpName"),
            xc = b("inviteGrpJpegThum"),
            yc = b("inviteGrpType"),
            zc = e(
                function (a) {
                    var b = a[0],
                        c = a[1];
                    a = a[2];
                    if (b !== d("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) return !1;
                    if (!c) return !0;
                    b = new Date().getTime() / 1e3;
                    return parseInt(b, 10) >= parseInt(a, 10);
                },
                [l, tc, uc]
            ),
            Ac = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    if (b !== d("WAWebMsgType").MSG_TYPE.NEWSLETTER_ADMIN_INVITE)
                        return !1;
                    if (a == null) return !0;
                    b = a.inviteExpiration;
                    a = d("WATimeUtils").unixTime();
                    return a >= b;
                },
                [l, ya]
            ),
            Bc = b("productHeaderImageRejected", { default: !1 }),
            Cc = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return b === !0
                        ? null
                        : (b =
                            a == null
                                ? void 0
                                : (b = a.productListInfo) == null
                                    ? void 0
                                    : (a = b.headerImage) == null
                                        ? void 0
                                        : a.jpegThumbnail) != null
                            ? b
                            : null;
                },
                [Bc, w]
            ),
            Dc = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return (
                        b === d("WAWebMsgType").MSG_TYPE.PTT ||
                        b === d("WAWebMsgType").MSG_TYPE.PTV ||
                        (a && b === d("WAWebMsgType").MSG_TYPE.AUDIO)
                    );
                },
                [l, O]
            ),
            Ec = b("hasReaction", { default: !1 }),
            Fc = b("recipients", {
                getDefault: function () {
                    return [];
                },
            }),
            Gc = b("templateParams", {
                getDefault: function () {
                    return [];
                },
            }),
            Hc = b("clientUrl", { default: "" }),
            Ic = b("loc", { default: "" }),
            Jc = b("lat"),
            Kc = b("lng"),
            Lc = b("shareDuration"),
            Mc = b("finalLat"),
            Nc = b("finalLng"),
            Oc = b("star", { default: !1 }),
            Pc = b("currencyCode"),
            Qc = b("priceAmount1000"),
            Rc = b("salePriceAmount1000"),
            Sc = b("isVcardOverMmsDocument", { default: !1 }),
            W = b("interactiveAnnotations"),
            X = e(
                function (a) {
                    a = a[0];
                    return a == null
                        ? null
                        : a.filter(function (a) {
                            return (
                                ((a = a.embeddedContent) == null
                                    ? void 0
                                    : a.embeddedMusic) != null
                            );
                        });
                },
                [W]
            ),
            Tc = e(
                function (a) {
                    a = a[0];
                    return a == null
                        ? !1
                        : a.some(function (a) {
                            return (
                                ((a = a.embeddedContent) == null
                                    ? void 0
                                    : a.embeddedMessage) != null
                            );
                        });
                },
                [W]
            ),
            Uc = e(
                function (a) {
                    a = a[0];
                    return a == null ? null : a[0];
                },
                [X]
            ),
            Vc = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return b && a != null && a.length > 0;
                },
                [P, X]
            ),
            Wc = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return b && a;
                },
                [P, Tc]
            ),
            Xc = e(
                function (a) {
                    a = a[0];
                    if (a == null) return null;
                    a = (a = a.embeddedContent) == null ? void 0 : a.embeddedMusic;
                    return a == null
                        ? null
                        : d("WAWebMusicParsingUtils").toMusicMetadata(a);
                },
                [Uc]
            ),
            Yc = b("messageSecret"),
            Zc = b("broadcast", { default: !1 }),
            $c = b("vcardList", {
                getDefault: function () {
                    return [];
                },
            }),
            ad = b("vcardFormattedName"),
            bd = b("labels", {
                getDefault: function () {
                    return [];
                },
            }),
            cd = b("agentId"),
            dd = b("url"),
            ed = b("retailerId"),
            fd = b("businessOwnerJid"),
            gd = b("productId"),
            hd = b("productImageCount"),
            id = b("isMdHistoryMsg", { default: !1 }),
            jd = b("campaignId"),
            kd = b("filename"),
            ld = b("smbClientCampaignId"),
            md = b("isCaptionByUser", { default: !1 }),
            nd = b("doNotPlayInline"),
            od = b("thumbnailDirectPath"),
            pd = b("thumbnailHeight"),
            qd = b("thumbnailWidth"),
            rd = b("orderTitle"),
            sd = b("itemCount"),
            td = b("totalAmount1000"),
            ud = b("totalCurrencyCode"),
            vd = b("futureproofType"),
            wd = b("futureproofSubtype"),
            xd = b("ephemeralOutOfSync"),
            yd = b("isAvatar"),
            zd = b("bizPrivacyStatus"),
            Ad = b("verifiedBizName"),
            Bd = b("mediaKey"),
            Cd = b("message", { default: "" }),
            Dd = b("size", { default: 0 }),
            Ed = b("hostedBizEncStateMismatch"),
            Fd = e(
                function (a) {
                    a = a[0];
                    return a === "bot_unavailable_fanout";
                },
                [m]
            ),
            Gd = e(
                function (a) {
                    a = a[0];
                    return a === "view_once_unavailable_fanout";
                },
                [m]
            ),
            Hd = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return b.remote.isBot()
                        ? b.fromMe
                        : a != null &&
                        a.some(function (a) {
                            return a.isBot();
                        });
                },
                [n, C]
            ),
            Id = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return !b.fromMe && a === d("WAWebBotTypes").BizBotType.BIZ_1P;
                },
                [n, K]
            ),
            Jd = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return !b.fromMe && a === d("WAWebBotTypes").BizBotType.BIZ_3P;
                },
                [n, K]
            ),
            Kd = b("botPluginSearchProvider"),
            Ld = b("botPluginSearchUrl"),
            Md = b("botResponseTargetId"),
            Nd = b("botPluginSearchQuery"),
            Od = b("botPluginType"),
            Pd = b("botMessageDisclaimerText"),
            Qd = b("richResponse"),
            Rd = e(
                function (a) {
                    var b = a[0],
                        c = a[1];
                    a = a[2];
                    return b != null && c != null && a != null;
                },
                [Kd, Ld, Nd]
            ),
            Y = e(
                function (a) {
                    a = a[0];
                    return (a == null ? void 0 : a.isBot()) === !0;
                },
                [R]
            ),
            Sd = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return Boolean(b && d("WAWebUserPrefsMeUser").isMeAccount(a));
                },
                [Y, ta]
            ),
            Td = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return a && !b.remote.isBot();
                },
                [n, Y]
            ),
            Ud = e(
                function (a) {
                    var b = a[0],
                        c = a[1];
                    a = a[2];
                    return b || c || a;
                },
                [Y, Id, Jd]
            ),
            Vd = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return (
                        b === d("WAWebMsgType").MSG_TYPE.PROTOCOL && a === "bot_feedback"
                    );
                },
                [l, m]
            ),
            Z = b("hsmTag"),
            Wd = e(
                function (a) {
                    a = a[0];
                    return a === d("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION;
                },
                [Z]
            ),
            Xd = e(
                function (a) {
                    a = a[0];
                    return a === d("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING;
                },
                [Z]
            ),
            Yd = b("botRespOrInvocationRevokeBotWid"),
            Zd = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return Boolean((b == null ? void 0 : b.isBot()) && a);
                },
                [Yd, V]
            ),
            $d = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return (
                        a &&
                        (b ===
                            d("WAWebProtobufsE2E.pb").BotPluginMetadata$PluginType.SEARCH ||
                            b ===
                            d("WAWebProtobufsE2E.pb").BotPluginMetadata$PluginType.REELS)
                    );
                },
                [Od, Y]
            ),
            ae = b("botPluginMaybeParent"),
            be = b("botReelPluginThumbnailCdnUrl"),
            ce = e(
                function (a) {
                    a = a[0];
                    return a === d("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER;
                },
                [l]
            ),
            de = b("statusMentioned"),
            ee = b("isWamoSub"),
            $ = b("isVideoCall");
        $ = e(
            function (a) {
                var b = a[0],
                    c = a[1];
                a = a[2];
                return (
                    b === d("WAWebMsgType").MSG_TYPE.CALL_LOG &&
                    (c === "miss_video" || c === "miss_group_video" || a === !0)
                );
            },
            [l, m, $]
        );
        var fe = e(
            function (a) {
                var b = a[0];
                a = a[1];
                return b === d("WAWebMsgType").MSG_TYPE.CALL_LOG ? a.id : null;
            },
            [l, n]
        ),
            ge = b("callOutcome"),
            he = b("callSilenceReason"),
            ie = e(
                function (a) {
                    var b = a[0],
                        c = a[1];
                    a = a[2];
                    return (
                        b === d("WAWebMsgType").MSG_TYPE.CALL_LOG &&
                        (c === "silence" || a != null)
                    );
                },
                [l, m, he]
            ),
            je = e(
                function (a) {
                    var b = a[0],
                        c = a[1],
                        e = a[2];
                    a = a[3];
                    return (
                        b === d("WAWebMsgType").MSG_TYPE.CALL_LOG &&
                        !d("WAWebUserPrefsMeUser").isMeAccount(a) &&
                        (c === "miss_video" ||
                            c === "miss_group_video" ||
                            c === "miss" ||
                            c === "miss_group" ||
                            ![
                                d("WAWebCallLogMsgData.flow").CallOutcome.Completed,
                                d("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
                                d("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere,
                            ].includes(e))
                    );
                },
                [l, m, ge, R]
            ),
            ke = b("callDuration"),
            le = b("callParticipants"),
            me = e(
                function (a) {
                    var b = a[0];
                    a = a[1];
                    return !b && a != null && a.length > 1;
                },
                [M, le]
            );
        e = e(
            function (a) {
                var b = a[0];
                a = a[1];
                return b || a;
            },
            [M, me]
        );
        b = b("isCallLink");
        g.clearMsgGetterCacheFor = a;
        g.getMsgUnsafe = f;
        g.getType = l;
        g.getSubtype = m;
        g.getId = n;
        g.getTo = o;
        g.getFrom = p;
        g.getBroadcastId = q;
        g.getRemote = aa;
        g.getViewMode = r;
        g.getAuthor = s;
        g.getAck = t;
        g.getViewCount = ba;
        g.getViewed = ca;
        g.getOriginalSelfAuthor = u;
        g.getKicState = v;
        g.getKicTimestampMs = da;
        g.getList = w;
        g.getLatestEditMsgKey = x;
        g.getErrorCode = ea;
        g.getEphemeralDuration = y;
        g.getEphemeralSettingUser = fa;
        g.getT = z;
        g.getBackgroundColor = A;
        g.getHeaderType = ga;
        g.getInteractiveHeader = B;
        g.getInteractiveType = ha;
        g.getFooter = ia;
        g.getMentionedJidList = C;
        g.getGroupMentions = ja;
        g.getQuotedMsg = D;
        g.getQuotedRemoteJid = ka;
        g.getQuotedParticipant = E;
        g.getRcat = F;
        g.getIsViewOnce = G;
        g.getIsGif = la;
        g.getGifAttribution = ma;
        g.getCtwaContext = na;
        g.getMimetype = H;
        g.getFilehash = oa;
        g.getDeprecatedMms3Url = pa;
        g.getWaveform = qa;
        g.getDisappearingModeInitiator = I;
        g.getDisappearingModeTrigger = J;
        g.getDisappearingModeInitiatedByMe = ra;
        g.getActiveBotMsgStreamingInProgress = sa;
        g.getBizBotType = K;
        g.getBotTargetSenderJid = ta;
        g.getIsSupportAIMessage = ua;
        g.getLastBotEditBodyLength = va;
        g.getBotEditType = wa;
        g.getForwardedNewsletterMessageInfo = xa;
        g.getNewsletterAdminInviteInfo = ya;
        g.getBizSource = za;
        g.isBizSourceFromMarketingMessage = Aa;
        g.getIsMarketingMessage = Ba;
        g.getIsReply = Ca;
        g.getIsOpus = Da;
        g.getRcatString = Ea;
        g.getHasMentionOfMe = Fa;
        g.getLocal = Ga;
        g.getIsImportantMessage = L;
        g.getBotPluginReferenceIndex = Ha;
        g.getIsUnreadType = Ia;
        g.getIsGroupMsg = M;
        g.getIsNewsletterMsg = N;
        g.getHasOriginatedFromNewsletter = O;
        g.getIsStatus = P;
        g.getIsNotification = Ja;
        g.getIsSentByMe = Q;
        g.getSender = R;
        g.getOriginalSender = Ka;
        g.getIsReaction = La;
        g.getIsPollVote = Ma;
        g.getIsFutureproof = Na;
        g.getIsStickerMsg = Oa;
        g.getIsCarouselCard = Pa;
        g.getHasThumbList = Qa;
        g.getIsKept = Ra;
        g.getIsUnkept = Sa;
        g.getIsPSA = Ta;
        g.getIsIAS = Ua;
        g.getIsCAPISupport = Va;
        g.getIsProductListMessage = Wa;
        g.getTitle = Xa;
        g.getBody = S;
        g.getCaption = Ya;
        g.getComment = Za;
        g.getPollName = $a;
        g.getPollOptions = ab;
        g.getPollSelectableOptionsCount = bb;
        g.getPollInvalidated = cb;
        g.getPollContentType = db;
        g.getPollVotesSnapshot = eb;
        g.getEventName = fb;
        g.getEventDescription = gb;
        g.getEventStartTime = hb;
        g.getEventEndTime = ib;
        g.getEventJoinLink = jb;
        g.getEventLocation = kb;
        g.getIsEventCanceled = lb;
        g.getEventInvalidated = mb;
        g.getReplyCount = nb;
        g.getNativeFlowName = ob;
        g.getNativeFlowButtons = pb;
        g.getPaymentCurrency = qb;
        g.getPaymentAmount1000 = rb;
        g.getPaymentMessageReceiverJid = sb;
        g.getPaymentStatus = tb;
        g.getPaymentTxnStatus = ub;
        g.getPaymentNoteMsg = vb;
        g.getPaymentRequestMessageKey = wb;
        g.getPaymentExpiryTimestamp = xb;
        g.getPaymentInviteServiceType = yb;
        g.getIsFromTemplate = zb;
        g.getIsLive = Ab;
        g.getIsDynamicReplyButtonsMsg = T;
        g.getDynamicReplyButtons = Bb;
        g.getIsEphemeral = Cb;
        g.getIsEdited = Db;
        g.getIsEditProtocolMsg = Eb;
        g.getStatusCanvasColor = Fb;
        g.getIsUserCreatedType = Gb;
        g.getIsSentByMeFromWeb = Hb;
        g.getRevokeSender = Ib;
        g.getIsRevokedByMe = Jb;
        g.getIsInternational = Kb;
        g.getIsBizNotification = Lb;
        g.getIsMedia = Mb;
        g.getIsForwarded = U;
        g.getForwardingScore = Nb;
        g.getNumTimesForwarded = Ob;
        g.getIsFrequentlyForwarded = Pb;
        g.getIsQuestion = Qb;
        g.getIsBotInvoke = Rb;
        g.getShouldDisplayAsForwarded = Sb;
        g.getInvis = Tb;
        g.getIsNewMsg = Ub;
        g.getIsSendFailure = Vb;
        g.getIsFailed = Wb;
        g.getVcard = Xb;
        g.getDescription = Yb;
        g.getMatchedText = Zb;
        g.getThumbnail = $b;
        g.getThumbnailHQ = ac;
        g.getMusicArtwork = bc;
        g.getRichPreviewType = cc;
        g.getPaymentLinkMetadata = dc;
        g.getLinkPreview = ec;
        g.getSupportsMessageFooter = fc;
        g.getSupportsMessageFooterLinks = gc;
        g.INITIAL_PAGE_SIZE = hc;
        g.getInitialPageSize = ic;
        g.getIsInitialE2ENotification = jc;
        g.getIsDisappearingModeSystemMessage = kc;
        g.getKicKey = lc;
        g.getKicSender = mc;
        g.getEphemeralExpirationTimestamp = nc;
        g.getIsRevoke = V;
        g.getRevokeDuration = oc;
        g.getWamEditType = pc;
        g.getWamDisappearingModeTrigger = qc;
        g.getWamDisappearingModeInitiatedByMe = rc;
        g.getWamDisappearingModeInitiator = sc;
        g.getInviteCode = tc;
        g.getInviteCodeExp = uc;
        g.getInviteGrp = vc;
        g.getInviteGrpName = wc;
        g.getInviteGrpJpegThum = xc;
        g.getInviteGrpType = yc;
        g.getIsGroupsV4InviteExpired = zc;
        g.getIsNewsletterAdminInviteExpired = Ac;
        g.getProductHeaderImageRejected = Bc;
        g.getProductListHeaderImage = Cc;
        g.getIsAckPlayable = Dc;
        g.getHasReaction = Ec;
        g.getRecipients = Fc;
        g.getTemplateParams = Gc;
        g.getClientUrl = Hc;
        g.getLoc = Ic;
        g.getLat = Jc;
        g.getLng = Kc;
        g.getShareDuration = Lc;
        g.getFinalLat = Mc;
        g.getFinalLng = Nc;
        g.getStar = Oc;
        g.getCurrencyCode = Pc;
        g.getPriceAmount1000 = Qc;
        g.getSalePriceAmount1000 = Rc;
        g.getIsVcardOverMmsDocument = Sc;
        g.getInteractiveAnnotations = W;
        g.getMusicAnnotations = X;
        g.getHasEmbeddedMessagesAnnotation = Tc;
        g.getFirstMusicAnnotation = Uc;
        g.isStatusWithMusic = Vc;
        g.isStatusWithEmbeddedMessages = Wc;
        g.getFirstMusicAnnotationEmbeddedContent = Xc;
        g.getMessageSecret = Yc;
        g.getBroadcast = Zc;
        g.getVcardList = $c;
        g.getVcardFormattedName = ad;
        g.getLabels = bd;
        g.getAgendId = cd;
        g.getUrl = dd;
        g.getRetailerId = ed;
        g.getBusinessOwnerJid = fd;
        g.getProductId = gd;
        g.getProductImageCount = hd;
        g.getIsMdHistoryMsg = id;
        g.getCampaignId = jd;
        g.getFilename = kd;
        g.getSmbClientCampaignId = ld;
        g.getIsCaptionByUser = md;
        g.getDoNotPlayInline = nd;
        g.getThumbnailDirectPath = od;
        g.getThumbnailHeight = pd;
        g.getThumbnailWidth = qd;
        g.getOrderTitle = rd;
        g.getItemCount = sd;
        g.getTotalAmount1000 = td;
        g.getTotalCurrencyCode = ud;
        g.getFutureproofType = vd;
        g.getFutureproofSubtype = wd;
        g.getEphemeralOutOfSync = xd;
        g.getIsAvatar = yd;
        g.getBizPrivacyStatus = zd;
        g.getVerifiedBizName = Ad;
        g.getMediaKey = Bd;
        g.getMessage = Cd;
        g.getSize = Dd;
        g.getHostedBizEncStateMismatch = Ed;
        g.getIsBotFutureproofPlaceholder = Fd;
        g.getIsViewOncePlaceholder = Gd;
        g.getIsBotQuery = Hd;
        g.getIsBizBot1pResponse = Id;
        g.getIsBizBot3pResponse = Jd;
        g.getBotPluginSearchProvider = Kd;
        g.getBotPluginSearchUrl = Ld;
        g.getBotResponseTargetId = Md;
        g.getBotPluginSearchQuery = Nd;
        g.getBotPluginType = Od;
        g.getBotMessageDisclaimerText = Pd;
        g.getRichResponse = Qd;
        g.getIsBotSearchResponse = Rd;
        g.getIsMetaBotResponse = Y;
        g.isMetaBotResponseToMyInvoke = Sd;
        g.getIsMetaBotInvokeResponse = Td;
        g.getIsBotResponse = Ud;
        g.getIsBotFeedbackMessage = Vd;
        g.getHsmTag = Z;
        g.getIsAuthenticationMessage = Wd;
        g.getIsMarketingTemplateTag = Xd;
        g.getBotRespOrInvocationRevokeBotWid = Yd;
        g.getIsRevokeForMsgFromOrDeliveredToBot = Zd;
        g.getIsBotPluginCarouselMsg = $d;
        g.getBotPluginMaybeParent = ae;
        g.getBotReelPluginThumbnailCdnUrl = be;
        g.getIsBizContentPlaceholder = ce;
        g.getStatusMentioned = de;
        g.getIsWamoSub = ee;
        g.getIsVideoCall = $;
        g.getCallId = fe;
        g.getCallOutcome = ge;
        g.getCallSilenceReason = he;
        g.getIsCallSilenced = ie;
        g.getIsMissedCall = je;
        g.getCallDuration = ke;
        g.getCallParticipants = le;
        g.getIsAdHocGroupCall = me;
        g.getIsGroupCall = e;
        g.getIsCallLink = b;
    },
    98
);