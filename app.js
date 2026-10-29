const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Conectar a la base de datos
require('./src/config/db');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importar Rutas
const categoryRoutes = require('./src/routes/categoryRoute');
const productRoutes = require('./src/routes/productRoute');

// Usar Rutas
app.use('/api/categorias', categoryRoutes);
app.use('/api/productos', productRoutes);

const errorHandler = require('./src/middlewares/errorMiddleware');
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});