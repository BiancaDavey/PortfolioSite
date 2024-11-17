---
title: Sudoku Solver
publishDate: 2024-12-27 00:00:00
img: /PortfolioSite/assets/sudoku0.png
img_alt: Image of project
description: |
tags:
  - Python
  - Depth First Search Algorithm
preview_tags:
  - Python
  - DFS
---

This program implements a Depth First Search algorithm to solve a sudoku puzzle.

The program iterates a 2D array representing the sudoku puzzle to find empty cells, and calls functions to find matches for digits 1-9 in a row, column and 3x3 grid. 

The program backtracks and re-assigns cells to an empty 0 if matches are found for all digits. The state of the sudoku puzzle is updated after each iteration. 

The state of the sudoku puzzle is provided to the user in a visual form through terminal output.

Click to view the project on <b><a href="https://github.com/BiancaDavey/SudokuDepthFirstSearch" target="_blank">GitHub</a></b>.