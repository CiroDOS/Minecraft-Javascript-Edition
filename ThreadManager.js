/*
 * This file is part of the project MinecraftJavascriptEdition
 * Project Link: <https://github.com/CiroDOS/MinecraftJavascriptEdition>
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
    },

    "minecraft:window/main_menu": {
        id: '01',
        name: "minecraft:window/main_menu",
        title: title + " - Main menu",
    },

    "minecraft:window/settings": {
        id: '02',
        name: "minecraft:window/settings",
        title: title + " - Settings",
    },

    "minecraft:window/canvas": {
        id: '03',
        name: "minecraft:window/canvas",
        title: {
            on_multiplayer: title + " - 3rd party server",
            on_singleplayer: title + " - $world_name"
        },
    },
    "minecraft:window/server_list": {
        id: '04',
        name: "minecraft:window/server_lists",
        title: title + " - Server list",
    },

    "windows": [
        "minecraft:window/loadscreen",
        "minecraft:window/main_menu",
        "minecraft:window/settings",
        "minecraft:window/canvas",
        "minecraft:window/server_list"
    ]
}

window.onload = function () {
    windows['minecraft:window/canvas'].htmlobj = document.getElementById("play-canvas");
    windows['minecraft:window/loadscreen'].htmlobj = document.getElementById("loadscreen");
    windows['minecraft:window/main_menu'].htmlobj = document.getElementById("main_menu");
    windows['minecraft:window/settings'].htmlobj = document.getElementById("options");
    windows['minecraft:window/server_list'].htmlobj = document.getElementById("server-list");


    let menu_buttons = {
        btn_Settings: document.getElementById("btn_Settings"),
        btn_Singleplayer: document.getElementById("btn_Singleplayer"),
        btn_Multiplayer: document.getElementById("btn_Multiplayer"),
        quit_Settings: document.getElementById("quit_Settings")
    },
        loadscreen_video = windows['minecraft:window/loadscreen'].htmlobj.children[0];


    window.loaded = { phase: 1, comment: `${window.onload.toString()} initialized!` };

    // Play animation video
    loadscreen_video.addEventListener("click", () => loadscreen_video.play());

    window.loaded = { phase: 2, comment: "Charged Loadscreen!" };

    Logger.log("Loaded resources from script 'minecraft:assets/loadscreen'", timestamps[setTimestamp(new Date())], "INFO", "main");

    loadscreen_video.onpause = function () {

        // Special functions
        /* IMPORT FROM 'WebAspect' SCRIPT: */ mainAnimations();

        // Go to main menu, init game window
        window.switchTo(windows['minecraft:window/main_menu'], { changeTitle: true });

    }

    // Charge extern scripts
    WebAspect.load();

    // AddEventHandler();
    menu_buttons['btn_Settings'].addEventListener("click", function () {

        // Open settings window
        window.switchTo(windows['minecraft:window/settings'], { changeTitle: true });

    }, false);

    menu_buttons['quit_Settings'].addEventListener("click", function () {

        // Open settings window
        window.switchTo(windows['minecraft:window/main_menu'], { changeTitle: true });

    }, false);

    menu_buttons['btn_Singleplayer'].addEventListener("click", function () {

        // Play on mode singleplayer
        openPlayCanvas({ mode: 'singleplayer', world: "TrucoLandia" });

    }, false);

    menu_buttons['btn_Multiplayer'].addEventListener("click", function () {

        // Play on mode multiplayer
        // openPlayCanvas({ mode: 'multiplayer' });

        showServerList();

    }, false);

}

function openPlayCanvas(data) {
    (windows['minecraft:window/canvas'].htmlobj).setAttribute("src", Gameplay.info['emulator-url']);

    window.switchTo(windows['minecraft:window/canvas'], { changeTitle: false });
    if (data['mode'] == 'singleplayer') {
        changeTitle(windows['minecraft:window/canvas']['title'].on_singleplayer.replaceAll("$world_name", data['world']['name']));
    } else if (data['mode'] == 'multiplayer') {
        changeTitle(windows['minecraft:window/canvas']['title'].on_multiplayer);
    }
}

window.switchTo = function (windowsToSwitch, options) {

    switch (windowsToSwitch) {
        case windows['minecraft:window/loadscreen']: // ID: 00
            if (options['changeTitle']) {
                changeTitle(windowsToSwitch.title);
            }

            window.disableAllExcept(windowsToSwitch);
            window.enable(windowsToSwitch);
            break;

        case windows['minecraft:window/main_menu']: // ID: 01
            if (options['changeTitle']) {
                changeTitle(windowsToSwitch.title);
            }

            window.disableAllExcept(windowsToSwitch);
            window.enable(windowsToSwitch);
            break;

        case windows['minecraft:window/settings']: // ID: 02
            if (options['changeTitle']) {
                changeTitle(windowsToSwitch.title);
            }

            window.disableAllExcept(windowsToSwitch);
            window.enable(windowsToSwitch);
            break;

        case windows['minecraft:window/canvas']: // ID: 03
            if (options['changeTitle']) {
                changeTitle(windowsToSwitch.title[0]);
            }

            window.disableAllExcept(windowsToSwitch);
            window.enable(windowsToSwitch);
            break;

        case windows['minecraft:window/server_list']: // ID: 04
            if (options['changeTitle']) {
                changeTitle(windowsToSwitch.title);
            }

            window.disableAllExcept(windowsToSwitch);
            window.enable(windowsToSwitch);
            break;
    }

}

window.disableAllExcept = function (except) {
    for (var i = 0; i < windows['windows'].length; i++) {
        if (windows.windows[i] == except.name) {
            continue;
        }

        window.disable(windows[windows.windows[i]]);
    }
}

window.enable = function (a_window) {
    a_window['htmlobj'].style.display = "";
}

window.disable = function (a_window) {
    a_window['htmlobj'].style.display = "none";
}

function setTimestamp(timestamp) {
    // Introduce the selected timestamp on timestamps and return index
    return timestamps.push(timestamp) - 1;
}

function showServerList() {

    // Open the server list
    window.switchTo(windows['minecraft:window/server_list']);

}