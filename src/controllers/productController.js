const productService = require('../services/productService');

const crear = async (req, res, next) => {
    try {
        const nuevoProducto = await productService.crearProducto(req.body);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        next(error);
    }
};

const listar = async (req, res, next) => {
    try {
        const productos = await productService.obtenerProductos();
        res.status(200).json(productos);
    } catch (error) {
        next(error);
    }
};

const obtenerPorId = async (req, res, next) => {
    try {
        const producto = await productService.obtenerProductoPorId(req.params.id);
        if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
        res.status(200).json(producto);
    } catch (error) {
        next(error);
    }
};

const actualizar = async (req, res, next) => {
    try {
        const actualizado = await productService.actualizarProducto(req.params.id, req.body);
        if (!actualizado) return res.status(404).json({ error: 'Producto no encontrado' });
        res.status(200).json(actualizado);
    } catch (error) {
        next(error);
    }
};

const eliminar = async (req, res, next) => {
    try {
        const eliminado = await productService.eliminarProducto(req.params.id);
        if (!eliminado) return res.status(404).json({ error: 'Producto no encontrado' });
        res.status(200).json({ mensaje: 'Producto eliminado con éxito' });
    } catch (error) {
        next(error);
    }
};

module.exports = { crear, listar, obtenerPorId, actualizar, eliminar };