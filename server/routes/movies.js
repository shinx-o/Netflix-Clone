const express = require('express');
const Movies = require('../models/Movies');
const authenticate = require('../authenticate');

const router = express.Router();
router.use(express.json());

router.get('/', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    await Movies.find({})
        .then(movie => {
            res.status(200).json(movie.reverse());
        }, err => next(err))
        .catch(err => next(err));
})
    .post('/', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
        const newMovie = new Movies(req.body);

        await newMovie.save()
            .then(movie => {
                res.status(200).json({ status: 'Added Successfully', movie: movie });
            })
            .catch(err => {
                res.status(403).json({ status: "failed", error: err });
            });

    })
    .delete('/', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
        await Movies.deleteMany({})
            .then(resp => {
                res.status(200).json(resp);
            })
            .catch(err => next(err));
    })

router.get('/find/:id', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    await Movies.findById(req.params.id)
        .then(movie => {
            res.status(200).json(movie);
        })
        .catch(err => next(err))
})
    .put('/find/:id', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
        await Movies.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            .then(movie => {
                res.status(200).json({ status: "Updated Successfully", movie: movie });
            })
            .catch(err => next(err));
    })
    .delete('/find/:id', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
        await Movies.findByIdAndDelete(req.params.id)
            .then(resp => {
                res.status(200).json({ status: "Deleted Successfully", resp });
            })
            .catch(err => next(err));
    })

router.get('/random', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    const type = req.query.type;
    if (type === 'series') {
        await Movies.aggregate([
            { $match: { isSeries: true } },
            { $sample: { size: 1 } }
        ])
            .then(movie => {
                res.status(200).json(movie);
            })
            .catch(err => next(err))
    }
    else {
        await Movies.aggregate([
            { $match: { isSeries: false } },
            { $sample: { size: 1 } }
        ])
            .then(movie => {
                res.status(200).json(movie);
            })
            .catch(err => next(err))
    }
})

module.exports = router;