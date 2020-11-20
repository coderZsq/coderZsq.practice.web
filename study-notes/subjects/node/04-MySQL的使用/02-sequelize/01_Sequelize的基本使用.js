const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('coderhub', 'root', 'mysql_root', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate().then(() => {
  console.log('连接数据库成功~');
}).catch(err => {
  console.log('链接数据库失败~', err);
});

