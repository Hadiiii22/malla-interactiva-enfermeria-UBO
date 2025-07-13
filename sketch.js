let puntos = [];
let espacio = 40;
let columnas, filas;

function setup() {
  createCanvas(windowWidth, windowHeight);
  columnas = floor(width / espacio);
  filas = floor(height / espacio);

  for (let i = 0; i <= columnas; i++) {
    for (let j = 0; j <= filas; j++) {
      puntos.push({
        baseX: i * espacio,
        baseY: j * espacio,
        offsetX: 0,
        offsetY: 0,
      });
    }
  }

  stroke(255, 100);
  strokeWeight(1);
  noFill();
}

function draw() {
  background(0);

  for (let i = 0; i < puntos.length; i++) {
    let p = puntos[i];
    let dx = p.baseX - mouseX;
    let dy = p.baseY - mouseY;
    let d = sqrt(dx * dx + dy * dy);
    let fuerza = constrain(100 / d, 0, 10);

    p.offsetX = lerp(p.offsetX, dx * fuerza * 0.01, 0.1);
    p.offsetY = lerp(p.offsetY, dy * fuerza * 0.01, 0.1);

    let x = p.baseX + p.offsetX;
    let y = p.baseY + p.offsetY;

    ellipse(x, y, 2);

    // Línea horizontal
    if ((i + 1) % (filas + 1) !== 0) {
      let derecha = puntos[i + 1];
      line(x, y, derecha.baseX + derecha.offsetX, derecha.baseY + derecha.offsetY);
    }

    // Línea vertical
    if (i + filas + 1 < puntos.length) {
      let abajo = puntos[i + filas + 1];
      line(x, y, abajo.baseX + abajo.offsetX, abajo.baseY + abajo.offsetY);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
