
//var imgHeight = image.naturalHeight;
//var imgWidth = image.naturalWidth;
document.getElementById("by3Button").addEventListener("click", by3);
document.getElementById("by4Button").addEventListener("click", by4);
document.getElementById("by5Button").addEventListener("click", by5);

function by3(){
    const imgSrc = "images/testRainbow.jpg";
    const img = new Image();

    img.src = imgSrc;
    img.onload = function() {
        alert('Image' + img.width + ' ' + img.height);
    }

    var cols = 3;
    var rows = 3;

    generateGameBoard(rows,cols);
}

function shuffle3() {
    for(var rows = 1; rows <= 3; rows++) {
        for(var cols = 1; cols <= 3; cols++) {
            var rows2 = Math.floor(Math.random() * 3 + 1);
            var cols2 = Math.floor(Math.random() * 3 + 1);
            
            swapTiles("cell" + rows + cols, "cell" + rows2 + cols2);
    }
}
}

function by4(){
    const imgSrc = "images/testRainbow.jpg";
    const img = new Image();

    img.src = imgSrc;
    img.onload = function() {
        alert('Image' + img.width + ' ' + img.height);
    }
    //alert("4!!");
    var cols = 4;
    var rows = 4;

    generateGameBoard(rows,cols);
}

function by5(){
    alert("5!!");
    takeScreenshot();
    var cols = 5;
    var rows = 5;
    console.log('Sceenshot taken')

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

function takeScreenshot() {
    chrome.tabs.captureVisibleTab((screenshotUrl) => {
        const viewTabUrl = chrome.extension.getURL('screenshot.html?id=' + id++)
        let targetId = null;
    
        chrome.tabs.onUpdated.addListener(function listener(tabId, changedProps) {
          // We are waiting for the tab we opened to finish loading.
          // Check that the tab's id matches the tab we opened,
          // and that the tab is done loading.
          if (tabId != targetId || changedProps.status != "complete"){
            return;
          }
          // As we cleared the check above, There is nothing we need to do for
          // future onUpdated events, so we use removeListner to stop getting called
          // when onUpdated events fire.
          chrome.tabs.onUpdated.removeListener(listener);
    
          // We fetch all the views opened by our extension using getViews method and
          // it returns an array of the JavaScript 'window' objects for each of the pages
          // running inside the current extension. Inside the loop, we match each and
          // every entry's URL to the unique URL we created at the top and if we get a match,
          // we call a function on that view which will be called on the page that has been opened
          // by our extension and we pass our image URL to the page so that it can display it to the user.
          var views = chrome.extension.getViews();
          for (var i = 0; i < views.length; i++) {
            var view = views[i];
            if (view.location.href == viewTabUrl) {
              view.setScreenshotUrl(screenshotUrl);
              break;
            }
          }
        });
    
        //We open the tab URL by using the chrome tabs create method and passing it the
        // URL that we just created and we save the tab id that we get from this method
        // after the tab is created in the targetId variable.
        chrome.tabs.create({url: viewTabUrl}, (tab) => {
          targetId = tab.id;
        });
      });
}
