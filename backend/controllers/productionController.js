const ProductionModel = require('../models/productionModel');

class ProductionController {
  static async getAll(req, res) {
    try {
      const records = await ProductionModel.getAll();
      res.json(records);
    } catch (error) {
      console.error('Error fetching production records:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async create(req, res) {
    try {
      const newRecord = await ProductionModel.create(req.body);
      res.status(201).json(newRecord);
    } catch (error) {
      console.error('Error creating production record:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getById(req, res) {
    try {
      const record = await ProductionModel.getById(req.params.id);
      if (record) {
        res.json(record);
      } else {
        res.status(404).json({ error: 'Production record not found' });
      }
    } catch (error) {
      console.error('Error fetching production record:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async update(req, res) {
    try {
      const updatedRecord = await ProductionModel.update(req.params.id, req.body);
      if (updatedRecord) {
        res.json(updatedRecord);
      } else {
        res.status(404).json({ error: 'Production record not found' });
      }
    } catch (error) {
      console.error('Error updating production record:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async delete(req, res) {
    try {
      const deletedRecord = await ProductionModel.delete(req.params.id);
      if (deletedRecord) {
        res.json({ message: 'Production record deleted successfully' });
      } else {
        res.status(404).json({ error: 'Production record not found' });
      }
    } catch (error) {
      console.error('Error deleting production record:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = ProductionController;
