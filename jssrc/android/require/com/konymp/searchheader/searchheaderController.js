define(function() {
    var controller = require("com/konymp/searchheader/usersearchheaderController");
    var actions = require("com/konymp/searchheader/searchheaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "searchIcon", function(val) {
            this.view.imgSearch.src = val;
        });
        defineGetter(this, "searchIcon", function() {
            return this.view.imgSearch.src;
        });
        defineSetter(this, "locationIcon", function(val) {
            this.view.imgLocation.src = val;
        });
        defineGetter(this, "locationIcon", function() {
            return this.view.imgLocation.src;
        });
        defineSetter(this, "cancelLabelVisibility", function(val) {
            this.view.lblCancel.isVisible = val;
        });
        defineGetter(this, "cancelLabelVisibility", function() {
            return this.view.lblCancel.isVisible;
        });
        defineSetter(this, "searchLabelVisibility", function(val) {
            this.view.lblSearch.isVisible = val;
        });
        defineGetter(this, "searchLabelVisibility", function() {
            return this.view.lblSearch.isVisible;
        });
        defineSetter(this, "locationPlaceHolder", function(val) {
            this.view.txtLocation.placeholder = val;
        });
        defineGetter(this, "locationPlaceHolder", function() {
            return this.view.txtLocation.placeholder;
        });
        defineSetter(this, "categoryPlaceHolder", function(val) {
            this.view.txtPlaceOrCategory.placeholder = val;
        });
        defineGetter(this, "categoryPlaceHolder", function() {
            return this.view.txtPlaceOrCategory.placeholder;
        });
        defineSetter(this, "searchLabelText", function(val) {
            this.view.lblSearch.text = val;
        });
        defineGetter(this, "searchLabelText", function() {
            return this.view.lblSearch.text;
        });
        defineSetter(this, "cancelLabelText", function(val) {
            this.view.lblCancel.text = val;
        });
        defineGetter(this, "cancelLabelText", function() {
            return this.view.lblCancel.text;
        });
        defineSetter(this, "locationTbxText", function(val) {
            this.view.txtLocation.text = val;
        });
        defineGetter(this, "locationTbxText", function() {
            return this.view.txtLocation.text;
        });
        defineSetter(this, "categoryTbxText", function(val) {
            this.view.txtPlaceOrCategory.text = val;
        });
        defineGetter(this, "categoryTbxText", function() {
            return this.view.txtPlaceOrCategory.text;
        });
        defineSetter(this, "btnClearLocationVisibility", function(val) {
            this.view.btnClearLocation.isVisible = val;
        });
        defineGetter(this, "btnClearLocationVisibility", function() {
            return this.view.btnClearLocation.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.Action15066121362132769 = function() {
        if (this.cancelClicked) {
            this.cancelClicked.apply(this, arguments);
        }
    }
    controller.Action15066121362706010 = function() {
        if (this.onEditLocationDone) {
            this.onEditLocationDone.apply(this, arguments);
        }
    }
    return controller;
});