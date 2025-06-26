# web.whatsapp.com SPA Resources

    Flattened and beautified.

Saved using: [Chrome Extension](https://chromewebstore.google.com/detail/save-all-resources/abpdnfjocnmdomablahdcfnoggeeiedb)


## Info

Module registrations:

[AAM-Xm_9_gF.js](static.whatsapp.net/rsrc.php/AAM-Xm_9_gF.js)

``` js
a.__d = function (a, b, c, d) {
    Z()(
      function () {
        T(a, b, c, (d || m) | o, null, null, null);
      },
      "define " + a,
      { root: !0 }
    )();
  };

function T(b, c, e, g, h, i, l) {
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
    f[b] = {
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
      b = !wa(n) && a.ScheduleJSWork ? a.ScheduleJSWork : Ba;
      b(function () {
        if (x) {
          for (var a = 0; a < o.length; a++) F.call(null, o[a].id);
          o.length = 0;
        } else while (o.length > 0) F.call(null, o.pop().id);
      })();
    }
    return m;
  }
```

[cMd_SZov9Ei.js](static.whatsapp.net/rsrc.php/cMd_SZov9Ei.js)

``` js
(__annotator = function (a) {
  return a;
}),
  (__d_stub = []),
  (__d = function (a, b, c, d) {
    __d_stub.push([a, b, c, d]);
  }),
  (__rl_stub = []),
  (requireLazy = function () {
    __rl_stub.push(arguments);
  });
```