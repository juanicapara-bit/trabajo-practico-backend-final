const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/', categoryController.crear);
router.get('/', categoryController.listar);
router.delete('/:id', categoryController.eliminar);

module.exports = router;