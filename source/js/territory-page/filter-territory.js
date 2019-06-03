jQuery(document).ready(function($) {


  // Open mobile filter block

  $('.filter-mobile-toggle').click(function(evt) {
    $(this).parent('.filter-map').find('.filter-map__container').slideToggle();
  })

  // Open title filter block

  $('.toggle-unit-filter').click(function(evt) {
    $(this).parent('.city-filter__container').find('.city-filter__list').slideToggle();
    $(this).toggleClass('open-menu-filter');
  })

  // ScrollBar

  // $('.city-filter__list').customScrollbar({
  //   skin: "default-skin",
  //   preventDefaultScroll: true,
  //   fixedThumbHeight: 235,
  //   vScroll: false,
  // })
});
