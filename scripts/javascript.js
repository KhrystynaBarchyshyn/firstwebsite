function scrollToPhoto() {
    $('html, body').animate({
        scrollTop: $( '#short_story' ).offset().top
    }, 800);
    return false;
}


function scrollToPhotos() {
    $('html, body').animate({
        scrollTop: $( '.facts h2' ).offset().top
    }, 800);
    return false;
}
