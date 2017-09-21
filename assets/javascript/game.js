
  //This all the options A through Z
  var compAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  console.log(compAlpha);
  //This holds the number of wins, losses, and guesses left. They start at 0
  var wins = 0;
  var losses = 0;
  var guessesLeft = 10
  var guessArr=[]
  var compGuess
  console.log({compGuess});
  console.log(wins);

  function resetgame() 
  {
    guessesLeft = 10;
    compGuess = compAlpha[Math.floor(Math.random() * compAlpha.length)];
    console.log({compGuess});
  }

  document.onkeyup = function(event) {
    // Determine which key was pressed
    var inputGuess= event.key;
   
    console.log(inputGuess);
    //This logic determines the outcome of the game and increments wins, losses, and guesses
    //Wrap an if statement that only executes this code if the letter hasn't been entered.
    if((inputGuess===compGuess)) {
      wins++;
      alert("You Win");
      resetgame();
      // compGuess = compAlpha[Math.floor(Math.random() * compAlpha.length)];
      // guessesLeft = 10
    }else if((inputGuess!==compGuess)) {
      guessesLeft--;
      guessArr.push(inputGuess);
    }
    if(guessesLeft===0) {
      alert("You Lost")
      losses++;
      resetgame ();
      // guessesLeft= 10;
      // compGuess = compAlpha[Math.floor(Math.random() * compAlpha.length)];
    }

    var html =
              "<p>You chose: " + inputGuess + "</p>" +
              "<p>wins: " + wins + "</p>" +
              "<p>losses: " + losses + "</p>" +
              "<p>Guesses Left: " + guessesLeft + "</p>"+
              "<p>Letters Guessed So Far: " + guessArr + "</p>";

            // Set the inner HTML contents of the #game div to our html string
            document.querySelector("#psych").innerHTML = html
  };
  