function dropdownTogglePiece() {
    document.getElementById("pieceSet").classList.toggle("showPiece");
}

function dropdownToggleBoard() {
    document.getElementById("boardSet").classList.toggle("showBoard");
}

function board1(){
    document.getElementById("lightsquare").style.backgroundColor = "white";
    document.getElementById("darksquare").style.backgroundColor = "black";
}

function board2(){
    document.getElementById("lightsquare").style.backgroundColor = "tan";
    document.getElementById("darksquare").style.backgroundColor = "brown";
}