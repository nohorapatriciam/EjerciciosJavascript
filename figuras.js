// Código del Cuadrado
console.group("Cuadrado")
const ladoCuadrado = 5;
const perimetro_cuadrado = ladoCuadrado * 4
const area_cuadrado = ladoCuadrado * ladoCuadrado

//function perimetroCuadrado (){
  //console.log("El perímetro del cuadrado es  " + perimetro_cuadrado + " centimetros");
//}
//perimetroCuadrado()
// CAMBIAMOS EL CÓDIGO POR LAS FUNCIONES

function perimetroCuadrado(lado) {
  return lado * 4;
}
perimetroCuadrado()


//function areaCuadrado (){
  //console.log("El área del cuadrado es  " + area_cuadrado + " centimetros cuadrados");
//}
//areaCuadrado()
// CAMBIAMOS EL CÓDIGO POR LAS FUNCIONES
function areaCuadrado(lado) {
  return lado * lado;
}
areaCuadrado()

console.groupEnd();

console.group("Triangulo")

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const ladoTriangulo3 = 4;
//const perimetro_triangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3

//Código del Triángulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
perimetroTriangulo()

//function perimetroTriangulo (){
  //console.log("El perimetro del triángulo es  " + perimetro_triangulo + " centimetros");
//}

//perimetroTriangulo()

//const altura = 6;
//const base = 4;
//const area_triangulo = (base * altura) / 2

//function areaTriangulo (){
  //console.log("El área del Triangulo es  " + area_triangulo + " centrimetros")
//}

//areaTriangulo()

function areaTriangulo (base, altura){
  return  (base * altura) / 2;
}
areaTriangulo()
console.groupEnd();

//console.group("Circunferencia")

//const diametro = 16;
const pi = Math.PI;
//const diametro_Circunferencia = diametro * pi;
//const radio_Circunferencia = diametro_Circunferencia / 2;
//const area_Circunferencia = (radio_Circunferencia * radio_Circunferencia) * pi;

//Código Circunferencia

//function diametroCircunferencia () {
  //console.log("El diametro de la Circunferencia es " + diametro_Circunferencia + " centimetros");
//}
//diametroCircunferencia()

function diametroCircunferencia (radio) {
  return radio * 2;
  //console.log("El diametro de la Circunferencia es " + diametro_Circunferencia + " centimetros");
}
diametroCircunferencia()

function perimetroCircunferencia (radio) {
  const diametro = diametroCircunferencia(radio);
  return diametro * pi;
}
perimetroCircunferencia()


function areaCircunferencia(radio) {
  return radio * radio * pi;
}

areaCircunferencia()

console.groupEnd()