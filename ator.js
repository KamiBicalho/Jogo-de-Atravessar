let yVaca = 369;
let xVaca = 100;
let meusPontos = 0;

function mostrarVaca(){
  image(imagemVaca, xVaca, yVaca, 30, 27);
}

function movimentarVaca(){
  if(keyIsDown(UP_ARROW)){
    yVaca -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    yVaca += 3;
  }
}

function verificarColisao(){
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectRect(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xVaca, yVaca, 28, 25);  
    if (colisao){
      voltarParaPosicaoInicial();
      meusPontos = 0;
    }
  }
}

function voltarParaPosicaoInicial(){
  yVaca = 369;
}

function mostrarPontos(){
  textSize(23)
  text(meusPontos, 160, 26)
}

function marcarPonto(){
  if (yVaca < 10){
    meusPontos += 1;
    voltarParaPosicaoInicial();
  }
}