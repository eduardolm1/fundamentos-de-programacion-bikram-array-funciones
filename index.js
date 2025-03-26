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

//9
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
    return texto
}
pintarArray([6, 28, 2, 20, 67, 90, 57, 30, 42])