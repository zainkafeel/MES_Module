const express = require('express');
const router = express.Router();
const productionController = require('../controllers/productionController');

// Define routes for production records
router.get('/', productionController.getAll);
router.post('/', productionController.create);
router.get('/:id', productionController.getById);
router.put('/:id', productionController.update);
router.delete('/:id', productionController.delete);

module.exports = router;
