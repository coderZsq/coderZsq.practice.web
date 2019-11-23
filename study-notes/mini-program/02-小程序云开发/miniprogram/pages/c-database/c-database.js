// pages/c-database/c-database.js

// 1. 获取数据库对象
const db = wx.cloud.database();

// 2.获取操作的集合
const collection = db.collection('students');

Page({
  addDataToDB: function () {
    // 向集合中添加一条数据
    collection.add({
      data: {
        name: 'kobe',
        age: 41,
        height: 198,
        courses: ['高等数学', 'java编程', '编译原理'],
        goodFriend: {
          name: 'james',
          age: 35
        },
        location: db.Geo.Point(100, 50),
        brith: new Date('1978-10-10'),
        isTuiyi: true
      }
      //,
      // success: (res) => {
      //   console.log(res);
      // },
      // fail: (err) => {
      //   console.log(err);
      // }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  removeDataToDB: function () {
    // 精准删除
    collection
      .doc('05a1947c5dd8821b023c745e30670e0e') // 精准拿到某一个学生
      .remove(
        // {
        //   success: res => {
        //     console.log(res);
        //   },
        //   fail: err => {
        //     console.log(err);
        //   }
        // }
      ).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });

    // Error: errCode: -1  | errMsg: query.remove is only available in server SDK / API
    // collection.where({
    //   age: 30
    // }).remove().then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err);
    // })
  },
  updateDataToDB: function () {
    // update 方法: 修改/添加 某些字段
    collection
      .doc('05a1947c5dd882c0023c977968c93c6d')
      .update({
        data: {
          age: 30,
          score: 100
        }
      })
      .then(console.log)
      .catch(console.log);

    // set 方法: 直接替换对象
    collection
      .doc('05a1947c5dd882c0023c977968c93c6d')
      .set({
        data: {
          age: 30,
          score: 100
        }
      })
      .then(console.log)
      .catch(console.log);

    // Error: errCode: -1  | errMsg: query.update is only available in server SDK / API
    // collection
    //   .where({
    //     name: 'castiel'
    //   })
    //   .update({
    //     data: {
    //       age: 30,
    //       score: 100
    //     }
    //   })
    //   .then(console.log)
    //   .catch(console.log);
  },
  queryDataToDB: function () {

  }
})