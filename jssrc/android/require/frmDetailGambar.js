define("frmDetailGambar", function() {
    return function(controller) {
        function addWidgetsfrmDetailGambar() {
            this.setDefaultUnit(kony.flex.DP);
            var flxDetailGambar = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDetailGambar",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDetailGambar.setDefaultUnit(kony.flex.DP);
            var sgmtGambar = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgSlider": "kawah1.jpg"
                }, {
                    "imgSlider": "kawah3.jpg"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "sgmtGambar",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowTemplate": "flxImage",
                "scrollingEvents": {},
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "64646400",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxImage": "flxImage",
                    "imgSlider": "imgSlider"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDetailGambar.add(sgmtGambar);
            this.add(flxDetailGambar);
        };
        return [{
            "addWidgets": addWidgetsfrmDetailGambar,
            "enabledForIdleTimeout": false,
            "id": "frmDetailGambar",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});