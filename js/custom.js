$(document).ready(function(){
	//jquery methods go here inside...

// P1 - About


	$('.my-slider').unslider({
autoplay: true
});

$('#more-more').hide();

$('#about-button').click(function(){
	$('#about-button').text('Less');
	$('#more-more').slideToggle();
});


	var buttonIsOpen = false;

	$('#about-button').on('click', updateText);
	$('#more-more').hide();

	function updateText(){
		console.log(buttonIsOpen);
		if(buttonIsOpen == true){
			$('#about-button').text("More");
			$('#more-more').slideUp();

			buttonIsOpen = false;
		}else{
			$('#about-button').text("Less");
			$('#more-more').slideDown();

			buttonIsOpen = true;
		}
	};

// P2 - FAQ


$('#answer1, #answer2, #answer3').hide();


$('#question1').click(function(){
  $('#answer2, #answer3').slideUp();
   $('#answer1').slideToggle();
  // $('#answer1').slideDown();
  // $('#answer1').slideup();
});

$('#question2').click(function(){
  $('#answer1, #answer3').slideUp();
  $('#answer2').slideToggle();
});

$('#question3').click(function(){
  $('#answer2,#answer1').slideUp();
  $('#answer3').slideToggle();
  
});


// P1 - Card - for loop

var casestudies =[
	{
	   	image:"images/casestudy1_briard.jpg",
	   	location:"Sydney, Australia",
		name:"Elles Belles",
		breed:"Briard",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ipsum arcu, aliquet et nulla sed, placerat accumsan erat. Ducimus harum...",
		button:"Read More",
		buttonLink:"page2.html"
	
	},

		{
	   	
	   	image:"images/casestudy2_shepherd.jpg",
	   	location:"Sydney, Australia",
		name:"Abbey Girl",
		breed:"German Shepherd",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ipsum arcu, aliquet et nulla sed, placerat accumsan erat. Ducimus harum...",
		button:"Read More",
		buttonLink:"page2.html"

	},
		{
	   	
	   	image:"images/casestudy3_briard.jpg",
	   	location:"Sydney, Australia",
		name:"Hudson",
		breed:"Briard",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ipsum arcu, aliquet et nulla sed, placerat accumsan erat. Ducimus harum...",
		button:"Read More",
		buttonLink:"page2.html"
	},

		{
	   	image:"images/casestudy4_husky.jpg",
	   	location:"Sydney, Australia",
		name:"Zeus Almighty",
		breed:"Husky",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ipsum arcu, aliquet et nulla sed, placerat accumsan erat. Ducimus harum...",
		button:"Read More",
		buttonLink:"page2.html" 
	},
	
];

for(var i = 0; i < casestudies.length; i++){

    var elmt =  '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 breedCard '+casestudies[i].breed+'">';

    	elmt += '<div id="item1" class="casestudy_background">';
        elmt += 	'<div class="casestudy_image">';
        elmt +=			'<img src="'+casestudies[i].image+'"/>';
        elmt += 	'</div>'
        elmt += 	'<div class="casestudy_content">';
        elmt += 	'<p class="location">'+casestudies[i].location+'</p>';
        elmt += 	'<h2 class="name">'+casestudies[i].name+'</h2>';
        elmt += 	'<h3 class="breed">'+casestudies[i].breed+'</h3>';
        elmt += 	'<p class="description">'+casestudies[i].description+'</p>';
        elmt += 	'<div class="button"><a href="'+casestudies[i].buttonLink+'">'+casestudies[i].button+'</a></div>';
        elmt += '</div>';

        elmt +='</div>';
        

    $('.dogs').append(elmt);  
}

// P1 - Cards - hide/show


$('#briardButton').click(function(){
	$('.breedCard').hide();  
 	$('.Briard').show();  
});

$('#huskyButton').click(function(){
  	$('.breedCard').hide();  
  	$('.Husky').show(); 
});

$('#shepherdButton').click(function(){
	$('.breedCard').hide();  
 	$('.German.Shepherd').show(); 
});

$('#allButton').click(function(){
	$('.breedCard').show();   
});


// Form

function validateForm() {
  $('#info').html("There were some problems with your form submission:<br>Please fill in ");
  $('#errors').hide();
  
    if ( $('#name').val() == null || $('#name').val() == "") {
      $('#info').append("Name correctly.");
      $('#errors').show();
        return false;
     }
  else if ( $('#breed').val() == null || $('#breed').val() == "" || isAValidEmailAddress( $('#breed').val() ) == false) {
      $('#info').append("breed correctly.");
      $('#errors').show();
        return false;
    
    }else if ( $('#story').val() == null || $('#story').val() == "select") {
      $('#info').append("story correctly.");
      $('#errors').show();
        return false;
    }else if ( $('#file').val() == null || $('#file').val() == "") {
      $('#info').append("file correctly.");
      $('#errors').show();
        return false;
    }
  
}


document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
};


function isAValidEmailAddress(emailAddress){
    return /^[a-z0-9_\-\.]{2,}@[a-z0-9_\-\.]{2,}\.[a-z]{2,}$/i.test(emailAddress);
}



$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

   

    $("#file-upload-button").change(function () {
var fileName = $(this).val().replace('C:\\fakepath\\', '');
$("#file-upload-filename").html(fileName);
});





});
