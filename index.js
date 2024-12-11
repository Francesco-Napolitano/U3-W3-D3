var myName = 'Stefano';
var myAge = 30;
var anotherName = 'Mario';
var giorgio = 'giorgio';
giorgio = 'Non sono giorgio';
var mario = 3;
var whatever = 'QUALCOSA';
whatever = 500;
var addition = function (num1, num2) {
    return num1 + num2;
};
addition(5, 4);
var variable = 500;
variable = 'Coccodrillo';
var specialGreetings = function (personName, greeting) {
    return ((greeting || 'Buongiorno') + ' ' + personName);
};
console.log(specialGreetings('Stefano', 'Buongiorno'));
var mixedArray = [3];
mixedArray.push('Ciao');
var mixedArray2 = [3];
mixedArray2.push('Pizza alla Banana');
var array1 = [];
var array2 = [];
var tuple1 = ['Ciao', 3, 'Buongiorno'];
mixedArray2.forEach(function (n) {
    typeof n === 'string' ? console.log(n.slice(0, 2)) : console.log(n);
});
var pet = { species: 'dog', name: 'Fido', age: 3 };
console.log(pet.species.concat('go'));
var pet2 = {
    species: 'Cat',
    name: 'Roxi',
    age: 3
};
var pet3 = {
    species: 'Tortoise',
    name: 'Donatello',
};
var teacher1 = {
    name: 'Stefano',
    modules: ['Javascript'],
    geoArea: {
        region: 'Lombardia',
        city: 'Milano'
    }
};
var teacher2 = {
    name: 'Luca',
    modules: ['Javascript'],
    geoArea: {
        region: 'Lombardia',
        city: 'Milano'
    }
};
var arrayOfTeachers = [];
arrayOfTeachers.push(teacher1);
arrayOfTeachers.push(teacher2);
var arrayOfModules = arrayOfTeachers.map(function (teacher) {
    return teacher.modules;
});
var backendTeacher1 = {
    name: 'Stefano',
    modules: ['Javascript'],
    language: ['Java'],
    geoArea: {
        region: 'Lombardia',
        city: 'Milano'
    }
};
var addr1 = {
    street: 'Via Roma',
    civicNumber: 13,
    cap: 12345,
    city: 'Milano',
    area: 'Lombardia'
};
var addr2 = {
    street: 'Corso Buenos Aires',
    civicNumber: '20B',
    cap: 20124,
    city: 'New York',
    area: {
        state: 'New York',
        country: 'United States'
    }
};
