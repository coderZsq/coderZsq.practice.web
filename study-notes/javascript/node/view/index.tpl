<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <title>成绩查询</title>
</head>
<body>
<form action="http://localhost:3000/score" method="post">
    请输入考号: <input type="text" name="code">
    <input type="submit" value="查询">
    <div><a href="http://localhost:3000/all">全部成绩</a></div>
</form>
</body>
</html>