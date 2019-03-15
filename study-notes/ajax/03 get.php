<?php
$username = $_GET['username'];
$password = $_GET['password'];
if ($username == 'admin' && $password == '123') {
    echo 1;
} else {
    echo $username;
}