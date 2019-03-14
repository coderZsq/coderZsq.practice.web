<?php
/**
 * Created by PhpStorm.
 * User: zhushuangquan
 * Date: 2019-03-14
 * Time: 15:54
 */
$username = $_POST['username'];
$password = $_POST['password'];
if ($username == 'admin' && $password == '123') {
    echo 1;
} else {
    echo $username;
}