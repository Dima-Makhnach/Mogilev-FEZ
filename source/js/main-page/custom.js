jQuery(document).ready(function($) {
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
      768: {
        items: 2,
        center: false,
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
    autoplay: true,
    center: true,
    nav: true,
    dots: false,
  });

  // Residents
  $('.residents__list').owlCarousel({
    loop: true,
    nav: true,
    center: false,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        center: true,
      },
      360: {
        items: 2
      },
      768: {
        items: 3
      },
      900: {
        items: 4
      },
      1290: {
        items: 6,
        margin: 30,
      }
    }
  });
});
