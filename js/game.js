var config = {
	type: Phaser.AUTO,
	width: 1200,
	height: 850,
	physics: {
		default:'arcade',
	},
	scene:[Scene1]
}

var game = new Phaser.Game(config)