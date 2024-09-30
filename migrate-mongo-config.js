const { configDotenv } = require('dotenv');

configDotenv();


module.exports = {
  mongodb: {
    url: `mongodb://${process.env.MONGO_ROOT_USER}:${process.env.MONGO_ROOT_PASSWORD}@mongo:27017`,
    databaseName: process.env.MONGO_DATABASE,
    options: {
      useNewUrlParser: true 
    }
  },

  migrationsDir: "migrations",

  changelogCollectionName: "changelog",

  migrationFileExtension: ".js",
};