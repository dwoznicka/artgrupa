/**
* Smooth scrolling to anchor link under various conditions:
* - from within the page where the target is (both on page load and after cliking on an anchor link on the same page)
* - from a different the page where the target is
**/

function smooth_scroll_to(hash, e) {
  if(hash === '') {
    return false;
  } else {
    if($(hash).length > 0) {
      if(typeof e !== 'undefined') {
        e.preventDefault();
        history.pushState(null, null, $(e.target).attr('href'));
      }
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 50
      }, 750 );
      location.hash = hash;
    }
    if($('.navbar-collapse').hasClass('show')) {
      $('.navbar-toggler').click();
    }
  }
}



$(window).on('load',function() {
  smooth_scroll_to(window.location.hash);
});

$(document).ready(function() {
  $('a').on('click', function(event){
    smooth_scroll_to(this.hash, event);
  });
});