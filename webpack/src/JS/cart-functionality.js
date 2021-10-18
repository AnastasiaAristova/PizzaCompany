const {pizzaIdArray, Pizza} = require("./helpObjects");
window.addEventListener('load', addItems);

const clear = document.getElementsByClassName('item-clear');
const total = document.getElementsByClassName('cart__total-order-price')[0];
const amountButtons = document.getElementsByClassName('amount-choice__button');
const orderBtn =document.getElementById('cart-order');
orderBtn.addEventListener('click',showOrderForm);
for(let el of amountButtons){
    el.addEventListener('click',countElementSum)
}
/**/
for(let el of clear){
    el.addEventListener('click', deleteItem)
}

function clearCartIfEmpty(){
    const table = document.getElementsByClassName('cart-table__elements')[0];
    let keys = Object.keys(sessionStorage);
    if(keys.length===0)
    {
        const emptyCart = document.createElement('div');
        emptyCart.classList.add('text-wrapper');
        emptyCart.classList.add('sub-title');
        emptyCart.innerHTML="Your cart is empty";
        table.appendChild(emptyCart);
        document.getElementsByClassName('cart__total-order')[0].classList.add('hidden');
        document.getElementsByClassName('cart__order-button')[0].classList.add('hidden');
        document.getElementById('cart-order').classList.add('hidden');
    }
}

function addItems(){
    //sessionStorage.clear();

    const table = document.getElementsByClassName('cart-table__elements')[0];
   /* let text = sessionStorage.getItem('idToCart');
    let idArray = JSON.parse(text);*/
    let keys = Object.keys(sessionStorage);
    clearCartIfEmpty();
    for(let itemId of keys)
    {
        //console.log(itemId);
        let objPizza = JSON.parse(sessionStorage.getItem(itemId));
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-elem__order');
        cartItem.id=objPizza.id;
        const cartImg = document.createElement('div');
        cartImg.classList.add('cart-elem__img');
        const img = document.createElement('img');
        img.classList.add('img');
        img.src=objPizza.img;
        cartImg.appendChild(img);
        cartItem.appendChild(cartImg);
        const descr =document.createElement('div');
        descr.classList.add('cart-elem__description');
        const cartName =document.createElement('div');
        cartName.classList.add('cart-elem__order-name');
        cartName.innerHTML=objPizza.name;
        descr.appendChild(cartName);
        cartItem.appendChild(descr);
        const amount=document.createElement('div');
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
        amountBtnN.innerHTML="-";
        amountBtnP.onclick = function () {
            this.previousElementSibling.stepUp();
        };
        amountBtnP.innerHTML="+";
        const amountInput = document.createElement('input');
        amountInput.type='number';
        amountInput.min='0';
        amountInput.max='20';
        amountInput.value=objPizza.amount;
        amountInput.readOnly=true;
        amountInput.classList.add('amount-choice__input');
        amountInput.classList.add('number');
        amountBtnP.addEventListener('click', countTotalSum);
        amountBtnP.addEventListener('click',countElementSum)
        amountBtnN.addEventListener('click', countTotalSum);
        amountBtnN.addEventListener('click',countElementSum)
        amount.appendChild(amountBtnN);
        amount.appendChild(amountInput);
        amount.appendChild(amountBtnP);
        cartItem.appendChild(amount);
        const cartPrice = document.createElement('div');
        cartPrice.classList.add('cart-elem__price');
        cartPrice.innerHTML=objPizza.price*objPizza.amount;
        cartItem.appendChild(cartPrice);
        const bin = document.createElement('div');
        bin.classList.add('item-clear');
        const binBtn = document.createElement('button');
        binBtn.classList.add('button');
        binBtn.classList.add('button_oval');
        binBtn.innerHTML='bin';
        bin.appendChild(binBtn);
        bin.addEventListener('click', deleteItem);
        cartItem.appendChild(bin);
        table.appendChild(cartItem);
    }
    countTotalSum();
}

function deleteItem(e){
    const el = e.target;
    const cartItem = el.closest('.cart-elem__order');
    sessionStorage.removeItem(cartItem.id);
    cartItem.style.display='none';
    clearCartIfEmpty();
    countTotalSum();
}
function countTotalSum(){
    let keys = Object.keys(sessionStorage);
    let sum=0;
    for(let itemId of keys) {
        let objPizza = JSON.parse(sessionStorage.getItem(itemId));
        sum+=objPizza.price * objPizza.amount;

    }
    total.children[0].innerHTML = sum;
}

function countElementSum(e){
    const tr = e.target;
    const amount = tr.closest('.cart-elem__amount');
    if(amount.children[1].value==0)
    {
        deleteItem(e);
    }
    else{
        const itemId = tr.closest('.cart-elem__order').id;
        const item = JSON.parse(sessionStorage.getItem(itemId));
        item.amount = amount.children[1].value;
        sessionStorage.setItem(itemId,JSON.stringify(item));
        amount.nextElementSibling.innerHTML= amount.children[1].value * item.price;
        countTotalSum();
    }
}

// function initCountItems(){
//     const cartItems = document.getElementsByClassName('cart-elem__order');
//     for(let el in cartItems){
//         console.log(el);
//         el.querySelector('.cart-elem__price').innerHTML=
//             JSON.parse(sessionStorage.getItem(el.id)).amount * JSON.parse(sessionStorage.getItem(el.id)).price;
//         console.log(el.querySelector('.cart-elem__price').innerHTML);
//     }
// }

function showOrderForm(){
    document.getElementsByClassName('cart__order-info')[0].classList.toggle('hidden');
}