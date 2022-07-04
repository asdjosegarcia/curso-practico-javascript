const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1Count = { //Bracket Notation: se usa para poder poner variables como nombre de nuestros objetos, dentro de nuestro array lista1Count.

};
lista1.map(//.map va a hacer que el bucle se repita hasta que se pasen todos los elementos de lista1
    function (elemento) {//Si hay un valor distinto de undefined o null, entonces se resuelve como “truthy”, por lo que elemento es equivalente a poner true. 
        if (lista1Count[elemento]) { //aca pregunta si exite el valor x en el array de lista1Count, si existe agrega +1 a ese valor
            lista1Count[elemento] += 1; //elemento va tomando los valores de map,listaCount almacena  los resultados
            console.log(elemento);
        } else {// si no existe lo crea y la proxima vez este valor pasara por if
            lista1Count[elemento] = 1;
        }

    }
);
const lista1Array = Object.entries(lista1Count).sort( //Objet.entries crea un array con arrays adentro, .sort ordena las numeros 
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);
const moda = lista1Array[lista1Array.length - 1]; //va a mostrar el ultomo objeto de la lista(el numero que mas se repitio)


