<?php
/**
 * Created by PhpStorm.
 * User: xmg
 * Date: 4/4
 * Time: 9:20
 */
$reult = $_POST['price'];
if ($reult > 10){
    echo 'post请求成功';
}else {
    echo '请求参数有误';
}
