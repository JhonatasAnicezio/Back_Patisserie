require('dotenv/config');

const config = {
	username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'minha-senha',
  database: process.env.POSTGRES_DATABASE || 'DB_USER_PATISSERIE',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || 5432,
	dialect: 'postgres',
};

module.exports = config;
