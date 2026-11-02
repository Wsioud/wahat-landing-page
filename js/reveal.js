export function initReveal() {
  if (!('IntersectionObserver' in window)) return;

  const items = document.querySelectorAll('.section h2, .lead, .facts div, .services li, .team li, .slider, .form');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(el => {
    const position = Array.from(el.parentNode.children).indexOf(el);
    el.style.transitionDelay = (position % 4) * 0.1 + 's';
    el.classList.add('reveal');
    observer.observe(el);
  });
}