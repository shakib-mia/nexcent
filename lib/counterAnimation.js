document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const formatNumber = (number) => {
    return number.toLocaleString("en-US");
  };

  const animateCounter = (el, target, duration = 2000) => {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));

    const update = () => {
      start += step;
      if (start >= target) {
        el.textContent = formatNumber(target);
      } else {
        el.textContent = formatNumber(start);
        requestAnimationFrame(update);
      }
    };

    update();
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target.replace(/,/g, ""), 10);

          if (!isNaN(target)) {
            animateCounter(el, target);
            obs.unobserve(el); // Only run once
          }
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});
