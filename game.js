var image = new Image();

image.src = '';

// Function to slice image into a grid-like shape for the puzzle.
// Parameters are num_rows and num_cols from user.

/*function imageSlicer(num_rows, num_cols) {
    for(var rows = 0; rows < num_rows; num_rows++) {
        for(var cols = 0; cols < num_cols; num_cols++) {
            // hey
            console.log("hi");
        }
    }
}*/

document.getElementById("by3Button").addEventListener("click", by3);
document.getElementById("by4Button").addEventListener("click", by4);
document.getElementById("by5Button").addEventListener("click", by5);

function by3(){
    alert("3!!");
    var cols = 3;
    var rows = 3;
}

function by4(){
    alert("4!!");
    var cols = 4;
    var rows = 4;
}

function by5(){
    alert("5!!");
    var cols = 5;
    var rows = 5;
}

function cutImage(rows, cols){
    tiles = [];

    for (var i = 0; i < (rows*cols); i++){
        tiles.push(i);
    }
    
}
