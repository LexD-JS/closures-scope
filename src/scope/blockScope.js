/* --Block Scope-- */

/* --La ejecución de block scope se limita al alcance EXCLUSIVO de las variables
que fueron declaradas dentro de un bloque, es decir dentro de unas llaves '{}'.
Sí puede que estemos dentro del function Scope, pero el funcionamiento de JS es asi de estricto.
en algunos caso, como es este ejemplo, 'var' tiene el acceso a function scope...
se le puede llamar y acceder desde cualquier parte de la función...
pero 'let' y 'const' solo pueden ser llamados y accedidos desde dentro del bloque '{}'
donde fuerón declarados.*/

//ejemplo 1

const fruits=()=>{
    if(true){
        var fruit1='apple';//función Scope
        let fruit2='orange';//BlockScope
        const fruit3='banana';//BlockScope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

// fruits()apple,error,error.


const fruits2=()=>{
    if(true){
        var fruit1='apple';//función Scope
        let fruit2='orange';//BlockScope
        const fruit3='banana';//BlockScope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}

fruits2()//apple,orage,banana