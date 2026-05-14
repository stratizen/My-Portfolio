/* =====================================================
   script.js — GSAP Animations for Portfolio
   Requires: gsap.min.js + ScrollTrigger.min.js
   loaded before this file in every HTML page
===================================================== */

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────
   UTILITY — run a function only if the
   element exists on the current page
───────────────────────────────────────── */
function animate(selector, callback) {
  if (document.querySelector(selector)) {
    callback();
  }
}

/* =====================================================
   1. HOMEPAGE — hero animations
===================================================== */
animate('.hero__tag', function() {
  var tl = gsap.timeline({ delay: 0.2 });

  tl.from('.hero__tag', {
    duration: 0.7,
    y: 20,
    opacity: 0,
    ease: 'power3.out'
  })
  .from('.hero__heading', {
    duration: 1.1,
    y: 60,
    opacity: 0,
    ease: 'power4.out'
  }, '-=0.3')
  .from('.hero__sub', {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: 'power3.out'
  }, '-=0.5')
  .from('.hero__cta .btn', {
    duration: 0.6,
    y: 20,
    opacity: 0,
    stagger: 0.15,
    ease: 'power2.out'
  }, '-=0.4');
});

/* =====================================================
   2. NAV — fade in from top on every page
===================================================== */
animate('.nav', function() {
  gsap.from('.nav', {
    duration: 0.8,
    y: -30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.1
  });
});

/* =====================================================
   3. PROJECTS PAGE — cards stagger in on scroll
===================================================== */
animate('.project-card', function() {
  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '.projects__grid',
      start: 'top 85%',
    },
    duration: 0.8,
    y: 60,
    opacity: 0,
    stagger: 0.15,
    ease: 'power3.out'
  });

  // Section title slide in
  gsap.from('.projects .section__title', {
    scrollTrigger: {
      trigger: '.projects .section__title',
      start: 'top 88%',
    },
    duration: 0.9,
    y: 40,
    opacity: 0,
    ease: 'power3.out'
  });
});

/* =====================================================
   4. TECH STACK PAGE — rows slide in from left
===================================================== */
animate('.stack__row', function() {
  gsap.from('.stack__row', {
    scrollTrigger: {
      trigger: '.stack__grid',
      start: 'top 85%',
    },
    duration: 0.7,
    x: -50,
    opacity: 0,
    stagger: 0.15,
    ease: 'power3.out'
  });

  // Tags pop in
  gsap.from('.tag--glow', {
    scrollTrigger: {
      trigger: '.stack__grid',
      start: 'top 75%',
    },
    duration: 0.5,
    scale: 0.5,
    opacity: 0,
    stagger: 0.05,
    ease: 'back.out(1.7)'
  });
});

/* =====================================================
   5. ABOUT PAGE — avatar + items animate in
===================================================== */
animate('.about__avatar', function() {
  // Avatar zoom in
  gsap.from('.about__avatar', {
    scrollTrigger: {
      trigger: '.about__inner',
      start: 'top 80%',
    },
    duration: 1,
    scale: 0.7,
    opacity: 0,
    ease: 'power3.out'
  });

  // Bio text
  gsap.from('.about__bio', {
    scrollTrigger: {
      trigger: '.about__bio',
      start: 'top 88%',
    },
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: 'power2.out'
  });

  // About items stagger from right
  gsap.from('.about__item', {
    scrollTrigger: {
      trigger: '.about__items',
      start: 'top 85%',
    },
    duration: 0.7,
    x: 50,
    opacity: 0,
    stagger: 0.15,
    ease: 'power3.out'
  });
});

/* =====================================================
   6. EXPERIENCE PAGE — timeline draws in
===================================================== */
animate('.timeline__item', function() {
  // Left side items
  gsap.from('.timeline__item--left', {
    scrollTrigger: {
      trigger: '.timeline',
      start: 'top 85%',
    },
    duration: 0.8,
    x: -60,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // Right side items
  gsap.from('.timeline__item--right', {
    scrollTrigger: {
      trigger: '.timeline',
      start: 'top 85%',
    },
    duration: 0.8,
    x: 60,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // Timeline vertical line drawing effect
  gsap.from('.timeline::before', {
    scrollTrigger: {
      trigger: '.timeline',
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: true
    },
    scaleY: 0,
    transformOrigin: 'top center',
    ease: 'none'
  });
});

/* =====================================================
   7. CONTACT PAGE — form slides up
===================================================== */
animate('.contact__form', function() {
  gsap.from('.contact__form .form__group', {
    scrollTrigger: {
      trigger: '.contact__form',
      start: 'top 85%',
    },
    duration: 0.6,
    y: 30,
    opacity: 0,
    stagger: 0.12,
    ease: 'power2.out'
  });
});

/* =====================================================
   8. FOOTER — fade up on all pages
===================================================== */
animate('.footer', function() {
  gsap.from('.footer__cta h2, .footer__cta p, .footer__links, .footer__copy', {
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 90%',
    },
    duration: 0.7,
    y: 30,
    opacity: 0,
    stagger: 0.1,
    ease: 'power2.out'
  });
});

/* =====================================================
   9. SECTION TITLES — all pages
===================================================== */
animate('.section__title', function() {
  gsap.utils.toArray('.section__title').forEach(function(title) {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: 'top 88%',
      },
      duration: 0.9,
      y: 40,
      opacity: 0,
      ease: 'power3.out'
    });
  });
});

/* =====================================================
   10. HOVER ANIMATIONS — project cards magnetic effect
===================================================== */
animate('.project-card', function() {
  document.querySelectorAll('.project-card').forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;

      gsap.to(card, {
        duration: 0.4,
        x: x * 0.04,
        y: y * 0.04,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', function() {
      gsap.to(card, {
        duration: 0.5,
        x: 0,
        y: 0,
        ease: 'elastic.out(1, 0.5)'
      });
    });
  });
});