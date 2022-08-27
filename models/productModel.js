import { Schema, model, models } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String, required:true
  },
  price: {
    type: String, required: true
  },
  image: {
    type: String, default:""
  },
  quantity:{
    type: String, required: true
  },
  category: {
    type: String, required: true
  },
  description: {
    type: String, default:""
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  isAvaliable: {
    type: Boolean, 
    default: false
  },
  launchDate: {
    type: Date,
    default: Date.now()
  },
  modifiedDate: {
    type: Date,
    default: Date.now()
  }
});

const productModel = models.products || model('products', productSchema);

export default productModel;