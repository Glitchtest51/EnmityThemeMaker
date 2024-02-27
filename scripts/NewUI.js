// Functions 

// Downloads final theme
function NewUIJSON() {
    var jsonData = {
        "name": value('new' + "name"),
        "author": value('new' + "author"),
        "version": value('new' + "version"),
        "description": value('new' + "description"),
        "authors": [{
            "name": value('new' + "author"),
            "id": value('new' + "id")
        }],
        "background": {
            "blur": value('new' + "blur"),
            "url": value('new' + "url"),
            "alpha": value('new' + "alpha")
        },
        "theme_color_map": {},
        "colours": {},
        "unsafe_colors": {}
    };

    // Generate theme_color_map
    colorMap.forEach(function (item) {
        jsonData.theme_color_map[item] = [value('new' + "White" + item), value('new' + "Black" + item)];
    });

    // Generate colours
    color.forEach(function (item) {
        jsonData.colours[item] = value('new' + item);
    });

    // Generate unsafe_colors
    unsafe_color.forEach(function (item) {
        jsonData.unsafe_colors[item] = value('new' + "UNSAFE_" + item);
    });

    downloadJSONFile(jsonData, 'Theme.json');
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
window.onload = generateMaps(main, colorMap, color, unsafe_color, 'new');