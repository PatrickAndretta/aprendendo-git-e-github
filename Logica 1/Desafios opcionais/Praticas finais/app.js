// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Seja bem vindo!");

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Patrick";
  console.log(`Olá ${nome}!`);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Olá ${nome}!`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?.
// Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let language = prompt("Qual a sua linguagem de programação favorida?");
  console.log(language);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
// Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 94;
let valor2 = 12;
let resultado = valor1 + valor2;
  console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
// Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let resultado2 = valor1 - valor2;
  console.log(`A subtração entre ${valor1} e ${valor2} é igual a ${resultado2}.`);

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, 
// utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = parseFloat(prompt("Informe a sua idade"));
  idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade");

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = parseFloat(prompt("informe um número e eu verificarei se ele é positivo, negativo ou zero"));
  numero > 0 ? console.log("Número é positivo") : numero < 0 ? console.log("Número é negativo") : console.log("Número é igual a 0.");

 // Use um loop while para imprimir os números de 1 a 10 no console.
 let start = 1

 while (start <= 10) {
  console.log(start);
  start++;
 }

 // Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 10;

 nota > 7 ? console.log("Aprovado") : console.log("Reprovado");

 // Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
 console.log(`Numero pseudo aleatório ${Math.random()}`);

 // Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
 console.log(`Número pseudo aleatório entre 1 e 10: ${parseInt(Math.random() * 10 + 1)}`)

 // Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
 console.log(`Número pseudo aleatório entre 1 e 1000: ${parseInt(Math.random()* 1000 + 1)}`)
