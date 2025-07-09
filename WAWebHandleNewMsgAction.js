__d(
    "WAWebHandleNewMsgAction",
    [
        "Promise",
        "WAFilteredCatch",
        "WALogger",
        "WATimeUtils",
        "WAWebApiChat",
        "WAWebBackendErrors",
        "WAWebBotGenTypingIndicatorMsg",
        "WAWebChangePresenceHandlerAction",
        "WAWebChatGetters",
        "WAWebChatLoadMessages",
        "WAWebCmd",
        "WAWebCollectionConstants",
        "WAWebCommonCTWAConsumerTransparency",
        "WAWebCommonCTWALogging",
        "WAWebCommonMsgUtils",
        "WAWebConversionTupleCollection",
        "WAWebDBUpdateChatTable",
        "WAWebEnvironment",
        "WAWebFrontendMsgGetters",
        "WAWebGroupUnreadMessageType",
        "WAWebHandleMsgReceiptCommon",
        "WAWebInvisiblePlaceholderViewModeProcessor",
        "WAWebLidMigrationUtils",
        "WAWebMsgGetters",
        "WAWebMsgType",
        "WAWebNewsletterGatingUtils",
        "WAWebNoop",
        "WAWebSchemaChat",
        "WAWebSendSpamChatAction",
        "WAWebSetArchiveChatActionUtils",
        "WAWebUnreadMentionModel",
        "WAWebUserPrefsMeUser",
        "WAWebViewMode.flow",
        "WAWebViewModeUtils",
        "WAWebWamEnumWebcQueryTriggerType",
        "asyncToGeneratorRuntime",
    ],
    function (a, b, c, d, e, f, g) {
        var h;
        function i() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "handleNewMsgForChat: will mark chat for archive",
            ]);
            i = function () {
                return a;
            };
            return a;
        }
        function j() {
            var a = babelHelpers.taggedTemplateLiteralLoose(
                ["chat:onNewMsg failed\n", ""],
                ["chat:onNewMsg failed\\n", ""]
            );
            j = function () {
                return a;
            };
            return a;
        }
        function k() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "onNewMsg: unable to find metadata from chat table for id:",
                ". stack: ",
                "",
            ]);
            k = function () {
                return a;
            };
            return a;
        }
        function l() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "onNewMsg error chat_id: ",
                ", account_lid: ",
                ", chat by id: ",
                ", chat by accountLid ",
                "",
            ]);
            l = function () {
                return a;
            };
            return a;
        }
        function m() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "onNewMsg: unable to find metadata from chat table for id:",
                ". stack: ",
                "",
            ]);
            m = function () {
                return a;
            };
            return a;
        }
        function n() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "handleNewMsgForChat: updating UI immediatelly",
            ]);
            n = function () {
                return a;
            };
            return a;
        }
        function o() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "handleNewMsgForChat: unable to update chat table for id:",
                ". chat exists in db: ",
                " error: ",
                "",
            ]);
            o = function () {
                return a;
            };
            return a;
        }
        function p() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "handleNewMsgForChat: before updating chat table",
            ]);
            p = function () {
                return a;
            };
            return a;
        }
        function q() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "chat model: unarchiving chat",
            ]);
            q = function () {
                return a;
            };
            return a;
        }
        function r() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "handleNewMsgForChat chatId: ",
                " type: ",
                ", sub type: ",
                "",
            ]);
            r = function () {
                return a;
            };
            return a;
        }
        function s() {
            return !d("WAWebCmd").Cmd.isOfflineDeliveryEnd;
        }
        var t = !1;
        function a(a, e) {
            d("WALogger").LOG(r(), a.id.toLogString(), e.type, e.subtype);
            if (
                d("WAWebChatGetters").getIsNewsletter(a) &&
                !d("WAWebNewsletterGatingUtils").isNewsletterEnabled()
            )
                return (h || (h = b("Promise"))).resolve();
            if (!e) return (h || (h = b("Promise"))).resolve();
            var f = (h || (h = b("Promise"))).resolve();
            d("WAWebMsgGetters").getIsSentByMe(e) &&
                !a.notSpam &&
                !d("WAWebChatGetters").getIsNewsletter(a) &&
                (f = d("WAWebSendSpamChatAction").sendNotSpam(a, !1));
            return d("WAWebFrontendMsgGetters").getEventType(e) ===
                d("WAWebCommonMsgUtils").EventType.IGNORE
                ? (h || (h = b("Promise"))).resolve()
                : f
                    .then(
                        b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                            var b = {};
                            a.promises.updateSortTime &&
                                a.promises.updateSortTime.abortController.abort();
                            d("WAWebMsgGetters").getIsSentByMeFromWeb(e) &&
                                a.archive &&
                                d("WAWebSetArchiveChatActionUtils").shouldUnarchiveChat(
                                    d("WAWebMsgGetters").getIsSentByMe(e)
                                ) &&
                                (d("WALogger").DEV(q()), (b.archive = !1));
                            a.promises.setArchive &&
                                a.promises.setArchive.abortController.abort();
                            !d("WAWebChatGetters").getIsNewsletter(a) &&
                                e.subtype !==
                                d("WAWebBotGenTypingIndicatorMsg")
                                    .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE &&
                                (!d("WAWebMsgGetters").getIsSentByMe(e)
                                    ? c("WAWebChangePresenceHandlerAction")(
                                        { id: a.id, participant: e.author, type: "idle" },
                                        !1
                                    )
                                    : (a.markedUnread = !1));
                            d("WALogger").LOG(p());
                            try {
                                yield d("WAWebDBUpdateChatTable").updateChatTable(a.id, b);
                            } catch (b) {
                                var f = yield d("WAWebSchemaChat")
                                    .getChatTable()
                                    .get(a.id.toString());
                                d("WALogger")
                                    .ERROR(o(), a.id.toLogString(), f != null, b)
                                    .sendLogs("handle-new-msg-cannot-update-chat");
                                throw b;
                            }
                            f = babelHelpers["extends"]({}, b);
                            try {
                                if (
                                    s() &&
                                    (d("WAWebViewModeUtils").isViewModeVisibleInSurface(
                                        d("WAWebViewMode.flow").ViewModeSurface.CHAT,
                                        e.viewMode
                                    ) ||
                                        ((b = d("WAWebInvisiblePlaceholderViewModeProcessor")
                                            .InvisiblePlaceholderViewModeProcessor
                                            .compatibleMessageTypes) == null
                                            ? void 0
                                            : b.includes(e.type)))
                                )
                                    d("WALogger").LOG(n()),
                                        (f.t = e.t),
                                        (d("WAWebFrontendMsgGetters").getEventType(e) ===
                                            d("WAWebCommonMsgUtils").EventType.AMBIENT ||
                                            d("WAWebFrontendMsgGetters").getEventType(e) ===
                                            d("WAWebCommonMsgUtils").EventType.DEFAULT) &&
                                        !e.id.fromMe &&
                                        ((f.unreadCount = a.unreadCount + 1 || 1),
                                            a.activeUnreadCount > 0 &&
                                            (f.activeUnreadCount = a.activeUnreadCount + 1));
                                else {
                                    b = yield d("WAWebApiChat").getChatMeta(a.id);
                                    var g = b.unreadCount;
                                    b = b.timestamp;
                                    f.unreadCount = g;
                                    f.t = b;
                                    a.activeUnreadCount > 0 &&
                                        (f.activeUnreadCount =
                                            a.activeUnreadCount +
                                            Number(
                                                d("WAWebViewModeUtils").isViewModeVisibleInSurface(
                                                    d("WAWebViewMode.flow").ViewModeSurface.CHAT,
                                                    e.viewMode
                                                )
                                            ));
                                }
                                f.unreadDividerOffset = 0;
                            } catch (c) {
                                d("WALogger").ERROR(m(), a.id.toLogString(), c.stack);
                                if (!t) {
                                    var h;
                                    t = !0;
                                    g = yield d("WAWebSchemaChat")
                                        .getChatTable()
                                        .get(a.id.toString());
                                    b = a.accountLid
                                        ? yield d("WAWebSchemaChat")
                                            .getChatTable()
                                            .get(
                                                (b = a.accountLid) == null ? void 0 : b.toString()
                                            )
                                        : null;
                                    d("WAWebLidMigrationUtils").logLidMetadata();
                                    d("WALogger")
                                        .LOG(
                                            l(),
                                            a.id.toLogString(),
                                            (h = a.accountLid) == null ? void 0 : h.toLogString(),
                                            g != null,
                                            b != null
                                        )
                                        .tags("missing-lid");
                                    d("WALogger")
                                        .ERROR(k(), a.id.toLogString(), c.stack)
                                        .sendLogs(
                                            "onNewMsg: unable to find metadata from chat table"
                                        );
                                }
                            }
                            return f;
                        })
                    )
                    .then(function (b) {
                        a.set(b);
                        e.ctwaContext != null &&
                            (d(
                                "WAWebCommonCTWAConsumerTransparency"
                            ).handleConsumerTransparencyForNewMsg(
                                a,
                                e.ctwaContext.conversionData,
                                e.ctwaContext.conversionSource
                            ),
                                d(
                                    "WAWebCommonCTWALogging"
                                ).maybeSetCtwaMessageReceivedInUserPreferenceStore(e));
                        var f = c("WAWebConversionTupleCollection").get(a.id);
                        if (f) f.timestamp = d("WATimeUtils").unixTime();
                        else if (e.ctwaContext != null) {
                            f = e.ctwaContext;
                            var g = f.conversionSource;
                            f = f.conversionData;
                            c("WAWebConversionTupleCollection").add(
                                {
                                    conversionSource: g,
                                    conversionData: f,
                                    id: a.id,
                                    timestamp: d("WATimeUtils").unixTime(),
                                },
                                { merge: !0 }
                            );
                        }
                        g = d("WAWebUserPrefsMeUser").getMeUser();
                        e.type === "gp2" &&
                            (e.subtype === "add" || e.subtype === "create") &&
                            a
                                .getGroupMetadataCollection()
                                .trigger("group_participant_change_" + g.toString(), a.id);
                        if (!d("WAWebMsgGetters").getIsSentByMe(e)) {
                            switch (d("WAWebFrontendMsgGetters").getEventType(e)) {
                                case d("WAWebCommonMsgUtils").EventType.DEFAULT:
                                case d("WAWebCommonMsgUtils").EventType.AMBIENT:
                                    d("WAWebFrontendMsgGetters").getEventType(e) ===
                                        d("WAWebCommonMsgUtils").EventType.DEFAULT &&
                                        d("WAWebCmd").Cmd.alertNewMsg(e);
                                    a.msgs.length <
                                        d("WAWebCollectionConstants").MSG_PRELOAD_THRESHOLD &&
                                        !d("WAWebChatGetters").getIsNewsletter(a) &&
                                        d("WAWebChatLoadMessages")
                                            .loadEarlierMsgs(
                                                a,
                                                void 0,
                                                d("WAWebWamEnumWebcQueryTriggerType")
                                                    .WEBC_QUERY_TRIGGER_TYPE.NEW_MESSAGE_PREFETCH
                                            )
                                        ["catch"](
                                            d("WAFilteredCatch").filteredCatch(
                                                d("WAWebBackendErrors").E404,
                                                c("WAWebNoop")
                                            )
                                        )
                                        ["catch"](function (a) {
                                            d("WALogger").LOG(j(), a);
                                        });
                                    break;
                                case d("WAWebCommonMsgUtils").EventType.NOTEWORTHY:
                                    ((e.type === d("WAWebMsgType").MSG_TYPE.CALL_LOG &&
                                        !c("WAWebEnvironment").isWindows) ||
                                        e.subtype === "sender_invite") &&
                                        d("WAWebCmd").Cmd.alertNewMsg(e);
                                    break;
                                case d("WAWebCommonMsgUtils").EventType.SIGNIFICANT:
                                    if (
                                        e.type === "gp2" &&
                                        e.subtype === "add" &&
                                        d("WAWebUserPrefsMeUser").isMeAccount(e.recipients[0]) &&
                                        !a.contact.name
                                    )
                                        return;
                                    d("WAWebCmd").Cmd.alertNewMsg(e);
                                    f = a.getGroupMetadataCollection();
                                    f.trigger("group_participant_change_" + g.toString(), a.id);
                                    break;
                                default:
                                    break;
                            }
                            f = e.mediaData;
                            f &&
                                (f.type === "image" || f.type === "video") &&
                                d("WAWebCmd").Cmd.newMediaMsg(e);
                            b.unreadCount != null &&
                                b.unreadCount > 0 &&
                                !s() &&
                                d("WAWebHandleMsgReceiptCommon").processOrphanPeerReceipt(
                                    e.id
                                );
                            if (d("WAWebMsgGetters").getIsImportantMessage(e)) {
                                g = new (c("WAWebUnreadMentionModel"))({
                                    id: e.id.toString(),
                                    timestamp: e.t,
                                });
                                (f = a.groupMetadata) == null
                                    ? void 0
                                    : f.unreadMentionMetadata.addUnreadMentions(
                                        g,
                                        d("WAWebGroupUnreadMessageType").UnreadMessageType
                                            .NEW_MESSAGE
                                    );
                                if (a.archiveAtMentionViewedInDrawer) {
                                    b = new Map();
                                    b.set(a.id.toString(), !1);
                                    d("WALogger").LOG(i());
                                    d("WAWebApiChat").updateChatArchiveDrawer(b);
                                    a.archiveAtMentionViewedInDrawer = !1;
                                }
                            }
                        }
                    });
        }
        g.handleNewMsgForChat = a;
    },
    98
);