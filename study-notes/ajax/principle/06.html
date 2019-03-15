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
            // xhr.open('post', '06.xml', true);
            xhr.open('post', '06 xml.php', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(param);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        let data = xhr.responseXML;
                        let bookList = data.getElementsByTagName('booklist');
                        // let books = bookList[0].childNodes;
                        // console.log(books[0].nodeType);
                        // console.log(books[1].nodeType);
                        let books = bookList[0].children;
                        let book1 = books[0];
                        // let name = book1.children[0].innerHTML;
                        // let author = book1.children[1].innerHTML;
                        // let desc = book1.children[2].innerHTML;
                        let name = book1.children[0].firstChild.wholeText;
                        let author = book1.children[1].firstChild.wholeText;
                        let desc = book1.children[2].firstChild.wholeText;
                        console.log(name, author, desc);
                    }
                }
            };
        };
    };
</script>
</body>
</html>