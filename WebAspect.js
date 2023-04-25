/*
 * This file is part of the project MinecraftJavascriptEdition
 * Project Link: <https://github.com/CiroDOS/MinecraftJavascriptEdition>
 * If you distribute this file, please, don't quit this copyright notes.
 * ¡Thank you for watching my code!
 */

const title = "Minecraft Javascript Edition";
var padding = { measurement: "px" };
var splashes = ["Minecraft!",
                "100% Javascript, CSS & HTML!",
                "Minceraft is real?",
                "Wenomechoindesama",
                "Turip ip ip",
                "Vibe Tracks is YouTube on 2013 B)",
                '10 PRINT "Hello World!"',
                "$sudo install Minecraft",
                "Microsoft is killing the future of Minecraft",
                "YOU CAN SAVE MINECRAFT! PLAY MINECRAFT JAVA-SCRIPT!",
                "HELP ME! I installed Windows 95 on 2023!",
                btoa("WoW, you are extremely intelligent."),
                "I can play Minecraft without internet on Java. Soon on javascript!",
                "I prefer Minecraft Javascript Feedback than Minecraft Java Feedback",
                "GitHub CiroDOS!"
            ];


var range_padding_button;

function changeTitle(s_title) {
    window.document.getElementsByTagName("title")[0].innerText = s_title;
}

function topBarSettingsPaddingCharger() {
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

function buttonPaddingCharger() {
    console.group("Changing button size...");

    var max_button_padding = { quantity: 33, measurement: "px" };
    var min_button_padding = { quantity: 10, measurement: "px" };

    var padding_btn = Math.calcPercentage(range_padding_button.value, max_button_padding.quantity);

    if (padding_btn < min_button_padding.quantity) {
        padding_btn = min_button_padding.quantity;
    }

    for (let i = 0; i < window.document.getElementsByTagName("button").length; i++) {
        var selected_btn = window.document.getElementsByTagName("button")[i];
        if (selected_btn.hasAttribute("data")) {
            let button_data = JSON.parse(selected_btn.getAttribute("data"));

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
            selected_btn.style.padding = `${padding_btn}${padding.measurement}`;

            selected_btn.style.paddingBottom = `${padding_btn / 2}${padding.measurement}`;
            selected_btn.style.paddingTop = `${padding_btn / 2}${padding.measurement}`;
        }

    }
    console.log("Done!");
    console.groupEnd();
}

function paddingCharger() {
    topBarSettingsPaddingCharger();
    buttonPaddingCharger();
}

class WebAspect {
    static load() {
        console.group("Working on graphics...");
        window.range_padding_button = window.document.getElementById("btn_range_padding");
        range_padding_button.addEventListener(
            "change", window.paddingCharger, false
        );
        window.paddingCharger();
        window.showSplashes();
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

    let a_c = 0;
    let m_c = phases.length - 1;

    var splash_txt = document.getElementById("splash-text");

    setInterval(function() {
        splash_txt.style.fontSize = `${phases[a_c].quantity}${phases[a_c].measurement}`;
        if (a_c == m_c) {
            a_c = 0;
        } else {
            a_c++;
        }
    }, 100);
    
}

function showSplashes() {
    if (splashes.length < 1) {
        splashes[0] = "Missingno."; // Reference to pokemon
        document.getElementById("splash-text").outerText = splashes[0];
        return;
    }

    var splash;

    // ROUND MATH.RANDOM() FUNCTION
    var num = Math.randoming(splashes.length, 0);

    if (num < 0 || num > splashes.length || num == null) {
        splash = "Minceraft";
    } else {
        splash = splashes[num];
    }

    document.getElementById("splash-text").innerText = splash;

}

function consentSplash(splash, confirmation) {
    if (confirmation == 1) {
        splashes.push(splash);
        return confirmation;
    } else {
        return undefined;
    }
}

function mainAnimations() {
    console.group("Menu animations");
    let getCSSProperty = function(property) {
        return `url(${property})`
    }

    let properties = {'minecraft:assets/textures/gui/wallpaper.movement': 'assets/minecraft/textures/gui/gifWallpaper.gif', 'minecraft:assets/textures/gui/wallpaper.static': 'assets/minecraft/textures/gui/staticWallpaper.png'};
    let animations = {'minecraft.animation.movement/muted': getCSSProperty(properties['minecraft:assets/textures/gui/wallpaper.movement']), 'none': getCSSProperty(properties['minecraft:assets/textures/gui/wallpaper.static'])};

    console.log("Charged animations [minecraft.animation.movement, none]");

    // Set default image to an png image
    (windows['minecraft:window/main_menu'].htmlobj).style.backgroundImage = animations['minecraft.animation.movement/muted'];
    console.log("Changed background with: [minecraft.animation.movement]");

    // Timerize
    setTimeout(function() {
        // Change image to static/png image
        console.group("Animations done");

        console.log("Change resource: [minecraft:window/main_menu] styles with minecraft:animations('none')");
        (windows['minecraft:window/main_menu'].htmlobj).style.backgroundImage = animations['none'];
        console.log("Successfully changed styles!");

        console.groupEnd();
    }, 1500)

    console.groupEnd();
}