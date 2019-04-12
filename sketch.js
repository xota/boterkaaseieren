var n = 3;

function setup() {
  createCanvas(200, 200);
  background(220);
  for (i = 0; i < n; i++) {
    x = (i + 1) * width / n;
    line(x, 0, x, height); //verticale lijn
    y = (i + 1) * height / n;
    line(0, y, width, y); // horizontale lijn
  }
}

function draw() {
  var n = 3;
  if (mouseIsPressed) {
    ellipse((0.5 + floor(mouseX / (width / n))) * width / n,
      (0.5 + floor(mouseY / (height / n))) * height / n,
      width / n, height / n);
  }
}
