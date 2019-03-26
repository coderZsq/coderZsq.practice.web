const data = require('./data');
const path = require('path');
const fs = require('fs');


let maxBookCode = () => {
    let arr = [];
    data.forEach((item) => {
        arr.push(item.id);
    });
    return Math.max.apply(null, arr);
};


exports.showIndex = (req, res) => {
    res.render('index', {list: data});
};


exports.toAddBook = (req, res) => {
    res.render('addBook', {});
};


exports.addBook = (req, res) => {
    let info = req.body;
    let book = {};
    for (let key in info) {
        book[key] = info[key];
    }
    book.id = maxBookCode() + 1;
    data.push(book);
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), err => {
        if (err) {
            res.send('server error');
        }
        res.redirect('/');
    });
};


exports.toEditBook = (req, res) => {
    let id = req.query.id;
    let book = {};
    data.forEach((item) => {
        if (id === item.id) {
            book = item;
            return;
        }
    });
    res.render('editBook', book);
};


exports.editBook = (req, res) => {
    let info = req.body;
    data.forEach((item) => {
        if (info.id === item.id) {
            for (let key in info) {
                item[key] = info[key];
            }
            return;
        }
    });
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), err => {
        if (err) {
            res.send('server error');
        }
        res.redirect('/');
    });
};