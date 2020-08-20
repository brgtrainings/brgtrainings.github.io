/*Custom JavaScript*/
$(function(){
  // lazy load images
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();

  // Activate wow.js
  new WOW().init();

  // Smooth-scroll initialization
  var scroll = new SmoothScroll('a[href*="#"]', { speed: 700, speedAsDuration: true });

  $(document).scroll(function () {
    var $nav = $(".navbar.fixed-top");
    if ($(this).scrollTop() > $nav.height() + 100 ) {
      $('#toTop').css('display', 'block');
    } else {
      $('#toTop').css('display', '');
    }
  });

  // Show scrolled navbar
  var $nav = $(".navbar.fixed-top");
  if (location.pathname == "/") {
    // Scroll down behavior
    $(document).scroll(function () {
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  } else {
    $nav.addClass("scrolled");
  }

  // message for doityourself exercises
  if (window.screen.availWidth < 768) {
    $('.best-view-message').append('<div class="alert alert-secondary alert-dismissible fade show" role="alert">Viewed best in Desktop or Tablet. \
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>');
  }

  // rendering youtube video in the Modal
  var $videoSrc;
  $(".trainings .video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);
  // when the modal is opened autoplay it
  $("#youtubeVideoModal").on("shown.bs.modal", function (e) {
    $("#youtubeVideo").attr("src", $videoSrc);
  });

  // stop playing the youtube video when I close the modal
  $("#youtubeVideoModal").on("hide.bs.modal", function (e) {
    $("#youtubeVideo").replaceWith(
      '<iframe class="embed-responsive-item" src="" id="youtubeVideo" allowscriptaccess="always" allow="autoplay"></iframe>'
    );
  });
});
