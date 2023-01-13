const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: {
        type:String
    },
    lname: {
        type:String
    },
    username: {
        type: String,
        required: true,
        unique: [true, ' This username is already registered'],
        minlength: [3,'Username should be longer than 5 characters']
    },
    password: {
        type:String,
        required: true,
    },
    gender: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Gender' },

        role: {
            type:String,
            enum:['User','Admin'],
            default:'User'
        },
  });

  module.exports = mongoose.model('User', userSchema);
