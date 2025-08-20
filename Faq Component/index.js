// Selecciona todos los elementos <details> dentro del contenedor FAQ
const items = document.querySelectorAll(".faq details");

// Recorre cada <details> para controlar su apertura/cierre
items.forEach((item) => {
  // Referencia al contenedor del contenido (texto de la respuesta)
  const contenido = item.querySelector(".contenido");

  // Evento nativo que se dispara cuando <details> se abre o se cierra
  item.addEventListener("toggle", () => {
    if (item.open) {
      // Si este <details> se abrió, cerramos cualquier otro que esté abierto
      items.forEach((otro) => {
        if (otro !== item && otro.open) otro.removeAttribute("open");
      });
    }
  });
});
