require('dotenv').config();



const express = require('express');
const app = express();
app.use(express.json())
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


const nodeRouter = require('./routes/node')
app.use('/node', nodeRouter)

const dataRouter = require('./routes/data')
app.use('/data', dataRouter)


app.listen(3000, () => {
  console.log('Server is running on: http://localhost:3000');
});