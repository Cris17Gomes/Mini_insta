const knex = require("knex")({
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "198117",
      database: "mini_insta"
    }
  });
  
  module.exports =  knex;