-- 表示注释,创建一个表,创建表的时候,必须设置设置至少一个字段(属性)
-- 在括号中放置字段(属性)
CREATE TABLE test1(
   name VARCHAR(10),
   age INT

);
-- 创建一个员工表
CREATE TABLE employ(

  id INT,
  name VARCHAR(10),
  gender CHAR(1),
  entry_data DATE,
  job VARCHAR(20),
  salary DOUBLE,
  resume TEXT

);
ALTER TABLE employ ADD age INT;

-- 创建employ1表,主键一般不能为空,主键不能重复
CREATE TABLE employ1(

  id INT PRIMARY KEY,
  name VARCHAR(10),
  gender CHAR(1),
  entry_data DATE,
  job VARCHAR(20),
  salary DOUBLE,
  resume TEXT

);
-- 创建employ2表,设置某个字段为非空
CREATE TABLE employ2(

  id INT PRIMARY KEY,
  name VARCHAR(10) NOT NULL,
  gender CHAR(1),
  entry_data DATE,
  job VARCHAR(20),
  salary DOUBLE,
  resume TEXT

);


-- 创建employ3 ,设置主键以及非空约束唯一约束,
CREATE TABLE employ3(

  id INT PRIMARY KEY,
  id_card VARCHAR(20) UNIQUE,
  name VARCHAR(10) NOT NULL,
  gender CHAR(1),
  entry_data DATE,
  job VARCHAR(20),
  salary DOUBLE,
  resume TEXT

);

-- 创建employ4 ,设置默认约束,
CREATE TABLE employ4(

  id INT PRIMARY KEY,
  id_card VARCHAR(20) UNIQUE,
  name VARCHAR(10) NOT NULL,
  gender CHAR(1),
  entry_data DATE,
  job VARCHAR(20),
  salary DOUBLE,
  resume TEXT,
  grade INT DEFAULT 0

);
-- 创建一张表设置自动增加
CREATE TABLE employ6(

  id INT PRIMARY KEY AUTO_INCREMENT,
  id_card VARCHAR(20) UNIQUE,
  name VARCHAR(10) NOT NULL,
  gender CHAR(1),

  job VARCHAR(20),
  salary DOUBLE,
  resume TEXT,
  grade INT DEFAULT 0

);

--往employ5中添加对应的数据,在括号中放置和字段一一对应的值
INSERT INTO employ6 VALUES(NULL,'2','zhansan','0', 'develop',100.0,'dsa',90);

-- 给某几个字段插入数据
INSERT INTO employ6 (id,id_card,name) VALUES(NULL,'3','wangwu');

-- 插入多条记录
INSERT INTO employ6 VALUES(NULL,'4','zhansan','0', 'develop',100.0,'dsa',90),
                    (NULL,'5','zhansan','0', 'develop',100.0,'dsa',90),
                    (NULL,'6','zhansan','0', 'develop',100.0,'dsa',90);




-- 简单修改名称
UPDATE employ6 SET name= 'lisi';

-- 删除数据
DELETE FROM employ6;

-- 创建表
CREATE TABLE student (
 id INT PRIMARY KEY auto_increment,
    name VARCHAR(20) NOT NULL,
    chinese DOUBLE,
    math DOUBLE,
    english DOUBLE
);

-- 传入数据
INSERT INTO student VALUES(NULL,'xiaoming',85,76,70),
                          (NULL,'xiaobai',85,76,70),
                          (NULL,'xiaohua',85,76,70);


-- 建立员工表
CREATE TABLE employTest(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20),
department_id INT
);


INSERT INTO employTest VALUES(NULL,'liubei',3),
                             (NULL,'gaunyu',1),
                             (NULL,'zhangfei',2),
                             (NULL,'zhaoyun',1),
                             (NULL,'xiqoqiao',3),
                             (NULL,'daqiao',2),
                             (NULL,'lvbu',1),
                             (NULL,'diaoqian',3);


-- 创建部门表
CREATE TABLE department(


  id INT PRIMARY KEY AUTO_INCREMENT,
  departname VARCHAR(20)

);

INSERT INTO department VALUES(NULL,'warD'),
                             (NULL,'personD'),
                             (NULL,'moneyD');
