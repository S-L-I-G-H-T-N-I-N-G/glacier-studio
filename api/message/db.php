<?php
function connectDB() {
    $servername = "别看了，这里没有地址";
    $username   = "别看了，这里没有用户名";
    $password   = "别看了，这里没有密码";
    $dbname     = "别看了，这里没有数据库名称";

    $conn = new mysqli($servername, $username, $password);
    if ($conn->connect_error) {
        die("数据库连接失败：" . $conn->connect_error);
    }

    $conn->query("SET NAMES UTF8MB4");
    $conn->query("USE " . $dbname);

    return $conn;
}
?>
