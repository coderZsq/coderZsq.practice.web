const {
  SyncHook,
  SyncBailHook,
  SyncLoopHook,
  SyncWaterfallHook,
} = require('tapable');

const { AsyncSeriesHook, AsyncParallelHook } = require('tapable');

let counter = 0;

class SQLearnTapable {
  constructor() {
    this.hooks = {
      // syncHook: new SyncHook(['name', 'age']),
      // bail: 在某一个事件监听的函数中, 如果有返回值, 那么后续的监听的事件就不会执行了
      // syncHook: new SyncBailHook(['name', 'age']),
      // loop: 在某个时间监听的函数中, 如果返回值为true, 那么这个回调函数就会循环执行, (返回undefined, 就停止执行)
      // syncHook: new SyncLoopHook(['name', 'age']),
      // waterfail: 在某个时间监听的函数中, 如果有返回值, 那么它的返回值会作为下一次事件监听函数的第一个参数
      syncHook: new SyncWaterfallHook(['name', 'age']),

      // series: 在一个hook中, 监听了多次事件(两个回调函数), 这两个回调函数式串行执行的
      asyncHook: new AsyncSeriesHook(['name', 'age']),

      // series: 在一个hook中, 监听了多次事件(两个回调函数), 这两个回调函数式并行执行的
      // asyncHook: new AsyncParallelHook(['name', 'age']),
    };

    // this.hooks.syncHook.tap('event1', (name, age) => {
    //   console.log('event1', name, age);
    //   return 'event1';
    // });

    // this.hooks.syncHook.tap('event2', (name, age) => {
    //   console.log('event2', name, age);
    // });

    // this.hooks.asyncHook.tapAsync('event1', (name, age, callback) => {
    //   setTimeout(() => {
    //     console.log('event1', name, age);
    //     callback();
    //   }, 2000);
    // });

    // this.hooks.asyncHook.tapAsync('event2', (name, age, callback) => {
    //   setTimeout(() => {
    //     console.log('event2', name, age);
    //     callback();
    //   }, 2000);
    // });

    this.hooks.asyncHook.tapPromise('event1', (name, age) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('event1', name, age);
          resolve();
        }, 2000);
      });
    });

    this.hooks.asyncHook.tapPromise('event2', (name, age) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('event2', name, age);
          resolve();
        }, 2000);
      });
    });
  }

  emit() {
    // this.hooks.syncHook.call('sq', 18);

    // this.hooks.asyncHook.callAsync('kobe', 30, () => {
    //   console.log('第一次事件执行完成');
    // });

    this.hooks.asyncHook.promise('james', 33).then(() => {
      console.log('事件监听完成');
    });
  }
}

const lt = new SQLearnTapable();
lt.emit();
