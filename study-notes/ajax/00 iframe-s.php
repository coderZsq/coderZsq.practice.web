<?php
    $username = $_POST['username'];
    $password = $_POST['password'];
    if ($username == 'admin' && $password == '123') {
//        echo '登录成功';
?>
        <script type="text/javascript">
            parent.document.getElementById('info').innerText = '登录成功';
        </script>
<?php } else { ?>
        <script type="text/javascript">
            parent.document.getElementById('info').innerText = '登录失败';
        </script>
<?php } ?>
