<?php
$list = array(
    array('id'=>1,'pid'=>2,'text'=>'我很丑可是我很温柔'),
    array('id'=>2,'pid'=>2,'text'=>'蒲公英的约定'),
    array('id'=>3,'pid'=>2,'text'=>'你我的约定'),
    array('id'=>4,'pid'=>3,'text'=>'pretty boy'),
    array('id'=>5,'pid'=>3,'text'=>'See You Again'),
    array('id'=>6,'pid'=>2,'text'=>'甜甜的'),
    array('id'=>7,'pid'=>1,'text'=>'再见我的爱人'),
    array('id'=>8,'pid'=>2,'text'=>'心中的日月'),
    array('id'=>9,'pid'=>3,'text'=>'Let It Go'),
    array('id'=>10,'pid'=>1,'text'=>'不要说再见'),
    array('id'=>11,'pid'=>3,'text'=>'Rise'),
    array('id'=>12,'pid'=>2,'text'=>'再见'),
    array('id'=>13,'pid'=>1,'text'=>'追梦人'),
    array('id'=>14,'pid'=>2,'text'=>'不能说的秘密'),
    array('id'=>15,'pid'=>4,'text'=>'오늘 하루'),
    array('id'=>16,'pid'=>1,'text'=>'昨日重现'),
    array('id'=>17,'pid'=>3,'text'=>'Love Me like you Do'),
    array('id'=>18,'pid'=>2,'text'=>'好久不见'),
    array('id'=>19,'pid'=>1,'text'=>'独角戏'),
    array('id'=>20,'pid'=>2,'text'=>'K歌之王'),
    array('id'=>21,'pid'=>1,'text'=>'往事随风'),
    array('id'=>22,'pid'=>3,'text'=>'Just Like Fire'),
    array('id'=>23,'pid'=>4,'text'=>'さよならの夏'),
    array('id'=>24,'pid'=>4,'text'=>'江南Style'),
    array('id'=>25,'pid'=>4,'text'=>'仆が死のうと思'),
    array('id'=>26,'pid'=>1,'text'=>'海阔天空'),
    array('id'=>27,'pid'=>4,'text'=>'天空之城'),
    array('id'=>28,'pid'=>1,'text'=>'不再犹豫'),
    array('id'=>29,'pid'=>4,'text'=>'仆が死のうと思'),
    array('id'=>30,'pid'=>3,'text'=>'Heart And soul'),
    array('id'=>31,'pid'=>4,'text'=>'오늘 하루'),
    array('id'=>32,'pid'=>1,'text'=>'往事只能回味'),
    array('id'=>33,'pid'=>3,'text'=>'Bang Bang'),
    array('id'=>34,'pid'=>4,'text'=>'さよならの夏'),
    array('id'=>35,'pid'=>3,'text'=>'Same Old Love'),
    array('id'=>36,'pid'=>4,'text'=>'さよならの夏'),
    array('id'=>37,'pid'=>4,'text'=>'恋恋风尘'),
);
$id = $_GET['id'];
$tempArray = array();
foreach ($list as $key=>$value){
    if ($id == $value['pid']){
       $tempArray[] = $value;
    }
}
echo  json_encode($tempArray);

/*
  接口文档API文档

  地址：listMusic.php
  请求方式：get
  请求参数：listMusic.php/:id
  返回结果：如果id=1 返回复古。id=2 ->  id=3->  id=4->
 * */

