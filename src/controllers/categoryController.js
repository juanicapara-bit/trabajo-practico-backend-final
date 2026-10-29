const categoryService = require('../services/categoryService');

const crear = async (req, res, next) => {
    try {
        const nuevaCategoria = await categoryService.crearCategoria(req.body);
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        next(error);
    }
};

const listar = async (req, res, next) => {
    try {
        const categorias = await categoryService.obtenerCategorias();
        res.status(200).json(categorias);
    } catch (error) {
        next(error);
    }
};

const eliminar = async (req, res, next) => {
    try {
        const eliminada = await categoryService.eliminarCategoria(req.params.id);
        if (!eliminada) return res.status(404).json({ error: 'Categoría no encontrada' });
        res.status(200).json({ mensaje: 'Categoría eliminada con éxito' });
    } catch (error) {
        next(error);
    }
};

module.exports = { crear, listar, eliminar };