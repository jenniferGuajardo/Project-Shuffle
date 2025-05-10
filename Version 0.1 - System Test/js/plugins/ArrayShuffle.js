//=============================================================================
// ArrayShuffle.js
//=============================================================================

//This function is for the randomization of the array.

// IMPORTANT: Arrays are primarily used at the BEGINNING of a file and the results will be stored in the RPGMaker variable system. 

// While the array index starts at zero, the array values start at 1 to match how the index-system of the RPG Maker Engine.
//	Because of the strange indexing method. Anything with and acutal value of zero will just provide it's default item or result.

// Also, the arrays are instatiated to test for crashes.

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}


// Array Length 14 - Prototype Array

// This is a prototype array made at the beginning of the game.
// This will be used as an example for the other arrays and not normally be called during gameplay.


let proto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
shuffle(proto); // Test of shuffle function. If this doesn't work, the rest of the game is fucked.
console.log(proto); // For my own visibility.
console.log("Test of shuffle function. If this doesn't work, the rest of the game is fucked.");

// End of Prototype Array


// Array Length 14 - Standard

// This is designed to shuffle pages and tools.

let standard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
console.log(standard); // For my own visibility.
console.log("This array is designed to shuffle pages and tools.");

// End of Standard 


// Array Length 17 - Extended

// This is designed to include the pages and tools, including a XOR situation with equipment and bullions.
// i.e. Shuffle the following:
// 	(Pages, Tools, and Equipment)
// 	(Pages, Tools, and Bullions)


let extended = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(extended); // For my own visibility.
console.log("This array is designed to include the pages and tools, including a XOR situation with equipment and bullions.");
console.log("i.e. Shuffle the following: (Pages, Tools, and Equipment) OR (Pages, Tools, and Bullions)");



// End of Extended 


// Array Length 20 - Full

// This is designed to include the pages, tools, equipment and bullions.

let full = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(full); // For my own visibility.
console.log("This array is designed to shuffle pages, tools, equipment, and bullions.");

// End of Full 


// Array Length 7 - Limited

// This is designed to include only tools.

let limited = [8, 9, 10, 11, 12, 13, 14];
console.log(limited); // For my own visibility.
console.log("This array is designed to shuffle ONLY the tools.");

// End of Limited


// Array Length 10 - Semi-Limited

// This is designed to include only tools & bullion XOR tools & equipment.

let semiLimited = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(semiLimited); // For my own visibility.
console.log("This array is designed to include only tools & bullion XOR tools & equipment.");

// End of Semi-Limited


// Array Length 6 - Other-Limited

// This is designed to include only bullions and equipment.

let otherLimited = [15, 16, 17, 18, 19, 20];
console.log(otherLimited); // For my own visibility.
console.log("This array is designed to include only bullions & equipment.");

// End of Other-Limited


// Array Length 13 - Thrice

// This is designed to include all non-pages.
// I know the name of the variable isn't appropriate for a variable name. TOO BAD! It makes it memorable. It's in reference to shuffling three groups that aren't the main pages.

let Thrice = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(Thrice); // For my own visibility.
console.log("This array is designed to include only tools, bullions & equipment.");

// End of Thrice