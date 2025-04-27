$(document).ready(function () {
  $("header .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 3000, // Delay in milliseconds
    dots: true,
    nav: false,
    animateIn: "animate__fadeInRightBig",
    animateOut: "animate__fadeOutLeftBig",
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
});
