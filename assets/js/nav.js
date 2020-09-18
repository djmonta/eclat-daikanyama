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

    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2top').fadeIn();
    } else {
        $('#back2top').fadeOut();
    }
  }

  $("#back2top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $(document).on("click", function(e){
    if ( 
      $(e.target).closest("#nav-global-menu").length == 0 &&
      $(".navbar-toggler").hasClass("is-active")
    )
    {
      $('.navbar-collapse').collapse('hide');
    }
  });
  
  if ($('.gallery').length > 0) {
  $('.gallery').fancybox({
    // smallBtn: true,
    clickOutside: "close",
    clickSlide: "close",
    buttons: [
      "close"
    ],
    mobile: {
      preventCaptionOverlap: false,
      idleTime: false,
      clickContent: function(current, event) {
        return current.type === "image" ? "close" : false;
      },
      clickSlide: function(current, event) {
        return current.type === "image" ? "close" : "close";
      },
    }
  });
  }

  if ($('body').hasClass('toppage')) {
    cycleBackgrounds();
  }

});

function cycleBackgrounds() {
	var index = 0;

	$imageEls = $('.background-image'); // Get the images to be cycled.

	setInterval(function () {
		// Get the next index.  If at end, restart to the beginning.
		index = index + 1 < $imageEls.length ? index + 1 : 0;
		// Show the next image.
		$imageEls.eq(index).addClass('show');
		// Hide the previous image.
		$imageEls.eq(index - 1).removeClass('show');

	}, 3000);
};

function changeTwitterWidgetDesign() {
  var $twitter_widget = $('iframe.twitter-timeline');
  var $twitter_widget_contents = $twitter_widget.contents();
  
  if ($twitter_widget.length > 0 && $twitter_widget[0].contentWindow.document.body.innerHTML !== ""){
    $twitter_widget_contents.find('head').append('<link href="./assets/css/style.css" rel="stylesheet" type="text/css">');
  }
  else {
    setTimeout(function(){
      changeTwitterWidgetDesign();
    }, 350);
  }
}
