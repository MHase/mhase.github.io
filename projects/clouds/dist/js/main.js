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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {

    // hide elements for animation
    $('.left, .right, .tabs, .button, .modal').hide();

    // animation if not mobile
    if ($(window).width() > 450) {
        $('.left').show('slide', {
            direction: 'right'
        }, 500, function () {
            if (ie()) // if IE -> avoid svg css animation
                $('.line').removeClass('line');
            $('.line').addClass('move_line');

            $('.right').show('slide', {
                direction: 'left'
            }, 500, function () {
                $('.tabs').fadeIn('slow');
            });
            $('.button').fadeIn('slow');
        });
    } else {
        $('.right, .button').show();
        $('.right').addClass('center');
    }

    // array for month selection
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (var i = 0; i < months.length; i++) {
        $('#month').append($("<option></option>").attr("value", months[i]).text(months[i]));
    } // select default tab
    $('.tab[data-value="2"]').addClass('tab_active');

    // toggle tabs
    $('.tab').click(function () {
        $('.tab').removeClass('tab_active');
        $(this).addClass('tab_active');
    });

    //select default 'radio button'
    $('.gender').find('div').addClass('default');
    $('#male.radio, #male.radio *').addClass('selected').find('.radio_active').css({
        'visibility': 'visible'
    });
    var gender = 'male';

    //select radio, deactivate another
    $('.radio').click(function () {
        $('.radio, .radio *').removeClass('selected');
        $('.radio, .radio *').find('.radio_active').css({
            'visibility': 'hidden'
        });

        $(this).addClass('selected');
        $(this).find('div').addClass('selected');
        $(this).find('.radio_active').css({
            'visibility': 'visible'
        });
        gender = $(this).attr('data-value');
    });

    // console.log($('.directional select').val());
    // console.log($('.mobile input').val());
    // console.log(gender);
    // console.log($('#day').val() + ' - ' + $('#month').val() + ' - ' + $('#year').val());

    // prevent form from submitting and open modal after html5 validation
    $('form').submit(function (e) {
        e.preventDefault();
        var modal_message = 'Thank you <b>' + $('.name input').val() + '</b></br>(born <b>' + $('#day').val() + ' - ' + $('#month').val() + ' - ' + $('#year').val() + ')</b></br> for completing the form</br>I will call your phone <b>+' + $('.directional select').val() + $('.mobile input').val() + '</b></br>Everything is OK :)';
        $('#modal_message').html(modal_message);
        $('.modal, .body_inactive').show();
    });

    //close modal after button click
    $('.modal .button').click(function () {
        $('.modal, .body_inactive').hide();
        $('#modal_message').html();
    });

    // submit form with purple div
    $('#submit_div').click(function () {
        $('#submit_btn').click();
    });
});

// function for checking if our browser is IE
function ie() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) return true;else return false;
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