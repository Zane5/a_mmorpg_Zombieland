
//inventory
static public var inventoryArray : int[] = [1,2,0,0,0];
var inventoryText : GameObject;


function Update () {

	inventoryText.guiText.text = "Health Potion " + "[" + inventoryArray[0] + "]" + "\n" + "Mana Potion " + "[" + inventoryArray[1] + "]";




	if(Input.GetKeyDown("h")) {
	
	if(inventoryArray[0] > 0)	{
	
	healthPotion();
	
	}
	
	}
	


//	inventoryArray[0]++;
//	inventoryArray[1] += 2;
}

function healthPotion () {

	j010_health_system.curHealth += 100;
	
	inventoryArray[0] -=1;



}