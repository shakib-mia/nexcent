$(document).ready(function () {
  $("header .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: {
      delay: 1,
    },
    dots: true,
    nav: false,
    animateIn: "animate__fadeInRightBig",
    animateOut: "animate__fadeOutLeftBig",
  });
});
