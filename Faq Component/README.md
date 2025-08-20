# FAQ Component

## Español

### Descripción
Componente de Preguntas Frecuentes (FAQ) ligero y accesible basado en etiquetas nativas `details`/`summary`, con un diseño cálido y animaciones suaves. Solo HTML, CSS y JavaScript, sin herramientas de build.

### Cómo ejecutar
- Opción rápida: abre `index.html` directamente en tu navegador.
- Servidor local (recomendado):
```bash
npx serve .
```
Luego visita `http://localhost:3000` (o el puerto que indique la consola) y navega a `Faq Component/`.

### Estructura del proyecto
```
Faq Component/
  ├─ index.html      # Marcado del componente y preguntas de ejemplo
  ├─ style.css       # Estilos (tema cálido, animaciones, icono ➕/➖)
  ├─ index.js        # Lógica: mantiene una sola pregunta abierta a la vez
  └─ package.json    # Dependencia opcional: gsap (no imprescindible)
```

### Uso
Para añadir una nueva pregunta, agrega un bloque como este dentro de `div#faq-content` en `index.html`:
```html
<article class="faq">
  <details>
    <summary>Título de la pregunta</summary>
    <div class="contenido">
      <p>Respuesta de la pregunta.</p>
    </div>
  </details>
</article>
```

### Personalización rápida
- **Colores y fondo del contenedor**: `.faq-section` en `style.css`.
- **Tarjetas y efecto hover**: `.faq` y `.faq:hover`.
- **Animación/rotación del icono**: `summary::after` y `details[open] summary::after`.
- **Tipografía**: definida en `body`.

### Comportamiento
- Al abrir una pregunta, las demás se cierran automáticamente (`index.js`).
- La rotación del icono usa `transform` con `cubic-bezier` para una sensación natural.

### Compatibilidad
Funciona en navegadores modernos con soporte para `details`/`summary`. En navegadores muy antiguos, se expandirá sin animación.

---

## English

### Description
Lightweight and accessible FAQ component using native `details`/`summary` elements, with a warm theme and smooth animations. Plain HTML, CSS and JavaScript, no build tools required.

### How to run
- Quick option: open `index.html` directly in your browser.
- Local server (recommended):
```bash
npx serve .
```
Then visit `http://localhost:3000` (or the port shown in the console) and navigate to `Faq Component/`.

### Project structure
```
Faq Component/
  ├─ index.html      # Markup and sample questions
  ├─ style.css       # Styles (warm theme, animations, ➕/➖ icon)
  ├─ index.js        # Logic: keeps only one item open at a time
  └─ package.json    # Optional dependency: gsap (not required)
```

### Usage
To add a new FAQ item, insert the following block inside `div#faq-content` in `index.html`:
```html
<article class="faq">
  <details>
    <summary>Question title</summary>
    <div class="contenido">
      <p>Answer text goes here.</p>
    </div>
  </details>
</article>
```

### Quick customization
- **Container colors and background**: `.faq-section` in `style.css`.
- **Cards and hover effect**: `.faq` and `.faq:hover`.
- **Icon animation/rotation**: `summary::after` and `details[open] summary::after`.
- **Typography**: set in `body`.

### Behavior
- When one item opens, the others close automatically (`index.js`).
- Icon rotation uses `transform` with `cubic-bezier` easing for a natural feel.

### Compatibility
Works on modern browsers that support `details`/`summary`. On older browsers, items will expand without animation.
