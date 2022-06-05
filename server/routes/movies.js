const express = require('express');
const Movies = require('../models/Movies');
const authenticate = require('../authenticate');

const router = express.Router();
router.use(express.json());

router.get('/', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    await Movies.find({})
    .then(movie => {
        res.status(200).json(movie);
    }, err => next(err))
    .catch(err => next(err));
})
.post('/', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    const newMovie = new Movies({
        title : req.body.title,
        desc : req.body.desc,
        image : req.body.image,
        imageTitle : req.body.imageTitle,
        trailer : req.body.trailer,
        video : req.body.video,
        year : req.body.year,
        rating : req.body.rating,
        cast : req.body.cast,
        genre : req.body.genre,
        isSeries : req.body.isSeries
    });

    await newMovie.save()
    .then(movie => {
        res.status(200).json({status: 'Added Successfully', movie : movie});
    })
    .catch(err => {
        res.status(403).json({status: "failed", error : err});
    });

})
.delete('/', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    await Movies.deleteMany({})
    .then(resp => {
        res.status(200).json(resp);
    })
    .catch(err => next(err));
})

router.get('/:id', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    await Movies.findById(req.params.id)
    .then(movie => {
        res.status(200).json(movie);
    })
    .catch(err => next(err))
})
.put('/:id', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    await Movies.findByIdAndUpdate(req.params.id, { $set : req.body }, { new : true })
    .then(movie => {
        res.status(200).json({status : "Updated Successfully", movie: movie});
    })
    .catch(err => next(err));
})
.delete('/:id', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    await Movies.findByIdAndDelete(req.params.id)
    .then(resp => {
        res.status(200).json({status : "Deleted Successfully", resp});
    })
    .catch(err => next(err));
})

module.exports = router;