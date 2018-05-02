new Vue ({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameRunning: false,
    },
    methods: {
        newGame: function () {
            this.gameRunning = true,
            this.monsterHealth = 100,
            this.playerHealth = 100
        },
        startNewGame() {
                this.playerHealth = 100,
                this.monsterHealth = 100,
                this.gameRunning = true
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor((Math.random() * 10 + 1)), min);
        },
        attack: function () {
                this.monsterHealth -= this.calculateDamage(3, 10);
                //if you don't return right away then the code keeps running and monster 
                //gets an extra shot before the next game starts
                if (this.checkWin()) {
                    return;
                }

                this.playerHealth -= this.calculateDamage(5, 12);
                this.checkWin();
            },
        checkWin() {
            if(this.monsterHealth < 0) {
                if(confirm('you win!, another game?')) {
                    this.startNewGame();
                } else {
                    this.gameRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0){
                if(confirm('you lost, another game?')) {
                    this.startNewGame();
                } else {
                    this.gameRunning = false;
                }
                return true;
            }
        },
        specialAttack: function () {

        },
        heal() {

        },
        giveUp() {

        }
    }
})

