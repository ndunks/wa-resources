__d("WAWebCollection", ["WAArrayMove", "WALogger", "WAWebCollectionInternalUtils", "WAWebEventEmitter", "err", "gkx"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["collection:_prepareModel for model ", " exception: ", ""]);
        h = function () {
            return a
        }
            ;
        return a
    }
    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["no model with id ", ""]);
        i = function () {
            return a
        }
            ;
        return a
    }
    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed!"]);
        j = function () {
            return a
        }
            ;
        return a
    }
    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["collection:set model has no id"]);
        k = function () {
            return a
        }
            ;
        return a
    }
    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["collection:set called with no models"]);
        l = function () {
            return a
        }
            ;
        return a
    }
    a = function (a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, d) {
            d === void 0 && (d = {});
            b = a.call(this) || this;
            d.parent && (b.parent = d.parent);
            d = b.constructor;
            var e = d.model;
            d = d.comparator;
            if (!e)
                throw c("err")("Collection initialized without model. It is likely that you have a circular dependency. Set a breakpoint to find it and use inline `require` instead of `import` to avoid it.");
            b.modelClass = e;
            d && (b._comparator = d);
            b._reset();
            var f = babelHelpers.assertThisInitialized(b);
            Object.defineProperty(babelHelpers.assertThisInitialized(b), "length", {
                get: function () {
                    return f._models.length
                }
            });
            return b
        }
        var e = b.prototype;
        e.add = function (a, b) {
            var c;
            Array.isArray(a) ? c = a.slice() : c = a ? [a] : [];
            return this.set(c, babelHelpers["extends"]({
                merge: !1,
                add: !0,
                remove: !1
            }, b))
        }
            ;
        e.set = function (a, b) {
            var c = this;
            if (!a) {
                d("WALogger").WARN(l());
                return []
            }
            var e = babelHelpers["extends"]({
                add: !0,
                remove: !0,
                merge: !0
            }, b), f, g, h, i;
            b = this._comparator && e.sort !== !1;
            var j = []
                , m = []
                , n = {}
                , o = e.add
                , p = e.merge
                , q = e.remove
                , r = e.at != null ? e.at : void 0
                , s = !b && o === !0 && q === !0 ? [] : null;
            for (var t = 0, u = a.length; t < u; t++) {
                i = a[t];
                this.isModel(i) && (g = i);
                f = i.id;
                if (!f) {
                    d("WALogger").WARN(k());
                    continue
                }
                h = this.get(f);
                if (h)
                    (function () {
                        var b = h;
                        q === !0 && (n[h.id.toString()] = !0);
                        p === !0 && (i = g && i === g ? g.attributes : i,
                            b.set(i, e),
                            c._iterateAggregators(function (a) {
                                a.add([b])
                            }));
                        a[t] = b
                    }
                    )();
                else if (o === !0) {
                    g = a[t] = this._prepareModel(i, e);
                    if (g) {
                        f = g;
                        j.push(f);
                        this._addReference(f)
                    } else
                        continue
                }
                g = h || g;
                if (!g)
                    continue;
                f = g;
                s && (!g.id || !n[g.id.toString()]) && s.push(f);
                n[f.id.toString()] = !0
            }
            if (q === !0) {
                for (f = 0,
                    o = this.length; f < o; f++) {
                    g = this._models[f];
                    u = g;
                    n[g.id.toString()] || m.push(u)
                }
                m.length && this.remove(m, babelHelpers["extends"]({}, e))
            }
            var v;
            if (j.length || Boolean(s == null ? void 0 : s.length)) {
                b && (v = !0);
                if (typeof r === "number") {
                    (u = this._models).splice.apply(u, [r, 0].concat(j))
                } else {
                    f = s || j;
                    for (o = 0,
                        m = f.length; o < m; o++)
                        this._models.push(f[o])
                }
                this._iterateAggregators(function (a) {
                    a.add(j)
                })
            }
            v && this.sort({
                silent: !0
            });
            if (!e.silent) {
                for (b = 0,
                    u = j.length; b < u; b++)
                    g = j[b],
                        g.trigger ? g.trigger("add", g, this, e) : this.trigger("add", g, this, e);
                (v || Boolean(s == null ? void 0 : s.length)) && this.trigger("sort", this, e)
            }
            return a
        }
            ;
        e.remove = function (a, b) {
            b === void 0 && (b = {});
            var c, d;
            a = Array.isArray(a) ? a.slice() : [a];
            var e = [];
            for (var f = 0, g = a.length; f < g; f++) {
                d = a[f];
                if (!d)
                    continue;
                d = d instanceof this.modelClass ? d.id : d;
                d = e[f] = this.get(d);
                if (d) {
                    var h = d;
                    this._deIndex(d);
                    c = this._models.indexOf(d);
                    this._models.splice(c, 1);
                    b.silent || (b.index = c,
                        h.trigger ? h.trigger("remove", d, this, b) : this.trigger("remove", d, this, b));
                    this._removeReference(h)
                }
            }
            this._iterateAggregators(function (a) {
                a.remove(e)
            });
            return e
        }
            ;
        e.reset = function () {
            for (var a = 0, b = this._models.length; a < b; a++)
                this._removeReference(this._models[a]);
            this._reset();
            this.trigger("reset", this)
        }
            ;
        e.sort = function (a) {
            a === void 0 && (a = {});
            if (!this._comparator)
                throw c("err")("Cannot sort without comparator");
            this._models.sort(this._comparator.bind(this));
            a.silent || this.trigger("sort", this, a);
            return this
        }
            ;
        e.replaceId = function (a, b) {
            var c = this.get(a);
            if (!c)
                return;
            this._removeFromIndex(a);
            c.set({
                id: b
            });
            this._addIndex(c)
        }
            ;
        e.reorderMutate = function (a, b) {
            d("WAArrayMove").arrayMoveMutate(this._models, a, b)
        }
            ;
        e.get = function (a) {
            return this._index[a]
        }
            ;
        e.assertGet = function (a) {
            var b = this._index[a];
            if (!b)
                if (c("gkx")("26258"))
                    d("WALogger").ERROR(j()).sendLogs("Collection:assertGet no result");
                else {
                    var e = this.constructor.name + ":assertGet";
                    d("WALogger").ERROR(i(), String(a)).sendLogs(e)
                }
            return b
        }
            ;
        e.at = function (a) {
            return this._models[a]
        }
            ;
        e.serialize = function () {
            return this.map(function (a) {
                return a.toJSON()
            })
        }
            ;
        e.toJSON = function () {
            return this.serialize()
        }
            ;
        e.isModel = function (a) {
            return a instanceof this.modelClass
        }
            ;
        e.includes = function (a, b) {
            b === void 0 && (b = 0);
            return b === 0 ? !(a instanceof this.modelClass) ? !1 : this.get(a.id) != null : this._models.includes(a, b)
        }
            ;
        e.indexOf = function (a, b) {
            return this._models.indexOf(a, b)
        }
            ;
        e.lastIndexOf = function (a, b) {
            return this._models.lastIndexOf(a, b)
        }
            ;
        e.every = function (a) {
            return this._models.every(a)
        }
            ;
        e.some = function (a) {
            return this._models.some(a)
        }
            ;
        e.forEach = function (a) {
            this._models.forEach(a)
        }
            ;
        e.map = function (a) {
            return this._models.map(a)
        }
            ;
        e.filter = function (a) {
            return this._models.filter(a)
        }
            ;
        e.findFirst = function (a) {
            return this._models.find(a)
        }
            ;
        e.reduce = function (a, b) {
            return this._models.reduce(a, b)
        }
            ;
        e.slice = function (a, b) {
            return this._models.slice(a, b)
        }
            ;
        e.where = function (a) {
            return this.filter(function (b) {
                for (var c in a)
                    if (a[c] !== b.get(c))
                        return !1;
                return !0
            })
        }
            ;
        e.head = function () {
            return this._models[0]
        }
            ;
        e.last = function () {
            return this._models[this._models.length - 1]
        }
            ;
        e.toArray = function () {
            return this._models.slice()
        }
            ;
        e.getModelsArray = function () {
            return this._models
        }
            ;
        e.reorder = function (a, b) {
            return d("WAArrayMove").arrayMove(this._models, a, b)
        }
            ;
        e._reset = function () {
            this._models = [],
                this._index = {},
                this._iterateAggregators(function (a) {
                    a.reset()
                }, !1)
        }
            ;
        e._prepareModel = function (a, b) {
            if (this.isModel(a)) {
                a.collection || (a.collection = this);
                return a
            }
            b = babelHelpers["extends"]({}, b, {
                collection: this
            });
            try {
                return new this.modelClass(a, b)
            } catch (c) {
                d("WALogger").ERROR(h(), (b = this == null ? void 0 : (a = this.modelClass) == null ? void 0 : a.name) != null ? b : "", c.stack).sendLogs("collection-model-creation-error");
                return void 0
            }
        }
            ;
        e._addReference = function (a) {
            this._addIndex(a),
                a.collection || (a.collection = this),
                a.on && a.on("all", this._handleModelEvent, this)
        }
            ;
        e._removeReference = function (a) {
            this === a.collection && delete a.collection,
                this._deIndex(a),
                a.off && a.off("all", this._handleModelEvent, this)
        }
            ;
        e._addIndex = function (a) {
            this._index[a.id] = a
        }
            ;
        e._deIndex = function (a) {
            delete this._index[a.id]
        }
            ;
        e._removeFromIndex = function (a) {
            if (!this.get(a))
                return;
            delete this._index[a]
        }
            ;
        e._handleModelEvent = function (a, b, c, d) {
            var e = a.indexOf(":")
                , f = e === -1 ? a : a.slice(0, e);
            if ((f === "add" || f === "remove") && c !== this)
                return;
            f === "destroy" && this.remove(b, d);
            this.trigger.apply(this, arguments)
        }
            ;
        e._iterateAggregators = function (a, b) {
            b === void 0 && (b = !0);
            if (this._aggregators == null) {
                if (!b)
                    return;
                this._aggregators = d("WAWebCollectionInternalUtils").groupMethodsByKind(this).aggregate
            }
            (b = this._aggregators) == null ? void 0 : b.forEach(a)
        }
            ;
        return b
    }(c("WAWebEventEmitter"));
    g["default"] = a
}
), 98);