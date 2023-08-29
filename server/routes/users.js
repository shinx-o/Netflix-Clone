const express = require('express');
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const authenticate = require('../authenticate');

const router = express.Router();
router.use(express.json());


router.get('/stats', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" }
                }
            }, {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                },
            },
        ]);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json(err);
    }

});

router.get('/', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find({}).sort({ _id: -1 }).limit(10) : await User.find({});
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req, res, next) => {
    await User.findById(req.params.id)
        .then(user => {
            const { password, ...info } = user._doc;
            res.status(200).setHeader('Content-Type', 'application/json').json(info);
        })
        .catch(err => next(err));
})

router.put('/:id', authenticate.verifyUser, async (req, res) => {
    if (req.user.id === req.params.id) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            const { password, ...info } = updatedUser._doc;
            res.status(200).json(info);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(401).json('You can update only your account!')
    }
})

router.delete('/:id', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    if (req.user.id === req.params.id) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted!");
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(401).json('You can delete only your account!');
    }
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
            res.status(200).json(info);
        })
        .catch(err => {
            res.status(403).json({ status: `User '${err.keyValue.email}' already Exist!` })
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
                    res.status(200).json({ ...info, accessToken: accessToken });
                }
            }
        })
        .catch(err => next(err))
})


module.exports = router;
