# 1. 创建brand的表和插入的数据
CREATE TABLE IF NOT EXISTS `brand` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	website VARCHAR(100),
	phoneRank INT
);

INSERT INTO `brand` (name, website, phoneRank) VALUES ('华为', 'www.huawei.com', 2);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('苹果', 'www.apple.com', 10);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('小米', 'www.mi.com', 5);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('oppo', 'www.oppo.com', 12);

INSERT INTO `brand` (name, website, phoneRank) VALUES ('京东', 'www.jd.com', 8);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('Google', 'www.google.com', 9);

# 2. 给brand_id设置引用brand中id的外键约束
# 添加一个brand_id字段
ALTER TABLE `products` ADD `brand_id` INT;
-- ALTER TABLE `products` DROP `brand_id`;

# 修改brand_id为外键
ALTER TABLE `products` ADD FOREIGN KEY (brand_id) REFERENCES brand(id);

# 设置brand_id的值
UPDATE `products` SET `brand_id` = 1 WHERE `brand` = '华为';
UPDATE `products` SET `brand_id` = 2 WHERE `brand` = '苹果';
UPDATE `products` SET `brand_id` = 3 WHERE `brand` = '小米';
UPDATE `products` SET `brand_id` = 4 WHERE `brand` = 'oppo';

# 3. 修改和删除外键引用的id
-- UPDATE `brand` SET `id` = 100 WHERE `id` = 1;

# 4. 修改brand_id关联外键时的action
# 4.1 获取到目前的外键的名称
SHOW CREATE TABLE `products`;
-- CREATE TABLE `products` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `brand` varchar(20) DEFAULT NULL,
--   `title` varchar(100) NOT NULL,
--   `price` double NOT NULL,
--   `score` decimal(2,1) DEFAULT NULL,
--   `voteCnt` int DEFAULT NULL,
--   `url` varchar(100) DEFAULT NULL,
--   `pid` int DEFAULT NULL,
--   `brand_id` int DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `brand_id` (`brand_id`),
--   CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8

# 4.2 根据名称将外键删除掉
ALTER TABLE `products` DROP FOREIGN KEY products_ibfk_1;

# 4.3 重新添加外键约束
ALTER TABLE `products` ADD FOREIGN KEY (brand_id) REFERENCES brand(id) ON UPDATE CASCADE ON DELETE RESTRICT;

UPDATE `brand` SET `id` = 100 WHERE `id` = 1;