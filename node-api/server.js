const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require('require-dir');

// iniciando app
const app = express();
app.use(express.json()); // permite o envio de Json a API 
app.use(cors()); // acesso publico a API

// iniciando DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

requireDir('./src/models');



app.use('/api', require('./src/routes'));


app.listen(3001);