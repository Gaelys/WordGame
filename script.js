startGame();

//All of the functions are stored here

//function to start the game
function startGame() {
    let score = 0;
    let choice = [];
    let choicePrompt = prompt('Choisissez la liste "mots" ou "phrases" ?');

    choice = chooseWordOrPhrase(choicePrompt);
    score = startLoop(choice);
    showResult(score);
}

//function to choose between the lists
function chooseWordOrPhrase(choicePrompt) {
    while (choicePrompt !== 'mots' && choicePrompt !== 'phrases') {
        choicePrompt = prompt('Vous devez écrire "mots" ou "phrases" ?');
    }
    
    if (choicePrompt === 'mots') {
        return choice = wordsList;
    } else {    
        return choice = phrasesList;
    }
}

//function to start the loop
function startLoop(choice) {
    let score = 0;

    for (let i = 0; i < choice.length; i++) {
        let inputedWord = prompt('Entrez le mot : ' + choice[i]);
        
        if (inputedWord === choice[i]) {
            console.log('Bravo !');
            score += 1;
        } else {
            console.log('Désolé, le mot n\'est pas correct');
        }
    }
    return score;
}

//function to show the result
function showResult(score) {
    console.log('Votre score est de : ' + score);
}   