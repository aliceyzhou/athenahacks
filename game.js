var image = new Image();

image.src = '';

document.getElementById("by3Button").addEventListener("click", by3);
document.getElementById("by4Button").addEventListener("click", by4);
document.getElementById("by5Button").addEventListener("click", by5);

function by3(){
    alert("3!!");
    var cols = 3;
    var rows = 3;

    generateGameBoard(rows,cols);
}

function by4(){
    alert("4!!");
    var cols = 4;
    var rows = 4;

    generateGameBoard(rows,cols);
}

function by5(){
    alert("5!!");
    var cols = 5;
    var rows = 5;

    generateGameBoard(rows,cols);
}

function generateGameBoard(rows, cols){
    tiles = [];

    for (var i = 0; i < (rows*cols); i++){
        tiles.push(i);
    }
    // shuffle tiles function to go here
}

function drawGameBoard() {
    for(var i = 0; i < rows; i++) {
        for(var i = 0; i < cols; i++) {

        }
    }
}

function drawPhotoTile() {
    
}
