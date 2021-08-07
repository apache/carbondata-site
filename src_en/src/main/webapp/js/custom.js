
// mobile menu drop down style
/*-----------------------------------------------------------*/
$(document).ready(function(){

		if ($(window).width() > 767){
			$('ul.nav li.dropdown').hover(function() {
					  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
					}, function() {
					  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
			});
    }
});


/*Search box*/
  $(document).ready(function() {
      $( "#search-icon" ).click(function() {
          $( "#search-box" ).toggle();
      });
  });




//headings scroll in top
$(document).ready(function() {
    $('#viewpage a[href*="#"]:not([href="#"])').click(function () {
         if (location.pathname.replace(/^\/ /, '') == this.pathname.replace(/^\/ /, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({scrollTop: target.offset().top - 56}, 1000);
                return false;
            }
        }
    });
});


$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('.scroll-top').fadeIn();
    } else {
        $('.scroll-top').fadeOut();
    }
});