var x, y;
var ImagesA=["images/tokyo_ghoul.jpg","images/naruto.jpg","images/one_piece.jpg","images/my_hero_academia.png","images/one_punch_man.jpg","images/gintama.jpg","images/fairytail.jpg"];//array of anime pictures
var ImagesG=["images/overwatch.jpg","images/lol.jpg","images/bioshock.jpg","images/last.jpg","images/cod.jpg","images/csgo.jpg","images/fc_1.jpg"];//array of game pictures
var imageA=document.getElementById("mpa");		
var imageG=document.getElementById("mpg");
imageA.style.backgroundImage="url("+ImagesA[0]+")";
function rAnime(){												//this function changes the background image ever 1 second 
	var c=0;													//and at the end of the function clears the interval and runs  
	clearInterval(x);											//itself again when the mouse button hovers over the area
	x=setInterval(function(){			
		imageA.style.backgroundImage="url("+ImagesA[c++]+")";
		imageA.style.transition="0.5s ease";
		if(c==ImagesA.length)
		{
			c==0;
			rAnime();
		}
	},2000)

}   																	
function rGames(){												//this function changes the background image ever 1 second
	var c=0;													//and at the end of the function clears the interval and runs
	clearInterval(y);											//itself again when the mouse button hovers over the area
	y=setInterval(function(){	
		imageG.style.backgroundImage="url("+ImagesG[c++]+")";
		imageG.style.transition="0.5s ease";
		if(c==ImagesG.length)
		{
			c==0;
			rGames();
		}
	},2000)
}																
function sAnime(){												//clears the interval created by the mouse hover and 
	clearInterval(x);											//resetts the background image to its default image
	imageA.style.backgroundImage="url(images/otaku.jpg)";
}
function sGames(){												//clears the interval created by the mouse hover and
	clearInterval(y);											//resetts the background image to its default image
	imageG.style.backgroundImage="url(images/game.jpg)";
}
function goAnime(){												//redirects to the anime page
	location.href="anime.html";
}
function goGame(){												//redirects to the game page 
	location.href="games.html";
}
function goHome(){
	location.href="index.html";
}


