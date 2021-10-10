const clear = document.getElementsByClassName('item-clear');
const total = document.getElementsByClassName('cart__total-order-price')[0];
const amountButtons = document.getElementsByClassName('amount-choice__button');
document.getElementById('cart-order').addEventListener('click',showOrderForm);
for(let el of amountButtons){
    el.addEventListener('click', countTotalSum);
    //el.addEventListener('click',countElementSum)
}
/**/
for(let el of clear){
    el.addEventListener('click', deleteItem)
}

function deleteItem(e){
    const el = e.target;
    const cartItem = el.closest('.cart-elem__order');
    cartItem.style.display='none';
}
function countTotalSum(e){
    const arr= document.getElementsByClassName('cart-elem__price');
    let sum=0;
    for(let el of arr){
        sum+=Number(el.innerHTML);
    }
    total.children[0].innerHTML = sum;
}

function countElementSum(e){
    const amount = e.target.closest('.cart-elem__amount');
}

function showOrderForm(){
    document.getElementsByClassName('cart__order-info')[0].classList.toggle('hidden');
}