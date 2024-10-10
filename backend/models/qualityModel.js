const pool = require('../database/db');

class QualityModel {
  static async create(record) {
    const { name, status } = record;
    const query = `
      INSERT INTO quality_controls (name, status)
      VALUES ($1, $2)
      RETURNING *;
    `;
    const values = [name, status];
    const res = await pool.query(query, values);
    return res.rows[0];
  }

  static async getAll() {
    const query = `SELECT * FROM quality_controls ORDER BY id ASC;`;
    const res = await pool.query(query);
    return res.rows;
  }

  static async getById(id) {
    const query = `SELECT * FROM quality_controls WHERE id = $1;`;
    const res = await pool.query(query, [id]);
    return res.rows[0];
  }

  static async update(id, updatedRecord) {
    const { name, status } = updatedRecord;
    const query = `
      UPDATE quality_controls
      SET name = $1, status = $2
      WHERE id = $3
      RETURNING *;
    `;
    const values = [name, status, id];
    const res = await pool.query(query, values);
    return res.rows[0];
  }

  static async delete(id) {
    const query = `DELETE FROM quality_controls WHERE id = $1 RETURNING *;`;
    const res = await pool.query(query, [id]);
    return res.rows[0];
  }
}

module.exports = QualityModel;
