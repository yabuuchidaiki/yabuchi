var setElm = $('.slideShow'),
		slideSpeed = 500;


setElm.each(function() {

	var self = $(this),
			selfWidth = self.innerWidth(),
			selfUl = self.find('ul'),
			selfLi = selfUl.find('li'),
			listWidth = selfLi.outerWidth(),
			listCount = selfLi.length,
			slideWidth = listWidth * listCount,
			moveCount = Math.round(selfWidth / listWidth),
			wrapSplit = Math.ceil(listCount / moveCount);

	selfUl.css({width:slideWidth});

	if (selfWidth < slideWidth) {
		self.append('<div class="pagiNation_3"></div>')
		.find('ul') .wrapAll('<div class="slideWrap_3" />');

		var pagination = self.find('.pagiNation_3');

		$.each(new Array(wrapSplit), function(i){
			pagination.append('<a href="javascript:void(0);" class="pn_' + (i+1) + '"></a>');
		});

		var pnPoint = pagination.find('a'),
				pnFirst = pagination.find('a:first'),
				pnLast = pagination.find('a:last'),
				pnCount = pagination.find('a').length;

		pnFirst.addClass('pnActive');

		pnPoint.click(function(){
			if(!(selfUl.is(':animated'))){
				var showCont = pnPoint.index(this);

				selfUl.animate({left:'-'+((listWidth*moveCount)*showCont)},
							slideSpeed);

				pnPoint.removeClass('pn_Active');
				$(this).addClass('pn_Active');
			}
		});

	}

});
