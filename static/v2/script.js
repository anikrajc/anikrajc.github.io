/* ── Scroll-aware navbar ── */
const nav = document.getElementById('nav');

function updateNav() {
  nav.classList.toggle('scrolled', window.scrollY > 16);
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();


/* ── Scroll-reveal (Intersection Observer) ── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
);

// Stagger cards and posts
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 60}ms`;
  revealObserver.observe(el);
});


/* ── Subtle cursor-tracking glow on cards ── */
function attachCardGlow(selector) {
  document.querySelectorAll(selector).forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', `${x}%`);
      card.style.setProperty('--my', `${y}%`);
      card.classList.add('glow-active');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('glow-active');
    });
  });
}

attachCardGlow('.post-card');
attachCardGlow('.info-card');
