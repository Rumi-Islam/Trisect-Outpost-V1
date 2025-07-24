export class TileMap
{
	//maybe for tilemap I use 2 different canvases, 1 for the map, the other for boundaries and entities
	constructor(tileSize)
	{
		this.tileSize = tileSize;

		this.grass = new Image();
		this.grass.src = "./img/blocks/GrassBlock.png";

		//sides
		this.militaryBlockVertical = new Image();
		this.militaryBlockVertical.src = "./img/blocks/MilitaryBlockVertical.png";

		this.militaryBlockHorizontal = new Image();
		this.militaryBlockHorizontal.src = "./img/blocks/MilitaryBlockHorizontal.png";

		//corners
		this.militaryBlockTopLeft = new Image();
		this.militaryBlockTopLeft.src = "./img/blocks/MilitaryBlockTopLeft.png";

		this.militaryBlockTopRight = new Image();
		this.militaryBlockTopRight.src = "./img/blocks/MilitaryBlockTopRight.png";

		this.militaryBlockBottomLeft = new Image();
		this.militaryBlockBottomLeft.src = "./img/blocks/MilitaryBlockBottomLeft.png";

		this.militaryBlockBottomRight = new Image();
		this.militaryBlockBottomRight.src = "./img/blocks/MilitaryBlockBottomRight.png";

		//rock maze
		this.rockWall = new Image();
		this.rockWall.src = "./img/blocks/RockWall.png"

		this.rockWallLight = new Image();
		this.rockWallLight.src = "./img/blocks/RockWallLight.png"

		this.rockFloor = new Image();
		this.rockFloor.src = "./img/blocks/RockFloor.png"

		this.rockFloorLight = new Image();
		this.rockFloorLight.src = "./img/blocks/RockFloorLight.png"

		//lab
		this.labFloor = new Image();
		this.labFloor.src = "./img/blocks/MilitaryLabFloor.png"
		
		this.labWall = new Image();
		this.labWall.src = "./img/blocks/MilitaryLabWall.png"

		//chars
		this.drX = new Image();
		this.drX.src = "./img/characters/DrX.png"

		this.fire = new Image();
		this.fire.src = "./img/blocks/Fire.png"
		this.fireNum = 0;

		this.setMap();
	}

	//0 = grass

	//1 = military block vertical
	//2 = military block horizontal
	//3 = military block topleft
	//4 = military block topright
	//5 = military block bottomleft
	//6 = military block bottomright

	//7 = rock wall
	//8 = rock wall light
	//9 = rock floor
	//10 = rock floor light

	// Camp Tutorial Area
	map = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ,2, 2, 2, 2, 2, 2, 2, 2, 4, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2],
		[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 2, 2, 2, 2, 2, 2],
		[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	];

	// Cave Entrance
	map2 = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0, 8],
		[0, 0, 0, 0, 0, 3, 2, 2, 2, 2, 2, 2, 2, 2 ,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4,  0,  0,  0,  0, 8],
		[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,  0,  0,  0,  8, 8],
		[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,  0,  0,  0,  8, 8],
		[2, 2, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,  0,  0,  8,  8, 8],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,  0,  0,  8,  8, 7],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,  2,  2,  8,  8, 7],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 9,  9, 9],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 9, 9],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,  2,  2,  8,  8, 7],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,  0,  0,  8,  8, 7],
		[2, 2, 2, 2, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,  0,  0,  8,  8, 7],
		[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,  0,  8,  8,  8, 7],
		[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,  0,  8,  8,  7, 7],
		[0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6,  8,  8,  8,  7, 7],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8,  8,  7,  7, 7]
	]; 

	// Cave Row 1 Column 3
	map3 = [
		[8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[8, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7 ,9, 9, 9, 9, 9, 9, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9],
		[8, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 9, 9, 9, 9, 9, 9, 7, 9, 7, 9, 7, 7, 7, 7, 7, 7],
		[7, 7, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 9, 7, 9, 7, 9, 7, 9, 9, 9, 9, 9, 9, 7],
		[7, 9, 9, 9, 9, 9, 7, 9, 9, 9, 9, 9, 9, 9, 9, 7, 9, 9, 7, 9, 7, 9, 7, 9, 7, 7, 7, 7, 9, 7],
		[7, 9, 9, 9, 9, 9, 7, 9, 9, 9, 9, 9, 9, 9, 9, 7, 9, 9, 7, 9, 7, 9, 7, 9, 9, 9, 9, 7, 9, 9],
		[7, 9, 9, 7, 9, 9, 7, 9, 9, 9, 9, 9, 7, 9, 9, 7, 9, 9, 7, 9, 7, 9, 7, 7, 7, 7, 9, 7, 7, 7],
		[9, 9, 9, 7, 9, 9, 7, 9, 9, 7, 9, 9, 7, 9, 9, 7, 9, 9, 7, 9, 7, 9, 7, 9, 9, 7, 9, 9, 9, 9],
		[9, 9, 9, 7, 9, 9, 7, 9, 9, 7, 9, 9, 7, 9, 9, 7, 9, 9, 7, 9, 7, 9, 7, 7, 9, 7, 9, 7, 7, 7],
		[7, 9, 9, 7, 7, 7, 7, 9, 9, 7, 7, 7, 7, 9, 9, 7, 9, 9, 7, 9, 7, 9, 7, 9, 9, 7, 9, 9, 9, 9],
		[7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 9, 9, 9, 9, 7, 9, 9, 7, 9, 7, 9, 7, 7, 9, 7, 9, 7, 7, 7],
		[7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 9, 9, 9, 9, 7, 9, 9, 7, 9, 7, 9, 7, 9, 9, 9, 9, 7, 9, 7],
		[7, 7, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 7, 9, 9],
		[7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 9, 7, 9, 7, 9, 7, 9, 9, 7, 7, 7],
		[7, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 9, 9, 9, 7, 9, 7, 9, 9, 9, 9, 9],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 7, 9, 7, 7, 7, 7]
	];
//
	// since map is too big, I shrink it down to full screen sized chunks, 
	// then combine them into the big map.
	setMap()
	{
		for(let i = 0; i < this.map.length; i++)
		{
			this.map[i] = this.map[i].concat(this.map2[i],this.map3[i]);
		}

		//note: the tileMapCanvas is the ID of the canvas.
		tileMapCanvas.width = this.map[0].length * this.tileSize;
		tileMapCanvas.height = this.map.length * this.tileSize;

		entityCanvas.width = tileMapCanvas.width;
		entityCanvas.height = tileMapCanvas.height;
	}

	draw(tCtx, eCtx)
	{
		//eCtx.clearRect(0,0,entityCanvas.width,entityCanvas.height);
		//eCtx.fillRect(0,0,entityCanvas.width,entityCanvas.height);
		for(let row = 0; row < this.map.length; row++)
		{
			for(let column = 0; column < this.map[0].length; column++)
			{
				let tile = this.map[row][column];
				switch(tile)
				{
					case 0:
						this.#drawBlock(tCtx, this.grass, column, row, this.tileSize);
						break;
					case 1:
						this.#drawBlock(tCtx, this.militaryBlockVertical, column, row, this.tileSize);
						break;
					case 2:
						this.#drawBlock(tCtx, this.militaryBlockHorizontal, column, row, this.tileSize);
						break;
					case 3:
						this.#drawBlock(tCtx, this.militaryBlockTopLeft, column, row, this.tileSize);
						break;
					case 4:
						this.#drawBlock(tCtx, this.militaryBlockTopRight, column, row, this.tileSize);
						break;
					case 5:
						this.#drawBlock(tCtx, this.militaryBlockBottomLeft, column, row, this.tileSize);
						break;
					case 6:
						this.#drawBlock(tCtx, this.militaryBlockBottomRight, column, row, this.tileSize);
						break;
					case 7:
						this.#drawBlock(tCtx, this.rockWall, column, row, this.tileSize);
						break;
					case 8:
						this.#drawBlock(tCtx, this.rockWallLight, column, row, this.tileSize);
						break;
					case 9:
						this.#drawBlock(tCtx, this.rockFloor, column, row, this.tileSize);
						break;
					case 10:
						this.#drawBlock(tCtx, this.rockFloorLight, column, row, this.tileSize);
						break;
					case 11:
						this.#drawBlock(tCtx, this.labFloor, column, row, this.tileSize);
						break;
					case 12:
						this.#drawBlock(tCtx, this.labWall, column, row, this.tileSize);
						break;
				}
			}
		}
	}

	#drawBlock(ctx, block, column, row, size)
	{
		ctx.drawImage(block, column*size, row*size, size, size);
	}

	#drawChar(ctx, character, column, row, size, width, height)
	{
		ctx.drawImage(character, column*size+50, row*size-100, width, height);
	}
}