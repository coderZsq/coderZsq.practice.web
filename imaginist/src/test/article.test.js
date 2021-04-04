const connection = require('./database.js');
const marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code) {
    const hljs = require('highlight.js');
    return hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

(async function saveStockPreviewColumn() {
  let statement = `SELECT id, content FROM article`;
  const [result] = await connection.execute(statement);
  const previews = result.map((article) => {
    return {
      id: article.id,
      preview: marked(article.content),
    };
  });
  for (let item of previews) {
    statement = `UPDATE article SET preview = ? WHERE id = ${item.id}`;
    console.log(statement);
    await connection.execute(statement, [item.preview]);
  }
})();
