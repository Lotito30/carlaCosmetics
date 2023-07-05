const fs = require("fs");
const path = require("path");

const productosListaPath = path.resolve(__dirname, "../data/productos.json");
const productos = JSON.parse(fs.readFileSync(productosListaPath, "utf-8"));

const reviewsListaPath = path.resolve(__dirname, "../data/reviews.json");
const reviews = JSON.parse(fs.readFileSync(reviewsListaPath, "utf-8"));

const mainControllers = {
    index:(req,res) => {
        let title = "Home"
        res.render('index',
        {
            reviews:reviews,
            title:title,
            productos:productos
        })
    }
}
module.exports = mainControllers