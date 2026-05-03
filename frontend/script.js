console.log("Website is working!");
// Hero heading animation
gsap.from(".hero-heading", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power3.out"
});

// Project cards stagger
gsap.from(".project-card", {
  scrollTrigger: ".project-card",
  duration: 0.8,
  y: 60,
  opacity: 0,
  stagger: 0.2
});

// Timeline animation
gsap.from(".timeline-entry", {
  scrollTrigger: ".timeline-entry",
  duration: 1,
  x: -50,
  opacity: 0,
  stagger: 0.3
});

// Just add this to your script.js
emailjs.send("service_id", "template_id", {
  name: "John",
  email: "john@gmail.com",
  message: "Hello!"
});