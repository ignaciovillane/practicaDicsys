/* Ejercicio fácil:
Escribe un programa que verifique si un número ingresado por el usuario 
es mayor que 10 y menor que 20. Si cumple ambas condiciones, 
imprime "El número está entre 10 y 20" */

let numero=prompt("Ingrese el número por favor:");
if(numero > 10 && numero <20 )
{
    console.log("El número está entre 10 y 20");
    
}


/* 
Ejercicio de nivel medio:
Crea un programa que pregunte al usuario su edad y si es mayor de 18 años 
o menor de 65 años, imprime "Puedes trabajar". 
Utiliza el operador || para combinar las condiciones. */


let edad= prompt("Ingrese su edad por favor");
if(edad > 18 || edad < 65)
{
    console.log("Puedes trabajar");
    
}

/* Ejercicio avanzado:
Desarrolla un programa que solicite al usuario dos números y compruebe 
si ambos son pares. Si lo son, que imprima "Ambos números son pares"; 
sino, imprime "Al menos uno de los números no es par". 
y tienen que usar el operador && para combinar las condiciones. */

let numero1=prompt("Ingrese el primer número:");
let numero2=prompt("Ingrese el primer número:");

if((numero1%2===0)&&(numero2%2===0))
{
    console.log("Ambos números son pares");
    
}
else{
    console.log("Al menos uno de los números no es par");
    
}