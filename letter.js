
//letter function should NOT require any other file

//displays an underlying character, or a blank letter score 
//A boolean value that stores whether that letter has been guessed yet
let Letter = function (character, ){
    this.character = character; //current letter, saved in the constructor, next value thats being put in replaces current value
    this.guessed = false; 

this.guessLetter = function() { 
    console.log(this.character)

}
this.guess = function() {
    if (userGuess === this.character) {
    console.log("good guess")
} else { 
    console.log("bad answer");
}

}

// module.exports to word file // 
// Athens Georgia remote //