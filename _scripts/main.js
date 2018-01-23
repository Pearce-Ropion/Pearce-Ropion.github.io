var smoothScroll = function(target) {
    $('body, html').animate({ 'scrollTop': target.offset().top + 50 }, 500);
}

$('.scroll-down').on(click, function(ev)) {
    ev.preventDefault();
    smoothScroll($(this.hash));
}
