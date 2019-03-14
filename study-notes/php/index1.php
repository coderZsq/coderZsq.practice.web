<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP</title>
    <style type="text/css">
        th, td {
            border-left: 1px solid red;
            border-top: 1px solid red;
        }
        table {
            border-right: 1px solid red;
            border-bottom: 1px solid red;
        }
    </style>
</head>
<body>
    <?php
        $arr = array();
        $arr[0] = array("name"=>"name1", "author"=>"author1", "category"=>"category1", "desc"=>"desc1");
        $arr[1] = array("name"=>"name2", "author"=>"author2", "category"=>"category2", "desc"=>"desc2");
        $arr[2] = array("name"=>"name3", "author"=>"author3", "category"=>"category3", "desc"=>"desc3");
        $arr[3] = array("name"=>"name4", "author"=>"author4", "category"=>"category4", "desc"=>"desc4");
    ?>
    <div>
        <form action="index2.php" method="post">
            Number: 
            <input type="text" name="code">
            <input type="submit" value="Query">
        </form>
    </div>
    <table cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <th>name</th>
                <th>author</th>
                <th>category</th>
                <th>desc</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($arr as $value) {?>
                <tr>
                    <td><?php echo $value["name"]; ?></td>
                    <td><?php echo $value["author"]; ?></td>
                    <td><?php echo $value["category"]; ?></td>
                    <td><?php echo $value["desc"]; ?></td>
                </tr>
            <?php } ?>
        </tbody>
    </table>
</body>
</html>