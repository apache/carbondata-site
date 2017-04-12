$(document).ready(function(){

    $('#fullwidth').addClass('fullwidth');

    // display video player
    $('#videoList a').on('click',function(e){
        $('#fullwidth').removeClass('fullwidth');

        e.preventDefault();
        // get video url
        var u = $(this).attr('href');
        var i = u.substring(u.search('=')+1,u.length);
        // build player
        $('#videoPlayer .videoview').html('<iframe width="640" height="400" src="https://www.youtube.com/embed/' + i + '" frameborder="0" allowfullscreen></iframe>');

        // display player
        $('#videoPlayer').fadeIn(500);


    }); // eof display player

    // hide video player
    $('#videoPlayer').on('click',function(e){

        // hide player
        $('#videoPlayer').fadeOut(500);
        // destroy player
        $('#videoPlayer .videoview').empty();

    }); // eof hide player
});