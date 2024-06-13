// let max=document.getElementById("max")
// max.addEventListener('click',()=>{
//     let msg=document.createElement('p');
//     msg.textContent="Darshan is Cuteboy"
//     document.body.appendChild(msg);
// })

// let rio=document.getElementById("rio")
// let ram=document.getElementById("ram")
// let sam=document.getElementById("sam")
// let bam=document.getElementById("bam")
// rio.addEventListener('click',()=>{
//     document.body.style.backgroundColor=""
//     ram.style.border="1px solid black"
//     ram.style.height="100px"
//     ram.style.width="100px"
//     ram.innerHTML=`<img height="100px" width="100px" src="https://th.bing.com/th/id/OIP.O0l9fWwhZIddgsKeQFPsmgHaFj?w=242&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="">`
//     ram.style.transitionDuration="2s"
//     ram.style.transform="scale(0.4)"

//     document.body.style.backgroundColor=""
//     sam.style.border="1px solid black"
//     sam.style.height="100px"
//     sam.style.width="100px"
//     sam.innerHTML=`<img height="100px" width="100px" src="https://th.bing.com/th/id/OIP.O0l9fWwhZIddgsKeQFPsmgHaFj?w=242&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="">`
//     sam.style.transitionDuration="2s"
//     sam.style.transform="scale(0.4)"

//     document.body.style.backgroundColor=""
//     bam.style.border="1px solid black"
//     bam.style.height="100px"
//     bam.style.width="100px"
//     bam.innerHTML=`<img height="100px" width="100px" src="https://th.bing.com/th/id/OIP.O0l9fWwhZIddgsKeQFPsmgHaFj?w=242&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="">`
//     bam.style.transitionDuration="2s"
//     bam.style.transform="scale(0.4)"
// })


// let nax=document.getElementById("nax")
// nax.addEventListener('submit',(e))


// let text=document.getElementById('text')
// let play=document.getElementById('play')
// let range=document.getElementById('range')

// play.addEventListener('click',()=>{
//     max(text.value)

// })

// function max(talk){
//     let speech=new SpeechSynthesisUtterance(talk)
//     speechSynthesis.speak(speech)
//     speech.rate=range.value

// }

// let max=document.getElementById("max")
// max.addEventListener('submit',(e)=>{

//     e.preventDefault()
//     let text=document.getElementById('text').value
//     let disp=document.getElementById("disp")
//     disp.innerHTML=`the req output is ${text}`
// })



// let form=document.getElementById("fo")
// fo.addEventListner('submit',(e)=>{
//     e.preventDefault()
//     let name=document.getElementById("name")
//     let age=document.getElementById("age")
//     let pass=document.getElementById("pass")
//     let table=document.getElementById("t")
//     table.innerHTML=`<table style="border: 2px solid red; padding: 0; margin: 0;" cellspacing="0" border="1px">
//     <tr>
//         <th>Name</th>
//         <th>Age</th>
//         <th>Password</th>
//     </tr>
//     <tr>
//         <td id="n">${name.value}</td>
//         <td id="a">${age.value}</td>
//         <td id="p">${pass.value}</td>
//     </tr>
//     </table>`
//     let n=new SpeechSynthesisUtterance(`Name is ${name.value}`)
//     let a=new SpeechSynthesisUtterance(`Age is ${age.value}`)
//     let p=new SpeechSynthesisUtterance(`Password is ${pass.value}`)
//     speechSynthesis.speak(n)
//     speechSynthesis.speak(a)
//     speechSynthesis.speak(p)
// })



// let form=document.getElementById('form')

// form.addEventListener("submit",(x)=>{
    
//     x.preventDefault()
//     let text=document.getElementById('text').value
//     let age=document.getElementById('age').value
//     let password=document.getElementById('pass').value
    
//     let name=document.getElementById('name')
//     let age1=document.getElementById('age1')
//     let pass1=document.getElementById('pass1')

//     name.innerHTML=`${text}`
//     age1.innerHTML=`${age}`
//     pass1.innerHTML=`${password}`

// })




let text=document.getElementById('text')
text.addEventListener("keydown",()=>{

   let random=Math.floor(Math.random()*1234567).toString(12)
   document.body.style.backgroundColor=`#${random}`

})

text.addEventListener("keyup",()=>{

    let random=Math.floor(Math.random()*1234567).toString(12)
    document.body.style.backgroundColor=`#${random}`
 
 })