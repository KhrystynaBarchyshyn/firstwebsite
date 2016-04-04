function scrollToPhoto() {
    $('html, body').animate({
        scrollTop: $( '#short_story' ).offset().top
    }, 800);
    return false;
}


function scrollToPhotos() {
    $('html, body').animate({
        scrollTop: $( '#my_life' ).offset().top
    }, 800);
    return false;
}
