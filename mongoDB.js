const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const uri = "mongodb+srv://wagiartono1922:FocusTime12@focustime.m5uk5.mongodb.net/?retryWrites=true&w=majority&appName=FocusTime";
const client = new MongoClient(uri);

app.get('/data', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('Focus_Time');
    const collection = database.collection('data_student');
    const data = await collection.find({}).toArray();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
