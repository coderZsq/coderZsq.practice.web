# 查看所有的表
SHOW TABLES;

# 新建表
CREATE TABLE IF NOT EXISTS `students` (
	`name` VARCHAR(10),
	`age` INT,
	`score` INT
);

# 删除表
DROP TABLE IF EXISTS `moment`;

# 查看表的结构
DESC students;
# 查看创建表的SQL语句
SHOW CREATE TABLE `students`;
-- CREATE TABLE `students` (
--   `name` varchar(10) DEFAULT NULL,
--   `age` int DEFAULT NULL,
--   `score` int DEFAULT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8

# 完整的创建表的语法
CREATE TABLE IF NOT EXISTS `users` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	age INT DEFAULT 0,
	phoneNum VARCHAR(20) UNIQUE DEFAULT '',
	createTime TIMESTAMP
);

# 修改表
# 1. 修改表的名字
ALTER TABLE `users` RENAME TO `user`;
# 2. 添加一个新的列
ALTER TABLE `user` ADD `updateTime` TIMESTAMP;
# 3. 修改字段的名称
ALTER TABLE `user` CHANGE `phoneNum` `telPhone` INT;
# 4. 修改字段的类型
ALTER TABLE `user` MODIFY `name` VARCHAR(30);
# 5. 删除某一个字段
ALTER TABLE `user` DROP `age`;

# 补充
# 根据一个表结构去创建另外一张表
CREATE TABLE `user2` LIKE `user`;
# 根据另外一个表中的所有内容， 创建一个新的表
CREATE TABLE `user3` (SELECT * FROM `user`);