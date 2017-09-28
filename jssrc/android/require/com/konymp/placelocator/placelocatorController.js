define(function() {
    var controller = require("com/konymp/placelocator/userplacelocatorController");
    var actions = require("com/konymp/placelocator/placelocatorControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "searchButtonText", function(val) {
            this.view.menuComponent.searchButtonText = val;
        });
        defineGetter(this, "searchButtonText", function() {
            return this.view.menuComponent.searchButtonText;
        });
        defineSetter(this, "suggestedPlaceTypesHeading", function(val) {
            this.view.menuComponent.titleText = val;
        });
        defineGetter(this, "suggestedPlaceTypesHeading", function() {
            return this.view.menuComponent.titleText;
        });
        defineSetter(this, "locationIcon", function(val) {
            this.view.searchHeader.locationIcon = val;
        });
        defineGetter(this, "locationIcon", function() {
            return this.view.searchHeader.locationIcon;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});