export const CARD_TYPES = {
  CHARACTER: "CHARACTER",
  STARTING_ITEM: "STARTING ITEM",
  MONSTER: "MONSTER",
  TREASURE: "TREASURE",
  SOUL: "SOUL",
  LOOT: "LOOT",
  ROOM: "ROOM"
}

export const ORIGIN_SET = {
  BASE_V2: 'BASE V2',
  FOUR_SOULS_PLUS_V2: 'FOUR SOULS+ V2',
  REQUIEM: 'REQUIEM',
  GOLD_BOX_V2: 'GOLD BOX V2',
  SUMMER_OF_ISAAC: 'SUMMER OF ISAAC',
  REQUIEM_WARP_ZONE: 'REQUIEM WARP ZONE',
  ALT_ART: 'ALT ART',
  TARGET: 'TARGET',
  GISH: 'GISH',
  TAPEWORM: 'TAPEWORM',
  DICK_KNOTS: 'DICK KNOTS',
  G_FUEL: 'G-FUEL',
  RETRO: 'RETRO',
  UNBOXING_OF_ISAAC: 'THE UNBOXING OF ISAAC',
  PROMOS: 'PROMOS',
  YOUTOOZ: 'YOUTOOZ',
  CHALLENGES: 'CHALLENGES'
}

export const MONSTER_KILL_REWARDS = {
  NONE: "No reward.",
  LOOT1: 'Loot 1',
  LOOT2: 'Loot 2',
  LOOT3: 'Loot 3',
  LOOT4: 'Loot 4',
  LOOT5: 'Loot 5',
  LOOT6: 'Loot 6',
  LOOT10: 'Loot 10',
  LOOT_COUNTER: 'Loot 1 For Each Counter On This',
  LOOT3ANDGAIN6CENTS: 'Loot 3 + Gain 6¢',
  HEART:'<3',
  CENTS_ONE: '1¢',
  CENTS_TWO: '2¢',
  CENTS_THREE: '3¢',
  CENTS_FOUR: '4¢',
  CENTS_FIVE: '5¢',
  CENTS_SIX: '6¢',
  CENTS_SEVEN: '7¢',
  CENTS_EIGHT: '8¢',
  CENTS_NINE: '9¢',
  CENTS_TEN: '10¢',
  CENTS_EIGHTEEN: '18¢',
  CENTS_TWENTY_FIVE: '25¢',
  CENTS_FOURTY: '40¢',
  EXTRATURN: 'Take An Extra Turn After This One',
  ROLL_FOR_CENTS: 'Roll- Gain X ¢',
  ROLL_FOR_LOOT: 'Roll- Loot X',
  PLUS1TREASURE: '+1 Treasure',
  PLUS2TREASURE: '+2 Treasure',
  PLUSTREASUREPERCOUNTER: 'Gain +1 Treasure For Each Counter On This',
  STEAL_SHOP_ITEM: 'Steal a shop item',
  THIS_KILLS_YOU: 'THIS KILLS YOU!',
  UNKNOWN: 'UNKNOWN'
}


export abstract class BaseCard {
  private _originSet: string;
  private _name: string;
  private _cardType: string;
  private _effectDescription: string;
  private _isTappable: boolean;
  private _isPayable: boolean;

  constructor(originSet: string, cardType: string, name: string, effect: string, isTappable: boolean, isPayable: boolean){
    this._originSet = originSet;
    this._cardType = cardType;
    this._name = name;
    this._effectDescription = effect;
    this._isTappable = isTappable;
    this._isPayable = isPayable;
  }

  // Getters
  get originSet(): string {
    return this._originSet;
  }

  get name(): string {
    return this._name;
  }

  get cardType(): string {
    return this._cardType;
  }

  get effectDescription(): string {
    return this._effectDescription;
  }

  get isTappable(): boolean {
    return this._isTappable;
  }

  get isPayable(): boolean {
    return this._isPayable;
  }
}

export class CharacterCard extends BaseCard {
  private _eternal: string;
  private _health: number;
  private _attack: number;

  constructor(originSet: string, name: string, effect: string, eternal: string, health: number = 2, attack: number = 1){
    super(originSet, CARD_TYPES.CHARACTER, name, effect, true, false)
    this._eternal = eternal;
    this._health = health;
    this._attack = attack;
  }

  // Getters
  get eternal(): string {
    return this._eternal;
  }
  
  get health(): number {
    return this._health;
  }

  get attack(): number {
    return this._attack;
  }
}

export class StartingItemCard extends BaseCard {
  constructor(originSet: string, name: string, effect: string, isTappable: boolean, isPayable: boolean){
    super(originSet, CARD_TYPES.STARTING_ITEM, name, effect, isTappable, isPayable)
  }
}

export class MonsterCard extends BaseCard {
  private _health: number;
  private _diceRoll: number;
  private _attack: number;
  private _reward: string;
  private _numOfSouls: number;
  private _isEvent: boolean;
  private _isCurse: boolean;

  constructor(originSet: string, name: string, effect: string, health: number, diceRoll: number, attack: number, reward: string, numOfSouls: number, isEvent: boolean, isCurse: boolean){
    super(originSet, CARD_TYPES.MONSTER, name, effect, false, false)
    this._health = health;
    this._diceRoll = diceRoll;
    this._attack = attack;
    this._reward = reward;
    this._numOfSouls = numOfSouls;
    this._isEvent = isEvent;
    this._isCurse = isCurse;
  }

  // Getters
  get health(): number {
    return this._health;
  }

  get diceRoll(): number {
    return this._diceRoll;
  }

  get attack(): number {
    return this._attack;
  }

  get reward(): string {
    return this._reward;
  }

  get numOfSouls(): number {
    return this._numOfSouls;
  }

  get isEvent(): boolean {
    return this._isEvent;
  }

  get isCurse(): boolean {
    return this._isCurse;
  }
}

export class TreasureCard extends BaseCard{
  private _isGuppy: boolean;
  constructor(originSet: string, name: string, effect: string, isTappable: boolean, isPayable: boolean, isGuppy: boolean){
    super(originSet, CARD_TYPES.TREASURE, name, effect, isTappable, isPayable)
    this._isGuppy = isGuppy;
  }

  get isGuppy(): boolean {
    return this._isGuppy;
  }
}

export class SoulCard extends BaseCard {
  constructor(originSet: string, name: string, effect: string){
    super(originSet, CARD_TYPES.SOUL, name, effect, false, false)
  }
}

export class LootCard extends BaseCard {
  private _isTrinket: boolean;
  private _numOfOccurrences: number;

  constructor(originSet: string, name: string, effect: string,  isTrinket: boolean, numOfOccurrences: number = 1){
    super(originSet, CARD_TYPES.LOOT, name, effect, false, false)
    this._isTrinket = isTrinket;
    this._numOfOccurrences = numOfOccurrences;
  }

  // Getters
  get isTrinket(): boolean {
    return this._isTrinket;
  }

  get numOfOccurrences(): number {
    return this._numOfOccurrences;
  }
}

export class RoomCard extends BaseCard {
  constructor(originSet: string, name: string, effect: string, isPayable: boolean){
    super(originSet, CARD_TYPES.ROOM, name, effect, false, isPayable)
  }
}
