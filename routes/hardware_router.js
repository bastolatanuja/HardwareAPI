const express=require('express')
const hardwareController =require('../controllers/Hardware-controller')
const reviewsController =require('../controllers/reviews-controller')
const {verifyUser} = require('../middleware/auth')
const {verifyAdmin} = require('../middleware/auth')
// const { push } = require('../data/books')

// const books=require('../data/books')

const router =express.Router()
router.route('/')
.get(hardwareController.getAllHardware)
.post(verifyUser,hardwareController.createHardware)
.put((req, res) => {
    res.status(501).json({'msg':"Not Implemented"})
})
.delete(verifyUser,verifyAdmin,hardwareController.deleteAllHardware)

router.use(verifyUser)
    .route('/:id')
    .get(hardwareController.getHardwareById)

.post((req,res)=>{
    res.status(501).json({'msg':"Not implemented"})
})
.put(hardwareController.updateHardwareById)

.delete(hardwareController.deleteHardwareById)

router.route('/:id/reviews')
.get(reviewsController.getAllReviews)
.post(verifyUser,reviewsController.createReviews)
.put((req,res) => res.status(500).json({'msg': 'Not implemented'}))
.delete(reviewsController.deleteAllReviews)



router.route('/:id/reviews/:review_id')
.get(reviewsController.getReviewsbyId)
.post((req,res) => res.status(501).json({ 'msg':'not implemented'}))
.put(reviewsController.updateReviewById)
.delete(reviewsController.deleteReviewById)


module.exports=router