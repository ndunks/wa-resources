__d(
    "WAWebCmd",
    [
        "invariant",
        "$InternalEnum",
        "Promise",
        "WAAbortError",
        "WALogger",
        "WAPromiseDelays",
        "WAWebChatEntryPoint",
        "WAWebComposeBoxActions",
        "WAWebCurrentUser",
        "WAWebDocumentFlushed",
        "WAWebDrawerManager",
        "WAWebEventEmitter",
        "WAWebMsgTunnelBridge",
        "WAWebPageLoadLogging",
        "WAWebStateUtils",
        "WAWebWamMemoryStat",
        "asyncToGeneratorRuntime",
        "err",
        "gkx",
        "lodash",
    ],
    function (a, b, c, d, e, f, g, h) {
        var i;
        function j() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "Cmd: botTogglePluginSearchDetailsToggle called w/ null target id.",
            ]);
            j = function () {
                return a;
            };
            return a;
        }
        function k() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "Cmd: offline_process_ready",
            ]);
            k = function () {
                return a;
            };
            return a;
        }
        function l() {
            var a = babelHelpers.taggedTemplateLiteralLoose(
                ["CMD.logout debug: \n ", ""],
                ["CMD.logout debug: \\n ", ""]
            );
            l = function () {
                return a;
            };
            return a;
        }
        function m() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "Unexpected scrollChatToBottom error: ",
                "",
            ]);
            m = function () {
                return a;
            };
            return a;
        }
        function n() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "Unexpected_scrollToFocusedMsg error: ",
                "",
            ]);
            n = function () {
                return a;
            };
            return a;
        }
        function o() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "openChatBottom. entry point: ",
                "",
            ]);
            o = function () {
                return a;
            };
            return a;
        }
        function p() {
            var a = babelHelpers.taggedTemplateLiteralLoose(["openChatBottom"]);
            p = function () {
                return a;
            };
            return a;
        }
        function q() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "openChatFromUnread with chat unreadMsgAnchor: ",
                ",  chat unreadCount:  ",
                "",
            ]);
            q = function () {
                return a;
            };
            return a;
        }
        function r() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "Unexpected openChat error: ",
                "",
            ]);
            r = function () {
                return a;
            };
            return a;
        }
        function s() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "Cmd: initialLoadReady",
            ]);
            s = function () {
                return a;
            };
            return a;
        }
        function t() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "cmd:clearUIBusy uibusy timeout",
            ]);
            t = function () {
                return a;
            };
            return a;
        }
        a = b("$InternalEnum").Mirrored(["Sender", "Admin"]);
        e = "app_state_sync_completed";
        var u = 400;
        f = (function (a) {
            babelHelpers.inheritsLoose(e, a);
            function e() {
                var b;
                for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                    f[g] = arguments[g];
                return (
                    ((b = a.call.apply(a, [this].concat(f)) || this),
                        (b.isMainLoaded = !1),
                        (b.uiBusy = 0),
                        (b.isMainStreamReadyMd = !1),
                        (b.isOfflineDeliveryEnd = !1),
                        (b.$CmdImpl$p_3 = c("lodash").debounce(
                            function () {
                                b.uiBusy &&
                                    (d("WALogger").LOG(t()), (b.uiBusy = 0), b.$CmdImpl$p_4());
                            },
                            1e3,
                            { maxWait: 5e3 }
                        )),
                        (b.$CmdImpl$p_4 = w(function () {
                            b.uiBusy === 0 || h(0, 75716, b.uiBusy);
                            if (b.uiBusy !== 0) return;
                            b.$CmdImpl$p_3.cancel();
                            b.trigger("ui_idle");
                        })),
                        babelHelpers.assertThisInitialized(b)) ||
                    babelHelpers.assertThisInitialized(b)
                );
            }
            var f = e.prototype;
            f.mainLoaded = function () {
                (this.isMainLoaded = !0), this.trigger("main_loaded");
            };
            f.initialLoadReady = function () {
                d("WALogger").LOG(s()), this.trigger("initial_load_ready");
            };
            f.logSocketSummary = function () {
                this.trigger("log_socket_summary");
            };
            f.muteAllReactions = function (a, b, c) {
                this.trigger("mute_all_reactions", a, b, c);
            };
            f.muteChat = function (a, b, c, e) {
                this.trigger("mute_chat", d("WAWebStateUtils").unproxy(a), b, c, e);
            };
            f.muteChatMultiselect = function (a, b, c) {
                this.trigger("mute_chat_multiselect", a, b, c);
            };
            f.muteChatFromEntryPoint = function (a, b, c, e) {
                this.trigger(
                    "mute_chat_from_entrypoint",
                    d("WAWebStateUtils").unproxy(a),
                    b,
                    c,
                    e
                );
            };
            f.assignChat = function (a, b) {
                this.trigger("assign_chat", d("WAWebStateUtils").unproxy(a), b);
            };
            f.deleteOrExitChat = function (a, b) {
                this.trigger("delete_or_exit_chat", d("WAWebStateUtils").unproxy(a), b);
            };
            f.deleteOrExitChatFromEntryPoint = function (a, b, c) {
                this.trigger(
                    "delete_or_exit_chat_from_entrypoint",
                    d("WAWebStateUtils").unproxy(a),
                    b,
                    c
                );
            };
            f.clearChat = function (a, b) {
                this.trigger("clear_chat", d("WAWebStateUtils").unproxy(a), b);
            };
            f.archiveChat = function (a, b, c) {
                c === void 0 && (c = !0),
                    this.trigger("archive_chat", d("WAWebStateUtils").unproxy(a), b, c);
            };
            f.archiveChatFromEntryPoint = function (a, b, c, e) {
                e === void 0 && (e = !0),
                    this.trigger(
                        "archive_chat_from_entrypoint",
                        d("WAWebStateUtils").unproxy(a),
                        b,
                        c,
                        e
                    );
            };
            f.pinChat = function (a, b) {
                this.trigger("pin_chat", d("WAWebStateUtils").unproxy(a), b);
            };
            f.favoriteChat = function (a, b, c) {
                this.trigger("favorite_chat", d("WAWebStateUtils").unproxy(a), b, c);
            };
            f.markChatUnread = function (a, b) {
                this.trigger("mark_chat_unread", d("WAWebStateUtils").unproxy(a), b);
            };
            f.msgInfoDrawer = function (a) {
                this.trigger("msg_info_drawer", d("WAWebStateUtils").unproxy(a));
            };
            f.chatSearch = function (a) {
                this.trigger("chat_search", d("WAWebStateUtils").unproxy(a));
            };
            f.scrollChatHeight = function (a) {
                this.trigger("scroll_chat_by_height", a);
            };
            f.ctwaAdPreviewDrawer = function (a, b, c) {
                this.trigger(
                    "ctwa_ad_preview_drawer",
                    d("WAWebStateUtils").unproxy(a),
                    b,
                    c
                );
            };
            f.chatInfoDrawer = function (a, b) {
                this.trigger(
                    "chat_info_drawer",
                    d("WAWebStateUtils").unproxy(a),
                    b == null ? void 0 : b.showFullGroupDescription,
                    b == null ? void 0 : b.scrollToParticipantList,
                    b == null ? void 0 : b.sourceGroupChatOrNewsletter,
                    b == null ? void 0 : b.focusNewsletterDescriptionOnMount,
                    b == null ? void 0 : b.focusGroupSubjectOnMount,
                    b == null ? void 0 : b.focusGroupDescriptionOnMount
                );
            };
            f.openCurrentChatInfo = function () {
                this.trigger("open_current_chat_info");
            };
            f.blockCurrentChat = function () {
                this.trigger("block_current_chat");
            };
            f.clearCurrentChatConversationHistory = function () {
                this.trigger("clear_current_chat_conversation_history");
            };
            f.exitCurrentGroup = function () {
                this.trigger("exit_current_group");
            };
            f.replyCurrentMessage = function () {
                this.trigger("reply_current_message");
            };
            f.replyCurrentMessagePrivate = function () {
                this.trigger("reply_current_message_private");
            };
            f.forwardCurrentMessage = function () {
                this.trigger("forward_current_message");
            };
            f.deleteSelectedMessage = function () {
                this.trigger("delete_current_message");
            };
            f.starCurrentMessage = function () {
                this.trigger("star_current_message");
            };
            f.startPttRecording = function () {
                this.trigger("start_ptt_recording");
            };
            f.pausePttRecording = function () {
                this.trigger("pause_ptt_recording");
            };
            f.sendPttRecording = function () {
                v.trigger("send_ptt_recording");
            };
            f.editGroupDescription = function () {
                this.trigger("edit_group_description");
            };
            f.attachMediaDrawer = function (a) {
                var b = d("WAWebStateUtils").unproxy(a.chat),
                    c = function (c) {
                        c.length > 0 &&
                            d("WAWebComposeBoxActions").ComposeBoxActions.setTextContent(
                                b,
                                c.join("\n\n")
                            ),
                            a.onCancel == null ? void 0 : a.onCancel();
                    };
                if (b.id.isBot()) return;
                c = babelHelpers["extends"]({}, a, { chat: b, onCancel: c });
                this.trigger("attach_media_drawer", c);
            };
            f.attachProduct = function (a) {
                this.trigger("attach_product", a);
            };
            f.verificationDrawer = function (a) {
                this.trigger("verification_drawer", a);
            };
            f.mediaViewerModal = function (a) {
                var b = a.msg,
                    c = a.getZoomNode,
                    d = a.currentTime,
                    e = a.highlightedMsgIds,
                    f = a.shouldShowNumberText;
                a = a.shouldShowAllMedia;
                this.trigger("media_viewer_modal", {
                    msg: b,
                    getZoomNode: c,
                    currentTime: d,
                    highlightedMsgIds: e,
                    shouldShowNumberText: f,
                    shouldShowAllMedia: a,
                });
            };
            f.openMediaViewerForAlbumMedia = function (a) {
                this.trigger("open_media_viewer_for_album_media", a);
            };
            f.productImageViewerModal = function (a, b) {
                this.trigger("product_image_viewer_modal", a, b);
            };
            f.ephemeralDrawer = function (a, b, c) {
                this.trigger("ephemeral_drawer", a, b, c);
            };
            f.openCommunityHome = function (a, b) {
                this.trigger("open_community_home", a, b);
            };
            f.openCommunityTabbedInfo = function (a, b, c, d) {
                this.trigger("open_community_tabbed_info", a, b, c, d);
            };
            f.openCommunityPendingGroupsDrawer = function (a) {
                this.trigger("open_community_pending_groups_drawer", a);
            };
            f.openCommunityHomeManageGroups = function (a) {
                this.trigger("open_community_home_manage_groups", a);
            };
            f.openCommunitySettingsDrawer = function (a) {
                this.trigger("open_community_settings_drawer", a);
            };
            f.openCommunitySubgroupJoinModal = function (a, b) {
                this.trigger("open_subgroup_join_modal", a, b);
            };
            f.openProfile = function (a) {
                this.trigger("open_profile", a);
            };
            f.communityAddNewGroup = function (a, b, c) {
                this.trigger("open_community_add_new_group", a, b, c);
            };
            f.openCreatedNewsletter = function (a) {
                this.trigger("open_created_newsletter", a);
            };
            f.openNewsletterProfile = function (a, b) {
                this.trigger("open_newsletter_profile", a, b);
            };
            f.editNewsletterDescription = function () {
                this.trigger("edit_newsletter_description");
            };
            f.openEventInfoDrawer = function (a, b, c, d) {
                this.trigger("open_event_info_drawer", a, b, c, d);
            };
            f.sendStarMsgs = function (a, b, c, e) {
                this.trigger(
                    "send_star_msgs",
                    d("WAWebStateUtils").unproxy(a),
                    b,
                    c,
                    e
                );
            };
            f.sendUnstarMsgs = function (a, b, c, e) {
                this.trigger(
                    "send_unstar_msgs",
                    d("WAWebStateUtils").unproxy(a),
                    b,
                    c,
                    e
                );
            };
            f.sendDeleteMsgs = function (a, b, c, e, f, g) {
                this.trigger(
                    "send_delete_msgs",
                    d("WAWebStateUtils").unproxy(a),
                    b,
                    c,
                    e,
                    f,
                    g
                );
            };
            f.sendRevokeMsgs = function (a, b, c) {
                this.trigger("send_revoke_msgs", d("WAWebStateUtils").unproxy(a), b, c);
            };
            f.$CmdImpl$p_1 = function (a, c, e) {
                var f = this;
                e === void 0 && (e = d("WAWebChatEntryPoint").ChatEntryPoint.Unknown);
                var g = d("WAWebStateUtils").unproxy(a);
                g.chatEntryPoint = e;
                d("WAWebMsgTunnelBridge").msgSyncTunnelBridge.setActiveChat(g.id);
                d("WAWebWamMemoryStat").uploadMemoryIfChatWasOpened(g.id);
                return new (i || (i = b("Promise")))(function (a) {
                    f.trigger(
                        "open_chat",
                        g,
                        c,
                        e,
                        (function () {
                            var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
                                b
                            ) {
                                (yield d(
                                    "WAWebDrawerManager"
                                ).DrawerManager.isDrawerRightOverlappingCoversationPanel()) &&
                                    d("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
                                    a(b);
                            });
                            return function (a) {
                                return c.apply(this, arguments);
                            };
                        })()
                    );
                })["catch"](function (a) {
                    d("WALogger").LOG(r(), String(a));
                    throw a;
                });
            };
            f.openChatAt = function (a) {
                var c = this,
                    e = a.chat,
                    f = a.msgContext,
                    g = a.chatEntryPoint,
                    h = a.onSuccess;
                a = d("WAWebStateUtils").unproxy(e);
                if (!f) return this.openChatBottom(a, g);
                this.setUiBusy(!0);
                e = this.$CmdImpl$p_1(a, f, g)
                    .then(
                        (function () {
                            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
                                a
                            ) {
                                var d,
                                    e,
                                    g = f.enableAnimation != null ? f.enableAnimation : !0;
                                if (a)
                                    if (a.wasVisible)
                                        (d = function () {
                                            return c.$CmdImpl$p_2({
                                                pos: "offset",
                                                offset: a.offset,
                                            });
                                        }),
                                            (e = function () {
                                                return c.$CmdImpl$p_2({
                                                    pos: "center",
                                                    animate: g,
                                                    duration: u,
                                                    easing: [0.7, 0, 0.3, 1],
                                                });
                                            });
                                    else {
                                        d = function () {
                                            return c.$CmdImpl$p_2({
                                                pos: a.alignAt,
                                                scrollIfNeeded: !0,
                                            });
                                        };
                                        switch (a.alignAt) {
                                            case "top":
                                            case "bottom":
                                                e = function () {
                                                    return c.$CmdImpl$p_2({
                                                        pos: "center",
                                                        animate: g,
                                                        duration: u,
                                                        easing: [0.88, 0.64, 0.13, 0.99],
                                                    });
                                                };
                                                break;
                                            case "center":
                                            default:
                                                e = function () {
                                                    return (i || (i = b("Promise"))).resolve();
                                                };
                                        }
                                    }
                                else
                                    (d = function () {
                                        return c.$CmdImpl$p_2({ pos: "center" });
                                    }),
                                        (e = function () {
                                            return (i || (i = b("Promise"))).resolve();
                                        });
                                yield d();
                                return e();
                            });
                            return function (b) {
                                return a.apply(this, arguments);
                            };
                        })()
                    )
                    .then(function () {
                        var a;
                        if (
                            (f == null
                                ? void 0
                                : (a = f.msg) == null
                                    ? void 0
                                    : a.botPluginReferenceIndex) != null
                        ) {
                            a =
                                f == null
                                    ? void 0
                                    : (a = f.msg) == null
                                        ? void 0
                                        : a.botResponseTargetId;
                            a != null && c.botTogglePluginSearchDetailsToggle(a, !0);
                        }
                        (f == null ? void 0 : f.highlightMsg) === !0 &&
                            c.flashFocusedMsg(f.highlightMentionMsg);
                    })
                    .then(function () {
                        if (h) {
                            var a = h.mediaMsgToOpenInMediaViewer,
                                b = h.onScrollToQuotedCarouselCard;
                            a &&
                                void d("WAPromiseDelays")
                                    .delayMs(500)
                                    .then(function () {
                                        v.openMediaViewerForAlbumMedia(
                                            d("WAWebStateUtils").unproxy(a)
                                        ),
                                            b == null ? void 0 : b();
                                    });
                        }
                        return !0;
                    })
                ["catch"](
                    d("WAAbortError").catchAbort(function () {
                        return !1;
                    })
                );
                e["finally"](function () {
                    c.setUiBusy(!1);
                });
                return e;
            };
            f.openChatFromUnread = function (a, e) {
                var f = this;
                a = d("WAWebStateUtils").unproxy(a);
                if (!c("gkx")("26258")) {
                    window.chat = a;
                    var g =
                        (a.unreadMsgAnchor && a.unreadMsgAnchor.id.toString()) ||
                        "No unreadMsgAnchor found";
                    d("WALogger").LOG(q(), g, a.unreadCount);
                }
                var h;
                a.unreadMsgAnchor &&
                    (h = {
                        collection: a.unreadMsgAnchor.msgChunk,
                        promise: (i || (i = b("Promise"))).resolve(),
                        msg: a.unreadMsgAnchor,
                        isUnreadDivider: a.shouldShowUnreadDivider(),
                    });
                if (h || a.unreadCount > 0) {
                    this.setUiBusy(!0);
                    g = this.$CmdImpl$p_1(a, h, e)
                        .then(function () {
                            return f.$CmdImpl$p_2({ pos: "top", offset: -120 });
                        })
                        .then(function () {
                            return !0;
                        })
                    ["catch"](
                        d("WAAbortError").catchAbort(function () {
                            return !1;
                        })
                    );
                    g["finally"](function () {
                        f.setUiBusy(!1);
                    });
                    return g;
                }
                return this.openChatBottom(a, e);
            };
            f.openChatBottom = function (a, b) {
                var c = this;
                a = d("WAWebStateUtils").unproxy(a);
                d("WALogger").LOG(p());
                a.id.isLid() && d("WALogger").LOG(o(), b);
                this.setUiBusy(!0);
                var e;
                a.msgs.length > 0 &&
                    (e = { collection: a.msgs, msg: a.msgs.last(), isUnreadDivider: !1 });
                a = this.$CmdImpl$p_1(a, e, b)
                    .then(function () {
                        return c.scrollChatToBottom();
                    })
                    .then(function () {
                        return !0;
                    })
                ["catch"](
                    d("WAAbortError").catchAbort(function () {
                        return !1;
                    })
                );
                a["finally"](function () {
                    c.setUiBusy(!1);
                });
                return a;
            };
            f.$CmdImpl$p_2 = function (a) {
                var c = this;
                return new (i || (i = b("Promise")))(function (b) {
                    c.trigger("scroll_to_focused_msg", b, a);
                })["catch"](function (a) {
                    d("WALogger").WARN(n(), String(a));
                });
            };
            f.scrollChatToBottom = function () {
                var a = this;
                return new (i || (i = b("Promise")))(function (b) {
                    a.trigger("scroll_chat_to_bottom", b);
                })["catch"](function (a) {
                    d("WALogger").WARN(m(), String(a));
                });
            };
            f.scrollToActiveChat = function () {
                this.trigger("scroll_to_active_chat");
            };
            f.scrollChatListToTop = function () {
                this.trigger("scroll_chat_list_to_top");
            };
            f.flashFocusedMsg = function (a) {
                var b = this;
                self.setTimeout(function () {
                    b.trigger("flash_focused_msg"), a && b.trigger("flash_mention_msg");
                }, 0);
            };
            f.setActiveNavBarItem = function (a) {
                this.trigger("set_active_nav_bar", a);
            };
            f.setActiveFilter = function (a, b, c) {
                this.trigger("set_active_filter", a, b, c);
            };
            f.updateChatlistSelection = function (a) {
                a = d("WAWebStateUtils").unproxy(a);
                this.trigger("update_chatlist_selection", a);
            };
            f.closeChat = function (a) {
                a = d("WAWebStateUtils").unproxy(a);
                this.trigger("close_chat", a);
                d("WAWebWamMemoryStat").uploadMemoryInfoOnChatClose();
                d("WAWebMsgTunnelBridge").msgSyncTunnelBridge.resetActiveChat(a.id);
            };
            f.closeActiveChat = function () {
                this.trigger("close_active_chat");
            };
            f.focusNextChat = function (a) {
                this.trigger("focus_next_chat", a);
            };
            f.focusPrevChat = function (a) {
                this.trigger("focus_prev_chat", a);
            };
            f.focusChatSearch = function () {
                this.trigger("focus_chat_search");
            };
            f.closeStatusViewer = function () {
                this.trigger("close_status_viewer");
            };
            f.openComposeBoxExpressionPanel = function (a) {
                this.trigger("open_compose_box_panel", a);
            };
            f.openAttachmentDropdown = function () {
                this.trigger("open_attachment_dropdown");
            };
            f.closeExpressionPanels = function () {
                this.trigger("close_expression_panels");
            };
            f.logout = function () {
                if (!c("gkx")("26258"))
                    try {
                        throw c("err")(
                            "Non Error - CMD logout, thrown only for getting logout stack trace"
                        );
                    } catch (a) {
                        a instanceof Error && d("WALogger").LOG(l(), a.stack).verbose();
                    }
                this.trigger("logout");
            };
            f.openContextMenu = function (a, b) {
                this.trigger("open_context_menu", a, b);
            };
            f.closeContextMenu = function (a) {
                this.trigger("close_context_menu", a);
            };
            f.openTooltip = function (a, b) {
                this.trigger("open_tooltip", a, b);
            };
            f.closeTooltip = function (a) {
                this.trigger("close_tooltip", a);
            };
            f.alertNewMsg = function (a) {
                this.trigger("alert_new_msg", a);
            };
            f.newMediaMsg = function (a) {
                this.trigger("new_media_msg", a);
            };
            f.alertCall = function (a, b, c, d, e) {
                this.trigger("alert_call", {
                    wid: a,
                    msgId: b,
                    isVideo: c,
                    isGroup: d,
                    isSilenced: e,
                });
            };
            f.cancelCall = function (a) {
                this.trigger("cancel_call", a);
            };
            f.windowError = function (a) {
                d("WAWebCurrentUser").isEmployee() && this.trigger("window_error", a);
            };
            f.onPanesWillChange = function (a) {
                this.trigger("panes_will_change", a);
            };
            f.onPanesDidChange = function (a) {
                this.trigger("panes_did_change", a);
            };
            f.reactionChangeLastMessage = function () {
                this.trigger("reaction_changed_last_msg");
            };
            f.openGroupsV4InviteRequestFlow = function (a, b, c, d) {
                this.trigger("open_groups_v4_invite_request_flow", a, b, c, d);
            };
            f.toggleLidDebugBadge = function () {
                this.trigger("toggle_lid_debug_badge");
            };
            f.openCommandPalette = function () {
                this.trigger("open_command_palette");
            };
            f.closeCommandPalette = function () {
                this.trigger("close_command_palette");
            };
            f.setUiBusy = function (a) {
                var b = this.uiBusy || 0;
                a ? (++b, this.$CmdImpl$p_3(), this.$CmdImpl$p_4.cancel()) : b && --b;
                this.uiBusy = b;
                b === 0 && (this.$CmdImpl$p_3.cancel(), this.$CmdImpl$p_4());
            };
            f.windowMouseDown = function (a) {
                this.trigger("window_mousedown", a);
            };
            f.windowClick = function (a) {
                this.trigger("window_click", a);
            };
            f.midnight = function () {
                this.trigger("midnight");
            };
            f.serverUpdatedClientExpiration = function () {
                this.trigger("serverUpdatedClientExpiration");
            };
            f.scrollMessages = function () {
                this.trigger("scroll_messages");
            };
            f.getConversationHeaderOffset = function (a) {
                this.trigger("get_conversation_header_offset", a);
            };
            f.floaterEscapeOverlap = function (a, b) {
                this.trigger("floater_escape_overlap", a, b);
            };
            f.refreshMessages = function () {
                this.trigger("refresh_messages");
            };
            f.storageInitializationError = function () {
                this.trigger("storage_initialization_error");
            };
            f.editGroupSubject = function () {
                this.trigger("edit_group_subject");
            };
            f.endFlow = function () {
                this.trigger("end_flow");
            };
            f.refreshQR = function () {
                this.trigger("md_refresh_qr");
            };
            f.setSocketState = function (a) {
                this.trigger("set_socket_state", a);
            };
            f.socketStreamDisconnected = function () {
                this.trigger("socket_stream_disconnected");
            };
            f.openSocketStream = function () {
                this.trigger("open_socket_stream");
            };
            f.reconnectSocket = function () {
                this.trigger("reconnect_socket");
            };
            f.openLongLinkModal = function () {
                this.trigger("open_long_link_modal");
            };
            f.closeLongLinkModal = function (a) {
                a === void 0 && (a = !1), this.trigger("close_long_link_modal", a);
            };
            f.openLockScreenModal = function () {
                this.trigger("open_lock_screen_modal");
            };
            f.correctPasscodeLockScreen = function (a) {
                this.trigger("correct_passcode_lock_screen", a);
            };
            f.incorrectPasscodeLockScreen = function () {
                this.trigger("incorrect_passcode_lock_screen");
            };
            f.offlineDeliveryEnd = function () {
                (this.isOfflineDeliveryEnd = !0), this.trigger("offline_delivery_end");
            };
            f.resetOfflineDeliveryState = function () {
                (this.isOfflineDeliveryEnd = !1),
                    this.trigger("offline_delivery_state_reset");
            };
            f.readyForProcessOffline = function () {
                d("WALogger").LOG(k()), this.trigger("offline_process_ready");
            };
            f.readyForMainStreamMode = function () {
                d("WAWebPageLoadLogging").addPageLoadQplPoint("main_stream_mode_ready"),
                    (this.isMainStreamReadyMd = !0),
                    this.trigger("main_stream_mode_ready");
            };
            f.onInitialChatHistorySynced = function () {
                this.trigger("on_initial_chat_synced");
            };
            f.onRecentChatHistorySynced = function () {
                this.trigger("on_recent_chat_history_synced");
            };
            f.onFullChatHistorySynced = function () {
                this.trigger("on_full_chat_history_synced");
            };
            f.onHistorySyncChunkProcessed = function (a) {
                this.trigger("new_history_sync_chunk_processed", a);
            };
            f.handleOfflineProgressUpdate = function () {
                this.trigger("offline_progress_update");
            };
            f.criticalSyncDone = function () {
                this.trigger("on_critical_sync_done");
            };
            f.onTemporaryBan = function (a) {
                this.trigger("account_temporarily_banned", a);
            };
            f.onStartingLogout = function () {
                this.trigger("starting_logout");
            };
            f.showServiceUnavailableError = function () {
                this.trigger("service_unavailable_503");
            };
            f.merchantDetailsDrawer = function (a) {
                this.trigger("merchant_details_drawer", a);
            };
            f.showMerchantDetailsEntityTypePopup = function (a, b) {
                this.trigger("show_merchant_details_entity_type_popup", a, b);
            };
            f.showCountrySelector = function (a, b, c, d, e, f, g) {
                this.trigger("show_country_selector_popup", a, b, c, d, e, f, g);
            };
            f.toggleStickerMaker = function () {
                this.trigger("toggle_sticker_maker");
            };
            f.onAccountSyncForPrivacy = function (a) {
                this.trigger("account_sync_for_privacy", a);
            };
            f.updateStatusPrivacySettings = function (a) {
                this.trigger("update_status_privacy_settings", a);
            };
            f.openStickerPack = function (a) {
                this.trigger("open_sticker_pack", a);
            };
            f.onStatusViewerOpen = function () {
                this.trigger("status_viewer_open");
            };
            f.onStatusPostingFlow = function () {
                this.trigger("status_posting_flow");
            };
            f.triggerStorageAlert = function () {
                c("gkx")("26258") || this.trigger("handle_low_storage_butter_bar");
            };
            f.triggerBugReportV2 = function () {
                d("WAWebCurrentUser").isEmployee() &&
                    this.trigger("trigger_bugreport_v2");
            };
            f.onAbPropsUpdate = function (a) {
                this.trigger("on_ab_props_update", a);
            };
            f.abPropsLoaded = function () {
                this.trigger("ab_props_loaded");
            };
            f.onNotificationPermissionChange = function () {
                this.trigger("on_notification_permission_change");
            };
            f.onBrigadingStateChange = function (a) {
                this.trigger("on_brigading_state_change", a);
            };
            f.playNextPtv = function (a) {
                this.trigger("sequential_ptv_playback", a);
            };
            f.groupNotificationContextCardRendered = function (a) {
                this.trigger("group_notification_context_card_rendered", a);
            };
            f.botTogglePluginSearchDetailsToggle = function (a, b) {
                if (a == null) {
                    d("WALogger").WARN(j());
                    return;
                }
                this.trigger("bot_toggle_plugin_search_details_for_target_id_" + a, b);
            };
            f.rerenderApp = function () {
                this.trigger("rerender_app");
            };
            f.toggleAiRepliesStatus = function (a) {
                this.trigger("toggle_ai_replies_status", a);
            };
            f.chatListVisibilityChange = function (a) {
                this.trigger("chat_list_visibility_change", a);
            };
            f.limitSharingDrawer = function (a) {
                this.trigger("limit_sharing_drawer", a);
            };
            f.reachoutTimelockStateChange = function () {
                this.trigger("reachout_timelock_state_change");
            };
            return e;
        })(c("WAWebEventEmitter"));
        var v = new f();
        function w(a) {
            var b,
                c = function () {
                    if (b) return;
                    b = new AbortController();
                    var c = b,
                        e = c.signal;
                    d("WAWebDocumentFlushed")
                        .documentFlushed({ signal: e })
                        .then(
                            function () {
                                if (e.aborted) return;
                                b = null;
                                a();
                            },
                            function (a) {
                                if (
                                    a instanceof Error &&
                                    a.name === d("WAAbortError").ABORT_ERROR
                                )
                                    return;
                                throw a;
                            }
                        );
                };
            c.cancel = function () {
                if (!b) return;
                b.abort();
                b = null;
            };
            return c;
        }
        g.Revoke = a;
        g.APP_STATE_SYNC_COMPLETED = e;
        g.CmdImpl = f;
        g.Cmd = v;
    },
    98
);