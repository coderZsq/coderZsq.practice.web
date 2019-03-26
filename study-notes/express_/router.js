const express = require('express');
const router = express.Router();
const service = require('./service');


router.get('/', service.showIndex);
router.get('/toAddBook', service.toAddBook);
router.post('/addBook', service.addBook);
router.get('/toEditBook', service.toEditBook);
router.post('/editBook', service.editBook);

module.exports = router;