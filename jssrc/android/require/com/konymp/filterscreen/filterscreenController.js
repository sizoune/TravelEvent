define(function() {
    var controller = require("com/konymp/filterscreen/userfilterscreenController");
    var actions = require("com/konymp/filterscreen/filterscreenControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.Action15065818632162723 = function() {
        if (this.cancelFilter) {
            this.cancelFilter.apply(this, arguments);
        }
    }
    return controller;
});