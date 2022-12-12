// Define an interface that describes the shape of a `Card` object
interface Card {
  suit: string;
  value: number;
}

// Define a class that represents a deck of cards
class Deck {
  // Define a property that will hold the cards in the deck
  private cards: Card[] = [];

  // Define a method that creates a deck of 52 cards
  public createDeck(): void {
    // Create the four suits
    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];

    // Create the values for each card
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    // Loop through each suit
    for (const suit of suits) {
      // Loop through each value
      for (const value of values) {
        // Push a new `Card` object onto the `cards` array
        this.cards.push({ suit, value });
      }
    }
  }

  // Define a method that returns the number of cards in the deck
  public getNumCards(): number {
    return this.cards.length;
  }

  // Define a method that returns the top card from the deck
  public drawCard(): Card | undefined {
    return this.cards.pop();
  }
}

// Create a new `Deck` object
const deck = new Deck();

// Create the deck of cards
deck.createDeck();

// Print the number of cards in the deck
console.log(deck.getNumCards()); // Output: 52

// Draw a card from the deck and print it
const card = deck.drawCard();
if (card) {
  console.log(card); // Output: { suit: "Diamonds", value: 13 }
}
