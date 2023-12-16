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
        for(let i=0; i < count; i++){
            symbols.push(symbol);
        }
    }
    const reels = []

    for (let i = 0; i < COLS; i++) {
        reels.push([])
        const reelSymbols = [...symbols]; /// "..." copies the symbols into the reelSymbols array
        for (let j = 0; j < ROWS; j++) {
            let randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol= reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex,1);;;

        }
        
    }
    return reels;
}

const transposeMatrix = (reels) =>{
    const rows= [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for(let j=0; j < COLS; j++ ){
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
}

const printRows = (rows) =>{
    for (const row of rows){
        let rowStr=""
        for (const[i,symbol] of row.entries()){
            rowStr +=symbol
            if(i != row.length-1){
                rowStr+= " | "
            }
        }
        console.log(rowStr)
    }
}

function getWinnings(rows,bet,lines){
    let winnings=0;
    for (let row =0; row<lines; row++){
        const symbols=rows[row];
        let allSymbolsAreSame=true;
        
        for(const symbol of symbols){
            if(symbol!= symbols[0]){
                allSymbolsAreSame=false
                break
            }
        }
        if(allSymbolsAreSame){
            winnings += bet * SYMBOLS_VALUES[symbols[0]]
        }
    }
    return winnings;
}


//console.log(reels);


function game(){
    let balance=deposit();

    while(true){
        console.log(`You have a balance of \$${balance}`)
        const numberOfLines = getNumOfLines();
        const bet =getBet(balance,numberOfLines);
        balance-= bet*numberOfLines;

        const reels= spin()
        const rows= transposeMatrix(reels)
        printRows(rows);
        const winnings=getWinnings(rows,bet,numberOfLines)
        balance+= winnings;
        console.log("You won, $"+winnings.toString())

        if(balance<=0){
            console.log("You ran out of money!")
            break;
        }
        console.log(`You have a balance of \$${balance}`)
        const playAgain= prompt("Do you want to play again (y/n)? ");
        
        if(playAgain != "y"){
            break;
        } 


    }
}

game();