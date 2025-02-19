alert("Seja bem vindo ao jogo do número secreto!");
let maxNum = prompt(`Insira o número o qual definirá o intervalo de números aleatórios`)
function chooseRandomNumber() {
  return parseInt(Math.random() * maxNum + 1); // Generates a number between 1 and 100
}

let randomNumber = chooseRandomNumber();
let number;
let tries = 0;

console.log(randomNumber)

while (number != randomNumber) {
    number = prompt(`escolha um número entre 1 e ${maxNum}, você já fez ${tries} tentativas.`);
    console.log(number)
    if (number == randomNumber) {
      tries++;
      break;
    } else if (number == null || number == "" ){
      alert("Você não digitou nada, tente novamente");
    } else if (number > maxNum) {
      alert(`O número escolhido é maior que ${maxNum}, por favor, escolha outro número entre 1 e ${maxNum}`);
    } else if (number < randomNumber) {
      alert("Tente novamente, o número correto é maior que o escolhido anteriormente");
      tries++;
    } else if (number > randomNumber) {
      alert("Tente novamente, o número correto é menor que o escolhido anteriormente");
      tries++;
    } 
}

let wordTentativa = tries > 1 ? "tentativas" : "tentativa";
alert("Você acertou! o número secreto era: " + randomNumber + " | Você precisou de " + tries + " " + wordTentativa);