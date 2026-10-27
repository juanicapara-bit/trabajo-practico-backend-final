const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/', productController.crear);
router.get('/', productController.listar);
router.get('/:id', productController.obtenerPorId);
router.put('/:id', productController.actualizar);
router.delete('/:id', productController.eliminar);

module.exports = router;