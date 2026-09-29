(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const markIn = (el) => el.classList.add("in");

  const targets = () =>
    Array.from(document.querySelectorAll(".reveal, .case-gallery figure"));

  if (reduce) {
    targets().forEach(markIn);
    return;
  }

  // Immediate: hero + anything already in view
  const revealNow = () => {
    targets().forEach((el) => {
      if (el.closest(".pf-hero") || el.closest(".case-hero") || el.closest(".case-top")) {
        markIn(el);
        return;
      }
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) markIn(el);
    });
  };
  requestAnimationFrame(revealNow);

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          markIn(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
  );

  targets().forEach((el) => {
    if (!el.classList.contains("in")) io.observe(el);
  });

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
