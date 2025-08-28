__d(
    "WAWebMsgCollection",
    [
        "Promise",
        "WALogger",
        "WANullthrows",
        "WAPromiseProps",
        "WATimeUtils",
        "WATypeUtils",
        "WAWebAck",
        "WAWebBackendErrors",
        "WAWebBaseCollection",
        "WAWebBotGenTypingIndicatorMsg",
        "WAWebChatCollection",
        "WAWebCollectionConstants",
        "WAWebCollectionUtils",
        "WAWebDBMessageFindLocal",
        "WAWebDBMsgUtils",
        "WAWebEventsWaitForBbEvent",
        "WAWebFrontendMsgGetters",
        "WAWebFtsConstants",
        "WAWebInvisiblePlaceholderViewModeProcessor",
        "WAWebLidMigrationUtils",
        "WAWebMessageAssociationUIUtils",
        "WAWebMsgDataFromModel",
        "WAWebMsgGetters",
        "WAWebMsgModel",
        "WAWebMsgOpaqueData",
        "WAWebMsgType",
        "WAWebNewsletterMsgHistoryUtils",
        "WAWebNewsletterViewModeUIUtils",
        "WAWebNoop",
        "WAWebProcessMultipleMsgsAction",
        "WAWebProductMessageListCollection",
        "WAWebProtobufsE2E.pb",
        "WAWebSyncButtonState",
        "WAWebUserPrefsMeUser",
        "WAWebViewMode.flow",
        "WAWebViewModeUtils",
        "WAWebWid",
        "WAWebWorkerSafeBackendApi",
        "asyncToGeneratorRuntime",
        "err",
    ],
    function (a, b, c, d, e, f, g) {
        var h;
        function i() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "processMultipleMessages. processMessageOrigin: ",
                "",
            ]);
            i = function () {
                return a;
            };
            return a;
        }
        function j() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:msg:getContext:before ctx message mismatch",
            ]);
            j = function () {
                return a;
            };
            return a;
        }
        function k() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:msg:getContext:before fetch error",
            ]);
            k = function () {
                return a;
            };
            return a;
        }
        function l() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:msg:getContext:after fetch error",
            ]);
            l = function () {
                return a;
            };
            return a;
        }
        function m() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:msg:getContext fetch error",
            ]);
            m = function () {
                return a;
            };
            return a;
        }
        function n() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:media error ",
                "",
            ]);
            n = function () {
                return a;
            };
            return a;
        }
        function o() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:search error ",
                "",
            ]);
            o = function () {
                return a;
            };
            return a;
        }
        function p() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:getAllDocsMsgs error ",
                "",
            ]);
            p = function () {
                return a;
            };
            return a;
        }
        function q() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:getAllDocsMsgs error 499 (unimplemented)",
            ]);
            q = function () {
                return a;
            };
            return a;
        }
        function r() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:getAllLinksMsgs error ",
                "",
            ]);
            r = function () {
                return a;
            };
            return a;
        }
        function s() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:getAllLinksMsgs error 499 (unimplemented)",
            ]);
            s = function () {
                return a;
            };
            return a;
        }
        function t() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:getAllMediaMsgs error ",
                "",
            ]);
            t = function () {
                return a;
            };
            return a;
        }
        function u() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:getAllMediaMsgs error 499 (unimplemented)",
            ]);
            u = function () {
                return a;
            };
            return a;
        }
        function v() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:getVoipCallLogMsgs error ",
                "",
            ]);
            v = function () {
                return a;
            };
            return a;
        }
        function w() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:getVoipCallLogMsgs error 499 (unimplemented)",
            ]);
            w = function () {
                return a;
            };
            return a;
        }
        function x() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:getEventMsgs error ",
                "",
            ]);
            x = function () {
                return a;
            };
            return a;
        }
        function y() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:getEventMsgs error 499 (unimplemented)",
            ]);
            y = function () {
                return a;
            };
            return a;
        }
        function z() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:getStarred error ",
                "",
            ]);
            z = function () {
                return a;
            };
            return a;
        }
        function A() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:getStarred error 499 (unimplemented)",
            ]);
            A = function () {
                return a;
            };
            return a;
        }
        function B() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:findQuery:got:",
                ":",
                "",
            ]);
            B = function () {
                return a;
            };
            return a;
        }
        function C() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:findQuery error ",
                "",
            ]);
            C = function () {
                return a;
            };
            return a;
        }
        function D() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:findQuery: start ",
                ", ",
                "",
            ]);
            D = function () {
                return a;
            };
            return a;
        }
        var E = 50;
        a = (function (a) {
            babelHelpers.inheritsLoose(e, a);
            function e() {
                var e;
                e = a.call(this) || this;
                e.pendingAdd = {};
                e.ftsCache = {};
                e.productListMessagesPrefetchChain = (h || (h = b("Promise"))).resolve(
                    []
                );
                e._editKeyByParentKey = new Map();
                e._parentKeyByEditKey = new Map();
                e._encryptedData = null;
                e.findQueryImpl = (function () {
                    var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                        var f = babelHelpers.assertThisInitialized(e),
                            g;
                        switch (a.direction) {
                            case "before":
                            case "after":
                                g = a.direction;
                                break;
                            default:
                                g = "before";
                                break;
                        }
                        var i = { add: g, isHistory: !0 };
                        d("WALogger").DEV(D(), a, g);
                        var j = yield d("WAWebDBMessageFindLocal").msgFindQuery(g, a);
                        if (j.status >= 400) {
                            d("WALogger").WARN(C(), j.status);
                            return (h || (h = b("Promise"))).reject(j.status);
                        }
                        var k = f.get(a);
                        c("WAWebWid").isNewsletter(a.remote) &&
                            k != null &&
                            (j = yield d("WAWebNewsletterMsgHistoryUtils").fillMsgHistoryGaps(
                                {
                                    jid: a.remote,
                                    msgs:
                                        g === "before"
                                            ? j.concat(
                                                d("WAWebMsgDataFromModel").msgDataFromMsgModel(k)
                                            )
                                            : [
                                                d("WAWebMsgDataFromModel").msgDataFromMsgModel(k),
                                            ].concat(j),
                                    serverIdsToSkip: d(
                                        "WAWebNewsletterViewModeUIUtils"
                                    ).getHiddenMessageServerIdsForChat(a.remote),
                                }
                            ));
                        k = function () {
                            var b = f.get(a);
                            if (b != null) return b.msgChunk;
                            b = d("WAWebChatCollection").ChatCollection.get(a.remote);
                            return b != null ? b.msgs : void 0;
                        };
                        j.forEach(function (a) {
                            a.invis = !0;
                        });
                        d("WALogger").LOG(B(), j.length, a.direction);
                        return f.processMultipleMessages(
                            a.remote,
                            j,
                            i,
                            "msgCollectionFindQuery",
                            k
                        );
                    });
                    return function (b) {
                        return a.apply(this, arguments);
                    };
                })();
                e.byParentMessage = d("WAWebCollectionUtils").aggregated(
                    function (a) {
                        var b = a.parentMsgKey;
                        a = a.type;
                        return a === d("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
                            a === d("WAWebMsgType").MSG_TYPE.UNKNOWN
                            ? "UNCATEGORIZED"
                            : b;
                    },
                    { subscribeToKey: "parentMsgKey" }
                );
                e.byChat = d("WAWebCollectionUtils").aggregated(function (a) {
                    a = a.id;
                    return a.remote;
                });
                e.listenTo(
                    babelHelpers.assertThisInitialized(e),
                    "remove",
                    e.removeFromCollection
                );
                return e;
            }
            var f = e.prototype;
            f.removeFromCollection = function (a) {
                var b = d("WAWebFrontendMsgGetters").getMaybeChat(a);
                b == null ? void 0 : b.removeFromCollection(a);
            };
            f.add = function (b, e) {
                b = Array.isArray(b) ? b : [b];
                b = b.filter(function (a) {
                    if (a.ephemeralDuration == null || a.ephemeralDuration === 0)
                        return !0;
                    a = new (d("WAWebMsgModel").Msg)(a);
                    return !a.isExpiredAndNotKept();
                });
                b = a.prototype.add.call(this, b, e);
                this.makeParentMessagesVisibleInChat(b);
                c("WAWebSyncButtonState")(b);
                this._prefetchProductListMessages(b);
                this.processVCardMessagesForLidMappings(b);
                this.processEditedMessages(b);
                return b;
            };
            f.makeParentMessagesVisibleInChat = function (a) {
                var b = this;
                a.filter(Boolean).forEach(function (a) {
                    var c = a.parentMsgKey;
                    a = a.viewMode;
                    if (
                        c &&
                        !d("WAWebViewModeUtils").isViewModeVisibleInSurface(
                            d("WAWebViewMode.flow").ViewModeSurface.CHAT,
                            a
                        )
                    ) {
                        a = b.get(c);
                        a &&
                            ((c = d("WAWebInvisiblePlaceholderViewModeProcessor")
                                .InvisiblePlaceholderViewModeProcessor
                                .compatibleMessageTypes) == null
                                ? void 0
                                : c.includes(a.type)) &&
                            !d("WAWebMessageAssociationUIUtils").shouldHideParentMessage({
                                parentMsg: a,
                                duringDetach: !1,
                            }) &&
                            !d("WAWebViewModeUtils").isViewModeVisibleInSurface(
                                d("WAWebViewMode.flow").ViewModeSurface.CHAT,
                                a == null ? void 0 : a.viewMode
                            ) &&
                            a.set("viewMode", d("WAWebViewMode.flow").ViewModeType.VISIBLE);
                    }
                });
            };
            f.processVCardMessagesForLidMappings = function (a) {
                a = a.reduce(function (a, b) {
                    if (b == null) return a;
                    if (
                        b.type !== d("WAWebMsgType").MSG_TYPE.VCARD &&
                        b.type !== d("WAWebMsgType").MSG_TYPE.MULTI_VCARD
                    )
                        return a;
                    b =
                        b.type === d("WAWebMsgType").MSG_TYPE.VCARD
                            ? b.getVcardWids()
                            : b.getMultiVcardWids();
                    if (b == null) return a;
                    b = b.filter(function (a) {
                        return d("WAWebLidMigrationUtils").toUserLid(a) == null;
                    });
                    if (b.length === 0) return a;
                    if (a == null) return new Set(b);
                    b.forEach(function (b) {
                        return a.add(b);
                    });
                    return a;
                }, null);
                if (a == null) return;
                d("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                    "syncContactListJob",
                    { contactIds: Array.from(a), shouldSyncDevice: !1, mode: "query" }
                );
            };
            f._prefetchProductListMessages = function (a) {
                this.productListMessagesPrefetchChain = a
                    .filter(function (a) {
                        var b;
                        return (
                            a != null &&
                            a.isNewMsg &&
                            a.type === d("WAWebMsgType").MSG_TYPE.LIST &&
                            ((b = a.list) == null ? void 0 : b.listType) ===
                            d("WAWebProtobufsE2E.pb").Message$ListMessage$ListType
                                .PRODUCT_LIST &&
                            ((b = a.list) == null ? void 0 : b.productListInfo) != null
                        );
                    })
                    .reduce(function (a, b) {
                        var c;
                        if (b == null) return a;
                        var e = b.requiresDirectConnection,
                            f = b.isForwarded
                                ? b.businessOwnerJid
                                : b.from.toString({ legacy: !0 });
                        c = (c = b.list) == null ? void 0 : c.productListInfo;
                        if (f == null || c == null) return a;
                        var g = d(
                            "WAWebProductMessageListCollection"
                        ).ProductMessageListCollection.getOrAdd(
                            b.id,
                            c,
                            e,
                            f,
                            (c = b.list) == null ? void 0 : c.title
                        );
                        return g != null &&
                            g.productCollection.getModelsArray().length === 0 &&
                            !g.isFetching()
                            ? a.then(function () {
                                return d(
                                    "WAWebProductMessageListCollection"
                                ).ProductMessageListCollection.update(g.id);
                            })
                            : a;
                    }, this.productListMessagesPrefetchChain);
            };
            f.getStarred = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
                    a,
                    c,
                    e
                ) {
                    c = {
                        count:
                            typeof c === "number" && !isNaN(c)
                                ? c
                                : d("WAWebCollectionConstants").PAGE_SIZE,
                        chat: a ? a : void 0,
                        remote: e == null ? void 0 : e.remote,
                        id: e == null ? void 0 : e.id,
                        fromMe: e == null ? void 0 : e.fromMe,
                        participant: e == null ? void 0 : e.participant,
                    };
                    a = { add: "search" };
                    e = yield d("WAWebDBMessageFindLocal").msgFindQuery("star", c);
                    c = e.status;
                    if (e.status >= 400) {
                        c === 499 ? d("WALogger").LOG(A()) : d("WALogger").WARN(z(), c);
                        return (h || (h = b("Promise"))).reject(c);
                    }
                    return this.processMultipleMessages(
                        void 0,
                        e,
                        a,
                        "msgCollectionGetStarred"
                    );
                });
                function c(b, c, d) {
                    return a.apply(this, arguments);
                }
                return c;
            })();
            f.getEventMsgs = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
                    a,
                    b,
                    c
                ) {
                    b = {
                        count:
                            typeof b === "number" && !Number.isNaN(b)
                                ? b
                                : d("WAWebCollectionConstants").PAGE_SIZE,
                        chat: a,
                        remote: c == null ? void 0 : c.remote,
                        id: c == null ? void 0 : c.id,
                        fromMe: c == null ? void 0 : c.fromMe,
                        participant: c == null ? void 0 : c.participant,
                    };
                    a = { add: "search" };
                    c = yield d("WAWebDBMessageFindLocal").msgFindQuery("event", b);
                    b = c.status;
                    if (c.status >= 400) {
                        b === 499 ? d("WALogger").LOG(y()) : d("WALogger").WARN(x(), b);
                        throw new (d("WAWebBaseCollection").CollectionSilentQueryError)(b);
                    }
                    return this.processMultipleMessages(
                        void 0,
                        c,
                        a,
                        "msgCollectionGetEvents"
                    );
                });
                function c(b, c, d) {
                    return a.apply(this, arguments);
                }
                return c;
            })();
            f.getVoipCallLogMsgs = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, c) {
                    a = {
                        count:
                            typeof a === "number" && !isNaN(a)
                                ? a
                                : d("WAWebCollectionConstants").PAGE_SIZE,
                        chat: void 0,
                        remote: c == null ? void 0 : c.remote,
                        id: c == null ? void 0 : c.id,
                        fromMe: c == null ? void 0 : c.fromMe,
                        participant: c == null ? void 0 : c.participant,
                    };
                    c = yield d("WAWebDBMessageFindLocal").msgFindQuery("call_log", a);
                    a = c.status;
                    if (c.status >= 400) {
                        a === 499 ? d("WALogger").LOG(w()) : d("WALogger").WARN(v(), a);
                        return (h || (h = b("Promise"))).reject(a);
                    }
                    return this.processMultipleMessages(
                        void 0,
                        c,
                        { add: "search" },
                        "msgCollectionGetVoipCallLogs"
                    );
                });
                function c(b, c) {
                    return a.apply(this, arguments);
                }
                return c;
            })();
            f.getAllMediaMsgs = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, c) {
                    a = {
                        count: a != null ? a : E,
                        chat: void 0,
                        remote: c == null ? void 0 : c.remote,
                        id: c == null ? void 0 : c.id,
                        fromMe: c == null ? void 0 : c.fromMe,
                        participant: c == null ? void 0 : c.participant,
                        media: "allMedia",
                    };
                    c = yield d("WAWebDBMessageFindLocal").msgFindQuery("media", a);
                    a = c.status;
                    if (c.status != null && c.status >= 400) {
                        a === 499 ? d("WALogger").LOG(u()) : d("WALogger").WARN(t(), a);
                        return (h || (h = b("Promise"))).reject(a);
                    }
                    return this.processMultipleMessages(
                        void 0,
                        Array.isArray(c) ? c : c.messages,
                        { add: "search" },
                        "msgCollectionGetAllMedia"
                    );
                });
                function c(b, c) {
                    return a.apply(this, arguments);
                }
                return c;
            })();
            f.getAllLinksMsgs = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, c) {
                    a = {
                        count: a != null ? a : E,
                        chat: void 0,
                        remote: c == null ? void 0 : c.remote,
                        id: c == null ? void 0 : c.id,
                        fromMe: c == null ? void 0 : c.fromMe,
                        participant: c == null ? void 0 : c.participant,
                        media: "allLinks",
                    };
                    c = yield d("WAWebDBMessageFindLocal").msgFindQuery("media", a);
                    a = c.status;
                    if (c.status != null && c.status >= 400) {
                        a === 499 ? d("WALogger").LOG(s()) : d("WALogger").WARN(r(), a);
                        return (h || (h = b("Promise"))).reject(a);
                    }
                    return this.processMultipleMessages(
                        void 0,
                        Array.isArray(c) ? c : c.messages,
                        { add: "search" },
                        "msgCollectionGetAllMedia"
                    );
                });
                function c(b, c) {
                    return a.apply(this, arguments);
                }
                return c;
            })();
            f.getAllDocsMsgs = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, c) {
                    a = {
                        count: a != null ? a : E,
                        chat: void 0,
                        remote: c == null ? void 0 : c.remote,
                        id: c == null ? void 0 : c.id,
                        fromMe: c == null ? void 0 : c.fromMe,
                        participant: c == null ? void 0 : c.participant,
                        media: "allDocs",
                    };
                    c = yield d("WAWebDBMessageFindLocal").msgFindQuery("media", a);
                    a = c.status;
                    if (c.status != null && c.status >= 400) {
                        a === 499 ? d("WALogger").LOG(q()) : d("WALogger").WARN(p(), a);
                        return (h || (h = b("Promise"))).reject(a);
                    }
                    return this.processMultipleMessages(
                        void 0,
                        Array.isArray(c) ? c : c.messages,
                        { add: "search" },
                        "msgCollectionGetAllMedia"
                    );
                });
                function c(b, c) {
                    return a.apply(this, arguments);
                }
                return c;
            })();
            f.getMessagesById = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                    a = yield d("WAWebDBMsgUtils").getMsgsByMsgKey(a);
                    return d("WAPromiseProps").promiseProps({
                        messages: this.processMultipleMessages(
                            void 0,
                            a,
                            { add: "search" },
                            "msgCollectionGetMessagesById"
                        ),
                        eof: !0,
                        canceled: !1,
                    });
                });
                function c(b) {
                    return a.apply(this, arguments);
                }
                return c;
            })();
            f.hydrateOrGetMessages = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                    var b = this,
                        e = a.filter(function (a) {
                            return !b.get(a);
                        });
                    if (e.length > 0) {
                        var f = yield this.getMessagesById(e);
                        f = f.messages;
                        if (f.length !== e.length)
                            throw new (d("WAWebBaseCollection").CollectionSilentQueryError)(
                                "No message found for one or more ids"
                            );
                    }
                    return a.map(function (a) {
                        return c("WANullthrows")(b.get(a));
                    });
                });
                function e(b) {
                    return a.apply(this, arguments);
                }
                return e;
            })();
            f.queryVcard = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                    a = yield d("WAWebDBMessageFindLocal").queryVcard(a);
                    return this.processMultipleMessages(
                        void 0,
                        a,
                        { add: "search" },
                        "msgCollectionQueryVCard"
                    );
                });
                function c(b) {
                    return a.apply(this, arguments);
                }
                return c;
            })();
            f.incrementalStarredUpdate = function (a) {
                return this.processMultipleMessages(
                    void 0,
                    a,
                    { add: "search" },
                    "msgCollectionIncrementalStarredUpdate"
                );
            };
            f.search = function (a, b, c, e, f) {
                var g = this;
                b === void 0 && (b = 1);
                f === void 0 && (f = {});
                var h = a + "__" + (f.label || (f.kind && f.kind) || "");
                if (b === 1 && !e) {
                    var i = this.ftsCache[h];
                    if (i) return i;
                    i = this._search(a, b, c, e, f.label, f.kind);
                    this.ftsCache[h] = i;
                    var j = function () {
                        g.ftsCache[h] = null;
                    };
                    self.setTimeout(j, d("WAWebFtsConstants").FTS_TTL);
                    i["catch"](j);
                    return i;
                }
                return this._search(a, b, c, e, f.label, f.kind);
            };
            f._search = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
                    a,
                    c,
                    e,
                    f,
                    g,
                    i
                ) {
                    a = {
                        searchTerm: a,
                        page: d("WATypeUtils").isNumber(c) && c !== 0 ? c : 1,
                        count:
                            d("WATypeUtils").isNumber(e) && e !== 0
                                ? e
                                : d("WAWebCollectionConstants").PAGE_SIZE,
                        remote: f,
                        tagToCancel: f ? this.pendingSearchTag : void 0,
                        label: g,
                        kind: i,
                    };
                    c = { add: "search" };
                    e = yield d("WAWebDBMessageFindLocal").msgFindQuery("search", a);
                    a.tagToCancel === this.pendingSearchTag &&
                        (this.pendingSearchTag = void 0);
                    if (e.status === 499)
                        return d("WAPromiseProps").promiseProps({
                            messages: (h || (h = b("Promise"))).resolve([]),
                            eof: !1,
                            canceled: !0,
                        });
                    else if (e.status === 404)
                        return (h || (h = b("Promise"))).reject(
                            new (d("WAWebBackendErrors").E404)()
                        );
                    else if (e.status >= 400) {
                        d("WALogger").WARN(o(), e.status);
                        return (h || (h = b("Promise"))).reject(
                            new (d("WAWebBackendErrors").ServerStatusCodeError)(
                                e.status,
                                "failed to find a msg during fts"
                            )
                        );
                    }
                    f = Array.isArray(e) ? e : e.messages;
                    g = Array.isArray(e) ? !0 : e.eof;
                    return d("WAPromiseProps").promiseProps({
                        messages: this.processMultipleMessages(
                            void 0,
                            f,
                            c,
                            "msgCollectionSearch"
                        ),
                        eof: g,
                        canceled: !1,
                    });
                });
                function a(b, c, d, e, f, g) {
                    return a.apply(this, arguments);
                }
                return a;
            })();
            f.queryMedia = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
                    a,
                    c,
                    e,
                    f,
                    g
                ) {
                    a = {
                        remote: a,
                        count:
                            d("WATypeUtils").isNumber(c) && c !== 0
                                ? c
                                : d("WAWebCollectionConstants").PAGE_SIZE,
                        id: f == null ? void 0 : f.id,
                        fromMe: f == null ? void 0 : f.fromMe,
                        participant: f == null ? void 0 : f.participant,
                        direction: e || "before",
                        media: g,
                        msgKey: f,
                    };
                    c = { add: "search" };
                    e = yield d("WAWebDBMessageFindLocal").msgFindQuery("media", a);
                    if (e.status >= 400) {
                        d("WALogger").WARN(n(), e.status);
                        return e.status === 404
                            ? (h || (h = b("Promise"))).reject(
                                new (d("WAWebBackendErrors").E404)()
                            )
                            : (h || (h = b("Promise"))).reject(
                                new (d("WAWebBackendErrors").ServerStatusCodeError)(
                                    e.status,
                                    "failed to find a msg during media query"
                                )
                            );
                    }
                    return !g
                        ? d("WAPromiseProps").promiseProps({
                            docCount: e.docCount,
                            linkCount: e.linkCount,
                            mediaCount: e.mediaCount,
                            messages: this.processMultipleMessages(
                                void 0,
                                e.messages,
                                c,
                                "msgCollectionQueryMedia"
                            ),
                        })
                        : this.processMultipleMessages(
                            void 0,
                            e,
                            { add: "search" },
                            "msgCollectionQueryMedia"
                        );
                });
                function c(b, c, d, e, f) {
                    return a.apply(this, arguments);
                }
                return c;
            })();
            f.getContext = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, e) {
                    var f = this,
                        g = this.get(a),
                        i = c("WAWebWid").isNewsletter(a.remote);
                    if (g && !g.fromQuotedMsg)
                        return (h || (h = b("Promise")))
                            .all([
                                d("WAWebDBMessageFindLocal").msgFindQuery("before", a),
                                d("WAWebDBMessageFindLocal").msgFindQuery("after", a),
                            ])
                            .then(
                                (function () {
                                    var c = b("asyncToGeneratorRuntime").asyncToGenerator(
                                        function* (c) {
                                            var j = c[0];
                                            c = c[1];
                                            if ((!Array.isArray(j) || !Array.isArray(c)) && !i) {
                                                d("WALogger").WARN(m()).devConsole(j, c);
                                                throw j.status || c.status;
                                            }
                                            j = Array.isArray(j) ? j : [];
                                            c = Array.isArray(c) ? c : [];
                                            var k = g.serverId;
                                            g.search = !1;
                                            return (h || (h = b("Promise"))).all([
                                                f.processMultipleMessages(
                                                    a.remote,
                                                    !i || k == null
                                                        ? j
                                                        : yield d(
                                                            "WAWebNewsletterMsgHistoryUtils"
                                                        ).fillMsgHistoryGaps({
                                                            jid: a.remote,
                                                            msgs: j.concat(
                                                                d(
                                                                    "WAWebMsgDataFromModel"
                                                                ).msgDataFromMsgModel(g)
                                                            ),
                                                            range: { start: k - a.count, end: k },
                                                            serverIdsToSkip: d(
                                                                "WAWebNewsletterViewModeUIUtils"
                                                            ).getHiddenMessageServerIdsForChat(a.remote),
                                                        }),
                                                    { add: "before", isHistory: !0 },
                                                    "msgCollectionGetContext",
                                                    e
                                                ),
                                                f.processMultipleMessages(
                                                    a.remote,
                                                    !i || k == null
                                                        ? c
                                                        : yield d(
                                                            "WAWebNewsletterMsgHistoryUtils"
                                                        ).fillMsgHistoryGaps({
                                                            jid: a.remote,
                                                            msgs: [
                                                                d(
                                                                    "WAWebMsgDataFromModel"
                                                                ).msgDataFromMsgModel(g),
                                                            ].concat(c),
                                                            range: { start: k, end: k + a.count },
                                                            serverIdsToSkip: d(
                                                                "WAWebNewsletterViewModeUIUtils"
                                                            ).getHiddenMessageServerIdsForChat(a.remote),
                                                        }),
                                                    { add: "after", isHistory: !0 },
                                                    "msgCollectionGetContext",
                                                    e
                                                ),
                                            ]);
                                        }
                                    );
                                    return function (a) {
                                        return c.apply(this, arguments);
                                    };
                                })()
                            );
                    var n = { add: "after", isHistory: !0 };
                    return d("WAWebDBMessageFindLocal")
                        .msgFindQuery("after", a)
                        .then(
                            (function () {
                                var g = b("asyncToGeneratorRuntime").asyncToGenerator(
                                    function* (b) {
                                        if (!Array.isArray(b)) {
                                            d("WALogger").WARN(l()).devConsole(b);
                                            throw b.status;
                                        }
                                        if (c("WAWebWid").isStatus(b[0].id.remote))
                                            throw c("err")("status, stop querying before the msg");
                                        var g = a.serverId;
                                        return f.processMultipleMessages(
                                            a.remote,
                                            !i || g == null
                                                ? b
                                                : yield d(
                                                    "WAWebNewsletterMsgHistoryUtils"
                                                ).fillMsgHistoryGaps({
                                                    jid: a.remote,
                                                    msgs: b,
                                                    range: { start: g, end: g + a.count },
                                                    serverIdsToSkip: d(
                                                        "WAWebNewsletterViewModeUIUtils"
                                                    ).getHiddenMessageServerIdsForChat(a.remote),
                                                }),
                                            n,
                                            "msgCollectionFindQuery",
                                            e
                                        );
                                    }
                                );
                                return function (a) {
                                    return g.apply(this, arguments);
                                };
                            })()
                        )
                        .then(function (e) {
                            var g = c("WANullthrows")(e[0]),
                                l = g.id.clone();
                            l.count = a.count + 1;
                            var m = { add: "before", isHistory: !0 };
                            return (h || (h = b("Promise"))).all([
                                d("WAWebDBMessageFindLocal")
                                    .msgFindQuery("before", l)
                                    .then(
                                        (function () {
                                            var c = b("asyncToGeneratorRuntime").asyncToGenerator(
                                                function* (b) {
                                                    if (!Array.isArray(b)) {
                                                        d("WALogger").WARN(k()).devConsole(b);
                                                        throw b.status;
                                                    }
                                                    var c = b[b.length - 1];
                                                    c.fromQuotedMsg = !1;
                                                    c = c.id;
                                                    if (!c.equals(a)) {
                                                        d("WALogger").WARN(j()).devConsole(b);
                                                        throw 405;
                                                    }
                                                    c = function () {
                                                        return g.msgChunk;
                                                    };
                                                    var e = g.serverId;
                                                    return f.processMultipleMessages(
                                                        a.remote,
                                                        !i || e == null
                                                            ? b
                                                            : yield d(
                                                                "WAWebNewsletterMsgHistoryUtils"
                                                            ).fillMsgHistoryGaps({
                                                                jid: a.remote,
                                                                msgs: b,
                                                                range: { start: e, end: e - a.count },
                                                                serverIdsToSkip: d(
                                                                    "WAWebNewsletterViewModeUIUtils"
                                                                ).getHiddenMessageServerIdsForChat(a.remote),
                                                            }),
                                                        m,
                                                        "msgCollectionFindQuery",
                                                        c
                                                    );
                                                }
                                            );
                                            return function (a) {
                                                return c.apply(this, arguments);
                                            };
                                        })()
                                    ),
                                h.resolve(e),
                            ]);
                        });
                });
                function e(b, c) {
                    return a.apply(this, arguments);
                }
                return e;
            })();
            f.hasSynced = function () {
                return c("WAWebEventsWaitForBbEvent")(
                    this,
                    d("WAWebCollectionConstants").COLLECTION_HAS_SYNCED
                );
            };
            f.processMultipleMessages = function (a, b, e, f, g, h) {
                var j = this;
                h === void 0 && (h = !0);
                (a == null ? void 0 : a.isRegularUser()) &&
                    d("WALogger").LOG(i(), f).tags("missing-lid");
                var k = function () {
                    return d("WAWebProcessMultipleMsgsAction")._processMultipleMessages(
                        a,
                        b,
                        e,
                        f,
                        g
                    );
                };
                if (a) {
                    var l,
                        m = this.pendingAdd[a];
                    m && h ? (l = m.then(k)) : (l = k());
                    l["finally"](function () {
                        a && j.pendingAdd[a] === l && (j.pendingAdd[a] = null);
                    })["catch"](c("WAWebNoop"));
                    return (this.pendingAdd[a] = l);
                }
                return k();
            };
            f.hasUnsentMessages = function () {
                return this.some(function (a) {
                    return (
                        a.ack === d("WAWebAck").ACK.CLOCK &&
                        a.local &&
                        d("WAWebMsgGetters").getIsSentByMe(a)
                    );
                });
            };
            f.getByEditMsgKey = function (a) {
                a = this._parentKeyByEditKey.get(a.toString());
                return a && this.get(a);
            };
            f.processEditedMessages = function (a) {
                var b = this;
                a.forEach(function (a) {
                    if (!a || !d("WAWebMsgGetters").getIsEdited(a)) return;
                    var c = b._editKeyByParentKey.get(a.id.toString());
                    c != null && b._parentKeyByEditKey["delete"](c);
                    c = a.latestEditMsgKey;
                    if (!c) return;
                    b._editKeyByParentKey.set(a.id.toString(), c.toString());
                    b._parentKeyByEditKey.set(c.toString(), a.id);
                });
            };
            f.addInitialBotTypingIndicatorToChat = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
                    var c,
                        e = d("WAWebChatCollection").ChatCollection.get(a);
                    if (
                        !e ||
                        (!(e == null ? void 0 : e.id.isBot()) &&
                            !((c = e.contact.businessProfile) == null
                                ? void 0
                                : c.isBizBot3p))
                    )
                        return;
                    if (e.botInitialTypingIndicatorMsgId != null) {
                        c = this.get(e.botInitialTypingIndicatorMsgId);
                        if (c == null) return;
                        c == null ? void 0 : c["delete"]({ skipUpdatingSortTime: !0 });
                    }
                    e.set({ botInitialTypingIndicatorMsgId: b }, { silent: !0 });
                    c = {
                        id: b,
                        t: d("WATimeUtils").unixTime(),
                        from: a,
                        to: d("WAWebUserPrefsMeUser").getMaybeMeUser(),
                        type: "chat",
                        subtype: d("WAWebBotGenTypingIndicatorMsg")
                            .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE,
                        body: "",
                    };
                    void this.processMultipleMessages(
                        a,
                        [babelHelpers["extends"]({}, c, { recvFresh: !0, isNewMsg: !0 })],
                        { add: "after", isHistory: !1 },
                        "createChatOnNewMsg",
                        null,
                        !0
                    );
                });
                function c(b, c) {
                    return a.apply(this, arguments);
                }
                return c;
            })();
            f.encryptAndClearModels = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var a = this._models.map(function (a) {
                        return d("WAWebMsgOpaqueData").encryptDataInMsgModel(a);
                    });
                    yield (h || (h = b("Promise"))).all(a);
                });
                function c() {
                    return a.apply(this, arguments);
                }
                return c;
            })();
            f.decryptAndSetModels = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                    var c = this._models.map(function (b) {
                        return d("WAWebMsgOpaqueData").decryptDataInMsgModel(b, a);
                    });
                    yield (h || (h = b("Promise"))).all(c);
                });
                function c(b) {
                    return a.apply(this, arguments);
                }
                return c;
            })();
            return e;
        })(d("WAWebBaseCollection").BaseCollection);
        a.model = d("WAWebMsgModel").Msg;
        e = new a();
        g.MEDIA_QUERY_LIMIT = E;
        g.MsgCollectionImpl = a;
        g.MsgCollection = e;
    },
    98
);