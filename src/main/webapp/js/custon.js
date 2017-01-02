/*
$(window).resize(function(){
	if ($(window).width() < 767){		
		 
			$('ul.nav li.dropdown').hover(function() {
			  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
			}, function() {
			  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
			});
	}	
});*/

$(document).ready(function(){
		if ($(window).width() > 767){		
			$('ul.nav li.dropdown').hover(function() {
					  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
					}, function() {
					  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
			});
          }
});	



//* Mobile nav//
/*
   $(document).ready(function() {
        $('.leftnav').click(function() {
                $('.list-group').slideToggle(500);
        });
    });
*/
 

