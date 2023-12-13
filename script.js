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

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT= {
    "A":2,
    "B":4,
    "C":6,
    "D":8
}

const SYMBOLS_VALUES = {
    "A":5,
    "B":4,
    "C":3,
    "D":2
}

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

const getNumOfLines= () => {
    
    while(true){
        const lines= prompt("Enter the number of lines you want to bet: (1-3) ")
        const numOfLines= parseFloat(lines)

        if(isNaN(numOfLines) || numOfLines <=0 || numOfLines > 3){
            console.log("invalid amount, try again");
        }
        else{
            return numOfLines;
        }
    }
}

const getBet = (balance,lines) =>{
    while(true){
        const bet= prompt("Enter the bet per line: ")
        const numberBet= parseFloat(bet)

        if(isNaN(numberBet) || numberBet <=0 || numberBet > balance/lines ){
        console.log("invalid bet, try again");
        }
        else{
            return numberBet;
        }
    }
}

const spin = () => {
    const symbols =[]
    for(const[symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for(let i=0; i< count; i++){
            symbols.push(symbol);
        }
    }
    const reels = [[],[],[]]

    for (let i = 0; i < COLS; i++) {
        
        for (let j = 0; j < ROWS; j++) {

        }
        
    }
}

spin()
let balance=deposit();
const numberOfLines = getNumOfLines();
const bet =getBet(balance,numberOfLines);


