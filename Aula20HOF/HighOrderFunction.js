//function greet(name) {
    //return `Hello, ${name}`
//}

const greet = (name) => `Hello, ${name}`

function speakToMary(dialog) {
    const text = dialog('Mary')
    return `He says "${text}"`
}



console.log

console.log(speakToMary(name => {
    return `GoodBye, ${name}`
}) )