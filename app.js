const gameBoard = document.querySelector('#gameBoard')
const player = document.querySelector('#player')
const infoDisplay = document.querySelector("#info-display")

function createBoard(){
    for(row = 0; row < 8; row++){
        for(column = 0; column < 8; column++){
            let square = document.createElement('div');
            if((row+column)%2 == 0){
                square.classList.add('lightsquare1');
            } else{
                square.classList.add('darksquare1');
            }
            gameBoard.append(square);
        }
    }
}

createBoard();


