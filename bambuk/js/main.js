$(document).ready(function() {

$('.wrap_auth').hover(function(){
	$('.drop_account').addClass("hover");
},function(){
$('.drop_account').removeClass("hover");
	
});


// $(".fancybox").fancybox({
//         closeBtn: false
//     });
	
// $('.type_call').change(function(){
// 	if($('#time').is(':checked')){
// 		$('.form_call .set_date').css({"display": "flex"});
// 	}else{
// 		$('.form_call .set_date').hide();
// 	}
// });
	

// $('input[name="our_name"]').mask('0 00 000-00-00', 
// 	{
// 		onComplete: function(){
// 			$('.complete').show();
// 		},
// 		onChange: function(){
// 			$('.complete').hide();
// 		}
// 	});
// $('input[name="input_time"]').mask('00:00');


function openLeftSide(sectionId){
	
	var menuControl = $('.toggle_menu i');

	if( $(menuControl).hasClass("show") ){
		$(menuControl).removeClass("show");
		$(menuControl).addClass("close_menu");

		$('body').css({"overflow" : "hidden"});

	}else{
		$(menuControl).removeClass("close_menu");
		$(menuControl).addClass("show");

		$('body').css({"overflow" : "auto"});
	}

	if(sectionId != undefined){
		$('.left_mobile_menu').toggle();
		openSecCatalog(sectionId);
		toggleTabs(sectionId);
	}else{
		// при нажатии на бургер по умолчанию первый таб
		$('.left_mobile_menu').toggle();
		var showIdCatalog = $('.catalog_mob_menu').children(".mob_lvl_1").first().attr("id");
		openSecCatalog(showIdCatalog);
		toggleTabs();
	}
}

function toggleTabs(tabId){
	if(tabId != undefined){
		
		$('.top_mob-item').each(function(){
			$('.top_mob-item').removeClass("active");
		});
		$('.top_mob_menu').find('#' + tabId).addClass("active"); // установка таба при открытии
	}else{
		$(".top_mob-item").each(function(){
				$(this).removeClass("active");
			});
		// первый таб
		$(".top_mob-item:first").addClass("active");
	}
	
}

/* кнопки в мобильном боковом меню */
$('.toggle_menu').on('click', function(){
	openLeftSide();
});
/*$('.mob_item_lvl_1 > a').on('click', function(){

		var moreCatBtn  = $(this).find(".mob_more_catalog");
		var moreCatalog = $(this).parent().find(".mob_lvl_2");

		if($(moreCatBtn).hasClass("show")){
			

			$(moreCatBtn).removeClass("show");
			$(moreCatBtn).addClass("close");

			$(moreCatalog).toggle();
			
		}else{
			$(moreCatBtn).removeClass("close");
			$(moreCatBtn).addClass("show");

			$(moreCatalog).toggle();
		}
		return false;
	});
*/
/*$('.top_mob-item').on('click', function(){
	
	var showIdCatalog = $(this).attr("id");
	openSecCatalog(showIdCatalog);
	toggleTabs(showIdCatalog);
	return false;
});*/

	// ДЛЯ ПЕРЕКЛЮЧЕНИЯ ВКЛАДОК
	var openSecCatalog = function(idCatalog){
		$('.mob_lvl_1').each(function(i, node){

			if($(this).attr('id') == idCatalog){
					$(node).show();
			}else{
					$(node).hide();
			}
		});
	}

// if($(window).width() < 768){

// 	$('.main_menu a').on('click', function(){
// 		var sectionId = $(this).attr("id"); 
// 		openLeftSide(sectionId);
// 	});
// }

// $('.mob_item_lvl_1 > a').on('click', function(e){
// 	e.preventDefault();
// 	console.dir($(this).find('span').text());
// 	$(this).hide();
// 	var text = $(this).find('span').text();
// 	$('.m_choice_item').addClass('open');
// 	$('.m_choice_item').find('span').text(text);
// });

var menu = "";
var currentMenu = function(elem){
	return $(elem).parent().parent();
}
$('.m_catalog-menu a').on('click', function(e){
	if($(this).attr("href") == ''){
		e.preventDefault();
		if(!$(this).parent().hasClass("open")){
			$(this).parent().addClass("open");
			menu = $(this).parent().parent();
			var prevMenu = $(menu).children("li");

			$(prevMenu).each(function(i, node){
				if(!$(node).hasClass("open")){
					$(node).hide();
				}
			});
			if(!$('.m_choice-title').hasClass("open")){
				$('.m_choice-title').addClass("open");
			}
			$('.m_choice-title span').text($(this).text())
		}else{
			$(this).parent().removeClass("open");
		}
		var heightMenu = $(menu).find("li.open").children("ul").height();

		$('.m_catalog-menu').css({"height" : heightMenu});
	}
});
$('.m_choice-title').on('click', function(){
	var openedMenu = $('.m_catalog-menu').find('li.open').children("ul");

	var menuToShow = $(openedMenu).parent().parent();
	$(menu).children("li.open").removeClass("open");

	var height = 0;
	$(menu).children("li").each(function(i, node){
		if($(node).css('display') == 'none'){
			$(node).css({'display' : "block"});
		}
		if($(node).hasClass("open")){
			$(node).removeClass("open");
		}
		height += $(node).height();
	});

	 $('.m_catalog-menu').css({"height" : height});
	if($(menu).hasClass("m_catalog-menu")){
		$(this).removeClass("open");
	}else{
		var txt = $(".m_catalog-menu").find("li.open").children("a").text();
		 $(this).find('span').text(txt);
	}
	menu = currentMenu($(menu));
});
});