const Category = require('../models/categoryModel');

const crearCategoria = async (data) => {
    const categoria = new Category(data);
    return await categoria.save();
};

const obtenerCategorias = async () => {
    return await Category.find();
};

const eliminarCategoria = async (id) => {
    return await Category.findByIdAndDelete(id);
};

module.exports = { crearCategoria, obtenerCategorias, eliminarCategoria };