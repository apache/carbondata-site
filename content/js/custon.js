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
	$('ul.nav li.dropdown').hover(function() {
			  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
			}, function() {
			  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
	});

});	



 $(document).ready(function(){
        $('iframe').load( function() {
			$('iframe').contents().find("head")
			   .append($("<style type='text/css'> #preview  body{ backgraound:red !important }  </style>"));
		 });
 });

//* Link*/

$(function () {
    $("#Unique-link").on("click", function () {
    	alert("working");
        $("#target-iframe").load("overDoc.html#features");
    });
    $("#nav_page_b").on("click", function () {
        $("#main").load("PageB.html");
    });
});



 /* print page*/

 

