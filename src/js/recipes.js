const recipes = {
  "Blue Emerald": {
    "Opal": 3,
    "Sapphire": 3,
    "AquaMarine": 3,
    "Emerald": 3,
    "Elixir of Purity": 1,
    "Black Scroll (Level 1)": 1
  },
  "Droplet of Strength": {
    "Power Crystal": 2,
    "Elixir of Purity": 1,
    "Black Scroll (Level 1)": 1,
    "Basic Spell Essence": 3
  },
  "Mana Shard": {
    "Wisdom Crystal": 2,
    "Black Scroll (Level 1)": 1,
    "Depleted Crystal": 3,
    "Mana Crystal": 4
  },
  "Time Sand": {
    "Power Crystal": 1,
    "Wisdom Crystal": 1,
    "DEX Crystal": 1,
    "LUK Crystal": 1,
    "Elixir of Purity": 1,
    "Black Scroll (Level 1)": 1,
    "Twisted Time": 50,
    "Piece of Time": 10
  },
  "Stamina Elixir": {
    "Herb Root": 12,
    "Elixir of Purity": 1,
    "Black Scroll (Level 1)": 1,
    "The Magic Rock": 2,
    "Alchemist Stone": 8
  },
  "Life Essence": {
    "Blue Emerald": 2,
    "Elixir of Purity": 1,
    "Depleted Crystal": 4,
    "Dusk Essence": 1,
    "Black Scroll (Level 2)": 1
  },
  "Wind Crystal": {
    "DEX Crystal": 4,
    "Blue Emerald": 2,
    "Elixir of Purity": 2,
    "Depleted Crystal": 5,
    "Dusk Essence": 1,
    "Black Scroll (Level 2)": 1
  },
  "Dark Soul Stone": {
    "Black Crystal": 3,
    "Droplet of Strength": 4,
    "Elixir of Purity": 2,
    "Unrelenting Flame": 2,
    "Black Scroll (Level 2)": 1
  },
  "Ice Crystal": {
    "AquaMarine": 5,
    "Mana Shard": 6,
    "Elixir of Purity": 2,
    "Black Scroll (Level 2)": 1
  },
  "Star Crystal": {
    "Droplet of Strength": 2,
    "Mana Shard": 2,
    "Time Sand": 2,
    "Elixir of Purity": 2,
    "Black Scroll (Level 2)": 1,
    "White Crystal": 1
  },
  "Piece of Courage": {
    "Power Crystal": 6,
    "Droplet of Strength": 6,
    "Elixir of Purity": 2,
    "Depleted Crystal": 12,
    "Viridium Plate": 10,
    "Black Scroll (Level 3)": 1
  },
  "Piece of Dexterity": {
    "DEX Crystal": 14,
    "Wind Crystal": 2,
    "Elixir of Purity": 2,
    "Depleted Crystal": 12,
    "Viridium Plate": 10,
    "Black Scroll (Level 3)": 1
  },
  "Crystal Shard": {
    "Wind Crystal": 1,
    "Ice Crystal": 1,
    "Elixir of Purity": 3,
    "Depleted Crystal": 30,
    "Confusion Fragment": 3,
    "White Crystal": 3,
    "Black Scroll (Level 3)": 1
  },
  "Potent Wind Crystal": {
    "Wind Crystal": 3,
    "Elixir of Purity": 5,
    "Depleted Crystal": 15,
    "Black Scroll (Level 3)": 1
  },
  "Blood Ruby": {
    "Garnet": 12,
    "Topaz": 12,
    "Patchouli Seed Oil": 4,
    "Juniper Berry Flower Oil": 2,
    "Dark Soul Stone": 1,
    "Ice Crystal": 1,
    "Depleted Crystal": 10,
    "Forever Unrelenting Flame": 4,
    "Black Scroll (Level 3)": 1
  },
  "Stabilizer Crystal": {
    "Amethyst": 5,
    "Patchouli Seed Oil": 4,
    "Juniper Berry Flower Oil": 2,
    "Blue Emerald": 4,
    "Life Essence": 1,
    "Elixir of Purity": 3,
    "Philosopher's Stone": 1,
    "Black Scroll (Level 3)": 1
  },
  "Crystal of Dreams": {
    "Elixir of Purity": 10,
    "Dream Fragment": 60,
    "Dream Stone": 15,
    "Black Scroll (Level 3)": 1
  },
  "Elysium's Tear": {
    "Time Sand": 3,
    "Elixir of Purity": 3,
    "White Crystal": 1,
    "Star Rock": 1,
    "Moon Rock": 1,
    "Brilliant Dusk Essence": 1,
    "Black Scroll (Level 3)": 1
  },
  "Angel Figurine": {
    "Stamina Elixir": 4,
    "Life Essence": 1,
    "Elixir of Purity": 2,
    "Lidium": 6,
    "Black Scroll (Level 3)": 1
  },
  "Frozen Heart": {
    "Hyssop Flower Oil": 2,
    "Time Sand": 1,
    "Life Essence": 1,
    "Ice Crystal": 1,
    "Elixir of Purity": 3,
    "Brilliant Dusk Essence": 2,
    "Black Scroll (Level 3)": 1
  },
  "Sun Stone": {
    "Gold Plate": 10,
    "Depleted Crystal": 25,
    "Primal Essence": 3,
    "Star Rock": 2,
    "Forever Unrelenting Flame": 3,
    "Black Scroll (Level 3)": 1,
    "Star Crystal": 1
  },
  "Moon Stone": {
    "Gold Plate": 10,
    "Depleted Crystal": 25,
    "Primal Essence": 3,
    "Moon Rock": 2,
    "Brilliant Dusk Essence": 3,
    "Black Scroll (Level 3)": 1
  },
  "Emblem of Rage": {
    "Unrelenting Flame": 5,
    "Elixir of Caution": 50,
    "Elixir of Rage": 50,
    "Lidium": 5,
    "Viridium Plate": 20,
    "Rock of Time": 10,
    "Black Scroll (Level 3)": 1
  },
  "Fount of Wealth": {
    "Diamond": 10,
    "Gold Plate": 40,
    "Depleted Crystal": 40,
    "Twisted Time": 800,
    "Lidium": 15,
    "Viridium Plate": 30,
    "White Crystal": 7,
    "Black Scroll (Level 3)": 1,
    "Sealed Wiseman Stone": 1,
    "NX": 10000000
  },
  "Shadow Orb": {
    "Dark Soul Stone": 1,
    "Ice Crystal": 1,
    "Star Crystal": 1,
    "Depleted Crystal": 40,
    "Twisted Time": 300,
    "Confusion Fragment": 15,
    "Forever Unrelenting Flame": 3,
    "Black Scroll (Level 3)": 1,
    "Sealed Warrior Stone": 1
  },
  "Evil Hammer": {
    "Confusion Fragment": 15,
    "Primal Essence": 1,
    "Lidium": 7,
    "Viridium Plate": 20,
    "White Crystal": 10,
    "Grand Spell Essence": 10,
    "Forever Unrelenting Flame": 5,
    "Scroll of Secrets": 1
  },
  "Chaos Stone": {
    "Elixir of Purity": 13,
    "Depleted Crystal": 40,
    "Twisted Time": 666,
    "Confusion Fragment": 5,
    "Primal Essence": 1,
    "Star Rock": 1,
    "Moon Rock": 1,
    "Chaos Scroll 60%": 35
  },
  "Dire Fang": {
    "Piece of Dexterity": 1,
    "Confusion Fragment": 30,
    "Elixir of Haste": 100,
    "Viridium Plate": 7,
    "Forever Unrelenting Flame": 7,
    "Sealed Warrior Stone": 1
  },
  "Angel's Charm": {
    "Elixir of Purity": 3,
    "Mana Crystal": 200,
    "Viridium Plate": 30,
    "White Crystal": 3,
    "Brilliant Dusk Essence": 4,
    "Sealed Saint Stone": 1,
    "Angel Figurine": 1
  },
  "Moonlight's Flower": {
    "Stabilizer Crystal": 1,
    "Moon Stone": 2,
    "Elixir of Purity": 10,
    "Twisted Time": 1000,
    "Philosopher's Stone": 15,
    "Superior Item Crystal": 50,
    "Mana Crystal": 100,
    "Moon Rock": 6,
    "Brilliant Dusk Essence": 5,
    "Forever Unrelenting Flame": 10,
    "Scroll of Secrets": 1,
    "Sealed Saint Stone": 3,
    "NX": 17000000
  },
  "Viridium Plate": {
    "Elixir of Purity": 1,
    "Superior Mold": 1,
    "NX": 50000
  },
  "White Crystal": {
    "Power Crystal": 2,
    "Wisdom Crystal": 2,
    "DEX Crystal": 2,
    "LUK Crystal": 2,
    "Dark Crystal": 2,
    "Mana Crystal": 2,
    "Basic Spell Essence": 3
  },
  "Star Rock": {
    "Opal": 3,
    "Sapphire": 3,
    "AquaMarine": 3,
    "Emerald": 3,
    "Garnet": 3,
    "Topaz": 3,
    "Amethyst": 3,
    "Diamond": 3,
    "Elixir of Purity": 1
  },
  "Moon Rock": {
    "Gold Plate": 3,
    "Bronze Plate": 3,
    "Steel Plate": 3,
    "Mithril Plate": 3,
    "Adamantium Plate": 3,
    "Silver Plate": 3,
    "Orihalcon Plate": 3,
    "Elixir of Purity": 1
  },
  "Dream Stone": {
    "Elixir of Purity": 1,
    "Depleted Crystal": 3,
    "Dream Fragment": 16
  },
  "Rock of Time": {
    "Elixir of Purity": 1,
    "Piece of Time": 25
  },
  "Fine Spell Essence": {
    "Depleted Crystal": 2,
    "Mana Crystal": 2,
    "Basic Spell Essence": 2,
    "NX": 20000
  },
  "Grand Spell Essence": {
    "Depleted Crystal": 3,
    "Mana Crystal": 3,
    "Fine Spell Essence": 2,
    "NX": 80000
  },
  "Dusk Essence": {
    "Hyssop Flower Oil": 1,
    "Elixir of Purity": 1,
    "Mana Crystal": 8,
    "NX": 200000
  },
  "Brilliant Dusk Essence": {
    "Elixir of Purity": 1,
    "Grand Spell Essence": 3,
    "Dusk Essence": 5,
    "NX": 500000
  },
  "Forever Unrelenting Flame": {
    "Elixir of Purity": 1,
    "Twisted Time": 50,
    "Unrelenting Flame": 5,
    "NX": 500000
  },
  "Black Scroll (Level 2)": {
    "Elixir of Purity": 2,
    "Black Scroll (Level 1)": 3,
    "NX": 400000,
    "Meso": 4000000
  },
  "Black Scroll (Level 3)": {
    "Elixir of Purity": 5,
    "Black Scroll (Level 2)": 3,
    "NX": 3000000,
    "Meso": 30000000
  },
  "Scroll of Secrets": {
    "Elixir of Purity": 18,
    "Black Scroll (Level 3)": 2,
    "NX": 10000000,
    "Meso": 100000000
  },
  "Sealed Wiseman Stone": {
    "Wisdom Crystal": 15,
    "Hyssop Flower Oil": 6,
    "Depleted Crystal": 100,
    "Philosopher's Stone": 4,
    "Dream Fragment": 70,
    "Mana Crystal": 200,
    "Primal Essence": 3,
    "Rock of Time": 27,
    "Grand Spell Essence": 12,
    "Brilliant Dusk Essence": 5,
    "NX": 3000000
  },
  "Time Master Ring": {
    "Twisted Time": 2500,
    "Viridium Plate": 60,
    "White Crystal": 20,
    "Star Rock": 2,
    "Moon Rock": 2,
    "Grand Spell Essence": 75,
    "Brilliant Dusk Essence": 4,
    "Forever Unrelenting Flame": 4,
    "Scroll of Secrets": 1
  }
};