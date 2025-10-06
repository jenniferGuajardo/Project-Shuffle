//=============================================================================
// ArrayBean.js
//=============================================================================

//This function is for the bean events, which require an array.

// IMPORTANT: Arrays are primarily used at the BEGINNING of a file and the results will be stored in the RPGMaker variable system.

// While the array index starts at zero, the array values start at 1 to match how the index-system of the RPG Maker Engine.
//	Because of the strange indexing method. Anything with and acutal value of zero will just provide it's default item or result.


// This script is mean to change the self-switches en mass for a variety of map events in the main game. This is to simulate growth over the course of multiple in-game "days."


// These arrays are designed to be ran parallel to each other within a for-loop.

let selfSwitchMapIdArray = [3, 1, 3];
let selfSwitchEventNumArray = [39, 30, 42];

// For my own visibility.

console.log(selfSwitchMapIdArray); 
console.log(selfSwitchEventNumArray);

// These variables are used to read the array values in the middle of script calls in a common event.

let readMapID = 0;
let readEventNum = 0;


function changeSwitches() {
	// For this situation, you can assume the switches are triggered in a linear manner.
	// Checks if the bean has been planted.
	if ($gameSelfSwitches.value([readMapID, readEventNum, 'A'])) { // Check if something is planted.
		//Has it gone to stage 2 yet?
		if ($gameSelfSwitches.value([readMapID, readEventNum, 'B'])) { 	// Yes? Move on to stage 3!
				if ($gameSelfSwitches.value([readMapID, readEventNum, 'C'])) {
					if ($gameSelfSwitches.value([readMapID, readEventNum, 'D'])) { // Check if final growth happend.
						// This is the maximum growth the event can achieve.
						// Do nothing.
					} else {$gameSelfSwitches.setValue([readMapID, readEventNum, 'D'], true);} // Final growth, if it didn't happen yet.
				} else {$gameSelfSwitches.setValue([readMapID, readEventNum, 'C'], true);} // Stage 2 has already happened? Move to stage 3
		} else {$gameSelfSwitches.setValue([readMapID, readEventNum, 'B'], true);} //No? Grow the son of a bitch!
	} // Nothing planted? Do nothing.
}