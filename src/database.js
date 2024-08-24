const { Sequelize } = require('sequelize');
const config = require('./config/config'); // Path to config file

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// Initialize Sequelize with configuration for the current environment
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  logging: false, // Set to true to see SQL queries in the console
});

module.exports = sequelize;
