const menuOrderBtn = document.getElementsByClassName('menu-order-btn');
for(let el of menuOrderBtn)
{
    el.addEventListener('click',processChoice);
}
const menuAmountOrder=document.getElementsByClassName('menu-elem__multiple-choice');
for(let el of menuAmountOrder)
{
    el.addEventListener('click',function(e) {

const amount = e.target.closest('.menu-elem__multiple-choice');
        console.log(amount);
        console.log(amount.children[1].value);
        if(amount.children[1].value === '0')
            cancelChoice(amount);
    });
}

function processChoice(event){
    const curBtn = event.target;
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