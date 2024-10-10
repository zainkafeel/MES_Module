const express = require('express');
const router = express.Router();
const qualityController = require('../controllers/qualityController');

// Define routes for quality control records
router.get('/', qualityController.getAll);
router.post('/', qualityController.create);
router.get('/:id', qualityController.getById);
router.put('/:id', qualityController.update);
router.delete('/:id', qualityController.delete);

module.exports = router;
