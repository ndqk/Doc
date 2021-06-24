var _za_version = "2005151006";
try {
    if (ZA && ZA.version) throw new Error("Already loaded");
    var ZA = function() {
        var o = encodeURIComponent,
            t = { t: "https://za.zalo.me" },
            r = { o: "__zi", s: "st", u: "ozi", _: "_zsfp", p: "cdm", l: "_zirc", m: "cme" },
            i = { g: "/v3/w/_zaf.gif", h: "/v3/le", F: "/v3/fp", A: "/static/v3/index.html?origin=", S: "/v3/gb", k: "/v3/brp", M: "/cm" },
            a = { P: 1, T: 21, I: 20 },
            c = { B: "checkFP", R: "reqVid", O: "resFP", C: "resVid" },
            e = { D: "z_tpv_", N: "z_sfp_", W: "z_cfb_" },
            s = { V: "z_tpv", L: "resRd" + Date.now(), U: "z_dpm", G: "ZA.onready" },
            d = {},
            u = "https://za.",
            _ = {
                q: function(n, t) {
                    if ("string" == typeof t)
                        for (var e = n + "=", i = t.split(/[;&]/), o = 0; o < i.length; o++) {
                            for (var r = i[o];
                                " " === r.charAt(0);) r = r.substring(1, r.length);
                            if (0 === r.indexOf(e)) return r.substring(e.length, r.length)
                        }
                },
                J: function(n) { return n = n || window.location.pathname + window.location.search },
                Z: function(n) {
                    (n = n || {}).url = n.url || "", n.params = n.params || {}, n.success = n.success || function() {}, n.fail = n.fail || function() {};
                    var t = new XMLHttpRequest;
                    t.addEventListener("readystatechange", function() { 4 === this.readyState && (200 === this.status ? n.success(this.responseText) : n.fail(this.status)) }), t.open("POST", n.url), t.withCredentials = !0, t.setRequestHeader("content-type", "application/x-www-form-urlencoded"), t.send(_.$(n.params))
                },
                j: function(n) {
                    (n = n || {}).url = n.url || "", n.params = n.params || {}, n.success = n.success || function() {}, n.fail = n.fail || function() {};
                    var t = new XMLHttpRequest;
                    t.addEventListener("readystatechange", function() { 4 === this.readyState && (200 === this.status ? n.success(this.responseText) : n.fail(this.status)) }), t.open("GET", n.url + "?" + _.$(n.params)), t.send()
                },
                $: function(n) {
                    var t = "",
                        e = !0;
                    for (var i in n) !1 === e ? t += "&" : e = !1, t += i + "=" + o(n[i]);
                    return t
                },
                H: function(n, t) {
                    try {
                        t = t || window.location.href, n = n.replace(/[\[\]]/g, "\\$&");
                        var e = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)").exec(t);
                        return e ? e[2] ? decodeURIComponent(e[2].replace(/\+/g, " ")) : "" : null
                    } catch (n) {
                        return ""
                    }
                },
                K: function(n) {
                    var t = document.location.href,
                        e = t.split("?");
                    if (2 <= e.length) {
                        for (var i = e.shift(), o = e.join("?"), r = encodeURIComponent(n) + "=", a = o.split(/[&;]/g), c = a.length; 0 < c--;) - 1 !== a[c].lastIndexOf(r, 0) && a.splice(c, 1);
                        t = i + (1 <= a.length ? "?" + a.join("&") : ""), window.history.replaceState("", document.title, t)
                    }
                    return t
                },
                X: function(n) {
                    for (var t = document.getElementsByTagName("script"), e = 0; e < t.length; e++)
                        if (-1 < t[e].src.indexOf(n)) return t[e].src;
                    return null
                },
                Y: function(n) {
                    (n = n || {}).url = n.url || "", n.params = n.params || {};
                    var t = document.createElement("img");
                    t.setAttribute("width", "0"), t.setAttribute("height", "0"), t.setAttribute("onload", "this.parentNode.removeChild(this)"), t.setAttribute("onerror", "this.parentNode.removeChild(this)"), t.src = n.url + "?" + this.$(n.params) + "&r=" + (new Date).getTime();
                    var e = document.getElementsByTagName("script")[0];
                    e.parentNode.insertBefore(t, e)
                },
                nn: function(n) {
                    if (!n || "" === n) return 1;
                    for (var t = 0, e = 0, i = n.length - 1; 0 <= i; i--) {
                        var o = parseInt(n.charCodeAt(i));
                        0 != (e = 266338304 & (t = (t << 6 & 268435455) + o + (o << 14))) && (t ^= e >> 21)
                    }
                    return t
                },
                tn: function(n) { n = n || w.en; var t = "Windows"; return /windows 4.10/.test(n) ? t = "Windows 98" : /windows 4.90/.test(n) ? t = "Windows ME" : /windows nt 5.0/.test(n) ? t = "Windows 2000" : /windows nt 5.1/.test(n) ? t = "Windows XP" : /windows nt 6.0/.test(n) ? t = "Windows Vista" : /windows nt 6.1/.test(n) ? t = "Windows 7" : /windows nt 6.2/.test(n) ? t = "Windows 8" : /windows nt 6.3/.test(n) && (t = "Windows 8.1"), t },
                in: function() { if (/windows phone/.test(w.en)) return "Windows Phone"; var n = w.on.split(" ")[0]; return "win32" === n.toLowerCase() || "win64" === n.toLowerCase() ? n = this.tn() : "linux" === n.toLowerCase() && (0 <= w.en.indexOf("android") ? n = "Android" : 0 <= w.en.indexOf("mac os") && (n = "iOS")), n },
                rn: function(t) {
                    try {
                        var n = document.cookie;
                        if ((n = n && n.split(";")) && 0 < n.length)
                            for (var e = n.length - 1; 0 <= e; e--) { var i = n[e].trim().split("="); if (i && 1 < i.length && i[0] === t) return i[1] }
                        return null
                    } catch (n) { return t === r.o && g("Cant get vid: " + n + " | url: " + window.location.href + " | userAgent: " + navigator.userAgent), null }
                },
                an: function(n, t) {
                    try {
                        var e = d[r.p] || _.cn(),
                            i = new Date(Date.now() + 63072e6).toUTCString();
                        return document.cookie = n + "=" + t + "; expires=" + i + "; path=/; domain=" + e, !0
                    } catch (n) { return !1 }
                },
                sn: function(n) { try { var t = d[r.p] || _.cn(); return document.cookie = n + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=" + t, !0 } catch (n) { return !1 } },
                dn: function() { return !!navigator.userAgent && /iPhone|iPad|Macintosh/.test(navigator.userAgent) && !/CriOS|FxiOS/.test(navigator.userAgent) && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) },
                un: function() { return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent) },
                _n: function() { return /Android.+wv.+Chrome.+Mobile/.test(navigator.userAgent) },
                pn: function() { return _.un() || _._n() },
                fn: function() { return /Puffin|SamsungBrowser|UCBrowser|QQBrowser|QIHU|Maxthon|OppoBrowser|MiuiBrowser|RealmeBrowser/.test(navigator.userAgent) },
                ln: function() { return /zalo/i.test(navigator.userAgent) },
                vn: function() { return /FBAN|FB_IAB|FBAV/.test(navigator.userAgent) },
                mn: function() { return /SamsungBrowser/.test(navigator.userAgent) || /Mobile.*OPR/.test(navigator.userAgent) },
                wn: function(n) { return n.split("").reverse().join("") },
                gn: function(t) {
                    var e;
                    try { e = new Event(t, { bubbles: !0, cancelable: !0 }) } catch (n) {
                        (e = document.createEvent("Event")).initEvent(t, !0, !0)
                    }
                    e && document.dispatchEvent(e)
                },
                hn: function(n) {
                    var t = { eventName: null, successCallback: function() {}, timeoutCallback: function() {}, errorCallback: function() {}, timeout: 1e8, target: document, listenTimes: 1 };
                    if (_.Fn(n, t), t.eventName && t.target) try {
                        var e = !1;

                        function i() { e || (clearTimeout(o), _.xn(t.successCallback), --t.listenTimes || t.target.removeEventListener(t.eventName, i)) }
                        var o = setTimeout(function() { e = !0, t.target.removeEventListener(t.eventName, i), _.xn(t.timeoutCallback) }, t.timeout);
                        t.target.addEventListener(t.eventName, i)
                    } catch (n) { _.xn(t.errorCallback) }
                },
                bn: function() { var n = navigator.userAgent; return !/iPhone|iPad/.test(n) && (/AppleWebKit.* \(KHTML, like Gecko\)( Version.[^ ]*)? Chrome\/\d+(\.\d+)*( Mobile)? Safari\/\d+(\.\d+)*$/.test(n) || /Edg\//.test(n) || /coc_coc_browser/.test(n) || /Vivaldi/.test(n) || /OPR/.test(n) && !/Mobile/.test(n)) },
                yn: function() { return !!window.postMessage },
                An: function() { return window !== window.top },
                Fn: function(n, t) { try { for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]) } catch (n) {} },
                zn: function(n) {
                    var t = Date.now(),
                        e = document.createElement("div");
                    e.style.top = "-10000px", e.style.width = "0px", e.style.height = "0px", e.style.position = "absolute";
                    var i = document.createElement("iframe");
                    return e.appendChild(i), i.onload = function() { l.Sn.push("ifr_append_" + location.origin + "_" + (Date.now() - t)) }, i.setAttribute("src", n), document.body.insertBefore(e, document.body.firstChild), e
                },
                kn: function(e, i) { window.addEventListener("message", function(n) { var t; try { t = JSON.parse(n.data) } catch (n) { t = {} } /za\.zalo\.me/.test(n.origin) && t.msgType === e && -1 === l.Sn.indexOf(e + "_success") && (l.Sn.push(e + "_success"), i(t.data), _.gn(s.L)) }, !1) },
                cn: function() { var n = window.location.hostname.split("."); return "." + n[n.length - 2] + "." + n[n.length - 1] },
                xn: function(n) { "function" == typeof n && n() },
                Mn: function(n) { return window[n] },
                Pn: function(n) { window[n] = !0 },
                Tn: function() { for (var n in e) e.hasOwnProperty(n) && (window[n] = !1) },
                In: function() { var n = m.Bn(r.o); return h.Rn(n) || /ZaloSDK/.test(navigator.userAgent) }
            },
            p = "not available",
            f = "error",
            l = {
                On: 108e5,
                Cn: 6,
                En: !1,
                Dn: p,
                Nn: p,
                Wn: -1,
                Vn: p,
                Ln: p,
                Sn: [],
                Un: !1,
                Gn: [],
                qn: null,
                Jn: function() {
                    var n = [];
                    try {
                        if (navigator.plugins)
                            for (var t = 0; t < navigator.plugins.length; t++) n.push(navigator.plugins[t].name + ";" + navigator.plugins[t].description + ";" + navigator.plugins[t].filename)
                    } catch (n) {}
                    return n.sort().toString()
                },
                Zn: function() { _.kn("cvs", this.$n) },
                $n: function(n) { l.Ln = n },
                jn: function() { var n = 1; return !/mobile/i.test(navigator.userAgent) && /firefox|edge|msie|trident/i.test(navigator.userAgent) && (n = window.devicePixelRatio), screen.orientation && screen.orientation.type && -1 < screen.orientation.type.indexOf("landscape") ? window.screen.width * n + "x" + window.screen.height * n + "x" + window.screen.colorDepth : window.screen.height * n + "x" + window.screen.width * n + "x" + window.screen.colorDepth },
                Hn: function() { var n = 1; return !/mobile/i.test(navigator.userAgent) && /firefox|edge|msie|trident/i.test(navigator.userAgent) && (n = window.devicePixelRatio), screen.orientation && screen.orientation.type && -1 < screen.orientation.type.indexOf("landscape") ? window.screen.availWidth * n + "x" + window.screen.availHeight * n : window.screen.availHeight * n + "x" + window.screen.availWidth * n },
                Kn: function() {
                    var n, t, e, i = "Not supported",
                        o = "Not supported",
                        r = "Not supported";
                    try {
                        function a(n) { return s.clearColor(0, 0, 0, 1), s.enable(s.DEPTH_TEST), s.depthFunc(s.LEQUAL), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT), "[" + n[0] + ", " + n[1] + "]" }
                        var c = document.createElement("canvas"),
                            s = c.getContext("webgl") || c.getContext("experimental-webgl"),
                            d = [],
                            u = s.createBuffer();
                        s.bindBuffer(s.ARRAY_BUFFER, u);
                        var _ = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                        s.bufferData(s.ARRAY_BUFFER, _, s.STATIC_DRAW), u.itemSize = 3, u.numItems = 3;
                        var p = s.createProgram(),
                            f = s.createShader(s.VERTEX_SHADER);
                        s.shaderSource(f, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), s.compileShader(f);
                        var l = s.createShader(s.FRAGMENT_SHADER);
                        s.shaderSource(l, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), s.compileShader(l), s.attachShader(p, f), s.attachShader(p, l), s.linkProgram(p), s.useProgram(p), p.vertexPosAttrib = s.getAttribLocation(p, "attrVertex"), p.offsetUniform = s.getUniformLocation(p, "uniformOffset"), s.enableVertexAttribArray(p.vertexPosArray), s.vertexAttribPointer(p.vertexPosAttrib, u.itemSize, s.FLOAT, !1, 0, 0), s.uniform2f(p.offsetUniform, 1, 1), s.drawArrays(s.TRIANGLE_STRIP, 0, u.numItems), null != s.canvas && d.push(s.canvas.toDataURL()), d.push("exts:" + s.getSupportedExtensions().join(";")), d.push("al_li_wid_rng:" + a(s.getParameter(s.ALIASED_LINE_WIDTH_RANGE))), d.push("al_pnt_sz_rng:" + a(s.getParameter(s.ALIASED_POINT_SIZE_RANGE))), d.push("alp_bits:" + s.getParameter(s.ALPHA_BITS)), d.push("atal:" + (s.getContextAttributes().antialias ? "yes" : "no")), d.push("bl_bits:" + s.getParameter(s.BLUE_BITS)), d.push("dep_bits:" + s.getParameter(s.DEPTH_BITS)), d.push("grn_bits:" + s.getParameter(s.GREEN_BITS)), d.push("mx_antp:" + ((e = (n = s).getExtension("EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic")) ? (0 === (t = n.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT)) && (t = 2), t) : null)), d.push("mx_comb_txt_img_units:" + s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), d.push("mx_cube_map_txt_sz:" + s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE)), d.push("mx_fr_unf_vts:" + s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS)), d.push("mx_rdr_bf_sz:" + s.getParameter(s.MAX_RENDERBUFFER_SIZE)), d.push("mx_txt_img_units:" + s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS)), d.push("mx_tex_sz:" + s.getParameter(s.MAX_TEXTURE_SIZE)), d.push("mx_var_vts:" + s.getParameter(s.MAX_VARYING_VECTORS)), d.push("mx_vtx_atts:" + s.getParameter(s.MAX_VERTEX_ATTRIBS)), d.push("mx_vtx_tex_img_units:" + s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), d.push("mx_vtx_uf_vts:" + s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS)), d.push("mx_vp_dims:" + a(s.getParameter(s.MAX_VIEWPORT_DIMS))), d.push("rd_bits:" + s.getParameter(s.RED_BITS)), d.push("rdrr:" + s.getParameter(s.RENDERER)), d.push("shd_la_v:" + s.getParameter(s.SHADING_LANGUAGE_VERSION)), d.push("stcl_bits:" + s.getParameter(s.STENCIL_BITS)), d.push("vdr:" + s.getParameter(s.VENDOR)), d.push("v:" + s.getParameter(s.VERSION)), d.push("vtx_shd_hi_fl_prcs:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision), d.push("vtx_shd_hi_fl_prcs_rngMn:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).rangeMin), d.push("vtx_shd_hi_fl_prcs_rngMx:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).rangeMax), d.push("vtx_shd_me_fl_prcs:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision), d.push("vtx_shd_me_fl_prcs_rngMn:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).rangeMin), d.push("vtx_shd_me_fl_prcs_rngMx:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).rangeMax), d.push("vtx_shd_low fl_prcs:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.LOW_FLOAT).precision), d.push("vtx_shd_low fl_prcs_rngMn:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.LOW_FLOAT).rangeMin), d.push("vtx_shd_low fl_prcs_rngMx:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.LOW_FLOAT).rangeMax), d.push("fr_shd_hi_fl_prcs:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision), d.push("fr_shd_hi_fl_prcs_rngMn:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).rangeMin), d.push("fr_shd_hi_fl_prcs_rngMx:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).rangeMax), d.push("fr_shd_me_fl_prcs:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision), d.push("fr_shd_me_fl_prcs_rngMn:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).rangeMin), d.push("fr_shd_me_fl_prcs_rngMx:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).rangeMax), d.push("fr_shd_low fl_prcs:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.LOW_FLOAT).precision), d.push("fr_shd_low fl_prcs_rngMn:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.LOW_FLOAT).rangeMin), d.push("fr_shd_low fl_prcs_rngMx:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.LOW_FLOAT).rangeMax), d.push("vtx_shd_hi_int prcs:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_INT).precision), d.push("vtx_shd_hi_int prcs_rngMn:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_INT).rangeMin), d.push("vtx_shd_hi_int prcs_rngMx:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_INT).rangeMax), d.push("vtx_shd_me_int prcs:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_INT).precision), d.push("vtx_shd_me_int prcs_rngMn:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_INT).rangeMin), d.push("vtx_shd_me_int prcs_rngMx:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_INT).rangeMax), d.push("vtx_shd_low int prcs:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.LOW_INT).precision), d.push("vtx_shd_low int prcs_rngMn:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.LOW_INT).rangeMin), d.push("vtx_shd_low int prcs_rngMx:" + s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.LOW_INT).rangeMax), d.push("fr_shd_hi_int prcs:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_INT).precision), d.push("fr_shd_hi_int prcs_rngMn:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_INT).rangeMin), d.push("fr_shd_hi_int prcs_rngMx:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_INT).rangeMax), d.push("fr_shd_me_int prcs:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_INT).precision), d.push("fr_shd_me_int prcs_rngMn:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_INT).rangeMin), d.push("fr_shd_me_int prcs_rngMx:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_INT).rangeMax), d.push("fr_shd_low int prcs:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.LOW_INT).precision), d.push("fr_shd_low int prcs_rngMn:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.LOW_INT).rangeMin), d.push("fr_shd_low int prcs_rngMx:" + s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.LOW_INT).rangeMax), i = d.join("§");
                        var v = (c = document.createElement("canvas")).getContext("webgl") || c.getContext("experimental-webgl");
                        r = 0 <= v.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") ? (o = v.getParameter(v.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL), v.getParameter(v.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL)) : o = "Not supported"
                    } catch (n) { r = o = i = "Not supported" }
                    return { Xn: o, Qn: r, Yn: i }
                },
                nt: function() { var n = p; try { n = (new window.Intl.DateTimeFormat).resolvedOptions().timeZone } catch (n) {} return n },
                tt: function() { try { return !!window.localStorage } catch (n) { return f } },
                et: function() { try { return !!window.indexedDB } catch (n) { return f } },
                it: function() { try { return !!window.openDatabase } catch (n) { return f } },
                ot: function() { try { return !!window.sessionStorage } catch (n) { return f } },
                rt: function() {
                    var n, t, e, i, o, r;
                    n = 100, t = 10, e = function(n, t) {
                        var e = window.document,
                            i = e.createElement("div");
                        return i.innerHTML = "&nbsp;", i.setAttribute("class", n), i.setAttribute("style", t), e.body.appendChild(i), i
                    }("pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links", "height: 10px !important; font-size: 20px; color: transparent; position: absolute; bottom: 0; left: -10000px;"), i = 0, o = !1, r = setInterval(function() { i++, !(o = function(n) { return 0 === n.offsetHeight || !document.body.contains(n) || "none" === n.style.display || "hidden" === n.style.visibility }(e)) && i !== t || (clearInterval(r), e.parentNode && e.parentNode.removeChild(e), l.En = o, l.Sn.push("adb_success"), _.gn(s.L)) }, n)
                },
                at: function() {
                    var t, n = 0;
                    void 0 !== navigator.maxTouchPoints ? n = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (n = navigator.msMaxTouchPoints);
                    try { document.createEvent("TouchEvent"), t = !0 } catch (n) { t = !1 }
                    return [n, t, "ontouchstart" in window]
                },
                ct: function() {
                    try {
                        if (/OS 11.+Version\/11.+Safari/.test(navigator.userAgent)) return l.Dn = "excluded", l.Sn.push("audio_exclude"), void _.gn(s.L);
                        var n = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                        if (null == n) return l.Dn = p, l.Sn.push("audio_null"), void _.gn(s.L);
                        var t = new n(1, 44100, 44100),
                            e = t.createOscillator();
                        e.type = "triangle", e.frequency.setValueAtTime(1e4, t.currentTime);
                        for (var i = t.createDynamicsCompressor(), o = [
                                ["threshold", -50],
                                ["knee", 40],
                                ["ratio", 12],
                                ["reduction", -20],
                                ["attack", 0],
                                ["release", .25]
                            ], r = 0; r < o.length; r++) void 0 !== i[o[r][0]] && "function" == typeof i[o[r][0]].setValueAtTime && i[o[r][0]].setValueAtTime(o[r][1], t.currentTime);
                        e.connect(i), i.connect(t.destination), e.start(0), t.startRendering(), t.oncomplete = function(n) {
                            var t = p;
                            try { t = n.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce(function(n, t) { return n + Math.abs(t) }, 0).toString(), e.disconnect(), i.disconnect() } catch (n) {}
                            l.Dn = t, l.Sn.push("audio_success"), _.gn(s.L)
                        }
                    } catch (n) { l.Dn = p, l.Sn.push("audio_exception"), _.gn(s.L) }
                },
                st: function() {
                    if (!_.bn() || !_.yn()) return l.Sn.push("mds_notavailable"), l.Nn = p, void _.gn(s.L);
                    _.kn("mds", this.dt)
                },
                dt: function(n) { l.Nn = n },
                ut: function() { _.kn("jsf", this._t) },
                _t: function(n) { l.Vn = n },
                pt: function() {
                    var n = 10,
                        t = setInterval(function() { n--, l.Wn = navigator.deviceMemory, 0 === l.Wn && 0 !== n || (clearInterval(t), l.Wn = void 0 !== l.Wn ? l.Wn : p, l.Sn.push("mem_success"), _.gn(s.L)) }, 100)
                },
                ft: function() { l.st(), l.ut(), l.Zn(), l.qn = _.zn(t.t + i.A + location.origin), l.rt(), l.ct(), l.pt() },
                lt: function() {
                    var n = _.rn("_fbp"),
                        t = _.rn("_ga"),
                        e = { audio: l.Dn, zadbl: l.En, mds: l.Nn, zmem: l.Wn, zfont: l.Vn, zcvs: l.Ln };
                    return n && (e.fbid = n), t && (e.ggid = t), e
                },
                vt: function() { return m.Bn("fpsend") == Math.floor(Date.now() / l.On) },
                wt: function() { var n = l.Kn(); return { zcr: w.gt, zacr: w.ht, zl: window.location.href, zplg: w.Ft, __zi: h.xt(), zglvdr: n.Xn, zglrdr: n.Qn, zgldt: n.Yn, zla: w.bt, zconcurrency: w.yt, ztzos: w.At, ztz: w.zt, zsssto: l.ot(), zlcsto: l.tt(), zodbsto: l.it(), zidbsto: l.et(), ztouchsp: l.at(), zvs: h.St(), v: _za_version } },
                kt: function() { _.ln() || v.Mt() || (document.body && h.St() ? l.Pt() : setTimeout(function() { l.kt() }, 200)) },
                Pt: function() {
                    if (/https/.test(location.protocol) && !_.Mn(e.N) && (!0 === d.sfp || !l.vt())) {
                        _.Pn(e.N);
                        try {
                            var n = l.wt();
                            d[r.u] && (n[r.u] = d[r.u]), document.addEventListener(s.L, function() {
                                l.Cn--, l.Cn < 0 && g("Too many events fired! Events: " + l.Sn), 0 == l.Cn && (_.Fn(l.lt(), n), _.Z({
                                    url: t.t + i.F,
                                    params: n,
                                    success: function(n) {
                                        var t;
                                        try { n = n || "{}", t = JSON.parse(n) } catch (n) { t = {}, g("parse failed: " + n.message) }
                                        var e = Math.floor(Date.now() / l.On);
                                        m.Tt("fpsend", e), t[r.o] && m.Tt(r.o, t[r.o]), m.It(r.u), m.It(r._)
                                    }
                                }), l.qn.remove())
                            }), l.ft()
                        } catch (n) { g("FP failed! msg:" + n.message + " stack: " + (n.stackTrace || n.stack)) }
                    }
                },
                Bt: function() {
                    function t() {
                        _.An() ? function(n) {
                            var e = !1,
                                i = setTimeout(function() { e = !0, window.removeEventListener("message", o, !1), n() }, 3e3);

                            function o(n) { var t = {}; try { t = JSON.parse(n.data) } catch (n) {}! function(n) { return n.msgType === c.O }(t) || e || (clearTimeout(i), window.removeEventListener("message", o, !1)) }
                            window.addEventListener("message", o, !1), window.top.postMessage(function() { var n = { msgType: c.B, from: location.origin }; return JSON.stringify(n) }(), "*")
                        }(l.kt) : l.kt()
                    }
                    document.addEventListener(s.V, function() { setTimeout(function() { "complete" === document.readyState ? (t(), v.Rt()) : document.addEventListener("readystatechange", function(n) { "complete" === n.target.readyState && (t(), v.Rt()) }) }, 0), v.Ot() })
                },
                Ct: function() {
                    var n = [{ dm: "https://squareup.com", rd: "/login?return_to=%2Ffavicon.ico", i: 0 }, { dm: "https://twitter.com", rd: "/login?redirect_after_login=%2Ffavicon.ico", i: 1 }, { dm: "https://www.facebook.com", rd: "/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp", i: 2 }, { dm: "https://accounts.google.com", rd: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail", i: 3 }, { dm: "https://accounts.google.com", rd: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube", i: 4 }, { dm: "https://plus.google.com", rd: "/up/accounts/upgrade/?continue=https://plus.google.com/favicon.ico", n: "Google Plus", i: 5 }, { dm: "https://login.skype.com", rd: "/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico", i: 6 }, { dm: "https://www.spotify.com", rd: "/en/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico", i: 7 }, { dm: "https://www.reddit.com", rd: "/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico", i: 8 }, { dm: "https://www.tumblr.com", rd: "/login?redirect_to=%2Ffavicon.ico", i: 9 }, { dm: "https://www.expedia.de", rd: "/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico", i: 10 }, { dm: "https://www.dropbox.com", rd: "/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Fabout%2Fdropbox_logo_glyph_2015.svg", i: 11 }, { dm: "https://www.amazon.com", rd: "/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico", n: "Amazon.com", i: 12 }, { dm: "https://www.amazon.fr", rd: "/ap/signin?_encoding=UTF8&openid.assoc_handle=frflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.fr%2Ffavicon.ico", n: "Amazon.fr", i: 13 }, { dm: "https://www.amazon.de", rd: "/ap/signin?_encoding=UTF8&openid.assoc_handle=deflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.de%2Ffavicon.ico", n: "Amazon.de", i: 14 }, { dm: "https://www.amazon.it", rd: "/ap/signin?_encoding=UTF8&openid.assoc_handle=itflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.it%2Ffavicon.ico", n: "Amazon.it", i: 15 }, { dm: "https://www.amazon.co.uk", rd: "/ap/signin?_encoding=UTF8&openid.assoc_handle=gbflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.co.uk%2Ffavicon.ico", n: "Amazon.co.uk", i: 16 }, { dm: "https://www.pinterest.com", rd: "/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico", i: 17 }, { dm: "https://de.foursquare.com", rd: "/login?continue=%2Ffavicon.ico", i: 18 }, { dm: "https://eu.battle.net", rd: "/login/de/index?ref=https://eu.battle.net/favicon.ico", n: "Battle.net", i: 19 }, { dm: "https://store.steampowered.com", rd: "/login/?redir=favicon.ico", i: 20 }, { dm: "https://www.academia.edu", rd: "/login?cp=/favicon.ico&cs=www", n: "Academia.edu", i: 21 }, { dm: "https://accounts.google.com", rd: "/ServiceLogin?service=blogger&hl=de&passive=1209600&continue=https://www.blogger.com/favicon.ico", i: 22 }, { dm: "https://github.com", rd: "/login?return_to=https%3A%2F%2Fgithub.com%2Ffavicon.ico%3Fid%3D1", i: 23 }, { dm: "https://medium.com", rd: "/m/signin?redirect=https%3A%2F%2Fmedium.com%2Ffavicon.ico&loginType=default", i: 24 }, { dm: "https://news.ycombinator.com", rd: "/login?goto=favicon.ico%23", i: 25 }, { dm: "https://carbonmade.com", rd: "/signin?returnTo=favicon.ico", i: 26 }, { dm: "https://courses.edx.org", rd: "/login?next=/favicon.ico", i: 27 }, { dm: "https://slack.com", rd: "/checkcookie?redir=https%3A%2F%2Fslack.com%2Ffavicon.ico%23", i: 28 }, { dm: "https://www.khanacademy.org", rd: "/login?continue=https%3A//www.khanacademy.org/favicon.ico", n: "Khan Academy", i: 29 }, { dm: "https://www.paypal.com", rd: "/signin?returnUri=https://t.paypal.com/ts?v=1.0.0", i: 30 }, { dm: "https://500px.com", rd: "/login?r=%2Ffavicon.ico", i: 31 }, { dm: "https://www.airbnb.com", rd: "/login?redirect_params[action]=favicon.ico&redirect_params[controller]=home", i: 32 }, { dm: "https://secure.meetup.com", rd: "/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2Fimg%2Fajax_loader_trans.gif", i: 33 }, { dm: "https://bitbucket.org", rd: "/account/signin/?next=/favicon.ico", i: 34 }, { dm: "https://secure.indeed.com", rd: "/account/login?continue=%2ffavicon.ico", i: 35 }, { dm: "https://vk.com", rd: "/login?u=2&to=ZmF2aWNvbi5pY28-", i: 36 }, { dm: "https://cas.inria.fr", rd: "/cas/login?service=https%3A%2F%2Fwww.inria.fr%2Fextension%2Fsite_inria%2Fdesign%2Fsite_inria%2Fimages%2Flogos%2Flogo_INRIA.png", i: 37 }, { dm: "https://www.livejournal.com", rd: "/login.bml?returnto=%2Ffavicon.ico%3fv%3d2", i: 38 }, { dm: "https://www.evernote.com", rd: "/Login.action?targetUrl=%2ffavicon.ico", i: 39 }, { dm: "https://www.spiegel.de", rd: "/meinspiegel/login.html?backUrl=%2fstatic%2fsys%2fv12%2flogo%2ffavicon%2ftouch-icon-iphone.png", n: "Spiegel.de", i: 40 }, { dm: "https://www.instagram.com", rd: "/accounts/login/?next=%2fstatic%2fsprites%2fcore%2fe05e5e.png", i: 41 }, { dm: "https://secure.viadeo.com", rd: "/en/signin?backUrl=http%3A%2F%2Fhelp.viadeo.com%2Fresource%2F1467753561000%2Fviadeo%2Fstatic%2Fimg%2Fcross.png", i: 42 }],
                        e = n.length,
                        i = 0;
                    n.forEach(function(n) {
                        var t = document.createElement("img");
                        t.src = n.dm + n.rd, t.onload = function() { i++, l.Gn.push(n.i), i === e && _.gn(s.L) }, t.onerror = function() {++i === e && _.gn(s.L) }
                    })
                }
            },
            v = {
                Et: void 0,
                Dt: [],
                Nt: [],
                Cn: 11,
                Sn: [],
                Wt: "z_cbd",
                Vt: void 0,
                Lt: function(n, t) { v.Dt.push(n), t && v.Nt.push(t) },
                Ut: function() { _.Y({ params: { fts: v.Dt, ver: _za_version, ua: navigator.userAgent, __zi: h.xt(), ext: v.Nt }, url: t.t + i.k }) },
                Mt: function() { if (void 0 !== v.Et) return v.Et; var n = !1; return 0 < v.Gt() && (n = !0), n = n || /bot|spider|google|yahoo|http|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|headless/i.test(navigator.userAgent), v.Et = n },
                qt: function() {
                    var n = navigator.userAgent.toLowerCase(),
                        t = "unkown";
                    return -1 < n.indexOf("googlebot") ? t = "Googlebot" : -1 < n.indexOf("yandex") ? t = "YandexBot" : -1 < n.indexOf("googleweblight") ? t = "googleweblight" : -1 < n.indexOf("google-speakr") ? t = "GoogleSpeakr" : -1 < n.indexOf("google web preview") ? t = "GoogleWebPreview" : -1 < n.indexOf("mappy") ? t = "Mappy" : -1 < n.indexOf("adsbot-google") ? t = "AdsBotGoogle" : -1 < n.indexOf("jp.co.yahoo") ? t = "YahooBot" : -1 < n.indexOf("baidu") ? t = "Baidu" : -1 < n.indexOf("mediapartners-google") ? t = "MediapartnersGoogle" : -1 < n.indexOf("facebook") ? t = "Facebook" : -1 < n.indexOf("applebot") ? t = "Applebot" : -1 < n.indexOf("google") && (t = "Google"), t
                },
                Jt: function(e) {
                    _.Z({
                        url: t.t + i.S,
                        success: function(n) {
                            var t;
                            try { n = n || "{}", t = JSON.parse(n) } catch (n) { t = {}, g("parse failed: " + n.message) }
                            h.Zt(t[r.o], a.T), m.It(r._), _.xn(e)
                        }
                    })
                },
                Gt: function() {
                    if (void 0 !== v.Vt) return v.Vt;
                    var n = 0;
                    try {
                        ("_phantom" in window || "callPhantom" in window) && (n = 1, v.Lt(1)), "__phantomas" in window && (n = 2, v.Lt(2)), "Buffer" in window && (n = 3, v.Lt(3)), "emit" in window && (n = 4, v.Lt(4)), "spawn" in window && (n = 5, v.Lt(5)), ("webdriver" in window && 1 == window.webdriver || "webdriver" in window.navigator && 1 == window.navigator.webdriver) && (n = 6, v.Lt(6)), "domAutomation" in window && (n = 7, v.Lt(7));
                        try { window.document.documentElement.getAttribute("webdriver") && (n = 8, v.Lt(8)) } catch (n) {}
                        "_Selenium_IDE_Recorder" in window && (n = 9, v.Lt(9)), "__webdriver_script_fn" in document && (n = 10, v.Lt(10));
                        try {
                            var t, e = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                                i = "_phantom __nightmare _selenium callPhantom callSelenium _Selenium_IDE_Recorder __stopAllTimers".split(" ");
                            for (t in i)
                                if (window[i[t]]) { n = 11, v.Lt(11); break }
                            for (var o in e)
                                if (window.document[e[o]]) { n = 12, v.Lt(12); break }
                            for (var r in window.document)
                                if (r.match(/\$[a-z]dc_/) && window.document[r].$t) { n = 13, v.Lt(13); break }
                        } catch (n) {}
                        window.external && window.external.toString() && -1 != window.external.toString().indexOf("Sequentum") ? (n = 14, v.Lt(14)) : window.document.documentElement.getAttribute("selenium") ? (n = 15, v.Lt(15)) : window.document.documentElement.getAttribute("driver") ? (n = 16, v.Lt(16)) : null !== document.documentElement.getAttribute("selenium") ? (n = 17, v.Lt(17)) : null !== document.documentElement.getAttribute("webdriver") ? (n = 18, v.Lt(18)) : null !== document.documentElement.getAttribute("driver") && (n = 19, v.Lt(19))
                    } catch (n) {}
                    return v.Vt = n, v.Sn.push("injected" + n), _.gn(v.Wt), n
                },
                jt: function(t) {
                    try { navigator.permissions.query({ name: "notifications" }).then(function(n) { "denied" === Notification.permission && "prompt" === n.state && (v.Lt(20), _.xn(t)) }) } catch (n) {}
                    v.Sn.push("incons"), _.gn(v.Wt)
                },
                Ht: function() { try { var n = window.navigator.permissions; if (!n) return v.Sn.push("perOverr"), _.gn(v.Wt), 0; "query" !== n.query.name && v.Lt(21), /functionquery\(\)\{\[nativecode\]\}/.test(n.query.toString().replace(/\s/g, "")) || v.Lt(22), "toString" !== Function.prototype.toString.name && v.Lt(23, Function.prototype.toString.name), /functiontoString\(\)\{\[nativecode\]\}/.test(n.query.toString.toString().replace(/\s/g, "")) || v.Lt(24), n.query.toString.hasOwnProperty("[[Handler]]") && n.query.toString.hasOwnProperty("[[Target]]") && n.query.toString.hasOwnProperty("[[IsRevoked]]") && v.Lt(25), n.hasOwnProperty("query") && v.Lt(26), "prototype" in Function.prototype.toString && v.Lt(27) } catch (n) {} return v.Sn.push("perOverr"), _.gn(v.Wt), 0 },
                Kt: function() { if (!_.dn()) return v.Sn.push("safari"), _.gn(v.Wt), 0; try { /functionhasOwnProperty\(\)\{\[nativecode\]\}/.test(navigator.hasOwnProperty.toString().replace(/\s/g, "")) || v.Lt(28), /functiontoString\(\)\{\[nativecode\]\}/.test(navigator.hasOwnProperty.toString.toString().replace(/\s/g, "")) || v.Lt(29), -1 === navigator.vendor.indexOf("Apple") && v.Lt(30), 47 !== navigator.hasOwnProperty.toString().length && v.Lt(31), navigator.hasOwnProperty("vendor") && v.Lt(32) } catch (n) {} return v.Sn.push("safari"), _.gn(v.Wt), 0 },
                Xt: function() { return _._n() || _.ln() || _.vn() || _.fn() || /bot|spider|google|yahoo|http|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|headless/i.test(navigator.userAgent) || !/Chrome/.test(window.navigator.userAgent) || window.chrome ? (v.Sn.push("chrome"), _.gn(v.Wt), 0) : (v.Lt(33), v.Sn.push("chrome"), _.gn(v.Wt), 33) },
                Qt: function() { return navigator.language && 0 !== navigator.languages.length ? (v.Sn.push("lang"), _.gn(v.Wt), 0) : (v.Lt(34), v.Sn.push("lang"), _.gn(v.Wt), 34) },
                Yt: function() { var n = PluginArray.prototype === navigator.plugins.__proto__; return 0 < navigator.plugins.length && (n &= Plugin.prototype === navigator.plugins[0].__proto__), n ? (v.Sn.push("plug"), _.gn(v.Wt), 0) : (v.Lt(35), v.Sn.push("plug"), _.gn(v.Wt), 35) },
                ne: function() { var n = MimeTypeArray.prototype === navigator.mimeTypes.__proto__; return 0 < navigator.mimeTypes.length && (n &= MimeType.prototype === navigator.mimeTypes[0].__proto__), n ? (v.Sn.push("mime"), _.gn(v.Wt), 0) : (v.Lt(36), v.Sn.push("mime"), _.gn(v.Wt), 36) },
                te: function() { if (_._n() || _.ln() || _.vn() || _.mn()) return v.Sn.push("connRtt"), _.gn(v.Wt), 0; var n = navigator.connection; return 0 === (n ? n.rtt : void 0) ? (v.Lt(37), v.Sn.push("connRtt"), _.gn(v.Wt), 37) : (v.Sn.push("connRtt"), _.gn(v.Wt), 0) },
                ee: function() { return 0 === window.outerHeight && 0 === window.outerWidth ? (v.Lt(38), v.Sn.push("outer"), _.gn(v.Wt), 38) : (v.Sn.push("outer"), _.gn(v.Wt), 0) },
                Ot: function() { if (!_.Mn(e.W) && (_.Pn(e.W), document.addEventListener(v.Wt, function() { v.Cn--, v.Cn < 0 && g("Too many events fired! Events: " + v.Sn), 0 === v.Cn && 0 < v.Dt.length && v.Ut() }), v.Xt(), v.Kt(), v.te(), v.Qt(), v.ee(), v.Ht(), v.ne(), v.Yt(), v.jt(), -1 < navigator.userAgent.indexOf("Mobile") && -1 === navigator.userAgent.indexOf("Firefox"))) try { var n = document.createElement("video"); if (!n.canPlayType) return void g("create video failed! ua: " + navigator.userAgent); "" == n.canPlayType("application/vnd.apple.mpegURL") && "" == n.canPlayType("audio/mpegurl") && g("not support HLS: " + navigator.userAgent) } catch (n) {} },
                ie: function(n) { _.xn(n) },
                Rt: function() {
                    try {
                        var n = document.createElement("div");
                        n.style.top = "-10000px", n.style.width = "0px", n.style.height = "0px", n.style.position = "absolute";
                        var t = document.createElement("iframe");
                        n.appendChild(t), t.srcdoc = "page intentionally left blank", document.body.appendChild(n);
                        var e = Object.getOwnPropertyDescriptors(HTMLIFrameElement.prototype),
                            i = e.contentWindow.get.toString().replace(/\s/g, "");
                        "functiongetcontentWindow(){[nativecode]}" !== i && "functioncontentWindow(){[nativecode]}" !== i && v.Lt(39, e.contentWindow.get.toString().replace(/\s/g, "")), t.contentWindow === window && v.Lt(40), !0 !== t.contentWindow.navigator.webdriver && !0 !== t.contentWindow.webdriver || v.Lt(41), n.remove()
                    } catch (n) {}
                    return v.Sn.push("iframe"), _.gn(v.Wt), 0
                }
            },
            m = {
                Tt: function(t, n) { var e = !1; try { e = -1 < location.hostname.indexOf("zalo.me") && _.rn(t) === n || _.an(t, n), localStorage.setItem(t, n) } catch (n) { e || g("Set key " + t + " failed! Msg: " + n.message) } },
                Bn: function(n) { try { return _.rn(n) || localStorage.getItem(n) } catch (n) { return null } },
                It: function(t) {
                    try {
                        var e = _.sn(t);
                        localStorage.removeItem(t)
                    } catch (n) { e || g("Remove key " + t + " failed! Msg: " + n.message) }
                }
            },
            w = {
                oe: document.referrer || "",
                re: document.characterSet || document.charset || "",
                on: navigator.platform || "",
                ae: document.location.host || "",
                en: navigator.userAgent.toLowerCase(),
                ce: "function" == typeof navigator.javaEnabled && !0 === navigator.javaEnabled(),
                dn: -1 < navigator.userAgent.toLowerCase().indexOf("safari") && -1 === navigator.userAgent.toLowerCase().indexOf("chrome"),
                gt: l.jn(),
                ht: l.Hn(),
                Ft: l.Jn(),
                bt: [
                    [navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || p], navigator.languages
                ],
                Wn: navigator.deviceMemory || p,
                At: (new Date).getTimezoneOffset(),
                zt: l.nt(),
                yt: navigator.hardwareConcurrency || p
            };

        function g(n) { _.Y({ params: { msg: n, ver: _za_version }, url: t.t + i.h }) }
        var h = {
                se: "",
                s: "",
                de: /^2000\.((\w+\.\d+\.\w+$)|([^\.]+\.\d$))/,
                bot_pattern: /^4000\.\w+\.\d+\.\w+$/,
                ue: /^3000\.((\d+)|([^\.]+\.\d$))/,
                _e: /^2001\.((\w+\.\d+\.\w+$)|([^\.]+\.\d$))/,
                pe: /^2002\.((\w+\.\d+\.\w+$)|([^\.]+\.\d$))/,
                fe: function(n) { return h.de.test(n) || h.ue.test(n) || h.bot_pattern.test(n) },
                Rn: function(n) { return h._e.test(n) || h.pe.test(n) },
                le: function() {
                    var n = m.Bn(r.o);
                    if (h.fe(n)) this.Zt(n, a.P);
                    else if (v.Mt()) {
                        var t = v.qt().toLowerCase(),
                            e = "4000." + _.wn(t) + "." + Date.now() + "." + _.nn(t);
                        this.Zt(e, a.T)
                    }
                },
                ve: function(n) {!1 !== this.fe(n) ? (this.se = n, m.Tt(r.o, n), A || (A = !0, ZA && ZA.version ? _.gn(s.G) : setTimeout(function() { _.gn(s.G) }, 0))) : g("Set visitor id while it is invalid: " + n) },
                Zt: function(n, t) { this.me(t), this.ve(n) },
                xt: function() { return this.se },
                we: function(n) { return "function" == typeof n && (this.fe(this.se) ? n(this.se) : document.addEventListener(s.G, function() { n(h.xt()) })), this.se },
                me: function(n) { n && (this.s = n) },
                St: function() { return this.s }
            },
            F = function() {
                var n = { zl: window.location.href, zrf: w.oe, zch: w.re, zts: (new Date).getTime(), zos: _.in(), zla: w.bt, __zi: m.Bn(r.o), v: _za_version, incog: void 0 },
                    t = m.Bn(r._);
                t && (n[r._] = t);
                var e = m.Bn(r.u);
                return e && (n[r.u] = e), n
            }();

        function n() {
            if (!_.Mn(e.D)) {
                _.Pn(e.D), F.zact = "pv", F._zapp = _.rn(location.host + "_zapp"), F._zidnbaid = _.rn(location.host + "_zidnbaid");

                function n() {
                    _.Z({
                        url: t.t + i.g,
                        params: F,
                        success: function(n) {
                            (d = JSON.parse(n))[r._] && m.Tt(r._, d[r._]), m.It(r.l), d[r.u] && m.Tt(r.u, d[r.u]), _.K("gidzl"), h.Zt(d[r.o], d[r.s]), _.gn(s.V),
                                function() {
                                    if (!0 !== d[r.m]) return;
                                    _.Z({ url: u + location.host + i.M, params: { url: location.href, ref: document.referrer, __zi: h.xt() } })
                                }(),
                                function(o) {
                                    if (!0 !== o.enabled) return;
                                    try {
                                        (new Image).src = o.fbUrl + "&vid=" + h.xt() + "&pf=" + o.pf + "&qua=0", (new Image).src = o.fbUrl + "&vid=" + h.xt() + "&pf=" + o.pf + "&qua=1", (new Image).src = o.fbUrl + "&vid=" + h.xt() + "&pf=" + o.pf + "&qua=2";
                                        var t = !1;
                                        ! function n() {
                                            t || ("undefined" != typeof ga ? (t = !0, _.j({
                                                url: "https://px.za.zaloapp.com/cd",
                                                params: { id: o.id, pf: o.pf, pc: o.pc, cp: o.cp, vid: h.xt() },
                                                success: function(n) {
                                                    var t = JSON.parse(n);
                                                    if (0 === t.errorCode)
                                                        if (ga("create", o.ggUA, "auto", "dmp"), ga("dmp.set", "userId", h.xt()), Array.isArray(t.data))
                                                            for (var e = 0; e < t.data.length; e++) ga("dmp.send", "pageview", i(t.data[e].cds));
                                                        else ga("dmp.send", "pageview", i(t.data.cds));

                                                    function i(n) { for (var t = {}, e = 1; e <= n.length; e++) t["dimension" + e] = n[e - 1]; return t }
                                                }
                                            })) : setTimeout(function() { n() }, 500))
                                        }()
                                    } catch (n) { g("integrate failed! " + n.message) }
                                }(d)
                        },
                        fail: function(n) { A || (A = !0, _.gn(s.G)) }
                    })
                }
                void 0 !== F.incog ? n() : _.hn({ eventName: s.U, successCallback: n, timeout: 2e3, timeoutCallback: n })
            }
        }

        function x() { window.addEventListener("message", function(n) { var t = {}; try { t = JSON.parse(n.data) } catch (n) {}! function(n) { return n.msgType === c.R }(t) || n.source.postMessage(function() { var n = { msgType: c.C, from: location.origin, data: h.xt() }; return JSON.stringify(n) }(), n.origin) }, !1) }

        function b() { window.addEventListener("message", function(n) { var t = {}; try { t = JSON.parse(n.data) } catch (n) {}! function(n) { return n.msgType === c.B }(t) || n.source.postMessage(function() { var n = { msgType: c.O, from: location.origin }; return JSON.stringify(n) }(), n.origin) }, !1) }

        function y(e) {
            var n, i = !1,
                o = setTimeout(function() { i = !0, window.removeEventListener("message", r, !1), e() }, 1e3);

            function r(n) { var t = {}; try { t = JSON.parse(n.data) } catch (n) {}! function(n) { return n.msgType === c.C }(t) || i || (clearTimeout(o), window.removeEventListener("message", r, !1), h.Zt(t.data, a.P), e(t)) }
            window.addEventListener("message", r, !1), window.top.postMessage((n = { msgType: c.R, from: location.origin }, JSON.stringify(n)), "*")
        }
        var A = !1;
        return function() {
            if (!_.In()) {
                if (_.Tn(), function() {
                        function a(n) { void 0 === F.incog && (F.incog = n, _.gn(s.U)) }
                        var n;
                        try {
                            window.webkitRequestFileSystem ? 76 <= function() { var n = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./); if (!n) throw new Error("Not Chromium!"); return parseInt(n[2], 10) }() && navigator.storage && navigator.storage.estimate ? navigator.storage.estimate().then(function(n) { a(!!(n && n.quota < 125829120)) }) : window.webkitRequestFileSystem(0, 1, function() { a(!1) }, function() { a(!0) }) : /Apple/.test(navigator.vendor) && /Safari/.test(navigator.userAgent) ? function() {
                                function i(n) { for (var t = "", e = 0; e < n; e++) t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random())); return t }
                                if (13 <= function() { var n = navigator.userAgent.match(/Version\/([0-9\._]+).*Safari/) || navigator.userAgent.match(/iPhone OS ([0-9\._]+).*Safari/); if (!n) throw new Error("Not Safari!"); return parseInt(n[1], 10) }()) {
                                    var n = function() { for (var n = i(100), t = [], e = 0; e < 1e3; e++) t.push(n); return t.join() }(),
                                        t = [];
                                    try {
                                        for (var e = 0; e < 30; e++) {
                                            var o = i(10);
                                            localStorage.setItem(o, n), t.push(o)
                                        }
                                        a(!0)
                                    } catch (n) { a(!1) } finally { for (e = 0; e < t.length; e++) localStorage.removeItem(t[e]) }
                                } else {
                                    var r = !1;
                                    try { localStorage.setItem("inPrivate", "0"), localStorage.removeItem("inPrivate") } catch (n) { return a(navigator.cookieEnabled) }
                                    try { window.openDatabase(null, null, null, null) } catch (n) { r = !0 }
                                    a(r)
                                }
                            }() : "MozAppearance" in document.documentElement.style ? function() {
                                try {
                                    if (null == indexedDB) a(!0);
                                    else {
                                        var n = indexedDB.open("inPrivate");
                                        n.onsuccess = function() { a(!1) }, n.onerror = function() { a(!0) }
                                    }
                                } catch (n) { a(!1) }
                            }() : (n = !window.indexedDB && (window.PointerEvent || window.MSPointerEvent), a(!!n))
                        } catch (n) { a(!1), g("detect Incogito failed! msg: " + n.message) }
                    }(), l.Bt(), b(), h.le(), _.An()) h.xt() ? n() : y(n);
                else x(), h.xt() ? n() : v.ie(n);
                1 == _.H("giddebug", window.location.href) && document.addEventListener("readystatechange", function(n) {
                    if ("complete" === n.target.readyState) {
                        var t = document.createElement("script");
                        t.async = 1, t.onload = function() { eruda.init() }, t.src = "//cdn.jsdelivr.net/npm/eruda", document.body.appendChild(t)
                    }
                })
            }
        }(), { version: _za_version, getVisitorID: function(n) { return h.we(n) } }
    }()
} catch (n) { "Already loaded" !== n.message && (console.error(n), (new Image).src = "https://za.zalo.me/v3/le?error=" + encodeURIComponent('{"error":"LOAD", "extra": {"name":"' + n.name + '","line":"' + (n.lineNumber || n.line) + '","script":"' + (n.fileName || n.sourceURL || n.script) + '","stack":"' + (n.stackTrace || n.stack) + '","ver":"' + _za_version + '","message":"' + n.message + '"}}')) }