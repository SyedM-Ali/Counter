
let count = 0
    document.querySelector(".circle").innerText = "Counter = 0"
    document.querySelector(".circle").addEventListener("click",()=>{
       count = count + 1
       console.log(count)
       document.querySelector(".circle").innerText = "Counter = "+count+""
        })

     document.querySelector(".undo").addEventListener("click",()=>{
        if(count > 0){
       count = count - 1
        }
       document.querySelector(".circle").innerText = "Counter = "+count+""
     })

  document.querySelector(".restart").addEventListener("click",()=>{
       count = 0
       console.log(count)
       document.querySelector(".circle").innerText = "Counter = "+count+""
    })
let nae = prompt("What do you want to count")
document.querySelector(".name").innerText = ""+nae+""
