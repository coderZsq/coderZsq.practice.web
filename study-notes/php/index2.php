 <?php
    header('Content-Type:text/html;charset=utf-8');
    $arr = array();
    $arr['123'] = array(
        "username" => "zhangsan",
        "chinese" => "130",
        "math" => "149",
        "english" => "146",
        "summary" => "298"
        );
    $arr['124'] = array(
        "username" => "lisi",
        "chinese" => "130",
        "math" => "119",
        "english" => "136",
        "summary" => "228"
    );
    $arr['125'] = array(
        "username" => "wangwu",
        "chinese" => "130",
        "math" => "119",
        "english" => "46",
        "summary" => "238"
    );
    $arr['126'] = array(
        "username" => "zhaoliu",
        "chinese" => "120",
        "math" => "119",
        "english" => "46",
        "summary" => "228"
    );
    $code = $_POST['code'];
    if ($code == 'admin') {
        foreach ($arr as $value) {
            echo "<ul><li>username: $value[username]</li><li>chinese: $value[chinese]</li><li>math: $value[math]</li><li>english: $value[english]</li><li>summary: $value[summary]</li></ul>";
        }
    } else {
        $score = $arr[$code];
        echo json_encode($score);
    }
