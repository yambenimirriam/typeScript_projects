let age: number = 20;
if (age <50)
   age += 10;
console.log(age);

// // Built-in-types
let course = 'TypeScript';
let is_publishes = true;

// the any type(avoid using this cos it's a bad practice)
let level;
level = 2; 

function render(document: any) {

   console.log(document);
}

// arrays
let numbers: number[] = [];
numbers.forEach( n => n.toExponential)// just an example they are many
// or
let number = [1, 2, 3];

// tuples
let user:[number, string] = [1, 'mimie'];

// enums
// pascalCase
enum Size {Small = 1, Medium, Large};
let mySize:Size = Size.Medium;
console.log(mySize);

// functions(you can use '?' to show optional 
//that anyone can put anything they want on that variable)
function calculateTax(income: number, taxYear = 2023) : number{
   if (taxYear < 2023)
     return income * 2;
   return income * 3;
}

calculateTax(20000);

// objects
let employee : {
   readonly id : number,
   name : string,
   retire: (date : Date) => void
} = {
   id: 1,
   name: 'mimie',
   retire: (date: Date) =>{
      console.log(date);
      
   }
};

// type aliases(this object can be reused)
type Employee = {
   readonly id : number,
   name : string,
   retire: (date : Date) => void
}
let employe :Employee = {
   id: 1,
   name: 'mimie',
   retire: (date: Date) =>{
      console.log(date);
      
   }
   
}

//union types can be used to set a variable or function of many types

// intersection type
type Draggable = {
   drag : () => void
};

type Resiazable = {
   resize : () => void
}

type UIWidget = Draggable & Resiazable;
let textBox : UIWidget = {
   drag : ()  => {},
   resize :() => {}
}

//literal variables(exact or specific)
type Quantity = 50 | 100;
let quantity : Quantity = 50;

type Matrices = 'cm'| 'inches'; // they can also strings

// nullable types
function greet(name: string | null | undefined) {
  if (name)
   console.log(name.toLocaleUpperCase());
 else
  console.log('Hello');
  
}
greet(undefined);

// optional chaining
type Customer = {
   birthday?: Date
}
function getCustomer(id: number): Customer | null | undefined{
   return id === 0 ? null : { birthday : new Date ()};
}

let Customer = getCustomer(1);
//optional property access opertaor
console.log(Customer?.birthday?.getFullYear());

// optional element access operator 
//customer?.[0]

//optional call
let log: any = null;
log?.('a');
