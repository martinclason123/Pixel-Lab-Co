// Variables for storing the page width and fireRate
let query;
let fireRate;

// If mobile (< 640px) expand pictures less often and only expand visible images
function getWidthSelector() {
  let width = document.documentElement.clientWidth;
  query = ".lg-only.square";
  fireRate = 100;
  if (width <= 640) {
    query = ".sm-only.square";
    fireRate = 200;
  }
}

// sets firerate and image query on page load
getWidthSelector();

// resets the variables on resize
window.addEventListener("resize", function () {
  getWidthSelector();
  floatingImages = document.querySelectorAll(query);
});
let floatingImages = document.querySelectorAll(query);

/* pick a random floating image and make it larger  */
var interval = setInterval(function () {
  var randomNumber = Math.floor(Math.random() * floatingImages.length);
  let photo = floatingImages[randomNumber];

  photo.classList.add("randomResizeGrow");

  setTimeout(function () {
    photo.classList.remove("randomResizeGrow");
  }, 1000);
}, fireRate);
