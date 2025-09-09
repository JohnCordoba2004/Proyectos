## Plan intensivo de CSS (2–3 semanas)

### Objetivo
Llegar a nivel junior sólido en CSS en 2–3 semanas, con un portfolio presentable y preparación para entrevista.

### Distribución diaria sugerida (12 h/día)
- **Mañana (5 h)**: 2 h teoría + 3 h ejercicios guiados
- **Tarde (4 h)**: 2 h proyecto del día + 2 h pulido/optimizaciones
- **Noche (3 h)**: 2 h práctica adicional + 1 h repaso/plan

---

## Opción recomendada: plan de 3 semanas

### Semana 1 — Fundamentos modernos
- **Día 1–2**: Selectores, Box Model, unidades, tipografía. Flexbox completo.
- **Día 3**: CSS Grid completo.
- **Día 4**: Positioning (relative/absolute/fixed/sticky), z-index, stacking context.
- **Día 5**: Responsive básico: mobile-first, breakpoints, `clamp()`, `min()`, `max()`.
- **Día 6**: Transitions, transforms, keyframes.
- **Día 7**: Mini proyecto: tarjeta/product card responsive.

### Semana 2 — Responsive profesional
- **Día 1–2**: Media queries avanzadas, contenedores fluidos, layout patterns (sidebar, holy-grail, masonry). 
- **Día 3–4**: Componentes responsive (navbar/hamburger, grids de cards, formularios).
- **Día 5–6**: Accesibilidad visual, estados de foco, contrastes, prefers-reduced-motion.
- **Día 7**: Proyecto: landing page completa y responsive.

### Semana 3 — Portfolio y entrevista
- **Día 1–3**: Proyecto final (e-commerce landing o dashboard admin).
- **Día 4–5**: Optimización (reducción CSS, variables, tokens, dark mode), Lighthouse, auditoría.
- **Día 6–7**: Preparación de entrevista técnica, pulido de portfolio y README.

---

## Alternativa exprés: plan de 2 semanas
- **Semana 1**: Comprimir lo de la Semana 1 + mitad de la Semana 2.
- **Semana 2**: Resto de componentes responsive + un proyecto grande + preparación de entrevista.

Requisitos: 10–12 h/día, disciplina estricta, foco total.

---

## Recursos clave
- **Documentación**:
  - [MDN Web Docs](https://developer.mozilla.org/) — Referencia oficial y guías.
  - [CSS‑Tricks](https://css-tricks.com/) — Artículos y patrones.
  - [Can I Use](https://caniuse.com/) — Compatibilidad por navegador.
  - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) — Validación de CSS.
- **Práctica interactiva**:
  - [CSS Battle](https://cssbattle.dev/) — Retos visuales con CSS.
  - [Frontend Mentor](https://www.frontendmentor.io/) — Proyectos con diseños reales.
  - [CSS Diner](https://flukeout.github.io/) — Selectores CSS.
  - [Flexbox Froggy](https://flexboxfroggy.com/) — Flexbox.
  - [Grid Garden](https://cssgridgarden.com/) — CSS Grid.
- **Canales recomendados**:
  - [Kevin Powell](https://www.youtube.com/@KevinPowell) — CSS moderno, responsive.
  - [Traversy Media](https://www.youtube.com/@TraversyMedia) — Guías prácticas.
  - [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified) — Conceptos concisos.

---

## Ejercicios guiados (7 días)

### Día 1 — Sistema de botones
- Objetivo: variables CSS, estados `:hover`, `:focus-visible`, `:disabled`.
```css
:root {
  --primary: #2563eb; --primary-600: #1d4ed8;
  --success: #16a34a; --danger: #dc2626; --radius: 10px;
}
.btn { padding: .6rem 1rem; border-radius: var(--radius); border: none; color: #fff; cursor: pointer; transition: all .2s ease; }
.btn:focus-visible { outline: 3px solid rgba(37,99,235,.35); outline-offset: 2px; }
.btn.primary { background: var(--primary); }
.btn.primary:hover { background: var(--primary-600); transform: translateY(-1px); }
.btn.success { background: var(--success); }
.btn.danger { background: var(--danger); }
```

### Día 2 — Layout con Flexbox
- Objetivo: alineación, `gap`, `wrap`, cards responsivas.
```css
.row { display: flex; flex-wrap: wrap; gap: 20px; }
.card { flex: 1 1 280px; min-width: 240px; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; }
```

### Día 3 — Grid adaptable
- Objetivo: `repeat()`, `minmax()`, `auto-fit`.
```css
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
```

### Día 4 — Navbar responsive (hamburger)
- Objetivo: mobile-first, `@media`, transiciones, `position: fixed`.
```css
.nav { display: flex; justify-content: space-between; align-items: center; }
.menu { position: fixed; inset: 0 0 0 40%; translate: 100% 0; transition: translate .3s ease; }
.menu.open { translate: 0 0; }
@media (min-width: 768px) { .menu { position: static; translate: none; display: flex; gap: 20px; } }
```

### Día 5 — Formulario accesible
- Objetivo: tipografía, estados de error, foco visible.
```css
label { display:block; margin: 8px 0 4px; }
input { width:100%; padding:.6rem .8rem; border:1px solid #d1d5db; border-radius:8px; }
input:focus-visible { outline: 3px solid #93c5fd; border-color:#60a5fa; }
.error { color:#b91c1c; font-size:.9rem; }
```

### Día 6 — Animaciones básicas
- Objetivo: `transition`, `@keyframes`, `prefers-reduced-motion`.
```css
.float { animation: float 3s ease-in-out infinite; }
@keyframes float { 0%,100%{ transform: translateY(0);} 50%{ transform: translateY(-6px);} }
@media (prefers-reduced-motion: reduce) { .float { animation: none; } }
```

### Día 7 — Tarjeta de producto responsive
- Objetivo: combinar todo (layout, tipografía, botones, responsive).
```css
.product { display:grid; gap:16px; grid-template-columns: 1fr; }
@media (min-width: 768px) { .product { grid-template-columns: 1fr 1fr; align-items:center; } }
.price { font: 600 1.25rem/1.2 system-ui; color:#0f172a; }
```

---

## Proyectos para portfolio

### 1) Landing e‑commerce
- Header sticky con navegación responsive
- Hero con CTA, sección de productos (Grid), testimonios, newsletter, footer
- Hover/active states, accesibilidad, dark mode opcional

### 2) Dashboard admin
- Sidebar colapsable, cards de métricas, tabla responsive
- Modo oscuro/claro con variables CSS y `@media (prefers-color-scheme)`

### 3) Portfolio personal
- Home, proyectos con filtros, about, contacto
- Animaciones sutiles, foco visible, Lighthouse > 90

---

## Conceptos clave para entrevista
- Flexbox vs Grid: cuándo usar cada uno
- Responsive: mobile‑first, breakpoints, unidades relativas (`rem`, `%`, `vw/vh`)
- Accesibilidad: `:focus-visible`, contraste, `prefers-reduced-motion`
- Performance: CSS crítico, minimizar reflows, orden de carga
- Especificidad, cascade layers, BEM/nomenclatura

### Preguntas típicas
- ¿Cómo construirías un layout responsive sin media queries? (pista: `clamp()`, Grid auto-fit)
- Diferencias prácticas entre Flexbox y Grid
- Estrategias para dark mode y tokens de diseño con variables CSS
- ¿Qué es el stacking context? ¿Cómo afecta `z-index`?

---

## Checklist diario
- [ ] Repasar conceptos del día anterior (15–30 min)
- [ ] Implementar 1–2 componentes desde cero
- [ ] Subir cambios a GitHub con README breve
- [ ] Revisar accesibilidad y responsive
- [ ] Anotar dudas y hallazgos

---

## Siguientes pasos inmediatos
1) Elige el plan (2 o 3 semanas).
2) Crea repositorio en GitHub y un README general.
3) Empieza por Flexbox hoy (2–3 h) y construye un layout simple.
4) Mañana: Grid + responsive mobile‑first y primer mini‑proyecto.

Si quieres, te preparo una lista de tareas diaria personalizada según el plan que elijas.


