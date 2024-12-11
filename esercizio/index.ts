 
// 1. Quali sono i tipi primitivi principali in TypeScript?

// {I tipi primitivi sono: string, number, boolean, undefined, null, any, never}

// 2. Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

const nome: string = "Francesco";
const eta: number = 19;
const studiaTypeScript: boolean = true;

// 3. Tipizza il parametro della seguente funzione:  
//    `const greet = (name) => { return "Ciao " + name }`
const greet = (name: string): string => { 
   return "Ciao " + name; 
};


// 4. Specifica il tipo di ritorno della seguente funzione:  
//    `const sum = (a, b) => { return a + b }`

const sum = (a: number, b: number) => { 
   return a + b; 
};


// 5. Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const calcolaPrezzoConIva = (prezzo: number) => {
   return prezzo * 1.22;
};


// 6. Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const concatenaStringhe = (str1: string, str2: string) => {
   const sum = str1 + str2;
   return sum.length;
};


// 7. Cos'è un Type Union e come si scrive?

// Un Type Union consente a una variabile di avere più di un tipo. Si scrive usando il simbolo |

// 8. Crea una variabile che possa contenere un numero, null o undefined.

let variabile: number | null | undefined;

// 9. Crea un tipo per rappresentare i giorni della settimana usando un union di stringhe letterali.

type settimana = 'Lunedì' | 'Martedì' | 'Mercoledì' | 'Giovedì' | 'Venerdì' | 'Sabato' | 'Domenica';

// 10. Tipizza il seguente array di numeri nei due modi possibili:  
//     `const numbers = [1, 2, 3]`

const numbers1: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

// 11. Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

const tupla: [string, string, string, number, number] = ["a", "b", "c", 1, 2];

// 12. Qual è la differenza tra type e interface?

// type: Si usa per definire alias di tipi e tipi primitivi 
// interface: Si usa per definire la struttura di un oggetto.

// 13. Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname" e "age".
interface Person {
   firstname: string;
   lastname: string;
   age: number;
}


// 14. Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface Utente {
   email: string;
   telefono?: string;
}


// 15. Crea un array tipizzato di oggetti "Studente" con nome e voto.

interface Studente {
   nome: string;
   voto: number;
}

const studente1: Studente[] = [
   { nome: 'Mario', voto: 8 },
];
const studente2: Studente[] = [
   { nome: 'Francesco', voto: 6 },
];


// 16. Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Veicolo {
   marca: string;
   modello: string;
}

interface Auto extends Veicolo {
   numeroPorte: number;
}


// 17. Crea un oggetto che implementi l'interfaccia Auto.

const miaAuto: Auto = {
   marca: "Fiat",
   modello: "Panda",
   numeroPorte: 5,
};

// 18. Cosa sono i Generics in TypeScript?

// Un generic è un tipo di dato passato come parametro per un'interfaccia, per rendere un'interfaccia più generica e riutilizzabile.

// 19. È possibile avere più tipi generici in una funzione?

// Si

// 20. Crea un'interfaccia tipizzata per una risposta API.

interface ApiResponse<T> {
   status: string;
   data: T;
}


