<?php
function chackRequestMethod($method) {
    if ($_SERVER['REQUEST_METHOD'] != "POST") {
        die("错误：请求方式不支持，请使用 " . $method . " 请求");
    }
}
?>
