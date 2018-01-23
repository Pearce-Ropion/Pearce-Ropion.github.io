$(document).ready(function() {
    var smoothScroll = function(target) {
        $('body, html').animate({ 'scrollTop': target.offset().top + 50 }, 500);
    };

    $('.scroll-down').on('click', function(ev) {
        ev.preventDefault();
        smoothScroll($(this.hash));
    });

    const isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    // turn off parallax effect on mobile devices
    if (!isMobile.any()) {
        skrollr.init({
            render: function(data) {
                //Debugging - Log the current scroll position.
                // console.log(data.curTop);
            },
            smoothScrolling: false,
            forceHeight: false
        });
    }
});
