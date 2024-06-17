const boxes = document.querySelectorAll(".box")
const main = document.querySelector(".main")

boxes.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        // Approach - 1
        // main.style.backgroundColor = box.id

         // Approach - 2

        if(e.target.id === 'gray'){
            main.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'aliceblue'){
            main.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'pink'){
            main.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            main.style.backgroundColor = e.target.id
        }
    })
})