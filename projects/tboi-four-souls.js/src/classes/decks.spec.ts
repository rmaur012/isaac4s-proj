import { PlayerDeck, TreasureDeck, SoulDeck } from "./decks";
import { playerCardInfo, soulCardInfo } from "./card-info";
import { ORIGIN_SET, RoomCard, SoulCard } from "./cards";


describe('decks unit test', () => {
    describe('BaseDeck parent class functions tests', () => {
        let playerDeck: PlayerDeck;
        let treasureDeck: TreasureDeck;
        let soulDeck: SoulDeck;
        beforeAll(() => {
            soulDeck = new SoulDeck();
            playerDeck = new PlayerDeck();
          });
        describe('findCardByName() tests', () => {
            it('when trying to find a card by name, then it successfully finds and retrieves that card', () => {
                expect(soulDeck.findCardByName('Strawberry')?.name).toBe('Strawberry');
            });
            it('when trying to find a card by name, then it fails to find card for string that is not a real card name and returns null', () => {
                expect(soulDeck.findCardByName('NoRealSoulName')).toBeNull();
            });

            it('when trying to find a card by name, then it fails to find card for empty string string and returns null', () => {
                expect(soulDeck.findCardByName('')).toBeNull();
            });
        });

        describe('getAllCardsByOriginSet() tests', () => {
            beforeEach(() => {
                soulDeck.instantiate();
            });
            it('when I get all cards by origin set with valid string, then it gets all the cards that belong to that set', () => {
                const cardsReturned = soulDeck.getAllCardsByOriginSet(ORIGIN_SET.REQUIEM);
                expect(cardsReturned.length).toBe(5);
            });
            it('when I get all cards by origin set with invalid/non-matching string, then it returns an empty array', () => {
                const cardsReturned = soulDeck.getAllCardsByOriginSet("Not a real set");
                expect(cardsReturned).toEqual([]);
            });
            it('when I get all cards by origin set with empty string, then it returns an empty array', () => {
                const cardsReturned = soulDeck.getAllCardsByOriginSet("");
                expect(cardsReturned).toEqual([]);
            });
        });

        // This hasnt been properly implemented completely
        describe('getAllCardsThatAreTappable() tests', () => {
            var customDeck;
            beforeEach(() => {
                soulDeck.instantiate();
            });
            it('when I get all tappable cards in a deck without any tappable card, then returns empty array', () => {
                const cardsReturned = soulDeck.getAllCardsThatAreTappable();
                expect(cardsReturned).toEqual([]);
            });
            it('when I get all tappable cards in a deck without any tappable card (3 cards), then it returns an array of 3 cards', () => {
                const expectedPlayerDeckLength = playerDeck.deck.length;
                const cardsReturned = playerDeck.getAllCardsThatAreTappable();
                expect(cardsReturned.length).toEqual(expectedPlayerDeckLength);
            });
            it('when I get all cards by origin set with empty string, then it returns an empty array', () => {
                const cardsReturned = soulDeck.getAllCardsByOriginSet("");
                expect(cardsReturned).toEqual([]);
            });
        });

        // This hasnt been properly implemented
        describe('getAllCardsThatArePayable() tests', () => {
            beforeEach(() => {
                soulDeck.instantiate();
            });
            it('when I get all cards by origin set with valid string, then it gets all the cards that belong to that set', () => {
                const cardsReturned = soulDeck.getAllCardsByOriginSet(ORIGIN_SET.REQUIEM);
                expect(cardsReturned.length).toEqual(5);
            });
            it('when I get all cards by origin set with invalid/non-matching string, then it returns an empty array', () => {
                const cardsReturned = soulDeck.getAllCardsByOriginSet("Not a real set");
                expect(cardsReturned).toEqual([]);
            });
            it('when I get all cards by origin set with empty string, then it returns an empty array', () => {
                const cardsReturned = soulDeck.getAllCardsByOriginSet("");
                expect(cardsReturned).toEqual([]);
            });
        });

        describe('drawCards() tests', () => {
            beforeEach(() => {
                soulDeck.instantiate();
            });
            it('when drawing -1 card from the deck, then it successfully does not return any card', () => {
                var cardsDrawn = soulDeck.drawCards(-1);
                expect(cardsDrawn.length).toBe(0);
            });
            it('when drawing 0 cards from the deck, then it successfully returns that one card in an array', () => {
                var cardsDrawn = soulDeck.drawCards(0);
                expect(cardsDrawn.length).toBe(0);
            });
            it('when drawing 1 card from the deck, then it successfully returns that one card in an array', () => {
                var cardsDrawn = soulDeck.drawCards(1);
                expect(cardsDrawn.length).toBe(1);
                expect(cardsDrawn[0].originSet).toBe(ORIGIN_SET.BASE_V2);
                expect(cardsDrawn[0].name).toBe('Soul of Envy');
            });

            it('when drawing multiple (4) cards from the deck, then it successfully returns that one card in an array', () => {
                var cardsDrawn = soulDeck.drawCards(4);
                expect(cardsDrawn.length).toBe(4);
                // First Card
                expect(cardsDrawn[0].originSet).toBe(ORIGIN_SET.BASE_V2);
                expect(cardsDrawn[0].name).toBe('Soul of Envy');
                // Fourth Card
                expect(cardsDrawn[3].originSet).toBe(ORIGIN_SET.REQUIEM);
                expect(cardsDrawn[3].name).toBe('Soul of Guppy');
            });
        });

        describe('addCardsToDeck() tests', () => {
            beforeEach(() => {
                soulDeck.instantiate();
            });
            it('when adding no card to the deck, then the deck stays the same size', () => {
                const originalDeckSize = soulDeck.deck.length;

                soulDeck.addCardsToDeck([]);
                
                expect(soulDeck.deck.length).toBe(originalDeckSize);
            });
            it('when adding a card to the deck, then it successfully adds that card to the deck', () => {
                const newCard = new SoulCard(ORIGIN_SET.G_FUEL, 'New GFuel Card', 'Thirst is quenched!');
                const originalDeckSize = soulDeck.deck.length;

                soulDeck.addCardsToDeck([newCard]);
                
                const expectedNewSize = originalDeckSize + 1;
                expect(soulDeck.deck.length).toBe(expectedNewSize);
                expect(soulDeck.deck[expectedNewSize-1]).toBe(newCard);
            });
            it('when adding multiple (3) new cards to the deck, then it successfully adds that card to the deck', () => {
                const newCardOne = new SoulCard(ORIGIN_SET.G_FUEL, 'New GFuel Card', 'Thirst is quenched!');
                const newCardTwo = new SoulCard(ORIGIN_SET.UNBOXING_OF_ISAAC, 'New Meat Boy Card', 'MEAT!');
                const newCardThree = new SoulCard(ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'New Isaac Card', 'A Twin?!');
                const originalDeckSize = soulDeck.deck.length;

                soulDeck.addCardsToDeck([newCardOne, newCardTwo, newCardThree]);
                
                const expectedNewSize = originalDeckSize + 3;
                expect(soulDeck.deck.length).toBe(expectedNewSize);
                expect(soulDeck.deck[expectedNewSize-3]).toBe(newCardOne);
                expect(soulDeck.deck[expectedNewSize-2]).toBe(newCardTwo);
                expect(soulDeck.deck[expectedNewSize-1]).toBe(newCardThree);
            });
            it('when adding a non-soul card to the soul deck, then it successfully adds that card to the deck', () => {
                const cardName = 'Panic Room', effect = 'You can relax here!', isPayable = false;
                const nonSoulCard = new RoomCard(ORIGIN_SET.G_FUEL, cardName, effect, false);
                const originalDeckSize = soulDeck.deck.length;

                soulDeck.addCardsToDeck([nonSoulCard]);
                
                const expectedNewSize = originalDeckSize + 1;
                expect(soulDeck.deck.length).toBe(expectedNewSize);
                expect(soulDeck.deck[expectedNewSize-1].name).toBe(cardName);
                expect(soulDeck.deck[expectedNewSize-1].effectDescription).toBe(effect);
                expect(soulDeck.deck[expectedNewSize-1].isPayable).toBe(isPayable);
            });
        });
    });

    describe('soul deck', () => {
        it('should instantiate and have deck size equal to the number of soul cards in info array', () => {
            var soulDeck = new SoulDeck();
            expect(soulDeck.deck.length).toBe(soulCardInfo.length);
        });
    });
  });