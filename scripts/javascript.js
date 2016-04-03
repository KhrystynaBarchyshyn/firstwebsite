function scrollToPhoto() {
    $('html, body').animate({
        scrollTop: $( '#short_story' ).offset().top
    }, 800);
    return false;
}

