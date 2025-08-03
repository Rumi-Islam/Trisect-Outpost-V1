export class Player
{
	constructor(playerID, playerName, spritesheet, position, speed)
	{
		this.playerID = playerID;
		this.playerName = playerName;
		this.spritesheet = spritesheet;

		this.position = position;
		this.walkSpeed = speed;
		this.sprintSpeed = speed*2;
		this.crawlSpeed = speed/2;

		this.health = 100;
		

		this.inventory = null;
		this.armor = null;
		this.weapon = null;
	}
}