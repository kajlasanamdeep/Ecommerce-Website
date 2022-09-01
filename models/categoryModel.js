import { Schema, model, models } from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    required:true
  },
  image_url: {
    type: String, default:""
  },
  image_path: {
    type: String, default:""
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

const categoryModel = models.categories || model('categories', categorySchema);

export default categoryModel;