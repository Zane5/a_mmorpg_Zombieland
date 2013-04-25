var curXp : int = 0;
var maxXp : int = 500;

var xptext : GUIText;

var level : int = 1;



function Update () {
	
	
	
	xptext.text = "Level " + level + " XP " + curXp + " / " + maxXp;
	
	
	if(curXp == maxXp) {
	
	
		levelUpSystem();
	
	
	}
	
	
	
	if(Input.GetKeyDown("r")) {
	
		curXp += 10;
	
	}
	
	
	

}



function levelUpSystem () {
	
	
	curXp = 0;
	maxXp = maxXp + 50;
	level++;
	
	//maxHealth += 100;
	
	
	
	
	

}