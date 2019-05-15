const randomLocation = Math.floor(Math.random() * 5);
let sheep = {
	loc1: randomLocation,
	loc2: randomLocation + 1,
	loc3: randomLocation + 2
};

let guess;
let guesses = 0;
let hits = 0;

let sink = false;

while (!sink) {
	guess = parseInt(prompt('Стреляй: (0-6)'));
	console.log(guess);

	if (guess < 0 || guess > 6) {  
		alert("Please enter a valid cell number!");
	} else {
		guesses++;

		if (guess == sheep.loc1 || guess == sheep.loc2 || guess == sheep.loc3) {
			hits++;

			alert('You Hit!');
			
			if (hits == 3) {
				isSunk = true;
				guesses = 0;
				hits = 0;
				alert("You sank my battleship!");
			}
		} else {
			alert('You Miss!');
		}
	}

	var stats = "You took " + guesses + " guesses to sink the battleship, " +"which means your shooting accuracy was " + (3/guesses); alert(stats);
}