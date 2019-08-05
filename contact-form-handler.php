<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];
    $email_subject = $_POST['subject'];

    $email_from = 'jessicadao97@gmail.com';
    $email_body = "Username: $name.\n".
                    "User email: $visitor_email.\n".
                    "User message: $message.\n";
    $to = 'ahdao@wpi.edu';
    $headers = "From" $email_from \r\n";
    $headers .= "Reply-to: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);
    header("Location: index.html");
?>