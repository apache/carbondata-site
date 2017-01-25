   


// $(document).ready(function() {
   
   var topLevelLink = $('#leftmenu>ul>li>a');
   var secLevelLink = $('#leftmenu>ul>li>ul>li>a');
   var trdLevelLink = $('#leftmenu>ul>li>ul>li>ul>li>a');


   function loadContentUsingIdAttr(listOfLinks){

      for(var i = 0; i < listOfLinks.length; i++){
         var idAttr = $(listOfLinks[i]).attr("id");
         if(idAttr == undefined){
            var hrefLink = $(listOfLinks[i]).attr("href");
            if(hrefLink.indexOf("http") !== 0){
                $(listOfLinks[i]).click(function(e){
                   //$("#viewpage").empty();
                   $("#viewpage").load($(e.currentTarget).attr("href")); 

                   if($(this).is('a:not([href^="#"])')) {
                       }else{
                          $('a').off('click')
                       }
                   return false
                })
                $("#viewpage>a").attr("target", '_blank');
              }
         }
         else {
            $("#"+idAttr).click(function(e){

               $("#viewpage").load($(e.currentTarget).attr("id")+".html", function(){
                var contentLinks = $("#viewpage a");
                  loadContentUsingIdAttr(contentLinks);
                });
            })
         }
      }
   }

   loadContentUsingIdAttr(topLevelLink);
   loadContentUsingIdAttr(secLevelLink);
   loadContentUsingIdAttr(trdLevelLink);
    
    setTimeout(function(){     
     var contentLinks = $("#viewpage a");
       loadContentUsingIdAttr(contentLinks);          
          if($(this).is('a:not([href^="#"])')) {
           }else{
              $('#viewpage>li>a').off('click');
           }
     }, 500)

   
   // $('html, body').animate({    scrollTop: target.offset().top - 52 }, 500);

  
   $('a[href*="#"]:not([href="#"])').click(function() {
     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) 
          { $('html, body').animate({scrollTop: target.offset().top - 52 }, 500);
            return false;
          }
       }
    });

 // Left side nav bar
     
      $("#leftmenu>ul>li>a+ul ").hide();
      $("#leftmenu>ul>li>a+ul ul ").hide();    
      $('#leftmenu>ul>li>a').click(function() {
      var target;  
      $(this).parent().siblings().find('ul').fadeOut().animate(100);
      $(this).next('ul').stop(true, false, true).fadeToggle().animate(100);
     // $('html, body').animate({    scrollTop: target.offset().top}, 500);
      return false;      
      });
      $('#leftmenu ul ul li a ').click(function() {
      $(this).parent().siblings().find('ul').fadeOut().animate(100);
      $(this).next('ul').stop(true, false, true).fadeToggle().animate(100);
      return false;
       });

// });


//Documentation page print
function divPrint() {
        $("#viewpage").addClass("printable");
  window.print();
} 


