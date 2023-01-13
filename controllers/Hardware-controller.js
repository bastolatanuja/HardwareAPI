const  Hardware = require('../models/Hardware')


const getAllHardware =(req, res,next)=> {
    Hardware.find()
    .then(hardware => res.json(hardware))
        .catch(err=> next(err))
}

const createHardware = (req,res,next) => {
    Hardware.create(req.body)
    .then(hardware => res.status(201).json(hardware))
    .catch(next)
}

const deleteAllHardware = (req,res,next) => {
    Hardware.deleteMany()
    .then(reply=> res.json(reply))
    .catch(next)
}

const getHardwareById = (req,res,next) => {
    Hardware.findById(req.params.hardware_id)
  //.populate('category')
    .then(hardware=> res.json(hardware))
    .catch(next)
}

const updateHardwareById = (req,res,next) => {
    Hardware.findByIdAndUpdate(req.params.hardware_id,
        {$set:req.body},{new:true})
    .then(hardware=> res.json(hardware))
    .catch(next)
}

const deleteHardwareById = (req,res,next) => {
    Hardware.findByIdAndDelete(req.params.hardware_id)
    .then(reply=> res.json(reply))
    .catch(next)
}

module.exports={
    getAllHardware,
    getHardwareById,
    createHardware,
    deleteAllHardware,
    deleteHardwareById,
    updateHardwareById,
    
   
   
    
    }