
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


// Documentation page perticular links from landing page
/*-----------------------------------------------------------*/
 
function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// conditional loading of documentation page from landing page
$(document).ready(function(){
   var pagelink;
   var pageLoad = getParameterByName("page", window.location.href);
   console.log(pageLoad);
    switch(pageLoad) {

    case "userguide":
      pagelink ="user-guide-toc.html"
      break;

    case "uniqueData":
     pagelink ="overview-of-carbondata.html"
     break;

    case "quickStart":
      pagelink ="quick-start-guide.html"
      break;

    case "dml":
      pagelink ="dml-operation-on-carbondata.html"
      break;

    case "ddl":
      pagelink ="ddl-operation-on-carbondata.html"
      break;

    case "dm":
      pagelink ="data-management.html"
      break;

      } 
    $("#viewpage").load(pagelink);  

 });

   /*Search box*/

   $(function() {
      $( "#search-icon" ).click(function() {
          $( "#search-box" ).toggle();
      });
  });

