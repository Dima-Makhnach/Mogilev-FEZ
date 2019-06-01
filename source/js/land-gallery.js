jQuery(document).ready(function($) {
  var slider = $('.land-gallery__list').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:6,
        thumbMargin: 25,
        slideMargin:1,
        enableDrag: false,
        controls: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '.land-gallery__list .lslide'
            });
        }
  });

  $('.land-prev').click(function() {
    slider.goToPrevSlide()
  });

  $('.land-next').click(function() {
    slider.goToNextSlide()
  });
});
