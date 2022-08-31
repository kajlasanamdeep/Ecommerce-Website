import { Schema, model, models } from 'mongoose';
import constants from '../constants';

const userSchema = new Schema({
  firstName: {
    type: String, default: ""
  },
  lastName: {
    type: String, default: ""
  },
  email: {
    type: String, required: true, unique: true
  },
  password: {
    type: String, required: true
  },
  userType: {
    type: String,
    enum: constants.users,
    default: constants.users[0]
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  phoneNumber: {
    type: String, required: true
  }
});

const userModel = models.users || model('users', userSchema);

export default userModel;