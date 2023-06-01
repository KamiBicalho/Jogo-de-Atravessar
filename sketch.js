function setup() {
  createCanvas(550, 400);
}

function draw() {
  background(imagemEstrada);
  mostrarVaca();
  mostrarCarro();
  movimentarVaca();
  movimentarCarro();
  verificarColisao();
  mostrarPontos(); 
  marcarPonto();
}




