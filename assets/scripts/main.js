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
    if ($('.skills-development-pie').length != 0) {
        $('.skills-development-pie').each(function() {
            var base = 'linear-gradient(90deg, #393939 50%, transparent 50%)';
            var amount = $(this).children().children('.skills-development-amt').html();
            var degree = ((amount / 100) * 360) - 90;
            if (amount >= 100) {
                $(this).css('background-image', 'none');
            } else if (amount > 50) {
                $(this).css('background-image', 'linear-gradient('+ degree +'deg, transparent 50%, #FF8400 50%), ' + base);
            } else if (amount < 50) {
                degree += 180;
                $(this).css('background-image', 'linear-gradient('+ degree +'deg, transparent 50%, #393939 50%), ' + base);
            } else if (amount == 50) {
                $(this).css('background-image', base);
            }
        });
    }
    if ($('#timeline').length !== 0) {
        var numberPattern = /\d/g;
        $('#timeline').children().each(function() {
            var id = $(this).children('.timeline-content').attr('id').match(numberPattern)[0];
            
            var content = $('#content-'.concat(id.toString()));
            var semi = $('#semi-'.concat(id.toString()));

            var cHeight = content.height();
            var sHeight = semi.height();
            var marginChange = Math.floor((cHeight - sHeight) / 2);

            semi.css('margin-top', marginChange.toString().concat('px'));
        });
    }

    $(document).on('keyup', 'textarea', function() {
        var txtarea = document.querySelector('textarea')
        var height = Math.min(txtarea.scrollHeight, 300).toString().concat('px');
        txtarea.style.height = height;
    });
});
