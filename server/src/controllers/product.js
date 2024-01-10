import Products from "../models/product.js";


// get all 
export const getProducts=async (req,res)=>{
    try {
        const products=await Products.find({})
res.json(products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// post 

export const createProducts=async (req,res)=>{
    try {
        const product=new Products({
            image:req.body.image,
            title:req.body.title, 
            category:req.body.category,
            price:req.body.price,  
        })

    await product.save()
    res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// delete 
export const deleteProduct=async (req,res)=>{
try {
    const {id}=req.params
    const deletedProduct=await Products.findByIdAndDelete(id)
    res.status(200).json("product deleted")
} catch (error) {
    res.status(500).json({message:error.message})
}
}