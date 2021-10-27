    //For getting CSRF token
function getCookie(name) {
       let cookieValue = null;
       if (document.cookie && document.cookie != '') {
         let cookies = document.cookie.split(';');
         for (let i = 0; i < cookies.length; i++) {
         let cookie = jQuery.trim(cookies[i]);
         // Does this cookie string begin with the name we want?
         if (cookie.substring(0, name.length + 1) == (name + '=')) {
             cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
             break;
          }
     }
 }
 return cookieValue;
}
function getDictionary(){
    let map = new Map;
    let keys = Object.keys(sessionStorage);
    let data = {}
    let arr = [];
    for(let itemId of keys) {

        let objPizza = JSON.parse(sessionStorage.getItem(itemId));
        let id = objPizza.id;
        let amount = objPizza.amount
        let p = {id:id,amount: amount};
        arr.push(p);
    }
    return arr;
}

$('.form-cart').submit( saveOrder );
function saveOrder(e) {
    e.preventDefault();
    let token = getCookie('csrftoken');
    let formData = new FormData(e.target);
    const data = getDictionary();
    $.ajax({
        type:'POST',
        url:'saveorder/',
        data:{
            data: data,
            street: formData.get('street'),
            house: formData.get('house'),
            apartment: formData.get('apartment'),
            csrfmiddlewaretoken: token,
        },
        dataType: 'json',
        success:function(response){
            console.log('success');
            if (response.response == 1)
            {
                window.location.assign('../enter/');
            }
            else{
                const table = document.querySelector('.cart-table__elements');
                for(let el of table.children)
                {
                    el.classList.add('hidden');
                }
                sessionStorage.clear();
                const emptyCart = document.createElement('div');
                emptyCart.classList.add('text-wrapper');
                emptyCart.classList.add('sub-title');
                emptyCart.innerHTML="Your order is succesfull";
                table.append(emptyCart);
                document.getElementsByClassName('cart__total-order')[0].classList.add('hidden');
                document.getElementsByClassName('cart__order-button')[0].classList.add('hidden');
                document.getElementById('cart-order').classList.add('hidden');
                document.querySelector('.cart__order-info').classList.toggle('hidden');
            }
        },
        error : function(xhr,errmsg,err) {
            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });

}