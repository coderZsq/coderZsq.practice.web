<?php
//    echo '{"username":"zhangsan", "age":"12"}';
//    $username = 'zhangsan';
//    $age = '12';
//    echo '{"username":"'.$username.'","age":"'.$age.'"}';
    $arr = array("name1"=>"tom", "name2"=>"jerry", "name3"=>"spike");
    $str = json_encode($arr);
    echo $str;