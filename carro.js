//variáveis do carro 1
let xCarro1 = 700
let yCarro1 = 42
let velocidadeCarro1 = 3.8

//cariáveis do carro 2
let xCarro2 = 700
let yCarro2 = 96
let velocidadeCarro2 = 5

//variáveis do carro 3
let xCarro3 = 700
let yCarro3 = 150
let velocidadeCarro3 = 6.2

function mostrarCarro(){
  image(imagemCarro1, xCarro1, yCarro1, 60, 40)
  image(imagemCarro2, xCarro2, yCarro2, 60, 40)
  image(imagemCarro3, xCarro3, yCarro3, 60, 40)
}

function movimentarCarro(){
  xCarro1 -= velocidadeCarro1
  if (xCarro1<-70){
    xCarro1 = 700
  }
  
  xCarro2 -= velocidadeCarro2
  if (xCarro2<-70){
    xCarro2 = 700
  }
  
  xCarro3 -= velocidadeCarro3
  if (xCarro3<-70){
    xCarro3 = 700
  }
  
}