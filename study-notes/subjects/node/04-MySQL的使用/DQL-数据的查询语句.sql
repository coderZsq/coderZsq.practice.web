# 创建products的表
CREATE TABLE IF NOT EXISTS `products` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	brand VARCHAR(20),
	title VARCHAR(100) NOT NULL,
	price DOUBLE NOT NULL,
	score DECIMAL(2, 1),
	voteCnt INT,
	url VARCHAR(100),
	pid INT
);

# 1. 基本查询
# 查询表中所有的字段以及所有的数据
SELECT * FROM `products`;
# 查询指定的字段
SELECT title, price FROM `products`;
# 对字段结果起一个别名
SELECT title AS phoneTitle, price AS currentPrice FROM `products`;

# 2. where条件
# 2.1 条件判断语句
# 案例: 查询价格小于1000的手机
SELECT title, price FROM `products` WHERE price < 1000;
# 案例二: 价格等于999的手机
SELECT * FROM `products` WHERE price = 999;
# 案例三: 价格不等于999的手机
SELECT * FROM `products` WHERE price != 999;
SELECT * FROM `products` WHERE price <> 999;
# 案例四: 查询品牌是华为的手机
SELECT * FROM `products` WHERE brand = '华为';

# 2.2 逻辑运算语句
# 案例一: 查询1000到2000之间的手机
SELECT * FROM `products` WHERE price > 1000 AND price < 2000;
SELECT * FROM `products` WHERE price > 1000 && price < 2000;
# BETWEEN AND 包含等于
SELECT * FROM `products` WHERE price BETWEEN 1099 AND 2000;

# 案例二: 价格在5000以上或者是品牌是华为的手机
SELECT * FROM `products` WHERE price > 5000 || brand = '华为';

# 将某些值设置为NULL
-- UPDATE `products` SET url = NULL WHERE id >= 85 AND id <= 88;
# 查询某一个值为NULL
SELECT * FROM `products` WHERE url IS NULL;
SELECT * FROM `products` WHERE url IS NOT NULL;

# 2.3. 模糊查询
SELECT * FROM `products` WHERE title LIKE '%M%';
SELECT * FROM `products` WHERE title LIKE '%P%';
SELECT * FROM `products` WHERE title LIKE '_P%';

# 2.4. IN表示取多个值的其中一个即可
SELECT * FROM `products` WHERE brand = '华为' || brand = '小米' || brand = '苹果';
SELECT * FROM `products` WHERE brand IN ('华为', '小米', '苹果');

# 3. 对结果进行排序
SELECT * FROM `products` WHERE brand IN ('华为', '小米', '苹果') ORDER BY price ASC, score DESC;


# 4. 分页查询
# LIMIT limit OFFSET offset;
# LIMIT limit, offset;
SELECT * FROM `products` LIMIT 20 OFFSET 0;
SELECT * FROM `products` LIMIT 20 OFFSET 20;
SELECT * FROM `products` LIMIT 40, 20;