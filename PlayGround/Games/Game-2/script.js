let randomNum = parseInt(Math.random()*100+1)
console.log(randomNum);

const userInput = document.querySelector("#guessField")
const submit = document.querySelector("#subt")
const guessSlot = document.querySelector(".guesses")
const remainingGuess = document.querySelector(".lastResult")

const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = []
let attempt = 1
let playGame = true


if(playGame){
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number")
    }else if(guess > 100){
        alert("please enter the number lower than or equal to 100")
    }else if(guess < 1){
        alert("please enter the number greater than or equal to 1")
    }else{
        prevGuess.push(guess)
        if(attempt === 11){
            displayGuess(guess)
            displayMessage(`Game Over , Random number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess < randomNum){
        displayMessage(`Number is Tooo Low`)
    }else if(guess > randomNum){
        displayMessage(`Number is Tooo High`)
    }
}

// main task is to clean the userInput section after submiting the number and also manipulate the number like ( prevGuess , remainingGuess and increment attempt )

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess}, `
    attempt++;
    remainingGuess.innerHTML = attempt <= 10?`${11 - attempt}`:`0`
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="startBtn">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const startNewGame = document.querySelector("#startBtn")
    startNewGame.addEventListener('click',(e)=>{
        randomNum = parseInt(Math.random()*100+1)
        prevGuess = []
        attempt = 1
        remainingGuess.innerHTML = `${11 - attempt}`
        startOver.removeChild(p)
        userInput.removeAttribute("disabled")
        guessSlot.innerHTML = ''
        lowOrHi.innerHTML = ''
        playGame = true
    })
}