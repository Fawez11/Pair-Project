
var chose = document.querySelectorAll(".choice");
// we use the queryselector to grp them
    var heroScore = 0;
    // we create a varible to hold the player score its incremented by one each time the player win a round
    var computerScore = 0;
 // we create a varible to hold the computer score its incremented by one each time the computer win a round
    chose.forEach((option) => {
      option.addEventListener("click", function () {
        var heroInput = this.value;
        //we create a varibale named by heroInput to store the value of the player choice

        var computerChoice = ["Rock", "Paper", "Scissors"];
        //we create a varible to store the computer choices
        var  computerInput = computerChoice [Math.floor(Math.random() * 3)];
        // we create a varible named by computerTnput to hold the computer choices
        attackEnemie(heroInput, computerInput);
        //we create a function outside 
        compareChoices(heroInput,computerInput);
        //we create a function outside of the addEventListener then we called inside it
        ponits();
        // we call the function points that allow as to update our score
        if(checkWinner()){
            heroScore =computerScore= 0;
            ponits();
        }
        // we call the function checkwinner that check for as how is the first  round winner then we call the function that 
        //alow as the reefrech the score to start a new game
      });
    });

    function  attackEnemie(heroInput,computerInput){
        //we create a function that  take the player and the computer choisces andalow as to change the move for each choice
      document.getElementById("heroAttack").src = `./assets/${heroInput}.svg`;
      document.getElementById("computerAttack").src = `./assets/${computerInput}.svg`;
    }

// create a function to compaire betwen the choices
    function  compareChoices(heroInput,computerInput) {
        // our function take the player and the computer choises 
       var currentMatch = `${heroInput} vs ${computerInput}`;

      if (heroInput ===computerInput) {
          // we use an if condition that make the score tie
        alert(`${currentMatch} is a Tie`);
        return;
      }
  // we chek for the rokck choice 
      if (heroInput === "Rock") {
          // we make a condition that the player choice is rok
        if (computerInput === "Scissors") {
            // we make a condition that the computer choice is scissors
          alert(`${currentMatch} = You Win`);
          heroScore++;
          // we add point to the player
        } else {
          alert(`${currentMatch} = Computer Wins`);
          computerScore++;
          
        }
      }
      //we Check for Paper choice
      else if (heroInput === "Paper") {
        if (computerInput === "Rock") {
          alert(`${currentMatch} = You Win`);
          heroScore++;
        } else {
          alert(`${currentMatch} = Computer Wins`);
          computerScore++;
        }
      }
      //Check for Scissors
      else {
        if (computerInput === "Paper") {
          alert(`${currentMatch} = You Win`);
          heroScore++;
        } else {
          alert(`${currentMatch} = Computer Wins`);
          computerScore++
        }
      }
    }

    function ponits() {
       // we create a function that allow as to update the score
      document.getElementById("hscore").textContent =  heroScore
      document.getElementById("escore").textContent = computerScore
    }

    function checkWinner() {
        //we create a function to check if one of the players reach rounds win 
      if ( heroScore === 5 ||computerScore === 5) {
        var winner =
        heroScore === 5
            ? "You win the game! Congratulations!"
            : "Computer wins the game! Try again next time!";
        alert(winner);
        return true;
      }
      return false;
    }
