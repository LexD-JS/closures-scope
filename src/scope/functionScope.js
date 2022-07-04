/*--El function Scope es el alcance de las varibales y de toda la lógica de nuetro
programa, es decir nuestras variables y funciones serán solo y SOLO vistas y accedidas por
loque este dentro de la función 'padre'; Fuera de esta, no existen.--*/

function greeting (){
    let userName='Alex';//Decalracion y asignacion.
    console.log(userName);

    if(userName === 'Alex'){
        console.log(`Hello world ${userName} !`);
    }
}

greeting();//Alex -- Hello world Alex !--
console.log(userName);//Error.

//Lo que pasa en la función, se queda en la funcion!.
//-Proverbio chino-