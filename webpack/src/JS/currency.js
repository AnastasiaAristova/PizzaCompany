const menuPrice = document.getElementsByClassName('menu-elem__price');
const curChoice = document.getElementsByClassName('input-currency');
const cartPrice = document.getElementsByClassName('cart-elem__price');
const money = document.getElementsByClassName('money');
let currentCur = 'usd';
window.addEventListener('load', getState);
window.addEventListener('beforeunload', setState);
for(let el of curChoice)
{
    el.addEventListener('click',setNewCurrency);
}
document.querySelector('.header-currency').addEventListener('click',function(){

    this.focus();
});
function setNewCurrency(e){
    const target = e.target;
    console.log(target.id);
    if(target.id!=currentCur)
        getLink(target.id);

}

async function getLink(val) {
    const url = `http://api.exchangeratesapi.io/v1/latest?access_key=a739164e37c08bec60f26a789ad9a018&symbols=USD`;
    const res = await fetch(url);
    const data = await res.json();
    const dif = data.rates.USD;
    if(val=='eur')
    {
        for(let el of money)
        {
            el.textContent=Math.round(Number(el.textContent.replace(/\s/g,'').slice(0,-1)) * dif)+'€';
        }
    }
    else{
        for(let el of money)
        {
            el.textContent=Math.round(Number(el.textContent.replace(/\s/g,'').slice(0,-1)) / dif)+'$';
        }
    }
    localStorage.setItem('curNum',dif);
    currentCur=val;
}

function getState(){
    if(localStorage.getItem('currency'))
    {
        currentCur=localStorage.getItem('currency');
        document.getElementById(currentCur).checked='true';
        if(currentCur!=='usd' && !localStorage.getItem('isOrderAgain'))
            getLink(currentCur);
    }
}

function setState(){
    localStorage.setItem('currency',currentCur);
}