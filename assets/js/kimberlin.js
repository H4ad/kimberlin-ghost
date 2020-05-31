$(document).ready(function () {
    // Kimberlin Scripts
    $('.post-feed').isotope({
        itemSelector: '.post-card',
    });

    var el = $('.right-feed');

    if (!el)
        return;
        
    var elpos = 501;
    var lastScroll = 0;

    $(window).scroll(function () {
        var y = $(this).scrollTop();

        if (lastScroll < y){
            lastScroll = y;
            return;
        }

        lastScroll = y;

        if(y < elpos ) {
            el.stop().animate({ 'margin-top': 0 }, 500);
        } else {
            el.stop().animate({ 'margin-top': y - elpos + 50 }, 500);
        }
    });
});