(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const slowNet =
    "connection" in navigator &&
    !!(navigator.connection.saveData || /2g/.test(navigator.connection.effectiveType || ""));
  const preferInstant =
    reduce || window.matchMedia("(max-width: 980px)").matches || slowNet;
  const markIn = (el) => el.classList.add("in");

  const targets = () =>
    Array.from(document.querySelectorAll(".reveal, .case-gallery figure, .page-gallery figure"));

  if (reduce) {
    targets().forEach(markIn);
  } else {
    const revealNow = () => {
      targets().forEach((el) => {
        if (el.closest(".pf-hero") || el.closest(".case-hero") || el.closest(".case-top") || el.closest(".hero")) {
          markIn(el);
          return;
        }
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) markIn(el);
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
      { rootMargin: "120px 0px", threshold: 0.01 }
    );

    targets().forEach((el) => {
      if (!el.classList.contains("in")) io.observe(el);
    });
  }

  const scrollToId = (id) => {
    const target = document.querySelector(id);
    if (!target) return false;
    target.scrollIntoView({
      behavior: preferInstant ? "auto" : "smooth",
      block: "start",
    });
    return true;
  };

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      if (!document.querySelector(id)) return;
      e.preventDefault();
      scrollToId(id);
      if (history.replaceState) history.replaceState(null, "", id);
    });
  });
})();
