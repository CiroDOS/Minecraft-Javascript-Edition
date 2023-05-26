/*
 * This file is part of the project MinecraftJavascriptEdition
 * Project Link: <https://github.com/CiroDOS/Minecraft-Javascript-Edition>
 * If you distribute this file, please, don't quit this copyright notes.
 * ¡Thank you for watching my code!
 */

const title = "Minecraft Javascript Edition";
var padding = { measurement: "px" };
var splashes = [
	"Minecraft!",
	"100% Javascript, CSS & HTML!",
	"Minceraft is real?",
	"Now supports Eaglercraft!",
	"Vibe Tracks is YouTube on 2013 B)",
	'10 PRINT "Hello World!"',
	"$sudo install Minecraft",
	`HELP ME! I installed Windows 95 on ${new Date().getFullYear()}!`,
	btoa("Can you buy me a coffee?"),
	"GitHub CiroDOS!",
	"Guaranted!",
	"Someone at least read me, please :'(",
	"Minecraft Pro Evolution (MPE)",
	'$sudo feedback-minecraft "Best experience"'
];

var range_padding_button;

changeTitle = (docTitle) =>
	document.querySelector("title").innerText = docTitle;

function topBarSettingsPaddingChanger() {
	console.group("Changing top bar size...");

	let topbar = document.getElementById("settings-topbar");
	let parsed_json = JSON.parse(topbar.getAttribute("data"));

	console.log(`Getted padding data: ${JSON.stringify(parsed_json)}`);
	let padding = `${Math.calcPercentage(window.range_padding_button.value, parsed_json.padding.quantity).toString()}${parsed_json.padding.measurement}`;
	console.log(`Padding: ${padding}`);

	topbar.style.padding = padding;

	console.log("Done!");
	console.groupEnd();
}

function buttonPaddingChanger() {
	console.group("Changing button size...");

	var max_button_padding = { quantity: 33, measurement: "px" };
	var min_button_padding = { quantity: 10, measurement: "px" };

	var padding_btn = Math.calcPercentage(range_padding_button.value, max_button_padding.quantity);

	if (padding_btn < min_button_padding.quantity) {
		padding_btn = min_button_padding.quantity;
	}

	for (let i = 0; i < document.querySelectorAll("input[type='button']").length; i++) {
		var selected_btn = document.querySelectorAll("input[type='button']")[i];
		if (selected_btn.hasAttribute("data")) {
			let button_data = JSON.parse(selected_btn.getAttribute("data"));

			if (button_data.padding.left != undefined
				&& button_data.padding.right != undefined
				&& button_data.padding.top != undefined
				&& button_data.padding.bottom != undefined) {
				if (button_data.padding.left.quantity != button_data.padding.right.quantity) {
					selected_btn.style.paddingLeft = `${button_data.padding.left.quantity}${button_data.padding.left.measurement}`;
					selected_btn.style.paddingRight = `${button_data.padding.right.quantity}${button_data.padding.right.measurement}`;
					selected_btn.style.paddingTop = `${button_data.padding.top.quantity}${button_data.padding.top.measurement}`;
					selected_btn.style.paddingBottom = `${button_data.padding.bottom.quantity}${button_data.padding.bottom.measurement}`;
				} else {
					selected_btn.style.width = `${button_data.padding.left.quantity + button_data.padding.right.quantity}${padding.measurement}`;
					selected_btn.style.paddingTop = `${button_data.padding.top.quantity}${button_data.padding.top.measurement}`;
					selected_btn.style.paddingBottom = `${button_data.padding.bottom.quantity}${button_data.padding.bottom.measurement}`;
				}
			} else {
					selected_btn.style.padding = `${button_data.padding.quantity}${button_data.padding.measurement}`;
			}

		} else {
			continue;
			/*
			 * selected_btn.style.padding = `${padding_btn}${padding.measurement}`;
			 * selected_btn.style.paddingBottom = `${padding_btn / 2}${padding.measurement}`;
			 * selected_btn.style.paddingTop = `${padding_btn / 2}${padding.measurement}`;
			*/
		}

	}
	console.log("Done!");
	console.groupEnd();
}

class WebAspect {
	static load() {
		let func1 = function () { // This function changes the padding size
			topBarSettingsPaddingChanger();
			buttonPaddingChanger();
		}

		console.group("Working on graphics...");
		window.range_padding_button = window.document.getElementById("btn_range_padding");
		range_padding_button.addEventListener(
			"change", func1, false
		);

		window.showSplashes();
		func1();
		window.moveSplashes();
		console.log("Done!");
		console.groupEnd();
	}
}



function moveSplashes() {

	let phases = [
		{
			quantity: 1.6,
			measurement: "rem"
		},
		{
			quantity: 1.61,
			measurement: "rem"
		},
		{
			quantity: 1.62,
			measurement: "rem"
		},
		{
			quantity: 1.63,
			measurement: "rem"
		},
		{
			quantity: 1.64,
			measurement: "rem"
		},
		{
			quantity: 1.65,
			measurement: "rem"
		},
		{
			quantity: 1.66,
			measurement: "rem"
		},
		{
			quantity: 1.67,
			measurement: "rem"
		},
		{
			quantity: 1.68,
			measurement: "rem"
		},
		{
			quantity: 1.69,
			measurement: "rem"
		},
		{
			quantity: 1.7,
			measurement: "rem"
		},
		{
			quantity: 1.69,
			measurement: "rem"
		},
		{
			quantity: 1.68,
			measurement: "rem"
		},
		{
			quantity: 1.67,
			measurement: "rem"
		},
		{
			quantity: 1.66,
			measurement: "rem"
		},
		{
			quantity: 1.65,
			measurement: "rem"
		},
		{
			quantity: 1.64,
			measurement: "rem"
		},
		{
			quantity: 1.63,
			measurement: "rem"
		},
		{
			quantity: 1.62,
			measurement: "rem"
		},
		{
			quantity: 1.61,
			measurement: "rem"
		},
		{
			quantity: 1.6,
			measurement: "rem"
		}
	]

	let s_index = 0;
	let m_index = phases.length - 1;

	var splash_txt = document.getElementById("splash-text");

	setInterval(function () {
		splash_txt.style.fontSize = `${phases[s_index].quantity}${phases[s_index].measurement}`;
		if (s_index == m_index) {
			s_index = 0;
		} else {
			s_index++;
		}
	}, 100);

}

function showSplashes() {
	let splash;

	// ROUND MATH.RANDOM() FUNCTION
	let num1 = Math.randoming(splashes.length, 0);

	if (splashes.length < 1) {
		splashes[0] = "Missingno."; // Reference to pokemon
	} else
		splash = splashes[num1];

	document.getElementById("splash-text").innerText = splash;
}

function mainAnimations() {
	console.group("Menu animations");
	let getCSSProperty = (property) => `url(${property})`;

	let properties = { 'minecraft:assets/textures/gui/wallpaper.movement': 'assets/minecraft/textures/gui/gifWallpaper.gif', 'minecraft:assets/textures/gui/wallpaper.static': 'assets/minecraft/textures/gui/staticWallpaper.png' };
	let Animation = { ENABLED: getCSSProperty(properties['minecraft:assets/textures/gui/wallpaper.movement']), DISABLED: getCSSProperty(properties['minecraft:assets/textures/gui/wallpaper.static']) };
	let Animation_Time = 1.5;

	console.log("Charged animations");

	// Set default image to an png image
	(windows['minecraft:window/main_menu'].htmlobj).style.backgroundImage = Animation.ENABLED;
	console.log("Changed background with: [minecraft.animation.movement]");

	// Timerize
	setTimeout(function () {
		// Change image to static/png image
		console.group("Animations done");

		console.log("Change resource: [minecraft:window/main_menu] styles with minecraft:animation('none')");
		(windows['minecraft:window/main_menu'].htmlobj).style.backgroundImage = Animation.DISABLED;
		console.log("Successfully changed styles!");

		console.groupEnd();
	}, Animation_Time * 1000)

	console.groupEnd();
}