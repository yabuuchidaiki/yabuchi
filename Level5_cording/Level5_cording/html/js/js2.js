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


$(function(){
    var slider = ".slider_bottom"; // スライダー
    var thumbnailItem = ".thumbnail .thum"; // サムネイル画像アイテム
    
    // サムネイル画像アイテムに data-index でindex番号を付与
    $(thumbnailItem).each(function(){
     var index = $(thumbnailItem).index(this);
     $(this).attr("data-index",index);
    });
    
    // スライダー初期化後、カレントのサムネイル画像にクラス「thumbnail-current」を付ける
    // 「slickスライダー作成」の前にこの記述は書いてください。
    $(slider).on('init',function(slick){
     var index = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
     $(thumbnailItem+'[data-index="'+index+'"]').addClass("thumbnail-current");
    });

 //slickスライダー初期化  
 $(slider).slick({
    autoplay: true,
    fade: true,
    infinite: false //これはつけましょう。
  });

$(thumbnailItem).on('click',function(){
    var index = $(this).attr("data-index");
    $(slider).slick("slickGoTo",index,false);
  });
  
  //サムネイル画像のカレントを切り替え
  $(slider).on('beforeChange',function(event,slick, currentSlide,nextSlide){
    $(thumbnailItem).each(function(){
      $(this).removeClass("thumbnail-current");
    });
    $(thumbnailItem+'[data-index="'+nextSlide+'"]').addClass("thumbnail-current");
  });
});
