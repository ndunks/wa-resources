/*FB_PKG_DELIM*/

("use strict");
(function () {
  var a =
    (typeof globalThis !== "undefined" && globalThis) ||
    (typeof self !== "undefined" && self) ||
    (typeof global !== "undefined" && global);
  if (typeof a.AbortController !== "undefined") return;
  var b = (function () {
      function a() {
        this.__listeners = new Map();
      }
      a.prototype = Object.create(Object.prototype);
      a.prototype.addEventListener = function (a, b, c) {
        if (arguments.length < 2)
          throw new TypeError(
            "TypeError: Failed to execute 'addEventListener' on 'CustomEventTarget': 2 arguments required, but only " +
              arguments.length +
              " present."
          );
        var d = this.__listeners,
          e = a.toString();
        d.has(e) || d.set(e, new Map());
        var f = d.get(e);
        f.has(b) || f.set(b, c);
      };
      a.prototype.removeEventListener = function (a, b, c) {
        if (arguments.length < 2)
          throw new TypeError(
            "TypeError: Failed to execute 'addEventListener' on 'CustomEventTarget': 2 arguments required, but only " +
              arguments.length +
              " present."
          );
        var d = this.__listeners,
          e = a.toString();
        if (d.has(e)) {
          var f = d.get(e);
          f.has(b) && f["delete"](b);
        }
      };
      a.prototype.dispatchEvent = function (a) {
        if (!(a instanceof Event))
          throw new TypeError(
            "Failed to execute 'dispatchEvent' on 'CustomEventTarget': parameter 1 is not of type 'Event'."
          );
        var b = a.type,
          c = this.__listeners;
        c = c.get(b);
        if (c)
          for (b of c.entries()) {
            var d = b[0],
              e = b[1];
            try {
              typeof d === "function"
                ? d.call(this, a)
                : d && typeof d.handleEvent === "function" && d.handleEvent(a);
            } catch (a) {
              setTimeout(function () {
                throw a;
              });
            }
            e && e.once && c["delete"](d);
          }
        return !0;
      };
      return a;
    })(),
    c = {};
  a.AbortSignal = (function () {
    function a(a) {
      if (a !== c) throw new TypeError("Illegal constructor.");
      b.call(this);
      this._aborted = !1;
    }
    a.prototype = Object.create(b.prototype);
    a.prototype.constructor = a;
    Object.defineProperty(a.prototype, "onabort", {
      get: function () {
        return this._onabort;
      },
      set: function (a) {
        var b = this._onabort;
        b && this.removeEventListener("abort", b);
        this._onabort = a;
        this.addEventListener("abort", a);
      },
    });
    Object.defineProperty(a.prototype, "aborted", {
      get: function () {
        return this._aborted;
      },
    });
    return a;
  })();
  a.AbortController = (function () {
    function a() {
      this._signal = new AbortSignal(c);
    }
    a.prototype = Object.create(Object.prototype);
    Object.defineProperty(a.prototype, "signal", {
      get: function () {
        return this._signal;
      },
    });
    a.prototype.abort = function () {
      var a = this.signal;
      a.aborted || ((a._aborted = !0), a.dispatchEvent(new Event("abort")));
    };
    return a;
  })();
})();

("use strict");
Array.prototype.at == null &&
  (Array.prototype.at = function (a) {
    a = parseInt(a, 10);
    Number.isInteger(a) || (a = 0);
    if (a >= 0 && a < this.length) return this[a];
    else return this[this.length + a];
  });
("use strict");
(function () {
  if (!Array.prototype.flat) {
    var a = function b(a) {
      return a < 1
        ? Array.prototype.slice.call(this)
        : Array.prototype.reduce.call(
            this,
            function (c, d) {
              Array.isArray(d) ? c.push.apply(c, b.call(d, a - 1)) : c.push(d);
              return c;
            },
            []
          );
    };
    Array.prototype.flat = function () {
      return a.call(this, isNaN(arguments[0]) ? 1 : Number(arguments[0]));
    };
  }
  if (!Array.prototype.flatMap) {
    var b = function (a, b) {
      var c = [];
      if (typeof b !== "function")
        throw new TypeError("Callback function must be callable.");
      for (var d = 0; d < a.length; d++) {
        var e = b.call(a, a[d], d, a);
        Array.isArray(e) ? c.push.apply(c, e) : c.push(e);
      }
      return c;
    };
    Array.prototype.flatMap = function (a) {
      var c = arguments[1] || this;
      return b(c, a);
    };
  }
})();

(function () {
  "use strict";
  var a = Array.prototype.indexOf;
  Array.prototype.includes ||
    (Array.prototype.includes = function (d) {
      "use strict";
      if (d !== void 0 && Array.isArray(this) && !Number.isNaN(d))
        return a.apply(this, arguments) !== -1;
      var e = Object(this),
        f = e.length ? b(e.length) : 0;
      if (f === 0) return !1;
      var g = arguments.length > 1 ? c(arguments[1]) : 0,
        h = g < 0 ? Math.max(f + g, 0) : g,
        i = Number.isNaN(d);
      while (h < f) {
        var j = e[h];
        if (j === d || (i && Number.isNaN(j))) return !0;
        h++;
      }
      return !1;
    });
  function b(a) {
    return Math.min(Math.max(c(a), 0), Number.MAX_SAFE_INTEGER);
  }
  function c(a) {
    a = Number(a);
    return Number.isFinite(a) && a !== 0 ? d(a) * Math.floor(Math.abs(a)) : a;
  }
  function d(a) {
    return a >= 0 ? 1 : -1;
  }
  if (!Array.prototype.values) {
    var e = (function () {
      function a(a) {
        this.$1 = void 0;
        this.$2 = 0;
        if (a == null)
          throw new TypeError("Cannot convert undefined or null to object");
        this.$1 = Object(a);
      }
      var b = a.prototype;
      b.next = function () {
        if (this.$1 == null || this.$2 >= this.$1.length) {
          this.$1 = void 0;
          return { value: void 0, done: !0 };
        }
        var a = this.$1[this.$2];
        this.$2++;
        return { value: a, done: !1 };
      };
      b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this;
        };
      return a;
    })();
    Array.prototype.values = function () {
      return new e(this);
    };
  }
  Array.prototype[
    typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
  ] ||
    (Array.prototype[
      typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
    ] = Array.prototype.values);
})();
("use strict");
Array.prototype.findLast == null &&
  (Array.prototype.findLast = function (a, b) {
    var c = this;
    for (var d = c.length - 1; d >= 0; d--) {
      var e = c[d],
        f = a.call(b, e, d, c);
      if (f) return e;
    }
    return void 0;
  });
("use strict");
Array.prototype.findLastIndex == null &&
  (Array.prototype.findLastIndex = function (a, b) {
    var c = this;
    for (var d = c.length - 1; d >= 0; d--) {
      var e = c[d];
      e = a.call(b, e, d, c);
      if (e) return d;
    }
    return -1;
  });
("use strict");
Array.prototype.toReversed == null &&
  (Array.prototype.toReversed = function () {
    return this.slice().reverse();
  });
("use strict");
Array.prototype.toSorted == null &&
  (Array.prototype.toSorted = function (a) {
    return this.slice().sort(a);
  });
("use strict");
Array.prototype.toSpliced == null &&
  (Array.prototype.toSpliced = function () {
    var a = this.slice();
    a.splice.apply(a, arguments);
    return a;
  });

("use strict");
if (Array.prototype["with"] == null) {
  var toIntegerOrInfinity = function (a) {
    if (Number.isNaN(a) || a === 0) return 0;
    return a === Infinity || a === -Infinity ? a : Math.trunc(a);
  };
  Array.prototype["with"] = function (a, b) {
    var c = this.length;
    a = toIntegerOrInfinity(a);
    var d;
    a >= 0 ? (d = a) : (d = c + a);
    if (d >= c || d < 0) throw new RangeError("Invalid index");
    a = this.slice();
    a[d] = b;
    return a;
  };
}
(function (a) {
  (a.__t = function (a) {
    return a[0];
  }),
    (a.__w = function (a) {
      return a;
    });
})(
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof global !== "undefined"
    ? global
    : typeof window !== "undefined"
    ? window
    : typeof this !== "undefined"
    ? this
    : typeof self !== "undefined"
    ? self
    : {}
);
(function (a) {
  var b = {},
    c = function (a, b) {
      if (!a && !b) return null;
      var c = {};
      typeof a !== "undefined" && (c.type = a);
      typeof b !== "undefined" && (c.signature = b);
      return c;
    },
    d = function (a, b) {
      return c(
        a && /^[A-Z]/.test(a) ? a : void 0,
        b && ((b.params && b.params.length) || b.returns)
          ? "function(" +
              (b.params
                ? b.params
                    .map(function (a) {
                      return /\?/.test(a) ? "?" + a.replace("?", "") : a;
                    })
                    .join(",")
                : "") +
              ")" +
              (b.returns ? ":" + b.returns : "")
          : void 0
      );
    },
    e = function (a, b, c) {
      return a;
    },
    f = function (a, b, c) {
      if ("typechecks" in __transform_includes) {
        b = d(b ? b.name : void 0, c);
        b && __w(a, b);
      }
      return a;
    },
    g = function (a, b, c) {
      return c.apply(a, b);
    },
    h = function (a, c, d, e, f) {
      if (f) {
        f.callId ||
          (f.callId = f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
        e = f.callId;
        b[e] = (b[e] || 0) + 1;
      }
      return d.apply(a, c);
    };
  typeof __transform_includes === "undefined"
    ? ((a.__annotator = e), (a.__bodyWrapper = g))
    : ((a.__annotator = f),
      "codeusage" in __transform_includes
        ? ((a.__annotator = e),
          (a.__bodyWrapper = h),
          (a.__bodyWrapper.getCodeUsage = function () {
            return b;
          }),
          (a.__bodyWrapper.clearCodeUsage = function () {
            b = {};
          }))
        : (a.__bodyWrapper = g));
})(
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof global !== "undefined"
    ? global
    : typeof window !== "undefined"
    ? window
    : typeof this !== "undefined"
    ? this
    : typeof self !== "undefined"
    ? self
    : {}
);
(self.__DEV__ = self.__DEV__ || 0), (self.emptyFunction = function () {});

(function (a, b) {
  var c = "keys",
    d = "values",
    e = "entries",
    f = (function () {
      var a = h(Array),
        b;
      a ||
        (b = (function () {
          "use strict";
          function a(a, b) {
            (this.$1 = a), (this.$2 = b), (this.$3 = 0);
          }
          var b = a.prototype;
          b.next = function () {
            if (this.$1 == null) return { value: void 0, done: !0 };
            var a = this.$1,
              b = this.$1.length,
              f = this.$3,
              g = this.$2;
            if (f >= b) {
              this.$1 = void 0;
              return { value: void 0, done: !0 };
            }
            this.$3 = f + 1;
            if (g === c) return { value: f, done: !1 };
            else if (g === d) return { value: a[f], done: !1 };
            else if (g === e) return { value: [f, a[f]], done: !1 };
          };
          b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return this;
            };
          return a;
        })());
      return {
        keys: a
          ? function (a) {
              return a.keys();
            }
          : function (a) {
              return new b(a, c);
            },
        values: a
          ? function (a) {
              return a.values();
            }
          : function (a) {
              return new b(a, d);
            },
        entries: a
          ? function (a) {
              return a.entries();
            }
          : function (a) {
              return new b(a, e);
            },
      };
    })(),
    g = (function () {
      var a = h(String),
        b;
      a ||
        (b = (function () {
          "use strict";
          function a(a) {
            (this.$1 = a), (this.$2 = 0);
          }
          var b = a.prototype;
          b.next = function () {
            if (this.$1 == null) return { value: void 0, done: !0 };
            var a = this.$2,
              b = this.$1,
              c = b.length;
            if (a >= c) {
              this.$1 = void 0;
              return { value: void 0, done: !0 };
            }
            var d = b.charCodeAt(a);
            if (d < 55296 || d > 56319 || a + 1 === c) d = b[a];
            else {
              c = b.charCodeAt(a + 1);
              c < 56320 || c > 57343 ? (d = b[a]) : (d = b[a] + b[a + 1]);
            }
            this.$2 = a + d.length;
            return { value: d, done: !1 };
          };
          b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return this;
            };
          return a;
        })());
      return {
        keys: function () {
          throw TypeError("Strings default iterator doesn't implement keys.");
        },
        values: a
          ? function (a) {
              return a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
            }
          : function (a) {
              return new b(a);
            },
        entries: function () {
          throw TypeError(
            "Strings default iterator doesn't implement entries."
          );
        },
      };
    })();
  function h(a) {
    return (
      typeof a.prototype[
        typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
      ] === "function" &&
      typeof a.prototype.values === "function" &&
      typeof a.prototype.keys === "function" &&
      typeof a.prototype.entries === "function"
    );
  }
  var i = (function () {
      "use strict";
      function a(a, b) {
        (this.$1 = a), (this.$2 = b), (this.$3 = Object.keys(a)), (this.$4 = 0);
      }
      var b = a.prototype;
      b.next = function () {
        var a = this.$3.length,
          b = this.$4,
          f = this.$2,
          g = this.$3[b];
        if (b >= a) {
          this.$1 = void 0;
          return { value: void 0, done: !0 };
        }
        this.$4 = b + 1;
        if (f === c) return { value: g, done: !1 };
        else if (f === d) return { value: this.$1[g], done: !1 };
        else if (f === e) return { value: [g, this.$1[g]], done: !1 };
      };
      b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this;
        };
      return a;
    })(),
    j = {
      keys: function (a) {
        return new i(a, c);
      },
      values: function (a) {
        return new i(a, d);
      },
      entries: function (a) {
        return new i(a, e);
      },
    };
  function k(a, b) {
    if (typeof a === "string") return g[b || d](a);
    else if (Array.isArray(a)) return f[b || d](a);
    else if (a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"])
      return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
    else return j[b || e](a);
  }
  Object.assign(k, {
    KIND_KEYS: c,
    KIND_VALUES: d,
    KIND_ENTRIES: e,
    keys: function (a) {
      return k(a, c);
    },
    values: function (a) {
      return k(a, d);
    },
    entries: function (a) {
      return k(a, e);
    },
    generic: j.entries,
  });
  a.FB_enumerate = k;
})(
  typeof global === "object"
    ? global
    : typeof this === "object"
    ? this
    : typeof window === "object"
    ? window
    : typeof self === "object"
    ? self
    : {}
);

("use strict");
(function () {
  if (typeof Element === "undefined" || Element.prototype.scroll) return;
  function a(a, b) {
    b === void 0 && (b = !1);
    if (a.length === 0) return;
    var c = a[0],
      d = a[1];
    c = Number(c) || 0;
    d = Number(d) || 0;
    if (a.length === 1) {
      a = a[0];
      if (a == null) return;
      c = a.left;
      d = a.top;
      c !== void 0 && (c = Number(c) || 0);
      d !== void 0 && (d = Number(d) || 0);
    }
    c !== void 0 && (this.scrollLeft = (b ? this.scrollLeft : 0) + c);
    d !== void 0 && (this.scrollTop = (b ? this.scrollTop : 0) + d);
  }
  Element.prototype.scroll = Element.prototype.scrollTo = function () {
    a.call(this, arguments);
  };
  Element.prototype.scrollBy = function () {
    a.call(this, arguments, !0);
  };
})();

("use strict");
function getValuesIteratorProto(a) {
  return Object.getPrototypeOf(a);
}
function getIterators() {
  return [
    [].values(),
    [].keys(),
    [].entries(),
    new Uint8Array([]).values(),
    new Uint8Array([]).keys(),
    new Uint8Array([]).entries(),
    new Map().values(),
    new Map().keys(),
    new Map().entries(),
    new Set().values(),
    new Set().keys(),
    new Set().entries(),
  ];
}
function polyfillIteratorFunctions() {
  var a = new Set();
  getIterators().forEach(function (b) {
    a.add(getValuesIteratorProto(b));
  });
  a.forEach(function (a) {
    typeof a.drop !== "function" &&
      (a.drop = function (a) {
        for (var b = 0; b < a; b++) this.next();
        return this;
      }),
      typeof a.every !== "function" &&
        (a.every = function (a) {
          var b = Array.from(this);
          return b.every(a);
        }),
      typeof a.filter !== "function" &&
        (a.filter = function (a) {
          var b = Array.from(this);
          return b.filter(a);
        }),
      typeof a.find !== "function" &&
        (a.find = function (a) {
          var b = Array.from(this);
          return b.find(a);
        }),
      typeof a.flatMap !== "function" &&
        (a.flatMap = function (a) {
          var b = Array.from(this);
          return b.flatMap(a).values();
        }),
      typeof a.forEach !== "function" &&
        (a.forEach = function (a) {
          var b = Array.from(this);
          return b.forEach(a);
        }),
      typeof a.map !== "function" &&
        (a.map = function (a) {
          var b = Array.from(this);
          return b.map(a).values();
        }),
      typeof a.reduce !== "function" &&
        (a.reduce = function (a, b) {
          var c = Array.from(this);
          return c.reduce(function (b, c, d, e) {
            return a(b, c, d);
          }, b);
        }),
      typeof a.some !== "function" &&
        (a.some = function (a) {
          var b = Array.from(this);
          return b.some(a);
        }),
      typeof a.take !== "function" &&
        (a.take = function (a) {
          a = Array.from(this).slice(0, a);
          return a.values();
        }),
      typeof a.toArray !== "function" &&
        (a.toArray = function () {
          return Array.from(this);
        });
  });
}
polyfillIteratorFunctions();
(function () {
  function a() {
    if (typeof JSON !== "object" || typeof JSON.stringify !== "function")
      return !1;
    if (typeof navigator === "undefined" || !navigator.userAgent) return !0;
    var a = navigator.userAgent,
      b;
    if (a.indexOf("Firefox/") > -1) {
      b = a.match(/Firefox\/([0-9]+)/);
      return b == null || !(parseInt(b[1], 10) >= 62);
    } else if (a.indexOf("Edg/") > -1) {
      b = a.match(/Edg\/([0-9]+)/);
      return b == null || !(parseInt(b[1], 10) >= 79);
    } else if (a.indexOf("Chrome/") > -1) {
      b = a.match(/Chrome\/([0-9]+)/);
      return b == null || !(parseInt(b[1], 10) >= 66);
    } else if (a.indexOf("CriOS/") > -1) {
      b = a.match(/CriOS\/([0-9]+)/);
      return b == null || !(parseInt(b[1], 10) >= 66);
    } else if (a.indexOf("Safari/") > -1 && a.indexOf("Version/") > -1) {
      b = a.match(/Version\/([0-9]+)/);
      return b == null || !(parseInt(b[1], 10) >= 12);
    }
    return !0;
  }
  function b() {
    return JSON.stringify(["\u2028\u2029"]) === '["\\u2028\\u2029"]';
  }
  a() &&
    !b() &&
    (JSON.stringify = (function (a) {
      var b = /\u2028/g,
        c = /\u2029/g;
      return function (d, e, f) {
        d = a.call(this, d, e, f);
        d &&
          (-1 < d.indexOf("\u2028") && (d = d.replace(b, "\\u2028")),
          -1 < d.indexOf("\u2029") && (d = d.replace(c, "\\u2029")));
        return d;
      };
    })(JSON.stringify));
})();

(function () {
  var a = Object.prototype.hasOwnProperty;
  Object.entries = function (b) {
    if (b == null) throw new TypeError("Object.entries called on non-object");
    var c = [];
    for (var d in b) a.call(b, d) && c.push([d, b[d]]);
    return c;
  };
  typeof Object.fromEntries !== "function" &&
    (Object.fromEntries = function (a) {
      var b = {};
      for (a of a) {
        var c = a[0],
          d = a[1];
        b[c] = d;
      }
      return b;
    });
  Object.values = function (b) {
    if (b == null) throw new TypeError("Object.values called on non-object");
    var c = [];
    for (var d in b) a.call(b, d) && c.push(b[d]);
    return c;
  };
})();

("use strict");
Set.prototype.difference == null &&
  (Set.prototype.difference = function (a) {
    var b = new Set(this);
    for (a of a) b.has(a) && b["delete"](a);
    return b;
  });
("use strict");
Set.prototype.intersection == null &&
  (Set.prototype.intersection = function (a) {
    var b = new Set();
    for (var c of this) a.has(c) && b.add(c);
    return b;
  });
("use strict");
Set.prototype.isDisjointFrom == null &&
  (Set.prototype.isDisjointFrom = function (a) {
    if (this.size <= a.size) {
      for (var b of this) if (a.has(b)) return !1;
    } else for (b of a) if (this.has(b)) return !1;
    return !0;
  });
("use strict");
Set.prototype.isSubsetOf == null &&
  (Set.prototype.isSubsetOf = function (a) {
    if (this.size > a.size) return !1;
    for (var b of this) if (!a.has(b)) return !1;
    return !0;
  });
("use strict");
Set.prototype.isSupersetOf == null &&
  (Set.prototype.isSupersetOf = function (a) {
    if (this.size < a.size) return !1;
    for (a of a) if (!this.has(a)) return !1;
    return !0;
  });
("use strict");
Set.prototype.symmetricDifference == null &&
  (Set.prototype.symmetricDifference = function (a) {
    var b = new Set(this);
    for (a of a) b.has(a) ? b["delete"](a) : b.add(a);
    return b;
  });

String.prototype.contains ||
  (String.prototype.contains = String.prototype.includes);
String.prototype.padStart ||
  (String.prototype.padStart = function (a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
      a = a - this.length;
      a > b.length && (b += b.repeat(a / b.length));
      return b.slice(0, a) + String(this);
    }
  }),
  String.prototype.padEnd ||
    (String.prototype.padEnd = function (a, b) {
      a = a >> 0;
      b = String(b || " ");
      if (this.length > a) return String(this);
      else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return String(this) + b.slice(0, a);
      }
    });
if (!String.prototype.matchAll) {
  var MAX_CALLS_TO_EXEC = 250;
  String.prototype.matchAll = function (a) {
    if (!a.global)
      throw new TypeError(
        "String.prototype.matchAll called with a non-global RegExp argument"
      );
    var b = String(this),
      c = [],
      d,
      e = 0;
    while ((d = a.exec(b)) && e++ < MAX_CALLS_TO_EXEC) c.push(d);
    return c;
  };
}
String.prototype.trimLeft ||
  (String.prototype.trimLeft = function () {
    return this.replace(/^\s+/, "");
  }),
  String.prototype.trimRight ||
    (String.prototype.trimRight = function () {
      return this.replace(/\s+$/, "");
    });

("use strict");
(function (a) {
  function a() {
    if (typeof URL !== "function") return !1;
    if (
      typeof URL.createObjectURL !== "function" ||
      typeof URL.revokeObjectURL !== "function"
    )
      return !1;
    return typeof File !== "function" || typeof Blob !== "function" ? !1 : !0;
  }
  if (!a()) return;
  var b = {},
    c = URL.createObjectURL,
    d = URL.revokeObjectURL;
  URL.createObjectURL = function (a) {
    var d = null,
      e = 0;
    a instanceof File
      ? ((d = "File"), (e = a.size))
      : a instanceof Blob
      ? ((d = "Blob"), (e = a.size))
      : typeof MediaSource === "function" &&
        a instanceof MediaSource &&
        ((d = "MediaSource"), (e = 0));
    a = c.call(URL, a);
    d !== null && (b[a] = { type: d, size: e });
    return a;
  };
  URL.revokeObjectURL = function (a) {
    d.call(URL, a), delete b[a];
  };
  URL._fbRegisteredObjectURL = function () {
    return Object.values(b);
  };
})(this);
(function (a) {
  var b = (a.babelHelpers = {}),
    c = Object.prototype.hasOwnProperty;
  typeof Symbol !== "undefined" &&
    !(typeof Symbol === "function"
      ? Symbol.asyncIterator
      : "@@asyncIterator") &&
    (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"));
  function d(a) {
    this.wrapped = a;
  }
  function e(a) {
    var b, c;
    function e(a, d) {
      return new Promise(function (e, g) {
        e = { key: a, arg: d, resolve: e, reject: g, next: null };
        c ? (c = c.next = e) : ((b = c = e), f(a, d));
      });
    }
    function f(b, c) {
      try {
        var e = a[b](c);
        c = e.value;
        var h = c instanceof d;
        Promise.resolve(h ? c.wrapped : c).then(
          function (a) {
            if (h) {
              f(b === "return" ? "return" : "next", a);
              return;
            }
            g(e.done ? "return" : "normal", a);
          },
          function (a) {
            f("throw", a);
          }
        );
      } catch (a) {
        g("throw", a);
      }
    }
    function g(a, d) {
      switch (a) {
        case "return":
          b.resolve({ value: d, done: !0 });
          break;
        case "throw":
          b.reject(d);
          break;
        default:
          b.resolve({ value: d, done: !1 });
          break;
      }
      b = b.next;
      b ? f(b.key, b.arg) : (c = null);
    }
    this._invoke = e;
    typeof a["return"] !== "function" && (this["return"] = void 0);
  }
  typeof Symbol === "function" &&
    (typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator") &&
    (e.prototype[
      typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator"
    ] = function () {
      return this;
    });
  e.prototype.next = function (a) {
    return this._invoke("next", a);
  };
  e.prototype["throw"] = function (a) {
    return this._invoke("throw", a);
  };
  e.prototype["return"] = function (a) {
    return this._invoke("return", a);
  };
  b.createClass = (function () {
    function a(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d.enumerable = d.enumerable || !1;
        d.configurable = !0;
        "value" in d && (d.writable = !0);
        Object.defineProperty(a, d.key, d);
      }
    }
    return function (b, c, d) {
      c && a(b.prototype, c);
      d && a(b, d);
      return b;
    };
  })();
  b.inheritsLoose = function (a, b) {
    Object.assign(a, b);
    a.prototype = Object.create(b && b.prototype);
    a.prototype.constructor = a;
    a.__superConstructor__ = b;
    return b;
  };
  b.wrapNativeSuper = function (a) {
    var c = typeof Map === "function" ? new Map() : void 0;
    b.wrapNativeSuper = function (a) {
      if (a === null) return null;
      if (typeof a !== "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (c !== void 0) {
        if (c.has(a)) return c.get(a);
        c.set(a, d);
      }
      b.inheritsLoose(d, a);
      function d() {
        a.apply(this, arguments);
      }
      return d;
    };
    return b.wrapNativeSuper(a);
  };
  b.assertThisInitialized = function (a) {
    if (a === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return a;
  };
  b._extends = Object.assign;
  b["extends"] = b._extends;
  b.construct = function (a, b) {
    return new (Function.prototype.bind.apply(a, [null].concat(b)))();
  };
  b.objectWithoutPropertiesLoose = function (a, b) {
    var d = {};
    for (var e in a) {
      if (!c.call(a, e) || b.indexOf(e) >= 0) continue;
      d[e] = a[e];
    }
    return d;
  };
  b.taggedTemplateLiteralLoose = function (a, b) {
    b || (b = a.slice(0));
    a.raw = b;
    return a;
  };
  b.bind = Function.prototype.bind;
  b.wrapAsyncGenerator = function (a) {
    return function () {
      return new e(a.apply(this, arguments));
    };
  };
  b.awaitAsyncGenerator = function (a) {
    return new d(a);
  };
  b.asyncIterator = function (a) {
    var b;
    if (typeof Symbol !== "undefined") {
      if (
        typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator"
      ) {
        b =
          a[
            typeof Symbol === "function"
              ? Symbol.asyncIterator
              : "@@asyncIterator"
          ];
        if (b != null) return b.call(a);
      }
      if (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") {
        b = a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"];
        if (b != null) return b.call(a);
      }
    }
    throw new TypeError("Object is not async iterable");
  };
  b.asyncGeneratorDelegate = function (a, b) {
    var c = {},
      d = !1;
    function e(c, e) {
      d = !0;
      e = new Promise(function (b) {
        b(a[c](e));
      });
      return { done: !1, value: b(e) };
    }
    typeof Symbol === "function" &&
      (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") &&
      (c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this;
        });
    c.next = function (a) {
      if (d) {
        d = !1;
        return a;
      }
      return e("next", a);
    };
    typeof a["throw"] === "function" &&
      (c["throw"] = function (a) {
        if (d) {
          d = !1;
          throw a;
        }
        return e("throw", a);
      });
    typeof a["return"] === "function" &&
      (c["return"] = function (a) {
        if (d) {
          d = !1;
          return a;
        }
        return e("return", a);
      });
    return c;
  };
})(typeof global === "undefined" ? self : global);

(function (a) {
  if (a.require != null) return;
  var b = null,
    c = null,
    d = [],
    e = {},
    f = {},
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
      f = e[d];
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
      f = e[d];
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
  $ = a.Env || {};
  var x = !!$.gk_require_when_ready_in_order,
    da = !!$.clear_js_factory_after_used,
    y = !!$.profile_require_factories,
    z = a.performance || {},
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
  var C = 0;
  function D(a) {
    C++;
    var b = e[a];
    (!b || (b.exports == null && !b.factoryFinished)) && (I(a), (b = e[a]));
    b && b.refcount-- === 1 && (e[a] = null);
    return b;
  }
  function E(a) {
    return a.defaultExport !== s ? a.defaultExport : a.exports;
  }
  function F(a) {
    a = D(a);
    if (a) return E(a);
  }
  function G(a) {
    a = D(a);
    if (a) return a.defaultExport !== s ? a.defaultExport : null;
  }
  function H(a) {
    a = D(a);
    if (a) return a.exports;
  }
  function ea(a) {
    a.factoryLength === -1 && (a.factoryLength = a.factory.length);
    return a.factoryLength;
  }
  function I(d) {
    var g = a.ErrorGuard;
    if (g && !g.inGuard()) return g.applyWithGuard(I, null, [d]);
    g = e[d];
    if (!g) {
      var h = 'Requiring unknown module "%s"';
      throw w(h, d);
    }
    a.__onBeforeModuleFactory == null ? void 0 : a.__onBeforeModuleFactory(g);
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
          r.length < s && r.push(F.call(null, x.id));
        }
        var z;
        y && (z = A());
        f[g.id].factoryRun = !0;
        try {
          x = g.context != null ? g.context : a;
          p = k.apply(x, r);
        } catch (a) {
          L(a, d);
        } finally {
          if (y) {
            s = A();
            l = f[g.id];
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
          } catch (a) {}
      }
      g.factoryFinished = !0;
      da && ((g.factory = null), (k = void 0));
    } else g.exports = k;
    h = "__isRequired__" + d;
    x = e[h];
    x && !V(x) && T(h, ca);
    a.__onAfterModuleFactory == null ? void 0 : a.__onAfterModuleFactory(g);
  }
  function J(b) {
    if (a.getErrorSafe != null) return a.getErrorSafe(b);
    return b != null && typeof b === "object" && typeof b.message === "string"
      ? b
      : w("Non-error thrown: %s", String(b));
  }
  function K(b, c) {
    var d = a.ErrorSerializer;
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
  function fa() {
    return C;
  }
  function ga() {
    var a = {};
    for (var b in f)
      Object.prototype.hasOwnProperty.call(f, b) && (a[b] = f[b]);
    return a;
  }
  function M(a) {
    if (a.nonJSDeps) return;
    a.nonJSDeps = !0;
    a.dependencies && a.dependencies.forEach(M);
  }
  var N = !!(a != null && a.document != null && "createElement" in a.document),
    O = typeof WorkerGlobalScope === "function";
  N = N || O;
  var P = $.use_fbt_virtual_modules === !0 && N,
    ha = "$fbt_virtual",
    Q = {},
    R = null,
    S = 6e4;
  function ia(a) {
    !(a in e) && !(a in Q) && (Q[a] = A()),
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
      U.apply(null, [
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
  function la(a) {
    var b = e[a];
    if (b) return b;
    b = new ma(a, 0);
    e[a] = b;
    return b;
  }
  function ma(a, b, c) {
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
    if (!e[a]) return;
    var b = e[a];
    e[a] = null;
    if (b.dependencies)
      for (a = 0; a < b.dependencies.length; a++) {
        var c = b.dependencies[a];
        c.refcount-- === 1 && na(c.id);
      }
  }
  function U(a, b, c, d) {
    c === void 0 && (c = null);
    d === void 0 && (d = 0);
    var e = "__requireLazy__x__" + g++;
    return T(
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
      var d = !e[c.id];
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
            F.call(null, d.id);
          } catch (b) {
            a.sideEffectDependencyException = b;
            throw b;
          }
      }
  }
  function X(a, b) {
    (e[a] = new ma(a, 0, b)),
      (f[a] = {
        id: a,
        dependencies: [],
        category: 0,
        factoryLengthAccessTime: null,
        factoryTime: null,
        factoryStart: null,
        factoryEnd: null,
        factoryRun: !1,
      });
  }
  X("module", 0);
  X("exports", 0);
  X("define", T);
  X("global", a);
  X("require", F);
  X("requireInterop", F);
  X("importDefault", G);
  X("importNamespace", H);
  X("requireDynamic", ya);
  X("requireLazy", U);
  X("requireWeak", Y);
  X("ifRequired", za);
  X("ifRequireable", Aa);
  b = [
    F.call(null, "global"),
    F.call(null, "require"),
    F.call(null, "requireDynamic"),
    F.call(null, "requireLazy"),
    F.call(null, "requireInterop"),
    null,
  ];
  c = [
    F.call(null, "global"),
    F.call(null, "require"),
    F.call(null, "importDefault"),
    F.call(null, "importNamespace"),
    F.call(null, "requireLazy"),
    F.call(null, "requireInterop"),
    null,
  ];
  T.amd = {};
  a.define = T;
  a.require = F;
  a.requireInterop = F;
  a.importDefault = G;
  a.importNamespace = H;
  a.requireDynamic = ya;
  a.requireLazy = U;
  a.__onBeforeModuleFactory = null;
  a.__onAfterModuleFactory = null;
  function ya(a, b) {
    throw new ReferenceError("requireDynamic is not defined");
  }
  function Y(a, b) {
    za.call(
      null,
      a,
      function (a) {
        b(a);
      },
      function () {
        T(
          "__requireWeak__" + a + "__" + g++,
          ["__isRequired__" + a],
          Z()(function () {
            return b(E(e[a]));
          }, "requireWeak"),
          l,
          null,
          1
        );
      }
    );
  }
  function za(a, b, c) {
    a = e[a];
    if (a && a.factoryFinished) {
      if (typeof b === "function") return b(E(a));
    } else if (typeof c === "function") return c();
  }
  function Aa(a, b, c) {
    var d = e[a];
    if (d && d.nonJSDeps && V(d)) {
      if (typeof b === "function") return b(F.call(null, a));
    } else if (typeof c === "function") return c();
  }
  O = {
    getDupCount: function () {
      return [j, k];
    },
    getModules: function () {
      var a = {};
      for (var b in e)
        e[b] && Object.prototype.hasOwnProperty.call(e, b) && (a[b] = e[b]);
      return a;
    },
    modulesMap: e,
    debugUnresolvedDependencies: v,
  };
  function Ba(a) {
    return a;
  }
  function Z() {
    var b = a.TimeSlice && a.TimeSlice.guard ? a.TimeSlice.guard : Ba;
    return function () {
      return b.apply(void 0, arguments);
    };
  }
  X("__getTotalRequireCalls", fa);
  X("__getModuleTimeDetails", ga);
  X("__debug", O);
  a.__d = function (a, b, c, d) {
    Z()(
      function () {
        T(a, b, c, (d || m) | o, null, null, null);
      },
      "define " + a,
      { root: !0 }
    )();
  };
  function $(a, b) {
    return !0;
  }
  if (a.__d_stub) {
    for ($ = 0; $ < a.__d_stub.length; $++) a.__d.apply(null, a.__d_stub[$]);
    delete a.__d_stub;
  }
  if (a.__rl_stub) {
    for (N = 0; N < a.__rl_stub.length; N++) U.apply(null, a.__rl_stub[N]);
    delete a.__rl_stub;
  }
  Y = function () {};
  a.$RefreshReg$ = Y;
  a.$RefreshSig$ = function () {
    return function (a) {
      return a;
    };
  };
})(
  typeof this !== "undefined"
    ? this
    : typeof global !== "undefined"
    ? global
    : typeof window !== "undefined"
    ? window
    : typeof self !== "undefined"
    ? self
    : {}
);
(function (a) {
  var b = a.performance;
  b &&
    b.setResourceTimingBufferSize &&
    (b.setResourceTimingBufferSize(1e5),
    (b.onresourcetimingbufferfull = function () {
      a.__isresourcetimingbufferfull = !0;
    }),
    (b.setResourceTimingBufferSize = function () {}));
})(
  typeof this === "object"
    ? this
    : typeof global === "object"
    ? global
    : typeof window === "object"
    ? window
    : typeof self === "object"
    ? self
    : {}
);

__d(
  "requireCond",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      throw new Error("Cannot use raw untransformed requireCond.");
    }
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "Promise",
  ["cr:6640"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = (c = b("cr:6640")) != null ? c : a.Promise;
    g.allSettled ||
      (g.allSettled = function (a) {
        var b;
        if (
          (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in a
        )
          b = Array.from(a);
        else
          return g.reject(
            new TypeError("Promise.allSettled must be passed an iterable.")
          );
        var c = Array(b.length);
        a = function (a, d) {
          var e = b[a];
          d =
            typeof e === "object" && e !== null && typeof e.then === "function";
          c[a] = d
            ? new g(function (a, b) {
                e.then(
                  function (b) {
                    a({ status: "fulfilled", value: b });
                  },
                  function (b) {
                    a({ status: "rejected", reason: b });
                  }
                );
              })
            : g.resolve({ status: "fulfilled", value: e });
        };
        for (var d = 0, e = b.length; d < e; ++d) a(d, e);
        return g.all(c);
      });
    g.prototype["finally"] ||
      (g.prototype["finally"] = function (a) {
        return this.then(
          function (b) {
            return g.resolve(a()).then(function () {
              return b;
            });
          },
          function (b) {
            return g.resolve(a()).then(function () {
              throw b;
            });
          }
        );
      });
    e.exports = g;
  },
  null
);
__d(
  "WAByteArray",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      b = b;
      var c = new Uint8Array(a);
      for (a = a - 1; a >= 0; a--) (c[a] = b & 255), (b >>>= 8);
      return c;
    }
    function b(a) {
      return a.buffer.slice(a.byteOffset, a.byteLength + a.byteOffset);
    }
    function c(a, b) {
      if (!a || !b) return !1;
      a = new Uint8Array(a);
      b = new Uint8Array(b);
      var c = a.length,
        d = b.length;
      if (c !== d) return !1;
      for (d = 0; d < c; d++) if (a[d] !== b[d]) return !1;
      return !0;
    }
    f.intToBytes = a;
    f.uint8ArrayToBuffer = b;
    f.compareArrayBuffer = c;
  },
  66
);
__d(
  "WABlobToImage",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    function a(a) {
      var c;
      return new (g || (g = b("Promise")))(function (b, d) {
        c = new Image();
        var e = URL.createObjectURL(a),
          f = function () {
            return URL.revokeObjectURL(e);
          };
        c.onload = function () {
          b({ image: c, releaseImageMemory: f });
        };
        c.onerror = function () {
          f(), d("loadBlobToImage error");
        };
        c.src = e;
      });
    }
    f.blobToImage = a;
  },
  66
);
__d(
  "WACalculateBoundOutputSize",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return b != null
        ? g(a.width, a.height, b.width, b.height)
        : { outputWidth: a.width, outputHeight: a.height };
    }
    function g(a, b, c, d) {
      var e = a,
        f = b;
      a > b
        ? a > c && ((f *= c / e), (e = c))
        : f > d && ((e *= d / f), (f = d));
      return {
        outputWidth: Math.round(Math.max(e, 1)),
        outputHeight: Math.round(Math.max(f, 1)),
      };
    }
    f.calculateBoundOutputSize = a;
  },
  66
);
__d(
  "performance",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    b = a.performance || a.msPerformance || a.webkitPerformance || {};
    c = b;
    f["default"] = c;
  },
  66
);
__d(
  "performanceNow",
  ["performance"],
  function (a, b, c, d, e, f, g) {
    var h;
    if ((h || (h = c("performance"))).now)
      b = function () {
        return (h || (h = c("performance"))).now();
      };
    else {
      d = a._cstart;
      e = Date.now();
      var i = typeof d === "number" && d < e ? d : e,
        j = 0;
      b = function () {
        var a = Date.now(),
          b = a - i;
        b < j && ((i -= j - b), (b = a - i));
        j = b;
        return b;
      };
    }
    f = b;
    g["default"] = f;
  },
  98
);
__d(
  "removeFromArray",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      b = a.indexOf(b);
      b !== -1 && a.splice(b, 1);
    }
    f["default"] = a;
  },
  66
);
__d(
  "fb-error",
  ["performanceNow", "removeFromArray"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = {
        PREVIOUS_FILE: 1,
        PREVIOUS_FRAME: 2,
        PREVIOUS_DIR: 3,
        FORCED_KEY: 4,
      };
    function i(b) {
      var a = new Error(b);
      if (a.stack === void 0)
        try {
          throw a;
        } catch (a) {}
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
      a.taalOpcodes = [h.PREVIOUS_FRAME];
      return a;
    }
    var j = !1,
      k = {
        errorListener: function (b) {
          var c = a.console,
            d = c[b.type] ? b.type : "error";
          if (b.type === "fatal" || (d === "error" && !j)) {
            d = b.message;
            c.error(
              "ErrorUtils caught an error:\n\n" +
                d +
                "\n\nSubsequent non-fatal errors won't be logged; see https://fburl.com/debugjs.",
              b
            );
            j = !0;
          }
        },
      },
      l = { skipDupErrorGuard: !1 },
      m = { config: l, setup: c },
      n = !1;
    function c(a) {
      n === !1 && ((n = !0), (m.config = Object.freeze(a)));
    }
    var o = { access_token: null },
      p = 6,
      q = 6e4,
      r = 10 * q,
      s = new Map(),
      t = 0;
    function u() {
      var a = (g || (g = b("performanceNow")))();
      if (a > t + q) {
        var c = a - r;
        for (var d of s) {
          var e = d[0],
            f = d[1];
          f.lastAccessed < c && s["delete"](e);
        }
        t = a;
      }
    }
    function aa(a) {
      u();
      var c = (g || (g = b("performanceNow")))(),
        d = s.get(a);
      if (d == null) {
        s.set(a, { dropped: 0, logged: [c], lastAccessed: c });
        return 1;
      }
      a = d.dropped;
      var e = d.logged;
      d.lastAccessed = c;
      while (e[0] < c - q) e.shift();
      if (e.length < p) {
        d.dropped = 0;
        e.push(c);
        return a + 1;
      } else {
        d.dropped++;
        return null;
      }
    }
    var v = {
        shouldLog: function (a) {
          return aa(a.hash);
        },
      },
      ba = "RE_EXN_ID";
    function w(a) {
      var b = null;
      a == null || typeof a !== "object"
        ? (b = i("Non-object thrown: %s", String(a)))
        : Object.prototype.hasOwnProperty.call(a, ba)
        ? (b = i("Rescript exception thrown: %s", JSON.stringify(a)))
        : typeof (a === null || a === void 0 ? void 0 : a.then) === "function"
        ? (b = i("Promise thrown: %s", JSON.stringify(a)))
        : typeof a.message !== "string"
        ? (b = i(
            "Non-error thrown: %s, keys: %s",
            String(a),
            JSON.stringify(Object.keys(a).sort())
          ))
        : a.messageFormat != null && typeof a.messageFormat !== "string"
        ? (b = i(
            "Error with non-string messageFormat thrown: %s, %s, keys: %s",
            String(a.message),
            String(a),
            JSON.stringify(Object.keys(a).sort())
          ))
        : Object.isExtensible &&
          !Object.isExtensible(a) &&
          (b = i("Non-extensible thrown: %s", String(a.message)));
      if (b != null) {
        b.taalOpcodes = b.taalOpcodes || [];
        b.taalOpcodes.push(h.PREVIOUS_FRAME);
        return b;
      }
      return a;
    }
    var ca =
        typeof window === "undefined" ? "<self.onerror>" : "<window.onerror>",
      x;
    function da(a) {
      var b = a.error != null ? w(a.error) : i(a.message || "");
      b.fileName == null && a.filename != null && (b.fileName = a.filename);
      b.line == null && a.lineno != null && (b.line = a.lineno);
      b.column == null && a.colno != null && (b.column = a.colno);
      b.guardList = [ca];
      b.loggingSource = "ONERROR";
      (a = x) === null || a === void 0 ? void 0 : a.reportError(b);
    }
    var y = {
        setup: function (b) {
          if (typeof a.addEventListener !== "function") return;
          if (x != null) return;
          x = b;
          a.addEventListener("error", da);
        },
      },
      z = [],
      A = {
        pushGuard: function (a) {
          z.unshift(a);
        },
        popGuard: function () {
          z.shift();
        },
        inGuard: function () {
          return z.length !== 0;
        },
        cloneGuardList: function () {
          return z.map(function (a) {
            return a.name;
          });
        },
        findDeferredSource: function () {
          for (var a of z)
            if (a.deferredSource != null) return a.deferredSource;
        },
      };
    function ea(a) {
      if (a.type != null) return a.type;
      if (a.loggingSource == "GUARDED" || a.loggingSource == "ERROR_BOUNDARY")
        return "fatal";
      if (a.name == "SyntaxError") return "fatal";
      if (
        a.loggingSource == "ONERROR" &&
        a.message.indexOf("ResizeObserver loop") >= 0
      )
        return "warn";
      return a.stack != null && a.stack.indexOf("chrome-extension://") >= 0
        ? "warn"
        : "error";
    }
    var B = [],
      C = (function () {
        function a() {
          this.metadata = [].concat(B);
        }
        var b = a.prototype;
        b.addEntries = function () {
          var a;
          (a = this.metadata).push.apply(a, arguments);
          return this;
        };
        b.addEntry = function (a, b, c) {
          this.metadata.push([a, b, c]);
          return this;
        };
        b.isEmpty = function () {
          return this.metadata.length === 0;
        };
        b.clearEntries = function () {
          this.metadata = [];
        };
        b.format = function () {
          var a = [];
          this.metadata.forEach(function (b) {
            if (b && b.length) {
              b = b
                .map(function (a) {
                  return a != null ? String(a).replace(/:/g, "_") : "";
                })
                .join(":");
              a.push(b);
            }
          });
          return a;
        };
        b.getAll = function () {
          return this.metadata;
        };
        a.addGlobalMetadata = function (a, b, c) {
          B.push([a, b, c]);
        };
        a.getGlobalMetadata = function () {
          return B;
        };
        a.unsetGlobalMetadata = function (a, b) {
          B = B.filter(function (c) {
            return !(Array.isArray(c) && c[0] === a && c[1] === b);
          });
        };
        return a;
      })(),
      D = { debug: 1, info: 2, warn: 3, error: 4, fatal: 5 };
    function d(a, b) {
      if (Object.isFrozen(a)) return;
      b.type && (!a.type || D[a.type] > D[b.type]) && (a.type = b.type);
      var c = b.metadata;
      if (c != null) {
        var d;
        d = (d = a.metadata) !== null && d !== void 0 ? d : new C();
        c != null && d.addEntries.apply(d, c.getAll());
        a.metadata = d;
      }
      b.project != null && (a.project = b.project);
      b.errorName != null && (a.errorName = b.errorName);
      b.componentStack != null && (a.componentStack = b.componentStack);
      b.deferredSource != null && (a.deferredSource = b.deferredSource);
      b.blameModule != null && (a.blameModule = b.blameModule);
      b.loggingSource != null && (a.loggingSource = b.loggingSource);
      d = (c = a.messageFormat) !== null && c !== void 0 ? c : a.message;
      c = (c = a.messageParams) !== null && c !== void 0 ? c : [];
      if (d !== b.messageFormat && b.messageFormat != null) {
        var e;
        d += " [Caught in: " + b.messageFormat + "]";
        c.push.apply(
          c,
          (e = b.messageParams) !== null && e !== void 0 ? e : []
        );
      }
      a.messageFormat = d;
      a.messageParams = c;
      e = b.forcedKey;
      d = a.forcedKey;
      c =
        e != null && d != null
          ? e + "_" + d
          : e !== null && e !== void 0
          ? e
          : d;
      a.forcedKey = c;
    }
    function f(a) {
      var b;
      return fa(
        (b = a.messageFormat) !== null && b !== void 0 ? b : a.message,
        a.messageParams || []
      );
    }
    function fa(a, b) {
      var c = 0;
      a = String(a);
      a = a.replace(/%s/g, function () {
        return c < b.length ? b[c++] : "NOPARAM";
      });
      c < b.length && (a += " PARAMS" + JSON.stringify(b.slice(c)));
      return a;
    }
    function ga(a) {
      return (a !== null && a !== void 0 ? a : []).map(function (a) {
        return String(a);
      });
    }
    var E = { aggregateError: d, toReadableMessage: f, toStringParams: ga },
      ha = 5,
      F = [];
    function G(a) {
      F.push(a), F.length > ha && F.shift();
    }
    function ia(a) {
      var b = a.getAllResponseHeaders();
      if (b != null && b.indexOf("X-FB-Debug") >= 0) {
        b = a.getResponseHeader("X-FB-Debug");
        b && G(b);
      }
    }
    function ja() {
      return F;
    }
    var H = { add: G, addFromXHR: ia, getAll: ja },
      ka = "abcdefghijklmnopqrstuvwxyz012345";
    function I() {
      var a = 0;
      for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++)
        c[d] = arguments[d];
      for (var e of c)
        if (e != null) {
          var f = e.length;
          for (var g = 0; g < f; g++) a = (a << 5) - a + e.charCodeAt(g);
        }
      var h = "";
      for (var i = 0; i < 6; i++) (h = ka.charAt(a & 31) + h), (a >>= 5);
      return h;
    }
    var la = [
        /\(([^\s\)\()]+):(\d+):(\d+)\)$/,
        /@([^\s\)\()]+):(\d+):(\d+)$/,
        /^([^\s\)\()]+):(\d+):(\d+)$/,
        /^at ([^\s\)\()]+):(\d+):(\d+)$/,
      ],
      ma = /^\w+:\s.*?\n/g;
    Error.stackTraceLimit != null &&
      Error.stackTraceLimit < 80 &&
      (Error.stackTraceLimit = 80);
    function na(a) {
      var b = a.name,
        c = a.message;
      a = a.stack;
      if (a == null) return null;
      if (b != null && c != null && c !== "") {
        var d = b + ": " + c + "\n";
        if (a.startsWith(d)) return a.substr(d.length);
        if (a === b + ": " + c) return null;
      }
      if (b != null) {
        d = b + "\n";
        if (a.startsWith(d)) return a.substr(d.length);
      }
      if (c != null && c !== "") {
        b = ": " + c + "\n";
        d = a.indexOf(b);
        c = a.substring(0, d);
        if (/^\w+$/.test(c)) return a.substring(d + b.length);
      }
      return a.replace(ma, "");
    }
    function J(a) {
      a = a.trim();
      var b;
      a;
      var c, d, e;
      if (a.includes("charset=utf-8;base64,")) b = "<inlined-file>";
      else {
        var f;
        for (var g of la) {
          f = a.match(g);
          if (f != null) break;
        }
        f != null && f.length === 4
          ? ((c = f[1]),
            (d = parseInt(f[2], 10)),
            (e = parseInt(f[3], 10)),
            (b = a.substring(0, a.length - f[0].length)))
          : (b = a);
        b = b.replace(/^at /, "").trim();
      }
      g = { identifier: b, script: c, line: d, column: e };
      g.text = K(g);
      return g;
    }
    function oa(a) {
      return a == null || a === "" ? [] : a.split(/\n\n/)[0].split("\n").map(J);
    }
    function pa(a) {
      a = na(a);
      return oa(a);
    }
    function qa(a) {
      if (a == null || a === "") return null;
      a = a.split("\n");
      a.splice(0, 1);
      return a.map(function (a) {
        return a.trim();
      });
    }
    function K(a) {
      var b = a.identifier,
        c = a.script,
        d = a.line;
      a = a.column;
      b = "    at " + (b !== null && b !== void 0 ? b : "<unknown>");
      c != null &&
        d != null &&
        a != null &&
        (b += " (" + c + ":" + d + ":" + a + ")");
      return b;
    }
    function L(c) {
      var d,
        e,
        f,
        i,
        j,
        k,
        l = pa(c);
      d = (d = c.taalOpcodes) !== null && d !== void 0 ? d : [];
      var m = c.framesToPop;
      if (m != null) {
        m = Math.min(m, l.length);
        while (m-- > 0) d.unshift(h.PREVIOUS_FRAME);
      }
      m = (m = c.messageFormat) !== null && m !== void 0 ? m : c.message;
      e = ((e = c.messageParams) !== null && e !== void 0 ? e : []).map(
        function (a) {
          return String(a);
        }
      );
      var n = qa(c.componentStack),
        o = n == null ? null : n.map(J),
        p = c.metadata ? c.metadata.format() : new C().format();
      p.length === 0 && (p = void 0);
      var q = l
        .map(function (a) {
          return a.text;
        })
        .join("\n");
      f = (f = c.errorName) !== null && f !== void 0 ? f : c.name;
      var r = ea(c),
        s = c.loggingSource,
        t = c.project;
      i = (i = c.lineNumber) !== null && i !== void 0 ? i : c.line;
      j = (j = c.columnNumber) !== null && j !== void 0 ? j : c.column;
      k = (k = c.fileName) !== null && k !== void 0 ? k : c.sourceURL;
      var u = l.length > 0;
      u && i == null && (i = l[0].line);
      u && j == null && (j = l[0].column);
      u && k == null && (k = l[0].script);
      o = {
        blameModule: c.blameModule,
        cause: c.cause,
        column: j == null ? null : String(j),
        clientTime: Math.floor(Date.now() / 1e3),
        componentStackFrames: o,
        deferredSource: c.deferredSource != null ? L(c.deferredSource) : null,
        extra: (u = c.extra) !== null && u !== void 0 ? u : {},
        fbtrace_id: c.fbtrace_id,
        guardList: (j = c.guardList) !== null && j !== void 0 ? j : [],
        hash: I(f, q, r, t, s),
        isNormalizedError: !0,
        line: i == null ? null : String(i),
        loggingSource: s,
        message: E.toReadableMessage(c),
        messageFormat: m,
        messageParams: e,
        metadata: p,
        name: f,
        page_time: Math.floor((g || (g = b("performanceNow")))()),
        project: t,
        reactComponentStack: n,
        script: k,
        serverHash: c.serverHash,
        stack: q,
        stackFrames: l,
        type: r,
        xFBDebug: H.getAll(),
      };
      c.forcedKey != null && (o.forcedKey = c.forcedKey);
      d.length > 0 && (o.taalOpcodes = d);
      u = a.location;
      u && (o.windowLocationURL = u.href);
      for (j in o) o[j] == null && delete o[j];
      return o;
    }
    function ra(a) {
      return a != null && typeof a === "object" && a.isNormalizedError === !0
        ? a
        : null;
    }
    var M = { formatStackFrame: K, normalizeError: L, ifNormalizedError: ra },
      sa = "<global.react>",
      N = [],
      O = [],
      P = 50,
      Q = !1,
      R = {
        history: O,
        addListener: function (a, b) {
          b === void 0 && (b = !1),
            N.push(a),
            b ||
              O.forEach(function (b) {
                return a(
                  b,
                  (b = b.loggingSource) !== null && b !== void 0
                    ? b
                    : "DEPRECATED"
                );
              });
        },
        unshiftListener: function (a) {
          N.unshift(a);
        },
        removeListener: function (a) {
          b("removeFromArray")(N, a);
        },
        reportError: function (a) {
          a = M.normalizeError(a);
          R.reportNormalizedError(a);
        },
        reportNormalizedError: function (b) {
          if (Q) return !1;
          var a = A.cloneGuardList();
          b.componentStackFrames && a.unshift(sa);
          a.length > 0 && (b.guardList = a);
          if (b.deferredSource == null) {
            a = A.findDeferredSource();
            a != null && (b.deferredSource = M.normalizeError(a));
          }
          O.length > P && O.splice(P / 2, 1);
          O.push(b);
          Q = !0;
          for (a = 0; a < N.length; a++)
            try {
              var c;
              N[a](
                b,
                (c = b.loggingSource) !== null && c !== void 0
                  ? c
                  : "DEPRECATED"
              );
            } catch (a) {}
          Q = !1;
          return !0;
        },
      };
    R.addListener(k.errorListener);
    var ta = "<anonymous guard>",
      S = !1,
      T = {
        applyWithGuard: function (a, b, c, d) {
          if (m.config.skipDupErrorGuard && "__isMetaErrorGuarded" in a)
            return a.apply(b, c);
          A.pushGuard({
            name:
              ((d === null || d === void 0 ? void 0 : d.name) != null
                ? d.name
                : null) ||
              (a.name ? "func_name:" + a.name : null) ||
              ta,
            deferredSource:
              d === null || d === void 0 ? void 0 : d.deferredSource,
          });
          if (S)
            try {
              return a.apply(b, c);
            } finally {
              A.popGuard();
            }
          try {
            return Function.prototype.apply.call(a, b, c);
          } catch (h) {
            try {
              b =
                d !== null && d !== void 0
                  ? d
                  : babelHelpers["extends"]({}, null);
              var e = b.deferredSource,
                f = b.onError;
              b = b.onNormalizedError;
              var g = w(h);
              e = {
                deferredSource: e,
                loggingSource: "GUARDED",
                project:
                  (e = d === null || d === void 0 ? void 0 : d.project) !==
                    null && e !== void 0
                    ? e
                    : "ErrorGuard",
                type: d === null || d === void 0 ? void 0 : d.errorType,
              };
              E.aggregateError(g, e);
              d = M.normalizeError(g);
              g == null &&
                a &&
                ((d.extra[a.toString().substring(0, 100)] = "function"),
                c != null &&
                  c.length &&
                  (d.extra[Array.from(c).toString().substring(0, 100)] =
                    "args"));
              d.guardList = A.cloneGuardList();
              f && f(g);
              b && b(d);
              R.reportNormalizedError(d);
            } catch (a) {}
          } finally {
            A.popGuard();
          }
        },
        guard: function (a, b) {
          function c() {
            for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
              d[e] = arguments[e];
            return T.applyWithGuard(a, this, d, b);
          }
          c.__isMetaErrorGuarded = !0;
          a.__SMmeta && (c.__SMmeta = a.__SMmeta);
          return c;
        },
        inGuard: function () {
          return A.inGuard();
        },
        skipGuardGlobal: function (a) {
          S = a;
        },
      },
      U = 1024,
      V = [],
      W = 0;
    function X(a) {
      return String(a);
    }
    function Y(a) {
      return a == null ? null : String(a);
    }
    function ua(a, b) {
      var c = {};
      b &&
        b.forEach(function (a) {
          c[a] = !0;
        });
      Object.keys(a).forEach(function (b) {
        a[b] ? (c[b] = !0) : c[b] && delete c[b];
      });
      return Object.keys(c);
    }
    function Z(a) {
      return (a !== null && a !== void 0 ? a : []).map(function (a) {
        return {
          column: Y(a.column),
          identifier: a.identifier,
          line: Y(a.line),
          script: a.script,
        };
      });
    }
    function va(a) {
      a = String(a);
      return a.length > U ? a.substring(0, U - 3) + "..." : a;
    }
    function wa(a, b) {
      var c;
      c = {
        appId: Y(b.appId),
        cavalry_lid: b.cavalry_lid,
        access_token: o.access_token,
        ancestor_hash: a.hash,
        bundle_variant:
          (c = b.bundle_variant) !== null && c !== void 0 ? c : null,
        clientTime: X(a.clientTime),
        column: a.column,
        componentStackFrames: Z(a.componentStackFrames),
        events: a.events,
        extra: ua(a.extra, b.extra),
        forcedKey: a.forcedKey,
        frontend_env: (c = b.frontend_env) !== null && c !== void 0 ? c : null,
        guardList: a.guardList,
        line: a.line,
        loggingFramework: b.loggingFramework,
        messageFormat: va(a.messageFormat),
        messageParams: a.messageParams.map(va),
        name: a.name,
        sample_weight: Y(b.sample_weight),
        script: a.script,
        site_category: b.site_category,
        stackFrames: Z(a.stackFrames),
        type: a.type,
        page_time: Y(a.page_time),
        project: a.project,
        push_phase: b.push_phase,
        report_source: b.report_source,
        report_source_ref: b.report_source_ref,
        rollout_hash: (c = b.rollout_hash) !== null && c !== void 0 ? c : null,
        script_path: b.script_path,
        server_revision: Y(b.server_revision),
        spin: Y(b.spin),
        svn_rev: String(b.client_revision),
        additional_client_revisions: Array.from(
          (c = b.additional_client_revisions) !== null && c !== void 0 ? c : []
        ).map(X),
        taalOpcodes:
          a.taalOpcodes == null
            ? null
            : a.taalOpcodes.map(function (a) {
                return a;
              }),
        web_session_id: b.web_session_id,
        version: "3",
        xFBDebug: a.xFBDebug,
        tags: a.tags,
      };
      b = a.blameModule;
      var d = a.deferredSource;
      b != null && (c.blameModule = String(b));
      d &&
        d.stackFrames &&
        (c.deferredSource = { stackFrames: Z(d.stackFrames) });
      a.metadata && (c.metadata = a.metadata);
      a.loadingUrls && (c.loadingUrls = a.loadingUrls);
      a.serverHash != null && (c.serverHash = a.serverHash);
      a.windowLocationURL != null &&
        (c.windowLocationURL = a.windowLocationURL);
      a.loggingSource != null && (c.loggingSource = a.loggingSource);
      return c;
    }
    function xa(a, b, c) {
      var d;
      W++;
      if (b.sample_weight === 0) return !1;
      var e = v.shouldLog(a);
      if (e == null) return !1;
      if (
        (d = b.projectBlocklist) !== null &&
        d !== void 0 &&
        d.includes(a.project)
      )
        return !1;
      d = wa(a, b);
      Object.assign(d, {
        ancestors: V.slice(),
        clientWeight: X(e),
        page_position: X(W),
      });
      V.length < 15 && ["fatal", "error"].includes(a.type) && V.push(a.hash);
      c(d);
      return !0;
    }
    var ya = { createErrorPayload: wa, postError: xa },
      $ = null,
      za = !1;
    function Aa(a) {
      if ($ == null) return;
      var b = $,
        c = a.reason,
        d,
        e = w(c),
        f = null;
      if (c !== e && typeof c === "object" && c !== null) {
        d = Object.keys(c).sort().slice(0, 3);
        typeof c.message !== "string" &&
          typeof c.messageFormat === "string" &&
          ((c.message = c.messageFormat), (e = w(c)));
        if (typeof c.message !== "string" && typeof c.errorMsg === "string")
          if (/^\s*\<!doctype/i.test(c.errorMsg)) {
            var g =
              /<title>([^<]+)<\/title>(?:(?:.|\n)*<h1>([^<]+)<\/h1>)?/im.exec(
                c.errorMsg
              );
            if (g) {
              var h;
              e = i(
                'HTML document with title="%s" and h1="%s"',
                (h = g[1]) !== null && h !== void 0 ? h : "",
                (h = g[2]) !== null && h !== void 0 ? h : ""
              );
            } else e = i("HTML document sanitized");
          } else
            /^\s*<\?xml/i.test(c.errorMsg)
              ? (e = i("XML document sanitized"))
              : ((c.message = c.errorMsg), (e = w(c)));
        e !== c && typeof c.name === "string" && (f = c.name);
        typeof c.name !== "string" &&
          typeof c.errorCode === "string" &&
          (f = "UnhandledRejectionWith_errorCode_" + c.errorCode);
        typeof c.name !== "string" &&
          typeof c.error === "number" &&
          (f = "UnhandledRejectionWith_error_" + String(c.error));
      }
      e.loggingSource = "ONUNHANDLEDREJECTION";
      try {
        (f =
          e === c && f != null && f !== ""
            ? f
            : typeof (c === null || c === void 0 ? void 0 : c.name) ===
                "string" && c.name !== ""
            ? c.name
            : d != null && d.length > 0
            ? "UnhandledRejectionWith_" + d.join("_")
            : "UnhandledRejection_" + (c === null ? "null" : typeof c)),
          (e.name = f);
      } catch (a) {}
      try {
        g = c === null || c === void 0 ? void 0 : c.stack;
        (typeof g !== "string" || g === "") && (g = e.stack);
        (typeof g !== "string" || g === "") && (g = i("").stack);
        e.stack =
          e.name + ": " + e.message + "\n" + g.split("\n").slice(1).join("\n");
      } catch (a) {}
      try {
        h = a.promise;
        e.stack =
          e.stack +
          (h != null && typeof h.settledStack === "string"
            ? "\n    at <promise_settled_stack_below>\n" + h.settledStack
            : "") +
          (h != null && typeof h.createdStack === "string"
            ? "\n    at <promise_created_stack_below>\n" + h.createdStack
            : "");
      } catch (a) {}
      try {
        f = a.promise;
        "__isPromiseWithTracing" in f &&
          f.__isPromiseWithTracing === !0 &&
          f.deferredError != null &&
          (e.deferredSource = w(f.deferredError));
      } catch (a) {}
      b.reportError(e);
      a.preventDefault();
    }
    function Ba(b) {
      ($ = b),
        typeof a.addEventListener === "function" &&
          !za &&
          ((za = !0), a.addEventListener("unhandledrejection", Aa));
    }
    var Ca = { onunhandledrejection: Aa, setup: Ba };
    l = {
      preSetup: function (a) {
        (a == null || a.ignoreOnError !== !0) && y.setup(R),
          (a == null || a.ignoreOnUnahndledRejection !== !0) && Ca.setup(R);
      },
      setup: function (a, b, c) {
        R.addListener(function (d) {
          var e;
          e = babelHelpers["extends"](
            {},
            a,
            {},
            (e = c === null || c === void 0 ? void 0 : c()) !== null &&
              e !== void 0
              ? e
              : {}
          );
          ya.postError(d, e, b);
        });
      },
    };
    var Da = 20,
      Ea = (function () {
        function a(a) {
          var b = this;
          this.FATAL = function (a) {
            var c = a.join("%s");
            for (
              var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1;
              f < d;
              f++
            )
              e[f - 1] = arguments[f];
            b.fatal.apply(b, [c].concat(e));
          };
          this.MUSTFIX = function (a) {
            var c = a.join("%s");
            for (
              var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1;
              f < d;
              f++
            )
              e[f - 1] = arguments[f];
            b.mustfix.apply(b, [c].concat(e));
          };
          this.WARN = function (a) {
            var c = a.join("%s");
            for (
              var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1;
              f < d;
              f++
            )
              e[f - 1] = arguments[f];
            b.warn.apply(b, [c].concat(e));
          };
          this.INFO = function (a) {
            var c = a.join("%s");
            for (
              var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1;
              f < d;
              f++
            )
              e[f - 1] = arguments[f];
            b.info.apply(b, [c].concat(e));
          };
          this.DEBUG = function (a) {
            var c = a.join("%s");
            for (
              var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1;
              f < d;
              f++
            )
              e[f - 1] = arguments[f];
            b.debug.apply(b, [c].concat(e));
          };
          this.project = a;
          this.events = [];
          this.metadata = new C();
          this.taalOpcodes = [];
          this.loggerTags = new Set();
        }
        var b = a.prototype;
        b.$1 = function (b, c) {
          var d = String(c),
            e = this.events,
            f = this.project,
            g = this.metadata,
            i = this.blameModule,
            j = this.forcedKey,
            k = this.error,
            l;
          for (
            var m = arguments.length, n = new Array(m > 2 ? m - 2 : 0), o = 2;
            o < m;
            o++
          )
            n[o - 2] = arguments[o];
          if (this.normalizedError)
            (l = babelHelpers["extends"]({}, this.normalizedError, {
              messageFormat:
                this.normalizedError.messageFormat + " [Caught in: " + d + "]",
              messageParams: E.toStringParams(
                [].concat(this.normalizedError.messageParams, n)
              ),
              project: f,
              type: b,
              loggingSource: "FBLOGGER",
            })),
              (l.message = E.toReadableMessage(l)),
              j != null &&
                (l.forcedKey = l.forcedKey != null ? j + "_" + l.forcedKey : j);
          else if (k)
            this.taalOpcodes.length > 0 &&
              new a("fblogger")
                .blameToPreviousFrame()
                .blameToPreviousFrame()
                .warn("Blame helpers do not work with catching"),
              E.aggregateError(k, {
                messageFormat: d,
                messageParams: E.toStringParams(n),
                errorName: k.name,
                forcedKey: j,
                project: f,
                type: b,
                loggingSource: "FBLOGGER",
              }),
              (l = M.normalizeError(k));
          else {
            k = new Error(d);
            if (k.stack === void 0)
              try {
                throw k;
              } catch (a) {}
            k.messageFormat = d;
            k.messageParams = E.toStringParams(n);
            k.blameModule = i;
            k.forcedKey = j;
            k.project = f;
            k.type = b;
            k.loggingSource = "FBLOGGER";
            k.taalOpcodes = [h.PREVIOUS_FRAME, h.PREVIOUS_FRAME].concat(
              this.taalOpcodes
            );
            l = M.normalizeError(k);
            l.name = "FBLogger";
          }
          if (!g.isEmpty())
            if (l.metadata == null) l.metadata = g.format();
            else {
              var p = l.metadata.concat(g.format()),
                q = new Set(p);
              l.metadata = Array.from(q.values());
            }
          if (e.length > 0) {
            if (l.events != null) {
              var r;
              (r = l.events).push.apply(r, e);
            } else l.events = [].concat(e);
            if (l.events != null && l.events.length > Da) {
              var s = l.events.length - Da;
              l.events.splice(0, s + 1, "<first " + s + " events omitted>");
            }
          }
          l.tags = Array.from(this.loggerTags);
          R.reportNormalizedError(l);
          return k;
        };
        b.fatal = function (a) {
          for (
            var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
            d < b;
            d++
          )
            c[d - 1] = arguments[d];
          this.$1.apply(this, ["fatal", a].concat(c));
        };
        b.mustfix = function (a) {
          for (
            var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
            d < b;
            d++
          )
            c[d - 1] = arguments[d];
          this.$1.apply(this, ["error", a].concat(c));
        };
        b.warn = function (a) {
          for (
            var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
            d < b;
            d++
          )
            c[d - 1] = arguments[d];
          this.$1.apply(this, ["warn", a].concat(c));
        };
        b.info = function (a) {
          for (
            var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
            d < b;
            d++
          )
            c[d - 1] = arguments[d];
          this.$1.apply(this, ["info", a].concat(c));
        };
        b.debug = function (a) {};
        b.mustfixThrow = function (a) {
          for (
            var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
            d < b;
            d++
          )
            c[d - 1] = arguments[d];
          var e = this.$1.apply(this, ["error", a].concat(c));
          e ||
            ((e = i("mustfixThrow does not support catchingNormalizedError")),
            (e.taalOpcodes = e.taalOpcodes || []),
            e.taalOpcodes.push(h.PREVIOUS_FRAME));
          try {
            e.message = E.toReadableMessage(e);
          } catch (a) {}
          throw e;
        };
        b.catching = function (b) {
          !(b instanceof Error)
            ? new a("fblogger")
                .blameToPreviousFrame()
                .warn("Catching non-Error object is not supported")
            : (this.error = b);
          return this;
        };
        b.catchingNormalizedError = function (a) {
          this.normalizedError = a;
          return this;
        };
        b.event = function (a) {
          this.events.push(a);
          return this;
        };
        b.blameToModule = function (a) {
          this.blameModule = a;
          return this;
        };
        b.blameToPreviousFile = function () {
          this.taalOpcodes.push(h.PREVIOUS_FILE);
          return this;
        };
        b.blameToPreviousFrame = function () {
          this.taalOpcodes.push(h.PREVIOUS_FRAME);
          return this;
        };
        b.blameToPreviousDirectory = function () {
          this.taalOpcodes.push(h.PREVIOUS_DIR);
          return this;
        };
        b.addToCategoryKey = function (a) {
          this.forcedKey = a;
          return this;
        };
        b.addMetadata = function (a, b, c) {
          this.metadata.addEntry(a, b, c);
          return this;
        };
        b.tags = function (a) {
          var b = this;
          a.forEach(function (a) {
            return b.loggerTags.add(a);
          });
          return this;
        };
        return a;
      })();
    c = function (a, b) {
      var c = new Ea(a);
      return b != null ? c.event(a + "." + b) : c;
    };
    c.addGlobalMetadata = function (a, b, c) {
      C.addGlobalMetadata(a, b, c);
    };
    var Fa = "<CUSTOM_NAME:",
      Ga = ">";
    function Ha(a, b) {
      if (a != null && b != null)
        try {
          Object.defineProperty(a, "name", { value: Fa + " " + b + Ga });
        } catch (a) {}
      return a;
    }
    d = {
      blameToPreviousFile: function (a) {
        var b;
        a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
        a.taalOpcodes.push(h.PREVIOUS_FILE);
        return a;
      },
      blameToPreviousFrame: function (a) {
        var b;
        a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
        a.taalOpcodes.push(h.PREVIOUS_FRAME);
        return a;
      },
      blameToPreviousDirectory: function (a) {
        var b;
        a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
        a.taalOpcodes.push(h.PREVIOUS_DIR);
        return a;
      },
    };
    f = {
      err: i,
      ErrorBrowserConsole: k,
      ErrorConfig: m,
      ErrorDynamicData: o,
      ErrorFilter: v,
      ErrorGlobalEventHandler: y,
      ErrorGuard: T,
      ErrorGuardState: A,
      ErrorMetadata: C,
      ErrorNormalizeUtils: M,
      ErrorPoster: ya,
      ErrorPubSub: R,
      ErrorSerializer: E,
      ErrorSetup: l,
      ErrorXFBDebug: H,
      FBLogger: c,
      getErrorSafe: w,
      getSimpleHash: I,
      TAAL: d,
      TAALOpcode: h,
      renameFunction: Ha,
    };
    e.exports = f;
  },
  null
);
__d(
  "err",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").err;
  },
  98
);
__d(
  "WAHex",
  ["err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 16,
      i = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70],
      j = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102];
    function k(a) {
      var b = [];
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        b.push(i[d >> 4], i[d & 15]);
      }
      return String.fromCharCode.apply(String, b);
    }
    function a(a) {
      var b = [];
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        b.push(j[d >> 4], j[d & 15]);
      }
      return String.fromCharCode.apply(String, b);
    }
    function b(a) {
      a = m(a);
      if (a.length % 2 !== 0)
        throw c("err")(
          'parseHex given hex "' + a + '" which is not a multiple of 8-bits.'
        );
      var b = new Uint8Array(a.length >> 1);
      for (var d = 0, e = 0; d < a.length; d += 2, e++)
        b[e] = (l(a, d) << 4) | l(a, d + 1);
      return b.buffer;
    }
    function l(a, b) {
      a = a.charCodeAt(b);
      if (a <= 57) return a - 48;
      else if (a <= 70) return 10 + a - 65;
      else return 10 + a - 97;
    }
    function m(a) {
      if (/[^0-9a-fA-F]/.test(a))
        throw c("err")('"' + a + '" is not a valid hex');
      return a;
    }
    function d(a) {
      var b = a.buffer;
      return a.byteOffset === 0 && a.length === b.byteLength
        ? b
        : b.slice(a.byteOffset, a.byteOffset + a.length);
    }
    function e(a) {
      var b = !0,
        c = a.length;
      while (b && c) {
        var d = a[--c];
        b = 32 <= d && d < 127;
      }
      if (b) return JSON.stringify(String.fromCharCode.apply(String, a));
      else return k(a);
    }
    function n(a, b) {
      b === void 0 && (b = !1);
      a = m(a);
      u(a, h);
      return (b ? "-" : "") + "0x" + o(a, h);
    }
    function f(a, b, c) {
      c === void 0 && (c = !1);
      a = v(a);
      b = v(b);
      return (c ? "-" : "") + "0x" + a + b;
    }
    function o(a, b) {
      b = b - a.length;
      a = a;
      for (var c = 0; c < b; c++) a = "0" + a;
      return a;
    }
    function p(a) {
      var b = a < 0;
      a = b ? (-a).toString(16) : a.toString(16);
      return n(a, b);
    }
    function q(a) {
      return a.substring(a.indexOf("0x") + 2);
    }
    function r(a) {
      return a[0] === "-";
    }
    function s(a, b) {
      var c = r(a),
        d = r(b);
      if (c !== d) return !c;
      d = q(a) > q(b);
      return c ? !d : d;
    }
    function t(a) {
      return r(a) ? a.slice(1) : "-" + a;
    }
    function u(a, b) {
      if (a.length > b)
        throw c("err")('"' + a + '" is longer than ' + b * 4 + " bits.");
    }
    function v(a) {
      if (a > 4294967295 || a < -4294967296)
        throw c("err")("uint32ToLowerCaseHex given number over 32 bits");
      a = (a >= 0 ? a : 4294967296 + a).toString(16);
      return o(a, 8);
    }
    g.NUM_HEX_IN_LONG = h;
    g.HEX_LOWER = j;
    g.toHex = k;
    g.toLowerCaseHex = a;
    g.parseHex = b;
    g.hexAt = l;
    g.hexOrThrow = m;
    g.bytesToBuffer = d;
    g.bytesToDebugString = e;
    g.createHexLong = n;
    g.createHexLongFrom32Bits = f;
    g.hexLongFromNumber = p;
    g.hexLongToHex = q;
    g.hexLongIsNegative = r;
    g.isBiggerHexLong = s;
    g.negateHexLong = t;
  },
  98
);
__d(
  "WALoggerUtils",
  ["WAHex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      if (typeof a === "string") return "'" + a + "'";
      else if (a == null || typeof a !== "object") return String(a);
      else if (Array.isArray(a)) return "[" + a.join(",") + "]";
      else if (a instanceof Uint8Array)
        if (a.length < 64) return "<<" + i(a) + ">>";
        else {
          var b = a.subarray(0, 32);
          return "<<" + i(b) + ", " + (a.length - b.length) + " more bytes>>";
        }
      else if (a instanceof Error) return a.name ? "(" + a.name + ")" : "";
      else if (a.toString === Object.prototype.toString)
        return JSON.stringify(a, function (a, b) {
          return a ? String(b) : b;
        });
      else return String(a);
    }
    function i(a) {
      var b = !0,
        c = a.length;
      while (b && c) {
        var e = a[--c];
        b = 32 <= e && e < 127;
      }
      if (b) return JSON.stringify(String.fromCharCode.apply(String, a));
      else return d("WAHex").toHex(a);
    }
    function a(a, b) {
      var c = [a[0]];
      b.forEach(function (b, d) {
        c.push(h(b), a[d + 1]);
      });
      return c.join("");
    }
    function b(a) {
      return a;
    }
    function c(a) {
      return a * 100 + "%";
    }
    g.debugStr = h;
    g.bytesToDebugString = i;
    g.rebuildTemplate = a;
    g.dynamicLoggingSampling = b;
    g.loggingSamplingAsString = c;
  },
  98
);
__d(
  "WANullthrows",
  ["err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      b === void 0 && (b = "?");
      if (a == null) throw c("err")("Unexpected null or undefined: " + b);
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "asyncToGeneratorRuntime",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    function h(a, c, d, e, f, h, i) {
      try {
        var j = a[h](i),
          k = j.value;
      } catch (a) {
        d(a);
        return;
      }
      j.done ? c(k) : (g || (g = b("Promise"))).resolve(k).then(e, f);
    }
    function a(a) {
      return function () {
        var c = this,
          d = arguments;
        return new (g || (g = b("Promise")))(function (b, e) {
          var f = a.apply(c, d);
          function g(a) {
            h(f, b, e, g, i, "next", a);
          }
          function i(a) {
            h(f, b, e, g, i, "throw", a);
          }
          g(void 0);
        });
      };
    }
    f.asyncToGenerator = a;
  },
  66
);
__d(
  "WATagsLogger",
  ["Promise", "WALoggerUtils", "WANullthrows", "asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function i() {
      var a = babelHelpers.taggedTemplateLiteralLoose(["[", "] ", ""]);
      i = function () {
        return a;
      };
      return a;
    }
    var j,
      k = new (h || b("Promise"))(function (a) {
        j = a;
      });
    function a() {
      return l.apply(this, arguments);
    }
    function l() {
      l = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        yield k;
      });
      return l.apply(this, arguments);
    }
    var m = null;
    function e(a) {
      (m = a), j == null ? void 0 : j(), (j = null);
    }
    function n() {
      return c("WANullthrows")(m, "WALogger called before initialization");
    }
    function o(a) {
      return {
        TAGS: function (b) {
          return o([].concat(a, b));
        },
        COUNT: function (b) {
          for (
            var c = arguments.length, e = new Array(c > 1 ? c - 1 : 0), f = 1;
            f < c;
            f++
          )
            e[f - 1] = arguments[f];
          var g = d("WALoggerUtils").rebuildTemplate(b, e),
            h = { level: "COUNT", template: b, expressions: e, logString: g };
          n().count(g, a, h);
          return p(h);
        },
        DEV: function (b) {
          for (
            var c = arguments.length, e = new Array(c > 1 ? c - 1 : 0), f = 1;
            f < c;
            f++
          )
            e[f - 1] = arguments[f];
          var g = d("WALoggerUtils").rebuildTemplate(b, e),
            h = { level: "DEV", template: b, expressions: e, logString: g };
          n().debug(g, a, h);
          return p(h);
        },
        DEV_XMPP: function (b) {
          for (
            var c = arguments.length, e = new Array(c > 1 ? c - 1 : 0), f = 1;
            f < c;
            f++
          )
            e[f - 1] = arguments[f];
          var g = d("WALoggerUtils").rebuildTemplate(b, e),
            h = {
              level: "DEV_XMPP",
              template: b,
              expressions: e,
              logString: g,
            };
          n().logRestricted(g, a, h);
          return p(h);
        },
        LOG: function (b) {
          for (
            var c = arguments.length, e = new Array(c > 1 ? c - 1 : 0), f = 1;
            f < c;
            f++
          )
            e[f - 1] = arguments[f];
          var g = d("WALoggerUtils").rebuildTemplate(b, e),
            h = { level: "LOG", template: b, expressions: e, logString: g };
          n().info(g, a, h);
          return p(h);
        },
        WARN: function (b) {
          for (
            var c = arguments.length, e = new Array(c > 1 ? c - 1 : 0), f = 1;
            f < c;
            f++
          )
            e[f - 1] = arguments[f];
          var g = d("WALoggerUtils").rebuildTemplate(b, e),
            h = { level: "WARN", template: b, expressions: e, logString: g };
          n().warn(g, a, h);
          return p(h);
        },
        ERROR: function (b) {
          for (
            var c = arguments.length, e = new Array(c > 1 ? c - 1 : 0), f = 1;
            f < c;
            f++
          )
            e[f - 1] = arguments[f];
          var g = d("WALoggerUtils").rebuildTemplate(b, e),
            h = { level: "ERROR", template: b, expressions: e, logString: g },
            i = void 0;
          for (var j of e)
            if (j instanceof Error) {
              i = j;
              break;
            }
          i != null ? n().error(g, a, i, h) : n().error(g, a, void 0, h);
          return p(h);
        },
        CATCHING: function (b) {
          for (
            var c = arguments.length, e = new Array(c > 1 ? c - 1 : 0), f = 1;
            f < c;
            f++
          )
            e[f - 1] = arguments[f];
          var g = d("WALoggerUtils").rebuildTemplate(b, e),
            h = {
              level: "CATCHING",
              template: b,
              expressions: e,
              logString: g,
            };
          n().error(g, a, void 0, h);
          return p(h);
        },
        EXPECTED_ERROR: function (b) {
          for (
            var c = arguments.length, e = new Array(c > 1 ? c - 1 : 0), f = 1;
            f < c;
            f++
          )
            e[f - 1] = arguments[f];
          var g = d("WALoggerUtils").rebuildTemplate(b, e),
            h = {
              level: "ERROR",
              template: b,
              expressions: e,
              logString: g,
              tags: [].concat(a),
            };
          return p(h);
        },
      };
    }
    function p(a) {
      return {
        verbose: function () {
          a.verbose = !0;
          return p(a);
        },
        color: function (b) {
          a.color = b;
          return p(a);
        },
        devConsole: function () {
          var b;
          for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
            d[e] = arguments[e];
          (b = n()).devConsole.apply(b, [a.level, a.logString, []].concat(d));
          return p(a);
        },
        sendLogs: function (b, c) {
          if (n().sendLogs != null)
            (a.sendLogs = {
              reason: b,
              sampling: c == null ? void 0 : c.sampling,
              sendLogsType: c == null ? void 0 : c.sendLogsType,
            }),
              n().sendLogs == null ? void 0 : n().sendLogs(a);
          else if (a.level !== "ERROR" && a.level !== "CATCHING")
            return o([]).ERROR(i(), b, a.logString);
          return p(a);
        },
        tags: function () {
          for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++)
            c[d] = arguments[d];
          a.tags = c;
          n().tags != null && (n().tags == null ? void 0 : n().tags(c));
          return p(a);
        },
        expect: function (b) {
          if (a.level !== "ERROR") return p(a);
          var c = void 0;
          for (var d of a.expressions)
            if (d instanceof Error) {
              c = d;
              break;
            }
          d =
            (d =
              (d = (d = c) == null ? void 0 : d.message) != null
                ? d
                : (d = c) == null
                ? void 0
                : d.name) != null
              ? d
              : (d = c) == null
              ? void 0
              : d.description;
          for (b of b)
            if (d == null ? void 0 : d.includes(b)) {
              var e;
              n().error(
                a.logString,
                [].concat((e = a.tags) != null ? e : [], [
                  "expected-error-log",
                ]),
                (e = c) != null ? e : void 0,
                a
              );
              return p(a);
            }
          n().error(
            a.logString,
            (e = a == null ? void 0 : a.tags) != null ? e : [],
            (d = c) != null ? d : void 0,
            a
          );
          return p(a);
        },
      };
    }
    g.whenReady = a;
    g.initializeWaLogger = e;
    g.TAGS = o;
    g.getWaLoggerAdditionalOptions = p;
  },
  98
);
__d(
  "WADecodeImage",
  [
    "WABlobToImage",
    "WACalculateBoundOutputSize",
    "WATagsLogger",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h() {
      var a = babelHelpers.taggedTemplateLiteralLoose([
        "start decoding image with DOM: ",
        "",
      ]);
      h = function () {
        return a;
      };
      return a;
    }
    function i() {
      var a = babelHelpers.taggedTemplateLiteralLoose([
        "start decoding image without DOM: ",
        "",
      ]);
      i = function () {
        return a;
      };
      return a;
    }
    var j = d("WATagsLogger").TAGS(["decodeImage"]);
    e =
      typeof self.createImageBitmap === "function" &&
      typeof self.OffscreenCanvas === "function";
    f = e ? a : c;
    function a(a, b) {
      return k.apply(this, arguments);
    }
    function k() {
      k = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        j.DEV(i(), a.name);
        a = yield self.createImageBitmap(a);
        var c = a.width,
          e = a.height;
        b = d("WACalculateBoundOutputSize").calculateBoundOutputSize(
          { width: c, height: e },
          b
        );
        var f = b.outputWidth;
        b = b.outputHeight;
        var g = new self.OffscreenCanvas(f, b);
        g = m({
          canvas: g,
          inputWidth: c,
          inputHeight: e,
          outputWidth: f,
          outputHeight: b,
          image: a,
        });
        return g;
      });
      return k.apply(this, arguments);
    }
    function c(a, b) {
      return l.apply(this, arguments);
    }
    function l() {
      l = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        j.DEV(h(), a.name);
        a = yield d("WABlobToImage").blobToImage(a);
        var c = a.image;
        a = a.releaseImageMemory;
        var e = c.width,
          f = c.height;
        b = d("WACalculateBoundOutputSize").calculateBoundOutputSize(
          { width: e, height: f },
          b
        );
        var g = b.outputWidth;
        b = b.outputHeight;
        var i = document.createElement("canvas");
        i = m({
          canvas: i,
          inputWidth: e,
          inputHeight: f,
          outputWidth: g,
          outputHeight: b,
          image: c,
        });
        a();
        return i;
      });
      return l.apply(this, arguments);
    }
    function m(a) {
      var b = a.canvas,
        c = a.image,
        d = a.inputWidth,
        e = a.inputHeight,
        f = a.outputWidth;
      a = a.outputHeight;
      b.width = f;
      b.height = a;
      var g = b.getContext("2d");
      g.fillStyle = "rgb(255,255,255)";
      g.fillRect(0, 0, b.width, b.height);
      g.drawImage(c, 0, 0, d, e, 0, 0, f, a);
      b = g.getImageData(0, 0, f, a);
      return b;
    }
    g.canDecodeWithoutDOM = e;
    g.decodeImage = f;
    g.decodeImageWithoutDOM = a;
    g.decodeImageWithDOM = c;
  },
  98
);
__d(
  "WAEncodeProgressiveJpeg",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return function (b) {
        var c = b.input,
          d = b.width,
          e = b.height,
          f = b.quality;
        b = b.useHdScanConfig;
        var g = new Uint8Array(c);
        c = a._malloc(c.byteLength);
        a.HEAPU8.set(g, c);
        g = a.ccall(
          "encode_progressive_jpeg",
          "number",
          ["number", "number", "number", "number", "number", "boolean"],
          [c, g.byteLength, d, e, f, b]
        );
        d = a.HEAPU32[g / 4];
        e = a.HEAPU32[g / 4 + 1];
        f = new Uint8Array(a.HEAPU8.subarray(d, d + e));
        a._free(c);
        a._free(d);
        return f;
      };
    }
    f.createEncodeProgressiveJpeg = a;
  },
  66
);
__d(
  "WAErrorMessage",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "NoErrorMessageProvided";
    function a(a) {
      if (typeof a === "string") return a;
      if (a instanceof Error) return a.toString();
      if (typeof a === "object")
        if (typeof (a == null ? void 0 : a.description) === "string")
          return a.description;
        else if (typeof (a == null ? void 0 : a.message) === "string")
          return a.message;
      return g;
    }
    f.NO_ERROR_MESSAGE_PROVIDED = g;
    f.maybeGetMessageFromError = a;
  },
  66
);
__d(
  "WAOffscreenCanvasUtils",
  ["asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f) {
    var g = 40 * 1024;
    function a(a, b, c, d, e, f) {
      return h.apply(this, arguments);
    }
    function h() {
      h = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
        a,
        b,
        c,
        d,
        e,
        f
      ) {
        c === void 0 && (c = !1);
        d = d == null ? void 0 : d / 100;
        d = yield a.convertToBlob({ quality: d, type: b });
        e = e != null ? e : g;
        f = f != null ? f / 100 : g / d.size;
        c &&
          d.size >= e &&
          (d = yield a.convertToBlob({ quality: f, type: b }));
        return d;
      });
      return h.apply(this, arguments);
    }
    function c(a) {
      var b = a.getContext("2d");
      b.fillStyle = "rgb(247,247,247)";
      b.fillRect(0, 0, a.width, a.height);
    }
    f.offscreenCanvasToBlob = a;
    f.fillOffscreenCanvasBackgroundWithGray = c;
  },
  66
);
__d(
  "WAGenerateImageThumbnailWithoutDOM",
  ["Promise", "WAOffscreenCanvasUtils", "asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = "image/jpeg";
    function a(a, b, c, d) {
      return j.apply(this, arguments);
    }
    function j() {
      j = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, c, e, f) {
        a = yield self.createImageBitmap(a);
        var g = a.width,
          j = a.height;
        j = k(j, g, c);
        g = new OffscreenCanvas(j.width, j.height);
        c = g.getContext("2d");
        d("WAOffscreenCanvasUtils").fillOffscreenCanvasBackgroundWithGray(g);
        c.drawImage(a, 0, 0, j.width, j.height);
        c = yield d("WAOffscreenCanvasUtils").offscreenCanvasToBlob(
          g,
          i,
          !0,
          void 0,
          e,
          f
        );
        return (h || (h = b("Promise"))).resolve({
          blob: c,
          height: j.height,
          width: j.width,
        });
      });
      return j.apply(this, arguments);
    }
    function k(a, b, c) {
      b = b != null ? b : c;
      a = a != null ? a : c;
      b > a
        ? b > c && ((a *= c / b), (b = c))
        : a > c && ((b *= c / a), (a = c));
      return {
        width: Math.round(Math.max(b, 1)),
        height: Math.round(Math.max(a, 1)),
      };
    }
    g.generateImageThumbnailWithoutDOM = a;
  },
  98
);
__d(
  "WAMozjpegWasm",
  ["Promise"],
  function (a, b, c, d, e, f) {
    var g,
      h = (function () {
        var a =
          typeof document !== "undefined" && document.currentScript
            ? document.currentScript.src
            : void 0;
        return function (c) {
          c = c || {};
          var c = typeof c != "undefined" ? c : {},
            d,
            i;
          c.ready = new (g || (g = b("Promise")))(function (a, b) {
            (d = a), (i = b);
          });
          var j = Object.assign({}, c),
            k = [],
            l = "./this.program",
            m = function (a, b) {
              throw b;
            },
            aa = !0,
            n = !1,
            o = "";
          function p(a) {
            return c.locateFile ? c.locateFile(a, o) : o + a;
          }
          var q, ba, r;
          (aa || n) &&
            (n
              ? (o = self.location.href)
              : typeof document != "undefined" &&
                document.currentScript &&
                (o = document.currentScript.src),
            a && (o = a),
            o.indexOf("blob:") !== 0
              ? (o = o.substr(0, o.replace(/[?#].*/, "").lastIndexOf("/") + 1))
              : (o = ""),
            ((q = function (a) {
              var b = new XMLHttpRequest();
              b.open("GET", a, !1);
              b.send(null);
              return b.responseText;
            }),
            n &&
              (r = function (a) {
                var b = new XMLHttpRequest();
                b.open("GET", a, !1);
                b.responseType = "arraybuffer";
                b.send(null);
                return new Uint8Array(b.response);
              }),
            (ba = function (a, b, c) {
              var d = new XMLHttpRequest();
              d.open("GET", a, !0);
              d.responseType = "arraybuffer";
              d.onload = function () {
                if (d.status == 200 || (d.status == 0 && d.response)) {
                  b(d.response);
                  return;
                }
                c();
              };
              d.onerror = c;
              d.send(null);
            })),
            function (a) {
              return (document.title = a);
            });
          var s = emptyFunction.bind(console),
            t = emptyFunction.bind(console);
          Object.assign(c, j);
          j = null;
          var u,
            ca = !0;
          typeof WebAssembly != "object" &&
            H("no native wasm support detected");
          var v,
            w = !1;
          function da(a, b) {
            a || H(b);
          }
          var ea =
            typeof TextDecoder != "undefined"
              ? new TextDecoder("utf8")
              : void 0;
          function x(a, b, c) {
            c = b + c;
            var d = b;
            while (a[d] && !(d >= c)) ++d;
            if (d - b > 16 && a.buffer && ea)
              return ea.decode(a.subarray(b, d));
            c = "";
            while (b < d) {
              var e = a[b++];
              if (!(e & 128)) {
                c += String.fromCharCode(e);
                continue;
              }
              var f = a[b++] & 63;
              if ((e & 224) == 192) {
                c += String.fromCharCode(((e & 31) << 6) | f);
                continue;
              }
              var g = a[b++] & 63;
              (e & 240) == 224
                ? (e = ((e & 15) << 12) | (f << 6) | g)
                : (e = ((e & 7) << 18) | (f << 12) | (g << 6) | (a[b++] & 63));
              if (e < 65536) c += String.fromCharCode(e);
              else {
                f = e - 65536;
                c += String.fromCharCode(55296 | (f >> 10), 56320 | (f & 1023));
              }
            }
            return c;
          }
          function fa(a, b) {
            return a ? x(B, a, b) : "";
          }
          function y(a, b, c, d) {
            if (!(d > 0)) return 0;
            var e = c;
            d = c + d - 1;
            for (var f = 0; f < a.length; ++f) {
              var g = a.charCodeAt(f);
              if (g >= 55296 && g <= 57343) {
                var h = a.charCodeAt(++f);
                g = (65536 + ((g & 1023) << 10)) | (h & 1023);
              }
              if (g <= 127) {
                if (c >= d) break;
                b[c++] = g;
              } else if (g <= 2047) {
                if (c + 1 >= d) break;
                b[c++] = 192 | (g >> 6);
                b[c++] = 128 | (g & 63);
              } else if (g <= 65535) {
                if (c + 2 >= d) break;
                b[c++] = 224 | (g >> 12);
                b[c++] = 128 | ((g >> 6) & 63);
                b[c++] = 128 | (g & 63);
              } else {
                if (c + 3 >= d) break;
                b[c++] = 240 | (g >> 18);
                b[c++] = 128 | ((g >> 12) & 63);
                b[c++] = 128 | ((g >> 6) & 63);
                b[c++] = 128 | (g & 63);
              }
            }
            b[c] = 0;
            return c - e;
          }
          function ga(a, b, c) {
            return y(a, B, b, c);
          }
          function z(a) {
            var b = 0;
            for (var c = 0; c < a.length; ++c) {
              var d = a.charCodeAt(c);
              d <= 127
                ? b++
                : d <= 2047
                ? (b += 2)
                : d >= 55296 && d <= 57343
                ? ((b += 4), ++c)
                : (b += 3);
            }
            return b;
          }
          var ha, A, B, C, D;
          function ia(a) {
            (ha = a),
              (c.HEAP8 = A = new Int8Array(a)),
              (c.HEAP16 = new Int16Array(a)),
              (c.HEAP32 = C = new Int32Array(a)),
              (c.HEAPU8 = B = new Uint8Array(a)),
              (c.HEAPU16 = new Uint16Array(a)),
              (c.HEAPU32 = D = new Uint32Array(a)),
              (c.HEAPF32 = new Float32Array(a)),
              (c.HEAPF64 = new Float64Array(a));
          }
          var ja,
            ka = [],
            la = [],
            ma = [];
          function na() {
            return ca;
          }
          function oa() {
            Ba(ka);
          }
          function pa() {
            !c.noFSInit && !Q.init.initialized && Q.init(),
              (Q.ignorePermissions = !1),
              O.init(),
              Ba(la);
          }
          function qa() {
            Ba(ma);
          }
          function ra(a) {
            la.unshift(a);
          }
          var E = 0,
            sa = null,
            F = null;
          function ta(a) {
            return a;
          }
          function ua(a) {
            E++;
          }
          function G(a) {
            E--;
            if (E == 0) {
              sa !== null && (clearInterval(sa), (sa = null));
              if (F) {
                a = F;
                F = null;
                a();
              }
            }
          }
          function H(a) {
            a = "Aborted(" + a + ")";
            t(a);
            w = !0;
            a += ". Build with -sASSERTIONS for more info.";
            a = new WebAssembly.RuntimeError(a);
            i(a);
            throw a;
          }
          var va = "data:application/octet-stream;base64,";
          function wa(a) {
            return a.startsWith(va);
          }
          var I;
          I = "WAMozjpegWasm.wasm";
          wa(I) || (I = p(I));
          function xa(a) {
            try {
              if (a == I && u) return new Uint8Array(u);
              if (r) return r(a);
              throw "both async and sync fetching of the wasm failed";
            } catch (a) {
              H(a);
            }
          }
          function ya() {
            return !u && (aa || n) && typeof fetch == "function"
              ? fetch(I, { credentials: "same-origin" })
                  .then(function (a) {
                    if (!a.ok)
                      throw "failed to load wasm binary file at '" + I + "'";
                    return a.arrayBuffer();
                  })
                  ["catch"](function () {
                    return xa(I);
                  })
              : (g || (g = b("Promise"))).resolve().then(function () {
                  return xa(I);
                });
          }
          function za() {
            var b = { a: gb };
            function d(b, a) {
              a = b.exports;
              c.asm = a;
              v = c.asm.x;
              ia(v.buffer);
              ja = c.asm.z;
              ra(c.asm.y);
              G("wasm-instantiate");
            }
            ua("wasm-instantiate");
            function g(a) {
              d(a.instance);
            }
            function h(a) {
              return ya()
                .then(function (a) {
                  return WebAssembly.instantiate(a, b);
                })
                .then(function (a) {
                  return a;
                })
                .then(a, function (a) {
                  t("failed to asynchronously prepare wasm: " + a), H(a);
                });
            }
            function j() {
              if (
                !u &&
                typeof WebAssembly.instantiateStreaming == "function" &&
                !wa(I) &&
                typeof fetch == "function"
              )
                return fetch(I, { credentials: "same-origin" }).then(function (
                  a
                ) {
                  a = WebAssembly.instantiateStreaming(a, b);
                  return a.then(g, function (a) {
                    t("wasm streaming compile failed: " + a);
                    t("falling back to ArrayBuffer instantiation");
                    return h(g);
                  });
                });
              else return h(g);
            }
            if (c.instantiateWasm)
              try {
                var a = c.instantiateWasm(b, d);
                return a;
              } catch (a) {
                t("Module.instantiateWasm callback failed with error: " + a),
                  i(a);
              }
            j()["catch"](i);
            return {};
          }
          var J, K;
          function Aa(a) {
            (this.name = "ExitStatus"),
              (this.message = "Program terminated with exit(" + a + ")"),
              (this.status = a);
          }
          function Ba(a) {
            while (a.length > 0) a.shift()(c);
          }
          function Ca(a) {
            return hb(a + 24) + 24;
          }
          var L = 0;
          function Da(a) {
            (this.excPtr = a),
              (this.ptr = a - 24),
              (this.set_type = function (a) {
                D[(this.ptr + 4) >> 2] = a;
              }),
              (this.get_type = function () {
                return D[(this.ptr + 4) >> 2];
              }),
              (this.set_destructor = function (a) {
                D[(this.ptr + 8) >> 2] = a;
              }),
              (this.get_destructor = function () {
                return D[(this.ptr + 8) >> 2];
              }),
              (this.set_refcount = function (a) {
                C[this.ptr >> 2] = a;
              }),
              (this.set_caught = function (a) {
                (a = a ? 1 : 0), (A[(this.ptr + 12) >> 0] = a);
              }),
              (this.get_caught = function () {
                return A[(this.ptr + 12) >> 0] != 0;
              }),
              (this.set_rethrown = function (a) {
                (a = a ? 1 : 0), (A[(this.ptr + 13) >> 0] = a);
              }),
              (this.get_rethrown = function () {
                return A[(this.ptr + 13) >> 0] != 0;
              }),
              (this.init = function (a, b) {
                this.set_adjusted_ptr(0),
                  this.set_type(a),
                  this.set_destructor(b),
                  this.set_refcount(0),
                  this.set_caught(!1),
                  this.set_rethrown(!1);
              }),
              (this.add_ref = function () {
                var a = C[this.ptr >> 2];
                C[this.ptr >> 2] = a + 1;
              }),
              (this.release_ref = function () {
                var a = C[this.ptr >> 2];
                C[this.ptr >> 2] = a - 1;
                return a === 1;
              }),
              (this.set_adjusted_ptr = function (a) {
                D[(this.ptr + 16) >> 2] = a;
              }),
              (this.get_adjusted_ptr = function () {
                return D[(this.ptr + 16) >> 2];
              }),
              (this.get_exception_ptr = function () {
                var a = kb(this.get_type());
                if (a) return D[this.excPtr >> 2];
                a = this.get_adjusted_ptr();
                return a !== 0 ? a : this.excPtr;
              });
          }
          function Ea(a) {
            L || (L = a);
            throw a;
          }
          function Fa() {
            var a = L;
            if (!a) {
              X(0);
              return 0;
            }
            var b = new Da(a);
            b.set_adjusted_ptr(a);
            var c = b.get_type();
            if (!c) {
              X(0);
              return a;
            }
            for (var d = 0; d < arguments.length; d++) {
              var e = arguments[d];
              if (e === 0 || e === c) break;
              var f = b.ptr + 16;
              if (jb(e, c, f)) {
                X(e);
                return a;
              }
            }
            X(c);
            return a;
          }
          var Ga = 0;
          function Ha(a, b, c) {
            var d = new Da(a);
            d.init(b, c);
            L = a;
            Ga++;
            throw a;
          }
          var M = {
            isAbs: function (a) {
              return a.charAt(0) === "/";
            },
            splitPath: function (a) {
              var b =
                /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
              return b.exec(a).slice(1);
            },
            normalizeArray: function (a, b) {
              var c = 0;
              for (var d = a.length - 1; d >= 0; d--) {
                var e = a[d];
                e === "."
                  ? a.splice(d, 1)
                  : e === ".."
                  ? (a.splice(d, 1), c++)
                  : c && (a.splice(d, 1), c--);
              }
              if (b) for (; c; c--) a.unshift("..");
              return a;
            },
            normalize: function (a) {
              var b = M.isAbs(a),
                c = a.substr(-1) === "/";
              a = M.normalizeArray(
                a.split("/").filter(function (a) {
                  return !!a;
                }),
                !b
              ).join("/");
              !a && !b && (a = ".");
              a && c && (a += "/");
              return (b ? "/" : "") + a;
            },
            dirname: function (a) {
              a = M.splitPath(a);
              var b = a[0];
              a = a[1];
              if (!b && !a) return ".";
              a && (a = a.substr(0, a.length - 1));
              return b + a;
            },
            basename: function (a) {
              if (a === "/") return "/";
              a = M.normalize(a);
              a = a.replace(/\/$/, "");
              var b = a.lastIndexOf("/");
              return b === -1 ? a : a.substr(b + 1);
            },
            join: function () {
              var a = Array.prototype.slice.call(arguments);
              return M.normalize(a.join("/"));
            },
            join2: function (a, b) {
              return M.normalize(a + "/" + b);
            },
          };
          function Ia() {
            if (
              typeof crypto == "object" &&
              typeof crypto.getRandomValues == "function"
            ) {
              var a = new Uint8Array(1);
              return function () {
                crypto.getRandomValues(a);
                return a[0];
              };
            } else
              return function () {
                return H("randomDevice");
              };
          }
          var N = {
            resolve: function () {
              var a = "",
                b = !1;
              for (var c = arguments.length - 1; c >= -1 && !b; c--) {
                var d = c >= 0 ? arguments[c] : Q.cwd();
                if (typeof d != "string")
                  throw new TypeError(
                    "Arguments to path.resolve must be strings"
                  );
                else if (!d) return "";
                a = d + "/" + a;
                b = M.isAbs(d);
              }
              a = M.normalizeArray(
                a.split("/").filter(function (a) {
                  return !!a;
                }),
                !b
              ).join("/");
              return (b ? "/" : "") + a || ".";
            },
            relative: function (a, b) {
              a = N.resolve(a).substr(1);
              b = N.resolve(b).substr(1);
              function c(a) {
                var b = 0;
                for (; b < a.length; b++) if (a[b] !== "") break;
                var c = a.length - 1;
                for (; c >= 0; c--) if (a[c] !== "") break;
                return b > c ? [] : a.slice(b, c - b + 1);
              }
              a = c(a.split("/"));
              c = c(b.split("/"));
              b = Math.min(a.length, c.length);
              var d = b;
              for (var e = 0; e < b; e++)
                if (a[e] !== c[e]) {
                  d = e;
                  break;
                }
              b = [];
              for (var e = d; e < a.length; e++) b.push("..");
              b = b.concat(c.slice(d));
              return b.join("/");
            },
          };
          function Ja(a, b, c) {
            c = c > 0 ? c : z(a) + 1;
            c = new Array(c);
            a = y(a, c, 0, c.length);
            b && (c.length = a);
            return c;
          }
          var O = {
            ttys: [],
            init: function () {},
            shutdown: function () {},
            register: function (a, b) {
              (O.ttys[a] = { input: [], output: [], ops: b }),
                Q.registerDevice(a, O.stream_ops);
            },
            stream_ops: {
              open: function (a) {
                var b = O.ttys[a.node.rdev];
                if (!b) throw new Q.ErrnoError(43);
                a.tty = b;
                a.seekable = !1;
              },
              close: function (a) {
                a.tty.ops.fsync(a.tty);
              },
              fsync: function (a) {
                a.tty.ops.fsync(a.tty);
              },
              read: function (b, a, c, d, e) {
                if (!b.tty || !b.tty.ops.get_char) throw new Q.ErrnoError(60);
                e = 0;
                for (var f = 0; f < d; f++) {
                  var g;
                  try {
                    g = b.tty.ops.get_char(b.tty);
                  } catch (a) {
                    throw new Q.ErrnoError(29);
                  }
                  if (g === void 0 && e === 0) throw new Q.ErrnoError(6);
                  if (g === null || g === void 0) break;
                  e++;
                  a[c + f] = g;
                }
                e && (b.node.timestamp = Date.now());
                return e;
              },
              write: function (b, a, c, d, e) {
                if (!b.tty || !b.tty.ops.put_char) throw new Q.ErrnoError(60);
                try {
                  for (var f = 0; f < d; f++)
                    b.tty.ops.put_char(b.tty, a[c + f]);
                } catch (a) {
                  throw new Q.ErrnoError(29);
                }
                d && (b.node.timestamp = Date.now());
                return f;
              },
            },
            default_tty_ops: {
              get_char: function (a) {
                if (!a.input.length) {
                  var b = null;
                  typeof window != "undefined" &&
                  typeof window.prompt == "function"
                    ? ((b = window.prompt("Input: ")),
                      b !== null && (b += "\n"))
                    : typeof readline == "function" &&
                      ((b = readline()), b !== null && (b += "\n"));
                  if (!b) return null;
                  a.input = Ja(b, !0);
                }
                return a.input.shift();
              },
              put_char: function (a, b) {
                b === null || b === 10
                  ? (s(x(a.output, 0)), (a.output = []))
                  : b != 0 && a.output.push(b);
              },
              fsync: function (a) {
                a.output &&
                  a.output.length > 0 &&
                  (s(x(a.output, 0)), (a.output = []));
              },
            },
            default_tty1_ops: {
              put_char: function (a, b) {
                b === null || b === 10
                  ? (t(x(a.output, 0)), (a.output = []))
                  : b != 0 && a.output.push(b);
              },
              fsync: function (a) {
                a.output &&
                  a.output.length > 0 &&
                  (t(x(a.output, 0)), (a.output = []));
              },
            },
          };
          function Ka(a) {
            H();
          }
          var P = {
            ops_table: null,
            mount: function (a) {
              return P.createNode(null, "/", 16384 | 511, 0);
            },
            createNode: function (a, b, c, d) {
              if (Q.isBlkdev(c) || Q.isFIFO(c)) throw new Q.ErrnoError(63);
              P.ops_table ||
                (P.ops_table = {
                  dir: {
                    node: {
                      getattr: P.node_ops.getattr,
                      setattr: P.node_ops.setattr,
                      lookup: P.node_ops.lookup,
                      mknod: P.node_ops.mknod,
                      rename: P.node_ops.rename,
                      unlink: P.node_ops.unlink,
                      rmdir: P.node_ops.rmdir,
                      readdir: P.node_ops.readdir,
                      symlink: P.node_ops.symlink,
                    },
                    stream: { llseek: P.stream_ops.llseek },
                  },
                  file: {
                    node: {
                      getattr: P.node_ops.getattr,
                      setattr: P.node_ops.setattr,
                    },
                    stream: {
                      llseek: P.stream_ops.llseek,
                      read: P.stream_ops.read,
                      write: P.stream_ops.write,
                      allocate: P.stream_ops.allocate,
                      mmap: P.stream_ops.mmap,
                      msync: P.stream_ops.msync,
                    },
                  },
                  link: {
                    node: {
                      getattr: P.node_ops.getattr,
                      setattr: P.node_ops.setattr,
                      readlink: P.node_ops.readlink,
                    },
                    stream: {},
                  },
                  chrdev: {
                    node: {
                      getattr: P.node_ops.getattr,
                      setattr: P.node_ops.setattr,
                    },
                    stream: Q.chrdev_stream_ops,
                  },
                });
              c = Q.createNode(a, b, c, d);
              Q.isDir(c.mode)
                ? ((c.node_ops = P.ops_table.dir.node),
                  (c.stream_ops = P.ops_table.dir.stream),
                  (c.contents = {}))
                : Q.isFile(c.mode)
                ? ((c.node_ops = P.ops_table.file.node),
                  (c.stream_ops = P.ops_table.file.stream),
                  (c.usedBytes = 0),
                  (c.contents = null))
                : Q.isLink(c.mode)
                ? ((c.node_ops = P.ops_table.link.node),
                  (c.stream_ops = P.ops_table.link.stream))
                : Q.isChrdev(c.mode) &&
                  ((c.node_ops = P.ops_table.chrdev.node),
                  (c.stream_ops = P.ops_table.chrdev.stream));
              c.timestamp = Date.now();
              a && ((a.contents[b] = c), (a.timestamp = c.timestamp));
              return c;
            },
            getFileDataAsTypedArray: function (a) {
              if (!a.contents) return new Uint8Array(0);
              return a.contents.subarray
                ? a.contents.subarray(0, a.usedBytes)
                : new Uint8Array(a.contents);
            },
            expandFileStorage: function (a, b) {
              var c = a.contents ? a.contents.length : 0;
              if (c >= b) return;
              var d = 1024 * 1024;
              b = Math.max(b, (c * (c < d ? 2 : 1.125)) >>> 0);
              c != 0 && (b = Math.max(b, 256));
              d = a.contents;
              a.contents = new Uint8Array(b);
              a.usedBytes > 0 && a.contents.set(d.subarray(0, a.usedBytes), 0);
            },
            resizeFileStorage: function (a, b) {
              if (a.usedBytes == b) return;
              if (b == 0) (a.contents = null), (a.usedBytes = 0);
              else {
                var c = a.contents;
                a.contents = new Uint8Array(b);
                c && a.contents.set(c.subarray(0, Math.min(b, a.usedBytes)));
                a.usedBytes = b;
              }
            },
            node_ops: {
              getattr: function (a) {
                var b = {};
                b.dev = Q.isChrdev(a.mode) ? a.id : 1;
                b.ino = a.id;
                b.mode = a.mode;
                b.nlink = 1;
                b.uid = 0;
                b.gid = 0;
                b.rdev = a.rdev;
                Q.isDir(a.mode)
                  ? (b.size = 4096)
                  : Q.isFile(a.mode)
                  ? (b.size = a.usedBytes)
                  : Q.isLink(a.mode)
                  ? (b.size = a.link.length)
                  : (b.size = 0);
                b.atime = new Date(a.timestamp);
                b.mtime = new Date(a.timestamp);
                b.ctime = new Date(a.timestamp);
                b.blksize = 4096;
                b.blocks = Math.ceil(b.size / b.blksize);
                return b;
              },
              setattr: function (a, b) {
                b.mode !== void 0 && (a.mode = b.mode),
                  b.timestamp !== void 0 && (a.timestamp = b.timestamp),
                  b.size !== void 0 && P.resizeFileStorage(a, b.size);
              },
              lookup: function (a, b) {
                throw Q.genericErrors[44];
              },
              mknod: function (a, b, c, d) {
                return P.createNode(a, b, c, d);
              },
              rename: function (a, b, c) {
                if (Q.isDir(a.mode)) {
                  var d;
                  try {
                    d = Q.lookupNode(b, c);
                  } catch (a) {}
                  if (d) for (var e in d.contents) throw new Q.ErrnoError(55);
                }
                delete a.parent.contents[a.name];
                a.parent.timestamp = Date.now();
                a.name = c;
                b.contents[c] = a;
                b.timestamp = a.parent.timestamp;
                a.parent = b;
              },
              unlink: function (a, b) {
                delete a.contents[b], (a.timestamp = Date.now());
              },
              rmdir: function (a, b) {
                var c = Q.lookupNode(a, b);
                for (c in c.contents) throw new Q.ErrnoError(55);
                delete a.contents[b];
                a.timestamp = Date.now();
              },
              readdir: function (a) {
                var b = [".", ".."];
                for (var c in a.contents) {
                  if (!Object.prototype.hasOwnProperty.call(a.contents, c))
                    continue;
                  b.push(c);
                }
                return b;
              },
              symlink: function (a, b, c) {
                a = P.createNode(a, b, 511 | 40960, 0);
                a.link = c;
                return a;
              },
              readlink: function (a) {
                if (!Q.isLink(a.mode)) throw new Q.ErrnoError(28);
                return a.link;
              },
            },
            stream_ops: {
              read: function (b, a, c, d, e) {
                var f = b.node.contents;
                if (e >= b.node.usedBytes) return 0;
                b = Math.min(b.node.usedBytes - e, d);
                if (b > 8 && f.subarray) a.set(f.subarray(e, e + b), c);
                else for (d = 0; d < b; d++) a[c + d] = f[e + d];
                return b;
              },
              write: function (b, a, c, d, e, f) {
                a.buffer === A.buffer && (f = !1);
                if (!d) return 0;
                b = b.node;
                b.timestamp = Date.now();
                if (a.subarray && (!b.contents || b.contents.subarray))
                  if (f) {
                    b.contents = a.subarray(c, c + d);
                    b.usedBytes = d;
                    return d;
                  } else if (b.usedBytes === 0 && e === 0) {
                    b.contents = a.slice(c, c + d);
                    b.usedBytes = d;
                    return d;
                  } else if (e + d <= b.usedBytes) {
                    b.contents.set(a.subarray(c, c + d), e);
                    return d;
                  }
                P.expandFileStorage(b, e + d);
                if (b.contents.subarray && a.subarray)
                  b.contents.set(a.subarray(c, c + d), e);
                else for (f = 0; f < d; f++) b.contents[e + f] = a[c + f];
                b.usedBytes = Math.max(b.usedBytes, e + d);
                return d;
              },
              llseek: function (a, b, c) {
                b = b;
                c === 1
                  ? (b += a.position)
                  : c === 2 && Q.isFile(a.node.mode) && (b += a.node.usedBytes);
                if (b < 0) throw new Q.ErrnoError(28);
                return b;
              },
              allocate: function (a, b, c) {
                P.expandFileStorage(a.node, b + c),
                  (a.node.usedBytes = Math.max(a.node.usedBytes, b + c));
              },
              mmap: function (a, b, c, d, e) {
                if (!Q.isFile(a.node.mode)) throw new Q.ErrnoError(43);
                d = a.node.contents;
                if (!(e & 2) && d.buffer === ha) (a = !1), (e = d.byteOffset);
                else {
                  (c > 0 || c + b < d.length) &&
                    (d.subarray
                      ? (d = d.subarray(c, c + b))
                      : (d = Array.prototype.slice.call(d, c, c + b)));
                  a = !0;
                  e = Ka(b);
                  if (!e) throw new Q.ErrnoError(48);
                  A.set(d, e);
                }
                return { ptr: e, allocated: a };
              },
              msync: function (b, a, c, d, e) {
                P.stream_ops.write(b, a, 0, d, c, !1);
                return 0;
              },
            },
          };
          function La(a, b, c, d) {
            var e = d ? "" : ta("al " + a);
            ba(
              a,
              function (c) {
                da(c, 'Loading data file "' + a + '" failed (no arrayBuffer).'),
                  b(new Uint8Array(c)),
                  e && G(e);
              },
              function (b) {
                if (c) c();
                else throw 'Loading data file "' + a + '" failed.';
              }
            );
            e && ua(e);
          }
          var Q = {
              root: null,
              mounts: [],
              devices: {},
              streams: [],
              nextInode: 1,
              nameTable: null,
              currentPath: "/",
              initialized: !1,
              ignorePermissions: !0,
              ErrnoError: null,
              genericErrors: {},
              filesystems: null,
              syncFSRequests: 0,
              lookupPath: function (a, b) {
                b === void 0 && (b = {});
                a = N.resolve(a);
                if (!a) return { path: "", node: null };
                var c = { follow_mount: !0, recurse_count: 0 };
                b = Object.assign(c, b);
                if (b.recurse_count > 8) throw new Q.ErrnoError(32);
                c = a.split("/").filter(function (a) {
                  return !!a;
                });
                a = Q.root;
                var d = "/";
                for (var e = 0; e < c.length; e++) {
                  var f = e === c.length - 1;
                  if (f && b.parent) break;
                  a = Q.lookupNode(a, c[e]);
                  d = M.join2(d, c[e]);
                  Q.isMountpoint(a) &&
                    (!f || (f && b.follow_mount)) &&
                    (a = a.mounted.root);
                  if (!f || b.follow) {
                    f = 0;
                    while (Q.isLink(a.mode)) {
                      var g = Q.readlink(d);
                      d = N.resolve(M.dirname(d), g);
                      g = Q.lookupPath(d, {
                        recurse_count: b.recurse_count + 1,
                      });
                      a = g.node;
                      if (f++ > 40) throw new Q.ErrnoError(32);
                    }
                  }
                }
                return { path: d, node: a };
              },
              getPath: function (a) {
                var b;
                while (!0) {
                  if (Q.isRoot(a)) {
                    var c = a.mount.mountpoint;
                    return !b
                      ? c
                      : c[c.length - 1] !== "/"
                      ? c + "/" + b
                      : c + b;
                  }
                  b = b ? a.name + "/" + b : a.name;
                  a = a.parent;
                }
              },
              hashName: function (a, b) {
                var c = 0;
                for (var d = 0; d < b.length; d++)
                  c = ((c << 5) - c + b.charCodeAt(d)) | 0;
                return ((a + c) >>> 0) % Q.nameTable.length;
              },
              hashAddNode: function (a) {
                var b = Q.hashName(a.parent.id, a.name);
                a.name_next = Q.nameTable[b];
                Q.nameTable[b] = a;
              },
              hashRemoveNode: function (a) {
                var b = Q.hashName(a.parent.id, a.name);
                if (Q.nameTable[b] === a) Q.nameTable[b] = a.name_next;
                else {
                  b = Q.nameTable[b];
                  while (b) {
                    if (b.name_next === a) {
                      b.name_next = a.name_next;
                      break;
                    }
                    b = b.name_next;
                  }
                }
              },
              lookupNode: function (a, b) {
                var c = Q.mayLookup(a);
                if (c) throw new Q.ErrnoError(c, a);
                c = Q.hashName(a.id, b);
                for (c = Q.nameTable[c]; c; c = c.name_next) {
                  var d = c.name;
                  if (c.parent.id === a.id && d === b) return c;
                }
                return Q.lookup(a, b);
              },
              createNode: function (a, b, c, d) {
                a = new Q.FSNode(a, b, c, d);
                Q.hashAddNode(a);
                return a;
              },
              destroyNode: function (a) {
                Q.hashRemoveNode(a);
              },
              isRoot: function (a) {
                return a === a.parent;
              },
              isMountpoint: function (a) {
                return !!a.mounted;
              },
              isFile: function (a) {
                return (a & 61440) === 32768;
              },
              isDir: function (a) {
                return (a & 61440) === 16384;
              },
              isLink: function (a) {
                return (a & 61440) === 40960;
              },
              isChrdev: function (a) {
                return (a & 61440) === 8192;
              },
              isBlkdev: function (a) {
                return (a & 61440) === 24576;
              },
              isFIFO: function (a) {
                return (a & 61440) === 4096;
              },
              isSocket: function (a) {
                return (a & 49152) === 49152;
              },
              flagModes: {
                r: 0,
                "r+": 2,
                w: 577,
                "w+": 578,
                a: 1089,
                "a+": 1090,
              },
              modeStringToFlags: function (a) {
                var b = Q.flagModes[a];
                if (typeof b == "undefined")
                  throw new Error("Unknown file open mode: " + a);
                return b;
              },
              flagsToPermissionString: function (a) {
                var b = ["r", "w", "rw"][a & 3];
                a & 512 && (b += "w");
                return b;
              },
              nodePermissions: function (a, b) {
                if (Q.ignorePermissions) return 0;
                if (b.includes("r") && !(a.mode & 292)) return 2;
                else if (b.includes("w") && !(a.mode & 146)) return 2;
                else if (b.includes("x") && !(a.mode & 73)) return 2;
                return 0;
              },
              mayLookup: function (a) {
                var b = Q.nodePermissions(a, "x");
                if (b) return b;
                return !a.node_ops.lookup ? 2 : 0;
              },
              mayCreate: function (a, b) {
                try {
                  Q.lookupNode(a, b);
                  return 20;
                } catch (a) {}
                return Q.nodePermissions(a, "wx");
              },
              mayDelete: function (a, b, c) {
                var d;
                try {
                  d = Q.lookupNode(a, b);
                } catch (a) {
                  return a.errno;
                }
                b = Q.nodePermissions(a, "wx");
                if (b) return b;
                if (c) {
                  if (!Q.isDir(d.mode)) return 54;
                  if (Q.isRoot(d) || Q.getPath(d) === Q.cwd()) return 10;
                } else if (Q.isDir(d.mode)) return 31;
                return 0;
              },
              mayOpen: function (a, b) {
                if (!a) return 44;
                if (Q.isLink(a.mode)) return 32;
                else if (
                  Q.isDir(a.mode) &&
                  (Q.flagsToPermissionString(b) !== "r" || b & 512)
                )
                  return 31;
                return Q.nodePermissions(a, Q.flagsToPermissionString(b));
              },
              MAX_OPEN_FDS: 4096,
              nextfd: function (a, b) {
                a === void 0 && (a = 0);
                b === void 0 && (b = Q.MAX_OPEN_FDS);
                for (a = a; a <= b; a++) if (!Q.streams[a]) return a;
                throw new Q.ErrnoError(33);
              },
              getStream: function (a) {
                return Q.streams[a];
              },
              createStream: function (a, b, c) {
                Q.FSStream ||
                  ((Q.FSStream = function () {
                    this.shared = {};
                  }),
                  (Q.FSStream.prototype = {}),
                  Object.defineProperties(Q.FSStream.prototype, {
                    object: {
                      get: function () {
                        return this.node;
                      },
                      set: function (a) {
                        this.node = a;
                      },
                    },
                    isRead: {
                      get: function () {
                        return (this.flags & 2097155) !== 1;
                      },
                    },
                    isWrite: {
                      get: function () {
                        return (this.flags & 2097155) !== 0;
                      },
                    },
                    isAppend: {
                      get: function () {
                        return this.flags & 1024;
                      },
                    },
                    flags: {
                      get: function () {
                        return this.shared.flags;
                      },
                      set: function (a) {
                        this.shared.flags = a;
                      },
                    },
                    position: {
                      get: function () {
                        return this.shared.position;
                      },
                      set: function (a) {
                        this.shared.position = a;
                      },
                    },
                  }));
                a = Object.assign(new Q.FSStream(), a);
                b = Q.nextfd(b, c);
                a.fd = b;
                Q.streams[b] = a;
                return a;
              },
              closeStream: function (a) {
                Q.streams[a] = null;
              },
              chrdev_stream_ops: {
                open: function (a) {
                  var b = Q.getDevice(a.node.rdev);
                  a.stream_ops = b.stream_ops;
                  a.stream_ops.open && a.stream_ops.open(a);
                },
                llseek: function () {
                  throw new Q.ErrnoError(70);
                },
              },
              major: function (a) {
                return a >> 8;
              },
              minor: function (a) {
                return a & 255;
              },
              makedev: function (a, b) {
                return (a << 8) | b;
              },
              registerDevice: function (a, b) {
                Q.devices[a] = { stream_ops: b };
              },
              getDevice: function (a) {
                return Q.devices[a];
              },
              getMounts: function (a) {
                var b = [];
                a = [a];
                while (a.length) {
                  var c = a.pop();
                  b.push(c);
                  a.push.apply(a, c.mounts);
                }
                return b;
              },
              syncfs: function (a, b) {
                typeof a == "function" && ((b = a), (a = !1));
                Q.syncFSRequests++;
                Q.syncFSRequests > 1 &&
                  t(
                    "warning: " +
                      Q.syncFSRequests +
                      " FS.syncfs operations in flight at once, probably just doing extra work"
                  );
                var c = Q.getMounts(Q.root.mount),
                  d = 0;
                function e(a) {
                  Q.syncFSRequests--;
                  return b(a);
                }
                function f(a) {
                  if (a) {
                    if (!f.errored) {
                      f.errored = !0;
                      return e(a);
                    }
                    return;
                  }
                  ++d >= c.length && e(null);
                }
                c.forEach(function (b) {
                  if (!b.type.syncfs) return f(null);
                  b.type.syncfs(b, a, f);
                });
              },
              mount: function (a, b, c) {
                var d = c === "/",
                  e = !c,
                  f;
                if (d && Q.root) throw new Q.ErrnoError(10);
                else if (!d && !e) {
                  e = Q.lookupPath(c, { follow_mount: !1 });
                  c = e.path;
                  f = e.node;
                  if (Q.isMountpoint(f)) throw new Q.ErrnoError(10);
                  if (!Q.isDir(f.mode)) throw new Q.ErrnoError(54);
                }
                e = { type: a, opts: b, mountpoint: c, mounts: [] };
                b = a.mount(e);
                b.mount = e;
                e.root = b;
                d
                  ? (Q.root = b)
                  : f && ((f.mounted = e), f.mount && f.mount.mounts.push(e));
                return b;
              },
              unmount: function (a) {
                a = Q.lookupPath(a, { follow_mount: !1 });
                if (!Q.isMountpoint(a.node)) throw new Q.ErrnoError(28);
                a = a.node;
                var b = a.mounted,
                  c = Q.getMounts(b);
                Object.keys(Q.nameTable).forEach(function (a) {
                  a = Q.nameTable[a];
                  while (a) {
                    var b = a.name_next;
                    c.includes(a.mount) && Q.destroyNode(a);
                    a = b;
                  }
                });
                a.mounted = null;
                b = a.mount.mounts.indexOf(b);
                a.mount.mounts.splice(b, 1);
              },
              lookup: function (a, b) {
                return a.node_ops.lookup(a, b);
              },
              mknod: function (a, b, c) {
                var d = Q.lookupPath(a, { parent: !0 });
                d = d.node;
                a = M.basename(a);
                if (!a || a === "." || a === "..") throw new Q.ErrnoError(28);
                var e = Q.mayCreate(d, a);
                if (e) throw new Q.ErrnoError(e);
                if (!d.node_ops.mknod) throw new Q.ErrnoError(63);
                return d.node_ops.mknod(d, a, b, c);
              },
              create: function (a, b) {
                b = b !== void 0 ? b : 438;
                b &= 4095;
                b |= 32768;
                return Q.mknod(a, b, 0);
              },
              mkdir: function (a, b) {
                b = b !== void 0 ? b : 511;
                b &= 511 | 512;
                b |= 16384;
                return Q.mknod(a, b, 0);
              },
              mkdirTree: function (a, b) {
                a = a.split("/");
                var c = "";
                for (var d = 0; d < a.length; ++d) {
                  if (!a[d]) continue;
                  c += "/" + a[d];
                  try {
                    Q.mkdir(c, b);
                  } catch (a) {
                    if (a.errno != 20) throw a;
                  }
                }
              },
              mkdev: function (a, b, c) {
                typeof c == "undefined" && ((c = b), (b = 438));
                b |= 8192;
                return Q.mknod(a, b, c);
              },
              symlink: function (a, b) {
                if (!N.resolve(a)) throw new Q.ErrnoError(44);
                var c = Q.lookupPath(b, { parent: !0 });
                c = c.node;
                if (!c) throw new Q.ErrnoError(44);
                b = M.basename(b);
                var d = Q.mayCreate(c, b);
                if (d) throw new Q.ErrnoError(d);
                if (!c.node_ops.symlink) throw new Q.ErrnoError(63);
                return c.node_ops.symlink(c, b, a);
              },
              rename: function (a, b) {
                var c = M.dirname(a),
                  d = M.dirname(b),
                  e = M.basename(a),
                  f = M.basename(b),
                  g,
                  h;
                g = Q.lookupPath(a, { parent: !0 });
                h = g.node;
                g = Q.lookupPath(b, { parent: !0 });
                g = g.node;
                if (!h || !g) throw new Q.ErrnoError(44);
                if (h.mount !== g.mount) throw new Q.ErrnoError(75);
                var i = Q.lookupNode(h, e);
                a = N.relative(a, d);
                if (a.charAt(0) !== ".") throw new Q.ErrnoError(28);
                a = N.relative(b, c);
                if (a.charAt(0) !== ".") throw new Q.ErrnoError(55);
                var j;
                try {
                  j = Q.lookupNode(g, f);
                } catch (a) {}
                if (i === j) return;
                d = Q.isDir(i.mode);
                b = Q.mayDelete(h, e, d);
                if (b) throw new Q.ErrnoError(b);
                b = j ? Q.mayDelete(g, f, d) : Q.mayCreate(g, f);
                if (b) throw new Q.ErrnoError(b);
                if (!h.node_ops.rename) throw new Q.ErrnoError(63);
                if (Q.isMountpoint(i) || (j && Q.isMountpoint(j)))
                  throw new Q.ErrnoError(10);
                if (g !== h) {
                  b = Q.nodePermissions(h, "w");
                  if (b) throw new Q.ErrnoError(b);
                }
                Q.hashRemoveNode(i);
                try {
                  h.node_ops.rename(i, g, f);
                } catch (a) {
                  throw a;
                } finally {
                  Q.hashAddNode(i);
                }
              },
              rmdir: function (a) {
                var b = Q.lookupPath(a, { parent: !0 });
                b = b.node;
                a = M.basename(a);
                var c = Q.lookupNode(b, a),
                  d = Q.mayDelete(b, a, !0);
                if (d) throw new Q.ErrnoError(d);
                if (!b.node_ops.rmdir) throw new Q.ErrnoError(63);
                if (Q.isMountpoint(c)) throw new Q.ErrnoError(10);
                b.node_ops.rmdir(b, a);
                Q.destroyNode(c);
              },
              readdir: function (a) {
                a = Q.lookupPath(a, { follow: !0 });
                a = a.node;
                if (!a.node_ops.readdir) throw new Q.ErrnoError(54);
                return a.node_ops.readdir(a);
              },
              unlink: function (a) {
                var b = Q.lookupPath(a, { parent: !0 });
                b = b.node;
                if (!b) throw new Q.ErrnoError(44);
                a = M.basename(a);
                var c = Q.lookupNode(b, a),
                  d = Q.mayDelete(b, a, !1);
                if (d) throw new Q.ErrnoError(d);
                if (!b.node_ops.unlink) throw new Q.ErrnoError(63);
                if (Q.isMountpoint(c)) throw new Q.ErrnoError(10);
                b.node_ops.unlink(b, a);
                Q.destroyNode(c);
              },
              readlink: function (a) {
                a = Q.lookupPath(a);
                a = a.node;
                if (!a) throw new Q.ErrnoError(44);
                if (!a.node_ops.readlink) throw new Q.ErrnoError(28);
                return N.resolve(Q.getPath(a.parent), a.node_ops.readlink(a));
              },
              stat: function (a, b) {
                a = Q.lookupPath(a, { follow: !b });
                b = a.node;
                if (!b) throw new Q.ErrnoError(44);
                if (!b.node_ops.getattr) throw new Q.ErrnoError(63);
                return b.node_ops.getattr(b);
              },
              lstat: function (a) {
                return Q.stat(a, !0);
              },
              chmod: function (a, b, c) {
                if (typeof a == "string") {
                  c = Q.lookupPath(a, { follow: !c });
                  c = c.node;
                } else c = a;
                if (!c.node_ops.setattr) throw new Q.ErrnoError(63);
                c.node_ops.setattr(c, {
                  mode: (b & 4095) | (c.mode & -4096),
                  timestamp: Date.now(),
                });
              },
              lchmod: function (a, b) {
                Q.chmod(a, b, !0);
              },
              fchmod: function (a, b) {
                a = Q.getStream(a);
                if (!a) throw new Q.ErrnoError(8);
                Q.chmod(a.node, b);
              },
              chown: function (a, b, c, d) {
                if (typeof a == "string") {
                  b = Q.lookupPath(a, { follow: !d });
                  c = b.node;
                } else c = a;
                if (!c.node_ops.setattr) throw new Q.ErrnoError(63);
                c.node_ops.setattr(c, { timestamp: Date.now() });
              },
              lchown: function (a, b, c) {
                Q.chown(a, b, c, !0);
              },
              fchown: function (a, b, c) {
                a = Q.getStream(a);
                if (!a) throw new Q.ErrnoError(8);
                Q.chown(a.node, b, c);
              },
              truncate: function (a, b) {
                if (b < 0) throw new Q.ErrnoError(28);
                if (typeof a == "string") {
                  var c = Q.lookupPath(a, { follow: !0 });
                  c = c.node;
                } else c = a;
                if (!c.node_ops.setattr) throw new Q.ErrnoError(63);
                if (Q.isDir(c.mode)) throw new Q.ErrnoError(31);
                if (!Q.isFile(c.mode)) throw new Q.ErrnoError(28);
                a = Q.nodePermissions(c, "w");
                if (a) throw new Q.ErrnoError(a);
                c.node_ops.setattr(c, { size: b, timestamp: Date.now() });
              },
              ftruncate: function (a, b) {
                a = Q.getStream(a);
                if (!a) throw new Q.ErrnoError(8);
                if ((a.flags & 2097155) === 0) throw new Q.ErrnoError(28);
                Q.truncate(a.node, b);
              },
              utime: function (a, b, c) {
                a = Q.lookupPath(a, { follow: !0 });
                a = a.node;
                a.node_ops.setattr(a, { timestamp: Math.max(b, c) });
              },
              open: function (a, b, d) {
                if (a === "") throw new Q.ErrnoError(44);
                b = typeof b == "string" ? Q.modeStringToFlags(b) : b;
                d = typeof d == "undefined" ? 438 : d;
                b & 64 ? (d = (d & 4095) | 32768) : (d = 0);
                var e;
                if (typeof a == "object") e = a;
                else {
                  a = M.normalize(a);
                  try {
                    var f = Q.lookupPath(a, { follow: !(b & 131072) });
                    e = f.node;
                  } catch (a) {}
                }
                f = !1;
                if (b & 64)
                  if (e) {
                    if (b & 128) throw new Q.ErrnoError(20);
                  } else (e = Q.mknod(a, d, 0)), (f = !0);
                if (!e) throw new Q.ErrnoError(44);
                Q.isChrdev(e.mode) && (b &= -513);
                if (b & 65536 && !Q.isDir(e.mode)) throw new Q.ErrnoError(54);
                if (!f) {
                  d = Q.mayOpen(e, b);
                  if (d) throw new Q.ErrnoError(d);
                }
                b & 512 && !f && Q.truncate(e, 0);
                b &= ~(128 | 512 | 131072);
                d = Q.createStream({
                  node: e,
                  path: Q.getPath(e),
                  flags: b,
                  seekable: !0,
                  position: 0,
                  stream_ops: e.stream_ops,
                  ungotten: [],
                  error: !1,
                });
                d.stream_ops.open && d.stream_ops.open(d);
                c.logReadFiles &&
                  !(b & 1) &&
                  (Q.readFiles || (Q.readFiles = {}),
                  a in Q.readFiles || (Q.readFiles[a] = 1));
                return d;
              },
              close: function (a) {
                if (Q.isClosed(a)) throw new Q.ErrnoError(8);
                a.getdents && (a.getdents = null);
                try {
                  a.stream_ops.close && a.stream_ops.close(a);
                } catch (a) {
                  throw a;
                } finally {
                  Q.closeStream(a.fd);
                }
                a.fd = null;
              },
              isClosed: function (a) {
                return a.fd === null;
              },
              llseek: function (a, b, c) {
                if (Q.isClosed(a)) throw new Q.ErrnoError(8);
                if (!a.seekable || !a.stream_ops.llseek)
                  throw new Q.ErrnoError(70);
                if (c != 0 && c != 1 && c != 2) throw new Q.ErrnoError(28);
                a.position = a.stream_ops.llseek(a, b, c);
                a.ungotten = [];
                return a.position;
              },
              read: function (b, a, c, d, e) {
                if (d < 0 || e < 0) throw new Q.ErrnoError(28);
                if (Q.isClosed(b)) throw new Q.ErrnoError(8);
                if ((b.flags & 2097155) === 1) throw new Q.ErrnoError(8);
                if (Q.isDir(b.node.mode)) throw new Q.ErrnoError(31);
                if (!b.stream_ops.read) throw new Q.ErrnoError(28);
                var f = typeof e != "undefined";
                if (!f) e = b.position;
                else if (!b.seekable) throw new Q.ErrnoError(70);
                a = b.stream_ops.read(b, a, c, d, e);
                f || (b.position += a);
                return a;
              },
              write: function (b, a, c, d, e, f) {
                if (d < 0 || e < 0) throw new Q.ErrnoError(28);
                if (Q.isClosed(b)) throw new Q.ErrnoError(8);
                if ((b.flags & 2097155) === 0) throw new Q.ErrnoError(8);
                if (Q.isDir(b.node.mode)) throw new Q.ErrnoError(31);
                if (!b.stream_ops.write) throw new Q.ErrnoError(28);
                b.seekable && b.flags & 1024 && Q.llseek(b, 0, 2);
                var g = typeof e != "undefined";
                if (!g) e = b.position;
                else if (!b.seekable) throw new Q.ErrnoError(70);
                a = b.stream_ops.write(b, a, c, d, e, f);
                g || (b.position += a);
                return a;
              },
              allocate: function (a, b, c) {
                if (Q.isClosed(a)) throw new Q.ErrnoError(8);
                if (b < 0 || c <= 0) throw new Q.ErrnoError(28);
                if ((a.flags & 2097155) === 0) throw new Q.ErrnoError(8);
                if (!Q.isFile(a.node.mode) && !Q.isDir(a.node.mode))
                  throw new Q.ErrnoError(43);
                if (!a.stream_ops.allocate) throw new Q.ErrnoError(138);
                a.stream_ops.allocate(a, b, c);
              },
              mmap: function (a, b, c, d, e) {
                if ((d & 2) !== 0 && (e & 2) === 0 && (a.flags & 2097155) !== 2)
                  throw new Q.ErrnoError(2);
                if ((a.flags & 2097155) === 1) throw new Q.ErrnoError(2);
                if (!a.stream_ops.mmap) throw new Q.ErrnoError(43);
                return a.stream_ops.mmap(a, b, c, d, e);
              },
              msync: function (b, a, c, d, e) {
                return !b.stream_ops.msync
                  ? 0
                  : b.stream_ops.msync(b, a, c, d, e);
              },
              munmap: function (a) {
                return 0;
              },
              ioctl: function (a, b, c) {
                if (!a.stream_ops.ioctl) throw new Q.ErrnoError(59);
                return a.stream_ops.ioctl(a, b, c);
              },
              readFile: function (a, b) {
                b === void 0 && (b = {});
                b.flags = b.flags || 0;
                b.encoding = b.encoding || "binary";
                if (b.encoding !== "utf8" && b.encoding !== "binary")
                  throw new Error('Invalid encoding type "' + b.encoding + '"');
                var c,
                  d = Q.open(a, b.flags);
                a = Q.stat(a);
                a = a.size;
                var e = new Uint8Array(a);
                Q.read(d, e, 0, a, 0);
                b.encoding === "utf8"
                  ? (c = x(e, 0))
                  : b.encoding === "binary" && (c = e);
                Q.close(d);
                return c;
              },
              writeFile: function (a, b, c) {
                c === void 0 && (c = {});
                c.flags = c.flags || 577;
                a = Q.open(a, c.flags, c.mode);
                if (typeof b == "string") {
                  var d = new Uint8Array(z(b) + 1),
                    e = y(b, d, 0, d.length);
                  Q.write(a, d, 0, e, void 0, c.canOwn);
                } else if (ArrayBuffer.isView(b))
                  Q.write(a, b, 0, b.byteLength, void 0, c.canOwn);
                else throw new Error("Unsupported data type");
                Q.close(a);
              },
              cwd: function () {
                return Q.currentPath;
              },
              chdir: function (a) {
                a = Q.lookupPath(a, { follow: !0 });
                if (a.node === null) throw new Q.ErrnoError(44);
                if (!Q.isDir(a.node.mode)) throw new Q.ErrnoError(54);
                var b = Q.nodePermissions(a.node, "x");
                if (b) throw new Q.ErrnoError(b);
                Q.currentPath = a.path;
              },
              createDefaultDirectories: function () {
                Q.mkdir("/tmp"), Q.mkdir("/home"), Q.mkdir("/home/web_user");
              },
              createDefaultDevices: function () {
                Q.mkdir("/dev");
                Q.registerDevice(Q.makedev(1, 3), {
                  read: function () {
                    return 0;
                  },
                  write: function (b, a, c, d, e) {
                    return d;
                  },
                });
                Q.mkdev("/dev/null", Q.makedev(1, 3));
                O.register(Q.makedev(5, 0), O.default_tty_ops);
                O.register(Q.makedev(6, 0), O.default_tty1_ops);
                Q.mkdev("/dev/tty", Q.makedev(5, 0));
                Q.mkdev("/dev/tty1", Q.makedev(6, 0));
                var a = Ia();
                Q.createDevice("/dev", "random", a);
                Q.createDevice("/dev", "urandom", a);
                Q.mkdir("/dev/shm");
                Q.mkdir("/dev/shm/tmp");
              },
              createSpecialDirectories: function () {
                Q.mkdir("/proc");
                var a = Q.mkdir("/proc/self");
                Q.mkdir("/proc/self/fd");
                Q.mount(
                  {
                    mount: function () {
                      var b = Q.createNode(a, "fd", 16384 | 511, 73);
                      b.node_ops = {
                        lookup: function (a, b) {
                          a = +b;
                          var c = Q.getStream(a);
                          if (!c) throw new Q.ErrnoError(8);
                          b = {
                            parent: null,
                            mount: { mountpoint: "fake" },
                            node_ops: {
                              readlink: function () {
                                return c.path;
                              },
                            },
                          };
                          b.parent = b;
                          return b;
                        },
                      };
                      return b;
                    },
                  },
                  {},
                  "/proc/self/fd"
                );
              },
              createStandardStreams: function () {
                c.stdin
                  ? Q.createDevice("/dev", "stdin", c.stdin)
                  : Q.symlink("/dev/tty", "/dev/stdin"),
                  c.stdout
                    ? Q.createDevice("/dev", "stdout", null, c.stdout)
                    : Q.symlink("/dev/tty", "/dev/stdout"),
                  c.stderr
                    ? Q.createDevice("/dev", "stderr", null, c.stderr)
                    : Q.symlink("/dev/tty1", "/dev/stderr"),
                  Q.open("/dev/stdin", 0),
                  Q.open("/dev/stdout", 1),
                  Q.open("/dev/stderr", 1);
              },
              ensureErrnoError: function () {
                if (Q.ErrnoError) return;
                Q.ErrnoError = function (a, b) {
                  (this.node = b),
                    (this.setErrno = function (a) {
                      this.errno = a;
                    }),
                    this.setErrno(a),
                    (this.message = "FS error");
                };
                Q.ErrnoError.prototype = new Error();
                Q.ErrnoError.prototype.constructor = Q.ErrnoError;
                [44].forEach(function (a) {
                  (Q.genericErrors[a] = new Q.ErrnoError(a)),
                    (Q.genericErrors[a].stack = "<generic error, no stack>");
                });
              },
              staticInit: function () {
                Q.ensureErrnoError(),
                  (Q.nameTable = new Array(4096)),
                  Q.mount(P, {}, "/"),
                  Q.createDefaultDirectories(),
                  Q.createDefaultDevices(),
                  Q.createSpecialDirectories(),
                  (Q.filesystems = { MEMFS: P });
              },
              init: function (a, b, d) {
                (Q.init.initialized = !0),
                  Q.ensureErrnoError(),
                  (c.stdin = a || c.stdin),
                  (c.stdout = b || c.stdout),
                  (c.stderr = d || c.stderr),
                  Q.createStandardStreams();
              },
              quit: function () {
                Q.init.initialized = !1;
                for (var a = 0; a < Q.streams.length; a++) {
                  var b = Q.streams[a];
                  if (!b) continue;
                  Q.close(b);
                }
              },
              getMode: function (a, b) {
                var c = 0;
                a && (c |= 292 | 73);
                b && (c |= 146);
                return c;
              },
              findObject: function (a, b) {
                a = Q.analyzePath(a, b);
                return !a.exists ? null : a.object;
              },
              analyzePath: function (a, b) {
                try {
                  var c = Q.lookupPath(a, { follow: !b });
                  a = c.path;
                } catch (a) {}
                var d = {
                  isRoot: !1,
                  exists: !1,
                  error: 0,
                  name: null,
                  path: null,
                  object: null,
                  parentExists: !1,
                  parentPath: null,
                  parentObject: null,
                };
                try {
                  var c = Q.lookupPath(a, { parent: !0 });
                  d.parentExists = !0;
                  d.parentPath = c.path;
                  d.parentObject = c.node;
                  d.name = M.basename(a);
                  c = Q.lookupPath(a, { follow: !b });
                  d.exists = !0;
                  d.path = c.path;
                  d.object = c.node;
                  d.name = c.node.name;
                  d.isRoot = c.path === "/";
                } catch (a) {
                  d.error = a.errno;
                }
                return d;
              },
              createPath: function (a, b, c, d) {
                a = typeof a == "string" ? a : Q.getPath(a);
                c = b.split("/").reverse();
                while (c.length) {
                  d = c.pop();
                  if (!d) continue;
                  var e = M.join2(a, d);
                  try {
                    Q.mkdir(e);
                  } catch (a) {}
                  a = e;
                }
                return e;
              },
              createFile: function (a, b, c, d, e) {
                c = M.join2(typeof a == "string" ? a : Q.getPath(a), b);
                a = Q.getMode(d, e);
                return Q.create(c, a);
              },
              createDataFile: function (a, b, c, d, e, f) {
                var g = b;
                a &&
                  ((a = typeof a == "string" ? a : Q.getPath(a)),
                  (g = b ? M.join2(a, b) : a));
                b = Q.getMode(d, e);
                a = Q.create(g, b);
                if (c) {
                  if (typeof c == "string") {
                    d = new Array(c.length);
                    for (e = 0, g = c.length; e < g; ++e)
                      d[e] = c.charCodeAt(e);
                    c = d;
                  }
                  Q.chmod(a, b | 146);
                  e = Q.open(a, 577);
                  Q.write(e, c, 0, c.length, 0, f);
                  Q.close(e);
                  Q.chmod(a, b);
                }
                return a;
              },
              createDevice: function (a, b, c, d) {
                a = M.join2(typeof a == "string" ? a : Q.getPath(a), b);
                b = Q.getMode(!!c, !!d);
                Q.createDevice.major || (Q.createDevice.major = 64);
                var e = Q.makedev(Q.createDevice.major++, 0);
                Q.registerDevice(e, {
                  open: function (a) {
                    a.seekable = !1;
                  },
                  close: function (a) {
                    d && d.buffer && d.buffer.length && d(10);
                  },
                  read: function (b, a, d, e, f) {
                    f = 0;
                    for (var g = 0; g < e; g++) {
                      var h;
                      try {
                        h = c();
                      } catch (a) {
                        throw new Q.ErrnoError(29);
                      }
                      if (h === void 0 && f === 0) throw new Q.ErrnoError(6);
                      if (h === null || h === void 0) break;
                      f++;
                      a[d + g] = h;
                    }
                    f && (b.node.timestamp = Date.now());
                    return f;
                  },
                  write: function (b, a, c, e, f) {
                    for (f = 0; f < e; f++)
                      try {
                        d(a[c + f]);
                      } catch (a) {
                        throw new Q.ErrnoError(29);
                      }
                    e && (b.node.timestamp = Date.now());
                    return f;
                  },
                });
                return Q.mkdev(a, b, e);
              },
              forceLoadFile: function (a) {
                if (a.isDevice || a.isFolder || a.link || a.contents) return !0;
                if (typeof XMLHttpRequest != "undefined")
                  throw new Error(
                    "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
                  );
                else if (q)
                  try {
                    (a.contents = Ja(q(a.url), !0)),
                      (a.usedBytes = a.contents.length);
                  } catch (a) {
                    throw new Q.ErrnoError(29);
                  }
                else
                  throw new Error(
                    "Cannot load without read() or XMLHttpRequest."
                  );
              },
              createLazyFile: function (a, b, c, d, e) {
                function f() {
                  (this.lengthKnown = !1), (this.chunks = []);
                }
                f.prototype.get = function (a) {
                  if (a > this.length - 1 || a < 0) return void 0;
                  var b = a % this.chunkSize;
                  a = (a / this.chunkSize) | 0;
                  return this.getter(a)[b];
                };
                f.prototype.setDataGetter = function (a) {
                  this.getter = a;
                };
                f.prototype.cacheLength = function () {
                  var a = new XMLHttpRequest();
                  a.open("HEAD", c, !1);
                  a.send(null);
                  if (
                    !((a.status >= 200 && a.status < 300) || a.status === 304)
                  )
                    throw new Error(
                      "Couldn't load " + c + ". Status: " + a.status
                    );
                  var b = Number(a.getResponseHeader("Content-length")),
                    d,
                    e =
                      (d = a.getResponseHeader("Accept-Ranges")) &&
                      d === "bytes";
                  a =
                    (d = a.getResponseHeader("Content-Encoding")) &&
                    d === "gzip";
                  var f = 1024 * 1024;
                  e || (f = b);
                  var g = function (d, e) {
                      if (d > e)
                        throw new Error(
                          "invalid range (" +
                            d +
                            ", " +
                            e +
                            ") or no bytes requested!"
                        );
                      if (e > b - 1)
                        throw new Error(
                          "only " + b + " bytes available! programmer error!"
                        );
                      var a = new XMLHttpRequest();
                      a.open("GET", c, !1);
                      b !== f &&
                        a.setRequestHeader("Range", "bytes=" + d + "-" + e);
                      a.responseType = "arraybuffer";
                      a.overrideMimeType &&
                        a.overrideMimeType(
                          "text/plain; charset=x-user-defined"
                        );
                      a.send(null);
                      if (
                        !(
                          (a.status >= 200 && a.status < 300) ||
                          a.status === 304
                        )
                      )
                        throw new Error(
                          "Couldn't load " + c + ". Status: " + a.status
                        );
                      return a.response !== void 0
                        ? new Uint8Array(a.response || [])
                        : Ja(a.responseText || "", !0);
                    },
                    h = this;
                  h.setDataGetter(function (a) {
                    var c = a * f,
                      d = (a + 1) * f - 1;
                    d = Math.min(d, b - 1);
                    typeof h.chunks[a] == "undefined" &&
                      (h.chunks[a] = g(c, d));
                    if (typeof h.chunks[a] == "undefined")
                      throw new Error("doXHR failed!");
                    return h.chunks[a];
                  });
                  (a || !b) &&
                    ((f = b = 1),
                    (b = this.getter(0).length),
                    (f = b),
                    s(
                      "LazyFiles on gzip forces download of the whole file when length is accessed"
                    ));
                  this._length = b;
                  this._chunkSize = f;
                  this.lengthKnown = !0;
                };
                if (typeof XMLHttpRequest != "undefined") {
                  if (!n)
                    throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                  f = new f();
                  Object.defineProperties(f, {
                    length: {
                      get: function () {
                        this.lengthKnown || this.cacheLength();
                        return this._length;
                      },
                    },
                    chunkSize: {
                      get: function () {
                        this.lengthKnown || this.cacheLength();
                        return this._chunkSize;
                      },
                    },
                  });
                  f = { isDevice: !1, contents: f };
                } else var f = { isDevice: !1, url: c };
                var g = Q.createFile(a, b, f, d, e);
                f.contents
                  ? (g.contents = f.contents)
                  : f.url && ((g.contents = null), (g.url = f.url));
                Object.defineProperties(g, {
                  usedBytes: {
                    get: function () {
                      return this.contents.length;
                    },
                  },
                });
                var h = {};
                a = Object.keys(g.stream_ops);
                a.forEach(function (a) {
                  var b = g.stream_ops[a];
                  h[a] = function () {
                    Q.forceLoadFile(g);
                    return b.apply(null, arguments);
                  };
                });
                function i(b, a, c, d, e) {
                  b = b.node.contents;
                  if (e >= b.length) return 0;
                  d = Math.min(b.length - e, d);
                  if (b.slice) for (var f = 0; f < d; f++) a[c + f] = b[e + f];
                  else for (var f = 0; f < d; f++) a[c + f] = b.get(e + f);
                  return d;
                }
                h.read = function (b, a, c, d, e) {
                  Q.forceLoadFile(g);
                  return i(b, a, c, d, e);
                };
                h.mmap = function (a, b, c, d, e) {
                  Q.forceLoadFile(g);
                  d = Ka(b);
                  if (!d) throw new Q.ErrnoError(48);
                  i(a, A, d, b, c);
                  return { ptr: d, allocated: !0 };
                };
                g.stream_ops = h;
                return g;
              },
              createPreloadedFile: function (a, b, c, d, e, f, g, h, i, j) {
                var k = b ? N.resolve(M.join2(a, b)) : a,
                  l = ta("cp " + k);
                function m(c) {
                  function m(c) {
                    j && j(),
                      h || Q.createDataFile(a, b, c, d, e, i),
                      f && f(),
                      G(l);
                  }
                  if (
                    Browser.handledByPreloadPlugin(c, k, m, function () {
                      g && g(), G(l);
                    })
                  )
                    return;
                  m(c);
                }
                ua(l);
                typeof c == "string"
                  ? La(
                      c,
                      function (a) {
                        return m(a);
                      },
                      g
                    )
                  : m(c);
              },
              indexedDB: function () {
                return (
                  window.indexedDB ||
                  window.mozIndexedDB ||
                  window.webkitIndexedDB ||
                  window.msIndexedDB
                );
              },
              DB_NAME: function () {
                return "EM_FS_" + window.location.pathname;
              },
              DB_VERSION: 20,
              DB_STORE_NAME: "FILE_DATA",
              saveFilesToDB: function (a, b, c) {
                b = b || function () {};
                c = c || function () {};
                var d = Q.indexedDB();
                try {
                  var e = d.open(Q.DB_NAME(), Q.DB_VERSION);
                } catch (a) {
                  return c(a);
                }
                e.onupgradeneeded = function () {
                  s("creating db");
                  var a = e.result;
                  a.createObjectStore(Q.DB_STORE_NAME);
                };
                e.onsuccess = function () {
                  var d = e.result;
                  d = d.transaction([Q.DB_STORE_NAME], "readwrite");
                  var f = d.objectStore(Q.DB_STORE_NAME),
                    g = 0,
                    h = 0,
                    i = a.length;
                  function j() {
                    h == 0 ? b() : c();
                  }
                  a.forEach(function (a) {
                    a = f.put(Q.analyzePath(a).object.contents, a);
                    a.onsuccess = function () {
                      g++, g + h == i && j();
                    };
                    a.onerror = function () {
                      h++, g + h == i && j();
                    };
                  });
                  d.onerror = c;
                };
                e.onerror = c;
              },
              loadFilesFromDB: function (a, b, c) {
                b = b || function () {};
                c = c || function () {};
                var d = Q.indexedDB();
                try {
                  var e = d.open(Q.DB_NAME(), Q.DB_VERSION);
                } catch (a) {
                  return c(a);
                }
                e.onupgradeneeded = c;
                e.onsuccess = function () {
                  var d = e.result;
                  try {
                    var f = d.transaction([Q.DB_STORE_NAME], "readonly");
                  } catch (a) {
                    c(a);
                    return;
                  }
                  var g = f.objectStore(Q.DB_STORE_NAME),
                    h = 0,
                    i = 0,
                    j = a.length;
                  function k() {
                    i == 0 ? b() : c();
                  }
                  a.forEach(function (a) {
                    var b = g.get(a);
                    b.onsuccess = function () {
                      Q.analyzePath(a).exists && Q.unlink(a),
                        Q.createDataFile(
                          M.dirname(a),
                          M.basename(a),
                          b.result,
                          !0,
                          !0,
                          !0
                        ),
                        h++,
                        h + i == j && k();
                    };
                    b.onerror = function () {
                      i++, h + i == j && k();
                    };
                  });
                  f.onerror = c;
                };
                e.onerror = c;
              },
            },
            R = {
              DEFAULT_POLLMASK: 5,
              calculateAt: function (a, b, c) {
                if (M.isAbs(b)) return b;
                var d;
                if (a === -100) d = Q.cwd();
                else {
                  a = R.getStreamFromFD(a);
                  d = a.path;
                }
                if (b.length == 0) {
                  if (!c) throw new Q.ErrnoError(44);
                  return d;
                }
                return M.join2(d, b);
              },
              doStat: function (a, b, c) {
                try {
                  var d = a(b);
                } catch (a) {
                  if (
                    a &&
                    a.node &&
                    M.normalize(b) !== M.normalize(Q.getPath(a.node))
                  )
                    return -54;
                  throw a;
                }
                C[c >> 2] = d.dev;
                C[(c + 8) >> 2] = d.ino;
                C[(c + 12) >> 2] = d.mode;
                D[(c + 16) >> 2] = d.nlink;
                C[(c + 20) >> 2] = d.uid;
                C[(c + 24) >> 2] = d.gid;
                C[(c + 28) >> 2] = d.rdev;
                (K = [
                  d.size >>> 0,
                  ((J = d.size),
                  +Math.abs(J) >= 1
                    ? J > 0
                      ? (Math.min(+Math.floor(J / 4294967296), 4294967295) |
                          0) >>>
                        0
                      : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                  (C[(c + 40) >> 2] = K[0]),
                  (C[(c + 44) >> 2] = K[1]);
                C[(c + 48) >> 2] = 4096;
                C[(c + 52) >> 2] = d.blocks;
                (K = [
                  Math.floor(d.atime.getTime() / 1e3) >>> 0,
                  ((J = Math.floor(d.atime.getTime() / 1e3)),
                  +Math.abs(J) >= 1
                    ? J > 0
                      ? (Math.min(+Math.floor(J / 4294967296), 4294967295) |
                          0) >>>
                        0
                      : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                  (C[(c + 56) >> 2] = K[0]),
                  (C[(c + 60) >> 2] = K[1]);
                D[(c + 64) >> 2] = 0;
                (K = [
                  Math.floor(d.mtime.getTime() / 1e3) >>> 0,
                  ((J = Math.floor(d.mtime.getTime() / 1e3)),
                  +Math.abs(J) >= 1
                    ? J > 0
                      ? (Math.min(+Math.floor(J / 4294967296), 4294967295) |
                          0) >>>
                        0
                      : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                  (C[(c + 72) >> 2] = K[0]),
                  (C[(c + 76) >> 2] = K[1]);
                D[(c + 80) >> 2] = 0;
                (K = [
                  Math.floor(d.ctime.getTime() / 1e3) >>> 0,
                  ((J = Math.floor(d.ctime.getTime() / 1e3)),
                  +Math.abs(J) >= 1
                    ? J > 0
                      ? (Math.min(+Math.floor(J / 4294967296), 4294967295) |
                          0) >>>
                        0
                      : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                  (C[(c + 88) >> 2] = K[0]),
                  (C[(c + 92) >> 2] = K[1]);
                D[(c + 96) >> 2] = 0;
                (K = [
                  d.ino >>> 0,
                  ((J = d.ino),
                  +Math.abs(J) >= 1
                    ? J > 0
                      ? (Math.min(+Math.floor(J / 4294967296), 4294967295) |
                          0) >>>
                        0
                      : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                  (C[(c + 104) >> 2] = K[0]),
                  (C[(c + 108) >> 2] = K[1]);
                return 0;
              },
              doMsync: function (a, b, c, d, e) {
                if (!Q.isFile(b.node.mode)) throw new Q.ErrnoError(43);
                if (d & 2) return 0;
                a = B.slice(a, a + c);
                Q.msync(b, a, e, c, d);
              },
              varargs: void 0,
              get: function () {
                R.varargs += 4;
                var a = C[(R.varargs - 4) >> 2];
                return a;
              },
              getStr: function (a) {
                a = fa(a);
                return a;
              },
              getStreamFromFD: function (a) {
                a = Q.getStream(a);
                if (!a) throw new Q.ErrnoError(8);
                return a;
              },
            };
          function Ma(a, b) {
            try {
              if (b === 0) return -28;
              var c = Q.cwd(),
                d = z(c) + 1;
              if (b < d) return -68;
              ga(c, a, b);
              return d;
            } catch (a) {
              if (typeof Q == "undefined" || !(a instanceof Q.ErrnoError))
                throw a;
              return -a.errno;
            }
          }
          function Na() {
            H("");
          }
          function Oa(a, b, c) {
            B.copyWithin(a, b, b + c);
          }
          function Pa() {
            return 2147483648;
          }
          function Qa(a) {
            try {
              v.grow((a - ha.byteLength + 65535) >>> 16);
              ia(v.buffer);
              return 1;
            } catch (a) {}
          }
          function Ra(a) {
            var b = B.length;
            a = a >>> 0;
            var c = Pa();
            if (a > c) return !1;
            var d = function (a, b) {
              return a + ((b - (a % b)) % b);
            };
            for (var e = 1; e <= 4; e *= 2) {
              var f = b * (1 + 0.2 / e);
              f = Math.min(f, a + 100663296);
              f = Math.min(c, d(Math.max(a, f), 65536));
              f = Qa(f);
              if (f) return !0;
            }
            return !1;
          }
          var Sa = {};
          function Ta() {
            return l || "./this.program";
          }
          function S() {
            if (!S.strings) {
              var a =
                (
                  (typeof navigator == "object" &&
                    navigator.languages &&
                    navigator.languages[0]) ||
                  "C"
                ).replace("-", "_") + ".UTF-8";
              a = {
                USER: "web_user",
                LOGNAME: "web_user",
                PATH: "/",
                PWD: "/",
                HOME: "/home/web_user",
                LANG: a,
                _: Ta(),
              };
              for (var b in Sa) Sa[b] === void 0 ? delete a[b] : (a[b] = Sa[b]);
              var c = [];
              for (var b in a) c.push(b + "=" + a[b]);
              S.strings = c;
            }
            return S.strings;
          }
          function Ua(b, a, c) {
            for (var d = 0; d < b.length; ++d) A[a++ >> 0] = b.charCodeAt(d);
            c || (A[a >> 0] = 0);
          }
          function Va(a, b) {
            var c = 0;
            S().forEach(function (d, e) {
              var f = b + c;
              D[(a + e * 4) >> 2] = f;
              Ua(d, f);
              c += d.length + 1;
            });
            return 0;
          }
          function Wa(a, b) {
            var c = S();
            D[a >> 2] = c.length;
            var d = 0;
            c.forEach(function (a) {
              d += a.length + 1;
            });
            D[b >> 2] = d;
            return 0;
          }
          function Xa(a) {
            a, na() || (w = !0), m(a, new Aa(a));
          }
          function Ya(a, b) {
            a, Xa(a);
          }
          j = Ya;
          function Za(a) {
            try {
              a = R.getStreamFromFD(a);
              Q.close(a);
              return 0;
            } catch (a) {
              if (typeof Q == "undefined" || !(a instanceof Q.ErrnoError))
                throw a;
              return a.errno;
            }
          }
          function $a(a, b) {
            return (b + 2097152) >>> 0 < 4194305 - !!a
              ? (a >>> 0) + b * 4294967296
              : NaN;
          }
          function ab(a, b, c, d, e) {
            try {
              b = $a(b, c);
              if (isNaN(b)) return 61;
              c = R.getStreamFromFD(a);
              Q.llseek(c, b, d);
              (K = [
                c.position >>> 0,
                ((J = c.position),
                +Math.abs(J) >= 1
                  ? J > 0
                    ? (Math.min(+Math.floor(J / 4294967296), 4294967295) |
                        0) >>>
                      0
                    : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
                (C[e >> 2] = K[0]),
                (C[(e + 4) >> 2] = K[1]);
              c.getdents && b === 0 && d === 0 && (c.getdents = null);
              return 0;
            } catch (a) {
              if (typeof Q == "undefined" || !(a instanceof Q.ErrnoError))
                throw a;
              return a.errno;
            }
          }
          function bb(a, b, c, d) {
            var e = 0;
            for (var f = 0; f < c; f++) {
              var g = D[b >> 2],
                h = D[(b + 4) >> 2];
              b += 8;
              g = Q.write(a, A, g, h, d);
              if (g < 0) return -1;
              e += g;
            }
            return e;
          }
          function cb(a, b, c, d) {
            try {
              a = R.getStreamFromFD(a);
              a = bb(a, b, c);
              D[d >> 2] = a;
              return 0;
            } catch (a) {
              if (typeof Q == "undefined" || !(a instanceof Q.ErrnoError))
                throw a;
              return a.errno;
            }
          }
          function T(a) {
            return ja.get(a);
          }
          function db(a) {
            a = c["_" + a];
            return a;
          }
          function eb(b, a) {
            A.set(b, a);
          }
          function fb(a, b, c, d, e) {
            var f = {
              string: function (a) {
                var b = 0;
                if (a !== null && a !== void 0 && a !== 0) {
                  var c = (a.length << 2) + 1;
                  b = ib(c);
                  ga(a, b, c);
                }
                return b;
              },
              array: function (a) {
                var b = ib(a.length);
                eb(a, b);
                return b;
              },
            };
            function g(a) {
              if (b === "string") return fa(a);
              return b === "boolean" ? Boolean(a) : a;
            }
            a = db(a);
            var h = [],
              i = 0;
            if (d)
              for (var j = 0; j < d.length; j++) {
                var k = f[c[j]];
                k ? (i === 0 && (i = Y()), (h[j] = k(d[j]))) : (h[j] = d[j]);
              }
            k = a.apply(null, h);
            function e(a) {
              i !== 0 && Z(i);
              return g(a);
            }
            k = e(k);
            return k;
          }
          p = function (a, b, c, d) {
            a || (a = this),
              (this.parent = a),
              (this.mount = a.mount),
              (this.mounted = null),
              (this.id = Q.nextInode++),
              (this.name = b),
              (this.mode = c),
              (this.node_ops = {}),
              (this.stream_ops = {}),
              (this.rdev = d);
          };
          var U = 292 | 73,
            V = 146;
          Object.defineProperties(p.prototype, {
            read: {
              get: function () {
                return (this.mode & U) === U;
              },
              set: function (a) {
                a ? (this.mode |= U) : (this.mode &= ~U);
              },
            },
            write: {
              get: function () {
                return (this.mode & V) === V;
              },
              set: function (a) {
                a ? (this.mode |= V) : (this.mode &= ~V);
              },
            },
            isFolder: {
              get: function () {
                return Q.isDir(this.mode);
              },
            },
            isDevice: {
              get: function () {
                return Q.isChrdev(this.mode);
              },
            },
          });
          Q.FSNode = p;
          Q.staticInit();
          var gb = {
            t: Ca,
            a: Fa,
            s: Ha,
            b: Ea,
            n: Ma,
            u: Na,
            o: Oa,
            m: Ra,
            q: Va,
            r: Wa,
            k: j,
            p: Za,
            l: ab,
            h: cb,
            f: qb,
            i: pb,
            g: nb,
            v: tb,
            w: sb,
            c: ob,
            d: lb,
            e: mb,
            j: rb,
          };
          za();
          c.___wasm_call_ctors = function () {
            return (c.___wasm_call_ctors = c.asm.y).apply(null, arguments);
          };
          c._encode_progressive_jpeg = function () {
            return (c._encode_progressive_jpeg = c.asm.A).apply(
              null,
              arguments
            );
          };
          var hb = (c._malloc = function () {
            return (hb = c._malloc = c.asm.B).apply(null, arguments);
          });
          c._free = function () {
            return (c._free = c.asm.C).apply(null, arguments);
          };
          var W = (c._setThrew = function () {
              return (W = c._setThrew = c.asm.D).apply(null, arguments);
            }),
            X = (c.setTempRet0 = function () {
              return (X = c.setTempRet0 = c.asm.E).apply(null, arguments);
            }),
            Y = (c.stackSave = function () {
              return (Y = c.stackSave = c.asm.F).apply(null, arguments);
            }),
            Z = (c.stackRestore = function () {
              return (Z = c.stackRestore = c.asm.G).apply(null, arguments);
            }),
            ib = (c.stackAlloc = function () {
              return (ib = c.stackAlloc = c.asm.H).apply(null, arguments);
            }),
            jb = (c.___cxa_can_catch = function () {
              return (jb = c.___cxa_can_catch = c.asm.I).apply(null, arguments);
            }),
            kb = (c.___cxa_is_pointer_type = function () {
              return (kb = c.___cxa_is_pointer_type = c.asm.J).apply(
                null,
                arguments
              );
            });
          function lb(a, b, c) {
            var d = Y();
            try {
              T(a)(b, c);
            } catch (a) {
              Z(d);
              if (a !== a + 0) throw a;
              W(1, 0);
            }
          }
          function mb(a, b, c, d) {
            var e = Y();
            try {
              T(a)(b, c, d);
            } catch (a) {
              Z(e);
              if (a !== a + 0) throw a;
              W(1, 0);
            }
          }
          function nb(a, b, c, d) {
            var e = Y();
            try {
              return T(a)(b, c, d);
            } catch (a) {
              Z(e);
              if (a !== a + 0) throw a;
              W(1, 0);
            }
          }
          function ob(a, b) {
            var c = Y();
            try {
              T(a)(b);
            } catch (a) {
              Z(c);
              if (a !== a + 0) throw a;
              W(1, 0);
            }
          }
          function pb(a, b, c) {
            var d = Y();
            try {
              return T(a)(b, c);
            } catch (a) {
              Z(d);
              if (a !== a + 0) throw a;
              W(1, 0);
            }
          }
          function qb(a, b) {
            var c = Y();
            try {
              return T(a)(b);
            } catch (a) {
              Z(c);
              if (a !== a + 0) throw a;
              W(1, 0);
            }
          }
          function rb(a, b, c, d, e, f) {
            var g = Y();
            try {
              T(a)(b, c, d, e, f);
            } catch (a) {
              Z(g);
              if (a !== a + 0) throw a;
              W(1, 0);
            }
          }
          function sb(a) {
            var b = Y();
            try {
              T(a)();
            } catch (a) {
              Z(b);
              if (a !== a + 0) throw a;
              W(1, 0);
            }
          }
          function tb(a, b, c, d, e, f) {
            var g = Y();
            try {
              return T(a)(b, c, d, e, f);
            } catch (a) {
              Z(g);
              if (a !== a + 0) throw a;
              W(1, 0);
            }
          }
          c.ccall = fb;
          var $;
          F = function a() {
            $ || ub(), $ || (F = a);
          };
          function ub(a) {
            a || k;
            if (E > 0) return;
            oa();
            if (E > 0) return;
            function b() {
              if ($) return;
              $ = !0;
              c.calledRun = !0;
              if (w) return;
              pa();
              d(c);
              qa();
            }
            b();
          }
          ub();
          return c.ready;
        };
      })();
    typeof f === "object" && typeof e === "object"
      ? (e.exports = h)
      : typeof define === "function" && define.amd
      ? define([], function () {
          return h;
        })
      : typeof f === "object" && (f.Module = h);
  },
  null
);
__d(
  "WAPromiseCallSync",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    function a(a, c) {
      try {
        for (
          var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2;
          f < d;
          f++
        )
          e[f - 2] = arguments[f];
        return (g || (g = b("Promise"))).resolve(a.apply(c, e));
      } catch (a) {
        return (g || (g = b("Promise"))).reject(a);
      }
    }
    f.promiseCallSync = a;
  },
  66
);
__d(
  "WAPromiseManagement",
  ["WAPromiseCallSync"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = null,
        c = function () {
          b ||
            (b = d("WAPromiseCallSync")
              .promiseCallSync(a)
              ["finally"](function () {
                b = null;
              }));
          return b;
        };
      c.isPending = function () {
        return !!b;
      };
      return c;
    }
    function b(a, b) {
      var c = new Map();
      return function (d) {
        var e = a(d),
          f = c.get(e);
        if (f) return f;
        try {
          f = Promise.resolve(b(d));
        } catch (a) {
          f = Promise.reject(a);
        }
        d = f["finally"](function () {
          return void c["delete"](e);
        });
        c.set(e, d);
        return d;
      };
    }
    var h = new Set();
    function c(a) {
      h.add(a),
        a["finally"](function () {
          h["delete"](a);
        });
    }
    g.nullaryCacheWhilePending = a;
    g.cacheWhilePending = b;
    g.preventGarbageCollection = c;
  },
  98
);
__d(
  "FBLogger",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").FBLogger;
  },
  98
);
__d(
  "unrecoverableViolation",
  ["FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d, e) {
      d = d === void 0 ? {} : d;
      d = d.error;
      b = c("FBLogger")(b);
      d ? (b = b.catching(d)) : (b = b.blameToPreviousFrame());
      for (
        d = 0;
        d < ((f = e == null ? void 0 : e.blameToPreviousFrame) != null ? f : 0);
        ++d
      ) {
        var f;
        b = b.blameToPreviousFrame();
      }
      f = e == null ? void 0 : e.categoryKey;
      f != null && (b = b.addToCategoryKey(f));
      return b.mustfixThrow(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "bx",
  ["unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    var h = {};
    function a(a) {
      var b = h[a];
      if (!b)
        throw c("unrecoverableViolation")(
          "bx" + ('(...): Unknown file path "' + a + '"'),
          "staticresources"
        );
      return b;
    }
    a.add = function (a, b) {
      var c = !1;
      for (c in a)
        b && b.entry++,
          !(c in h)
            ? ((a[c].loggingID = c), (h[c] = a[c]))
            : b && b.dup_entry++;
    };
    a.getURL = function (a) {
      return a.uri;
    };
    g["default"] = a;
  },
  98
);
__d(
  "WALoadMozjpegWasm",
  ["Promise", "WAMozjpegWasm", "WAPromiseManagement", "bx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = null,
      j = c("bx").getURL(c("bx")("236"));
    function a() {
      return i != null
        ? (h || (h = b("Promise"))).resolve(i)
        : k().then(function (a) {
            i = a;
            return i;
          });
    }
    var k = d("WAPromiseManagement").cacheWhilePending(
      function () {
        return "all";
      },
      function () {
        return c("WAMozjpegWasm")({
          locateFile: function () {
            return j;
          },
        });
      }
    );
    g.loadMozjpegWasm = a;
  },
  98
);
__d(
  "$InternalEnum",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty,
      h = typeof WeakMap === "function" ? new WeakMap() : new Map();
    function i(a) {
      var b = h.get(a);
      if (b !== void 0) return b;
      var c = new Map();
      Object.getOwnPropertyNames(a).forEach(function (b) {
        c.set(a[b], b);
      });
      try {
        h.set(a, c);
      } catch (a) {}
      return c;
    }
    var j = Object.freeze(
      Object.defineProperties(Object.create(null), {
        isValid: {
          value: function (a) {
            return i(this).has(a);
          },
        },
        cast: {
          value: function (a) {
            return this.isValid(a) ? a : void 0;
          },
        },
        members: {
          value: function () {
            return i(this).keys();
          },
        },
        getName: {
          value: function (a) {
            return i(this).get(a);
          },
        },
      })
    );
    function a(a) {
      var b = Object.create(j);
      for (var c in a)
        g.call(a, c) && Object.defineProperty(b, c, { value: a[c] });
      return Object.freeze(b);
    }
    var k = Object.freeze(
      Object.defineProperties(Object.create(null), {
        isValid: {
          value: function (a) {
            return typeof a === "string" ? g.call(this, a) : !1;
          },
        },
        cast: { value: j.cast },
        members: {
          value: function () {
            return Object.getOwnPropertyNames(this).values();
          },
        },
        getName: {
          value: function (a) {
            return a;
          },
        },
      })
    );
    a.Mirrored = function (a) {
      var b = Object.create(k);
      for (var c = 0, d = a.length; c < d; ++c)
        Object.defineProperty(b, a[c], { value: a[c] });
      return Object.freeze(b);
    };
    Object.freeze(a.Mirrored);
    e.exports = Object.freeze(a);
  },
  null
);
__d(
  "WALogger",
  ["$InternalEnum", "WATagsLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "UNCAUGHT_EXCEPTION_SAD",
      "UNHANDLED_REJECTED_PROMISE_SAD",
      "CRASH_OR_UNRECOVERABLE_ERROR_SAD",
      "USER_FORCEFULLY_LOGGED_OUT_SAD",
      "PERFORMANCE_OBSERVER_LONGTASK_SAD",
      "UNCATEGORIZED_SAD",
      "EXTREMELY_BAD_USER_EXPERIENCE_SAD",
      "UNCAUGHT_EXCEPTION",
      "UNHANDLED_REJECTED_PROMISE",
      "MINOR_ISSUE",
      "INVESTIGATION",
      "COUNTING_STAT",
      "UNCATEGORIZED",
    ]);
    c = new Set([
      a.UNCATEGORIZED_SAD,
      a.UNCAUGHT_EXCEPTION_SAD,
      a.UNHANDLED_REJECTED_PROMISE_SAD,
      a.CRASH_OR_UNRECOVERABLE_ERROR_SAD,
      a.USER_FORCEFULLY_LOGGED_OUT_SAD,
      a.EXTREMELY_BAD_USER_EXPERIENCE_SAD,
      a.PERFORMANCE_OBSERVER_LONGTASK_SAD,
    ]);
    e = d("WATagsLogger").TAGS([]);
    f = e.COUNT;
    b = e.DEV;
    d = e.DEV_XMPP;
    var h = e.LOG,
      i = e.WARN,
      j = e.ERROR;
    e = e.EXPECTED_ERROR;
    g.SendLogsType = a;
    g.SadSendLogsTypes = c;
    g.COUNT = f;
    g.DEV = b;
    g.DEV_XMPP = d;
    g.LOG = h;
    g.WARN = i;
    g.ERROR = j;
    g.EXPECTED_ERROR = e;
  },
  98
);
__d(
  "WAMozjpegWasmV2",
  ["Promise"],
  function (a, b, c, d, e, f) {
    var g,
      h = (function (a) {
        var c =
          typeof document != "undefined"
            ? (a = document.currentScript) == null
              ? void 0
              : a.src
            : void 0;
        return function (d) {
          d === void 0 && (d = {});
          var a = d,
            f,
            i;
          d = new (g || (g = b("Promise")))(function (a, b) {
            (f = a), (i = b);
          });
          var j = !1,
            k = !0,
            l = Object.assign({}, a),
            m = "./this.program",
            aa = function (a, b) {
              throw b;
            },
            n = "";
          function ba(a) {
            return n + a;
          }
          var o, p;
          (j || k) &&
            (k
              ? (n = self.location.href)
              : typeof document != "undefined" &&
                document.currentScript &&
                (n = document.currentScript.src),
            c && (n = c),
            n.startsWith("blob:")
              ? (n = "")
              : (n = n.substr(0, n.replace(/[?#].*/, "").lastIndexOf("/") + 1)),
            (k &&
              (p = function (a) {
                var b = new XMLHttpRequest();
                b.open("GET", a, !1);
                b.responseType = "arraybuffer";
                b.send(null);
                return new Uint8Array(b.response);
              }),
            (o = function (a) {
              return fetch(a, { credentials: "same-origin" }).then(function (
                a
              ) {
                return a.ok
                  ? a.arrayBuffer()
                  : (g || (g = b("Promise"))).reject(
                      new Error(a.status + " : " + a.url)
                    );
              });
            })));
          var q = emptyFunction.bind(console),
            r = emptyFunction.bind(console);
          Object.assign(a, l);
          l = null;
          var s,
            t,
            u = !1,
            v,
            w,
            x,
            y;
          function ca() {
            var b = t.buffer;
            a.HEAP8 = v = new Int8Array(b);
            a.HEAP16 = new Int16Array(b);
            a.HEAPU8 = w = new Uint8Array(b);
            a.HEAPU16 = new Uint16Array(b);
            a.HEAP32 = x = new Int32Array(b);
            a.HEAPU32 = y = new Uint32Array(b);
            a.HEAPF32 = new Float32Array(b);
            a.HEAPF64 = new Float64Array(b);
          }
          var da = [],
            ea = [],
            fa = [];
          function ga() {
            I(da);
          }
          function ha() {
            !a.noFSInit && !V.init.initialized && V.init(),
              (V.ignorePermissions = !1),
              T.init(),
              I(ea);
          }
          function ia() {
            I(fa);
          }
          function ja(a) {
            ea.unshift(a);
          }
          var z = 0,
            A = null,
            B = null;
          function ka(a) {
            return a;
          }
          function C(a) {
            z++;
          }
          function D(a) {
            z--;
            if (z == 0) {
              A !== null && (clearInterval(A), (A = null));
              if (B) {
                a = B;
                B = null;
                a();
              }
            }
          }
          function E(a) {
            a = "Aborted(" + a + ")";
            r(a);
            u = !0;
            a += ". Build with -sASSERTIONS for more info.";
            a = new WebAssembly.RuntimeError(a);
            i(a);
            throw a;
          }
          var la = "data:application/octet-stream;base64,",
            ma = function (a) {
              return a.startsWith(la);
            };
          function na() {
            var a = "WAMozjpegWasm.wasm";
            return !ma(a) ? ba(a) : a;
          }
          var F;
          function oa(a) {
            if (a == F && s) return new Uint8Array(s);
            if (p) return p(a);
            throw "both async and sync fetching of the wasm failed";
          }
          function pa(a) {
            return !s
              ? o(a).then(
                  function (a) {
                    return new Uint8Array(a);
                  },
                  function () {
                    return oa(a);
                  }
                )
              : (g || (g = b("Promise"))).resolve().then(function () {
                  return oa(a);
                });
          }
          function qa(a, b, c) {
            return pa(a)
              .then(function (a) {
                return WebAssembly.instantiate(a, b);
              })
              .then(c, function (a) {
                r("failed to asynchronously prepare wasm: " + a), E(a);
              });
          }
          function ra(a, b, c, d) {
            return !a &&
              typeof WebAssembly.instantiateStreaming == "function" &&
              !ma(b) &&
              typeof fetch == "function"
              ? fetch(b, { credentials: "same-origin" }).then(function (a) {
                  a = WebAssembly.instantiateStreaming(a, c);
                  return a.then(d, function (a) {
                    r("wasm streaming compile failed: " + a);
                    r("falling back to ArrayBuffer instantiation");
                    return qa(b, c, d);
                  });
                })
              : qa(b, c, d);
          }
          function sa() {
            return { a: rb };
          }
          function ta() {
            var b = sa();
            function c(c, b) {
              Y = c.exports;
              t = Y.x;
              a.wasmMemory = t;
              ca();
              lb = Y.A;
              ja(Y.y);
              D("wasm-instantiate");
              return Y;
            }
            C("wasm-instantiate");
            function d(a) {
              c(a.instance);
            }
            if (a.instantiateWasm)
              try {
                return a.instantiateWasm(b, c);
              } catch (a) {
                r("Module.instantiateWasm callback failed with error: " + a),
                  i(a);
              }
            F || (F = na());
            ra(s, F, b, d)["catch"](i);
            return {};
          }
          var G, H;
          function ua(a) {
            (this.name = "ExitStatus"),
              (this.message = "Program terminated with exit(" + a + ")"),
              (this.status = a);
          }
          var I = function (b) {
              while (b.length > 0) b.shift()(a);
            },
            J = function (a) {
              return tb(a);
            },
            K = function () {
              return vb();
            },
            va = [],
            wa = 0;
          j = function (a) {
            a = new M(a);
            a.get_caught() || (a.set_caught(!0), wa--);
            a.set_rethrown(!1);
            va.push(a);
            wb(a.excPtr);
            return a.get_exception_ptr();
          };
          var L = 0,
            M = (function () {
              "use strict";
              function a(a) {
                (this.excPtr = a), (this.ptr = a - 24);
              }
              var b = a.prototype;
              b.set_type = function (a) {
                y[(this.ptr + 4) >> 2] = a;
              };
              b.get_type = function () {
                return y[(this.ptr + 4) >> 2];
              };
              b.set_destructor = function (a) {
                y[(this.ptr + 8) >> 2] = a;
              };
              b.get_destructor = function () {
                return y[(this.ptr + 8) >> 2];
              };
              b.set_caught = function (a) {
                (a = a ? 1 : 0), (v[this.ptr + 12] = a);
              };
              b.get_caught = function () {
                return v[this.ptr + 12] != 0;
              };
              b.set_rethrown = function (a) {
                (a = a ? 1 : 0), (v[this.ptr + 13] = a);
              };
              b.get_rethrown = function () {
                return v[this.ptr + 13] != 0;
              };
              b.init = function (a, b) {
                this.set_adjusted_ptr(0),
                  this.set_type(a),
                  this.set_destructor(b);
              };
              b.set_adjusted_ptr = function (a) {
                y[(this.ptr + 16) >> 2] = a;
              };
              b.get_adjusted_ptr = function () {
                return y[(this.ptr + 16) >> 2];
              };
              b.get_exception_ptr = function () {
                var a = yb(this.get_type());
                if (a) return y[this.excPtr >> 2];
                a = this.get_adjusted_ptr();
                return a !== 0 ? a : this.excPtr;
              };
              return a;
            })();
          l = function (a) {
            L || (L = a);
            throw L;
          };
          var N = function (a) {
              return sb(a);
            },
            xa = function (a) {
              var b = L;
              if (!b) {
                N(0);
                return 0;
              }
              var c = new M(b);
              c.set_adjusted_ptr(b);
              var d = c.get_type();
              if (!d) {
                N(0);
                return b;
              }
              for (a of a) {
                if (a === 0 || a === d) break;
                var e = c.ptr + 16;
                if (xb(a, d, e)) {
                  N(a);
                  return b;
                }
              }
              N(d);
              return b;
            },
            ya = function () {
              return xa([]);
            },
            za = function (a) {
              return xa([a]);
            },
            Aa = function (a, b, c) {
              var d = new M(a);
              d.init(b, c);
              L = a;
              wa++;
              throw L;
            },
            O = function (a) {
              var b = 0;
              for (var c = 0; c < a.length; ++c) {
                var d = a.charCodeAt(c);
                d <= 127
                  ? b++
                  : d <= 2047
                  ? (b += 2)
                  : d >= 55296 && d <= 57343
                  ? ((b += 4), ++c)
                  : (b += 3);
              }
              return b;
            },
            P = function (a, b, c, d) {
              if (!(d > 0)) return 0;
              var e = c;
              d = c + d - 1;
              for (var f = 0; f < a.length; ++f) {
                var g = a.charCodeAt(f);
                if (g >= 55296 && g <= 57343) {
                  var h = a.charCodeAt(++f);
                  g = (65536 + ((g & 1023) << 10)) | (h & 1023);
                }
                if (g <= 127) {
                  if (c >= d) break;
                  b[c++] = g;
                } else if (g <= 2047) {
                  if (c + 1 >= d) break;
                  b[c++] = 192 | (g >> 6);
                  b[c++] = 128 | (g & 63);
                } else if (g <= 65535) {
                  if (c + 2 >= d) break;
                  b[c++] = 224 | (g >> 12);
                  b[c++] = 128 | ((g >> 6) & 63);
                  b[c++] = 128 | (g & 63);
                } else {
                  if (c + 3 >= d) break;
                  b[c++] = 240 | (g >> 18);
                  b[c++] = 128 | ((g >> 12) & 63);
                  b[c++] = 128 | ((g >> 6) & 63);
                  b[c++] = 128 | (g & 63);
                }
              }
              b[c] = 0;
              return c - e;
            },
            Ba = function (a, b, c) {
              return P(a, w, b, c);
            };
          function Ca(a, b) {
            try {
              if (b === 0) return -28;
              var c = V.cwd(),
                d = O(c) + 1;
              if (b < d) return -68;
              Ba(c, a, b);
              return d;
            } catch (a) {
              if (typeof V == "undefined" || !(a.name === "ErrnoError"))
                throw a;
              return -a.errno;
            }
          }
          var Da = function () {
              E("");
            },
            Ea = function (a, b, c) {
              return w.copyWithin(a, b, b + c);
            },
            Fa = function () {
              return 629145600;
            },
            Ga = function (a) {
              var b = t.buffer;
              a = (a - b.byteLength + 65535) / 65536;
              try {
                t.grow(a);
                ca();
                return 1;
              } catch (a) {}
            },
            Ha = function (a) {
              var b = w.length;
              a >>>= 0;
              var c = Fa();
              if (a > c) return !1;
              var d = function (a, b) {
                return a + ((b - (a % b)) % b);
              };
              for (var e = 1; e <= 4; e *= 2) {
                var f = b * (1 + 0.2 / e);
                f = Math.min(f, a + 100663296);
                f = Math.min(c, d(Math.max(a, f), 65536));
                f = Ga(f);
                if (f) return !0;
              }
              return !1;
            },
            Ia = {},
            Ja = function () {
              return m || "./this.program";
            },
            Ka = function a() {
              if (!a.strings) {
                var b =
                  (
                    (typeof navigator == "object" &&
                      navigator.languages &&
                      navigator.languages[0]) ||
                    "C"
                  ).replace("-", "_") + ".UTF-8";
                b = {
                  USER: "web_user",
                  LOGNAME: "web_user",
                  PATH: "/",
                  PWD: "/",
                  HOME: "/home/web_user",
                  LANG: b,
                  _: Ja(),
                };
                for (var c in Ia)
                  Ia[c] === void 0 ? delete b[c] : (b[c] = Ia[c]);
                var d = [];
                for (var c in b) d.push(c + "=" + b[c]);
                a.strings = d;
              }
              return a.strings;
            },
            La = function (a, b) {
              for (var c = 0; c < a.length; ++c) v[b++] = a.charCodeAt(c);
              v[b] = 0;
            },
            Ma = function (a, b) {
              var c = 0;
              Ka().forEach(function (d, e) {
                var f = b + c;
                y[(a + e * 4) >> 2] = f;
                La(d, f);
                c += d.length + 1;
              });
              return 0;
            },
            Na = function (a, b) {
              var c = Ka();
              y[a >> 2] = c.length;
              var d = 0;
              c.forEach(function (a) {
                return (d += a.length + 1);
              });
              y[b >> 2] = d;
              return 0;
            },
            Oa = 0,
            Pa = function () {
              return Oa > 0;
            },
            Qa = function (a) {
              a, Pa() || (u = !0), aa(a, new ua(a));
            },
            Ra = function (a, b) {
              a, Qa(a);
            };
          Ra = Ra;
          var Q = {
              isAbs: function (a) {
                return a.charAt(0) === "/";
              },
              splitPath: function (a) {
                var b =
                  /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
                return b.exec(a).slice(1);
              },
              normalizeArray: function (a, b) {
                var c = 0;
                for (var d = a.length - 1; d >= 0; d--) {
                  var e = a[d];
                  e === "."
                    ? a.splice(d, 1)
                    : e === ".."
                    ? (a.splice(d, 1), c++)
                    : c && (a.splice(d, 1), c--);
                }
                if (b) for (; c; c--) a.unshift("..");
                return a;
              },
              normalize: function (a) {
                var b = Q.isAbs(a),
                  c = a.substr(-1) === "/";
                a = Q.normalizeArray(
                  a.split("/").filter(function (a) {
                    return !!a;
                  }),
                  !b
                ).join("/");
                !a && !b && (a = ".");
                a && c && (a += "/");
                return (b ? "/" : "") + a;
              },
              dirname: function (a) {
                a = Q.splitPath(a);
                var b = a[0];
                a = a[1];
                if (!b && !a) return ".";
                a && (a = a.substr(0, a.length - 1));
                return b + a;
              },
              basename: function (a) {
                if (a === "/") return "/";
                a = Q.normalize(a);
                a = a.replace(/\/$/, "");
                var b = a.lastIndexOf("/");
                return b === -1 ? a : a.substr(b + 1);
              },
              join: function () {
                for (
                  var a = arguments.length, b = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  b[c] = arguments[c];
                return Q.normalize(b.join("/"));
              },
              join2: function (a, b) {
                return Q.normalize(a + "/" + b);
              },
            },
            Sa = function () {
              if (
                typeof crypto == "object" &&
                typeof crypto.getRandomValues == "function"
              )
                return function (a) {
                  return crypto.getRandomValues(a);
                };
              else E("initRandomDevice");
            },
            Ta = function (a) {
              return (Ta = Sa())(a);
            },
            R = {
              resolve: function () {
                var a = "",
                  b = !1;
                for (var c = arguments.length - 1; c >= -1 && !b; c--) {
                  var d =
                    c >= 0
                      ? c < 0 || arguments.length <= c
                        ? void 0
                        : arguments[c]
                      : V.cwd();
                  if (typeof d != "string")
                    throw new TypeError(
                      "Arguments to path.resolve must be strings"
                    );
                  else if (!d) return "";
                  a = d + "/" + a;
                  b = Q.isAbs(d);
                }
                a = Q.normalizeArray(
                  a.split("/").filter(function (a) {
                    return !!a;
                  }),
                  !b
                ).join("/");
                return (b ? "/" : "") + a || ".";
              },
              relative: function (a, b) {
                a = R.resolve(a).substr(1);
                b = R.resolve(b).substr(1);
                function c(a) {
                  var b = 0;
                  for (; b < a.length; b++) if (a[b] !== "") break;
                  var c = a.length - 1;
                  for (; c >= 0; c--) if (a[c] !== "") break;
                  return b > c ? [] : a.slice(b, c - b + 1);
                }
                a = c(a.split("/"));
                c = c(b.split("/"));
                b = Math.min(a.length, c.length);
                var d = b;
                for (var e = 0; e < b; e++)
                  if (a[e] !== c[e]) {
                    d = e;
                    break;
                  }
                b = [];
                for (var e = d; e < a.length; e++) b.push("..");
                b = b.concat(c.slice(d));
                return b.join("/");
              },
            },
            Ua = typeof TextDecoder != "undefined" ? new TextDecoder() : void 0,
            S = function (a, b, c) {
              c = b + c;
              var d = b;
              while (a[d] && !(d >= c)) ++d;
              if (d - b > 16 && a.buffer && Ua)
                return Ua.decode(a.subarray(b, d));
              c = "";
              while (b < d) {
                var e = a[b++];
                if (!(e & 128)) {
                  c += String.fromCharCode(e);
                  continue;
                }
                var f = a[b++] & 63;
                if ((e & 224) == 192) {
                  c += String.fromCharCode(((e & 31) << 6) | f);
                  continue;
                }
                var g = a[b++] & 63;
                (e & 240) == 224
                  ? (e = ((e & 15) << 12) | (f << 6) | g)
                  : (e =
                      ((e & 7) << 18) | (f << 12) | (g << 6) | (a[b++] & 63));
                if (e < 65536) c += String.fromCharCode(e);
                else {
                  f = e - 65536;
                  c += String.fromCharCode(
                    55296 | (f >> 10),
                    56320 | (f & 1023)
                  );
                }
              }
              return c;
            },
            Va = [];
          function Wa(a, b, c) {
            c = c > 0 ? c : O(a) + 1;
            c = new Array(c);
            a = P(a, c, 0, c.length);
            b && (c.length = a);
            return c;
          }
          var Xa = function () {
              if (!Va.length) {
                var a = null;
                if (!a) return null;
                Va = Wa(a, !0);
              }
              return Va.shift();
            },
            T = {
              ttys: [],
              init: function () {},
              shutdown: function () {},
              register: function (a, b) {
                (T.ttys[a] = { input: [], output: [], ops: b }),
                  V.registerDevice(a, T.stream_ops);
              },
              stream_ops: {
                open: function (a) {
                  var b = T.ttys[a.node.rdev];
                  if (!b) throw new V.ErrnoError(43);
                  a.tty = b;
                  a.seekable = !1;
                },
                close: function (a) {
                  a.tty.ops.fsync(a.tty);
                },
                fsync: function (a) {
                  a.tty.ops.fsync(a.tty);
                },
                read: function (a, b, c, d, e) {
                  if (!a.tty || !a.tty.ops.get_char) throw new V.ErrnoError(60);
                  e = 0;
                  for (var f = 0; f < d; f++) {
                    var g;
                    try {
                      g = a.tty.ops.get_char(a.tty);
                    } catch (a) {
                      throw new V.ErrnoError(29);
                    }
                    if (g === void 0 && e === 0) throw new V.ErrnoError(6);
                    if (g === null || g === void 0) break;
                    e++;
                    b[c + f] = g;
                  }
                  e && (a.node.timestamp = Date.now());
                  return e;
                },
                write: function (a, b, c, d, e) {
                  if (!a.tty || !a.tty.ops.put_char) throw new V.ErrnoError(60);
                  try {
                    for (var f = 0; f < d; f++)
                      a.tty.ops.put_char(a.tty, b[c + f]);
                  } catch (a) {
                    throw new V.ErrnoError(29);
                  }
                  d && (a.node.timestamp = Date.now());
                  return f;
                },
              },
              default_tty_ops: {
                get_char: function (a) {
                  return Xa();
                },
                put_char: function (a, b) {
                  b === null || b === 10
                    ? (q(S(a.output, 0)), (a.output = []))
                    : b != 0 && a.output.push(b);
                },
                fsync: function (a) {
                  a.output &&
                    a.output.length > 0 &&
                    (q(S(a.output, 0)), (a.output = []));
                },
                ioctl_tcgets: function (a) {
                  return {
                    c_iflag: 25856,
                    c_oflag: 5,
                    c_cflag: 191,
                    c_lflag: 35387,
                    c_cc: [
                      3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    ],
                  };
                },
                ioctl_tcsets: function (a, b, c) {
                  return 0;
                },
                ioctl_tiocgwinsz: function (a) {
                  return [24, 80];
                },
              },
              default_tty1_ops: {
                put_char: function (a, b) {
                  b === null || b === 10
                    ? (r(S(a.output, 0)), (a.output = []))
                    : b != 0 && a.output.push(b);
                },
                fsync: function (a) {
                  a.output &&
                    a.output.length > 0 &&
                    (r(S(a.output, 0)), (a.output = []));
                },
              },
            },
            Ya = function (a) {
              E();
            },
            U = {
              ops_table: null,
              mount: function (a) {
                return U.createNode(null, "/", 16384 | 511, 0);
              },
              createNode: function (a, b, c, d) {
                if (V.isBlkdev(c) || V.isFIFO(c)) throw new V.ErrnoError(63);
                U.ops_table ||
                  (U.ops_table = {
                    dir: {
                      node: {
                        getattr: U.node_ops.getattr,
                        setattr: U.node_ops.setattr,
                        lookup: U.node_ops.lookup,
                        mknod: U.node_ops.mknod,
                        rename: U.node_ops.rename,
                        unlink: U.node_ops.unlink,
                        rmdir: U.node_ops.rmdir,
                        readdir: U.node_ops.readdir,
                        symlink: U.node_ops.symlink,
                      },
                      stream: { llseek: U.stream_ops.llseek },
                    },
                    file: {
                      node: {
                        getattr: U.node_ops.getattr,
                        setattr: U.node_ops.setattr,
                      },
                      stream: {
                        llseek: U.stream_ops.llseek,
                        read: U.stream_ops.read,
                        write: U.stream_ops.write,
                        allocate: U.stream_ops.allocate,
                        mmap: U.stream_ops.mmap,
                        msync: U.stream_ops.msync,
                      },
                    },
                    link: {
                      node: {
                        getattr: U.node_ops.getattr,
                        setattr: U.node_ops.setattr,
                        readlink: U.node_ops.readlink,
                      },
                      stream: {},
                    },
                    chrdev: {
                      node: {
                        getattr: U.node_ops.getattr,
                        setattr: U.node_ops.setattr,
                      },
                      stream: V.chrdev_stream_ops,
                    },
                  });
                c = V.createNode(a, b, c, d);
                V.isDir(c.mode)
                  ? ((c.node_ops = U.ops_table.dir.node),
                    (c.stream_ops = U.ops_table.dir.stream),
                    (c.contents = {}))
                  : V.isFile(c.mode)
                  ? ((c.node_ops = U.ops_table.file.node),
                    (c.stream_ops = U.ops_table.file.stream),
                    (c.usedBytes = 0),
                    (c.contents = null))
                  : V.isLink(c.mode)
                  ? ((c.node_ops = U.ops_table.link.node),
                    (c.stream_ops = U.ops_table.link.stream))
                  : V.isChrdev(c.mode) &&
                    ((c.node_ops = U.ops_table.chrdev.node),
                    (c.stream_ops = U.ops_table.chrdev.stream));
                c.timestamp = Date.now();
                a && ((a.contents[b] = c), (a.timestamp = c.timestamp));
                return c;
              },
              getFileDataAsTypedArray: function (a) {
                if (!a.contents) return new Uint8Array(0);
                return a.contents.subarray
                  ? a.contents.subarray(0, a.usedBytes)
                  : new Uint8Array(a.contents);
              },
              expandFileStorage: function (a, b) {
                var c = a.contents ? a.contents.length : 0;
                if (c >= b) return;
                var d = 1024 * 1024;
                b = Math.max(b, (c * (c < d ? 2 : 1.125)) >>> 0);
                c != 0 && (b = Math.max(b, 256));
                d = a.contents;
                a.contents = new Uint8Array(b);
                a.usedBytes > 0 &&
                  a.contents.set(d.subarray(0, a.usedBytes), 0);
              },
              resizeFileStorage: function (a, b) {
                if (a.usedBytes == b) return;
                if (b == 0) (a.contents = null), (a.usedBytes = 0);
                else {
                  var c = a.contents;
                  a.contents = new Uint8Array(b);
                  c && a.contents.set(c.subarray(0, Math.min(b, a.usedBytes)));
                  a.usedBytes = b;
                }
              },
              node_ops: {
                getattr: function (a) {
                  var b = {};
                  b.dev = V.isChrdev(a.mode) ? a.id : 1;
                  b.ino = a.id;
                  b.mode = a.mode;
                  b.nlink = 1;
                  b.uid = 0;
                  b.gid = 0;
                  b.rdev = a.rdev;
                  V.isDir(a.mode)
                    ? (b.size = 4096)
                    : V.isFile(a.mode)
                    ? (b.size = a.usedBytes)
                    : V.isLink(a.mode)
                    ? (b.size = a.link.length)
                    : (b.size = 0);
                  b.atime = new Date(a.timestamp);
                  b.mtime = new Date(a.timestamp);
                  b.ctime = new Date(a.timestamp);
                  b.blksize = 4096;
                  b.blocks = Math.ceil(b.size / b.blksize);
                  return b;
                },
                setattr: function (a, b) {
                  b.mode !== void 0 && (a.mode = b.mode),
                    b.timestamp !== void 0 && (a.timestamp = b.timestamp),
                    b.size !== void 0 && U.resizeFileStorage(a, b.size);
                },
                lookup: function (a, b) {
                  throw V.genericErrors[44];
                },
                mknod: function (a, b, c, d) {
                  return U.createNode(a, b, c, d);
                },
                rename: function (a, b, c) {
                  if (V.isDir(a.mode)) {
                    var d;
                    try {
                      d = V.lookupNode(b, c);
                    } catch (a) {}
                    if (d) for (var e in d.contents) throw new V.ErrnoError(55);
                  }
                  delete a.parent.contents[a.name];
                  a.parent.timestamp = Date.now();
                  a.name = c;
                  b.contents[c] = a;
                  b.timestamp = a.parent.timestamp;
                },
                unlink: function (a, b) {
                  delete a.contents[b], (a.timestamp = Date.now());
                },
                rmdir: function (a, b) {
                  var c = V.lookupNode(a, b);
                  for (c in c.contents) throw new V.ErrnoError(55);
                  delete a.contents[b];
                  a.timestamp = Date.now();
                },
                readdir: function (a) {
                  var b = [".", ".."];
                  for (a of Object.keys(a.contents)) b.push(a);
                  return b;
                },
                symlink: function (a, b, c) {
                  a = U.createNode(a, b, 511 | 40960, 0);
                  a.link = c;
                  return a;
                },
                readlink: function (a) {
                  if (!V.isLink(a.mode)) throw new V.ErrnoError(28);
                  return a.link;
                },
              },
              stream_ops: {
                read: function (a, b, c, d, e) {
                  var f = a.node.contents;
                  if (e >= a.node.usedBytes) return 0;
                  a = Math.min(a.node.usedBytes - e, d);
                  if (a > 8 && f.subarray) b.set(f.subarray(e, e + a), c);
                  else for (d = 0; d < a; d++) b[c + d] = f[e + d];
                  return a;
                },
                write: function (a, b, c, d, e, f) {
                  b.buffer === v.buffer && (f = !1);
                  if (!d) return 0;
                  a = a.node;
                  a.timestamp = Date.now();
                  if (b.subarray && (!a.contents || a.contents.subarray))
                    if (f) {
                      a.contents = b.subarray(c, c + d);
                      a.usedBytes = d;
                      return d;
                    } else if (a.usedBytes === 0 && e === 0) {
                      a.contents = b.slice(c, c + d);
                      a.usedBytes = d;
                      return d;
                    } else if (e + d <= a.usedBytes) {
                      a.contents.set(b.subarray(c, c + d), e);
                      return d;
                    }
                  U.expandFileStorage(a, e + d);
                  if (a.contents.subarray && b.subarray)
                    a.contents.set(b.subarray(c, c + d), e);
                  else for (f = 0; f < d; f++) a.contents[e + f] = b[c + f];
                  a.usedBytes = Math.max(a.usedBytes, e + d);
                  return d;
                },
                llseek: function (a, b, c) {
                  b = b;
                  c === 1
                    ? (b += a.position)
                    : c === 2 &&
                      V.isFile(a.node.mode) &&
                      (b += a.node.usedBytes);
                  if (b < 0) throw new V.ErrnoError(28);
                  return b;
                },
                allocate: function (a, b, c) {
                  U.expandFileStorage(a.node, b + c),
                    (a.node.usedBytes = Math.max(a.node.usedBytes, b + c));
                },
                mmap: function (a, b, c, d, e) {
                  if (!V.isFile(a.node.mode)) throw new V.ErrnoError(43);
                  d = a.node.contents;
                  if (!(e & 2) && d.buffer === v.buffer)
                    (a = !1), (e = d.byteOffset);
                  else {
                    (c > 0 || c + b < d.length) &&
                      (d.subarray
                        ? (d = d.subarray(c, c + b))
                        : (d = Array.prototype.slice.call(d, c, c + b)));
                    a = !0;
                    e = Ya(b);
                    if (!e) throw new V.ErrnoError(48);
                    v.set(d, e);
                  }
                  return { ptr: e, allocated: a };
                },
                msync: function (a, b, c, d, e) {
                  U.stream_ops.write(a, b, 0, d, c, !1);
                  return 0;
                },
              },
            },
            Za = function (a, b, c, d) {
              var e = d ? "" : ka("al " + a);
              o(a).then(
                function (a) {
                  b(new Uint8Array(a)), e && D(e);
                },
                function (b) {
                  if (c) c();
                  else throw 'Loading data file "' + a + '" failed.';
                }
              );
              e && C(e);
            },
            $a = function (a, b, c, d, e, f) {
              V.createDataFile(a, b, c, d, e, f);
            },
            ab = [],
            bb = function (a, b, c, d) {
              typeof Browser != "undefined" && Browser.init();
              var e = !1;
              ab.forEach(function (f) {
                if (e) return;
                f.canHandle(b) && (f.handle(a, b, c, d), (e = !0));
              });
              return e;
            },
            cb = function (a, b, c, d, e, f, g, h, i, j) {
              var k = b ? R.resolve(Q.join2(a, b)) : a,
                l = ka("cp " + k);
              function m(c) {
                function m(c) {
                  j == null ? void 0 : j(),
                    h || $a(a, b, c, d, e, i),
                    f == null ? void 0 : f(),
                    D(l);
                }
                if (
                  bb(c, k, m, function () {
                    g == null ? void 0 : g(), D(l);
                  })
                )
                  return;
                m(c);
              }
              C(l);
              typeof c == "string" ? Za(c, m, g) : m(c);
            },
            db = function (a) {
              var b = {
                r: 0,
                "r+": 2,
                w: 512 | 64 | 1,
                "w+": 512 | 64 | 2,
                a: 1024 | 64 | 1,
                "a+": 1024 | 64 | 2,
              };
              b = b[a];
              if (typeof b == "undefined")
                throw new Error("Unknown file open mode: " + a);
              return b;
            },
            eb = function (a, b) {
              var c = 0;
              a && (c |= 292 | 73);
              b && (c |= 146);
              return c;
            },
            V = {
              root: null,
              mounts: [],
              devices: {},
              streams: [],
              nextInode: 1,
              nameTable: null,
              currentPath: "/",
              initialized: !1,
              ignorePermissions: !0,
              ErrnoError: function (a) {
                "use strict";
                (this.name = "ErrnoError"), (this.errno = a);
              },
              genericErrors: {},
              filesystems: null,
              syncFSRequests: 0,
              FSStream: (function () {
                "use strict";
                function a() {
                  this.shared = {};
                }
                babelHelpers.createClass(a, [
                  {
                    key: "object",
                    get: function () {
                      return this.node;
                    },
                    set: function (a) {
                      this.node = a;
                    },
                  },
                  {
                    key: "isRead",
                    get: function () {
                      return (this.flags & 2097155) !== 1;
                    },
                  },
                  {
                    key: "isWrite",
                    get: function () {
                      return (this.flags & 2097155) !== 0;
                    },
                  },
                  {
                    key: "isAppend",
                    get: function () {
                      return this.flags & 1024;
                    },
                  },
                  {
                    key: "flags",
                    get: function () {
                      return this.shared.flags;
                    },
                    set: function (a) {
                      this.shared.flags = a;
                    },
                  },
                  {
                    key: "position",
                    get: function () {
                      return this.shared.position;
                    },
                    set: function (a) {
                      this.shared.position = a;
                    },
                  },
                ]);
                return a;
              })(),
              FSNode: (function () {
                "use strict";
                function a(a, b, c, d) {
                  a || (a = this),
                    (this.parent = a),
                    (this.mount = a.mount),
                    (this.mounted = null),
                    (this.id = V.nextInode++),
                    (this.name = b),
                    (this.mode = c),
                    (this.node_ops = {}),
                    (this.stream_ops = {}),
                    (this.rdev = d),
                    (this.readMode = 292 | 73),
                    (this.writeMode = 146);
                }
                babelHelpers.createClass(a, [
                  {
                    key: "read",
                    get: function () {
                      return (this.mode & this.readMode) === this.readMode;
                    },
                    set: function (a) {
                      a
                        ? (this.mode |= this.readMode)
                        : (this.mode &= ~this.readMode);
                    },
                  },
                  {
                    key: "write",
                    get: function () {
                      return (this.mode & this.writeMode) === this.writeMode;
                    },
                    set: function (a) {
                      a
                        ? (this.mode |= this.writeMode)
                        : (this.mode &= ~this.writeMode);
                    },
                  },
                  {
                    key: "isFolder",
                    get: function () {
                      return V.isDir(this.mode);
                    },
                  },
                  {
                    key: "isDevice",
                    get: function () {
                      return V.isChrdev(this.mode);
                    },
                  },
                ]);
                return a;
              })(),
              lookupPath: function (a, b) {
                b === void 0 && (b = {});
                a = R.resolve(a);
                if (!a) return { path: "", node: null };
                var c = { follow_mount: !0, recurse_count: 0 };
                b = Object.assign(c, b);
                if (b.recurse_count > 8) throw new V.ErrnoError(32);
                c = a.split("/").filter(function (a) {
                  return !!a;
                });
                a = V.root;
                var d = "/";
                for (var e = 0; e < c.length; e++) {
                  var f = e === c.length - 1;
                  if (f && b.parent) break;
                  a = V.lookupNode(a, c[e]);
                  d = Q.join2(d, c[e]);
                  V.isMountpoint(a) &&
                    (!f || (f && b.follow_mount)) &&
                    (a = a.mounted.root);
                  if (!f || b.follow) {
                    f = 0;
                    while (V.isLink(a.mode)) {
                      var g = V.readlink(d);
                      d = R.resolve(Q.dirname(d), g);
                      g = V.lookupPath(d, {
                        recurse_count: b.recurse_count + 1,
                      });
                      a = g.node;
                      if (f++ > 40) throw new V.ErrnoError(32);
                    }
                  }
                }
                return { path: d, node: a };
              },
              getPath: function (a) {
                var b;
                while (!0) {
                  if (V.isRoot(a)) {
                    var c = a.mount.mountpoint;
                    return !b
                      ? c
                      : c[c.length - 1] !== "/"
                      ? c + "/" + b
                      : c + b;
                  }
                  b = b ? a.name + "/" + b : a.name;
                  a = a.parent;
                }
              },
              hashName: function (a, b) {
                var c = 0;
                for (var d = 0; d < b.length; d++)
                  c = ((c << 5) - c + b.charCodeAt(d)) | 0;
                return ((a + c) >>> 0) % V.nameTable.length;
              },
              hashAddNode: function (a) {
                var b = V.hashName(a.parent.id, a.name);
                a.name_next = V.nameTable[b];
                V.nameTable[b] = a;
              },
              hashRemoveNode: function (a) {
                var b = V.hashName(a.parent.id, a.name);
                if (V.nameTable[b] === a) V.nameTable[b] = a.name_next;
                else {
                  b = V.nameTable[b];
                  while (b) {
                    if (b.name_next === a) {
                      b.name_next = a.name_next;
                      break;
                    }
                    b = b.name_next;
                  }
                }
              },
              lookupNode: function (a, b) {
                var c = V.mayLookup(a);
                if (c) throw new V.ErrnoError(c);
                c = V.hashName(a.id, b);
                for (c = V.nameTable[c]; c; c = c.name_next) {
                  var d = c.name;
                  if (c.parent.id === a.id && d === b) return c;
                }
                return V.lookup(a, b);
              },
              createNode: function (a, b, c, d) {
                a = new V.FSNode(a, b, c, d);
                V.hashAddNode(a);
                return a;
              },
              destroyNode: function (a) {
                V.hashRemoveNode(a);
              },
              isRoot: function (a) {
                return a === a.parent;
              },
              isMountpoint: function (a) {
                return !!a.mounted;
              },
              isFile: function (a) {
                return (a & 61440) === 32768;
              },
              isDir: function (a) {
                return (a & 61440) === 16384;
              },
              isLink: function (a) {
                return (a & 61440) === 40960;
              },
              isChrdev: function (a) {
                return (a & 61440) === 8192;
              },
              isBlkdev: function (a) {
                return (a & 61440) === 24576;
              },
              isFIFO: function (a) {
                return (a & 61440) === 4096;
              },
              isSocket: function (a) {
                return (a & 49152) === 49152;
              },
              flagsToPermissionString: function (a) {
                var b = ["r", "w", "rw"][a & 3];
                a & 512 && (b += "w");
                return b;
              },
              nodePermissions: function (a, b) {
                if (V.ignorePermissions) return 0;
                if (b.includes("r") && !(a.mode & 292)) return 2;
                else if (b.includes("w") && !(a.mode & 146)) return 2;
                else if (b.includes("x") && !(a.mode & 73)) return 2;
                return 0;
              },
              mayLookup: function (a) {
                if (!V.isDir(a.mode)) return 54;
                var b = V.nodePermissions(a, "x");
                if (b) return b;
                return !a.node_ops.lookup ? 2 : 0;
              },
              mayCreate: function (a, b) {
                try {
                  V.lookupNode(a, b);
                  return 20;
                } catch (a) {}
                return V.nodePermissions(a, "wx");
              },
              mayDelete: function (a, b, c) {
                var d;
                try {
                  d = V.lookupNode(a, b);
                } catch (a) {
                  return a.errno;
                }
                b = V.nodePermissions(a, "wx");
                if (b) return b;
                if (c) {
                  if (!V.isDir(d.mode)) return 54;
                  if (V.isRoot(d) || V.getPath(d) === V.cwd()) return 10;
                } else if (V.isDir(d.mode)) return 31;
                return 0;
              },
              mayOpen: function (a, b) {
                if (!a) return 44;
                if (V.isLink(a.mode)) return 32;
                else if (
                  V.isDir(a.mode) &&
                  (V.flagsToPermissionString(b) !== "r" || b & 512)
                )
                  return 31;
                return V.nodePermissions(a, V.flagsToPermissionString(b));
              },
              MAX_OPEN_FDS: 4096,
              nextfd: function () {
                for (var a = 0; a <= V.MAX_OPEN_FDS; a++)
                  if (!V.streams[a]) return a;
                throw new V.ErrnoError(33);
              },
              getStreamChecked: function (a) {
                a = V.getStream(a);
                if (!a) throw new V.ErrnoError(8);
                return a;
              },
              getStream: function (a) {
                return V.streams[a];
              },
              createStream: function (a, b) {
                b === void 0 && (b = -1);
                a = Object.assign(new V.FSStream(), a);
                b == -1 && (b = V.nextfd());
                a.fd = b;
                V.streams[b] = a;
                return a;
              },
              closeStream: function (a) {
                V.streams[a] = null;
              },
              dupStream: function (a, b) {
                b === void 0 && (b = -1);
                a = V.createStream(a, b);
                (b = a.stream_ops) == null
                  ? void 0
                  : b.dup == null
                  ? void 0
                  : b.dup(a);
                return a;
              },
              chrdev_stream_ops: {
                open: function (a) {
                  var b = V.getDevice(a.node.rdev);
                  a.stream_ops = b.stream_ops;
                  a.stream_ops.open == null ? void 0 : a.stream_ops.open(a);
                },
                llseek: function () {
                  throw new V.ErrnoError(70);
                },
              },
              major: function (a) {
                return a >> 8;
              },
              minor: function (a) {
                return a & 255;
              },
              makedev: function (a, b) {
                return (a << 8) | b;
              },
              registerDevice: function (a, b) {
                V.devices[a] = { stream_ops: b };
              },
              getDevice: function (a) {
                return V.devices[a];
              },
              getMounts: function (a) {
                var b = [];
                a = [a];
                while (a.length) {
                  var c = a.pop();
                  b.push(c);
                  a.push.apply(a, c.mounts);
                }
                return b;
              },
              syncfs: function (a, b) {
                typeof a == "function" && ((b = a), (a = !1));
                V.syncFSRequests++;
                V.syncFSRequests > 1 &&
                  r(
                    "warning: " +
                      V.syncFSRequests +
                      " FS.syncfs operations in flight at once, probably just doing extra work"
                  );
                var c = V.getMounts(V.root.mount),
                  d = 0;
                function e(a) {
                  V.syncFSRequests--;
                  return b(a);
                }
                function f(a) {
                  if (a) {
                    if (!f.errored) {
                      f.errored = !0;
                      return e(a);
                    }
                    return;
                  }
                  ++d >= c.length && e(null);
                }
                c.forEach(function (b) {
                  if (!b.type.syncfs) return f(null);
                  b.type.syncfs(b, a, f);
                });
              },
              mount: function (a, b, c) {
                var d = c === "/",
                  e = !c,
                  f;
                if (d && V.root) throw new V.ErrnoError(10);
                else if (!d && !e) {
                  e = V.lookupPath(c, { follow_mount: !1 });
                  c = e.path;
                  f = e.node;
                  if (V.isMountpoint(f)) throw new V.ErrnoError(10);
                  if (!V.isDir(f.mode)) throw new V.ErrnoError(54);
                }
                e = { type: a, opts: b, mountpoint: c, mounts: [] };
                b = a.mount(e);
                b.mount = e;
                e.root = b;
                d
                  ? (V.root = b)
                  : f && ((f.mounted = e), f.mount && f.mount.mounts.push(e));
                return b;
              },
              unmount: function (a) {
                a = V.lookupPath(a, { follow_mount: !1 });
                if (!V.isMountpoint(a.node)) throw new V.ErrnoError(28);
                a = a.node;
                var b = a.mounted,
                  c = V.getMounts(b);
                Object.keys(V.nameTable).forEach(function (a) {
                  a = V.nameTable[a];
                  while (a) {
                    var b = a.name_next;
                    c.includes(a.mount) && V.destroyNode(a);
                    a = b;
                  }
                });
                a.mounted = null;
                b = a.mount.mounts.indexOf(b);
                a.mount.mounts.splice(b, 1);
              },
              lookup: function (a, b) {
                return a.node_ops.lookup(a, b);
              },
              mknod: function (a, b, c) {
                var d = V.lookupPath(a, { parent: !0 });
                d = d.node;
                a = Q.basename(a);
                if (!a || a === "." || a === "..") throw new V.ErrnoError(28);
                var e = V.mayCreate(d, a);
                if (e) throw new V.ErrnoError(e);
                if (!d.node_ops.mknod) throw new V.ErrnoError(63);
                return d.node_ops.mknod(d, a, b, c);
              },
              create: function (a, b) {
                b = b !== void 0 ? b : 438;
                b &= 4095;
                b |= 32768;
                return V.mknod(a, b, 0);
              },
              mkdir: function (a, b) {
                b = b !== void 0 ? b : 511;
                b &= 511 | 512;
                b |= 16384;
                return V.mknod(a, b, 0);
              },
              mkdirTree: function (a, b) {
                a = a.split("/");
                var c = "";
                for (var d = 0; d < a.length; ++d) {
                  if (!a[d]) continue;
                  c += "/" + a[d];
                  try {
                    V.mkdir(c, b);
                  } catch (a) {
                    if (a.errno != 20) throw a;
                  }
                }
              },
              mkdev: function (a, b, c) {
                typeof c == "undefined" && ((c = b), (b = 438));
                b |= 8192;
                return V.mknod(a, b, c);
              },
              symlink: function (a, b) {
                if (!R.resolve(a)) throw new V.ErrnoError(44);
                var c = V.lookupPath(b, { parent: !0 });
                c = c.node;
                if (!c) throw new V.ErrnoError(44);
                b = Q.basename(b);
                var d = V.mayCreate(c, b);
                if (d) throw new V.ErrnoError(d);
                if (!c.node_ops.symlink) throw new V.ErrnoError(63);
                return c.node_ops.symlink(c, b, a);
              },
              rename: function (a, b) {
                var c = Q.dirname(a),
                  d = Q.dirname(b),
                  e = Q.basename(a),
                  f = Q.basename(b),
                  g,
                  h;
                g = V.lookupPath(a, { parent: !0 });
                h = g.node;
                g = V.lookupPath(b, { parent: !0 });
                g = g.node;
                if (!h || !g) throw new V.ErrnoError(44);
                if (h.mount !== g.mount) throw new V.ErrnoError(75);
                var i = V.lookupNode(h, e);
                a = R.relative(a, d);
                if (a.charAt(0) !== ".") throw new V.ErrnoError(28);
                a = R.relative(b, c);
                if (a.charAt(0) !== ".") throw new V.ErrnoError(55);
                var j;
                try {
                  j = V.lookupNode(g, f);
                } catch (a) {}
                if (i === j) return;
                d = V.isDir(i.mode);
                b = V.mayDelete(h, e, d);
                if (b) throw new V.ErrnoError(b);
                b = j ? V.mayDelete(g, f, d) : V.mayCreate(g, f);
                if (b) throw new V.ErrnoError(b);
                if (!h.node_ops.rename) throw new V.ErrnoError(63);
                if (V.isMountpoint(i) || (j && V.isMountpoint(j)))
                  throw new V.ErrnoError(10);
                if (g !== h) {
                  b = V.nodePermissions(h, "w");
                  if (b) throw new V.ErrnoError(b);
                }
                V.hashRemoveNode(i);
                try {
                  h.node_ops.rename(i, g, f), (i.parent = g);
                } catch (a) {
                  throw a;
                } finally {
                  V.hashAddNode(i);
                }
              },
              rmdir: function (a) {
                var b = V.lookupPath(a, { parent: !0 });
                b = b.node;
                a = Q.basename(a);
                var c = V.lookupNode(b, a),
                  d = V.mayDelete(b, a, !0);
                if (d) throw new V.ErrnoError(d);
                if (!b.node_ops.rmdir) throw new V.ErrnoError(63);
                if (V.isMountpoint(c)) throw new V.ErrnoError(10);
                b.node_ops.rmdir(b, a);
                V.destroyNode(c);
              },
              readdir: function (a) {
                a = V.lookupPath(a, { follow: !0 });
                a = a.node;
                if (!a.node_ops.readdir) throw new V.ErrnoError(54);
                return a.node_ops.readdir(a);
              },
              unlink: function (a) {
                var b = V.lookupPath(a, { parent: !0 });
                b = b.node;
                if (!b) throw new V.ErrnoError(44);
                a = Q.basename(a);
                var c = V.lookupNode(b, a),
                  d = V.mayDelete(b, a, !1);
                if (d) throw new V.ErrnoError(d);
                if (!b.node_ops.unlink) throw new V.ErrnoError(63);
                if (V.isMountpoint(c)) throw new V.ErrnoError(10);
                b.node_ops.unlink(b, a);
                V.destroyNode(c);
              },
              readlink: function (a) {
                a = V.lookupPath(a);
                a = a.node;
                if (!a) throw new V.ErrnoError(44);
                if (!a.node_ops.readlink) throw new V.ErrnoError(28);
                return R.resolve(V.getPath(a.parent), a.node_ops.readlink(a));
              },
              stat: function (a, b) {
                a = V.lookupPath(a, { follow: !b });
                b = a.node;
                if (!b) throw new V.ErrnoError(44);
                if (!b.node_ops.getattr) throw new V.ErrnoError(63);
                return b.node_ops.getattr(b);
              },
              lstat: function (a) {
                return V.stat(a, !0);
              },
              chmod: function (a, b, c) {
                if (typeof a == "string") {
                  c = V.lookupPath(a, { follow: !c });
                  c = c.node;
                } else c = a;
                if (!c.node_ops.setattr) throw new V.ErrnoError(63);
                c.node_ops.setattr(c, {
                  mode: (b & 4095) | (c.mode & -4096),
                  timestamp: Date.now(),
                });
              },
              lchmod: function (a, b) {
                V.chmod(a, b, !0);
              },
              fchmod: function (a, b) {
                a = V.getStreamChecked(a);
                V.chmod(a.node, b);
              },
              chown: function (a, b, c, d) {
                if (typeof a == "string") {
                  b = V.lookupPath(a, { follow: !d });
                  c = b.node;
                } else c = a;
                if (!c.node_ops.setattr) throw new V.ErrnoError(63);
                c.node_ops.setattr(c, { timestamp: Date.now() });
              },
              lchown: function (a, b, c) {
                V.chown(a, b, c, !0);
              },
              fchown: function (a, b, c) {
                a = V.getStreamChecked(a);
                V.chown(a.node, b, c);
              },
              truncate: function (a, b) {
                if (b < 0) throw new V.ErrnoError(28);
                if (typeof a == "string") {
                  var c = V.lookupPath(a, { follow: !0 });
                  c = c.node;
                } else c = a;
                if (!c.node_ops.setattr) throw new V.ErrnoError(63);
                if (V.isDir(c.mode)) throw new V.ErrnoError(31);
                if (!V.isFile(c.mode)) throw new V.ErrnoError(28);
                a = V.nodePermissions(c, "w");
                if (a) throw new V.ErrnoError(a);
                c.node_ops.setattr(c, { size: b, timestamp: Date.now() });
              },
              ftruncate: function (a, b) {
                a = V.getStreamChecked(a);
                if ((a.flags & 2097155) === 0) throw new V.ErrnoError(28);
                V.truncate(a.node, b);
              },
              utime: function (a, b, c) {
                a = V.lookupPath(a, { follow: !0 });
                a = a.node;
                a.node_ops.setattr(a, { timestamp: Math.max(b, c) });
              },
              open: function (b, c, d) {
                if (b === "") throw new V.ErrnoError(44);
                c = typeof c == "string" ? db(c) : c;
                c & 64
                  ? ((d = typeof d == "undefined" ? 438 : d),
                    (d = (d & 4095) | 32768))
                  : (d = 0);
                var e;
                if (typeof b == "object") e = b;
                else {
                  b = Q.normalize(b);
                  try {
                    var f = V.lookupPath(b, { follow: !(c & 131072) });
                    e = f.node;
                  } catch (a) {}
                }
                f = !1;
                if (c & 64)
                  if (e) {
                    if (c & 128) throw new V.ErrnoError(20);
                  } else (e = V.mknod(b, d, 0)), (f = !0);
                if (!e) throw new V.ErrnoError(44);
                V.isChrdev(e.mode) && (c &= -513);
                if (c & 65536 && !V.isDir(e.mode)) throw new V.ErrnoError(54);
                if (!f) {
                  d = V.mayOpen(e, c);
                  if (d) throw new V.ErrnoError(d);
                }
                c & 512 && !f && V.truncate(e, 0);
                c &= ~(128 | 512 | 131072);
                d = V.createStream({
                  node: e,
                  path: V.getPath(e),
                  flags: c,
                  seekable: !0,
                  position: 0,
                  stream_ops: e.stream_ops,
                  ungotten: [],
                  error: !1,
                });
                d.stream_ops.open && d.stream_ops.open(d);
                a.logReadFiles &&
                  !(c & 1) &&
                  (V.readFiles || (V.readFiles = {}),
                  b in V.readFiles || (V.readFiles[b] = 1));
                return d;
              },
              close: function (a) {
                if (V.isClosed(a)) throw new V.ErrnoError(8);
                a.getdents && (a.getdents = null);
                try {
                  a.stream_ops.close && a.stream_ops.close(a);
                } catch (a) {
                  throw a;
                } finally {
                  V.closeStream(a.fd);
                }
                a.fd = null;
              },
              isClosed: function (a) {
                return a.fd === null;
              },
              llseek: function (a, b, c) {
                if (V.isClosed(a)) throw new V.ErrnoError(8);
                if (!a.seekable || !a.stream_ops.llseek)
                  throw new V.ErrnoError(70);
                if (c != 0 && c != 1 && c != 2) throw new V.ErrnoError(28);
                a.position = a.stream_ops.llseek(a, b, c);
                a.ungotten = [];
                return a.position;
              },
              read: function (a, b, c, d, e) {
                if (d < 0 || e < 0) throw new V.ErrnoError(28);
                if (V.isClosed(a)) throw new V.ErrnoError(8);
                if ((a.flags & 2097155) === 1) throw new V.ErrnoError(8);
                if (V.isDir(a.node.mode)) throw new V.ErrnoError(31);
                if (!a.stream_ops.read) throw new V.ErrnoError(28);
                var f = typeof e != "undefined";
                if (!f) e = a.position;
                else if (!a.seekable) throw new V.ErrnoError(70);
                b = a.stream_ops.read(a, b, c, d, e);
                f || (a.position += b);
                return b;
              },
              write: function (a, b, c, d, e, f) {
                if (d < 0 || e < 0) throw new V.ErrnoError(28);
                if (V.isClosed(a)) throw new V.ErrnoError(8);
                if ((a.flags & 2097155) === 0) throw new V.ErrnoError(8);
                if (V.isDir(a.node.mode)) throw new V.ErrnoError(31);
                if (!a.stream_ops.write) throw new V.ErrnoError(28);
                a.seekable && a.flags & 1024 && V.llseek(a, 0, 2);
                var g = typeof e != "undefined";
                if (!g) e = a.position;
                else if (!a.seekable) throw new V.ErrnoError(70);
                b = a.stream_ops.write(a, b, c, d, e, f);
                g || (a.position += b);
                return b;
              },
              allocate: function (a, b, c) {
                if (V.isClosed(a)) throw new V.ErrnoError(8);
                if (b < 0 || c <= 0) throw new V.ErrnoError(28);
                if ((a.flags & 2097155) === 0) throw new V.ErrnoError(8);
                if (!V.isFile(a.node.mode) && !V.isDir(a.node.mode))
                  throw new V.ErrnoError(43);
                if (!a.stream_ops.allocate) throw new V.ErrnoError(138);
                a.stream_ops.allocate(a, b, c);
              },
              mmap: function (a, b, c, d, e) {
                if ((d & 2) !== 0 && (e & 2) === 0 && (a.flags & 2097155) !== 2)
                  throw new V.ErrnoError(2);
                if ((a.flags & 2097155) === 1) throw new V.ErrnoError(2);
                if (!a.stream_ops.mmap) throw new V.ErrnoError(43);
                return a.stream_ops.mmap(a, b, c, d, e);
              },
              msync: function (a, b, c, d, e) {
                return !a.stream_ops.msync
                  ? 0
                  : a.stream_ops.msync(a, b, c, d, e);
              },
              ioctl: function (a, b, c) {
                if (!a.stream_ops.ioctl) throw new V.ErrnoError(59);
                return a.stream_ops.ioctl(a, b, c);
              },
              readFile: function (a, b) {
                b === void 0 && (b = {});
                b.flags = b.flags || 0;
                b.encoding = b.encoding || "binary";
                if (b.encoding !== "utf8" && b.encoding !== "binary")
                  throw new Error('Invalid encoding type "' + b.encoding + '"');
                var c,
                  d = V.open(a, b.flags);
                a = V.stat(a);
                a = a.size;
                var e = new Uint8Array(a);
                V.read(d, e, 0, a, 0);
                b.encoding === "utf8"
                  ? (c = S(e, 0))
                  : b.encoding === "binary" && (c = e);
                V.close(d);
                return c;
              },
              writeFile: function (a, b, c) {
                c === void 0 && (c = {});
                c.flags = c.flags || 577;
                a = V.open(a, c.flags, c.mode);
                if (typeof b == "string") {
                  var d = new Uint8Array(O(b) + 1),
                    e = P(b, d, 0, d.length);
                  V.write(a, d, 0, e, void 0, c.canOwn);
                } else if (ArrayBuffer.isView(b))
                  V.write(a, b, 0, b.byteLength, void 0, c.canOwn);
                else throw new Error("Unsupported data type");
                V.close(a);
              },
              cwd: function () {
                return V.currentPath;
              },
              chdir: function (a) {
                a = V.lookupPath(a, { follow: !0 });
                if (a.node === null) throw new V.ErrnoError(44);
                if (!V.isDir(a.node.mode)) throw new V.ErrnoError(54);
                var b = V.nodePermissions(a.node, "x");
                if (b) throw new V.ErrnoError(b);
                V.currentPath = a.path;
              },
              createDefaultDirectories: function () {
                V.mkdir("/tmp"), V.mkdir("/home"), V.mkdir("/home/web_user");
              },
              createDefaultDevices: function () {
                V.mkdir("/dev");
                V.registerDevice(V.makedev(1, 3), {
                  read: function () {
                    return 0;
                  },
                  write: function (a, b, c, d, e) {
                    return d;
                  },
                });
                V.mkdev("/dev/null", V.makedev(1, 3));
                T.register(V.makedev(5, 0), T.default_tty_ops);
                T.register(V.makedev(6, 0), T.default_tty1_ops);
                V.mkdev("/dev/tty", V.makedev(5, 0));
                V.mkdev("/dev/tty1", V.makedev(6, 0));
                var a = new Uint8Array(1024),
                  b = 0,
                  c = function () {
                    b === 0 && (b = Ta(a).byteLength);
                    return a[--b];
                  };
                V.createDevice("/dev", "random", c);
                V.createDevice("/dev", "urandom", c);
                V.mkdir("/dev/shm");
                V.mkdir("/dev/shm/tmp");
              },
              createSpecialDirectories: function () {
                V.mkdir("/proc");
                var a = V.mkdir("/proc/self");
                V.mkdir("/proc/self/fd");
                V.mount(
                  {
                    mount: function () {
                      var b = V.createNode(a, "fd", 16384 | 511, 73);
                      b.node_ops = {
                        lookup: function (a, b) {
                          a = +b;
                          var c = V.getStreamChecked(a);
                          b = {
                            parent: null,
                            mount: { mountpoint: "fake" },
                            node_ops: {
                              readlink: function () {
                                return c.path;
                              },
                            },
                          };
                          b.parent = b;
                          return b;
                        },
                      };
                      return b;
                    },
                  },
                  {},
                  "/proc/self/fd"
                );
              },
              createStandardStreams: function () {
                a.stdin
                  ? V.createDevice("/dev", "stdin", a.stdin)
                  : V.symlink("/dev/tty", "/dev/stdin"),
                  a.stdout
                    ? V.createDevice("/dev", "stdout", null, a.stdout)
                    : V.symlink("/dev/tty", "/dev/stdout"),
                  a.stderr
                    ? V.createDevice("/dev", "stderr", null, a.stderr)
                    : V.symlink("/dev/tty1", "/dev/stderr"),
                  V.open("/dev/stdin", 0),
                  V.open("/dev/stdout", 1),
                  V.open("/dev/stderr", 1);
              },
              staticInit: function () {
                [44].forEach(function (a) {
                  (V.genericErrors[a] = new V.ErrnoError(a)),
                    (V.genericErrors[a].stack = "<generic error, no stack>");
                }),
                  (V.nameTable = new Array(4096)),
                  V.mount(U, {}, "/"),
                  V.createDefaultDirectories(),
                  V.createDefaultDevices(),
                  V.createSpecialDirectories(),
                  (V.filesystems = { MEMFS: U });
              },
              init: function (b, c, d) {
                (V.init.initialized = !0),
                  (a.stdin = b || a.stdin),
                  (a.stdout = c || a.stdout),
                  (a.stderr = d || a.stderr),
                  V.createStandardStreams();
              },
              quit: function () {
                V.init.initialized = !1;
                for (var a = 0; a < V.streams.length; a++) {
                  var b = V.streams[a];
                  if (!b) continue;
                  V.close(b);
                }
              },
              findObject: function (a, b) {
                a = V.analyzePath(a, b);
                return !a.exists ? null : a.object;
              },
              analyzePath: function (a, b) {
                try {
                  var c = V.lookupPath(a, { follow: !b });
                  a = c.path;
                } catch (a) {}
                var d = {
                  isRoot: !1,
                  exists: !1,
                  error: 0,
                  name: null,
                  path: null,
                  object: null,
                  parentExists: !1,
                  parentPath: null,
                  parentObject: null,
                };
                try {
                  var c = V.lookupPath(a, { parent: !0 });
                  d.parentExists = !0;
                  d.parentPath = c.path;
                  d.parentObject = c.node;
                  d.name = Q.basename(a);
                  c = V.lookupPath(a, { follow: !b });
                  d.exists = !0;
                  d.path = c.path;
                  d.object = c.node;
                  d.name = c.node.name;
                  d.isRoot = c.path === "/";
                } catch (a) {
                  d.error = a.errno;
                }
                return d;
              },
              createPath: function (a, b, c, d) {
                a = typeof a == "string" ? a : V.getPath(a);
                c = b.split("/").reverse();
                while (c.length) {
                  d = c.pop();
                  if (!d) continue;
                  var e = Q.join2(a, d);
                  try {
                    V.mkdir(e);
                  } catch (a) {}
                  a = e;
                }
                return e;
              },
              createFile: function (a, b, c, d, e) {
                c = Q.join2(typeof a == "string" ? a : V.getPath(a), b);
                a = eb(d, e);
                return V.create(c, a);
              },
              createDataFile: function (a, b, c, d, e, f) {
                var g = b;
                a &&
                  ((a = typeof a == "string" ? a : V.getPath(a)),
                  (g = b ? Q.join2(a, b) : a));
                b = eb(d, e);
                a = V.create(g, b);
                if (c) {
                  if (typeof c == "string") {
                    d = new Array(c.length);
                    for (e = 0, g = c.length; e < g; ++e)
                      d[e] = c.charCodeAt(e);
                    c = d;
                  }
                  V.chmod(a, b | 146);
                  e = V.open(a, 577);
                  V.write(e, c, 0, c.length, 0, f);
                  V.close(e);
                  V.chmod(a, b);
                }
              },
              createDevice: function (a, b, c, d) {
                a = Q.join2(typeof a == "string" ? a : V.getPath(a), b);
                b = eb(!!c, !!d);
                V.createDevice.major || (V.createDevice.major = 64);
                var e = V.makedev(V.createDevice.major++, 0);
                V.registerDevice(e, {
                  open: function (a) {
                    a.seekable = !1;
                  },
                  close: function (a) {
                    (d == null
                      ? void 0
                      : (a = d.buffer) == null
                      ? void 0
                      : a.length) && d(10);
                  },
                  read: function (a, b, d, e, f) {
                    f = 0;
                    for (var g = 0; g < e; g++) {
                      var h;
                      try {
                        h = c();
                      } catch (a) {
                        throw new V.ErrnoError(29);
                      }
                      if (h === void 0 && f === 0) throw new V.ErrnoError(6);
                      if (h === null || h === void 0) break;
                      f++;
                      b[d + g] = h;
                    }
                    f && (a.node.timestamp = Date.now());
                    return f;
                  },
                  write: function (a, b, c, e, f) {
                    for (f = 0; f < e; f++)
                      try {
                        d(b[c + f]);
                      } catch (a) {
                        throw new V.ErrnoError(29);
                      }
                    e && (a.node.timestamp = Date.now());
                    return f;
                  },
                });
                return V.mkdev(a, b, e);
              },
              forceLoadFile: function (a) {
                if (a.isDevice || a.isFolder || a.link || a.contents) return !0;
                if (typeof XMLHttpRequest != "undefined")
                  throw new Error(
                    "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
                  );
                else
                  try {
                    (a.contents = p(a.url)), (a.usedBytes = a.contents.length);
                  } catch (a) {
                    throw new V.ErrnoError(29);
                  }
              },
              createLazyFile: function (a, b, c, d, e) {
                var f = (function () {
                  "use strict";
                  function a() {
                    (this.lengthKnown = !1), (this.chunks = []);
                  }
                  var b = a.prototype;
                  b.get = function (a) {
                    if (a > this.length - 1 || a < 0) return void 0;
                    var b = a % this.chunkSize;
                    a = (a / this.chunkSize) | 0;
                    return this.getter(a)[b];
                  };
                  b.setDataGetter = function (a) {
                    this.getter = a;
                  };
                  b.cacheLength = function () {
                    var a = new XMLHttpRequest();
                    a.open("HEAD", c, !1);
                    a.send(null);
                    if (
                      !((a.status >= 200 && a.status < 300) || a.status === 304)
                    )
                      throw new Error(
                        "Couldn't load " + c + ". Status: " + a.status
                      );
                    var b = Number(a.getResponseHeader("Content-length")),
                      d,
                      e =
                        (d = a.getResponseHeader("Accept-Ranges")) &&
                        d === "bytes";
                    a =
                      (d = a.getResponseHeader("Content-Encoding")) &&
                      d === "gzip";
                    var f = 1024 * 1024;
                    e || (f = b);
                    var g = function (d, e) {
                        if (d > e)
                          throw new Error(
                            "invalid range (" +
                              d +
                              ", " +
                              e +
                              ") or no bytes requested!"
                          );
                        if (e > b - 1)
                          throw new Error(
                            "only " + b + " bytes available! programmer error!"
                          );
                        var a = new XMLHttpRequest();
                        a.open("GET", c, !1);
                        b !== f &&
                          a.setRequestHeader("Range", "bytes=" + d + "-" + e);
                        a.responseType = "arraybuffer";
                        a.overrideMimeType &&
                          a.overrideMimeType(
                            "text/plain; charset=x-user-defined"
                          );
                        a.send(null);
                        if (
                          !(
                            (a.status >= 200 && a.status < 300) ||
                            a.status === 304
                          )
                        )
                          throw new Error(
                            "Couldn't load " + c + ". Status: " + a.status
                          );
                        return a.response !== void 0
                          ? new Uint8Array(a.response || [])
                          : Wa(a.responseText || "", !0);
                      },
                      h = this;
                    h.setDataGetter(function (a) {
                      var c = a * f,
                        d = (a + 1) * f - 1;
                      d = Math.min(d, b - 1);
                      typeof h.chunks[a] == "undefined" &&
                        (h.chunks[a] = g(c, d));
                      if (typeof h.chunks[a] == "undefined")
                        throw new Error("doXHR failed!");
                      return h.chunks[a];
                    });
                    (a || !b) &&
                      ((f = b = 1),
                      (b = this.getter(0).length),
                      (f = b),
                      q(
                        "LazyFiles on gzip forces download of the whole file when length is accessed"
                      ));
                    this.$1 = b;
                    this.$2 = f;
                    this.lengthKnown = !0;
                  };
                  babelHelpers.createClass(a, [
                    {
                      key: "length",
                      get: function () {
                        this.lengthKnown || this.cacheLength();
                        return this.$1;
                      },
                    },
                    {
                      key: "chunkSize",
                      get: function () {
                        this.lengthKnown || this.cacheLength();
                        return this.$2;
                      },
                    },
                  ]);
                  return a;
                })();
                if (typeof XMLHttpRequest != "undefined") {
                  if (!k)
                    throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                  f = new f();
                  f = { isDevice: !1, contents: f };
                } else var f = { isDevice: !1, url: c };
                var g = V.createFile(a, b, f, d, e);
                f.contents
                  ? (g.contents = f.contents)
                  : f.url && ((g.contents = null), (g.url = f.url));
                Object.defineProperties(g, {
                  usedBytes: {
                    get: function () {
                      return this.contents.length;
                    },
                  },
                });
                var h = {};
                a = Object.keys(g.stream_ops);
                a.forEach(function (a) {
                  var b = g.stream_ops[a];
                  h[a] = function () {
                    V.forceLoadFile(g);
                    return b.apply(void 0, arguments);
                  };
                });
                function i(a, b, c, d, e) {
                  a = a.node.contents;
                  if (e >= a.length) return 0;
                  d = Math.min(a.length - e, d);
                  if (a.slice) for (var f = 0; f < d; f++) b[c + f] = a[e + f];
                  else for (var f = 0; f < d; f++) b[c + f] = a.get(e + f);
                  return d;
                }
                h.read = function (a, b, c, d, e) {
                  V.forceLoadFile(g);
                  return i(a, b, c, d, e);
                };
                h.mmap = function (a, b, c, d, e) {
                  V.forceLoadFile(g);
                  d = Ya(b);
                  if (!d) throw new V.ErrnoError(48);
                  i(a, v, d, b, c);
                  return { ptr: d, allocated: !0 };
                };
                g.stream_ops = h;
                return g;
              },
            },
            fb = function (a, b) {
              return a ? S(w, a, b) : "";
            },
            W = {
              DEFAULT_POLLMASK: 5,
              calculateAt: function (a, b, c) {
                if (Q.isAbs(b)) return b;
                var d;
                if (a === -100) d = V.cwd();
                else {
                  a = W.getStreamFromFD(a);
                  d = a.path;
                }
                if (b.length == 0) {
                  if (!c) throw new V.ErrnoError(44);
                  return d;
                }
                return Q.join2(d, b);
              },
              doStat: function (a, b, c) {
                a = a(b);
                x[c >> 2] = a.dev;
                x[(c + 4) >> 2] = a.mode;
                y[(c + 8) >> 2] = a.nlink;
                x[(c + 12) >> 2] = a.uid;
                x[(c + 16) >> 2] = a.gid;
                x[(c + 20) >> 2] = a.rdev;
                (H = [
                  a.size >>> 0,
                  ((G = a.size),
                  +Math.abs(G) >= 1
                    ? G > 0
                      ? +Math.floor(G / 4294967296) >>> 0
                      : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                  (x[(c + 24) >> 2] = H[0]),
                  (x[(c + 28) >> 2] = H[1]);
                x[(c + 32) >> 2] = 4096;
                x[(c + 36) >> 2] = a.blocks;
                b = a.atime.getTime();
                var d = a.mtime.getTime(),
                  e = a.ctime.getTime();
                (H = [
                  Math.floor(b / 1e3) >>> 0,
                  ((G = Math.floor(b / 1e3)),
                  +Math.abs(G) >= 1
                    ? G > 0
                      ? +Math.floor(G / 4294967296) >>> 0
                      : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                  (x[(c + 40) >> 2] = H[0]),
                  (x[(c + 44) >> 2] = H[1]);
                y[(c + 48) >> 2] = (b % 1e3) * 1e3;
                (H = [
                  Math.floor(d / 1e3) >>> 0,
                  ((G = Math.floor(d / 1e3)),
                  +Math.abs(G) >= 1
                    ? G > 0
                      ? +Math.floor(G / 4294967296) >>> 0
                      : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                  (x[(c + 56) >> 2] = H[0]),
                  (x[(c + 60) >> 2] = H[1]);
                y[(c + 64) >> 2] = (d % 1e3) * 1e3;
                (H = [
                  Math.floor(e / 1e3) >>> 0,
                  ((G = Math.floor(e / 1e3)),
                  +Math.abs(G) >= 1
                    ? G > 0
                      ? +Math.floor(G / 4294967296) >>> 0
                      : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                  (x[(c + 72) >> 2] = H[0]),
                  (x[(c + 76) >> 2] = H[1]);
                y[(c + 80) >> 2] = (e % 1e3) * 1e3;
                (H = [
                  a.ino >>> 0,
                  ((G = a.ino),
                  +Math.abs(G) >= 1
                    ? G > 0
                      ? +Math.floor(G / 4294967296) >>> 0
                      : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                  (x[(c + 88) >> 2] = H[0]),
                  (x[(c + 92) >> 2] = H[1]);
                return 0;
              },
              doMsync: function (a, b, c, d, e) {
                if (!V.isFile(b.node.mode)) throw new V.ErrnoError(43);
                if (d & 2) return 0;
                a = w.slice(a, a + c);
                V.msync(b, a, e, c, d);
              },
              getStreamFromFD: function (a) {
                a = V.getStreamChecked(a);
                return a;
              },
              varargs: void 0,
              getStr: function (a) {
                a = fb(a);
                return a;
              },
            };
          function gb(a) {
            try {
              a = W.getStreamFromFD(a);
              V.close(a);
              return 0;
            } catch (a) {
              if (typeof V == "undefined" || !(a.name === "ErrnoError"))
                throw a;
              return a.errno;
            }
          }
          var hb = function (a, b) {
            return (b + 2097152) >>> 0 < 4194305 - !!a
              ? (a >>> 0) + b * 4294967296
              : NaN;
          };
          function ib(a, b, c, d, e) {
            b = hb(b, c);
            try {
              if (isNaN(b)) return 61;
              c = W.getStreamFromFD(a);
              V.llseek(c, b, d);
              (H = [
                c.position >>> 0,
                ((G = c.position),
                +Math.abs(G) >= 1
                  ? G > 0
                    ? +Math.floor(G / 4294967296) >>> 0
                    : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
                (x[e >> 2] = H[0]),
                (x[(e + 4) >> 2] = H[1]);
              c.getdents && b === 0 && d === 0 && (c.getdents = null);
              return 0;
            } catch (a) {
              if (typeof V == "undefined" || !(a.name === "ErrnoError"))
                throw a;
              return a.errno;
            }
          }
          var jb = function (a, b, c, d) {
            var e = 0;
            for (var f = 0; f < c; f++) {
              var g = y[b >> 2],
                h = y[(b + 4) >> 2];
              b += 8;
              g = V.write(a, v, g, h, d);
              if (g < 0) return -1;
              e += g;
              typeof d != "undefined" && (d += g);
            }
            return e;
          };
          function kb(a, b, c, d) {
            try {
              a = W.getStreamFromFD(a);
              a = jb(a, b, c);
              y[d >> 2] = a;
              return 0;
            } catch (a) {
              if (typeof V == "undefined" || !(a.name === "ErrnoError"))
                throw a;
              return a.errno;
            }
          }
          var lb,
            X = function (a) {
              return lb.get(a);
            },
            mb = function (b) {
              b = a["_" + b];
              return b;
            },
            nb = function (a, b) {
              v.set(a, b);
            },
            ob = function (a) {
              return ub(a);
            },
            pb = function (a) {
              var b = O(a) + 1,
                c = ob(b);
              Ba(a, c, b);
              return c;
            },
            qb = function (a, b, c, d, e) {
              var f = {
                string: function (a) {
                  var b = 0;
                  a !== null && a !== void 0 && a !== 0 && (b = pb(a));
                  return b;
                },
                array: function (a) {
                  var b = ob(a.length);
                  nb(a, b);
                  return b;
                },
              };
              function g(a) {
                if (b === "string") return fb(a);
                return b === "boolean" ? Boolean(a) : a;
              }
              a = mb(a);
              var h = [],
                i = 0;
              if (d)
                for (var j = 0; j < d.length; j++) {
                  var k = f[c[j]];
                  k ? (i === 0 && (i = K()), (h[j] = k(d[j]))) : (h[j] = d[j]);
                }
              k = a.apply(void 0, h);
              function e(a) {
                i !== 0 && J(i);
                return g(a);
              }
              k = e(k);
              return k;
            };
          V.createPreloadedFile = cb;
          V.staticInit();
          var rb = {
              v: j,
              a: ya,
              j: za,
              u: Aa,
              b: l,
              o: Ca,
              r: Da,
              p: Ea,
              n: Ha,
              s: Ma,
              t: Na,
              l: Ra,
              q: gb,
              m: ib,
              h: kb,
              g: Db,
              f: Bb,
              k: Fb,
              i: Eb,
              c: Cb,
              d: Ab,
              e: zb,
              w: Gb,
            },
            Y = ta();
          (function () {
            return Y.y();
          });
          a._encode_progressive_jpeg = function (b, c, d, e, f, g) {
            return (a._encode_progressive_jpeg = Y.z)(b, c, d, e, f, g);
          };
          a._malloc = function (b) {
            return (a._malloc = Y.B)(b);
          };
          a._free = function (b) {
            return (a._free = Y.C)(b);
          };
          var Z = function (a, b) {
              return (Z = Y.D)(a, b);
            },
            sb = function (a) {
              return (sb = Y.E)(a);
            },
            tb = function (a) {
              return (tb = Y.F)(a);
            },
            ub = function (a) {
              return (ub = Y.G)(a);
            },
            vb = function () {
              return (vb = Y.H)();
            },
            wb = function (a) {
              return (wb = Y.I)(a);
            },
            xb = function (a, b, c) {
              return (xb = Y.J)(a, b, c);
            },
            yb = function (a) {
              return (yb = Y.K)(a);
            };
          function zb(a, b, c, d) {
            var e = K();
            try {
              X(a)(b, c, d);
            } catch (a) {
              J(e);
              if (a !== a + 0) throw a;
              Z(1, 0);
            }
          }
          function Ab(a, b, c) {
            var d = K();
            try {
              X(a)(b, c);
            } catch (a) {
              J(d);
              if (a !== a + 0) throw a;
              Z(1, 0);
            }
          }
          function Bb(a, b, c, d) {
            var e = K();
            try {
              return X(a)(b, c, d);
            } catch (a) {
              J(e);
              if (a !== a + 0) throw a;
              Z(1, 0);
            }
          }
          function Cb(a, b) {
            var c = K();
            try {
              X(a)(b);
            } catch (a) {
              J(c);
              if (a !== a + 0) throw a;
              Z(1, 0);
            }
          }
          function Db(a, b) {
            var c = K();
            try {
              return X(a)(b);
            } catch (a) {
              J(c);
              if (a !== a + 0) throw a;
              Z(1, 0);
            }
          }
          function Eb(a) {
            var b = K();
            try {
              X(a)();
            } catch (a) {
              J(b);
              if (a !== a + 0) throw a;
              Z(1, 0);
            }
          }
          function Fb(a, b, c, d, e, f) {
            var g = K();
            try {
              return X(a)(b, c, d, e, f);
            } catch (a) {
              J(g);
              if (a !== a + 0) throw a;
              Z(1, 0);
            }
          }
          function Gb(a, b, c, d, e, f, g) {
            var h = K();
            try {
              X(a)(b, c, d, e, f, g);
            } catch (a) {
              J(h);
              if (a !== a + 0) throw a;
              Z(1, 0);
            }
          }
          a.wasmMemory = t;
          a.ccall = qb;
          var $;
          B = function a() {
            $ || Hb(), $ || (B = a);
          };
          function Hb() {
            if (z > 0) return;
            ga();
            if (z > 0) return;
            function b() {
              if ($) return;
              $ = !0;
              a.calledRun = !0;
              if (u) return;
              ha();
              f(a);
              ia();
            }
            b();
          }
          Hb();
          cb = d;
          return cb;
        };
      })();
    typeof f === "object" && typeof e === "object"
      ? (e.exports = h)
      : typeof define === "function" &&
        define.amd &&
        define([], function () {
          return h;
        });
  },
  null
);
__d(
  "WAResolvable",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    a = (function () {
      function a() {
        var a = this;
        this.$1 = function () {};
        this.$2 = !1;
        this.isSettled = !1;
        this.promise = new (g || (g = b("Promise")))(function (b) {
          a.$1 = b;
        });
      }
      var c = a.prototype;
      c.resolve = function (a) {
        (this.$2 = !0), (this.isSettled = !0), this.$1(a);
      };
      c.reject = function (a) {
        (this.isSettled = !0),
          this.resolve((g || (g = b("Promise"))).reject(a));
      };
      c.resolveWasCalled = function () {
        return this.$2;
      };
      return a;
    })();
    f.Resolvable = a;
  },
  66
);
__d(
  "WAWasmModuleCache",
  ["WAPromiseManagement", "asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = a.fetch,
      i = new Map();
    c = d("WAPromiseManagement").cacheWhilePending(
      function (a) {
        return a;
      },
      (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          var b = i.get(a);
          if (b != null) return b;
          b = yield j(a);
          i.set(a, b);
          return b;
        });
        return function (b) {
          return a.apply(this, arguments);
        };
      })()
    );
    function j(a) {
      return k.apply(this, arguments);
    }
    function k() {
      k = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = h(a);
        if (typeof WebAssembly.compileStreaming === "function")
          return WebAssembly.compileStreaming(a);
        a = yield a;
        return WebAssembly.compile(yield a.arrayBuffer());
      });
      return k.apply(this, arguments);
    }
    g.loadWasmModule = c;
  },
  98
);
__d(
  "WALoadMozjpegWasmV2",
  ["WALogger", "WAMozjpegWasmV2", "WAResolvable", "WAWasmModuleCache", "bx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h() {
      var a = babelHelpers.taggedTemplateLiteralLoose([
        "[MozjpegWasmV2]initWasm failed with error: ",
        "",
      ]);
      h = function () {
        return a;
      };
      return a;
    }
    function i() {
      var a = babelHelpers.taggedTemplateLiteralLoose([
        "[MozjpegWasmV2] instantiateWasm failed with error: ",
        "",
      ]);
      i = function () {
        return a;
      };
      return a;
    }
    function j() {
      var a = babelHelpers.taggedTemplateLiteralLoose([
        "[MozjpegWasmV2] instantiateWasm succeeded",
      ]);
      j = function () {
        return a;
      };
      return a;
    }
    var k = c("bx").getURL(c("bx")("31390"));
    function a() {
      var a = new (d("WAResolvable").Resolvable)(),
        b = c("WAMozjpegWasmV2")({
          instantiateWasm: function (b, c) {
            void d("WAWasmModuleCache")
              .loadWasmModule(k)
              .then(function (a) {
                return WebAssembly.instantiate(a, b);
              })
              .then(function (b) {
                d("WALogger").DEV(j()), c(b), a.resolve();
              })
              ["catch"](function (b) {
                d("WALogger").ERROR(i(), b.toString()), a.reject(b);
              });
            return {};
          },
        })["catch"](function (b) {
          d("WALogger").ERROR(h(), b.toString());
          a.reject(b);
          throw b;
        });
      return a.promise.then(function () {
        return b;
      });
    }
    g.WAMozjpegWasmUrlV2 = k;
    g.loadMozjpegWasm = a;
  },
  98
);
__d(
  "WAMediaUtilsWasmUrl",
  ["bx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("bx").getURL(c("bx")("237"));
    g.WAMediaUtilsWasmUrl = a;
  },
  98
);
__d(
  "WAResultOrError",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      if (b != null) return { success: !1, error: a, payload: b };
      else return { success: !1, error: a };
    }
    function b(a) {
      return { success: !0, value: a };
    }
    function c(a) {
      return { success: !1, error: a };
    }
    f.DEPRECATED_makeError = a;
    f.makeResult = b;
    f.makeError = c;
  },
  66
);
/**
 * License: https://www.facebook.com/legal/license/OKBVmODmb-W/
 */
__d(
  "tweetnacl-1.0.3",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    b = {};
    var g = { exports: b };
    function h() {
      (function (a) {
        var b = function (a) {
            var b,
              c = new Float64Array(16);
            if (a) for (b = 0; b < a.length; b++) c[b] = a[b];
            return c;
          },
          c = function () {
            throw new Error("no PRNG");
          },
          d = new Uint8Array(16),
          e = new Uint8Array(32);
        e[0] = 9;
        var f = b(),
          g = b([1]),
          h = b([56129, 1]),
          i = b([
            30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
            16505, 36039, 65139, 11119, 27886, 20995,
          ]),
          j = b([
            61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
            33010, 6542, 64743, 22239, 55772, 9222,
          ]),
          k = b([
            54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412,
            64982, 57905, 49316, 21502, 52590, 14035, 8553,
          ]),
          l = b([
            26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
            26214, 26214, 26214, 26214, 26214, 26214, 26214,
          ]),
          m = b([
            41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
            153, 11085, 57099, 20417, 9344, 11139,
          ]);
        function n(a, b, c, d) {
          (a[b] = (c >> 24) & 255),
            (a[b + 1] = (c >> 16) & 255),
            (a[b + 2] = (c >> 8) & 255),
            (a[b + 3] = c & 255),
            (a[b + 4] = (d >> 24) & 255),
            (a[b + 5] = (d >> 16) & 255),
            (a[b + 6] = (d >> 8) & 255),
            (a[b + 7] = d & 255);
        }
        function o(a, b, c, d, e) {
          var f,
            g = 0;
          for (f = 0; f < e; f++) g |= a[b + f] ^ c[d + f];
          return (1 & ((g - 1) >>> 8)) - 1;
        }
        function p(a, b, c, d) {
          return o(a, b, c, d, 16);
        }
        function q(a, b, c, d) {
          return o(a, b, c, d, 32);
        }
        function r(a, b, c, d) {
          var e =
              (d[0] & 255) |
              ((d[1] & 255) << 8) |
              ((d[2] & 255) << 16) |
              ((d[3] & 255) << 24),
            f =
              (c[0] & 255) |
              ((c[1] & 255) << 8) |
              ((c[2] & 255) << 16) |
              ((c[3] & 255) << 24),
            g =
              (c[4] & 255) |
              ((c[5] & 255) << 8) |
              ((c[6] & 255) << 16) |
              ((c[7] & 255) << 24),
            h =
              (c[8] & 255) |
              ((c[9] & 255) << 8) |
              ((c[10] & 255) << 16) |
              ((c[11] & 255) << 24),
            i =
              (c[12] & 255) |
              ((c[13] & 255) << 8) |
              ((c[14] & 255) << 16) |
              ((c[15] & 255) << 24),
            j =
              (d[4] & 255) |
              ((d[5] & 255) << 8) |
              ((d[6] & 255) << 16) |
              ((d[7] & 255) << 24),
            k =
              (b[0] & 255) |
              ((b[1] & 255) << 8) |
              ((b[2] & 255) << 16) |
              ((b[3] & 255) << 24),
            l =
              (b[4] & 255) |
              ((b[5] & 255) << 8) |
              ((b[6] & 255) << 16) |
              ((b[7] & 255) << 24),
            m =
              (b[8] & 255) |
              ((b[9] & 255) << 8) |
              ((b[10] & 255) << 16) |
              ((b[11] & 255) << 24);
          b =
            (b[12] & 255) |
            ((b[13] & 255) << 8) |
            ((b[14] & 255) << 16) |
            ((b[15] & 255) << 24);
          var n =
              (d[8] & 255) |
              ((d[9] & 255) << 8) |
              ((d[10] & 255) << 16) |
              ((d[11] & 255) << 24),
            o =
              (c[16] & 255) |
              ((c[17] & 255) << 8) |
              ((c[18] & 255) << 16) |
              ((c[19] & 255) << 24),
            p =
              (c[20] & 255) |
              ((c[21] & 255) << 8) |
              ((c[22] & 255) << 16) |
              ((c[23] & 255) << 24),
            q =
              (c[24] & 255) |
              ((c[25] & 255) << 8) |
              ((c[26] & 255) << 16) |
              ((c[27] & 255) << 24);
          c =
            (c[28] & 255) |
            ((c[29] & 255) << 8) |
            ((c[30] & 255) << 16) |
            ((c[31] & 255) << 24);
          d =
            (d[12] & 255) |
            ((d[13] & 255) << 8) |
            ((d[14] & 255) << 16) |
            ((d[15] & 255) << 24);
          var r = e,
            s = f,
            t = g,
            u = h,
            v = i,
            w = j,
            x = k,
            y = l,
            z = m,
            A = b,
            B = n,
            C = o,
            D = p,
            E = q,
            F = c,
            G = d,
            H;
          for (var I = 0; I < 20; I += 2)
            (H = (r + D) | 0),
              (v ^= (H << 7) | (H >>> (32 - 7))),
              (H = (v + r) | 0),
              (z ^= (H << 9) | (H >>> (32 - 9))),
              (H = (z + v) | 0),
              (D ^= (H << 13) | (H >>> (32 - 13))),
              (H = (D + z) | 0),
              (r ^= (H << 18) | (H >>> (32 - 18))),
              (H = (w + s) | 0),
              (A ^= (H << 7) | (H >>> (32 - 7))),
              (H = (A + w) | 0),
              (E ^= (H << 9) | (H >>> (32 - 9))),
              (H = (E + A) | 0),
              (s ^= (H << 13) | (H >>> (32 - 13))),
              (H = (s + E) | 0),
              (w ^= (H << 18) | (H >>> (32 - 18))),
              (H = (B + x) | 0),
              (F ^= (H << 7) | (H >>> (32 - 7))),
              (H = (F + B) | 0),
              (t ^= (H << 9) | (H >>> (32 - 9))),
              (H = (t + F) | 0),
              (x ^= (H << 13) | (H >>> (32 - 13))),
              (H = (x + t) | 0),
              (B ^= (H << 18) | (H >>> (32 - 18))),
              (H = (G + C) | 0),
              (u ^= (H << 7) | (H >>> (32 - 7))),
              (H = (u + G) | 0),
              (y ^= (H << 9) | (H >>> (32 - 9))),
              (H = (y + u) | 0),
              (C ^= (H << 13) | (H >>> (32 - 13))),
              (H = (C + y) | 0),
              (G ^= (H << 18) | (H >>> (32 - 18))),
              (H = (r + u) | 0),
              (s ^= (H << 7) | (H >>> (32 - 7))),
              (H = (s + r) | 0),
              (t ^= (H << 9) | (H >>> (32 - 9))),
              (H = (t + s) | 0),
              (u ^= (H << 13) | (H >>> (32 - 13))),
              (H = (u + t) | 0),
              (r ^= (H << 18) | (H >>> (32 - 18))),
              (H = (w + v) | 0),
              (x ^= (H << 7) | (H >>> (32 - 7))),
              (H = (x + w) | 0),
              (y ^= (H << 9) | (H >>> (32 - 9))),
              (H = (y + x) | 0),
              (v ^= (H << 13) | (H >>> (32 - 13))),
              (H = (v + y) | 0),
              (w ^= (H << 18) | (H >>> (32 - 18))),
              (H = (B + A) | 0),
              (C ^= (H << 7) | (H >>> (32 - 7))),
              (H = (C + B) | 0),
              (z ^= (H << 9) | (H >>> (32 - 9))),
              (H = (z + C) | 0),
              (A ^= (H << 13) | (H >>> (32 - 13))),
              (H = (A + z) | 0),
              (B ^= (H << 18) | (H >>> (32 - 18))),
              (H = (G + F) | 0),
              (D ^= (H << 7) | (H >>> (32 - 7))),
              (H = (D + G) | 0),
              (E ^= (H << 9) | (H >>> (32 - 9))),
              (H = (E + D) | 0),
              (F ^= (H << 13) | (H >>> (32 - 13))),
              (H = (F + E) | 0),
              (G ^= (H << 18) | (H >>> (32 - 18)));
          r = (r + e) | 0;
          s = (s + f) | 0;
          t = (t + g) | 0;
          u = (u + h) | 0;
          v = (v + i) | 0;
          w = (w + j) | 0;
          x = (x + k) | 0;
          y = (y + l) | 0;
          z = (z + m) | 0;
          A = (A + b) | 0;
          B = (B + n) | 0;
          C = (C + o) | 0;
          D = (D + p) | 0;
          E = (E + q) | 0;
          F = (F + c) | 0;
          G = (G + d) | 0;
          a[0] = (r >>> 0) & 255;
          a[1] = (r >>> 8) & 255;
          a[2] = (r >>> 16) & 255;
          a[3] = (r >>> 24) & 255;
          a[4] = (s >>> 0) & 255;
          a[5] = (s >>> 8) & 255;
          a[6] = (s >>> 16) & 255;
          a[7] = (s >>> 24) & 255;
          a[8] = (t >>> 0) & 255;
          a[9] = (t >>> 8) & 255;
          a[10] = (t >>> 16) & 255;
          a[11] = (t >>> 24) & 255;
          a[12] = (u >>> 0) & 255;
          a[13] = (u >>> 8) & 255;
          a[14] = (u >>> 16) & 255;
          a[15] = (u >>> 24) & 255;
          a[16] = (v >>> 0) & 255;
          a[17] = (v >>> 8) & 255;
          a[18] = (v >>> 16) & 255;
          a[19] = (v >>> 24) & 255;
          a[20] = (w >>> 0) & 255;
          a[21] = (w >>> 8) & 255;
          a[22] = (w >>> 16) & 255;
          a[23] = (w >>> 24) & 255;
          a[24] = (x >>> 0) & 255;
          a[25] = (x >>> 8) & 255;
          a[26] = (x >>> 16) & 255;
          a[27] = (x >>> 24) & 255;
          a[28] = (y >>> 0) & 255;
          a[29] = (y >>> 8) & 255;
          a[30] = (y >>> 16) & 255;
          a[31] = (y >>> 24) & 255;
          a[32] = (z >>> 0) & 255;
          a[33] = (z >>> 8) & 255;
          a[34] = (z >>> 16) & 255;
          a[35] = (z >>> 24) & 255;
          a[36] = (A >>> 0) & 255;
          a[37] = (A >>> 8) & 255;
          a[38] = (A >>> 16) & 255;
          a[39] = (A >>> 24) & 255;
          a[40] = (B >>> 0) & 255;
          a[41] = (B >>> 8) & 255;
          a[42] = (B >>> 16) & 255;
          a[43] = (B >>> 24) & 255;
          a[44] = (C >>> 0) & 255;
          a[45] = (C >>> 8) & 255;
          a[46] = (C >>> 16) & 255;
          a[47] = (C >>> 24) & 255;
          a[48] = (D >>> 0) & 255;
          a[49] = (D >>> 8) & 255;
          a[50] = (D >>> 16) & 255;
          a[51] = (D >>> 24) & 255;
          a[52] = (E >>> 0) & 255;
          a[53] = (E >>> 8) & 255;
          a[54] = (E >>> 16) & 255;
          a[55] = (E >>> 24) & 255;
          a[56] = (F >>> 0) & 255;
          a[57] = (F >>> 8) & 255;
          a[58] = (F >>> 16) & 255;
          a[59] = (F >>> 24) & 255;
          a[60] = (G >>> 0) & 255;
          a[61] = (G >>> 8) & 255;
          a[62] = (G >>> 16) & 255;
          a[63] = (G >>> 24) & 255;
        }
        function s(a, b, c, d) {
          var e =
              (d[0] & 255) |
              ((d[1] & 255) << 8) |
              ((d[2] & 255) << 16) |
              ((d[3] & 255) << 24),
            f =
              (c[0] & 255) |
              ((c[1] & 255) << 8) |
              ((c[2] & 255) << 16) |
              ((c[3] & 255) << 24),
            g =
              (c[4] & 255) |
              ((c[5] & 255) << 8) |
              ((c[6] & 255) << 16) |
              ((c[7] & 255) << 24),
            h =
              (c[8] & 255) |
              ((c[9] & 255) << 8) |
              ((c[10] & 255) << 16) |
              ((c[11] & 255) << 24),
            i =
              (c[12] & 255) |
              ((c[13] & 255) << 8) |
              ((c[14] & 255) << 16) |
              ((c[15] & 255) << 24),
            j =
              (d[4] & 255) |
              ((d[5] & 255) << 8) |
              ((d[6] & 255) << 16) |
              ((d[7] & 255) << 24),
            k =
              (b[0] & 255) |
              ((b[1] & 255) << 8) |
              ((b[2] & 255) << 16) |
              ((b[3] & 255) << 24),
            l =
              (b[4] & 255) |
              ((b[5] & 255) << 8) |
              ((b[6] & 255) << 16) |
              ((b[7] & 255) << 24),
            m =
              (b[8] & 255) |
              ((b[9] & 255) << 8) |
              ((b[10] & 255) << 16) |
              ((b[11] & 255) << 24);
          b =
            (b[12] & 255) |
            ((b[13] & 255) << 8) |
            ((b[14] & 255) << 16) |
            ((b[15] & 255) << 24);
          var n =
              (d[8] & 255) |
              ((d[9] & 255) << 8) |
              ((d[10] & 255) << 16) |
              ((d[11] & 255) << 24),
            o =
              (c[16] & 255) |
              ((c[17] & 255) << 8) |
              ((c[18] & 255) << 16) |
              ((c[19] & 255) << 24),
            p =
              (c[20] & 255) |
              ((c[21] & 255) << 8) |
              ((c[22] & 255) << 16) |
              ((c[23] & 255) << 24),
            q =
              (c[24] & 255) |
              ((c[25] & 255) << 8) |
              ((c[26] & 255) << 16) |
              ((c[27] & 255) << 24);
          c =
            (c[28] & 255) |
            ((c[29] & 255) << 8) |
            ((c[30] & 255) << 16) |
            ((c[31] & 255) << 24);
          d =
            (d[12] & 255) |
            ((d[13] & 255) << 8) |
            ((d[14] & 255) << 16) |
            ((d[15] & 255) << 24);
          e = e;
          f = f;
          g = g;
          h = h;
          i = i;
          j = j;
          k = k;
          l = l;
          m = m;
          b = b;
          n = n;
          o = o;
          p = p;
          q = q;
          c = c;
          d = d;
          var r;
          for (var s = 0; s < 20; s += 2)
            (r = (e + p) | 0),
              (i ^= (r << 7) | (r >>> (32 - 7))),
              (r = (i + e) | 0),
              (m ^= (r << 9) | (r >>> (32 - 9))),
              (r = (m + i) | 0),
              (p ^= (r << 13) | (r >>> (32 - 13))),
              (r = (p + m) | 0),
              (e ^= (r << 18) | (r >>> (32 - 18))),
              (r = (j + f) | 0),
              (b ^= (r << 7) | (r >>> (32 - 7))),
              (r = (b + j) | 0),
              (q ^= (r << 9) | (r >>> (32 - 9))),
              (r = (q + b) | 0),
              (f ^= (r << 13) | (r >>> (32 - 13))),
              (r = (f + q) | 0),
              (j ^= (r << 18) | (r >>> (32 - 18))),
              (r = (n + k) | 0),
              (c ^= (r << 7) | (r >>> (32 - 7))),
              (r = (c + n) | 0),
              (g ^= (r << 9) | (r >>> (32 - 9))),
              (r = (g + c) | 0),
              (k ^= (r << 13) | (r >>> (32 - 13))),
              (r = (k + g) | 0),
              (n ^= (r << 18) | (r >>> (32 - 18))),
              (r = (d + o) | 0),
              (h ^= (r << 7) | (r >>> (32 - 7))),
              (r = (h + d) | 0),
              (l ^= (r << 9) | (r >>> (32 - 9))),
              (r = (l + h) | 0),
              (o ^= (r << 13) | (r >>> (32 - 13))),
              (r = (o + l) | 0),
              (d ^= (r << 18) | (r >>> (32 - 18))),
              (r = (e + h) | 0),
              (f ^= (r << 7) | (r >>> (32 - 7))),
              (r = (f + e) | 0),
              (g ^= (r << 9) | (r >>> (32 - 9))),
              (r = (g + f) | 0),
              (h ^= (r << 13) | (r >>> (32 - 13))),
              (r = (h + g) | 0),
              (e ^= (r << 18) | (r >>> (32 - 18))),
              (r = (j + i) | 0),
              (k ^= (r << 7) | (r >>> (32 - 7))),
              (r = (k + j) | 0),
              (l ^= (r << 9) | (r >>> (32 - 9))),
              (r = (l + k) | 0),
              (i ^= (r << 13) | (r >>> (32 - 13))),
              (r = (i + l) | 0),
              (j ^= (r << 18) | (r >>> (32 - 18))),
              (r = (n + b) | 0),
              (o ^= (r << 7) | (r >>> (32 - 7))),
              (r = (o + n) | 0),
              (m ^= (r << 9) | (r >>> (32 - 9))),
              (r = (m + o) | 0),
              (b ^= (r << 13) | (r >>> (32 - 13))),
              (r = (b + m) | 0),
              (n ^= (r << 18) | (r >>> (32 - 18))),
              (r = (d + c) | 0),
              (p ^= (r << 7) | (r >>> (32 - 7))),
              (r = (p + d) | 0),
              (q ^= (r << 9) | (r >>> (32 - 9))),
              (r = (q + p) | 0),
              (c ^= (r << 13) | (r >>> (32 - 13))),
              (r = (c + q) | 0),
              (d ^= (r << 18) | (r >>> (32 - 18)));
          a[0] = (e >>> 0) & 255;
          a[1] = (e >>> 8) & 255;
          a[2] = (e >>> 16) & 255;
          a[3] = (e >>> 24) & 255;
          a[4] = (j >>> 0) & 255;
          a[5] = (j >>> 8) & 255;
          a[6] = (j >>> 16) & 255;
          a[7] = (j >>> 24) & 255;
          a[8] = (n >>> 0) & 255;
          a[9] = (n >>> 8) & 255;
          a[10] = (n >>> 16) & 255;
          a[11] = (n >>> 24) & 255;
          a[12] = (d >>> 0) & 255;
          a[13] = (d >>> 8) & 255;
          a[14] = (d >>> 16) & 255;
          a[15] = (d >>> 24) & 255;
          a[16] = (k >>> 0) & 255;
          a[17] = (k >>> 8) & 255;
          a[18] = (k >>> 16) & 255;
          a[19] = (k >>> 24) & 255;
          a[20] = (l >>> 0) & 255;
          a[21] = (l >>> 8) & 255;
          a[22] = (l >>> 16) & 255;
          a[23] = (l >>> 24) & 255;
          a[24] = (m >>> 0) & 255;
          a[25] = (m >>> 8) & 255;
          a[26] = (m >>> 16) & 255;
          a[27] = (m >>> 24) & 255;
          a[28] = (b >>> 0) & 255;
          a[29] = (b >>> 8) & 255;
          a[30] = (b >>> 16) & 255;
          a[31] = (b >>> 24) & 255;
        }
        function t(a, b, c, d) {
          r(a, b, c, d);
        }
        function u(a, b, c, d) {
          s(a, b, c, d);
        }
        var v = new Uint8Array([
          101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32,
          107,
        ]);
        function w(a, b, c, d, e, f, g) {
          var h = new Uint8Array(16),
            i = new Uint8Array(64),
            j;
          for (j = 0; j < 16; j++) h[j] = 0;
          for (j = 0; j < 8; j++) h[j] = f[j];
          while (e >= 64) {
            t(i, h, g, v);
            for (j = 0; j < 64; j++) a[b + j] = c[d + j] ^ i[j];
            f = 1;
            for (j = 8; j < 16; j++)
              (f = (f + (h[j] & 255)) | 0), (h[j] = f & 255), (f >>>= 8);
            e -= 64;
            b += 64;
            d += 64;
          }
          if (e > 0) {
            t(i, h, g, v);
            for (j = 0; j < e; j++) a[b + j] = c[d + j] ^ i[j];
          }
          return 0;
        }
        function x(a, b, c, d, e) {
          var f = new Uint8Array(16),
            g = new Uint8Array(64),
            h;
          for (h = 0; h < 16; h++) f[h] = 0;
          for (h = 0; h < 8; h++) f[h] = d[h];
          while (c >= 64) {
            t(g, f, e, v);
            for (h = 0; h < 64; h++) a[b + h] = g[h];
            d = 1;
            for (h = 8; h < 16; h++)
              (d = (d + (f[h] & 255)) | 0), (f[h] = d & 255), (d >>>= 8);
            c -= 64;
            b += 64;
          }
          if (c > 0) {
            t(g, f, e, v);
            for (h = 0; h < c; h++) a[b + h] = g[h];
          }
          return 0;
        }
        function y(a, b, c, d, e) {
          var f = new Uint8Array(32);
          u(f, d, e, v);
          e = new Uint8Array(8);
          for (var g = 0; g < 8; g++) e[g] = d[g + 16];
          return x(a, b, c, e, f);
        }
        function z(a, b, c, d, e, f, g) {
          var h = new Uint8Array(32);
          u(h, f, g, v);
          g = new Uint8Array(8);
          for (var i = 0; i < 8; i++) g[i] = f[i + 16];
          return w(a, b, c, d, e, g, h);
        }
        var A = function (a) {
          this.buffer = new Uint8Array(16);
          this.r = new Uint16Array(10);
          this.h = new Uint16Array(10);
          this.pad = new Uint16Array(8);
          this.leftover = 0;
          this.fin = 0;
          var b, c;
          b = (a[0] & 255) | ((a[1] & 255) << 8);
          this.r[0] = b & 8191;
          c = (a[2] & 255) | ((a[3] & 255) << 8);
          this.r[1] = ((b >>> 13) | (c << 3)) & 8191;
          b = (a[4] & 255) | ((a[5] & 255) << 8);
          this.r[2] = ((c >>> 10) | (b << 6)) & 7939;
          c = (a[6] & 255) | ((a[7] & 255) << 8);
          this.r[3] = ((b >>> 7) | (c << 9)) & 8191;
          b = (a[8] & 255) | ((a[9] & 255) << 8);
          this.r[4] = ((c >>> 4) | (b << 12)) & 255;
          this.r[5] = (b >>> 1) & 8190;
          c = (a[10] & 255) | ((a[11] & 255) << 8);
          this.r[6] = ((b >>> 14) | (c << 2)) & 8191;
          b = (a[12] & 255) | ((a[13] & 255) << 8);
          this.r[7] = ((c >>> 11) | (b << 5)) & 8065;
          c = (a[14] & 255) | ((a[15] & 255) << 8);
          this.r[8] = ((b >>> 8) | (c << 8)) & 8191;
          this.r[9] = (c >>> 5) & 127;
          this.pad[0] = (a[16] & 255) | ((a[17] & 255) << 8);
          this.pad[1] = (a[18] & 255) | ((a[19] & 255) << 8);
          this.pad[2] = (a[20] & 255) | ((a[21] & 255) << 8);
          this.pad[3] = (a[22] & 255) | ((a[23] & 255) << 8);
          this.pad[4] = (a[24] & 255) | ((a[25] & 255) << 8);
          this.pad[5] = (a[26] & 255) | ((a[27] & 255) << 8);
          this.pad[6] = (a[28] & 255) | ((a[29] & 255) << 8);
          this.pad[7] = (a[30] & 255) | ((a[31] & 255) << 8);
        };
        A.prototype.blocks = function (a, b, c) {
          var d = this.fin ? 0 : 1 << 11,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p = this.h[0],
            q = this.h[1],
            r = this.h[2],
            s = this.h[3],
            t = this.h[4],
            u = this.h[5],
            v = this.h[6],
            w = this.h[7],
            x = this.h[8],
            y = this.h[9],
            z = this.r[0],
            A = this.r[1],
            B = this.r[2],
            C = this.r[3],
            D = this.r[4],
            E = this.r[5],
            F = this.r[6],
            G = this.r[7],
            H = this.r[8],
            I = this.r[9];
          while (c >= 16)
            (e = (a[b + 0] & 255) | ((a[b + 1] & 255) << 8)),
              (p += e & 8191),
              (f = (a[b + 2] & 255) | ((a[b + 3] & 255) << 8)),
              (q += ((e >>> 13) | (f << 3)) & 8191),
              (e = (a[b + 4] & 255) | ((a[b + 5] & 255) << 8)),
              (r += ((f >>> 10) | (e << 6)) & 8191),
              (f = (a[b + 6] & 255) | ((a[b + 7] & 255) << 8)),
              (s += ((e >>> 7) | (f << 9)) & 8191),
              (e = (a[b + 8] & 255) | ((a[b + 9] & 255) << 8)),
              (t += ((f >>> 4) | (e << 12)) & 8191),
              (u += (e >>> 1) & 8191),
              (f = (a[b + 10] & 255) | ((a[b + 11] & 255) << 8)),
              (v += ((e >>> 14) | (f << 2)) & 8191),
              (e = (a[b + 12] & 255) | ((a[b + 13] & 255) << 8)),
              (w += ((f >>> 11) | (e << 5)) & 8191),
              (f = (a[b + 14] & 255) | ((a[b + 15] & 255) << 8)),
              (x += ((e >>> 8) | (f << 8)) & 8191),
              (y += (f >>> 5) | d),
              (e = 0),
              (f = e),
              (f += p * z),
              (f += q * (5 * I)),
              (f += r * (5 * H)),
              (f += s * (5 * G)),
              (f += t * (5 * F)),
              (e = f >>> 13),
              (f &= 8191),
              (f += u * (5 * E)),
              (f += v * (5 * D)),
              (f += w * (5 * C)),
              (f += x * (5 * B)),
              (f += y * (5 * A)),
              (e += f >>> 13),
              (f &= 8191),
              (g = e),
              (g += p * A),
              (g += q * z),
              (g += r * (5 * I)),
              (g += s * (5 * H)),
              (g += t * (5 * G)),
              (e = g >>> 13),
              (g &= 8191),
              (g += u * (5 * F)),
              (g += v * (5 * E)),
              (g += w * (5 * D)),
              (g += x * (5 * C)),
              (g += y * (5 * B)),
              (e += g >>> 13),
              (g &= 8191),
              (h = e),
              (h += p * B),
              (h += q * A),
              (h += r * z),
              (h += s * (5 * I)),
              (h += t * (5 * H)),
              (e = h >>> 13),
              (h &= 8191),
              (h += u * (5 * G)),
              (h += v * (5 * F)),
              (h += w * (5 * E)),
              (h += x * (5 * D)),
              (h += y * (5 * C)),
              (e += h >>> 13),
              (h &= 8191),
              (i = e),
              (i += p * C),
              (i += q * B),
              (i += r * A),
              (i += s * z),
              (i += t * (5 * I)),
              (e = i >>> 13),
              (i &= 8191),
              (i += u * (5 * H)),
              (i += v * (5 * G)),
              (i += w * (5 * F)),
              (i += x * (5 * E)),
              (i += y * (5 * D)),
              (e += i >>> 13),
              (i &= 8191),
              (j = e),
              (j += p * D),
              (j += q * C),
              (j += r * B),
              (j += s * A),
              (j += t * z),
              (e = j >>> 13),
              (j &= 8191),
              (j += u * (5 * I)),
              (j += v * (5 * H)),
              (j += w * (5 * G)),
              (j += x * (5 * F)),
              (j += y * (5 * E)),
              (e += j >>> 13),
              (j &= 8191),
              (k = e),
              (k += p * E),
              (k += q * D),
              (k += r * C),
              (k += s * B),
              (k += t * A),
              (e = k >>> 13),
              (k &= 8191),
              (k += u * z),
              (k += v * (5 * I)),
              (k += w * (5 * H)),
              (k += x * (5 * G)),
              (k += y * (5 * F)),
              (e += k >>> 13),
              (k &= 8191),
              (l = e),
              (l += p * F),
              (l += q * E),
              (l += r * D),
              (l += s * C),
              (l += t * B),
              (e = l >>> 13),
              (l &= 8191),
              (l += u * A),
              (l += v * z),
              (l += w * (5 * I)),
              (l += x * (5 * H)),
              (l += y * (5 * G)),
              (e += l >>> 13),
              (l &= 8191),
              (m = e),
              (m += p * G),
              (m += q * F),
              (m += r * E),
              (m += s * D),
              (m += t * C),
              (e = m >>> 13),
              (m &= 8191),
              (m += u * B),
              (m += v * A),
              (m += w * z),
              (m += x * (5 * I)),
              (m += y * (5 * H)),
              (e += m >>> 13),
              (m &= 8191),
              (n = e),
              (n += p * H),
              (n += q * G),
              (n += r * F),
              (n += s * E),
              (n += t * D),
              (e = n >>> 13),
              (n &= 8191),
              (n += u * C),
              (n += v * B),
              (n += w * A),
              (n += x * z),
              (n += y * (5 * I)),
              (e += n >>> 13),
              (n &= 8191),
              (o = e),
              (o += p * I),
              (o += q * H),
              (o += r * G),
              (o += s * F),
              (o += t * E),
              (e = o >>> 13),
              (o &= 8191),
              (o += u * D),
              (o += v * C),
              (o += w * B),
              (o += x * A),
              (o += y * z),
              (e += o >>> 13),
              (o &= 8191),
              (e = ((e << 2) + e) | 0),
              (e = (e + f) | 0),
              (f = e & 8191),
              (e = e >>> 13),
              (g += e),
              (p = f),
              (q = g),
              (r = h),
              (s = i),
              (t = j),
              (u = k),
              (v = l),
              (w = m),
              (x = n),
              (y = o),
              (b += 16),
              (c -= 16);
          this.h[0] = p;
          this.h[1] = q;
          this.h[2] = r;
          this.h[3] = s;
          this.h[4] = t;
          this.h[5] = u;
          this.h[6] = v;
          this.h[7] = w;
          this.h[8] = x;
          this.h[9] = y;
        };
        A.prototype.finish = function (a, b) {
          var c = new Uint16Array(10),
            d,
            e;
          if (this.leftover) {
            e = this.leftover;
            this.buffer[e++] = 1;
            for (; e < 16; e++) this.buffer[e] = 0;
            this.fin = 1;
            this.blocks(this.buffer, 0, 16);
          }
          d = this.h[1] >>> 13;
          this.h[1] &= 8191;
          for (e = 2; e < 10; e++)
            (this.h[e] += d), (d = this.h[e] >>> 13), (this.h[e] &= 8191);
          this.h[0] += d * 5;
          d = this.h[0] >>> 13;
          this.h[0] &= 8191;
          this.h[1] += d;
          d = this.h[1] >>> 13;
          this.h[1] &= 8191;
          this.h[2] += d;
          c[0] = this.h[0] + 5;
          d = c[0] >>> 13;
          c[0] &= 8191;
          for (e = 1; e < 10; e++)
            (c[e] = this.h[e] + d), (d = c[e] >>> 13), (c[e] &= 8191);
          c[9] -= 1 << 13;
          d = (d ^ 1) - 1;
          for (e = 0; e < 10; e++) c[e] &= d;
          d = ~d;
          for (e = 0; e < 10; e++) this.h[e] = (this.h[e] & d) | c[e];
          this.h[0] = (this.h[0] | (this.h[1] << 13)) & 65535;
          this.h[1] = ((this.h[1] >>> 3) | (this.h[2] << 10)) & 65535;
          this.h[2] = ((this.h[2] >>> 6) | (this.h[3] << 7)) & 65535;
          this.h[3] = ((this.h[3] >>> 9) | (this.h[4] << 4)) & 65535;
          this.h[4] =
            ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)) & 65535;
          this.h[5] = ((this.h[6] >>> 2) | (this.h[7] << 11)) & 65535;
          this.h[6] = ((this.h[7] >>> 5) | (this.h[8] << 8)) & 65535;
          this.h[7] = ((this.h[8] >>> 8) | (this.h[9] << 5)) & 65535;
          c = this.h[0] + this.pad[0];
          this.h[0] = c & 65535;
          for (e = 1; e < 8; e++)
            (c = (((this.h[e] + this.pad[e]) | 0) + (c >>> 16)) | 0),
              (this.h[e] = c & 65535);
          a[b + 0] = (this.h[0] >>> 0) & 255;
          a[b + 1] = (this.h[0] >>> 8) & 255;
          a[b + 2] = (this.h[1] >>> 0) & 255;
          a[b + 3] = (this.h[1] >>> 8) & 255;
          a[b + 4] = (this.h[2] >>> 0) & 255;
          a[b + 5] = (this.h[2] >>> 8) & 255;
          a[b + 6] = (this.h[3] >>> 0) & 255;
          a[b + 7] = (this.h[3] >>> 8) & 255;
          a[b + 8] = (this.h[4] >>> 0) & 255;
          a[b + 9] = (this.h[4] >>> 8) & 255;
          a[b + 10] = (this.h[5] >>> 0) & 255;
          a[b + 11] = (this.h[5] >>> 8) & 255;
          a[b + 12] = (this.h[6] >>> 0) & 255;
          a[b + 13] = (this.h[6] >>> 8) & 255;
          a[b + 14] = (this.h[7] >>> 0) & 255;
          a[b + 15] = (this.h[7] >>> 8) & 255;
        };
        A.prototype.update = function (a, b, c) {
          var d, e;
          if (this.leftover) {
            e = 16 - this.leftover;
            e > c && (e = c);
            for (d = 0; d < e; d++) this.buffer[this.leftover + d] = a[b + d];
            c -= e;
            b += e;
            this.leftover += e;
            if (this.leftover < 16) return;
            this.blocks(this.buffer, 0, 16);
            this.leftover = 0;
          }
          c >= 16 &&
            ((e = c - (c % 16)), this.blocks(a, b, e), (b += e), (c -= e));
          if (c) {
            for (d = 0; d < c; d++) this.buffer[this.leftover + d] = a[b + d];
            this.leftover += c;
          }
        };
        function B(a, b, c, d, e, f) {
          f = new A(f);
          f.update(c, d, e);
          f.finish(a, b);
          return 0;
        }
        function C(a, b, c, d, e, f) {
          var g = new Uint8Array(16);
          B(g, 0, c, d, e, f);
          return p(a, b, g, 0);
        }
        function D(a, b, c, d, e) {
          if (c < 32) return -1;
          z(a, 0, b, 0, c, d, e);
          B(a, 16, a, 32, c - 32, a);
          for (b = 0; b < 16; b++) a[b] = 0;
          return 0;
        }
        function E(a, b, c, d, e) {
          var f = new Uint8Array(32);
          if (c < 32) return -1;
          y(f, 0, 32, d, e);
          if (C(b, 16, b, 32, c - 32, f) !== 0) return -1;
          z(a, 0, b, 0, c, d, e);
          for (f = 0; f < 32; f++) a[f] = 0;
          return 0;
        }
        function F(a, b) {
          var c;
          for (c = 0; c < 16; c++) a[c] = b[c] | 0;
        }
        function G(a) {
          var b,
            c,
            d = 1;
          for (b = 0; b < 16; b++)
            (c = a[b] + d + 65535),
              (d = Math.floor(c / 65536)),
              (a[b] = c - d * 65536);
          a[0] += d - 1 + 37 * (d - 1);
        }
        function H(a, b, c) {
          var d;
          c = ~(c - 1);
          for (var e = 0; e < 16; e++)
            (d = c & (a[e] ^ b[e])), (a[e] ^= d), (b[e] ^= d);
        }
        function I(a, c) {
          var d,
            e,
            f = b(),
            g = b();
          for (d = 0; d < 16; d++) g[d] = c[d];
          G(g);
          G(g);
          G(g);
          for (c = 0; c < 2; c++) {
            f[0] = g[0] - 65517;
            for (d = 1; d < 15; d++)
              (f[d] = g[d] - 65535 - ((f[d - 1] >> 16) & 1)),
                (f[d - 1] &= 65535);
            f[15] = g[15] - 32767 - ((f[14] >> 16) & 1);
            e = (f[15] >> 16) & 1;
            f[14] &= 65535;
            H(g, f, 1 - e);
          }
          for (d = 0; d < 16; d++)
            (a[2 * d] = g[d] & 255), (a[2 * d + 1] = g[d] >> 8);
        }
        function J(a, b) {
          var c = new Uint8Array(32),
            d = new Uint8Array(32);
          I(c, a);
          I(d, b);
          return q(c, 0, d, 0);
        }
        function K(a) {
          var b = new Uint8Array(32);
          I(b, a);
          return b[0] & 1;
        }
        function L(a, b) {
          var c;
          for (c = 0; c < 16; c++) a[c] = b[2 * c] + (b[2 * c + 1] << 8);
          a[15] &= 32767;
        }
        function M(a, b, c) {
          for (var d = 0; d < 16; d++) a[d] = b[d] + c[d];
        }
        function N(a, b, c) {
          for (var d = 0; d < 16; d++) a[d] = b[d] - c[d];
        }
        function O(a, b, c) {
          var d,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0,
            D = 0,
            E = 0,
            F = 0,
            G = 0,
            H = 0,
            I = 0,
            J = c[0],
            K = c[1],
            L = c[2],
            M = c[3],
            N = c[4],
            O = c[5],
            P = c[6],
            Q = c[7],
            R = c[8],
            S = c[9],
            T = c[10],
            U = c[11],
            V = c[12],
            W = c[13],
            X = c[14];
          c = c[15];
          d = b[0];
          e += d * J;
          f += d * K;
          g += d * L;
          h += d * M;
          i += d * N;
          j += d * O;
          k += d * P;
          l += d * Q;
          m += d * R;
          n += d * S;
          o += d * T;
          p += d * U;
          q += d * V;
          r += d * W;
          s += d * X;
          t += d * c;
          d = b[1];
          f += d * J;
          g += d * K;
          h += d * L;
          i += d * M;
          j += d * N;
          k += d * O;
          l += d * P;
          m += d * Q;
          n += d * R;
          o += d * S;
          p += d * T;
          q += d * U;
          r += d * V;
          s += d * W;
          t += d * X;
          u += d * c;
          d = b[2];
          g += d * J;
          h += d * K;
          i += d * L;
          j += d * M;
          k += d * N;
          l += d * O;
          m += d * P;
          n += d * Q;
          o += d * R;
          p += d * S;
          q += d * T;
          r += d * U;
          s += d * V;
          t += d * W;
          u += d * X;
          v += d * c;
          d = b[3];
          h += d * J;
          i += d * K;
          j += d * L;
          k += d * M;
          l += d * N;
          m += d * O;
          n += d * P;
          o += d * Q;
          p += d * R;
          q += d * S;
          r += d * T;
          s += d * U;
          t += d * V;
          u += d * W;
          v += d * X;
          w += d * c;
          d = b[4];
          i += d * J;
          j += d * K;
          k += d * L;
          l += d * M;
          m += d * N;
          n += d * O;
          o += d * P;
          p += d * Q;
          q += d * R;
          r += d * S;
          s += d * T;
          t += d * U;
          u += d * V;
          v += d * W;
          w += d * X;
          x += d * c;
          d = b[5];
          j += d * J;
          k += d * K;
          l += d * L;
          m += d * M;
          n += d * N;
          o += d * O;
          p += d * P;
          q += d * Q;
          r += d * R;
          s += d * S;
          t += d * T;
          u += d * U;
          v += d * V;
          w += d * W;
          x += d * X;
          y += d * c;
          d = b[6];
          k += d * J;
          l += d * K;
          m += d * L;
          n += d * M;
          o += d * N;
          p += d * O;
          q += d * P;
          r += d * Q;
          s += d * R;
          t += d * S;
          u += d * T;
          v += d * U;
          w += d * V;
          x += d * W;
          y += d * X;
          z += d * c;
          d = b[7];
          l += d * J;
          m += d * K;
          n += d * L;
          o += d * M;
          p += d * N;
          q += d * O;
          r += d * P;
          s += d * Q;
          t += d * R;
          u += d * S;
          v += d * T;
          w += d * U;
          x += d * V;
          y += d * W;
          z += d * X;
          A += d * c;
          d = b[8];
          m += d * J;
          n += d * K;
          o += d * L;
          p += d * M;
          q += d * N;
          r += d * O;
          s += d * P;
          t += d * Q;
          u += d * R;
          v += d * S;
          w += d * T;
          x += d * U;
          y += d * V;
          z += d * W;
          A += d * X;
          B += d * c;
          d = b[9];
          n += d * J;
          o += d * K;
          p += d * L;
          q += d * M;
          r += d * N;
          s += d * O;
          t += d * P;
          u += d * Q;
          v += d * R;
          w += d * S;
          x += d * T;
          y += d * U;
          z += d * V;
          A += d * W;
          B += d * X;
          C += d * c;
          d = b[10];
          o += d * J;
          p += d * K;
          q += d * L;
          r += d * M;
          s += d * N;
          t += d * O;
          u += d * P;
          v += d * Q;
          w += d * R;
          x += d * S;
          y += d * T;
          z += d * U;
          A += d * V;
          B += d * W;
          C += d * X;
          D += d * c;
          d = b[11];
          p += d * J;
          q += d * K;
          r += d * L;
          s += d * M;
          t += d * N;
          u += d * O;
          v += d * P;
          w += d * Q;
          x += d * R;
          y += d * S;
          z += d * T;
          A += d * U;
          B += d * V;
          C += d * W;
          D += d * X;
          E += d * c;
          d = b[12];
          q += d * J;
          r += d * K;
          s += d * L;
          t += d * M;
          u += d * N;
          v += d * O;
          w += d * P;
          x += d * Q;
          y += d * R;
          z += d * S;
          A += d * T;
          B += d * U;
          C += d * V;
          D += d * W;
          E += d * X;
          F += d * c;
          d = b[13];
          r += d * J;
          s += d * K;
          t += d * L;
          u += d * M;
          v += d * N;
          w += d * O;
          x += d * P;
          y += d * Q;
          z += d * R;
          A += d * S;
          B += d * T;
          C += d * U;
          D += d * V;
          E += d * W;
          F += d * X;
          G += d * c;
          d = b[14];
          s += d * J;
          t += d * K;
          u += d * L;
          v += d * M;
          w += d * N;
          x += d * O;
          y += d * P;
          z += d * Q;
          A += d * R;
          B += d * S;
          C += d * T;
          D += d * U;
          E += d * V;
          F += d * W;
          G += d * X;
          H += d * c;
          d = b[15];
          t += d * J;
          u += d * K;
          v += d * L;
          w += d * M;
          x += d * N;
          y += d * O;
          z += d * P;
          A += d * Q;
          B += d * R;
          C += d * S;
          D += d * T;
          E += d * U;
          F += d * V;
          G += d * W;
          H += d * X;
          I += d * c;
          e += 38 * u;
          f += 38 * v;
          g += 38 * w;
          h += 38 * x;
          i += 38 * y;
          j += 38 * z;
          k += 38 * A;
          l += 38 * B;
          m += 38 * C;
          n += 38 * D;
          o += 38 * E;
          p += 38 * F;
          q += 38 * G;
          r += 38 * H;
          s += 38 * I;
          b = 1;
          d = e + b + 65535;
          b = Math.floor(d / 65536);
          e = d - b * 65536;
          d = f + b + 65535;
          b = Math.floor(d / 65536);
          f = d - b * 65536;
          d = g + b + 65535;
          b = Math.floor(d / 65536);
          g = d - b * 65536;
          d = h + b + 65535;
          b = Math.floor(d / 65536);
          h = d - b * 65536;
          d = i + b + 65535;
          b = Math.floor(d / 65536);
          i = d - b * 65536;
          d = j + b + 65535;
          b = Math.floor(d / 65536);
          j = d - b * 65536;
          d = k + b + 65535;
          b = Math.floor(d / 65536);
          k = d - b * 65536;
          d = l + b + 65535;
          b = Math.floor(d / 65536);
          l = d - b * 65536;
          d = m + b + 65535;
          b = Math.floor(d / 65536);
          m = d - b * 65536;
          d = n + b + 65535;
          b = Math.floor(d / 65536);
          n = d - b * 65536;
          d = o + b + 65535;
          b = Math.floor(d / 65536);
          o = d - b * 65536;
          d = p + b + 65535;
          b = Math.floor(d / 65536);
          p = d - b * 65536;
          d = q + b + 65535;
          b = Math.floor(d / 65536);
          q = d - b * 65536;
          d = r + b + 65535;
          b = Math.floor(d / 65536);
          r = d - b * 65536;
          d = s + b + 65535;
          b = Math.floor(d / 65536);
          s = d - b * 65536;
          d = t + b + 65535;
          b = Math.floor(d / 65536);
          t = d - b * 65536;
          e += b - 1 + 37 * (b - 1);
          b = 1;
          d = e + b + 65535;
          b = Math.floor(d / 65536);
          e = d - b * 65536;
          d = f + b + 65535;
          b = Math.floor(d / 65536);
          f = d - b * 65536;
          d = g + b + 65535;
          b = Math.floor(d / 65536);
          g = d - b * 65536;
          d = h + b + 65535;
          b = Math.floor(d / 65536);
          h = d - b * 65536;
          d = i + b + 65535;
          b = Math.floor(d / 65536);
          i = d - b * 65536;
          d = j + b + 65535;
          b = Math.floor(d / 65536);
          j = d - b * 65536;
          d = k + b + 65535;
          b = Math.floor(d / 65536);
          k = d - b * 65536;
          d = l + b + 65535;
          b = Math.floor(d / 65536);
          l = d - b * 65536;
          d = m + b + 65535;
          b = Math.floor(d / 65536);
          m = d - b * 65536;
          d = n + b + 65535;
          b = Math.floor(d / 65536);
          n = d - b * 65536;
          d = o + b + 65535;
          b = Math.floor(d / 65536);
          o = d - b * 65536;
          d = p + b + 65535;
          b = Math.floor(d / 65536);
          p = d - b * 65536;
          d = q + b + 65535;
          b = Math.floor(d / 65536);
          q = d - b * 65536;
          d = r + b + 65535;
          b = Math.floor(d / 65536);
          r = d - b * 65536;
          d = s + b + 65535;
          b = Math.floor(d / 65536);
          s = d - b * 65536;
          d = t + b + 65535;
          b = Math.floor(d / 65536);
          t = d - b * 65536;
          e += b - 1 + 37 * (b - 1);
          a[0] = e;
          a[1] = f;
          a[2] = g;
          a[3] = h;
          a[4] = i;
          a[5] = j;
          a[6] = k;
          a[7] = l;
          a[8] = m;
          a[9] = n;
          a[10] = o;
          a[11] = p;
          a[12] = q;
          a[13] = r;
          a[14] = s;
          a[15] = t;
        }
        function P(a, b) {
          O(a, b, b);
        }
        function Q(a, c) {
          var d = b(),
            e;
          for (e = 0; e < 16; e++) d[e] = c[e];
          for (e = 253; e >= 0; e--) P(d, d), e !== 2 && e !== 4 && O(d, d, c);
          for (e = 0; e < 16; e++) a[e] = d[e];
        }
        function R(a, c) {
          var d = b(),
            e;
          for (e = 0; e < 16; e++) d[e] = c[e];
          for (e = 250; e >= 0; e--) P(d, d), e !== 1 && O(d, d, c);
          for (e = 0; e < 16; e++) a[e] = d[e];
        }
        function S(a, c, d) {
          var e = new Uint8Array(32),
            f = new Float64Array(80),
            g,
            i = b(),
            j = b(),
            k = b(),
            l = b(),
            m = b(),
            n = b();
          for (g = 0; g < 31; g++) e[g] = c[g];
          e[31] = (c[31] & 127) | 64;
          e[0] &= 248;
          L(f, d);
          for (g = 0; g < 16; g++) (j[g] = f[g]), (l[g] = i[g] = k[g] = 0);
          i[0] = l[0] = 1;
          for (g = 254; g >= 0; --g)
            (c = (e[g >>> 3] >>> (g & 7)) & 1),
              H(i, j, c),
              H(k, l, c),
              M(m, i, k),
              N(i, i, k),
              M(k, j, l),
              N(j, j, l),
              P(l, m),
              P(n, i),
              O(i, k, i),
              O(k, j, m),
              M(m, i, k),
              N(i, i, k),
              P(j, i),
              N(k, l, n),
              O(i, k, h),
              M(i, i, l),
              O(k, k, i),
              O(i, l, n),
              O(l, j, f),
              P(j, m),
              H(i, j, c),
              H(k, l, c);
          for (g = 0; g < 16; g++)
            (f[g + 16] = i[g]),
              (f[g + 32] = k[g]),
              (f[g + 48] = j[g]),
              (f[g + 64] = l[g]);
          d = f.subarray(32);
          c = f.subarray(16);
          Q(d, d);
          O(c, c, d);
          I(a, c);
          return 0;
        }
        function T(a, b) {
          return S(a, b, e);
        }
        function U(a, b) {
          c(b, 32);
          return T(a, b);
        }
        function V(a, b, c) {
          var e = new Uint8Array(32);
          S(e, c, b);
          return u(a, d, e, v);
        }
        var W = D,
          X = E;
        function aa(a, b, c, d, e, f) {
          var g = new Uint8Array(32);
          V(g, e, f);
          return W(a, b, c, d, g);
        }
        function ba(a, b, c, d, e, f) {
          var g = new Uint8Array(32);
          V(g, e, f);
          return X(a, b, c, d, g);
        }
        var ca = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ];
        function da(a, b, c, d) {
          var e = new Int32Array(16),
            f = new Int32Array(16),
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w,
            x,
            y,
            z,
            A,
            B,
            C,
            D,
            E,
            F,
            G = a[0],
            H = a[1],
            I = a[2],
            J = a[3],
            K = a[4],
            L = a[5],
            M = a[6],
            N = a[7],
            O = b[0],
            P = b[1],
            Q = b[2],
            R = b[3],
            S = b[4],
            T = b[5],
            U = b[6],
            V = b[7],
            W = 0;
          while (d >= 128) {
            for (y = 0; y < 16; y++)
              (z = 8 * y + W),
                (e[y] =
                  (c[z + 0] << 24) |
                  (c[z + 1] << 16) |
                  (c[z + 2] << 8) |
                  c[z + 3]),
                (f[y] =
                  (c[z + 4] << 24) |
                  (c[z + 5] << 16) |
                  (c[z + 6] << 8) |
                  c[z + 7]);
            for (y = 0; y < 80; y++) {
              g = G;
              h = H;
              i = I;
              j = J;
              k = K;
              l = L;
              m = M;
              N;
              o = O;
              p = P;
              q = Q;
              r = R;
              s = S;
              t = T;
              u = U;
              V;
              A = N;
              B = V;
              C = B & 65535;
              D = B >>> 16;
              E = A & 65535;
              F = A >>> 16;
              A =
                ((K >>> 14) | (S << (32 - 14))) ^
                ((K >>> 18) | (S << (32 - 18))) ^
                ((S >>> (41 - 32)) | (K << (32 - (41 - 32))));
              B =
                ((S >>> 14) | (K << (32 - 14))) ^
                ((S >>> 18) | (K << (32 - 18))) ^
                ((K >>> (41 - 32)) | (S << (32 - (41 - 32))));
              C += B & 65535;
              D += B >>> 16;
              E += A & 65535;
              F += A >>> 16;
              A = (K & L) ^ (~K & M);
              B = (S & T) ^ (~S & U);
              C += B & 65535;
              D += B >>> 16;
              E += A & 65535;
              F += A >>> 16;
              A = ca[y * 2];
              B = ca[y * 2 + 1];
              C += B & 65535;
              D += B >>> 16;
              E += A & 65535;
              F += A >>> 16;
              A = e[y % 16];
              B = f[y % 16];
              C += B & 65535;
              D += B >>> 16;
              E += A & 65535;
              F += A >>> 16;
              D += C >>> 16;
              E += D >>> 16;
              F += E >>> 16;
              w = (E & 65535) | (F << 16);
              x = (C & 65535) | (D << 16);
              A = w;
              B = x;
              C = B & 65535;
              D = B >>> 16;
              E = A & 65535;
              F = A >>> 16;
              A =
                ((G >>> 28) | (O << (32 - 28))) ^
                ((O >>> (34 - 32)) | (G << (32 - (34 - 32)))) ^
                ((O >>> (39 - 32)) | (G << (32 - (39 - 32))));
              B =
                ((O >>> 28) | (G << (32 - 28))) ^
                ((G >>> (34 - 32)) | (O << (32 - (34 - 32)))) ^
                ((G >>> (39 - 32)) | (O << (32 - (39 - 32))));
              C += B & 65535;
              D += B >>> 16;
              E += A & 65535;
              F += A >>> 16;
              A = (G & H) ^ (G & I) ^ (H & I);
              B = (O & P) ^ (O & Q) ^ (P & Q);
              C += B & 65535;
              D += B >>> 16;
              E += A & 65535;
              F += A >>> 16;
              D += C >>> 16;
              E += D >>> 16;
              F += E >>> 16;
              n = (E & 65535) | (F << 16);
              v = (C & 65535) | (D << 16);
              A = j;
              B = r;
              C = B & 65535;
              D = B >>> 16;
              E = A & 65535;
              F = A >>> 16;
              A = w;
              B = x;
              C += B & 65535;
              D += B >>> 16;
              E += A & 65535;
              F += A >>> 16;
              D += C >>> 16;
              E += D >>> 16;
              F += E >>> 16;
              j = (E & 65535) | (F << 16);
              r = (C & 65535) | (D << 16);
              H = g;
              I = h;
              J = i;
              K = j;
              L = k;
              M = l;
              N = m;
              G = n;
              P = o;
              Q = p;
              R = q;
              S = r;
              T = s;
              U = t;
              V = u;
              O = v;
              if (y % 16 === 15)
                for (z = 0; z < 16; z++)
                  (A = e[z]),
                    (B = f[z]),
                    (C = B & 65535),
                    (D = B >>> 16),
                    (E = A & 65535),
                    (F = A >>> 16),
                    (A = e[(z + 9) % 16]),
                    (B = f[(z + 9) % 16]),
                    (C += B & 65535),
                    (D += B >>> 16),
                    (E += A & 65535),
                    (F += A >>> 16),
                    (w = e[(z + 1) % 16]),
                    (x = f[(z + 1) % 16]),
                    (A =
                      ((w >>> 1) | (x << (32 - 1))) ^
                      ((w >>> 8) | (x << (32 - 8))) ^
                      (w >>> 7)),
                    (B =
                      ((x >>> 1) | (w << (32 - 1))) ^
                      ((x >>> 8) | (w << (32 - 8))) ^
                      ((x >>> 7) | (w << (32 - 7)))),
                    (C += B & 65535),
                    (D += B >>> 16),
                    (E += A & 65535),
                    (F += A >>> 16),
                    (w = e[(z + 14) % 16]),
                    (x = f[(z + 14) % 16]),
                    (A =
                      ((w >>> 19) | (x << (32 - 19))) ^
                      ((x >>> (61 - 32)) | (w << (32 - (61 - 32)))) ^
                      (w >>> 6)),
                    (B =
                      ((x >>> 19) | (w << (32 - 19))) ^
                      ((w >>> (61 - 32)) | (x << (32 - (61 - 32)))) ^
                      ((x >>> 6) | (w << (32 - 6)))),
                    (C += B & 65535),
                    (D += B >>> 16),
                    (E += A & 65535),
                    (F += A >>> 16),
                    (D += C >>> 16),
                    (E += D >>> 16),
                    (F += E >>> 16),
                    (e[z] = (E & 65535) | (F << 16)),
                    (f[z] = (C & 65535) | (D << 16));
            }
            A = G;
            B = O;
            C = B & 65535;
            D = B >>> 16;
            E = A & 65535;
            F = A >>> 16;
            A = a[0];
            B = b[0];
            C += B & 65535;
            D += B >>> 16;
            E += A & 65535;
            F += A >>> 16;
            D += C >>> 16;
            E += D >>> 16;
            F += E >>> 16;
            a[0] = G = (E & 65535) | (F << 16);
            b[0] = O = (C & 65535) | (D << 16);
            A = H;
            B = P;
            C = B & 65535;
            D = B >>> 16;
            E = A & 65535;
            F = A >>> 16;
            A = a[1];
            B = b[1];
            C += B & 65535;
            D += B >>> 16;
            E += A & 65535;
            F += A >>> 16;
            D += C >>> 16;
            E += D >>> 16;
            F += E >>> 16;
            a[1] = H = (E & 65535) | (F << 16);
            b[1] = P = (C & 65535) | (D << 16);
            A = I;
            B = Q;
            C = B & 65535;
            D = B >>> 16;
            E = A & 65535;
            F = A >>> 16;
            A = a[2];
            B = b[2];
            C += B & 65535;
            D += B >>> 16;
            E += A & 65535;
            F += A >>> 16;
            D += C >>> 16;
            E += D >>> 16;
            F += E >>> 16;
            a[2] = I = (E & 65535) | (F << 16);
            b[2] = Q = (C & 65535) | (D << 16);
            A = J;
            B = R;
            C = B & 65535;
            D = B >>> 16;
            E = A & 65535;
            F = A >>> 16;
            A = a[3];
            B = b[3];
            C += B & 65535;
            D += B >>> 16;
            E += A & 65535;
            F += A >>> 16;
            D += C >>> 16;
            E += D >>> 16;
            F += E >>> 16;
            a[3] = J = (E & 65535) | (F << 16);
            b[3] = R = (C & 65535) | (D << 16);
            A = K;
            B = S;
            C = B & 65535;
            D = B >>> 16;
            E = A & 65535;
            F = A >>> 16;
            A = a[4];
            B = b[4];
            C += B & 65535;
            D += B >>> 16;
            E += A & 65535;
            F += A >>> 16;
            D += C >>> 16;
            E += D >>> 16;
            F += E >>> 16;
            a[4] = K = (E & 65535) | (F << 16);
            b[4] = S = (C & 65535) | (D << 16);
            A = L;
            B = T;
            C = B & 65535;
            D = B >>> 16;
            E = A & 65535;
            F = A >>> 16;
            A = a[5];
            B = b[5];
            C += B & 65535;
            D += B >>> 16;
            E += A & 65535;
            F += A >>> 16;
            D += C >>> 16;
            E += D >>> 16;
            F += E >>> 16;
            a[5] = L = (E & 65535) | (F << 16);
            b[5] = T = (C & 65535) | (D << 16);
            A = M;
            B = U;
            C = B & 65535;
            D = B >>> 16;
            E = A & 65535;
            F = A >>> 16;
            A = a[6];
            B = b[6];
            C += B & 65535;
            D += B >>> 16;
            E += A & 65535;
            F += A >>> 16;
            D += C >>> 16;
            E += D >>> 16;
            F += E >>> 16;
            a[6] = M = (E & 65535) | (F << 16);
            b[6] = U = (C & 65535) | (D << 16);
            A = N;
            B = V;
            C = B & 65535;
            D = B >>> 16;
            E = A & 65535;
            F = A >>> 16;
            A = a[7];
            B = b[7];
            C += B & 65535;
            D += B >>> 16;
            E += A & 65535;
            F += A >>> 16;
            D += C >>> 16;
            E += D >>> 16;
            F += E >>> 16;
            a[7] = N = (E & 65535) | (F << 16);
            b[7] = V = (C & 65535) | (D << 16);
            W += 128;
            d -= 128;
          }
          return d;
        }
        function Y(a, b, c) {
          var d = new Int32Array(8),
            e = new Int32Array(8),
            f = new Uint8Array(256),
            g,
            h = c;
          d[0] = 1779033703;
          d[1] = 3144134277;
          d[2] = 1013904242;
          d[3] = 2773480762;
          d[4] = 1359893119;
          d[5] = 2600822924;
          d[6] = 528734635;
          d[7] = 1541459225;
          e[0] = 4089235720;
          e[1] = 2227873595;
          e[2] = 4271175723;
          e[3] = 1595750129;
          e[4] = 2917565137;
          e[5] = 725511199;
          e[6] = 4215389547;
          e[7] = 327033209;
          da(d, e, b, c);
          c %= 128;
          for (g = 0; g < c; g++) f[g] = b[h - c + g];
          f[c] = 128;
          c = 256 - 128 * (c < 112 ? 1 : 0);
          f[c - 9] = 0;
          n(f, c - 8, (h / 536870912) | 0, h << 3);
          da(d, e, f, c);
          for (g = 0; g < 8; g++) n(a, 8 * g, d[g], e[g]);
          return 0;
        }
        function ea(a, c) {
          var d = b(),
            e = b(),
            f = b(),
            g = b(),
            h = b(),
            i = b(),
            k = b(),
            l = b(),
            m = b();
          N(d, a[1], a[0]);
          N(m, c[1], c[0]);
          O(d, d, m);
          M(e, a[0], a[1]);
          M(m, c[0], c[1]);
          O(e, e, m);
          O(f, a[3], c[3]);
          O(f, f, j);
          O(g, a[2], c[2]);
          M(g, g, g);
          N(h, e, d);
          N(i, g, f);
          M(k, g, f);
          M(l, e, d);
          O(a[0], h, i);
          O(a[1], l, k);
          O(a[2], k, i);
          O(a[3], h, l);
        }
        function fa(a, b, c) {
          var d;
          for (d = 0; d < 4; d++) H(a[d], b[d], c);
        }
        function ga(a, c) {
          var d = b(),
            e = b(),
            f = b();
          Q(f, c[2]);
          O(d, c[0], f);
          O(e, c[1], f);
          I(a, e);
          a[31] ^= K(d) << 7;
        }
        function ha(a, b, c) {
          var d, e;
          F(a[0], f);
          F(a[1], g);
          F(a[2], g);
          F(a[3], f);
          for (e = 255; e >= 0; --e)
            (d = (c[(e / 8) | 0] >> (e & 7)) & 1),
              fa(a, b, d),
              ea(b, a),
              ea(a, a),
              fa(a, b, d);
        }
        function ia(a, c) {
          var d = [b(), b(), b(), b()];
          F(d[0], k);
          F(d[1], l);
          F(d[2], g);
          O(d[3], k, l);
          ha(a, d, c);
        }
        function ja(a, d, e) {
          var f = new Uint8Array(64),
            g = [b(), b(), b(), b()];
          e || c(d, 32);
          Y(f, d, 32);
          f[0] &= 248;
          f[31] &= 127;
          f[31] |= 64;
          ia(g, f);
          ga(a, g);
          for (e = 0; e < 32; e++) d[e + 32] = a[e];
          return 0;
        }
        var ka = new Float64Array([
          237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
          20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
        ]);
        function la(a, b) {
          var c, d, e, f;
          for (d = 63; d >= 32; --d) {
            c = 0;
            for (e = d - 32, f = d - 12; e < f; ++e)
              (b[e] += c - 16 * b[d] * ka[e - (d - 32)]),
                (c = Math.floor((b[e] + 128) / 256)),
                (b[e] -= c * 256);
            b[e] += c;
            b[d] = 0;
          }
          c = 0;
          for (e = 0; e < 32; e++)
            (b[e] += c - (b[31] >> 4) * ka[e]), (c = b[e] >> 8), (b[e] &= 255);
          for (e = 0; e < 32; e++) b[e] -= c * ka[e];
          for (d = 0; d < 32; d++) (b[d + 1] += b[d] >> 8), (a[d] = b[d] & 255);
        }
        function ma(a) {
          var b = new Float64Array(64),
            c;
          for (c = 0; c < 64; c++) b[c] = a[c];
          for (c = 0; c < 64; c++) a[c] = 0;
          la(a, b);
        }
        function na(a, c, d, e) {
          var f = new Uint8Array(64),
            g = new Uint8Array(64),
            h = new Uint8Array(64),
            i,
            j = new Float64Array(64),
            k = [b(), b(), b(), b()];
          Y(f, e, 32);
          f[0] &= 248;
          f[31] &= 127;
          f[31] |= 64;
          var l = d + 64;
          for (i = 0; i < d; i++) a[64 + i] = c[i];
          for (i = 0; i < 32; i++) a[32 + i] = f[32 + i];
          Y(h, a.subarray(32), d + 32);
          ma(h);
          ia(k, h);
          ga(a, k);
          for (i = 32; i < 64; i++) a[i] = e[i];
          Y(g, a, d + 64);
          ma(g);
          for (i = 0; i < 64; i++) j[i] = 0;
          for (i = 0; i < 32; i++) j[i] = h[i];
          for (i = 0; i < 32; i++)
            for (c = 0; c < 32; c++) j[i + c] += g[i] * f[c];
          la(a.subarray(32), j);
          return l;
        }
        function oa(a, c) {
          var d = b(),
            e = b(),
            h = b(),
            j = b(),
            k = b(),
            l = b(),
            n = b();
          F(a[2], g);
          L(a[1], c);
          P(h, a[1]);
          O(j, h, i);
          N(h, h, a[2]);
          M(j, a[2], j);
          P(k, j);
          P(l, k);
          O(n, l, k);
          O(d, n, h);
          O(d, d, j);
          R(d, d);
          O(d, d, h);
          O(d, d, j);
          O(d, d, j);
          O(a[0], d, j);
          P(e, a[0]);
          O(e, e, j);
          J(e, h) && O(a[0], a[0], m);
          P(e, a[0]);
          O(e, e, j);
          if (J(e, h)) return -1;
          K(a[0]) === c[31] >> 7 && N(a[0], f, a[0]);
          O(a[3], a[0], a[1]);
          return 0;
        }
        function pa(a, c, d, e) {
          var f,
            g = new Uint8Array(32),
            h = new Uint8Array(64),
            i = [b(), b(), b(), b()],
            j = [b(), b(), b(), b()];
          if (d < 64) return -1;
          if (oa(j, e)) return -1;
          for (f = 0; f < d; f++) a[f] = c[f];
          for (f = 0; f < 32; f++) a[f + 32] = e[f];
          Y(h, a, d);
          ma(h);
          ha(i, j, h);
          ia(j, c.subarray(32));
          ea(i, j);
          ga(g, i);
          d -= 64;
          if (q(c, 0, g, 0)) {
            for (f = 0; f < d; f++) a[f] = 0;
            return -1;
          }
          for (f = 0; f < d; f++) a[f] = c[f + 64];
          return d;
        }
        var qa = 32,
          ra = 24,
          sa = 32,
          ta = 16,
          ua = 32,
          va = 32,
          wa = 32,
          xa = 32,
          ya = 32,
          za = ra,
          Aa = sa,
          Ba = ta,
          Z = 64,
          Ca = 32,
          Da = 64,
          Ea = 32,
          Fa = 64;
        a.lowlevel = {
          crypto_core_hsalsa20: u,
          crypto_stream_xor: z,
          crypto_stream: y,
          crypto_stream_salsa20_xor: w,
          crypto_stream_salsa20: x,
          crypto_onetimeauth: B,
          crypto_onetimeauth_verify: C,
          crypto_verify_16: p,
          crypto_verify_32: q,
          crypto_secretbox: D,
          crypto_secretbox_open: E,
          crypto_scalarmult: S,
          crypto_scalarmult_base: T,
          crypto_box_beforenm: V,
          crypto_box_afternm: W,
          crypto_box: aa,
          crypto_box_open: ba,
          crypto_box_keypair: U,
          crypto_hash: Y,
          crypto_sign: na,
          crypto_sign_keypair: ja,
          crypto_sign_open: pa,
          crypto_secretbox_KEYBYTES: qa,
          crypto_secretbox_NONCEBYTES: ra,
          crypto_secretbox_ZEROBYTES: sa,
          crypto_secretbox_BOXZEROBYTES: ta,
          crypto_scalarmult_BYTES: ua,
          crypto_scalarmult_SCALARBYTES: va,
          crypto_box_PUBLICKEYBYTES: wa,
          crypto_box_SECRETKEYBYTES: xa,
          crypto_box_BEFORENMBYTES: ya,
          crypto_box_NONCEBYTES: za,
          crypto_box_ZEROBYTES: Aa,
          crypto_box_BOXZEROBYTES: Ba,
          crypto_sign_BYTES: Z,
          crypto_sign_PUBLICKEYBYTES: Ca,
          crypto_sign_SECRETKEYBYTES: Da,
          crypto_sign_SEEDBYTES: Ea,
          crypto_hash_BYTES: Fa,
          gf: b,
          D: i,
          L: ka,
          pack25519: I,
          unpack25519: L,
          M: O,
          A: M,
          S: P,
          Z: N,
          pow2523: R,
          add: ea,
          set25519: F,
          modL: la,
          scalarmult: ha,
          scalarbase: ia,
        };
        function Ga(a, b) {
          if (a.length !== qa) throw new Error("bad key size");
          if (b.length !== ra) throw new Error("bad nonce size");
        }
        function Ha(a, b) {
          if (a.length !== wa) throw new Error("bad public key size");
          if (b.length !== xa) throw new Error("bad secret key size");
        }
        function $() {
          for (var a = 0; a < arguments.length; a++)
            if (!(arguments[a] instanceof Uint8Array))
              throw new TypeError("unexpected type, use Uint8Array");
        }
        function Ia(a) {
          for (var b = 0; b < a.length; b++) a[b] = 0;
        }
        a.randomBytes = function (a) {
          var b = new Uint8Array(a);
          c(b, a);
          return b;
        };
        a.secretbox = function (a, b, c) {
          $(a, b, c);
          Ga(c, b);
          var d = new Uint8Array(sa + a.length),
            e = new Uint8Array(d.length);
          for (var f = 0; f < a.length; f++) d[f + sa] = a[f];
          D(e, d, d.length, b, c);
          return e.subarray(ta);
        };
        a.secretbox.open = function (a, b, c) {
          $(a, b, c);
          Ga(c, b);
          var d = new Uint8Array(ta + a.length),
            e = new Uint8Array(d.length);
          for (var f = 0; f < a.length; f++) d[f + ta] = a[f];
          if (d.length < 32) return null;
          return E(e, d, d.length, b, c) !== 0 ? null : e.subarray(sa);
        };
        a.secretbox.keyLength = qa;
        a.secretbox.nonceLength = ra;
        a.secretbox.overheadLength = ta;
        a.scalarMult = function (a, b) {
          $(a, b);
          if (a.length !== va) throw new Error("bad n size");
          if (b.length !== ua) throw new Error("bad p size");
          var c = new Uint8Array(ua);
          S(c, a, b);
          return c;
        };
        a.scalarMult.base = function (a) {
          $(a);
          if (a.length !== va) throw new Error("bad n size");
          var b = new Uint8Array(ua);
          T(b, a);
          return b;
        };
        a.scalarMult.scalarLength = va;
        a.scalarMult.groupElementLength = ua;
        a.box = function (b, c, d, e) {
          d = a.box.before(d, e);
          return a.secretbox(b, c, d);
        };
        a.box.before = function (a, b) {
          $(a, b);
          Ha(a, b);
          var c = new Uint8Array(ya);
          V(c, a, b);
          return c;
        };
        a.box.after = a.secretbox;
        a.box.open = function (b, c, d, e) {
          d = a.box.before(d, e);
          return a.secretbox.open(b, c, d);
        };
        a.box.open.after = a.secretbox.open;
        a.box.keyPair = function () {
          var a = new Uint8Array(wa),
            b = new Uint8Array(xa);
          U(a, b);
          return { publicKey: a, secretKey: b };
        };
        a.box.keyPair.fromSecretKey = function (a) {
          $(a);
          if (a.length !== xa) throw new Error("bad secret key size");
          var b = new Uint8Array(wa);
          T(b, a);
          return { publicKey: b, secretKey: new Uint8Array(a) };
        };
        a.box.publicKeyLength = wa;
        a.box.secretKeyLength = xa;
        a.box.sharedKeyLength = ya;
        a.box.nonceLength = za;
        a.box.overheadLength = a.secretbox.overheadLength;
        a.sign = function (a, b) {
          $(a, b);
          if (b.length !== Da) throw new Error("bad secret key size");
          var c = new Uint8Array(Z + a.length);
          na(c, a, a.length, b);
          return c;
        };
        a.sign.open = function (a, b) {
          $(a, b);
          if (b.length !== Ca) throw new Error("bad public key size");
          var c = new Uint8Array(a.length);
          a = pa(c, a, a.length, b);
          if (a < 0) return null;
          b = new Uint8Array(a);
          for (a = 0; a < b.length; a++) b[a] = c[a];
          return b;
        };
        a.sign.detached = function (b, c) {
          b = a.sign(b, c);
          c = new Uint8Array(Z);
          for (var d = 0; d < c.length; d++) c[d] = b[d];
          return c;
        };
        a.sign.detached.verify = function (a, b, c) {
          $(a, b, c);
          if (b.length !== Z) throw new Error("bad signature size");
          if (c.length !== Ca) throw new Error("bad public key size");
          var d = new Uint8Array(Z + a.length),
            e = new Uint8Array(Z + a.length),
            f;
          for (f = 0; f < Z; f++) d[f] = b[f];
          for (f = 0; f < a.length; f++) d[f + Z] = a[f];
          return pa(e, d, d.length, c) >= 0;
        };
        a.sign.keyPair = function () {
          var a = new Uint8Array(Ca),
            b = new Uint8Array(Da);
          ja(a, b);
          return { publicKey: a, secretKey: b };
        };
        a.sign.keyPair.fromSecretKey = function (a) {
          $(a);
          if (a.length !== Da) throw new Error("bad secret key size");
          var b = new Uint8Array(Ca);
          for (var c = 0; c < b.length; c++) b[c] = a[32 + c];
          return { publicKey: b, secretKey: new Uint8Array(a) };
        };
        a.sign.keyPair.fromSeed = function (a) {
          $(a);
          if (a.length !== Ea) throw new Error("bad seed size");
          var b = new Uint8Array(Ca),
            c = new Uint8Array(Da);
          for (var d = 0; d < 32; d++) c[d] = a[d];
          ja(b, c, !0);
          return { publicKey: b, secretKey: c };
        };
        a.sign.publicKeyLength = Ca;
        a.sign.secretKeyLength = Da;
        a.sign.seedLength = Ea;
        a.sign.signatureLength = Z;
        a.hash = function (a) {
          $(a);
          var b = new Uint8Array(Fa);
          Y(b, a, a.length);
          return b;
        };
        a.hash.hashLength = Fa;
        a.verify = function (a, b) {
          $(a, b);
          if (a.length === 0 || b.length === 0) return !1;
          return a.length !== b.length
            ? !1
            : o(a, 0, b, 0, a.length) === 0
            ? !0
            : !1;
        };
        a.setPRNG = function (a) {
          c = a;
        };
        (function () {
          var b =
            typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
          if (b && b.getRandomValues) {
            var c = 65536;
            a.setPRNG(function (a, d) {
              var e,
                f = new Uint8Array(d);
              for (e = 0; e < d; e += c)
                b.getRandomValues(f.subarray(e, e + Math.min(d - e, c)));
              for (e = 0; e < d; e++) a[e] = f[e];
              Ia(f);
            });
          } else
            b &&
              b.randomBytes &&
              a.setPRNG(function (a, c) {
                var d,
                  e = b.randomBytes(c);
                for (d = 0; d < c; d++) a[d] = e[d];
                Ia(e);
              });
        })();
      })(
        typeof g !== "undefined" && g.exports
          ? g.exports
          : (self.nacl = self.nacl || {})
      );
    }
    var i = !1;
    function j() {
      i || ((i = !0), h());
      return g.exports;
    }
    function a(a) {
      switch (a) {
        case void 0:
          return j();
      }
    }
    e.exports = a;
  },
  null
);
__d(
  "tweetnacl",
  ["tweetnacl-1.0.3"],
  function (a, b, c, d, e, f) {
    e.exports = b("tweetnacl-1.0.3")();
  },
  null
);
__d(
  "WACryptoDependencies",
  ["tweetnacl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = self.crypto;
    function a(a) {
      h = a;
      var b = 65536;
      d("tweetnacl").setPRNG(function (c, d) {
        var e,
          f = new Uint8Array(d);
        for (e = 0; e < d; e += b)
          a.getRandomValues(f.subarray(e, e + Math.min(d - e, b)));
        for (e = 0; e < d; e++) c[e] = f[e];
        for (e = 0; e < f.length; e++) f[e] = 0;
      });
    }
    function b() {
      return h;
    }
    g.setCrypto = a;
    g.getCrypto = b;
  },
  98
);
__d(
  "WASIContext",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a) {
      var b;
      this.fs = (b = a == null ? void 0 : a.fs) != null ? b : {};
      this.args = (b = a == null ? void 0 : a.args) != null ? b : [];
      this.env = (b = a == null ? void 0 : a.env) != null ? b : {};
      this.stdin =
        (b = a == null ? void 0 : a.stdin) != null
          ? b
          : function () {
              return null;
            };
      this.stdout =
        (b = a == null ? void 0 : a.stdout) != null ? b : function () {};
      this.stderr =
        (b = a == null ? void 0 : a.stderr) != null ? b : function () {};
      this.debug = a == null ? void 0 : a.debug;
      this.isTTY = !!(a == null ? void 0 : a.isTTY);
    };
    f.WASIContext = a;
  },
  66
);
__d(
  "WASISnapshotPreview1",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
      SUCCESS: 0,
      E2BIG: 1,
      EACCESS: 2,
      EADDRINUSE: 3,
      EADDRNOTAVAIL: 4,
      EAFNOSUPPORT: 5,
      EAGAIN: 6,
      EALREADY: 7,
      EBADF: 8,
      EBADMSG: 9,
      EBUSY: 10,
      ECANCELED: 11,
      ECHILD: 12,
      ECONNABORTED: 13,
      ECONNREFUSED: 14,
      ECONNRESET: 15,
      EDEADLK: 16,
      EDESTADDRREQ: 17,
      EDOM: 18,
      EDQUOT: 19,
      EEXIST: 20,
      EFAULT: 21,
      EFBIG: 22,
      EHOSTUNREACH: 23,
      EIDRM: 24,
      EILSEQ: 25,
      EINPROGRESS: 26,
      EINTR: 27,
      EINVAL: 28,
      EIO: 29,
      EISCONN: 30,
      EISDIR: 31,
      ELOOP: 32,
      EMFILE: 33,
      EMLINK: 34,
      EMSGSIZE: 35,
      EMULTIHOP: 36,
      ENAMETOOLONG: 37,
      ENETDOWN: 38,
      ENETRESET: 39,
      ENETUNREACH: 40,
      ENFILE: 41,
      ENOBUFS: 42,
      ENODEV: 43,
      ENOENT: 44,
      ENOEXEC: 45,
      ENOLCK: 46,
      ENOLINK: 47,
      ENOMEM: 48,
      ENOMSG: 49,
      ENOPROTOOPT: 50,
      ENOSPC: 51,
      ENOSYS: 52,
      ENOTCONN: 53,
      ENOTDIR: 54,
      ENOTEMPTY: 55,
      ENOTRECOVERABLE: 56,
      ENOTSOCK: 57,
      ENOTSUP: 58,
      ENOTTY: 59,
      ENXIO: 60,
      EOVERFLOW: 61,
      EOWNERDEAD: 62,
      EPERM: 63,
      EPIPE: 64,
      EPROTO: 65,
      EPROTONOSUPPORT: 66,
      EPROTOTYPE: 67,
      ERANGE: 68,
      EROFS: 69,
      ESPIPE: 70,
      ESRCH: 71,
      ESTALE: 72,
      ETIMEDOUT: 73,
      ETXTBSY: 74,
      EXDEV: 75,
      ENOTCAPABLE: 76,
    });
    d = (c = b("$InternalEnum"))({
      REALTIME: 0,
      MONOTONIC: 1,
      PROCESS_CPUTIME_ID: 2,
      THREAD_CPUTIME_ID: 3,
    });
    e = c({ SET: 0, CUR: 1, END: 2 });
    b = c({
      UNKNOWN: 0,
      BLOCK_DEVICE: 1,
      CHARACTER_DEVICE: 2,
      DIRECTORY: 3,
      REGULAR_FILE: 4,
      SOCKET_DGRAM: 5,
      SOCKET_STREAM: 6,
      SYMBOLIC_LINK: 7,
    });
    var g = c({ DIR: 0 });
    c = c({ CLOCK: 0, FD_READ: 1, FD_WRITE: 2 });
    var h = { SYMLINK_FOLLOW: 1 << 0 },
      i = { CREAT: 1 << 0, DIRECTORY: 1 << 1, EXCL: 1 << 2, TRUNC: 1 << 3 },
      j = {
        APPEND: 1 << 0,
        DSYNC: 1 << 1,
        NONBLOCK: 1 << 2,
        RSYNC: 1 << 3,
        SYNC: 1 << 4,
      },
      k = {
        FD_DATASYNC: BigInt(1) << BigInt(0),
        FD_READ: BigInt(1) << BigInt(1),
        FD_SEEK: BigInt(1) << BigInt(2),
        FD_FDSTAT_SET_FLAGS: BigInt(1) << BigInt(3),
        FD_SYNC: BigInt(1) << BigInt(4),
        FD_TELL: BigInt(1) << BigInt(5),
        FD_WRITE: BigInt(1) << BigInt(6),
        FD_ADVISE: BigInt(1) << BigInt(7),
        FD_ALLOCATE: BigInt(1) << BigInt(8),
        PATH_CREATE_DIRECTORY: BigInt(1) << BigInt(9),
        PATH_CREATE_FILE: BigInt(1) << BigInt(10),
        PATH_LINK_SOURCE: BigInt(1) << BigInt(11),
        PATH_LINK_TARGET: BigInt(1) << BigInt(12),
        PATH_OPEN: BigInt(1) << BigInt(13),
        FD_READDIR: BigInt(1) << BigInt(14),
        PATH_READLINK: BigInt(1) << BigInt(15),
        PATH_RENAME_SOURCE: BigInt(1) << BigInt(16),
        PATH_RENAME_TARGET: BigInt(1) << BigInt(17),
        PATH_FILESTAT_GET: BigInt(1) << BigInt(18),
        PATH_FILESTAT_SET_SIZE: BigInt(1) << BigInt(19),
        PATH_FILESTAT_SET_TIMES: BigInt(1) << BigInt(20),
        FD_FILESTAT_GET: BigInt(1) << BigInt(21),
        FD_FILESTAT_SET_SIZE: BigInt(1) << BigInt(22),
        FD_FILESTAT_SET_TIMES: BigInt(1) << BigInt(23),
        PATH_SYMLINK: BigInt(1) << BigInt(24),
        PATH_REMOVE_DIRECTORY: BigInt(1) << BigInt(25),
        PATH_UNLINK_FILE: BigInt(1) << BigInt(26),
        POLL_FD_READWRITE: BigInt(1) << BigInt(27),
        SOCK_SHUTDOWN: BigInt(1) << BigInt(28),
        SOCK_ACCEPT: BigInt(1) << BigInt(29),
      },
      l = { ATIM: 1 << 0, ATIM_NOW: 1 << 1, MTIM: 1 << 2, MTIM_NOW: 1 << 3 },
      m = { SUBSCRIPTION_CLOCK_ABSTIME: 1 << 0 },
      n = { FD_READWRITE_HANGUP: 1 << 0 },
      o = 64,
      p = 48,
      q = 32;
    f.RESULT = a;
    f.Clock = d;
    f.Whence = e;
    f.FileType = b;
    f.PreopenType = g;
    f.EventType = c;
    f.LookupFlags = h;
    f.OpenFlags = i;
    f.FileDescriptorFlags = j;
    f.RightsFlags = k;
    f.FileStatTimestampFlags = l;
    f.SubscriptionClockFlags = m;
    f.EventReadWriteFlags = n;
    f.FILESTAT_SIZE = o;
    f.SUBSCRIPTION_SIZE = p;
    f.EVENT_SIZE = q;
  },
  66
);
__d(
  "WATextEncoding",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    e = TextEncoder;
    var g = TextDecoder,
      h = e,
      i = g;
    function a() {
      return new h();
    }
    function b() {
      return new i();
    }
    function c(a) {
      h = a;
    }
    function d(a) {
      i = a;
    }
    f.newTextEncoder = a;
    f.newTextDecoder = b;
    f.setTextEncoderClass = c;
    f.setTextDecoderClass = d;
  },
  66
);
__d(
  "WASIDrive",
  ["WASISnapshotPreview1", "WATextEncoding"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.nextFD = 10),
          (this.openMap = new Map()),
          (this.fs = babelHelpers["extends"]({}, a)),
          this.openMap.set(3, new j(this.fs, "/"));
      }
      var b = a.prototype;
      b.$1 = function (a, b, c) {
        a = new h(a, c);
        b && (a.buffer = new Uint8Array(new ArrayBuffer(1024), 0, 0));
        c = this.nextFD;
        this.openMap.set(c, a);
        this.nextFD++;
        return [d("WASISnapshotPreview1").RESULT.SUCCESS, c];
      };
      b.$2 = function (a, b) {
        a = new j(a, b);
        b = this.nextFD;
        this.openMap.set(b, a);
        this.nextFD++;
        return [d("WASISnapshotPreview1").RESULT.SUCCESS, b];
      };
      b.$3 = function (a, b) {
        return b === "." ? !0 : a.containsDirectory(b);
      };
      b.open = function (a, b, c, e) {
        var f,
          g = !!(c & (f = d("WASISnapshotPreview1")).OpenFlags.CREAT),
          h = !!(c & f.OpenFlags.DIRECTORY),
          i = !!(c & f.OpenFlags.EXCL);
        c = !!(c & f.OpenFlags.TRUNC);
        f = this.openMap.get(a);
        if (!(f instanceof j)) return [d("WASISnapshotPreview1").RESULT.EBADF];
        if (f.containsFile(b)) {
          if (h) return [d("WASISnapshotPreview1").RESULT.ENOTDIR];
          if (i) return [d("WASISnapshotPreview1").RESULT.EEXIST];
          a = f.get(b);
          return this.$1(a, c, e);
        } else if (this.$3(f, b)) {
          if (b === ".") return this.$2(this.fs, "/");
          var k = "/" + b + "/";
          h = Object.entries(this.fs).filter(function (a) {
            a = a[0];
            return a.startsWith(k);
          });
          return this.$2(Object.fromEntries(h), k);
        } else {
          if (g) {
            i = f.fullPath(b);
            this.fs[i] = {
              path: i,
              mode: "binary",
              content: new Uint8Array(0),
              timestamps: {
                access: new Date(),
                modification: new Date(),
                change: new Date(),
              },
            };
            return this.$1(this.fs[i], c, e);
          }
          return [d("WASISnapshotPreview1").RESULT.ENOTCAPABLE];
        }
      };
      b.close = function (a) {
        if (!this.openMap.has(a)) return d("WASISnapshotPreview1").RESULT.EBADF;
        var b = this.openMap.get(a);
        b instanceof h && b.sync();
        this.openMap["delete"](a);
        return d("WASISnapshotPreview1").RESULT.SUCCESS;
      };
      b.read = function (a, b) {
        a = this.openMap.get(a);
        return !a || a instanceof j
          ? [d("WASISnapshotPreview1").RESULT.EBADF]
          : [d("WASISnapshotPreview1").RESULT.SUCCESS, a.read(b)];
      };
      b.pread = function (a, b, c) {
        a = this.openMap.get(a);
        return !a || a instanceof j
          ? [d("WASISnapshotPreview1").RESULT.EBADF]
          : [d("WASISnapshotPreview1").RESULT.SUCCESS, a.pread(b, c)];
      };
      b.write = function (a, b) {
        a = this.openMap.get(a);
        if (!a || a instanceof j) return d("WASISnapshotPreview1").RESULT.EBADF;
        a.write(b);
        return d("WASISnapshotPreview1").RESULT.SUCCESS;
      };
      b.pwrite = function (a, b, c) {
        a = this.openMap.get(a);
        if (!a || a instanceof j) return d("WASISnapshotPreview1").RESULT.EBADF;
        a.pwrite(b, c);
        return d("WASISnapshotPreview1").RESULT.SUCCESS;
      };
      b.sync = function (a) {
        a = this.openMap.get(a);
        if (!a || a instanceof j) return d("WASISnapshotPreview1").RESULT.EBADF;
        a.sync();
        return d("WASISnapshotPreview1").RESULT.SUCCESS;
      };
      b.seek = function (a, b, c) {
        a = this.openMap.get(a);
        return !a || a instanceof j
          ? [d("WASISnapshotPreview1").RESULT.EBADF]
          : [d("WASISnapshotPreview1").RESULT.SUCCESS, a.seek(b, c)];
      };
      b.tell = function (a) {
        a = this.openMap.get(a);
        return !a || a instanceof j
          ? [d("WASISnapshotPreview1").RESULT.EBADF]
          : [d("WASISnapshotPreview1").RESULT.SUCCESS, a.tell()];
      };
      b.renumber = function (a, b) {
        if (!this.exists(a) || !this.exists(b))
          return d("WASISnapshotPreview1").RESULT.EBADF;
        if (a === b) return d("WASISnapshotPreview1").RESULT.SUCCESS;
        this.close(b);
        a = this.openMap.get(a);
        this.openMap.set(b, a);
        return d("WASISnapshotPreview1").RESULT.SUCCESS;
      };
      b.unlink = function (a, b) {
        a = this.openMap.get(a);
        if (!(a instanceof j)) return d("WASISnapshotPreview1").RESULT.EBADF;
        if (!a.contains(b)) return d("WASISnapshotPreview1").RESULT.ENOENT;
        for (var c of Object.keys(this.fs))
          (c === a.fullPath(b) || c.startsWith(a.fullPath(b) + "/")) &&
            delete this.fs[c];
        return d("WASISnapshotPreview1").RESULT.SUCCESS;
      };
      b.rename = function (a, b, c, e) {
        a = this.openMap.get(a);
        c = this.openMap.get(c);
        if (!(a instanceof j) || !(c instanceof j))
          return d("WASISnapshotPreview1").RESULT.EBADF;
        if (!a.contains(b)) return d("WASISnapshotPreview1").RESULT.ENOENT;
        if (c.contains(e)) return d("WASISnapshotPreview1").RESULT.EEXIST;
        a = a.fullPath(b);
        b = c.fullPath(e);
        for (c of Object.keys(this.fs))
          if (c.startsWith(a)) {
            e = c.replace(a, b);
            this.fs[e] = this.fs[c];
            this.fs[e].path = e;
            delete this.fs[c];
          }
        return d("WASISnapshotPreview1").RESULT.SUCCESS;
      };
      b.list = function (a) {
        a = this.openMap.get(a);
        return !(a instanceof j)
          ? [d("WASISnapshotPreview1").RESULT.EBADF]
          : [d("WASISnapshotPreview1").RESULT.SUCCESS, a.list()];
      };
      b.stat = function (a) {
        a = this.openMap.get(a);
        return !(a instanceof h)
          ? [d("WASISnapshotPreview1").RESULT.EBADF]
          : [d("WASISnapshotPreview1").RESULT.SUCCESS, a.stat()];
      };
      b.pathStat = function (a, b) {
        a = this.openMap.get(a);
        if (!(a instanceof j)) return [d("WASISnapshotPreview1").RESULT.EBADF];
        if (a.containsFile(b)) {
          var c = a.fullPath(b);
          c = new h(this.fs[c], 0).stat();
          return [d("WASISnapshotPreview1").RESULT.SUCCESS, c];
        } else if (this.$3(a, b)) {
          if (b === ".")
            return [
              d("WASISnapshotPreview1").RESULT.SUCCESS,
              new j(this.fs, "/").stat(),
            ];
          var e = "/" + b + "/";
          c = Object.entries(this.fs).filter(function (a) {
            a = a[0];
            return a.startsWith(e);
          });
          a = new j(Object.fromEntries(c), e).stat();
          return [d("WASISnapshotPreview1").RESULT.SUCCESS, a];
        } else return [d("WASISnapshotPreview1").RESULT.ENOTCAPABLE];
      };
      b.setFlags = function (a, b) {
        a = this.openMap.get(a);
        if (a instanceof h) {
          a.setFlags(b);
          return d("WASISnapshotPreview1").RESULT.SUCCESS;
        } else return d("WASISnapshotPreview1").RESULT.EBADF;
      };
      b.setSize = function (a, b) {
        a = this.openMap.get(a);
        if (a instanceof h) {
          a.setSize(Number(b));
          return d("WASISnapshotPreview1").RESULT.SUCCESS;
        } else return d("WASISnapshotPreview1").RESULT.EBADF;
      };
      b.setAccessTime = function (a, b) {
        a = this.openMap.get(a);
        if (a instanceof h) {
          a.setAccessTime(b);
          return d("WASISnapshotPreview1").RESULT.SUCCESS;
        } else return d("WASISnapshotPreview1").RESULT.EBADF;
      };
      b.setModificationTime = function (a, b) {
        a = this.openMap.get(a);
        if (a instanceof h) {
          a.setModificationTime(b);
          return d("WASISnapshotPreview1").RESULT.SUCCESS;
        } else return d("WASISnapshotPreview1").RESULT.EBADF;
      };
      b.pathSetAccessTime = function (a, b, c) {
        a = this.openMap.get(a);
        if (!(a instanceof j)) return d("WASISnapshotPreview1").RESULT.EBADF;
        a = a.get(b);
        if (a == null) return d("WASISnapshotPreview1").RESULT.ENOTCAPABLE;
        b = new h(a, 0);
        b.setAccessTime(c);
        b.sync();
        return d("WASISnapshotPreview1").RESULT.SUCCESS;
      };
      b.pathSetModificationTime = function (a, b, c) {
        a = this.openMap.get(a);
        if (!(a instanceof j)) return d("WASISnapshotPreview1").RESULT.EBADF;
        a = a.get(b);
        if (a == null) return d("WASISnapshotPreview1").RESULT.ENOTCAPABLE;
        b = new h(a, 0);
        b.setModificationTime(c);
        b.sync();
        return d("WASISnapshotPreview1").RESULT.SUCCESS;
      };
      b.pathCreateDir = function (a, b) {
        a = this.openMap.get(a);
        if (!(a instanceof j)) return d("WASISnapshotPreview1").RESULT.EBADF;
        if (a.contains(b)) return d("WASISnapshotPreview1").RESULT.ENOTCAPABLE;
        a = a.fullPath(b) + "/.runno";
        this.fs[a] = {
          path: a,
          timestamps: {
            access: new Date(),
            modification: new Date(),
            change: new Date(),
          },
          mode: "string",
          content: "",
        };
        return d("WASISnapshotPreview1").RESULT.SUCCESS;
      };
      b.exists = function (a) {
        return this.openMap.has(a);
      };
      b.fileType = function (a) {
        a = this.openMap.get(a);
        if (!a) return d("WASISnapshotPreview1").FileType.UNKNOWN;
        else if (a instanceof h)
          return d("WASISnapshotPreview1").FileType.REGULAR_FILE;
        else return d("WASISnapshotPreview1").FileType.DIRECTORY;
      };
      b.fileFdflags = function (a) {
        a = this.openMap.get(a);
        if (a instanceof h) return a.fdflags;
        else return 0;
      };
      return a;
    })();
    var h = (function () {
      var b = a.prototype;
      b.getOffset = function () {
        return Number(this.$1);
      };
      function a(a, b) {
        this.$1 = BigInt(0);
        this.isDirty = !1;
        this.file = a;
        if (this.file.mode === "string") {
          a = this.file.content;
          var c = d("WATextEncoding").newTextEncoder();
          this.buffer = c.encode(a);
        } else this.buffer = this.file.content;
        this.fdflags = b;
        this.flagAppend = !!(
          b & d("WASISnapshotPreview1").FileDescriptorFlags.APPEND
        );
        this.flagDSync = !!(
          b & d("WASISnapshotPreview1").FileDescriptorFlags.DSYNC
        );
        this.flagNonBlock = !!(
          b & d("WASISnapshotPreview1").FileDescriptorFlags.NONBLOCK
        );
        this.flagRSync = !!(
          b & d("WASISnapshotPreview1").FileDescriptorFlags.RSYNC
        );
        this.flagSync = !!(
          b & d("WASISnapshotPreview1").FileDescriptorFlags.SYNC
        );
      }
      b.read = function (a) {
        a = this.buffer.subarray(this.getOffset(), this.getOffset() + a);
        this.$1 += BigInt(a.length);
        return a;
      };
      b.pread = function (a, b) {
        return this.buffer.subarray(b, b + a);
      };
      b.write = function (a) {
        this.isDirty = !0;
        if (this.flagAppend) {
          var b = this.buffer.length;
          this.$2(b + a.byteLength);
          this.buffer.set(a, b);
        } else {
          b = Math.max(this.getOffset() + a.byteLength, this.buffer.byteLength);
          this.$2(b);
          this.buffer.set(a, this.getOffset());
          this.$1 += BigInt(a.byteLength);
        }
        (this.flagDSync || this.flagSync) && this.sync();
      };
      b.pwrite = function (a, b) {
        this.isDirty = !0;
        if (this.flagAppend) {
          var c = this.buffer.length;
          this.$2(c + a.byteLength);
          this.buffer.set(a, c);
        } else {
          c = Math.max(b + a.byteLength, this.buffer.byteLength);
          this.$2(c);
          this.buffer.set(a, b);
        }
        (this.flagDSync || this.flagSync) && this.sync();
      };
      b.sync = function () {
        if (!this.isDirty) return;
        this.isDirty = !1;
        if (this.file.mode === "binary") {
          this.file.content = new Uint8Array(this.buffer);
          return;
        }
        var a = d("WATextEncoding").newTextDecoder();
        this.file.content = a.decode(this.buffer);
        return;
      };
      b.seek = function (a, b) {
        switch (b) {
          case d("WASISnapshotPreview1").Whence.SET:
            this.$1 = a;
            break;
          case d("WASISnapshotPreview1").Whence.CUR:
            this.$1 += a;
            break;
          case d("WASISnapshotPreview1").Whence.END:
            this.$1 = BigInt(this.buffer.length) + a;
            break;
        }
        return this.$1;
      };
      b.tell = function () {
        return this.$1;
      };
      b.stat = function () {
        return {
          path: this.file.path,
          timestamps: this.file.timestamps,
          type: d("WASISnapshotPreview1").FileType.REGULAR_FILE,
          byteLength: this.buffer.length,
        };
      };
      b.setFlags = function (a) {
        this.fdflags = a;
      };
      b.setSize = function (a) {
        this.$2(a);
      };
      b.setAccessTime = function (a) {
        this.file.timestamps.access = a;
      };
      b.setModificationTime = function (a) {
        this.file.timestamps.modification = a;
      };
      b.$2 = function (a) {
        if (a <= this.buffer.buffer.byteLength) {
          this.buffer = new Uint8Array(this.buffer.buffer, 0, a);
          return;
        }
        var b;
        this.buffer.buffer.byteLength === 0
          ? (b = new ArrayBuffer(a < 1024 ? 1024 : a * 2))
          : a > this.buffer.buffer.byteLength * 2
          ? (b = new ArrayBuffer(a * 2))
          : (b = new ArrayBuffer(this.buffer.buffer.byteLength * 2));
        b = new Uint8Array(b, 0, a);
        b.set(this.buffer);
        this.buffer = b;
      };
      return a;
    })();
    function i(a, b) {
      b = b.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
      b = new RegExp("^" + b);
      return a.replace(b, "");
    }
    var j = (function () {
      function a(a, b) {
        (this.dir = a), (this.prefix = b);
      }
      var b = a.prototype;
      b.containsFile = function (a) {
        for (var b of Object.keys(this.dir)) {
          var c = i(b, this.prefix);
          if (c === a) return !0;
        }
        return !1;
      };
      b.containsDirectory = function (a) {
        for (var b of Object.keys(this.dir)) {
          var c = i(b, this.prefix);
          if (c.startsWith(a + "/")) return !0;
        }
        return !1;
      };
      b.contains = function (a) {
        for (var b of Object.keys(this.dir)) {
          var c = i(b, this.prefix);
          if (c === a || c.startsWith(a + "/")) return !0;
        }
        return !1;
      };
      b.get = function (a) {
        return this.dir[this.fullPath(a)];
      };
      b.fullPath = function (a) {
        return "" + this.prefix + a;
      };
      b.list = function () {
        var a = [],
          b = new Set();
        for (var c of Object.keys(this.dir)) {
          var e = i(c, this.prefix);
          if (e.includes("/")) {
            var f = e.split("/")[0];
            if (b.has(f)) continue;
            b.add(f);
            a.push({
              name: f,
              type: d("WASISnapshotPreview1").FileType.DIRECTORY,
            });
          } else
            a.push({
              name: e,
              type: d("WASISnapshotPreview1").FileType.REGULAR_FILE,
            });
        }
        return a;
      };
      b.stat = function () {
        return {
          path: this.prefix,
          timestamps: {
            access: new Date(),
            modification: new Date(),
            change: new Date(),
          },
          type: d("WASISnapshotPreview1").FileType.DIRECTORY,
          byteLength: 0,
        };
      };
      return a;
    })();
    g.WASIDrive = a;
  },
  98
);
__d(
  "WASI",
  [
    "WACryptoDependencies",
    "WASIContext",
    "WASIDrive",
    "WASISnapshotPreview1",
    "WATextEncoding",
    "err",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b,
        e = new (d("WASIContext").WASIContext)(a),
        f = new (d("WASIDrive").WASIDrive)(e.fs);
      function g() {
        return Object.entries(e.env).map(function (a) {
          var b = a[0];
          a = a[1];
          return b + "=" + a;
        });
      }
      var o = {
        args_get: function (a, c) {
          a = a;
          c = c;
          var f = new DataView(b.buffer);
          for (var g of e.args) {
            f.setUint32(a, c, !0);
            a += 4;
            var h = d("WATextEncoding")
                .newTextEncoder()
                .encode(g + "\0"),
              i = new Uint8Array(b.buffer, c, h.byteLength);
            i.set(h);
            c += h.byteLength;
          }
          return d("WASISnapshotPreview1").RESULT.SUCCESS;
        },
        args_sizes_get: function (a, c) {
          var f = e.args,
            g = f.reduce(function (a, b) {
              return (
                a +
                d("WATextEncoding")
                  .newTextEncoder()
                  .encode(b + "\0").byteLength
              );
            }, 0),
            h = new DataView(b.buffer);
          h.setUint32(a, f.length, !0);
          h.setUint32(c, g, !0);
          return d("WASISnapshotPreview1").RESULT.SUCCESS;
        },
        clock_res_get: function () {
          throw c("err")("clock_res_get is not implemented");
        },
        clock_time_get: function (a, c, e) {
          c = d("WASISnapshotPreview1").Clock.cast(a);
          if (c == null) return d("WASISnapshotPreview1").RESULT.EINVAL;
          switch (c) {
            case d("WASISnapshotPreview1").Clock.REALTIME:
            case d("WASISnapshotPreview1").Clock.MONOTONIC:
            case d("WASISnapshotPreview1").Clock.PROCESS_CPUTIME_ID:
            case d("WASISnapshotPreview1").Clock.THREAD_CPUTIME_ID:
              a = new DataView(b.buffer);
              a.setBigUint64(e, n(new Date()), !0);
              return d("WASISnapshotPreview1").RESULT.SUCCESS;
          }
        },
        environ_get: function (a, c) {
          a = a;
          c = c;
          var e = new DataView(b.buffer);
          for (var f of g()) {
            e.setUint32(a, c, !0);
            a += 4;
            var h = d("WATextEncoding")
                .newTextEncoder()
                .encode(f + "\0"),
              i = new Uint8Array(b.buffer, c, h.byteLength);
            i.set(h);
            c += h.byteLength;
          }
          return d("WASISnapshotPreview1").RESULT.SUCCESS;
        },
        environ_sizes_get: function (a, c) {
          var e = g().reduce(function (a, b) {
              return (
                a +
                d("WATextEncoding")
                  .newTextEncoder()
                  .encode(b + "\0").byteLength
              );
            }, 0),
            f = new DataView(b.buffer);
          f.setUint32(a, g().length, !0);
          f.setUint32(c, e, !0);
          return d("WASISnapshotPreview1").RESULT.SUCCESS;
        },
        fd_advise: function () {
          throw c("err")("fd_advise is not implemented");
        },
        fd_allocate: function () {
          throw c("err")("fd_allocate is not implemented");
        },
        fd_close: function (a) {
          return f.close(a);
        },
        fd_datasync: function () {
          throw c("err")("fd_datasync is not implemented");
        },
        fd_fdstat_get: function (a, c) {
          if (a < 3) {
            if (e.isTTY) {
              var g =
                i ^
                d("WASISnapshotPreview1").RightsFlags.FD_SEEK ^
                d("WASISnapshotPreview1").RightsFlags.FD_TELL;
              g = l(d("WASISnapshotPreview1").FileType.CHARACTER_DEVICE, 0, g);
            } else
              g = l(d("WASISnapshotPreview1").FileType.CHARACTER_DEVICE, 0);
            var h = new Uint8Array(b.buffer, c, g.byteLength);
            h.set(g);
            return d("WASISnapshotPreview1").RESULT.SUCCESS;
          }
          if (!f.exists(a)) return d("WASISnapshotPreview1").RESULT.EBADF;
          h = f.fileType(a);
          g = f.fileFdflags(a);
          a = l(h, g);
          h = new Uint8Array(b.buffer, c, a.byteLength);
          h.set(a);
          return d("WASISnapshotPreview1").RESULT.SUCCESS;
        },
        fd_fdstat_set_flags: function (a, b) {
          return f.setFlags(a, b);
        },
        fd_fdstat_set_rights: function () {
          return d("WASISnapshotPreview1").RESULT.SUCCESS;
        },
        fd_filestat_get: function (a, c) {
          if (a < 3) {
            var e;
            switch (a) {
              case 0:
                e = "/dev/stdin";
                break;
              case 1:
                e = "/dev/stdout";
                break;
              case 2:
                e = "/dev/stderr";
                break;
              default:
                e = "/dev/undefined";
                break;
            }
            var g = k({
                path: e,
                byteLength: 0,
                timestamps: {
                  access: new Date(),
                  modification: new Date(),
                  change: new Date(),
                },
                type: d("WASISnapshotPreview1").FileType.CHARACTER_DEVICE,
              }),
              h = new Uint8Array(b.buffer, c, g.byteLength);
            h.set(g);
            return d("WASISnapshotPreview1").RESULT.SUCCESS;
          }
          h = f.stat(a);
          if (h.length === 1) return h[0];
          g = h[1];
          a = k(g);
          h = new Uint8Array(b.buffer, c, a.byteLength);
          h.set(a);
          return d("WASISnapshotPreview1").RESULT.SUCCESS;
        },
        fd_filestat_set_size: function () {
          throw c("err")("fd_filestat_set_size is not implemented");
        },
        fd_filestat_set_times: function () {
          throw c("err")("fd_filestat_set_times is not implemented");
        },
        fd_pread: function () {
          throw c("err")("fd_pread is not implemented");
        },
        fd_prestat_dir_name: function (a, c, e) {
          if (a !== 3) return d("WASISnapshotPreview1").RESULT.EBADF;
          a = d("WATextEncoding").newTextEncoder().encode("/");
          c = new Uint8Array(b.buffer, c, e);
          c.set(a.subarray(0, e));
          return d("WASISnapshotPreview1").RESULT.SUCCESS;
        },
        fd_prestat_get: function (a, c) {
          if (a !== 3) return d("WASISnapshotPreview1").RESULT.EBADF;
          a = d("WATextEncoding").newTextEncoder().encode(".");
          c = new DataView(b.buffer, c);
          c.setUint8(0, d("WASISnapshotPreview1").PreopenType.DIR);
          c.setUint32(4, a.byteLength, !0);
          return d("WASISnapshotPreview1").RESULT.SUCCESS;
        },
        fd_pwrite: function () {
          throw c("err")("fd_pwrite is not implemented");
        },
        fd_read: function (a, c, g, h) {
          if (a === 1 || a === 2)
            return d("WASISnapshotPreview1").RESULT.ENOTSUP;
          var i = new DataView(b.buffer);
          c = j(i, c, g);
          g = d("WATextEncoding").newTextEncoder();
          var k = 0,
            l = d("WASISnapshotPreview1").RESULT.SUCCESS;
          for (c of c) {
            var m = void 0;
            if (a === 0) {
              var n = e.stdin(c.byteLength);
              if (n == null) break;
              m = g.encode(n);
            } else {
              n = f.read(a, c.byteLength);
              if (n.length === 1) {
                l = n[0];
                break;
              } else m = n[1];
            }
            n = Math.min(c.byteLength, m.byteLength);
            c.set(m.subarray(0, n));
            k += n;
          }
          i.setUint32(h, k, !0);
          return l;
        },
        fd_readdir: function () {
          throw c("err")("fd_readdir is not implemented");
        },
        fd_renumber: function () {
          throw c("err")("fd_renumber is not implemented");
        },
        fd_seek: function (a, e, g, h) {
          g = d("WASISnapshotPreview1").Whence.cast(g);
          if (g == null) throw c("err")("fd_seek: invalid whence");
          a = f.seek(a, e, g);
          if (a.length === 1) return a[0];
          e = a[0];
          g = a[1];
          a = new DataView(b.buffer);
          a.setBigUint64(h, g, !0);
          return e;
        },
        fd_sync: function () {
          throw c("err")("fd_sync is not implemented");
        },
        fd_tell: function (a, c) {
          a = f.tell(a);
          if (a.length === 1) return a[0];
          var d = a[0];
          a = a[1];
          var e = new DataView(b.buffer);
          e.setBigUint64(c, a, !0);
          return d;
        },
        fd_write: function (a, c, g, h) {
          if (a === 0) return d("WASISnapshotPreview1").RESULT.ENOTSUP;
          var i = new DataView(b.buffer);
          c = j(i, c, g);
          g = d("WATextEncoding").newTextDecoder();
          var k = 0,
            l = d("WASISnapshotPreview1").RESULT.SUCCESS;
          for (c of c) {
            if (c.byteLength === 0) continue;
            if (a === 1 || a === 2) {
              var m = a === 1 ? e.stdout : e.stderr,
                n = g.decode(c);
              m(n);
            } else {
              l = f.write(a, c);
              if (l !== d("WASISnapshotPreview1").RESULT.SUCCESS) break;
            }
            k += c.byteLength;
          }
          i.setUint32(h, k, !0);
          return l;
        },
        path_create_directory: function () {
          throw c("err")("path_create_directory is not implemented");
        },
        path_filestat_get: function () {
          throw c("err")("path_filestat_get is not implemented");
        },
        path_filestat_set_times: function () {
          throw c("err")("path_filestat_set_times is not implemented");
        },
        path_link: function () {
          throw c("err")("path_link is not implemented");
        },
        path_open: function (a, c, d, e, g, h, i, j, k) {
          c = new DataView(b.buffer);
          h = m(b, d, e);
          i = f.open(a, h, g, j);
          if (i.length === 1) return i[0];
          d = i[0];
          e = i[1];
          c.setUint32(k, e, !0);
          return d;
        },
        path_readlink: function () {
          throw c("err")("path_readlink is not implemented");
        },
        path_remove_directory: function () {
          throw c("err")("path_remove_directory is not implemented");
        },
        path_rename: function () {
          throw c("err")("path_rename is not implemented");
        },
        path_symlink: function () {
          throw c("err")("path_symlink is not implemented");
        },
        path_unlink_file: function () {
          throw c("err")("path_unlink_file is not implemented");
        },
        poll_oneoff: function () {
          throw c("err")("poll_oneoff is not implemented");
        },
        proc_exit: function (a) {
          throw new h(a);
        },
        proc_raise: function () {
          throw c("err")("proc_raise is not implemented");
        },
        random_get: function (a, c) {
          a = new Uint8Array(b.buffer, a, c);
          d("WACryptoDependencies").getCrypto().getRandomValues(a);
          return d("WASISnapshotPreview1").RESULT.SUCCESS;
        },
        sched_yield: function () {
          throw c("err")("sched_yield is not implemented");
        },
        sock_accept: function () {
          throw c("err")("sock_accept is not implemented");
        },
        sock_recv: function () {
          throw c("err")("sock_recv is not implemented");
        },
        sock_send: function () {
          throw c("err")("sock_send is not implemented");
        },
        sock_shutdown: function () {
          throw c("err")("sock_shutdown is not implemented");
        },
      };
      return {
        getImportObject: function () {
          return { wasi_snapshot_preview1: o };
        },
        start: function (a) {
          var d = a.exports.memory;
          if (d instanceof WebAssembly.Memory) b = d;
          else throw c("err")("Expected memory object");
          d = a.exports._start;
          try {
            d();
          } catch (a) {
            if (a instanceof h) return { exitCode: a.code, fs: f.fs };
            else if (a instanceof WebAssembly.RuntimeError)
              return { exitCode: 134, fs: f.fs };
            else throw a;
          }
          return { exitCode: 0, fs: f.fs };
        },
      };
    }
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a) {
          var c;
          c = b.call(this) || this;
          c.code = a;
          return c;
        }
        return a;
      })(babelHelpers.wrapNativeSuper(Error)),
      i =
        (b = d("WASISnapshotPreview1")).RightsFlags.FD_DATASYNC |
        b.RightsFlags.FD_READ |
        b.RightsFlags.FD_SEEK |
        b.RightsFlags.FD_FDSTAT_SET_FLAGS |
        b.RightsFlags.FD_SYNC |
        b.RightsFlags.FD_TELL |
        b.RightsFlags.FD_WRITE |
        b.RightsFlags.FD_ADVISE |
        b.RightsFlags.FD_ALLOCATE |
        b.RightsFlags.PATH_CREATE_DIRECTORY |
        b.RightsFlags.PATH_CREATE_FILE |
        b.RightsFlags.PATH_LINK_SOURCE |
        b.RightsFlags.PATH_LINK_TARGET |
        b.RightsFlags.PATH_OPEN |
        b.RightsFlags.FD_READDIR |
        b.RightsFlags.PATH_READLINK |
        b.RightsFlags.PATH_RENAME_SOURCE |
        b.RightsFlags.PATH_RENAME_TARGET |
        b.RightsFlags.PATH_FILESTAT_GET |
        b.RightsFlags.PATH_FILESTAT_SET_SIZE |
        b.RightsFlags.PATH_FILESTAT_SET_TIMES |
        b.RightsFlags.FD_FILESTAT_GET |
        b.RightsFlags.FD_FILESTAT_SET_SIZE |
        b.RightsFlags.FD_FILESTAT_SET_TIMES |
        b.RightsFlags.PATH_SYMLINK |
        b.RightsFlags.PATH_REMOVE_DIRECTORY |
        b.RightsFlags.PATH_UNLINK_FILE |
        b.RightsFlags.POLL_FD_READWRITE |
        b.RightsFlags.SOCK_SHUTDOWN |
        b.RightsFlags.SOCK_ACCEPT;
    function j(a, b, c) {
      var d = new Array(c);
      b = b;
      for (var e = 0; e < c; e++) {
        var f = a.getUint32(b, !0);
        b += 4;
        var g = a.getUint32(b, !0);
        b += 4;
        d[e] = new Uint8Array(a.buffer, f, g);
      }
      return d;
    }
    function k(a) {
      var b = new Uint8Array(d("WASISnapshotPreview1").FILESTAT_SIZE),
        c = new DataView(b.buffer);
      c.setBigUint64(0, BigInt(0), !0);
      c.setBigUint64(8, BigInt(o(a.path)), !0);
      c.setUint8(16, a.type);
      c.setBigUint64(24, BigInt(1), !0);
      c.setBigUint64(32, BigInt(a.byteLength), !0);
      c.setBigUint64(40, n(a.timestamps.access), !0);
      c.setBigUint64(48, n(a.timestamps.modification), !0);
      c.setBigUint64(56, n(a.timestamps.change), !0);
      return b;
    }
    function l(a, b, c) {
      var d = c != null ? c : i;
      c = c != null ? c : i;
      var e = new Uint8Array(24),
        f = new DataView(e.buffer, 0, 24);
      f.setUint8(0, a);
      f.setUint32(2, b, !0);
      f.setBigUint64(8, d, !0);
      f.setBigUint64(16, c, !0);
      return e;
    }
    function m(a, b, c) {
      return d("WATextEncoding")
        .newTextDecoder()
        .decode(new Uint8Array(a.buffer, b, c));
    }
    function n(a) {
      return BigInt(a.getTime()) * BigInt(1e6);
    }
    function o(a, b) {
      b === void 0 && (b = 0);
      var c = 3735928559 ^ b;
      b = 1103547991 ^ b;
      for (var d = 0, e; d < a.length; d++)
        (e = a.charCodeAt(d)),
          (c = Math.imul(c ^ e, 2654435761)),
          (b = Math.imul(b ^ e, 1597334677));
      c =
        Math.imul(c ^ (c >>> 16), 2246822507) ^
        Math.imul(b ^ (b >>> 13), 3266489909);
      b =
        Math.imul(b ^ (b >>> 16), 2246822507) ^
        Math.imul(c ^ (c >>> 13), 3266489909);
      return 4294967296 * (2097151 & b) + (c >>> 0);
    }
    g.createWasi = a;
  },
  98
);
__d(
  "WAMp4CheckAndRepair",
  ["WAByteArray", "WAResultOrError", "WASI", "asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "input",
      i = "output",
      j = "/" + h,
      k = "/" + i;
    function l(a) {
      var b,
        c = a.input,
        d = a.stdout;
      a = a.stderr;
      return {
        args: ["mp4checkAndRepair", h, i],
        fs:
          ((b = {}),
          (b[j] = {
            path: j,
            timestamps: {
              access: new Date(),
              change: new Date(),
              modification: new Date(),
            },
            mode: "binary",
            content: new Uint8Array(c),
          }),
          b),
        stdout: d,
        stderr: a,
      };
    }
    function a(a) {
      var c = a.getWasmModule,
        e = a.logError,
        f = a.logMessage;
      return (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          a = a.input;
          a = d("WASI").createWasi(l({ input: a, stderr: e, stdout: f }));
          var b = a.getImportObject;
          a = a.start;
          var g = yield c();
          g = yield WebAssembly.instantiate(g, b());
          b = a(g);
          a = b.exitCode;
          g = b.fs;
          g = (b = g[k]) == null ? void 0 : b.content;
          if (a !== 0) {
            e("mp4CheckAndRepair failed with exit code " + a);
            return d("WAResultOrError").makeError("invalid-media");
          }
          if (!(g instanceof Uint8Array)) {
            e("mp4CheckAndRepair failed invalid result type");
            return d("WAResultOrError").makeError("internal-error");
          }
          return d("WAResultOrError").makeResult(
            d("WAByteArray").uint8ArrayToBuffer(g)
          );
        });
        function g(b) {
          return a.apply(this, arguments);
        }
        return g;
      })();
    }
    g.createMp4CheckAndRepair = a;
  },
  98
);
__d(
  "WAMp4RepairMux",
  [
    "WAByteArray",
    "WAMediaUtilsWasmUrl",
    "WAResultOrError",
    "WASI",
    "WAWasmModuleCache",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "input",
      i = "output",
      j = "/" + h,
      k = "/" + i;
    function l(a) {
      var b,
        c = a.input,
        d = a.stdout;
      a = a.stderr;
      return {
        args: [
          "wamediautil",
          "mp4repairmux",
          "--keep-first-av-track-only",
          h,
          i,
        ],
        fs:
          ((b = {}),
          (b[j] = {
            path: j,
            timestamps: {
              access: new Date(),
              change: new Date(),
              modification: new Date(),
            },
            mode: "binary",
            content: new Uint8Array(c),
          }),
          b),
        stdout: d,
        stderr: a,
      };
    }
    function a(a) {
      var c = a.getWasmModule,
        e = a.logError,
        f = a.logMessage;
      return (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          a = a.input;
          a = d("WASI").createWasi(l({ input: a, stderr: e, stdout: f }));
          var b = a.getImportObject;
          a = a.start;
          var g = yield c();
          g = yield WebAssembly.instantiate(g, b());
          b = a(g);
          a = b.exitCode;
          g = b.fs;
          g = (b = g[k]) == null ? void 0 : b.content;
          if (a !== 0) {
            e("mp4repairmux failed with exit code " + a);
            return d("WAResultOrError").makeError("invalid-media");
          }
          if (!(g instanceof Uint8Array)) {
            e("mp4repairmux failed invalid result type");
            return d("WAResultOrError").makeError("internal-error");
          }
          return d("WAResultOrError").makeResult(
            d("WAByteArray").uint8ArrayToBuffer(g)
          );
        });
        function g(b) {
          return a.apply(this, arguments);
        }
        return g;
      })();
    }
    c = function () {
      return d("WAWasmModuleCache").loadWasmModule(
        d("WAMediaUtilsWasmUrl").WAMediaUtilsWasmUrl
      );
    };
    g.createMp4RepairMux = a;
    g.getMp4RepairMuxWasm = c;
  },
  98
);
__d(
  "WAWebPCheck",
  [
    "WAResultOrError",
    "WASI",
    "WAWasmModuleCache",
    "asyncToGeneratorRuntime",
    "bx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "input",
      i = "/" + h;
    function j(a) {
      var b,
        c = a.input,
        d = a.stdout;
      a = a.stderr;
      return {
        args: ["webpcheck", h],
        fs:
          ((b = {}),
          (b[i] = {
            path: i,
            timestamps: {
              access: new Date(),
              change: new Date(),
              modification: new Date(),
            },
            mode: "binary",
            content: new Uint8Array(c),
          }),
          b),
        stdout: d,
        stderr: a,
      };
    }
    function a(a) {
      var c = a.getWasmModule,
        e = a.logError,
        f = a.logMessage;
      return (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          a = a.input;
          a = d("WASI").createWasi(j({ input: a, stderr: e, stdout: f }));
          var b = a.getImportObject;
          a = a.start;
          var g = yield c();
          g = yield WebAssembly.instantiate(g, b());
          b = a(g);
          a = b.exitCode;
          if (a !== 0) {
            e("WebPCheck failed with exit code " + a);
            return d("WAResultOrError").makeError("invalid-media");
          }
          return d("WAResultOrError").makeResult();
        });
        function g(b) {
          return a.apply(this, arguments);
        }
        return g;
      })();
    }
    var k = c("bx").getURL(c("bx")("6946"));
    e = function () {
      return d("WAWasmModuleCache").loadWasmModule(k);
    };
    g.createWebPCheck = a;
    g.getWebpCheckWasm = e;
  },
  98
);
__d(
  "Deferred",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    (g || (g = b("Promise"))).resolve();
    a = (function () {
      function a(a) {
        var c = this;
        a = a || g || (g = b("Promise"));
        this.$1 = !1;
        this.$2 = new a(function (a, b) {
          (c.$3 = a), (c.$4 = b);
        });
      }
      var c = a.prototype;
      c.getPromise = function () {
        return this.$2;
      };
      c.resolve = function (a) {
        (this.$1 = !0), this.$3(a);
      };
      c.reject = function (a) {
        (this.$1 = !0), this.$4(a);
      };
      c.isSettled = function () {
        return this.$1;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "ExecutionEnvironment",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    b = !!(a !== void 0 && a.document && a.document.createElement);
    c = typeof WorkerGlobalScope === "function";
    d =
      typeof SharedWorkerGlobalScope === "function" &&
      self instanceof SharedWorkerGlobalScope;
    e = !c && b;
    a = {
      canUseDOM: b,
      canUseEventListeners: b && !!(a.addEventListener || a.attachEvent),
      canUseViewport: b && !!window.screen,
      canUseWorkers: typeof Worker !== "undefined",
      isInBrowser: b || c,
      isInMainThread: e,
      isInSharedWorker: d,
      isInWorker: c,
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "SimpleHook",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        (this.__callbacks = []), (this.call = this.$2);
      }
      var b = a.prototype;
      b.hasCallback = function (a) {
        var b = this.__callbacks;
        return (
          b.length > 0 &&
          (a == null ||
            b.some(function (b) {
              return b === a || b.$1 === a;
            }))
        );
      };
      b.add = function (a, b) {
        var c = this,
          d;
        if ((b == null ? void 0 : b.once) === !0) {
          b = function () {
            c.remove(d), a.apply(null, arguments);
          };
          b.$1 = a;
          d = b;
        } else d = a;
        this.__callbacks.push(d);
        return d;
      };
      b.removeLast = function () {
        return this.__callbacks.pop();
      };
      b.remove = function (a) {
        return this.removeIf(function (b) {
          return b === a;
        });
      };
      b.removeIf = function (a) {
        var b = this.__callbacks;
        this.__callbacks = b.filter(function (b) {
          return !a(b);
        });
        return b.length > this.__callbacks.length;
      };
      b.clear = function () {
        this.__callbacks = [];
      };
      b.$2 = function () {
        var a = this.__callbacks;
        for (var b = 0, c = a.length; b < c; ++b) {
          var d = a[b];
          d.apply(null, arguments);
        }
      };
      return a;
    })();
    f.SimpleHook = a;
  },
  66
);
__d(
  "MainPageUrl",
  ["ExecutionEnvironment", "FBLogger", "SimpleHook"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = new URL(
        (function () {
          var a = (
            typeof self !== "undefined"
              ? self
              : typeof window !== "undefined"
              ? window
              : { location: { href: "http://undefined" } }
          ).location.href;
          (h || (h = c("ExecutionEnvironment"))).isInWorker &&
            a &&
            a.startsWith("blob:") &&
            (a = a.substring(5, a.length));
          return a;
        })()
      ),
      j = new URL(i.href),
      k = new (d("SimpleHook").SimpleHook)();
    function l() {
      var a;
      return (
        (h || (h = c("ExecutionEnvironment"))).isInBrowser &&
        (j == null
          ? void 0
          : (a = j.searchParams) == null
          ? void 0
          : a.get("workerlog")) === "debug"
      );
    }
    function a(a) {
      try {
        l() && c("FBLogger")("worker").debug("received url " + a);
        var b = new URL(a, j.href || i.href);
        j.href !== b.href
          ? ((j.href = b.href), k.call(j))
          : l() &&
            c("FBLogger")("worker").debug(
              "ignoring url: path didn't change in " + a
            );
      } catch (a) {
        c("FBLogger")("worker").catching(a).warn("invalid url");
      }
    }
    typeof window === "object" &&
      typeof window.location === "object" &&
      typeof window.location.href === "string" &&
      a(window.location.href);
    g.mainPageUrl = j;
    g.onMainPageUrlChange = k;
    g.isWorkerLogEnabled = l;
    g.updateMainPageUrl = a;
  },
  98
);
__d(
  "PromiseAnnotate",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      a.displayName = b;
      return a;
    }
    function b(a) {
      a = a.displayName;
      if (typeof a === "string") return a;
      else return null;
    }
    f.setDisplayName = a;
    f.getDisplayName = b;
  },
  66
);
__d(
  "Env",
  [],
  function (a, b, c, d, e, f) {
    b = {
      ajaxpipe_token: null,
      compat_iframe_token: null,
      iframeKey: "",
      iframeTarget: "",
      iframeToken: "",
      isCQuick: !1,
      jssp_header_sent: !1,
      jssp_targeting_enabled: !1,
      loadHyperion: !1,
      start: Date.now(),
      nocatch: !1,
      useTrustedTypes: !1,
      isTrustedTypesReportOnly: !1,
      enableDefaultTrustedTypesPolicy: !1,
      ig_server_override: "",
      barcelona_server_override: "",
      ig_mqtt_wss_endpoint: "",
      ig_mqtt_polling_endpoint: "",
    };
    a.Env && Object.assign(b, a.Env);
    a.Env = b;
    c = b;
    f["default"] = c;
  },
  66
);
__d(
  "fb-error-lite",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {
      PREVIOUS_FILE: 1,
      PREVIOUS_FRAME: 2,
      PREVIOUS_DIR: 3,
      FORCED_KEY: 4,
    };
    function a(a) {
      var b = new Error(a);
      if (b.stack === void 0)
        try {
          throw b;
        } catch (a) {}
      b.messageFormat = a;
      for (
        var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1;
        e < c;
        e++
      )
        d[e - 1] = arguments[e];
      b.messageParams = d.map(function (a) {
        return String(a);
      });
      b.taalOpcodes = [g.PREVIOUS_FRAME];
      return b;
    }
    b = { err: a, TAALOpcode: g };
    f["default"] = b;
  },
  66
);
__d(
  "sprintf",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      var e = 0;
      return a.replace(/%s/g, function () {
        return String(c[e++]);
      });
    }
    f["default"] = a;
  },
  66
);
__d(
  "invariant",
  ["Env", "fb-error-lite", "sprintf"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a, b) {
      if (!a) {
        var d = b;
        for (
          var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2;
          g < e;
          g++
        )
          f[g - 2] = arguments[g];
        if (typeof d === "number") {
          var h = i(d, f),
            j = h.message,
            k = h.decoderLink;
          d = j;
          f.unshift(k);
        } else if (d === void 0) {
          d = "Invariant: ";
          for (var l = 0; l < f.length; l++) d += "%s,";
        }
        var m = d,
          n = new Error(m);
        n.name = "Invariant Violation";
        n.messageFormat = d;
        n.messageParams = f.map(function (a) {
          return String(a);
        });
        n.taalOpcodes = [c("fb-error-lite").TAALOpcode.PREVIOUS_FRAME];
        n.stack;
        throw n;
      }
    }
    function i(a, b) {
      var d = "Minified invariant #" + a + "; %s";
      b.length > 0 &&
        (d +=
          " Params: " +
          b
            .map(function (a) {
              return "%s";
            })
            .join(", "));
      a =
        (h || (h = c("Env"))).show_invariant_decoder === !0
          ? "visit " + j(a, b) + " to see the full message."
          : "";
      return { message: d, decoderLink: a };
    }
    function j(a, b) {
      a = "https://www.internalfb.com/intern/invariant/" + a + "/";
      b.length > 0 &&
        (a +=
          "?" +
          b
            .map(function (a, b) {
              return "args[" + b + "]=" + encodeURIComponent(String(a));
            })
            .join("&"));
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "nullthrows",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      b === void 0 && (b = "Got unexpected null or undefined");
      if (a != null) return a;
      a = new Error(b);
      a.framesToPop = 1;
      throw a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "ErrorPubSub",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorPubSub;
  },
  98
);
__d(
  "getErrorSafe",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").getErrorSafe;
  },
  98
);
__d(
  "promiseDone",
  ["ErrorPubSub", "PromiseAnnotate", "asyncToGeneratorRuntime", "getErrorSafe"],
  function (a, b, c, d, e, f, g) {
    var h, i;
    function j(a) {
      a = c("getErrorSafe")(a);
      a.loggingSource = "PROMISE_DONE";
      (i || (i = c("ErrorPubSub"))).reportError(a);
    }
    function k(a) {
      return (function () {
        var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
          try {
            b = yield a(b);
            return b;
          } catch (a) {
            j(a);
          }
        });
        return function (a) {
          return c.apply(this, arguments);
        };
      })();
    }
    function a(a, b, c) {
      var e = c != null ? k(c) : null,
        f = arguments.length > 1 ? a.then(b, e) : a;
      c == null && f.then(null, j);
      var g = (h || (h = d("PromiseAnnotate"))).getDisplayName(a);
      g != null && void (h || (h = d("PromiseAnnotate"))).setDisplayName(f, g);
    }
    g["default"] = a;
  },
  98
);
__d(
  "VirtualMessageChannel",
  ["invariant", "Promise", "SimpleHook", "nullthrows", "promiseDone"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = (function () {
        function a(a) {
          a === void 0 && (a = !1),
            (this.$2 = new (d("SimpleHook").SimpleHook)()),
            (this.onmessage = null),
            (this.onmessageerror = null),
            (this.$3 = a);
        }
        var e = a.prototype;
        e.setRemotePort = function (a) {
          this.$1 = a;
        };
        e.addEventListener = function (a, b, c) {
          ((a === "message" || a === "error") && c == null) || h(0, 55320, a);
          if (a === "message")
            if (typeof b === "function") this.$2.add(b);
            else {
              c = b.handleEvent.bind(b);
              this.$2.add(c);
              b.__handler = c;
            }
        };
        e.removeEventListener = function (a, b, c) {
          if (typeof b === "function") this.$2.remove(b);
          else {
            a = b.__handler;
            this.$2.remove(a);
          }
        };
        e.postMessage = function (a, d) {
          var e = this,
            f = function () {
              var b = c("nullthrows")(
                e.$1,
                "By now remote port must have value!"
              );
              b.$2.call({ data: a, ports: d });
            };
          this.$3
            ? f()
            : c("promiseDone")((i || (i = b("Promise"))).resolve(), f);
        };
        e.start = function () {};
        return a;
      })();
    a = function (a, b) {
      (this.port1 = new j(a)),
        (this.port2 = new j(b)),
        this.port1.setRemotePort(this.port2),
        this.port2.setRemotePort(this.port1);
    };
    g.VirtualMessagePort = j;
    g.VirtualMessageChannel = a;
  },
  98
);
__d(
  "DoubleKeyMap",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = new Map();
      }
      var b = a.prototype;
      b.set = function (a, b, c) {
        var d = this.$1.get(a);
        d || this.$1.set(a, (d = new Map()));
        d.set(b, c);
      };
      b.get = function (a, b) {
        return (a = this.$1.get(a)) == null ? void 0 : a.get(b);
      };
      b["delete"] = function (a, b) {
        var c = this.$1.get(a);
        c && (c["delete"](b), c.size === 0 && this.$1["delete"](a));
      };
      b.getAll = function (a) {
        return this.$1.get(a);
      };
      b.deleteAll = function (a) {
        this.$1["delete"](a);
      };
      return a;
    })();
    f.DoubleKeyMap = a;
  },
  66
);
__d(
  "performanceAbsoluteNowOnAdjust",
  ["SimpleHook"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = new (d("SimpleHook").SimpleHook)();
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "performanceAbsoluteNow",
  ["performance", "performanceAbsoluteNowOnAdjust"],
  function (a, b, c, d, e, f, g) {
    var h,
      i = function () {
        return Date.now();
      };
    function a(a) {
      i = a;
    }
    var j = 0,
      k = -1;
    b = typeof (h || (h = c("performance"))) === "object";
    var l = b && typeof (h || (h = c("performance"))).now === "function";
    b &&
      ((h || (h = c("performance"))).timeOrigin
        ? (k = (h || (h = c("performance"))).timeOrigin)
        : (h || (h = c("performance"))).timing &&
          (h || (h = c("performance"))).timing.navigationStart &&
          (k = (h || (h = c("performance"))).timing.navigationStart));
    var m;
    d = function () {
      return 0;
    };
    if (l && k !== -1) {
      m = function () {
        return (h || (h = c("performance"))).now() + k;
      };
      e = function () {
        return m() + j;
      };
      d = function () {
        var a = Date.now() - m();
        a > 500 && ((j = a), c("performanceAbsoluteNowOnAdjust").call(a));
        return a;
      };
      if (
        typeof window === "object" &&
        typeof window.addEventListener === "function"
      ) {
        f = { capture: !1, passive: !0 };
        window.addEventListener("blur", d, f);
        window.addEventListener("focus", d, f);
      }
    } else
      e = m = function () {
        return i();
      };
    b = {
      setFallback: a,
      fromRelativeTime: (function () {
        if (k === -1) {
          var a = l ? Date.now() - (h || (h = c("performance"))).now() : 0;
          return function (b) {
            return b + a;
          };
        } else
          return function (a) {
            return a + k;
          };
      })(),
      __adjust: d,
      adjusted: e,
    };
    f = Object.assign(m, b);
    a = f;
    g["default"] = a;
  },
  98
);
__d(
  "NestedTimeRange",
  ["SimpleHook", "performance", "performanceAbsoluteNow"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = new (d("SimpleHook").SimpleHook)(),
      k = new (d("SimpleHook").SimpleHook)(),
      l = "/";
    function m(a, b) {
      return "" + a + l + b;
    }
    b = (function () {
      function a(a, b) {
        b === void 0 && (b = null), (this.$3 = 0), (this.$1 = a), (this.$2 = b);
      }
      var b = a.prototype;
      b.isRunning = function () {
        return this.$3 > 0;
      };
      b.fullname = function () {
        return this.$2 !== null ? m(this.$2.fullname(), this.$1) : this.$1;
      };
      b.start = function (a) {
        a === void 0 && (a = (h || (h = c("performanceAbsoluteNow")))());
        if (this.$3 === 0) {
          var b;
          (b = this.$2) == null ? void 0 : b.start(a);
          this.__onStart(a);
        }
        ++this.$3;
        return a;
      };
      b.__onStart = function (a) {
        j.call(this, a);
      };
      b.stop = function (a) {
        a === void 0 && (a = (h || (h = c("performanceAbsoluteNow")))());
        --this.$3;
        if (this.$3 === 0) {
          var b;
          this.__onStop(a);
          (b = this.$2) == null ? void 0 : b.stop(a);
        }
        return a;
      };
      b.__onStop = function (a) {
        k.call(this, a);
      };
      return a;
    })();
    function a() {
      (i || (i = c("performance"))).mark &&
        (i || (i = c("performance"))).measure &&
        (j.add(function (a, b) {
          (i || (i = c("performance"))).mark(a.fullname() + "_start");
        }),
        k.add(function (a, b) {
          (i || (i = c("performance"))).measure(
            a.fullname(),
            a.fullname() + "_start"
          );
        }));
    }
    g.OnRangeStart = j;
    g.OnRangeStop = k;
    g.TIME_RANGE_LEVEL_SEPARATOR = l;
    g.rangeFullName = m;
    g.NestedTimeRange = b;
    g.enableDevConsoleTimeline = a;
  },
  98
);
__d(
  "QPLEvent",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a.i;
    }
    function b(a) {
      return (a = a.r) != null ? a : 0;
    }
    function c(a) {
      return (a = a.m) != null ? a : 1;
    }
    f.getMarkerId = a;
    f.getSampleRate = b;
    f.getSamplingMethod = c;
  },
  66
);
__d(
  "performanceNavigationStart",
  ["performance"],
  function (a, b, c, d, e, f) {
    var g,
      h = typeof window !== "undefined" ? window : self;
    if ((g || (g = b("performance"))).now)
      if (
        (g || (g = b("performance"))).timing &&
        (g || (g = b("performance"))).timing.navigationStart
      )
        a = function () {
          return (g || (g = b("performance"))).timing.navigationStart;
        };
      else {
        if (typeof h._cstart === "number")
          a = function () {
            return h._cstart;
          };
        else {
          var i = Date.now();
          a = function () {
            return i;
          };
        }
        a.isPolyfilled = !0;
      }
    else
      (a = function () {
        return 0;
      }),
        (a.isPolyfilled = !0);
    e.exports = a;
  },
  null
);
__d(
  "QLogEvent",
  [
    "DoubleKeyMap",
    "FBLogger",
    "NestedTimeRange",
    "QPLEvent",
    "SimpleHook",
    "performanceNavigationStart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = new (d("DoubleKeyMap").DoubleKeyMap)(),
      j = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c, d) {
          a = b.call(this, a, d) || this;
          a.$QPLRange$p_1 = c;
          i.set(c, a.fullname(), babelHelpers.assertThisInitialized(a));
          return a;
        }
        var e = a.prototype;
        e.__onStart = function (a) {
          b.prototype.__onStart.call(this, a),
            this.$QPLRange$p_1.point(this.fullname() + "_START", {
              timestamp: a,
            });
        };
        e.__onStop = function (a) {
          b.prototype.__onStop.call(this, a),
            this.$QPLRange$p_1.point(this.fullname() + "_END", {
              timestamp: a,
            }),
            i["delete"](this.$QPLRange$p_1, this.fullname());
        };
        e.range = function (b) {
          this.fullname().startsWith(
            d("NestedTimeRange").TIME_RANGE_LEVEL_SEPARATOR
          ) ||
            c("FBLogger")("qpl").warn(
              "Range %s cannot have subrange since root name does not start with /",
              this.fullname()
            );
          var e = d("NestedTimeRange").rangeFullName(this.fullname(), b);
          return (e = i.get(this.$QPLRange$p_1, e)) != null
            ? e
            : new a(b, this.$QPLRange$p_1, this);
        };
        return a;
      })(d("NestedTimeRange").NestedTimeRange),
      k = new (d("DoubleKeyMap").DoubleKeyMap)(),
      l = new (b = d("SimpleHook")).SimpleHook(),
      m = new b.SimpleHook(),
      n = new b.SimpleHook(),
      o = new b.SimpleHook(),
      p = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c, e, f, g) {
          var i;
          c === void 0 && (c = 0);
          e === void 0 && (e = 2);
          f === void 0 && (f = !1);
          var j = (h || (h = d("QPLEvent"))).getMarkerId(a);
          i = b.call(this, "event_" + j) || this;
          i.event = a;
          i.instanceKey = c;
          i.$QPLEvent$p_1 = e;
          i.isUserFlow = f;
          i.$QPLEvent$p_2 = g;
          k.set(j, c, babelHelpers.assertThisInitialized(i));
          return i;
        }
        var e = a.prototype;
        e.action = function (a) {
          this.$QPLEvent$p_1 = a;
          return this;
        };
        e.getAction = function () {
          return this.$QPLEvent$p_1;
        };
        e.setIsUserFlow = function (a) {
          this.isUserFlow = a;
          return this;
        };
        e.startFromNavStart = function () {
          this.start(c("performanceNavigationStart")());
          return this;
        };
        e.startFromTime = function (a) {
          this.start(a);
          return this;
        };
        e.__onStart = function (a) {
          var b;
          (b = this.$QPLEvent$p_2) == null ? void 0 : b.onStart(this, a);
          l.call(this, a);
        };
        e.__onStop = function (a) {
          var b;
          (b = this.$QPLEvent$p_2) == null ? void 0 : b.onStop(this, a);
          m.call(this, a);
          i.deleteAll(this);
          k["delete"](
            (h || (h = d("QPLEvent"))).getMarkerId(this.event),
            this.instanceKey
          );
        };
        e.range = function (a) {
          var b;
          return (b = i.get(this, a)) != null ? b : new j(a, this);
        };
        e.point = function (a, b) {
          var c;
          b === void 0 && (b = {});
          (c = this.$QPLEvent$p_2) == null ? void 0 : c.onPoint(this, a, b);
          n.call(this, a, b);
          return this;
        };
        e.annotate = function (a) {
          var b;
          (b = this.$QPLEvent$p_2) == null ? void 0 : b.onAnnotate(this, a);
          o.call(this, a);
          return this;
        };
        return a;
      })(d("NestedTimeRange").NestedTimeRange);
    function a(a, b, c) {
      var e;
      b === void 0 && (b = 0);
      return (e = k.get((h || (h = d("QPLEvent"))).getMarkerId(a), b)) != null
        ? e
        : new p(a, b, 2, !1, c);
    }
    g.OnEventStart = l;
    g.OnEventStop = m;
    g.OnEventPoint = n;
    g.OnEventAnnotate = o;
    g.QPLEvent = p;
    g.event = a;
  },
  98
);
__d(
  "QPLHasteSupportDataStorage",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {};
    a = {
      add: function (a, b) {
        Object.keys(a).forEach(function (c) {
          b && b.entry++;
          if (g[c] == null) {
            var d = a[c];
            g[c] = d;
          } else b && b.dup_entry++;
        });
      },
      get: function (a) {
        return g[a];
      },
    };
    f["default"] = a;
  },
  66
);
__d(
  "recoverableViolation",
  ["FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d, e) {
      d = d === void 0 ? {} : d;
      d = d.error;
      b = c("FBLogger")(b);
      d ? (b = b.catching(d)) : (b = b.blameToPreviousFrame());
      d = e == null ? void 0 : e.categoryKey;
      d != null && (b = b.addToCategoryKey(d));
      e = (d = e == null ? void 0 : e.trackOnly) != null ? d : !1;
      e ? b.debug(a) : b.mustfix(a);
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "qpl",
  ["QPLHasteSupportDataStorage", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {};
    a = {
      _: function (a, b) {
        var d = h[b];
        if (d == null) {
          var e = c("QPLHasteSupportDataStorage").get(b);
          e == null
            ? (c("recoverableViolation")(
                "Failed to find a Haste-supplied config for the QPL event " +
                  ("identified by token `" + b + "`."),
                "staticresources"
              ),
              (d = { i: a }))
            : (d = babelHelpers["extends"]({ i: a }, e));
          h[b] = d;
        }
        return d;
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "WorkerMessagePortLogging",
  ["MainPageUrl", "QLogEvent", "qpl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = Math.random() < 0.1,
      i = 20,
      j = 100,
      k = 50;
    function a() {
      return (
        d("MainPageUrl").isWorkerLogEnabled() ||
        d("MainPageUrl").mainPageUrl.searchParams.get("worker_log") === 1
      );
    }
    var l = 0;
    function m() {
      return d("QLogEvent").event(c("qpl")._(41497718, "106"), l++);
    }
    function b(a, b, c) {
      c === void 0 && (c = !1);
      if (b == null || !h) return;
      var d = b.sendDelayHighPrecision,
        e = b.sendTimestamp,
        f = b.sendDateTime,
        g = b.receiveTimestamp,
        l = b.receiveDateTime,
        n = m();
      n.startFromTime();
      var o = n.range("SEND_DELAY");
      o.start(e);
      o.stop(g);
      o = n.range("SEND_DELAY_LOW_PRECISION");
      o.start(f);
      o.stop(l);
      o = Math.abs(e - f);
      e = Math.abs(g - l);
      n.annotate({
        string: { port_name: a },
        int: { send_delay: d, send_drift: o, receive_drift: e },
        bool: {
          send_delay_above_max: d != null && d > i,
          send_drift_above_max: o > j,
          receive_drift_above_max: e > j,
        },
      });
      if (c) {
        f = n.range("ROUND_TRIP");
        f.start(b.sendTimestamp);
        f.stop(b.receiveTimestamp);
        g = b.receiveTimestamp - b.sendTimestamp;
        n.annotate({
          int: { round_trip: g },
          bool: { round_trip_above_max: g > k },
        });
      }
      n.stop();
    }
    g.isWorkerLogEnabled = a;
    g.logMessageTiming = b;
  },
  98
);
__d(
  "WorkerMessagePort",
  [
    "Deferred",
    "FBLogger",
    "MainPageUrl",
    "Promise",
    "PromiseAnnotate",
    "SimpleHook",
    "VirtualMessageChannel",
    "WorkerMessagePortLogging",
    "performanceAbsoluteNow",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j;
    function k(a) {
      return a;
    }
    var l = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a() {
        return b.apply(this, arguments) || this;
      }
      return a;
    })(d("SimpleHook").SimpleHook);
    function m(a, b) {
      a = k(a);
      a.__timing = b;
    }
    function n(a) {
      return a.__timing;
    }
    a = (function () {
      var a = e.prototype;
      a.onMessageHandler = function (a) {
        try {
          this.onMessage.call(a);
          var b = this.$1[a.type];
          !b ? this.onUnhandledMessage.call(a) : b.call(a);
        } catch (a) {
          this.onError.call(a);
        }
      };
      function e(a, b) {
        var e = this;
        this.$1 = {};
        this.onUnhandledMessage = new l();
        this.onMessage = new l();
        this.onPostMessage = new l();
        this.onError = new l();
        this.$2 = a;
        this.name = b;
        this.$2.addEventListener("message", function (a) {
          return e.onMessageHandler(k(a.data));
        });
        this.$2.addEventListener("error", function (a) {
          return e.onError.call(a);
        });
        this.onPostMessage.add(function (a) {
          m(a, {
            receiveDateTime: -1,
            receiveTimestamp: -1,
            sendDateTime: Date.now(),
            sendDelayHighPrecision: 0,
            sendDelayLowPrecision: 0,
            sendTimestamp: (j || (j = c("performanceAbsoluteNow")))(),
          });
        });
        this.onMessage.add(function (a) {
          a = n(a);
          if (a != null) {
            var b = a.sendDateTime,
              f = a.sendTimestamp,
              g = (j || (j = c("performanceAbsoluteNow")))(),
              h = Date.now();
            a.receiveTimestamp = g;
            a.receiveDateTime = h;
            a.sendDelayHighPrecision = g - f;
            a.sendDelayLowPrecision = h - b;
            d("WorkerMessagePortLogging").logMessageTiming(e.name, a);
          }
        });
      }
      a.postMessage = function (a, b) {
        this.onPostMessage.call(a),
          b ? this.$2.postMessage(a, b) : this.$2.postMessage(a);
      };
      a.addMessageListener = function (a, b) {
        var c = this.$1[a];
        c || ((c = new l()), (this.$1[a] = c));
        return c.add(b);
      };
      a.removeMessageListener = function (a, b) {
        a = this.$1[a];
        return !!a && a.remove(b);
      };
      a.removeAllMessageListeners = function (a) {
        a = this.$1[a];
        a && a.clear();
      };
      a.onMessageOnce = function (a, c) {
        var d = this;
        return new (i || (i = b("Promise")))(function (b) {
          var e = d.addMessageListener(a, function (f) {
            c(f) && (d.removeMessageListener(a, e), b(f));
          });
        });
      };
      a.close = function () {
        if (this.$2 instanceof MessagePort) this.$2.close();
        else if (this.$2 instanceof Worker) this.$2.terminate();
        else if (this.$2 instanceof DedicatedWorkerGlobalScope) this.$2.close();
        else {
          var a;
          (a = (a = this.$2.close) != null ? a : this.$2.terminate) == null
            ? void 0
            : a.call(this.$2);
        }
      };
      a.isWrappingVirtualMessagePort = function () {
        return this.$2 instanceof d("VirtualMessageChannel").VirtualMessagePort;
      };
      return e;
    })();
    function o(a) {
      return k(a);
    }
    e = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e(e, f) {
        var g;
        g = a.call(this, e, f) || this;
        var j = o(babelHelpers.assertThisInitialized(g)),
          k = new (c("Deferred"))();
        e = k.getPromise();
        j.addMessageListener("endpoint_started", function (a) {
          k.resolve(a);
          var b = n(a);
          j.postMessage({
            endpoint: a.endpoint,
            startSendTimestamp: b == null ? void 0 : b.sendTimestamp,
            targetEndpoint: g.name,
            type: "endpoint_started_received",
          });
        });
        f = j.onMessageOnce("endpoint_started_received", function () {
          return !0;
        });
        void (h || (h = d("PromiseAnnotate"))).setDisplayName(
          e,
          "endpoint_started"
        );
        void h.setDisplayName(f, "endpoint_started_received");
        j.postMessage({ endpoint: g.name, type: "endpoint_started" });
        c("promiseDone")(e, function (a) {
          a = n(a);
          d("WorkerMessagePortLogging").logMessageTiming(g.name, a);
        });
        c("promiseDone")(f, function (a) {
          a = n(a);
          a != null &&
            d("WorkerMessagePortLogging").logMessageTiming(g.name, a, !0);
        });
        g.fullyConnected = (i || (i = b("Promise")))
          .race([e, f])
          .then(function () {
            return babelHelpers.assertThisInitialized(g);
          });
        return g;
      }
      return e;
    })(a);
    g.getMessageTiming = n;
    g.WorkerMessagePort = a;
    g.CastWorkerMessagePort = o;
    g.WorkerSyncedMessagePort = e;
  },
  98
);
__d(
  "BanzaiLazyQueue",
  ["SimpleHook"],
  function (a, b, c, d, e, f, g) {
    var h = [],
      i = new (d("SimpleHook").SimpleHook)();
    a = {
      onQueue: i,
      queuePost: function (a, b, c) {
        h.push([a, b, c]), i.call(a, b, c);
      },
      flushQueue: function () {
        var a = h;
        h = [];
        return a;
      },
    };
    f.exports = a;
  },
  34
);
__d(
  "DateConsts",
  [],
  function (a, b, c, d, e, f) {
    var g = 1e3;
    c = 60;
    d = 60;
    e = 24;
    var h = 7,
      i = 12,
      j = 1e3,
      k = 30.43,
      l = 4.333,
      m = 365.242,
      n = c * d,
      o = n * e,
      p = o * h,
      q = o * m,
      r = g * c,
      s = r * d,
      t = g * o,
      u = t * h,
      v = t * m,
      w = {
        SUNDAY: 0,
        MONDAY: 1,
        TUESDAY: 2,
        WEDNESDAY: 3,
        THURSDAY: 4,
        FRIDAY: 5,
        SATURDAY: 6,
      };
    Object.freeze(w);
    function a(a, b) {
      return new Date(a, b, 0).getDate();
    }
    function b() {
      return Date.now() / g;
    }
    var x = { instantRange: { since: -864e10, until: 864e10 + 1 } };
    f.MS_PER_SEC = g;
    f.SEC_PER_MIN = c;
    f.MIN_PER_HOUR = d;
    f.HOUR_PER_DAY = e;
    f.DAYS_PER_WEEK = h;
    f.MONTHS_PER_YEAR = i;
    f.US_PER_MS = j;
    f.AVG_DAYS_PER_MONTH = k;
    f.AVG_WEEKS_PER_MONTH = l;
    f.AVG_DAYS_PER_YEAR = m;
    f.SEC_PER_HOUR = n;
    f.SEC_PER_DAY = o;
    f.SEC_PER_WEEK = p;
    f.SEC_PER_YEAR = q;
    f.MS_PER_MIN = r;
    f.MS_PER_HOUR = s;
    f.MS_PER_DAY = t;
    f.MS_PER_WEEK = u;
    f.MS_PER_YEAR = v;
    f.DAYS = w;
    f.getDaysInMonth = a;
    f.getCurrentTimeInSeconds = b;
    f["private"] = x;
  },
  66
);
__d(
  "FuncChannel",
  ["FBLogger", "Promise"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = (function () {
      function a(a) {
        var d = this,
          e;
        this.$2 = [];
        this.callMessageHandler = function (a) {
          return new (h || (h = b("Promise")))(function (b, c) {
            (a.result = { resolveFunc: b, rejectFunc: c }), d.$2.push(a);
          });
        };
        this.messageToCall = function (a) {
          var b,
            e,
            f = d.proxyMethods[a.method];
          if (typeof f !== "function") {
            c("FBLogger")("worker").mustfix(
              "proxyMethods[%s] is not a functions",
              a.method
            );
            return;
          }
          b = (b = a.result) == null ? void 0 : b.resolveFunc;
          e = (e = a.result) == null ? void 0 : e.rejectFunc;
          if (typeof b === "function" && typeof e === "function")
            try {
              var g = f.apply(a.thisArg, a.argList);
              b(g);
            } catch (a) {
              e(a);
            }
          else return f.apply(a.thisArg, a.argList);
        };
        var f = this,
          g = {},
          i = (e = a == null ? void 0 : a(g)) != null ? e : {},
          j = babelHelpers["extends"]({}, g);
        function k(a) {
          (j[a] = function () {
            var b = {
              type: "call",
              method: a,
              thisArg: null,
              argList: Array.from(arguments),
            };
            return f.callMessageHandler(b);
          }),
            (g[a] = function () {
              var b = f.$1[a];
              if (typeof b !== "function") {
                c("FBLogger")("worker").mustfix(
                  "_backend[%s] is not a functions",
                  a
                );
                return;
              }
              return b.apply(f.$1, arguments);
            }),
            i[a] == null && (i[a] = g[a]);
        }
        this.$1 = j;
        if (a != null) {
          e = Object.keys(i);
          e.forEach(k);
          this.proxyMethods = i;
        } else
          this.proxyMethods = new Proxy(i, {
            get: function (a, b) {
              a = b;
              i[a] == null && k(a);
              return i[a];
            },
          });
      }
      var d = a.prototype;
      d.flushBuffer = function () {
        var a = this.$2;
        this.$2 = [];
        a.forEach(this.messageToCall);
      };
      d.setBackend = function (a) {
        this.$1 !== a && ((this.$1 = a), this.flushBuffer());
        return this;
      };
      d.setCallMessageHandler = function (a) {
        (this.callMessageHandler = a), this.flushBuffer();
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "TimedOnceFunc",
  ["ExecutionEnvironment"],
  function (a, b, c, d, e, f, g) {
    var h;
    a = (function () {
      function a(a, b) {
        (this.$2 = !1),
          (this.$4 = a),
          (this.$3 = b),
          (h || (h = c("ExecutionEnvironment"))).isInBrowser && this.$5();
      }
      var b = a.prototype;
      b.$6 = function () {
        this.$1 != null && clearTimeout(this.$1), (this.$1 = null);
      };
      b.$5 = function () {
        var a = this;
        this.isDone() ||
          (this.$6(),
          (this.$1 = setTimeout(function () {
            (a.$2 = !0), a.run();
          }, this.$3)));
      };
      b.isDone = function () {
        return this.$4 === null;
      };
      b.isCancelled = function () {
        return this.$1 === null && this.$4 !== null;
      };
      b.run = function () {
        this.$6();
        if (this.$4 != null) {
          var a = this.$4;
          this.$4 = null;
          a(this.$2);
        }
      };
      b.getDelay = function () {
        return this.$3;
      };
      b.delay = function (a) {
        (this.$3 = a != null ? a : this.$3), this.$5();
      };
      b.cancel = function () {
        this.$6();
      };
      return a;
    })();
    g.TimedOnceFunc = a;
  },
  98
);
__d(
  "WorkerFuncChannel",
  [
    "invariant",
    "DateConsts",
    "ExecutionEnvironment",
    "FBLogger",
    "FuncChannel",
    "MainPageUrl",
    "Promise",
    "TimedOnceFunc",
    "VirtualMessageChannel",
    "WorkerMessagePort",
    "err",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = {
        serialize: function (a, b) {
          b.push(a);
          return a;
        },
        deserialize: function (a) {
          return a;
        },
      },
      l = 1e4,
      m = 0,
      n = 5,
      o = n + 1,
      p = (function () {
        function a(a) {
          var b = self.WeakRef;
          b && (this.$1 = new b(a));
        }
        var b = a.prototype;
        b.isDead = function () {
          return this.$1 != null && this.$1.deref() == null;
        };
        return a;
      })(),
      q = (function (e) {
        babelHelpers.inheritsLoose(a, e);
        function a(a, b, f, g) {
          var i;
          f === void 0 && (f = null);
          g === void 0 && (g = {});
          i = e.call(this, a) || this;
          i.$WorkerFuncChannel$p_1 = new Map();
          i.$WorkerFuncChannel$p_2 = new Map();
          i.$WorkerFuncChannel$p_5 = {
            function: {
              serialize: function (a, b) {
                b = o++;
                i.$WorkerFuncChannel$p_1.set(b, a);
                a = { type: "function", value: b };
                return a;
              },
              deserialize: function (a) {
                var b = babelHelpers.assertThisInitialized(i),
                  c = a.value;
                a = function () {
                  var a = {
                    type: "call",
                    id: c,
                    method: "__anonymous",
                    thisArg: null,
                    argList: Array.from(arguments),
                  };
                  return b.callMessageHandler(a);
                };
                i.$WorkerFuncChannel$p_2.set(c, new p(a));
                return a;
              },
            },
            custom: {
              serialize: function (a, b) {
                var c = a.constructor.name,
                  d = i.$WorkerFuncChannel$p_4[c];
                d != null || h(0, 63779, c);
                d = d.serialize(a, b);
                return { type: "custom", custom: c, value: d };
              },
              deserialize: function (a) {
                var b = a.custom,
                  c = i.$WorkerFuncChannel$p_4[b];
                c != null || h(0, 63779, b);
                return c.deserialize(a.value);
              },
            },
            error: {
              serialize: function (a, b) {
                b = { name: a.name, message: a.message, stack: a.stack };
                return { type: "error", value: b };
              },
              deserialize: function (a) {
                var b = c("err")(a.value.message);
                b.name = a.value.name;
                b.stack = a.value.stack;
                return b;
              },
            },
            object: {
              serialize: function (a, b) {
                b = a.constructor;
                if (b !== Object) throw new Error("Cannot clone class object");
                return { type: "object", value: a };
              },
              deserialize: function (a) {
                return a.value;
              },
            },
            raw: {
              serialize: function (a, b) {
                return { type: "raw", value: a };
              },
              deserialize: function (a) {
                return a.value;
              },
            },
          };
          i.name = b;
          i.$WorkerFuncChannel$p_3 = f;
          i.$WorkerFuncChannel$p_4 = g;
          a = function (a) {
            d("MainPageUrl").isWorkerLogEnabled() &&
              c("FBLogger")("adsworker").debug(
                "[Channel] removing callback ids: %s",
                a.join()
              ),
              a.forEach(function (a) {
                return i.$WorkerFuncChannel$p_1["delete"](a);
              });
          };
          var k = i.__remoteInternalFunc(m, a);
          typeof jest === typeof void 0 &&
            (j || (j = c("ExecutionEnvironment"))).isInBrowser &&
            setInterval(function () {
              var a = [];
              i.$WorkerFuncChannel$p_2.forEach(function (b, c) {
                b.isDead() &&
                  (a.push(c), i.$WorkerFuncChannel$p_2["delete"](c));
              });
              a.length > 0
                ? k(a)
                : i.$WorkerFuncChannel$p_2.size > 5e3 &&
                  c("FBLogger")("adsworker").warn(
                    "[%s] has too many remaining refs %s",
                    i.name,
                    i.$WorkerFuncChannel$p_2.size
                  );
            }, l);
          return i;
        }
        var f = a.prototype;
        f.__remoteInternalFunc = function (a, b) {
          (a > n || this.$WorkerFuncChannel$p_1.get(a) != null) &&
            c("FBLogger")("adsworker").mustfix(
              "invalid internal func id %s",
              a
            );
          this.$WorkerFuncChannel$p_1.set(a, b);
          b = this.$WorkerFuncChannel$p_5["function"].deserialize({
            type: "function",
            value: a,
          });
          return b;
        };
        f.$WorkerFuncChannel$p_6 = function (a) {
          return (
            a instanceof Int8Array ||
            a instanceof Int16Array ||
            a instanceof Int32Array ||
            a instanceof Uint8Array ||
            a instanceof Uint8ClampedArray ||
            a instanceof Uint16Array ||
            a instanceof Uint32Array ||
            a instanceof Float32Array ||
            a instanceof Float64Array
          );
        };
        f.$WorkerFuncChannel$p_7 = function (a) {
          if (typeof a === "function") return "function";
          if (a === null) return "raw";
          if (typeof a !== "object") return "raw";
          if (Array.isArray(a)) return "raw";
          if (this.$WorkerFuncChannel$p_6(a)) return "raw";
          var b = a.constructor.name;
          if (this.$WorkerFuncChannel$p_4[b]) return "custom";
          return a instanceof Error ? "error" : "object";
        };
        f.$WorkerFuncChannel$p_8 = function (a, b) {
          var c = this.$WorkerFuncChannel$p_7(a);
          return this.$WorkerFuncChannel$p_5[c].serialize(a, b);
        };
        f.$WorkerFuncChannel$p_9 = function (a) {
          var b = a;
          if (
            a !== null &&
            typeof a === "object" &&
            typeof a.type === "string"
          ) {
            var c = this.$WorkerFuncChannel$p_5[a.type];
            if (c) return c.deserialize(a);
          }
          return b;
        };
        f.__onPostOutMessage = function (a) {
          return a;
        };
        f.__callCallback = function (a, b) {
          a.apply(null, b.argList);
        };
        f.setOutMessagePort = function (a, d) {
          var e = this,
            f = [];
          this.setCallMessageHandler(function (d) {
            d.thisArg = e.name;
            var g = [];
            d.argList = d.argList.map(function (a) {
              return e.$WorkerFuncChannel$p_8(a, g);
            });
            var h = new (i || (i = b("Promise")))(function (a, b) {
                d.result = {
                  resolveFunc: e.$WorkerFuncChannel$p_8(a, g),
                  rejectFunc: e.$WorkerFuncChannel$p_8(b, g),
                };
              }),
              j = e.__onPostOutMessage(d);
            j != null &&
              (f != null
                ? f.push({ message: d, transferList: g })
                : a.postMessage(d, g));
            h["catch"](function (a) {
              c("FBLogger")("worker")
                .catching(a)
                .mustfix(
                  "Error: channel %s, remote call of %s returned error %s",
                  e.name,
                  d.method,
                  a.message
                );
            });
            return h;
          });
          c("promiseDone")(d || x.waitForRemote(this.name), function () {
            var b = f;
            f = null;
            b == null
              ? void 0
              : b.forEach(function (b) {
                  a.postMessage(b.message, b.transferList);
                });
            e.$WorkerFuncChannel$p_3 == null
              ? void 0
              : e.$WorkerFuncChannel$p_3();
          });
        };
        f.__messageToCall = function (a) {
          var b = this;
          a.argList = a.argList.map(function (a) {
            return b.$WorkerFuncChannel$p_9(a);
          });
          if (a.result) {
            var d = a.result,
              e = d.resolveFunc;
            d = d.rejectFunc;
            e = this.$WorkerFuncChannel$p_9(e);
            d = this.$WorkerFuncChannel$p_9(d);
            a.result = { resolveFunc: e, rejectFunc: d };
          }
          e = a.id;
          if (e === void 0) this.messageToCall(a);
          else {
            d = this.$WorkerFuncChannel$p_1.get(e);
            d
              ? this.__callCallback(d, a)
              : c("FBLogger")("adsworker").mustfix(
                  "Error: callback is called but no longer available"
                );
          }
        };
        f.setInMessagePort = function (a) {
          var b = this;
          a.addMessageListener("call", function (a) {
            typeof a.thisArg === "string" &&
              a.thisArg === b.name &&
              b.__messageToCall(a);
          });
          x.notifyReady(this.name);
        };
        f.setMessagePort = function (a) {
          this.setInMessagePort(a);
          this.setOutMessagePort(a);
          return this;
        };
        return a;
      })(c("FuncChannel")),
      r = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.apply(this, arguments) || this;
        }
        return a;
      })(d("WorkerMessagePort").WorkerMessagePort);
    function s(a, b, d, e) {
      x.exportChannel(a, function (e) {
        var f = e.syncPort;
        e = e.remoteNativePort;
        var g = b();
        a === g.name || h(0, 54247, a, g.name);
        var i;
        e
          ? ((i = new r(e, f.name + "(" + g.name + ")")),
            e.start(),
            i.onError.add(function (a) {
              c("FBLogger")("worker")
                .catching(a)
                .mustfix("error caught in remotePort");
              throw a;
            }))
          : (i = f);
        g.setMessagePort(i).setBackend(d);
        c("promiseDone")(f.fullyConnected, function () {
          f.postMessage({ type: "channelReady", channelName: g.name }),
            x.logState("EXPORTED", a);
        });
      });
    }
    function a(a, b, c, d) {
      d === void 0 && (d = {});
      return s(
        c,
        function () {
          return new q(
            function (b) {
              return a;
            },
            c,
            null,
            d
          );
        },
        a,
        b
      );
    }
    var t = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a(a, e) {
        e === void 0 && (e = "");
        var f = d("DateConsts").MS_PER_MIN * 1;
        return (
          b.call(
            this,
            function () {
              c("FBLogger")("worker").warn(
                "Channel %s did not establish eventually. %s",
                a,
                e
              );
            },
            f
          ) || this
        );
      }
      return a;
    })(d("TimedOnceFunc").TimedOnceFunc);
    function u(a, b) {
      var e,
        f = null,
        g,
        h;
      b.isWrappingVirtualMessagePort()
        ? ((h = new (d("VirtualMessageChannel").VirtualMessageChannel)(!0, !0)),
          (e = "on virtual dedicated channel"))
        : ((h = new MessageChannel()),
          (e = "on native dedicated channel"),
          (g = [h.port2]));
      var i = h.port1;
      f = h.port2;
      i.start();
      var j = new r(i, b.name + "(" + a.name + ")");
      c("promiseDone")(b.fullyConnected, function () {
        x.logState("IMPORTING " + e + " ", a.name);
        a.setInMessagePort(j);
        var d = new t(a.name, e);
        c("promiseDone")(
          b.onMessageOnce("channelReady", function (b) {
            return b.channelName === a.name;
          }),
          function (b) {
            a.setOutMessagePort(j),
              d.cancel(),
              x.logState("ESTABLISHED", a.name);
          }
        );
        b.postMessage(
          { type: "channelImport", channelName: a.name, port: f },
          g
        );
      });
      return a.proxyMethods;
    }
    function v(a, b, c, d) {
      c === void 0 && (c = null);
      d === void 0 && (d = {});
      b = new q(
        function (b) {
          return a;
        },
        b,
        c,
        d
      );
      return b;
    }
    function e(a, b, c, d, e) {
      d === void 0 && (d = null);
      e === void 0 && (e = {});
      return u(v(a, c, d, e), b);
    }
    var w = (function () {
        function a() {
          (this.name = self.name + "_P" + Math.round(10 * Math.random())),
            (this.$1 = new Map()),
            (this.$2 = new Set());
        }
        var e = a.prototype;
        e.logState = function (a, b) {
          d("MainPageUrl").isWorkerLogEnabled() &&
            c("FBLogger")("worker").debug("%s-%s %s", this.name, a, b);
        };
        e.$3 = function (a) {
          var b = this.$1.get(a);
          b == null &&
            ((b = { pendingPorts: null, onImportRequest: null }),
            this.$1.set(a, b));
          return b;
        };
        e.exportChannel = function (a, b) {
          var d = this,
            e = this.$3(a);
          e.onImportRequest != null &&
            c("FBLogger")("worker").debug("Re-exporting channel %s", a);
          e.onImportRequest = b;
          this.logState("REGISTERED", a);
          a = e.pendingPorts;
          if (a != null) {
            var f = a.filter(function (a) {
              return d.$2.has(a.syncPort);
            });
            f.forEach(b);
            f.length < a.length
              ? (e.pendingPorts = a.filter(function (a) {
                  return !d.$2.has(a.syncPort);
                }))
              : (e.pendingPorts = null);
          }
          return e;
        };
        e.activate = function (a, b, d) {
          var e = this;
          if (this.$2.has(a)) {
            c("FBLogger")("worker").debug(
              "Port %sis already duplicated ",
              a.name
            );
            return;
          }
          this.$2.add(a);
          a.addMessageListener("channelImport", function (b) {
            var c = b.channelName,
              d = e.$3(c);
            b = { syncPort: a, remoteNativePort: b.port };
            d.onImportRequest != null
              ? d.onImportRequest(b)
              : d.pendingPorts != null
              ? d.pendingPorts.push(b)
              : (d.pendingPorts = [b]);
            e.logState("IMPORT REQUEST", c);
          });
        };
        e.notifyReady = function (a) {};
        e.waitForRemote = function (a) {
          return (i || (i = b("Promise"))).resolve();
        };
        return a;
      })(),
      x = new w();
    function f(a, b, c) {
      x.activate(a, b, c);
    }
    g.TransferableTransformer = k;
    g.WorkerFuncChannel = q;
    g.exportChannelOnPort = s;
    g.exportChannel = a;
    g.importChannelOnPort = u;
    g.makeChannel = v;
    g.importChannel = e;
    g.activateChannels = f;
  },
  98
);
__d(
  "WorkerBanzaiLazyQueueChannelWorker",
  ["BanzaiLazyQueue", "WorkerFuncChannel"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = d("WorkerFuncChannel").importChannel(
        { queuePost: null },
        a,
        "banzai_lazyqueue_channel"
      );
      c("BanzaiLazyQueue").onQueue.add(function () {
        h(b);
      });
      h(b);
    }
    function h(a) {
      c("BanzaiLazyQueue")
        .flushQueue()
        .forEach(function (b) {
          a.queuePost.apply(a, b);
        });
    }
    g.init = a;
  },
  98
);
__d(
  "WorkerQPLChannel",
  ["WorkerFuncChannel", "performanceAbsoluteNow"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = new (d("WorkerFuncChannel").WorkerFuncChannel)(function (a) {
        return {
          markerStartFromNavStart: null,
          markerStart: function (b, d, e) {
            e === void 0 && (e = (h || (h = c("performanceAbsoluteNow")))());
            return a.markerStart(b, d, e);
          },
          markerAnnotate: function (b, c, d) {
            return a.markerAnnotate(b, c, d);
          },
          markerPoint: function (b, d, e) {
            e =
              (e == null ? void 0 : e.timestamp) === void 0
                ? babelHelpers["extends"]({}, e, {
                    timestamp: (h || (h = c("performanceAbsoluteNow")))(),
                  })
                : e;
            return a.markerPoint(b, d, e);
          },
          markerEnd: function (b, d, e, f) {
            f === void 0 && (f = (h || (h = c("performanceAbsoluteNow")))());
            return a.markerEnd(b, d, e, f);
          },
        };
      }, "qpl");
    function a(a) {
      i.setMessagePort(a);
    }
    function b(a) {
      i.setBackend(a);
    }
    g.setMessagePort = a;
    g.initQPL = b;
  },
  98
);
__d(
  "WorkerSelf",
  [
    "WorkerBanzaiLazyQueueChannelWorker",
    "WorkerFuncChannel",
    "WorkerQPLChannel",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      d("WorkerFuncChannel").activateChannels(a, "worker", "client"),
        d("WorkerBanzaiLazyQueueChannelWorker").init(a),
        d("WorkerQPLChannel").setMessagePort(a);
    }
    g.init = a;
  },
  98
);
__d(
  "emptyFunction",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return function () {
        return a;
      };
    }
    b = function () {};
    b.thatReturns = a;
    b.thatReturnsFalse = a(!1);
    b.thatReturnsTrue = a(!0);
    b.thatReturnsNull = a(null);
    b.thatReturnsThis = function () {
      return this;
    };
    b.thatReturnsArgument = function (a) {
      return a;
    };
    c = b;
    f["default"] = c;
  },
  66
);
__d(
  "gkx",
  ["invariant", "BanzaiLazyQueue", "ExecutionEnvironment", "emptyFunction"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = {},
      k = {};
    function l(a) {
      var b = j[a];
      b != null || h(0, 11797, a);
      k[a] ||
        ((k[a] = !0),
        b.hash != null &&
          ((i || (i = c("ExecutionEnvironment"))).canUseDOM ||
            (i || (i = c("ExecutionEnvironment"))).isInWorker) &&
          d("BanzaiLazyQueue").queuePost("gk2_exposure", {
            identifier: a,
            hash: b.hash,
          }));
      return b.result;
    }
    l.add = function (a, b) {
      for (var c in a)
        b && b.entry++, !(c in j) ? (j[c] = a[c]) : b && b.dup_entry++;
    };
    l.addLoggedInternal = function (a) {
      l.add(a);
      for (a in a) k[a] = !0;
    };
    a = c("emptyFunction");
    l.getGKs = function () {
      return null;
    };
    l.getLogged = function () {
      return Object.keys(k).map(function (a) {
        return { identifier: a, hash: j[a].hash };
      });
    };
    l.setPass = a;
    l.setFail = a;
    l.clear = a;
    b = l;
    g["default"] = b;
  },
  98
);
__d(
  "WAMediaWasmWorker",
  [
    "Promise",
    "WAByteArray",
    "WADecodeImage",
    "WAEncodeProgressiveJpeg",
    "WAErrorMessage",
    "WAGenerateImageThumbnailWithoutDOM",
    "WALoadMozjpegWasm",
    "WALoadMozjpegWasmV2",
    "WAMediaStorageIoTesting",
    "WAMediaUtilsWasmUrl",
    "WAMp4CheckAndRepair",
    "WAMp4RepairMux",
    "WAResultOrError",
    "WATagsLogger",
    "WAWasmModuleCache",
    "WAWebPCheck",
    "WorkerMessagePort",
    "WorkerSelf",
    "asyncToGeneratorRuntime",
    "bx",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i = c("bx").getURL(c("bx")("6945")),
      j =
        FileSystemFileHandle != null &&
        "createSyncAccessHandle" in FileSystemFileHandle.prototype,
      k = new (d("WorkerMessagePort").WorkerSyncedMessagePort)(
        self,
        "WAWAMediaWasmWorker"
      );
    d("WorkerSelf").init(k);
    k.addMessageListener("prewarm", function (a) {
      return (h || (h = b("Promise")))
        .resolve()
        .then(
          b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            switch (a.operation) {
              case "progressiveJpegEncode":
                c("gkx")("12220")
                  ? yield d("WAWasmModuleCache").loadWasmModule(
                      d("WALoadMozjpegWasmV2").WAMozjpegWasmUrlV2
                    )
                  : yield d("WALoadMozjpegWasm").loadMozjpegWasm();
                break;
              case "mp4CheckAndRepair":
                yield d("WAWasmModuleCache").loadWasmModule(i);
                break;
              case "mp4RepairMux":
                yield d("WAWasmModuleCache").loadWasmModule(
                  d("WAMediaUtilsWasmUrl").WAMediaUtilsWasmUrl
                );
                break;
              default:
                a.operation;
                return l("error", "prewarm " + a.operation + " is not defined");
            }
          })
        )
        ["catch"](function (b) {
          void l(
            "dev",
            "failed to prewarm operation: " + a.operation + ", error: " + b
          );
        });
    });
    k.addMessageListener("mediaOperationRequest", function (a) {
      return (h || (h = b("Promise")))
        .resolve()
        .then(
          b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            switch (a.operation) {
              case "webpCheck":
                var b = a.input,
                  c = a.requestId,
                  e = a.operation,
                  f = d("WAWebPCheck").createWebPCheck({
                    getWasmModule: d("WAWebPCheck").getWebpCheckWasm,
                    logError: function (a) {
                      void l("error", a);
                    },
                    logMessage: function (a) {
                      void l("dev", a);
                    },
                  });
                f = yield f({ input: b });
                if (f.success === !1) {
                  void l("error", f.error);
                  var g = f.payload;
                  g = d("WAResultOrError").makeError({
                    errorType: f.error,
                    errorMessage:
                      "webpCheck failed with: " +
                      ((f = g == null ? void 0 : g.name) != null
                        ? f
                        : "undefined") +
                      ", stack " +
                      ((f = g == null ? void 0 : g.stack) != null
                        ? f
                        : "undefined"),
                  });
                  return n({ output: g, operation: e, requestId: c });
                }
                return n({
                  output: d("WAResultOrError").makeResult(b),
                  operation: e,
                  requestId: c,
                });
              case "mp4CheckAndRepair":
                f = a.input;
                g = a.requestId;
                b = a.operation;
                e = d("WAMp4CheckAndRepair").createMp4CheckAndRepair({
                  getWasmModule: function () {
                    return d("WAWasmModuleCache").loadWasmModule(i);
                  },
                  logError: function (a) {
                    void l("error", a);
                  },
                  logMessage: function (a) {
                    void l("dev", a);
                  },
                });
                c = yield e({ input: f });
                if (c.success === !1) {
                  void l("error", c.error);
                  e = c.payload;
                  e = d("WAResultOrError").makeError({
                    errorType: c.error,
                    errorMessage:
                      "mp4CheckAndRepair failed with: " +
                      ((f = e == null ? void 0 : e.name) != null
                        ? f
                        : "undefined") +
                      ", stack " +
                      ((f = e == null ? void 0 : e.stack) != null
                        ? f
                        : "undefined"),
                  });
                  return n({ output: e, operation: b, requestId: g });
                }
                f = d("WAResultOrError").makeResult(c.value);
                return n({ output: f, operation: b, requestId: g });
              case "mp4RepairMux":
                e = a.input;
                c = a.requestId;
                f = a.operation;
                b = d("WAMp4RepairMux").createMp4RepairMux({
                  getWasmModule: function () {
                    return d("WAWasmModuleCache").loadWasmModule(
                      d("WAMediaUtilsWasmUrl").WAMediaUtilsWasmUrl
                    );
                  },
                  logError: function (a) {
                    void l("error", a);
                  },
                  logMessage: function (a) {
                    void l("dev", a);
                  },
                });
                g = yield b({ input: e });
                if (g.success === !1) {
                  void l("error", g.error);
                  b = g.payload;
                  b = d("WAResultOrError").makeError({
                    errorType: g.error,
                    errorMessage:
                      "mp4RepairMux failed with: " +
                      ((e = b == null ? void 0 : b.name) != null
                        ? e
                        : "undefined") +
                      ", stack " +
                      ((e = b == null ? void 0 : b.stack) != null
                        ? e
                        : "undefined"),
                  });
                  return n({ output: b, operation: f, requestId: c });
                }
                e = d("WAResultOrError").makeResult(g.value);
                return n({ output: e, operation: f, requestId: c });
              case "progressiveJpegEncode":
                b = a.input;
                g = a.requestId;
                e = a.operation;
                f = a.height;
                c = a.width;
                var h = a.quality,
                  j = a.useHdScanConfig;
                b = yield r({
                  imageDataBuffer: b,
                  height: f,
                  width: c,
                  quality: h,
                  useHdScanConfig: j,
                });
                return n({
                  output: d("WAResultOrError").makeResult(
                    d("WAByteArray").uint8ArrayToBuffer(b)
                  ),
                  operation: e,
                  requestId: g,
                });
              case "progressiveJpegEncodeWithFile":
                f = a.input;
                c = a.fileName;
                h = a.fileType;
                j = a.requestId;
                b = a.operation;
                e = a.quality;
                g = a.useHdScanConfig;
                var k = a.maxOutputWidth,
                  m = a.maxOutputHeight;
                f = new File([f], c, { type: h });
                c = yield d("WADecodeImage")
                  .decodeImageWithoutDOM(
                    f,
                    k != null && m != null ? { width: k, height: m } : void 0
                  )
                  .then(d("WAResultOrError").makeResult)
                  ["catch"](function (a) {
                    return d("WAResultOrError").makeError(a);
                  });
                if (!c.success) {
                  h = c.error;
                  void l("error", "decodeImageWithoutDOM failed");
                  m = d("WAResultOrError").makeError({
                    errorType: "decode-image-error",
                    errorMessage:
                      "decodeImageWithoutDOM failed with: " +
                      ((f = h.name) != null ? f : "undefined") +
                      ", stack " +
                      ((k = h.stack) != null ? k : "undefined"),
                  });
                  return n({ output: m, operation: b, requestId: j });
                }
                f = c.value;
                h = yield r({
                  imageDataBuffer: d("WAByteArray").uint8ArrayToBuffer(f.data),
                  height: f.height,
                  width: f.width,
                  quality: e,
                  useHdScanConfig: g,
                });
                return n({
                  output: d("WAResultOrError").makeResult(
                    d("WAByteArray").uint8ArrayToBuffer(h)
                  ),
                  operation: b,
                  requestId: j,
                });
              default:
                a.operation;
                return n({
                  output: d("WAResultOrError").makeError({
                    errorType: "undefined-operation",
                    errorMessage:
                      a.operation + " is not defined in WAMediaWasmWorker",
                  }),
                  operation: a.operation,
                  requestId: a.requestId,
                });
            }
          })
        )
        ["catch"](function (b) {
          b =
            "operation: " +
            a.operation +
            " has runtime-error " +
            d("WAErrorMessage").maybeGetMessageFromError(b);
          return n({
            output: d("WAResultOrError").makeError({
              errorType: "runtime-error",
              errorMessage: b,
            }),
            operation: a.operation,
            requestId: a.requestId,
          });
        });
    });
    self.onerror = function (a) {
      a = "Uncaught error in WAMediaWasmWorker: " + a.toString();
      void l("error", a);
    };
    function l(a, b) {
      return m.apply(this, arguments);
    }
    function m() {
      m = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        var c = yield k.fullyConnected;
        c.postMessage({ type: "log", logType: a, message: b });
      });
      return m.apply(this, arguments);
    }
    function n(a) {
      return o.apply(this, arguments);
    }
    function o() {
      o = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = a.output,
          c = a.operation;
        a = a.requestId;
        var e = yield k.fullyConnected,
          f =
            b.success === !0
              ? d("WAResultOrError").makeResult({
                  bytes: b.value,
                  isOpfsSyncSupported: j,
                })
              : d("WAResultOrError").makeError(b.error);
        e.postMessage(
          {
            type: "mediaOperationResponse",
            operation: c,
            output: f,
            requestId: a,
          },
          b.success ? [b.value] : void 0
        );
      });
      return o.apply(this, arguments);
    }
    k.addMessageListener("mediaGenerateImageThumbnailRequest", function (a) {
      return (h || (h = b("Promise")))
        .resolve()
        .then(
          b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var b = a.input,
              c = a.fileName,
              e = a.fileType,
              f = a.maxDimension,
              g = a.requestId,
              h = a.thumbnailBlobByteSizeLimitBytes,
              i = a.thumbnailQualityPercentageWhenAboveByteSizeLimit;
            b = new File([b], c, { type: e });
            c = yield d(
              "WAGenerateImageThumbnailWithoutDOM"
            ).generateImageThumbnailWithoutDOM(b, f, h, i);
            e = yield c.blob.arrayBuffer();
            return p({
              output: d("WAResultOrError").makeResult({
                blob: e,
                height: c.height,
                width: c.width,
              }),
              requestId: g,
            });
          })
        )
        ["catch"](function (b) {
          b = "mediaGenerateImageThumbnail has runtime-error " + b.toString();
          return p({
            output: d("WAResultOrError").makeError({
              errorMessage: b,
              errorType: "runtime-error",
            }),
            requestId: a.requestId,
          });
        });
    });
    function p(a) {
      return q.apply(this, arguments);
    }
    function q() {
      q = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = a.output;
        a = a.requestId;
        var c = yield k.fullyConnected;
        c.postMessage(
          {
            output: b,
            requestId: a,
            type: "mediaGenerateImageThumbnailResponse",
          },
          b.success ? [b.value.blob] : void 0
        );
      });
      return q.apply(this, arguments);
    }
    function r(a) {
      return s.apply(this, arguments);
    }
    function s() {
      s = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = a.imageDataBuffer,
          e = a.height,
          f = a.width,
          g = a.quality;
        a = a.useHdScanConfig;
        var h = c("gkx")("12220")
          ? yield d("WALoadMozjpegWasmV2").loadMozjpegWasm()
          : yield d("WALoadMozjpegWasm").loadMozjpegWasm();
        h = d("WAEncodeProgressiveJpeg").createEncodeProgressiveJpeg(h);
        h = h({
          input: b,
          height: e,
          width: f,
          quality: g,
          useHdScanConfig: a,
        });
        return h;
      });
      return s.apply(this, arguments);
    }
    k.addMessageListener("mediaStorageShadowTestRequest", function (a) {
      return (h || (h = b("Promise")))
        .resolve()
        .then(
          b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var b = yield t(a.storageType, a.input, a.requestId);
            return u({ output: b, requestId: a.requestId });
          })
        )
        ["catch"](function (a) {
          void l("dev", "failed to read/write storage operation, error: " + a);
        });
    });
    function t(a, b, c) {
      switch (a) {
        case "idb":
          return d("WAMediaStorageIoTesting").runIoTestingIndexDb(b, c);
        case "webcache":
          return d("WAMediaStorageIoTesting").runIoTestingWebCache(b, c);
        case "opfs":
          return d("WAMediaStorageIoTesting").runIoTestingOPFS(b, c);
      }
    }
    function u(a) {
      return v.apply(this, arguments);
    }
    function v() {
      v = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = a.output;
        a = a.requestId;
        var c = yield k.fullyConnected;
        c.postMessage({
          type: "mediaStorageShadowTestResponse",
          output: b,
          requestId: a,
        });
      });
      return v.apply(this, arguments);
    }
    function w() {
      var a = function (a, b) {
        void l(b != null ? b : "dev", a);
        return;
      };
      d("WATagsLogger").initializeWaLogger({
        count: function (b) {
          return a(b);
        },
        debug: function (b) {
          return a(b);
        },
        devConsole: function (b) {
          return a(b);
        },
        error: function (b) {
          return a(b, "error");
        },
        info: function (b) {
          return a(b);
        },
        logRestricted: function (b) {
          return a(b);
        },
        warn: function (b) {
          return a(b);
        },
      });
    }
    function a() {
      w();
    }
    g["default"] = a;
    g.sendLogToMainThread = l;
  },
  98
);
__d(
  "WAIndexDBStorage",
  ["Promise", "err"],
  function (a, b, c, d, e, f, g) {
    var h,
      i = "idb-storage-testing-db",
      j = "idb-storage-testing-store";
    function a() {
      return new (h || (h = b("Promise")))(function (a, b) {
        var c = indexedDB.open(i);
        c.onerror = function (a) {
          b(a.target.error);
        };
        c.onupgradeneeded = function (a) {
          a = a.target.result;
          a.createObjectStore(j);
        };
        c.onsuccess = function (b) {
          b = b.target.result;
          a(b);
        };
      });
    }
    function d(a) {
      var c = a.idb,
        d = a.fileBuffer,
        e = a.key;
      return new (h || (h = b("Promise")))(function (a, b) {
        var f = c.transaction([j], "readwrite");
        f.oncomplete = function () {
          a();
        };
        f.onerror = function (a) {
          b(a.target.error);
        };
        f.onabort = function (a) {
          b(a.target.error);
        };
        f = f.objectStore(j);
        f = f.put(d, e);
        f.onerror = function (a) {
          b(a.target.error);
        };
        f.onsuccess = function () {
          a();
        };
      });
    }
    function e(a) {
      var d = a.idb,
        e = a.key;
      return new (h || (h = b("Promise")))(function (a, b) {
        var f = d.transaction([j], "readonly");
        f.onerror = function (a) {
          b(a.target.error);
        };
        f.onabort = function (a) {
          b(a.target.error);
        };
        f = f.objectStore(j);
        var g = f.get(e);
        g.onerror = function (a) {
          b(a.target.error);
        };
        g.onsuccess = function () {
          if (!(g.result instanceof ArrayBuffer)) {
            b(c("err")("Result is not an ArrayBuffer"));
            return;
          }
          a(g.result);
        };
      });
    }
    function f(a) {
      var c = a.idb;
      return new (h || (h = b("Promise")))(function (a, b) {
        var d = c.transaction([j], "readwrite");
        d.oncomplete = function () {
          a();
        };
        d.onerror = function (a) {
          b(a.target.error);
        };
        d.onabort = function (a) {
          b(a.target.error);
        };
        d = d.objectStore(j);
        d = d.clear();
        d.onerror = function (a) {
          b(a.target.error);
        };
        d.onsuccess = function () {
          a();
        };
      });
    }
    function k(a) {
      a = a.idb;
      a.close();
      indexedDB.deleteDatabase(i);
    }
    g.prepareIDB = a;
    g.writeToIDB = d;
    g.readFromIDB = e;
    g.cleanupIDB = f;
    g.deleteIdb = k;
  },
  98
);
__d(
  "WAOpfsSyncStorage",
  ["Promise", "asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = "opfs-storage-testing-filesystem";
    function a() {
      return i.apply(this, arguments);
    }
    function i() {
      i = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var a;
        if (
          (navigator == null
            ? void 0
            : (a = navigator.storage) == null
            ? void 0
            : a.getDirectory) == null
        )
          return (g || (g = b("Promise"))).reject("OPFS is not supported");
        a = yield navigator.storage.getDirectory();
        a = yield a.getDirectoryHandle(h, { create: !0 });
        return a;
      });
      return i.apply(this, arguments);
    }
    function c(a) {
      return j.apply(this, arguments);
    }
    function j() {
      j = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = a.directoryHandle,
          c = a.fileBuffer;
        a = a.fileName;
        b = yield b.getFileHandle(a, { create: !0 });
        a = yield b.createSyncAccessHandle();
        a.write(c);
        return a.close();
      });
      return j.apply(this, arguments);
    }
    function d(a) {
      return k.apply(this, arguments);
    }
    function k() {
      k = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = a.directoryHandle;
        a = a.fileName;
        b = yield b.getFileHandle(a);
        a = yield b.createSyncAccessHandle();
        b = a.getSize();
        b = new ArrayBuffer(b);
        yield a.read(b);
        a.close();
        return b;
      });
      return k.apply(this, arguments);
    }
    function e(a) {
      return l.apply(this, arguments);
    }
    function l() {
      l = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var c,
          d = a.directoryHandle;
        a = a.fileName;
        if (
          (navigator == null
            ? void 0
            : (c = navigator.storage) == null
            ? void 0
            : c.getDirectory) == null
        )
          return (g || (g = b("Promise"))).reject("OPFS is not supported");
        yield d.removeEntry(a);
      });
      return l.apply(this, arguments);
    }
    f.prepareFileSystem = a;
    f.writeToFileSystem = c;
    f.readFromFileSystem = d;
    f.cleanupFileSystem = e;
  },
  66
);
__d(
  "WAWebCacheStorage",
  ["asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f) {
    var g = "web-cache-storage-testing";
    function a() {
      return caches.open(g);
    }
    function c(a) {
      var b = a.cache,
        c = a.fileBuffer;
      a = a.key;
      c = new Response(c);
      return b.put(a, c);
    }
    function d(a) {
      return h.apply(this, arguments);
    }
    function h() {
      h = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = a.cache;
        a = a.key;
        b = yield b.match(a);
        return b.arrayBuffer();
      });
      return h.apply(this, arguments);
    }
    function e() {
      return caches["delete"](g).then(function () {});
    }
    f.prepareCache = a;
    f.writeToCache = c;
    f.readFromCache = d;
    f.cleanupCache = e;
  },
  66
);
__d(
  "WAMediaStorageIoTesting",
  [
    "WAErrorMessage",
    "WAIndexDBStorage",
    "WAMediaWasmWorker",
    "WAOpfsSyncStorage",
    "WAResultOrError",
    "WAWebCacheStorage",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    var h = function () {
      return window.performance.now();
    };
    function a(a, b) {
      return i.apply(this, arguments);
    }
    function i() {
      i = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        try {
          var c,
            e = h(),
            f = yield (c = d("WAIndexDBStorage")).prepareIDB(),
            g = h();
          yield c.cleanupIDB({ idb: f });
          var i = h();
          yield c.writeToIDB({ idb: f, fileBuffer: a, key: String(b) });
          a = h();
          var j = h();
          yield c.readFromIDB({ idb: f, key: String(b) });
          b = h();
          var k = h();
          yield c.cleanupIDB({ idb: f });
          var l = h();
          c.deleteIdb({ idb: f });
          c = {
            setupLatency: g - e,
            readLatency: b - j,
            writeLatency: a - i,
            cleanupLatency: l - k,
          };
          return d("WAResultOrError").makeResult(c);
        } catch (a) {
          void d("WAMediaWasmWorker").sendLogToMainThread(
            "error",
            "failed to read/write storage operation for idb, error: " +
              d("WAErrorMessage").maybeGetMessageFromError(a)
          );
          return d("WAResultOrError").makeError({
            errorName: "runtime-error",
            errorMessage: d("WAErrorMessage").maybeGetMessageFromError(a),
          });
        }
      });
      return i.apply(this, arguments);
    }
    function c(a, b) {
      return j.apply(this, arguments);
    }
    function j() {
      j = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        try {
          var c;
          yield (c = d("WAWebCacheStorage")).cleanupCache();
          var e = h(),
            f = yield c.prepareCache(),
            g = h(),
            i = h();
          yield c.writeToCache({ cache: f, fileBuffer: a, key: String(b) });
          a = h();
          var j = h();
          yield c.readFromCache({ cache: f, key: String(b) });
          f = h();
          b = h();
          yield c.cleanupCache();
          c = h();
          g = {
            setupLatency: g - e,
            readLatency: f - j,
            writeLatency: a - i,
            cleanupLatency: c - b,
          };
          return d("WAResultOrError").makeResult(g);
        } catch (a) {
          void d("WAMediaWasmWorker").sendLogToMainThread(
            "error",
            "failed to read/write storage operation for web cache, error: " +
              d("WAErrorMessage").maybeGetMessageFromError(a)
          );
          return d("WAResultOrError").makeError({
            errorName: "runtime-error",
            errorMessage: d("WAErrorMessage").maybeGetMessageFromError(a),
          });
        }
      });
      return j.apply(this, arguments);
    }
    function e(a, b) {
      return k.apply(this, arguments);
    }
    function k() {
      k = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        try {
          var c,
            e = h(),
            f = yield (c = d("WAOpfsSyncStorage")).prepareFileSystem(),
            g = h(),
            i = h();
          yield c.writeToFileSystem({
            directoryHandle: f,
            fileBuffer: a,
            fileName: String(b),
          });
          a = h();
          var j = h();
          yield c.readFromFileSystem({
            directoryHandle: f,
            fileName: String(b),
          });
          var k = h(),
            l = h();
          yield c.cleanupFileSystem({
            directoryHandle: f,
            fileName: String(b),
          });
          c = h();
          f = {
            setupLatency: g - e,
            readLatency: k - j,
            writeLatency: a - i,
            cleanupLatency: c - l,
          };
          return d("WAResultOrError").makeResult(f);
        } catch (a) {
          void d("WAMediaWasmWorker").sendLogToMainThread(
            "error",
            "failed to read/write storage operation for opfs, error: " +
              d("WAErrorMessage").maybeGetMessageFromError(a)
          );
          return d("WAResultOrError").makeError({
            errorName: "runtime-error",
            errorMessage: d("WAErrorMessage").maybeGetMessageFromError(a),
          });
        }
      });
      return k.apply(this, arguments);
    }
    g.runIoTestingIndexDb = a;
    g.runIoTestingWebCache = c;
    g.runIoTestingOPFS = e;
  },
  98
);
__d(
  "MetaConfigMap",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {};
    a = {
      add: function (a, b) {
        for (var c in a)
          b && b.entry++, !(c in g) ? (g[c] = a[c]) : b && b.dup_entry++;
      },
      get: function (a) {
        return g[a];
      },
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "getFalcoLogPolicy_DO_NOT_USE",
  ["recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { r: 1 },
      i = {};
    function a(a) {
      var b = i[a];
      if (b == null) {
        c("recoverableViolation")(
          "Failed to find a Haste-supplied log policy for the Falco event ' +\n        'identified by token `" +
            a +
            "`. Failing open (ie. with a sampling rate of 1.0).",
          "staticresources"
        );
        return h;
      }
      return b;
    }
    a.add = function (a, b) {
      Object.keys(a).forEach(function (c) {
        b && b.entry++, i[c] == null ? (i[c] = a[c]) : b && b.dup_entry++;
      });
    };
    g["default"] = a;
  },
  98
);
__d(
  "ix",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    var i = {},
      j = new Set();
    function b(a) {
      var b = i[a];
      !b && h(0, 11798, a);
      return b;
    }
    b.add = function (a, b) {
      var c = !1;
      for (c in a)
        b && b.entry++,
          !(c in i)
            ? ((a[c].loggingID = c), (i[c] = a[c]))
            : b && b.dup_entry++;
    };
    b.getUsedPaths_ONLY_FOR_REACT_FLIGHT = function () {
      a.__flight_execution_mode_DO_NOT_USE === "flight" || h(0, 34547);
      return Array.from(j);
    };
    b.getAllPaths = function () {
      var a = new Set();
      Object.values(i)
        .map(function (a) {
          if ((a == null ? void 0 : a.sprited) === 0) return a.uri;
          else if ((a == null ? void 0 : a.sprited) === 1) return a._spi;
          else if ((a == null ? void 0 : a.sprited) === 2) return a.spi;
        })
        .forEach(function (b) {
          return b != null && a.add(b);
        });
      return a;
    };
    g["default"] = b;
  },
  98
);
__d(
  "justknobx",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {};
    a = {
      getBool: function (a) {
        h(0, 47459);
      },
      getInt: function (a) {
        h(0, 47459);
      },
      _: function (a) {
        var b = i[a];
        b != null || h(0, 47458, a);
        return b.r;
      },
      add: function (a, b) {
        for (var c in a)
          b && b.entry++, !(c in i) ? (i[c] = a[c]) : b && b.dup_entry++;
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "qex",
  ["invariant", "BanzaiLazyQueue"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {},
      j = {};
    a = {
      _: function (a) {
        var b = i[a];
        b != null || h(0, 11799, a);
        var c = b.r;
        b = b.l;
        b != null &&
          !j[a] &&
          ((j[a] = !0), d("BanzaiLazyQueue").queuePost("qex", { l: b }));
        return c;
      },
      add: function (a, b) {
        for (var c in a)
          b && b.entry++, !(c in i) ? (i[c] = a[c]) : b && b.dup_entry++;
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "HasteSupportData",
  [
    "ix",
    "MetaConfigMap",
    "QPLHasteSupportDataStorage",
    "bx",
    "getFalcoLogPolicy_DO_NOT_USE",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a, b) {
      var d = a.bxData,
        e = a.clpData,
        f = a.gkxData,
        g = a.ixData,
        i = a.metaconfigData,
        j = a.qexData,
        k = a.qplData;
      a = a.justknobxData;
      d != null && c("bx").add(d, b);
      e != null && c("getFalcoLogPolicy_DO_NOT_USE").add(e, b);
      f != null && c("gkx").add(f, b);
      g != null && h.add(g, b);
      i != null && c("MetaConfigMap").add(i, b);
      j != null && c("qex").add(j, b);
      k != null && c("QPLHasteSupportDataStorage").add(k, b);
      a != null && c("justknobx").add(a, b);
    }
    g.handle = a;
  },
  98
);
__d(
  "BitMap",
  [],
  function (a, b, c, d, e, f) {
    var g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    a = (function () {
      function a() {
        (this.$1 = []), (this.$2 = null);
      }
      var b = a.prototype;
      b.set = function (a) {
        this.$2 != null && !this.$1[a] && (this.$2 = null);
        this.$1[a] = 1;
        return this;
      };
      b.toString = function () {
        var a = [];
        for (var b = 0; b < this.$1.length; b++) a.push(this.$1[b] ? 1 : 0);
        return a.length ? i(a.join("")) : "";
      };
      b.toCompressedString = function () {
        if (this.$1.length === 0) return "";
        if (this.$2 != null) return this.$2;
        var a = [],
          b = 1,
          c = this.$1[0] || 0,
          d = c.toString(2);
        for (var e = 1; e < this.$1.length; e++) {
          var f = this.$1[e] || 0;
          f === c ? b++ : (a.push(h(b)), (c = f), (b = 1));
        }
        b && a.push(h(b));
        return (this.$2 = i(d + a.join("")));
      };
      return a;
    })();
    function h(a) {
      a = a.toString(2);
      var b = "0".repeat(a.length - 1);
      return b + a;
    }
    function i(a) {
      a = (a + "00000").match(/[01]{6}/g);
      var b = "";
      for (var c = 0; a != null && c < a.length; c++) b += g[parseInt(a[c], 2)];
      return b;
    }
    f["default"] = a;
  },
  66
);
__d(
  "ge",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      if (typeof a !== "string") return a;
      else if (!b) return document.getElementById(a);
      else return g(a, b, c);
    }
    function g(a, b, c) {
      var d;
      if (h(b) == a) return b;
      else if (b.getElementsByTagName) {
        c = b.getElementsByTagName(c || "*");
        for (d = 0; d < c.length; d++) if (h(c[d]) == a) return c[d];
      } else {
        c = b.childNodes;
        for (d = 0; d < c.length; d++) {
          b = g(a, c[d]);
          if (b) return b;
        }
      }
      return null;
    }
    function h(a) {
      return a.getAttribute ? a.getAttribute("id") : null;
    }
    f["default"] = a;
  },
  66
);
__d(
  "memoize",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    function a(a) {
      var b = a,
        c;
      return function () {
        arguments.length && h(0, 4494);
        b && ((c = b()), (b = null));
        return c;
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "replaceTransportMarkers",
  ["BanzaiLazyQueue", "ge", "memoize"],
  function (a, b, c, d, e, f, g) {
    var h = new Set();
    function i(a, e, f) {
      var g = f !== void 0 ? e[f] : e,
        j;
      if (Array.isArray(g)) for (j = 0; j < g.length; j++) i(a, g, j);
      else if (g && typeof g === "object")
        if (g.__m)
          g.__lazy
            ? (e[f] = c("memoize")(b.bind(null, g.__m)))
            : (e[f] = b.call(null, g.__m));
        else if (g.__jsr)
          e[f] = new (b.call(null, "JSResourceReferenceImpl"))(
            g.__jsr
          ).__setRef("replaceTransportMarkers");
        else if (g.__dr)
          e[f] = new (b.call(null, "RequireDeferredReference"))(
            g.__dr
          ).__setRef("replaceTransportMarkers");
        else if (g.__rc)
          g.__rc[0] === null ? (e[f] = null) : (e[f] = b.call(null, g.__rc[0])),
            g.__rc[1] &&
              (h.has(g.__rc[1]) ||
                (h.add(g.__rc[1]),
                d("BanzaiLazyQueue").queuePost(
                  "require_cond_exposure_logging",
                  { identifier: g.__rc[1] }
                )));
        else if (g.__e) e[f] = c("ge")(g.__e);
        else if (g.__rel) e[f] = a.relativeTo;
        else if (g.__bigPipeContext) e[f] = a.bigPipeContext;
        else if (g.__bbox) e[f] = g.__bbox;
        else {
          for (j in g) i(a, g, j);
          if (g.__map) e[f] = new Map(g.__map);
          else if (g.__set) e[f] = new Set(g.__set);
          else if (g.__imm) {
            j = g.__imm;
            a = j.method;
            g = j.value;
            e[f] = b.call(null, "immutable")[a](g);
          }
        }
    }
    g["default"] = i;
  },
  98
);
__d(
  "ServerJSDefine",
  ["BitMap", "replaceTransportMarkers"],
  function (a, b, c, d, e, f, g) {
    var h = 2,
      i = 8,
      j = new (c("BitMap"))(),
      k = {
        getLoadedModuleHash: function () {
          return j.toCompressedString();
        },
        getModuleNameAndHash: function (a) {
          a = a.split("@");
          return { hash: a[1], name: a[0] };
        },
        handleDefine: function (a, b, d, e, g) {
          e >= 0 && j.set(e),
            define(
              a,
              b,
              function (h, i, j, k, b) {
                h = { data: d };
                c("replaceTransportMarkers")({ relativeTo: g }, h);
                if (e === -42) {
                  i = d != null && typeof d === "object" && d.__throw8367__;
                  throw new Error(a + ": " + (typeof i === "string" ? i : ""));
                }
                b.exports = h.data;
              },
              h | i
            );
        },
        handleDefines: function (a, b) {
          a.forEach(function (a) {
            var c;
            b != null ? (c = [].concat(a, [b])) : (c = [].concat(a, [null]));
            k.handleDefine.apply(null, c);
          });
        },
      };
    a = k;
    g["default"] = a;
  },
  98
);
__d(
  "WorkerBootstrap",
  ["HasteSupportData", "ServerJSDefine"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      Object.keys(a).forEach(function (b) {
        c("ServerJSDefine").handleDefine(b, [], a[b], -1, null);
      });
    }
    function a(a, c) {
      var f, g;
      a.hsdp && d("HasteSupportData").handle(a.hsdp);
      var i =
        (f = (g = a.jsmods) != null ? g : a.dynamicModules) != null ? f : {};
      h(i);
      var j = b.call(null, c);
      a.rds != null && a.rds.length > 0 && e.call(null, a.rds, function () {});
      if (typeof j === "function" || j !== null)
        try {
          for (
            var k = arguments.length, l = new Array(k > 2 ? k - 2 : 0), m = 2;
            m < k;
            m++
          )
            l[m - 2] = arguments[m];
          j.apply(void 0, l);
        } catch (a) {}
    }
    function f(a) {
      a = a;
      if (typeof a === "function" || a !== null)
        try {
          a();
        } catch (a) {}
    }
    g.initDynamicModules = h;
    g.start = a;
    g.startServerJS = f;
  },
  98
);
function StartBundle(a) {
  var b;
  for (
    var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1;
    e < c;
    e++
  )
    d[e - 1] = arguments[e];
  (b = require.call(null, "WorkerBootstrap")).start.apply(
    b,
    [a, "WAMediaWasmWorker"].concat(d)
  );
}
