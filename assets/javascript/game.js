
//Gets random letter for the psychic's choice
function strRandomLetter(){
			var emptyString = "";
			var alphabet = "abcdefghijklmnopqrstuvwxyz";
			var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
			var randomLetter = getRandomLetter;

			console.log(randomLetter);
			return randomLetter;
}

function fnIsValidChoice(chrUserChoice){

	var strUserPick = chrUserChoice;
	var	alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

	for(var i = 0; i < alphabet.length; i++)
	{
    	if(alphabet[i].indexOf(strUserPick) != -1){
        console.log(strUserPick);
        return true;
    	}
	}
}
//This function is used to update the document elements with the correct values as the game is played.
function fnUpdateDocument(wins, losses, remaining, guesses){
	document.getElementById('Wins').textContent = wins;
	document.getElementById('Losses').textContent = losses;
	document.getElementById('Remain').textContent = remaining;
	document.getElementById('SoFar').textContent = guesses;


}

