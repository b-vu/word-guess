var words = ["AMERICA", "BULGARIA", "SPAIN", "MEXICO", "CANADA", "VIETNAM", "AUSTRALIA", "VENEZUELA", "TAIWAN", "GERMANY", "THAILAND", "MADAGASCAR", "SINGAPORE"]
var generateButton = document.querySelector("#generateButton");
var inputField = document.querySelector("#input");
var letterGuess = document.querySelector("#letterGuess");
var generatedWord = document.querySelector("#word");

generateButton.addEventListener("click", function(){
    wordAnswer = words[Math.floor(Math.random() * words.length)];
    wordBlank = "";
    lettersGuessed= "";
    counter = 0;
    guessesRemaining = 10;
    document.querySelector("#winDisplay").textContent = "Letters guessed incorrectly:";
    document.querySelector("#guesses").textContent = "Guesses remaining: " + guessesRemaining;

    for(i = 0; i < wordAnswer.length; i++){
        wordBlank += "_ ";
    }

    generatedWord.textContent = wordBlank;
    wordArray = wordAnswer.split("");
    wordBlankArray = wordBlank.split("");
});

inputForm.addEventListener("submit", function(event){
    event.preventDefault();
    userGuess = inputField.value.toUpperCase();

    if(userGuess.length === 1 && guessesRemaining > 0 && counter !== wordAnswer.length){
        for(i = 0; i < wordAnswer.length; i++){
            if(userGuess === wordArray[i]){
                wordBlankArray[(i * 2)] = userGuess;
                wordBlank = "";
                for(j = 0; j < wordBlankArray.length; j++){
                    wordBlank += wordBlankArray[j];
                }
                generatedWord.textContent = wordBlank;
                counter++;
            }
            else if(lettersGuessed.indexOf(userGuess) === -1 && wordAnswer.indexOf(userGuess) === -1){
                lettersGuessed += userGuess + " ";
                letterGuess.textContent = lettersGuessed;
                guessesRemaining--;
                document.querySelector("#guesses").textContent = "Guesses remaining: " + guessesRemaining;
            }
        }
    }
    else if(counter === wordAnswer.length || guessesRemaining === 0){
        alert("Press 'Generate Word' to play again.");
    }
    else{
        alert("Please guess 1 letter only.");
    }

    checkForWin();
});

function checkForWin(){
    if(counter === wordAnswer.length){
        letterGuess.textContent = "";
        var playAgain = document.createElement("p");
        playAgain.textContent = "Press 'Generate Word' to play again.";
        document.querySelector("#winDisplay").textContent = "YOU WIN!";
        document.querySelector("#winDisplay").appendChild(playAgain);
        return;
    }
    else if(guessesRemaining === 0){
        letterGuess.textContent = "";
        var playAgain = document.createElement("p");
        playAgain.textContent = "Press 'Generate Word' to play again.";
        document.querySelector("#winDisplay").textContent = "YOU LOSE!";
        document.querySelector("#winDisplay").appendChild(playAgain);
        return;
    }
}