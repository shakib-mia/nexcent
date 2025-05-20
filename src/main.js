import "../lib/scrollAnimate.js";
import "../lib/counterAnimation.js";

$(document).ready(function () {
  $("header .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 5000, // Delay in milliseconds
    autoplayHoverPause: true, // Pause on hover
    dots: true,
    nav: false,
    animateIn: "animate__fadeIn",
    animateOut: "animate__fadeOut",
    // animateOut: "animate__flipOutY",
  });

  $("#clients .owl-carousel").owlCarousel({
    items: 7,
    loop: true,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 2000, // Delay in milliseconds
    dots: false,
    nav: false,
    // animateIn: "animate__fadeInRightBig",
    // animateOut: "animate__fadeOutLeftBig",
    responsive: {
      0: { items: 2 },
      768: { items: 3 },
      1024: { items: 7 },
    },
  });

  $("#testimonial .owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    animateIn: "animate__bounceInRight",
    animateOut: "animate__fadeOutLeftBig",
  });
});
