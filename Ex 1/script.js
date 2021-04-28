/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

//Creo un'array di oggetti con le relative caratteristiche
var bicycles = [
    bicycle1 = {
        name: 'Bianchi',
        weight: 15,
    },
    bicycle2 = {
        name: 'Cannondale',
        weight: 14,
    },
    bicycle3 = {
        name: 'Atala',
        weight: 16,
    }
];

//Calcolo qual è l'oggetto con il valore 'weight' minore
var lighterBicycle = Math.min(bicycle1.weight, bicycle2.weight, bicycle3.weight);

//Con un ciclo for estraggo il valore 'name' della bicicletta che corrisponde a quella con il peso minore
for (var i = 0; i < bicycles.length; i++) {
    //Utilizzo il decostructuring per estrapolare le proprietà che mi interessano dagli oggetti
    const {name, weight} = bicycles[i]
    //Se il valore weight è uguale al peso minore precedentemente calcolato significa che
    //questo è l'oggetto che mi interessa e ne estrapolo quindi anche il valore  'name'
    if (bicycles[i].weight === lighterBicycle) {
        //Stampo il risultato con il metodo template literal
        console.log(`La bicicletta più leggera è ${name}, che pesa ${weight}`)
    }
}
