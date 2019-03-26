const db = require('./db');


exports.allBooks = (req, res) => {
    let sql = 'select * from book';
    db.base(sql, null, (result) => {
        res.json(result);
    });
};


exports.addBook = (req, res) => {
    let info = req.body;
    let sql = 'insert into book set ?';
    db.base(sql, info, (result) => {
        if (result.affectedRows === 1) {
            res.json({flag: 1});
        } else {
            res.json({flag: 2});
        }
    });
};


exports.getBookById = (req, res) => {
    let id = req.params.id;
    let sql = 'select * from book where id=?';
    let data = [id];
    db.base(sql, data, (result) => {
        res.json(result[0]);
    });
};


exports.editBook = (req, res) => {
    let info = req.body;
    let sql = 'update book set name=?, author=?, category=?, description=? where id=?';
    let data = [info.name, info.author, info.category, info.description, info.id];
    db.base(sql, data, (result) => {
        if (result.affectedRows === 1) {
            res.json({flag: 1});
        } else {
            res.json({flag: 2});
        }
    });
};


exports.deleteBook = (req, res) => {
    let id = req.params.id;
    let sql = 'delete from book where id=?';
    let data = [id];
    db.base(sql, data, (result) => {
        if (result.affectedRows === 1) {
            res.json({flag: 1});
        } else {
            res.json({flag: 2});
        }
    });
};