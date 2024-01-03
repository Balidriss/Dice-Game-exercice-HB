
class Dice {
    value;
    img;
    isSelected;

    constructor() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.img = 'assets/' + this.value + '.png';
        this.isSelected = false;
    }
}


function throwDices() {
    let dices = [];
    const divDice = document.querySelector('.dice');
    divDice.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        const dice = new Dice();
        dices.push(dice);
        const img = document.createElement('img');
        img.classList.add('img-fluid');
        img.setAttribute('src', dice.img);
        divDice.appendChild(img);
    }
    calculateScore(dices);
}






function calculateScore(dices) {
    // si : brelan somme des dés (3 dés égaux)
    // si : carré somme des dés (4 dés égaux)
    // si : full (3 dés et 2 égaux) => 25pts
    // si 5 dés égaux => 50pts
    // si petite suite (4 dés à la suite) => 30pts
    // si grande suite (5 dés à la suite) => 40pts

    let isFiveOfAKind = false;
    let isFull = false;
    let isLargeStraight = false;
    let isSmallStraight = false;

    // Calculate score based on combinations
    let score = 0;

    if (isFiveOfAKind) {
        score = 50;
    } else if (isFull) {
        score = 25;
    } else if (isSmallStraight) {
        score = 30;
    } else if (isLargeStraight) {
        score = 40;
    } else {
        // Check for 4 of a kind and 3 of a kind

    }

    console.log('Score:', score);
    const divDice = document.querySelector('.dice');
    const scoreContent = document.createElement('h2');
    divDice.appendChild(scoreContent);
    scoreContent.innerText = score;

}

window.addEventListener('load', () => {
    const button = document.querySelector('.btn-lance');
    if (button) {
        button.addEventListener('click', throwDices);
    }
})