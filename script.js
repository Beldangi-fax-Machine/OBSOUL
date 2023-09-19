var ball = document.getElementById("ball");
var trashCan = document.getElementById("trash-can");

// Move the ball with mouse
document.addEventListener("mousemove", function(event) {
  var x = event.clientX;
  var y = event.clientY;
  ball.style.left = x + "px";
  ball.style.top = y + "px";
});

// Check if the ball is inside the trash can
function isInside(element1, element2) {
  var rect1 = element1.getBoundingClientRect();
  var rect2 = element2.getBoundingClientRect();
  return (
    rect1.left >= rect2.left &&
    rect1.right <= rect2.right &&
    rect1.top >= rect2.top &&
    rect1.bottom <= rect2.bottom
  );
}

// Check for collision between ball and trash can
setInterval(function() {
  if (isInside(ball, trashCan)) {
    var randomX = Math.floor(Math.random() * (window.innerWidth - 100));
    var randomY = Math.floor(Math.random() * (window.innerHeight - 100));
    trashCan.style.left = randomX + "px";
    trashCan.style.top = randomY + "px";
  }
}, 100);
