// 1. Quali sono i tipi primitivi principali in TypeScript?
// {I tipi primitivi sono: string, number, boolean, undefined, null, any, never}
// 2. Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var nome = "Francesco";
var eta = 19;
var studiaTypeScript = true;
// 3. Tipizza il parametro della seguente funzione:  
//    `const greet = (name) => { return "Ciao " + name }`
var greet = function (name) {
    return "Ciao " + name;
};
// 4. Specifica il tipo di ritorno della seguente funzione:  
//    `const sum = (a, b) => { return a + b }`
var sum = function (a, b) {
    return a + b;
};
// 5. Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var calcolaPrezzoConIva = function (prezzo) {
    return prezzo * 1.22;
};
// 6. Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concatenaStringhe = function (str1, str2) {
    var sum = str1 + str2;
    return sum.length;
};
// 7. Cos'è un Type Union e come si scrive?
// Un Type Union consente a una variabile di avere più di un tipo. Si scrive usando il simbolo |
// 8. Crea una variabile che possa contenere un numero, null o undefined.
var variabile;
// 10. Tipizza il seguente array di numeri nei due modi possibili:  
//     `const numbers = [1, 2, 3]`
var numbers1 = [1, 2, 3];
var numbers2 = [1, 2, 3];
// 11. Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var tupla = ["a", "b", "c", 1, 2];
var studente1 = [
    { nome: 'Mario', voto: 8 },
];
var studente2 = [
    { nome: 'Francesco', voto: 6 },
];
// 17. Crea un oggetto che implementi l'interfaccia Auto.
var miaAuto = {
    marca: "Fiat",
    modello: "Panda",
    numeroPorte: 5,
};
