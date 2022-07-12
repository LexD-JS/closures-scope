const myGlobal=0;

function myFunction(){
    const myNumber=1;
    console.log(myGlobal);

    function parent(){//Funcion Interna
        const inner=2;
        console.log(myNumber,myGlobal);

        function child(){//Función Hijo
            console.log(inner,myGlobal,myNumber);
        }
        return child();
    }
    return parent();
} 

myFunction();


/*Como ejemplo super claro de que es y como funcionan los closures
teneos este ejemplo.
Aquí podemos ver que dependiendo de la posición de nuestras variables... en este caso
constantes, teneos o no acceso a los valores.

Para que quede bien explicado. 
A las variables globales, se les puede acceder desde CUALQUIER punto pero dentro 
de un closure los valores de un nivel 'inferior' pueden acceder a los valores
de cualquier nivel superior... pero los de nivel 'superior' NO pueden acceder a los valores
de niveles inferiores*/