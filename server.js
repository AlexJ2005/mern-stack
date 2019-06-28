const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');

const items = require('./routes/api/Items')

const app = express();


app.use(bodyParse.json());

const db = require('./config/key').mongoURi;

mongoose.connect(db).then(() => console.log('Mongo connected')).catch(err => console.log(err));

app.use('/api/items', items);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
