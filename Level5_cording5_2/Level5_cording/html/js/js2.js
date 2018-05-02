$(document).ready(function(){
    　$('.slider_bottom').slick({
        asNavFor:'.thumbnail',
        autoplay: false,
        adaptiveHeight: true,
        arrows: true,
        slidesToShow:1,
        nextArrow:'<div class="slideright"><img src="images/migi.png"></div>',
        prevArrow:'<div class="slideleft"><img src="images/hidari.png"></div>'
    　});

    $('.thumbnail').slick({
        asNavFor:'.slider_bottom',
        focusOnSelect: true,
        arrows: false,
        slidesToShow: 3,
      });
});


$(document).ready(function(){
  　$('.slider_bottom2').slick({
      asNavFor:'.thumbnail2',
      autoplay: false,
      adaptiveHeight: true,
      arrows: true,
      slidesToShow:1,
      nextArrow:'<div class="slideright"><img src="images2/migi_sp.png"></div>',
      prevArrow:'<div class="slideleft"><img src="images2/hidari_sp.png"></div>'
  　});

  $('.thumbnail2').slick({
      asNavFor:'.slider_bottom2',
      focusOnSelect: true,
      arrows: false,
      slidesToShow: 3,
    });
});



