/* ── Hamburger menu ── */
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
});

/* ── Close nav when a link is clicked ── */
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* ── Sticky header scroll effect ── */
const header = document.getElementById('header');
const topBar = document.getElementById('topBar');

let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;

  // hide top bar after 60px to save space on mobile scroll
  if (topBar) {
    topBar.style.transform = y > 60 ? 'translateY(-100%)' : '';
    topBar.style.transition = 'transform 0.3s ease';
  }

  lastScroll = y;
}, { passive: true });

/* ── Hero slideshow ── */
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');
let currentSlide = 0;
let slideInterval;

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function startSlideshow() {
  slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(slideInterval);
    goToSlide(i);
    startSlideshow();
  });
});

if (slides.length > 1) startSlideshow();

/* ── Scroll-reveal ── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
);

document.querySelectorAll(
  '.product-card, .feature-card, .testimonial-card, .step-card, .trust-item, .about-inner'
).forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 60}ms`;
  observer.observe(el);
});

/* ── Smooth scroll for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = header.offsetHeight + 12;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

/* ── Active nav highlight on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-item');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navItems.forEach((item) => {
          const href = item.getAttribute('href');
          item.classList.toggle('active', href === `#${id}`);
        });
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach((s) => sectionObserver.observe(s));
