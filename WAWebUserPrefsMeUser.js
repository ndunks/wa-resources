__d(
    "WAWebUserPrefsMeUser",
    [
        "WABaseGlobals",
        "WALogger",
        "WANullthrows",
        "WAWebGlobals",
        "WAWebMemoizeWithClearUtils",
        "WAWebRuntimeEnvironmentUtils",
        "WAWebUserPrefsBase",
        "WAWebUserPrefsKeys",
        "WAWebWid",
        "WAWebWidFactory",
        "WAWebWidToJid",
        "gkx",
    ],
    function (a, b, c, d, e, f, g) {
        function h() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "isWID: input exists but is not WID: ",
                ", ",
                "",
            ]);
            h = function () {
                return a;
            };
            return a;
        }
        function i() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "isWID: input exists but is not WID",
            ]);
            i = function () {
                return a;
            };
            return a;
        }
        function a() {
            var b = babelHelpers.taggedTemplateLiteralLoose(["self-lid-missing"]);
            a = function () {
                return b;
            };
            return b;
        }
        function j() {
            if (d("WAWebRuntimeEnvironmentUtils").isWorker())
                return d("WAWebWidFactory").createWid(
                    d("WAWebGlobals").getMyDeviceJid()
                );
            var a = d("WAWebUserPrefsBase").userPreferencesStoreBase.get(
                d("WAWebUserPrefsKeys").KEYS.LAST_WID_MD
            );
            if (typeof a !== "string") return;
            if (c("WAWebWid").isWid(a)) return d("WAWebWidFactory").createWid(a);
        }
        function b() {
            var a = d("WAWebUserPrefsBase").userPreferencesStoreBase.get(
                d("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID
            );
            (typeof a !== "string" || a === "") &&
                ((a = "unknown-" + Math.floor(Math.random() * 1e10)), k(a));
            return a;
        }
        function k(a) {
            return d("WAWebUserPrefsBase").userPreferencesStoreBase.set(
                d("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
                a
            );
        }
        function l() {
            return c("WANullthrows")(j(), "me");
        }
        function e() {
            return c("WANullthrows")(t(), "meLid");
        }
        function m() {
            return c("WANullthrows")(x(), "meDisplayName");
        }
        function n() {
            return d("WAWebWidFactory").toUserWid(l());
        }
        function f() {
            return c("WANullthrows")(u(), "meLidUser");
        }
        function o() {
            var a = t();
            return a == null ? [l()] : [l(), a];
        }
        var p = d("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
            var a = j();
            return !a ? void 0 : d("WAWebWidFactory").toUserWid(a);
        }),
            q = p[0],
            r = p[1];
        function s(a) {
            r(),
                d("WAWebUserPrefsBase").userPreferencesStoreBase.set(
                    d("WAWebUserPrefsKeys").KEYS.LAST_WID_MD,
                    a == null ? null : a.toString()
                ),
                d("WABaseGlobals").setMyJids(d("WAWebWidToJid").widToMyJids(a));
        }
        function t(a) {
            a === void 0 && (a = !0);
            a = d("WAWebRuntimeEnvironmentUtils").isWorker()
                ? d("WAWebGlobals").getMyLidDeviceJid()
                : d("WAWebUserPrefsBase").userPreferencesStoreBase.get(
                    d("WAWebUserPrefsKeys").KEYS.LID
                );
            a = typeof a === "string" ? a : null;
            var b = c("WAWebWid").isWid(a);
            return a == null || !b ? null : d("WAWebWidFactory").createWid(a);
        }
        p = d("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
            var a = t();
            return a == null ? null : d("WAWebWidFactory").toUserLidOrThrow(a);
        });
        var u = p[0],
            v = p[1];
        function w(a) {
            v(),
                d("WAWebRuntimeEnvironmentUtils").isWorker()
                    ? d("WAWebGlobals").setMyLidDeviceJid(a.toString())
                    : d("WAWebUserPrefsBase").userPreferencesStoreBase.set(
                        d("WAWebUserPrefsKeys").KEYS.LID,
                        a.toString()
                    );
        }
        function x() {
            d("WAWebRuntimeEnvironmentUtils").isWorker() &&
                d("WAWebGlobals").getMyDisplayName();
            var a = d("WAWebUserPrefsBase").userPreferencesStoreBase.get(
                d("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME
            );
            if (typeof a === "string") return a;
        }
        function y() {
            return m();
        }
        function z(a) {
            d("WAWebRuntimeEnvironmentUtils").isWorker()
                ? d("WAWebGlobals").setMyDisplayName(a)
                : d("WAWebUserPrefsBase").userPreferencesStoreBase.set(
                    d("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
                    a
                );
        }
        function A(a) {
            var b = a instanceof c("WAWebWid");
            if (!b)
                if (c("gkx")("26258")) d("WALogger").WARN(i());
                else {
                    var e = "";
                    try {
                        e = JSON.stringify(a);
                    } catch (a) { }
                    d("WALogger")
                        .WARN(h(), e, new Error().stack)
                        .sendLogs("WAWebUserPrefsMeUser-invalid-wid");
                }
            return b;
        }
        function B(a) {
            return a == null || !A(a) ? !1 : D(a) || E(a);
        }
        function C(a) {
            return a == null || !A(a) ? !1 : D(a);
        }
        function D(a) {
            var b = q();
            return b != null && a.isSameAccountAndAddressingMode(b);
        }
        function E(a) {
            var b = t();
            return b != null && a.isSameAccountAndAddressingMode(b);
        }
        function F(a) {
            if (a == null || !A(a)) return !1;
            if (a.equals(l())) return !0;
            var b = t();
            return b != null && a.equals(b);
        }
        function G(a) {
            if (a == null || !A(a)) return !1;
            if (a.equals(n())) return !0;
            var b = u();
            return b != null && a.equals(b);
        }
        function H(a) {
            if (a == null || !A(a)) return !1;
            return a.equals(n()) ? !0 : !1;
        }
        function I(a) {
            return B(d("WAWebWidFactory").createWid(a));
        }
        g.getMe = j;
        g.getUnknownId = b;
        g.setUnknownId = k;
        g.assertGetMe = l;
        g.assertGetMeLid = e;
        g.assertGetMeDisplayName = m;
        g.getMeUser = n;
        g.getMeLidUser = f;
        g.getMePNandLIDWids = o;
        g.getMaybeMeUser = q;
        g.clearGetMaybeMeUserCache = r;
        g.setMe = s;
        g.getMaybeMeLid = t;
        g.getMaybeMeLidUser = u;
        g.clearGetMaybeMeLidUserCache = v;
        g.setMeLid = w;
        g.getMaybeMeDisplayName = x;
        g.getMeDisplayName = y;
        g.setMeDisplayName = z;
        g.isMeAccount = B;
        g.isMeAccountNonLid = C;
        g.isMeUser = D;
        g.isMeDevice = F;
        g.isMePrimary = G;
        g.isMePrimaryNonLid = H;
        g.isSerializedWidMe = I;
    },
    98
);