define("CopyFBox0c8a19abc487a41", function() {
    return function(controller) {
        CopyFBox0c8a19abc487a41 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "70dp",
            "id": "CopyFBox0c8a19abc487a41",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "width": "100%"
        }, {
            "containerWeight": 100
        }, {});
        CopyFBox0c8a19abc487a41.setDefaultUnit(kony.flex.DP);
        var imgEvents = new kony.ui.Image2({
            "height": "70dp",
            "id": "imgEvents",
            "isVisible": true,
            "left": "5dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, {
            "containerWeight": 100,
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "margin": [0, 0, 0, 0],
            "marginInPixel": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER
        }, {});
        var lblNama = new kony.ui.Label({
            "id": "lblNama",
            "isVisible": true,
            "left": "88dp",
            "skin": "CopyslLabel0d39112220a3d49",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "6dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "containerWeight": 100,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "marginInPixel": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false,
            "vExpand": false,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER
        }, {
            "textCopyable": false
        });
        var lblPrice = new kony.ui.Label({
            "id": "lblPrice",
            "isVisible": true,
            "left": "88dp",
            "skin": "CopyslLabel0d39112220a3d49",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "19dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "containerWeight": 100,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "marginInPixel": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false,
            "vExpand": false,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER
        }, {
            "textCopyable": false
        });
        var lbDistance = new kony.ui.Label({
            "id": "lbDistance",
            "isVisible": true,
            "left": "88dp",
            "skin": "CopyslLabel0d39112220a3d49",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "33dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "containerWeight": 100,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "marginInPixel": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false,
            "vExpand": false,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER
        }, {
            "textCopyable": false
        });
        var lbPrice = new kony.ui.Label({
            "id": "lbPrice",
            "isVisible": true,
            "left": "88dp",
            "skin": "CopyslLabel0d39112220a3d49",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "46dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "containerWeight": 100,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "marginInPixel": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false,
            "vExpand": false,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER
        }, {
            "textCopyable": false
        });
        CopyFBox0c8a19abc487a41.add(imgEvents, lblNama, lblPrice, lbDistance, lbPrice);
        return CopyFBox0c8a19abc487a41;
    }
})