<?php
  //info pulled from contact form post
    $firstname = $_POST['first_name'];
    $lastname = $_POST['last_name'];
    $email = $_POST['email'];
    $message = $_POST['comments'];

  //other info needed for sending message
  $from = 'From: Portfolio Website';
  $to= 'grace@bygracemiller.com';
  $subject = 'Portfolio Inquiry';

  $body = "From: $firstname $lastname\n E-Mail: $email\n Message:\n $message";

  if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) { 
      $success = "Message successfully sent";
    } else { 
      $success = "Message Sending Failed, try again"; 
  }
}
?>