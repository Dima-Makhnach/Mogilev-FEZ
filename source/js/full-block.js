jQuery(document).ready(function($) {
  // Owl Carousel
  $('.full-block__list').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dotsEach: true,
  });

  $('.full-button-video').click(function(event) {
    $(this).parent('.unit-full').find('.unit-full__content').slideToggle(400)
  });

  $('.unit-full__content').click(function() {
    $(this).slideUp(400)
  });
});
