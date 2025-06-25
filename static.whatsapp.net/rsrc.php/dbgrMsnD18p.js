/*FB_PKG_DELIM*/

var dataElement = document.getElementById("envjson");
if (dataElement != null) {
  var copyVariables = function (a) {
      for (var b in variables) a[b] = variables[b];
    },
    variables = JSON.parse(dataElement.textContent);
  window.requireLazy
    ? window.requireLazy(["Env"], copyVariables)
    : ((window.Env = window.Env || {}), copyVariables(window.Env));
}
//# sourceURL=https://static.whatsapp.net/rsrc.php/v4/yL/r/dbgrMsnD18p.js
