const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required']
    },
    hardware:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Hardware'
    }]

})

module.exports = mongoose.model('Category',categorySchema)