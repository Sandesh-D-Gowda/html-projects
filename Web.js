// prompt("Enter your name")
// alert("Sandy is a Sports Player")
// confirm("its true")
// console.log(prompt("Enter your DOB"));
// console.log(typeof "Sandy");
// console.log(typeof 'Sandy');
// console.log(typeof `10+20`);
// console.log(`The final Value ${10+20}`);
// console.log(typeof String);
// console.log(typeof Number);
// console.log(typeof Boolean);
// let str="Sandy is Sports person"



// function circle(r){
//     console.log(2*r);
// }
// circle(Number(prompt("enter the number")));


// function rect(l,b){
//     console.log(l*b);
// }
// rect(Number(prompt("Enter the length")),Number( prompt("Enter the bredth")))


// function power(m,n){
//     var a=m**n;
//     return a;
// }
// console.log(power(Number(prompt("Enter m valve")),Number(prompt("Enter n value"))));




// console.log("Start");
// var a=10000;
// function parent(){
//     var a=1000;
//     console.log(this.a);

//     function child1(){
//         let b=300;
//         console.log(a);
//         console.log(this.a);

//         function child2(){
//             let x=500;
//             var z=3000;
//             console.log(b);

//             function last(){
//                 let nan=4000;
//                 console.log(x);
//                 console.log(z);
//             }
//             return last
//         }
//         return child2
//     }
//     return child1
// }
// parent()()()()



// function max(a,b,c,d){
//     return d(a,b,c)
// }
// let add=max(Number(prompt("enter value for a")),Number(prompt("enter value for b")),Number(prompt("enter the value for c")),function(a,b,c){
//     return a+b+c;
// })
// console.log(add);

// let sub=max(Number(prompt("enter value for a")),Number(prompt("enter value for b")),Number(prompt("enter the value for c")),function(a,b,c){
//     return a-b-c;
// })
// console.log(sub);

// let mul=max(Number(prompt("enter value for a")),Number(prompt("enter value for b")),Number(prompt("enter the value for c")),function(a,b,c){
//     return a*b*c;
// })
// console.log(mul);


//  function add(a,b){
//     return a+b;
//  }
//  var result=add("10","20");
//  console.log(result);


//*********Date Object*********
// let date=new Date()
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMonth());
// console.log(date.getSeconds());

// date.setFullYear(2010)
// console.log(date);

//********Math Object***********
// console.log(Math.sqrt(2000));
// console.log(Math.cbrt(2000));
// console.log(Math.ceil(22.2));
// console.log(Math.floor(22.9));
// console.log(Math.round(23.4));
// console.log(Math.random());
// console.log(Math.max(1,2,3,4,5));

//********BOM Methods**********
// console.log(window.close());
// console.log(window.screen);
// console.log(window.location.href);
// console.log(window.location.port);
// console.log(window.location.protocol);
// console.log(window.location.hostname);
// console.log(window.screen.colorDepth);

// ***********DOM**********
// let tags=document.createElement("h1")
// console.log(tags);
// document.body.appendChild(tags)
// tags.innerHTML="Sandy"
// document.body.style.backgroundColor="Goldenrod"
// tags.style.backgroundColor="Red"



// var table=document.createElement("table");
// var content=[
//     ["ID","001","002","003"],
//     ["Name","Sandy","Candy","Randy"],
//     ["Age","23","22","24"],
//     ["Status","Single","Single","Commited"]
// ]
// table.style.border="2px solid Black"

// for(var i=0;i<4;i++)
// {
//     var row=document.createElement("tr");
    
    
//     for(var j=0;j<3;j++)
//     {
//         var cell=document.createElement("td");
//         cell.textContent=content[j][i];
//         cell.style.border="2px solid Black"
//         row.appendChild(cell); 
//     }
//     table.appendChild(row);
//     document.body.appendChild(table);
    
// }



let gang=document.getElementById("max")

console.log(gang);
gang.innerHTML="Dinga";

gang.style.backgroundColor="Goldenrod";

let tags=document.getElementById("max")

console.log(tags);

// tags.innerHTML="nagesh"

tags.style.backgroundColor="green"

let tag=document.getElementsByTagName("h2")

console.log(tag);

tag[0].style.backgroundColor="red" 
tag[2].style.backgroundColor='green'

let ta=document.getElementsByClassName("my") 
console.log(ta);

let query=document.querySelector("#max") 
console.log(query);

let que=document.querySelectorAll("#max,.my") 
console.log(que );
