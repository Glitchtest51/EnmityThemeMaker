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
        "background": {
            "blur": value('old' + "blur"),
            "url": value('old' + "url"),
            "alpha": value('old' + "alpha")
        },
        "theme_color_map": {},
        "colours": {},
        "unsafe_colors": {}
    };

    // Generate theme_color_map
    theme_color_map.forEach(function (item) {
        jsonData.theme_color_map[item] = [value('old' + "White" + item), value('old' + "Black" + item)];
    });

    // Generate rawColors
    rawColors.forEach(function (item) {
        jsonData.colours[item] = value('old' + item);
    });

    // Generate unsafe_colors
    unsafe_colors.forEach(function (item) {
        jsonData.unsafe_colors[item] = value('old' + "UNSAFE_" + item);
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
var rawColors = [
    "BLACK_500",
    "BRAND_260",
    "BRAND_500",
    "BRAND_560",
    "PRIMARY_100",
    "PRIMARY_130",
    "PRIMARY_160",
    "PRIMARY_200",
    "PRIMARY_230",
    "PRIMARY_300",
    "PRIMARY_360",
    "PRIMARY_400",
    "PRIMARY_460",
    "PRIMARY_500",
    "PRIMARY_560",
    "PRIMARY_630",
    "PRIMARY_645",
    "PRIMARY_660",
    "PRIMARY_700",
    "PRIMARY_800",
    "PLUM_1",
    "PLUM_3",
    "PLUM_6",
    "PLUM_9",
    "PLUM_10",
    "PLUM_11",
    "PLUM_13",
    "PLUM_17",
    "PLUM_18",
    "PLUM_19",
    "PLUM_20",
    "PLUM_22",
    "WHITE_500",
    "WHITE_630"
];
var unsafe_colors = [
    "CHAT_GREY"
];

// Onload
window.onload = generateMaps(main, theme_color_map, rawColors, unsafe_colors, 'old');