const modal = document.getElementById("project-modal");
const buttons = document.querySelectorAll(".open-modal");
const closeBtn = document.querySelector(".close-modal");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        modal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});