# 2048-javascript
2048 Game development using javascript, css and html

Here are the basic rules of the game 2048:

Game Layout: The game is played on a 4x4 grid, filled with numeric tiles.

Objective: The main goal is to combine tiles with the same numbers to create a tile with the number 2048.

Gameplay:

Players swipe (up, down, left, or right) to move all tiles in the grid in that direction.
When two tiles with the same number touch, they merge into one tile that sums their numbers.
Every swipe adds a new tile with a value of 2 or 4 to a random empty spot on the grid.
Movement:

After each swipe, all tiles slide as far as possible in the chosen direction until they are stopped by either another tile or the edge of the grid.
If two mergeable tiles collide while moving, they will merge into a new tile with the total value of the two tiles.
Scoring:

Every time two tiles merge, the player earns points equal to the value of the new tile.
The game keeps track of the player's score continuously.
Winning:

The player wins by creating a tile with the number 2048.
The game doesn't end immediately after reaching 2048; players can continue to play to reach higher numbers.
Losing:

The player loses if the grid fills up with no possible adjacent matches left to make (no more swipes can lead to a merge).
Strategy:

A common strategy is to keep the highest value tile in a corner and work the other tiles around it.
No Undo:

Most versions of 2048 don't allow the player to undo moves, making every swipe count.
Game Over:

Once no more moves are possible and the player hasn't reached the 2048 tile, the game ends.
These rules create a simple yet challenging puzzle experience that has made 2048 a popular game on smartphones and web browsers.

![image](https://github.com/alegranados03/2048-javascript/assets/29020755/dffa3f80-d411-414b-a401-d7ded445475a)
