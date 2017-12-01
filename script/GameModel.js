class GameModel{
    constructor(){
        this.player1 = null;
        this.player2 = null;
        this.matchResult = "";
        this.gameView = null;
        this.modelHasChanged = new Subject(); 
        this.matchResultsUpdate = new Subject();       
        this.choicesImagesPaths = [
            [RPS.Rock, "images/rock.png"],
            [RPS.Paper, "images/paper.png"],         
            [RPS.Scissors, "images/scissors.png"]         
        ]
        this.neutralImageSrc = "images/none.png";

        this.winnerColor = "#81C781";
        this.loserColor = "#EA5637";
        this.neutralColor = "#EAD8E4";        
        this.isMatchOver = false;
    }
    setViewObserver(gameView){
        this.modelHasChanged.subscribe(gameView.onModelUpdate); 
        this.matchResultsUpdate.subscribe(gameView.onResultsUpdate);
    }

    getChoiceImagePath(rps){
        let ret = this.choicesImagesPaths.filter(elem => {
            return elem[0] === rps;
        });
        return ret[0][1];
    }

    areAllActionTaken(){
        return this.player1.choice != null && this.player2.choice != null;
    }

    concludeMatch(){
        this.matchResultsUpdate.notifyOberservers();
        this.modelHasChanged.notifyOberservers();
        this.isMatchOver = true;
    }

    playerActionTaken(){
        this.modelHasChanged.notifyOberservers();        
    }

    getPlayerImageSrc(playerNumber){
        let players = [player1, player2];
        let player = players[playerNumber-1];
        return this.getChoiceImagePath(player.choice.type);
    }
    
    resetMatchValues(){
        player1.resetValues();
        player2.resetValues();
        gameView.resetView();
        this.isMatchOver = false;
        this.modelHasChanged.notifyOberservers();  
    } 

    getPlayerOneResultColor(){
        return this.getResultColor(this.player1.choice.result);
    }
    getPlayerTwoResultColor(){
        return this.getResultColor(this.player2.choice.result);
    }

    addScoreToWinner(){
        let players = [this.player1, this.player2];
        let winnerPlayer = players.filter( player => { return player.isPlayerWinner() === true;});

        if(winnerPlayer.length < 1)
            return;

        winnerPlayer[0].addScore();
        this.modelHasChanged.notifyOberservers();        
    }

    getResultColor(result){
        switch(result){
            case 0:
                return this.neutralColor;
                break;                
            case 1:
                return this.loserColor;
                break;
            case 2:
                return this.winnerColor;
                break;
            default:    
                return this.neutralColor;
                break;                
        }
    
    }

}

const resultType = {
    Draw : 0, 
    Lose : 1,
    Win : 2
}

const RPS = {
    Rock        : 0,
    Paper       : 1,    
    Scissors    : 2 
}



