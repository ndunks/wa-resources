__d(
    "WAWebWid",
    [
        "WAJids",
        "WALogger",
        "WATypeUtils",
        "WAWebABPropsCAPISupportNumber",
        "WAWebABPropsSupportGroup",
        "WAWebABPropsSupportLid",
        "WAWebBizCoexGatingUtils",
        "WAWebWidValidator",
        "err",
        "gkx",
        "justknobx",
    ],
    function (a, b, c, d, e, f, g) {
        function h() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "wid:isXWid called on typeof: ",
                "",
            ]);
            h = function () {
                return a;
            };
            return a;
        }
        function i() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "isSameAccount check for hosted : ",
                " : ",
                "",
            ]);
            i = function () {
                return a;
            };
            return a;
        }
        function j() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "@hosted jid must have device id of 99",
            ]);
            j = function () {
                return a;
            };
            return a;
        }
        function k() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "wrong server for wid with device present: ",
                "",
            ]);
            k = function () {
                return a;
            };
            return a;
        }
        function l() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "wid represents server and should not be used: ",
                "",
            ]);
            l = function () {
                return a;
            };
            return a;
        }
        function m() {
            var a = babelHelpers.taggedTemplateLiteralLoose(["Invalid wid: ", ""]);
            m = function () {
                return a;
            };
            return a;
        }
        var n = "server@c.us",
            o = "0@c.us",
            p = "16508638904@c.us",
            q = "16505361212@c.us",
            r = /^1313555\d{4}$|^131655500\d{2}$/,
            s = 99,
            t = 4,
            u = (function () {
                function a(a, b) {
                    b = b.intentionallyUsePrivateConstructor;
                    if (!b)
                        throw c("err")(
                            "You should use WidFactory.createWid() instead of the Wid constructor. If you absolutely must use the constructor, pass {intentionallyUsePrivateConstructor: true} as a second parameter."
                        );
                    if (a === "call") {
                        this.user = "call";
                        this.device = null;
                        this._serialized = "call";
                        return;
                    }
                    b = d("WAWebWidValidator").validateAndGetParts(
                        a,
                        d("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()
                    );
                    if (b == null) {
                        d("WALogger").LOG(m(), a);
                        throw c("err")("wid error: invalid wid");
                    }
                    var e = [],
                        f = b.userPart,
                        g = b.devicePart;
                    b = b.serverPart.toLowerCase();
                    var h;
                    switch (b) {
                        case "s.whatsapp.net":
                            h = "c.us";
                            break;
                        default:
                            h = b;
                            break;
                    }
                    this.server = h;
                    if (f == null) {
                        d("WALogger").LOG(l(), a);
                        throw c("err")(
                            "wid error: wid represents server and should not be used"
                        );
                    }
                    this.user = f;
                    e.push(this.user);
                    if (g != null) {
                        if (
                            this.server !== "c.us" &&
                            this.server !== "lid" &&
                            this.server !== "hosted" &&
                            this.server !== "hosted.lid" &&
                            this.server !== "bot"
                        ) {
                            d("WALogger").LOG(k(), a);
                            throw c("err")(
                                "wid error: wrong server for wid with device present"
                            );
                        }
                        b = parseInt(g, 10);
                        b && (e.push(":"), e.push(b), (this.device = b));
                    }
                    if (
                        d("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
                        this.isHosted() &&
                        (this.device == null || this.device !== s)
                    ) {
                        d("WALogger").LOG(j());
                        throw c("err")("wid error: unexpected device id in hosted wid");
                    }
                    e.push("@");
                    e.push(this.server);
                    this._serialized = e.join("");
                }
                var b = a.prototype;
                b.getUserPartForLog = function () {
                    if (!c("gkx")("26258")) return this.user;
                    if (this.isGroup()) {
                        var a = this.user.split("-");
                        if (a.length === 2) {
                            var b = a[0];
                            a = a[1];
                            return b.slice(-t) + "-" + a;
                        }
                    }
                    return this.user.slice(-t);
                };
                b.toString = function (a) {
                    if (a) {
                        var b,
                            c,
                            d =
                                a.legacy && this.server === "c.us"
                                    ? "s.whatsapp.net"
                                    : this.server;
                        a.formatFull === !0 || a.formatIncludeDevice === !0
                            ? (c = ":" + (this.device || 0))
                            : (c =
                                this.device != null && this.device !== 0
                                    ? ":" + this.device
                                    : "");
                        (a.formatFull === !0 || a.formatIncludeAgent === !0) && (b = ".0");
                        var e = a.forLog === !0 ? this.getUserPartForLog() : this.user;
                        if (
                            a.forLog === !0 ||
                            a.formatFull === !0 ||
                            (a.legacy && this.server === "c.us")
                        )
                            return [e, b, c, "@", d].join("");
                    }
                    return this._serialized;
                };
                b.toLogString = function () {
                    return this.toString({ forLog: !0, legacy: !1 });
                };
                b.toJid = function () {
                    return this.toString({ legacy: !0 });
                };
                b.getJidServer = function () {
                    return this.server === "c.us"
                        ? d("WAJids").WA_USER_JID_SUFFIX
                        : this.server;
                };
                b.getDeviceId = function () {
                    var a = this.device;
                    return a == null ? 0 : a;
                };
                b.equals = function (b) {
                    return b instanceof a && this.toString() === b.toString();
                };
                b.isLessThan = function (b) {
                    return b instanceof a && this.toString() < b.toString();
                };
                b.isGreaterThan = function (b) {
                    return b instanceof a && this.toString() > b.toString();
                };
                b.isCompanion = function () {
                    return (
                        this.device != null && this.device !== d("WAJids").DEFAULT_DEVICE_ID
                    );
                };
                b.isSameAccountAndAddressingMode = function (a) {
                    if (
                        d("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
                        (this.device === s || a.device === s)
                    ) {
                        d("WALogger")
                            .LOG(i(), this.toLogString(), a.toLogString())
                            .tags("coex");
                        var b = !1;
                        switch (this.server) {
                            case "hosted":
                                b = a.server === "c.us";
                                break;
                            case "hosted.lid":
                                b = a.server === "lid";
                                break;
                            case "c.us":
                                b = a.server === "hosted";
                                break;
                            case "lid":
                                b = a.server === "hosted.lid";
                                break;
                            default:
                                break;
                        }
                        if (b) return this.user === a.user;
                    }
                    return this.server === a.server && this.user === a.user;
                };
                b.isUser = function () {
                    return (d("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() ||
                        c("justknobx")._("371")) &&
                        (this.server === "hosted" || this.server === "hosted.lid")
                        ? !0
                        : this.server === "c.us" ||
                        this.server === "lid" ||
                        this.server === "bot";
                };
                b.isRegularUserPn = function () {
                    return this.isRegularUser() && !this.isLid();
                };
                a.isUserWid = function (a) {
                    return a.isUser();
                };
                b.isLid = function () {
                    return this.server === "lid";
                };
                a.isUserLid = function (a) {
                    return a.isLid();
                };
                b.isUserNotPSA = function () {
                    return this.isUser() && !this.isPSA();
                };
                b.isRegularUser = function () {
                    return this.isUser() && !this.isPSA() && !this.isBot();
                };
                b.isBroadcast = function () {
                    return this.server === "broadcast";
                };
                b.isBroadcastList = function () {
                    return this.server === "broadcast" && !this.isStatus();
                };
                b.isOfficialBizAccount = function () {
                    return this.toString() === q;
                };
                b.isEligibleForUSync = function () {
                    return this.isUser() && !this.isPSA();
                };
                b.isGroup = function () {
                    return this.server === "g.us";
                };
                b.isGroupCall = function () {
                    return this.server === "call";
                };
                b.isServer = function () {
                    return this.user.toLowerCase() === "server" && this.server === "c.us";
                };
                b.isPSA = function () {
                    return this.user === "0" && this.server === "c.us";
                };
                b.isIAS = function () {
                    return this.user === "16508638904" && this.server === "c.us";
                };
                b.isStatus = function () {
                    return (
                        this.user.toLowerCase() === "status" && this.server === "broadcast"
                    );
                };
                b.isSupportAccount = function () {
                    return this.isLid()
                        ? d("WAWebABPropsSupportLid").getIsWaSupportLid(this.user)
                        : c("WAWebABPropsSupportGroup")(this.user);
                };
                b.isCAPISupportAccount = function () {
                    return this.isLid()
                        ? d("WAWebABPropsSupportLid").getIsWaCAPISupportLid(this.user)
                        : c("WAWebABPropsCAPISupportNumber")(this.user);
                };
                b.isNewsletter = function () {
                    return this.server === "newsletter";
                };
                b.isBot = function () {
                    return this.isPnBot() || this.isFbidBot();
                };
                b.isPnBot = function () {
                    return (
                        this.server === "c.us" &&
                        r.test(this.user) &&
                        (this.device == null || this.device === 0)
                    );
                };
                b.isFbidBot = function () {
                    return (
                        this.server === "bot" && (this.device == null || this.device === 0)
                    );
                };
                b.toJSON = function () {
                    return this.toString();
                };
                b.isHosted = function () {
                    return (
                        this.server === "hosted" ||
                        this.server === "hosted.lid" ||
                        this.device === s
                    );
                };
                a.isXWid = function (b, c) {
                    if (d("WATypeUtils").isString(c)) return c.split("@")[1] === b;
                    else if (c instanceof a) return c.server === b;
                    c !== void 0 &&
                        d("WALogger")
                            .WARN(h(), typeof c)
                            .devConsole(c);
                    return !1;
                };
                a.isHostedDeviceId = function (a) {
                    return a === s;
                };
                a.isUser = function (b) {
                    return (
                        a.isXWid("c.us", b) ||
                        a.isXWid(d("WAJids").WA_USER_JID_SUFFIX, b) ||
                        a.isXWid("lid", b) ||
                        a.isXWid("bot", b)
                    );
                };
                a.isLid = function (b) {
                    return a.isXWid("lid", b);
                };
                a.isBroadcast = function (b) {
                    return a.isXWid("broadcast", b);
                };
                a.isGroup = function (b) {
                    return a.isXWid("g.us", b);
                };
                a.isNewsletter = function (b) {
                    return a.isXWid("newsletter", b);
                };
                a.isHosted = function (b) {
                    return d("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()
                        ? a.isXWid("hosted", b) || a.isXWid("hosted.lid", b)
                        : !1;
                };
                a.isFbidBot = function (b) {
                    return a.isXWid("bot", b);
                };
                a.isPnBot = function (b) {
                    var c;
                    c =
                        (c =
                            b == null
                                ? void 0
                                : (c = b.toString()) == null
                                    ? void 0
                                    : c.split("@")[0]) != null
                            ? c
                            : "";
                    return a.isXWid("c.us", b) && r.test(c);
                };
                a.isBot = function (b) {
                    return a.isFbidBot(b) || a.isPnBot(b);
                };
                a.isRegularUser = function (a) {
                    return v(a);
                };
                a.isRegularUserPn = function (a) {
                    return a.isRegularUser() && !a.isLid();
                };
                a.isRegularUserNoImply = function (a) {
                    return v(a);
                };
                a.isGroupCall = function (b) {
                    return a.isXWid("call", b);
                };
                a.isWid = function (b) {
                    if (d("WATypeUtils").isString(b))
                        return d("WAWebWidValidator").validateWid(
                            b,
                            d("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()
                        );
                    else if (b instanceof a) return !0;
                    return !1;
                };
                a.isServer = function (b) {
                    if (d("WATypeUtils").isString(b)) return b.toLowerCase() === n;
                    else if (b instanceof a) return b.isServer();
                    return !1;
                };
                a.isPSA = function (b) {
                    if (d("WATypeUtils").isString(b)) return b.toLowerCase() === o;
                    else if (b instanceof a) return b.isPSA();
                    return !1;
                };
                a.isIAS = function (b) {
                    if (d("WATypeUtils").isString(b)) return b.toLowerCase() === p;
                    else if (b instanceof a) return b.isIAS();
                    return !1;
                };
                a.isStatus = function (b) {
                    if (d("WATypeUtils").isString(b))
                        return b.toLowerCase() === d("WAJids").STATUS_JID;
                    else if (b instanceof a) return b.isStatus();
                    return !1;
                };
                a.isSupportAccount = function (b) {
                    if (d("WATypeUtils").isString(b))
                        return a.isLid(b)
                            ? d("WAWebABPropsSupportLid").getIsWaSupportLid(b.split("@")[0])
                            : c("WAWebABPropsSupportGroup")(b.split("@")[0]);
                    else if (b instanceof a)
                        return a.isLid(b)
                            ? d("WAWebABPropsSupportLid").getIsWaSupportLid(b.user)
                            : b.isSupportAccount();
                    return !1;
                };
                a.isCAPISupportAccount = function (b) {
                    if (d("WATypeUtils").isString(b))
                        return a.isLid(b)
                            ? d("WAWebABPropsSupportLid").getIsWaCAPISupportLid(
                                b.split("@")[0]
                            )
                            : c("WAWebABPropsCAPISupportNumber")(b.split("@")[0]);
                    else if (b instanceof a)
                        return a.isLid(b)
                            ? d("WAWebABPropsSupportLid").getIsWaCAPISupportLid(b.user)
                            : b.isCAPISupportAccount();
                    return !1;
                };
                a.isOfficialBizAccount = function (b) {
                    if (d("WATypeUtils").isString(b)) return b.toLowerCase() === q;
                    else if (b instanceof a) return b.isOfficialBizAccount();
                    return !1;
                };
                a.isEligibleForUSync = function (b) {
                    return a.isUser(b) && !a.isPSA(b);
                };
                a.user = function (b) {
                    if (d("WATypeUtils").isString(b)) return b.split("@")[0];
                    else if (b instanceof a) return b.user;
                    return void 0;
                };
                a.equals = function (b, c) {
                    return !(b instanceof a) && !(c instanceof a)
                        ? b === c
                        : b instanceof a && b.equals(c);
                };
                a.isLessThan = function (b, c) {
                    return !(b instanceof a) || !(c instanceof a)
                        ? !1
                        : b.toString() < c.toString();
                };
                a.isGreaterThan = function (b, c) {
                    return !(b instanceof a) || !(c instanceof a)
                        ? !1
                        : b.toString() > c.toString();
                };
                return a;
            })();
        function v(a) {
            return u.isUser(a) && !u.isPSA(a) && !u.isBot(a);
        }
        g["default"] = u;
    },
    98
);