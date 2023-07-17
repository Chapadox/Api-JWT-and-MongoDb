import mongoose from 'mongoose';

const user = mongoose.model('Users', {
  name: String,
  password: Number,
  isAdmin: Boolean
});

export default user
