// Declarativa
function holaMundo(nombre){
    console.log("lista de compras "+ nombre);
}

holaMundo(null);


// Expresiva

// const suma = function(valor){
//     return valor + 2;
// }

const suma = (valor =>{return valor + 2});

console.log(suma(6));


// Global Scope


function imprimir(){
    console.log(`${variableGlobal} llamada dentro de una funcion`);
}
imprimir();


// 1 caso
function variables (){
    variableGlobal = 'esto es el cambio';
}

variables();

console.log(variableGlobal);

// 2 caso
var variableGlobal = 'esto es una variable global';

function variable(){
    var variablelocal = variableGlobal = 'variable Global';
}
variable();
console.log(variableGlobal);


// Local Scope

function local(){
    var variablelocal= 'esto es una variable local';
    console.log(variablelocal);
}

local();

var variablelocal = 'este es el cambio';
console.log(variablelocal);

// Funciones dentro de funciones

function a(){
    var varible1 = 'variable externa';
    return function(){
        var variable2 = 'variable interna';
        console.log(variable1);
    };
}

a()();

// Block scope

function block(){
    const contador = 5;

    for( let i= 0; i <= contador; i++ ){
        console.log(i); 
    }
    // block Scope
    console.log(i); //error
}

block();

// Condicionales

if(true){
    console.log('holaMundo');
}

if(1==2){
    console.log('Son iguales');
}

var num = 30;

if(num<10){
    console.log('el numero es menor o igual a 10');
}else{
    console.log('el numero es mayor a 10');
}

var color = 'rojo';

if(color === 'rojo' || color === 'negro'){
    console.log('excelente eleccion')
}else{
    console.log('mala eleccion')
}

//¿Cuántos else if pueden existir en un condicional?

//¿Qué problema tiene el siguiente código?

if (num >= 10 && num <= 20) {
    console.log("El número está entre 10 y 20");
}

//Crea una función llamada sum que reciba dos argumentos (puedes llamarlos como quieras) y retorne la suma de esos dos argumentos.

function sum(a, b){
    console.log(a+b);
}
sum(3,4);