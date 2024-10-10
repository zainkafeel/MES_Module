const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_user',           // replace with your PostgreSQL username
  host: 'localhost',           // or your PostgreSQL host
  database: 'mes_module',      // the database you created
  password: 'your_password',   // replace with your PostgreSQL password
  port: 5432,                  // default PostgreSQL port
});

module.exports = pool;
