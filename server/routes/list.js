const express = require('express');
const List = require('../models/List');
const authenticate = require('../authenticate');

const router = express.Router();
router.use(express.json());

router.get('/', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    if(typeQuery){
        if(genreQuery){
            await List.aggregate([
                {$sample : {size : 10}},
                {$match : {type: typeQuery, genre: genreQuery}}
            ])
            .then(list => res.status(200).json(list))
            .catch(err => next(err))
        }
        else {
            await List.aggregate([
                {$sample : {size : 10}},
                {$match : {type: typeQuery}}
            ])
            .then(list => res.status(200).json(list))
            .catch(err => next(err))
        }
    }
    else {
        await List.aggregate([
            {$sample : {size : 10}}
        ])
        .then(list => res.status(200).json(list))
        .catch(err => next(err))
    }
})
    .post('/', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
        const newList = new List({
            title: req.body.title,
            type: req.body.type,
            genre: req.body.genre,
            content: req.body.content
        });

        await newList.save()
            .then(list => {
                res.status(200).json({ status: 'List Created Successfully', list: list });
            })
            .catch(err => {
                res.status(403).json({ status: "failed", error: err });
            });
    })
    .delete('/', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
        await List.deleteMany({})
            .then(resp => {
                res.status(200).json(resp);
            })
            .catch(err => next(err));
    })

router.get('/:id', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    await List.findById(req.params.id)
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => next(err))
})
.put('/:id', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    await List.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            .then(list => {
                res.status(200).json({ status: "Updated Successfully", list: list });
            })
            .catch(err => next(err));
})
.delete('/:id', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    await List.findByIdAndDelete(req.params.id)
            .then(resp => {
                res.status(200).json({ status: "Deleted Successfully", resp });
            })
            .catch(err => next(err));
})




module.exports = router;