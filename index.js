
function startGame (){
    $("img").attr("src", "imgs/img1.png");
    var line = [];
    var slova = [];
    var num = 1;
    var randomWord = ["banana", "sony", "kutija", "sladoled", "bozic", "prozor","jabuka", "naranca"];
    $(".header2").text("Press the button to start or restart game, enter letter by keyboard");

    var randNum = Math.floor(Math.random() * randomWord.length);
    var word = randomWord[randNum];

    var guessedWord = "_".repeat(word.length);

    for (let i = 0; i < word.length; i++) {
        line.push("_ ");
    }
    var lineAll = line.join("");
    $(".gameText").text(lineAll);

    $(document).keypress(function(e) {
        var x = e.key.toLowerCase();  

        slova.push(x);
        $(".header2").text(slova+",");

        if (guessedWord === word) {
            $(".header2").text("You Win!");
        } else if (word.includes(x)) {
            for (var i = 0; i < word.length; i++) {
                if (word[i] === x) {
                    guessedWord = guessedWord.substr(0, i) + x + guessedWord.substr(i + 1);
                }
            }
            $(".gameText").text(guessedWord);

            if (guessedWord === word) {
                $(".header2").text("You Win!");
            }
        } else {
            $("img").attr("src", "imgs/img" + num + ".png");
            num++;
            if (num === 10) {
                
                $(".header2").text("You Lose! The correct word was: " + word);
                
            }
        }
    });

}