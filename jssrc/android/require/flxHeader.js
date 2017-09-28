define("flxHeader", function() {
    return function(controller) {
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "sknFlxSegHeader00000050"
        }, {}, {});
        flxHeader.setDefaultUnit(kony.flex.DP);
        var lblRecentSearchHeader = new kony.ui.Label({
            "height": "100%",
            "id": "lblRecentSearchHeader",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLbl7f8c8dNatoR91",
            "text": "Recent Search",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxHeader.add(lblRecentSearchHeader);
        return flxHeader;
    }
})