
class CPUOnlyController extends VersusCPUController{
    constructor(gameModel){
        super(gameModel);
    }

    startGame(){
        let randomTime = Math.random() * 1;
        this.waitAndExecute(() => this.simulateCPUPlay(this.gameModel.player1), randomTime);
        randomTime = Math.random() * 2;
        this.waitAndExecute(() => this.simulateCPUPlay(this.gameModel.player2), randomTime);
    }

    checkAllActionTaken(){             
        super.checkAllActionTakenSuper(this);
    }
    
    simulateCPUPlay(player){
        let choice = this.getRandomChoice();
        player.choice = choice;
        this.checkAllActionTaken();
    }

    getRandomChoice(){
        let choices = [new Rock(), new Paper(), new Scissors()];
        return  choices[Math.floor(Math.random() * choices.length)];
    }
    
    resetAndRestart(){
        super.resetAndRestart();
        this.startGame();
    }
}


