$ dnf search mysql-server
$ dnf install mysql-server
$ systemctl start mysqld
$ systemctl status mysqld
$ systemctl enable mysqld
$ mysql-secure-installation

>mysql
  ALTER USER 'root'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY 'MySQL8Password.';
  show databases; 
  use mysql;
  select host, user from user;
  update user set host = '%' where user = 'root';