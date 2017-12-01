
class VersusCPUController extends GameController{
    constructor(gameModel){
        super(gameModel);
    }

    checkAllActionTaken(_this){      
        _this.gameModel.playerActionTaken();
        _this.waitAndExecute(() => _this.simulateCPUPlay(), 0.5);
    }
    
    checkAllActionTakenSuper(_this){      
        super.checkAllActionTaken(_this)
    }
    simulateCPUPlay(){
        let choice = this.getRandomChoice();
        this.gameModel.player2.choice = choice;
        this.calculateMatchResult();
    }
    getRandomChoice(){
        let choices = [new Rock(), new Paper(), new Scissors()];
        return  choices[Math.floor(Math.random() * choices.length)];
    }   
}


