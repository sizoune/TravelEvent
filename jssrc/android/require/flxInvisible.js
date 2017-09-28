define("flxInvisible", function() {
    return function(controller) {
        var flxInvisible = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1%",
            "id": "flxInvisible",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "width": "1%"
        }, {}, {});
        flxInvisible.setDefaultUnit(kony.flex.DP);
        flxInvisible.add();
        return flxInvisible;
    }
})