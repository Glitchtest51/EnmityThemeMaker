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

// Downloads final theme
function OldUIJSON() {
    var jsonData = {
        "name": value("name"),
        "author": value("author"),
        "version": value("version"),
        "description": value("description"),
        "authors": [{
            "name": value("name"),
            "id": value("id")
        }],
        "background": {
            "blur": value("blur"),
            "url": value("url"),
            "alpha": value("alpha")
        },
        "theme_color_map": {},
        "colours": {},
        "unsafe_colors": {}
    };

    // Generate theme_color_map
    colorMap.forEach(function (item) {
        jsonData.theme_color_map[item] = [value("White" + item), value("Black" + item)];
    });

    // Generate colours
    color.forEach(function (item) {
        jsonData.colours[item] = value(item);
    });

    // Generate unsafe_colors
    unsafe_color.forEach(function (item) {
        jsonData.unsafe_colors[item] = value("UNSAFE_" + item);
    });

    downloadJSOFile(jsonData, 'Theme.json');
}

// Download json data "data" with name "Name" 
function downloadJSOFile(data, Name) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
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

    for (var key in unsafe_color) {
        var colorLabel = document.createElement("label");
        colorLabel.setAttribute("for", "UNSAFE_" + unsafe_color[key]);
        colorLabel.textContent = "UNSAFE_" + unsafe_color[key] + ":";

        var colorInput = document.createElement("input");
        colorInput.setAttribute("type", "color");
        colorInput.setAttribute("id", "UNSAFE_" + unsafe_color[key]);
        colorInput.setAttribute("name", "UNSAFE_" + unsafe_color[key]);

        unsafecolordiv.appendChild(colorLabel);
        unsafecolordiv.appendChild(colorInput);
        unsafecolordiv.appendChild(document.createElement("br"));
        unsafecolordiv.appendChild(document.createElement("br"));
    }

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
var unsafe_color = [
    "CHAT_GREY"
];

// Onload
window.onload = generateColorInputs;