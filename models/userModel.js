import { Schema, model, models } from 'mongoose';

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
    enum: ['USER', 'ADMIN'],
    default: 'USER'
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