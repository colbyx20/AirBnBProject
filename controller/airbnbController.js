const asyncHandler = require('express-async-handler');
const connectDB = require('../config/db');

const getListings = asyncHandler(async (req,res) =>{
    res.status(200).json({message:"Get air bnb"});

    const getData = await connectDB.db("sample_airbnb").collection("listingsAndReviews").find();

    return getData;
})


const setListing = asyncHandler( async (req,res)=>{
        // to get body data, you need to add middleware (express.json() body parser)
        console.log(req.body); 
        if(!req.body.text){ // req.body.text2...any more variables you want to put in postman
            res.status(400)
            throw new Error('Please add a text field'); // built in express error handling
        }
        res.status(200).json({message:"Update air bnb"});
})

const updateListing = asyncHandler( async (req,res) =>{
    res.status(200).json({message:`Update listing ${req.params.id}`});
})

const deleteListing = asyncHandler(async (req,res) =>{
    res.status(200).json({message:`Delete listing ${req.params.id}`});
})


module.exports = {
    getListings,
    setListing,
    updateListing,
    deleteListing
}