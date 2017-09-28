define(function() {
    return {
        "properties": [{
            "name": "mapRouteVisibility",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "mapNearByVisibility",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "locationData",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "selectedPinLocation",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "mapData",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["mapDataToSegmentAndMap", "shiftToView", "getDirections", "setDataToSegmentAtAPosition", "navigateToLocation", "hideOrUnhideMapSegmentCallout"],
        "events": ["getCurrentLocation", "onMapClick", "customPinClick", "getDirectionsInvokedCallback", "successDrawMapRoute", "refreshData", "callToInvoked", "callSearchHere", "postDataMapping", "cancelMapsSuccess", "openMapsSuccess", "getPlaceDetails"]
    }
});