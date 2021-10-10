/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CSS/style.scss":
/*!****************************!*\
  !*** ./src/CSS/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack/./src/CSS/style.scss?");

/***/ }),

/***/ "./src/JS/cart-functionality.js":
/*!**************************************!*\
  !*** ./src/JS/cart-functionality.js ***!
  \**************************************/
/***/ (() => {

eval("const clear = document.getElementsByClassName('item-clear');\r\nconst total = document.getElementsByClassName('cart__total-order-price')[0];\r\nconst amountButtons = document.getElementsByClassName('amount-choice__button');\r\ndocument.getElementById('cart-order').addEventListener('click',showOrderForm);\r\nfor(let el of amountButtons){\r\n    el.addEventListener('click', countTotalSum);\r\n    //el.addEventListener('click',countElementSum)\r\n}\r\n/**/\r\nfor(let el of clear){\r\n    el.addEventListener('click', deleteItem)\r\n}\r\n\r\nfunction deleteItem(e){\r\n    const el = e.target;\r\n    const cartItem = el.closest('.cart-elem__order');\r\n    cartItem.style.display='none';\r\n}\r\nfunction countTotalSum(e){\r\n    const arr= document.getElementsByClassName('cart-elem__price');\r\n    let sum=0;\r\n    for(let el of arr){\r\n        sum+=Number(el.innerHTML);\r\n    }\r\n    total.children[0].innerHTML = sum;\r\n}\r\n\r\nfunction countElementSum(e){\r\n    const amount = e.target.closest('.cart-elem__amount');\r\n}\r\n\r\nfunction showOrderForm(){\r\n    document.getElementsByClassName('cart__order-info')[0].classList.toggle('hidden');\r\n}\n\n//# sourceURL=webpack://webpack/./src/JS/cart-functionality.js?");

/***/ }),

/***/ "./src/JS/index.js":
/*!*************************!*\
  !*** ./src/JS/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CSS_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CSS/style.scss */ \"./src/CSS/style.scss\");\n/* harmony import */ var _menu_functionality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-functionality */ \"./src/JS/menu-functionality.js\");\n/* harmony import */ var _menu_functionality__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_functionality__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _send_info_to_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./send-info-to-db */ \"./src/JS/send-info-to-db.js\");\n/* harmony import */ var _send_info_to_db__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_send_info_to_db__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _cart_functionality__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-functionality */ \"./src/JS/cart-functionality.js\");\n/* harmony import */ var _cart_functionality__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cart_functionality__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\nconsole.log('GVK');\r\n\n\n//# sourceURL=webpack://webpack/./src/JS/index.js?");

/***/ }),

/***/ "./src/JS/menu-functionality.js":
/*!**************************************!*\
  !*** ./src/JS/menu-functionality.js ***!
  \**************************************/
/***/ (() => {

eval("const menuOrderBtn = document.getElementsByClassName('menu-order-btn');\r\nfor(let el of menuOrderBtn)\r\n{\r\n    el.addEventListener('click',processChoice);\r\n}\r\nconst menuAmountOrder=document.getElementsByClassName('menu-elem__multiple-choice');\r\nfor(let el of menuAmountOrder)\r\n{\r\n    el.addEventListener('click',function(e) {\r\n\r\nconst amount = e.target.closest('.menu-elem__multiple-choice');\r\n        console.log(amount);\r\n        console.log(amount.children[1].value);\r\n        if(amount.children[1].value === '0')\r\n            cancelChoice(amount);\r\n    });\r\n}\r\n\r\nfunction processChoice(event){\r\n    const curBtn = event.target;\r\n    const hidBtn = curBtn.nextElementSibling;\r\n    hidBtn.classList.toggle('elem-z1');\r\n    hidBtn.classList.toggle('elem-z2');\r\n    curBtn.classList.toggle('elem-z1');\r\n    curBtn.classList.toggle('elem-z2');\r\n}\r\n\r\nfunction cancelChoice(event){\r\n    const curBtn = event;\r\n    const hidBtn = curBtn.previousElementSibling;\r\n    hidBtn.classList.toggle('elem-z1');\r\n    hidBtn.classList.toggle('elem-z2');\r\n    curBtn.classList.toggle('elem-z1');\r\n    curBtn.classList.toggle('elem-z2');\r\n}\n\n//# sourceURL=webpack://webpack/./src/JS/menu-functionality.js?");

/***/ }),

/***/ "./src/JS/send-info-to-db.js":
/*!***********************************!*\
  !*** ./src/JS/send-info-to-db.js ***!
  \***********************************/
/***/ (() => {

eval("//$('.menu-order-btn').click( saveChoice );\r\nfunction saveChoice(e) {\r\n    //const amount = $(this).closest('.amount-choice').children[1].value;\r\n    const amount = e.target.nextElementSibling.children[1].value;\r\n    const id = e.target.closest('.menu-table__elem');\r\n\r\n    $.ajax({\r\n        type:'POST',\r\n        url:'add-to-cart',\r\n        data:{\r\n            id:id,\r\n            amount: amount,\r\n            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),\r\n            //action: 'delete'\r\n        },\r\n        dataType: 'json',\r\n        success:function(){\r\n            console.log('success');\r\n        },\r\n        error : function(xhr,errmsg,err) {\r\n            alert(id)\r\n            $('#results').html(\"<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: \"+errmsg+\r\n                \" <a href='#' class='close'>&times;</a></div>\"); // add the error to the dom\r\n            console.log(xhr.status + \": \" + xhr.responseText); // provide a bit more info about the error to the console\r\n        }\r\n    });\r\n\r\n}\n\n//# sourceURL=webpack://webpack/./src/JS/send-info-to-db.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/JS/index.js");
/******/ 	
/******/ })()
;