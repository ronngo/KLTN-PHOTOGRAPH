(function ($) {
    "use strict"; // Start of use strict

    // Floating label headings for the contact form
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });

    $('main').on('click', function () {
        $('#navbarResponsive').collapse('hide');
    });

    // Show the navbar when the page is scrolled up
    var MQL = 992;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('#mainNav').height();
        $(window).on('scroll', {
            previousTop: 0
        },
            function () {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
                        $('#mainNav').addClass('is-visible');
                    } else {
                        $('#mainNav').removeClass('is-visible is-fixed');
                    }
                } else if (currentTop > this.previousTop) {
                    //if scrolling down...
                    $('#mainNav').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
                }
                this.previousTop = currentTop;

                $('#navbarResponsive').collapse('hide');
            });
    }

})(jQuery); // End of use strict

//add some formatting to the code blocks
$("pre").each(function () {
    $(this).addClass("prettyprint");
    PR.prettyPrint();
});

$('p iframe').each(function () {
    $(this).parent().addClass('aspect-ratio');
});
$(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
});

$(function () {
    $('.lazy-bg, img').lazy();
});
var pages = $('.pagination li');
if (pages.eq(1).hasClass('active')) {
    $('.pagination .page-item:first-child a').removeAttr('href');
    $('.pagination .page-item:first-child').css('opacity', '.5');
    $('.pagination .page-item:first-child a').css('cursor', 'not-allowed');
    $('.pagination .page-item:first-child a').addClass('not-hover');
} else if (pages.eq(pages.length - 2).hasClass('active')) {
    $('.pagination .page-item:last-child a').removeAttr('href');
    $('.pagination .page-item:last-child').css('opacity', '.5');
    $('.pagination .page-item:last-child a').css('cursor', 'not-allowed');
    $('.pagination .page-item:last-child a').addClass('not-hover');
}


