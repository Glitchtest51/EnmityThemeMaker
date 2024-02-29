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
function saveColorInput() {
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

// Download json data "data" with name "Name" 
function downloadJSONFile(data, Name) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
    link.download = Name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link);
}

// Generates the input values
function generateMaps(main, colorMap, color, unsafe_color, type) {
    var maindiv = document.getElementById(type + "main");
    if (type == 'new') {
        var colorMapdiv = document.getElementById(type + "semanticColors");
    } else {
        var colorMapdiv = document.getElementById(type + "theme_color_map");
    }
    var colordiv = document.getElementById(type + "rawColors");
    var unsafe_colordiv = document.getElementById(type + "unsafe_colors");

    for (var key in main) {
        var textLabel = document.createElement("label");
        textLabel.setAttribute("for", type + main[key]);
        textLabel.textContent = main[key] + ":";

        var text = document.createElement("input");
        text.setAttribute("type", "text");
        text.setAttribute("id", type + main[key]);
        text.setAttribute("name", type + main[key]);

        maindiv.appendChild(textLabel);
        maindiv.appendChild(text);
        maindiv.appendChild(document.createElement("br"));
        maindiv.appendChild(document.createElement("br"));
    }

    for (var key in colorMap) {
        var colorLabel = document.createElement("label");
        colorLabel.setAttribute("for", type + "White" + colorMap[key]);
        colorLabel.textContent = colorMap[key] + ":";

        var whiteInput = document.createElement("input");
        whiteInput.setAttribute("type", "color");
        whiteInput.setAttribute("id", type + "White" + colorMap[key]);
        whiteInput.setAttribute("name", type + "White" + colorMap[key]);

        var blackInput = document.createElement("input");
        blackInput.setAttribute("type", "color");
        blackInput.setAttribute("id", type + "Black" + colorMap[key]);
        blackInput.setAttribute("name", type + "Black" + colorMap[key]);

        colorMapdiv.appendChild(colorLabel);
        colorMapdiv.appendChild(whiteInput);
        colorMapdiv.appendChild(blackInput);
        colorMapdiv.appendChild(document.createElement("br"));
        colorMapdiv.appendChild(document.createElement("br"));
    }

    for (var key in color) {
        var colorLabel = document.createElement("label");
        colorLabel.setAttribute("for", type + color[key]);
        colorLabel.textContent = color[key] + ":";

        var colorInput = document.createElement("input");
        colorInput.setAttribute("type", "color");
        colorInput.setAttribute("id", type + color[key]);
        colorInput.setAttribute("name", type + color[key]);

        colordiv.appendChild(colorLabel);
        colordiv.appendChild(colorInput);
        colordiv.appendChild(document.createElement("br"));
        colordiv.appendChild(document.createElement("br"));
    }

    for (var key in unsafe_color) {
        var colorLabel = document.createElement("label");
        colorLabel.setAttribute("for", type + "UNSAFE_" + unsafe_color[key]);
        colorLabel.textContent = "UNSAFE_" + unsafe_color[key] + ":";

        var colorInput = document.createElement("input");
        colorInput.setAttribute("type", "color");
        colorInput.setAttribute("id", type + "UNSAFE_" + unsafe_color[key]);
        colorInput.setAttribute("name", type + "UNSAFE_" + unsafe_color[key]);

        unsafe_colordiv.appendChild(colorLabel);
        unsafe_colordiv.appendChild(colorInput);
        unsafe_colordiv.appendChild(document.createElement("br"));
        unsafe_colordiv.appendChild(document.createElement("br"));
    }

    saveColorInput();
}