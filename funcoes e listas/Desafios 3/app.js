function imc(peso, altura) {
  alturaQuadrado = altura * altura;
  imc = peso / alturaQuadrado
  return console.log(`O IMC de uma pessoa com ${peso} quilos e ${altura} metros é ${imc.toFixed(2)}`);
}

imc(89,1.72);

function fatorial(numero) {
  if (numero == 1 || numero == 0) {
    return 1
  }
  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }
  console.log(`O fatorial de ${numero} é igual a ${fatorial}`);
  return fatorial 
}

fatorial(6);

function convercao(dolarValue) {
  reaisValue = dolarValue * 4.80;
  return console.log(`O valor em doláres é $${reaisValue.toFixed(2)}`);
}

convercao(10.2);

function areaRetangulo(base, altura) {
  area = base * altura + 'm²';
  perimetro = (base * 2) + (altura * 2)
  return console.log(`A área do Retangulo é ${area} e o perímetro é ${perimetro}`)  
}

areaRetangulo(5,10);

function areaCirculo(raio) {
  raioQuadrado = raio * raio;
  area = 3.14 * raioQuadrado;
  perimetro = 2 * 3.14 * raio;
  return console.log(`A área do circulo é ${area} e o perímetro é ${perimetro}`);
}

areaCirculo(3);

function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

tabuada(4)