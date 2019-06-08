jQuery(document).ready(function($) {

  $('.full-button-video').click(function(event) {

    var i_path = $(this).parent('.unit-full').find('iframe').attr('src');

    $('body').append('<div class="video-full"></div><div class="video-full__magnify"><iframe src="'+i_path+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div class="video-full__close"><i></i></div></div>');

    $('.video-full__magnify').css({
      left: ($(document).width() - $('.video-full__magnify').outerWidth())/2,
      // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('.video-full__magnify').outerHeight())/2
    });

    $('.video-full, .video-full__magnify').fadeIn('fast');
  });

  $('body').on('click', '.video-full__close, .video-full', function(event) {
    event.preventDefault();

    $('.video-full, .video-full__magnify').fadeOut('fast', function() {
      $('.video-full__magnify, .video-full__magnify, .video-full').remove();
    });
  });

});
