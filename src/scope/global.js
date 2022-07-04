//variables

var a; //Decalracion.
var b='b' // Decalracion y asignacion.
b= 'foo' //Reasignacion.
var a= 'aa' //Redeclaracion.


/*--Global Scope--*/
//Todo lo que se declare en un global scope se instancia dentro del objeto 'window' en el 
//cual todo y todos tienen acceso a lo que ahí se encuentre.

var fruit = 'apple'

function favoriteFruit(){
    console.log(fruit);
}//Esta funcion y cualquier otra puede acceder al valor de la varibale 'fruit'.

favoriteFruit()//apple


//NOTA:
/*--Sí ASIGNAMOS una varibale dentro de una función pero NO la DECLARAMOS, esa varible
se vuelve global, por lo que se puede acceder a esta, desde fuera de la funcion...cuidado--*/

function user(){
    user='Alex'; 
    console.log(user);
};

user()//Aca estamos llamando a la funcion
console.log(user);//Aca estamos llamando a la varibale user.. y como podemos ver, tenemos acceso.