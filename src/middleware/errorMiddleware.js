// src/middlewares/errorMiddleware.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Muestra el error detallado en tu terminal para que lo puedas depurar

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Error interno del servidor';

    res.status(statusCode).json({
        success: false,
        error: message
    });
};

module.exports = errorHandler;