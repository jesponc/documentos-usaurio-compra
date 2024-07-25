require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  DB_ENVIROMENT: process.env.DB_ENVIROMENT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_DIALECT: process.env.DB_DIALECT,
  FILE_SIZE: process.env.FILE_SIZE
};
