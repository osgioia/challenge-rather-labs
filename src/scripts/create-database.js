require("dotenv").config();
/* eslint-disable no-console */
const config = require("../config");
const { Client } = require("pg");

const script = () => new Promise ((res, rej) => {
  const client = new Client({ connectionString: config.DB.CONNECTION_URI });
  client.connect((err) => {
    if (err) return rej(err);
    client.query(`CREATE DATABASE "${config.DB.NAME}"`, (err) => {
      if (err) return rej(err);
      client.end();
      console.log("Created database");
      res();
    });
  });
    
});

script().then(process.exit.bind(process, 0));

