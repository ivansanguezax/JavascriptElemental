var i = 0;
while (i<5){
    console.log("Hola Elemental");
    i++;
}

for(let i=0; i<10; i++){
    console.log("Hola Elemental For");
}

// ¿Cuáles son las partes de un ciclo?

// for que cuente numeros del 1 al 10 

for(var i=1; i<=10;i++){
    console.log("Numero "+ i)
}


//Arreglos
var arreglos= [23, "Hola Elemental", true];

console.log(arreglos[100]);

for(var i=0; i<arreglos.length; i++){
    console.log(arreglos[i]);
}

arreglos[3]= "⭐️";
console.log(arreglos);


arreglos.push("New");
console.log(arreglos);

arreglos.splice(0,2, "Hola Web");
console.log(arreglos);



let frutas = ["Manzana", "Banana"];

console.log(frutas.length);

//¿Cuáles es la forma de insertar un elemento en un arreglo?

//Escribe un programa que recorra el arreglo que definiste en el punto anterior y muestre la frase: "El valor en la posición x es y" donde x es la posición (empezando en 0) y y el valor del elemento.

const array = ["Hola","mundo", 3, "veces"];
for(var i=0; i<array.length; i++){
    console.log(array)
}