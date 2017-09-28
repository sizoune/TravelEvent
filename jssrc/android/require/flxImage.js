define("flxImage", function() {
    return function(controller) {
        var flxImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM
        }, {}, {});
        flxImage.setDefaultUnit(kony.flex.DP);
        var imgSlider = new kony.ui.Image2({
            "height": "100%",
            "id": "imgSlider",
            "isVisible": true,
            "left": "0dp",
            "src": "kawah2.jpg",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImage.add(imgSlider);
        return flxImage;
    }
})