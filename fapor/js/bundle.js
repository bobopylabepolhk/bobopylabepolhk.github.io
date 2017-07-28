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


Object.defineProperty(exports, "__esModule", {
    value: true
});
function addClass(el, classNameToAdd) {
    el.className += ' ' + classNameToAdd;
}

function removeClass(el, classNameToRemove) {
    var elClass = ' ' + el.className + ' ';
    while (elClass.indexOf(' ' + classNameToRemove + ' ') !== -1) {
        elClass = elClass.replace(' ' + classNameToRemove + ' ', '');
    }
    el.className = elClass;
}

exports.addClass = addClass;
exports.removeClass = removeClass;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _setWidth = __webpack_require__(2);

var _sliderControls = __webpack_require__(3);

var _navigationDotsAdder = __webpack_require__(5);

function initializeSlider(config) {

    var next = document.querySelector('.' + config.nextClassName);
    var prev = document.querySelector('.' + config.prevClassName);
    var slides = document.querySelectorAll('.' + config.slidesClassName);
    var slider = document.querySelector('.' + config.sliderContainerClassName);

    (0, _setWidth.setSlideWidth)(slides.length, slides);

    (0, _setWidth.setContainerWidth)(slides.length, slider);

    if (config.navigation === true) {
        (0, _navigationDotsAdder.navDotsAdder)(config.sliderNavContainerClassName, slides, config.navigationClassName);
    }

    if(config.navigation === true) {
        var navigation = document.querySelectorAll('.' + config.navigationClassName);
    }

    (0, _sliderControls.initializeControls)(next, prev, slides, slider, navigation, config.autoSlideTimer, config.autoSlide, config.clickableDots, config.currentSlideClassName, config.navigation);
}

initializeSlider({
    nextClassName: 'header-slider__next',
    prevClassName: 'header-slider__prev',
    slidesClassName: 'header-slider__slide',
    sliderContainerClassName: 'header-slider__wrapper',
    navigationClassName: 'slider-navigation__check',
    sliderNavContainerClassName:'header-slider__navigation',
    autoSlideTimer: 5000,
    autoSlide: true,
    clickableDots: true,
    currentSlideClassName: 'active',
    navigation: true
});


initializeSlider({
    nextClassName: 'clients-slider__next',
    prevClassName: 'clients-slider__prev',
    slidesClassName: 'clients-slider__slide',
    sliderContainerClassName: 'clients-slider__wrapper',
    autoSlideTimer: 5000,
    autoSlide: false,
    currentSlideClassName: 'active',
    navigation: false
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function setSlideWidth(slidesNumber, slidesArray) {
    [].forEach.call(slidesArray, function (elem) {
        elem.style.width = 100 / slidesNumber + "%";
    });
}

function setContainerWidth(slidesNumber, containerName) {
    containerName.style.width = slidesNumber * 100 + "%";
}

exports.setSlideWidth = setSlideWidth;
exports.setContainerWidth = setContainerWidth;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initializeControls = initializeControls;

var _navigationProgress = __webpack_require__(4);

function initializeControls(next, prev, slidesArray, slider, navigationDotsArray, timer, autoSliding, clickableDots, currentSlideClassName, navigation) {

    var timesClicked = 0;

    if (navigation === true) {
        (0, _navigationProgress.classAdder)(navigationDotsArray, timesClicked, currentSlideClassName);
    }

    next.addEventListener('click', function () {

        if (timesClicked !== slidesArray.length - 1) {
            timesClicked++;
            slider.style.left = '-' + timesClicked * 100 + '%';

            if (navigation === true) {
                (0, _navigationProgress.classRemover)(navigationDotsArray, currentSlideClassName);
                (0, _navigationProgress.classAdder)(navigationDotsArray, timesClicked, currentSlideClassName);
            }
        }
    });

    prev.addEventListener('click', function () {

        if (timesClicked !== 0) {
            timesClicked--;
            slider.style.left = '-' + timesClicked * 100 + '%';

            if (navigation === true) {
                (0, _navigationProgress.classRemover)(navigationDotsArray, currentSlideClassName);
                (0, _navigationProgress.classAdder)(navigationDotsArray, timesClicked, currentSlideClassName);
            }
        }
    });

    function controllableNavDots() {
        var _loop = function _loop(i) {
            navigationDotsArray[i].addEventListener('click', function () {
                slider.style.left = '-' + i * 100 + '%';
                timesClicked = i;

                if (navigation === true) {
                    (0, _navigationProgress.classRemover)(navigationDotsArray, currentSlideClassName);
                    (0, _navigationProgress.classAdder)(navigationDotsArray, timesClicked, currentSlideClassName);
                }
            });
        };

        for (var i = 0; i < navigationDotsArray.length; i++) {
            _loop(i);
        }
    };

    if (clickableDots === true) {
        controllableNavDots();
    }

    function autoSlide() {
        setInterval(function () {
            if (timesClicked !== slidesArray.length - 1) {
                timesClicked++;
                slider.style.left = '-' + timesClicked * 100 + '%';

                if (navigation === true) {
                    (0, _navigationProgress.classRemover)(navigationDotsArray, currentSlideClassName);
                    (0, _navigationProgress.classAdder)(navigationDotsArray, timesClicked, currentSlideClassName);
                }
            }
        }, timer);
    }

    if (autoSliding === true) {
        autoSlide(timer);
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.classRemover = exports.classAdder = undefined;

var _crossbrowserClasslistFunctions = __webpack_require__(0);

function classAdder(arr, counter, className) {
    //arr[counter].className += ` ${className}`;
    (0, _crossbrowserClasslistFunctions.addClass)(arr[counter], className);
}

function classRemover(array, className) {

    [].forEach.call(array, function (element) {
        //element.classList.remove(className);
        (0, _crossbrowserClasslistFunctions.removeClass)(element, className);
    });
}

exports.classAdder = classAdder;
exports.classRemover = classRemover;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.navDotsAdder = navDotsAdder;

var _crossbrowserClasslistFunctions = __webpack_require__(0);

function navDotsAdder(navDotsContainerClassName, slidesArr, navDotClassName) {
    var navDotsContainer = document.querySelector('.' + navDotsContainerClassName);

    for (var i = 0; i < slidesArr.length; i++) {
        var navDot = document.createElement('div');
        //navDot.className += ` ${navDotClassName}`;
        (0, _crossbrowserClasslistFunctions.addClass)(navDot, navDotClassName);
        navDotsContainer.appendChild(navDot);
    }
}

/***/ })
/******/ ]);