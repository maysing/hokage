const popup = document.getElementById("menuPopup");
const openButtons = document.querySelectorAll(".openMenu");
const closeBtn = document.querySelector(".close");

const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

showSlide(currentSlide);

openButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        currentSlide = 0;
        showSlide(currentSlide);
        popup.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        popup.style.display = "none";
    }
});

next.addEventListener("click", (e) => {
    e.stopPropagation();
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prev.addEventListener("click", (e) => {
    e.stopPropagation();
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});