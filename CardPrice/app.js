const btnDarkMode = document.getElementById("btn-toggle");
const cards = document.querySelectorAll(".card");
const changeCard = document.getElementById("cards");
const badge = document.getElementById("badge");
const trial = document.querySelectorAll(".card-trial");
const cardPrice = document.querySelectorAll(".card-price");
const toggle = document.getElementById("btn-toggle");

btnDarkMode.addEventListener("click", () => {
  console.log("Estas dando click", event.target);
  cardPrice.forEach((card) => {
    card.classList.toggle("dark-mode");
  });
  cards.forEach((card) => {
    card.classList.toggle("dark-mode");
  });
  trial.forEach((trials) => {
    trials.classList.toggle("dark-mode");
  });
  changeCard.classList.toggle("dark-mode");
  document.body.classList.toggle("dark-mode");
  badge.classList.toggle("dark-mode");
});

toggle.addEventListener("click", ()=>{
  toggle.classList.toggle("dark-mode")
});