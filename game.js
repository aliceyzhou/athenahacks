var image = new Image();

image.src = '';

// Function to slice image into a grid-like shape for the puzzle.
// Parameters are num_rows and num_cols from user.

function imageSlicer(num_rows, num_cols) {
    for(var rows = 0; rows < num_rows; num_rows++) {
        for(var cols = 0; cols < num_cols; num_cols++) {
            // hey
            console.log("hi");
        }
    }
}

document.getElementById("by3Button").addEventListener("click", by3);

function by3(){
    console.log("3");
}
/*
function by4(){
    console.log("4");
}

function by5(){
    console.log("5");
}*/