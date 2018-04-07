var currentIndex = 0;
var time = 30;
var interval;

$('#start').on("click", (e) => {
	// Display the question
	displayNextQuestion();
	// Start the timer
	$('#start').on('click', startTimer);

	// Unhide choice buttons
	$('#choicea').removeClass('d-none');
	$('#choiceb').removeClass('d-none');
	$('#choicec').removeClass('d-none');

	// Hide start btn so people can't keep clicking it
	$('#start').addClass('d-none');
	startTimer();

});

//Animate title on page load
$(document).ready(function() {
	$('#title').addClass('animated jello');
});

//Timer Ongoing Function
var tick = function(){
	time -= 1;
	console.log(time);
	$("#stopwatch").html(time);
	if(time <= 0){
		clearInterval(interval);
		alert('GAME OVER!');
		$('#again').removeClass('d-none');
	}else if(currentIndex === locations.length){
		alert("YOU MADE IT! Have a safe flight home");
		clearInterval(interval);
	}
}
var startTimer = function() {

	//set the interval in motion
	interval = setInterval(tick, 1000);
};
//Unhide instructions when user clicks "Instructions"

$('#gameinfo').on("click", (e) => {
	$('#instructions').removeClass('d-none');
	$('#instructions').addClass('animated zoomInUp')
});

$('#choicea').click(function(e){
	console.log('user chose A');
	//todo: something regard right/wrong answer
	if(locations[currentIndex].questions[0].answer === "a"){
		alert('Correcto!')
		time += 5
	}
	else {
		alert('Incorrecto')
		time -= 10;
	}
	currentIndex++;
	displayNextQuestion();
});

$('#choiceb').click(function(e){
	console.log('user chose B');
	//todo: something regard right/wrong answer
	if(locations[currentIndex].questions[0].answer === "b"){
		alert('Correcto!')
		time += 5;
	}
	else {
		alert('Incorrecto')
		time -= 10;

	}
	currentIndex++;
	displayNextQuestion();
});

$('#choicec').click(function(e){
	console.log('user chose C');
	//todo: something regard right/wrong answer
	if(locations[currentIndex].questions[0].answer === "c"){
		alert('Correcto!')
		time += 5;
	}
	else {
		alert('Incorrecto')
		time -= 10;
	}

	currentIndex++;
	displayNextQuestion();
});

function displayNextQuestion(){
	if(currentIndex >= locations.length || time <= 0){
		// TODO: Show score?
	$('#again').removeClass('d-none');//Display Play Again button
}
	else {
		// Display welcome text 
		$('#welcome-text').text('Bienvenido a ' + locations[currentIndex].country + "!");
		
		// Assign question text
		$('#question').text(locations[currentIndex].questions[0].text);
		
		// Assign choice text
		$('#choicea').text(locations[currentIndex].questions[0].choices.a);
		$('#choiceb').text(locations[currentIndex].questions[0].choices.b);
		$('#choicec').text(locations[currentIndex].questions[0].choices.c);
	}
}











