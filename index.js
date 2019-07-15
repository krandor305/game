var express=require('express');
var app=express();
var server=require('http').createServer(app);
var io=require('socket.io').listen(server);

var users=[];

app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));

app.get('/',function(req,res)
{
    res.sendfile('index.html');
});

io.sockets.on('connection',function(socket){
	
		socket.on('new',function(character){
		character.id=users.length;
		users.push(character);
		socket.broadcast.emit('nouveau',character);
		socket.emit('firstresponse',{users:users,character:character});
		
		});
		
		socket.on('position',function(data){
			for(var i=0;i<users.length;i++)
			{
				//console.log(users[i].id+","+data.id);
				if(users[i].id==data.id)
				{
					users[i].x=data.character.x;
					users[i].y=data.character.y;
					//console.log(users[i]);
					socket.broadcast.emit('position',users[i]);
				}
			}
		});
	
		socket.on('down',function(c){
			socket.broadcast.emit('down',c);
		});
		
		socket.on('left',function(c){
			socket.broadcast.emit('left',c);
		});
		
		socket.on('right',function(c){
			socket.broadcast.emit('right',c);
		});
		
		socket.on('up',function(c){
			socket.broadcast.emit('up',c);
		});
	
		socket.on('slicedown',function(data){
			let character = data.character;
			let c=users;
			for(var i=0;i<users.length;i++)//retirer notre personnage de la liste
			{
			if(character.x>=c[i].x-20 && character.x<=c[i].x+20 && character.y>=c[i].y-70 && character.y<=c[i].y && c[i].id!=data.id)
			{
				c[i].x=500;
				c[i].y=600;
				io.emit('hit',{victim:c[i]});
				io.emit('slice',{characterid:data.id,direction:'slicedown'});
			}
			}
	});
	
	socket.on('sliceleft',function(data){
			let character = data.character;
			var c=users;
			for(var i=0;i<users.length;i++)
			{
			if(character.y>=c[i].y-20 && character.y<=c[i].y+20 && character.x<=c[i].x+50 && character.x>=c[i].x && c[i].id!=data.id)
			{
				c[i].x=500;
				c[i].y=600;
				io.emit('hit',{victim:c[i]});
				io.emit('slice',{characterid:data.id,direction:'sliceleft'});
			}
			}
	});
	
	socket.on('sliceright',function(data){
			let character = data.character;
			var c=users;
			for(var i=0;i<users.length;i++)
			{
			if(character.y>=c[i].y-20 && character.y<=c[i].y+20 && character.x>=c[i].x-50 && character.x<=c[i].x && c[i].id!=data.id)
			{
				c[i].x=500;
				c[i].y=600;
				io.emit('hit',{victim:c[i]});
				io.emit('slice',{characterid:data.id,direction:'sliceright'});
			}
			}
	});
	
	socket.on('sliceup',function(data){//ici
		    let character = data.character;
			var c=users;
			for(var i=0;i<users.length;i++)
			{
			if(character.x>=c[i].x-20 && character.x<=c[i].x+20 && character.y<=c[i].y+70 && character.y>=c[i].y && c[i].id!=data.id)
			{
				c[i].x=500;
				c[i].y=600;
				io.emit('hit',{victim:c[i]});
				io.emit('slice',{characterid:data.id,direction:'sliceup'});
			}
			}
	});
});
server.listen(process.env.PORT || 8000);

