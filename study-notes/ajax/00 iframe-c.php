<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <title></title>
</head>
<body>
    <div>
        <form action="00 iframe-s.php" method="post" target="myframe">
            username: <input type="text" name="username"><span id="info"></span><br>
            password: <input type="text" name="password">
            <input type="submit" value="login">
        </form>
    </div>
    <iframe name="myframe" width="0" height="0" frameborder="0"></iframe>
</body>
</html>
