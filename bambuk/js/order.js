$(document).ready(function(){


	// выпадающие пункты меню
	$('.drop_step_menu').on('click', function(){
		$(this).toggleClass("up");
		$('.mob_step_menu ul').toggleClass("open_step");
		$('.mob_step_menu ul').toggleClass("close");
	});
	
	// неактивные пункты

	$('.mob_step_menu ul li').on('click', function(e){
		if($(this).hasClass("disabled")){
			e.preventDefault();
			// $(this).find('a')
		}
	});
	$('.help_delivery').hover(function(){
		var tip = $(this).parent().find('.tip');
		var height = tip.height();
		tip.css({"top" : -height - 10 + "px"});
		tip.show();
	},
	function(){
		$(this).parent().find('.tip').hide();
	});
	$('input[name="telephone"]').mask('0 (000) 000 00-00', 
		{
			onComplete: function(){
				$('.complete').show();
			},
			onChange: function(){
				$('.complete').hide();
			}
		});
	var currentStep = $('.step_menu li.active').find('a').text();
	$('.current_step').text(currentStep);
});