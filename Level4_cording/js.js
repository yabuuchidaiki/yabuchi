$(document).ready(function(){
    　$('.slider').slick({
    　　autoplay: true,
    　　adaptiveHeight: true,
    　　arrows: true,
 　　nextArrow:'<div class="slideright"><img src="images/arrow_right.png"></div>',
    prevArrow:'<div class="slideleft"><img src="images/arrow_left.png" width></div>'
    　});
    $('.thumbnail').slick({
        asNavFor:'.slick',
        focusOnSelect: true,
        arrows: false,
        slidesToShow: 3,
      });
    });
