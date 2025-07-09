__d(
  "WAWebWidFactory",
  [
    "WAJids",
    "WALogger",
    "WANullthrows",
    "WATypeUtils",
    "WAWebBizCoexGatingUtils",
    "WAWebSignalCommonUtils",
    "WAWebWid",
    "WAWebWidStore",
    "err",
  ],
  function (a, b, c, d, e, f, g) {
    function h() {
      var a = babelHelpers.taggedTemplateLiteralLoose([
        "createUserWid: ",
        " is not a valid user jid",
      ]);
      h = function () {
        return a;
      };
      return a;
    }
    function i() {
      var a = babelHelpers.taggedTemplateLiteralLoose([
        "createDeviceWid: ",
        " is not a valid device jid with user domain",
      ]);
      i = function () {
        return a;
      };
      return a;
    }
    function j() {
      var a = babelHelpers.taggedTemplateLiteralLoose([
        "createHostedDeviceWid: ",
        " is not a valid hosted device",
      ]);
      j = function () {
        return a;
      };
      return a;
    }
    var k = 99,
      l = "lid",
      m = "hosted",
      n = "hosted.lid";
    function o(a) {
      if (
        d("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
        c("WAWebWid").isHosted(a)
      )
        return c("WANullthrows")(p(a));
      var b = c("WAWebWidStore").cache[a];
      b ||
        ((b = new (c("WAWebWid"))(a, {
          intentionallyUsePrivateConstructor: !0,
        })),
        (c("WAWebWidStore").cache[a] = b));
      return b;
    }
    function p(a) {
      if (d("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
        if (c("WAWebWidStore").cache[a]) {
          var b = c("WAWebWidStore").cache[a];
          return b;
        }
        if (
          !(
            d("WATypeUtils").isString(a) &&
            (a.endsWith("@hosted") || a.endsWith("@hosted.lid"))
          )
        )
          throw c("err")("Hosted jid create called with wrong domain type");
        b = new (c("WAWebWid"))(a, { intentionallyUsePrivateConstructor: !0 });
        if (!b.isHosted()) {
          d("WALogger").DEV(j(), a);
          throw c("err")("createHostedDeviceWid is called with invalid input");
        }
        b = b;
        c("WAWebWidStore").cache[a] = b;
        return b;
      }
      throw c("err")("createDeviceWidFromDeviceListPk: unsupported");
    }
    function a(a) {
      if (a instanceof c("WAWebWid")) return a;
      else if (typeof a === "string") return o(a);
      return o(a._serialized);
    }
    function b(a) {
      if (!a) return !1;
      if (c("WAWebWid").isWid(a)) return !0;
      return a && typeof a === "object" && c("WAWebWid").isWid(a._serialized)
        ? !0
        : !1;
    }
    function e(a, b, e) {
      e === void 0 && (e = !1);
      a = a.split("@");
      var f = a[0];
      a = a[1];
      a = a === void 0 ? "c.us" : a;
      if (e === !0) {
        if (d("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled())
          return r(f, a, b);
        throw c("err")("WAWebWidFactory: feature unsupported");
      }
      return q(f, a, b);
    }
    function f(a) {
      a = a.split("@");
      var b = a[0];
      a = a[1];
      a = a === void 0 ? "c.us" : a;
      return v(b, a);
    }
    function q(a, b, c) {
      return d("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() && c === k
        ? r(a, b, c)
        : u(a + ":" + c + "@" + b);
    }
    function r(a, b, c) {
      return p(a + ":" + c + "@" + (b.includes(l) ? n : m));
    }
    function s(a) {
      a = d("WAWebSignalCommonUtils").getSignalLikeAddressName(a);
      return c("WAWebWid").isLid(a) ||
        c("WAWebWid").isHosted(a) ||
        c("WAWebWid").isFbidBot(a)
        ? o(a)
        : o(d("WAJids").toPhoneUserJid(a));
    }
    function t(a) {
      if (!a.isUser()) {
        d("WALogger").ERROR(i(), a);
        throw c("err")("createDeviceWid is called with invalid user string");
      }
      return a;
    }
    function u(a) {
      a = o(a);
      return t(a);
    }
    function v(a, b) {
      var e;
      if (
        d("WATypeUtils").isString(a) &&
        (a.endsWith("@c.us") ||
          a.endsWith("@s.whatsapp.net") ||
          a.endsWith("@lid") ||
          a.endsWith("@bot"))
      )
        e = a;
      else {
        var f;
        b == null || b === "hosted"
          ? (f = "c.us")
          : b === "hosted.lid"
          ? (f = "lid")
          : (f = b);
        e = a + "@" + f;
      }
      e = o(e);
      if (e.device == null || e.device === 0) return e;
      d("WALogger").ERROR(h(), a);
      throw c("err")("createUserWid is called with invalid user string");
    }
    function w(a) {
      if (!a.isUser()) throw c("err")("toUserWid: wid is not a user wid");
      return a.device == null || a.device === 0 ? a : v(a.user, a.server);
    }
    function x(a) {
      a = w(a);
      if (!c("WAWebWid").isUserLid(a))
        throw c("err")("toUserLid: userWid is not a lid");
      return a;
    }
    function y(a) {
      return a.isUser() ? w(a) : a;
    }
    function z(a) {
      if (a.isUser()) throw c("err")("toGroupWid: wid is a user wid");
      return a;
    }
    function A(a) {
      if (a.isNewsletter()) return a;
      throw c("err")("toNewsletterWid: wid is not a newsletter wid");
    }
    g.createWid = o;
    g.createHostedDeviceWid = p;
    g.createWidFromWidLike = a;
    g.isWidlike = b;
    g.createDeviceWidFromDeviceListPk = e;
    g.createUserWidFromDeviceListPk = f;
    g.createDeviceWidFromUserAndDevice = q;
    g.widFromSignalAddress = s;
    g.createDeviceWidFromWid = t;
    g.createDeviceWid = u;
    g.createUserWid = v;
    g.toUserWid = w;
    g.toUserLidOrThrow = x;
    g.toChatWid = y;
    g.toGroupWid = z;
    g.toNewsletterWid = A;
  },
  98
);