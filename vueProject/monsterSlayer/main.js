new Vue ({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameRunning: false,
        turns: []
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
                this.gameRunning = true,
                this.turns = []
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor((Math.random() * 10 + 1)), min);
        },
        attack: function () {
                let playerDamage = this.calculateDamage(3, 10);
                this.monsterHealth -= playerDamage;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'player hit monster for ' + playerDamage
                });
                
                //if you don't return right away then the code keeps running and monster 
                //gets an extra shot before the next game starts
                if (this.checkWin()) {
                    return;
                }

                this.monsterAttack();
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
            let playerDamage = this.calculateDamage(10, 15);
            this.monsterHealth -= playerDamage;
            this.turns.unshift({
                isPlayer: true,
                text: 'player hit monster hard for ' + playerDamage
            });
            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },

        heal() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'player heal for 10'
            });

            this.monsterAttack();
        }, 

        giveUp() {
            if(confirm('Give up?')) {
                if(confirm('Another game?')){
                    this.startNewGame();
                } else {
                    return this.gameRunning = false;
                }
            }
        },

        monsterAttack() {
            let monsterDamage =  this.calculateDamage(5, 12);
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hit player for ' + monsterDamage 
            });
            this.playerHealth -= monsterDamage;
            this.checkWin();
        },
        displayLog() {

        }
    }
})