const parentBox = document.querySelector(".parent-box")

const homePage = document.querySelector('.main')

parentBox.addEventListener('click',(e)=>{
    if(e.target.id === 'yellow'){
        homePage.style.backgroundColor = "yellow"
    }
    if(e.target.id === 'gray'){
        homePage.style.backgroundColor = "gray"
    }
    if(e.target.id === 'pink'){
        homePage.style.backgroundColor = "pink"
    }
    if(e.target.id === 'aliceblue'){
        homePage.style.backgroundColor = "aliceblue"
    }
})