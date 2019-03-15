<?php
header('Content-Type:text/xml;charset=utf-8');
$arr = array();
$arr[0] = array('name'=>'name1', 'author'=>'author1', 'desc'=>'desc1');
$arr[1] = array('name'=>'name2', 'author'=>'author2', 'desc'=>'desc2');
$arr[2] = array('name'=>'name3', 'author'=>'author3', 'desc'=>'desc3');
$arr[3] = array('name'=>'name4', 'author'=>'author4', 'desc'=>'desc4');
?>

<booklist>
    <book>
        <name><?php echo $arr[0]['name'] ?></name>
        <author><?php echo $arr[0]['author'] ?></author>
        <desc><?php echo $arr[0]['desc'] ?></desc>
    </book>
    <book>
        <name><?php echo $arr[1]['name'] ?></name>
        <author><?php echo $arr[1]['author'] ?></author>
        <desc><?php echo $arr[1]['desc'] ?></desc>
    </book>
    <book>
        <name><?php echo $arr[2]['name'] ?></name>
        <author><?php echo $arr[2]['author'] ?></author>
        <desc><?php echo $arr[2]['desc'] ?></desc>
    </book>
    <book>
        <name><?php echo $arr[3]['name'] ?></name>
        <author><?php echo $arr[3]['author'] ?></author>
        <desc><?php echo $arr[3]['desc'] ?></desc>
    </book>
</booklist>