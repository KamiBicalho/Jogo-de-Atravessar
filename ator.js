let yVaca = 369;
let xVaca = 100;

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
  for (let i = 0; i < imagemCarros.length; i += 1) {
    colisao = collideRectRect(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xVaca, yVaca, 28, 25);  
    if (colisao){
      colidiu();
    }
  }
}

function colidiu(){
  yVaca = 369;
}
