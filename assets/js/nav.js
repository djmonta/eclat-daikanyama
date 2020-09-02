$(function() {

  $('#nav-global-menu').on('show.bs.collapse', function() {
    $('.navbar-toggler').addClass('is-active');
  });
  $('#nav-global-menu').on('hide.bs.collapse', function() {
    $('.navbar-toggler').removeClass('is-active');
  });

  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  window.onscroll = function() {
    $('.navbar-collapse').collapse('hide');
  }

  $(document).on("click", function(e){
    if ( 
      $(e.target).closest("#nav-global-menu").length == 0 &&
      $(".navbar-toggler").hasClass("is-active")
    )
    {
      $('.navbar-collapse').collapse('hide');
    }
  });
  
  $('[data-fancybox="gallery"]').fancybox({
    // smallBtn: true,
    // clickOutside: "close",
    buttons: [
      // "zoom",
      //"share",
      // "slideShow",
      //"fullScreen",
      //"download",
      // "thumbs",
      "close"
    ],
  });

});
