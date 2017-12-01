class RPSBase {
    constructor(){
        this.type = null;
        this.drawArray = null;
        this.winArray = null;
        this.loseArray = null;
        this.result = null;
    }

    getResultAgainst(enemyChoice){
        this.result = resultType.Draw;      
        this.getWinFromType(this, enemyChoice);
        this.getLoseFromType(this, enemyChoice);
        return this.result;
    }

    getWinFromType(playerChoice,enemyChoice){      
        this.result = playerChoice.winArray.reduce(function(previous, item){
            previous = item == enemyChoice.type ? resultType.Win : previous; 
            return previous;
        }, this.result);  
    }
    getLoseFromType(playerChoice,enemyChoice){        
        this.result = playerChoice.loseArray.reduce(function(previous, item){
            previous = item == enemyChoice.type ? resultType.Lose : previous; 
            return previous;
        }, this.result); 
    }
}