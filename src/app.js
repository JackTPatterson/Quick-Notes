



$("html").keydown(function (e) {
    $('#plainText').focus();
    

    if (e.keyCode != 27 && e.keyCode != 8 && e.keyCode != 91) {


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
    $('.alert-popup').hide();

    autosize(document.getElementById("plainText"));

    

})

function reset() {

    $('.keys-group').fadeIn();
    $('.main-sect').animate({
        'padding': '2rem'
    }, 300, "swing");

    $('.main-title').animate({
        'font-size': 80
    })

    $('#plainText').fadeOut();


}


$(document).keyup(function (e) {
    if (e.key == "Escape") {
        launchAlert("Press esc again to confirm");
    }
});

function launchAlert(message) {
    $('.alert-popup').fadeIn();
    setTimeout(function () {
        $('.alert-popup').fadeOut();
    }, 1000);

    $('.alert-msg').text(message);
}

$("html").keydown(function (e) {
   if(e.keyCode == 191){
       //*do something
   }
});

$("html").keydown(function (e) {
   if(e.keyCode == 190 && e.keyCode == 189){
       //*do something
   }

});

