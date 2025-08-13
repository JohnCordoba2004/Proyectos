const btnDarkMode = document.getElementById("btn-toggle");
const cards = document.querySelectorAll(".card");
const changeCard = document.getElementById("cards");
const badge = document.getElementById("badge");
const trial = document.querySelectorAll(".card-trial");
const cardPrice = document.querySelectorAll(".card-price");
const toggle = document.getElementById("btn-toggle");

/* 💾 Leer estado al cargar */
const planGuardado = localStorage.getItem("planSeleccionado");
if (planGuardado) {
  const card = document.querySelector(`[data-plan-id="${planGuardado}"]`);
  if (card) card.classList.add("is-selected");
}

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

/* 🎯 Guardar tema cuando el usuario cambia */
btnDarkMode.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  badge.classList.toggle("dark-mode");
  cardPrice.forEach((card) => card.classList.toggle("dark-mode"));
  trial.forEach((trial) => trial.classList.toggle("dark-mode"));
  cards.forEach((card) => card.classList.toggle("dark-mode"));
  changeCard.classList.toggle("dark-mode");
  toggle.classList.toggle("dark-mode");

  localStorage.setItem("modoTema", isDark ? "oscuro" : "claro");
});

/* ✨ Detectar selección de plan */
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Sacar clase a todas
    cards.forEach((c) => c.classList.remove("is-selected"));
    // Agregar a la seleccionada
    card.classList.add("is-selected");

    const planId = card.dataset.planId;
    localStorage.setItem("planSeleccionado", planId);

    // Tip: llama la animacion
    animateBadge(card);
    // y persistí en localStorage como ya hiciste
  });
});

/* GSAP */
/* Animacion de las card */
window.addEventListener("DOMContentLoaded", () => {
  gsap.to(".card", {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: "power2.out",
    stagger: 0.6, // una tras otra
  });
});

/* Badge */
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

/* Animacion de la card, lo buscamos con un forEach y aplicamos la animacion a cada tarjeta */
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

/* Guarda la seleccion del badge en el localStorage */
const plan = localStorage.getItem("planSeleccionado");
if (plan) {
  const selected = document.querySelector(`[data-plan-id = "${plan}"]`);
  if (selected) {
    selected.classList.add("is-selected");
    animateBadge(selected);
  }
}
