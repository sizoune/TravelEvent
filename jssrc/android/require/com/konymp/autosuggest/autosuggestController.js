define(function() {
    var controller = require("com/konymp/autosuggest/userautosuggestController");
    var actions = require("com/konymp/autosuggest/autosuggestControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "currentLocationImage", function(val) {
            this.view.imgCurrentLocation.src = val;
        });
        defineGetter(this, "currentLocationImage", function() {
            return this.view.imgCurrentLocation.src;
        });
        defineSetter(this, "currentLocationText", function(val) {
            this.view.lblCurrentLocation.text = val;
        });
        defineGetter(this, "currentLocationText", function() {
            return this.view.lblCurrentLocation.text;
        });
        defineSetter(this, "currentLocationVisibility", function(val) {
            this.view.imgCurrentLocation.isVisible = val;
        });
        defineGetter(this, "currentLocationVisibility", function() {
            return this.view.imgCurrentLocation.isVisible;
        });
        defineSetter(this, "autoSuggestRowTemplate", function(val) {
            this.view.segAutosuggest.rowTemplate = val;
        });
        defineGetter(this, "autoSuggestRowTemplate", function() {
            return this.view.segAutosuggest.rowTemplate;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});