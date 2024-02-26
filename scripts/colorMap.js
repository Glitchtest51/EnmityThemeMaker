// Functions

// Shows New UI and Hides Old UI
function showNewUI() {
    document.getElementById("NewEditor").style.display = "block";
    document.getElementById("OldEditor").style.display = "none";
}

// Shows Old UI and Hides New UI
function showOldUI() {
    document.getElementById("NewEditor").style.display = "none";
    document.getElementById("OldEditor").style.display = "block";
}

// Fetchs OG color inputs for HexBox
function Colors() {
    document.querySelectorAll('input[type="color"]').forEach(function(input) {
        originalColors[input.id] = input.name;
    });
}

// Switches Color inputs between Type Color and Text
function hexBox() {
    var hexBox = document.getElementById("HexBox");
    
    if (hexBox.checked) {
        for (var key in originalColors) {
            document.getElementById(key).type = 'text';
        }
    } else {
        for (var key in originalColors) {
            document.getElementById(key).type = 'color';
        }
        setDefaultColors();
    }
}  

// Gets Element Value by ID
function value(id) {
    var element = document.getElementById(id);
    if (element) {
        return element.value;
    } else {
        return '';
    }
}


function OldUIJSON() {
    var jsonData = {
        "name": value("name"),
        "author": value("author"),
        "version": value("version"),
        "description": value("description"),
        "authors": [ 
            {
                "name": value("name"),
                "id": value("id")
            }
        ],
        "background": {
            "blur": value("blur"),
            "url": value("url"),
            "alpha": value("alpha")
        },
        "theme_color_map": {
            "KEYBOARD": [value("WhiteKEYBOARD"), value("BlackKEYBOARD")],
            "CHAT_GREY": [value("WhiteCHAT_GREY"), value("BlackCHAT_GREY")],
            "BACKGROUND_SECONDARY": [value("WhiteBACKGROUND_SECONDARY"), value("BlackBACKGROUND_SECONDARY")],
            "BACKGROUND_SECONDARY_ALT": [value("WhiteBACKGROUND_SECONDARY_ALT"), value("BlackBACKGROUND_SECONDARY_ALT")],
            "BACKGROUND_TERTIARY": [value("WhiteBACKGROUND_TERTIARY"), value("BlackBACKGROUND_TERTIARY")],
            "BACKGROUND_ACCENT": [value("WhiteBACKGROUND_ACCENT"), value("BlackBACKGROUND_ACCENT")],
            "BACKGROUND_FLOATING": [value("WhiteBACKGROUND_FLOATING"), value("BlackBACKGROUND_FLOATING")],
            "BACKGROUND_NESTED_FLOATING": [value("WhiteBACKGROUND_NESTED_FLOATING"), value("BlackBACKGROUND_NESTED_FLOATING")],
            "BACKGROUND_MOBILE_PRIMARY": [value("WhiteBACKGROUND_MOBILE_PRIMARY"), value("BlackBACKGROUND_MOBILE_PRIMARY")],
            "BACKGROUND_MOBILE_SECONDARY": [value("WhiteBACKGROUND_MOBILE_SECONDARY"), value("BlackBACKGROUND_MOBILE_SECONDARY")],
            "BACKGROUND_MODIFIER_ACCENT": [value("WhiteBACKGROUND_MODIFIER_ACCENT"), value("BlackBACKGROUND_MODIFIER_ACCENT")],
            "BACKGROUND_MODIFIER_ACTIVE": [value("WhiteBACKGROUND_MODIFIER_ACTIVE"), value("BlackBACKGROUND_MODIFIER_ACTIVE")],
            "BACKGROUND_MODIFIER_SELECTED": [value("WhiteBACKGROUND_MODIFIER_SELECTED"), value("BlackBACKGROUND_MODIFIER_SELECTED")],
            "CHANNELS_DEFAULT": [value("WhiteCHANNELS_DEFAULT"), value("BlackCHANNELS_DEFAULT")],
            "HEADER_PRIMARY": [value("WhiteHEADER_PRIMARY"), value("BlackHEADER_PRIMARY")],
            "HEADER_SECONDARY": [value("WhiteHEADER_SECONDARY"), value("BlackHEADER_SECONDARY")],
            "INTERACTIVE_ACTIVE": [value("WhiteINTERACTIVE_ACTIVE"), value("BlackINTERACTIVE_ACTIVE")],
            "INTERACTIVE_MUTED": [value("WhiteINTERACTIVE_MUTED"), value("BlackINTERACTIVE_MUTED")],
            "INTERACTIVE_NORMAL": [value("WhiteINTERACTIVE_NORMAL"), value("BlackINTERACTIVE_NORMAL")],
            "TEXT_LINK": [value("WhiteTEXT_LINK"), value("BlackTEXT_LINK")],
            "TEXT_MUTED": [value("WhiteTEXT_MUTED"), value("BlackTEXT_MUTED")],
            "TEXT_NORMAL": [value("WhiteTEXT_NORMAL"), value("BlackTEXT_NORMAL")]
        },
        "colours": {
            "PRIMARY_DARK": value("PRIMARY_DARK"),
            "PRIMARY_DARK_100": value("PRIMARY_DARK_100"),
            "PRIMARY_DARK_300": value("PRIMARY_DARK_300"),
            "PRIMARY_DARK_360": value("PRIMARY_DARK_360"),
            "PRIMARY_DARK_400": value("PRIMARY_DARK_400"),
            "PRIMARY_DARK_500": value("PRIMARY_DARK_500"),
            "PRIMARY_DARK_600": value("PRIMARY_DARK_600"),
            "PRIMARY_DARK_630": value("PRIMARY_DARK_630"),
            "PRIMARY_DARK_700": value("PRIMARY_DARK_700"),
            "PRIMARY_DARK_800": value("PRIMARY_DARK_800"),
            "BRAND_NEW": value("BRAND_NEW"),
            "WHITE": value("WHITE")
        },
        "unsafe_colors": {
            "CHAT_GREY": value("unsafeCHAT_GREY")
        }
    };

    downloadJSOFile(jsonData, 'Theme.json')
}

// Download json data "JSON" with name "Name" 
function downloadJSOFile(JSON, Name) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([JSON.stringify(JSON, null, 2)], { type: 'application/json' }));
    link.download = Name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Generates the input values
function generateColorInputs() {
    var maindiv = document.getElementById("main");
    var colorMapdiv = document.getElementById("ColorMaps");
    var colordiv = document.getElementById("color");
    var unsafecolordiv = document.getElementById("unsafecolor");

    for (var key in main) {
        var textLabel = document.createElement("label");
        textLabel.setAttribute("for", main[key]);
        textLabel.textContent = main[key] + ":";

        var text = document.createElement("input");
        text.setAttribute("type", "text");
        text.setAttribute("id", main[key]);
        text.setAttribute("name", main[key]);

        maindiv.appendChild(textLabel);
        maindiv.appendChild(text);
        maindiv.appendChild(document.createElement("br"));
        maindiv.appendChild(document.createElement("br"));
    }

    for (var key in colorMap) {
        var colorLabel = document.createElement("label");
        colorLabel.setAttribute("for", "White" + colorMap[key]);
        colorLabel.textContent = colorMap[key] + ":";

        var whiteInput = document.createElement("input");
        whiteInput.setAttribute("type", "color");
        whiteInput.setAttribute("id", "White" + colorMap[key]);
        whiteInput.setAttribute("name", "White" + colorMap[key]);

        var blackInput = document.createElement("input");
        blackInput.setAttribute("type", "color");
        blackInput.setAttribute("id", "Black" + colorMap[key]);
        blackInput.setAttribute("name", "Black" + colorMap[key]);

        colorMapdiv.appendChild(colorLabel);
        colorMapdiv.appendChild(whiteInput);
        colorMapdiv.appendChild(blackInput);
        colorMapdiv.appendChild(document.createElement("br"));
        colorMapdiv.appendChild(document.createElement("br"));
    }

    for (var key in color) {
        var colorLabel = document.createElement("label");
        colorLabel.setAttribute("for", color[key]);
        colorLabel.textContent = color[key] + ":";

        var colorInput = document.createElement("input");
        colorInput.setAttribute("type", "color");
        colorInput.setAttribute("id", color[key]);
        colorInput.setAttribute("name", color[key]);

        colordiv.appendChild(colorLabel);
        colordiv.appendChild(colorInput);
        colordiv.appendChild(document.createElement("br"));
        colordiv.appendChild(document.createElement("br"));
    }

    for (var key in Unsafe_color) {
        var colorLabel = document.createElement("label");
        colorLabel.setAttribute("for", "UNSAFE_" + Unsafe_color[key]);
        colorLabel.textContent = "UNSAFE_" + Unsafe_color[key] + ":";

        var colorInput = document.createElement("input");
        colorInput.setAttribute("type", "color");
        colorInput.setAttribute("id", "UNSAFE_" + Unsafe_color[key]);
        colorInput.setAttribute("name", "UNSAFE_" + Unsafe_color[key]);

        unsafecolordiv.appendChild(colorLabel);
        unsafecolordiv.appendChild(colorInput);
        unsafecolordiv.appendChild(document.createElement("br"));
        unsafecolordiv.appendChild(document.createElement("br"));
    }

    setDefaultColors();
    Colors();
}

// Vars
var originalColors = {};
var main = [
    "name",
    "author",
    "id",
    "version",
    "description",
    "blur",
    "url",
    "alpha"
];
var colorMap = [
    "KEYBOARD",
    "BACKGROUND_PRIMARY",
    "BACKGROUND_SECONDARY",
    "BACKGROUND_SECONDARY_ALT",
    "BACKGROUND_TERTIARY",
    "BACKGROUND_ACCENT",
    "BACKGROUND_FLOATING",
    "BACKGROUND_NESTED_FLOATING",
    "BACKGROUND_MOBILE_PRIMARY",
    "BACKGROUND_MOBILE_SECONDARY",
    "BACKGROUND_MODIFIER_ACCENT",
    "BACKGROUND_MODIFIER_ACTIVE",
    "BACKGROUND_MODIFIER_SELECTED",
    "CHANNELS_DEFAULT",
    "HEADER_PRIMARY",
    "HEADER_SECONDARY",
    "INTERACTIVE_ACTIVE",
    "INTERACTIVE_MUTED",
    "INTERACTIVE_NORMAL",
    "TEXT_LINK",
    "TEXT_MUTED",
    "TEXT_NORMAL"
];
var color = [
    "PRIMARY_DARK",
    "PRIMARY_DARK_100",
    "PRIMARY_DARK_300",
    "PRIMARY_DARK_360",
    "PRIMARY_DARK_400",
    "PRIMARY_DARK_500",
    "PRIMARY_DARK_600",
    "PRIMARY_DARK_630",
    "PRIMARY_DARK_700",
    "PRIMARY_DARK_800",
    "BRAND_NEW",
    "WHITE"
];
var Unsafe_color = [
    "CHAT_GREY"
];

// Onload
window.onload = generateColorInputs;