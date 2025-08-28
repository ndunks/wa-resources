__d(
    "WAWebGlobals",
    ["WABaseGlobals", "WAJids", "err"],
    function (a, b, c, d, e, f, g) {
        var h = null;
        function i() {
            if (h == null) throw c("err")("globals api called before set");
            return h;
        }
        function a() {
            return h != null;
        }
        function b(a) {
            (h = a), d("WABaseGlobals").setGlobals(a);
        }
        function e() {
            var a;
            a = (a = i().myJids) == null ? void 0 : a.deviceJid;
            if (a == null)
                throw c("err")("Trying to access myDeviceJid, but it's not set");
            return d("WAJids").unsafeCoerceToPhoneDeviceJid(a);
        }
        function f() {
            var a = i().lidDeviceJid;
            return a;
        }
        function j(a) {
            i().lidDeviceJid = a;
        }
        function k() {
            var a = i().displayName;
            return a;
        }
        function l(a) {
            i().displayName = a;
        }
        function m(a) {
            if (h == null) return;
            i().allowCacheQueryOptimization = a;
        }
        function n() {
            var a;
            return h == null
                ? !1
                : (a = i().allowCacheQueryOptimization) != null
                    ? a
                    : !1;
        }
        function o(a) {
            if (h == null) return;
            i().allowHistorySyncPutAllowDuplicate = a;
        }
        function p() {
            var a;
            return h == null
                ? !1
                : (a = i().allowHistorySyncPutAllowDuplicate) != null
                    ? a
                    : !1;
        }
        g.areGlobalsReady = a;
        g.setGlobals = b;
        g.getMyDeviceJid = e;
        g.getMyLidDeviceJid = f;
        g.setMyLidDeviceJid = j;
        g.getMyDisplayName = k;
        g.setMyDisplayName = l;
        g.setAllowCacheQueryOptimization = m;
        g.getAllowCacheQueryOptimization = n;
        g.setAllowHistorySyncPutAllowDuplicate = o;
        g.getAllowHistorySyncPutAllowDuplicate = p;
    },
    98
);