define(function() {
    return {
        "properties": [{
            "name": "titleVisibility",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "titleText",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "searchSelectionVisibility",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "searchButtonText",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "menuContainerSkin",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["enableDisableSearchButton", "getSelectedCategory", "forceLayoutTheComponent", "creatDynamicMenu"],
        "events": ["onSearchSelectionClicked", "selectedUnselectedImage"]
    }
});