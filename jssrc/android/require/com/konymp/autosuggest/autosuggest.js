define(function() {
    return function(controller) {
        var autosuggest = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "autosuggest",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        autosuggest.setDefaultUnit(kony.flex.DP);
        var flxSuggestion = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSuggestion",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSuggestion.setDefaultUnit(kony.flex.DP);
        var segAutosuggest = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "lblName": ""
            }],
            "groupCells": false,
            "height": "85%",
            "id": "segAutosuggest",
            "isVisible": true,
            "left": "0%",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_a5448d2738c2400d96e68aa9b3068763,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowTemplate": "flxAutoSuggest",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "64646400",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "15%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxAutoSuggest": "flxAutoSuggest",
                "lblLine": "lblLine",
                "lblName": "lblName"
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxCurrentLocation = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "flxCurrentLocation",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_b10e16a5303c48e3ac77a4ec7e3bb0ee,
            "skin": "sknFlexffffff",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxCurrentLocation.setDefaultUnit(kony.flex.DP);
        var imgCurrentLocation = new kony.ui.Image2({
            "centerY": "50%",
            "height": "80%",
            "id": "imgCurrentLocation",
            "isVisible": true,
            "left": "3%",
            "src": "current_location_filled_icon.png",
            "width": "10%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCurrentLocation = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblCurrentLocation",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl018ad1NatoR107",
            "text": "Current Location",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCurrentLocation.add(imgCurrentLocation, lblCurrentLocation);
        flxSuggestion.add(segAutosuggest, flxCurrentLocation);
        autosuggest.add(flxSuggestion);
        return autosuggest;
    }
})