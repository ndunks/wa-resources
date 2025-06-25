; /*FB_PKG_DELIM*/

(function () {
    function a(a) {
        return a.parentElement !== document.body && a.parentElement !== document.head
    }

    function b(a) {
        return a.nodeName === "SCRIPT" || a.nodeName === "LINK" && ((a = c(a)) == null ? void 0 : a.asyncCss)
    }

    function c(a) {
        return !(a.dataset instanceof window.DOMStringMap) ? null : a.dataset
    }

    function d(d) {
        var e;
        try {
            if (d.nodeType !== Node.ELEMENT_NODE) return
        } catch (a) {
            return
        }
        if (a(d) || !b(d)) return;
        var f = (e = c(d)) == null ? void 0 : e.bootloaderHash;
        if (f != null && f !== "") {
            var g = null,
                h = function () {
                    window._btldr[f] = 1, g == null ? void 0 : g()
                };
            g = function () {
                d.removeEventListener("load", h), d.removeEventListener("error", h)
            };
            d.addEventListener("load", h);
            d.addEventListener("error", h)
        }
    }
    Array.from(document.querySelectorAll('script,link[data-async-css="1"]')).forEach(function (a) {
        return d(a)
    });
    var e = new MutationObserver(function (a, b) {
        a.forEach(function (a) {
            a.type === "childList" && Array.from(a.addedNodes).forEach(function (a) {
                d(a)
            })
        })
    });
    e.observe(document.getElementsByTagName("html")[0], {
        attributes: !1,
        childList: !0,
        subtree: !0
    })
})();
//# sourceURL=https://static.whatsapp.net/rsrc.php/v4/yv/r/tsqP1BWGOjc.js