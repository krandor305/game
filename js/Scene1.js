var character;
var cursors;
var map;
var walls;
var character2;
var socket;
var usersanim=[];
var flag;

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
		this.load.tilemapTiledJSON("arenatile",'assets/arena2.json');
		this.load.image("arena",'assets/Dungeon_Tileset.png');
		
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
		var c1=map.createStaticLayer('Calque de Tile 1',arena,0,0);
		walls=map.createStaticLayer('walls',arena,0,0);
		var c2=map.createStaticLayer('Calque 2',arena,0,0);
		walls.setCollisionByProperty({ collides: true });
		character = new humain({scene:this,x:500,y:600},usersanim.length).setScale(1);
		this.physics.add.collider(character, walls);
		this.cameras.main.startFollow(character);
		cursors = this.input.keyboard.createCursorKeys();
		this.keysDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		this.keysLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
		this.keysRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.keysUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
		
		socket=io();
		socket.emit('new',character);
		
		let self=this;
		socket.on('firstresponse',function(data){
			for(var i=0;i<data.users.length-1;i++)
			{
				usersanim.push(self.physics.add.sprite(data.users[i].x,data.users[i].y,"character"));
				usersanim[i].id=data.users[i].id;
				usersanim[i].anims.play('idle',true);
			}
			character.id=data.character.id;
		});
	}	
	
	update()
	{
		
		
		let self=this;
		socket.on('nouveau',function(c){
			//console.log(c.id);
			usersanim.push(self.physics.add.sprite(c.x,c.y,"character"));
			usersanim[usersanim.length-1].id=c.id;
			usersanim[usersanim.length-1].anims.play('idle',true);
		});
		
		socket.on('disc', function(c) {
		for(var i=0;i<usersanim.length;i++)
		{
			if(usersanim[i].id==c)
			{
				usersanim[i].destroy()
				usersanim.splice(i, 1);
				console.log(i)
			}
		}
		});
		
		
		window.onbeforeunload = function(){
		socket.emit('disc',character.id);
		};
		
		
		/*socket.on('disconnect',function(c){
			for(var i=0;i<usersanim.length;i++)
			{
				if(usersanim[i].id==c)
				{
					usersanim[i].destroy();
					usersanim.splice(i,1);
				}
			}
		});*/
		
		socket.on('position',function(c){
			for(var i=0;i<usersanim.length;i++)
			{
				if(usersanim[i].id==c.id)
				{
					usersanim[i].x=c.x;
					usersanim[i].y=c.y;
					usersanim[i].anims.play('idle',true);
				}
			}
		});
		
		
		socket.on('down',function(c){
			for(var i=0;i<usersanim.length;i++)
			{
			if(usersanim[i].id==c)
			{
			//console.log('down'+c)
			usersanim[c].setVelocityY(200);
			usersanim[c].anims.play('down',true);
			}
			}
		});
		
		socket.on('left',function(c){
			for(var i=0;i<usersanim.length;i++)
			{
			if(usersanim[i].id==c)
			{
			usersanim[c].setVelocityX(-200);
			usersanim[c].anims.play('left',true);
			}
			}
		});
		
		socket.on('right',function(c){
			for(var i=0;i<usersanim.length;i++)
			{
			if(usersanim[i].id==c)
			{
			usersanim[c].setVelocityX(200);
			usersanim[c].anims.play('right',true);
			}
			}
		});
		
		socket.on('up',function(c){
			for(var i=0;i<usersanim.length;i++)
			{
			if(usersanim[i].id==c)
			{
			usersanim[c].setVelocityY(-200);
			usersanim[c].anims.play('up',true);
			}
			}
		});
		
		socket.on('hit',function(data){
			if(character.id==data.victim.id)
				{
					character.x=500;
					character.y=600;
				}
			for(var i=0;i<usersanim.length;i++)
			{
				let c;
				if(usersanim[i].id==data.victim.id)
				{
					usersanim[i].x=500;
					usersanim[i].y=600;
				}
			}
			//console.log(data.victim.id+' has died');
		});
		
		socket.on('slice',function(data){
			for(var i=0;i<usersanim.length;i++)
			{
				if(usersanim[i].id==data.characterid)
				{
					usersanim[i].anims.play(data.direction)
				}
			}
		});
		
		character.body.setVelocity(0)
		for(var i=0;i<usersanim.length;i++)
		{
			usersanim[i].setVelocity(0);
		}
		
		if(cursors.down.isDown)
		{
			flag=true;
			character.body.setVelocityY(200);
			character.anims.play('down',true);
			socket.emit('down',character.id);
		}
		else if(cursors.left.isDown)
		{
			flag=true;
			character.body.setVelocityX(-200);
			character.anims.play('left',true);
			socket.emit('left',character.id);
		}
		else if(cursors.right.isDown)
		{
			flag=true;
			character.body.setVelocityX(200);
			character.anims.play('right',true);
			socket.emit('right',character.id);
		}
		else if(cursors.up.isDown)
		{
			flag=true;
			character.body.setVelocityY(-200);
			character.anims.play('up',true);
			socket.emit('up',character.id);
		}
		else if(cursors.down.isUp)
		{
			character.anims.play('idle',true);
			if(flag==true)
			{
			flag=false;
			socket.emit('position',{character:character,id:character.id});
			}
		}
		else if(cursors.left.isUp)
		{
			character.anims.play('idle',true);
			if(flag==true)
			{
			flag=false;
			socket.emit('position',character);
			}
		}
		else if(cursors.right.isUp)
		{
			character.anims.play('idle',true);
			if(flag==true)
			{
			flag=false;
			socket.emit('position',character);
			}
		}
		else if(cursors.up.isUp)
		{
			character.anims.play('idle',true);
			if(flag==true)
			{
			flag=false;
			socket.emit('position',character);
			}
		}
		
		if(this.keysDOWN.isDown)//hypothése keysdown et isUP ne matchs pas
		{
			character.anims.play('slicedown',true);
			socket.emit('slicedown',{character:character,id:character.id});
			/*if(character.x>=character2.x-20 && character.x<=character2.x+20 && character.y>=character2.y-70 && character.y<=character2.y)
			{
				console.log("you've hit the other")
			}*/	
		}
		else if(this.keysLEFT.isDown)
		{
			character.anims.play('sliceleft',true);
			socket.emit('sliceleft',{character:character,id:character.id});
			/*if(character.y>=character2.y-20 && character.y<=character2.y+20 && character.x<=character2.x+50 && character.x>=character2.x)
			{
				console.log("you've hit the other")
			}*/
		}
		else if(this.keysRIGHT.isDown)
		{
			character.anims.play('sliceright',true);
			socket.emit('sliceright',{character:character,id:character.id});
			/*if(character.y>=character2.y-20 && character.y<=character2.y+20 && character.x>=character2.x-50 && character.x<=character2.x)
			{
				console.log("you've hit the other")
			}*/
		}
		else if(this.keysUP.isDown)
		{
			character.anims.play('sliceup',true);
			socket.emit('sliceup',{character:character,id:character.id});//ici
			/*if(character.x>=character2.x-20 && character.x<=character2.x+20 && character.y<=character2.y+70 && character.y>=character2.y)
			{
				console.log("you've hit the other")
			}*/
		}
		
		
	}
}