// Theme Toggle
const toggle = document.querySelector(".theme-toggle");
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (icon.classList.contains("bi-moon")) {
    icon.classList.replace("bi-moon", "bi-sun");
  } else {
    icon.classList.replace("bi-sun", "bi-moon");
  }
});

// Swiper
new Swiper(".mySwiper", {
  loop: true,
  autoplay: { delay: 3000 },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});