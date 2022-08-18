<?php
require "./origin.php";
require "./db.php";
require "./chackRequestMethod.php";

function chackForm() {
    if (strlen($_REQUEST["name"]) > 255 ||
        strlen($_REQUEST["avatarurl"]) > 255 ||
        strlen($_REQUEST["email"]) > 255 ||
        strlen($_REQUEST["url"]) > 255 ||
        strlen($_REQUEST["content"]) > 1048575) {
        die("错误：内容过长");
    }
}

function escapeString($string) {
    return
    str_replace("\\", "\\\\",
    str_replace("\"", "\\\"",
    str_replace("\'", "\\\'", $string)));
}

function toSQLValue($value) {
    if ($value == null) {
        return "NULL";
    } else {
        return "'$value'";
    }
}

function writeMessage($conn) {
    $name      = toSQLValue($_REQUEST["name"]);
    $avatarurl = toSQLValue($_REQUEST["avatarurl"]);
    $email     = toSQLValue($_REQUEST["email"]);
    $url       = toSQLValue($_REQUEST["url"]);
    $content   = toSQLValue($_REQUEST["content"]);
    $datetime  = toSQLValue(date("Y-m-d H:i:s"));

    $sql = 
    "INSERT INTO `message` (`id`, `name`, `avatarurl`, `email`, `url`, `content`, `datetime`)" . 
    "VALUES (NULL, $name, $avatarurl, $email, $url, $content, $datetime);";
    $conn->query($sql);
}

function main() {
    chackRequestMethod("POST");
    chackForm();
    $conn = connectDB();
    writeMessage($conn);
    $conn->close();
    header("HTTP/1.1 301 Moved Permanently");
    Header("Location: " . $_SERVER['HTTP_ORIGIN'] . "/connect");
}

try {
    main();
} catch(Exception $e) {
    echo "错误：" . $e->getMessage();
}
?>
