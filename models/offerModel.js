import { Schema, model, models } from 'mongoose';

const offerSchema = new Schema({
  title: {
    type: String,
    required:true
  },
  discount: {
    type:Number,
    required: true
  },
  quantity:{
    type:Number,
    default:1
  },
  product: {
    type: Schema.Types.ObjectId,
    ref:'products',
    required:true
  },
  description: {
    type: String, default:""
  },
  image_url: {
    type: String, default:""
  },
  image_path: {
    type: String, default:""
  },
  isActive: {
    type: Boolean, 
    default: true
  },
  launchDate: {
    type: Date,
    default: Date.now()
  },
  modifiedDate: {
    type: Date,
    default: Date.now()
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

const offerModel = models.offers || model('offers', offerSchema);

export default offerModel;