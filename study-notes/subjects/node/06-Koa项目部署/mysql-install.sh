$ dnf search mysql-server
$ dnf install mysql-server
$ systemctl start mysqld
$ systemctl status mysqld
$ systemctl enable mysqld
$ mysql-secure-installation

>mysql
  show databases; 
  use mysql;
  select host, user from user;
  update user set host = '%' where user = 'root';