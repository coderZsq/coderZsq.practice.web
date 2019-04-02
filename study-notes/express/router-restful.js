const express = require('express');
const service = require('./service-restful');
const router = express.Router();


router.get('/books', service.allBooks);
router.post('/books/book', service.addBook);
router.get('/books/book/:id', service.getBookById);
router.put('/books/book', service.editBook);
router.delete('/books/book/:id', service.deleteBook);

module.exports = router;