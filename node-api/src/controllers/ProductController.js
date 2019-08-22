const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await product.find();

        return res.json(products);
    },

    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);

    }


}