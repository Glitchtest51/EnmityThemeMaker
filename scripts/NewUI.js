// Functions 

// Downloads final theme
function NewUIJSON() {
    var jsonData = {
        "name": value('new' + "name"),
        "description": value('new' + "description"),
        "spec": value('new' + "spec"),
        "authors": [
            {
                "name": value('new' + "author"),
                "id": value('new' + "id")
            }
        ],
        "semanticColors": {},
        "rawColors": {},
        "background": {
          "blur": value('new' + "blur"),
          "url": value('new' + "url"),
          "alpha": value('new' + "alpha")
        }
      };

    // Generate semanticColors
    semanticColors.forEach(function (item) {
        jsonData.semanticColors[item] = [value('new' + "White" + item), value('new' + "Black" + item)];
    });

    // Generate rawColors
    rawColors.forEach(function (item) {
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
    "spec",
    "description",
    "blur",
    "url",
    "alpha"
];
var semanticColors = [
    "HEADER_PRIMARY",
    "HEADER_SECONDARY",
    "TEXT_NORMAL",
    "TEXT_MUTED",
    "TEXT_LINK",
    "INTERACTIVE_NORMAL",
    "INTERACTIVE_HOVER",
    "INTERACTIVE_ACTIVE",
    "INTERACTIVE_MUTED",
    "BACKGROUND_PRIMARY",
    "BACKGROUND_SECONDARY",
    "BACKGROUND_SECONDARY_ALT",
    "BACKGROUND_TERTIARY",
    "BACKGROUND_ACCENT",
    "BACKGROUND_MOBILE_PRIMARY",
    "BACKGROUND_MOBILE_SECONDARY",
    "BACKGROUND_MESSAGE_HOVER",
    "BACKGROUND_MODIFIER_HOVER",
    "BACKGROUND_MODIFIER_ACTIVE",
    "BACKGROUND_MODIFIER_SELECTED",
    "BACKGROUND_MODIFIER_ACCENT",
    "BG_BACKDROP",
    "BG_BASE_PRIMARY",
    "BG_BASE_SECONDARY",
    "CARD_PRIMARY_BG",
    "CHANNEL_ICON",
    "CHAT_BACKGROUND",
    "CHANNEL_TEXT_AREA_PLACEHOLDER",
    "TEXT_DANGER",
    "REDESIGN_BUTTON_SECONDARY_BACKGROUND",
    "REDESIGN_BUTTON_SECONDARY_ALT_BACKGROUND",
    "SPOILER_HIDDEN_BACKGROUND"
];
var rawColors = [
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
window.onload = generateMaps(main, semanticColors, rawColors, unsafe_color, 'new');