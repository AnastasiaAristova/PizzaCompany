const { Pizza} = require("./helpObjects");
const repeatOrderBtn = document.getElementsByClassName('order-again');
for(let el of repeatOrderBtn)
{
    el.addEventListener('click', repeatOrder);
}


function repeatOrder(e){
    //TODO: разбить содержимое на несколько простых функций
    //localStorage.removeItem('isOrderAgain');
    //TODO:   console.log нужно удалять
    console.log(e.target);
    sessionStorage.clear();
    localStorage.setItem('isOrderAgain','true');
    const order = e.target.closest('.elem-container').querySelector('.home-elements');
    const total = e.target.closest('.elem-container').querySelector('.home-elem__total-order-price');
    console.log(total);
    for(let menuItem of order.children){
        let orderedPizza = new Pizza(menuItem.id,menuItem.querySelector('.img').src,
            menuItem.querySelector('.home-elem__order-name').textContent,
            menuItem.querySelector('.cart-elem__price').textContent,
            menuItem.querySelector('.amount-order__elem').textContent.replace(/[^0-9]/g,''));
        sessionStorage.setItem(menuItem.id,JSON.stringify(orderedPizza));
    }
    localStorage.setItem('total',total.textContent);
    localStorage.setItem('goCart','go');
    window.location.href = '/menu';
}