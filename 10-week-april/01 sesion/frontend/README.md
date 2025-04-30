# Proyecto Parcial - Aplicación de Facturación Básica

Este proyecto es una aplicación desarrollada utilizando **Ionic** con **React** para el frontend. Se estructura con un enfoque de componentes reutilizables y una pantalla principal integradora. Además, se incluye un concepto básico de backend y base de datos aunque no se implementa la conexión en este parcial.

---

## 🧩 Tecnologías Utilizadas

- **Frontend:** Ionic + React
- **Backend (conceptual):** Spring Boot (Java)
- **Base de Datos (conceptual):** MySQL

---

## 📱 Frontend - Ionic React

El frontend es la parte visual e interactiva de la aplicación. Se desarrolla usando **Ionic con React**, lo que permite construir interfaces responsivas y modernas. En este proyecto, se implementan los siguientes **componentes reutilizables**:

- **Pantalla de productos:** permite mostrar productos y agregar al carrito.
- **Pantalla de factura:** formulario para el encabezado de la factura (cliente, fecha, etc).
- **Tipos de pago:** selección de método de pago (efectivo, tarjeta, etc).

Una **pantalla principal** reúne estos componentes para que el usuario pueda realizar todo el flujo de facturación en una sola vista.

---

## ⚙️ Backend - Spring Boot (Definición)

El backend representa la lógica del servidor. En un sistema completo, se encargaría de:

- Recibir solicitudes del frontend.
- Procesar datos, reglas de negocio y validaciones.
- Conectarse a la base de datos para almacenar o recuperar información.
- Exponer servicios (API REST) que el frontend pueda consumir.

Aunque en este parcial no se implementa el backend, se plantea usar **Spring Boot** como tecnología ideal por su rapidez, estructura modular y compatibilidad con bases de datos relacionales.

---

## 🗃️ Base de Datos - MySQL (Definición)

La base de datos se encarga de guardar la información de forma persistente. En este proyecto, la base de datos **MySQL** podría almacenar datos como:

- Productos
- Facturas
- Métodos de pago
- Clientes

La integración de la base de datos con el backend permitiría consultar y guardar datos desde la aplicación.

---

## 📌 Estructura del Proyecto (Frontend)
