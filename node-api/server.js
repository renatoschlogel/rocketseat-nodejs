const express = require("express");
const mongoose = require("mongoose");
const requireDir = require('require-dir');

// iniciando app
const app = express();

// iniciando DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

requireDir('./src/models');

const product = mongoose.model('Product');


 // primeira rotaa
app.get("/", (req, res)=>{

    product.create({
        title: 'React Native',
        description: "Teste Renato W Schlogel",
        url: "http://github.com/facebook/react-native" })
    res.send("Hello Renato opa!");
});

app.listen(3001);