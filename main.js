
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

    // for (const dice of dices) {
    //     let totalScore = 50;

    //     for (i=1; i<=6; i++)
    //     {
    //     if (orderedDices(dices)[i - 1] === orderedDices(dices)[i]) {

    //         totalScore += dice.value;
    //     };
    // }
    // }
    // if(checkSuite())
    // {
    //     totalScore = 30;
    // }
    // else
    // {
    //     totalScore = 40;
    // };
}

window.addEventListener('load', () => {
    const button = document.querySelector('.btn-lance');
    if (button) {
        button.addEventListener('click', throwDices);
    }
})