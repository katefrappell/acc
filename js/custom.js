$(document).ready(function(){
	//jquery methods go here inside...


	$('#contact-submit').submit(function(event){
		event.stopPropagation();
		event.preventDefault();

		$.post( "index.php", $( "#contact-submit" ).serialize(), function(data) {
			$('#form-message').html(data);
		});

	});

// Home - Slider


	$('.my-slider').unslider({
		autoplay: true
	});


  // Email needs '@'

  function isAValidEmailAddress(emailAddress){
    return /^[a-z0-9_\-\.]{2,}@[a-z0-9_\-\.]{2,}\.[a-z]{2,}$/i.test(emailAddress);
}



// Form

// function validateForm() {
//   $('#info').html("There were some problems with your form submission:<br>Please fill in ");
//   $('#errors').hide();
  
//     if ( $('#name').val() == null || $('#name').val() == "") {
//       $('#info').append("Name correctly.");
//       $('#errors').show();
//         return false;
//      }
//   else if ( $('#breed').val() == null || $('#breed').val() == "" || isAValidEmailAddress( $('#breed').val() ) == false) {
//       $('#info').append("breed correctly.");
//       $('#errors').show();
//         return false;
    
//     }else if ( $('#story').val() == null || $('#story').val() == "select") {
//       $('#info').append("story correctly.");
//       $('#errors').show();
//         return false;
//     }else if ( $('#file').val() == null || $('#file').val() == "") {
//       $('#info').append("file correctly.");
//       $('#errors').show();
//         return false;
//     }
  
// }



});
