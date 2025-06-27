import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
   email: {
    type: String,
    required: true,
    trim: true,
    unique: true, // prevent duplicate email
    lowercase: true,
    match: [/.+\@.+\..+/, "Invalid email format"] //validation check
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;