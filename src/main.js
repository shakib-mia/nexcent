import "../lib/scrollAnimate.js";
import "../lib/counterAnimation.js";
import Lenis from "lenis";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const navbarHeight = document.querySelector("#navbar").offsetHeight;

// Anchor click handler with scroll direction detection
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();

      const targetTop = target.getBoundingClientRect().top + window.scrollY;

      // detect scroll direction
      const currentScroll = window.scrollY;
      const goingUp = targetTop < currentScroll;

      lenis.scrollTo(target, {
        offset: goingUp ? -navbarHeight : 0,
      });

      lastScroll = currentScroll;
    }
  });
});

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

// Navbar animation

function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = window.pageYOffset;

    // console.log();

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;

    if (scrollDirection === "down") {
      document.getElementById("navbar").style.top = "-10rem";

      document.getElementById("navbar").style.transition = "all 0.5s ease";

      //   document
      //     .getElementById("navbar")
      //     .classList.add("shadow-[0_0_80px_0_#2B245D21]");
    } else {
      if (currentScrollY > 0) {
        // console.log(true);
        document.getElementById("navbar").style.top = 0;
      } else {
        document.getElementById("navbar").style.top = 0 + "px";
        document.getElementById("navbar").style.transition = "all 0.5s ease";
      }
    }

    if (currentScrollY > 0) {
      document.getElementById("navbar").style.boxShadow =
        "0 0 20px 0 #2B245D21";
      document.getElementById("navbar").style.position = "fixed";
      document.getElementById("navbar").style.backgroundColor = "#FFF";
    } else {
      document.getElementById("navbar").style.boxShadow = "none";
      // document.getElementById("navbar").style.position = "absolute";
      document.getElementById("navbar").style.top = 0 + "px";
      document.getElementById("navbar").style.backgroundColor = "#FFF0";
    }
  }
  // console.log(scrollDirection);

  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();
