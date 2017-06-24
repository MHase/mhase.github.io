/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var require;var require;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* perfect-scrollbar v0.6.16 */
!function t(e, n, r) {
  function o(i, s) {
    if (!n[i]) {
      if (!e[i]) {
        var a = "function" == typeof require && require;if (!s && a) return require(i, !0);if (l) return l(i, !0);var c = new Error("Cannot find module '" + i + "'");throw c.code = "MODULE_NOT_FOUND", c;
      }var u = n[i] = { exports: {} };e[i][0].call(u.exports, function (t) {
        var n = e[i][1][t];return o(n ? n : t);
      }, u, u.exports, t, e, n, r);
    }return n[i].exports;
  }for (var l = "function" == typeof require && require, i = 0; i < r.length; i++) {
    o(r[i]);
  }return o;
}({ 1: [function (t, e, n) {
    "use strict";
    var r = t("../main"); true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (window.PerfectScrollbar = r, "undefined" == typeof window.Ps && (window.Ps = r));
  }, { "../main": 7 }], 2: [function (t, e, n) {
    "use strict";
    function r(t, e) {
      var n = t.className.split(" ");n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ");
    }function o(t, e) {
      var n = t.className.split(" "),
          r = n.indexOf(e);r >= 0 && n.splice(r, 1), t.className = n.join(" ");
    }n.add = function (t, e) {
      t.classList ? t.classList.add(e) : r(t, e);
    }, n.remove = function (t, e) {
      t.classList ? t.classList.remove(e) : o(t, e);
    }, n.list = function (t) {
      return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ");
    };
  }, {}], 3: [function (t, e, n) {
    "use strict";
    function r(t, e) {
      return window.getComputedStyle(t)[e];
    }function o(t, e, n) {
      return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t;
    }function l(t, e) {
      for (var n in e) {
        var r = e[n];"number" == typeof r && (r = r.toString() + "px"), t.style[n] = r;
      }return t;
    }var i = {};i.e = function (t, e) {
      var n = document.createElement(t);return n.className = e, n;
    }, i.appendTo = function (t, e) {
      return e.appendChild(t), t;
    }, i.css = function (t, e, n) {
      return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? l(t, e) : "undefined" == typeof n ? r(t, e) : o(t, e, n);
    }, i.matches = function (t, e) {
      return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0;
    }, i.remove = function (t) {
      "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
    }, i.queryChildren = function (t, e) {
      return Array.prototype.filter.call(t.childNodes, function (t) {
        return i.matches(t, e);
      });
    }, e.exports = i;
  }, {}], 4: [function (t, e, n) {
    "use strict";
    var r = function r(t) {
      this.element = t, this.events = {};
    };r.prototype.bind = function (t, e) {
      "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1);
    }, r.prototype.unbind = function (t, e) {
      var n = "undefined" != typeof e;this.events[t] = this.events[t].filter(function (r) {
        return !(!n || r === e) || (this.element.removeEventListener(t, r, !1), !1);
      }, this);
    }, r.prototype.unbindAll = function () {
      for (var t in this.events) {
        this.unbind(t);
      }
    };var o = function o() {
      this.eventElements = [];
    };o.prototype.eventElement = function (t) {
      var e = this.eventElements.filter(function (e) {
        return e.element === t;
      })[0];return "undefined" == typeof e && (e = new r(t), this.eventElements.push(e)), e;
    }, o.prototype.bind = function (t, e, n) {
      this.eventElement(t).bind(e, n);
    }, o.prototype.unbind = function (t, e, n) {
      this.eventElement(t).unbind(e, n);
    }, o.prototype.unbindAll = function () {
      for (var t = 0; t < this.eventElements.length; t++) {
        this.eventElements[t].unbindAll();
      }
    }, o.prototype.once = function (t, e, n) {
      var r = this.eventElement(t),
          o = function o(t) {
        r.unbind(e, o), n(t);
      };r.bind(e, o);
    }, e.exports = o;
  }, {}], 5: [function (t, e, n) {
    "use strict";
    e.exports = function () {
      function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
      }return function () {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
      };
    }();
  }, {}], 6: [function (t, e, n) {
    "use strict";
    var r = t("./class"),
        o = t("./dom"),
        l = n.toInt = function (t) {
      return parseInt(t, 10) || 0;
    },
        i = n.clone = function (t) {
      if (t) {
        if (t.constructor === Array) return t.map(i);if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
          var e = {};for (var n in t) {
            e[n] = i(t[n]);
          }return e;
        }return t;
      }return null;
    };n.extend = function (t, e) {
      var n = i(t);for (var r in e) {
        n[r] = i(e[r]);
      }return n;
    }, n.isEditable = function (t) {
      return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]");
    }, n.removePsClasses = function (t) {
      for (var e = r.list(t), n = 0; n < e.length; n++) {
        var o = e[n];0 === o.indexOf("ps-") && r.remove(t, o);
      }
    }, n.outerWidth = function (t) {
      return l(o.css(t, "width")) + l(o.css(t, "paddingLeft")) + l(o.css(t, "paddingRight")) + l(o.css(t, "borderLeftWidth")) + l(o.css(t, "borderRightWidth"));
    }, n.startScrolling = function (t, e) {
      r.add(t, "ps-in-scrolling"), "undefined" != typeof e ? r.add(t, "ps-" + e) : (r.add(t, "ps-x"), r.add(t, "ps-y"));
    }, n.stopScrolling = function (t, e) {
      r.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? r.remove(t, "ps-" + e) : (r.remove(t, "ps-x"), r.remove(t, "ps-y"));
    }, n.env = { isWebKit: "WebkitAppearance" in document.documentElement.style, supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, supportsIePointer: null !== window.navigator.msMaxTouchPoints };
  }, { "./class": 2, "./dom": 3 }], 7: [function (t, e, n) {
    "use strict";
    var r = t("./plugin/destroy"),
        o = t("./plugin/initialize"),
        l = t("./plugin/update");e.exports = { initialize: o, update: l, destroy: r };
  }, { "./plugin/destroy": 9, "./plugin/initialize": 17, "./plugin/update": 21 }], 8: [function (t, e, n) {
    "use strict";
    e.exports = { handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"], maxScrollbarLength: null, minScrollbarLength: null, scrollXMarginOffset: 0, scrollYMarginOffset: 0, suppressScrollX: !1, suppressScrollY: !1, swipePropagation: !0, useBothWheelAxes: !1, wheelPropagation: !1, wheelSpeed: 1, theme: "default" };
  }, {}], 9: [function (t, e, n) {
    "use strict";
    var r = t("../lib/helper"),
        o = t("../lib/dom"),
        l = t("./instances");e.exports = function (t) {
      var e = l.get(t);e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), r.removePsClasses(t), l.remove(t));
    };
  }, { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18 }], 10: [function (t, e, n) {
    "use strict";
    function r(t, e) {
      function n(t) {
        return t.getBoundingClientRect();
      }var r = function r(t) {
        t.stopPropagation();
      };e.event.bind(e.scrollbarY, "click", r), e.event.bind(e.scrollbarYRail, "click", function (r) {
        var o = r.pageY - window.pageYOffset - n(e.scrollbarYRail).top,
            s = o > e.scrollbarYTop ? 1 : -1;i(t, "top", t.scrollTop + s * e.containerHeight), l(t), r.stopPropagation();
      }), e.event.bind(e.scrollbarX, "click", r), e.event.bind(e.scrollbarXRail, "click", function (r) {
        var o = r.pageX - window.pageXOffset - n(e.scrollbarXRail).left,
            s = o > e.scrollbarXLeft ? 1 : -1;i(t, "left", t.scrollLeft + s * e.containerWidth), l(t), r.stopPropagation();
      });
    }var o = t("../instances"),
        l = t("../update-geometry"),
        i = t("../update-scroll");e.exports = function (t) {
      var e = o.get(t);r(t, e);
    };
  }, { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 11: [function (t, e, n) {
    "use strict";
    function r(t, e) {
      function n(n) {
        var o = r + n * e.railXRatio,
            i = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);o < 0 ? e.scrollbarXLeft = 0 : o > i ? e.scrollbarXLeft = i : e.scrollbarXLeft = o;var s = l.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;c(t, "left", s);
      }var r = null,
          o = null,
          s = function s(e) {
        n(e.pageX - o), a(t), e.stopPropagation(), e.preventDefault();
      },
          u = function u() {
        l.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", s);
      };e.event.bind(e.scrollbarX, "mousedown", function (n) {
        o = n.pageX, r = l.toInt(i.css(e.scrollbarX, "left")) * e.railXRatio, l.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault();
      });
    }function o(t, e) {
      function n(n) {
        var o = r + n * e.railYRatio,
            i = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);o < 0 ? e.scrollbarYTop = 0 : o > i ? e.scrollbarYTop = i : e.scrollbarYTop = o;var s = l.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));c(t, "top", s);
      }var r = null,
          o = null,
          s = function s(e) {
        n(e.pageY - o), a(t), e.stopPropagation(), e.preventDefault();
      },
          u = function u() {
        l.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", s);
      };e.event.bind(e.scrollbarY, "mousedown", function (n) {
        o = n.pageY, r = l.toInt(i.css(e.scrollbarY, "top")) * e.railYRatio, l.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault();
      });
    }var l = t("../../lib/helper"),
        i = t("../../lib/dom"),
        s = t("../instances"),
        a = t("../update-geometry"),
        c = t("../update-scroll");e.exports = function (t) {
      var e = s.get(t);r(t, e), o(t, e);
    };
  }, { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 12: [function (t, e, n) {
    "use strict";
    function r(t, e) {
      function n(n, r) {
        var o = t.scrollTop;if (0 === n) {
          if (!e.scrollbarYActive) return !1;if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation;
        }var l = t.scrollLeft;if (0 === r) {
          if (!e.scrollbarXActive) return !1;if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation;
        }return !0;
      }var r = !1;e.event.bind(t, "mouseenter", function () {
        r = !0;
      }), e.event.bind(t, "mouseleave", function () {
        r = !1;
      });var i = !1;e.event.bind(e.ownerDocument, "keydown", function (c) {
        if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
          var u = l.matches(e.scrollbarX, ":focus") || l.matches(e.scrollbarY, ":focus");if (r || u) {
            var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;if (d) {
              if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;else for (; d.shadowRoot;) {
                d = d.shadowRoot.activeElement;
              }if (o.isEditable(d)) return;
            }var p = 0,
                f = 0;switch (c.which) {case 37:
                p = c.metaKey ? -e.contentWidth : c.altKey ? -e.containerWidth : -30;break;case 38:
                f = c.metaKey ? e.contentHeight : c.altKey ? e.containerHeight : 30;break;case 39:
                p = c.metaKey ? e.contentWidth : c.altKey ? e.containerWidth : 30;break;case 40:
                f = c.metaKey ? -e.contentHeight : c.altKey ? -e.containerHeight : -30;break;case 33:
                f = 90;break;case 32:
                f = c.shiftKey ? 90 : -90;break;case 34:
                f = -90;break;case 35:
                f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;break;case 36:
                f = c.ctrlKey ? t.scrollTop : e.containerHeight;break;default:
                return;}a(t, "top", t.scrollTop - f), a(t, "left", t.scrollLeft + p), s(t), i = n(p, f), i && c.preventDefault();
          }
        }
      });
    }var o = t("../../lib/helper"),
        l = t("../../lib/dom"),
        i = t("../instances"),
        s = t("../update-geometry"),
        a = t("../update-scroll");e.exports = function (t) {
      var e = i.get(t);r(t, e);
    };
  }, { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 13: [function (t, e, n) {
    "use strict";
    function r(t, e) {
      function n(n, r) {
        var o = t.scrollTop;if (0 === n) {
          if (!e.scrollbarYActive) return !1;if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation;
        }var l = t.scrollLeft;if (0 === r) {
          if (!e.scrollbarXActive) return !1;if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation;
        }return !0;
      }function r(t) {
        var e = t.deltaX,
            n = -1 * t.deltaY;return "undefined" != typeof e && "undefined" != typeof n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), t.shiftKey ? [-n, -e] : [e, n];
      }function o(e, n) {
        var r = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if (r) {
          if (!window.getComputedStyle(r).overflow.match(/(scroll|auto)/)) return !1;var o = r.scrollHeight - r.clientHeight;if (o > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === o && n < 0)) return !0;var l = r.scrollLeft - r.clientWidth;if (l > 0 && !(0 === r.scrollLeft && e < 0 || r.scrollLeft === l && e > 0)) return !0;
        }return !1;
      }function s(s) {
        var c = r(s),
            u = c[0],
            d = c[1];o(u, d) || (a = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? i(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : i(t, "top", t.scrollTop + u * e.settings.wheelSpeed), a = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : i(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), a = !0) : (i(t, "top", t.scrollTop - d * e.settings.wheelSpeed), i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), l(t), a = a || n(u, d), a && (s.stopPropagation(), s.preventDefault()));
      }var a = !1;"undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", s) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", s);
    }var o = t("../instances"),
        l = t("../update-geometry"),
        i = t("../update-scroll");e.exports = function (t) {
      var e = o.get(t);r(t, e);
    };
  }, { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 14: [function (t, e, n) {
    "use strict";
    function r(t, e) {
      e.event.bind(t, "scroll", function () {
        l(t);
      });
    }var o = t("../instances"),
        l = t("../update-geometry");e.exports = function (t) {
      var e = o.get(t);r(t, e);
    };
  }, { "../instances": 18, "../update-geometry": 19 }], 15: [function (t, e, n) {
    "use strict";
    function r(t, e) {
      function n() {
        var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer;
      }function r() {
        c || (c = setInterval(function () {
          return l.get(t) ? (s(t, "top", t.scrollTop + u.top), s(t, "left", t.scrollLeft + u.left), void i(t)) : void clearInterval(c);
        }, 50));
      }function a() {
        c && (clearInterval(c), c = null), o.stopScrolling(t);
      }var c = null,
          u = { top: 0, left: 0 },
          d = !1;e.event.bind(e.ownerDocument, "selectionchange", function () {
        t.contains(n()) ? d = !0 : (d = !1, a());
      }), e.event.bind(window, "mouseup", function () {
        d && (d = !1, a());
      }), e.event.bind(window, "keyup", function () {
        d && (d = !1, a());
      }), e.event.bind(window, "mousemove", function (e) {
        if (d) {
          var n = { x: e.pageX, y: e.pageY },
              l = { left: t.offsetLeft, right: t.offsetLeft + t.offsetWidth, top: t.offsetTop, bottom: t.offsetTop + t.offsetHeight };n.x < l.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > l.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < l.top + 3 ? (l.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : n.y > l.bottom - 3 ? (n.y - l.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? a() : r();
        }
      });
    }var o = t("../../lib/helper"),
        l = t("../instances"),
        i = t("../update-geometry"),
        s = t("../update-scroll");e.exports = function (t) {
      var e = l.get(t);r(t, e);
    };
  }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 16: [function (t, e, n) {
    "use strict";
    function r(t, e, n, r) {
      function o(n, r) {
        var o = t.scrollTop,
            l = t.scrollLeft,
            i = Math.abs(n),
            s = Math.abs(r);if (s > i) {
          if (r < 0 && o === e.contentHeight - e.containerHeight || r > 0 && 0 === o) return !e.settings.swipePropagation;
        } else if (i > s && (n < 0 && l === e.contentWidth - e.containerWidth || n > 0 && 0 === l)) return !e.settings.swipePropagation;return !0;
      }function a(e, n) {
        s(t, "top", t.scrollTop - n), s(t, "left", t.scrollLeft - e), i(t);
      }function c() {
        w = !0;
      }function u() {
        w = !1;
      }function d(t) {
        return t.targetTouches ? t.targetTouches[0] : t;
      }function p(t) {
        return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE);
      }function f(t) {
        if (p(t)) {
          Y = !0;var e = d(t);g.pageX = e.pageX, g.pageY = e.pageY, v = new Date().getTime(), null !== y && clearInterval(y), t.stopPropagation();
        }
      }function h(t) {
        if (!Y && e.settings.swipePropagation && f(t), !w && Y && p(t)) {
          var n = d(t),
              r = { pageX: n.pageX, pageY: n.pageY },
              l = r.pageX - g.pageX,
              i = r.pageY - g.pageY;a(l, i), g = r;var s = new Date().getTime(),
              c = s - v;c > 0 && (m.x = l / c, m.y = i / c, v = s), o(l, i) && (t.stopPropagation(), t.preventDefault());
        }
      }function b() {
        !w && Y && (Y = !1, clearInterval(y), y = setInterval(function () {
          return l.get(t) && (m.x || m.y) ? Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(y) : (a(30 * m.x, 30 * m.y), m.x *= .8, void (m.y *= .8)) : void clearInterval(y);
        }, 10));
      }var g = {},
          v = 0,
          m = {},
          y = null,
          w = !1,
          Y = !1;n ? (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", b)) : r && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", b)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", b)));
    }var o = t("../../lib/helper"),
        l = t("../instances"),
        i = t("../update-geometry"),
        s = t("../update-scroll");e.exports = function (t) {
      if (o.env.supportsTouch || o.env.supportsIePointer) {
        var e = l.get(t);r(t, e, o.env.supportsTouch, o.env.supportsIePointer);
      }
    };
  }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 17: [function (t, e, n) {
    "use strict";
    var r = t("../lib/helper"),
        o = t("../lib/class"),
        l = t("./instances"),
        i = t("./update-geometry"),
        s = { "click-rail": t("./handler/click-rail"), "drag-scrollbar": t("./handler/drag-scrollbar"), keyboard: t("./handler/keyboard"), wheel: t("./handler/mouse-wheel"), touch: t("./handler/touch"), selection: t("./handler/selection") },
        a = t("./handler/native-scroll");e.exports = function (t, e) {
      e = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : {}, o.add(t, "ps-container");var n = l.add(t);n.settings = r.extend(n.settings, e), o.add(t, "ps-theme-" + n.settings.theme), n.settings.handlers.forEach(function (e) {
        s[e](t);
      }), a(t), i(t);
    };
  }, { "../lib/class": 2, "../lib/helper": 6, "./handler/click-rail": 10, "./handler/drag-scrollbar": 11, "./handler/keyboard": 12, "./handler/mouse-wheel": 13, "./handler/native-scroll": 14, "./handler/selection": 15, "./handler/touch": 16, "./instances": 18, "./update-geometry": 19 }], 18: [function (t, e, n) {
    "use strict";
    function r(t) {
      function e() {
        a.add(t, "ps-focus");
      }function n() {
        a.remove(t, "ps-focus");
      }var r = this;r.settings = s.clone(c), r.containerWidth = null, r.containerHeight = null, r.contentWidth = null, r.contentHeight = null, r.isRtl = "rtl" === u.css(t, "direction"), r.isNegativeScroll = function () {
        var e = t.scrollLeft,
            n = null;return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n;
      }(), r.negativeScrollAdjustment = r.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.event = new d(), r.ownerDocument = t.ownerDocument || document, r.scrollbarXRail = u.appendTo(u.e("div", "ps-scrollbar-x-rail"), t), r.scrollbarX = u.appendTo(u.e("div", "ps-scrollbar-x"), r.scrollbarXRail), r.scrollbarX.setAttribute("tabindex", 0), r.event.bind(r.scrollbarX, "focus", e), r.event.bind(r.scrollbarX, "blur", n), r.scrollbarXActive = null, r.scrollbarXWidth = null, r.scrollbarXLeft = null, r.scrollbarXBottom = s.toInt(u.css(r.scrollbarXRail, "bottom")), r.isScrollbarXUsingBottom = r.scrollbarXBottom === r.scrollbarXBottom, r.scrollbarXTop = r.isScrollbarXUsingBottom ? null : s.toInt(u.css(r.scrollbarXRail, "top")), r.railBorderXWidth = s.toInt(u.css(r.scrollbarXRail, "borderLeftWidth")) + s.toInt(u.css(r.scrollbarXRail, "borderRightWidth")), u.css(r.scrollbarXRail, "display", "block"), r.railXMarginWidth = s.toInt(u.css(r.scrollbarXRail, "marginLeft")) + s.toInt(u.css(r.scrollbarXRail, "marginRight")), u.css(r.scrollbarXRail, "display", ""), r.railXWidth = null, r.railXRatio = null, r.scrollbarYRail = u.appendTo(u.e("div", "ps-scrollbar-y-rail"), t), r.scrollbarY = u.appendTo(u.e("div", "ps-scrollbar-y"), r.scrollbarYRail), r.scrollbarY.setAttribute("tabindex", 0), r.event.bind(r.scrollbarY, "focus", e), r.event.bind(r.scrollbarY, "blur", n), r.scrollbarYActive = null, r.scrollbarYHeight = null, r.scrollbarYTop = null, r.scrollbarYRight = s.toInt(u.css(r.scrollbarYRail, "right")), r.isScrollbarYUsingRight = r.scrollbarYRight === r.scrollbarYRight, r.scrollbarYLeft = r.isScrollbarYUsingRight ? null : s.toInt(u.css(r.scrollbarYRail, "left")), r.scrollbarYOuterWidth = r.isRtl ? s.outerWidth(r.scrollbarY) : null, r.railBorderYWidth = s.toInt(u.css(r.scrollbarYRail, "borderTopWidth")) + s.toInt(u.css(r.scrollbarYRail, "borderBottomWidth")), u.css(r.scrollbarYRail, "display", "block"), r.railYMarginHeight = s.toInt(u.css(r.scrollbarYRail, "marginTop")) + s.toInt(u.css(r.scrollbarYRail, "marginBottom")), u.css(r.scrollbarYRail, "display", ""), r.railYHeight = null, r.railYRatio = null;
    }function o(t) {
      return t.getAttribute("data-ps-id");
    }function l(t, e) {
      t.setAttribute("data-ps-id", e);
    }function i(t) {
      t.removeAttribute("data-ps-id");
    }var s = t("../lib/helper"),
        a = t("../lib/class"),
        c = t("./default-setting"),
        u = t("../lib/dom"),
        d = t("../lib/event-manager"),
        p = t("../lib/guid"),
        f = {};n.add = function (t) {
      var e = p();return l(t, e), f[e] = new r(t), f[e];
    }, n.remove = function (t) {
      delete f[o(t)], i(t);
    }, n.get = function (t) {
      return f[o(t)];
    };
  }, { "../lib/class": 2, "../lib/dom": 3, "../lib/event-manager": 4, "../lib/guid": 5, "../lib/helper": 6, "./default-setting": 8 }], 19: [function (t, e, n) {
    "use strict";
    function r(t, e) {
      return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e;
    }function o(t, e) {
      var n = { width: e.railXWidth };e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, s.css(e.scrollbarXRail, n);var r = { top: t.scrollTop, height: e.railYHeight };e.isScrollbarYUsingRight ? e.isRtl ? r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : r.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : r.left = e.scrollbarYLeft + t.scrollLeft, s.css(e.scrollbarYRail, r), s.css(e.scrollbarX, { left: e.scrollbarXLeft, width: e.scrollbarXWidth - e.railBorderXWidth }), s.css(e.scrollbarY, { top: e.scrollbarYTop, height: e.scrollbarYHeight - e.railBorderYWidth });
    }var l = t("../lib/helper"),
        i = t("../lib/class"),
        s = t("../lib/dom"),
        a = t("./instances"),
        c = t("./update-scroll");e.exports = function (t) {
      var e = a.get(t);e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;var n;t.contains(e.scrollbarXRail) || (n = s.queryChildren(t, ".ps-scrollbar-x-rail"), n.length > 0 && n.forEach(function (t) {
        s.remove(t);
      }), s.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = s.queryChildren(t, ".ps-scrollbar-y-rail"), n.length > 0 && n.forEach(function (t) {
        s.remove(t);
      }), s.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = r(e, l.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = l.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = r(e, l.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = l.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? i.add(t, "ps-active-x") : (i.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? i.add(t, "ps-active-y") : (i.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0));
    };
  }, { "../lib/class": 2, "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-scroll": 20 }], 20: [function (t, e, n) {
    "use strict";
    var r,
        o,
        l = t("./instances"),
        i = function i(t) {
      var e = document.createEvent("Event");return e.initEvent(t, !0, !0), e;
    };e.exports = function (t, e, n) {
      if ("undefined" == typeof t) throw "You must provide an element to the update-scroll function";if ("undefined" == typeof e) throw "You must provide an axis to the update-scroll function";if ("undefined" == typeof n) throw "You must provide a value to the update-scroll function";"top" === e && n <= 0 && (t.scrollTop = n = 0, t.dispatchEvent(i("ps-y-reach-start"))), "left" === e && n <= 0 && (t.scrollLeft = n = 0, t.dispatchEvent(i("ps-x-reach-start")));var s = l.get(t);"top" === e && n >= s.contentHeight - s.containerHeight && (n = s.contentHeight - s.containerHeight, n - t.scrollTop <= 1 ? n = t.scrollTop : t.scrollTop = n, t.dispatchEvent(i("ps-y-reach-end"))), "left" === e && n >= s.contentWidth - s.containerWidth && (n = s.contentWidth - s.containerWidth, n - t.scrollLeft <= 1 ? n = t.scrollLeft : t.scrollLeft = n, t.dispatchEvent(i("ps-x-reach-end"))), r || (r = t.scrollTop), o || (o = t.scrollLeft), "top" === e && n < r && t.dispatchEvent(i("ps-scroll-up")), "top" === e && n > r && t.dispatchEvent(i("ps-scroll-down")), "left" === e && n < o && t.dispatchEvent(i("ps-scroll-left")), "left" === e && n > o && t.dispatchEvent(i("ps-scroll-right")), "top" === e && (t.scrollTop = r = n, t.dispatchEvent(i("ps-scroll-y"))), "left" === e && (t.scrollLeft = o = n, t.dispatchEvent(i("ps-scroll-x")));
    };
  }, { "./instances": 18 }], 21: [function (t, e, n) {
    "use strict";
    var r = t("../lib/helper"),
        o = t("../lib/dom"),
        l = t("./instances"),
        i = t("./update-geometry"),
        s = t("./update-scroll");e.exports = function (t) {
      var e = l.get(t);e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = r.toInt(o.css(e.scrollbarXRail, "marginLeft")) + r.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = r.toInt(o.css(e.scrollbarYRail, "marginTop")) + r.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), i(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""));
    };
  }, { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-geometry": 19, "./update-scroll": 20 }] }, {}, [1]);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var default_id = 0;
var songs = [{ time: "3:16", artist: "Icona Pop", title: "Still Don't Know" }, { time: "2:35", artist: "Icona Pop", title: "I Love It" }, { time: "2:50", artist: "Icona Pop", title: "Girlfriend" }, { time: "3:07", artist: "Icona Pop", title: "We got the World" }, { time: "3:07", artist: "Icona Pop", title: "We got the World which we deserve" }, { time: "3:24", artist: "Icona Pop", title: "Nights Like This" }, { time: "4:08", artist: "Daft Punk", title: "Get Lucky" }, { time: "4:46", artist: "Justing Timberlake", title: "Can't Stop The Feeling" }, { time: "4:07", artist: "Pharrel Williams", title: "Happy" }];

var Ps = __webpack_require__(0);

$(document).ready(function () {

	var container = document.getElementsByClassName('song_playlist');
	Ps.initialize(container[0], {
		wheelSpeed: 0.8
	});
	// $('.song_playlist').perfectScrollbar();

	volumeControl();
	songTime();
	playlistToggle();
	generatePlaylist();
	$('.btn.next').click(function () {
		nextSong();
	});
	$('.btn.previous').click(function () {
		previousSong();
	});
	selectSong();
	togglePlaylistBlur();
	togglePlay();
});

function togglePlay() {
	$('.play').on('click', function () {
		if ($(this).children('i').hasClass('fa-play')) $(this).children('i').removeClass('fa-play').addClass('fa-pause');else $(this).children('i').removeClass('fa-pause').addClass('fa-play');
	});
}

function playlistToggle() {
	$('.playlist').hide();
	$('#player').show();
	$('body').on('click', '#menu', function () {
		$('.playlist').slideDown();
		$('#player').fadeOut();
	});
	$('body').on('click', '.back', function () {
		$('.playlist').slideUp();
		$('#player').fadeIn();
	});
}

function generatePlaylist() {

	for (var s in songs) {
		var song_div = document.createElement('div');
		song_div.className = "btn song";
		song_div.id = s;
		var time_title = document.createElement('p');
		time_title.className = "playlist_title";
		time_title.innerHTML = songs[s].time + " | " + songs[s].artist;
		var artist = document.createElement('p');
		artist.className = "playlist_artist";
		artist.innerHTML = songs[s].title;
		// <div class="btn round-button play"><i class="fa fa-play fa-2x" aria-hidden="true"></i></div>
		var fav = document.createElement('div');
		fav.className = 'btn song_icon song_fav';
		var i_heart = document.createElement('i');
		i_heart.className = "fa fa-heart";
		fav.appendChild(i_heart);
		var shar = document.createElement('div');
		shar.className = 'btn song_icon song_shar';
		var i_share = document.createElement('i');
		i_share.className = "fa fa-share-alt";
		shar.appendChild(i_share);

		song_div.appendChild(fav);
		song_div.appendChild(shar);
		song_div.appendChild(time_title);
		song_div.appendChild(artist);
		song_div.appendChild(document.createElement("hr"));
		$('.songs').append(song_div);
	}
}

function volumeControl() {
	var val = $('.range').val();
	$('.range').css('background', 'linear-gradient(to right, #ffffff 0%, #ffffff ' + val + '%, #ed5e74 ' + val + '%, #ed5e74 100%)');

	$('.range').on('change mousemove', function () {
		var val = $(this).val();
		$(this).css('background', 'linear-gradient(to right, #ffffff 0%, #ffffff ' + val + '%, #ed5e74 ' + val + '%, #ed5e74 100%)');
	});
}

function nextSong() {
	var id = parseInt(default_id) + 1;
	if (id == songs.length) id = 0;
	$('.bottom > h1').text(songs[id].artist);
	$('.bottom > p').text(songs[id].title);
	default_id = id;
}

function selectSong() {
	$('.song').click(function () {
		var song_id = $(this).attr('id');
		$('.bottom > h1').text(songs[song_id].artist);
		$('.bottom > p').text(songs[song_id].title);
		$('.playlist').slideUp();
		$('#player').fadeIn();
		default_id = song_id;
	});
}

function previousSong() {
	var id = default_id - 1;
	if (id < 0) id = songs.length - 1;
	$('.bottom > h1').text(songs[id].artist);
	$('.bottom > p').text(songs[id].title);
	default_id = id;
}

function togglePlaylistBlur() {
	$('.song_playlist').bind('scroll', function () {
		if (Math.ceil($(this).scrollTop()) + Math.ceil($(this).innerHeight()) >= $(this)[0].scrollHeight - 70) $('.bottom_playlist').css('visibility', 'hidden');else $('.bottom_playlist').css('visibility', 'visible');
	});
}

function songTime() {
	var can = document.getElementById('canvas'),
	    c = can.getContext('2d');

	var posX = can.width / 2,
	    posY = can.height / 2,
	    fps = 1000 / 200,
	    procent = 0,
	    oneProcent = 360 / 100,
	    result = oneProcent * Math.floor(Math.random() * 100 + 1);

	arcMove();

	function arcMove() {
		var deegres = 0;
		var acrInterval = setInterval(function () {
			deegres += 1;
			c.clearRect(0, 0, can.width, can.height);
			procent = deegres / oneProcent;

			c.beginPath();
			c.arc(posX, posY, 130, Math.PI / 180 * 270, Math.PI / 180 * (270 + 360));
			c.strokeStyle = '#fff';
			c.lineWidth = '24';
			c.stroke();

			c.beginPath();
			c.strokeStyle = '#b1b1b1';
			c.lineWidth = '24';
			c.arc(posX, posY, 130, Math.PI / 180 * 270, Math.PI / 180 * (270 + deegres));
			c.stroke();
			if (deegres >= result) clearInterval(acrInterval);
		}, fps);
	}
}

/***/ })
/******/ ]);