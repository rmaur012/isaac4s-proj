import { BaseCard, LootCard, MonsterCard, PlayerCard, RoomCard, SoulCard, StartingItemCard, TreasureCard } from "./cards";
import { playerCardInfo, startingItemCardInfo, soulCardInfo, monsterCardInfo, lootCardInfo, roomCardInfo, treasureCardInfo } from "../data/card-info";


// Abstract Class
abstract class BaseDeck<T extends BaseCard> {
  private _deck: T[];

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
    // Initial full deck shuffle to simulate a wash shuffle
    this.washShuffle();

    // Multiple riffle shuffles since it's a really efficient shuffle if done multiple times
    // We want between 4-7 shuffles
    const max = 7, min = 4;
    var numOfShuffles = Math.floor(Math.random() * (max - min) + min);
    while(numOfShuffles > 0){
      this.riffleShuffle();
      numOfShuffles--;
    }
   }

  private washShuffle(){
    // Fisher-Yates Shuffle
    for (let i = this._deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this._deck[i], this._deck[j]] = [this._deck[j], this._deck[i]];
    }
  }

  private riffleShuffle(){
    var finalDeck = [];
    var firstStack = this._deck.slice(0, Math.floor(this._deck.length/2));
    var secondStack = this._deck.slice(Math.floor(this._deck.length/2), this._deck.length-1);
    const maxLength = firstStack.length > secondStack.length ? firstStack.length : secondStack.length ;

    var index = 0;
    while(index < maxLength){
      if(index < firstStack.length){
        finalDeck.push(firstStack[index]);
      }
      if(index < secondStack.length){
        finalDeck.push(secondStack[index]);
      }
      index = index + 1;
    }
    this._deck = finalDeck;
  }

  getRandomCard(): T{
    return this._deck[Math.floor(Math.random() * (this._deck.length + 1))];
  }

  findCardByName(targetCardName: string){
    return this._deck.find((card) => card.name.toLowerCase() === targetCardName.toLowerCase());
  }

  getAllCardsByOriginSet(originSet: string): T[]{
    var cardsFound: T[] = this._deck.filter((card) => card.originSet == originSet);
    return cardsFound;
  }

  getAllTappableCards(): BaseCard[]{
    var cardsFound: BaseCard[] = this._deck.filter((card) => card.isTappable == true);
    return cardsFound;
  }

  getAllPayableCards(): BaseCard[]{
    var cardsFound: BaseCard[] = this._deck.filter((card) => card.isPayable == true);
    return cardsFound;
  }

  excludeCardsByOriginSet(excludeOriginSet: string){
    this._deck = this._deck.filter((card) => card.originSet != excludeOriginSet);
  }

  // Returns cards from the top without taking those cards out of the array
  peekCardsFromTop(peekAmount: number): BaseCard[]{
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
  drawCardsFromTop(drawAmount: number): BaseCard[]{
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

  // Add cards to the top by concatonating the two arrays
  addCardsToTopOfDeck(cardsToAdd: T[]): void{
    cardsToAdd.push(...this._deck);
    this._deck = cardsToAdd;
  }

  // Add cards to the deck at the end of the array
  addCardsToBottomOfDeck(cardsToAdd: T[]): void{
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
  protected addOneCardToBottomOfDeck(card: T){
    this._deck.push(card);
  }
}

export class PlayerDeck extends BaseDeck<PlayerCard>{
  private _basicPlayerEffect: string = 'Play an additional loot card this turn.';

  constructor() {
      super();
      this.instantiate();
  }

  instantiate() {
    this.resetDeckToEmpty();
    for (const cardInfo of playerCardInfo) {
      if(cardInfo[2] === ''){
        this.addOneCardToBottomOfDeck(new PlayerCard(cardInfo[0].toString(), cardInfo[1].toString(), this._basicPlayerEffect, cardInfo[3].toString(), Number(cardInfo[4]), Number(cardInfo[5]))); 
      } else {
        this.addOneCardToBottomOfDeck(new PlayerCard(cardInfo[0].toString(), cardInfo[1].toString(), cardInfo[2].toString(), cardInfo[3].toString(), Number(cardInfo[4]), Number(cardInfo[5])));
      }
    }
  }

  findStartingItemForCharacter(charCard: PlayerCard, startingItemDeck: StartingItemDeck): StartingItemCard | null | undefined{
    if(charCard.name === 'Eden'){ // Eden has no starting item
      return null;
    }
    return startingItemDeck.deck.find((card) => card.name === charCard.eternal);
  }
}

export class StartingItemDeck extends BaseDeck<StartingItemCard>{

  constructor() {
      super();
      this.instantiate();
  }

  instantiate() {
    this.resetDeckToEmpty();
    for (const cardInfo of startingItemCardInfo) {
      this.addOneCardToBottomOfDeck(new StartingItemCard(cardInfo[0].toString(), cardInfo[1].toString(), cardInfo[2].toString(), Boolean(cardInfo[3]), Boolean(cardInfo[4])));
    }
  }
}

export class MonsterDeck extends BaseDeck<MonsterCard>{
  constructor() {
      super();
      this.instantiate();
  }

  // This is to set up the deck from the card info array. Not to add and remove cards from deck.
  instantiate() {
    this.resetDeckToEmpty();
    for (const cardInfo of monsterCardInfo) {
      this.addOneCardToBottomOfDeck(new MonsterCard(cardInfo[0].toString(), cardInfo[1].toString(), cardInfo[2].toString(), Number(cardInfo[3]), Number(cardInfo[4]),Number(cardInfo[5]), cardInfo[6].toString(), Number(cardInfo[7]), Boolean(cardInfo[8]), Boolean(cardInfo[9])));
    }
  }

  getAllCardsWithSouls(): MonsterCard[]{
    var cardsFound: MonsterCard[] = this.deck.filter((card) => card.numOfSouls > 0);
    return cardsFound;
  }
}

export class TreasureDeck extends BaseDeck<TreasureCard>{

  constructor() {
      super();
      this.instantiate();
  }

  instantiate() {
    this.resetDeckToEmpty();
    for (const cardInfo of treasureCardInfo) {
      this.addOneCardToBottomOfDeck(new TreasureCard(cardInfo[0].toString(), cardInfo[1].toString(), cardInfo[2].toString(), Boolean(cardInfo[3]), Boolean(cardInfo[4]),  Boolean(cardInfo[5])));
    }
  }

  getAllGuppyItemCards(): TreasureCard[]{
    var cardsFound: TreasureCard[] = this.deck.filter((card) => card.isGuppy == true);
    return cardsFound;
  }
}

export class SoulDeck extends BaseDeck<SoulCard>{
  constructor() {
      super();
      this.instantiate();
  }

  // This is to set up the deck from the card info array. Not to add and remove cards from deck.
  instantiate() {
    this.resetDeckToEmpty();
    for (const cardInfo of soulCardInfo) {
      this.addOneCardToBottomOfDeck(new SoulCard(cardInfo[0], cardInfo[1], cardInfo[2]));
    }
  }
}

export class LootDeck extends BaseDeck<LootCard>{
  constructor() {
      super();
      this.instantiate();
  }

  // This is to set up the deck from the card info array. Not to add and remove cards from deck.
  instantiate() {
    this.resetDeckToEmpty();
    for (const cardInfo of lootCardInfo) {
      this.addOneCardToBottomOfDeck(new LootCard(cardInfo[0].toString(), cardInfo[1].toString(), cardInfo[2].toString(), Boolean(cardInfo[3])));
    }
  }

  // Function that will make a deck with the number of cards a deck is supposed to come with, instead of one of each card. Ex. Create the right number of 1 cent cards, 2 cent cards, etc.
  //generatePlayingDeck()
}

export class RoomDeck extends BaseDeck<RoomCard>{
  constructor() {
      super();
      this.instantiate();
  }

  // This is to set up the deck from the card info array. Not to add and remove cards from deck.
  instantiate() {
    this.resetDeckToEmpty();
    for (const cardInfo of roomCardInfo) {
      this.addOneCardToBottomOfDeck(new RoomCard(cardInfo[0].toString(), cardInfo[1].toString(), cardInfo[2].toString(), Boolean(cardInfo[3])));
    }
  }
}
