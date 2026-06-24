const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navbar = document.querySelector('.navbar');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navbar.classList.toggle('nav-open');
  });

  // Close nav when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbar.classList.contains('nav-open')) {
        navbar.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close nav on window resize (desktop)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && navbar.classList.contains('nav-open')) {
      navbar.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});