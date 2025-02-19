let ola = function(){
  console.log('Olá mundo!');
}
ola();

function olaNome(nome) {
  console.log(`Olá ${nome}`);
}
olaNome('Patrick');

function double(num) {
  return console.log(num * 2);
}
double(10);

function media(a,b,c) {
  return console.log((a + b + c) / 3);
}
media(100,200,300);

function bigger(a,b) {
  if (a > b) {
    console.log(a)
} else if ( a < b) {
    console.log(b)
  } else {
    console.log('os números são iguais')
  }
}
bigger(1,2)
bigger(3,4)
bigger(1,1)

function square(a) {
console.log(a * a)
}
square(5)
