
let a = 1;

//console.log(a);

let myInteger = 1;
let myDouble = 2.1;
let myString = "PAblo";
let myBoolean = true;

myDouble = "cadena";

function log(msg){
    console.log(msg);
}

log("test");


let o = new Object();
let arr = new Array();
let m = new Map();
let numbers2 = [];

numbers[0] = 1;
numbers[2]= 2;
numbers.push(3);

log(numbers);

let contact2 = {name: 'Luis', phone: 23456};


let list = 
    [{name: 'luis', phone: 12345},
     {name:'df', phone: 648646},
     {name:'juan', phone: 695859517},
     {name: 'dani', phone: 6548654}];

function search(list,searchString){
    return list.filter((n)=> n.name.match(searchString));
}
