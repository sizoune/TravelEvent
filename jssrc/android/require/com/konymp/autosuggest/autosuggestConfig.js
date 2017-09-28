define(function() {
    return {
        "properties": [{
            "name": "currentLocationImage",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "currentLocationText",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "currentLocationVisibility",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "autoSuggestRowTemplate",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "currentLocationSkin",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["setDataToSegment", "getCurrentLocationCoordinates"],
        "events": ["fetchCurrentLocationSuccess", "fetchCurrentLocationFailure", "addressSelected", "currentLocationSelectionCallback"]
    }
});