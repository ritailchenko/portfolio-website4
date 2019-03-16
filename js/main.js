// $('#page-body').hide();

//     setTimeout(function() {
//         $('.sk-cube-grid').hide()
//         $("#page-body").show();
//     }, 3100);



$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

    $( document ).mousemove( function( e ) {
            $( '.background1' ).parallax( -15, e );
            $( '.background2' ).parallax( -18, e );
            $( '.background3' ).parallax( -10, e );
            $( '.background4' ).parallax( -11, e );
            $( '.background5' ).parallax( -12, e );
            $( '.background6' ).parallax( -14, e );
      $( '.cloud1' )    .parallax( 30 , e );
      $( '.cloud2' )    .parallax( 23 , e );
      $( '.cloud3' )    .parallax( 24 , e );
      $( '.cloud4' )    .parallax( 25 , e );
      $( '.cloud5' )    .parallax( 23 , e );
      $( '.cloud6' )    .parallax( 24 , e );

    });


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
