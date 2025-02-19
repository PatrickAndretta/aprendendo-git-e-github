let title = document.querySelector('h1');
title.innerHTML = 'Hora do desafio';

function consoleButton() {
  console.log('O botão console foi apertado');
} 

function alerta() {
  alert('Eu amo JS');
}

function city() {
  input = prompt('Em qual cidade você esteve?');
  return alert(`Estive em ${input} e lembrei de você`);
}

function sum(a, b) {
  a = parseFloat(prompt('Qual o primeiro número da soma?'))
  b = parseFloat(prompt('Qual o segundo número da soma?'))
  return alert(`O valor da soma é: ${a + b}`)
}