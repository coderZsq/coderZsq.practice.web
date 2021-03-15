const marked = require('marked');
const hljs = require('highlight.js');

module.exports = function (content) {
  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlight(lang, code).value;
    },
  });

  const htmlContent = marked(content);

  const innerContent = '`' + htmlContent + '`';
  const moduleCode = `var code=${innerContent}; export default code;`;
  return moduleCode;
};
