<?php
/**
 * Created by PhpStorm.
 * User: xmg
 * Date: 9/7
 * Time: 17:11
 */
header("content-type:text/html; charset=utf-8");

# 可以通过全局对象($_GET $_POST)来拿到客户端请求提交的参数
echo "哈哈哈哈";
echo "<br>";
echo "用户名:".$_GET["username"];
echo "<br>";
echo "密码:".$_GET["password"];