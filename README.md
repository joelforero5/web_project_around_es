# Around The U.S.

**Around The U.S.** es una página web diseñada como una red visual para explorar diferentes lugares dentro de los Estados Unidos. Utiliza una combinación de HTML, CSS y JavaScript para proporcionar una experiencia interactiva y adaptable a distintos tamaños de pantalla.

## 🛠️ Tecnologías utilizadas

- HTML5 semántico
- CSS3 con Grid Layout, Flexbox y Media Queries
- JavaScript para interacciones dinámicas
- Git y GitHub para control de versiones
- GitHub Pages para despliegue

## 📱 Diseño Responsivo

Se han aplicado media queries y técnicas avanzadas de layout para garantizar una experiencia fluida desde desktop hasta dispositivos móviles de 320px. Se incluyó manejo de desbordamientos y adaptabilidad de imágenes y tipografías.

## ✨ Funcionalidades

- Perfil de usuario editable
- Tarjetas de lugares con botones de "me gusta"
- Diseño visual limpio con uso de efectos hover y gradientes
- Modal emergente con formulario interactivo
- Accesibilidad visual mejorada

## Mejoras
### Mejoras

En esta versión del proyecto se han implementado varias mejoras respecto a la versión anterior:  

1. **Programación Orientada a Objetos (POO)**
   - Se crearon clases como `Card` y `FormValidator` para encapsular la lógica de cada componente, lo que mejora la organización del código, la reutilización y facilita el mantenimiento.  
   - Cada tarjeta (`Card`) maneja sus propios eventos internos, como eliminar o dar “like”, mediante handlers definidos dentro de la clase.  

2. **Handlers encapsulados**
   - Las funciones que manejan eventos ahora están ligadas a instancias de clases, evitando dependencias globales y mejorando la consistencia de los datos.  
   - Los formularios (`FormValidator`) manejan sus propias validaciones y estados de botones de manera independiente.  

3. **Validaciones más robustas**
   - Se implementó la validación de inputs con feedback visual inmediato mediante spans y estilos de error.  
   - Los formularios pueden resetear correctamente sus errores al cerrar los modales, garantizando una experiencia de usuario limpia.  

4. **Escalabilidad y mantenimiento**
   - El código ahora está estructurado en módulos (`Card.js`, `FormValidator.js`, `utils.js`, etc.), facilitando futuras extensiones del proyecto.  
   - La separación de responsabilidades permite agregar nuevas funcionalidades (como filtros de tarjetas o diferentes tipos de formularios) sin afectar el código existente.  

5. **Experiencia de usuario mejorada**
   - Los popups y modales responden a eventos de teclado y clic correctamente.  
   - Los mensajes de error desaparecen al resetear formularios, evitando confusiones visuales.  

> Esta versión demuestra cómo la aplicación puede evolucionar de una implementación funcional básica hacia un diseño más limpio y mantenible utilizando POO y buenas prácticas de modularización en JavaScript.

## 📁 Estructura del proyecto

```bash
web_project_around/
│
├── blocks/
│   └── card.css
│   └── cards.css
│   └── content.css
│   └── footer.css
│   └── header.css
│   └── page.css
│   └── popup.css
│   └── profile.css
├── images/
├── pages/
│   └── index.css
├── scripts/
│   └── Card.js
│   └── FormValidator.js
│   └── index.js
│   └── Popup.js
│   └── PopupWithForm.js
│   └── PopupWithImage.js
│   └── Section.js
│   └── UserInfo.js
│   └── utils.js
├── vendor/
│   └── fonts/
│   └── fonts.css
│   └── normalize.css
├── index.html
└── README.md

```

🚀 Deploy
Puedes ver el proyecto desplegado aquí: https://joelforero5.github.io/web_project_around_es/
