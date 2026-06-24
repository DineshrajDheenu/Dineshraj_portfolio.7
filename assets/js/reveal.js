const revealElements = document.querySelectorAll(
    ".hero, .about, .skills, .works, .resume, .source-section, .source-files, .testimonials, .contact"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});

// Fallback: if IntersectionObserver is unavailable, or elements didn't get revealed
// after a short delay (e.g., due to edge cases), ensure they become visible.
if (!('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('show'));
} else {
    // After 700ms, add 'show' to any elements still hidden (safety fallback)
    setTimeout(() => {
        revealElements.forEach((el) => {
            if (!el.classList.contains('show')) el.classList.add('show');
        });
    }, 700);
}