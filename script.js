let colors = ["red","green","#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let cont =  document.getElementById("container");
let button = document.getElementById("button");

cont.style.backgroundColor = colors[0];

button.onclick = function(){

  let numberOfColors = colors.length;

  let randomColor = Math.ceil(Math.random()*numberOfColors);

  if(randomColor === numberOfColors){
    randomColor = numberOfColors - 1;
  }
  let randomBgColor = colors[randomColor];

  cont.style.backgroundColor = randomBgColor;
}