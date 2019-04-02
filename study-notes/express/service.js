// const data = require('./data');
// const path = require('path');
// const fs = require('fs');
const db = require('./db');


// let maxBookCode = () => {
//     let arr = [];
//     data.forEach((item) => {
//         arr.push(item.id);
//     });
//     return Math.max.apply(null, arr);
// };


// let writeDataToFile = (res) => {
//     fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), err => {
//         if (err) {
//             res.send('server error');
//         }
//         res.redirect('/');
//     });
// };

exports.showIndex = (req, res) => {
    let sql = 'select * from book';
    db.base(sql, null, (result) => {
        res.render('index', {list: result});
    });
    // res.render('index', {list: data});
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
    let sql = 'insert into book set ?';
    db.base(sql, book, (result) => {
        if (result.affectedRows === 1) {
            res.redirect('/');
        }
    });
    // book.id = maxBookCode() + 1;
    // data.push(book);
    // writeDataToFile(res);
};


exports.toEditBook = (req, res) => {
    let id = req.query.id;
    let sql = 'select * from book where id=?';
    let data = [id];
    db.base(sql, data, (result) => {
        res.render('editBook', result[0]);
    });
    // let book = {};
    // data.forEach((item) => {
    //     if (id === item.id) {
    //         book = item;
    //         return;
    //     }
    // });
    // res.render('editBook', book);
};


exports.editBook = (req, res) => {
    let info = req.body;
    let sql = 'update book set name=?, author=?, category=?, description=? where id=?';
    let data = [info.name, info.author, info.category, info.description, info.id];
    db.base(sql, data, (result) => {
        if (result.affectedRows === 1) {
            res.redirect('/');
        }
    });
    // data.forEach((item) => {
    //     if (info.id === item.id) {
    //         for (let key in info) {
    //             item[key] = info[key];
    //         }
    //         return;
    //     }
    // });
    // writeDataToFile(res);
};


exports.deleteBook = (req, res) => {
    let id = req.query.id;
    let sql = 'delete from book where id=?';
    let data = [id];
    db.base(sql, data, (result) => {
        if (result.affectedRows === 1) {
            res.redirect('/');
        }
    });
    // data.forEach((item, index) => {
    //     if (id === item.id) {
    //         data.splice(index, 1);
    //     }
    //     return;
    // });
    // writeDataToFile(res);
};