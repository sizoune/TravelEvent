define(function() {
    var controller = require("com/konymp/listmapview/userlistmapviewController");
    var actions = require("com/konymp/listmapview/listmapviewControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "mapRouteVisibility", function(val) {
            this.view.flxMapRoute.isVisible = val;
        });
        defineGetter(this, "mapRouteVisibility", function() {
            return this.view.flxMapRoute.isVisible;
        });
        defineSetter(this, "mapNearByVisibility", function(val) {
            this.view.flxMapView.isVisible = val;
        });
        defineGetter(this, "mapNearByVisibility", function() {
            return this.view.flxMapView.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.Action15062598361576173 = function() {
        if (this.onMapClick) {
            this.onMapClick.apply(this, arguments);
        }
    }
    controller.Action15062598362498154 = function() {
        if (this.getCurrentLocation) {
            this.getCurrentLocation.apply(this, arguments);
        }
    }
    return controller;
});