function openModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "flex";
  modalImg.src = img.src;
  modalImg.alt = img.alt;
  // pequeño delay para permitir animación CSS
  setTimeout(() => modal.classList.add("show"), 10);
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  setTimeout(() => modal.style.display = "none", 300); // coincide con el transition del CSS
}

/* Cerrar modal con tecla ESC */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

/* Evitar cerrar modal al hacer clic en la imagen */
document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target.id === "modal") {
    closeModal();
  }
});

/* Toggle menú móvil */
const toggle = document.createElement("div");
toggle.classList.add("menu-toggle");
toggle.innerHTML = "&#9776;"; // ☰
document.querySelector("nav").appendChild(toggle);

toggle.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
  // cambia el ícono entre ☰ y ❌
  toggle.innerHTML = navLinks.classList.contains("active")
    ? "&times;" // ❌
    : "&#9776;"; // ☰
});
