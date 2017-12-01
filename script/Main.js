document.addEventListener("DOMContentLoaded",StartHumanVsCPU);

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
    gameController.startGame();
    gameView.updateDOM();  
}

function StartHumanVsCPU(){
    gameModel = new GameModel();
    gameController = new VersusCPUController(gameModel);
    gameView = new GameView(gameController, gameModel);
    
    gameModel.setViewObserver(gameView);

    player1 = new HumanPlayer(1);
    player2 = new CPUPlayer(2);    
    
    gameModel.player1 = player1;
    gameModel.player2 = player2;
    
    gameController.startGame();
    gameView.updateDOM();  
}

function StartCPUVsCPU(){
    gameModel = new GameModel();
    gameController = new CPUOnlyController(gameModel);
    gameView = new GameView(gameController, gameModel);
    
    gameModel.setViewObserver(gameView);

    player1 = new CPUPlayer(1);
    player2 = new CPUPlayer(2);    
    
    gameModel.player1 = player1;
    gameModel.player2 = player2;
    
    gameController.startGame();
    gameView.updateDOM();  
}
