const express = require('express');
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const authenticate = require('./authenticate');

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res, next) => {
  // if (authenticate.verifyUser && authenticate.verifyAdmin) {
    await User.find({})
      .then(user => {
        const info = user.map(e => {
          const {password, ...info} = e._doc;
          return info;
        })
        res.status(200).setHeader('Content-Type', 'application/json').json(info)
      }, err => next(err))
      .catch(err => next(err));
  // }
})

module.exports = router;
