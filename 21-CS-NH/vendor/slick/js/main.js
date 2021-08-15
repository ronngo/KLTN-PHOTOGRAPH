
timelineReset = function () {
    var e, t, n, i;
    return n = (e = $(".timeline-events")).find("li"), t =
        $(".timeline-time ul"), (i = e.add(t)).find("li").removeClass("active"), i.find("li:first")
            .addClass("active"),
        i.css({
            marginLeft: "0px"
        }), t.css("width", n.length * $(".timeline-time").width(), $(".previous").hide());
}
timelineMove = function () {
    var s, e, l, o, c, t, n, i, u, d;
    return o = $(".timeline-events"), t = o.find("li"), c = $(".timeline-time ul"), n = o.add(c), s =
        t.outerWidth(), n.find("li:first").addClass("active"), o.css("width", 100 * t.length + "vw"), i =
        $(".timeline-time").width(), u = 1 * i / 10, d =
        6 * i / 10, c.css("width", (t.length - 1) * i * 4 / 10 + 6 * i / 10), c.find("li").css("width", u), c
            .find("li.active").css("width", d), c.css({
                marginLeft: u
            }), l = !1, e = function (e) {
                var t, n, i, a, r;
                if (!l)
                    return l = !0, setTimeout(function () {
                        return l = !1
                    },
                        1e3), t = o.find("li.active"), n =
                        c.find("li.active"), "previous" === e
                            ? (a = t.prev(), r = n.prev(), i = "+")
                            : (a = t.next(), r = n.next(), i = "-"), a.length
                            ? (o.css({
                                marginLeft: i + "=" + s + "px"
                            }), a.addClass("active"), t.removeClass("active"), c.css({
                                marginLeft: i + "=" + u + "px"
                            }), r.addClass("active"), c.find("li").css("width", u), r.css("width", d), n.removeClass("active"))
                            : void 0
            }, $(".timeline .previous").off().on("click",
                function () {
                    if (e("previous"), $(".timeline .next").removeClass("last"), o.find("li:first-child").hasClass("active")) {
                        $(".previous").hide();
                        return $(this).addClass("last");
                    } else {
                        $(".previous").show();
                    }
                    $(".next").show();
                }), $(".timeline .next").off().on("click",
                    function () {
                        if (e("next"), $(".timeline .previous").removeClass("last"), o.find("li:last-child").hasClass("active")) {
                            $(".next").hide();
                            return $(this).addClass("last");
                        } else {
                            $(".next").show();
                        }
                        $(".previous").show();
                    }), c.find("li").off().on("click",
                        function () {
                            var e;
                            if (!l)
                                l = !0, setTimeout(function () {
                                    return l = !1
                                },
                                    1e3), e =
                                    $(this).index() - o.find("li.active").index(), n.find("li").removeClass("active"),
                                    $(this).addClass("active"), t.eq($(this).index()).addClass("active"), o.css({
                                        marginLeft: "-=" + e * s + "px"
                                    }), c.css({
                                        marginLeft: "-=" + e * u + "px"
                                    }), c.find("li").css("width", u), c.find("li.active").css("width", d),
                                    $(".timeline .previous, .timeline .next").removeClass("last"),
                                    o.find("li:first-child").hasClass("active") && $(".timeline .previous").addClass("last"), o
                                        .find("li:last-child").hasClass("active")
                                        ? $(".timeline .next").addClass("last")
                                        : void 0;
                            if (o.find("li:first-child").hasClass("active")) {
                                $(".previous").hide();
                            } else {
                                $(".previous").show();
                            }
                            if (o.find("li:last-child").hasClass("active")) {
                                $(".next").hide();
                            } else {
                                $(".next").show();
                            }
                            return l;
                        });
}
$(document).ready(function () {
    timelineReset();
    timelineMove();



    $(window).resize(function () {
        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            slidesPerView: 1,
            observer: true,
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
            },
        });
    })

    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.container-album-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        adaptiveHeight: true
    });
    $('.grid-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    autoplay: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '10px',
                    arrows: false,
                    loop: false,
                }
            }


        ]
    });
    $(window).on('load', function () {
        $(window).trigger('resize');
    })

    $('.list-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.portfolio-filter',
        swipe: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.portfolio-filter').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.list-gallery',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<span class="slick-prev slick-arrow"></span>',
        nextArrow: '<span class="slick-next slick-arrow"></span>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    if ($(window).width() <= 576) {
        $('.swiper-container').css('width', $(window).width())
    }

    $('.portfolio-filter li').click(function () {
        var listLength = $('.d-desktop .grid-gallery.slick-active .gallery-item-list li').length

        if (listLength <= 3) {
            $('.gallery-item-list').css({
                'flex-flow': 'unset',
                'align-content': 'unset',
                'height': '250px',
            })
            $('.d-desktop .grid-gallery.slick-active .gallery-item-list li').css('width', '33.33%');
        }

        if (listLength >= 4 && listLength <= 6) {
            $('.d-desktop .grid-gallery.slick-active .gallery-item-list li').css({
                'margin-bottom': '40px',
                'width': '33.33%'
            });
            $('.gallery-item-list').css({
                'flex-flow': 'column wrap',
                'align-content': 'space-between',
                'height': '600px',
            })
        }

        if (listLength >= 7) {
            $('.d-desktop .grid-gallery.slick-active .gallery-item-list li').css({
                'margin-bottom': '20px',
                'width': '20%'
            });
            $('.gallery-item-list').css({
                'flex-flow': 'column wrap',
                'align-content': 'space-between',
                'height': '600px',
            })
        }


    });

});
$(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
});
$(document).on('show.bs.modal', '.modal', function (event) {
    var zIndex = 9 + (10 * $('.modal:visible').length);
    $(this).css('z-index', zIndex);
    setTimeout(function () {
        $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
    }, 0);
});

$('.btn-close').on('click', function () {

    $('.modalNoti').hide();
    $('body').addClass('modal-open-again');
    $('#noti').html("");
    $(".modal-backdrop.in.fade:nth-child(2n)").remove();

});
$('.btn-close2').on('click', function () {
    $('.modalNoti').hide();
    $('#noti').html("");
    $(".modal-backdrop.in.fade:nth-child(2n)").remove();

});

$('.btn-back').on('click', function () {
    if ($('body').hasClass('modal-open-again')) {
        $('body').removeClass('modal-open-again');
    }

});


$('.pop-book-ticket').on('click', function () {
    setTimeout(function () {
        $('.modal-backdrop').addClass('opacityHigher');
    }, 100);

});

