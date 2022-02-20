
//var imgHeight = image.naturalHeight;
//var imgWidth = image.naturalWidth;
document.getElementById("by3Button").addEventListener("click", by3);
document.getElementById("by4Button").addEventListener("click", by4);
document.getElementById("by5Button").addEventListener("click", by5);
document.getElementById("takescreenshot").addEventListener("click", report);


function by3(){
    const imgSrc = "images/testRainbow.jpg";
    const img = new Image();

    img.src = imgSrc;
    var imgWidth = img.width;
    var imgHeight = img.height;

    alert("sizes" + imgWidth + "" + imgHeight);

    var cols = 3;
    var rows = 3;

    generateGameBoard(rows,cols);

    console.log("3");
}


function by4(){
    const imgSrc = "images/testRainbow.jpg";
    const img = new Image();

    img.src = imgSrc;
    var imgWidth = img.width;
    var imgHeight = img.height;

    //alert("4!!");
    var cols = 4;
    var rows = 4;

    generateGameBoard(rows,cols);
}

function by5(){
    const imgSrc = "images/testRainbow.jpg";
    const img = new Image();

    img.src = imgSrc;
    var imgWidth = img.width;
    var imgHeight = img.height;

    var cols = 5;
    var rows = 5;

    generateGameBoard(rows,cols);
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
    shuffle() // ????
}

function drawGameBoard() {
    for(var i = 0; i < rows; i++) {
        for(var i = 0; i < cols; i++) {

        }
    }
}

function drawPhotoTile() {

}

function report() {
    alert("6!!");
    let region = document.querySelector("body"); // whole screen
    html2canvas(region, {
      onrendered: function(canvas) {
        let pngUrl = canvas.toDataURL(); // png in dataURL format
        let img = document.querySelector(".screen");
        img.src = pngUrl; 
        },
    });
    
}