//object methods

let getObj={
    company:"TCS",
    employess:125,
    place:"Hubli"
}

//entries
console.log("Before entries");
console.log(getObj);
let entries=Object.entries(getObj)
console.log("After entries");
console.log(entries);

console.log(getObj.company="infosys");
console.log(getObj);

let freez=Object.freeze(getObj);
console.log(freez);

console.log(getObj.place="chennai");
console.log(getObj);

console.log(getObj.sports="cricket");
console.log(getObj);

console.log(delete getObj.company);
console.log(getObj);

let a=Object.isFrozen(getObj)
console.log(a);

//seal
let sealobj={
    color:"red",
    team:"RCB"
}
let b1=Object.isSealed(sealobj);
console.log(b1);

let sealobj1=Object.seal(sealobj);
console.log(sealobj1);

console.log(sealobj.team="Mumbai");
console.log(sealobj);

console.log(delete sealobj.color);
console.log(sealobj);

console.log(sealobj.players=11);
console.log(sealobj);

let b=Object.isSealed(sealobj);
console.log(b);

//create
let createObj=Object.create(sealobj);
console.log(createObj);
console.log(createObj.id=100);
console.log(createObj);

console.log(createObj.color);

//object destructuring
let desObj={
    water:"tasteless",
    food:"tastefull"
}
let{water,food}=desObj;
console.log(water);
console.log(food);

function details({water,food})
{
    return water+food;
}
console.log(details(desObj));