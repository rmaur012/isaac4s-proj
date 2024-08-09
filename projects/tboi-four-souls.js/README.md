# Tboi Four Souls.js

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

This library was created to provide a single package with all information regarding the Binding of Isaac: Four Souls card game. This is NOT the game itself, just think of this as 

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
- Information on every card pertaining to every deck in the game.

All information derived from the data at foursouls.com, as of 8/1/2024.
______________________
## Build

Run `ng build tboi-four-souls.js` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build tboi-four-souls.js`, go to the dist folder `cd dist/tboi-four-souls.js` and run `npm publish`.

## Running unit tests

Run `ng test tboi-four-souls.js` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
