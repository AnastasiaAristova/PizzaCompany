const {pizzaIdArray, Pizza} = require("./helpObjects");
const menuOrderBtn = document.getElementsByClassName('menu-order-btn');
window.addEventListener('load', showOrderedItems);

//window.addEventListener('beforeunload',storePizzaIds);

function storePizzaIds(){
    //sessionStorage.setItem('idToCart',JSON.stringify(pizzaIdArray));
}
for(let el of menuOrderBtn)
{
    el.addEventListener('click',showAmountChoice);
    el.addEventListener('click',sendToCart);
}
const menuAmountOrder=document.getElementsByClassName('menu-elem__multiple-choice');
for(let el of menuAmountOrder)
{
    el.addEventListener('click',sendToCart);
    el.addEventListener('click',function(e) {

const amount = e.target.closest('.menu-elem__multiple-choice');
        if(amount.children[1].value === '0')
            cancelChoice(amount);
    });
}

function showOrderedItems(){
    let keys = Object.keys(sessionStorage);
    for(let itemId of keys) {
        console.log(itemId);
        let objPizza = JSON.parse(sessionStorage.getItem(itemId));
        let menuItems = document.getElementsByClassName('menu-table__elem');
        for(let elem of menuItems)
        {
            if(elem.id===objPizza.id)
            {
                const cur = elem.querySelector('.menu-order-btn');
                const hid = elem.querySelector('.menu-elem__multiple-choice');
                hid.classList.toggle('elem-z1');
                hid.classList.toggle('elem-z2');
                cur.classList.toggle('elem-z1');
                cur.classList.toggle('elem-z2');
                elem.querySelector('input').value=objPizza.amount;
                break;
            }
        }
    }
}

function sendToCart(e){
    const target = e.target;
    const menuItem = target.closest('.menu-table__elem');
    let orderedPizza = new Pizza(menuItem.id,menuItem.querySelector('.menu-elem__img').src,
        menuItem.querySelector('.menu-elem__name').querySelector('.sub-title').innerHTML,
        menuItem.querySelector('.menu-elem__price').innerHTML,menuItem.querySelector('input').value);
    //pizzaIdArray.push(menuItem.id);
    console.log(JSON.stringify(orderedPizza));
    sessionStorage.setItem(menuItem.id,JSON.stringify(orderedPizza));

    /*localStorage.setItem('imgSrc', menuItem.querySelector('.menu-elem__img').src);
    localStorage.setItem('itemName',menuItem.querySelector('.menu-elem__name').querySelector('.sub-title').innerHTML);
    localStorage.setItem('itemPrice',menuItem.querySelector('.menu-elem__price').innerHTML);*/

}

function showAmountChoice(event){
    const curBtn = event.target;
    console.log(curBtn)
    const hidBtn = curBtn.nextElementSibling;

    hidBtn.classList.toggle('elem-z1');
    hidBtn.classList.toggle('elem-z2');
    curBtn.classList.toggle('elem-z1');
    curBtn.classList.toggle('elem-z2');
}

function cancelChoice(event){
    const curBtn = event;
    const hidBtn = curBtn.previousElementSibling;
    hidBtn.classList.toggle('elem-z1');
    hidBtn.classList.toggle('elem-z2');
    curBtn.classList.toggle('elem-z1');
    curBtn.classList.toggle('elem-z2');
}