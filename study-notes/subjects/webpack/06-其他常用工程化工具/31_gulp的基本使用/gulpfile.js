const { series, parallel } = require('gulp');

const task1 = (cb) => {
  setTimeout(() => {
    console.log('task1');
    cb();
  }, 2000);
};

const task2 = (cb) => {
  setTimeout(() => {
    console.log('task2');
    cb();
  }, 2000);
};

const task3 = (cb) => {
  setTimeout(() => {
    console.log('task3');
    cb();
  }, 2000);
};

const seriesTask = series(task1, task2, task3);
const parallelTask = parallel(task1, task2, task3);

const composeTask = series(parallelTask, seriesTask);

module.exports = {
  seriesTask,
  parallelTask,
  composeTask,
};
