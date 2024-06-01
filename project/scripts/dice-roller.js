document.querySelectorAll('.add-dice').forEach(button => {
    button.addEventListener('click', () => addDice(button.getAttribute('data-type')));
});
document.getElementById('remove-dice').addEventListener('click', removeDice);
document.getElementById('roll-dice').addEventListener('click', rollDice);
document.getElementById('clear-dice').addEventListener('click', clearDice);
document.getElementById('sum-dice').addEventListener('click', sumDice);

function addDice(type) {
    const diceContainer = document.getElementById('dice-container');
    const dice = document.createElement('div');
    dice.classList.add('dice');
    dice.setAttribute('data-type', type);
    dice.innerHTML = `
        <svg viewBox="0 0 100 100" class="dice-svg">
        ${getDiceShape(type)}
            <text x="50" y="50" text-anchor="middle" alignment-baseline="middle" font-size="30" id="dice-number">d${type}</text>
        </svg>
    `;
    diceContainer.appendChild(dice);
}

function removeDice() {
    const diceContainer = document.getElementById('dice-container');
    if (diceContainer.lastChild) {
        diceContainer.removeChild(diceContainer.lastChild);
    }
}

function rollDice() {
    const diceElements = document.querySelectorAll('.dice');
    diceElements.forEach(dice => {
        const type = dice.getAttribute('data-type');
        const number = Math.floor(Math.random() * type) + 1;
        dice.querySelector('#dice-number').textContent = number;
    });
}

function clearDice() {
    const diceContainer = document.getElementById('dice-container');
    diceContainer.innerHTML = '';
    updateSum(0);
}

function sumDice() {
    const diceElements = document.querySelectorAll('.dice');
    let sum = 0;
    diceElements.forEach(dice => {
        const number = parseInt(dice.querySelector('#dice-number').textContent, 10);
        if (!isNaN(number)) {
            sum += number;
        }
    });
    updateSum(sum);
}

function updateSum(sum) {
    document.getElementById('sum-result').textContent = `Total: ${sum}`;
}

function getDiceShape(type) {
    switch (type) {
        case '4':
            return `
                <polygon points="50,5 10,90 90,90" style="fill:white;stroke:black;stroke-width:2"/>
            `;
        case '6':
            return `
                <rect x="10" y="10" width="80" height="80" rx="10" ry="10" style="fill:white;stroke:black;stroke-width:2"/>
            `;
        case '8':
            return `
                <polygon points="50,5 95,50 50,95 5,50" style="fill:white;stroke:black;stroke-width:2"/>
            `;
        case '10':
            return `
                <polygon points="50,5 90,30 90,70 50,95 10,70 10,30" style="fill:white;stroke:black;stroke-width:2"/>
            `;
        case '12':
            return `
                <polygon points="50,5 90,25 75,90 25,90 10,25" style="fill:white;stroke:black;stroke-width:2"/>
            `;
        case '20':
            return `
                <polygon points="50,5 75,15 90,40 85,70 65,90 35,90 15,70 10,40 25,15" style="fill:white;stroke:black;stroke-width:2"/>
            `;
        default:
            return '';
    }
}