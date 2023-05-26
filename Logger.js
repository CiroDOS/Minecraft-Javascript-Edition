/*
 * This file is part of the project MinecraftJavascriptEdition
 * Project Link: <https://github.com/CiroDOS/Minecraft-Javascript-Edition>
 * If you distribute this file, please, don't quit this copyright notes.
 * ¡Thank you for watching my code!
 */

class Logger { // Apache technologies by like
	static log(message, timestamp, type, thread) {
		console.log(`[ ${timestamp.getHours()}:${timestamp.getMinutes().toString().padStart(2, "0")} ] [${thread}/${type}] ${message}`);
	}
}


