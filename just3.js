
const btn = document.querySelector("button");
const height = 50
const width = 150
const box = document.getElementById("b1");

btn.addEventListener("click", () => {
  let randY = Math.floor((Math.random() * height) + 1);
  let randX = Math.floor((Math.random() * width) + 1);
  box.style.transform = `translate(${randX}px, ${randY}px)`;
})

//document.documentElement.clientHeight;
//document.documentElement.clientWidth;