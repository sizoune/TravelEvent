define("flxHolder", function() {
    return function(controller) {
        var flxHolder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "sknFlexffffff",
            "height": "100%",
            "id": "flxHolder",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "skin": "sknFlexffffff"
        }, {}, {});
        flxHolder.setDefaultUnit(kony.flex.DP);
        var flxHolder1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxHolder1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "sknFlexffffff",
            "top": 4,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHolder1.setDefaultUnit(kony.flex.DP);
        var imgItem = new kony.ui.Image2({
            "centerY": 50,
            "height": 80,
            "id": "imgItem",
            "imageWhileDownloading": "no_image.png",
            "isVisible": true,
            "left": "2%",
            "src": "imagedrag.png",
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "2%",
            "top": 5,
            "width": "75%",
            "zIndex": 1
        }, {}, {});
        flxContainer.setDefaultUnit(kony.flex.DP);
        var flxTopCard = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTopCard",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTopCard.setDefaultUnit(kony.flex.DP);
        var flexLeftPane = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexLeftPane",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "top": 0,
            "width": "70%",
            "zIndex": 1
        }, {}, {});
        flexLeftPane.setDefaultUnit(kony.flex.DP);
        var lblPlaceName = new kony.ui.Label({
            "id": "lblPlaceName",
            "isVisible": true,
            "left": "3%",
            "maxNumberOfLines": 2,
            "skin": "sknLbl34495eNatoB100",
            "text": "PlaceName",
            "textStyle": {
                "lineSpacing": 4,
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": 5,
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 1],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAddress = new kony.ui.Label({
            "id": "lblAddress",
            "isVisible": true,
            "left": "3%",
            "maxNumberOfLines": 2,
            "skin": "sknLbl7f8c8dNatoR91",
            "text": "Address",
            "textStyle": {
                "lineSpacing": 4,
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": 5,
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flexLeftPane.add(lblPlaceName, lblAddress);
        var flexRightPane = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexRightPane",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "-1%",
            "top": 0,
            "width": "30%",
            "zIndex": 1
        }, {}, {});
        flexRightPane.setDefaultUnit(kony.flex.DP);
        var lblDistance = new kony.ui.Label({
            "id": "lblDistance",
            "isVisible": false,
            "right": "5%",
            "skin": "sknLblf39c12NatoR100",
            "text": "Distance",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 2,
            "width": "96%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 3],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblRate = new kony.ui.Label({
            "id": "lblRate",
            "isVisible": false,
            "right": "5%",
            "skin": "sknLbl7f8c8dNatoR91",
            "text": "Rate",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "96%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 5],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxRating = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": 30,
            "id": "flxRating",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "1%",
            "top": 2,
            "width": "98%",
            "zIndex": 1
        }, {}, {});
        flxRating.setDefaultUnit(kony.flex.DP);
        var img1 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "80%",
            "id": "img1",
            "isVisible": true,
            "left": "0%",
            "src": "star_empty.png",
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var img2 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "80%",
            "id": "img2",
            "isVisible": true,
            "left": "20%",
            "src": "star_empty.png",
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var img3 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "80%",
            "id": "img3",
            "isVisible": true,
            "left": "40%",
            "src": "star_empty.png",
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var img4 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "80%",
            "id": "img4",
            "isVisible": true,
            "left": "60%",
            "src": "star_empty.png",
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var img5 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "80%",
            "id": "img5",
            "isVisible": true,
            "left": "80%",
            "src": "star_empty.png",
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRating.add(img1, img2, img3, img4, img5);
        var lblTiming = new kony.ui.Label({
            "id": "lblTiming",
            "isVisible": true,
            "right": "7%",
            "skin": "sknLbl7f8c8dNatoR91",
            "text": "Timing",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "96%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 5],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flexRightPane.add(lblDistance, lblRate, flxRating, lblTiming);
        flxTopCard.add(flexLeftPane, flexRightPane);
        var flxBottomCard = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": 0,
            "clipBounds": true,
            "id": "flxBottomCard",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxBottomCard.setDefaultUnit(kony.flex.DP);
        var flxCall = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCall",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "-0.06%",
            "onClick": controller.AS_FlexContainer_f350ef68ccd047fe936eef0fbdbb647f,
            "top": 0,
            "width": "50%",
            "zIndex": 1
        }, {}, {});
        flxCall.setDefaultUnit(kony.flex.DP);
        var imgCall = new kony.ui.Image2({
            "height": 20,
            "id": "imgCall",
            "isVisible": true,
            "left": "3%",
            "src": "phone_icon.png",
            "top": 8,
            "width": "13%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCall = new kony.ui.Label({
            "id": "lblCall",
            "isVisible": true,
            "left": "20%",
            "skin": "sknLbl018ad1NatoR107",
            "text": "Call",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 5,
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 2, 0, 2],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCall.add(imgCall, lblCall);
        var flxDirections = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDirections",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_d9acbf6b75bf4bf9b228517e9133a99f,
            "right": "1%",
            "top": 0,
            "width": "50%",
            "zIndex": 1
        }, {}, {});
        flxDirections.setDefaultUnit(kony.flex.DP);
        var imgGetDirections = new kony.ui.Image2({
            "height": 20,
            "id": "imgGetDirections",
            "isVisible": true,
            "left": "26%",
            "src": "directions_icon.png",
            "top": 8,
            "width": "13%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblGetDirections = new kony.ui.Label({
            "id": "lblGetDirections",
            "isVisible": true,
            "left": "36%",
            "skin": "sknLbl018ad1NatoR107",
            "text": "Directions",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 5,
            "width": "61%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 2, 0, 2],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDirections.add(imgGetDirections, lblGetDirections);
        flxBottomCard.add(flxCall, flxDirections);
        flxContainer.add(flxTopCard, flxBottomCard);
        flxHolder1.add(imgItem, flxContainer);
        flxHolder.add(flxHolder1);
        return flxHolder;
    }
})