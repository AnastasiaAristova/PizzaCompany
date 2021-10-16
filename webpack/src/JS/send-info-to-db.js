    //For getting CSRF token
function getCookie(name) {
       var cookieValue = null;
       if (document.cookie && document.cookie != '') {
         var cookies = document.cookie.split(';');
         for (var i = 0; i < cookies.length; i++) {
         var cookie = jQuery.trim(cookies[i]);
         // Does this cookie string begin with the name we want?
         if (cookie.substring(0, name.length + 1) == (name + '=')) {
             cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
             break;
          }
     }
 }
 return cookieValue;
}
$('.menu-order-btn').click( saveChoice );
function saveChoice(e) {
    var token = getCookie('csrftoken');
    const amount = e.target.nextElementSibling.children[1].value;
    const id = e.target.closest('.menu-table__elem').id;

    $.ajax({
        type:'POST',
        url:'addpizzatocart/',
        data:{
            id:id,
            amount: amount,
            csrfmiddlewaretoken: token,
            //action: 'delete'
        },
        dataType: 'json',
        success:function(){
            console.log('success');
        },
        error : function(xhr,errmsg,err) {
            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });

}