let log = console.log
let table = console.table

class PlayerCharacter {
    constructor(playerName, characterName, pcClass, subclass, level, strength, dexterity, constitution, inteligence, wisdom, charisma) {
        this.playerName = playerName;
        this.characterName = characterName;
        this.pcClass = pcClass;
        this.subclass = subclass;
        this.level = level;
        this.stength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.inteligence = inteligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
    }
}

// this code is for opening and closing the add player modal-------------------

let pcModal = document.getElementById('pcModal');
let button = document.getElementById('Modalbutton');
let closeModal = document.getElementById('modalClose');

button.onclick = function () {
    pcModal.style.display = 'block';
    document.getElementById('addButton').addEventListener('click', addNewPlayer);
}

closeModal.onclick = function () {
    pcModal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == pcModal) {
        pcModal.style.display = 'none';
    }
}


class myNewCharacter {
    constructor(playerName, characterName) {
        this.playerName = playerName;
        this.characterName = characterName;
    }
}


const addNewPlayer = (event) => {
    event.preventDefault();
    let newPC = {
        playerName: document.getElementById('playerName').value,
        characterName: document.getElementById('characterName').value,
        // playerClass: document.getElementById('playerClass').value,
        // subClass: document.getElementById('subClass').value,
        // playerLevel: document.getElementById('classLevel').value,
        // strength: document.getElementById('strength').value,
        // dexterity: document.getElementById('dexterity').value,
        // consitution: document.getElementById('constitution').value,
        // inteligence: document.getElementById('inteligence').value,
        // wisdom: document.getElementById('wisdom').value,
        // charisma: document.getElementById('charisma').value
    }

    getKeyValues(newPC)

    document.forms[0].reset();
    pcModal.style.display = 'none';
    console.warn('add', newPC);
}

const getKeyValues = (input) => {
    for (let [key, value] of Object.entries(input)) {
        return value
    }
}



const newStatBlock = (input, myID) => {
    const statDiv = document.createElement('article');
    statDiv.setAttribute('id', myID)
    const statContent = document.createTextNode(input);
    statDiv.appendChild(statContent);
    const currentDiv = document.getElementById('statBlocks');
    document.getElementById('statBlocks').appendChild(statDiv, currentDiv)
}





// let newPlayer = new PlayerCharacter('Kyle', 'Damien', 5, 'human', 'variant', 'rogue', 'arcane trickster', 10, 16, 12, 10, 10, 14)

// class CharacterStats {
//     constructor(strength, dexterity, constitution, inteligence, wisdom, charisma) {
//         this.stength = strength;
//         this.dexterity = dexterity;
//         this.constitution = constitution;
//         this.inteligence = inteligence;
//         this.wisdom = wisdom;
//         this.charisma = charisma;
//     }
//     statModifier() {

//     }
// }



// const getInitiative = (player) => {
//     dex = player.dexterity
//     log(dex)
// }

// let Damien = new CharacterStats(10, 16, 12, 10, 10, 14)