<?php
/**
 * Created by PhpStorm.
 * User: xmg
 * Date: 4/4
 * Time: 10:50
 */
$hash = $_GET['hash'];
switch ($hash){
    case 'home':
        echo "<h1>我是首页</h1>";
        break;
    case 'contact':
        echo "<h1>contact</h1>";
        break;
    case 'about':
        echo "<h1>about</h1>";
        break;
    default:
        echo "参数有误";
}