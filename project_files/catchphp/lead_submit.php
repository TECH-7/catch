<?php
header('Access-Control-Allow-Origin: *');

if (!isset($_POST['firstName'])) {
    exit;
}

$server = "localhost";
$username = "root";
$password = "root";
$dbname = "catch";

try {
    $conn = new PDO("mysql:host=$server;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $error) {
    echo 'Connection error: ' . $error->getMessage();
    exit;
}

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];
$acceptTerms = $_POST['acceptTerms'];
$marketing = $_POST['marketing'];
$notes = $_POST['notes'];

$insertStmt = $conn->prepare("INSERT INTO leads(first_name,last_name,email,accept_terms,mobile,marketing,notes) VALUES (:first_name,:last_name,:email,:accept_terms,:mobile,:marketing,:notes)");
$insertStmt->bindParam(":first_name", $firstName);
$insertStmt->bindParam(":last_name", $lastName);
$insertStmt->bindParam(":email", $email);
$insertStmt->bindParam(":mobile", $mobile);
$insertStmt->bindParam(":accept_terms", $acceptTerms);
$insertStmt->bindParam(":marketing", $marketing);
$insertStmt->bindParam(":notes", $notes);

$res = $insertStmt->execute();

if ($res) {
    echo "Success!";
} else {
    echo "Error!";
}
