"use strict";
var COMMON_FUNCTION = function() { this.init() };
COMMON_FUNCTION.prototype.init = function() {
    var e = location.pathname;
    this.uaParser(), "/" === e || "/index.html" === e ? (this.topTitleDisplay(), this.topTopicsSlider()) : this.pageTitleDisplay(), this.inViewFadeIn(), this.scaleShowing(), this.screenTransition(), this.scrollCount(), this.scrollChangeWhite(), this.toggleMenu(), this.toggleSort(), this.nextContentStretch(), this.drawGoogleMap(), this.viewMore(), this.modalYoutube(), this.heightLine(), this.creativeTeamParameter()
}, COMMON_FUNCTION.prototype.bgBlackSetOffset = function() {
    var e = $(".is-bg-black"),
        t = [];
    return e.each(function(e) {
        var o = $(this).offset().top,
            i = o + $(this).outerHeight();
        t[e] = { top: 0, bottom: 0 }, t[e].top = o, t[e].bottom = i
    }), t
}, COMMON_FUNCTION.prototype.creativeTeamParameter = function() {
    var e, t = document.querySelectorAll('[data-add-parameter="inquiries-to-the-team"]');
    t.length && "/contact/" === (e = t[0].getAttribute("href")) && (e += "?creative=" + window.location.pathname.match(".+/(.+?).[a-z]+([?#;].*)?$")[1], t[0].setAttribute("href", e))
};
var google = google || {};
COMMON_FUNCTION.prototype.drawGoogleMap = function() {
    var e = document.querySelector(".l-footer-map"),
        t = new google.maps.LatLng(35.674938, 139.761614),
        o = { zoom: 16, center: t, scrollwheel: !1, fullscreenControl: !0, MapTypeId: google.maps.MapTypeId.ROADMAP, styles: [{ stylers: [{ lightness: 5 }] }, { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] }, { elementType: "labels.icon", stylers: [{ saturation: -100 }, { lightness: -10 }, { visibility: "simplified" }] }, { elementType: "labels.text.fill", stylers: [{ color: "#222222" }] }, { elementType: "labels.text.stroke", stylers: [{ color: "#f0f0f0" }, { weight: 2 }] }, { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#222222" }] }, { featureType: "landscape", stylers: [{ color: "#e0e0e0" }] }, { featureType: "poi", elementType: "geometry", stylers: [{ color: "#eeeeee" }] }, { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#333333" }] }, { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#b5b5b5" }] }, { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#222222" }] }, { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#222222" }] }, { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#c0c0c0" }] }, { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#222222" }] }, { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#222222" }] }, { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#a9a9a9" }] }, { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#929292" }] }, { featureType: "water", elementType: "geometry", stylers: [{ color: "#b5b5b5" }] }, { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#222222" }] }] },
        i = new google.maps.Map(e, o),
        s = { scaledSize: new google.maps.Size(95, 56), url: "/assets/images/common/google_map_icon.png" },
        n = { map: i, position: i.getCenter(), icon: s };
    new google.maps.Marker(n)
}, COMMON_FUNCTION.prototype.heightLine = function() { $(".js-heightLine-group1").heightLine(), $(".js-heightLine-group2").heightLine() }, COMMON_FUNCTION.prototype.inViewFadeIn = function() {
    var e = $(window),
        t = e.height(),
        o = $(".js-inview"),
        i = [];
    o.css({ opacity: 0 }), o.each(function(e) { "none" === $(this).css("transform") ? ($(this).css({ WebkitTransform: "translateY(15px)", transform: "translateY(15px)" }), i[e] = !1) : i[e] = !0 }), setTimeout(function() {
        e.on("scroll", function() {
            o.each(function(o) {
                var s = $(this).offset().top;
                e.scrollTop() > s - t + t / 5 && ($(this).css({ opacity: 1, WebkitTransition: "opacity .8s ease .25s, transform .7s ease .25s", transition: "opacity .8s ease .25s, transform .7s ease .25s" }), i[o] || $(this).css({ WebkitTransform: "translateY(0)", transform: "translateY(0)" }))
            })
        }), e.trigger("scroll")
    }, 150)
}, COMMON_FUNCTION.prototype.modalYoutube = function() {
    var e = $(window),
        t = $("body"),
        o = $(".js-youtube-trigger"),
        i = $(".l-youtube-modal-content-target"),
        s = ($(".l-youtube-modal-close"), $(".l-youtube-modal")),
        n = $(".l-youtube-modal-overlay"),
        r = s.find(".l-youtube-modal-close"),
        a = i.find(".l-youtube-modal-content-target-youtube-frame");
    o.each(function(o) {
        $(this).on("click", function(o) {
            o.preventDefault(), o.stopPropagation();
            var c = $(this).data("youtube-id");
            t.css("overflow", "hidden"), c && (a.attr("src", "https://www.youtube.com/embed/" + c + "?rel=0&showinfo=0&autoplay=1"), i(a), s.show(), setTimeout(function() { s.addClass("is-active") }, 50), r.on("click", function() { l() }), n.on("click", function() { l() }), e.on("resize", function() { i(a) }))
        });
        var i = function(e) {
                var t = s.innerWidth(),
                    o = s.innerHeight(),
                    i = .92 * t;
                i > 1920 && (i = 1920);
                var n = .5625 * i;
                n > .8 * o && (n = .8 * o, i = 1.777777 * n), e.css({ width: i + "px", height: n + "px" })
            },
            l = function() { s.removeClass("is-active"), t.css("overflow", ""), setTimeout(function() { s.hide(), a.attr("src", "") }, 500) }
    })
}, COMMON_FUNCTION.prototype.nextContentStretch = function() {
    var e = $(".l-next-content-navi");
    if (e.length) {
        var t = $(window),
            o = t.height(),
            i = (e.height(), e.offset().top),
            s = o / 2,
            n = !1,
            r = function() { t.trigger("resize") },
            a = function() { setTimeout(function() { r() }, 900) };
        t.on("resize", function() { o = t.height(), i = e.offset().top, s = o / 2 }.bind(this)), t.on("scroll", function() { t.scrollTop() >= i - s ? n || (e.addClass("is-stretch"), n = !0, a()) : n && (e.removeClass("is-stretch"), n = !1, a()) }.bind(this)), $(document).trigger("scroll")
    }
}, COMMON_FUNCTION.prototype.pageTitleDisplay = function() {
    var e, t, o = $(".l-page-title-text"),
        i = $(".l-page-subtitle-text, .c-article-title"),
        s = o.text().split(/\r\n|\r|\n/),
        n = i.text().split(/\r\n|\r|\n/),
        r = function(e) { for (var t = 0; t < e.length; t++) e[t] = e[t].replace(/^\s+/g, ""); return $.grep(e, function(e) { return "" !== e }) },
        a = function(e, t, o) { t = "", o = o || "title"; for (var i = 0; i < e.length; i++) "" !== e[i] && (t += '<span class="l-page-' + o + '-text-frame"><span class="l-page-' + o + '-text-frame-inner">' + e[i] + "</span></span>", i < e.length - 1 && (t += "<br>")); return t };
    s = r(s), n = r(n), e = a(s, e), t = a(n, t, "subtitle"), o.html(e), i.html(t);
    var l = o.find(".l-page-title-text-frame"),
        c = i.find(".l-page-subtitle-text-frame");
    l.css("height", l.height() + "px"), c.css("height", c.height() + "px"), l.each(function(e) { setTimeout(function() { $(this).addClass("is-show") }.bind(this), 100) }), c.each(function(e) { setTimeout(function() { $(this).addClass("is-show") }.bind(this), 100) })
}, COMMON_FUNCTION.prototype.scaleShowing = function() {
    var e = $(window),
        t = e.height(),
        o = $(".is-scale-showing");
    o.each(function() { $(this).wrap('<div class="is-scale-showing-wrap"></div>').trigger("create") }), e.on("scroll", function() {
        o.each(function() {
            var o = $(this).offset().top;
            e.scrollTop() > o - t + t / 5 && ($(this).addClass("is-scale-in"), e.trigger("resize"))
        })
    }), e.trigger("scroll")
}, COMMON_FUNCTION.prototype.screenTransition = function() {
    var e = $(window),
        t = $(".l-wrapper"),
        o = $("a").not('a[href^="http"]'),
        i = !1;
    t.css({ WebkitTransition: "opacity 0.5s ease", transition: "opacity 0.5s ease" }), e.on("keydown", function(e) {
        (event.ctrlKey || event.metaKey) && (i = !0)
    }), e.on("keyup", function(e) { i = !1 }), t.addClass("is-show"), o.on("click", function(e) { if (!i) { var o = $(this).attr("target"); if (o && "_blank" !== o && "blank" !== o) { e.preventDefault(), e.stopPropagation(); var s = $(this).attr("href"); if ("#" !== s && void 0 !== s) { location.hostname === $(this).prop("hostname") && (t.removeClass("is-show"), setTimeout(function() { location.href = s }, 550)) } else location.href = s } } })
}, COMMON_FUNCTION.prototype.scrollChangeWhite = function() {
    var e, t = $(window),
        o = $(window).height(),
        i = $(".l-header-logo-image"),
        s = $(".l-scroll-count"),
        n = $(".l-menu-trigger"),
        r = this.bgBlackSetOffset(),
        a = location.pathname,
        l = function(e) {
            t.on("scroll", function() {
                for (var o = e.height() / 2, i = (t.scrollTop(), e.offset().top), s = 0; s < r.length; s++) {
                    var n = r[s].top,
                        a = r[s].bottom;
                    if (i + o > n && i + o < a) return void e.addClass("is-white");
                    e.removeClass("is-white")
                }
            })
        };
    t.on("resize", $.throttle(200, function() { o = t.height(), r = this.bgBlackSetOffset(), t.trigger("scroll") }).bind(this)), l(i), l(s), l(n), "/" === a && (e = $(".p-top-heading-title"), l(e)), t.trigger("scroll")
}, COMMON_FUNCTION.prototype.scrollCount = function() {
    var e = $(window),
        t = $(".l-scroll-count"),
        o = t.find(".l-scroll-count-molecular"),
        i = t.find(".l-scroll-count-denominator"),
        s = t.find(".l-scroll-count-line-over"),
        n = s.width(),
        r = document.body.clientHeight,
        a = document.body.scrollHeight - r;
    o.text(e.scrollTop()), i.text(a), e.on("resize", $.throttle(200, function() { r = document.body.clientHeight, a = document.body.scrollHeight - r, o.text(e.scrollTop()), i.text(a) }).bind(this)), e.on("scroll", function() {
        var t = e.scrollTop();
        o.text(t), s.css("left", t / a * Math.abs(n) - n + "px")
    })
}, COMMON_FUNCTION.prototype.toggleMenu = function() {
    var e = $("body"),
        t = $(".l-menu-trigger"),
        o = $(".l-menu"),
        i = $(".l-menu-list-item-href-text"),
        s = $(".l-menu-footer"),
        n = $(".l-menu-footer-inner");
    t.on("mouseenter", function() { $(this).addClass(function() { setTimeout(function() { $(this).removeClass("is-animation") }.bind(this), 1300); return "is-animation" }) }), t.on("click", function(t) { t.preventDefault(), t.stopPropagation(), e.toggleClass("is-menu-open"), $(this).toggleClass("is-active"), o.toggleClass("is-active"), i.toggleClass("is-active"), s.toggleClass("is-active"), n.toggleClass("is-active") })
}, COMMON_FUNCTION.prototype.toggleSort = function() {
    var e = $(".l-sort-toggle-button-text"),
        t = $(".l-sort-toggle-area");
    if (e.length && t.length) {
        var o = $(window),
            i = t.height(),
            s = !1,
            n = function() { o.trigger("resize") },
            r = function() { setTimeout(function() { n() }, 500) };
        t.css({ height: 0, WebkitTransition: "height 0.45s cubic-bezier(.6, 0, 0, 1)", transition: "height 0.45s cubic-bezier(.6, 0, 0, 1)" }), n(), e.on("click", function(e) { e.preventDefault(), e.stopPropagation(), $(this).toggleClass("is-open"), s ? (t.css("height", 0), s = !1, r()) : (t.css("height", i), s = !0, r()) })
    }
}, COMMON_FUNCTION.prototype.topTitleDisplay = function() {
    var e = $(window),
        t = e.height(),
        o = $(".p-top-heading-title");
    e.on("resize", function() { t = e.height() });
    var i = function(o) {
        var i = o.find(".p-top-heading-title-area"),
            s = i.find(".p-top-heading-title-text");
        if (o.hasClass("is-top-creative")) i.addClass("is-show"), setTimeout(function() { i.addClass("is-hide"), s.addClass("is-hide"), i.removeClass("is-show") }, 1200);
        else {
            var n = !1;
            e.on("scroll", function() {
                var r = e.scrollTop(),
                    a = t / 2,
                    l = o.offset().top - t * (2 / 3);
                o.height();
                r > l && r < l + a ? n || (i.addClass("is-show"), setTimeout(function() { i.addClass("is-hide"), s.addClass("is-hide"), i.removeClass("is-show"), n = !0, setTimeout(function() { i.removeClass("is-hide"), s.removeClass("is-hide") }, 1200) }, 1200)) : n && (n = !1)
            })
        }
    };
    o.each(function() { i($(this)) })
}, COMMON_FUNCTION.prototype.topTopicsSlider = function() {
    var e = $(".p-top-topics-slider"),
        t = $(".p-top-topic").length;
    if (t > 1) {
        e.slick({ autoplay: !1, speed: 1e3, dots: !1, fade: !0, arrows: !1, infinite: !0, slidesToShow: 1, slidesToScroll: 1, swipe: !1 });
        for (var o, i, s = 0, n = $(".progressBarContainer"), r = function() { l(), o = 0, i = setInterval(a) }, a = function() { o += 1 / 16, $(".inProgress" + s).css({ width: o + "%" }), o >= 100 && (e.slick("slickNext"), s++, s > t - 1 && (s = 0), r()) }, l = function() { $(".inProgress").animate({ width: "0%" }, 300), clearInterval(i) }, c = 0; c < t; c++) {
            var p = '<div class="progressBarBox">';
            p += "<div data-slick-index=" + c + ' class="progressBar">', p += "</div>", p += '<div class="inProgress inProgress' + c + '"></div>', p += "</div>", n.append(p)
        }
        r(), $(".progressBarBox").click(function() {
            clearInterval(i);
            var t = $(this).find(".progressBar").data("slick-index");
            e.slick("slickGoTo", t, !1), s = t, r()
        })
    }
};
var UAParser = UAParser || {};
COMMON_FUNCTION.prototype.uaParser = function() {
    var e = UAParser(),
        t = location.pathname;
    $("body").addClass("is-" + e.browser.name), "mobile" === e.device.type && (t.match("/sp/") || (location.href = "/sp" + t))
}, COMMON_FUNCTION.prototype.viewMore = function() {
    var e, t = $(window),
        o = $(".js-view-more-list"),
        i = o.length,
        s = location.pathname,
        n = 0;
    if ("/creative/" === s && (e = 5), i && e) {
        var r = $(".js-view-more"),
            a = r.find(".js-view-more-button"),
            l = !1;
        o.each(function(t) { t >= e && $(this).hide() }), a.on("click", function(s) { s.preventDefault(), s.stopPropagation(), n = e, e += e, l || (e >= i && (l = !0, r.css({ paddingTop: 0, borderTop: "1px solid #e0e0e0" }), a.fadeOut()), o.each(function(t) { t >= n && t < e && "none" === $(this).css("transform") && ($(this).css({ display: "block", opacity: 0, WebkitTransform: "translateY(15px)", transform: "translateY(15px)" }), $(this).find(".is-scale-showing").removeClass("is-scale-in")) })), t.trigger("scroll"), t.trigger("resize") }), t.trigger("resize")
    }
}, window.onload = function() { new COMMON_FUNCTION };