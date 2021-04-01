const connection = require('./database.js');
const marked = require('marked');
const hljs = require('highlight.js');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  pedantic: false,
  sanitize: false,
  tables: true,
  breaks: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
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
