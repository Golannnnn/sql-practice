const Pool = require("pg").Pool;
const pool = new Pool({
  user: "golan",
  host: "localhost",
  database: "api",
  password: "wwvooralles",
  port: 5432,
});
