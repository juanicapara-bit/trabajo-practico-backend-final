# Trabajo Práctico Final - Backend UTN.BA

API RESTful desarrollada con Node.js, Express y MongoDB (Mongoose), aplicando arquitectura en capas (Controladores y Servicios) para la gestión de productos y categorías.

## 🛠 Tecnologías Utilizadas
- **Node.js** & **Express**
- **MongoDB Atlas** & **Mongoose**
- **Dotenv** & **CORS**

## 📂 Estructura del Proyecto
- `src/models/`: Esquemas de Mongoose (Productos, Categorías, Usuarios).
- `src/services/`: Lógica de negocio y conexión directa con la base de datos.
- `src/controllers/`: Manejo de solicitudes y respuestas HTTP.
- `src/routes/`: Definición de endpoints de la API.
- `src/config/`: Configuración de la conexión a MongoDB.

## ⚙️ Instrucciones de Instalación y Ejecución
1. Clonar el repositorio.
2. Instalar las dependencias:
   ```bash
   npm install

   ## ⚙️ Instrucciones de Ejecución
Iniciar el servidor en modo desarrollo:
```bash
node app.js

## 📡 Endpoints y Ejemplos (Mock JSON)

### Categorías
- **POST `/api/categorias`** - Crea una nueva categoría.
  - **Body (JSON):**
    ```json
    {
      "nombre": "Bebidas",
      "descripcion": "Bebidas sin alcohol"
    }
    ```
- **GET `/api/categorias`** - Obtiene todas las categorías.
- **DELETE `/api/categorias/:id`** - Elimina una categoría por su ID.

### Productos
- **POST `/api/productos`** - Crea un producto asociado a una categoría.
  - **Body/JSON:**
    ```json
    {
      "nombre": "Agua Mineral 1.5L",
      "descripcion": "Agua sin gas",
      "precio": 1200,
      "stock": 50,
      "categoria": "AQUI_EL_ID_DE_LA_CATEGORIA"
    }
    ```
- **GET `/api/productos`** - Obtiene el listado completo de productos (con `.populate()` de categoría).
- **GET `/api/productos/:id`** - Obtiene un producto específico por su ID.
- **PUT `/api/productos/:id`** - Actualiza un producto por su ID.
- **DELETE `/api/productos/:id`** - Elimina un producto por su ID.