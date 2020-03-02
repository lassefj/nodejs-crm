const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
    res.send('Hello')
})


app.listen('5000')