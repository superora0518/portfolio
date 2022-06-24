<?php
    use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

    require_once __DIR__ . '/vendor/phpmailer/src/Exception.php';
    require_once __DIR__ . '/vendor/phpmailer/src/PHPMailer.php';
    require_once __DIR__ . '/vendor/phpmailer/src/SMTP.php';
    require_once __DIR__ . '/Constant.php';

    // passing true in constructor enables exceptions in PHPMailer
    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER; // for detailed debug output
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        $mail->Username = MY_GMAIL; // YOUR gmail email
        $mail->Password = MY_GMAIL_PASS; // YOUR gmail password

        // Sender and recipient settings
        $mail->setFrom($_POST["from_email"], $_POST["from_name"]);
        $mail->addAddress(MY_GMAIL, MY_NAME);
        $mail->addReplyTo($_POST["from_email"], $_POST["from_name"]); // to set the reply to

        // Setting the email content
        $mail->IsHTML(true);
        $mail->Subject = $_POST["subject"] . " - For Bahadir Kaplan";
        $mail->Body = $_POST["message"];

        $mail->send();
        echo "mygmail_success";
    } catch (Exception $e) {
        echo "fail";
    }