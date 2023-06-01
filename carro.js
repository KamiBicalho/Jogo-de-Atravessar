//código dos carros

let xCarros = [700, 700, 700];
let yCarros = [42, 96, 150];
let velocidadeCarros = [2, 3.4, 4.8];
let comprimentoCarro = 60;
let alturaCarro = 40;

function mostrarCarro(){
  for (let i = 0; i < imagemCarros.length ; i += 1) {
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
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
  