# Tboi Four Souls.js

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

This library was created to provide a single package with all information regarding the Binding of Isaac: Four Souls card game. This is NOT the game itself, this is just all the cards pertaining to the game in a library that allows you to create each deck and be able to use them for your projects.

It contains:

- Classes for all types of cards and decks including:
    - Player Cards and Deck
    - Starting Item Cards and Deck
    - Monster Cards and Deck
    - Treasure Cards and Deck
    - Soul Cards and Deck
    - Loot Cards and Deck
    - Room Cards and Deck
- All classes share similar functions you expecct for decks like drawing from the top, shuffle, and being able to find or take out specific cards based on characteristics.
    - Some decks have more functions simply due to more information on those types of cards compared to the rest. Mainly the Monster deck but the others have some extra as well.
- Information on every card pertaining to every deck in the game, not including custom cards not listed.

All information derived from the data at foursouls.com, as of 8/1/2024.

Card Details:
 - 
Base Card Variables:
 - Origin Set (enum of string): 
    - Card set that the specific card originated from. Ex. GOLD_BOX_V2, REQUIEM, SUMMER_OF_ISAAC, etc.
 - Name (string): 
    - Name/Title of the card.
 - Card Type (enum of string): 
    - The type of card it is supposed to be. Ex. CHARACTER, MONSTER, LOOT, etc.
 - Effect Description (String): 
    - Effects that the card has. Anything that is within the section detailing the effects would go here. Multiple effects may be separated by a '|' character.
 - isTappable (boolean): 
    - Tells you is the card has some Tap effect within it. 
 - isPayable (boolean): 
    - Tells you if the card has a Pay effect within it.

Specific Card Variables:
 -  Character Card: 
    - eternal (string): 
        - Name of the eternal item that belongs to the card.
    - health (int): 
        - Amount of health of the character.
    - attack (int): 
        - Amount of attack of the character.
 - Monster Card: 
    - health (int): 
        - Amount of health of the character. All non-monster (event, curse, etc.) cards have -1 as the value for health.
    - diceRoll (int): 
        - minimum amount of dice roll to hit the monster. All non-monster (event, curse, etc.) cards have -1 as the value for the dice roll.
    - attack (int): 
        - Amount of attack the monster deals to the player. All non-monster (event, curse, etc.) cards have -1 as the value for the attack.
    - reward (enum of strings):  
        - String based off an enum that tells you the reward for killing this monster. All non-monster (event, curse, etc.) cards have a reward of NONE.
    - numOfSouls (int): 
        - Number of souls the monster card has. All cards with no souls have a value of 0.
    - isEvent (boolean): 
        - Determines whether the monster card is an event.
    - isCurse (boolean): 
        - Determines whether the monster card is a curse. 

 - Treasure Card: 
    - isGuppy (boolean): 
        - tells whether the card is a Guppy card or not.
 - Loot Card: 
    - isTrinket (boolean): 
        - tells whether the card is a trinket or not.


Deck Specific Details:
-
 - General Functions:
    - instantiate(): 
        - An abstract function that is implemented in all non-Base deck classes to create the specific deck.deck
    - shuffle(): 
        - Shuffle function that will perform a shuffle by swapping function into between 4-7 riffle shuffles to ensure shuffled deck.  
    - gettRandomCard(): 
        - Returns a rendom card from the specific deck while taking it out of the deck.
    - findCardByName(targetCardName: string): 
        - Searches the deck for a specific card but DOES NOT take it out of the deck.
    - getAllCardsByOriginSet(originSet: string): 
        - Returns an array of all cards with the given origin set in the deck but DOES NOT take the cards out of the deck.
    - getAllTappableCards(): 
        - Returns an array of all cards that have some tappable effect(s) in the deck but DOES NOT take the cards out of the deck.
    - getAllPayableCards(): 
        - Returns an array of all cards that have some payable effect(s) in the deck but DOES NOT take the cards out of the deck.
    - excludeCardsByOriginSet(excludeOriginSet: string): 
        - Filters out the cards in the deck to exclude the origin set provided.
    - peekCardsFromTop(peekAmount: number): 
        - Returns the top X cards from the top of the deck (index 0) but DOES NOT remove them from the deck.
    - drawCardsFromTop(drawAmount: number): 
        - Returns the top X cards from the top of the deck (index 0) but DOES remove them from the deck.
    - addCardsToTopOfDeck(cardsToAdd: T[]): 
        - Adds all the cards passed as parameters into the array to the TOP of the deck.
    - addCardsToBottomOfDeck(cardsToAdd: T[]): 
        - Adds all the cards passed as parameters into the array to the BOTTOM of the deck.

Specific Deck Functions:
- Character Deck:
    - findStartingItemForCharacter(charCard: PlayerCard, startingItemDeck: StartingItemDeck): 
        - Searches the startingItemDeck that is provided as a parameter and either returns a StartingItemCard if one is found, null, if the card is 'Eden' or undefined if no card was found.
- Monster Deck:
    - getAllCardsWithSouls(): 
        - Filters out all cards with no souls and returns an array of MonsterCards with at least 1 soul.
- Treasure Deck:
    - getAllGuppyItemCards(): 
        - Filters out all cards that are not Guppy cards and returns them in an array.

        

______________________

# General Angular Library Details Below

## Build

Run `ng build tboi-four-souls.js` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build tboi-four-souls.js`, go to the dist folder `cd dist/tboi-four-souls.js` and run `npm publish`.

## Running unit tests

Run `ng test tboi-four-souls.js` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
