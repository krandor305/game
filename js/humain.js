class humain extends Phaser.GameObjects.Sprite
{
	constructor(config,num){
		super(config.scene,config.x,config.y,"character");
		config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
		this.id=num;
	}
}

