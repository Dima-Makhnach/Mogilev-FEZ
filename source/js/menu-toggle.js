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

  // Owl Carousel
  $('.full-block__list').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dotsEach: true,
  });

  // Land Gallery
  $('.land-gallery__list').owlCarousel({
    items: 1,
    margin: 5,
    loop: true,
    nav: true,
    dots: false,
  });

  // Investors
  $('.investors__list').owlCarousel({
    items: 1,
    loop: true,
    center: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      1290: {
        items: 4,
        center: false
      }
    }
  });

  // Territory
  $('.territory__list').owlCarousel({
    items: 1,
    margin: 5,
    loop: true,
    center: true,
    nav: true,
    dots: false,
  });

  // Residents
  $('.residents__list').owlCarousel({
    loop: true,
    nav: true,
    // autoWidth: true,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      1290: {
        items: 5,
        margin: 30,
      }
    }
  });
});
