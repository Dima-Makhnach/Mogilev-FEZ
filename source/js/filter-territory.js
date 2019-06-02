jQuery(document).ready(function($) {


  // Open mobile filter block

  $('.filter-mobile-toggle').click(function(evt) {
    $(this).parent('.filter-map').find('.filter-map__container').slideToggle()
  })
});
