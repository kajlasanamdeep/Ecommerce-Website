import { Schema, model, models } from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    required:true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

const categoryModel = models.categories || model('categories', categorySchema);

export default categoryModel;