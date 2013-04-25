
var target : Transform;
var target2 : Transform;
var target3 : Transform;


function Update () {



}




function OnTriggerEnter (col : Collider) {

	
	
	if(col.gameObject.tag == "teleport") {
	
		var randomnumber = Random.Range(0,2);
		
			
			if ( randomnumber == 0 ) {
			
			this.transform.position = target.position;
		
			}
	
	
			if ( randomnumber == 1 ) {
			
			this.transform.position = target2.position;
			
			}
	
	
			if ( randomnumber == 2 ) {
			
			this.transform.position = target3.position;
			
			}





}




}