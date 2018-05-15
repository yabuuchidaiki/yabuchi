//課題１

$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

//課題２

	$(function(){
		$("#acmenu dt").on("click", function() {
			$(this).next().slideToggle();
		});
	});

  //課題３

  $(function(){
    $("#modal-open").click(function(){
    $( this ).blur() ;
    if( $( "#modal-overlay" )[0] ) return false ; 
    
    $( "body" ).append( '<div id="modal-overlay"></div>' ) ;
    $( "#modal-overlay" ).fadeIn( "slow" ) ;

    centeringModalSyncer() ;

    $( "#modal-content" ).fadeIn( "slow" ) ;

    $( "#modal-overlay,#modal-close" ).unbind().click( function(){

    $( "#modal-content,#modal-overlay" ).fadeOut( "slow" , function(){
    
    $('#modal-overlay').remove() ;
    
    });
    
  });
    
});
    
    $( window ).resize( centeringModalSyncer ) ;

    function centeringModalSyncer() {

    var w = $( window ).width() ;
    var h = $( window ).height() ;
    

    var cw = $( "#modal-content" ).outerWidth( {margin:true} );
    var ch = $( "#modal-content" ).outerHeight( {margin:true} );
    var cw = $( "#modal-content" ).outerWidth();
    var ch = $( "#modal-content" ).outerHeight();
    

    $( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;
    
    }
    
});

   //課題4
   $(function() {
    $('.navToggle').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});