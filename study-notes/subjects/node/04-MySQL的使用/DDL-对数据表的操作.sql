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