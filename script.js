let input = document.getElementById('wordInput');
let btnCheck = document.getElementById('btnChecked');
let allOptions = document.querySelectorAll('.optionChoice input');
let wordDisplay = document.querySelector('.wordProposed');
let scoreDisplay = document.querySelector('.scoreDisplay');

let indexOfWord = 0;
let score = 0;

startGame();

//All of the functions are stored here

//function to start the game
function startGame() {
    let choice = [];
    

    choice = chooseWordOrPhrase();
    startLoop(choice);
}

//function to choose between the lists
function chooseWordOrPhrase() {
    allOptions.forEach(option => {
        if (option.checked) {
            optionChosen = option.value;
        }
    });
    
    if ( optionChosen === "1") {
        return choice = wordsList;
    } else {    
        return choice = phrasesList;
    }
}

//function to start the loop
function startLoop(choice) {
    if (indexOfWord < choice.length) {
        wordDisplay.textContent = 'Entrez le mot : ' + choice[indexOfWord];
    } else {
        showResult(score);
    }
}

btnCheck.addEventListener('click', function() {
    console.log('Le mot est : ' + choice[indexOfWord]);
    if (input.value === choice[indexOfWord]) {
        console.log('Bravo !');
        score += 1;
    } else {
        console.log('Désolé, le mot n\'est pas correct');
    }
    indexOfWord += 1;
    startLoop(choice);
});


//function to show the result
function showResult(score) {
    scoreDisplay.textContent = 'Votre score est de : ' + score  + ' sur ' + indexOfWord;
}   