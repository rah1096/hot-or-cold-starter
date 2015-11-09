
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	/*--- Random number ---*/
	var randNum = Math.floor(Math.random()*100) + 1;

	var guessCount = 0;

	/*--- Number guess ---*/
	$("#guessButton").click(function() {
		var guess = $("#userGuess").val();
		var temp = '';
		if (isNaN(guess)) {
			$("#userGuess").val('');
			return alert("Please enter number");
		} else if (parseInt(guess) === randNum) {
			$("#feedback").text("Winner Winner!!! Chicken Dinner!!!");
			temp = "Winner!!!";
			alert("You win!");
			$("#userGuess").val('');
		} else if (((parseInt(guess) > (randNum - 4)) && ((parseInt(guess) < (randNum))) || ((parseInt(guess) < (4 + randNum)) && ((parseInt(guess) > (randNum)))))) {
			$("#userGuess").val('');
			$("#feedback").text("Hot");
			temp = "Hot";
		} else if (((parseInt(guess) > (randNum - 10)) && ((parseInt(guess) < (randNum - 3))) || ((parseInt(guess) < (10 + randNum)) && ((parseInt(guess) > (randNum + 3)))))) {
			$("#userGuess").val('');
			$("#feedback").text("Warm");
			temp = "Warm";
		} else {
			$("#userGuess").val('');
			$("#feedback").text("Cold");
			temp = "Cold";
		};

		guessCount++;
		$("#count").text(guessCount);
		$("#guessList").prepend("<li>" + "Guess #" + guessCount + ": " + guess + " " + temp + "</li>");
	});

	/*--- New game ---*/
	$(".new").click(function() {
		location.reload();
	});

});


