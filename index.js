const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
require('./utils/dbmongo');

const app = express()
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    return res.status(404).send({ message: 'Route' + req.url + ' Not found.' });
});

app.listen(port, () => { console.log(`listening on port ${port}`) })