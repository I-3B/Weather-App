/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\r\n\r\nasync function getWeather(cityName) {\r\n    try {\r\n        let respone = await fetch(\r\n            `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6e52078bfa4e5a4c88730f298ad0b842&units=metric`,\r\n            { mode: 'cors' }\r\n        );\r\n        let raw = await respone.json();\r\n        if (raw.message) throw new Error(raw.message);\r\n        let data = getData(raw);\r\n        (0,_display__WEBPACK_IMPORTED_MODULE_0__.NewCard)(data);\r\n    } catch (err) {\r\n        if (err.toString().includes('city not found')) {\r\n            (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayError)('City not found');\r\n        } else if (err.toString().includes('Failed to fetch')) {\r\n            (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayError)('Check your internet connection');\r\n        } else {\r\n            (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayError)(err.toString());\r\n        }\r\n        console.log(err);\r\n    }\r\n}\r\nfunction formated(oldData) {\r\n    let data = oldData;\r\n    data.temp = Math.round(data.temp);\r\n    data.tempFeelLike = Math.round(data.tempFeelLike);\r\n    return data;\r\n}\r\n\r\nfunction getData(raw) {\r\n    let data = [];\r\n    data.cityName = raw.name;\r\n    data.countryName = raw.sys.country;\r\n    data.temp = raw.main.temp;\r\n    data.tempFeelLike = raw.main.feels_like;\r\n    data.Weather = raw.weather[0].main;\r\n    data.weatherDescription = raw.weather[0].description;\r\n    data.weatherIcon = raw.weather[0].icon;\r\n    data.humidity = raw.main.humidity;\r\n    data.windSpeed = raw.wind.speed;\r\n\r\n    data = formated(data);\r\n    return data;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\r\n\n\n//# sourceURL=webpack://weather-app/./src/data.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NewCard\": () => (/* binding */ NewCard),\n/* harmony export */   \"displayError\": () => (/* binding */ displayError)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\r\nconst errorMessage = document.querySelector('#error-message');\r\nconst input = document.querySelector('#city-name-input');\r\nconst container = document.querySelector('#container');\r\nfunction NewCard(data) {\r\n    container.innerHTML = `\r\n    <div id=\"weather-card\">\r\n        <div id=\"name\">${data.cityName}, ${data.countryName}</div>\r\n        <div id=\"weather-description\">\r\n            <span>${data.weatherDescription}</span>\r\n            <img\r\n                id=\"weather-image\"\r\n                src=\"http://openweathermap.org/img/wn/${data.weatherIcon}.png\"\r\n            />\r\n        </div>\r\n        <div id=\"temperature\">${data.temp}&deg</div>\r\n        <div id=\"weather-details\">\r\n            <div id=\"feels-like\">Feels like: ${data.tempFeelLike}&deg</div>\r\n            <div id=\"humidity\">Humidity: ${data.humidity}%</div>\r\n            <div id=\"wind-speed\">Wind speed: ${data.windSpeed} MPH</div>\r\n        </div>\r\n    </div>`;\r\n}\r\nfunction displayError(msg) {\r\n    errorMessage.setAttribute('style', ' visibility:visible');\r\n    errorMessage.textContent = msg;\r\n}\r\ninput.addEventListener('keyup', (e) => {\r\n    if (e.code === 'Enter') {\r\n        errorMessage.setAttribute('style', ' visibility:hidden');\r\n        (0,_data__WEBPACK_IMPORTED_MODULE_0__.default)(input.value);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/display.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/display.js");
/******/ 	
/******/ })()
;