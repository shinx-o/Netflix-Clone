const express = require('express');
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const router = express.Router();
router.use(express.json());


//Registeration
router.post("/register", async (req, res, next) => {
    const newUser = new User({
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    })

    await newUser.save()
        .then(user => {
            const { password, ...info } = user._doc;
            res.status(200).json({ success: "User successfully registered!", user: info });
        })
        .catch(err => {
            res.status(403).json({status: `User '${err.keyValue.email}' already Exist!`})
        });
})

router.post("/login", async (req, res) => {
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
                    const accessToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.SECRET_KEY, {expiresIn: "5d"});
                    const { password, ...info } = user._doc;
                    res.status(200).json({...info, accessToken: accessToken});
                }
            }
        })
        .catch(err => next(err))
})

// const verifyUser = (req, res ,next) => {
//     const authHeader = req.headers.token;
//     if (authHeader) {
//         const token = authHeader.split(' ')[1];
//         jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
//             if (err) res.status(403).json("Token is Invalid!");
//             req.user = user;
//             next();
//         })
//     }
//     else {
//         return res.status(401).json("You are not authenticated!")
//     }
// }

// const verifyAdmin = (req, res, next) => {
//     if (req.user.isAdmin) {
//         return next();
//     }
//     else {
//         res.status(401).json("You are not authenticated!")
//     }
// }

module.exports = router;
// module.exports = verifyUser;
// module.exports = verifyAdmin;