/*
Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo 
nomi e falli subiti e stampiamo tutto in console.
*/
//Creo un'array contenente oggetti squadre di calcio
var soccerTeams = [
    firstTeam = {
        name: "Juventus",
        scores: 0,
        fouls: 0,
    },
    secondTeam = {
        name: "Pro Vercelli",
        scores: 0,
        fouls: 0,
    },
    thirdTeam = {
        name: "Manchester United",
        scores: 0,
        fouls: 0,
    },
];

//Creo una nuova array in cui pusherò i nuovi oggetti
var newSoccerTeams = [
    {
        name: "",
        fouls: 0,
    },
    {
        name: "",
        fouls: 0,
    },
    {
        name: "",
        fouls: 0,
    }
];

//Ciclo la prima array per assegnare dei valori random alle due proprietà numeriche 
for (var i = 0; i < soccerTeams.length; i++) {
    var randomScores = soccerTeams[i].scores;
    randomScores = Math.floor(Math.random() * (100 - 80) + 80)
    var randomFouls = soccerTeams[i].fouls;
    randomFouls = Math.floor(Math.random() * (300 - 150) + 150);
    soccerTeams[i].scores = randomScores;
    soccerTeams[i].fouls = randomFouls;
    var teamNames = soccerTeams[i].name;
    newSoccerTeams[i].name = teamNames;
    newSoccerTeams[i].fouls = randomFouls;
};

console.log(soccerTeams)
console.log(newSoccerTeams)















