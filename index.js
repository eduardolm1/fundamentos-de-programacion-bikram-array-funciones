//1
let arrayVacio = []
//2
let arrayNumeros = [0,1,2,3,4,5,6,7,8,9]
//3
let arrayNumerosPares = [0,2,4,6,8]
//4
let arrayBidimensional =[[0,1,2] , ['a','b','c']]
//5
function suma(num1,num2){
return num1 + num2
}
suma(29,82)
//6
function potenciacion(num1, num2){
    return num1 ** num2
}

potenciacion(13,6)

//7
function separarPalabras(text){
return text.split(' ')
}

separarPalabras('Hola que tal?')

//8
function repetirString(texto,num){
return texto.repeat(num)
        
}
repetirString('ja',6)

//9  (ESTE FALLA PORQUE EL NUMERO CAMBIA TODO EL RATO)
function esPrimo (num) {
    if(num % 2 === 0){
        return false
    } else{
       return true
    }

}
esPrimo(1755)

//10
function ordenarArray(num){
    return num.sort()
}
ordenarArray([106, 102, 99, 110, 113, 50, 49, 142, 40, 53])

//11
function obtenerPares(num){
    return num.filter(num => num % 2 === 0)
}

obtenerPares([60, 67, 63, 64, 16, 76, 8])
//12
function pintarArray(texto){
    return `[${texto.join(', ')}]`;
}
pintarArray([6, 28, 2, 20, 67, 90, 57, 30, 42])

//13
function arrayMapi(array, funct){
    return array.map(funct)
}
arrayMapi([1, 2, 3, 4, 5], num => num * 2)
//14
function eliminarDuplicados(array){
    return array.filter((num, index) => array.indexOf(num) === index)
}

//15
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//16
const holaMundo = ['Hola', 'Mundo'];
holaMundo.join(' ')



//17
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

//18
const arrayDeArrays = [
    [756, 'nombre'],
    [225, 'apellido'],
    [298, 'direccion']
  ];

//19
function multiplicacion(num1,num2){
    return num1 * num2
}
multiplicacion(65,118);

//20
function division(num1,num2){
    return num1 / num2
}
division(158,64);
//21
function esPar(num){
    return num % 2 === 0
}

esPar(21);
//22  (ME SALIA ESTA EJERCICIO COMO 8 VECES, PORQUE? CON ESTO PONE QUE YA ESTA HECHO)
const arrayFunciones = [suma, resta, multiplicacion];

function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

arrayFunciones[0](68, 149)

//23
