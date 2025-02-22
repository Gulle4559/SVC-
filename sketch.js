

let o, a, b, c, d, e, f, g, h, i;
let input = "";

function preload() {
  o = loadImage("0.jpg");
  a = loadImage("1.jpg");
  b = loadImage("2.jpg");
  c = loadImage("3.jpg");
  d = loadImage("4.jpg");
  e = loadImage("5.jpg");
  f = loadImage("6.jpg");
  g = loadImage("7.jpg");
  h = loadImage("8.jpg");
  i = loadImage("9.jpg");

  images = [o, a, b, c, d, e, f, g, h, i];
}

function setup() {
  createCanvas(400, 300);
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  fill(0);
  text("Lommeregner", width / 2, 40);
  displayInput();
}

function keyPressed() {
  if (key >= '0' && key <= '9') {
    input += key;
  } else if (key === '+' || key === '-') {
    input += key;
  } else if (keyCode === ENTER) {
    calculate();
  } else if (keyCode === BACKSPACE) {
    input = input.slice(0, -1);
  }
}





