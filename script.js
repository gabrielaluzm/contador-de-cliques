let contador = 0;
const limite = 10;

const botao = document.getElementById("botao");
const resetar = document.getElementById("resetar");
const mensagem = document.getElementById("mensagem");

console.log("Script carregado");

const frasesEngracadas = [
  "1 clique? Ok, começou bem!",
  "Dois cliques… viciada!",
  "Tá gostando de apertar, é?",
  "Acho que o botão vai pedir socorro!",
  "Você tá clicando como se fosse Black Friday!",
  "Vai quebrar o botão, cuidado!",
  "Eu hein… vai com calma aí 😂",
  "Tá querendo bater recorde?",
  "Esse botão tá suando já…",
  "CHEGAAA! Vá beber uma água! 🫠",
];

function corAleatoria() {
  const r = Math.floor(Math.random() * 200);
  const g = Math.floor(Math.random() * 200);
  const b = Math.floor(Math.random() * 200);
  return `rgb(${r}, ${g}, ${b})`;
}

botao.addEventListener("click", function () {
  if (contador >= limite) {
    mensagem.textContent = "Você atingiu o limite! Respira e reseta 😅";
    return;
  }

  contador++;
  botao.style.backgroundColor = corAleatoria();
  mensagem.textContent =
    frasesEngracadas[contador - 1] || `Você clicou ${contador} vezes!`;
});

resetar.addEventListener("click", function () {
  contador = 0;
  botao.style.backgroundColor = "#4caf50";
  mensagem.textContent = "Clique no botão abaixo 👇";
});
