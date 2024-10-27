/* Desafío: Manejo de Arreglos y Objetos de Hamburguesas

Imagina que tenes una cadena de hamburgueserías que ofrece una gran variedad de combos. 
Para este desafío, hay que escribir un código que trabaje con un arreglo de objetos llamado hamburguesas, 
donde cada objeto representa una hamburguesa con propiedades como nombre y precio.

Ejercicio 1: Filtrar Combos Caros
Tenes que filtrar los combos donde el precio sea mayor a 2000 pesos y mostrar los resultados en la consola 
usando console.table(). En caso de no encontrar ningún combo que cumpla con esta condición, 
mostrar una advertencia con console.warn().

Ejercicio 2: Buscar Combo con papas
Buscar un combo que contenga la palabra 'papas' en su nombre. Si existe un combo que cumple con esta condición:

Mostra al cliente el nombre del combo con un cuadro de diálogo (alert).
Mostra el precio de ese combo en la consola.
Si no se encuentra ningún combo con papas, enviar una advertencia a la consola.

Ejercicio 3: Combos Dobles
Finalmente, filtrar los combos que incluyan la palabra 'doble' en su nombre. Los resultados deben mostrarse 
en una tabla con console.table(). 
Si no se encuentran combos con la palabra 'doble', muestra una advertencia en la consola.

Instrucciones:

Crea el arreglo hamburguesas con al menos cinco objetos que representen distintos combos.
Implementa cada uno de los ejercicios utilizando los métodos de arreglos como filter, find, e includes.
Que el código sea limpio y funcione correctamente.*/



const combos=[]; //array de combos de hamburguesa

// plantilla para crear objetos hamburguesa

function Hamburguesa(nombre,precio){
    this.nombre=nombre;
    this.precio=precio;
}


//creo los combos primero para usarlo en cada inciso
/*
function crearCombos()
{
  let cantidad= prompt("Ingrese la cantidad de combos a crear: ")
  for(let i=0;i< cantidad;i++)
  {
     const nombreCombo=prompt("Ingrese el nombre del combo: "+ (i+1));
     const precioCombo=prompt("Ingrese el precio del combo: ");
     combos.push(new Hamburguesa(nombreCombo.toString().toLowerCase(),parseFloat(precioCombo)))//convierto el nombre a string y lo paso a minuscula,pase el precio a flotante
  }
  console.log(combos);
  return combos;
}*/

//creo combos mnualmente

const combo1= new Hamburguesa("hamburguesa con papas",2500);
const combo2= new Hamburguesa("Hamburguesa con papas al horno",1999);
const combo3= new Hamburguesa("Hamburguesa doble",2121);
const combo4= new Hamburguesa("Hamburguesa con gaseosa doble",1234);
const combo5= new Hamburguesa("Hamburguesa simple",1231);
//cargo el array
combos.push(combo1,combo2,combo3,combo4,combo5);
console.clear();//limpio consola al iniciar
console.log("Array original:");
combos.forEach((element)=>console.log(element));


//Ejercicio 1 
//filtrar combos caros
function filtrarCombosCaros(combo) 
{
    
    const combosCaros = combo.filter(x => x.precio > 2000);
    
    if (combosCaros.length > 0) {
        console.table(combosCaros);
    } else {
        console.warn("No hay combos con el precio mayor a 2000");
    }
}
//crearCombos();
filtrarCombosCaros(combos);//punto 1

//Ejercicio 2

function buscarCombosConPapas(combo)
{
    const comboConPapas=combo.filter(x=> x.nombre.includes("papas"));

    if(comboConPapas.length>0)
    {
       for(let i=0;i<comboConPapas.length;i++)
       {
        alert("El nombre del combo con papas es: "+comboConPapas[i].nombre);
       }
    }
    else
    {
        console.warn("No se encontraron combos que incluyan papas");
        
    }
}
buscarCombosConPapas(combos) //punto 2

//Ejercicio 3

function buscarCombosDobles(combo)
{
    const combosDobles = combo.filter(x=>x.nombre.includes("doble"));
    if(combosDobles.length>0)
    {
       
            console.log("Los combos dobles son:");
            console.table(combosDobles);
        
    }
    else
    {
        console.warn("No se encontraron combos dobles");
        
    }
}

buscarCombosDobles(combos); //punto 3