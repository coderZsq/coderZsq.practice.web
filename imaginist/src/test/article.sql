ALTER TABLE article ADD preview longtext NOT NULL COMMENT '预览' AFTER content;

-- Error: Data too long for column 'preview' at row 1
--     at PromisePool.execute (/Users/zhushuangquan/Codes/GitHub/coderZsq.practice.web/imaginist/node_modules/mysql2/promise.js:358:22)
--     at saveStockPreviewColumn (/Users/zhushuangquan/Codes/GitHub/coderZsq.practice.web/imaginist/src/test/article.test.js:31:22)
--     at processTicksAndRejections (node:internal/process/task_queues:94:5) {
--   code: 'ER_DATA_TOO_LONG',
--   errno: 1406,
--   sqlState: '22001',
--   sqlMessage: "Data too long for column 'preview' at row 1"
-- }
