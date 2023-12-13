/*
1- Deposit money ok
2- how many lines
3- Collect Bet
4- spinn
5- chek if player won
6- give mone
7- play again
*/
const prompt = require("prompt-sync")();

function deposit(){
    
    while(true){
        const depositAmount= prompt("Enter deposit amount: ")
        let numberDepositAmount= parseFloat(depositAmount)

        if(isNaN(numberDepositAmount) || numberDepositAmount <=0){
            console.log("invalid deposit amount, try again");
            
        }
        else{
            return numberDepositAmount;
        }
    }
    
}

const depAmount=deposit();
console.log(depAmount)
