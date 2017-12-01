
class GameController{
    constructor(gameModel){
        this.resultSubject = new Subject();
        let _this = this;        
        this.gameModel = gameModel;

        this.gameViewListener = new Observer(this.checkAllActionTaken, this );
        this.onMatchEnded = new Observer(this.matchEndActions, this );

        this.instance = this;
    }

    startGame(){}


    checkAllActionTaken(_this){      
        _this.gameModel.playerActionTaken();

        if(!_this.gameModel.areAllActionTaken())
            return;

        _this.calculateMatchResult();
    }
    
    calculateMatchResult (){
        this.gameModel.player1.choice.getResultAgainst(this.gameModel.player2.choice);
        this.gameModel.player2.choice.getResultAgainst(this.gameModel.player1.choice),      
        this.gameModel.concludeMatch();
    }

    matchEndActions(_this){
        _this.gameModel.addScoreToWinner();
        _this.waitAndExecute(() =>{ _this.resetAndRestart();}, 1.5);
    }

    resetAndRestart(){
        this.gameModel.resetMatchValues();
    }

    waitAndExecute(callback, timeInSeconds){
        setTimeout(callback, timeInSeconds * 1000);
    }
}


