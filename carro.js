//código dos carros

let xCarros = [700, 700, 700];
let yCarros = [42, 96, 150];
let velocidadeCarros = [3.8, 5, 6.2];

function mostrarCarro(){
  for (let i = 0; i < imagemCarros.length ; i += 1) {
  image(imagemCarros[i], xCarros[i], yCarros[i], 60, 40);
  }
}

function movimentarCarro(){
  for (let i = 0; i < xCarros.length ; i += 1){
    xCarros[i] -= velocidadeCarros[i];
    // condição para voltar ao início
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 700;
    }
  }
}

function passouTodaTela (xCarro){
  return xCarro < -70;
}
  