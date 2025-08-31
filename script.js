/* ===================== */
/*   MODAL DE PRODUCTOS  */
/* ===================== */
function openModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "flex";
  modalImg.src = img.src;
  modalImg.alt = img.alt;
  setTimeout(() => modal.classList.add("show"), 10);
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 100);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") closeModal();
});

/* ===================== */
/*   TOGGLE MENÚ MÓVIL   */
/* ===================== */
const toggle = document.createElement("div");
toggle.classList.add("menu-toggle");
toggle.innerHTML = "&#9776;";
document.querySelector("nav").appendChild(toggle);

toggle.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
  toggle.innerHTML = navLinks.classList.contains("active")
    ? "&times;"
    : "&#9776;";
});

/* ===================== */
/*   CARRUSEL DE IMÁGENES  */
/* ===================== */

// Inicializar todos los carruseles
document.querySelectorAll(".carousel").forEach(carousel => {
  const imgs = carousel.querySelectorAll(".carousel-img");
  imgs[0].classList.add("active"); // mostrar la primera imagen
});

// Función para cambiar imagen
function changeSlide(button, direction) {
  const carousel = button.parentElement;
  const imgs = carousel.querySelectorAll(".carousel-img");
  let currentIndex = Array.from(imgs).findIndex(img => img.classList.contains("active"));
  
  imgs[currentIndex].classList.remove("active");
  let nextIndex = currentIndex + direction;

  if (nextIndex < 0) nextIndex = imgs.length - 1;
  if (nextIndex >= imgs.length) nextIndex = 0;

  imgs[nextIndex].classList.add("active");
}
