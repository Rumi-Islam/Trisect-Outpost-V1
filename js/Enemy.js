export class Monster
{
	constructor(spritesheet, position, damage, hitbox, speed, sounds)
	{
		this.spritesheet = spritesheet;
		this.position = position;//pair of coordinates
		this.hitbox = hitbox;//rectangle around monster, 4 coordinates
		this.sounds = sounds;//array of audio files for a monster, NOT soundtrack

		this.hit = damage;
		this.strongHit = damage*1.5;

		this.defaultSpeed = speed;
		this.chaseSpeed = speed*2;
		this.currentSpeed = this.defaultSpeed;

		this.isChasing = false;
	}

	wander()
	{
		//random wandering
	}

	/*
		function to "listen" for players, and change direction to noise if suspicion rises
	*/
	checkPlayerInSight(player)
	{
		/*
			if(player within a triangle && this.defaultSpeed > 0)
			this.chase(player)
		*/
	}
	checkPlayerInRangOfAttack(player)
	{
		/*
			if(player hitbox overlaps monster hitbox)
			this.meleeAttacks(player);
		*/
		
	}

	chase(player)
	{
		/*
			this.isChasing = true;

			calculate direction of player
			go in direction of player

			if(player not in sight)
			{
				start timer until calm
				make turns, where first turn is 100% follows the player, then 90, 80, ect
			}
		*/
	}
	meleeAttacks(player)
	{
		if(Math.random() < 0.10)
		{
			return this.strongHit;
		}
		else{
			return this.hit;
		}
		//wait 3 seconds before attacking, stop moving for 1 second *unless its plant
	}

}
export class BasicMonster extends Monster
{
	constructor(spritesheet, position, damage, health)
	{
		super(spritesheet, position, damage);
		this.health = health;
	}
}
export class specialMonster extends Monster
{
	constructor(spritesheet, position, damage, stunned, soundtrack, )
	{
		
	}
}