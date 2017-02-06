// Navi fix uns ausblenden Startseite

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 600) {
         $('.scroller').fadeOut(300);
     }
     else {
         $('.scroller').fadeIn(300);
     }

     (function($) {          
          $(document).ready(function(){                    
              $(window).scroll(function(){                          
                  if ($(this).scrollTop() > 680) {
                      $('.navi-fix').fadeIn(50);
                  } else {
                      $('.navi-fix').fadeOut(50);
                  }
              });
          });
      })(jQuery);
});


$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 700) {
         $('.arrow').fadeOut(300);
     }
     else {
         $('.arrow').fadeIn(300);
     }
});

// smooth scroll  zum anker

var hashTagActive = "";
  $(".scroll").on("click touchstart" , function (event) {
      if(hashTagActive != this.hash) { 
          event.preventDefault();
          
          var dest = 0;
          if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
              dest = $(document).height() - $(window).height();
          } else {
              dest = $(this.hash).offset().top;
          }
          
          $('html,body').animate({
              scrollTop: dest
          }, 1000, 'swing');
          hashTagActive = this.hash;
      }
  });
