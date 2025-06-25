/*FB_PKG_DELIM*/

(_btldr = {}),
  (_nowInl = function () {
    var a = window.performance;
    return a && a.now && a.timing && a.timing.navigationStart
      ? a.now() + a.timing.navigationStart
      : new Date().getTime();
  }),
  (_qplInl = (function () {
    var a = { client: {} };
    return {
      addPoint: function (b) {
        a.client[b] = _nowInl();
      },
      getPoints: function () {
        return a;
      },
    };
  })()),
  _qplInl.addPoint("htmlFlush");
//# sourceURL=https://static.whatsapp.net/rsrc.php/v4/yB/r/ov9h-V8LKKT.js
