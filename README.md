# 🧪 UserHub – Gestor de Usuarios

SPA desarrollada como prueba técnica para la vacante de **Desarrollador Frontend Junior (React)**. Permite gestionar un directorio de usuarios consumido desde una API pública, con funcionalidades de búsqueda, creación, edición y eliminación de usuarios.

---

## 🎯 Objetivo

Construir una **Single Page Application** (SPA) en React que consuma la API de `https://reqres.in/api/users` y permita al usuario final:

- Visualizar una lista paginada de usuarios
- Buscar por nombre o correo
- Agregar usuarios manualmente
- Editar usuarios existentes
- Eliminar usuarios

---

## 🧩 Caso

> “**UserHub – Gestor de Usuarios**”: Mini app para gestionar un directorio de usuarios con una interfaz moderna, responsiva y fácil de usar.

---

## ✅ Funcionalidades implementadas

1. **Listado de usuarios**
   - Se consume la API pública: `https://reqres.in/api/users`
   - Se muestran: avatar, nombre completo y correo
   - Soporte para **paginación**

2. **Buscador**
   - Filtro local por **nombre o email**
   - Input controlado con búsqueda en tiempo real

3. **Agregar nuevo usuario**
   - Formulario con: nombre, email y URL de avatar
   - Usuarios creados localmente (no enviados a la API)
   - Se añaden dinámicamente a la lista principal

4. **Editar usuario**
   - Edición de cualquier usuario (API o manual)
   - Modal responsivo para editar campos

5. **Eliminar usuario**
   - Eliminación directa desde la lista
   - Confirmación previa antes de eliminar

6. **Manejo de estado global**
   - Implementado con **Context API**
   - Estado centralizado que contiene:
     - Lista total de usuarios
     - Resultados filtrados
     - Usuario en edición

---

## 🎨 Diseño

- Diseño responsivo y moderno
- Estilos construidos con **Tailwind CSS**
- UI clara, con botones e inputs accesibles
- Componente de tarjeta para mostrar usuarios

---

## ⚙ Tecnologías usadas

| Herramienta        | Uso                            |
|--------------------|---------------------------------|
| React              | Librería base del proyecto      |
| Vite               | Bundler rápido y moderno        |
| Tailwind CSS       | Estilos responsivos y modernos  |
| Context API        | Manejo de estado global         |
| Axios              | Consumo de la API REST          |
| React Router DOM   | Navegación entre rutas          |

---

## 📦 Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/JesusOsorioJ/frontUsuarios.git
   ```

2. Copia el archivo de variables de entorno y configura la URL base de la API:

   ```bash
   cp .env.example .env
   ```

3. Instalar dependencias:

   ```bash
   npm install
   ```

4. Ejecutar la app:

   ```bash
   http://localhost:5173
   ```


## 📌 Stack y justificación
- React con Vite: mejora el tiempo de carga y compilación en desarrollo.

- Context API: suficiente para el alcance de la app y evita dependencias adicionales como Redux.

- Tailwind CSS: permite construir rápidamente una interfaz visual limpia y responsiva sin necesidad de CSS manual.

- Axios: más expresivo y manejable que fetch para consumo de APIs.


## 📤 Entrega

Desplegado en url: https://front-usuarios.vercel.app/
