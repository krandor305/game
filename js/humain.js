function humain(nom,posx,posy)
{
	this.nom=nom;
	this.vie=100;
	this.inventaire=[];
	this.x=posx;
	this.y=posy;
	
	this.getobjet=function(item)
	{
		this.inventaire.push(item);
	}
	
	this.walkto=function(x,y)
	{
		this.x=x;
		this.y=y;
	}
	
	this.use=function(item)
	{
		T=this.inventaire
		for(var i=0;i<T.len();i++){
			
			if(T[i]==item)
			{
				T.splice(i,1)
				break;
			}
		}
	}
}

function Programme(nom,posx,posy)
{
	humain.call(this,nom,posx,posy);
	this.humeur=100;
	this.besoins=100;
	this.age=0;
	this.hostile=false;
	
	
}

