import { ORIGIN_SET, MONSTER_KILL_REWARDS } from "./cards"

/* The sub-arrays contain the following:
* 1. Origin Set: enum of string
* 2. Card Title: string
* 3. Effect Description: string
* 4. Character's starting item: string
* 5. health: number
* 6. attack: number
* 
* isTappable is set to true and isPayable set to false by default
*/
export const playerCardInfo = [
    [ORIGIN_SET.BASE_V2, 'Isaac', '', 'The D6', 2, 1],
    [ORIGIN_SET.BASE_V2, 'Maggy', '', 'Yum Heart', 2, 1],
    [ORIGIN_SET.BASE_V2, 'Cain', '', 'Sleight of Hand', 2, 1],
    [ORIGIN_SET.BASE_V2, 'Judas', '', 'Book of Belial', 2, 1],
    [ORIGIN_SET.BASE_V2, 'Blue Baby', '', 'Forever Alone', 2, 1],
    [ORIGIN_SET.BASE_V2, 'Eve', '', 'The Curse', 2, 1],
    [ORIGIN_SET.BASE_V2, 'Samson', '', 'Blood Lust', 2, 1],
    [ORIGIN_SET.BASE_V2, 'Lazarus', '', 'Lazarus\' Rags', 2, 1],
    [ORIGIN_SET.BASE_V2, 'Lilith', '', 'Incubus', 2, 1],
    [ORIGIN_SET.BASE_V2, 'The Forgotten', '', 'The Bone', 2, 1],
    [ORIGIN_SET.BASE_V2, 'Eden', '', 'When you start the game, look at the top 3 cards of the treasure deck and choose one. It becomes your starting item and gains eternal. Put the rest on the bottom of the treasure deck.', 2, 1],
    [ORIGIN_SET.GOLD_BOX_V2, 'Azazel', '', 'Lord of the Pit', 2, 1],
    [ORIGIN_SET.GOLD_BOX_V2, 'The Lost', '(Tap Effect) Play an additional loot card this turn. | At the end of your turn, recharge up to 1 character.', 'Holy Mantle', 1, 1],
    [ORIGIN_SET.GOLD_BOX_V2, 'The Keeper', '', 'Wooden Nickel', 2, 1],
    [ORIGIN_SET.GOLD_BOX_V2, 'Apollyon', '', 'Void', 2, 1],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Bum-Bo', '', 'Bag-O-Trash', 2, 1],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Dark Judas', '', 'Dark Arts', 2, 1],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Guppy', '', 'Infestation', 2, 1],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Whore of Babylon', '', 'Gimpy', 2, 1],
    [ORIGIN_SET.REQUIEM, 'Bethany', '', 'Book of Virtues', 2, 1],
    [ORIGIN_SET.REQUIEM, 'Jacob & Esau', '', 'Sibling Rivalry', 2, 1],
    [ORIGIN_SET.REQUIEM, 'The Broken', '', 'Spindown Dice', 2, 1],
    [ORIGIN_SET.REQUIEM, 'The Dauntless', '', 'Hypercoagulation', 1, 1],
    [ORIGIN_SET.REQUIEM, 'The Hoarder', '', 'Bag of Crafting', 2, 1],
    [ORIGIN_SET.REQUIEM, 'The Deceiver', '', 'Ceremonial Blade', 2, 1],
    [ORIGIN_SET.REQUIEM, 'The Soiled', '', 'IBS', 2, 1],
    [ORIGIN_SET.REQUIEM, 'The Curdled', '', 'Sumptorium', 2, 1],
    [ORIGIN_SET.REQUIEM, 'The Savage', '', 'Berserk', 2, 1],
    [ORIGIN_SET.REQUIEM, 'The Benighted', '', 'Hemoptysis', 2, 1],
    [ORIGIN_SET.REQUIEM, 'The Enigma', '', 'Flip', 2, 1],
    [ORIGIN_SET.REQUIEM, 'The Capricious', 'Choose one- Play an additional loot card this turn. | Put a shop item into discard.', 'Glitch', 2, 1],
    [ORIGIN_SET.REQUIEM, 'The Baleful', '', 'Soulbond', 1, 1],
    [ORIGIN_SET.REQUIEM, 'The Harlot', '', 'Gello', 2, 1],
    [ORIGIN_SET.REQUIEM, 'The Miser', '', 'Keeper\'s Bargain', 2, 1],
    [ORIGIN_SET.REQUIEM, 'The Empty', '', 'Abyss', 2, 1],
    [ORIGIN_SET.REQUIEM, 'The Fettered', '', 'Dead Weight', 2, 1],
    [ORIGIN_SET.REQUIEM, 'The Zealot', '', 'Lemegeton', 2, 1],
    [ORIGIN_SET.REQUIEM, 'The Deserter', '', 'Anima Sola | The Revenant', 2, 1],
    [ORIGIN_SET.REQUIEM, 'Flash Isaac', '', 'Classic Roller', 2, 1],
    [ORIGIN_SET.SUMMER_OF_ISAAC, 'Stacy', '', 'Unstable DNA', 2, 1],
    [ORIGIN_SET.SUMMER_OF_ISAAC, 'Clubby the Seal', '', 'Club', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Ash', '', 'Ball of Tumors', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Steven', 'You may play up to x additional loot cards this turn, where x is the number of souls you control.', 'Lil Steven', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Bum-Bo the Weird', '', 'Strange Marble', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Edmund', '', 'The Real Left Hand', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Abe', '', 'Possession', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Baba', 'Choose another player. They reveal their hand. Choose a non-trinket, non-ambush loot card in their hand. Till end of turn, you may play a copy of it without using a loot play.', 'Is You', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Blind Johnny', '', 'Johnny\'s Knives', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Blue Archer', '', 'Bow and Arrow', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Boyfriend', '', 'Girlfriend', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Captain Viridian', '', '', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Crewmate', '', 'Emergency Meeting!', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Guy Spelunky', '', 'Spelunking Pack', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Johnny', '', 'Football', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Pink Knight', '', 'Lollypop', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Psycho Goreman', '', 'Hunky Boys', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Quote', '(Tap Effect) Flip an eternal item you control if able, then recharge it.', 'Polar Star | Booster v2.0', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Salad Fingers', '', 'Rusty Spoons', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'The Knight', '', 'Focus', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'The Silent', '', 'Ring of the Snake', 2, 1],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Yung Venuz', '', 'Pop Pop!', 2, 1],
    [ORIGIN_SET.TAPEWORM, 'Tapeworm', '', 'Pink Proglottid', 2, 1]
]

/* The sub-arrays contain the following:
* 1. Origin Set: enum of string
* 2. Card Title: string
* 3. Effect Description: string
* 4. isTappable: boolean
* 5. isPayable: boolean
*/
export const startingItemCardInfo = [
    [ORIGIN_SET.BASE_V2, 'The D6', '(Tap Effect) Choose a dice roll. its controller rerolls it. | At the end of your turn, recharge this.', true, false],
    [ORIGIN_SET.BASE_V2, 'Yum Heart', '(Tap Effect) Choose a player or monster. prevent the next instance of damage they would take this turn. | At the end of your turn, recharge this.', true, false],
    [ORIGIN_SET.BASE_V2, 'Sleight of Hand', '(Tap Effect) Look at the top 5 cards of a deck. put them back in any order.', true, false],
    [ORIGIN_SET.BASE_V2, 'Book of Belial', '(Tap Effect) Add or subtract 1 from a roll. | At the end of your turn, recharge this.', true, false],
    [ORIGIN_SET.BASE_V2, 'Forever Alone', '(Tap Effect) Choose one- Steal 1¢ from another player. Look at the top card of a deck. Discard a loot card, then loot 1.', true, false],
    [ORIGIN_SET.BASE_V2, 'The Curse', 'At the start of your turn, put the top card of a deck into discard. (Tap Effect) Put the top card of any discard on top of its deck.', true, false],
    [ORIGIN_SET.BASE_V2, 'Blood Lust', '(Tap Effect) Choose a player or monster. they gain +1 ATK till end of turn. | At the end of your turn, recharge this.', true, false],
    [ORIGIN_SET.BASE_V2, 'Lazarus\' Rags', 'Each time you die, after paying penalties, gain +1 treasure.', false, true],
    [ORIGIN_SET.BASE_V2, 'Incubus', '(Tap Effect) Choose one -Look at a player\'s hand. You may swap a card from your hand with one of theirs. -Loot 1, then put a card from your hand on top of the loot deck.', true, false],
    [ORIGIN_SET.BASE_V2, 'The Bone', '(Tap Effect) Put a counter on this. (Paid Effect) Remove 1 counter from this: Add +1 to a dice roll. (Paid Effect) Remove 2 counters from this: Deal 1 damage to a monster or player. (Paid Effect) Remove 5 counters from this: This becomes a soul and loses all abilities.', true, true],
    [ORIGIN_SET.GOLD_BOX_V2, 'Lord of the Pit', '(Tap Effect) Cancel an attack. that player may attack an additional time this turn.', true, false],
    [ORIGIN_SET.GOLD_BOX_V2, 'The Holy Mantle', '(Tap Effect) Choose a player. the next time that player would die this turn, prevent it. If it\'s their turn, cancel everything that hasn\'t resolved and end it. | At the end of your turn, recharge this.', true, false],
    [ORIGIN_SET.GOLD_BOX_V2, 'Wooden Nickel', '(Tap Effect) Choose a player, then roll- That player gains ¢ equal to the result.', true, false],
    [ORIGIN_SET.GOLD_BOX_V2, 'Void', '(Tap Effect) Choose one: -Discard your hand, then loot equal to the number of cards discarded. -Put a monster not being attacked or a shop item into discard.', true, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Bag-O-Trash', '(Paid Effect) Pay 3¢: Play an additional loot card this turn. (Paid Effect) Pay 4¢: Loot 1. (Paid Effect) Pay 6¢: Deal 1 damage to a monster or player.', false, true],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Dark Arts', 'Each time a player rolls a ❻, gain 2¢. | Each time another player dies, loot 1.', false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Infestation', '(Tap Effect) Loot 2, then discard 1 loot card.', true, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Gimpy', 'Each time you take damage, choose one- Gain 2¢. | Loot 1, then discard a loot card. | Gain +2 attack till end of turn.', false, false],
    [ORIGIN_SET.REQUIEM, 'Book of Virtues', 'Each time you deal combat damage, roll- 5-6: deal 1 damage to a monster or player. | Each time you kill a monster, choose another player. you and that player each loot 1.', false, false],
    [ORIGIN_SET.REQUIEM, 'Sibling Rivalry', '(Tap Effect) Choose a non-active player. The next time the active player declares an attack this turn, the chosen player must make an attack roll after each attack roll the active player makes for the attack. If that monster dies this attack, the chosen player also gains the rewards.', true, false],
    [ORIGIN_SET.REQUIEM, 'Spindown Dice', '(Tap Effect) Destroy an item. If it was controlled by a player, they may steal an item from the shop. | At the end of your turn, roll- 4-6: Recharge this.', true, false],
    [ORIGIN_SET.REQUIEM, 'Hypercoagulation', 'At the start of your turn put a counter on this. | You have +1 HP for each counter on this. | At the end of your turn, if this has 3+ counters, remove all of them and loot 3.',  false, false],
    [ORIGIN_SET.REQUIEM, 'Bag of Crafting', '(Paid Effect) Discard a loot card: Put a counter on this. | (Paid Effect) Remove 4 counters from this: Gain +1 treasure.', false, true],
    [ORIGIN_SET.REQUIEM, 'Ceremonial Blade', '(Tap Effect) Play an additional loot card this turn. | At the end of your turn, loot 1 and discard a loot card. | Each time you kill a monster, loot 1.', true, false],
    [ORIGIN_SET.REQUIEM, 'IBS', '(Paid Effect) Discard a loot card: Choose one- Cancel your attack on a monster. | Gain 3¢. | (Paid Effect) Discard 2 loot cards: Cancel the ↷ or $ ability of an item or loot being played.', false, true],
    [ORIGIN_SET.REQUIEM, 'Sumptorium', 'Each time you take damage, put a counter on this. | (Paid Effect) Remove 2 counters from this: A monster gains -1 to dice roll till end of turn.', false, true],
    [ORIGIN_SET.REQUIEM, 'Berserk', 'You may attack an additional time on your turn. | Each time you kill a monster, gain +1HP till end of turn.', false, false],
    [ORIGIN_SET.REQUIEM, 'Hemoptysis', '(Tap Effect) Put a counter on this. | (Paid Effect) Remove a counter from this: Choose a monster. its ATK becomes 1. | (Paid Effect) Remove 2 counters from this: Deal 1 damage to up to 2 monsters or players.', true, true],
    [ORIGIN_SET.REQUIEM, 'Flip', 'Each time you die, after paying penalties, flip your character if able. Then recharge it. Discard your hand and loot 3.', false, false],
    [ORIGIN_SET.REQUIEM, 'Glitch', 'As your turn starts, choose a shop item. This gains the abilities of that item till end of turn. | As your turn ends, choose a shop item. This gains the abilities of that item till the start of your next turn. recharge this.', false, false],
    [ORIGIN_SET.REQUIEM, 'Soulbond', 'Each time you die, choose another player. That player dies. | You don\'t lose ¢ or discard loot cards when paying the death penalty.', false, false],
    [ORIGIN_SET.REQUIEM, 'Gello', '(Tap Effect) Choose a monster being attacked. Heal that monster to full HP, then deal damage equal to the number of HP healed in this way to another monster. If it\'s not your turn, cancel the attack and the active player may make an additional attack this turn.', true, false],
    [ORIGIN_SET.REQUIEM, 'Keeper\'s Bargain', '(Tap Effect) Each other player may choose to gain 1¢. Gain 1¢ + 1¢ for each player who did. | Shop items you purchase cost 3¢ less.', true, false],
    [ORIGIN_SET.REQUIEM, 'Abyss', '(Tap Effect) Destroy an item you control. If you do, put a counter on this. | You have +1 attack for every 2 counters on this.', true, false],
    [ORIGIN_SET.REQUIEM, 'Dead Weight', 'You take no combat damage on attack rolls of 1. | (Tap Effect) Cancel the triggered ability of a monster or non-eternal item. | At the end of your turn, recharge this.', true, false],
    [ORIGIN_SET.REQUIEM, 'Lemegeton', '(Tap Effect) Gain +1 treasure. The next time your turn ends, destroy a non-eternal item you control.', true, false],
    [ORIGIN_SET.REQUIEM, 'Anima Sola', '(Tap Effect) Flip this item. When this is flipped to this side, loot 1.', true, false],
    [ORIGIN_SET.REQUIEM, 'The Revenant (Monster - 2HP, 3DC, 2ATK)', 'This item can be attacked. | When this reaches 0HP, the player attacking this gains its reward, then you flip it. that player may attack an additional time this turn.', false, false],
    [ORIGIN_SET.REQUIEM, 'Classic Roller', '(Tap Effect) Choose a dice roll. Its controller rerolls it, but rolls 2 dice instead. They choose another player. That player chooses one of the rolls as the result. | At the end of your turn, recharge this.', true, false],
    [ORIGIN_SET.SUMMER_OF_ISAAC, 'Unstable DNA', 'At the start of your turn, roll- 1-2: Remove all counters from this., 3-4: Put a HP counter on this., 5-6: Put a ATK counter on this.', true, false],
    [ORIGIN_SET.SUMMER_OF_ISAAC, 'Club', 'Rewards from non-boss monsters are doubled on your turn. | (Tap Effect) If it\'s your turn, put a monster not being attacked on the bottom of the monster deck. | (Tap Effect) Cancel the ↷ or $ ability of an item or a loot card being played. This loses all abilities except eternal until the next time your turn ends.', true, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Ball of Tar', '(Paid Effect) Discard a loot card: choose one- •Copy a non-trinket, non-ambush loot being played by another player that hasn\'t already been copied this turn. | •Put a monster not being attacked into discard. | •Prevent the next 1 damage you would take this turn.', false, true],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Ball of Tumors', 'This starts at level 6. | If this is higher than level 0, instead of paying the death penalty, this levels down. | LV2 Effect: You may play an additional loot card on your turn. | LV4 Effect: At the end of your turn, discard a loot card and loot 2.', true, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Lil Steven', 'Each time a monster or player dies, put a counter on this. (Paid Effect) Remove 10 counters from this: The active player takes an extra turn after this one.', false, true],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Strange Marble', 'Each time a monster or player dies, you may recharge an item. | At the start of your turn, you may reveal the top card of the loot deck. If it\'s a non-trinket, non-ambush card, each player may play a copy of it without using a loot play.', false, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'The Real Left Hand', '(Tap Effect) Change a number in the effect text of a card in play or loot being played by 1 till end of turn. the number can\'t go below 1 or above 6.', true, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Possession', 'At the start of your turn, you may recharge each item another player controls. Till end of turn you may activate their items as though you control them. At the end of your turn, that player loots 2.', false, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Is You', 'As your turn starts, choose an eternal item another player controls. This gains all of that item\'s abilities till the start of your next turn.', false, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Johnny\'s Knives', '(Tap Effect) Deal 1 damage to a monster or player. | Each time another player dies, recharge this.', true, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Bow and Arrow', '(Tap Effect) Put a bounty counter on a monster. | Monsters with a bounty counter on them get -1 to dice roll. | Each time a monster with a bounty counter on it dies, gain 3¢.', true, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Girlfriend', 'Each time you roll the same result twice in a row on each of your turns, put a counter on this. | Each time you die, remove half the counters from this rounded down. | You have +1 HP for every 2 counters this has on it. | (Tap Effect) Subtract 1 from a roll.', true, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Gravity', '(Tap Effect) Flip a dice roll. (the roll becomes 7 - the current result.) | At the end of your turn, recharge this.', true, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Emergency Meeting!', '(Tap Effect) Each player votes on a monster or player. Each monster or player with the most votes or tied for the most takes 1 damage. | At the end of your turn, recharge this.', true, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Spelunking Pack', 'This starts with 3 counters. | Each time you kill a monster put 2 counters on this. | •(Paid Effect) Remove a counter from this: choose one- •+1 to your next roll, •Gain 3¢, •Put a shop item into discard.', true, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Football', 'At the end of your turn, each other player loots 2. | (Tap Effect) Give this to another player and roll- 1-4: Each player loots 1., 5-6: You discard 2 loot cards, then each player who controls a character named johnny loots 2.', true, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Lollypop', 'Each time you gain rewards from killing monsters, choose another player. They also gain the rewards. | Each time another player gains rewards from killing monsters, you also gain half the rewards rounded down.', false, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Hunky Boys', 'You have +1 HP while it\'s not your turn.', false, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Polar Star', '(Tap Effect) Choose one- Put a counter on this. | Remove any number of counters from this. Gain +1 attack for your next attack roll this turn for each counter removed this way.', true, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Booster v2.0', '(Tap Effect) Choose one- Put a counter on this. | Remove any number of counters from this. Add 1 to a roll for each counter removed in this way.', true, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Rusty Spoons', 'At the start of your turn each player loots 1. | (Tap Effect) Choose a player. They put a random loot card from their hand under this. Till end of turn, you may play that loot card without using a loot play. | At the end of your turn, recharge this.', true, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Focus', 'Each time you gain or are given a soul, this levels up. | LV1 Effect: You have +1ATK for your first attack roll each turn. | LV2 Effect: The first time you activate your character each round, recharge it. | LV3 Effect: Prevent the first instance of damage you would take each turn.', false, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Ring of the Snake', 'Each time you declare an attack, recharge your character and loot 1.', false, false],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Pop Pop!', '(Tap Effect) Copy a non-trinket, non-ambush loot being played.', true, false],
    [ORIGIN_SET.TAPEWORM, 'Pink Proglottid', '(Tap Effect) Add or remove an egg counter from a player or monster. | Each time a player or monster with an egg counter dies, each player without an egg counter loots equal to the number of egg counters on that player or monster.', true, false]
]

/* The sub-arrays contain the following:
* 1. Origin Set: enum of string
* 2. Card Title: string
* 3. Effect Description: string
* 4. Health: number
* 5. Dice Roll: number
* 6. Attack: number
* 7. Reward: string
* 8. Number of souls: number
* 9. isEvent: boolean
* 10. isCurse: boollean
* 
* isTappable and isPayable set to false by default
*/
export const monsterCardInfo = [
    [ORIGIN_SET.BASE_V2, 'Big Spider', 'When this dies, the active player may attack the monster deck an additional time.', 3, 4, 1, MONSTER_KILL_REWARDS.LOOT1, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Black Bony', 'When this dies, it deals 1 damage to the player who killed it.', 3, 4, 1, MONSTER_KILL_REWARDS.ROLL_FOR_LOOT, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Boom Fly', 'When this dies, it deals 1 damage to each player.', 1, 4, 1, MONSTER_KILL_REWARDS.CENTS_FOUR, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Clotty', 'No Effect.', 2, 3, 1, MONSTER_KILL_REWARDS.CENTS_FOUR, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Cod Worm', 'No Effect.', 2, 5, 0, MONSTER_KILL_REWARDS.CENTS_THREE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Conjoined Fatty', 'No Effect.', 4, 3, 2, MONSTER_KILL_REWARDS.LOOT2, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Dank Goblin', 'When this dies, the active player forces a player to discard 2 loot cards.', 2, 4, 2, MONSTER_KILL_REWARDS.LOOT2, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Delirium', 'Other monsters have +1 to dice roll. | When this dies, put it in the monster deck 6 cards from the top.', 5, 4, 3, MONSTER_KILL_REWARDS.PLUS2TREASURE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Dinga', 'When this dies on an attack roll of 6, double its rewards.', 3, 3, 1, MONSTER_KILL_REWARDS.ROLL_FOR_CENTS, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Dip', 'No Effect.', 1, 4, 1, MONSTER_KILL_REWARDS.CENTS_ONE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Dople', 'Damage dealt to this is also dealt to the player to the active player\'s right.', 2, 4, 2, MONSTER_KILL_REWARDS.CENTS_SEVEN, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Evil Twin', 'Damage dealt to this is also dealt to the player to the active player\'s left.', 3, 5, 2, MONSTER_KILL_REWARDS.PLUS1TREASURE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Fat Bat', 'No Effect.', 3, 5, 1, MONSTER_KILL_REWARDS.LOOT1, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Fatty', 'No Effect.', 4, 2, 1, MONSTER_KILL_REWARDS.LOOT1, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Fly', 'No Effect.', 1, 2, 1, MONSTER_KILL_REWARDS.CENTS_ONE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Greedling', 'When this dies, the active player chooses a player. they lose 7¢.', 2, 5, 1, MONSTER_KILL_REWARDS.CENTS_SEVEN, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Hanger', 'When this dies, expand shop slots by 1.', 2, 4, 2, MONSTER_KILL_REWARDS.CENTS_SEVEN, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Hopper', 'This takes no combat damage on attack rolls of 6.', 2, 3, 1, MONSTER_KILL_REWARDS.CENTS_THREE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Horf', 'Combat damage this deals is increased by 1 on attack rolls of 2.', 1, 4, 1, MONSTER_KILL_REWARDS.CENTS_THREE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Keeper Head', 'Each time this deals combat damage to a player, they lose 2¢.', 2, 4, 1, MONSTER_KILL_REWARDS.ROLL_FOR_CENTS, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Leaper', 'Combat damage this deals is doubled on attack rolls of 1.', 2, 4, 1, MONSTER_KILL_REWARDS.CENTS_FIVE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Leech', 'No Effect.', 1, 4, 2, MONSTER_KILL_REWARDS.LOOT1, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Mom\'s Dead Hand', 'When this dies, the active player may steal a non-eternal item another player controls.', 2, 5, 1, MONSTER_KILL_REWARDS.CENTS_FOUR, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Mom\'s Eye', 'When this dies, the active player may look at a player\'s hand.', 1, 4, 2, MONSTER_KILL_REWARDS.LOOT1, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Mom\'s Hand', 'When the attacking player rolls an attack roll of 6, cancel everything that hasn\'t resolved and end the turn.', 2, 4, 1, MONSTER_KILL_REWARDS.CENTS_FOUR, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Mulliboom', 'When this dies, the active player deals 3 damage to a player.', 1, 2, 4, MONSTER_KILL_REWARDS.CENTS_SIX, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Mulligan', 'When this dies, expand monster slots by 1.', 1, 3, 1, MONSTER_KILL_REWARDS.CENTS_THREE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Pale Fatty', 'No Effect.', 4, 3, 1, MONSTER_KILL_REWARDS.CENTS_SIX, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Pooter', 'No Effect.', 2, 3, 1, MONSTER_KILL_REWARDS.LOOT1, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Portal', 'When this dies, the active player must make an additional attack.', 2, 4, 1, MONSTER_KILL_REWARDS.CENTS_THREE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Psy Horf', 'When this dies, the active player recharges each item they control.', 1, 5, 1, MONSTER_KILL_REWARDS.LOOT1, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Rage Creep', 'Damage this deals to the active player is also dealt to the player to their left.', 1, 5, 1, MONSTER_KILL_REWARDS.LOOT2, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Red Host', 'No Effect.', 2, 3, 2, MONSTER_KILL_REWARDS.CENTS_FIVE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Ring of Flies', 'Each time the attacking player rolls an attack roll of 3, they must steal a loot card from from another player at random.', 3, 3, 1, MONSTER_KILL_REWARDS.CENTS_THREE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Spider', 'No Effect.', 1, 4, 1, MONSTER_KILL_REWARDS.LOOT1, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Squirt', 'No Effect.', 2, 3, 1, MONSTER_KILL_REWARDS.LOOT1, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Stoney', 'Monsters have +1 to dice roll. | This can\'t be attacked. | When another monster dies, this dies.', 3, 0, 0, MONSTER_KILL_REWARDS.LOOT1, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Swarm of Flies', 'Each time the attacking player rolls an attack roll of 5, they take 1 damage.', 5, 2, 1, MONSTER_KILL_REWARDS.CENTS_FIVE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Trite', 'No Effect.', 1, 5, 1, MONSTER_KILL_REWARDS.LOOT2, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Wizoob', 'When this dies, the active player chooses a player. that player destroys a soul they control.', 3, 5, 1, MONSTER_KILL_REWARDS.LOOT3, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Cursed Fatty', '(Curse Effect) Each time a player rolls a ➄, they discard a loot card.', 4, 2, 1, MONSTER_KILL_REWARDS.LOOT2, 0, false, true],
    [ORIGIN_SET.BASE_V2, 'Cursed Gaper', '(Curse Effect) Each time a player rolls a ➃, each monster gains +1 attack till end of turn.', 2, 4, 1, MONSTER_KILL_REWARDS.CENTS_THREE, 0, false, true],
    [ORIGIN_SET.BASE_V2, 'Cursed Horf', '(Curse Effect) Each time a player rolls a ➁, they take 2 damage.', 1, 4, 1, MONSTER_KILL_REWARDS.CENTS_THREE, 0, false, true],
    [ORIGIN_SET.BASE_V2, 'Cursed Keeper Head', '(Curse Effect) Each time a player rolls a ➀, they lose 2¢.', 2, 4, 1, MONSTER_KILL_REWARDS.ROLL_FOR_CENTS, 0, false, true],
    [ORIGIN_SET.BASE_V2, 'Cursed Mom\'s Hand', '(Curse Effect) When the active player rolls a 6, cancel everything that hasn\'t resolved and end the turn.', 2, 4, 1, MONSTER_KILL_REWARDS.CENTS_FOUR, 0, false, true],
    [ORIGIN_SET.BASE_V2, 'Cursed Psy Horf', '(Curse Effect) Each time a player activates an item, they take 1 damage.', 1, 5, 1, MONSTER_KILL_REWARDS.LOOT2, 0, false, true],
    [ORIGIN_SET.BASE_V2, 'Holy Dinga', 'Each time a player rolls a ❻, they heal 1HP.', 3, 3, 1, MONSTER_KILL_REWARDS.ROLL_FOR_CENTS, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Holy Dip', 'each time a player rolls a ❶, they gain 1¢.', 1, 4, 1, MONSTER_KILL_REWARDS.CENTS_ONE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Holy Keeper Head', 'Each time a player rolls a ❹, they gain 2¢.', 2, 4, 1, MONSTER_KILL_REWARDS.ROLL_FOR_CENTS, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Holy Mom\'s Eye', 'Each time a player rolls a ❷, they may recharge an item.', 1, 4, 2, MONSTER_KILL_REWARDS.LOOT1, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Holy Squirt', 'Each time a player rolls a ❺, they loot 1.', 2, 3, 1, MONSTER_KILL_REWARDS.LOOT2, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Carrion Queen', 'This takes no combat damage on attack rolls of 4 or 5.', 3, 4, 1, MONSTER_KILL_REWARDS.PLUS1TREASURE, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Chub', 'Each time the attacking player rolls an attack roll of 1, this heals 2 HP.', 4, 3, 1, MONSTER_KILL_REWARDS.CENTS_SEVEN, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Conquest', 'When this dies, the active player must make an additional attack.', 2, 3, 1, MONSTER_KILL_REWARDS.CENTS_SIX, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Daddy Long Legs', 'Each time the attacking player rolls an attack roll of 1, each monster gains +1 to dice roll till end of turn.', 4, 4, 1, MONSTER_KILL_REWARDS.CENTS_SEVEN, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Dark One', 'Each time this takes damage, it gains +1ATK till end of turn.', 3, 4, 1, MONSTER_KILL_REWARDS.PLUS1TREASURE, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Death', 'When this dies, the active player kills a player.', 3, 4, 2, MONSTER_KILL_REWARDS.PLUS1TREASURE, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Envy', 'When this dies, the active player must make an additional attack.', 2, 5, 1, MONSTER_KILL_REWARDS.CENTS_ONE, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Famine', 'When this dies, the active player skips their next turn.', 2, 3, 1, MONSTER_KILL_REWARDS.LOOT3, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Gemini', 'While this is at 1 HP, it has +1 attack.', 3, 4, 1, MONSTER_KILL_REWARDS.CENTS_FIVE, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Gluttony', 'Each time this takes combat damage on an attack roll of 6, deal 1 damage to the player to the active player\'s left.', 4, 3, 1, MONSTER_KILL_REWARDS.LOOT1, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Greed', 'Each time this deals damage, each player loses 4¢.', 3, 4, 1, MONSTER_KILL_REWARDS.CENTS_NINE, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Gurdy', 'No Effect.', 5, 4, 1, MONSTER_KILL_REWARDS.CENTS_SEVEN, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Gurdy Jr.', 'Each time the attacking player activates an item, they take 1 damage.', 2, 5, 1, MONSTER_KILL_REWARDS.PLUS1TREASURE, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Larry Jr.', 'While this is at 2 HP or less, it has +1 to dice roll.', 4, 3, 1, MONSTER_KILL_REWARDS.CENTS_SIX, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Little Horn', 'No Effect.', 2, 6, 1, MONSTER_KILL_REWARDS.LOOT2, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Lust', 'Each time this takes combat damage, it deals 1 damage to the attacking player.', 2, 4, 1, MONSTER_KILL_REWARDS.LOOT2, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Mask of Infamy', 'While this is at 1 HP, it has +2 to dice roll.', 4, 4, 1, MONSTER_KILL_REWARDS.PLUS1TREASURE, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Mega Fatty', 'Each time this deals combat damage, it heals 1 HP.', 3, 3, 1, MONSTER_KILL_REWARDS.LOOT2, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Monstro', 'No Effect.', 4, 4, 1, MONSTER_KILL_REWARDS.CENTS_SIX, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Peep', 'When this dies, search the monster deck for a card named the bloat and put it in a monster slot not being attacked, then shuffle the monster deck.', 3, 4, 1, MONSTER_KILL_REWARDS.PLUS1TREASURE, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Pestilence', 'When this dies, the active player deals 2 damage divided as they choose to any number of monsters or players.', 4, 4, 1, MONSTER_KILL_REWARDS.LOOT2, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Pin', 'This takes no combat damage on attack rolls of 6.', 2, 4, 1, MONSTER_KILL_REWARDS.CENTS_FIVE, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Pride', 'When an attack is declared on this, the active player chooses a player. that player discards 2 loot cards.', 2, 4, 1, MONSTER_KILL_REWARDS.CENTS_FIVE, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Rag Man', 'When this dies, after gaining rewards, the active player rolls- 1 or 6: Put this on top of the monster deck.', 2, 3, 2, MONSTER_KILL_REWARDS.LOOT3, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Scolex', 'Each time this deals combat damage to a player, they discard a loot card.', 3, 5, 1, MONSTER_KILL_REWARDS.PLUS1TREASURE, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Sloth', 'When this dies, the player that killed it discards their hand.', 3, 4, 1, MONSTER_KILL_REWARDS.CENTS_ONE, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'The Bloat', 'Each time this deals combat damage, it deals 1 damage to each non-active player.', 4, 4, 2, MONSTER_KILL_REWARDS.PLUS1TREASURE, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'The Duke of Flies', 'Each time this would take damage, the active player rolls- 1: Prevent that damage.', 4, 3, 1, MONSTER_KILL_REWARDS.LOOT2, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'The Haunt', 'Every other time this takes damage each turn, it gains +1 to dice roll till end of turn.', 3, 4, 1, MONSTER_KILL_REWARDS.PLUS1TREASURE, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'The Lamb', 'When this dies, the active player may choose another player. They give you a soul they control.', 6, 3, 6, MONSTER_KILL_REWARDS.CENTS_THREE, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'War', 'Each time this takes damage, it gains +1 attack till end of turn.', 3, 3, 1, MONSTER_KILL_REWARDS.CENTS_EIGHT, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Wrath', 'When this dies, the active player rolls- 1-3: Each player takes 1 damage., 4-6: Each player takes 2 damage.', 3, 3, 1, MONSTER_KILL_REWARDS.CENTS_SIX, 1, false, false],
    [ORIGIN_SET.BASE_V2, 'Mom!', 'Combat damage this deals is doubled on attack rolls of 1. When this dies, expand monsters slots by 1.', 5, 4, 2, MONSTER_KILL_REWARDS.PLUS1TREASURE, 2, false, false],
    [ORIGIN_SET.BASE_V2, 'Satan!', 'Each time the attacking player rolls an attack roll of 6, they choose a living player. That player dies.', 6, 4, 2, MONSTER_KILL_REWARDS.PLUS2TREASURE, 2, false, false],
    [ORIGIN_SET.BASE_V2, 'Curse of Amnesia', '(Curse Effect) At the end of your turn, discard 2 loot cards. | When this enters play, give this to a player. When they die, they put this into discard.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, true],
    [ORIGIN_SET.BASE_V2, 'Curse of Greed', '(Curse Effect) At the end of your turn, lose 4¢. | When this enters play, give this to a player. When they die, they put this into discard.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, true],
    [ORIGIN_SET.BASE_V2, 'Curse of Loss', '(Curse Effect) When you die, destroy a soul you control. | When this enters play, give this to a player. When they die, they put this into discard.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, true],
    [ORIGIN_SET.BASE_V2, 'Curse of Pain', '(Curse Effect) At the start of your turn, take 1 damage. | When this enters play, give this to a player. When they die, they put this into discard.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, true],
    [ORIGIN_SET.BASE_V2, 'Curse of the Blind', '(Curse Effect) Monsters have +1 to dice roll on your turn. | When this enters play, give this to a player. When they die, they put this into discard.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, true],
    [ORIGIN_SET.BASE_V2, 'Ambush!', 'The active player must attack the monster deck 2 times this turn.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, false],
    [ORIGIN_SET.BASE_V2, 'Chest', 'Roll- 1-2: gain 1¢., 3-4: Gain 3¢., 5-6: Gain 6¢.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, false],
    [ORIGIN_SET.BASE_V2, 'Chest', 'Roll- 1-2: Loot 1., 3-4: Loot 2., 5-6: Loot 3.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, false],
    [ORIGIN_SET.BASE_V2, 'Cursed Chest', 'Roll- 1-3: take 1 damage., 4-5: take 2 damage., 6: search the treasure deck for a guppy item, gain it, then shuffle the treasure deck.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, true],
    [ORIGIN_SET.BASE_V2, 'Dark Chest', 'Roll- 1-2: Loot 1., 3-4: Gain 3¢., 5-6: Take 2 damage.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, false],
    [ORIGIN_SET.BASE_V2, 'Dark Chest', 'Roll- 1-2: Gain 1¢., 3-4: Loot 2., 5-6: Take 2 damage.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, false],
    [ORIGIN_SET.BASE_V2, 'I Can See Forever!', 'Look at the top 6 cards of the loot deck. Put them back in any order, then loot 1.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Mega Troll Bomb!', 'Each player takes 2 damage!', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Secret Room!', 'Roll- 1: Take 3 damage., 2-3: Discard 2 loot cards., 4-5: Gain 7¢., 6: Gain +1 treasure.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Shop Upgrade!', 'Expand shop slots by 2. |  The active player may attack an additional time this turn.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'Troll Bombs', 'Take 2 damage!', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'We Need To Go Deeper!', 'Put any number of non-event monster cards in discard on top of the monster deck. | The active player may attack an additional time this turn.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, false, false],
    [ORIGIN_SET.BASE_V2, 'XL Floor!', 'Expand monster slots by 1. | The active player may attack an additional time this turn.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Bony', 'Each time the attacking player rolls an attack roll of 1, this gains +2 attack till end of turn.', 2, 3, 1, MONSTER_KILL_REWARDS.LOOT1, 0, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Brain', 'Each time the attacking player rolls an attack roll of 6, they take 1 damage.', 2, 3, 1, MONSTER_KILL_REWARDS.NONE, 0, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Flaming Hopper', 'This takes no combat damage on attack rolls of 6.', 1, 4, 2, MONSTER_KILL_REWARDS.CENTS_FOUR, 0, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Globin', 'When this reaches 1 HP, the active player rolls- 1-4: This takes 1 damage. 5-6: This heals 2HP.', 4, 4, 1, MONSTER_KILL_REWARDS.LOOT3, 0, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Nerve Ending', 'No Effect.', 4, 2, 1, MONSTER_KILL_REWARDS.CENTS_THREE, 0, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Roundy', 'Each time this deals combat damage, it deals 1 damage to each other monster.', 3, 4, 2, MONSTER_KILL_REWARDS.CENTS_SIX, 0, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Sucker', 'When this dies, it deals 1 damage to each player.', 1, 3, 1, MONSTER_KILL_REWARDS.LOOT1, 0, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Swarmer', 'When this dies, expand monster slots by 2.', 4, 3, 2, MONSTER_KILL_REWARDS.PLUS1TREASURE, 0, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Tumor', 'Each time this takes damage, it deals 1 damage to each non-active player.', 2, 5, 2, MONSTER_KILL_REWARDS.CENTS_SIX, 0, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Cursed Globin', '(Curse Effect) Each time a player rolls a ➂, each monster heals 2HP.', 3, 4, 1, MONSTER_KILL_REWARDS.ROLL_FOR_LOOT, 0, false, true],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Cursed Tumor', '(Curse Effect) Each time a player rolls a ➃, each player takes 1 damage.', 3, 4, 1, MONSTER_KILL_REWARDS.ROLL_FOR_CENTS, 0, false, true],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Holy Bony', 'Each time a player rolls a ❻, they may look at the top 3 cards of a deck and put them back in any order.', 1, 3, 1, MONSTER_KILL_REWARDS.LOOT2, 0, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Holy Mulligan', 'When this dies, expand monster slots by 2. The active player may attack an additional time this turn.', 1, 3, 1, MONSTER_KILL_REWARDS.CENTS_THREE, 0, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Blastocyst', 'When this dies, expand monster slots by 2. The active player may attack the monster deck an additional time.', 5, 4, 1, MONSTER_KILL_REWARDS.LOOT1, 1, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Dingle', 'Each time the active player deals damage to this, they roll-, 1-2: They take 1 damage., 3-4: Each player takes 1 damage., 5-6: This takes 1 damage.', 3, 3, 1, MONSTER_KILL_REWARDS.CENTS_SIX, 1, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Headless Horseman', 'The first time this would die each turn, prevent death. This heals 2 HP and gains +1 to dice roll and -1 attack till end of turn.', 3, 3, 2, MONSTER_KILL_REWARDS.PLUS1TREASURE, 1, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Krampus', 'The active player must attack this once each turn if able.', 4, 4, 2, MONSTER_KILL_REWARDS.PLUS1TREASURE, 1, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Monstro II', 'Each time this deals combat damage, the active player rolls- 1-3: Deal 1 damage to the player to your right., 4-6: Deal 1 damage to the player to your left.', 5, 4, 1, MONSTER_KILL_REWARDS.PLUS1TREASURE, 1, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'The Fallen', 'When this dies, look at the top 5 cards of the monster deck and put them back in any order.', 4, 5, 2, MONSTER_KILL_REWARDS.PLUS1TREASURE, 1, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Widow', 'No Effect.', 3, 4, 1, MONSTER_KILL_REWARDS.LOOT2, 1, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Isaac!', 'Each time this takes damage, the active player chooses a living player. This deals 1 damage to that player.', 7, 3, 1, MONSTER_KILL_REWARDS.PLUS1TREASURE, 2, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Mom\'s Heart!', 'When a player gains this soul, choose a player who controls the most souls or tied for the most. That player wins.', 8, 4, 2, MONSTER_KILL_REWARDS.NONE, 2, false, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Curse of Blood Lust', '(Curse Effect) You must attack on your turn if able. | When this enters play, give this to a player. When they die, they put this into discard.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, true],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Curse of Impulse', '(Curse Effect) At the end of your turn, deactivate each item you control and your character. | When this enters play, give this to a player. When they die, they put this into discard.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, true],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Angel Room', 'Roll- 1: Gain +2 treasure., 2-3: Gain +1 treasure., 4-6: Loot 2.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Boss Rush!', 'Reveal cards from the top of the monster deck till you reveal 2 boss cards. Put them in one or more monster slots not being attacked and the rest into discard. The active player must make an additional attack on one of them this turn.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Head Trauma', 'Discard 2 loot cards.',-1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Holy Chest', 'Roll- 1-2: Prevent the next 2 damage you would take this turn. You may attack an additional time this turn., 3-5: Gain 7¢., 6: This becomes a soul. gain it.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Spiked Chest', 'Roll- 1-2: Take 1 damage., 3-4: Take 1 damage. loot 1., 5-6: Take 1 damage. gain +1 treasure.', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, false],
    [ORIGIN_SET.FOUR_SOULS_PLUS_V2, 'Troll Bombs', 'Take 2 damage!', -1, -1, -1, MONSTER_KILL_REWARDS.NONE, 0, true, false],
    [ORIGIN_SET.REQUIEM, '', '', 0, 0, 0, MONSTER_KILL_REWARDS.NONE, 1, false, false],
    // Continue with the rest of the sets
]

/* The sub-arrays contain the following:
* 1. Origin Set: enum of string
* 2. Card Title: string
* 3. Effect Description: string
* 4. health: number
* 5. Dice Roll: number
* 6. attack: number
* 7. reward: string
* 8. Number of souls: number
* 9. isEvent: boolean
* 10. isCurse: boollean
* 
* isTappable and isPayable set to false by default
*/
export const treasureCardInfo = [
    [ORIGIN_SET.BASE_V2, 'Belly Button', 'You may play an additional loot card on your turn. | Each time you take damage, you may recharge your character.', false, false],
    [ORIGIN_SET.BASE_V2, '', '', false, false],
]

export const soulCardInfo = [
    [ORIGIN_SET.BASE_V2, 'Soul of Envy', 'The first time a player controls their 3rd soul, the active player chooses a player who controls the fewest souls or tied for fewest. that player gains this soul.'],
    [ORIGIN_SET.BASE_V2, 'Soul of Gluttony', 'The first player to have 10 or more loot cards in their hand gains this soul.'],
    [ORIGIN_SET.BASE_V2, 'Soul of Greed', 'The first player to have 25¢ or more gains this soul.'],
    [ORIGIN_SET.REQUIEM, 'Soul of Guppy', 'The first player to control 2 or more guppy items gains this soul.'],
    [ORIGIN_SET.REQUIEM, 'Soul of Lust', 'Each time a player kills a monster, put a counter on this. | When the 6th counter is put on this, the active player gains this soul.'],
    [ORIGIN_SET.REQUIEM, 'Soul of Pride', 'Each time a player gains a treasure, put a counter on this. | When the 6th counter is put on this, the active player gains this soul.'],
    [ORIGIN_SET.REQUIEM, 'Soul of Sloth', 'The first time a player controls 4 items, the active player chooses a player who controls the fewest items or tied for fewest. that player gains this soul.'],
    [ORIGIN_SET.REQUIEM, 'Soul of Wrath', 'Each time a player dies, put a counter on this. | When the 6th counter is put on this, the active player gains this soul.'],
    [ORIGIN_SET.REQUIEM_WARP_ZONE, 'Strawberry', 'The first active player to roll a 1 three times on the same turn gains this soul.'],
]

export const lootCardInfo = [
    ['Isaac', '', 'The D6', 2, 1]
]

export const roomCardInfo = [
    [ORIGIN_SET.REQUIEM, 'All Hallows\' Eve', 'Players can\'t gain souls', false],
    [ORIGIN_SET.REQUIEM, 'Angelic Intervention', 'Each time the active player attacks the top of the monster deck, after putting it in a monster slot, they may cancel their attack.', false],
    [ORIGIN_SET.REQUIEM, 'Battle Royale!!!', 'The active player may attack other players. Attacked players have 3+ dice roll. | When a player dies, if that player was attacked this turn, that player gives the active player the item they would destroy for the death penalty.', false],
    [ORIGIN_SET.REQUIEM, 'Battle Royale!!!!', 'The active player may attack other players. Attacked players have 4+ dice roll. | When a player dies, if that player was attacked this turn, that player gives the active player the item they would destroy for the death penalty.', false],
    [ORIGIN_SET.REQUIEM, 'Battle Royale!!!!!', 'The active player may attack other players. Attacked players have 5+ dice roll. | When a player dies, if that player was attacked this turn, that player gives the active player the item they would destroy for the death penalty.', false],
    [ORIGIN_SET.REQUIEM, 'Beggar', '(Paid Effect) Pay 3¢: roll- 3-4: gain 2¢, 5: loot 2. ,6: gain +1 treasure. Put this into discard.', true],
    [ORIGIN_SET.REQUIEM, 'Black Champions', 'Monsters have +1 attack.', false],
    [ORIGIN_SET.REQUIEM, 'Blessing of Gluttony', 'The active player loots +1 during their loot step.', false],
    [ORIGIN_SET.REQUIEM, 'Blessing of Greed', 'At the start of each turn, the active player gains 3¢.', false],
    [ORIGIN_SET.REQUIEM, 'Blessing of Steam', 'Shop items the active player purchases cost 5¢ less.', false],
    [ORIGIN_SET.REQUIEM, 'Blessing of the Inner Eye', 'Each time a player declares an attack, before choosing what to attack, they may look at the top 3 cards of the monster deck and put them back in any order.', false],
    [ORIGIN_SET.REQUIEM, 'Blessing of the Sack', 'Rewards are doubled.', false],
    [ORIGIN_SET.REQUIEM, 'Blind Rage', 'The active player must attack the monster deck once each turn if able.', false],
    [ORIGIN_SET.REQUIEM, 'Blood Donation', '(Paid Effect) Pay 1 HP: gain 3¢.', true],
    [ORIGIN_SET.REQUIEM, 'Blood Lust', 'The active player must attack each turn if able. | The first time the active player declares an attack each turn, they must attack an additional time this turn.', true],
    [ORIGIN_SET.REQUIEM, 'Blood Money', 'Each time a player dies, each other player gains 4¢.', true],
]