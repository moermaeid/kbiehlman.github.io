$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 700) {
         $('.scroller').hide();
     }
     else {
         $('.scroller').show();
     }

     (function($) {          
          $(document).ready(function(){                    
              $(window).scroll(function(){                          
                  if ($(this).scrollTop() > 950) {
                      $('.navi-fix').fadeIn(400);
                  } else {
                      $('.navi-fix').fadeOut(400);
                  }
              });
          });
      })(jQuery);
});

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 750) {
         $('.arrow').hide();
     }
     else {
         $('.arrow').show();
     }
});