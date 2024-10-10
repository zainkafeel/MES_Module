const QualityModel = require('../models/qualityModel');

class QualityController {
  static async getAll(req, res) {
    try {
      const records = await QualityModel.getAll();
      res.json(records);
    } catch (error) {
      console.error('Error fetching quality control records:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async create(req, res) {
    try {
      const newRecord = await QualityModel.create(req.body);
      res.status(201).json(newRecord);
    } catch (error) {
      console.error('Error creating quality control record:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getById(req, res) {
    try {
      const record = await QualityModel.getById(req.params.id);
      if (record) {
        res.json(record);
      } else {
        res.status(404).json({ error: 'Quality control record not found' });
      }
    } catch (error) {
      console.error('Error fetching quality control record:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async update(req, res) {
    try {
      const updatedRecord = await QualityModel.update(req.params.id, req.body);
      if (updatedRecord) {
        res.json(updatedRecord);
      } else {
        res.status(404).json({ error: 'Quality control record not found' });
      }
    } catch (error) {
      console.error('Error updating quality control record:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async delete(req, res) {
    try {
      const deletedRecord = await QualityModel.delete(req.params.id);
      if (deletedRecord) {
        res.json({ message: 'Quality control record deleted successfully' });
      } else {
        res.status(404).json({ error: 'Quality control record not found' });
      }
    } catch (error) {
      console.error('Error deleting quality control record:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = QualityController;
