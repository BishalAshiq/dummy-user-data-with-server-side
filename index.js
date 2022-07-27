const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;



app.use(cors());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.98ro8.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {
   try{
    await client.connect();
    console.log("database Connected Successfully")
   }
   finally{
    // await client.close();
   }
  }

  run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello What is ups!')
})

app.listen(port, () => {
  console.log(`What is ups Saiaaaaa ${port}`)
});