import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    image:String,
  title: String, 
  category: String,
  price: Number,
});
const Products = mongoose.model('products', productSchema);
export default Products