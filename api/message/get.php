<?php
require "./origin.php";
require "./db.php";
require "./chackRequestMethod.php";

class Message {
    var $id;
    var $name;
    var $avatarurl;
    var $email;
    var $url;
    var $datetime;
    var $content;
}

function echoMessage($conn) {
    $sql = "SELECT * FROM message order by datetime desc";
    $result = $conn->query($sql);
    $data = array();

    while($row = $result->fetch_assoc()) {
        $message = new Message();

        $message->id = $row["id"];
        $message->name = $row["name"];
        $message->avatarurl = $row["avatarurl"];
        $message->email = $row["email"];
        $message->url = $row["url"];
        $message->datetime = $row["datetime"];
        $message->content = $row["content"];

        $data[]=$message;
    }
    echo json_encode($data);
}

function main() {
    chackRequestMethod("GET");
    $conn = connectDB();
    echoMessage($conn);
    $conn->close();
}

try {
    main();
} catch(Exception $e) {
    echo "错误：" . $e->getMessage();
}
?>
