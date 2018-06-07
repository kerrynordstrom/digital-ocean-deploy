const express = require('express')
const app = express()

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://104.236.23.173:27017';

// Database Name
const dbName = 'admin';

app.get('/', (req, res) => {
  res.send('Hey, I\'m a Node.js app!')
})

app.listen(3000, () => {
  console.log('Server is up on 3000')
})

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});