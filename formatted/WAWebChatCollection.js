__d(
    "WAWebChatCollection",
    [
        "WALogger",
        "WAWebBaseCollection",
        "WAWebChatComparator",
        "WAWebChatGetters",
        "WAWebChatLockUpdateDailyStats",
        "WAWebChatModel",
        "WAWebIdleTaskRunner",
        "WAWebLidMigrationUtils",
        "WAWebSendUnstarAllChatAction",
        "WAWebSocketConstants",
        "WAWebSocketModel",
        "lodash",
    ],
    function (a, b, c, d, e, f, g) {
        function h() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "ChatCollection:getActive more than one active chat",
            ]);
            h = function () {
                return a;
            };
            return a;
        }
        var i = 1e3 * 60 * 30;
        a = (function (a) {
            babelHelpers.inheritsLoose(b, a);
            function b() {
                var b;
                b = a.call(this) || this;
                b.notSpam = {};
                b.promises = { sendUnstarAll: null };
                b._sortEnabled = !1;
                b._viewOnceCleanupTaskQueue = new Set();
                b.setIndexes = function () {
                    b.forEach(function (a, b) {
                        a.initialIndex = b;
                    });
                };
                b.enableSortListener();
                b.listenTo(d("WAWebSocketModel").Socket, "change:stream", function () {
                    d("WAWebSocketModel").Socket.stream ===
                        d("WAWebSocketConstants").SOCKET_STREAM.RESUMING &&
                        b.forEach(function (a) {
                            a.pendingMsgs = !1;
                        });
                });
                b.listenToOnce(
                    babelHelpers.assertThisInitialized(b),
                    "sort",
                    c("lodash").debounce(b.setIndexes, 100)
                );
                b._scheduleViewOnceMediaCleanup();
                b.listenTo(
                    babelHelpers.assertThisInitialized(b),
                    "change:isLocked",
                    c("lodash").debounce(function () {
                        d("WAWebChatLockUpdateDailyStats").updateChatLockDailyStats({
                            totalFolderChatsCount: b.filter(function (a) {
                                return a.isLocked;
                            }).length,
                        });
                    }, 500)
                );
                return b;
            }
            var e = b.prototype;
            e._scheduleViewOnceMediaCleanup = function () {
                var a = this;
                self.clearTimeout(this._viewOnceCleanupTimeout);
                this._viewOnceCleanupTimeout = self.setTimeout(function () {
                    d("WAWebIdleTaskRunner").IdleCallbackTasks.enqueue(function () {
                        a._runViewOnceMediaCleanup(), a._scheduleViewOnceMediaCleanup();
                    });
                }, i);
            };
            e._runViewOnceMediaCleanup = function () {
                var a = this;
                this.forEach(function (b) {
                    var c = b.id;
                    if (a._viewOnceCleanupTaskQueue.has(c)) return;
                    d("WAWebIdleTaskRunner").IdleCallbackTasks.enqueue(function () {
                        a._viewOnceCleanupTaskQueue["delete"](c);
                        var b = a.get(c);
                        (b == null ? void 0 : b.active) === !1 &&
                            b.deregisterExpiredViewOnceBulkMessages(b.msgs);
                    });
                    a._viewOnceCleanupTaskQueue.add(c);
                });
            };
            e.getUnreadCount = function () {
                return this.filter(function (a) {
                    return a.showUnreadInTitle;
                }).length;
            };
            e.enableSortListener = function (a) {
                if (this._sortEnabled) return;
                this.listenTo(
                    this,
                    "change:t change:pin change:id change:isLocked change:endOfHistoryTransferType change:isParentGroup change:msgs change:createdLocally change:msgsLength",
                    this.sort
                );
                a === !0 && this.sort();
                this._sortEnabled = !0;
            };
            e.disableSortListener = function () {
                this._sortEnabled &&
                    (this.stopListening(null, null, this.sort), (this._sortEnabled = !1));
            };
            e.getActive = function () {
                var a = this.filter(function (a) {
                    return a.active;
                });
                a.length > 1 &&
                    d("WALogger")
                        .ERROR(h())
                        .sendLogs("more-than-one-active-chat-in-chat-collection");
                return a[0];
            };
            e.getChatByAccountLid = function (a) {
                if (!a.isLid()) return null;
                var b = this.get(a);
                if (b) return b;
                b = d("WAWebLidMigrationUtils").toPn(a);
                b = b ? this.get(b) : null;
                return a.equals(b == null ? void 0 : b.accountLid) ? b : null;
            };
            e.unstarAllMessages = function (a, b) {
                return d("WAWebSendUnstarAllChatAction").unstarAllMessages(a, b);
            };
            e.hasAnyUnreadSinceGivenTimestamp = function (a) {
                return this.length === 0
                    ? !1
                    : this.some(function (b) {
                        var c;
                        c = (c = b.t) != null ? c : 0;
                        return d("WAWebChatGetters").getHasUnread(b) && c > a;
                    });
            };
            e["delete"] = function () {
                a.prototype["delete"].call(this),
                    this.listenToOnce(
                        this,
                        "sort",
                        c("lodash").debounce(this.setIndexes, 100)
                    );
            };
            return b;
        })(d("WAWebBaseCollection").BaseCollection);
        a.model = d("WAWebChatModel").Chat;
        a.comparator = c("WAWebChatComparator");
        b = new a();
        g.ChatCollectionImpl = a;
        g.ChatCollection = b;
    },
    98
);