const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");

const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");
const links = document.querySelectorAll(".side-menu a");

menuToggle.addEventListener("click", () => {
  sideMenu.classList.add("open");
  overlay.classList.add("active");

  // Aplcar ddelay en cascada
  links.forEach((link, index) => {
    link.style.transitionDelay = `${index * 0.4}s`;
  });
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  // Cascada inversa: último link se oculta primero
  links.forEach((link, index) => {
    link.style.transitionDelay = `${(links.length - index - 1) * 0.4}s`;
    link.style.left = "-100%"; // Mueve el link fuera
    link.style.opacity = "0"; // Lo hace invisible
  });

  // Esperar a que termine la animación de todos los links
  setTimeout(() => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("active");

    // Restaurar estilos para la próxima apertura
    links.forEach((link) => {
      link.style.transitionDelay = "";
      link.style.left = "";
      link.style.opacity = "";
    });
  }, links.length * 400); // 0.4s por enlace
}
