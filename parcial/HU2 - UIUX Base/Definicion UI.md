# **HU2: UI/UX Base**  

## **Descripción**  
Definir los lineamientos de diseño para la interfaz de usuario de la aplicación móvil de gestión y control de vuelos, asegurando coherencia visual y usabilidad. Esto incluye la elección de la paleta de colores, la tipografía, la iconografía y la estructura del layout base.  

## **Tareas**  
1. Definir la paleta de colores basada en el diseño identificado en el PDF.  
2. Establecer la tipografía principal y secundaria para mejorar la legibilidad.  
3. Seleccionar una iconografía minimalista y representativa de las funcionalidades de la app.  
4. Diseñar un layout base para la navegación, incluyendo un menú inferior y pantallas clave.  
5. Documentar y registrar estas decisiones en el sistema de diseño del proyecto.  

## **Criterios de Aceptación**  
✅ Se debe contar con una paleta de colores documentada y aplicada.  
✅ La tipografía y los estilos deben estar definidos y justificados.  
✅ La iconografía debe seguir un estilo coherente y representar correctamente cada funcionalidad.  
✅ Se deben presentar wireframes básicos que reflejen el layout general.  
✅ La información debe estar registrada en Trello con enlaces a los recursos utilizados.  

## **🎨 Paleta de Colores**  

```css
/* Paleta de colores oficial */
Color Primario: #1B3A4B  (Azul petróleo)
Color Secundario: #28587B (Azul acero)
Color Terciario: #6B9AC4 (Azul cielo)
Color de Fondo: #EDEDED (Gris claro)
Color de Resaltado: #FFB400 (Amarillo dorado)
```

| **Color** | **Código Hex** | **Uso en la UI** |
|--------|------------|-----------------------------|
| **Primario** | `#1B3A4B` | Botones principales, barra de navegación, encabezados destacados. |
| **Secundario** | `#28587B` | Fondos de secciones, tarjetas y detalles interactivos. |
| **Terciario** | `#6B9AC4` | Elementos destacados, bordes de tarjetas e inputs activos. |
| **Fondo** | `#EDEDED` | Fondo de la aplicación, separadores de secciones. |
| **Resaltado** | `#FFB400` | Notificaciones, indicadores de estado o mensajes importantes. |

---

## **📝 Tipografía**  
- **Fuente Principal:** **Inter / Roboto** *(Sans-serif, limpia y legible en móviles)*  
- **Encabezados:** `Bold (700) - 24px`  
- **Subtítulos:** `SemiBold (600) - 18px`  
- **Texto Base:** `Regular (400) - 16px`  
- **Botones:** `Medium (500) - 14px`  

---

## **🖼️ Iconografía**  
El estilo de iconos es **minimalista y funcional**. Los más representativos son:  
- **🏠 Inicio:** Ícono de casa.  
- **✈️ Mis Vuelos:** Ícono de avión.  
- **📩 Notificaciones:** Ícono de campana.  
- **📋 Check-in:** Ícono de ticket.  
- **💳 Método de Pago:** Ícono de tarjeta de crédito.  

📌 **Confirmación:** Se usará una librería de iconos vectoriales modernos como **Material Icons** o **FontAwesome**.  

---

## **📌 Layout Base de la Aplicación**  
El diseño está basado en una estructura de navegación clara y accesible:  

- **Menú Inferior (Bottom Navigation Bar)**:  
  - Inicio 🏠  
  - Mis Vuelos ✈️  
  - Reservar 📅  
  - Notificaciones 🔔  
  - Check-in 🎟️  

- **Pantallas Principales:**  
  1️⃣ Inicio – Información de la aerolínea y servicios.  
  2️⃣ Búsqueda de vuelos – Formulario para buscar vuelos.  
  3️⃣ Resumen del vuelo – Detalles del vuelo seleccionado.  
  4️⃣ Equipaje y Métodos de Pago – Opciones de equipaje y pago.  
  5️⃣ Confirmación de Reserva – Resumen y finalización.  

