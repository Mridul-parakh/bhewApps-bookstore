const express = require('express');
const router = express();
const books_model = require('../models/books');

router.post('/addBooks', async (req, res, next) => {
    try {
        let { author, summary, title, book_id } = req.body;
        let current_id = await books_model.findOne({}).sort({ book_id: -1 }).limit(1),
            new_book_id = current_id?.book_id ? current_id?.book_id + 1 : 1;

        book_id = book_id ? book_id : new_book_id
        await books_model.updateOne(
            { book_id },
            {
                $set: {
                    book_id,
                    author, title, summary
                }
            },
            { upsert: true }
        );
        return res.status(201).send({ message: "Book added successfully..!" });
    } catch (e) {
        next(e);
    }

});

router.get('/getBooksData', async (req, res, next) => {
    try {
        let { book_id } = req.query, data;
        if (book_id) {
            data = await books_model.findOne({ book_id }, { _id: 0 }).lean();
        } else {
            data = await books_model.find({}, { _id: 0 }).lean();
        }
        if (data)
            return res.status(200).send({ data });
        return res.status(404).send({ message: "Data Not Found..!" });
    } catch (e) {
        next(e)
    }
})

router.delete('/deleteBook', async (req, res, next) => {
    try {
        let { book_id } = req.body;
        let data = await books_model.deleteOne({ book_id });
        if (data.deletedCount > 0)
            return res.status(200).send({ message: "Data Deleted Successfully..!" });
        return res.status(404).send({ message: "Data Not Found..!" });
    } catch (e) {
        next(e);
    }
})

module.exports = router;