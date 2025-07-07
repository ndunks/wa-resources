__d(
    "WAWebBaseCollection",
    [
        "Promise",
        "WAFilteredCatch",
        "WALogger",
        "WATypeUtils",
        "WAWebBackendErrors",
        "WAWebBaseCachePolicy",
        "WAWebCachePolicies",
        "WAWebCollection",
        "WAWebConnModel",
        "WAWebMiscErrors",
        "WAWebSocketConstants",
        "WAWebSocketModel",
        "WAWebUserPrefsStore",
        "asyncToGeneratorRuntime",
        "cr:5292",
        "err",
        "gkx",
        "uniqueID",
    ],
    function (a, b, c, d, e, f, g) {
        var h;
        function i() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "baseCollection:initFromCache load: ",
                "",
            ]);
            i = function () {
                return a;
            };
            return a;
        }
        function j() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "baseCollection:query query promise rejected: ",
                "",
            ]);
            j = function () {
                return a;
            };
            return a;
        }
        function k() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "LogoutDrop error: ",
                "",
            ]);
            k = function () {
                return a;
            };
            return a;
        }
        function l() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "Called update without an id",
            ]);
            l = function () {
                return a;
            };
            return a;
        }
        function m() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "Called find without an id",
            ]);
            m = function () {
                return a;
            };
            return a;
        }
        function n() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "Detected UI change inside a transaction in collection ",
                ".\n      This can result in a consistency issue. See https://fburl.com/aleoj4tt item #1 for details.",
            ]);
            n = function () {
                return a;
            };
            return a;
        }
        function o() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "baseCollection:saveToCache save: ",
                "",
            ]);
            o = function () {
                return a;
            };
            return a;
        }
        var p = { QUERY: "QUERY", FIND: "FIND", UPDATE: "UPDATE" },
            q = {}.toString(),
            r = { id: "none", policy: d("WAWebBaseCachePolicy").CACHE_POLICY.NONE },
            s = (function (b) {
                babelHelpers.inheritsLoose(a, b);
                function a(a) {
                    var c;
                    c = b.call(this, a) || this;
                    c.name = "CollectionSilentQueryError";
                    c.message = a;
                    return c;
                }
                return a;
            })(babelHelpers.wrapNativeSuper(Error));
        a = (function (a) {
            babelHelpers.inheritsLoose(e, a);
            function e() {
                var b;
                b = a.call(this) || this;
                b._inflight = {};
                b._cachePolicy = d("WAWebCachePolicies").createCachePolicy(
                    babelHelpers.assertThisInitialized(b),
                    b.constructor.cachePolicy || r
                );
                b._staleCollection = b.constructor.staleCollection || !1;
                b._staleCollection === !0 &&
                    b.listenTo(
                        d("WAWebSocketModel").Socket,
                        "change:stream",
                        b._handleStreamChange
                    );
                b._cachePolicy.enableCaching();
                b._cachePolicy.constructor.policy ===
                    d("WAWebBaseCachePolicy").CACHE_POLICY.LOAD &&
                    (b.listenTo(d("WAWebConnModel").Conn, "me_ready", b._updateFromCache),
                        d("WAWebConnModel").Conn.meReadyTriggered && b._updateFromCache());
                return b;
            }
            var f = e.prototype;
            f.initializeFromCache = function (a) {
                this.add(a);
            };
            f.saveToCache = function () {
                if (!d("WAWebConnModel").Conn.shouldSaveToCache()) return;
                var a = this._cachePolicy.id;
                d("WALogger").LOG(o(), String(a));
                c("WAWebUserPrefsStore").setCollection(a, this.toJSON());
            };
            f.add = function (e, f) {
                var g = this;
                c("gkx")("26258") ||
                    ((b("cr:5292") == null ? void 0 : b("cr:5292").currentTransaction) !=
                        null &&
                        d("WALogger").WARN(n(), this.constructor.name));
                if (e) {
                    if (d("WAWebConnModel").Conn.blockStoreAdds)
                        throw new (d("WAWebBackendErrors").LogoutDrop)(
                            "adding to store when blocking store adds"
                        );
                    var h = Array.isArray(e) ? e : [e];
                    if (
                        h.every(function (a) {
                            return a == null ? void 0 : a.isState;
                        })
                    ) {
                        var i = h.filter(function (a) {
                            return !g.get(a.id);
                        });
                        i.length && a.prototype.add.call(this, i, f);
                        return h;
                    }
                }
                return a.prototype.add.call(this, e, f);
            };
            f.findQuery = function (a, b) {
                return this._query(p.QUERY, a, b);
            };
            f.find = function (a, e) {
                if (a) return this._query(p.FIND, a, e);
                d("WALogger").ERROR(m()).sendLogs("find-without-id");
                return (h || (h = b("Promise"))).reject(
                    c("err")("called find without an id")
                );
            };
            f.update = function (a, e) {
                if (a) return this._query(p.UPDATE, a, e);
                d("WALogger").ERROR(l()).sendLogs("update-without-id");
                return (h || (h = b("Promise"))).reject(
                    c("err")("called update without an id")
                );
            };
            f.gadd = function (a, b) {
                if (this.modelClass.prototype.isIdType(a)) {
                    var d = this.get(a);
                    return d ? d : this.add({ id: a }, b)[0];
                }
                if (a.id) {
                    d = b ? b : {};
                    d.merge = !0;
                    return this.add(a, d)[0];
                }
                throw c("err")("gadd called without an id attr (id)");
            };
            f.gaddUp = function (a) {
                var b = this._staleCollection;
                this.get(a.id) && (b = !1);
                b = babelHelpers["extends"]({ stale: b }, a);
                a = this.add(b, { merge: !0 })[0];
                if (a) {
                    b = a;
                    a.stale && this.find(a.id);
                    return b;
                }
                throw c("err")(".gaddUp called without an id attr (id)");
            };
            f["delete"] = function () {
                (this._inflight = {}), this.reset();
            };
            f._handleResume = function () {
                switch (d("WAWebSocketModel").Socket.stream) {
                    case d("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED:
                        if (!this._staleCollection) return;
                        this.forEach(function (a) {
                            a && (a.stale = !0);
                        });
                        break;
                    case d("WAWebSocketConstants").SOCKET_STREAM.RESUMING:
                    case d("WAWebSocketConstants").SOCKET_STREAM.SYNCING:
                    case d("WAWebSocketConstants").SOCKET_STREAM.CONNECTED:
                        break;
                }
            };
            f._query = function (a, e, f) {
                var g = this,
                    i = d("WATypeUtils").isString(e) ? e : e.toString();
                i === q && (i = c("uniqueID")("collection_query_"));
                var l = a === p.QUERY ? void 0 : this.get(e),
                    m = "force-" + i;
                ((this._inflight[m] && a === p.FIND) || a === p.UPDATE) && (i = m);
                if (this._inflight[i])
                    return a === p.FIND && l && !l.stale
                        ? (h || (h = b("Promise"))).resolve(l)
                        : this._inflight[i];
                return !l || l.stale || a === p.UPDATE
                    ? (this._inflight[i] = this._serverQuery(a, e, f)
                    ["finally"](function () {
                        delete g._inflight[i];
                    })
                    ["catch"](
                        d("WAFilteredCatch").filteredCatch(
                            d("WAWebBackendErrors").LogoutDrop,
                            function (a) {
                                d("WALogger").WARN(k(), a.toString()).devConsole(a);
                            }
                        )
                    )
                    ["catch"](function (a) {
                        if (a instanceof s) d("WALogger").LOG(j(), String(a));
                        else throw a;
                    }))
                    : (h || (h = b("Promise"))).resolve(l);
            };
            f._serverQuery = (function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
                    a,
                    b,
                    c
                ) {
                    var e;
                    a === p.UPDATE
                        ? (e = this._update(b, c))
                        : a === p.FIND
                            ? (e = this.findImpl(b, c))
                            : (e = this.findQueryImpl(b));
                    a = yield e;
                    if (this._staleCollection) {
                        b = Array.isArray(a) ? a : [a];
                        b.filter(Boolean).forEach(function (a) {
                            typeof a.stale === "undefined" && (a.stale = !1);
                        });
                    }
                    (c == null ? void 0 : c.set)
                        ? (e = this.set(a))
                        : (e = this.add(a, { merge: !0 }));
                    if (Array.isArray(a)) return e;
                    if (e[0]) return e[0];
                    throw new (d("WAWebMiscErrors").ModelCreateError)("Unknown", a);
                });
                function a(b, c, d) {
                    return a.apply(this, arguments);
                }
                return a;
            })();
            f._update = function (a, b) {
                return this.findImpl(a, b);
            };
            f._handleStreamChange = function () {
                this._handleResume(),
                    this._cachePolicy.constructor.policy ===
                    d("WAWebBaseCachePolicy").CACHE_POLICY.LOAD &&
                    this._updateFromCache();
            };
            f._updateFromCache = function () {
                var a = this._cachePolicy.id;
                this._cachePolicy.disableCaching();
                if (!d("WAWebConnModel").Conn.shouldSaveToCache()) return;
                d("WALogger").LOG(i(), String(a));
                this.initializeFromCache(c("WAWebUserPrefsStore").getCollection(a));
                this._cachePolicy.enableCaching();
            };
            return e;
        })(c("WAWebCollection"));
        g.CollectionSilentQueryError = s;
        g.BaseCollection = a;
    },
    98
);