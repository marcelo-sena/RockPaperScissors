class Player{
    constructor(playerNumber){
        this.resultTexts = ['DRAW!', 'LOSER', 'WINNER'];
        this.score = 0;
        this.title = "";
        this.choice = null;
        this.winner = false;
    }
    canInput(){
        return true;
    }
    getResultText(){
        return  this.resultTexts[this.choice.result]; 
    }
    getStatusText(){
        let statusText = this.choice !== null ? "READY" : ''; 
        return statusText;
    }
    getPlayerResult(){
        return this.choice.result;
    }
    isPlayerWinner(){
        return this.choice.result == 2;
    }
    addScore(){
        this.score ++;
    }

    resetValues(){
        this.winner = false;
        this.choice = null;
    }
}