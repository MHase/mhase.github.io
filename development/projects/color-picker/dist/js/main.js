/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// require('../css/style.scss');
// import style from '../css/main.scss';

var red, green, blue, opacity;
document.addEventListener("DOMContentLoaded", function (event) {
  setRGB();
  addColorDivs(10);

  $('input[type="text"]').keyup(resizeInput).each(resizeInput);

  $('.preview').on('click', function () {
    var copy_color = document.querySelector('#rgb');
    copy_color.select();
    document.execCommand('copy');
    copy_color.blur();

    $('.preview > span').animate({
      opacity: 1
    }, 'fast').delay(500).animate({
      opacity: 0
    }, 'fast');
  });

  $('input[type=range]').on('input', function () {
    setRGB();
  });
  $('input[type=range]').on('change', function () {
    addColorDivs(10);
  });
});

function returnColor() {
  red = $('.red_slider').val();
  green = $('.green_slider').val();
  blue = $('.blue_slider').val();
  opacity = $('.opacity_slider').val();
}

function setRGB() {
  returnColor();
  var color_rgba = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";
  $('#rgb').val(color_rgba);
  $('#hex').val('#' + genHex(red, green, blue, opacity));
  $('.color').css('background', color_rgba);
}

function genHex(red, green, blue, opacity) {
  var colors = [Math.round(Math.round(parseFloat(opacity) * 100) / 100 * 255), red, green, blue];
  var hex_text = '';
  colors.forEach(function (color) {
    var color_check_zero = parseInt(color).toString(16);
    if (color_check_zero == '0') color_check_zero = '00';
    hex_text += color_check_zero;
  });
  // var temp = Math.round(Math.round(parseFloat(opacity)*100)/100*255);
  // var hex_text = temp.toString(16) + parseInt(red).toString(16) + parseInt(green).toString(16) + parseInt(blue).toString(16);
  return hex_text;
}

function resizeInput() {
  $(this).attr('size', $(this).val().length);
}

function addColorDivs(step) {
  $('.color_box, .invert_box').html("");
  var tmp = 1 / step;
  var colors = [];
  for (var i = 1; Math.round(i * 100) / 100 > 0; i = i - tmp) {
    console.log(i);
    (function (i) {
      setTimeout(function () {
        var temp_opacity = Math.round(i * 100) / 100;
        var background_rgba = 'rgba(' + red + ', ' + green + ',' + blue + ',' + temp_opacity + ')';
        $('.color_box').append('<div class="color_div" style="background-color: ' + background_rgba + '">#' + genHex(red, green, blue, temp_opacity) + '</div>');
        var inv_red = 255 - parseInt(red);
        var inv_green = 255 - parseInt(green);
        var inv_blue = 255 - parseInt(blue);
        var background_invert = 'rgba(' + inv_red + ',' + inv_green + ',' + inv_blue + ',' + temp_opacity + ')';
        $('.invert_box').append('<div class="color_div" style="background-color: ' + background_invert + '">#' + genHex(inv_red, inv_green, inv_blue, temp_opacity) + '</div>');
      }, i * 500);
    })(i);
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);