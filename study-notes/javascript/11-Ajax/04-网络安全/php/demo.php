<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/11/13
 * Time: 16:31
 */

header("Access-Control-Allow-Origin:*");

echo "name: ".$_REQUEST["name"]." age:".$_REQUEST["age"];
//echo "Cookie";
//print_r($_COOKIE);