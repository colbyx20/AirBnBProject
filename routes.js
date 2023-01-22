const express = require('express');
const router = express.Router();
const {getListings, setListing, updateListing, deleteListing} = require('./controller/airbnbController')




/*
    Create -> HTTP POST /api/devices + payload -> 201
    Read -> HTTP GET /api/devices -> 200 + payload
    Update -> HTTP PUT /api/devices/1+payload  -> 200 -> /api/devices/:id
    Delete -> HTTP Delete /api/devices/1 -> 200 -> /api/devices/:id
*/
router.route('/').get(getListings).post(setListing);
router.route('/:id').put(updateListing).delete(deleteListing);




module.exports = router;

