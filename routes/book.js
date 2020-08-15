let express = require('express'),
    router = express.Router();

let bookController = require('../controllers/bookController.js');

/**
 * (POST Method)
 * Create a new book
 */
router.post('/book', bookController.newBook);


/**
 * (GET Method)
 * Display books list
 */
router.get('/book', bookController.booksList);

module.exports = router;