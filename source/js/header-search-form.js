jQuery(document).ready(function($) {
  $('.toggle-search-form').click(function(evt) {
    if ( $(this).parent('.header-search').find('.search-form').hasClass('open-search-form') ) {
      $(this).parent('.header-search').find('.search-form').show(100).removeClass('open-search-form').find('input').focus();
      $('.header__list-menu').addClass('open-search');
    } else {
      $(this).parent('.header-search').find('.search-form').hide(100).addClass('open-search-form');
      $('.header__list-menu').removeClass('open-search');
    }
  })
});
