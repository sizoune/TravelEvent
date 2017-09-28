define("flxAutoSuggest", function() {
    return function(controller) {
        var flxAutoSuggest = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAutoSuggest",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "sknFlexffffff"
        }, {}, {});
        flxAutoSuggest.setDefaultUnit(kony.flex.DP);
        var lblName = new kony.ui.Label({
            "id": "lblName",
            "isVisible": true,
            "left": "3%",
            "skin": "sknLbl2c3e50NutinoR107",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "94%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 4, 0, 4],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblLine = new kony.ui.Label({
            "bottom": 3,
            "height": "1dp",
            "id": "lblLine",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl5e7185Opacity15",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxAutoSuggest.add(lblName, lblLine);
        return flxAutoSuggest;
    }
})