class HumanPlayer extends Player{
    constructor(playerNumber){  
        super();
        this.title = `PLAYER ${playerNumber}:`;    
    }

    canInput(){
        return this.choice === null;
    }

    resetValues(){
      super.resetValues();
    }
}