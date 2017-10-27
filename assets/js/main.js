$(document).ready(function(){

	/* =============== HOME PAGE =============== */

	// INCREMENTING NUMBERS --------------------------
	var satisfaction = $('#satisfaction');
	// var customers = $('#customers');
	// var donations = $('#donations');

	// function to increase number
	function increaseNum(section, number){
		var goal = number;
		var start = 0;
		var success = false;

		while (!success) {
			if (goal != start) {
				// $(section).html("<h2>" + start +"</h2>");
				console.log(start);
				start += 1;
			}
			else {
				clearTimeout();
			}
		}

	}

	function incrementSatisfaction(){

		// setTimeOut to dynamically increase satisfaction 
		// numbers
		console.log("here");
		setTimeout(increaseNum(satisfaction,100), 500);

	}

	// function incrementCustomers(){

	// 	// setTimeOut to dynamically increase customers 
	// 	// numbers
	// 	setTimeOut(increaseNum(customers,20), 500);

	// }

	// function incrementDonations(){

	// 	// setTimeOut to dynamically increase donations 
	// 	// numbers
	// 	setTimeOut(increaseNum(donations,25), 500);

	// }

	incrementSatisfaction();
	// incrementCustomers();
	// incrementDonations();


	

});