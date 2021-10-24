const {pizzaIdArray, Pizza} = require("./helpObjects");
const menuOrderBtn = document.getElementsByClassName('menu-order-btn');
const menuItems = document.getElementsByClassName('menu-table__elem');
window.addEventListener('load', showOrderedItems);
const array=[];
window.addEventListener('beforeunload',sendToCart);

function storePizzaIds(){
    //sessionStorage.setItem('idToCart',JSON.stringify(pizzaIdArray));
}
for(let el of menuOrderBtn)
{
    el.addEventListener('click',showAmountChoice);
    //el.addEventListener('click',sendToCart);
}
const menuAmountOrder=document.getElementsByClassName('menu-elem__multiple-choice');
for(let el of menuAmountOrder)
{
    el.addEventListener('click',function(e) {

        const amount = e.target.closest('.menu-elem__multiple-choice');
        if(amount.children[1].value === '0')
        {
            const elemId = amount.closest('.menu-table__elem').id;
            sessionStorage.removeItem(elemId);
            cancelChoice(amount);
        }
    });
}
function setPizzaArray(){
    for(let elem of menuItems)
    {
        array[elem.id]=elem.querySelector('.menu-elem__price').textContent.replace(/\s/g,'').slice(0,-1);
    }

}
function showOrderedItems(){
    let keys = Object.keys(sessionStorage);
    for(let itemId of keys) {
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
    setPizzaArray();
}

function sendToCart(e){
    for(let el of menuOrderBtn){
        if(el.classList.contains('elem-z1'))
        {
            const menuItem = el.closest('.menu-table__elem');
            let orderedPizza = new Pizza(menuItem.id,menuItem.querySelector('.menu-elem__img').src,
                menuItem.querySelector('.menu-elem__name').querySelector('.sub-title').innerHTML,
                array[menuItem.id],menuItem.querySelector('input').value);
            //pizzaIdArray.push(menuItem.id);
            //console.log(JSON.stringify(orderedPizza));
            sessionStorage.setItem(menuItem.id,JSON.stringify(orderedPizza));
        }
    }

}

function showAmountChoice(event){
    //if(!array.contains(event.target.closest('.menu-table__elem').id))

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