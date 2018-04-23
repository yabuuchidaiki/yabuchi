$(document).ready(function(){
    　$('.slider').slick({
        asNavFor:'.thumbnail',
        autoplay: true,
        adaptiveHeight: true,
        arrows: true,
        slidesToShow:1,
        nextArrow:'<div class="slideright"><img src="images/arrow_right.png"></div>',
        prevArrow:'<div class="slideleft"><img src="images/arrow_left.png"></div>'
    　});

    $('.thumbnail').slick({
        asNavFor:'.slider',
        focusOnSelect: true,
        arrows: false,
        slidesToShow: 3,
      });
});
