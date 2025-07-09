__d(
    "WAWebMsgKey",
    [
        "WALogger",
        "WARandomHex",
        "WAWebMsgKeyNewId",
        "WAWebParseMsgKeyString",
        "WAWebUserPrefsMeUser",
        "WAWebWid",
        "WAWebWidFactory",
        "asyncToGeneratorRuntime",
        "err",
        "isStringNullOrEmpty",
    ],
    function (a, b, c, d, e, f, g) {
        function h() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgKeyNewId: ",
                ", message: ",
                ", stack: ",
                "",
            ]);
            h = function () {
                return a;
            };
            return a;
        }
        function i() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "[msg-key] generated ",
                "",
            ]);
            i = function () {
                return a;
            };
            return a;
        }
        function j() {
            var a = babelHelpers.taggedTemplateLiteralLoose(["Incorrect Wid MsgKey"]);
            j = function () {
                return a;
            };
            return a;
        }
        function k() {
            var a = babelHelpers.taggedTemplateLiteralLoose(["MsgKey case error"]);
            k = function () {
                return a;
            };
            return a;
        }
        function l() {
            var a = babelHelpers.taggedTemplateLiteralLoose(["Incorrect Wid MsgKey"]);
            l = function () {
                return a;
            };
            return a;
        }
        function m() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "No matching constructor MsgKey",
            ]);
            m = function () {
                return a;
            };
            return a;
        }
        function n() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "Unclear constructor MsgKey",
            ]);
            n = function () {
                return a;
            };
            return a;
        }
        function o() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "MsgKey error: id is already a MsgKey",
            ]);
            o = function () {
                return a;
            };
            return a;
        }
        a = (function () {
            function a(b) {
                b = b;
                if (!b) throw c("err")("MsgKey error: obj is null/undefined");
                b.id instanceof a && ((b = b.id), d("WALogger").WARN(o()));
                var e = !c("isStringNullOrEmpty")(b.id),
                    f = b.from != null && b.to != null && e;
                e = b.fromMe !== void 0 && b.remote != null && e;
                var g,
                    h,
                    i,
                    p,
                    q,
                    r,
                    s,
                    t = d("WAWebUserPrefsMeUser").getMaybeMeUser();
                if (!t)
                    throw c("err")(
                        "MsgKey error: me is undefined. Running tests? Call setupGlobalsForTests first."
                    );
                else if (f && e) {
                    d("WALogger").WARN(n()).devConsole(b);
                    throw c("err")("MsgKey error: unclear which constructor to use");
                } else if (!f && !e) {
                    d("WALogger").WARN(m()).devConsole(b);
                    throw c("err")("MsgKey error: don't have a matching constructor");
                } else if (f) {
                    f = b;
                    g = f.from;
                    h = f.to;
                    i = f.id;
                    p = f.participant;
                    q = f.selfDir;
                    if (
                        !(g instanceof c("WAWebWid")) ||
                        !(h instanceof c("WAWebWid")) ||
                        (p && !(p instanceof c("WAWebWid")))
                    ) {
                        d("WALogger").WARN(l()).devConsole(g, h, p);
                        throw c("err")("MsgKey error: something is not a wid");
                    }
                    f = c("WAWebWid").equals(g, h);
                    q = f ? q : void 0;
                    f && d("WAWebUserPrefsMeUser").isMePrimary(g)
                        ? ((r = q === "out"), (s = h))
                        : d("WAWebUserPrefsMeUser").isMePrimary(g)
                            ? ((r = !0), (s = h))
                            : d("WAWebUserPrefsMeUser").isMePrimary(h)
                                ? ((r = !1), (s = g))
                                : f && (c("WAWebWid").isGroup(g) || c("WAWebWid").isBroadcast(g))
                                    ? ((r = !0), (s = g))
                                    : d("WALogger").WARN(k()).devConsole(g, h, i, t);
                    r !== void 0 && (this.fromMe = r);
                    s && (this.remote = s);
                    i && (this.id = i);
                } else if (e) {
                    f = b;
                    r = f.fromMe;
                    s = f.remote;
                    i = f.id;
                    p = f.participant;
                    if (
                        !(s instanceof c("WAWebWid")) ||
                        (p && !(p instanceof c("WAWebWid")))
                    ) {
                        d("WALogger").WARN(j()).devConsole(s, p);
                        throw c("err")("MsgKey error: something is not a wid");
                    }
                    d("WAWebUserPrefsMeUser").isMePrimary(s) &&
                        (q = r === !0 ? "out" : "in");
                    r !== void 0 && (this.fromMe = r);
                    s && (this.remote = s);
                    i && (this.id = i);
                }
                g = [this.fromMe, this.remote, this.id];
                q !== void 0 && ((this.self = q), g.push(this.self));
                p !== void 0 && ((this.participant = p), g.push(this.participant));
                this._serialized = g.join("_");
            }
            var e = a.prototype;
            e.toString = function () {
                return this._serialized;
            };
            e.clone = function () {
                return new a({
                    fromMe: this.fromMe,
                    remote: this.remote,
                    id: this.id,
                    participant: this.participant,
                });
            };
            e.equals = function (b) {
                return b instanceof a && this.toString() === b.toString();
            };
            a.fromString = function (b) {
                if (b == null)
                    throw c("err")(
                        "MsgKey.fromString error: str is null or not a string"
                    );
                return a.from(b);
            };
            a.from = function (b) {
                if (b instanceof a) return b;
                var e;
                typeof b === "string" ? (e = c("WAWebParseMsgKeyString")(b)) : (e = b);
                return new a({
                    fromMe: e.fromMe,
                    remote: d("WAWebWidFactory").createWidFromWidLike(e.remote),
                    id: e.id,
                    participant: e.participant
                        ? d("WAWebWidFactory").createWidFromWidLike(e.participant)
                        : void 0,
                });
            };
            a.newId = (function () {
                var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    try {
                        var b = yield d("WAWebMsgKeyNewId").getMsgKeyNewSHA256Id();
                        d("WALogger").DEV(i(), b);
                        return b;
                    } catch (b) {
                        d("WALogger")
                            .ERROR(h(), b.name, b.message, b.stack)
                            .devConsole(b)
                            .sendLogs("msg_key: error generating sha256 message key");
                        return a.newId_DEPRECATED();
                    }
                });
                function e() {
                    return c.apply(this, arguments);
                }
                return e;
            })();
            a.newId_DEPRECATED = function () {
                return "3EB0" + d("WARandomHex").randomHex(8);
            };
            return a;
        })();
        g["default"] = a;
    },
    98
);