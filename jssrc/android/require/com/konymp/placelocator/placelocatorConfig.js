define(function() {
    return {
        "properties": [{
            "name": "searchButtonText",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "suggestedPlaceTypesHeading",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "locationIcon",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "googleAPIKey",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "defaultSearchRadius",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "currentLocationLabelText",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "currentLocationImage",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["createDynamicMenu", "getDirection", "callInvoked"],
        "events": ["getPlaceDetails"]
    }
});