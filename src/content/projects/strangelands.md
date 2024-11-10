---
title: Unity C# Game - Strangelands
publishDate: 2024-12-31 00:00:00
img: /assets/strangelands1.png
img_alt: Image of project
description: |
tags:
  - GameDev
  - Unity
  - C#
  - OOP
---

Discover another realm on an impromptu trip through a mysterious portal, prompted by the disappearance of your mischievous cat on an otherwise ordinary Halloween night. 

A top-down 2D RPG made with Unity and C#. WIP.

Play a demo scene featuring a catch-and-collect mini game online <a href="https://biancadavey.github.io/DemoGame/">here</a>. Use E to interact and P to pause.

Download the playable demo on <a href="https://lunar-raven.itch.io/strangelands?secret=5cSTV6lX95qrWUb6SPEXrkAqojk">itch.io</a>.

### Gameplay Examples

#### Player Controller, Automated Movement, Animations & Lighting

This video demonstrates a scene in which the player must catch and collect mushroom-like characters.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/jVbzblS3o9E?si=grASrGAZMtdEFPGL" title="Strangelands" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

#### Quest System, Object Interactions

This video demonstrates player interactions within a scene, including the player interacting with NPC's, NPC movement and animations, and the quest state updating when the player interacts with the bed object, triggering the mushroom characters to appear in scene.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/phckJYuo_sc?si=CctMQhvQCJX1VJgo" title="Strangelands" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

#### Inventory System, Player Status, UI

This video demonstrates the inventory system, in-game UI for inventory, and player status being impacted by consuming specific inventory items.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/rWF-G-yTVrc?si=XddDJSSu8BWTKaoz" title="Strangelands" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

### Details

#### Dialogue

- YarnSpinner utilised for dialogue system
- Dialogue system enabling player interactions with NPC’s and objects in scenes
- Dialogue set to run upon player key-down interaction, or automatically when player is within a collision boundary
- Dialogue system connected to quest system, enabling different dialogue paths to play dependent on quest state
- Dialogue running can update quest state
- Dialogue UI displays dialogue and portrait of character or item (if applicable)
- Dialogue UI displays options for dialogue to player to select (if applicable)

#### Inventory

- Inventory system enabling player to obtain, view and use items
- Player can obtain items through key-down interaction with objects in scene, or through a vendor inventory menu
- Items in scene can be set as collectable once only whereby object will disappear from the scene, or regenerate each time a scene is reloaded
- Inventory UI displaying player items, quantity, and item description
- Vendor UI displaying items, quantity, price, description, and player’s remaining currency
- Functions to enable player to purchase item only when quantity ≥ 1 and when player currency ≥ item price, with item purchase text displaying outcome of purchase attempt

#### Quests

- Quest system links to dynamic changes in dialogue, items available, scenes unlocking, lighting and animations
- Quest system enabling player progress to be recorded and utilised for scene triggers
- Quest state is recorded in a dictionary<int, string>
- Quest state can be updated by player key-down interaction with an object in scene, automatically upon player entering collision boundary, through a dialogue path running, or dependent on player having a specific item and quantity in their inventory
- Functions to update player inventory dependent on quest state
- Quest UI displays any applicable quest text, dependent on player’s current quest state

#### Data Persistence

- Data persistence system enabling player progress to be saved and loaded
- Pause Menu UI in game enabling player to save game and return to main menu
- Save game function can be called by triggers in scenes
- Player current scene, position in scene, inventory, quest state and status are saved
- Up to four games can be saved at one time
- Game data class stores game data object
- Data persistence interface enables data persistence class methods to be implemented across inventory, quest, player status, and dialogue systems

#### Player Status

- Status UI displaying player bars for health and magicka
- Player status can be updated by interactions with objects in scene or by using items from inventory
- Function for player death to occur if health reaches 0, resets player to their initial position upon the scene loading through Player Controller class
- Planned: player magicka will enable player to use weapons against enemy NPC's
- Planned: player health will be impacted by attacks from enemy NPC's

#### Scene Management

- Scene transition triggers in each scene enabling player to transition to next scene
- Optional quest state check available for scenes only accessible upon player having a specific quest state
- Animated tiles in scenes
- Objects and NPC's can appear in scene based on quest state
- Lighting in scene can vary based on quest state

#### Player Controller & Automated Movement

- Player can control character through WSAD and arrow keys
- Automated NPC movement implemented for NPC’s to move along a set path, or to move towards or away from a target
- Automated NPC animations for idle NPC’s, to vary direction facing based on player being within a set range, or set to look in random directions
- Collision system in place for objects in scene
- Animations for player and NPC movement

#### Lighting

- Universal Render Pipeline (URP) utilised for dynamic scene lighting with shadows
- Functions for lighting to be linked to quest system and inventory, with lighting changing depending on player quest state and/or items in inventory
- Functions for lighting intensity to be varied according to player interactions in scene
- Fade-in and fade-out effects

#### Audio

- Background music in each scene
- Sound effects triggered upon player interacting with objects in scene, obtaining an item in inventory, or using an item in inventory, and can be dependent on quest state
- Sound effects for menu interactions

#### Menu UI

- Main menu UI enabling player to start a new game, load a saved game, continue the most recently saved game, view settings for the game, or exit the game
- Load game menu displays up to four saved games, the date and time it was saved, and an image representing the scene the game was saved in
- New game menu displays four available game slots, enabling player to start a new game from an empty game slot, or to overwrite a pre-existing saved game
- Pause menu UI allows player to pause game in-scene to save, continue or return to main menu
