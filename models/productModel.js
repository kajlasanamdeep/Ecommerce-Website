import { Schema, model, models } from 'mongoose';
import constants from '../constants';
const productSchema = new Schema({
  name: {
    type: String, required:true
  },
  price: {
    type:Number,
    required: true
  },
  currency:{
    type:String,
    enum:constants.currency,
    default:constants.currency[0]
  },
  image_url: {
    type: String, default:""
  },
  image_path: {
    type: String, default:""
  },
  size:{
    type: String,
    enum:constants.sizes,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref:'categories',
    required: true
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