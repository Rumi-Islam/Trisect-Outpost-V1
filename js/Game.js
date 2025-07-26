import { TileMap } from "./TileMap.js";
import { Player } from "./Player.js";

//import { Monster } from "./Monster.js";

//for the floors and walls
const tileMapCanvas = document.getElementById("tileMapCanvas");
const tCtx = tileMapCanvas.getContext("2d");

//consists of players and monsters, along with furniture, items, and door events
//  also contains darkness level of the game
const entityCanvas = document.getElementById("entityCanvas");
const eCtx = entityCanvas.getContext("2d");

//canvas for player's health, inventory, and the like

//canvas for menus and settings

const tileSize = 64;

const tileMap = new TileMap(tileSize);

//eCtx.fillStyle="rgba(0, 0, 0, 0.1";

function gameloop()
{
	tileMap.draw(tCtx, eCtx);
}

setInterval(gameloop, 1000/1)