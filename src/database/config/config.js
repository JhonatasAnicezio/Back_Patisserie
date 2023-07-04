require('dotenv/config');

const config = {
	username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || 'senha-mysql',
  database: process.env.MYSQLDATABASE || 'DB_USER_PATISSERIE',
  host: process.env.MYSQLHOST || 'localhost',
  port: process.env.MYSQLPORT || 3306,
	dialect: 'mysql',
};

module.exports = config;
