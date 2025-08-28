__d(
    "WAWebChatModel",
    [
        "fbt",
        "Promise",
        "WAAbortError",
        "WAFilteredCatch",
        "WAInOrderPromiseQueue",
        "WALogger",
        "WANullthrows",
        "WATimeUtils",
        "WAWebABProps",
        "WAWebAck",
        "WAWebAlarm",
        "WAWebBackendErrors",
        "WAWebBaseModel",
        "WAWebBizAiAgentGating",
        "WAWebBizGatingUtils",
        "WAWebBizLabelUtils",
        "WAWebBotGating",
        "WAWebBotProfileCollection",
        "WAWebChatAssignmentCollection",
        "WAWebChatCollection",
        "WAWebChatConstants",
        "WAWebChatDocMsgsCollection",
        "WAWebChatEphemerality",
        "WAWebChatFlowTypes",
        "WAWebChatGetters",
        "WAWebChatGroupUtils",
        "WAWebChatLinkMsgsCollection",
        "WAWebChatLoadMessages",
        "WAWebChatMedia",
        "WAWebChatMediaMsgsCollection",
        "WAWebChatMessageSearch",
        "WAWebChatModelDerivedMethods",
        "WAWebChatParticipantColor",
        "WAWebChatProductMsgsCollection",
        "WAWebChatUpdates",
        "WAWebCmd",
        "WAWebConnModel",
        "WAWebConstantsDeprecated",
        "WAWebContactCollection",
        "WAWebContactGetters",
        "WAWebCurrentUser",
        "WAWebDBEphemeralMessage",
        "WAWebDBUpdateChatTable",
        "WAWebDBUpdateContactTable",
        "WAWebEphemeralKeepInChatAbpropUtils",
        "WAWebEventMsgsCollection",
        "WAWebEventsWaitForBbEvent",
        "WAWebFavoriteCollection",
        "WAWebFrontendChatGetters",
        "WAWebFrontendMsgGetters",
        "WAWebGroupMetadataCollection",
        "WAWebGroupSafetyCheckUtils",
        "WAWebGroupType",
        "WAWebGroupUnreadMessageType",
        "WAWebHandleNewMsgAction",
        "WAWebKeptMsgCollection",
        "WAWebL10N",
        "WAWebLidMigrationUtils",
        "WAWebLimitSharingModelUtils",
        "WAWebListsGatingUtils",
        "WAWebMedia",
        "WAWebMsgDataFromModel",
        "WAWebMsgGetters",
        "WAWebMsgLinks",
        "WAWebMsgModelUtils",
        "WAWebMuteCollection",
        "WAWebNewsletterCollection",
        "WAWebNewsletterMetadataCollection",
        "WAWebNoop",
        "WAWebNotificationBackend",
        "WAWebOTPLoggingHelper",
        "WAWebPersistedJobDefinitions",
        "WAWebPersistedJobManager",
        "WAWebPresenceChatAction",
        "WAWebPresenceCollection",
        "WAWebProtobufsE2E.pb",
        "WAWebQuotedMsgModelUtils",
        "WAWebReachoutTimelockGatingUtils",
        "WAWebSendSpamChatAction",
        "WAWebStarredMsgCollection",
        "WAWebSuperChatMsgs",
        "WAWebTos",
        "WAWebTosGating",
        "WAWebTrustedContactsUtils",
        "WAWebUnreadMentionModel",
        "WAWebUpdateDraftMessageChatAction",
        "WAWebUpdateLastAddOnPreviewChatAction",
        "WAWebUserPrefsMeUser",
        "WAWebViewOnceState",
        "WAWebWamEnumChatAssignmentChatType",
        "WAWebWamEnumWebcChatType",
        "WAWebWid",
        "asyncToGeneratorRuntime",
        "isStringNullOrEmpty",
        "lodash",
    ],
    function (a, b, c, d, e, f, g, h) {
        var i;
        function j() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "chat:_updateIsAnnounceGrpRestrict:old ",
                ", new: ",
                "",
            ]);
            j = function () {
                return a;
            };
            return a;
        }
        function k() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "[Maiba] Aborted notification ",
                "",
            ]);
            k = function () {
                return a;
            };
            return a;
        }
        function l() {
            var a = babelHelpers.taggedTemplateLiteralLoose(
                ["chat:onEmptyMRM failed\n", ""],
                ["chat:onEmptyMRM failed\\n", ""]
            );
            l = function () {
                return a;
            };
            return a;
        }
        function m() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "models:Chat:removeMsg 0 messages left, querying...",
            ]);
            m = function () {
                return a;
            };
            return a;
        }
        function n() {
            var a = babelHelpers.taggedTemplateLiteralLoose(
                ["chat:preload failed\n", ""],
                ["chat:preload failed\\n", ""]
            );
            n = function () {
                return a;
            };
            return a;
        }
        function o() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebChatModel: failed to validate lid chat: ",
                "",
            ]);
            o = function () {
                return a;
            };
            return a;
        }
        function p() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "created chat model without account_lid. isEmployee: ",
                ", chat id: ",
                "",
            ]);
            p = function () {
                return a;
            };
            return a;
        }
        function q() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "chat:onPendingActionUpdate pendingAction value is invalid",
            ]);
            q = function () {
                return a;
            };
            return a;
        }
        a = (function (a) {
            babelHelpers.inheritsLoose(e, a);
            function e() {
                var b;
                for (var c = arguments.length, e = new Array(c), f = 0; f < c; f++)
                    e[f] = arguments[f];
                return (
                    ((b = a.call.apply(a, [this].concat(e)) || this),
                        (b.id = d("WAWebBaseModel").prop()),
                        (b.accountLid = d("WAWebBaseModel").prop()),
                        (b.t = d("WAWebBaseModel").prop()),
                        (b.unreadCount = d("WAWebBaseModel").prop(0)),
                        (b.unreadDividerOffset = d("WAWebBaseModel").prop(0)),
                        (b.archive = d("WAWebBaseModel").prop()),
                        (b.isReadOnly = d("WAWebBaseModel").prop()),
                        (b.isLocked = d("WAWebBaseModel").prop()),
                        (b.isAnnounceGrpRestrict = d("WAWebBaseModel").prop()),
                        (b.modifyTag = d("WAWebBaseModel").prop()),
                        (b.muteExpiration = d("WAWebBaseModel").prop(0)),
                        (b.isAutoMuted = d("WAWebBaseModel").prop(!1)),
                        (b.wallpaper = d("WAWebBaseModel").prop()),
                        (b.showDoodle = d("WAWebBaseModel").prop()),
                        (b.name = d("WAWebBaseModel").prop()),
                        (b.notSpam = d("WAWebBaseModel").prop()),
                        (b.pin = d("WAWebBaseModel").prop()),
                        (b.changeNumberOldJid = d("WAWebBaseModel").prop()),
                        (b.changeNumberNewJid = d("WAWebBaseModel").prop()),
                        (b.lastReceivedKey = d("WAWebBaseModel").prop()),
                        (b.capiThreadControl = d("WAWebBaseModel").prop()),
                        (b.ephemeralDuration = d("WAWebBaseModel").prop()),
                        (b.ephemeralSettingTimestamp = d("WAWebBaseModel").prop()),
                        (b.disappearingModeInitiator = d("WAWebBaseModel").prop()),
                        (b.disappearingModeTrigger = d("WAWebBaseModel").prop()),
                        (b.disappearingModeInitiatedByMe = d("WAWebBaseModel").prop()),
                        (b.createdLocally = d("WAWebBaseModel").prop()),
                        (b.pendingAction = d("WAWebBaseModel").session()),
                        (b.formattedTitle = d("WAWebBaseModel").session()),
                        (b.active = d("WAWebBaseModel").session()),
                        (b.pausedTimerId = d("WAWebBaseModel").session()),
                        (b.presenceResendTimerId = d("WAWebBaseModel").session()),
                        (b.recording = d("WAWebBaseModel").session()),
                        (b.typing = d("WAWebBaseModel").session()),
                        (b.colors = d("WAWebBaseModel").session()),
                        (b.attachMediaContents = d("WAWebBaseModel").session()),
                        (b.draftAttachMediaContentsSortTs = d("WAWebBaseModel").session()),
                        (b.isComposingPoll = d("WAWebBaseModel").session(!1)),
                        (b.pttRecordingSession = d("WAWebBaseModel").session()),
                        (b.squelch = d("WAWebBaseModel").session()),
                        (b.reactionSquelch = d("WAWebBaseModel").session()),
                        (b.pendingSeenCount = d("WAWebBaseModel").session(0)),
                        (b.markedUnread = d("WAWebBaseModel").session()),
                        (b.trusted = d("WAWebBaseModel").session()),
                        (b.groupSafetyChecked = d("WAWebBaseModel").session()),
                        (b.canSend = d("WAWebBaseModel").session()),
                        (b.showUnreadInTitle = d("WAWebBaseModel").session(!1)),
                        (b.activeUnreadCount = d("WAWebBaseModel").session()),
                        (b.isFavorite = d("WAWebBaseModel").session(!1)),
                        (b.promises = d("WAWebBaseModel").session(function () {
                            return {};
                        })),
                        (b.ftsCache = d("WAWebBaseModel").session(function () {
                            return {};
                        })),
                        (b.composeQuotedMsg = d("WAWebBaseModel").session()),
                        (b.composeQuotedMsgRemoteJid = d("WAWebBaseModel").session()),
                        (b.quotedMsgAdminGroupJid = d("WAWebBaseModel").session()),
                        (b.quotedMsgAdminGroupSubject = d("WAWebBaseModel").session()),
                        (b.quotedMsgAdminParentGroupJid = d("WAWebBaseModel").session()),
                        (b.groupMetadata = d("WAWebBaseModel").session()),
                        (b.newsletterMetadata = d("WAWebBaseModel").session()),
                        (b.presence = d("WAWebBaseModel").session()),
                        (b.mute = d("WAWebBaseModel").session()),
                        (b.contact = d("WAWebBaseModel").session()),
                        (b.mediaCount = d("WAWebBaseModel").session(0)),
                        (b.linkCount = d("WAWebBaseModel").session(0)),
                        (b.docCount = d("WAWebBaseModel").session(0)),
                        (b.productCount = d("WAWebBaseModel").session(0)),
                        (b.pendingDeleteForMeCount = d("WAWebBaseModel").session(0)),
                        (b.isParentGroup = d("WAWebBaseModel").session()),
                        (b.groupType = d("WAWebBaseModel").session()),
                        (b.hasCapi = d("WAWebBaseModel").session()),
                        (b.unreadMentionsOfMe = d("WAWebBaseModel").prop()),
                        (b.unreadMentionCount = d("WAWebBaseModel").prop()),
                        (b.hasUnreadMention = d("WAWebBaseModel").prop(!1)),
                        (b.archiveAtMentionViewedInDrawer = d("WAWebBaseModel").prop(!1)),
                        (b.hasChatBeenOpened = d("WAWebBaseModel").prop(!1)),
                        (b.tcToken = d("WAWebBaseModel").prop()),
                        (b.tcTokenTimestamp = d("WAWebBaseModel").prop()),
                        (b.tcTokenSenderTimestamp = d("WAWebBaseModel").prop()),
                        (b.msgUnsyncedButtonReplyMsgs = d("WAWebBaseModel").prop()),
                        (b.endOfHistoryTransfer = d("WAWebBaseModel").session(!1)),
                        (b.endOfHistoryTransferType = d("WAWebBaseModel").prop()),
                        (b.pendingInitialLoading = d("WAWebBaseModel").prop(!1)),
                        (b.lastReactionPreview = d("WAWebBaseModel").prop()),
                        (b.chatlistPreview = d("WAWebBaseModel").prop()),
                        (b.previewT = d("WAWebBaseModel").prop()),
                        (b.unopenedByAssignedAgent = d("WAWebBaseModel").session(!1)),
                        (b.isAssignedToMe = d("WAWebBaseModel").session(!1)),
                        (b.assignedAgent = d("WAWebBaseModel").session()),
                        (b.unreadEditTimestampMs = d("WAWebBaseModel").prop()),
                        (b.celebrationAnimationLastPlayed = d("WAWebBaseModel").prop(0)),
                        (b.animationCandidateData = d("WAWebBaseModel").prop()),
                        (b.draftMessage = d("WAWebBaseModel").prop()),
                        (b.draftMessageSortTs = d("WAWebBaseModel").session()),
                        (b.ephemeralDisplayedExemptions = d("WAWebBaseModel").prop()),
                        (b.hasOpened = d("WAWebBaseModel").prop()),
                        (b.botInitialTypingIndicatorMsgId = d("WAWebBaseModel").session()),
                        (b.hasCreatedBotInvokeSystemMsg = d("WAWebBaseModel").prop()),
                        (b.bizBotSystemMsgType = d("WAWebBaseModel").prop()),
                        (b.hasRequestedWelcomeMsg = d("WAWebBaseModel").prop(!1)),
                        (b.lidOriginType = d("WAWebBaseModel").prop()),
                        (b.hasPreloaded = d("WAWebBaseModel").session(!1)),
                        (b.chatEntryPoint = d("WAWebBaseModel").session(null)),
                        (b.forceDismissAiAgentBlockBar = d("WAWebBaseModel").session(!1)),
                        (b.limitSharing = d("WAWebBaseModel").prop()),
                        babelHelpers.assertThisInitialized(b)) ||
                    babelHelpers.assertThisInitialized(b)
                );
            }
            var f = e.prototype;
            f.initialize = function () {
                var b = this;
                a.prototype.initialize.call(this);
                this.$ChatImpl$p_4();
                this.addQueue = new (c("WAInOrderPromiseQueue"))();
                this.sendQueue = new (c("WAInOrderPromiseQueue"))();
                this.$ChatImpl$p_1 = new Set();
                this.$ChatImpl$p_2 = new Map();
                this.$ChatImpl$p_3 = new AbortController();
                this.$ChatImpl$p_5();
                this.msgs.msgLoadState.contextLoaded = !0;
                this.addChild(
                    "presence",
                    d("WAWebPresenceCollection").PresenceCollection.gadd(this.id)
                );
                var e = d("WAWebMuteCollection").MuteCollection.get(this.id);
                e
                    ? this.addChild("mute", e)
                    : this.addChild(
                        "mute",
                        d("WAWebMuteCollection").MuteCollection.gadd({
                            id: this.id,
                            expiration: this.muteExpiration,
                            isAutoMuted: this.isAutoMuted,
                        })
                    );
                this.listenTo(this.mute, "change:expiration", function () {
                    return d("WAWebChatUpdates").updateMuteExpiration(b);
                });
                this.listenTo(this.mute, "change:isAutoMuted", function () {
                    return d("WAWebChatUpdates").updateMuteExpiration(b);
                });
                this.addChild(
                    "contact",
                    d("WAWebContactCollection").ContactCollection.gadd(this.id)
                );
                if (this.name && !this.contact.name) {
                    var f = { name: this.name };
                    d("WAWebChatGetters").getIsGroup(this)
                        ? this.contact.set(f)
                        : d("WAWebChatGetters").getIsNewsletter(this)
                            ? this.contact.set(f)
                            : d("WAWebDBUpdateContactTable")
                                .updateContactTable(this.contact.id, f)
                                .then(function () {
                                    b.contact.set(f);
                                });
                }
                this.listenTo(this.contact, "change:name", function () {
                    return d("WAWebChatGroupUtils").updateTitle(b);
                });
                this.listenTo(this.contact, "change:isContactBlocked", function () {
                    return d("WAWebChatGroupUtils").updateCanSend(b);
                });
                this.listenTo(
                    this,
                    "change:id change:archive change:unreadCount change:pendingSeenCount change:muteExpiration change:isLocked",
                    this.$ChatImpl$p_6
                );
                this.listenTo(
                    d("WAWebFavoriteCollection").FavoriteCollection,
                    "add remove change",
                    function () {
                        b.isFavorite = !!d(
                            "WAWebFavoriteCollection"
                        ).FavoriteCollection.get(b.id.toJid());
                    }
                );
                d("WAWebChatGetters").getIsGroup(this) && (this.trusted = !0);
                this.listenTo(d("WAWebTos").TosManager, "change", function () {
                    return d("WAWebChatGroupUtils").updateCanSend(b);
                });
                this.listenTo(this.contact, "change:privacyMode", function () {
                    return d("WAWebChatGroupUtils").updateCanSend(b);
                });
                if (
                    d("WAWebChatGetters").getIsGroup(this) ||
                    d("WAWebChatGetters").getIsBroadcast(this)
                ) {
                    e = this.getGroupMetadataCollection();
                    var g;
                    d("WAWebChatGetters").getIsBroadcast(this) &&
                        !e.get(this.id) &&
                        (g = !0);
                    var h = e.gadd(this.id);
                    this.addChild("groupMetadata", h);
                    this.listenTo(h, "change:stale change:announce", this.$ChatImpl$p_7);
                    this.listenTo(h, "change:groupType", function () {
                        b.$ChatImpl$p_6(), (b.groupType = h.groupType);
                    });
                    this.groupType = h.groupType;
                    this.listenTo(h, "change:hasCapi", function () {
                        b.hasCapi = h.hasCapi;
                    });
                    this.hasCapi = h.hasCapi;
                    this.listenTo(
                        h.participants,
                        "change:isAdmin bulk_add bulk_remove",
                        this.$ChatImpl$p_7
                    );
                    this.listenTo(h, "change:trusted change:stale", this.isTrusted);
                    this.listenTo(
                        h,
                        "change:groupSafetyCheck change:stale",
                        this.isGroupSafetyChecked
                    );
                    this.listenTo(
                        h,
                        "change:participants change:stale change:suspended change:terminated",
                        function () {
                            d("WAWebChatGroupUtils").updateReadOnly(b);
                        }
                    );
                    this.listenTo(
                        h.participants,
                        "change:contact.formattedShortName",
                        function () {
                            return d("WAWebChatGroupUtils").updateTitle(b);
                        }
                    );
                    this.$ChatImpl$p_8(h);
                    this.listenTo(
                        h.unreadMentionMetadata.unreadMentionCollection,
                        "add remove reset",
                        this.$ChatImpl$p_9
                    );
                    this.listenTo(
                        h.unreadMentionMetadata,
                        "change:pendingUnreadMentionCount",
                        this.$ChatImpl$p_9
                    );
                    this.$ChatImpl$p_7();
                    d("WAWebChatGroupUtils").updateReadOnly(this);
                    var i = this.id;
                    this.listenTo(this, "change:isAnnounceGrpRestrict", function () {
                        d("WAWebChatGroupUtils").updateReadOnly(b),
                            d("WAWebChatGroupUtils").updateCanSend(b);
                    });
                    this.listenTo(h, "change:isParentGroup", function () {
                        b.isParentGroup = h.isParentGroup;
                    });
                    this.isParentGroup = h.isParentGroup;
                    g && e.update(i);
                } else if (d("WAWebChatGetters").getIsNewsletter(this)) {
                    e = this.getNewsletterMetadataCollection();
                    i = e.gadd(this.id);
                    this.addChild("newsletterMetadata", i);
                    d("WAWebChatGroupUtils").updateReadOnly(this);
                    d("WAWebChatGroupUtils").updateCanSend(this);
                    this.listenTo(i, "change:membershipType", function () {
                        d("WAWebChatGroupUtils").updateReadOnly(b),
                            d("WAWebChatGroupUtils").updateCanSend(b);
                    });
                } else
                    this.listenTo(this.presence, "change:isOnline", function () {
                        return d("WAWebPresenceChatAction").presenceOnlineChanged(b);
                    });
                this.listenTo(this, "change:isReadOnly", function () {
                    (d("WAWebChatGetters").getIsGroup(this) ||
                        d("WAWebChatGetters").getIsNewsletter(this)) &&
                        (this.isTrusted(), d("WAWebChatGroupUtils").updateCanSend(this));
                    if (d("WAWebChatGetters").getIsGroup(this)) {
                        var a = this.getGroupMetadataCollection();
                        a.update(this.id);
                    }
                });
                e = this.getCollection();
                !!e.notSpam[this.id] &&
                    !this.notSpam &&
                    d("WAWebSendSpamChatAction")
                        .sendNotSpam(this)
                    ["catch"](c("WAWebNoop"));
                e.notSpam[this.id] = !!this.notSpam;
                this.notSpam ||
                    this.listenTo(this, "change:notSpam", this.$ChatImpl$p_10);
                d("WAWebChatGroupUtils").updateTitle(this);
                this.isTrusted();
                this.groupSafetyChecked = Boolean(
                    (i = this.groupMetadata) == null ? void 0 : i.groupSafetyCheck
                );
                d("WAWebChatGroupUtils").updateCanSend(this);
                this.listenTo(this.contact, "change:name", this.isTrusted);
                this.listenTo(this.msgs, "add", function (a) {
                    d("WAWebHandleNewMsgAction").handleNewMsgForChat(b, a);
                });
                this.listenTo(this.msgs, "update_sort_time", function () {
                    return d("WAWebChatUpdates").updateSortTime(b);
                });
                this.listenTo(this.msgs, "bulk_add", function (a, c) {
                    return d("WAWebChatMedia").addMediaMsgs(b, a, c);
                });
                this.listenTo(this.msgs, "add", this.$ChatImpl$p_11);
                this.listenTo(
                    this.msgs,
                    "bulk_add",
                    this.deregisterExpiredViewOnceBulkMessages
                );
                this.listenTo(
                    this.msgs,
                    "add remove change:ephemeralExpirationTimestamp change:kicState",
                    this.$ChatImpl$p_12
                );
                this.listenTo(this.msgs, "bulk_add", function (a) {
                    a.forEach(function (a) {
                        b.$ChatImpl$p_12(a);
                    });
                });
                this.listenTo(this.msgs, "change:kicState", function (a) {
                    var c = b.keptMsgs;
                    c && (d("WAWebMsgGetters").getIsKept(a) ? c.add(a) : c.remove(a));
                });
                this.listenTo(this, "change:msgs", function () {
                    return d("WAWebChatMedia").resetMediaMsgs(b);
                });
                this.saveAssignedColorsDebounced = c("lodash").debounce(function () {
                    return d("WAWebChatParticipantColor").saveAssignedColors(b);
                }, 1e3);
                this.listenTo(this, "change:active", this.$ChatImpl$p_13);
                this.pendingAction = 0;
                this.listenTo(this, "change:t change:modifyTag", function () {
                    return d("WAWebChatMessageSearch").clearFtsCache(b);
                });
                this.listenTo(c("WAWebL10N"), "locale_change", function () {
                    d("WAWebChatGroupUtils").updateTitle(b);
                });
                (d("WAWebConnModel").Conn.isSMB ||
                    d("WAWebListsGatingUtils").isListsEnabled()) &&
                    d("WAWebBizLabelUtils").initializeLabels(this);
                d("WAWebConnModel").Conn.isSMB && this.$ChatImpl$p_14();
                this.$ChatImpl$p_6();
                this.$ChatImpl$p_15();
                this.id.isFbidBot() &&
                    (d("WAWebBotProfileCollection").BotProfileCollection.get(this.id) ||
                        void d("WAWebBotProfileCollection").BotProfileCollection.find(
                            this.id
                        ));
                d("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
                    this.listenTo(
                        this,
                        "change:capiThreadControl change:forceDismissAiAgentBlockBar",
                        function () {
                            d("WAWebChatGroupUtils").updateCanSend(b);
                        }
                    );
                this.listenTo(
                    d("WAWebCmd").Cmd,
                    "reachout_timelock_state_change",
                    function () {
                        return d("WAWebChatGroupUtils").updateCanSend(b);
                    }
                );
                d("WAWebReachoutTimelockGatingUtils").isReachoutTimelockEnabled() &&
                    this.listenTo(
                        this,
                        "add:tcToken change:tcToken remove:tcToken",
                        function () {
                            return d("WAWebChatGroupUtils").updateCanSend(b);
                        }
                    );
            };
            f.$ChatImpl$p_14 = function () {
                var a = this;
                if (d("WAWebBizGatingUtils").chatAssignmentEnabled()) {
                    this.set(
                        "unopenedByAssignedAgent",
                        d(
                            "WAWebChatAssignmentCollection"
                        ).ChatAssignmentCollection.getChatUnopenedStatus(this.id)
                    );
                    var b = d(
                        "WAWebChatAssignmentCollection"
                    ).ChatAssignmentCollection.getAgentCollectionForChatId(this.id);
                    this.set("isAssignedToMe", this.$ChatImpl$p_16());
                    this.set("assignedAgent", b.at(0));
                    this.listenTo(b, "add remove change", function () {
                        a.set(
                            "unopenedByAssignedAgent",
                            d(
                                "WAWebChatAssignmentCollection"
                            ).ChatAssignmentCollection.getChatUnopenedStatus(a.id)
                        ),
                            a.set("isAssignedToMe", a.$ChatImpl$p_16()),
                            a.set("assignedAgent", b.at(0));
                    });
                }
            };
            f.$ChatImpl$p_8 = function (a) {
                var b = this;
                if (this.unreadMentionsOfMe) {
                    var e = new Map(
                        this.unreadMentionsOfMe.map(function (a) {
                            return [String(a.id), a];
                        })
                    );
                    this.listenTo(this.msgs, "bulk_add", function (f) {
                        for (f of f) {
                            var g = f.id.toString();
                            g = e.get(g);
                            if (!g || !b.isUnreadMsg(f)) continue;
                            a.unreadMentionMetadata.addUnreadMentions(
                                [new (c("WAWebUnreadMentionModel"))(g)],
                                d("WAWebGroupUnreadMessageType").UnreadMessageType
                                    .PERSISTANCE_LOAD
                            );
                        }
                    });
                }
                this.unreadMentionCount != null &&
                    (a.unreadMentionMetadata.pendingUnreadMentionCount =
                        this.unreadMentionCount);
                this.$ChatImpl$p_9();
            };
            f.$ChatImpl$p_15 = function () {
                var a = this;
                this.eventMsgs = new (d(
                    "WAWebEventMsgsCollection"
                ).EventMsgsCollection)(this);
                this.listenTo(this.msgs, "bulk_add", function (b, c) {
                    b = b.filter(function (a) {
                        return d("WAWebFrontendMsgGetters").getAsEventCreation(a);
                    });
                    b.length && a.getEventMsgs().add(b, c);
                });
                this.listenTo(this.msgs, "change:msgs", function () {
                    if (a.eventMsgs) {
                        var b;
                        a.eventMsgs["delete"]();
                        void ((b = a.eventMsgs) == null ? void 0 : b.initialize());
                    }
                });
            };
            f.$ChatImpl$p_16 = function () {
                var a = d("WAWebUserPrefsMeUser").assertGetMe().getDeviceId();
                return d("WAWebChatAssignmentCollection")
                    .ChatAssignmentCollection.getAgentCollectionForChatId(this.id)
                    .getModelsArray()
                    .some(function (b) {
                        return b.deviceId === a;
                    });
            };
            f.$ChatImpl$p_9 = function () {
                d("WAWebChatGetters").getIsGroup(this) &&
                    this.groupMetadata &&
                    (this.hasUnreadMention =
                        this.groupMetadata.unreadMentionMetadata.getUnreadMentionCount() >
                        0);
            };
            f.set = function (b, c, d) {
                typeof b === "string"
                    ? (b === "muteExpiration" && this.mute && this.mute.setMute(c),
                        b === "isAutoMuted" && this.mute && this.mute.setAutoMuted(c))
                    : Object.prototype.hasOwnProperty.call(b, "muteExpiration") &&
                    this.mute &&
                    this.mute.setMute(b.muteExpiration, b.isAutoMuted);
                a.prototype.set.call(this, b, c, d);
                return this;
            };
            f.equals = function (a) {
                return this.id.equals(a == null ? void 0 : a.id);
            };
            f.addPendingAction = function (a) {
                var b = this,
                    c = function () {
                        b.decPending();
                    };
                a.then(c, c);
                this.pendingAction++;
            };
            f.decPending = function () {
                this.pendingAction > 0
                    ? this.pendingAction--
                    : (d("WALogger").LOG(q()), (this.pendingAction = 0));
            };
            f.$ChatImpl$p_5 = function () {
                if (d("WAWebFrontendChatGetters").getHasDraftMessage(this) === !0) {
                    var a;
                    this.draftMessageSortTs =
                        (a = this.draftMessage) == null ? void 0 : a.timestamp;
                } else this.draftMessageSortTs = null;
            };
            f.$ChatImpl$p_4 = function () {
                try {
                    d("WAWebLidMigrationUtils").shouldHaveAccountLid(this.id) &&
                        this.accountLid == null &&
                        (d("WAWebLidMigrationUtils").logLidMetadata(),
                            d("WALogger")
                                .ERROR(
                                    p(),
                                    d("WAWebCurrentUser").isEmployee(),
                                    this.id.toLogString()
                                )
                                .sendLogs("chat-model-without-account-lid")
                                .tags("missing-lid"));
                } catch (a) {
                    d("WALogger").ERROR(o(), a);
                }
            };
            f.$ChatImpl$p_13 = function () {
                var a = this;
                d("WAWebChatGetters").getIsGroup(this) &&
                    this.active &&
                    ((this.squelch = c("WAWebConstantsDeprecated").SQUELCH_RESET_VALUE),
                        (this.reactionSquelch = c(
                            "WAWebConstantsDeprecated"
                        ).SQUELCH_RESET_VALUE),
                        (this.hasChatBeenOpened = !0));
                this.presence.chatActive = this.active;
                if (!this.active) {
                    this.$ChatImpl$p_5();
                    this.getCollection().sort();
                    this.msgs
                        .filter(function (a) {
                            return d("WAWebViewOnceState").isExpired(a.safe());
                        })
                        .forEach(d("WAWebMedia").deregisterMsg);
                    var b = Array.from(this.$ChatImpl$p_1);
                    d("WAWebDBEphemeralMessage")
                        .removeExpiredMessagesFromHistory(b)
                        .then(function () {
                            var c = b.map(function (a) {
                                return a.id.toString();
                            });
                            c.length > 0 &&
                                (d(
                                    "WAWebUpdateLastAddOnPreviewChatAction"
                                ).deleteModelsForLastAddOnPreview(c),
                                    d("WAWebPersistedJobManager")
                                        .getJobManager()
                                        .waitUntilPersisted(
                                            d(
                                                "WAWebPersistedJobDefinitions"
                                            ).jobSerializers.deleteAddOns(a.id.toString(), c)
                                        ));
                        });
                    this.$ChatImpl$p_1.forEach(function (b) {
                        a.$ChatImpl$p_1["delete"](b),
                            b["delete"]({
                                skipUpdatingSortTime: !0,
                                doNotResetLastReceived: !0,
                            });
                    });
                }
            };
            f.$ChatImpl$p_10 = function () {
                var a = this.getCollection();
                a.notSpam[this.id] = this.notSpam;
                this.isTrusted();
                this.notSpam && this.stopListening(this, "change:notSpam");
            };
            f.senderMsgCount = function () {
                return this.getAllMsgs().filter(function (a) {
                    return (
                        !d("WAWebMsgGetters").getIsSentByMe(a) &&
                        !d("WAWebMsgGetters").getIsNotification(a)
                    );
                }).length;
            };
            f.isCAGAdmin = function () {
                var a;
                a =
                    (a = this.groupMetadata) == null ? void 0 : a.participants.iAmAdmin();
                return a != null
                    ? a && d("WAWebFrontendChatGetters").getIsCAG(this)
                    : !1;
            };
            f.hasMaybeSentMsgToChat = function () {
                return this.getAllMsgs().some(function (a) {
                    return d("WAWebMsgGetters").getIsSentByMe(a);
                });
            };
            f.isTrusted = function () {
                var a = !1;
                if (d("WAWebChatGetters").getIsGroup(this)) {
                    var b;
                    a =
                        this.isReadOnly ||
                        this.notSpam ||
                        ((b = this.groupMetadata) == null ? void 0 : b.isTrusted());
                } else
                    d("WAWebChatGetters").getIsBroadcast(this)
                        ? (a = !0)
                        : d("WAWebChatGetters").getIsNewsletter(this)
                            ? (a = !0)
                            : d("WAWebChatGetters").getIsUser(this) &&
                            (a =
                                this.notSpam ||
                                d("WAWebContactGetters").getIsMyContact(this.contact));
                a !== !0 && this.hasMaybeSentMsgToChat() && (a = !0);
                d("WAWebChatGetters").getIsGroup(this) &&
                    a !== this.trusted &&
                    d("WAWebGroupSafetyCheckUtils").handleIsTrustedChangeForGroupSafety(
                        this,
                        Boolean(a)
                    );
                return (this.trusted = Boolean(a));
            };
            f.isGroupSafetyChecked = function () {
                var a = !1;
                if (this.groupMetadata) {
                    var b;
                    a = (b = this.groupMetadata) == null ? void 0 : b.groupSafetyCheck;
                    a !== this.groupSafetyChecked &&
                        d("WAWebGroupSafetyCheckUtils").handleGroupSafetyCheckStateUpdate(
                            this,
                            Boolean(this.trusted),
                            a
                        );
                }
                return (this.groupSafetyChecked = Boolean(a));
            };
            f.isSuspendedOrTerminated = function () {
                if (d("WAWebChatGetters").getIsGroup(this)) {
                    var a;
                    return Boolean(
                        (a = this.groupMetadata) == null
                            ? void 0
                            : a.isSuspendedOrTerminated()
                    );
                } else if (d("WAWebChatGetters").getIsNewsletter(this)) {
                    return Boolean(
                        (a = this.newsletterMetadata) == null
                            ? void 0
                            : a.isSuspendedOrTerminated
                    );
                }
                return !1;
            };
            f.canBlockFromNotification = function () {
                return (
                    d("WAWebABProps").getABPropConfigValue("block_from_notification") &&
                    d("WAWebChatGetters").getIsUser(this) &&
                    !this.isTrusted()
                );
            };
            f.canToggleFavorite = function () {
                var a;
                if (d("WAWebListsGatingUtils").isListsEnabled()) return !0;
                return this.isFavorite
                    ? !0
                    : ((d("WAWebChatGetters").getIsGroup(this) &&
                        ((a = this.groupMetadata) == null ? void 0 : a.groupType) !==
                        d("WAWebGroupType").GroupType.COMMUNITY &&
                        ((a = this.groupMetadata) == null ? void 0 : a.groupType) !==
                        d("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
                        ((a = this.groupMetadata) == null
                            ? void 0
                            : a.participants.iAmMember()) &&
                        !((a = this.groupMetadata) == null
                            ? void 0
                            : a.isSuspendedOrTerminated())) ||
                        (d("WAWebFrontendChatGetters").getKind(this) ===
                            d("WAWebChatFlowTypes").ChatKindType.Chat &&
                            d("WAWebContactGetters").getIsMyContact(this.contact) &&
                            !d("WAWebContactGetters").getId(this.contact).isBot() &&
                            !d("WAWebContactGetters").getIsMe(this.contact))) &&
                    this.trusted;
            };
            f.title = function () {
                var a;
                return d("WAWebChatGetters").getIsGroup(this)
                    ? (a = this.formattedTitle) != null
                        ? a
                        : h._(/*BTDS*/ "__JHASH__LCXIGw_i_3P__JHASH__").toString()
                    : this.formattedTitle;
            };
            f.getTcToken = function () {
                return this.tcToken == null || this.tcTokenTimestamp == null
                    ? null
                    : d("WAWebTrustedContactsUtils").isTokenExpired(
                        this.tcTokenTimestamp,
                        d("WAWebTrustedContactsUtils").TcTokenMode.Receiver
                    )
                        ? null
                        : this.tcToken;
            };
            f.shouldShowUnreadDivider = function () {
                return d("WAWebFrontendChatGetters").getShouldShowUnreadDivider(this);
            };
            f["delete"] = function () {
                a.prototype["delete"].call(this);
                this.getCollection().remove(this.id);
                this.$ChatImpl$p_3.abort();
                this.presence["delete"]();
                d("WAWebCmd").Cmd.closeChat(this);
                this.groupMetadata && this.groupMetadata["delete"]();
                this.mediaMsgs && this.mediaMsgs["delete"]();
                this.linkMsgs && this.linkMsgs["delete"]();
                this.docMsgs && this.docMsgs["delete"]();
                this.productMsgs && this.productMsgs["delete"]();
                this.eventMsgs && this.eventMsgs["delete"]();
                var b = this.starredMsgs;
                b && (b["delete"](), b.stopListening(), b.reset());
                d("WAWebChatGetters").clearChatGetterCacheFor(this);
                d("WAWebFrontendChatGetters").clearFrontendChatGetterCacheFor(this);
            };
            f.isDirty = function () {
                return this.unreadCount !== 0;
            };
            f.canPin = function () {
                var a;
                if (this.archive) return !1;
                a =
                    ((a = this.promises) == null
                        ? void 0
                        : (a = a.setArchive) == null
                            ? void 0
                            : a.archive) === !0;
                return !a;
            };
            f.canArchive = function () {
                return d("WAWebChatGetters").getIsBroadcast(this) ? !1 : !0;
            };
            f.supportsChatLock = function () {
                return !0;
            };
            f.hasUnreadEdit = function () {
                return this.unreadEditTimestampMs != null;
            };
            f.setComposeContents = function (a) {
                var b,
                    c = a.text;
                if (((b = a.text) == null ? void 0 : b.trim()) === "") {
                    c = (b = a.text) == null ? void 0 : b.trim();
                }
                b = {
                    text: c,
                    ctwaContext: a.ctwaContext,
                    ctwaContextLinkData: a.ctwaContextLinkData,
                    timestamp: a.timestamp,
                    omittedUrl: a.omittedURL,
                };
                void d("WAWebUpdateDraftMessageChatAction").updateDraftMessageChat(
                    this.id,
                    b
                );
            };
            f.getComposeContents = function () {
                if (!this.draftMessage) return;
                var a = {
                    timestamp: this.draftMessage.timestamp,
                    text: this.draftMessage.text,
                },
                    b = this.draftMessage,
                    c = b.ctwaContext,
                    d = b.ctwaContextLinkData;
                b = b.omittedUrl;
                b != null && (a.omittedURL = b);
                c != null && (a.ctwaContext = c);
                d != null && (a.ctwaContextLinkData = d);
                return a;
            };
            f.setAttachMediaContents = function (a) {
                (this.attachMediaContents = a),
                    (this.draftAttachMediaContentsSortTs = Boolean(a)
                        ? d("WATimeUtils").unixTime()
                        : null);
            };
            f.isComposingWithUnsavedChanges = function () {
                return this.isComposingPoll;
            };
            f.isBusinessGroup = function () {
                var a;
                a =
                    (a = this.groupMetadata) == null
                        ? void 0
                        : a.participants.getAdmins();
                if (!a) return !1;
                for (a of a) {
                    var b = d("WAWebContactCollection").ContactCollection.get(a.id);
                    if (b == null ? void 0 : b.isBusiness) return !0;
                }
                return !1;
            };
            f.isCAG = function () {
                return d("WAWebFrontendChatGetters").getIsCAG(this);
            };
            f.preload = function () {
                this.msgs.length === 1 &&
                    d("WAWebChatLoadMessages")
                        .loadEarlierMsgs(this)
                    ["catch"](
                        d("WAFilteredCatch").filteredCatch(
                            d("WAWebBackendErrors").E404,
                            c("WAWebNoop")
                        )
                    )
                    ["catch"](function (a) {
                        d("WALogger").LOG(n(), a);
                    });
            };
            f.onEmptyMRM = function () {
                d("WALogger").LOG(m()),
                    d("WAWebChatLoadMessages")
                        .loadEarlierMsgs(this)
                    ["catch"](
                        d("WAFilteredCatch").filteredCatch(
                            d("WAWebBackendErrors").E404,
                            c("WAWebNoop")
                        )
                    )
                    ["catch"](function (a) {
                        d("WALogger").LOG(l(), a);
                    });
            };
            f.deleteMsgs = function (a, b) {
                this.deleteMsgsBeforeMsgInclusive(void 0, !a, b);
            };
            f.deleteMsgsBeforeMsgInclusive = function (a, b, e) {
                b === void 0 && (b = !1);
                var f;
                if (!a) f = this.msgs.length;
                else if (!this.msgs.get(a.id)) return;
                else f = this.msgs.indexOf(a);
                a = function (a, g, h) {
                    return (
                        (!c("isStringNullOrEmpty")(e) &&
                            !d("WAWebMsgModelUtils").msgMatchesType(a, e)) ||
                        (a.msgChunk === this.msgs && g > f) ||
                        (b && a.star) ||
                        (d("WAWebMsgGetters").getIsInitialE2ENotification(a) && b)
                    );
                };
                this.deleteMsgsPartial(a, !0);
            };
            f.deleteMsgsPartial = function (a, b) {
                var e = this;
                b === void 0 && (b = !1);
                var f = this.unreadCount;
                this.getAllCMCs().forEach(function (c) {
                    var f = c.filter(function (b, c, d) {
                        return !a.apply(e, [b, c, d]);
                    });
                    c.remove(f, void 0, b);
                    f.forEach(function (a) {
                        d("WAWebMsgGetters").getIsAuthenticationMessage(a) &&
                            void d("WAWebOTPLoggingHelper").logOTPMessageDeleted(
                                d("WAWebMsgDataFromModel").msgDataFromMsgModel(a)
                            ),
                            a["delete"]();
                    });
                });
                c("lodash")
                    .clone(this.msgChunks)
                    .forEach(function (a) {
                        a.length === 0 && e.removeMsgsCollection(a);
                    });
                if (this.msgs.length > 0) {
                    var g = f > this.msgs.length ? this.msgs.length : f;
                    d("WAWebDBUpdateChatTable")
                        .updateChatTable(this.id, { unreadCount: g })
                        .then(function () {
                            (e.unreadCount = g),
                                (e.msgs.msgLoadState.noEarlierMsgs =
                                    e.endOfHistoryTransferType !==
                                    d("WAWebChatConstants")
                                        .ConversationEndOfHistoryTransferModelPropType.INCOMPLETE);
                        });
                }
            };
            f.deleteMessages = function (a) {
                var b = function (b, c, d) {
                    return !a.includes(b.id.toString());
                };
                this.deleteMsgsPartial(b, !0);
                this.getAllMsgs().length === 0 &&
                    d("WAWebChatLoadMessages").loadEarlierMsgs(this);
                void d("WAWebLimitSharingModelUtils").createLimitSharingMsgOnChatClear(
                    this.id
                );
            };
            f.getLastMsgKeyForAction = function () {
                var a = this.msgs.last(),
                    b;
                a &&
                    (!this.lastReceivedKey ||
                        (a.id.fromMe && a.local && a.ack === d("WAWebAck").ACK.CLOCK)
                        ? (b = a.id)
                        : (b = this.lastReceivedKey));
                return b ? b : void 0;
            };
            f.getWebcChatType = function () {
                var a = d("WAWebFrontendChatGetters").getKind(this);
                if (a != null)
                    switch (a) {
                        case d("WAWebChatFlowTypes").ChatKindType.Chat:
                            return d("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE.INDIVIDUAL;
                        case d("WAWebChatFlowTypes").ChatKindType.Group:
                            return d("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE.GROUP;
                        case d("WAWebChatFlowTypes").ChatKindType.Broadcast:
                            return d("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE
                                .BROADCAST_LIST;
                        case d("WAWebChatFlowTypes").ChatKindType.Newsletter:
                            return d("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE.NEWSLETTER;
                        case d("WAWebChatFlowTypes").ChatKindType.Community:
                            return d("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE.COMMUNITY;
                    }
                else throw new TypeError("Invalid Chat.kind " + String(a));
            };
            f.getMdChatAssignmentChatType = function () {
                return d("WAWebChatModelDerivedMethods").getMdChatAssignmentChatTypeFn(
                    this
                );
            };
            f.getChatAssignmentChatType = function () {
                var a = d("WAWebFrontendChatGetters").getKind(this);
                if (a != null)
                    switch (a) {
                        case d("WAWebChatFlowTypes").ChatKindType.Chat:
                            return d("WAWebWamEnumChatAssignmentChatType")
                                .CHAT_ASSIGNMENT_CHAT_TYPE.INDIVIDUAL;
                        case d("WAWebChatFlowTypes").ChatKindType.Group:
                            return d("WAWebWamEnumChatAssignmentChatType")
                                .CHAT_ASSIGNMENT_CHAT_TYPE.GROUP;
                        case d("WAWebChatFlowTypes").ChatKindType.Broadcast:
                        case d("WAWebChatFlowTypes").ChatKindType.Community:
                            return d("WAWebWamEnumChatAssignmentChatType")
                                .CHAT_ASSIGNMENT_CHAT_TYPE.COMMUNITY;
                        case d("WAWebChatFlowTypes").ChatKindType.Newsletter:
                            return d("WAWebWamEnumChatAssignmentChatType")
                                .CHAT_ASSIGNMENT_CHAT_TYPE.CHANNEL;
                    }
                else throw new TypeError("Invalid Chat.kind " + String(a));
            };
            f.deregisterExpiredViewOnceBulkMessages = function (a) {
                a.forEach(this.$ChatImpl$p_11);
            };
            f.$ChatImpl$p_11 = function (a) {
                d("WAWebViewOnceState").isExpired(a.safe()) &&
                    d("WAWebMedia").deregisterMsg(a);
            };
            f.$ChatImpl$p_12 = function (a) {
                var e = this;
                c("WAWebAlarm").clearTimeout(this.$ChatImpl$p_2.get(a));
                this.$ChatImpl$p_2["delete"](a);
                this.$ChatImpl$p_1["delete"](a);
                var f = d("WAWebMsgGetters").getEphemeralExpirationTimestamp(a);
                if (
                    f == null ||
                    !this.msgs.includes(a) ||
                    d("WAWebMsgGetters").getIsKept(a)
                )
                    return;
                var g = (function () {
                    var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                        e.$ChatImpl$p_2["delete"](a),
                            !e.active
                                ? (yield d(
                                    "WAWebDBEphemeralMessage"
                                ).removeExpiredMessagesFromHistory([a]),
                                    d(
                                        "WAWebUpdateLastAddOnPreviewChatAction"
                                    ).deleteModelsForLastAddOnPreview([a.id.toString()]),
                                    yield d("WAWebPersistedJobManager")
                                        .getJobManager()
                                        .waitUntilPersisted(
                                            d(
                                                "WAWebPersistedJobDefinitions"
                                            ).jobSerializers.deleteAddOns(e.id.toString(), [
                                                a.id.toString(),
                                            ])
                                        ),
                                    a["delete"]({
                                        skipUpdatingSortTime: !0,
                                        doNotResetLastReceived: !0,
                                    }))
                                : e.$ChatImpl$p_1.add(a);
                    });
                    return function () {
                        return c.apply(this, arguments);
                    };
                })();
                if (a.isExpired()) g();
                else {
                    f = c("WAWebAlarm").setGlobalTimeout(function () {
                        return void g();
                    }, f * 1e3);
                    this.$ChatImpl$p_2.set(a, f);
                }
            };
            f.isUnreadMsg = function (a) {
                var b = this.msgs.filter(function (a) {
                    return d("WAWebMsgGetters").getIsUnreadType(a);
                });
                return b.includes(a, b.length - this.unreadCount);
            };
            f.isActiveUnreadMsg = function (a) {
                var b = this.msgs.filter(function (a) {
                    return d("WAWebMsgGetters").getIsUnreadType(a);
                });
                return b.includes(a, b.length - this.activeUnreadCount);
            };
            f.setCelebrationAnimationLastPlayed = function () {
                this.animationCandidateData &&
                    this.celebrationAnimationLastPlayed <
                    this.animationCandidateData.msgTimestampSeconds &&
                    (this.celebrationAnimationLastPlayed =
                        this.animationCandidateData.msgTimestampSeconds);
            };
            f.setChatWallpaper = function (a) {
                this.wallpaper = a;
                return d("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                    wallpaper: a,
                });
            };
            f.setShowDoodle = function (a) {
                this.showDoodle = a;
                return d("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                    showDoodle: a,
                });
            };
            f.setCapiThreadControl = function (a) {
                this.capiThreadControl = a;
                this.forceDismissAiAgentBlockBar = !1;
                a ===
                    d("WAWebProtobufsE2E.pb")
                        .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                        .CONTROL_PASSED &&
                    ((this.unreadCount = 1),
                        d("WAWebNotificationBackend")
                            .showAiHandoffNotification(this)
                        ["catch"](
                            d("WAAbortError").catchAbort(function (a) {
                                d("WALogger").LOG(k(), a);
                            })
                        ));
                return d("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                    capiThreadControl: a,
                    unreadCount: this.unreadCount,
                });
            };
            f.setForceDismissAiAgentBlockingBar = function (a) {
                this.forceDismissAiAgentBlockBar = a;
            };
            f.setAnimationCandidateData = function (a) {
                this.animationCandidateData = a;
            };
            f.$ChatImpl$p_7 = function () {
                var a = this,
                    b = this.groupMetadata;
                if (d("WAWebChatGetters").getIsGroup(this) && b != null && !b.stale) {
                    var c = !b.participants.iAmAdmin() && b.announce;
                    this.isAnnounceGrpRestrict !== c &&
                        (d("WALogger").LOG(j(), this.isAnnounceGrpRestrict, c),
                            d("WAWebDBUpdateChatTable")
                                .updateChatTable(this.id, { isAnnounceGrpRestrict: c })
                                .then(function () {
                                    return (a.isAnnounceGrpRestrict = c);
                                }));
                }
            };
            f.sortMsgs = function (a) {
                a = a.map(function (a) {
                    var b = c("WANullthrows")(a.msgChunk);
                    return {
                        msg: a,
                        chunkT: c("WANullthrows")(b.at(0)).t,
                        index: b.indexOf(a),
                    };
                });
                return a
                    .sort(function (a, b) {
                        return a.chunkT === b.chunkT
                            ? a.index - b.index
                            : a.chunkT - b.chunkT;
                    })
                    .map(function (a) {
                        return a.msg;
                    });
            };
            f.waitForChatLoading = function () {
                var a = this,
                    d = (i || (i = b("Promise"))).resolve();
                this.pendingInitialLoading &&
                    (d = c("WAWebEventsWaitForBbEvent")(
                        this,
                        "change:pendingInitialLoading",
                        function () {
                            return !a.pendingInitialLoading;
                        }
                    ));
                return d;
            };
            f.unstarAll = function () {
                var a = this.getAllMsgs();
                a.forEach(function (a) {
                    a && (a.star = !1);
                });
                d("WAWebStarredMsgCollection").removeStarredMsgs(a);
            };
            f.$ChatImpl$p_6 = function () {
                var a,
                    b = !!this.muteExpiration;
                if (this.archive) {
                    this.showUnreadInTitle = !1;
                    return;
                }
                if (this.isLocked) {
                    this.showUnreadInTitle = !1;
                    return;
                }
                if (this.id.isBot() && !d("WAWebBotGating").isBotEnabled()) {
                    this.showUnreadInTitle = !1;
                    return;
                }
                if (d("WAWebFrontendChatGetters").getOptimisticUnreadCount(this) <= 0) {
                    this.showUnreadInTitle = !1;
                    return;
                }
                if (!d("WAWebChatGetters").getIsGroup(this)) {
                    this.showUnreadInTitle = !b;
                    return;
                }
                if (
                    ((a = this.groupMetadata) == null ? void 0 : a.groupType) ===
                    d("WAWebGroupType").GroupType.COMMUNITY
                ) {
                    this.showUnreadInTitle = !1;
                    return;
                }
                if (!b) {
                    this.showUnreadInTitle = !0;
                    return;
                }
                if (!this.msgs || this.msgs.length === 0) {
                    this.showUnreadInTitle = !1;
                    return;
                }
                a = !1;
                b = this.msgs;
                var c = d("WAWebFrontendChatGetters").getOptimisticUnreadCount(this);
                c = Math.max(0, b.length - c);
                for (; c < b.length; c++) {
                    var e = this.msgs.at(c);
                    if (!e) continue;
                    var f = d("WAWebUserPrefsMeUser").getMaybeMeUser();
                    if (
                        f != null &&
                        (e.isMentioned(f) ||
                            d("WAWebQuotedMsgModelUtils").isQuotedMsg(e, f))
                    ) {
                        f = this.getCollection().get(d("WAWebMsgGetters").getSender(e));
                        if (!f || !f.muteExpiration) {
                            a = !0;
                            break;
                        }
                    }
                }
                this.showUnreadInTitle = a;
            };
            f.removeFromCollection = function (a) {
                a.star && d("WAWebStarredMsgCollection").removeStarredMsgs([a]);
                d("WAWebMsgGetters").getIsMedia(a) && this.mediaMsgs
                    ? this.mediaMsgs.remove(a)
                    : d("WAWebMsgLinks").getLinksFromMsg(a).length > 0 && this.linkMsgs
                        ? this.linkMsgs.remove(a)
                        : d("WAWebFrontendMsgGetters").getAsDoc(a) && this.docMsgs
                            ? this.docMsgs.remove(a)
                            : d("WAWebFrontendMsgGetters").getAsProduct(a) != null &&
                                this.productMsgs
                                ? this.productMsgs.remove(a)
                                : d("WAWebFrontendMsgGetters").getAsEventCreation(a) != null &&
                                this.eventMsgs &&
                                this.eventMsgs.remove(a);
                d("WAWebMsgGetters").getIsKept(a) &&
                    this.keptMsgs &&
                    this.keptMsgs.remove(a);
                if (
                    d("WAWebChatGetters").getIsGroup(
                        d("WAWebFrontendMsgGetters").getChat(a)
                    )
                ) {
                    var b;
                    (b = d("WAWebFrontendMsgGetters").getChat(a).groupMetadata) == null
                        ? void 0
                        : b.unreadMentionMetadata.removeUnreadMentions(a.id.toString());
                }
            };
            f.getMediaMsgs = function () {
                this.mediaMsgs ||
                    (this.mediaMsgs = new (c("WAWebChatMediaMsgsCollection"))());
                return this.mediaMsgs;
            };
            f.getLinkMsgs = function () {
                this.linkMsgs ||
                    (this.linkMsgs = new (c("WAWebChatLinkMsgsCollection"))());
                return this.linkMsgs;
            };
            f.getDocMsgs = function () {
                this.docMsgs ||
                    (this.docMsgs = new (c("WAWebChatDocMsgsCollection"))());
                return this.docMsgs;
            };
            f.getEventMsgs = function () {
                this.eventMsgs ||
                    (this.eventMsgs = new (d(
                        "WAWebEventMsgsCollection"
                    ).EventMsgsCollection)(this));
                return this.eventMsgs;
            };
            f.getParticipantCount = function () {
                var a;
                return (
                    ((a = this.groupMetadata) == null ? void 0 : a.participants.length) ||
                    1
                );
            };
            f.iAmAdmin = function () {
                return this.groupMetadata
                    ? this.groupMetadata.participants.iAmAdmin()
                    : !1;
            };
            f.getProductMsgs = function () {
                this.productMsgs ||
                    (this.productMsgs = new (c("WAWebChatProductMsgsCollection"))());
                return this.productMsgs;
            };
            f.getStarredMsgs = function () {
                var a = this,
                    b = this.starredMsgs;
                b ||
                    ((this.starredMsgs = b =
                        new (d("WAWebStarredMsgCollection").StarredMsgCollection)()),
                        this.starredMsgs.add(
                            d("WAWebStarredMsgCollection").AllStarredMsgsCollection.filter(
                                function (b) {
                                    return d("WAWebFrontendMsgGetters").getChat(b) === a;
                                }
                            )
                        ));
                return b;
            };
            f.getKeptMsgs = function () {
                var a = this.keptMsgs;
                a ||
                    ((this.keptMsgs = a =
                        new (d("WAWebKeptMsgCollection").KeptMsgCollection)()),
                        this.keptMsgs.add(
                            this.msgs.filter(function (a) {
                                return d("WAWebMsgGetters").getIsKept(a);
                            })
                        ));
                return a;
            };
            f.hasKeptMsgs = function () {
                return this.msgs.some(function (a) {
                    return d("WAWebMsgGetters").getIsKept(a);
                });
            };
            f.canSendPolls = function () {
                return d("WAWebChatModelDerivedMethods").canSendPolls(this);
            };
            f.canInvokeBot = function () {
                var a;
                if (!d("WAWebBotGating").isBotEnabled()) return !1;
                if (d("WAWebChatGetters").getIsNewsletter(this)) return !1;
                if (d("WAWebContactGetters").getIsMe(this.contact)) return !1;
                if (d("WAWebFrontendChatGetters").getIsCapiHostedGroup(this)) return !1;
                if (this.id.isBot()) return !1;
                if (d("WAWebChatEphemerality").isEphemeralSettingOn(this)) return !1;
                if (
                    ((a = this.contact.businessProfile) == null
                        ? void 0
                        : a.isBizBot3p) === !0 ||
                    ((a = this.contact.businessProfile) == null
                        ? void 0
                        : a.isBizBot1p) === !0
                )
                    return !1;
                return d("WAWebTosGating").shouldBlockBotInvokeAsTosNotAvailable()
                    ? !1
                    : !0;
            };
            f.getAbortController = function () {
                return this.$ChatImpl$p_3;
            };
            f.getDeleteSignal = function () {
                return this.getAbortController().signal;
            };
            f.getCollection = function () {
                return d("WAWebChatGetters").getIsNewsletter(this)
                    ? c("WAWebNewsletterCollection")
                    : d("WAWebChatCollection").ChatCollection;
            };
            f.getGroupMetadataCollection = function () {
                return c("WAWebGroupMetadataCollection");
            };
            f.getNewsletterMetadataCollection = function () {
                return c("WAWebNewsletterMetadataCollection");
            };
            f.updateBotInvokeSystemMsgCreated = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    yield d("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                        hasCreatedBotInvokeSystemMsg: !0,
                    }),
                        (this.hasCreatedBotInvokeSystemMsg = !0);
                });
                function c() {
                    return a.apply(this, arguments);
                }
                return c;
            })();
            f.updateBizBotSysMsgCreated = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                    yield d("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                        bizBotSystemMsgType: a,
                    }),
                        (this.bizBotSystemMsgType = a);
                });
                function c(b) {
                    return a.apply(this, arguments);
                }
                return c;
            })();
            f.supportsKIC = function () {
                return d("WAWebFrontendChatGetters").getIsCAG(this) &&
                    !d("WAWebEphemeralKeepInChatAbpropUtils").isKeepInChatInCAGEnabled()
                    ? !1
                    : !0;
            };
            return e;
        })(c("WAWebSuperChatMsgs"));
        a.Proxy = "chat";
        a.idClass = c("WAWebWid");
        e = d("WAWebBaseModel").defineModel(a);
        g.Chat = e;
    },
    226
);