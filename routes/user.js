const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send('Hello');
});
// Authenticate
router.get('/authenticate', (req, res, next) => {
    res.send('Authenticate');
});

// Profile
router.get('/profile', (req, res, next) => {
  res.send('Profile');
});
module.exports = router;