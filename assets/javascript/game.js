var words = ["AMERICA", "BULGARIA", "SPAIN", "MEXICO", "CANADA", "VIETNAM", "AUSTRALIA", "VENEZUELA", "TAIWAN", "GERMANY", "THAILAND", "MADAGASCAR", "SINGAPORE"]

function generateWord(){
    var wordBlank = "";
    var getWord = words[Math.floor(Math.random() * words.length)]

    for(i = 0; i < getWord.length; i++){
        wordBlank += "_"
        document.getElementById("word").innerHTML = wordBlank;
    }

    console.log(getWord);

    document.onkeypress = function(event){
        var keyPress = String.fromCharCode(event.keyCode);
        var keyPressU = keyPress.toUpperCase();
        document.getElementById("letterGuess").innerHTML = keyPressU;
        
        for(i = 0; i < wordBlank.length; i++){
            
            if(keyPressU === getWord.charAt(i)){

                var replacedWord = wordBlank.replace(wordBlank.charAt(i), keyPressU);
                document.getElementById("word").innerHTML = replacedWord;
            }
        }
    }
}
