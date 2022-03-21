
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

const releaseMap = new Map();
releaseMap.set("2.3.0", ["3.1.1", "2.4.5", "2.3.4"])
releaseMap.set("2.2.0", ["3.1.1", "2.4.5", "2.3.4"])
releaseMap.set("2.1.1", ["2.4.5", "2.3.4"])
releaseMap.set("2.0.1", ["2.4.5", "2.3.4"])
releaseMap.set("1.6.0", ["2.4.5", "2.3.4"])

var selectedRelease = "2.3.0"
var selectedPackage = ""

function populatePackage() {
  var sparkPackage = document.getElementById("package");
  var i, L = sparkPackage.options.length - 1;
  for(i = L; i >= 0; i--) {
    sparkPackage.remove(i);
  }
  for (var value of releaseMap.get(selectedRelease)) {
      sparkPackage.add(new Option(value))
  }
  selectedPackage = releaseMap.get(selectedRelease)[0]
  updateLinks()
}

function updateLinks() {
  var downloadLink = document.getElementById("download")
  downloadLink.innerText = "carbondata-" + selectedRelease + "-bin-spark" + selectedPackage
  var baselink = "https://www.apache.org/dyn/closer.lua/carbondata/"
  var baseIntegrityFileLink = "https://downloads.apache.org/carbondata/"
  var link =  baselink + selectedRelease + "/apache-" + downloadLink.innerText + "-hadoop2.7.2.jar"
  var siglink = document.getElementById("signature")
  var checksumlink = document.getElementById("checksum")
  var keys = document.getElementById("keys")
  siglink.href = baseIntegrityFileLink + selectedRelease + "/apache-" + downloadLink.innerText + "-hadoop2.7.2.jar" + ".asc"
  checksumlink.href = baseIntegrityFileLink + selectedRelease + "/apache-" + downloadLink.innerText + "-hadoop2.7.2.jar" + ".sha512"
  keys.href = "https://downloads.apache.org/carbondata/KEYS"
  downloadLink.href = link
}

$(document).ready(() => {
      var releases = document.getElementById("release")
      var releaseNotes = document.getElementById("notes");

      for (var [key] of releaseMap.entries()) {
        releases.append(new Option(key))
        var li = document.createElement("li")
        var a = document.createElement("a");
        li.appendChild(a)
        a.href = "https://cwiki.apache.org/confluence/display/CARBONDATA/Apache+CarbonData+"
            + key + "+Release"
        a.innerText = key
        releaseNotes.appendChild(li);
      }
    populatePackage()
    }
);

$(document).ready(function() {
      $('#release').on('change', function () {
        selectedRelease = $(this).val();
        populatePackage();
      });
     }
);

$(document).ready(function() {
      $('#package').on('change', function () {
        selectedPackage = $(this).val();
        updateLinks()
      });
    }
);


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