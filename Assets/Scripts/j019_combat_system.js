
var enemyHealth : int = 100;


function Update () {

	if(this.enemyHealth <= 0) {
	
//		playerHealth.curXp += 10;
		
		Destroy(this.gameObject);
	}


}


function OnTriggerStay (col : Collider) {
	
	if(col.gameObject.tag == "attackArea") {
				
		if(Input.GetKeyDown("1")) {
		
			this.enemyHealth -=100;
		}
		
	}

}