class Scissors extends RPSBase{
    constructor(){
        super();
        this.type = RPS.Scissors;
        this.loseArray   = [RPS.Rock];
        this.winArray    = [RPS.Paper];
        this.drawArray   = [this.type];
    }
}