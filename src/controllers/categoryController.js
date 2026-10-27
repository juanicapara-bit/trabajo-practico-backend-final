const categoryService = require('../services/categoryService');

const crear = async (req, res) => {
    try {
        const nuevaCategoria = await categoryService.crearCategoria(req.body);
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const listar = async (req, res) => {
    try {
        const categorias = await categoryService.obtenerCategorias();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminar = async (req, res) => {
    try {
        const eliminada = await categoryService.eliminarCategoria(req.params.id);
        if (!eliminada) return res.status(404).json({ error: 'Categoría no encontrada' });
        res.status(200).json({ mensaje: 'Categoría eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { crear, listar, eliminar };