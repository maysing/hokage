const popup = document.getElementById("menuPopup");
const openButtons = document.querySelectorAll(".openMenu");
const contactButton = document.querySelectorAll(".toContact");
const closeBtn = document.querySelector(".close");

const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const currentSlideNumber = document.getElementById("currentSlide");
const totalSlides = document.getElementById("totalSlides");


function openContactPage() {
  window.location.href = "kontakt.html";
}

contactButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    openContactPage();
  });
});

totalSlides.textContent = slides.length;

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");

  currentSlideNumber.textContent = index + 1;
}

showSlide(currentSlide);

openButtons.forEach((button) => {
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

const bookingPopup = document.getElementById("bookingPopup");

document.querySelectorAll(".openBooking").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    bookingPopup.style.display = "flex";
    form.reset();

    form.style.display = "flex";

    document.getElementById("successMessage").style.display = "none";
  });
});

document.querySelector(".booking-close").addEventListener("click", () => {
  bookingPopup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === bookingPopup) {
    bookingPopup.style.display = "none";
  }
});

const form = document.querySelector("#bookingPopup form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: data,
  });

  if (response.ok) {
    form.style.display = "none";

    document.getElementById("successMessage").style.display = "block";
  }
});
