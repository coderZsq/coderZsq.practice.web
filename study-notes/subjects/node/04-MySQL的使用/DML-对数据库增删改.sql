# DML

# 插入数据
INSERT INTO `user` VALUES (110, 'Castie!', '020-110110', '2020-10-20', '2020-11-11');
INSERT INTO `user` (name, telPhone, createTime, updateTime) VALUES ('kobe', '000-1111111', '2020-10-10', '2030-10-20');
INSERT INTO `user` (name, telPhone) VALUES ('lilei', '000-1111112');

# 需求: createTime和updateTime可以自动设置值
ALTER TABLE `user` MODIFY `createTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE `user` MODIFY `updateTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
INSERT INTO `user` (name, telPhone) VALUES ('hmm', '000-1111212');
INSERT INTO `user` (name, telPhone) VALUES ('lucy', '000-1121212');

# 删除数据
# 删除所有数据
DELETE FROM `user`;
# 删除符合条件的数据
DELETE FROM `user` WHERE id = 110;

# 更新数据
# 更新所有的数据
UPDATE `user` SET `name` = 'lucy', telPhone = '010-110110';
# 更新符合条件的数据
UPDATE `user` SET `name` = 'lucy', telPhone = '010-110110' WHERE id = 114;
