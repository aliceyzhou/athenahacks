
//var imgHeight = image.naturalHeight;
//var imgWidth = image.naturalWidth;
document.getElementById("by3Button").addEventListener("click", by3);
document.getElementById("by4Button").addEventListener("click", by4);
document.getElementById("by5Button").addEventListener("click", by5);
document.getElementById("takescreenshot").addEventListener("click", report);

var cols;
var rows;

function by3(){
    var imgWidth = img.width;
    var imgHeight = img.height;

    alert("sizes" + imgWidth + " " + imgHeight);

    cols = 3;
    rows = 3;

    generateGameBoard(rows,cols);

    console.log("3");
}


function by4(){
    var imgWidth = img.width;
    var imgHeight = img.height;

    alert("4!!");
    cols = 4;
    rows = 4;

    generateGameBoard(rows,cols);
}

function by5(){
    var imgWidth = img.width;
    var imgHeight = img.height;

    cols = 5;
    rows = 5;
    generateGameBoard(rows,cols);

    drawGameBoard();

   // generateGameBoard(rows,cols);
}

function shuffle() {
    for(var rows = 1; rows <= 3; rows++) {
        for(var cols = 1; cols <= 3; cols++) {
            var rows2 = Math.floor(Math.random() * 3 + 1);
            var cols2 = Math.floor(Math.random() * 3 + 1);
            
            swapTiles("cell" + rows + cols, "cell" + rows2 + cols2);
    }
}
}

function generateGameBoard(rows, cols){
    tiles = [];

    for (var i = 0; i < (rows*cols); i++){
        tiles.push(i);
    }
    //shuffle() // ????
}

function drawGameBoard() {
    for(var i = 0; i < 25; i++) {
        console.log(i);
    }
}

function drawPhotoTile() {

}

//screenshot stuff
// var img = null;
// function report() {
//     let region = document.querySelector("body"); // whole screen
//     html2canvas(region, {
//       onrendered: function(canvas) {
//         let pngUrl = canvas.toDataURL(); // png in dataURL format
//         img = document.querySelector(".screen");
//         img.src = pngUrl; 
//         },
//     });
// }

