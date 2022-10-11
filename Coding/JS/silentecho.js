jQuery(document).ready(function($) {
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.thumbnail_slider'
    });
});

$('.thumbnail_slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.banner_slider',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
});