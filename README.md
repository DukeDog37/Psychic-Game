# Psychic-Game
initial psychic game build

Rules of the game
- player must select only a cahracter a - z for the guess to count.
- each incorrect guess increments the overall losses value, until game is reset
- Guessing correct random letter will give user 9 more guesses and clear the previous guesses string

The following three functions support the game's ruleset
//Gets random letter for the psychic's choice
function strRandomLetter()

//This function takes users selected key value and determines if it is valid (a - z)
function fnIsValidChoice(chrUserChoice)

//This function is used to update the document elements with the correct values as the game is played.
function fnUpdateDocument(wins, losses, remaining, guesses)