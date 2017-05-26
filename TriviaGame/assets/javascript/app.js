var questions = [{
	question: "How did 'Mario' get his name?",
	choices: ["A naming contest", "He was named after the director's pet fish", "He was named by a Nintendo fan", "He was named after the landlord of Nintendo's warehouse"],
	correctAnswer: "He was named after the landlord of Nintendo's warehouse",
}, {
	question: "Which of the following is true?",
	choices: ["Super Mario is the official mascot of Nintendo", "Princess Peach loved pears", "Zelda was actually a boy", "Yoshi is a descendant of Bowser"],
	correctAnswer: "Super Mario is the official mascot of Nintendo",
}, {
	question: "Why does Mario wear a hat?",
	choices: ["Because he has social anxiety", "Because his creators couldn't draw realistic hair", "Because he is bald", "Because he can't jump without it"],
	correctAnswer: "Because his creators couldn't draw realistic hair",
}, {
	question: "Mario has always worn what?",
	choices: ["A trench coat", "A red shirt and blue overalls", "Axe Cologne", "A lab coat"],
	correctAnswer: "A red shirt and blue overalls",
}, {
	question: "In 1983's Mario Bros., Mario kills an infinite supply of what?",
	choices: ["Ladybugs and dragonflies", "Butterflies and giant rats", "Turtles, crabs, and flies", "Spiders and witches"],
	correctAnswer: "Turtles, crabs, and flies",
}, {
	question: "Princess Peach was once known as what?",
	choices: ["Lady Peach", "Toadette", "Princess Ladybug", "Princess Toadstool"],
	correctAnswer: "Princess Toadstool",
}, {
	question: "Who is Mario's brother?",
	choices: ["Lorenzo", "Bowser", "Yoshi", "Luigi"],
	correctAnswer: "Luigi",
}, {
	question: "In 1981, Mario appeared in the game Donkey Kong, but during this time was known as who?",
	choices: ["The Plumber Guy", "Captain Jump", "Italian Boss", "Jumpman"],
	correctAnswer: "Jumpman",
}, {
	question: "Eating a green mushroom has what affect on Mario?",
	choices: ["Gives him an extra life", "Makes him bigger", "Makes him run faster", "Kills him"],
	correctAnswer: "Gives him an extra life",
}, {
	question: "Mario can spit fire when he eats which of the following?",
	choices: ["Fire bombs", "Red Mushrooms", "A Flower", "A Fireant"],
	correctAnswer: "A Flower",
}];


  // $('#start').click(function() {
  //   $("#questions").fadeIn();
  //   $(this).hide();
  // });

var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;



$("#timerStarts").hide();
$(".submitAnswer").hide();
$(".gameReset").hide();
$("#correctAnswers").hide();
$("#incorrectAnswers").hide();

function checkAnswer () { 
	for (var i = 0; i < questions.length; i++) {
		var userChoice = $("input[name = 'question-" + i +"']:checked");
		if (userChoice.val() == questions[i].correctAnswer) {
			correctAnswers++; 

			} else {
				incorrectAnswers++;
				
		}
	}
	$("#correctAnswers").append(" " + correctAnswers);
	$("#incorrectAnswers").append(" " + incorrectAnswers); 
};


function timer() {
	var seconds = 60;
	counter = setInterval (function() {
	$("#timerStarts").html('<h2> Time Remaining:' + seconds-- + '</h2>');
		if (seconds === -1) {
			$("#timerStarts").html("<h2> Out of Time! </h2>");
			clearInterval(counter);
			function delayScore(){
				$("#showQuestions").hide();
				$("#timerStarts").hide();
				$(".submitAnswer").hide();
				checkAnswer();
				$("#correctAnswers").show();
				$("#incorrectAnswers").show();
			}
			setTimeout(delayScore, 1000);
		}
	}, 1000);
	
};

$(".gameStart").on("click", function() {
	$(".gameStart").hide();
	displayCurrentQuestion();
	$("#timerStarts").show();
	timer();


});

function displayCurrentQuestion() {
	$(".submitAnswer").show();
	for (var i = 0; i < questions.length; i++) {
		$("#showQuestions").append("<h3>" + questions[i].question + "</h3");
		for (var j = 0; j < questions[i].choices.length; j++) {
			$("#showQuestions").append('<input type="radio" name="question'  + '-' + i + '" value="'+ questions[i].choices[j] + '"> '+ questions[i].choices[j] );

		}
	}
	$(".submitAnswer").on("click", function() {
		$("#showQuestions").hide();
		$("#timerStarts").hide();
		$(".submitAnswer").hide();
		checkAnswer();
		clearInterval(counter);
		$("#correctAnswers").show();
		$("#incorrectAnswers").show();

	});
};