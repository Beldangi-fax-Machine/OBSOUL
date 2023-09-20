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


