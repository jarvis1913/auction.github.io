$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  
    // Toggle mobile navigation menu
    $(".header__nav-toggle").on('click', function() {
      $(".header__nav").toggleClass("header__nav--open");
    });
  
    // Close mobile navigation menu when a link is clicked
    $(".header__nav-link").on('click', function() {
      $(".header__nav").removeClass("header__nav--open");
    });
  });
  