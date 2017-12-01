document.addEventListener("DOMContentLoaded",StartHumanVsHuman);


let gameModel;
let gameController;
let gameView;

let player1;
let player2;    

function StartHumanVsHuman(){
    gameModel = new GameModel();
    gameController = new GameController(gameModel);
    gameView = new GameView(gameController, gameModel);
    
    gameModel.setViewObserver(gameView);

    player1 = new HumanPlayer(1);
    player2 = new HumanPlayer(2);    
    
    gameModel.player1 = player1;
    gameModel.player2 = player2;

    gameView.updateDOM();  
}



