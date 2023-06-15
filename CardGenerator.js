const numStartingCards = 5

const numPossibleCards = 2

testCardNames = ["card1", "card2"]

function GenerateCards() {
    for (let i = 0; i < numStartingCards; i++) {
        const randomIndex = Math.floor(Math.random() * testCardNames.length);
        const randomCard = testCardNames[randomIndex];
        
    }
}

GenerateCards();