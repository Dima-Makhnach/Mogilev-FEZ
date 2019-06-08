jQuery(document).ready(function($) {

  var owlLandGallery = $('.land-gallery__list');
  var owlLandThumbnails = $('.land-gallery__thumbnails');
  var syncedSecondary = true;

  owlLandGallery.owlCarousel({
    items: 1,
    margin: 5,
    loop: false,
    nav: true,
    dots: false
  });

  owlLandGallery.on('changed.owl.carousel', syncPosition);

  owlLandThumbnails
  .on('initialized.owl.carousel', function () {
      owlLandThumbnails.find(".owl-item").eq(1).addClass("current");
    })
  .owlCarousel({
    items: 6,
    margin: 25,
    nav: true,
    dots: false
  });

  function syncPosition(el) {

    var current = el.item.index + 1;
    
    //end block

    owlLandThumbnails
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = owlLandThumbnails.find('.owl-item.active').length;
    var start = owlLandThumbnails.find('.owl-item.active').first().index();
    var end = owlLandThumbnails.find('.owl-item.active').last().index();

    if (current > end) {
      owlLandThumbnails.data('owl.carousel').to(current, 100, true);
    }

    if (current < start) {
      owlLandThumbnails.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }

  owlLandThumbnails.on("click", ".owl-item", function(e){

    if ( $(this).index() !== 0) {
      e.preventDefault();
      var number = $(this).index() - 1;
      owlLandGallery.data('owl.carousel').to(number, 300, true);
    }

  });

});
