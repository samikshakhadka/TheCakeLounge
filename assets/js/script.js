// Minimal enhancements: current year, fade-ins, and prefers-reduced-motion safety
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  // Fade-in on scroll for sections and cards
  const revealEls = document.querySelectorAll('.section, .card');
  const reveal = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'opacity .8s ease, transform .8s ease';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  };

  const io = new IntersectionObserver(reveal, { threshold: 0.12 });
  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    io.observe(el);
  });
})();


