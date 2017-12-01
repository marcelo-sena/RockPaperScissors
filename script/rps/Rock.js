class Rock extends RPSBase{
    constructor(){
        super();
        this.type = RPS.Rock;
        this.loseArray   = [RPS.Paper];
        this.winArray    = [RPS.Scissors];
        this.drawArray   = [this.type];
    }
}