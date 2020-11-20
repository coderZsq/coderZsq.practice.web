# 1. 聚合函数的使用
# 求所有手机的价格的总和
SELECT SUM(price) totalPrice FROM products;
# 求一下华为手机的价格的总和
SELECT SUM(price) FROM `products` WHERE brand = '华为';
# 求华为手机的平均价格
SELECT AVG(price) FROM `products` WHERE brand = '华为';
# 最高手机的价格和最低手机的价格
SELECT MAX(price) FROM `products`;
SELECT MIN(price) FROM `products`;

# 求华为手机的个数
SELECT COUNT(*) FROM `products` WHERE brand = '华为';
SELECT COUNT(*) FROM `products` WHERE brand = '苹果';
SELECT COUNT(url) FROM `products` WHERE brand = '苹果';

SELECT COUNT(price) FROM `products`;
SELECT COUNT(DISTINCT price) FROM `products`;

# 2. GROUP BY的使用
SELECT brand, AVG(price), COUNT(*), AVG(score) FROM `products` GROUP BY brand;

# 3. HAVING的使用
SELECT brand, AVG(price) avgPrice, COUNT(*), AVG(score) FROM `products` GROUP BY brand HAVING avgPrice > 2000;

# 4. 需求: 求评分score > 7.5的手机的, 平均价格是多少?
# 升级: 平均分大于7.5的手机, 按照品牌进行分类, 求出平均价格.
-- SELECT AVG(price) FROM `products` WHERE score > 7.5;
SELECT brand, AVG(price) FROM `products` WHERE score > 7.5 GROUP BY brand;