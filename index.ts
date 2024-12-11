

const myName: string = 'Stefano'
const myAge: number = 30

const anotherName = 'Mario'

let giorgio = 'giorgio'

giorgio = 'Non sono giorgio'

const mario = 3

let whatever: any = 'QUALCOSA'
whatever  = 500

const addition = (num1:number,num2:number) =>{
   return num1 + num2
}

addition(5,4)

let variable: string | number = 500
variable = 'Coccodrillo'

const specialGreetings = (personName: string, greeting?: string) => {
   return ((greeting || 'Buongiorno') + ' ' + personName)
}

console.log(specialGreetings('Stefano', 'Buongiorno'))

const mixedArray:(number |string)[] = [3]

mixedArray.push('Ciao')

type SpecialType = string | number

const mixedArray2:SpecialType[] = [3]

mixedArray2.push('Pizza alla Banana')


const array1:string[] = []
const array2: Array<string> = []

const tuple1: [string,number,string] = ['Ciao',3,'Buongiorno']

mixedArray2.forEach(n => {
   typeof n === 'string' ? console.log(n.slice(0,2)) : console.log(n)
});


const pet = {species: 'dog', name: 'Fido', age: 3}

console.log (pet.species.concat('go'))

interface Pet {
   species: string,
   name: string,
   age?: number
}

const pet2: Pet = {
   species: 'Cat',
   name: 'Roxi',
   age: 3
}

const pet3:Pet ={
   species: 'Tortoise',
   name: 'Donatello',
   
}

interface EpicodeTeacher {
   name : string,
   modules: string[],
   geoArea?: {
      region: string,
      city: string
   }
}

const teacher1: EpicodeTeacher = {
   name: 'Stefano',
   modules: ['Javascript'],
   geoArea: {
      region: 'Lombardia',
      city: 'Milano'
   }
}
const teacher2: EpicodeTeacher = {
   name: 'Luca',
   modules: ['Javascript'],
   geoArea: {
      region: 'Lombardia',
      city: 'Milano'
   }
}

const arrayOfTeachers:EpicodeTeacher[] = []
arrayOfTeachers.push(teacher1)
arrayOfTeachers.push(teacher2)

const arrayOfModules:string[][] = arrayOfTeachers.map((teacher) => {
   return teacher.modules
})

interface EpicodeBackendTeacher extends EpicodeTeacher {
   language: string[]
}

const backendTeacher1: EpicodeBackendTeacher={
   name: 'Stefano',
   modules: ['Javascript'],
   language: ['Java'],
   geoArea: {
      region: 'Lombardia',
      city: 'Milano'
   }
}

interface AmericanArea{
   state: string,
   country: string
}

interface Address<T> {
   street: string,
   civicNumber: number | string,
   cap: number,
   city: string,
   area: T
}



const addr1: Address<string> ={
   street: 'Via Roma',
   civicNumber: 13,
   cap: 12345,
   city: 'Milano',
   area: 'Lombardia'
}
const addr2: Address<AmericanArea> = {
   street: 'Corso Buenos Aires',
   civicNumber: '20B',
   cap: 20124,
   city: 'New York',
   area: {
      state: 'New York',
      country: 'United States'
   }
   
}
