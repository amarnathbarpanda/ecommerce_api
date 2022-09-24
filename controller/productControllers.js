const Product = require('../model/Product');


//create product controller
module.exports.createProduct = async (req, res) =>{

    const product = await Product.findOne({name: req.body.name});

    if(product){
        return res.status(500).json({ data: { message: 'product already exists' } });
    }

    const newProduct = await Product.create(req.body);

    return res.status(200).json({data: {product: newProduct}});

}

//get all the products from DB
module.exports.getProducts = async (req, res) =>{
    const products = await Product.find();

    if(!products){
        return res.status(500).json({ data: { message: 'no products found'}});
    }

    return res.status(200).json({data: {products: products}});
}

//delete a product
module.exports.deleteProduct = async (req, res) =>{
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);

    if(!product){
        return res.status(500).json({data: {message: 'product doesn\'t exists'}});
    }
    return res.status(200).json({data: {message: 'product deleted'}});
}


// update an existing product
module.exports.updateProductQuantity = async (req, res) =>{
    const id = req.params.id;
    const qty = req.query.number;
    const updatedProduct = await Product.findByIdAndUpdate(id, { $inc: { quantity: qty } }, { new: true });

    if (!updatedProduct){
        return res.status(500).json({ data: { message: 'product doesn\'t exists' } });
    }

    return res.status(200).json({ data: { product: { updatedProduct}, message: 'product updated successfully'}});
}