---
title: MERN Stack - Gomoku Game
publishDate: 2024-12-30 00:00:00
img: /PortfolioSite/assets/gomoku0.png
img_alt: Image of project
description: |
tags:
  - MERN Stack
  - React
  - TypeScript
  - CSS
  - Express.js
  - Node.js
  - MongoDB
---

This application features a playable gomoku game, and sign up and login validation restricting access to authenticated users. Using a React framework, Express.js, Node.js and MongoDB.

Click to view the project on <a href="https://github.com/BiancaDavey/Gomoku-Game/">GitHub</a>.

### Features

- Colour-coded display of squares selected by player one being black with a blue border and by player two being white with a pink border
- The game results in a draw if no free squares remain on the game board
- Status of the game is displayed, including which player’s turn it is and whether the game has been won by player one, won by player two or resulted in a draw
- Size of game board can be selected by the user
- Display of the id and final status of each saved game on the Games History page
- Display of the moves made in each game in order, including the square selected and the player who selected the square
- Validation of user input for logging in, with an error message displaying if the user has not entered a valid username and password
- User validation with token
- Restricted access to the Game, Games History and Game Log pages of the application, being only for authenticated users who have logged in successfully
- Backend with Express and MongoDB
- Gomoku title with flickering “neon light” animation effect
