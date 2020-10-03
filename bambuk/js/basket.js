$(document).ready(function(){

$('.mobile_menu-toggle').on('click', function(){
	if(!($('.personal_nav ul').hasClass("open"))){
		$('.personal_nav ul').addClass("open");
		$(this).addClass("up");
		$('.overlay').css({"opacity" : "1"});
	}else{
		$('.overlay').css({"opacity" : "0"});
		$('.personal_nav ul').removeClass("open");
		$(this).removeClass("up");
	}
});

/* переключение доставок */

	$('input:radio[name=toggle_delivery]').on('change', function(){
	
	var type = $(this).attr("id");
	switch (type){

		case  'toggle_standart' :

			$('.mobile.info_delivery.express').hide(); // переключаем заголовки в мобильной версии
			$('.mobile.info_delivery.standart').show();
			$('.gutter_left').show();
			$('.gutter_right').hide();

		break;

		case 'toggle_express' :

			$('.mobile.info_delivery.express').show();  // переключаем заголовки в мобильной версии
			$('.mobile.info_delivery.standart').hide();
			$('.gutter_left').hide();
			$('.gutter_right').show();

		break;

	}

});
$(window).on('load', function(){
	if($(window).width() < 767){
		$('.gutter_left').show();
		$('.gutter_right').hide();

		$('.mobile.info_delivery.express').hide();
		$('.mobile.info_delivery.standart').show();
	}
});
$(window).on('resize', function(e){
	if($(window).width() > 767){
		
		// Обратно переключаем 

		$('.gutter_left').show();
		$('.gutter_right').show();

		$('.mobile.info_delivery.express').hide();
		$('.mobile.info_delivery.standart').show();


		$('#toggle_standart').prop("checked", true); 
		$('#toggle_express').prop("checked", false);
	
	}else{
		$('.gutter_left').show();
		$('.gutter_right').hide();

		$('.mobile.info_delivery.express').hide();
		$('.mobile.info_delivery.standart').show();
	}
});

	$('.standart_delivery').scrollbar();
	$('.express_delivery').scrollbar();
});