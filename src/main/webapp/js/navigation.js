

/* Page links here ----------------------- */

$(function () {
    
    $("#quickstart").on("click", function () {    
             $("#viewpage").load("docs/latest/quick_start.html");
    });
 
    $("#userguide").on("click", function () {
     
        $("#viewpage").load("docs/latest/user_guide.html");
    });

    $("#usefultips").on("click", function () {
        $("#viewpage").load("docs/latest/useful_tips.html");
    });
    
    $("#usecases").on("click", function () {
        $("#viewpage").load("docs/latest/use_cases.html");
    });

    $("#troubleshooting").on("click", function () {
        $("#viewpage").load("docs/latest/troubleshooting.html");
    });

    $("#Overview").on("click", function () {
        $("#viewpage").load("docs/latest/overview.html");
    });

    $("#InstallingcarbonData").on("click", function () {
        $("#viewpage").load("docs/latest/installation.html");
    });

    $("#ConfiguringcarbonData").on("click", function () {
        $("#viewpage").load("docs/latest/configuring.html");
    });

    $("#UsingcarbonData").on("click", function () {
        $("#viewpage").load("docs/latest/usingCarbonData.html");
    });

    $("#faqs").on("click", function () {
        $("#viewpage").load("docs/latest/faq.html");
    });

    $("#DataManagement").on("click", function () {
        $("#viewpage").load("docs/latest/data_management.html");
    });  

    


/* Inner link scroll top ----------------------- */

 $('a[href*="#"]:not([href="#"]).list-group-item-success, #Overview, #InstallingcarbonData, #ConfiguringcarbonData,  #UsingcarbonData').click(function() {  
   // $('html, body').animate({scrollTop: target.offset().top - 0}, 500);    return false;    
   window.scrollTo(0).animate(500);
  });


 $('a[href*="#"]:not([href="#"]).cdsubmenu').click(function() {
   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) 
        { $('html, body').animate({    scrollTop: target.offset().top - 52 }, 500);
          return false;
        }
     }
  });

 

 
/*  End Inner link scroll top ----------------------- */


});

