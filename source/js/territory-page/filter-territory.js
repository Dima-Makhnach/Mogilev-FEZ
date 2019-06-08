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

  // Filter

  function anotherElementChecked(elements) {
    var checked = false

    $(elements).each(function(index, el) {
      if( $(el).is(':checked') ) checked = true;
    });

    return checked
  }

  function filterElement(listFilter, dataFilter) {
    var resultArray = []

    return resultArray
  }

  $('.city-list').on('click', 'input', function(evt) {
    let dataCity = $(this).data('city').toLowerCase()
    var listArea = $('#area-list').find('.city-filter__item')

    // CheckAnother Input
    let arrayInput = $('.city-input')
    arrayInput.splice($(arrayInput).index($(this)), 1)

    if(!anotherElementChecked(arrayInput)) {

      if ($(this).is(':checked')) {

        $(listArea).css('display', 'none')

        const resultAreas = listArea.filter((index, item) => {
          return $(item).data('city').toLowerCase() == dataCity
        })

        $(resultAreas).css('display', 'block');

      } else {
        $(listArea).css('display', 'block')
      }

    } else {

      if ($(this).is(':checked')) {

        const resultAreas = listArea.filter((index, item) => {
          return $(item).data('city').toLowerCase() == dataCity
        })

        $(resultAreas).css('display', 'block');

      } else {
        const resultAreas = listArea.filter((index, item) => {
          return $(item).data('city').toLowerCase() == dataCity
        })

        $(resultAreas).css('display', 'none')
      }

    }

  });


  // Close result filter

  $('.result-element').click(function(evt) {

    if ( $(evt.target).hasClass('toggle-result-close') ) {
      $(this).hide()
    } else if ( $(evt.target).hasClass('toggle-result-slide') ) {
      $(this).hide('slide', {direction: 'left'}, 500);
    }

  })

});

$(window).on('load', function() {
  // ScrollBar
  $('#area-list').mCustomScrollbar();
  $('#city-list').mCustomScrollbar();
})
