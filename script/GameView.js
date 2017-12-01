class GameView {
    constructor(gameController, model){  
        this.gameViewSubject = new Subject();
        this.matchIsOver = new Subject();
        this.gameController = gameController;
        this.gameModel = model;

        this.onModelUpdate = new Observer(this.onModelUpdate, this);
        this.onResultsUpdate = new Observer(this.onResultsUpdate, this);

        this.inputList = addEventListener('keydown', evt => this.onPress(evt.key));        
        this.gameViewSubject.subscribe(this.gameController.gameViewListener);
        this.matchIsOver.subscribe(this.gameController.onMatchEnded);
        this.player1Score = document.getElementById("playerOneScore");
        this.player2Score = document.getElementById("playerTwoScore");

        this.player1Status = document.getElementById("playerOneStatusText");
        this.player2Status = document.getElementById("playerTwoStatusText");
        this.matchResult = document.getElementById("matchResult");

        this.player1Image = document.getElementById("playerOneImage");
        this.player2Image = document.getElementById("playerTwoImage");
    }

    onModelUpdate(_this){
        _this.updateDOM();    
    }
    updateDOM(){        
        this.updatePlayer1Score();
        this.updatePlayer2Score();
        if(this.gameModel.isMatchOver)
            return;
        this.updatePlayersStatus();
    }
    
    updatePlayer1Score(){
        let status = `${this.gameModel.player1.title} ${this.gameModel.player1.score} `;
        this.player1Score.innerHTML = status;
    }
    updatePlayer2Score(){
        let status =`${this.gameModel.player2.title} ${this.gameModel.player2.score} `;
        this.player2Score.innerHTML = status;        
    }
    updatePlayersStatus(){
        this.player1Status.innerHTML = `${this.gameModel.player1.getStatusText()} `;       
        this.player2Status.innerHTML = `${this.gameModel.player2.getStatusText()} `;       
    }

    onResultsUpdate(_this){        
        _this.waitAndExecute(() => {_this.showPlayersChoice();}, 1);        
        _this.waitAndExecute(() => {_this.updateMatchResult();}, 1.3);
    }

    updateMatchResult(){
        this.player1Status.innerHTML = `${this.gameModel.player1.getResultText()} `;       
        this.player2Status.innerHTML = `${this.gameModel.player2.getResultText()} `;    
        this.player1Image.style.background =  this.gameModel.getPlayerOneResultColor();     
        this.player2Image.style.background =  this.gameModel.getPlayerTwoResultColor();          
        this.matchIsOver.notifyOberservers(); 
    }
    
    showPlayersChoice(){      
        this.player1Image.src = this.gameModel.getPlayerImageSrc(1);        
        this.player2Image.src = this.gameModel.getPlayerImageSrc(2);        
    }

    onPress(keyName){
        this.playerOneInputHandler(keyName);
        this.playerTwoInputHandler(keyName);
    }
    
    playerOneInputHandler(keyName){
        if(!this.gameModel.player1.canInput())
            return;

        if(keyName === "a"){
            gameModel.player1.choice = new Rock();
            this.gameViewSubject.notifyOberservers();
        }
        if(keyName === "s"){
            gameModel.player1.choice = new Paper();
            this.gameViewSubject.notifyOberservers();
        }
        if(keyName === "d"){
            gameModel.player1.choice = new Scissors();
            this.gameViewSubject.notifyOberservers();            
        }
    }

    playerTwoInputHandler(keyName){
        if(!this.gameModel.player2.canInput())
            return;
        if(keyName === "j"){
            gameModel.player2.choice = new Rock();           
        }
        else if(keyName === "k"){
            gameModel.player2.choice = new Paper();   
        }
        else if(keyName === "l"){
            gameModel.player2.choice = new Scissors();
        }
        this.gameViewSubject.notifyOberservers();  
    }

    waitAndExecute(callback, timeInSeconds){
        setTimeout(callback, timeInSeconds * 1000);
    }

    resetView(){
        this.player1Image.style.background =  this.gameModel.neutralColor;     
        this.player2Image.style.background =  this.gameModel.neutralColor;   
        this.player1Image.src = this.gameModel.neutralImageSrc;        
        this.player2Image.src = this.gameModel.neutralImageSrc;  
    }
}