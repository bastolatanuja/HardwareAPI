const Hardware = require('../models/Hardware')



const getAllReviews = (req,res, next) =>{
    Hardware.findById(req.params.id)
    .then((hardware) => {
        res.json(hardware.reviews)
    }).catch(next)

}

const createReviews = (req,res, next) =>{

    req.body.reviewer = req.user.userId
    Hardware.findById(req.params.id)
    .then((hardware) => {
        hardware.reviews.push(req.body)
        hardware.save().then(b => res.json(b.reviews))
    }).catch(next)
}

const deleteAllReviews = (req,res, next) =>{
    Hardware.findById(req.params.id)
    .then((hardware) => {
        hardware.reviews= []
        book.save().then(b => res.json(b.reviews))
    }).catch(next)
    
}

const getReviewsbyId = (req,res,next) => {
    Hardware.findById(req.params.id)
    .then(hardware => {
        res.json(hardware.reviews.id(req.params.review_id))
    }).catch(next)
}

const updateReviewById =(req,res,next) => {
    Hardware.findById(req.params.id)
    .then(hardware => {
    let updated_reviews = hardware.reviews.map((item) => {
            if(item.id == req.params.review_id  &&  item.reviewer == req.user.userId){
            item.body = req.body.body
           
            }
            return item
        })
        hardware.review = updated_reviews
        hardware.save().then(hardware => res.json(hardware.reviews))
    }).catch(next)
}

const deleteReviewById = (req,res,next) => {
    Hardware.findById(req.params.id)
        .then(hardware => {
            let updated_reviews = hardware.reviews.filter((item) =>{
                return item.id != req.params.review_id
            
            })
            hardware.reviews = updated_reviews
            hardware.save().then( hardware => res.json(hardware.reviews))

        }).catch(next)
    }


module.exports={
    getAllReviews,
    createReviews,
    deleteAllReviews,
    getReviewsbyId,
    updateReviewById,
    deleteReviewById
}