function setScreenshotUrl(url) {
  document.getElementById('target').src = url;

  //then we can just use image later
  var image = new Image();
  image.src = url;
  document.body.appendChild(image);
}
