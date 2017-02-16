//Purpose of this JS
      function loadContentUsingIdAttr(listOfLinks){
        for(var i = 0; i < listOfLinks.length; i++){
         var idAttr = $(listOfLinks[i]).attr("id");
         if(idAttr == undefined){
            var hrefLink = $(listOfLinks[i]).attr("href");
            if(hrefLink.indexOf("http") !== 0){
                $(listOfLinks[i]).click(function(e){
                   $("#viewpage").load($(e.currentTarget).attr("href"));
                   if($(this).is('a:not([href^="#"])')) {
                       $('html, body').animate({scrollTop:-60}, 'slow');
                       return false;
                       }else{
                          $('a').off('click')
                       }
                   return false
                  })
                 $("#viewpage a").attr("target", '_blank');
              }
          }
      }
   }


//Purpose of this JS
    setTimeout(function(){     
     var contentLinks = $("#viewpage a");
       loadContentUsingIdAttr(contentLinks);
          if($(this).is('a:not([href^="#"])')) {
           }else{
              $('#viewpage>li>a').off('click');
           }
     }, 500);

//Purpose of this JS
  $('a[href*="#"]:not([href="#"])').click(function() {
       if (location.pathname.replace(/^\/ /, '') == this.pathname.replace(/^\/ /, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length)
            { $('html, body').animate({scrollTop: target.offset().top - 52 }, 500);
              return false;
            }
         }
      });

//Documentation page print
function divPrint() {
        $("#viewpage").addClass("printable");
  window.print();
} 


