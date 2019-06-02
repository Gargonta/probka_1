$('.fn_modal').fancybox({
  touch: false
});
  // Открыть меню
  $('.open-menu').on('click', function(e) {
    e.preventDefault();
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).parents('#top-menu').find('.menu-hidden').addClass('active');
    } else {
      $(this).removeClass('active');
      $(this).parents('#top-menu').find('.menu-hidden').removeClass('active');
    }
  });
  $(document).on('click', function(e) {
    if (!$(e.target).closest(".open-submenu, .left-menu .hidden").length) {
      $('.open-submenu, .left-menu .hidden').removeClass('active');
    }
    if (!$(e.target).closest(".open-menu, .menu-hidden").length) {
      $('.open-menu, .menu-hidden').removeClass('active');
    }
    if (!$(e.target).closest(".zoom-open, .pop_search").length) {
      $('.pop_search').removeClass('active');
    }
    e.stopPropagation();
  });

  // Открыть подменю
  $('.open-submenu').on('click', function(e) {
    e.preventDefault();
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).parent().find('.hidden').addClass('active');
    } else {
      $(this).removeClass('active');
      $(this).parent().find('.hidden').removeClass('active');
    }
  });

  // Меню для планшетов
   var window_width = $(window).width();
   $(window).on('resize', function() {
    window_width = $(window).width();
   });

   if (window_width <= 1220) {

    $('.rhomb').on('click', function(e) {
      e.preventDefault();
      var $link = $(this).attr('href');
      var $parent = $(this).parents('.menu-main');

      if (!$parent.hasClass('active')) {
        $('.menu-main').removeClass('active');
        $parent.addClass('active');
        $('.menu-bg').addClass('active');
      } else {
        $parent.removeClass('active');
        $('.menu-bg').removeClass('active');
        window.location.href = $link;
      }

    });
    $(document).on('click', function(e) {
      if (!$(e.target).closest(".rhomb").length) {
        $('.menu-main, .menu-bg').removeClass('active');
      }
      e.stopPropagation();
    });
   } else {
    $('.menu-main').on('mouseenter', function() {
      $('.menu-bg').addClass('active');
    });
    $('.menu-main').on('mouseleave', function() {
      $('.menu-bg').removeClass('active');
    });
   }
$(window).on('scroll', function(){
    var top = $(this).scrollTop();
    var elem = $('#top-menu');
    if (top > 150) {
     elem.addClass('active');
    } else {
     elem.removeClass('active');
    }
  });