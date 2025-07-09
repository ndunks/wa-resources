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
        function a(chat, msg) {
            d("WALogger").LOG(r(), chat.id.toLogString(), msg.type, msg.subtype);
            if (
                d("WAWebChatGetters").getIsNewsletter(chat) &&
                !d("WAWebNewsletterGatingUtils").isNewsletterEnabled()
            )
                return (h || (h = b("Promise"))).resolve();

            if (!msg) return (h || (h = b("Promise"))).resolve();

            var f = (h || (h = b("Promise"))).resolve();
            d("WAWebMsgGetters").getIsSentByMe(msg) &&
                !chat.notSpam &&
                !d("WAWebChatGetters").getIsNewsletter(chat) &&
                (f = d("WAWebSendSpamChatAction").sendNotSpam(chat, !1));

            return d("WAWebFrontendMsgGetters").getEventType(msg) ===
                d("WAWebCommonMsgUtils").EventType.IGNORE
                ? (h || (h = b("Promise"))).resolve()
                : f
                    .then(
                        b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                            var b = {};
                            chat.promises.updateSortTime &&
                                chat.promises.updateSortTime.abortController.abort();
                            d("WAWebMsgGetters").getIsSentByMeFromWeb(msg) &&
                                chat.archive &&
                                d("WAWebSetArchiveChatActionUtils").shouldUnarchiveChat(
                                    d("WAWebMsgGetters").getIsSentByMe(msg)
                                ) &&
                                (d("WALogger").DEV(q()), (b.archive = !1));
                            chat.promises.setArchive &&
                                chat.promises.setArchive.abortController.abort();
                            !d("WAWebChatGetters").getIsNewsletter(chat) &&
                                msg.subtype !==
                                d("WAWebBotGenTypingIndicatorMsg")
                                    .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE &&
                                (!d("WAWebMsgGetters").getIsSentByMe(msg)
                                    ? c("WAWebChangePresenceHandlerAction")(
                                        { id: chat.id, participant: msg.author, type: "idle" },
                                        !1
                                    )
                                    : (chat.markedUnread = !1));
                            d("WALogger").LOG(p());
                            try {
                                yield d("WAWebDBUpdateChatTable").updateChatTable(chat.id, b);
                            } catch (b) {
                                var f = yield d("WAWebSchemaChat")
                                    .getChatTable()
                                    .get(chat.id.toString());
                                d("WALogger")
                                    .ERROR(o(), chat.id.toLogString(), f != null, b)
                                    .sendLogs("handle-new-msg-cannot-update-chat");
                                throw b;
                            }
                            f = babelHelpers["extends"]({}, b);
                            try {
                                if (
                                    s() &&
                                    (d("WAWebViewModeUtils").isViewModeVisibleInSurface(
                                        d("WAWebViewMode.flow").ViewModeSurface.CHAT,
                                        msg.viewMode
                                    ) ||
                                        ((b = d("WAWebInvisiblePlaceholderViewModeProcessor")
                                            .InvisiblePlaceholderViewModeProcessor
                                            .compatibleMessageTypes) == null
                                            ? void 0
                                            : b.includes(msg.type)))
                                )
                                    d("WALogger").LOG(n()),
                                        (f.t = msg.t),
                                        (d("WAWebFrontendMsgGetters").getEventType(msg) ===
                                            d("WAWebCommonMsgUtils").EventType.AMBIENT ||
                                            d("WAWebFrontendMsgGetters").getEventType(msg) ===
                                            d("WAWebCommonMsgUtils").EventType.DEFAULT) &&
                                        !msg.id.fromMe &&
                                        ((f.unreadCount = chat.unreadCount + 1 || 1),
                                            chat.activeUnreadCount > 0 &&
                                            (f.activeUnreadCount = chat.activeUnreadCount + 1));
                                else {
                                    b = yield d("WAWebApiChat").getChatMeta(chat.id);
                                    var g = b.unreadCount;
                                    b = b.timestamp;
                                    f.unreadCount = g;
                                    f.t = b;
                                    chat.activeUnreadCount > 0 &&
                                        (f.activeUnreadCount =
                                            chat.activeUnreadCount +
                                            Number(
                                                d("WAWebViewModeUtils").isViewModeVisibleInSurface(
                                                    d("WAWebViewMode.flow").ViewModeSurface.CHAT,
                                                    msg.viewMode
                                                )
                                            ));
                                }
                                f.unreadDividerOffset = 0;
                            } catch (c) {
                                d("WALogger").ERROR(m(), chat.id.toLogString(), c.stack);
                                if (!t) {
                                    var h;
                                    t = !0;
                                    g = yield d("WAWebSchemaChat")
                                        .getChatTable()
                                        .get(chat.id.toString());
                                    b = chat.accountLid
                                        ? yield d("WAWebSchemaChat")
                                            .getChatTable()
                                            .get(
                                                (b = chat.accountLid) == null ? void 0 : b.toString()
                                            )
                                        : null;
                                    d("WAWebLidMigrationUtils").logLidMetadata();
                                    d("WALogger")
                                        .LOG(
                                            l(),
                                            chat.id.toLogString(),
                                            (h = chat.accountLid) == null ? void 0 : h.toLogString(),
                                            g != null,
                                            b != null
                                        )
                                        .tags("missing-lid");
                                    d("WALogger")
                                        .ERROR(k(), chat.id.toLogString(), c.stack)
                                        .sendLogs(
                                            "onNewMsg: unable to find metadata from chat table"
                                        );
                                }
                            }
                            return f;
                        })
                    )
                    .then(function (b) {
                        chat.set(b);
                        msg.ctwaContext != null &&
                            (d(
                                "WAWebCommonCTWAConsumerTransparency"
                            ).handleConsumerTransparencyForNewMsg(
                                chat,
                                msg.ctwaContext.conversionData,
                                msg.ctwaContext.conversionSource
                            ),
                                d(
                                    "WAWebCommonCTWALogging"
                                ).maybeSetCtwaMessageReceivedInUserPreferenceStore(msg));
                        var f = c("WAWebConversionTupleCollection").get(chat.id);
                        if (f) f.timestamp = d("WATimeUtils").unixTime();
                        else if (msg.ctwaContext != null) {
                            f = msg.ctwaContext;
                            var g = f.conversionSource;
                            f = f.conversionData;
                            c("WAWebConversionTupleCollection").add(
                                {
                                    conversionSource: g,
                                    conversionData: f,
                                    id: chat.id,
                                    timestamp: d("WATimeUtils").unixTime(),
                                },
                                { merge: !0 }
                            );
                        }
                        g = d("WAWebUserPrefsMeUser").getMeUser();
                        msg.type === "gp2" &&
                            (msg.subtype === "add" || msg.subtype === "create") &&
                            chat
                                .getGroupMetadataCollection()
                                .trigger("group_participant_change_" + g.toString(), chat.id);
                        if (!d("WAWebMsgGetters").getIsSentByMe(msg)) {
                            switch (d("WAWebFrontendMsgGetters").getEventType(msg)) {
                                case d("WAWebCommonMsgUtils").EventType.DEFAULT:
                                case d("WAWebCommonMsgUtils").EventType.AMBIENT:
                                    d("WAWebFrontendMsgGetters").getEventType(msg) ===
                                        d("WAWebCommonMsgUtils").EventType.DEFAULT &&
                                        d("WAWebCmd").Cmd.alertNewMsg(msg);
                                    chat.msgs.length <
                                        d("WAWebCollectionConstants").MSG_PRELOAD_THRESHOLD &&
                                        !d("WAWebChatGetters").getIsNewsletter(chat) &&
                                        d("WAWebChatLoadMessages")
                                            .loadEarlierMsgs(
                                                chat,
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
                                    ((msg.type === d("WAWebMsgType").MSG_TYPE.CALL_LOG &&
                                        !c("WAWebEnvironment").isWindows) ||
                                        msg.subtype === "sender_invite") &&
                                        d("WAWebCmd").Cmd.alertNewMsg(msg);
                                    break;
                                case d("WAWebCommonMsgUtils").EventType.SIGNIFICANT:
                                    if (
                                        msg.type === "gp2" &&
                                        msg.subtype === "add" &&
                                        d("WAWebUserPrefsMeUser").isMeAccount(msg.recipients[0]) &&
                                        !chat.contact.name
                                    )
                                        return;
                                    d("WAWebCmd").Cmd.alertNewMsg(msg);
                                    f = chat.getGroupMetadataCollection();
                                    f.trigger("group_participant_change_" + g.toString(), chat.id);
                                    break;
                                default:
                                    break;
                            }
                            f = msg.mediaData;
                            f &&
                                (f.type === "image" || f.type === "video") &&
                                d("WAWebCmd").Cmd.newMediaMsg(msg);
                            b.unreadCount != null &&
                                b.unreadCount > 0 &&
                                !s() &&
                                d("WAWebHandleMsgReceiptCommon").processOrphanPeerReceipt(
                                    msg.id
                                );
                            if (d("WAWebMsgGetters").getIsImportantMessage(msg)) {
                                g = new (c("WAWebUnreadMentionModel"))({
                                    id: msg.id.toString(),
                                    timestamp: msg.t,
                                });
                                (f = chat.groupMetadata) == null
                                    ? void 0
                                    : f.unreadMentionMetadata.addUnreadMentions(
                                        g,
                                        d("WAWebGroupUnreadMessageType").UnreadMessageType
                                            .NEW_MESSAGE
                                    );
                                if (chat.archiveAtMentionViewedInDrawer) {
                                    b = new Map();
                                    b.set(chat.id.toString(), !1);
                                    d("WALogger").LOG(i());
                                    d("WAWebApiChat").updateChatArchiveDrawer(b);
                                    chat.archiveAtMentionViewedInDrawer = !1;
                                }
                            }
                        }
                    });
        }
        g.handleNewMsgForChat = a;
    },
    98
);