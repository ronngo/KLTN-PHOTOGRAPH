/// <reference path="jquery.magnific-popup.min.js" />

$(document).ready(function () {
    $('.work-details-popup').on('click', function () {
        var listImages = $(this).attr("data-list-image");
        var idx = parseInt($(this).attr("data-idx"));
        var arrayImages = listImages.replace('["', '').replace('"]', '').split('","');
        var listImageItem = arrayImages.map((src, idx) => ({ src, idx }));
        baseMagnificOptions = {
            items: listImageItem,
            type: "image",
            delegate: 'a',
            gallery: {
                enabled: true, // set to true to enable gallery
                preload: [0, 1], // read about this option in next Lazy-loading section
                navigateByImgClick: true,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
                tPrev: '', // title for left button
                tNext: '', // title for right button
                tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
            },
        };
        $.magnificPopup.open(baseMagnificOptions, idx);
    });
});