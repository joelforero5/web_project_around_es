# Around The U.S.

**Around The U.S.** es una aplicación web interactiva tipo red social que permite a los usuarios explorar, crear y gestionar tarjetas de lugares dentro de los Estados Unidos.  
La aplicación está completamente conectada a una **API REST**, con persistencia de datos y una arquitectura modular basada en **Programación Orientada a Objetos (POO)**.

---

## 🛠️ Tecnologías utilizadas

### Frontend
- HTML5 semántico  
- CSS3 (Flexbox, Grid Layout, Media Queries)  
- JavaScript (ES6+)  
- Programación Orientada a Objetos (POO)  
- Arquitectura modular  

### Backend / Integraciones
- API REST (CRUD)
- Persistencia de usuarios y tarjetas
- Manejo de Promises y `async/await`

### Herramientas
- Git & GitHub
- GitHub Pages
- Webpack

---

## 📱 Diseño Responsivo

- Adaptado para resoluciones desde **320px hasta desktop**
- Layout flexible con Grid y Flexbox
- Imágenes responsivas
- Efectos visuales con `hover` y estados activos

---

## ✨ Funcionalidades

### 👤 Perfil de usuario
- Edición de nombre y descripción
- Datos sincronizados con el servidor
- Actualización del DOM tras respuesta exitosa de la API

### 🖼️ Tarjetas de lugares
- Render dinámico desde la API
- Creación de nuevas tarjetas
- Eliminación con **popup de confirmación**
- Manejo correcto de tarjetas creadas dinámicamente

### ❤️ Sistema de likes
- Like / dislike persistente en backend
- Estado visual sincronizado con la base de datos
- Lógica desacoplada entre UI y API

### 🪟 Popups reutilizables
- Popup de imagen
- Popup con formulario
- Popup de confirmación
- Cierre por botón, clic externo y tecla `Esc`

### ✅ Formularios
- Validación en tiempo real
- Mensajes de error personalizados
- Reseteo automático de errores
- Bloqueo/desbloqueo dinámico del botón submit

---

## 🧠 Arquitectura y mejoras

### Programación Orientada a Objetos (POO)
- Componentes encapsulados en clases:
  - `Card`
  - `Section`
  - `Popup`
  - `PopupWithForm`
  - `PopupWithConfirmation`
  - `FormValidator`
  - `UserInfo`
  - `Api`
- Cada clase tiene una única responsabilidad

### Separación de responsabilidades
- La UI no conoce detalles de la API
- La API no manipula el DOM
- Handlers inyectados por dependencias

### Manejo asíncrono
- `Promise.all()` para carga inicial
- Render solo tras respuestas exitosas
- Manejo centralizado de errores

### Escalabilidad
- Fácil de extender con nuevas funcionalidades
- Código mantenible y modular

---

## 📁 Estructura del proyecto

```bash
web_project_around/
│
├── blocks/
├── images/
├── pages/
│   └── index.css
├── scripts/
│   ├── Api.js
│   ├── Card.js
│   ├── FormValidator.js
│   ├── index.js
│   ├── Popup.js
│   ├── PopupWithForm.js
│   ├── PopupWithImage.js
│   ├── PopupWithConfirmation.js
│   ├── Section.js
│   ├── UserInfo.js
│   └── utils.js
├── vendor/
│   ├── fonts/
│   ├── fonts.css
│   └── normalize.css
├── index.html
└── README.md

```

🚀 Deploy
Puedes ver el proyecto desplegado aquí: https://joelforero5.github.io/web_project_around_es/
