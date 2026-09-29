(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const markIn = (el) => el.classList.add("in");

  if (reduce) {
    document.querySelectorAll(".reveal, .case-gallery figure").forEach(markIn);
    return;
  }

  // Hero reveals on load
  requestAnimationFrame(() => {
    document.querySelectorAll(".pf-hero .reveal").forEach(markIn);
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          markIn(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  document.querySelectorAll(".reveal:not(.pf-hero .reveal), .case-gallery figure").forEach((el) => io.observe(el));

  // Smooth hash scroll for in-page nav
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
