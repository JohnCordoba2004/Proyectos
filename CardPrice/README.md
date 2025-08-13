# 🎯 CardPrice - Pricing Cards Component
---

## 🇺🇸 English

A modern, interactive pricing cards component built with HTML, CSS, and JavaScript. Features beautiful animations, dark mode toggle, and responsive design for subscription plans.

### ✨ Features

- **🎨 Modern Design**: Clean and professional pricing card layout
- **🌙 Dark Mode Toggle**: Switch between light and dark themes with persistent storage
- **🎭 Smooth Animations**: GSAP-powered animations for cards and interactions
- **📱 Responsive Layout**: Mobile-first design that works on all devices
- **💾 Local Storage**: Remembers user's theme preference and selected plan
- **🎯 Interactive Cards**: Click to select plans with visual feedback
- **🚀 Hover Effects**: Smooth hover animations with glowing effects

### 🚀 Live Demo

<!-- [View Live Demo](#) Add your live demo URL here -->

### 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **GSAP** - Professional animations
- **Font Awesome** - Icon library
- **Google Fonts** - Montserrat typography

### 📁 Project Structure

```
CardPrice/
├── index.html          # Main HTML file
├── style.css           # Styles and responsive design
├── app.js             # JavaScript functionality
├── package.json       # Dependencies
└── README.md          # This file
```

### 🎮 How to Use

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/CardPrice.git
   cd CardPrice
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Open in browser**

   ```bash
   # Simply open index.html in your browser
   # Or use a local server
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

### 🎨 Customization

#### Adding New Plans

To add a new pricing plan, duplicate the card structure in `index.html`:

```html
<div class="card" data-plan-id="your-plan-id">
  <div class="card-icon">
    <i class="fa-solid fa-icon-name"></i>
  </div>
  <div class="card-price">$X.XX/mes <span class="tax">+ tax</span></div>
  <!-- Add your features and content -->
</div>
```

#### Modifying Colors

Update the CSS variables in `style.css` to match your brand colors:

```css
:root {
  --primary-color: #ff9900;
  --secondary-color: #FAB818;
  --dark-bg: #121212;
}
```

#### Changing Animations

Modify the GSAP animations in `app.js` to adjust timing and effects.

### 🔧 Features Explained

#### Dark Mode Toggle

- Click the theme toggle button (top-right corner)
- Theme preference is saved in localStorage
- Smooth transitions between themes

#### Plan Selection

- Click any card to select a plan
- Visual feedback with selection state
- Selected plan is remembered across sessions

#### Animations

- **Card Entrance**: Cards animate in with staggered timing
- **Hover Effects**: Subtle scale and glow on hover
- **Badge Animation**: Special animation for recommended badge
- **Theme Transition**: Smooth color transitions

### 📱 Responsive Design

The component is built with a mobile-first approach:

- **Mobile**: Single column layout
- **Tablet**: Adaptive grid columns
- **Desktop**: Multi-column grid with optimal spacing

### 🌟 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 📄 License

This project is open source and available under the [MIT License](LICENSE).

### 👨‍💻 Author

**John Cordoba 🇨🇴**

- GitHub: [@JohnCordoba2004](https://github.com/JohnCordoba2004)
<!-- - Portfolio: [your-portfolio.com](#) -->

### 🙏 Acknowledgments

- [GSAP](https://greensock.com/gsap/) for smooth animations
- [Font Awesome](https://fontawesome.com/) for beautiful icons
- [Google Fonts](https://fonts.google.com/) for typography

---

## 🇪🇸 Español

Un componente moderno e interactivo de tarjetas de precios construido con HTML, CSS y JavaScript. Incluye hermosas animaciones, alternancia de modo oscuro y diseño responsivo para planes de suscripción.

### ✨ Características

- **🎨 Diseño Moderno**: Diseño limpio y profesional de tarjetas de precios
- **🌙 Alternancia de Modo Oscuro**: Cambia entre temas claros y oscuros con almacenamiento persistente
- **🎭 Animaciones Suaves**: Animaciones impulsadas por GSAP para tarjetas e interacciones
- **📱 Diseño Responsivo**: Diseño mobile-first que funciona en todos los dispositivos
- **💾 Almacenamiento Local**: Recuerda la preferencia de tema del usuario y el plan seleccionado
- **🎯 Tarjetas Interactivas**: Haz clic para seleccionar planes con retroalimentación visual
- **🚀 Efectos Hover**: Animaciones suaves de hover con efectos brillantes

### 🚀 Demo en Vivo

[Ver Demo en Vivo](#) <!-- Agrega tu URL de demo en vivo aquí -->

### 🛠️ Tecnologías Utilizadas

- **HTML5** - Marcado semántico
- **CSS3** - Estilos modernos con CSS Grid y Flexbox
- **JavaScript (ES6+)** - Funcionalidad interactiva
- **GSAP** - Animaciones profesionales
- **Font Awesome** - Biblioteca de iconos
- **Google Fonts** - Tipografía Montserrat

### 📁 Estructura del Proyecto

```
CardPrice/
├── index.html          # Archivo HTML principal
├── style.css           # Estilos y diseño responsivo
├── app.js             # Funcionalidad JavaScript
├── package.json       # Dependencias
└── README.md          # Este archivo
```

### 🎮 Cómo Usar

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/yourusername/CardPrice.git
   cd CardPrice
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Abre en el navegador**

   ```bash
   # Simplemente abre index.html en tu navegador
   # O usa un servidor local
   python -m http.server 8000
   # Luego visita http://localhost:8000
   ```

### 🎨 Personalización

#### Agregar Nuevos Planes

Para agregar un nuevo plan de precios, duplica la estructura de la tarjeta en `index.html`:

```html
<div class="card" data-plan-id="tu-plan-id">
  <div class="card-icon">
    <i class="fa-solid fa-nombre-icono"></i>
  </div>
  <div class="card-price">$X.XX/mes <span class="tax">+ impuestos</span></div>
  <!-- Agrega tus características y contenido -->
</div>
```

#### Modificar Colores

Actualiza las variables CSS en `style.css` para que coincidan con los colores de tu marca:

```css
:root {
  --primary-color: #ff9900;
  --secondary-color: #FAB818;
  --dark-bg: #121212;
}
```

#### Cambiar Animaciones

Modifica las animaciones GSAP en `app.js` para ajustar el tiempo y los efectos.

### 🔧 Características Explicadas

#### Alternancia de Modo Oscuro

- Haz clic en el botón de alternancia de tema (esquina superior derecha)
- La preferencia de tema se guarda en localStorage
- Transiciones suaves entre temas

#### Selección de Plan

- Haz clic en cualquier tarjeta para seleccionar un plan
- Retroalimentación visual con estado de selección
- El plan seleccionado se recuerda entre sesiones

#### Animaciones

- **Entrada de Tarjetas**: Las tarjetas se animan con tiempo escalonado
- **Efectos Hover**: Escala sutil y brillo al pasar el mouse
- **Animación de Insignia**: Animación especial para la insignia recomendada
- **Transición de Tema**: Transiciones suaves de color

### 📱 Diseño Responsivo

El componente está construido con un enfoque mobile-first:

- **Móvil**: Diseño de columna única
- **Tablet**: Columnas de cuadrícula adaptativas
- **Escritorio**: Cuadrícula de múltiples columnas con espaciado óptimo

### 🌟 Compatibilidad del Navegador

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

### 🤝 Contribuir

1. Haz fork del repositorio
2. Crea tu rama de características (`git checkout -b feature/CaracteristicaIncreible`)
3. Haz commit de tus cambios (`git commit -m 'Agrega alguna CaracteristicaIncreible'`)
4. Haz push a la rama (`git push origin feature/CaracteristicaIncreible`)
5. Abre un Pull Request

### 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

### 👨‍💻 Autor

**John Cordoba 🇨🇴**

- GitHub: [@JohnCordoba2004](https://github.com/JohnCordoba2004)
<!-- - Portafolio: [tu-portafolio.com](#) -->

### 🙏 Agradecimientos

- [GSAP](https://greensock.com/gsap/) por las animaciones suaves
- [Font Awesome](https://fontawesome.com/) por los hermosos iconos
- [Google Fonts](https://fonts.google.com/) por la tipografía

---

⭐ **¡Dale una estrella a este repositorio si te resultó útil!**
