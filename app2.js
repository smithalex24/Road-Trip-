var currentIndex = 0;
var time = 120;

$('#start').on("click", (e) => {
	// Display the question
	displayNextQuestion();

	// Unhide choice buttons
	$('#choicea').removeClass('d-none');
	$('#choiceb').removeClass('d-none');
	$('#choicec').removeClass('d-none');

	// Hide start btn so people can't keep clicking it
	$('#start').addClass('d-none');

});
//Unhide instructions when user clicks "Instructions"

$('#gameinfo').on("click", (e) => {
	$('#instructions').removeClass('d-none');
});

$('#choicea').click(function(e){
	console.log('user chose A');
	//todo: something regard right/wrong answer
	if(locations[currentIndex].questions[0].answer === "a"){
		alert('Correcto!')
	}
	else {
		alert('Incorrecto')
	}
	currentIndex++;
	displayNextQuestion();
});

$('#choiceb').click(function(e){
	console.log('user chose B');
	//todo: something regard right/wrong answer
	if(locations[currentIndex].questions[0].answer === "b"){
		alert('Correcto!')
	}
	else {
		alert('Incorrecto')
	}
	currentIndex++;
	displayNextQuestion();
});

$('#choicec').click(function(e){
	console.log('user chose C');
	//todo: something regard right/wrong answer
	if(locations[currentIndex].questions[0].answer === "c"){
		console.log('Correcto!')
	}
	else {
		console.log('Incorrecto!')
	}

	currentIndex++;
	displayNextQuestion();
});

function displayNextQuestion(){
	if(currentIndex >= locations.length || time <= 0){
		// TODO: Show score?
		console.log('END OF GAME!');
	}
	else {
		// Display welcome text 
		$('#welcome-text').text('Welcome to ' + locations[currentIndex].country + "!");
		
		// Assign question text
		$('#question').text(locations[currentIndex].questions[0].text);
		
		// Assign choice text
		$('#choicea').text(locations[currentIndex].questions[0].choices.a);
		$('#choiceb').text(locations[currentIndex].questions[0].choices.b);
		$('#choicec').text(locations[currentIndex].questions[0].choices.c);
	}
}









