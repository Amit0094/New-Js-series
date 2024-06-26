function createBox() {
    const rightBox = document.querySelector('.right')
    let boxNumber = 120
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let randomNumGen;
    for (let i = 0; i < boxNumber; i++) {
        randomNumGen = Math.floor(Math.random() * 10)
        const div = document.createElement('div')
        div.classList.add('circle')
        div.innerText = `${numbers[randomNumGen]}`
        rightBox.append(div)
    }
}

function refreshNumber(){
    const circles = document.querySelectorAll('.circle')
    circles.forEach((circle)=>{
        circle.innerText = Math.floor(Math.random() * 10)
    })
}

function randomNumGenberGenerator() {
    const randomNumGenber = Math.floor(Math.random() * 10)
    const randomNumGenberBox = document.querySelector('.number')
    randomNumGenberBox.innerText = `${randomNumGenber}`
    return randomNumGenber
}

function timer() {
    const timer = document.querySelector('.timer-span')
    let time = 60
    const intervalID = setInterval(() => {
        if (time === 0) {
            clearInterval(intervalID)
            document.querySelector('.right').style.visibility = "hidden"
            endGame()
        }
        timer.textContent = `${time}`
        time--
    }, 1000);
}

let correct = 0;
let wrong = 0;

function checkGuess() {
   
    const rightBox = document.querySelector('.right')
    const rightCounter = document.querySelector('.right_guess')
    const wrongCounter = document.querySelector('.wrong_guess')

    rightCounter.textContent = `${correct}`
    wrongCounter.textContent = `${wrong}`

    let randomNumGen = randomNumGenberGenerator()

    rightBox.addEventListener('click', (e) => {
        if (e.target.classList.contains('circle')) {
            if (parseInt(e.target.textContent) === randomNumGen) {
                refreshNumber()
                randomNumGen = randomNumGenberGenerator()
                correct++
                rightCounter.textContent = `${correct}`
            } else {
                refreshNumber()
                randomNumGen = randomNumGenberGenerator()
                wrong++
                wrongCounter.textContent = `${wrong}`
            }
        } else {
            alert('Try again')
        }
    })
}

function startNewGame(){
    const startGame = document.querySelector('.startGame')
    const endGameBox = document.querySelector('.end-game')
    const startBtn = document.createElement('button')
    startBtn.classList.add('startBtn')
    startBtn.textContent = `Start Game`
    startGame.appendChild(startBtn)
    const Start_Btn = document.querySelector('.startBtn')
    Start_Btn.addEventListener('click',()=>{
        document.querySelector('.right').style.visibility = "visible"
        timer()
        randomNumGen = randomNumGenberGenerator()
        Start_Btn.disabled = true;
        endGameBox.style.visibility = "hidden"
    })
}

function endGame(){
    const endGameBox = document.querySelector('.end-game')
    const Start_Btn = document.querySelector('.startBtn')
    endGameBox.style.visibility = "visible"
    endGameBox.innerHTML = `Game End Start Over \n `
    endGameBox.innerHTML += `<h4>Your right answer is ${correct} and wrong answer is ${wrong}</h4>`
    
    Start_Btn.disabled = false;

}

createBox()
// timer()
checkGuess()
startNewGame()
