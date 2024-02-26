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
function generateColorInputs(main, colorMap, color, unsafe_color) {
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