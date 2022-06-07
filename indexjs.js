let log = console.log
let table = console.table


class PlayerCharacter {
    constructor(playerName, pcName, level, race, subrace, pcClass, subclass, strength, dexterity, constitution, inteligence, wisdom, charisma) {
        this.playerName = playerName;
        this.pcName = pcName;
        this.level = level;
        this.race = race;
        this.subrace = subrace;
        this.pcClass = pcClass;
        this.subclass = subclass;
        this.stength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.inteligence = inteligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
    }
}


let newPlayer = new PlayerCharacter('Kyle', 'Damien', 5, 'human', 'variant', 'rogue', 'arcane trickster', 10, 16, 12, 10, 10, 14)

class CharacterStats {
    constructor(strength, dexterity, constitution, inteligence, wisdom, charisma) {
        this.stength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.inteligence = inteligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
    }
    statModifier() {

    }
}



const getInitiative = (player) => {
    dex = player.dexterity
    log(dex)
}

let Damien = new CharacterStats(10, 16, 12, 10, 10, 14)