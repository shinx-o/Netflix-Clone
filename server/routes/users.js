const express = require('express');
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const authenticate = require('../authenticate');

const router = express.Router();
router.use(express.json());

router.get('/', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
  await User.find({})
    .then(user => {
      const info = user.map(e => {
        const { password, ...info } = e._doc;
        return info;
      })
      res.status(200).setHeader('Content-Type', 'application/json').json(info);
    }, err => next(err))
    .catch(err => next(err));
})

router.post("/signup", async (req, res, next) => {
  const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
      profilePic: req.body.profilePic
  })

  await newUser.save()
      .then(user => {
          const { password, ...info } = user._doc;
          res.status(200).json({ status: "Signup Successful!", user: info });
      })
      .catch(err => {
          res.status(403).json({status: `User '${err.keyValue.email}' already Exist!`})
      });
})

router.post("/login", async (req, res, next) => {
  await User.findOne({ email: req.body.email })
      .then(user => {
          if (!user) {
              res.status(401).json("Invalid Username or Password!")
          }
          else {
              const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
              const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

              if (originalPassword !== req.body.password) {
                  res.status(401).json("Invalid Username or Password!");
              }
              else {
                  const accessToken = authenticate.getToken(user);
                  const { password, ...info } = user._doc;
                  res.status(200).json({...info, accessToken: accessToken});
              }
          }
      })
      .catch(err => next(err))
})

module.exports = router;
