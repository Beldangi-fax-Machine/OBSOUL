function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  star.style.backgroundColor = "red";
  
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  
  document.getElementById("stars-container").appendChild(star);
}

setInterval(createStar, 500);

// Get the footer element by its id
const footer = document.getElementById("myFooter");

let prevScrollpos = window.pageYOffset;

// Listen for scroll events
window.addEventListener("scroll", () => {
  // Get the current scroll position
  const currentScrollPos = window.pageYOffset;

  // If the user is scrolling up (previous scroll position is greater than current scroll position)
  if (prevScrollpos > currentScrollPos) {
    // Show the footer
    footer.style.display = "block";
  } else {
    // Hide the footer
    footer.style.display = "none";
  }
  
  // Update the previous scroll position
  prevScrollpos = currentScrollPos;
});

