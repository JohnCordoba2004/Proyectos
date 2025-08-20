// Botón para abrir el menú
const menuToggle = document.getElementById("menu-toggle");
// Contenedor del menú lateral
const sideMenu = document.getElementById("side-menu");

// Botón para cerrar el menú
const closeBtn = document.getElementById("close-btn");
// Capa semitransparente detrás del menú
const overlay = document.getElementById("overlay");
// Todos los enlaces dentro del menú, usados para la animación en cascada
const links = document.querySelectorAll(".side-menu a");

// Abre el menú y activa el overlay
menuToggle.addEventListener("click", () => {
  sideMenu.classList.add("open");
  overlay.classList.add("active");

  // Aplica un retraso incremental para que los enlaces entren en cascada
  links.forEach((link, index) => {
    link.style.transitionDelay = `${index * 0.4}s`;
  });
});

// Cierra el menú tanto con el botón de cerrar como haciendo clic fuera (overlay)
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  // Cascada inversa: el último enlace se oculta primero
  links.forEach((link, index) => {
    link.style.transitionDelay = `${(links.length - index - 1) * 0.4}s`;
    link.style.left = "-100%"; // Mueve el enlace fuera de pantalla
    link.style.opacity = "0"; // Lo hace invisible
  });

  // Espera a que terminen las animaciones de los enlaces
  setTimeout(() => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("active");

    // Restaura estilos inline para que la próxima apertura funcione bien
    links.forEach((link) => {
      link.style.transitionDelay = "";
      link.style.left = "";
      link.style.opacity = "";
    });
  }, links.length * 400); // 0.4s por enlace
}
