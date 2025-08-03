export class Monster
{
	constructor(spritesheet, position, damage, hitbox)
	{
		this.spritesheet = spritesheet;//image
		this.position = position;//pair of coordinates
		this.hitbox = hitbox;//rectangle around monster, 4 coordinates
		this.hit = damage;
		this.strongHit = damage*1.5;
	}
/*
	checkPlayerInRange(player)
	{
		
		if(player hitbox overlaps monster hitbox)
		this.attacks(player);
		
	}
	meleeAttacks()
	{
		if(Math.random() < 0.10)
		{
			return this.strongHit;
		}
		else{
			return this.hit;
		}
		//wait 3 seconds before attacking, stop moving for 1 second
	}
*/
}
export class BasicMonster extends Monster
{
	constructor(spritesheet, health)
	{
		super(spritesheet, position, damage);
		this.health = health;
	}
}