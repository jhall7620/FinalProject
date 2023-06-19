function dropdownTogglePiece() {
    document.getElementById("pieceSet").classList.toggle("showPiece");
}

function dropdownToggleBoard() {
    document.getElementById("boardSet").classList.toggle("showBoard");
}

function board1(){
    let lightsquare = document.getElementsByClassName("lightsquare2")
    let darksquare = document.getElementsByClassName("darksquare2")
    lightsquare.classList.remove("lightsquare2")
    lightsquare.classList.add("lightsquare1")
    darksquare.classList.remove("darksquare2")
    darksquare.classList.add("darksquare1")
    
}

function board2(){
    let lightsquare = document.getElementsByClassName("lightsquare1")
    let darksquare = document.getElementsByClassName("darksquare1")
    lightsquare.classList.remove("lightsquare1")
    lightsquare.classList.add("lightsquare2")
    darksquare.classList.remove("darksquare1")
    darksquare.classList.add("darksquare2")
}