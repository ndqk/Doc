"object" != typeof globalThis && (globalThis = window),
    function(e) {
        function t(t) {
            for (var n, o, i = t[0], c = t[1], u = t[2], s = 0, f = []; s < i.length; s++)
                o = i[s],
                Object.prototype.hasOwnProperty.call(a, o) && a[o] && f.push(a[o][0]), a[o] = 0;
            for (n in c)
                Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
            for (d && d(t); f.length;)
                f.shift()();
            return l.push.apply(l, u || []), r()
        }

        function r() {
            for (var e, t = 0; t < l.length; t++) {
                for (var r = l[t], n = !0, o = 1; o < r.length; o++) {
                    var c = r[o];
                    0 !== a[c] && (n = !1)
                }
                n && (l.splice(t--, 1), e = i(i.s = r[0]))
            }
            return e
        }
        var n = {},
            o = { 9: 0 },
            a = { 9: 0 },
            l = [];

        function i(t) {
            if (n[t])
                return n[t].exports;
            var r = n[t] = { i: t, l: !1, exports: {} };
            return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
        }
        i.e = function(e) {
            var t = [];
            o[e] ? t.push(o[e]) : 0 !== o[e] && { 13: 1 }[e] && t.push(o[e] = new Promise((function(t, r) {
                for (var n = ({ 2: "countries", 5: "lang-en", 6: "lang-vi" }[e] || e) + "." + { 2: "31d6cfe0d16ae931b73c", 5: "31d6cfe0d16ae931b73c", 6: "31d6cfe0d16ae931b73c", 13: "2dd88dbaf90f3a16c98c" }[e] + ".css", a = i.p + n, l = document.getElementsByTagName("link"), c = 0; c < l.length; c++) { var u = (d = l[c]).getAttribute("data-href") || d.getAttribute("href"); if ("stylesheet" === d.rel && (u === n || u === a)) return t() }
                var s = document.getElementsByTagName("style");
                for (c = 0; c < s.length; c++) { var d; if ((u = (d = s[c]).getAttribute("data-href")) === n || u === a) return t() }
                var f = document.createElement("link");
                f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function(t) {
                    var n = t && t.target && t.target.src || a,
                        l = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                    l.code = "CSS_CHUNK_LOAD_FAILED", l.request = n, delete o[e], f.parentNode.removeChild(f), r(l)
                }, f.href = a, document.getElementsByTagName("head")[0].appendChild(f)
            })).then((function() { o[e] = 0 })));
            var r = a[e];
            if (0 !== r)
                if (r) t.push(r[2]);
                else {
                    var n = new Promise((function(t, n) { r = a[e] = [t, n] }));
                    t.push(r[2] = n);
                    var l, c = document.createElement("script");
                    c.charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.src = function(e) { return i.p + "lazy/" + ({ 2: "countries", 5: "lang-en", 6: "lang-vi" }[e] || e) + "." + { 2: "df7edef8aded4c75a2ff", 5: "9ad19a51d95e563bcf2b", 6: "e429fafdd6120b5df4f7", 13: "0bd12de7d786cfb60b6a" }[e] + ".js" }(e);
                    var u = new Error;
                    l = function(t) {
                        c.onerror = c.onload = null, clearTimeout(s);
                        var r = a[e];
                        if (0 !== r) {
                            if (r) {
                                var n = t && ("load" === t.type ? "missing" : t.type),
                                    o = t && t.target && t.target.src;
                                u.message = "Loading chunk " + e + " failed.\n(" + n + ": " + o + ")", u.name = "ChunkLoadError", u.type = n, u.request = o, r[1](u)
                            }
                            a[e] = void 0
                        }
                    };
                    var s = setTimeout((function() { l({ type: "timeout", target: c }) }), 12e4);
                    c.onerror = c.onload = l, document.head.appendChild(c)
                }
            return Promise.all(t)
        }, i.m = e, i.c = n, i.d = function(e, t, r) { i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, i.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, i.t = function(e, t) {
            if (1 & t && (e = i(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (i.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                for (var n in e) i.d(r, n, function(t) { return e[t] }.bind(null, n));
            return r
        }, i.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return i.d(t, "a", t), t }, i.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, i.p = "https://zalo-chat-static.zadn.vn/v1/", i.oe = function(e) { throw console.error(e), e };
        var c = this.webpackJsonp = this.webpackJsonp || [],
            u = c.push.bind(c);
        c.push = t, c = c.slice();
        for (var s = 0; s < c.length; s++) t(c[s]);
        var d = u;
        l.push([13, 1, 12, 0]), r()
    }({
        13: function(e, t, r) { e.exports = r("tjUo") },
        14: function(e, t) {},
        jw3m: function(e, t, r) {},
        o0oJ: function(e, t, r) {
            (function(e) {
                const t = {};

                function r(e) { return t[e] || (t[e] = 0), t[e] += 1, 100 * e + t[e] }
                if (!e.perf) {
                    let t;
                    t = () => Date.now();
                    const n = { STARTUP: r(1), MIGRATION_DONE: r(2), MAIN_SCRIPT: r(2), LOADED_MAIN_SCRIPT: r(3), MAIN_APP_READY: r(3), LOADED_STARTUP_SCRIPT: r(2), STARTUP_BEFORE_HEAVY: r(3), CREATE_MAIN_WINDOW: r(3), SHOW_MAIN_WINDOW: r(3), MAIN_WINDOW_LOADING: r(3), MAIN_WINDOW_LOADED: r(3), APP_STARTUP: r(2), LOAD_APP_SCRIPT: r(3), APP_DID_MOUNT: r(3), CHATBOX_DID_MOUNT: r(3), SELECT_CONVERSATION: r(1), SELECTED_CONVERSATION: r(2) };
                    e.perf = {...n,
                        perfRecords: [],
                        record: r => {
                            r || (r = 0);
                            const n = [r, t()];
                            e.perf.perfRecords.push(n)
                        }
                    }
                }
            }).call(this, r("kjmW"))
        },
        tjUo: function(e, t, r) {
            "use strict";
            r.r(t);
            r("o0oJ"), r("ls82"), r("saaK");
            window.global = globalThis;
            r("jw3m"), r("dThN");
            var n = r("z0WU");
            r("vSga"), r("XS0u");
            ! function() {
                window.__loadTimer && clearTimeout(window.__loadTimer);
                window.__startTime && r("vbkW").ipcRenderer.send("load-shell-qos", Date.now() - window.__startTime)
            }();
            var o = r("i8i4"),
                a = r("q1tI"),
                l = r.n(a),
                i = r("/MKj"),
                c = r("FK2X"),
                u = r("emRR"),
                s = r("xrk1"),
                d = (r("97kL"), r("Ytmi")),
                f = r("ndDP"),
                p = r.n(f),
                h = r("i4CS"),
                b = r("VdOQ");
            const m = new p.a({ maxSize: 1e3 });
            let v = null,
                g = null;

            function _() {
                ! function(e) {
                    var t, r, o, a;
                    const l = null == e || null === (t = e.chatbox) || void 0 === t ? void 0 : t.messages;
                    if (v === l) return;
                    v = l;
                    const i = null != (r = null == l || null === (o = l[0]) || void 0 === o ? void 0 : o.toUid) ? r : null == l || null === (a = l[0]) || void 0 === a ? void 0 : a.userId;
                    if (i !== g && m.clear(), g = i, Array.isArray(l))
                        for (const u of l)
                            if (m.has(u)) m.set(u);
                            else { m.set(u); try { if (d.e(u)) { s.e.dispatch(h.d(u)); continue } if (d.k(u)) { s.e.dispatch(h.f(u)); continue } } catch (c) { m.delete(u), n.default.logCoreError("FileStore:Subscriber:", Object(b.a)(c, u)) } }
                }(u.default.getState())
            }
            let T = !1;
            T || (T = !0, u.default.subscribe(_));
            var O = r("ZBGy");
            r("FcQj");
            perf.record(perf.LOAD_APP_SCRIPT), window.Promise = r("E2g8").Promise, (() => {
                const e = globalThis.Promise;
                e && (e.allSettled || (e.allSettled = t => e.all(t.map((e => e.then((e => ({ status: "fulfilled", value: e }))).catch((e => ({ status: "rejected", reason: e }))))))))
            })(), n.default.checkSupport(), n.default.showWarningMsg();
            const A = Object(i.b)((function(e) { return { user: e.user, sidebar: e.sidebar, popup: e.popup, chatbox: e.chatbox, status: e.status, profile: e.profile, zaviState: e.zaviState } }), (function(e) { return { dispatch: Object(O.c)(e) } }))(c.c),
                y = () => l.a.createElement(s.d, null, l.a.createElement(i.a, { store: u.default }, l.a.createElement(O.b, null, l.a.createElement(A, null))));
            Object(o.render)(l.a.createElement(y, null), document.getElementById("app"))
        }
    });