require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const port = 3000;
const mongoString = process.env.DATABASE_URL

const app = express();
app.use(cors({ origin: '*'}));
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => console.error(error));
database.once('open', () => console.log('Connected to Database'));

app.listen(port, () => {
    console.log(`Server Started at ${port}`);
});

app.use('/api/v1', routes);