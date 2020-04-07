(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
   
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        padding: 200
    }, setTimeout(autoplay, 8500));

    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 8500);
    }

  }); // end of document ready
})(jQuery); // end of jQuery name space

$('a[href*="#"]').click(function (e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});


