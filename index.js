// Code your solutions in this file
let cards = []
function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

function countDown(n) {
    while(n > -1) {
        console.log(n); n--;
    }
}