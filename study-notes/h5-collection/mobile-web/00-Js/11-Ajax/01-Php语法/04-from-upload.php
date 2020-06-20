<?php
/**
 * Created by PhpStorm.
 * User: xmg
 * Date: 9/7
 * Time: 17:38
 */

echo "Nice too ...";
echo "<br>";
print_r($_FILES);

#Array ( [username] => Array ( [name] => 2345鎴浘20180829112255.jpg [type] => image/jpeg [tmp_name] => C:\wamp\tmp\php664A.tmp [error] => 0 [size] => 26655 ) )
# name -->文件的名称
# type --> 文件的类型(MIMEType)
# tmp_name-->文件上传到服务器之后的临时存储路径
# error  --> 0表示成功
# size   --> 文件大小

sleep(3);
move_uploaded_file($_FILES["username"]["tmp_name"],"./file/123.jpeg ");