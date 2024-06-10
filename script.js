const player = document.getElementById("player");
const carro2 = document.getElementById("carro2");
const carro3 = document.getElementById("carro3");
const carro4 = document.getElementById("carro4");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

// variaveis para definir as posições 
let posicaoAtual = 0;
let intervaloEsquerda;
let intervaloDireita;

function moverParaEsquerda() {
  posicaoAtual -= 10;
  player.style.right = posicaoAtual + "px";
}

function moverParaDireita() {
  posicaoAtual += 10;
  player.style.right = posicaoAtual + "px";
}

// Função para verificar colisão
function verificarColisao() {
  const playerRect = player.getBoundingClientRect();
  const carro2Rect = carro2.getBoundingClientRect();
  const carro3Rect = carro3.getBoundingClientRect();
  const carro4Rect = carro4.getBoundingClientRect();

  if (
    (playerRect.left < carro2Rect.right && playerRect.right > carro2Rect.left && 
     playerRect.top < carro2Rect.bottom && playerRect.bottom > carro2Rect.top) ||
    (playerRect.left < carro3Rect.right && playerRect.right > carro3Rect.left && 
     playerRect.top < carro3Rect.bottom && playerRect.bottom > carro3Rect.top) ||
    (playerRect.left < carro4Rect.right && playerRect.right > carro4Rect.left && 
     playerRect.top < carro4Rect.bottom && playerRect.bottom > carro4Rect.top)
  ) {
    carro2.style.animationPlayState = 'paused';
    carro3.style.animationPlayState = 'paused';
    carro4.style.animationPlayState = 'paused';
  } else {
    carro2.style.animationPlayState = 'running';
    carro3.style.animationPlayState = 'running';
    carro4.style.animationPlayState = 'running';
  }
}

// eventos de botao para mover
btn2.addEventListener("mousedown", () => {
  intervaloEsquerda = setInterval(moverParaEsquerda, 200);
});

btn1.addEventListener("mousedown", () => {
  intervaloDireita = setInterval(moverParaDireita, 200);
})

document.addEventListener("mouseup", () => {
  clearInterval(intervaloDireita);
  clearInterval(intervaloEsquerda);
})

btn2.addEventListener("touchstart", () => {
  intervaloEsquerda = setInterval(moverParaEsquerda, 200);
});

btn1.addEventListener("touchstart", () => {
  intervaloDireita = setInterval(moverParaDireita, 200);
})

document.addEventListener("touchend", () => {
  clearInterval(intervaloDireita);
  clearInterval(intervaloEsquerda);
})

// Intervalo para verificar colisão constantemente
setInterval(verificarColisao, 100);