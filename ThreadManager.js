/*
 * This file is part of the project MinecraftJavascriptEdition
 * Project Link: <https://github.com/CiroDOS/Minecraft-Javascript-Edition>
 * If you distribute this file, please, don't quit this copyright notes.
 * ¡Thank you for watching my code!
 */

var loaded = { phase: 0, comment: "Not initialized!" };
var timestamps = [];

const windows = {

	"minecraft:window/loadscreen": {
		id: '00',
		name: "minecraft:window/loadscreen",
		title: title + " - Loading...",
		htmlobj: null
	},

	"minecraft:window/main_menu": {
		id: '01',
		name: "minecraft:window/main_menu",
		title: title + " - Main menu",
		htmlobj: null
	},

	"minecraft:window/settings": {
		id: '02',
		name: "minecraft:window/settings",
		title: title + " - Settings",
		htmlobj: null
	},

	"minecraft:window/server_list": {
		id: '04',
		name: "minecraft:window/server_lists",
		title: title + " - Server list",
		htmlobj: null
	},

	"windows": [
		"minecraft:window/loadscreen",
		"minecraft:window/main_menu",
		"minecraft:window/settings",
		"minecraft:window/server_list"
	]
}

window.onload = function () {
	windows['minecraft:window/loadscreen'].htmlobj = document.getElementById("loadscreen");
	windows['minecraft:window/main_menu'].htmlobj = document.getElementById("main_menu");
	windows['minecraft:window/settings'].htmlobj = document.getElementById("options");
	windows['minecraft:window/server_list'].htmlobj = document.getElementById("server-list");

	let isThisAFile = (document.location.protocol == "file:");

	if (isThisAFile) {
		alert("It is not recommendable to play this edition of Minecraft on local file, this is not a bug, this is a important advertisement.");
	}

	let menu_buttons = {
		btn_Settings: document.getElementById("btn_Settings"),
		btn_Singleplayer: document.getElementById("btn_Singleplayer"),
		btn_Multiplayer: document.getElementById("btn_Multiplayer"),
		quit_Settings: document.getElementById("quit_Settings")
	},
		loadscreen_video = windows['minecraft:window/loadscreen'].htmlobj.children[0];

	window.loaded = { phase: 1, comment: `w_OnLoad initialized!` };

	// Play animation video
	loadscreen_video.addEventListener("click", () => loadscreen_video.play());

	// Second load phase
	window.loaded = { phase: 2, comment: "Charged Loadscreen!" };

	Logger.log("Loaded resources from script 'minecraft:assets/loadscreen'", timestamps[setTimestamp(new Date())], "INFO", "main");

	loadscreen_video.onpause = function () {

        // Special functions
        /* IMPORT FROM 'WebAspect' SCRIPT: */ mainAnimations();

		// Go to main menu, init game window
		SwitchToWindows(windows['minecraft:window/main_menu']);
		changeTitle(windows['minecraft:window/main_menu'].title);

	}

	// Charge extern scripts
	WebAspect.load();

	// Check activity on the buttons
	addEventListeners(menu_buttons);

}

function addEventListeners(menu_buttons) {
	menu_buttons['btn_Settings'].addEventListener("click", function () {

		// Open settings window
		SwitchToWindows(windows['minecraft:window/settings']);
		changeTitle(windows['minecraft:window/settings'].title);

	}, false);

	menu_buttons['quit_Settings'].addEventListener("click", function () {

		// Quit settings window
		SwitchToWindows(windows['minecraft:window/main_menu']);
		changeTitle(windows['minecraft:window/main_menu'].title);

	}, false);

	menu_buttons['btn_Singleplayer'].addEventListener("click", function () {

		// Play on mode singleplayer
		openPlayCanvas({ mode: 'singleplayer', world: { name: "New World", seed: Math.random() * 10000 } });

	}, false);

	menu_buttons['btn_Multiplayer'].addEventListener("click", function () {

		// Play on mode multiplayer
		// Open the server list
		SwitchToWindows(windows['minecraft:window/server_list']);
		changeTitle(windows['minecraft:window/server_list'].title);

	}, false);

	document.querySelector("#quit-ServerList").addEventListener("click", function () {

		// Quit server-list window
		SwitchToWindows(windows['minecraft:window/main_menu']);
		changeTitle(windows['minecraft:window/server_list'].title);

	}, false);
}

function openPlayCanvas(data) {
	window.location.href = Gameplay.info['emulator-url'];
}

function SwitchToWindows(windowsToSwitch) {

	switch (windowsToSwitch) {
		case windows['minecraft:window/loadscreen']: // ID: 00

			disableAllWindowsExcept(windowsToSwitch);
			enableWindow(windowsToSwitch);
			break;

		case windows['minecraft:window/main_menu']: // ID: 01

			disableAllWindowsExcept(windowsToSwitch);
			enableWindow(windowsToSwitch);
			break;

		case windows['minecraft:window/settings']: // ID: 02

			disableAllWindowsExcept(windowsToSwitch);
			enableWindow(windowsToSwitch);
			break;

		case windows['minecraft:window/server_list']: // ID: 04

			disableAllWindowsExcept(windowsToSwitch);
			enableWindow(windowsToSwitch);
			break;
	}

}

function disableAllWindowsExcept(except) {
	for (var i = 0; i < windows['windows'].length; i++) {
		if (windows.windows[i] == except.name) {
			continue;
		}

		disableWindow(windows[windows.windows[i]]);
	}
}

function enableWindow(a_window) {
	a_window['htmlobj'].classList.remove("do-not-display");
}

function disableWindow(a_window) {
	a_window['htmlobj'].classList.add("do-not-display");
}

function setTimestamp(timestamp) {
	// Introduce the selected timestamp on timestamps and return index
	return timestamps.push(timestamp) - 1;
}