/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Usiamo i nuovi metodi degli array foreach o filter.
*/
var array = [25, 12, 2, 34, 56, 3];

/*function arrList(array, startIndex, endIndex) {
    array.filter(function(element, index) {


        // if (index >= startIndex && index <= endIndex) {
        //     return true
        // } else {
        //     return false
        // }
        
        //Riscrivo la condizione if in maniera più sintetica
        return index >= startIndex && index <= endIndex;

    })
};*/

//Riscrivo la stessa funzione di sopra ma in maniera più sintetica
function arrList(array, startIndex, endIndex) {
    return array.filter((element, index) => index >= startIndex && index <= endIndex)
};

function arrListForEach(array, startIndex, endIndex) {
    const result = [];
    array.forEach((element, index) => {
        if (index >= startIndex && index <= endIndex) {
            result.push(element)
        }
    });
    return result
}

var newArray = arrList(array, 2, 5);
console.log(newArray);

var newArray2 = arrListForEach(array, 1, 3)
console.log(newArray2)

