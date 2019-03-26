const path = require('path');
const fs = require('fs');


fs.readFile(path.join(__dirname, '../', 'data.json'), 'utf8', (err, content) => {
    if (err) return;
    let list = JSON.parse(content);
    let arr = [];
    list.forEach((item) => {
        let sql = `insert into book (name, author, category, description) values ('${item.name}', '${item.author}', '${item.category}', '${item.desc}');`;
        arr.push(sql);
    });
    fs.writeFile(path.join(__dirname, 'data.sql'), arr.join(''), 'utf8', (err) => {
        console.log('init data finished!');
    });
});