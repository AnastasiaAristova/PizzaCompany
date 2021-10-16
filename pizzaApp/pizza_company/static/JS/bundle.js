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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {pizzaIdArray, Pizza} = __webpack_require__(/*! ./helpObjects */ \"./src/JS/helpObjects.js\");\r\nwindow.addEventListener('load', addItems);\r\n\r\nconst clear = document.getElementsByClassName('item-clear');\r\nconst total = document.getElementsByClassName('cart__total-order-price')[0];\r\nconst amountButtons = document.getElementsByClassName('amount-choice__button');\r\n//const orderBtn =document.getElementById('cart-order');\r\n//orderBtn.addEventListener('click',showOrderForm);\r\nfor(let el of amountButtons){\r\n    el.addEventListener('click', countTotalSum);\r\n    //el.addEventListener('click',countElementSum)\r\n}\r\n/**/\r\nfor(let el of clear){\r\n    el.addEventListener('click', deleteItem)\r\n}\r\n\r\nfunction addItems(){\r\n    //sessionStorage.clear();\r\n\r\n    const table = document.getElementsByClassName('cart-table__elements')[0];\r\n   /* let text = sessionStorage.getItem('idToCart');\r\n    let idArray = JSON.parse(text);*/\r\n    let keys = Object.keys(sessionStorage);\r\n    for(let itemId of keys)\r\n    {\r\n        console.log(itemId);\r\n        let objPizza = JSON.parse(sessionStorage.getItem(itemId));\r\n        const cartItem = document.createElement('div');\r\n        cartItem.classList.add('cart-elem__order');\r\n        cartItem.id=objPizza.id;\r\n        const cartImg = document.createElement('div');\r\n        cartImg.classList.add('cart-elem__img');\r\n        const img = document.createElement('img');\r\n        img.classList.add('img');\r\n        img.src=objPizza.img;\r\n        cartImg.appendChild(img);\r\n        cartItem.appendChild(cartImg);\r\n        const descr =document.createElement('div');\r\n        descr.classList.add('cart-elem__description');\r\n        const cartName =document.createElement('div');\r\n        cartName.classList.add('cart-elem__order-name');\r\n        cartName.innerHTML=objPizza.name;\r\n        descr.appendChild(cartName);\r\n        cartItem.appendChild(descr);\r\n        const amount=document.createElement('div');\r\n        amount.classList.add('cart-elem__amount');\r\n        amount.classList.add('amount-choice');\r\n        const amountBtnP = document.createElement('button');\r\n        const amountBtnN = document.createElement('button');\r\n        amountBtnP.classList.add('button');\r\n        amountBtnN.classList.add('button');\r\n        amountBtnP.classList.add('button-menu');\r\n        amountBtnN.classList.add('button-menu');\r\n        amountBtnP.classList.add('amount-choice__button');\r\n        amountBtnN.classList.add('amount-choice__button');\r\n        amountBtnN.onclick = function () {\r\n            this.nextElementSibling.stepDown();\r\n        };\r\n        amountBtnN.innerHTML=\"-\";\r\n        amountBtnP.onclick = function () {\r\n            this.previousElementSibling.stepUp();\r\n        };\r\n        amountBtnP.innerHTML=\"+\";\r\n        const amountInput = document.createElement('input');\r\n        amountInput.type='number';\r\n        amountInput.min='0';\r\n        amountInput.max='20';\r\n        amountInput.value=objPizza.amount;\r\n        amountInput.classList.add('amount-choice__input');\r\n        amountInput.classList.add('number');\r\n        amount.appendChild(amountBtnN);\r\n        amount.appendChild(amountInput);\r\n        amount.appendChild(amountBtnP);\r\n        cartItem.appendChild(amount);\r\n        const cartPrice = document.createElement('div');\r\n        cartPrice.classList.add('cart-elem__price');\r\n        cartPrice.innerHTML=objPizza.price;\r\n        cartItem.appendChild(cartPrice);\r\n        const bin = document.createElement('div');\r\n        bin.classList.add('item-clear');\r\n        const binBtn = document.createElement('button');\r\n        binBtn.classList.add('button');\r\n        binBtn.classList.add('button_oval');\r\n        binBtn.innerHTML='bin';\r\n        bin.appendChild(binBtn);\r\n        cartItem.appendChild(bin);\r\n        table.appendChild(cartItem);\r\n    }\r\n}\r\n\r\nfunction deleteItem(e){\r\n    const el = e.target;\r\n    const cartItem = el.closest('.cart-elem__order');\r\n    cartItem.style.display='none';\r\n}\r\nfunction countTotalSum(e){\r\n    const arr= document.getElementsByClassName('cart-elem__price');\r\n    let sum=0;\r\n    for(let el of arr){\r\n        sum+=Number(el.innerHTML);\r\n    }\r\n    total.children[0].innerHTML = sum;\r\n}\r\n\r\nfunction countElementSum(e){\r\n    const amount = e.target.closest('.cart-elem__amount');\r\n}\r\n\r\nfunction showOrderForm(){\r\n    document.getElementsByClassName('cart__order-info')[0].classList.toggle('hidden');\r\n}\n\n//# sourceURL=webpack://webpack/./src/JS/cart-functionality.js?");

/***/ }),

/***/ "./src/JS/helpObjects.js":
/*!*******************************!*\
  !*** ./src/JS/helpObjects.js ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports.pizzaIdArray=[];\r\nmodule.exports.Pizza = class{\r\n    constructor(id, img, name, price,amount) {\r\n        this.id = id;\r\n        this.img = img;\r\n        this.name = name;\r\n        this.price = price;\r\n        this.amount = amount;\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack/./src/JS/helpObjects.js?");

/***/ }),

/***/ "./src/JS/index.js":
/*!*************************!*\
  !*** ./src/JS/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CSS_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CSS/style.scss */ \"./src/CSS/style.scss\");\n/* harmony import */ var _menu_functionality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-functionality */ \"./src/JS/menu-functionality.js\");\n/* harmony import */ var _menu_functionality__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_functionality__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _send_info_to_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./send-info-to-db */ \"./src/JS/send-info-to-db.js\");\n/* harmony import */ var _send_info_to_db__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_send_info_to_db__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _cart_functionality__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-functionality */ \"./src/JS/cart-functionality.js\");\n/* harmony import */ var _cart_functionality__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cart_functionality__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpObjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpObjects */ \"./src/JS/helpObjects.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/JS/index.js?");

/***/ }),

/***/ "./src/JS/menu-functionality.js":
/*!**************************************!*\
  !*** ./src/JS/menu-functionality.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {pizzaIdArray, Pizza} = __webpack_require__(/*! ./helpObjects */ \"./src/JS/helpObjects.js\");\r\nconst menuOrderBtn = document.getElementsByClassName('menu-order-btn');\r\nwindow.addEventListener('load', showOrderedItems);\r\n\r\n//window.addEventListener('beforeunload',storePizzaIds);\r\n\r\nfunction storePizzaIds(){\r\n    //sessionStorage.setItem('idToCart',JSON.stringify(pizzaIdArray));\r\n}\r\nfor(let el of menuOrderBtn)\r\n{\r\n    el.addEventListener('click',showAmountChoice);\r\n    el.addEventListener('click',sendToCart);\r\n}\r\nconst menuAmountOrder=document.getElementsByClassName('menu-elem__multiple-choice');\r\nfor(let el of menuAmountOrder)\r\n{\r\n    el.addEventListener('click',sendToCart);\r\n    el.addEventListener('click',function(e) {\r\n\r\nconst amount = e.target.closest('.menu-elem__multiple-choice');\r\n        if(amount.children[1].value === '0')\r\n            cancelChoice(amount);\r\n    });\r\n}\r\n\r\nfunction showOrderedItems(){\r\n    let keys = Object.keys(sessionStorage);\r\n    for(let itemId of keys) {\r\n        console.log(itemId);\r\n        let objPizza = JSON.parse(sessionStorage.getItem(itemId));\r\n        let menuItems = document.getElementsByClassName('menu-table__elem');\r\n        for(let elem of menuItems)\r\n        {\r\n            if(elem.id===objPizza.id)\r\n            {\r\n                const cur = elem.querySelector('.menu-order-btn');\r\n                const hid = elem.querySelector('.menu-elem__multiple-choice');\r\n                hid.classList.toggle('elem-z1');\r\n                hid.classList.toggle('elem-z2');\r\n                cur.classList.toggle('elem-z1');\r\n                cur.classList.toggle('elem-z2');\r\n                elem.querySelector('input').value=objPizza.amount;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction sendToCart(e){\r\n    const target = e.target;\r\n    const menuItem = target.closest('.menu-table__elem');\r\n    let orderedPizza = new Pizza(menuItem.id,menuItem.querySelector('.menu-elem__img').src,\r\n        menuItem.querySelector('.menu-elem__name').querySelector('.sub-title').innerHTML,\r\n        menuItem.querySelector('.menu-elem__price').innerHTML,menuItem.querySelector('input').value);\r\n    //pizzaIdArray.push(menuItem.id);\r\n    console.log(JSON.stringify(orderedPizza));\r\n    sessionStorage.setItem(menuItem.id,JSON.stringify(orderedPizza));\r\n\r\n    /*localStorage.setItem('imgSrc', menuItem.querySelector('.menu-elem__img').src);\r\n    localStorage.setItem('itemName',menuItem.querySelector('.menu-elem__name').querySelector('.sub-title').innerHTML);\r\n    localStorage.setItem('itemPrice',menuItem.querySelector('.menu-elem__price').innerHTML);*/\r\n\r\n}\r\n\r\nfunction showAmountChoice(event){\r\n    const curBtn = event.target;\r\n    console.log(curBtn)\r\n    const hidBtn = curBtn.nextElementSibling;\r\n\r\n    hidBtn.classList.toggle('elem-z1');\r\n    hidBtn.classList.toggle('elem-z2');\r\n    curBtn.classList.toggle('elem-z1');\r\n    curBtn.classList.toggle('elem-z2');\r\n}\r\n\r\nfunction cancelChoice(event){\r\n    const curBtn = event;\r\n    const hidBtn = curBtn.previousElementSibling;\r\n    hidBtn.classList.toggle('elem-z1');\r\n    hidBtn.classList.toggle('elem-z2');\r\n    curBtn.classList.toggle('elem-z1');\r\n    curBtn.classList.toggle('elem-z2');\r\n}\n\n//# sourceURL=webpack://webpack/./src/JS/menu-functionality.js?");

/***/ }),

/***/ "./src/JS/send-info-to-db.js":
/*!***********************************!*\
  !*** ./src/JS/send-info-to-db.js ***!
  \***********************************/
/***/ (() => {

eval("    //For getting CSRF token\r\nfunction getCookie(name) {\r\n       var cookieValue = null;\r\n       if (document.cookie && document.cookie != '') {\r\n         var cookies = document.cookie.split(';');\r\n         for (var i = 0; i < cookies.length; i++) {\r\n         var cookie = jQuery.trim(cookies[i]);\r\n         // Does this cookie string begin with the name we want?\r\n         if (cookie.substring(0, name.length + 1) == (name + '=')) {\r\n             cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\r\n             break;\r\n          }\r\n     }\r\n }\r\n return cookieValue;\r\n}\r\n$('.menu-order-btn').click( saveChoice );\r\nfunction saveChoice(e) {\r\n    var token = getCookie('csrftoken');\r\n    const amount = e.target.nextElementSibling.children[1].value;\r\n    const id = e.target.closest('.menu-table__elem').id;\r\n\r\n    $.ajax({\r\n        type:'POST',\r\n        url:'addpizzatocart/',\r\n        data:{\r\n            id:id,\r\n            amount: amount,\r\n            csrfmiddlewaretoken: token,\r\n            //action: 'delete'\r\n        },\r\n        dataType: 'json',\r\n        success:function(){\r\n            console.log('success');\r\n        },\r\n        error : function(xhr,errmsg,err) {\r\n            $('#results').html(\"<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: \"+errmsg+\r\n                \" <a href='#' class='close'>&times;</a></div>\"); // add the error to the dom\r\n            console.log(xhr.status + \": \" + xhr.responseText); // provide a bit more info about the error to the console\r\n        }\r\n    });\r\n\r\n}\n\n//# sourceURL=webpack://webpack/./src/JS/send-info-to-db.js?");

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