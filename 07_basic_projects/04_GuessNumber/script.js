// 1st generate random number
let randomNumber = parseInt(Math.random()* 100 + 1)
// taking the submit button(note ki yahn button bhi input field hai )
const submit =  document.getElementById('subt')
// taking user input
const userInput =  document.getElementById('guessField')

const guessSlot =  document.querySelector('.guesses')
const remaining =  document.querySelector('.lastResult')
const lowOrHi =  document.querySelector('.lowOrHi')
const startOver =  document.querySelector('.resultParas');

const p = document.createElement('p') // ek para bnaya hai 

let prevGuess = [] // prev guesses ko hum array me dikha denge
let numGuess = 1 // counting kitne guesses hai 

let playGame = true // for every game such variable is there to play game

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess =  parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    })
}

function validateGuess(guess){ // to give validation whether entered value is between 1 & 100
    if(isNaN(guess)){
        alert('Please enter a Valid Number')
    }else if( guess < 1){
        alert('Please enter Number more than 1')

    }
    else if( guess > 100){
        alert('Please enter Number less than 100')

    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){ // to check ki random num ke equal to nhi guess
    if(guess === randomNumber){
        displayMessage(`You Guessed it right`)
        endGame()

    }
    else if(guess < randomNumber){
        displayGuess(`Your Guess is TOOO LOW`)

    } 
    else if( guess > randomNumber){
        displayGuess(`Your Guess is TOOO LOW`)

    }
}

function displayGuess(guess){ // saare values update krenge
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${10-numGuess}`
}

function displayMessage(message){ // win lose remaining chances wala msgs will be shown here
    lowOrHi.innerHTML = `<h2>${message} </h2>`

}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')//disabled attribute has to be set in key value pair
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton =  document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()* 100 + 1)
        prevGuess = [] // reset kr diya
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame= true
    })
}


