define(function() {
    var controller = require("com/konymp/menucomponent/usermenucomponentController");
    var actions = require("com/konymp/menucomponent/menucomponentControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "titleVisibility", function(val) {
            this.view.lblTitle.isVisible = val;
        });
        defineGetter(this, "titleVisibility", function() {
            return this.view.lblTitle.isVisible;
        });
        defineSetter(this, "titleText", function(val) {
            this.view.lblTitle.text = val;
        });
        defineGetter(this, "titleText", function() {
            return this.view.lblTitle.text;
        });
        defineSetter(this, "searchSelectionVisibility", function(val) {
            this.view.flxSearchSelection.isVisible = val;
        });
        defineGetter(this, "searchSelectionVisibility", function() {
            return this.view.flxSearchSelection.isVisible;
        });
        defineSetter(this, "searchButtonText", function(val) {
            this.view.btnSearchSelection.text = val;
        });
        defineGetter(this, "searchButtonText", function() {
            return this.view.btnSearchSelection.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.Action15062598369683671 = function() {
        if (this.onSearchSelectionClicked) {
            this.onSearchSelectionClicked.apply(this, arguments);
        }
    }
    return controller;
});