var escPressed = []

$("html").keydown(function (e) {
    if(e.keyCode != 27 && e.keyCode != 8){

        escPressed.length = 0;

         $('.keys-group').fadeOut();
    $('.main-sect').animate({
        'padding': 0
    }, 300, "swing");

    $('.main-title').animate({
        'font-size': 30
    })

    
    setTimeout(function () {
        $('#plainText').fadeIn();
        $('#plainText').css({
            padding: 20
        });
    }, 300)

    }
   
});

$(document).ready(function () {
    $('#plainText').focus();
    $('#plainText').hide();
    $('.alert-popup').hide()
    console.log(escPressed.length);
})

function reset(){

    escPressed.length = 0
    
    $('.keys-group').fadeIn();
    $('.main-sect').animate({
        'padding': '2rem'
    }, 300, "swing");

    $('.main-title').animate({
        'font-size': 80
    })

    $('#plainText').fadeOut();

    
}



$(document).keyup( function(e) {

    

    escPressed.length = 1

    if (e.key == "Escape") {

        console.log(escPressed.length);

        if(escPressed.length == 1){
            escPressed.length = 2;
            launchAlert("Press esc again to confirm");
        }

        if(escPressed.length == 2){
            reset();
        }

        
  }

});

function launchAlert(message){

    

    $('.alert-popup').fadeIn();

    

    setTimeout(function () {
        $('.alert-popup').fadeOut();
    }, 1000);

    $('.alert-msg').text(message);

}