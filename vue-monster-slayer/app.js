//outer function for random value
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logs: [],
    };
  },
  methods: {
    attackMonster: function () {
      //increment round
      this.currentRound++;
      const reduceLife = getRandomValue(5, 12);
      // new monster life after player attack
      this.monsterHealth = this.monsterHealth - reduceLife;
      // log message
      this.addLogMessage("player", "attack", reduceLife);
      // monster counter attack
      this.attackPlayer();
    },
    attackPlayer: function () {
      const reduceLife = getRandomValue(8, 15);
      //new player life after monster strikes back
      this.playerHealth = this.playerHealth - reduceLife;
      // log message
      this.addLogMessage("monster", "attack", reduceLife);
    },
    specialAttack: function () {
      //increment round
      this.currentRound++;
      const reduceLife = getRandomValue(10, 12);
      this.monsterHealth = this.monsterHealth - reduceLife;
      // log message
      this.addLogMessage("player", "Special Attack", reduceLife);
      //monster counter attack
      this.attackPlayer();
    },
    healPlayer: function () {
      this.currentRound++;
      // get full player life
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth = this.playerHealth + healValue;
      }
      // log message
      this.addLogMessage("player", "Heal", healValue);
      this.attackPlayer();
    },
    //new game function
    newGame: function () {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logs = [];
    },
    //surrender option
    surrender: function () {
      this.winner = "monster";
    },
    //log message function
    addLogMessage: function (who, what, value) {
      this.logs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
  computed: {
    monsterBarStyles() {
      //check monster health bar and setting to 0% width bar when health is 0
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      } else {
        return { width: this.monsterHealth + "%" };
      }
    },
    playerBarStyles() {
      //check player health bar and setting to 0% width bar when health is 0
      if (this.playerHealth < 0) {
        return { width: "0%" };
      } else {
        return { width: this.playerHealth + "%" };
      }
    },
    disableSpecialAttack() {
      //special attack available only every 3 round e after first round
      if (this.currentRound % 3 !== 0 || this.currentRound === 0) {
        return true;
      } else {
        return false;
      }
    },
    disableHeal() {
      //activate heal button every two round
      if (this.currentRound % 2 !== 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    playerHealth(value) {
      //watcher player health, draw case both 0 health
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        //when reaches 0, monster wins
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      //watcher player health, draw case both 0 health
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        //when reaches 0, player wins
        this.winner = "player";
      }
    },
  },
});

app.mount("#game");
