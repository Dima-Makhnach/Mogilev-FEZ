jQuery(document).ready(function($) {

  // Mobile menu
  $('.toggle-mobile-menu').click(function(event) {
    if( $(this).hasClass('active-menu') ) {
      $(this).toggleClass('active-menu');
      $('.navigation-container').slideUp(400);
      $('.header__mobile-container').slideUp(100);
    } else {
      $(this).toggleClass('active-menu');
      $('.navigation-container').slideDown(400);
      $('.header__mobile-container').slideDown(400);
    }
  });

});
