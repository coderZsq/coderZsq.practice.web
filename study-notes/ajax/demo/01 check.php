<?php
/**
 * Created by PhpStorm.
 * User: zhushuangquan
 * Date: 2019-03-14
 * Time: 15:31
 */
$username = $_GET['username'];
$password = $_GET['password'];
if ($username == 'admin' && $password == '123') {
    echo '1';
} else {
    echo '2';
}