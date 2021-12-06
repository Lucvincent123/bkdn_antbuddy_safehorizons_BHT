const express = require('express');

class ProductController {
    index(req, res) {
        res.render('product');
    }
}

module.exports = new ProductController();
