class CPUPlayer extends Player{
    constructor(playerNumber){  
        super();
        this.title = `CPU ${playerNumber}:`;    
    }

    canInput(){
        return false;
    }

    resetValues(){
      super.resetValues();
    }
}