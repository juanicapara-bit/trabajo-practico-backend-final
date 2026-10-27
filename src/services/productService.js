const Product = require('../models/productModel');

const crearProducto = async (data) => {
    const producto = new Product(data);
    return await producto.save();
};

const obtenerProductos = async () => {
    return await Product.find().populate('categoria');
};

const obtenerProductoPorId = async (id) => {
    return await Product.findById(id).populate('categoria');
};

const actualizarProducto = async (id, data) => {
    return await Product.findByIdAndUpdate(id, data, { new: true });
};

const eliminarProducto = async (id) => {
    return await Product.findByIdAndDelete(id);
};

module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto
};