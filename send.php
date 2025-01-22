<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require './Exception.php';
require './PHPMailer.php';
require './SMTP.php';

require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST['name'];
    $email = $_POST['email']; 
    $message = $_POST['message'];

    // Set up PHPMailer as before...
    
    try {
        $mail->setFrom($email, $fullName); // Use email and name from the form
        $mail->addAddress('arsalanahmeddev1@gmail.com'); // Change to your email
        
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body = "Name: $fullName\nEmail: $email\nMessage: $message";

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request method.";
}
