<?php
$username = $_POST['username'];
$password = $_POST['password'];
if ($username == 'admin' && $password == '123') {
    echo 1;
} else {
    echo $username;
}