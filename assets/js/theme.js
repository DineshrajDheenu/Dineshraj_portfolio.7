const toggle = document.getElementById("theme-toggle");

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            toggle.textContent = "☀️";
        } else {
            toggle.textContent = "🌙";
        }
    });
}