const characters = [
    { name: 'Frodo', race: 'Hobbit'},
    { name: 'Sam', race: 'Hobbit'},
    { name: 'Aragorn', race: 'Man'},
    { name: 'Legolas', race: 'Elf'},
    { name: 'Gimli', race: 'Dwarf'},
    { name: 'Boromir', race: 'Man'},
    { name: 'Merry', race: 'Hobbit'},
    { name: 'Pippin', race: 'Hobbit'},
    { name: 'Gandalf', race: 'Ainur'},
]

//const hobbits = []

/*for (let i = 0; i < characters.length; i++) {
    if (character[i].race === 'Hobbit') {
        hobbits.push(characters[i])
    }
    
}*/

//    const hobbits = characters.filter(function (character) {
//        return character.race === 'Hobbit'
//    })

const isHobbit = character => character.race === 'Hobbit'

const hobbits = characters.filter(character => character.race === 'Hobbit')
 
console.log(hobbits)