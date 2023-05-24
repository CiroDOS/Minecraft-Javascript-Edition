# Minecraft Javascript Edition
This edition of Minecraft was made in HTML, CSS and Javascript.
This edition has, animated loading screens and a fully functional gameplay, maybe not the best copy, but it has a pretty polished interface inspired by Minecraft Bedrock, and that even though the gameplay is inspired by Minecraft Java Edition.

The addition of modifications is somewhat complex, it is easier to program the modifications than to include them in the game, now we will explain in more depth the source code of the game and what it is for.

Classes and their purposes:

* CalcThread.js
This class includes, among its functions, new functions to native javascript classes such as:
`Math.calcPercentage(percentage, num)` Returns the percentage of a number
`Math.extractPercentage(mahornum, minornum)` Returns a percentage of one number in another

* WebAspect.js
This class handles the appearance of the game, texts, images, videos, etc...
Functions:
`showSplashes()` Display splashes on screen, you can change the splashes by another generated randomly, Examples:
![I prefer Minecraft Javascript Feedback than Minecraft Java Feedback](https://i.imgur.com/d9t64Fm.png "Before")
`showSplashes();`
![10 PRINT "Hello World!"](https://i.imgur.com/mXncRS9.png "After")
Among others, this script also comes with its own classes:
	* WebAspect
	This class has several functions:
	`load()` This function loads the necessary components for the correct visualization of the game.
* ThreadManager.js
	And lastly, ThreadManager, as the name suggests, this script manages a lot of the game, it's an instance controller, this file is like the game itself, it has all the functions and it initializes the program, it controls everything, so if this script becomes corrupted or damaged, we'll give up everything. This has several functions and some necessary components that we are not going to go into detail now, if you want more information about this class, go to the ThreadManager.md file, it will explain all the operation in detail