var words = ["arryn", "greyjoy", "lannister", "stark", "targaryen", "tully", "frey", "baratheon", "martell", "tyrell"];

var chosenWord = "";

var chosenWordLetters = [];

var blanks = 0;

var currentProgress = [];

var wrongGuesses = [];

var letterGuessed = "";

var guessesLeft = 12;
var wins = 0;
var losses = 0;

window.onload = function() {



    function start() {
        guessesLeft = 12;

        chosenWord = words[Math.floor(Math.random() * words.length)];

        chosenWordLetters = chosenWord.split("");

        blanks = chosenWordLetters.length;

        currentProgress = [];

        wrongGuesses = [];

        for (var i = 0; i < blanks; i++) {
            currentProgress.push("_");
        }

        console.log(chosenWord);

        document.getElementById("guesses-left").innerHTML = "Guesses Remaining: " + guessesLeft;
        document.getElementById("hold").textContent = currentProgress.join(" ");
        document.getElementById("lettersGuessed").textContent = wrongGuesses.join(" ");
    }

    function checkLetters(letter) {

        var letterInWord = false;

        for (var i = 0; i < blanks; i++) {
            if (chosenWordLetters[i] === letter) {
                letterInWord = true;
            }
        }

        if (letterInWord) {

            for (var a = 0; a < blanks; a++) {
                if (chosenWordLetters[a] === letter) {
                    currentProgress[a] = letter;
                }
            }
        }
        else {
            wrongGuesses.push(letterGuessed);
            guessesLeft --;
        }

        console.log(currentProgress);
        console.log(chosenWordLetters);
    }

    function finish () {

        document.getElementById("guesses-left").innerHTML = "Guesses Remaining: " + guessesLeft;
        document.getElementById("hold").innerHTML = currentProgress.join(" ");
        document.getElementById("lettersGuessed").innerHtml = wrongGuesses.join(" ");

        if (chosenWordLetters.toString() === currentProgress.toString()) {

            wins++;
            
            document.getElementById("wins").innerHTML = "Wins: " + wins;

            start();
        }
        else if (guessesLeft === 0) {

            losses++;

            document.getElementById("losses").innerHTML = "Losses: " + losses;

            start();
        }

    }

start();

document.onkeyup = function(event) {
    letterGuessed = String.fromCharCode(event.which).toLowerCase();
    checkLetters(letterGuessed);
    finish();
}
}

        

        
        
        

    

