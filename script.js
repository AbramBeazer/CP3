var app = new Vue({
  el: '#app',
  data: {
    hand: "Nothing",
    enemyHand: "Nothing",
    message: "Are you ready to rock? Or paper? Or scissors?",
    totalRounds: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    winP: 0,
    lossP: 0,
    drawP: 0,
    playerIMG: "question.png",
    enemyIMG: "question.png",
  },
  created: function() {
//
  },
  methods: {
    chooseRock: function(){
      this.hand = "ROCK";
    },
    choosePaper: function(){
      this.hand = "PAPER";
    },
    chooseScissors: function(){
      this.hand = "SCISSORS";
    },
    compareHands: function(){
      var choice = Math.floor(Math.random() * 100);
      console.log(choice);
      if(choice % 3 === 0)
      {
        this.enemyHand = "ROCK";
      }
      else if(choice % 3 === 1)
      {
        this.enemyHand = "PAPER";
      }
      else
      {
        this.enemyHand = "SCISSORS";
      }
      this.totalRounds++;
      if(this.hand === "ROCK")
      {
        this.playerIMG = "rock.jpeg";
        if(this.enemyHand === "ROCK")
        {
          this.enemyIMG = "rock.jpeg";
          this.message = "It's a tie! Wanna go again?";
          this.draws++;
        }
        else if(this.enemyHand === "PAPER")
        {
          this.enemyIMG = "paper.jpeg";
          this.message = "You lost! Wanna go again?";
          this.losses++;
        }
        else if(this.enemyHand === "SCISSORS")
        {
          this.enemyIMG = "scissors.jpeg";
          this.message = "You won! Wanna go again?";
          this.wins++;
        }
      }
      else if(this.hand === "PAPER")
      {
        this.playerIMG = "paper.jpeg";
        if(this.enemyHand === "ROCK")
        {
          this.enemyIMG = "rock.jpeg"
          this.message = "You won! Wanna go again?";
          this.wins++;
        }
        else if(this.enemyHand === "PAPER")
        {
          this.enemyIMG = "paper.jpeg";
          this.message = "It's a tie! Wanna go again?";
          this.draws++;
        }
        else if(this.enemyHand === "SCISSORS")
        {
          this.enemyIMG = "scissors.jpeg";
          this.message = "You lost! Wanna go again?";
          this.losses++;
        }
      }
      else if(this.hand === "SCISSORS")
      {
        this.playerIMG = "scissors.jpeg";
        if(this.enemyHand === "ROCK")
        {
          this.enemyIMG = "rock.jpeg"
          this.message = "You lost! Wanna go again?";
          this.losses++;
        }
        else if(this.enemyHand === "PAPER")
        {
          this.enemyIMG = "paper.jpeg";
          this.message = "You won! Wanna go again?";
          this.wins++;
        }
        else if(this.enemyHand === "SCISSORS")
        {
          this.enemyIMG = "scissors.jpeg";
          this.message = "It's a tie! Wanna go again?";
          this.draws++;
        }
      }
      this.hand = "Nothing";
      this.winP = Math.round((this.wins / this.totalRounds) * 100);
      this.lossP = Math.round((this.losses / this.totalRounds) * 100);
      this.drawP = Math.round((this.draws / this.totalRounds) * 100);
    },
    attack: function(){
        if(this.hand === "Nothing")
        {
          this.message = "You need to pick an option first.";
        }
        else
        {
          this.compareHands();
        }
    },
  }
});
