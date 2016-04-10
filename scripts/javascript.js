function scrollToId(whereToScroll) {
    $('html, body').animate({
        scrollTop: $(whereToScroll).offset().top
    }, 800);
    return false;
}

$(document).ready(function() {
    $('#contactForm').submit(function() {
        $.ajax({
            url: "https://formspree.io/khrystyna.barchyshyn@gmail.com",
            method: "POST",
            data: {
                name: name.value + " " + surname.value,
                email: email.value,
                message: msg.value
            },
            dataType: "json"
        }).done(function() {
            $('.submit_form').html('<h1>Thank you for your messsage. I will come back to you shortly!</h1>')
        });
        return false;
    });    
});


// $(window).scroll(function() {
//     if ($(this).scrollTop() > 100 && !$(".main_photo").is(":visible") ) {
//         $( ".main_photo" ).effect( "slide",  { direction: 'left'}, 600, function (){});
//         $( ".paragraph" ).effect( "slide",  { direction: 'left'}, 600, function (){});
//     }
//     else{}
// });
