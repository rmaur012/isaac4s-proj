import { PlayerDeck, StartingItemDeck, SoulDeck, RoomDeck, LootDeck, MonsterDeck, TreasureDeck } from "./decks";
import { ORIGIN_SET, PlayerCard, RoomCard, SoulCard } from "./cards";
import { playerCardInfo, monsterCardInfo, treasureCardInfo, soulCardInfo, lootCardInfo, roomCardInfo, startingItemCardInfo } from "../data/card-info";


describe('decks unit test > ', () => {
    let playerDeck: PlayerDeck;
    let startingItemDeck: StartingItemDeck;
    let soulDeck: SoulDeck;
    let monsterDeck: MonsterDeck;
    let treasureDeck: TreasureDeck;
    beforeAll(() => {
        playerDeck = new PlayerDeck();
        startingItemDeck = new StartingItemDeck();
        soulDeck = new SoulDeck();
        monsterDeck = new MonsterDeck();
        treasureDeck = new TreasureDeck();
    });
    describe('BaseDeck parent class functions tests > ', () => {
        beforeAll(() => {
            playerDeck = new PlayerDeck();
            startingItemDeck = new StartingItemDeck();
            soulDeck = new SoulDeck();
            monsterDeck = new MonsterDeck();
        });
        describe('shuffle() tests > ', () => {
            it('when shuffling the cards, then we should see cards in different places', () => {
                const firstThreeCards = [soulDeck.deck[0], soulDeck.deck[1], soulDeck.deck[2]]
                soulDeck.shuffle();

                // Check that all three cards are not the same as before. If one is different, it will be true and thus be considered shuffled
                const shuffledCards = (soulDeck.deck[0].name !== firstThreeCards[0].name) || (soulDeck.deck[1].name !== firstThreeCards[1].name) || (soulDeck.deck[2].name !== firstThreeCards[2].name)
                expect(shuffledCards).toBeTrue();
            });
        });
        describe('findCardByName() tests > ', () => {
            it('when trying to find a card by name, then it successfully finds and retrieves that card', () => {
                expect(soulDeck.findCardByName('Strawberry')?.name).toBe('Strawberry');
            });
            it('when trying to find a card by name, then it fails to find card for string that is not a real card name and returns null', () => {
                expect(soulDeck.findCardByName('NoRealSoulName')).toBeUndefined();
            });

            it('when trying to find a card by name, then it fails to find card for empty string string and returns null', () => {
                expect(soulDeck.findCardByName('')).toBeUndefined();
            });
        });
        describe('getAllCardsByOriginSet() tests > ', () => {
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
        describe('getAllTappableCards() tests > ', () => {
            beforeEach(() => {
                startingItemDeck.instantiate();
                soulDeck.instantiate();
            });
            it('when I get all tappable cards in a deck without any tappable card, then returns empty array', () => {
                const cardsReturned = soulDeck.getAllTappableCards();
                expect(cardsReturned).toEqual([]);
            });
            it('when I get all tappable cards in a deck with some amount of tappable cards, then it returns an array of the cards that are tappable', () => {
                const cardsReturned = treasureDeck.getAllTappableCards();
                expect(cardsReturned.length).toEqual(95);
            });
            it('when I get all tappable cards in a deck with all tappable cards, then it returns an array of all the cards', () => {
                const expectedPlayerDeckLength = playerDeck.deck.length;
                const cardsReturned = playerDeck.getAllTappableCards();
                expect(cardsReturned.length).toEqual(expectedPlayerDeckLength);
            });
        });
        describe('getAllPayableCards() tests > ', () => {
            beforeEach(() => {
                startingItemDeck.instantiate();
                soulDeck.instantiate();
            });
            it('when I get all tappable cards in a deck without any tappable card, then returns empty array', () => {
                const cardsReturned = soulDeck.getAllPayableCards();
                expect(cardsReturned).toEqual([]);
            });
            it('when I get all tappable cards in a deck with some amount of tappable cards, then it returns an array of the cards that are tappable', () => {
                const cardsReturned = startingItemDeck.getAllPayableCards();
                expect(cardsReturned.length).toEqual(9);
            });
        });
        describe('excludeCardsByOriginSet() tests > ', () => {
            beforeEach(() => {
                soulDeck.instantiate();
            });
            it('when I exclude cards from the deck by origin set with set cards in deck, then deck is reduced and does not have that origin set', () => {
                const prevDeckLength = soulDeck.deck.length;
                const originSet = ORIGIN_SET.REQUIEM_WARP_ZONE;
                soulDeck.excludeCardsByOriginSet(originSet);
                expect(soulDeck.deck.length).not.toEqual(prevDeckLength);
                const deckSeeker = soulDeck.deck.filter((card) => card.originSet == originSet);
                expect(deckSeeker).toEqual([]);
            });
            it('when I exclude cards from the deck by origin set with set cards NOT in deck, then deck is the same and does not have that origin set', () => {
                const prevDeckLength = soulDeck.deck.length;
                const originSet = ORIGIN_SET.GISH;
                soulDeck.excludeCardsByOriginSet(originSet);
                expect(soulDeck.deck.length).toEqual(prevDeckLength);
                const deckSeeker = soulDeck.deck.filter((card) => card.originSet == originSet);
                expect(deckSeeker).toEqual([]);
            });
            it('when I exclude cards from the deck by origin set with empty string, then deck is the same and does not exclude any cards', () => {
                const prevDeckLength = soulDeck.deck.length;
                const originSet = '';
                soulDeck.excludeCardsByOriginSet(originSet);
                expect(soulDeck.deck.length).toEqual(prevDeckLength);
                const deckSeeker = soulDeck.deck.filter((card) => card.originSet == originSet);
                expect(deckSeeker).toEqual([]);
            });
            it('when I exclude cards from the deck by origin set with random string, then deck is the same and does not exclude any cards', () => {
                const prevDeckLength = soulDeck.deck.length;
                const originSet = 'R@nd0mStr!ng .';
                soulDeck.excludeCardsByOriginSet(originSet);
                expect(soulDeck.deck.length).toEqual(prevDeckLength);
                const deckSeeker = soulDeck.deck.filter((card) => card.originSet == originSet);
                expect(deckSeeker).toEqual([]);
            });
        });
        describe('peekCardsFromTop() tests > ', () => {
            beforeAll(() => {
                soulDeck.instantiate();
            });
            it('when peeking -1 card from the deck, then it successfully does not return any card', () => {
                var cardsPeeked = soulDeck.peekCardsFromTop(-1);
                expect(cardsPeeked.length).toBe(0);
            });
            it('when peeking 0 cards from the deck, then it returns an empty array', () => {
                var cardsPeeked = soulDeck.peekCardsFromTop(0);
                expect(cardsPeeked.length).toBe(0);
            });
            it('when peeking 1 card from the deck, then it successfully returns that one card in an array and did not take out of deck', () => {
                var cardsPeeked = soulDeck.peekCardsFromTop(1);
                expect(cardsPeeked.length).toBe(1);
                expect(cardsPeeked[0].originSet).toBe(soulDeck.deck[0].originSet);
                expect(cardsPeeked[0].name).toBe(soulDeck.deck[0].name);
            });
            it('when peeking multiple (4) cards from the deck, then it successfully returns the 4 cards in an array', () => {
                var cardsPeeked = soulDeck.peekCardsFromTop(4);
                expect(cardsPeeked.length).toBe(4);
                // First Card
                expect(cardsPeeked[0].originSet).toBe(soulDeck.deck[0].originSet);
                expect(cardsPeeked[0].name).toBe(soulDeck.deck[0].name);
                // Last Card
                expect(cardsPeeked[3].originSet).toBe(soulDeck.deck[3].originSet);
                expect(cardsPeeked[3].name).toBe(soulDeck.deck[3].name);
            });
            it('when peeking as many cards as there are in the deck minus 1, then it successfully returns the whole deck minus the last card and keeps main deck intact', () => {
                var deckLength = soulDeck.deck.length;
                var cardsPeeked = soulDeck.peekCardsFromTop(deckLength-1);
                expect(cardsPeeked.length).toBe(deckLength-1);
                expect(soulDeck.deck.length).toBe(deckLength);
                // First Card
                expect(cardsPeeked[0].originSet).toBe(soulDeck.deck[0].originSet);
                expect(cardsPeeked[0].name).toBe(soulDeck.deck[0].name);
                // Last Card
                expect(cardsPeeked[deckLength-2].originSet).toBe(soulDeck.deck[deckLength-2].originSet);
                expect(cardsPeeked[deckLength-2].name).toBe(soulDeck.deck[deckLength-2].name);
            });
            it('when peeking as many cards as there are in the deck, then it successfully returns the whole deck and keeps main deck intact', () => {
                var deckLength = soulDeck.deck.length;
                var cardsPeeked = soulDeck.peekCardsFromTop(deckLength);
                expect(cardsPeeked.length).toBe(deckLength);
                expect(soulDeck.deck.length).toBe(deckLength);
                // First Card
                expect(cardsPeeked[0].originSet).toBe(soulDeck.deck[0].originSet);
                expect(cardsPeeked[0].name).toBe(soulDeck.deck[0].name);
                // Last Card
                expect(cardsPeeked[deckLength-1].originSet).toBe(soulDeck.deck[deckLength-1].originSet);
                expect(cardsPeeked[deckLength-1].name).toBe(soulDeck.deck[deckLength-1].name);
            });
            it('when peeking more cards than cards in the deck, then it successfully returns the whole deck instead', () => {
                var deckLength = soulDeck.deck.length;
                var cardsPeeked = soulDeck.peekCardsFromTop(deckLength+5);
                expect(cardsPeeked.length).toBe(deckLength);
                expect(soulDeck.deck.length).toBe(deckLength);
                // First Card
                expect(cardsPeeked[0].originSet).toBe(soulDeck.deck[0].originSet);
                expect(cardsPeeked[0].name).toBe(soulDeck.deck[0].name);
                // Last Card
                expect(cardsPeeked[deckLength-1].originSet).toBe(soulDeck.deck[deckLength-1].originSet);
                expect(cardsPeeked[deckLength-1].name).toBe(soulDeck.deck[deckLength-1].name);
            });
        });
        describe('drawCardsFromTop() tests > ', () => {
            beforeEach(() => {
                soulDeck.instantiate();
            });
            it('when drawing -1 card from the deck, then it successfully does not return any card', () => {
                var cardsDrawn = soulDeck.drawCardsFromTop(-1);
                expect(cardsDrawn.length).toBe(0);
            });
            it('when drawing 0 cards from the deck, then it returns an empty array', () => {
                var cardsDrawn = soulDeck.drawCardsFromTop(0);
                expect(cardsDrawn.length).toBe(0);
            });
            it('when drawing 1 card from the deck, then it successfully returns that one card in an array and reduced deck size', () => {
                const startingDeckSize = soulDeck.deck.length;
                var cardsDrawn = soulDeck.drawCardsFromTop(1);
                expect(cardsDrawn.length).toBe(1);
                expect(cardsDrawn[0].originSet).toBe(ORIGIN_SET.BASE_V2);
                expect(cardsDrawn[0].name).toBe('Soul of Envy');
                expect(soulDeck.deck.length).toBe(startingDeckSize - 1);
            });

            it('when drawing multiple (4) cards from the deck, then it successfully returns that one card in an array and reduced deck size', () => {
                const drawAmount = 4;
                const startingDeckSize = soulDeck.deck.length;
                var cardsDrawn = soulDeck.drawCardsFromTop(drawAmount);
                expect(cardsDrawn.length).toBe(drawAmount);
                // First Card
                expect(cardsDrawn[0].originSet).toBe(ORIGIN_SET.BASE_V2);
                expect(cardsDrawn[0].name).toBe('Soul of Envy');
                // Fourth Card
                expect(cardsDrawn[cardsDrawn.length-1].originSet).toBe(ORIGIN_SET.REQUIEM);
                expect(cardsDrawn[cardsDrawn.length-1].name).toBe('Soul of Guppy');
                // Verify reduced deck size
                expect(soulDeck.deck.length).toBe(startingDeckSize - drawAmount);
            });

            it('when drawing as many cards as there are in the deck, then it successfully returns the whole deck and original deck has empty array/length of zero', () => {
                const deckLength = soulDeck.deck.length;
                const firstCardData = [ORIGIN_SET.BASE_V2, 'Soul of Envy'];
                const lastCardData = [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Strawberry'];

                var cardsDrawn = soulDeck.drawCardsFromTop(deckLength);
                expect(cardsDrawn.length).toBe(deckLength);
                expect(soulDeck.deck.length).toBe(0);
                // First Card
                expect(cardsDrawn[0].originSet).toBe(firstCardData[0]);
                expect(cardsDrawn[0].name).toBe(firstCardData[1]);
                // Fourth Card
                expect(cardsDrawn[deckLength-1].originSet).toBe(lastCardData[0]);
                expect(cardsDrawn[deckLength-1].name).toBe(lastCardData[1]);
                // Verify reduced deck size
                expect(soulDeck.deck.length).toBe(0);
            });
            
            it('when drawing more cards than the cards in deck, then it successfully returns the whole deck instead', () => {
                const deckLength = soulDeck.deck.length;
                const firstCardData = [ORIGIN_SET.BASE_V2, 'Soul of Envy'];
                const lastCardData = [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Strawberry'];

                var cardsDrawn = soulDeck.drawCardsFromTop(deckLength+5);
                expect(cardsDrawn.length).toBe(deckLength);
                expect(soulDeck.deck.length).toBe(0);
                // First Card
                expect(cardsDrawn[0].originSet).toBe(firstCardData[0]);
                expect(cardsDrawn[0].name).toBe(firstCardData[1]);
                // Fourth Card
                expect(cardsDrawn[deckLength-1].originSet).toBe(lastCardData[0]);
                expect(cardsDrawn[deckLength-1].name).toBe(lastCardData[1]);
                // Verify reduced deck size
                expect(soulDeck.deck.length).toBe(0);
            });
        });
        describe('addCardsToTopOfDeck() tests > ', () => {
            beforeEach(() => {
                soulDeck.instantiate();
            });
            it('when adding no card to the deck, then the deck stays the same size', () => {
                const originalDeckSize = soulDeck.deck.length;

                soulDeck.addCardsToTopOfDeck([]);
                
                expect(soulDeck.deck.length).toBe(originalDeckSize);
            });
            it('when adding a card to the deck, then it successfully adds that card to the deck', () => {
                const newCard = new SoulCard(ORIGIN_SET.G_FUEL, 'New GFuel Card', 'Thirst is quenched!');
                const originalDeckSize = soulDeck.deck.length;

                soulDeck.addCardsToTopOfDeck([newCard]);
                
                const expectedNewSize = originalDeckSize + 1;
                expect(soulDeck.deck.length).toBe(expectedNewSize);
                expect(soulDeck.deck[0]).toBe(newCard);
            });
            it('when adding multiple (3) new cards to the deck, then it successfully adds that card to the deck', () => {
                const newCardOne = new SoulCard(ORIGIN_SET.G_FUEL, 'New GFuel Card', 'Thirst is quenched!');
                const newCardTwo = new SoulCard(ORIGIN_SET.UNBOXING_OF_ISAAC, 'New Meat Boy Card', 'MEAT!');
                const newCardThree = new SoulCard(ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'New Isaac Card', 'A Twin?!');
                const originalDeckSize = soulDeck.deck.length;

                soulDeck.addCardsToTopOfDeck([newCardOne, newCardTwo, newCardThree]);
                
                const expectedNewSize = originalDeckSize + 3;
                expect(soulDeck.deck.length).toBe(expectedNewSize);
                expect(soulDeck.deck[0]).toBe(newCardOne);
                expect(soulDeck.deck[1]).toBe(newCardTwo);
                expect(soulDeck.deck[2]).toBe(newCardThree);
            });
            it('when adding a non-soul card to the soul deck, then it successfully adds that card to the deck', () => {
                const cardName = 'Panic Room', effect = 'You can relax here!', isPayable = false;
                const nonSoulCard = new RoomCard(ORIGIN_SET.G_FUEL, cardName, effect, false);
                const originalDeckSize = soulDeck.deck.length;

                soulDeck.addCardsToTopOfDeck([nonSoulCard]);
                
                const expectedNewSize = originalDeckSize + 1;
                expect(soulDeck.deck.length).toBe(expectedNewSize);
                expect(soulDeck.deck[0].name).toBe(cardName);
                expect(soulDeck.deck[0].effectDescription).toBe(effect);
                expect(soulDeck.deck[0].isPayable).toBe(isPayable);
            });
        });
        describe('addCardsToBottomOfDeck() tests > ', () => {
            beforeEach(() => {
                soulDeck.instantiate();
            });
            it('when adding no card to the deck, then the deck stays the same size', () => {
                const originalDeckSize = soulDeck.deck.length;

                soulDeck.addCardsToBottomOfDeck([]);
                
                expect(soulDeck.deck.length).toBe(originalDeckSize);
            });
            it('when adding a card to the deck, then it successfully adds that card to the deck', () => {
                const newCard = new SoulCard(ORIGIN_SET.G_FUEL, 'New GFuel Card', 'Thirst is quenched!');
                const originalDeckSize = soulDeck.deck.length;

                soulDeck.addCardsToBottomOfDeck([newCard]);
                
                const expectedNewSize = originalDeckSize + 1;
                expect(soulDeck.deck.length).toBe(expectedNewSize);
                expect(soulDeck.deck[expectedNewSize-1]).toBe(newCard);
            });
            it('when adding multiple (3) new cards to the deck, then it successfully adds that card to the deck', () => {
                const newCardOne = new SoulCard(ORIGIN_SET.G_FUEL, 'New GFuel Card', 'Thirst is quenched!');
                const newCardTwo = new SoulCard(ORIGIN_SET.UNBOXING_OF_ISAAC, 'New Meat Boy Card', 'MEAT!');
                const newCardThree = new SoulCard(ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'New Isaac Card', 'A Twin?!');
                const originalDeckSize = soulDeck.deck.length;

                soulDeck.addCardsToBottomOfDeck([newCardOne, newCardTwo, newCardThree]);
                
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

                soulDeck.addCardsToBottomOfDeck([nonSoulCard]);
                
                const expectedNewSize = originalDeckSize + 1;
                expect(soulDeck.deck.length).toBe(expectedNewSize);
                expect(soulDeck.deck[expectedNewSize-1].name).toBe(cardName);
                expect(soulDeck.deck[expectedNewSize-1].effectDescription).toBe(effect);
                expect(soulDeck.deck[expectedNewSize-1].isPayable).toBe(isPayable);
            });
        });
        it('all getters return values successfully', () => {
            const oneCard = soulDeck.deck[0];
            expect(soulDeck.deck[0].originSet).toBe(oneCard.originSet);
            expect(soulDeck.deck[0].name).toBe(oneCard.name);
            expect(soulDeck.deck[0].cardType).toBe(oneCard.cardType);
            expect(soulDeck.deck[0].effectDescription).toBe(oneCard.effectDescription);
            expect(soulDeck.deck[0].isTappable).toBe(oneCard.isTappable);
            expect(soulDeck.deck[0].isPayable).toBe(oneCard.isPayable);
        });
    });

    describe('PlayerDeck class specific functions > ', () => {
        const  fakePlayerCard = new PlayerCard(ORIGIN_SET.BASE_V2, 'FakeChar', 'Fake Effect', 'Fake Starting Item');
        beforeAll(() => {
            playerDeck = new PlayerDeck();
            startingItemDeck = new StartingItemDeck();
            soulDeck = new SoulDeck();
        });
        it('should instantiate and have deck size equal to the number of player cards in info array', () => {
            var playerDeck = new PlayerDeck();
            expect(playerDeck.deck.length).toBe(playerCardInfo.length);
        });

        describe('findStartingItemForCharacter() tests', () => {
            it('when trying to find a starting card for a character card, then it successfully retrieves the starting item expected', () => {
                const cainIndex = 2;
                const expectedStartingItemName = 'Sleight of Hand';
                const playerCard: PlayerCard = playerDeck.deck[cainIndex];
                expect(playerDeck.findStartingItemForCharacter(playerCard, startingItemDeck)?.name).toBe(expectedStartingItemName);
            });
            it('when trying to find a starting card and cannot find a match to the character eternal, then it fails to find a starting card and returns undefined', () => {
                expect(playerDeck.findStartingItemForCharacter(fakePlayerCard, startingItemDeck)).toBeUndefined();
            });
            it('when trying to find a starting card specifically for Eden even with a real item for another character, then returns null', () => {
                const fakeCharCard: PlayerCard = new PlayerCard(ORIGIN_SET.BASE_V2, 'Eden', 'N/A', 'The Curse');
                expect(playerDeck.findStartingItemForCharacter(fakeCharCard, startingItemDeck)).toBeNull();
            });
        });
    });

    describe('StartingItemDeck class specific functions > ', () => {
        beforeAll(() => {
            startingItemDeck = new StartingItemDeck();
        });
        it('should instantiate and have deck size equal to the number of player cards in info array', () => {
            var startingItemDeck = new StartingItemDeck();
            expect(startingItemDeck.deck.length).toBe(startingItemCardInfo.length);
        });
    });

    describe('MonsterDeck class specific functions > ', () => {
        beforeAll(() => {
            monsterDeck = new MonsterDeck();
        });
        it('should instantiate and have deck size equal to the number of soul cards in info array', () => {
            monsterDeck = new MonsterDeck();
            expect(monsterDeck.deck.length).toBe(monsterCardInfo.length);
        });
        describe('getAllCardsWithSouls() tests', () => {
            it('when getting all monster cards with souls, then it successfully retrieves all of them', () => {
                const monstersWithSouls = monsterDeck.getAllCardsWithSouls();
                expect(monstersWithSouls.length).toBe(127);
                expect(monstersWithSouls[0].numOfSouls).toBeGreaterThan(0);
            });
        });
    });

    describe('TreasureDeck class specific functions > ', () => {
        it('should instantiate and have deck size equal to the number of treasure cards in info array', () => {
            var treasureDeck = new TreasureDeck();
            expect(treasureDeck.deck.length).toBe(treasureCardInfo.length);
        });
        describe('getAllCardsThatAreGuppyItems() tests > ', () => {
            it('when getting Guppy treasure cards and they are in the deck, then only the guppy cards are returned', () => {
                treasureDeck = new TreasureDeck();
                expect(treasureDeck.getAllGuppyItemCards().length).toBe(6);
            });
        });
    });
    
    describe('SoulDeck class specific functions > ', () => {
        it('should instantiate and have deck size equal to the number of soul cards in info array', () => {
            var soulDeck = new SoulDeck();
            expect(soulDeck.deck.length).toBe(soulCardInfo.length);
        });
    });

    describe('LootDeck class specific functions > ', () => {
        it('should instantiate and have deck size equal to the number of soul cards in info array', () => {
            var lootDeckLocal = new LootDeck();
            expect(lootDeckLocal.deck.length).toBe(lootCardInfo.length);
        });
    });

    describe('RoomDeck class specific functions > ', () => {
        it('should instantiate and have deck size equal to the number of soul cards in info array', () => {
            var roomDeckLocal = new RoomDeck();
            expect(roomDeckLocal.deck.length).toBe(roomCardInfo.length);
        });
    });
  });