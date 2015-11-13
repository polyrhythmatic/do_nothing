var c;
var r;
var g;
var b;

var xoff = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(255);
  g = random(255);  
  b = random(255);
  c = color(r, g, b);
}

function draw() {
  xoff = xoff + 0.001;
  r = 255*noise(xoff);
  g = 255*noise(2*xoff);
  b = 255*noise(3*xoff);
  c = color(r, g, b);
  background(c)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}