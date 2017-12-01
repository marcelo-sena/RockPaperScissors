class Paper extends RPSBase{    
        constructor(){
            super();
            this.type = RPS.Paper;
            this.loseArray   = [RPS.Scissors];
            this.winArray    = [RPS.Rock];
            this.drawArray   = [this.type];
        }
    }