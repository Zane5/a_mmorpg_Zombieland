function Update() {


}

function OnTriggerEnter (col : Collider) {

	if(col.gameObject.tag == "Player") {
	
		j016_basic_inventory_system.inventoryArray[0]++;
		
		Destroy(this.gameObject);
	
	}


}