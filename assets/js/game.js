//Game States
//"WIN" - Player robot has defeated all enemy robots
//          *Fight all enemy robots
//          *Defeat each enemy robot
//"LOSE" - Player robot's health is 0 or less

//Player starting stats
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney= 10;

//Enemy starting stats
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var confirmSkip = true; 

var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {

    //ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

    //if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight! Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
         break;
        }
    }


        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        
    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

        //award player money for winning
        playerMoney = playerMoney + 20;

        //leave while() loop since enemy is dead
        break;
    } 
    else {
        window.alert(enemyName + " stil has " + enemyHealth + " health left.");
    }

    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
        playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        //leave while loop if player is dead
        break;
    } 
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}
};



for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
   fight(pickedEnemyName);
}

//fight();