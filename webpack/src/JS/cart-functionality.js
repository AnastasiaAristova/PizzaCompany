const {pizzaIdArray, Pizza} = require("./helpObjects");
window.addEventListener('load', addItems);
//TODO: переменные не используются, нужно их удалять, чтобы не засорять код
let isCart = false;
const saveBtn = document.querySelector('.button-save');
//TODO: инициализацию переменных можно вынести в отдельный метод
const clear = document.getElementsByClassName('item-clear');
const total = document.getElementsByClassName('cart__total-order-price')[0];
const amountButtons = document.getElementsByClassName('amount-choice__button');
const orderBtn = document.getElementById('cart-order');
if (orderBtn)
    orderBtn.addEventListener('click', showOrderForm);
//TODO: если переменная цикла (let el) не меняется в ходе цикла, то лучше использовать const вместо let (касается всех таких переменных)
for (let el of amountButtons) {
    el.addEventListener('click', countElementSum)
}

/**/
for (let el of clear) {
    el.addEventListener('click', deleteItem)
}

//TODO: функция где-то вызывается? Если нет, то нужно удалить
function clearCart() {
    sessionStorage.clear();
    const emptyCart = document.createElement('div');
    //TODO: названия классов нужно вынести в отдельные переменные и работать с переменными
    emptyCart.classList.add('text-wrapper');
    emptyCart.classList.add('sub-title');
    emptyCart.innerHTML = "Your cart is empty";
}

//TODO: функция где-то вызывается? Если нет, то нужно удалить
function setCart(e) {
    const menuItem = document.getElementsByClassName('cart-elem__order');
    for (let el of menuItem) {
        let orderedPizza = new Pizza(el.id,
            el.querySelector('.cart-elem__img').querySelector('.img').src,
            el.querySelector('.cart-elem__order-name').innerHTML,
            el.querySelector('.cart-elem__price').innerHTML, el.querySelector('input').value);
        sessionStorage.setItem(el.id, JSON.stringify(orderedPizza));
    }
}

function clearCartIfEmpty() {
    const table = document.querySelector('.cart-table__elements');
    let keys = Object.keys(sessionStorage);
    if (keys.length == 0) {
        const emptyCart = document.createElement('div');
        emptyCart.classList.add('text-wrapper');
        emptyCart.classList.add('sub-title');
        //TODO:  текст "Your cart is empty" нужно вынести в отдельную переменную с осмысленным названием
        emptyCart.innerHTML = "Your cart is empty";
        try {
            table.append(emptyCart);
            //TODO:  Названия все классов нужно вынести в отдельные переменные, чтобы не пришлось менять код в куче мест, если название класса поменяется
            document.getElementsByClassName('cart__total-order')[0].classList.add('hidden');
            document.getElementsByClassName('cart__order-button')[0].classList.add('hidden');
            document.getElementById('cart-order').classList.add('hidden');
        } catch {
            //TODO: есть console.error()
            console.log('caught error')
        }

    }
}

function addItems() {
    const table = document.getElementsByClassName('cart-table__elements')[0];
    let keys = Object.keys(sessionStorage);
    console.log(localStorage.getItem('isOrderAgain'))
    clearCartIfEmpty();
    //TODO: вынести в отдельную функцию
    for (let itemId of keys) {
        //TODO: нужно разбить на отдельные маленькие функции
        let objPizza = JSON.parse(sessionStorage.getItem(itemId));
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-elem__order');
        cartItem.id = objPizza.id;
        const cartImg = document.createElement('div');
        cartImg.classList.add('cart-elem__img');
        const img = document.createElement('img');
        img.classList.add('img');
        img.src = objPizza.img;
        cartImg.appendChild(img);
        cartItem.appendChild(cartImg);
        const descr = document.createElement('div');
        descr.classList.add('cart-elem__description');
        const cartName = document.createElement('div');
        cartName.classList.add('cart-elem__order-name');
        cartName.innerHTML = objPizza.name;
        descr.appendChild(cartName);
        cartItem.appendChild(descr);
        const amount = document.createElement('div');
        amount.classList.add('cart-elem__amount');
        amount.classList.add('amount-choice');
        const amountBtnP = document.createElement('button');
        const amountBtnN = document.createElement('button');
        amountBtnP.classList.add('button');
        amountBtnN.classList.add('button');
        amountBtnP.classList.add('button-menu');
        amountBtnN.classList.add('button-menu');
        amountBtnP.classList.add('amount-choice__button');
        amountBtnN.classList.add('amount-choice__button');
        amountBtnN.onclick = function () {
            this.nextElementSibling.stepDown();
        };
        amountBtnN.innerHTML = "-";
        amountBtnP.onclick = function () {
            this.previousElementSibling.stepUp();
        };
        amountBtnP.innerHTML = "+";
        const amountInput = document.createElement('input');
        amountInput.type = 'number';
        amountInput.min = '0';
        amountInput.max = '20';
        amountInput.value = objPizza.amount;
        amountInput.readOnly = true;
        amountInput.classList.add('amount-choice__input');
        amountInput.classList.add('number');
        amountBtnP.addEventListener('click', countTotalSum);
        amountBtnP.addEventListener('click', countElementSum)
        amountBtnN.addEventListener('click', countTotalSum);
        amountBtnN.addEventListener('click', countElementSum)
        amount.appendChild(amountBtnN);
        amount.appendChild(amountInput);
        amount.appendChild(amountBtnP);
        cartItem.appendChild(amount);
        const cartPrice = document.createElement('div');
        cartPrice.classList.add('cart-elem__price');
        cartPrice.classList.add('money');
        if (localStorage.getItem('isOrderAgain'))
            cartPrice.textContent = objPizza.price;
        else cartPrice.textContent = objPizza.price * objPizza.amount + '$';
        cartItem.appendChild(cartPrice);
        const bin = document.createElement('div');
        bin.classList.add('item-clear');
        const binBtn = document.createElement('button');
        binBtn.classList.add('button');
        binBtn.classList.add('button_oval');
        binBtn.innerHTML = 'bin';
        bin.appendChild(binBtn);
        bin.addEventListener('click', deleteItem);
        cartItem.appendChild(bin);
        table.appendChild(cartItem);
    }

    if (localStorage.getItem('isOrderAgain'))
        total.children[0].textContent = localStorage.getItem('total');
    else countTotalSum();
    localStorage.removeItem('isOrderAgain');
    localStorage.removeItem('total');
    localStorage.removeItem('goCart');
}

function deleteItem(e) {
    const el = e.target;
    const cartItem = el.closest('.cart-elem__order');
    sessionStorage.removeItem(cartItem.id);
    cartItem.style.display = 'none';
    clearCartIfEmpty();
    changeTotalSum();
}

function countTotalSum() {
    let keys = Object.keys(sessionStorage);
    let sum = 0;
    //TODO: Для суммирования можно использовать метод массивов reduce()
    for (let itemId of keys) {
        let objPizza = JSON.parse(sessionStorage.getItem(itemId));
        sum += objPizza.price * objPizza.amount;
    }
    try {
        total.children[0].innerHTML = sum + '$';
    } catch {
        console.log('another');
    }
}

function countElementSum(e) {
    const tr = e.target;
    const amount = tr.closest('.cart-elem__amount');
    //TODO: Почему происходит обращение к amount.children[1]? Если должно быть обращение к элементу с индексом 1, то 1 нужно вынести в отдельную переменную
    if (amount.children[1].value == 0) {
        deleteItem(e);
    } else {
        const itemId = tr.closest('.cart-elem__order').id;
        const item = JSON.parse(sessionStorage.getItem(itemId));
        item.amount = amount.children[1].value;
        sessionStorage.setItem(itemId, JSON.stringify(item));
        if (localStorage.getItem('currency') !== 'usd') {
            amount.nextElementSibling.innerHTML = amount.children[1].value * Math.round(item.price * localStorage.getItem('curNum')) + '€';
        } else amount.nextElementSibling.innerHTML = amount.children[1].value * item.price + '$';
        changeTotalSum();
    }

}

function changeTotalSum() {
    const cartPrice = document.getElementsByClassName('cart-elem__price');
    const cartElem = document.getElementsByClassName('cart-elem__order');
    let sum = 0;
    let keys = Object.keys(sessionStorage);
    for (let key of keys) {
        for (let el of cartElem) {
            if (key == el.id) {
                sum += Number(el.querySelector('.cart-elem__price').textContent.replace(/\s/g, '').slice(0, -1));
                break;
            }
        }
    }
    if (localStorage.getItem('currency') !== 'usd')
        total.children[0].innerHTML = sum + '€';
    else total.children[0].innerHTML = sum + '$';
}

function showOrderForm() {
    document.getElementsByClassName('cart__order-info')[0].classList.toggle('hidden');
}