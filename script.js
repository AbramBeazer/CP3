var app = new Vue({
  el: '#app',
  data: {
    hand: '',
    enemyHand: '',
    message: '',
    totalRounds: 0;
    wins: 0;
    losses: 0;
    draws: 0;
  },
  created: function() {
//
  },
  methods: {
    attack: function(){
      getEnemyHand();
      compareHands();
    }
    chooseRock: function(){
      this.hand = "ROCK";
    }
    choosePaper: function(){
      this.hand = "PAPER";
    }
    chooseScissors: function(){
      this.hand = "SCISSORS";
    }
    getEnemyHand(){
      var choice = Math.floor(Math.random() * 3);
      if(choice === 0)
      {
        enemyHand = "ROCK";
      }
      else if(choice === 1)
      {
        enemyhand = "PAPER";
      }
      else
      {
        enemyhand = "SCISSORS";
      }
    }
    compareHands(){
      totalRounds++;
      if(this.hand === "ROCK")
      {
        if(this.enemyHand === "ROCK")
        {
          this.message = "It's a tie!"
          this.draws++;
        }
        else if(this.enemyHand === "PAPER")
        {
          this.message = "You lost!";
          this.losses++;
        }
        else if(this.enemyHand === "SCISSORS")
        {
          this.message = "You won!"
          this.wins++;
        }
      }
      else if(this.hand === "PAPER")
      {
        if(this.enemyHand === "ROCK")
        {
          this.message = "You won!"
          this.wins++;
        }
        else if(this.enemyHand === "PAPER")
        {
          this.message = "It's a tie!"
          this.draws++;
        }
        else if(this.enemyHand === "SCISSORS")
        {
          this.message = "You lost!";
          this.losses++;
        }
      }
      else if(this.hand === "SCISSORS")
      {
        if(this.enemyHand === "ROCK")
        {
          this.message = "You lost!";
          this.losses++;
        }
        else if(this.enemyHand === "PAPER")
        {
          this.message = "You won!"
          this.wins++;
        }
        else if(this.enemyHand === "SCISSORS")
        {
          this.message = "It's a tie!"
          this.draws++;
        }
      }
    }
  }
});
