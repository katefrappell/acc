<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$findout = $_POST['findout'];
	$enquiry = $_POST['enquiry'];
	$from = 'From: ACC';
	$to = 'kate.frappell@gmail.com';
	$subject = 'Enquiry';
	$human = $_POST['human'];

	$body = "From: $name\n E-Mail: $email\n Phone:\n $phone Findout:\n $findout Enquiry:\n $enquiry";


	if ($_POST['submit'] && $human == '4'){
		if (mail ($to, $subject, $body, $from)){
			echo '<p>Your message has been sent!</p>';
		} else {
			echo'<p>Something went wrong! Try again.</p>';
		}
} else f ($_POST ['submit'] && $human !='4'){
	echo '<p>You answered the anti-spam question incorrectly!</p>'
}

?>



<!-- http://tangledindesign.com/how-to-create-a-contact-form-using-html5-css3-and-php/ -->