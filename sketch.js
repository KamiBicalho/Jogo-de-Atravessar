let imagemEstrada;

//variáveis da vaca
let imagemVaca;
let yVaca = 369;

//variáveis do carro
let imagemCarro;
let xCarro = 600



function preload() {
  imagemEstrada = loadImage("Imagens/estrada.png");
  imagemVaca = loadImage("Imagens/ator-1.png");
  imagemCarro = loadImage("Imagens/carro-1.png");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemEstrada);
  mostrarVaca();
  mostrarCarro();
  movimentarVaca();
  movimentarCarro();
}

function mostrarVaca() {
  image(imagemVaca, 100, yVaca, 30, 27);
}

function mostrarCarro() {
  image(imagemCarro, xCarro, 42, 60, 40)
}

function movimentarVaca() {
  if (keyIsDown(UP_ARROW)) {
    yVaca -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yVaca += 3;
  }
}

function movimentarCarro() {
  xCarro -= 5
  if (xCarro < -300) [
    xCarro += 900
  ]
}
