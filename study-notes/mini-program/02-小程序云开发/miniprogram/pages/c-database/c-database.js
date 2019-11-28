// pages/c-database/c-database.js

// 1. 获取数据库对象
const db = wx.cloud.database()

// 2.获取操作的集合
const collection = db.collection('students')

const LIMIT = 3

Page({
  data: {
    page: 0
  },
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
      //   console.log(res)
      // },
      // fail: (err) => {
      //   console.log(err)
      // }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  removeDataToDB: function () {
    // 精准删除
    collection
      .doc('05a1947c5dd8821b023c745e30670e0e') // 精准拿到某一个学生
      .remove(
        // {
        //   success: res => {
        //     console.log(res)
        //   },
        //   fail: err => {
        //     console.log(err)
        //   }
        // }
      ).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })

    // Error: errCode: -1  | errMsg: query.remove is only available in server SDK / API
    // collection.where({
    //   age: 30
    // }).remove().then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
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
      .catch(console.log)

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
      .catch(console.log)

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
    //   .catch(console.log)
  },
  queryDataFromDB: function () {
    // 1. 根据id精准查找数据
    collection
      .doc('05a1947c5dd882c0023c977968c93c6d')
      .get()
      .then(res => {
        console.log(res)
      })

    // 2. 根据条件查找where
    collection
      .where({ age: 30 })
      .get()
      .then(res => {
        console.log(res)
      })

    // 3. 使用查询指令数据查询
    const cmd = db.command
    collection
      .where({ age: cmd.gte(30) })
      .get()
      .then(res => {
        console.log(res)
      })

    // 4. 根据正则表达式获取数据
    collection
      .where({
        name: db.RegExp({
          regexp: '^li.*',
          options: 'i'
        })
      })
      .get()
      .then(res => {
        console.log(res)
      })

    // 5. 不跟任何的条件, 直接查询整个集合
    collection
      .get()
      .then(res => {
        console.log(res)
      })

    // 6. 几个字段的作用
    // field: 过滤只需要获取的字段
    collection
      .field({
        name: true,
        age: true,
        height: true
      })
      .get()
      .then(res => {
        console.log(res)
      })

    // skip: 跳过多少条数据
    // limit: 本次获取多少条数据
    // orderBy:
    db.collection('wzry')
      .skip(this.data.page * LIMIT)
      .limit(LIMIT)
      .orderBy('rid', 'asc')
      .get()
      .then(res => {
        this.data.page += 1
        console.log(res)
      })
  },
  startChanging: function () {
    db.collection('chatroom').where({
      groupid: '110'
    }).watch({
      onChange: function (snap) {
        console.log(snap)
      },
      onError: function (err) {
        console.log(err)
      }
    })
  },
  sendMessage: function () {
    db.collection('chatroom').add({
      data: {
        groupid: '110',
        message: '吃饭了吗?'
      }
    }).then(res => {
      console.log(res)
    })
  }
})