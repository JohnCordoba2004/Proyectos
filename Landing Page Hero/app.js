/* // const paw = document.querySelector(".paw-secret");
// const tl = gsap.timeline({ paused: true });
// tl.from(".paw-message", { opacity: 0, scale: 0.5, ease: "back.out(1.7)" })
//   .to(".paw-message", { scale: 1, yoyo: true, repeat: 1, opacity: 1 })
//   .to(".paw-message", { opacity: 0, delay: 2 });

// let mostrar = false;
// paw.addEventListener("click", () => {
//   if (!mostrar) {
//     mostrar = true;
//     tl.play();
//   }
// }); */

document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduce-motion: reduce)"
  ).matches;

  // Timeline principal del hero (una sola vez)
  const heroTl = gsap.timeline({ defaults: { ease: "power2.out" } });

  heroTl
    .from(".hero-title", { opacity: 0, y: -40, duration: isMobile ? 0.5 : 0.9 })
    .from(".hero-subtitle", {
      opacity: 0,
      y: -24,
      duration: isMobile ? 0.45 : 0.8,
    })
    .from(
      ".hero-btn",
      { opacity: 0, scale: 0.9, duration: 0.6, ease: "back.out(1.7)" },
      isMobile ? "<" : "-=0.3"
    )
    .from(".hero-img", {
      opacity: 0,
      x: isMobile ? 40 : 90,
      scale: 0.4,
      duration: isMobile ? 0.6 : 1,
      // ease: "power3.out",
    });

  // Flotación solo en escritorio y si no hay reducción de movimiento
  if (!isMobile && !prefersReducedMotion) {
    heroTl.add(() => {
      gsap.from(".hero-img", {
        y: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }

  const paw = document.querySelector(".paw-secret");
  const message = ".paw-message";

  if (paw) {
    const tl = gsap.timeline({ paused: true, defaults: { duration: 0.5 } });
    tl.from(message, { opacity: 0, scale: 0.5, ease: "back.out(1.7)" })
      .to(message, { opacity: 1, scale: 1 })
      .to(message, { opacity: 0, duration: 0.4, delay: 1.2 });

    paw.addEventListener("click", () => tl.restart());
  } else {
    console.warn(
      "Elemento .paw-secret no encontrado; el easter egg no se inicializó"
    );
  }
});
