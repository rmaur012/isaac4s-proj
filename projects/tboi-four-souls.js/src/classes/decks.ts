import { BaseCard, PlayerCard, SoulCard, StartingItemCard, TreasureCard } from "./cards";
import { playerCardInfo, startingItemCardInfo, soulCardInfo } from "./card-info";


// Abstract Class
abstract class BaseDeck {
  private _deck: BaseCard[];

  constructor(){
    if (this.constructor === BaseDeck) {
        throw new Error("Abstract classes can't be instantiated.");
    }
    if (this.instantiate === undefined) {
        throw new Error("Classes extending BaseDeck must implement 'instantiate' method.");
    }
    this._deck = [];
  }

  abstract instantiate(): void;

  shuffle() {
    // A common shuffle implementation for all decks
    var max = this._deck.length;
    for (let i = 0; i < max; i++) {
      const j = Math.floor(Math.random() * (max - i + 1)) + i;
      [this._deck[i], this._deck[j]] = [this._deck[j], this._deck[i]];
    }
  }

  getRandomCard(): BaseCard{
    return this._deck[Math.floor(Math.random() * (this._deck.length + 1))];
  }

  findCardByName(targetCardName: string){
    for(const card of this._deck){
      if(card.name.toLowerCase() === targetCardName.toLowerCase()){
        return card;
      }
    }
    return null;
  }

  getAllCardsByOriginSet(originSet: string): BaseCard[]{
    var cardsFound: BaseCard[] = [];
    for(const aCard of this._deck){
      if(aCard.originSet === originSet){
        cardsFound.push(aCard);
      }
    }
    return cardsFound;
  }

  getAllCardsThatAreTappable(): BaseCard[]{
    var cardsFound: BaseCard[] = [];
    for(const aCard of this._deck){
      if(aCard.isTappable === true){
        cardsFound.push(aCard);
      }
    }
    return cardsFound;
  }

  getAllCardsThatArePayable(): BaseCard[]{
    var cardsFound: BaseCard[] = [];
    for(const aCard of this._deck){
      if(aCard.isPayable === true){
        cardsFound.push(aCard);
      }
    }
    return cardsFound;
  }

  // Returns cards from the top without taking those cards out of the array
  peekCards(peekAmount: number): BaseCard[]{
    if(peekAmount > this._deck.length){
      peekAmount = this._deck.length;
    }

    var cardsPeeked: BaseCard[] = [];
    var indexFromTop = 0;
    while(indexFromTop < peekAmount){
      const card = this._deck[indexFromTop];
      if (card !== undefined) {
        cardsPeeked.push(card);
      }
      indexFromTop++;
    }
    return cardsPeeked;
  }

  // Take cards from deck from the front of the deck
  drawCards(drawAmount: number): BaseCard[]{
    if(drawAmount > this._deck.length){
      drawAmount = this._deck.length;
    }

    var cardsDrawn: BaseCard[] = [];
    while(drawAmount > 0){
      const card = this._deck.shift();
      if (card !== undefined) {
        cardsDrawn.push(card);
      }
      drawAmount--;
    }
    return cardsDrawn;
  }

  // Add cards to the deck at the end of the array
  addCardsToDeck(cardsToAdd: BaseCard[]): void{
    for(const card of cardsToAdd) {
      this._deck.push(card);
    }
  }

  protected resetDeckToEmpty() {
    this._deck = [];
  }

  // Getter
  get deck() {
    return this._deck;
  }

  // General Methods
  addOneCardToDeck(card: BaseCard){
    this._deck.push(card);
  }
}

export class PlayerDeck extends BaseDeck{
  private _basicPlayerEffect: string = 'Play an additional loot card this turn.';

  constructor() {
      super();
      this.instantiate();
  }

  instantiate() {
    this.resetDeckToEmpty();
    for (const cardInfo of playerCardInfo) {
      if(cardInfo[2] === ''){
        this.addOneCardToDeck(new PlayerCard(cardInfo[0].toString(), cardInfo[1].toString(), this._basicPlayerEffect, cardInfo[3].toString(), Number(cardInfo[4]), Number(cardInfo[5]))); 
      } else {
        this.addOneCardToDeck(new PlayerCard(cardInfo[0].toString(), cardInfo[1].toString(), cardInfo[2].toString(), cardInfo[3].toString(), Number(cardInfo[4]), Number(cardInfo[5])));
      }
    }
  }

  findStartingItemForCharacter(charCard: PlayerCard, startingItemDeck: StartingItemDeck): StartingItemCard | null{
    for(const startingItem of startingItemDeck.deck){
      if(startingItem.name === charCard.eternal){
        return startingItem;
      }
    }
    return null;
  }
}

export class StartingItemDeck extends BaseDeck{

  constructor() {
      super();
      this.instantiate();
  }

  instantiate() {
    this.resetDeckToEmpty();
    for (const cardInfo of startingItemCardInfo) {
      this.addOneCardToDeck(new StartingItemCard(cardInfo[0].toString(), cardInfo[1].toString(), cardInfo[2].toString(), Boolean(cardInfo[3]), Boolean(cardInfo[4])));
    }
  }
}

export class TreasureDeck extends BaseDeck{

  constructor() {
      super();
      this.instantiate();
  }

  instantiate() {
    this.resetDeckToEmpty();
    for (const cardInfo of playerCardInfo) {
      this.addOneCardToDeck(new TreasureCard(cardInfo[0].toString(), cardInfo[1].toString(), cardInfo[2].toString(), Boolean(cardInfo[3]), Boolean(cardInfo[4])));
    }
  }
}

export class SoulDeck extends BaseDeck{
  constructor() {
      super();
      this.instantiate();
  }

  // This is to set up the deck from the card info array. Not to add and remove cards from deck.
  instantiate() {
    this.resetDeckToEmpty();
    for (const cardInfo of soulCardInfo) {
      this.addOneCardToDeck(new SoulCard(cardInfo[0], cardInfo[1], cardInfo[2]));
    }
  }

}
