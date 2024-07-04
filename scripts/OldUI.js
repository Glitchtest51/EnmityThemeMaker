// Functions 

// Downloads final theme
function OldUIJSON() {
    var jsonData = {
        "name": value('old' + "name"),
        "version": value('old' + "version"),
        "description": value('old' + "description"),
        "authors": [{
            "name": value('old' + "author"),
            "id": value('old' + "id")
        }],
        "theme_color_map": {},
        "colours": {},
        "unsafe_colors": {}
    };

    if (value('old' + "url") != "") {
       jsonData["background"] = {
            "blur": value('old' + "blur"),
            "url": value('old' + "url"),
            "alpha": value('old' + "alpha")
        }
    }

    // Generate theme_color_map
    theme_color_map.forEach(function (item) {
        jsonData.theme_color_map[item] = [value('old' + "White" + item), value('old' + "Black" + item)];
    });

    // Generate colours
    colours.forEach(function (item) {
        jsonData.colours[item] = value('old' + item);
    });

    // Generate unsafe_colors
    unsafe_colors.forEach(function (item) {
        jsonData.unsafe_colors[item] = value('old' + "UNSAFE_" + item);
    });

    downloadJSONFile(jsonData, value('old' + "name") + '.json');
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
var theme_color_map = [
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
var colours = [
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
var unsafe_colors = [
    "CHAT_GREY"
];

// Onload
window.onload = generateMaps(main, theme_color_map, colours, unsafe_colors, 'old');
