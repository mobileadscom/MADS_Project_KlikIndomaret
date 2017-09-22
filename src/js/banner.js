var LTApp = function () {
    this.INITED = !1
};
LTApp.prototype = {
    preload: function (e, t) {
        this.sources = e;
        var n, r = 0;
        if ($("*").each(function (e, t) {
                "SCRIPT" !== t.tagName && "feMergeNode" !== t.tagName && this.findImageInElement(t)
            }.bind(this)), 0 === this.sources.length) t.call();
        else if (document.images)
            for (var a = 0; a < this.sources.length; a++) n = new Image, n.onload = function () {
                r++, r === this.sources.length && t.call()
            }.bind(this), n.src = this.sources[a];
        else t.call()
    },
    determineUrl: function (e) {
        var t, n = "",
            r = e.currentStyle || window.getComputedStyle(e, null);
        return "" !== r.backgroundImage && "none" !== r.backgroundImage || "" !== e.style.backgroundImage && "none" !== e.style.backgroundImage ? (t = r.backgroundImage || e.style.backgroundImage, t.indexOf("gradient(") === -1 && (n = t.split(","))) : "undefined" != typeof e.getAttribute("src") && "img" === e.nodeName.toLowerCase() && (n = e.getAttribute("src")), [].concat(n)
    },
    findImageInElement: function (e) {
        var t = this.determineUrl(e),
            n = navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/Opera/i) ? "?rand=" + Math.random() : "";
        t.forEach(function (e) {
            e = this.stripUrl(e), "" !== e && this.sources.push(e + n)
        }.bind(this))
    },
    stripUrl: function (e) {
        return e = $.trim(e), e = e.replace(/url\(\"/g, ""), e = e.replace(/url\(/g, ""), e = e.replace(/\"\)/g, ""), e = e.replace(/\)/g, "")
    }
};
"use strict";

function App_banner() {
    return void 0 !== App_banner.instance ? App_banner.instance : (App_banner.instance = this, LTApp.call(this), App_banner.instance)
}

function IDsToVars() {
    for (var e = document.getElementsByTagName("id"), t = 0; t < e.length; t++) {
        var n = e[t];
        n.id && (window[n.id] = document.getElementById(n.id))
    }
}
App_banner.prototype = new LTApp, App_banner.fn = App_banner.prototype, App_banner.getInstance = function () {
    return void 0 === App_banner.instance && new App_banner, App_banner.instance
}, App_banner.fn.init = function () {
    this.INITED || (this.INITED = !0, this.preload([], this.display.bind(this))), IDsToVars()
}, App_banner.fn.display = function () {
    this.steps = $(".step"), this.goTo(1), $("body").removeClass("loading"), $("body").addClass("loaded")
}, App_banner.fn.goTo = function (e) {
    this.steps.each(function (t, n) {
        var a = $(n);
        a.data("order") == e && ($(".step-active").removeClass("step-active"), a.addClass("step-active"))
    }), this["step" + e] && this["step" + e]()
}, App_banner.fn.goToAndWait = function (e, t) {
    this.steps.each(function (n, a) {
        var i, p = $(a);
        p.data("order") == e && (i = $(".step-active"), p.addClass("step-active"), setTimeout(function () {
            $oldç.removeClass("step-active")
        }, t))
    }), this["step" + e] && this["step" + e]()
}, App_banner.fn.step1 = function () {
    var e = new TimelineLite;
    window.tl = e, 
        e.addLabel("f1")
        
        .to(lineSahpe, .5, {opacity: 1, width: "274px", ease: Power1.easeOut}, "f1+=0")
        .to(cpy1, .5, {opacity: 1}, "f1+=0")
        
        .addLabel("ff")
    
        .to([hrsIcon, jamOverlay], .3, {opacity: 1, ease: Power3.easeOut}, "ff+=0.5")
        .to(hrsIcon, 1.5, {backgroundPosition: "-14400px 0px", ease: SteppedEase.config(80)}, "ff+=0.5")
        .to(cpyDisclimer, .5, {opacity: 1}, "ff+=2.2")
        .to(ctaBox, .5, {opacity: 1}, "ff+=2.2")
        .to(logo, .5, {opacity:1}, "ff+=2.2")
};
