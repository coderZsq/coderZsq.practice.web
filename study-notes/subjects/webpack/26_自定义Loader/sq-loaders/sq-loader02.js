module.exports = function (content) {
  console.log(content, '哈哈哈, 这是我的loader02');
  return content;
};

module.exports.pitch = function () {
  console.log('loader pitch 02');
};
