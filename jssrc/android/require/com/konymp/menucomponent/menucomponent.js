define(function() {
    return function(controller) {
        var menucomponent = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "menucomponent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        menucomponent.setDefaultUnit(kony.flex.DP);
        var flxMenuHolder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMenuHolder",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMenuHolder.setDefaultUnit(kony.flex.DP);
        var flxMenu = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "85%",
            "id": "flxMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlexffffff",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMenu.setDefaultUnit(kony.flex.DP);
        var imgMore = new kony.ui.Image2({
            "centerX": "87.50%",
            "centerY": "70%",
            "height": "20%",
            "id": "imgMore",
            "isVisible": false,
            "src": "more_icon.png",
            "width": "14%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblMore = new kony.ui.Label({
            "centerX": "87.50%",
            "centerY": "85%",
            "id": "lblMore",
            "isVisible": false,
            "skin": "sknLbl7f8c8dNatoR91",
            "text": "More",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "25%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblTitle = new kony.ui.Label({
            "centerX": "49.95%",
            "id": "lblTitle",
            "isVisible": true,
            "skin": "sknLbl7f8c8dNatoB121",
            "text": "WHAT ARE YOU LOOKING FOR?",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3.00%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxMenu.add(imgMore, lblMore, lblTitle);
        var flxSearchSelection = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "flxSearchSelection",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0.05%",
            "skin": "sknFlexffffff",
            "top": "0.00%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSearchSelection.setDefaultUnit(kony.flex.DP);
        var btnSearchSelection = new kony.ui.Button({
            "centerX": "50%",
            "focusSkin": "sknBtn018ad1",
            "height": "85%",
            "id": "btnSearchSelection",
            "isVisible": true,
            "onClick": controller.Action15065818647064141,
            "skin": "sknBtn018ad1",
            "text": "Search",
            "top": "5%",
            "width": "60%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSearchSelection.add(btnSearchSelection);
        flxMenuHolder.add(flxMenu, flxSearchSelection);
        menucomponent.add(flxMenuHolder);
        return menucomponent;
    }
})