<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <title></title>
</head>
<body>
<from>
    <form>
        username: <input type="text" name="username" id="username"><span id="info"></span><br>
        password: <input type="text" name="password" id="password">
        <input type="button" value="login" id="btn">
    </form>
</from>
<script type="text/javascript">
    window.onload = function () {
        let btn = document.getElementById('btn');
        btn.onclick = function () {
            let username = document.getElementById('username').value;
            let password = document.getElementById('password').value;
            let xhr = null;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else {
                xhr = ActiveXObject('Microsoft');
            }
            let param = 'username='+username+'&password='+password;
            xhr.open('get', '03 get.php?'+encodeURI(param), true);
            xhr.send(null);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        alert(xhr.responseText);
                    }
                }
            };
        };
    };
</script>
</body>
</html>