var words = ["AMERICA", "BULGARIA", "SPAIN", "MEXICO", "CANADA", "VIETNAM", "AUSTRALIA", "VENEZUELA", "TAIWAN", "GERMANY", "THAILAND", "MADAGASCAR", "SINGAPORE"]
var generateButton = document.querySelector("#generateButton");
var inputField = document.querySelector("#input");
var letterGuess = document.querySelector("#letterGuess");
var generatedWord = document.querySelector("#word");

var lettersGuessed = "";

generateButton.addEventListener("click", function(){
    wordAnswer = words[Math.floor(Math.random() * words.length)];
    wordBlank = "";
    counter = 0;
    for(i = 0; i < wordAnswer.length; i++){
        wordBlank += "_ ";
    }
    generatedWord.textContent = wordBlank;
    wordArray = wordAnswer.split("");
    wordBlankArray = wordBlank.split("");
    console.log(wordAnswer)
    console.log(wordArray)
    console.log(wordBlankArray)
});

inputForm.addEventListener("submit", function(event){
    event.preventDefault();
    userGuess = inputField.value.toUpperCase();

    for(i = 0; i < wordAnswer.length; i++){
        if(userGuess === wordArray[i]){
            wordBlankArray[(i * 2)] = userGuess;
            wordBlank = "";
            for(j = 0; j < wordBlankArray.length; j++){
                wordBlank += wordBlankArray[j];
            }
            generatedWord.textContent = wordBlank;
            counter++;
            console.log(wordBlank, wordBlank.length)
            console.log(counter)
        }
        else if(lettersGuessed.indexOf(userGuess) === -1){
            lettersGuessed += userGuess;
            letterGuess.textContent = lettersGuessed;
            console.log("here")
        }
    }

    checkForWin();
});

function checkForWin(){
    if(counter === wordAnswer.length){
        letterGuess.textContent = "";
        document.querySelector("#winDisplay").textContent = "YOU WON!";
        return;
    }
}