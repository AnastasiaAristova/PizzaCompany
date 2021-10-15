//$('.menu-order-btn').click( saveChoice );
function saveChoice(e) {
    //const amount = $(this).closest('.amount-choice').children[1].value;
    const amount = e.target.nextElementSibling.children[1].value;
    const id = e.target.closest('.menu-table__elem').id;

    $.ajax({
        type:'POST',
        url:'addpizzatocart/',
        data:{
            id:id,
            amount: amount,
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
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