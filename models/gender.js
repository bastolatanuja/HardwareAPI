const mongoose = require('mongoose');

const genderSchema = mongoose.Schema({
    genderName: {
        type: String,
        required: true,
        trim: true,
    }
}); 

exports.Gender = mongoose.model("Gender", genderSchema);