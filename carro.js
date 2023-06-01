//código dos carros

let xCarros = [700, 700, 700, 700, 700, 700];
let yCarros = [42, 96, 150, 210, 263, 318];
let velocidadeCarros = [3, 4.5, 5.5, 3.5, 5, 6.5];
let comprimentoCarro = 60;
let alturaCarro = 40;

function mostrarCarro(){
  for (let i = 0; i < imagemCarros.length ; i++) {
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentarCarro(){
  for (let i = 0; i < xCarros.length ; i++){
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
  