const express = require("express");
const router = express.Router();
const {createProfile} = require('../controllers/postController')
router.post('/create_profile',createProfile);
module.exports = router;