// (function (window) {
if (window.require != null) return;
var b = null,
    c = null,
    d = [],
    modulesMap = {},
    moduleStats = {},
    g = 0,
    h = 0,
    i = 0,
    j = 0,
    k = 0,
    l = 1,
    m = 2,
    n = 4,
    o = 8,
    p = 16,
    aa = 32,
    ba = 64,
    q = 128,
    r = 256,
    ca = {},
    s = {},
    t = Object.prototype.hasOwnProperty,
    u = Object.prototype.toString;
function v(a) {
    a = Array.prototype.slice.call(a);
    var b = {},
        c,
        d,
        f,
        g;
    while (a.length) {
        d = a.shift();
        if (b[d]) continue;
        b[d] = !0;
        f = modulesMap[d];
        if (!f || V(f)) continue;
        if (f.dependencies)
            for (c = 0; c < f.dependencies.length; c++)
                (g = f.dependencies[c]), V(g) || a.push(g.id);
    }
    for (d in b) t.call(b, d) && a.push(d);
    b = [];
    for (c = 0; c < a.length; c++) {
        d = a[c];
        var h = d;
        f = modulesMap[d];
        d = f ? f.dependencies : null;
        if (!f || !d) h += " is not defined";
        else if (V(f)) h += " is ready";
        else {
            f = [];
            for (var i = 0; i < d.length; i++) (g = d[i]), V(g) || f.push(g.id);
            h += " is waiting for " + f.join(", ");
        }
        b.push(h);
    }
    return b.join("\n");
}
function w(b) {
    var a = new Error(b);
    a.name = "ModuleError";
    a.messageFormat = b;
    for (
        var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1;
        e < c;
        e++
    )
        d[e - 1] = arguments[e];
    a.messageParams = d.map(function (a) {
        return String(a);
    });
    a.taalOpcodes = [2, 2];
    return a;
}
$ = window.Env || {};
var x = !!$.gk_require_when_ready_in_order,
    da = !!$.clear_js_factory_after_used,
    y = !!$.profile_require_factories,
    z = window.performance || {},
    A;
if (z.now && z.timing && z.timing.navigationStart) {
    var B = z.timing.navigationStart;
    A = function () {
        return z.now() + B;
    };
} else
    A = function () {
        return Date.now();
    };
var moduleCounter = 0;
function getModule(a) {
    moduleCounter++;
    var b = modulesMap[a];
    (!b || (b.exports == null && !b.factoryFinished)) && (I(a), (b = modulesMap[a]));
    b && b.refcount-- === 1 && (modulesMap[a] = null);
    return b;
}
function E(a) {
    return a.defaultExport !== s ? a.defaultExport : a.exports;
}
function require(a) {
    a = getModule(a);
    if (a) return E(a);
}
function importDefault(a) {
    a = getModule(a);
    if (a) return a.defaultExport !== s ? a.defaultExport : null;
}
function importNamespace(a) {
    a = getModule(a);
    if (a) return a.exports;
}
function ea(a) {
    a.factoryLength === -1 && (a.factoryLength = a.factory.length);
    return a.factoryLength;
}
function I(d) {
    var g = window.ErrorGuard;
    if (g && !g.inGuard()) return g.applyWithGuard(I, null, [d]);
    g = modulesMap[d];
    if (!g) {
        var h = 'Requiring unknown module "%s"';
        throw w(h, d);
    }
    window.__onBeforeModuleFactory == null ? void 0 : window.__onBeforeModuleFactory(g);
    var i, j;
    if (g.hasError)
        if (g.error == null)
            throw w('Requiring module "%s" which threw an exception', d);
        else {
            h = J(g.error);
            K(h, {
                messageFormat: 'Requiring module "%s" which threw an exception',
                messageParams: [d],
            });
            throw h;
        }
    if (!V(g))
        throw w(
            'Requiring module "%s" with unresolved dependencies: %s',
            d,
            v([d])
        );
    M(g);
    h = g.exports = {};
    var k = g.factory,
        l = g.dependencies;
    if (u.call(k) === "[object Function]" && l != null) {
        var n = l.length,
            p,
            q;
        try {
            try {
                xa(g);
            } catch (a) {
                L(a, d);
            }
            var r = [],
                s = n;
            if (g.special & o) {
                var x = g.special & aa ? c : b;
                r = x.slice(0);
                r[x.length - 2] = g;
                r[x.length - 1] = h;
                s += r.length;
            }
            if (g.special & m) {
                x = ea(g);
                s = Math.min(n + r.length, x);
            }
            for (h = 0; h < n; h++) {
                x = l[h];
                r.length < s && r.push(require.call(null, x.id));
            }
            var z;
            y && (z = A());
            moduleStats[g.id].factoryRun = !0;
            try {
                x = g.context != null ? g.context : window;
                p = k.apply(x, r);
            } catch (a) {
                L(a, d);
            } finally {
                if (y) {
                    s = A();
                    l = moduleStats[g.id];
                    l.factoryTime = s - (z || 0);
                    l.factoryEnd = s;
                    l.factoryStart = z;
                }
            }
        } catch (a) {
            g.hasError = !0;
            g.error = a;
            g.exports = null;
            throw a;
        } finally {
        }
        p && (g.exports = p);
        var B;
        g.special & ba
            ? g.exports != null &&
            t.call(g.exports, "default") &&
            (g.defaultExport = B = g.exports["default"])
            : (g.defaultExport = B = g.exports);
        if (typeof B === "function") {
            n = B.__superConstructor__;
            if (!B.displayName || (n && n.displayName === B.displayName))
                try {
                    B.displayName = (B.name || "(anonymous)") + " [from " + d + "]";
                } catch (a) { }
        }
        g.factoryFinished = !0;
        da && ((g.factory = null), (k = void 0));
    } else g.exports = k;
    h = "__isRequired__" + d;
    x = modulesMap[h];
    x && !V(x) && define(h, ca);
    window.__onAfterModuleFactory == null ? void 0 : window.__onAfterModuleFactory(g);
}
function J(b) {
    if (window.getErrorSafe != null) return window.getErrorSafe(b);
    return b != null && typeof b === "object" && typeof b.message === "string"
        ? b
        : w("Non-error thrown: %s", String(b));
}
function K(b, c) {
    var d = window.ErrorSerializer;
    d && d.aggregateError(b, c);
}
function L(a, b) {
    a = J(a);
    K(a, {
        messageFormat: 'Module "%s"',
        messageParams: [b],
        forcedKey: b.startsWith("__") ? null : b,
    });
    throw a;
}
function getTotalRequireCalls() {
    return moduleCounter;
}
function getModuleTimeDetails() {
    var ret = {};
    for (var b in moduleStats)
        Object.prototype.hasOwnProperty.call(moduleStats, b) && (ret[b] = moduleStats[b]);
    return ret;
}
function M(a) {
    if (a.nonJSDeps) return;
    a.nonJSDeps = !0;
    a.dependencies && a.dependencies.forEach(M);
}
var N = !!(window != null && window.document != null && "createElement" in window.document),
    debug = typeof WorkerGlobalScope === "function";
N = N || debug;
var P = $.use_fbt_virtual_modules === !0 && N,
    ha = "$fbt_virtual",
    Q = {},
    R = null,
    S = 6e4;
function ia(a) {
    !(a in modulesMap) && !(a in Q) && (Q[a] = A()),
        R || (R = setTimeout(Z()(ja, "_checkFbtVirtualModuleTimeout"), S));
}
function ja() {
    R = null;
    var a = A(),
        b = Object.keys(Q).filter(function (b) {
            var c = a - Q[b] > S;
            c && delete Q[b];
            return c;
        });
    Object.keys(Q).length > 0 &&
        (R = setTimeout(Z()(ja, "_checkFbtVirtualModuleTimeout"), S));
    b.length > 0 &&
        requireLazy.apply(null, [
            ["FBLogger"],
            function (a) {
                a("binary_transparency", "vmod_timeout").warn(
                    "The following virtual modules are taking over %sms to be defined: %s...",
                    S,
                    b.join(",").slice(0, 300)
                );
            },
        ]);
}
function ka(a, b, c) {
    if (P && c != null && c & q) {
        c = a + ha;
        b.push(c);
        ia(c);
    }
}
function define(b, c, e, g, h, i, l) {
    c === void 0
        ? ((c = []), (e = b), (b = oa()))
        : e === void 0 &&
        ((e = c),
            u.call(b) === "[object Array]"
                ? ((c = b), (b = oa(c.join(","))))
                : (c = []));
    var m = { cancel: na.bind(this, b) },
        n = la(b);
    if (!c && !e && i) {
        n.refcount += i;
        return m;
    }
    P && (b in Q && delete Q[b], Array.isArray(c) && ka(b, c, g));
    moduleStats[b] = {
        id: b,
        dependencies: c,
        meta: l,
        category: g,
        defined: y ? A() : null,
        factoryTime: null,
        factoryStart: null,
        factoryEnd: null,
        factoryRun: !1,
    };
    if (n.dependencies && n.reload !== !0) {
        b.indexOf(":") != -1 ? k++ : j++;
        return m;
    }
    i && (n.refcount += i);
    l = c.map(la);
    n.factory = e;
    n.dependencies = l;
    n.context = h;
    n.special = g;
    (n.nonJSDeps || va(n)) && ((n.nonJSDeps = !1), M(n));
    W(n);
    if (d.length > 0) {
        var o = d;
        d = [];
        b = !wa(n) && window.ScheduleJSWork ? window.ScheduleJSWork : Ba;
        b(function () {
            if (x) {
                for (var a = 0; a < o.length; a++) require.call(null, o[a].id);
                o.length = 0;
            } else while (o.length > 0) require.call(null, o.pop().id);
        })();
    }
    return m;
}
function la(a) {
    var b = modulesMap[a];
    if (b) return b;
    b = new ModuleDefinition(a, 0);
    modulesMap[a] = b;
    return b;
}
function ModuleDefinition(a, b, c) {
    (this.id = a),
        (this.refcount = b),
        (this.exports = c || null),
        (this.defaultExport = c || s),
        (this.factory = void 0),
        (this.factoryLength = -1),
        (this.factoryFinished = !1),
        (this.dependencies = void 0),
        (this.depPosition = 0),
        (this.context = void 0),
        (this.special = 0),
        (this.hasError = !1),
        (this.error = null),
        (this.ranRecursiveSideEffects = !1),
        (this.sideEffectDependencyException = null),
        (this.nextDepWaitingHead = null),
        (this.nextDepWaitingNext = null),
        (this.tarjanGeneration = -1),
        (this.tarjanLow = 0),
        (this.tarjanIndex = 0),
        (this.tarjanOnStack = !1),
        (this.nonJSDeps = !1);
}
function na(a) {
    if (!modulesMap[a]) return;
    var b = modulesMap[a];
    modulesMap[a] = null;
    if (b.dependencies)
        for (a = 0; a < b.dependencies.length; a++) {
            var c = b.dependencies[a];
            c.refcount-- === 1 && na(c.id);
        }
}
function requireLazy(a, b, c, d) {
    c === void 0 && (c = null);
    d === void 0 && (d = 0);
    var e = "__requireLazy__x__" + g++;
    return define(
        "__requireLazy__" + e,
        a,
        Z()(b, "requireLazy", { propagationType: 0 }),
        d | l | p,
        c,
        1
    );
}
function oa(a) {
    return "__mod__" + (a != null ? a + "__" : "") + g++;
}
function pa(a, b, c) {
    c.tarjanGeneration != h &&
        ((c.tarjanGeneration = h),
            (c.tarjanLow = c.tarjanIndex = i++),
            (c.tarjanOnStack = !0),
            b.push(c));
    if (c.dependencies != null)
        for (var d = c.depPosition; d < c.dependencies.length; d++) {
            var e = c.dependencies[d];
            e.tarjanGeneration != h
                ? (pa(a, b, e), (c.tarjanLow = Math.min(c.tarjanLow, e.tarjanLow)))
                : e.tarjanOnStack &&
                (c.tarjanLow = Math.min(c.tarjanLow, e.tarjanIndex));
        }
    if (c.tarjanLow == c.tarjanIndex) {
        e = [];
        do {
            d = b.pop();
            d.tarjanOnStack = !1;
            e.push(d);
            if (c == b[0] && d != c && d.dependencies != null)
                for (var f = d.depPosition; f < d.dependencies.length; f++) {
                    var g = d.dependencies[f];
                    !V(g) &&
                        a.indexOf(g) == -1 &&
                        b.indexOf(g) == -1 &&
                        e.indexOf(g) == -1 &&
                        a.push(g);
                }
        } while (d != c);
    }
}
function qa(a) {
    var b = a.dependencies;
    if (!b)
        throw w("Called _replaceCycleLinkWithSCCDeps on an undefined module");
    h++;
    pa(b, [], a);
    a.depPosition++;
    W(a);
}
function ra(a, b) {
    var c = b;
    while (!0) {
        if (c.dependencies && c.depPosition != c.dependencies.length)
            c = c.dependencies[c.depPosition];
        else break;
        if (c == a) {
            qa(a);
            return;
        }
    }
    a.nextDepWaitingNext = b.nextDepWaitingHead;
    b.nextDepWaitingHead = a;
}
function V(a) {
    return a.dependencies != null && a.depPosition >= a.dependencies.length;
}
function sa(a) {
    a.depPosition++, W(a);
}
function ta(a) {
    var b = a.nextDepWaitingHead;
    a.nextDepWaitingHead = null;
    while (b != null) {
        var c = b;
        c.nonJSDeps && M(a);
        b = c.nextDepWaitingNext;
        c.nextDepWaitingNext = null;
        var d = !modulesMap[c.id];
        d || sa(c);
    }
}
function ua(a) {
    return a.special & l;
}
function va(a) {
    return a.special & p;
}
function wa(a) {
    return a.special & r;
}
function W(a) {
    while (a.dependencies != null && a.depPosition < a.dependencies.length) {
        var b = a.dependencies[a.depPosition],
            c = V(b);
        if (!c && a != b) {
            ra(a, b);
            return;
        }
        a.depPosition++;
    }
    ua(a) && d.push(a);
    a.nextDepWaitingHead !== null && ta(a);
}
function xa(a) {
    if (a.sideEffectDependencyException != null)
        throw a.sideEffectDependencyException;
    if (a.ranRecursiveSideEffects) return;
    a.ranRecursiveSideEffects = !0;
    var b = a.dependencies;
    if (b)
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                xa(d);
            } catch (b) {
                a.sideEffectDependencyException = b;
                throw b;
            }
            if (d.special & n)
                try {
                    require.call(null, d.id);
                } catch (b) {
                    a.sideEffectDependencyException = b;
                    throw b;
                }
        }
}
function registerModule(moduleName, val) {
    (modulesMap[moduleName] = new ModuleDefinition(moduleName, 0, val)),
        (moduleStats[moduleName] = {
            id: moduleName,
            dependencies: [],
            category: 0,
            factoryLengthAccessTime: null,
            factoryTime: null,
            factoryStart: null,
            factoryEnd: null,
            factoryRun: !1,
        });
}
registerModule("module", 0);
registerModule("exports", 0);
registerModule("define", define);
registerModule("global", window);
registerModule("require", require);
registerModule("requireInterop", require);
registerModule("importDefault", importDefault);
registerModule("importNamespace", importNamespace);
registerModule("requireDynamic", requireDynamic);
registerModule("requireLazy", requireLazy);
registerModule("requireWeak", requireWeak);
registerModule("ifRequired", ifRequired);
registerModule("ifRequireable", ifRequireable);
b = [
    require.call(null, "global"),
    require.call(null, "require"),
    require.call(null, "requireDynamic"),
    require.call(null, "requireLazy"),
    require.call(null, "requireInterop"),
    null,
];
c = [
    require.call(null, "global"),
    require.call(null, "require"),
    require.call(null, "importDefault"),
    require.call(null, "importNamespace"),
    require.call(null, "requireLazy"),
    require.call(null, "requireInterop"),
    null,
];
define.amd = {};
window.define = define;
window.require = require;
window.requireInterop = require;
window.importDefault = importDefault;
window.importNamespace = importNamespace;
window.requireDynamic = requireDynamic;
window.requireLazy = requireLazy;
window.__onBeforeModuleFactory = null;
window.__onAfterModuleFactory = null;
function requireDynamic(a, b) {
    throw new ReferenceError("requireDynamic is not defined");
}
function requireWeak(a, b) {
    ifRequired.call(
        null,
        a,
        function (a) {
            b(a);
        },
        function () {
            define(
                "__requireWeak__" + a + "__" + g++,
                ["__isRequired__" + a],
                Z()(function () {
                    return b(E(modulesMap[a]));
                }, "requireWeak"),
                l,
                null,
                1
            );
        }
    );
}
function ifRequired(a, b, c) {
    a = modulesMap[a];
    if (a && a.factoryFinished) {
        if (typeof b === "function") return b(E(a));
    } else if (typeof c === "function") return c();
}
function ifRequireable(a, b, c) {
    var d = modulesMap[a];
    if (d && d.nonJSDeps && V(d)) {
        if (typeof b === "function") return b(require.call(null, a));
    } else if (typeof c === "function") return c();
}
debug = {
    getDupCount: function () {
        return [j, k];
    },
    getModules: function () {
        var a = {};
        for (var b in modulesMap)
            modulesMap[b] && Object.prototype.hasOwnProperty.call(modulesMap, b) && (a[b] = modulesMap[b]);
        return a;
    },
    modulesMap: modulesMap,
    debugUnresolvedDependencies: v,
};
function Ba(a) {
    return a;
}
function Z() {
    var b = window.TimeSlice && window.TimeSlice.guard ? window.TimeSlice.guard : Ba;
    return function () {
        return b.apply(void 0, arguments);
    };
}
registerModule("__getTotalRequireCalls", getTotalRequireCalls);
registerModule("__getModuleTimeDetails", getModuleTimeDetails);
registerModule("__debug", debug);
window.__d = function (a, b, c, d) {
    Z()(
        function () {
            define(a, b, c, (d || m) | o, null, null, null);
        },
        "define " + a,
        { root: !0 }
    )();
};
function $(a, b) {
    return !0;
}
if (window.__d_stub) {
    for ($ = 0; $ < window.__d_stub.length; $++) window.__d.apply(null, window.__d_stub[$]);
    delete window.__d_stub;
}
if (window.__rl_stub) {
    for (N = 0; N < window.__rl_stub.length; N++) requireLazy.apply(null, window.__rl_stub[N]);
    delete window.__rl_stub;
}
requireWeak = function () { };
window.$RefreshReg$ = requireWeak;
window.$RefreshSig$ = function () {
    return function (a) {
        return a;
    };
};
// })(
//     typeof this !== "undefined"
//         ? this
//         : typeof global !== "undefined"
//             ? global
//             : typeof window !== "undefined"
//                 ? window
//                 : typeof self !== "undefined"
//                     ? self
//                     : {}
// );