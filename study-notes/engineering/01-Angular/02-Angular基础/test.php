<?php
/**
 * Created by PhpStorm.
 * User: xmg
 * Date: 4/4
 * Time: 14:58
 */
header("Content-type: text/html; charset=utf-8");

$result = file_get_contents('https://api.douban.com/v2/book/1220562');
echo $result;