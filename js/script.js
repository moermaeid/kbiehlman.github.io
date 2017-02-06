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
