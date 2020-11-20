# 1. 基本数据的模拟
CREATE TABLE IF NOT EXISTS students(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
age INT
);

CREATE TABLE IF NOT EXISTS courses(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
price DOUBLE
);

INSERT INTO `students` (name, age) VALUES ('sq', 18);
INSERT INTO `students` (name, age) VALUES ('tom', 22);
INSERT INTO `students` (name, age) VALUES ('lilei', 25);
INSERT INTO `students` (name, age) VALUES ('lucy', 16);
INSERT INTO `students` (name, age) VALUES ('lily', 20);

INSERT INTO `courses` (name, price) VALUES ('英语', 100);
INSERT INTO `courses` (name, price) VALUES ('语文', 666);
INSERT INTO `courses` (name, price) VALUES ('数学', 888);
INSERT INTO `courses` (name, price) VALUES ('历史', 80);
INSERT INTO `courses` (name, price) VALUES ('物理', 888);
INSERT INTO `courses` (name, price) VALUES ('地理', 333);

# 2. 建立关系表
CREATE TABLE IF NOT EXISTS `student_select_courses`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	student_id INT NOT NULL,
	course_id INT NOT NULL,
	FOREIGN KEY (student_id) REFERENCES students(id) ON UPDATE CASCADE,
	FOREIGN KEY (course_id) REFERENCES courses(id) ON UPDATE CASCADE
);

# 3. 学生选课
# sq选择了英语, 数学, 历史
INSERT INTO `student_select_courses` (student_id, course_id) VALUES (1, 1);
INSERT INTO `student_select_courses` (student_id, course_id) VALUES (1, 3);
INSERT INTO `student_select_courses` (student_id, course_id) VALUES (1, 4);

INSERT INTO `student_select_courses` (student_id, course_id) VALUES (3, 2);

INSERT INTO `student_select_courses` (student_id, course_id) VALUES (5, 2);
INSERT INTO `student_select_courses` (student_id, course_id) VALUES (5, 3);
INSERT INTO `student_select_courses` (student_id, course_id) VALUES (5, 4);

# 4. 查询的需求
# 4.1 查询所有有选课的学生, 选择了哪些课程
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csId, cs.name csName, cs.price csPrice
FROM `students` stu
JOIN `student_select_courses` ssc ON stu.id = ssc.student_id
JOIN `courses` cs ON ssc.course_id = cs.id;

# 4.2 查询所有的学生的选课情况
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csId, cs.name csName, cs.price csPrice
FROM `students` stu
LEFT JOIN `student_select_courses` ssc ON stu.id = ssc.student_id
LEFT JOIN `courses` cs ON ssc.course_id = cs.id;

# 4.3 哪些学生是没有选课
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csId, cs.name csName, cs.price csPrice
FROM `students` stu
LEFT JOIN `student_select_courses` ssc ON stu.id = ssc.student_id
LEFT JOIN `courses` cs ON ssc.course_id = cs.id 
WHERE cs.id IS NULL;

# 4.4 查询哪些课程是没有被选择的
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csId, cs.name csName, cs.price csPrice
FROM `students` stu
RIGHT JOIN `student_select_courses` ssc ON stu.id = ssc.student_id
RIGHT JOIN `courses` cs ON ssc.course_id = cs.id
WHERE stu.id IS NULL;

# 4.5 某一个学生选了哪些课程 (sq)
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csId, cs.name csName, cs.price csPrice
FROM `students` stu
LEFT JOIN `student_select_courses` ssc ON stu.id = ssc.student_id
LEFT JOIN `courses` cs ON ssc.course_id = cs.id
WHERE stu.id = 2;