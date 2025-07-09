# web.whatsapp.com SPA Resources

    Flattened and beautified.

Saved using: [Chrome Extension](https://chromewebstore.google.com/detail/save-all-resources/abpdnfjocnmdomablahdcfnoggeeiedb)


## Info
### CMD

[static.whatsapp.net/rsrc.php/DO5qzUlBjxh.js](https://gitkraken.dev/link/dnNjb2RlOi8vZWFtb2Rpby5naXRsZW5zL2xpbmsvci80ZTdiZjJiMjJmY2JkMTE5ZjhhZWU3NWI3YjVjNmJlNzAxMGRjMmFlL2Yvc3RhdGljLndoYXRzYXBwLm5ldC9yc3JjLnBocC9ETzVxelVsQmp4aC5qcz91cmw9Z2l0JTQwZ2l0aHViLmNvbSUzQW5kdW5rcyUyRndhLXJlc291cmNlcy5naXQmbGluZXM9MTE2MjM1?origin=gitlens)


### SocketStreamState is based on critical_sync

[45gqp_AtQTq.js](static.whatsapp.net/rsrc.php/45gqp_AtQTq.js)

```js
        d("WAWebCmd").Cmd.on("on_critical_sync_done", function () {
          d("WALogger").LOG(i()),
            d("WALogger").LOG(h()),
            (c.$1 = !0),
            (c.$2 = d("WAWebSocketConstants").SOCKET_STREAM.CONNECTED),
            c.$3 == null ? void 0 : c.$3();
        });
      //}
      var c = a.prototype;
      c.getSocketStreamState = function () {
        return this.$2;
      };
      return a;
```

### Event Base `WAWebEventEmitter`:

[static.whatsapp.net/rsrc.php/AAM-Xm_9_gF.js](https://gitkraken.dev/link/dnNjb2RlOi8vZWFtb2Rpby5naXRsZW5zL2xpbmsvci80ZTdiZjJiMjJmY2JkMTE5ZjhhZWU3NWI3YjVjNmJlNzAxMGRjMmFlL2Yvc3RhdGljLndoYXRzYXBwLm5ldC9yc3JjLnBocC9BQU0tWG1fOV9nRi5qcz91cmw9Z2l0JTQwZ2l0aHViLmNvbSUzQW5kdW5rcyUyRndhLXJlc291cmNlcy5naXQmbGluZXM9MTY4MTY%3D?origin=gitlens)

### Module registrations:

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

### Link handling

White listed param name

``` js
["utm_source", "utm_campaign", "text", "phone", "data", "source", "context", "icebreaker", "source_url", "type", "token"];
```

The different between normal web wa vs:
https://web.whatsapp.com/send/?phone=62812345****&text=Halo+saya+tertarik+dengan+produk+Anda&type=phone_number&app_absent=0

```js
["LinkshimHandlerConfig", [], {
                                "supports_meta_referrer": true,
                                "default_meta_referrer_policy": "origin-when-crossorigin",
                                "switched_meta_referrer_policy": "origin",
                                "non_linkshim_lnfb_mode": null,
                                "link_react_default_hash": "AT2QgmupxkdsMQ-onTHkOKFvgbOIYyhLdHmfwqdO2EDG_j6xAEPjqdBlvMJcu098qbAScKsA7x0RExdo75XwzfCER8dcr9GKBIhpsNXBXO09EAr5JzA",
                                "untrusted_link_default_hash": "AT0uhXC0avX3fgHknr_W1PTDI9ayo2jWJZPgGlExxz7j-9TXM1NJtuoPC2kOOIV7vZECdhmfBRARysLLbSqMm96lVLotRa7rA_N2Mk3zbvGHG6sjBrU",
                                "linkshim_host": "l.facebook.com",
                                "linkshim_path": "\/l.php",
                                "linkshim_enc_param": "h",
                                "linkshim_url_param": "u",
                                "use_rel_no_opener": true,
                                "use_rel_no_referrer": true,
                                "always_use_https": true,
                                "onion_always_shim": true,
                                "middle_click_requires_event": true,
                                "www_safe_js_mode": "asynclazy",
                                "m_safe_js_mode": "MLynx_asynclazy",
                                "ghl_param_link_shim": false,
                                "click_ids": null,
                                "is_linkshim_supported": false,
                                "current_domain": "whatsapp.com",
                                "blocklisted_domains": ["ad.doubleclick.net",
                                    "ads-encryption-url-example.com", "bs.serving-sys.com",
                                    "ad.atdmt.com", "adform.net", "ad13.adfarm1.adition.com",
                                    "ilovemyfreedoms.com", "secure.adnxs.com"
                                ],
                                "is_mobile_device": false
                            }, 27],
```

Normal have same code, but in different order

``` js
["LinkshimHandlerConfig", [], {
                                "supports_meta_referrer": true,
                                "default_meta_referrer_policy": "origin-when-crossorigin",
                                "switched_meta_referrer_policy": "origin",
                                "non_linkshim_lnfb_mode": null,
                                "link_react_default_hash": "AT2sY9j4h0KRGnjmm-_Mb-X73t7dTudSCRHKGJfX2UH-hNRrNEbdZ-aJ-vtqBLi9BbVJ8SJachbQr3nLyGI-2X2ilqwd6aLsYwAOdfYiiygK1fgj4dU",
                                "untrusted_link_default_hash": "AT3tbwGuUhrwz3JF4Lw4KJ1ruMjXNXpQj4FB6WiQOtkhJqbbVBOYL-p7rij6tWHlE_DVjQnFwo3uCgbuSAyB7XP9AL50RhUcKVqP9OfvMlh3UeaUhss",
                                "linkshim_host": "l.facebook.com",
                                "linkshim_path": "\/l.php",
                                "linkshim_enc_param": "h",
                                "linkshim_url_param": "u",
                                "use_rel_no_opener": true,
                                "use_rel_no_referrer": true,
                                "always_use_https": true,
                                "onion_always_shim": true,
                                "middle_click_requires_event": true,
                                "www_safe_js_mode": "asynclazy",
                                "m_safe_js_mode": "MLynx_asynclazy",
                                "ghl_param_link_shim": false,
                                "click_ids": null,
                                "is_linkshim_supported": false,
                                "current_domain": "whatsapp.com",
                                "blocklisted_domains": ["ad.doubleclick.net",
                                    "ads-encryption-url-example.com", "bs.serving-sys.com",
                                    "ad.atdmt.com", "adform.net", "ad13.adfarm1.adition.com",
                                    "ilovemyfreedoms.com", "secure.adnxs.com"
                                ],
                                "is_mobile_device": false
                            }, 27],
```
