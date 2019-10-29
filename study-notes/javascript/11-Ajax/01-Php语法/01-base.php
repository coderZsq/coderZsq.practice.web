<?php
/**
 * Created by PhpStorm.
 * User: xmg
 * Date: 9/7
 * Time: 15:01
 */
header("content-type:text/html; charset=utf-8");
//001 注释
#(1) 单行注释 //   #
#(2) 多行注释


//002 变量
//js var str = "string";
$str = "stringAAA";
$num = 123;
$bool = true;
$arrM = array(1,2,3);

//003 控制输出
//js  conslose.log()
//(1) echo  向浏览器页面输出字符串内容(echo不是函数是语言结构)
//(2) print 函数
//(3) print_r 函数(可以打印复杂数据的内容)
echo $str;
echo "<br>";
echo $num;
echo "<br>";
echo $bool;
echo "<br>";
echo $arrM;
echo "<br>";
print_r($arrM);
echo "<br>";

//004 数组
//(1) 索引数组(和js的数组基本一致)
$arr1 = array(1,2,123,456);
print_r($arr1);
echo "<br>";

//(2) 关联数组(和js中的对象基本一致)
$arr2 = array("name"=>"zs","age"=>18,"className"=>"斗破苍穹");
print_r($arr2["name"]);
echo "<br>";

//005 函数
function fn($a,$b){
    $res = $a + $b;
    #global $str;
    #echo $str;
    print_r($res);
}
fn(10,20);


//字符串处理
//js  var str1 = "str1..."  var str2 = "sadada"  str1 + str2
$strM1 = "我是字符串1";
$strM2 = "哈哈 我也是字符串2";
echo $strM1."啦啦啦啦啦".$strM2;

for($i = 0;$i<count($arr1);$i++)
{
    echo $arr1[$i];
    echo "<br>";
}