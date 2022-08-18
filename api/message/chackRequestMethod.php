<?php
function chackRequestMethod($method) {
    if ($_SERVER['REQUEST_METHOD'] != $method) {
        die("错误：不支持 $method 请求，请使用 $method 请求");
    }
}
?>
