define(function() {
    return {
        "properties": [{
            "name": "searchIcon",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "locationIcon",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "cancelLabelVisibility",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "searchLabelVisibility",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "locationPlaceHolder",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "categoryPlaceHolder",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "searchLabelText",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "cancelLabelText",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "locationTbxText",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "categoryTbxText",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "btnClearLocationVisibility",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "headerSkin",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "textBoxSkin",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "cancelSearchButtonSkin",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "clearBtnSkin",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "textBoxOnFocusSkin",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "textBoxPlaceHolderSkin",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "clearBtnOnFocus",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["getSearchData", "forceLayoutOnComponent", "disableLocationTextBox"],
        "events": ["onEditLocationDone", "cancelClicked", "locationTextChanged", "placeCategoryTextChanged", "onTouchStartOfLocationTextBox", "onTouchStartOfCategoryTextBox", "changeText"]
    }
});