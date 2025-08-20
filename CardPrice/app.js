// Referencias a elementos del DOM
const btnDarkMode = document.getElementById("btn-toggle"); // Botón de tema
const cards = document.querySelectorAll(".card"); // Todas las tarjetas de planes
const changeCard = document.getElementById("cards"); // Contenedor de tarjetas
const badge = document.getElementById("badge"); // Insignia de recomendado
const trial = document.querySelectorAll(".card-trial"); // Botones de prueba
const cardPrice = document.querySelectorAll(".card-price"); // Precios
const toggle = document.getElementById("btn-toggle"); // Botón de tema (duplicado por ID para estilos)

/* 💾 Leer estado al cargar: recupera selección de plan y tema */
const planGuardado = localStorage.getItem("planSeleccionado");
if (planGuardado) {
  const card = document.querySelector(`[data-plan-id="${planGuardado}"]`);
  if (card) card.classList.add("is-selected");
}

// Si el usuario dejó el sitio en modo oscuro, lo restauramos
const temaGuardado = localStorage.getItem("modoTema");
if (temaGuardado === "oscuro") {
  document.body.classList.add("dark-mode");
  badge.classList.add("dark-mode");
  cardPrice.forEach((card) => card.classList.add("dark-mode"));
  trial.forEach((trial) => trial.classList.add("dark-mode"));
  cards.forEach((card) => card.classList.add("dark-mode"));
  changeCard.classList.add("dark-mode");
  toggle.classList.add("dark-mode");
}

/* 🎯 Cambiar y guardar tema cuando el usuario hace clic */
btnDarkMode.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  badge.classList.toggle("dark-mode");
  cardPrice.forEach((card) => card.classList.toggle("dark-mode"));
  trial.forEach((trial) => trial.classList.toggle("dark-mode"));
  cards.forEach((card) => card.classList.toggle("dark-mode"));
  changeCard.classList.toggle("dark-mode");
  toggle.classList.toggle("dark-mode");

  // Persistimos la preferencia
  localStorage.setItem("modoTema", isDark ? "oscuro" : "claro");
});

/* ✨ Detectar selección de plan y guardarla */
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Quita selección previa
    cards.forEach((c) => c.classList.remove("is-selected"));
    // Marca como seleccionada la tarjeta clickeada
    card.classList.add("is-selected");

    const planId = card.dataset.planId;
    localStorage.setItem("planSeleccionado", planId);

    // Muestra animación en la insignia
    animateBadge(card);
  });
});

/* GSAP: animación de entrada de las tarjetas al cargar */
window.addEventListener("DOMContentLoaded", () => {
  gsap.to(".card", {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: "power2.out",
    stagger: 0.6, // una tras otra
  });
});

/* Animación de la insignia dentro de la tarjeta seleccionada */
function animateBadge(card) {
  const b = card.querySelector(".badge");
  if (!b) return;
  gsap.fromTo(
    b,
    { opacity: 0, rotate: 10, y: -10, scale: 0.9 },
    {
      opacity: 1,
      rotate: 0,
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: "back.out(1.8)",
    }
  );
}

/* Efecto hover con GSAP para dar feedback visual */
cards.forEach((card) => {
  let hoverTween = gsap.to(card, {
    scale: 1.02,
    boxShadow: "0 0 18px #ff9900",
    duration: 0.25,
    paused: true,
    ease: "power2.out",
  });

  card.addEventListener("mouseenter", () => hoverTween.play());
  card.addEventListener("mouseleave", () => hoverTween.reverse());
});

/* Al volver a la página, restaura la tarjeta seleccionada y anima su badge */
const plan = localStorage.getItem("planSeleccionado");
if (plan) {
  const selected = document.querySelector(`[data-plan-id = "${plan}"]`);
  if (selected) {
    selected.classList.add("is-selected");
    animateBadge(selected);
  }
}
