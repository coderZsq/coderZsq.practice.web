const express = require('express');
// const router = require('./router.js');
const router = require('./router-restful')
const template = require('art-template');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');


app.use('/www', express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');
app.engine('art', require('express-art-template'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
app.listen(3001, () => {
    console.log('running...');
});