$('.blog-widget').append('<a class="fancy-button blog-widget-more-link" href="/announcements">More Announcements</a>');
$('.events-widget').append('<a class="fancy-button events-widget-more-link" href="/events">More Events</a>');

// Look for published weather alert page. Add a corresponding slider element on the homepage.
/*if ( window.location.pathname == '/' ) {
  var firstUrl = 'http://www.wccstl.org/weather-alert-first-service-cancelled';
  var firstPic = 'http://s3.amazonaws.com/churchplantmedia-cms/wildwood_christian_church/cancel-first-service.jpg';
  var secondUrl = 'http://www.wccstl.org/weather-alert-second-service-cancelled';
  var secondPic = 'http://s3.amazonaws.com/churchplantmedia-cms/wildwood_christian_church/cancel-second-service.jpg';
  var bothUrl = 'http://www.wccstl.org/weather-alert-both-services-cancelled';
  var bothPic = 'http://s3.amazonaws.com/churchplantmedia-cms/wildwood_christian_church/cancel-both-services.jpg';

  function UrlExists(url, pic) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status == 200) {
      return true;
    } else {
      return false;
    }
  }

  function AddSlickSlide(pic) {
    $.when( $.ajax($('slider').slick()) ).done(function() {
      // add a new slick slider with the necessary image and link
      $('.slider').slick('slickAdd','<div class="slide"><img src="' + pic + '" /></div>', 0, 'addBefore');
      // go to the new slider right away
      $('.slider').slick('slickGoTo', 0, true);
    });
  }

  if ( UrlExists(bothUrl) ) {
    AddSlickSlide(bothPic);
  } else if ( UrlExists(firstUrl) ) {
    AddSlickSlide(firstPic);
  } else if ( UrlExists(secondUrl) ) {
    AddSlickSlide(secondPic);
  }
}
*/
