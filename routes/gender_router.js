
const express = require("express");
const { Gender } = require("../models/gender");
const router = express.Router();

// get all batches
router.get("/", (req, res) => {
    Gender.find({}).then(
        (gender) => {
            res.status(200).json({
                success: true,
                message: "List of gender",
                data: gender,
            });
        }).catch(
            (err) => {
                res.status(500).json({
                    success: false,
                    message: err,
                });
            }
        ); // or go to model class and set select:false
});

// Add batch
router.post("/", (req, res) => {
    const gender = new Gender({
        genderName: req.body.genderName,
    });
    gender.save().then(
        (gender) => {
            res.status(200).json({
                success: true,
                message: "gender added successfully",
                data: gender,
            });
        }
    ).catch(
        (err) => {
            res.status(500).json({
                success: false,
                message: err,
            });
        }
    );
});


router.put("/", (req, res) => {
    const gender = new Gender({
        genderName: req.body.genderName,
    });
    gender.save().then(
        (gender) => {
            res.status(200).json({
                success: true,
                message: "gender updated successfully",
                data: gender,
            });
        }
    ).catch(
        (err) => {
            res.status(500).json({
                success: false,
                message: err,
            });
        }
    );
});




module.exports = router;
