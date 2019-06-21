var character;
var cursors;
var map;
var walls;

class Scene1 extends Phaser.Scene{
	
	
	constructor(){
		super({key:"Scene1"});
	}

	/*loadspritesanimations=function(name,n,path)
	{
		for(var i=0;i<n;i++)
		{
			this.load.image(name+i, path+i+'.png');
		}
	}*/
	
	preload(){
		
	
		var pathcharacter='assets/character/'
		this.load.tilemapTiledJSON("arenatile",'assets/arena.json');
		this.load.image("arena",'assets/arena.png');
		
		this.load.image("idle0",pathcharacter+'idle/0.png');
		this.load.image("idle1",pathcharacter+'idle/1.png');
		this.load.image("idle2",pathcharacter+'idle/2.png');
		this.load.image("idle3",pathcharacter+'idle/3.png');
		
		this.load.image("down0",pathcharacter+'down/0.png');
		this.load.image("down1",pathcharacter+'down/1.png');
		this.load.image("down2",pathcharacter+'down/2.png');
		this.load.image("down3",pathcharacter+'down/3.png');
		this.load.image("down4",pathcharacter+'down/4.png');
		
		this.load.image("left0",pathcharacter+'left/0.png');
		this.load.image("left1",pathcharacter+'left/1.png');
		this.load.image("left2",pathcharacter+'left/2.png');
		this.load.image("left3",pathcharacter+'left/3.png');
		this.load.image("left4",pathcharacter+'left/4.png');
		this.load.image("left5",pathcharacter+'left/5.png');
		
		this.load.image("right0",pathcharacter+'right/0.png');
		this.load.image("right1",pathcharacter+'right/1.png');
		this.load.image("right2",pathcharacter+'right/2.png');
		this.load.image("right3",pathcharacter+'right/3.png');
		this.load.image("right4",pathcharacter+'right/4.png');
		this.load.image("right5",pathcharacter+'right/5.png');
		
		this.load.image("up0",pathcharacter+'up/0.png');
		this.load.image("up1",pathcharacter+'up/1.png');
		this.load.image("up2",pathcharacter+'up/2.png');
		this.load.image("up3",pathcharacter+'up/3.png');
		this.load.image("up4",pathcharacter+'up/4.png');
		
		this.load.image("slicedown0",pathcharacter+'slicedown/0.png');
		this.load.image("slicedown1",pathcharacter+'slicedown/1.png');
		this.load.image("slicedown2",pathcharacter+'slicedown/2.png');
		
		this.load.image("sliceleft0",pathcharacter+'sliceleft/0.png');
		this.load.image("sliceleft1",pathcharacter+'sliceleft/1.png');
		this.load.image("sliceleft2",pathcharacter+'sliceleft/2.png');
		
		this.load.image("sliceright0",pathcharacter+'sliceright/0.png');
		this.load.image("sliceright1",pathcharacter+'sliceright/1.png');
		this.load.image("sliceright2",pathcharacter+'sliceright/2.png');
		
		this.load.image("sliceup0",pathcharacter+'sliceup/0.png');
		this.load.image("sliceup1",pathcharacter+'sliceup/1.png');
		this.load.image("sliceup2",pathcharacter+'sliceup/2.png');
	}
	
	create()
	{
		var animidle=this.anims.create({
			key: 'idle',
			frames: [
			{key: 'idle0'},
			{key: 'idle1'},
			{key: 'idle2'},
			{key: 'idle3'},
			],
			frameRate: 7,
			repeat: -1
		});
		
		var animdown=this.anims.create({
			key: 'down',
			frames: [
			{key: 'down0'},
			{key: 'down1'},
			{key: 'down2'},
			{key: 'down3'},
			{key: 'down4'},
			],
			frameRate: 7,
			repeat: -1
		});
		
		var animleft=this.anims.create({
			key: 'left',
			frames: [
			{key: 'left0'},
			{key: 'left1'},
			{key: 'left2'},
			{key: 'left3'},
			{key: 'left4'},
			{key: 'left5'},
			],
			frameRate: 10,
			repeat: -1
		});
		
		var animright=this.anims.create({
			key: 'right',
			frames: [
			{key: 'right0'},
			{key: 'right1'},
			{key: 'right2'},
			{key: 'right3'},
			{key: 'right4'},
			{key: 'right5'},
			],
			frameRate: 10,
			repeat: -1
		});
		
		var animup=this.anims.create({
			key: 'up',
			frames: [
			{key: 'up0'},
			{key: 'up1'},
			{key: 'up2'},
			{key: 'up3'},
			{key: 'up4'},
			],
			frameRate: 7,
			repeat: -1
		});
		
		
		var animslicedown=this.anims.create({
			key: 'slicedown',
			frames: [
			{key: 'slicedown0'},
			{key: 'slicedown1'},
			{key: 'slicedown2'},
			],
			frameRate: 7,
			repeat: -1
		});
		
		var animsliceleft=this.anims.create({
			key: 'sliceleft',
			frames: [
			{key: 'sliceleft0'},
			{key: 'sliceleft1'},
			{key: 'sliceleft2'},
			],
			frameRate: 7,
			repeat: -1
		});
		
		var animsliceright=this.anims.create({
			key: 'sliceright',
			frames: [
			{key: 'sliceright0'},
			{key: 'sliceright1'},
			{key: 'sliceright2'},
			],
			frameRate: 7,
			repeat: -1
		});
		
		var animsliceup=this.anims.create({
			key: 'sliceup',
			frames: [
			{key: 'sliceup0'},
			{key: 'sliceup1'},
			{key: 'sliceup2'},
			],
			frameRate: 7,
			repeat: -1
		});
		
		//this.add.image(400,400,"arena");
		map = this.make.tilemap({ key: "arenatile" });
		var arena=map.addTilesetImage('dungeon','arena');
		console.log(map);
		console.log(arena.data);
		walls=map.createStaticLayer('walls',arena);
		var c1=map.createStaticLayer('Calque de Tile 1',arena);
		var c2=map.createStaticLayer('Calque 2',arena);
		walls.setCollisionByProperty({ collides: true });
		cursors = this.input.keyboard.createCursorKeys();
		character = this.add.sprite(500,600,"character").setScale(1);
		this.physics.add.collider(character,walls);
		this.cameras.main.startFollow(character);
		character.play('idle');
	}
	
	update()
	{
		if(cursors.down.isDown)
		{
			character.y+=5;
			character.anims.play('down',true);
		}
		else if(cursors.left.isDown)
		{
			character.x-=5;
			character.anims.play('left',true);
		}
		else if(cursors.right.isDown)
		{
			character.x+=5;
			character.anims.play('right',true);
		}
		else if(cursors.up.isDown)
		{
			character.y-=5;
			character.anims.play('up',true);
		}
		else
		{
			character.anims.play('idle',true);
		}
		
	}
}