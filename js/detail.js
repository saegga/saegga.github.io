
$(document).ready(function(e) {

	$('.more_about').on('click', function(e){
		$('.mob_about').find('.product_text').toggle();
		e.preventDefault();
	});
	$('.deliv_title').on('click', function(e){
		$('.mob_delivery').find('.delivery_info').toggle();
		e.preventDefault();
	});

	var width = $(this).width();

	// var desctopSliderProduct = {
	// 	nextText: '',
	// 	prevText: '',
	// 	infiniteLoop: true,
	// 	pagerCustom: '#bx-pager',
	// 	controls: false
	// };
	// var mobileSliderProduct = {
	// 	minSlides: 1,
	// 	maxSlides: 1,
	// 	moveSlides: 1,
	// 	pager: true,
	// 	controls: false
	// };

	// var pagerSlider = $('#bx-pager').bxSlider({
	// 	mode: 'vertical',
	// 	minSlides: 4,
	// 	maxSlides: 4,
	// 	controls: true,
	// 	moveSlides: 1,
	// 	infiniteLoop: false,
	// 	pager: false,
	// 	adaptiveHeight: true,
	// 	// slideWidth: 210
	// });

	$('.item_viewed').each(function(i, node){
	var slider = 'slider-' + $(node).attr("id");
	var pager = 'nav-' + $(node).attr("id");
	$(node).find('.slider_sect-item').addClass(slider);
	$(node).find('.pager_sect').addClass(pager);


	 $('.' + slider).slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.' + pager,
		  centerPadding: 0,
		  infinite: false
	});
	$('.' + pager).slick({
		  vertical: true,
		  slidesToShow: 10,
		  slidesToScroll: 1,
		  asNavFor: '.' + slider,
		  dots: true,
		  focusOnSelect: true,
		  centerPadding: 0,
		  variableWidth: true,
		  infinite: false
	});
});

	$('.slides_viewed').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: false,
		nextArrow: '<i class="right" aria-hidden="true"></i>',
        prevArrow: '<i class="left" aria-hidden="true"></i>'
	});

	if(width < 768){
		var productSlider = $('.slider_product').bxSlider(mobileSliderProduct);
	}else{
		var productSlider = $('.slider_product').bxSlider(desctopSliderProduct);
	}

	$(window).resize(function() {
		windowWidth = $(window).width();
		if(windowWidth < 768){
			productSlider.reloadSlider(mobileSliderProduct);
		}else{
			productSlider.reloadSlider(desctopSliderProduct);
		}
		pagerSlider.reloadSlider();
	});

	$('.item_viewed').hover(function(){
		$(this).addClass("hover");
		
	},function(){
	
		$(this).removeClass("hover");
	});

});

