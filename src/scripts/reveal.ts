function initReveal() {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-x]');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
  );

  for (const target of targets) {
    const delay = target.dataset.revealDelay;
    if (delay) target.style.setProperty('--reveal-delay', `${delay}s`);
    observer.observe(target);
  }
}

// Module scripts run after the document has been parsed, so the
// [data-reveal] elements above this script in the DOM already exist.
initReveal();
