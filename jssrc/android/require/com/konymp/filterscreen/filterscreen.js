define(function() {
    return function(controller) {
        var filterscreen = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "filterscreen",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        filterscreen.setDefaultUnit(kony.flex.DP);
        var flxFilterHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "8%",
            "id": "flxFilterHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlex34495e",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxFilterHeader.setDefaultUnit(kony.flex.DP);
        var lblCancel = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblCancel",
            "isVisible": true,
            "left": "5%",
            "onTouchEnd": controller.Action15062598356939964,
            "skin": "sknLblffffffNunitoR120",
            "text": "Cancel",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "25%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblFilter = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblFilter",
            "isVisible": true,
            "skin": "sknLblffffffNunitoR120",
            "text": "Filter",
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
        var lblApply = new kony.ui.Label({
            "bottom": "5%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblApply",
            "isVisible": true,
            "onTouchEnd": controller.AS_Label_db16b1af810f4434ab0ffb9ea7c85236,
            "right": "5%",
            "skin": "sknLblffffffNunitoR120",
            "text": "Apply",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "25%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxFilterHeader.add(lblCancel, lblFilter, lblApply);
        var lblSortby = new kony.ui.Label({
            "height": "5%",
            "id": "lblSortby",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLbl2c3e50NutinoR120",
            "text": "Sort by",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15%",
            "width": "40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblRating = new kony.ui.Label({
            "height": "5%",
            "id": "lblRating",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLbl2c3e50NutinoR120",
            "text": "Rating",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "35%",
            "width": "40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblPrice = new kony.ui.Label({
            "height": "5%",
            "id": "lblPrice",
            "isVisible": false,
            "left": "5%",
            "skin": "sknLbl2c3e50NutinoR120",
            "text": "Price",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "42%",
            "width": "40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxSortOptions = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7%",
            "id": "flxSortOptions",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "skin": "sknFlxF2F2F2RoundCorner",
            "top": "22%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxSortOptions.setDefaultUnit(kony.flex.DP);
        var lblBestSort = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblBestSort",
            "isVisible": true,
            "left": "0%",
            "onTouchEnd": controller.AS_Label_aa5a58edaf5e4846944153a2bd4fb897,
            "skin": "sknBGLbl018ad1FontFFFFFFNunitoR91",
            "text": "Best Match",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblRatingSort = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblRatingSort",
            "isVisible": true,
            "left": "0%",
            "onTouchEnd": controller.AS_Label_cc60273d45fb4e54957883ca5dad8ca7,
            "skin": "sknLblbdc3c7NunitoR91",
            "text": "Rating",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "35%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblPriceSort = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblPriceSort",
            "isVisible": false,
            "left": "0%",
            "onTouchEnd": controller.AS_Label_e34e26904cbc4cc7bdc8e1e834d5a14f,
            "skin": "sknLblbdc3c7NunitoR91",
            "text": "Price",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "23%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAZSort = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblAZSort",
            "isVisible": true,
            "left": "0%",
            "onTouchEnd": controller.AS_Label_d4374c0530964a08b65adf1f5af886b8,
            "skin": "sknLblbdc3c7NunitoR91",
            "text": "A-Z",
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
        flxSortOptions.add(lblBestSort, lblRatingSort, lblPriceSort, lblAZSort);
        var imgRating1 = new kony.ui.Image2({
            "height": "6%",
            "id": "imgRating1",
            "isVisible": true,
            "left": "5%",
            "onTouchEnd": controller.AS_Image_c58344b5311b44b18db9d184d73d744d,
            "src": "star_empty.png",
            "top": "42%",
            "width": "10%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgRating2 = new kony.ui.Image2({
            "height": "6%",
            "id": "imgRating2",
            "isVisible": true,
            "left": "20%",
            "onTouchEnd": controller.AS_Image_ab649464b0544d31aa8651e667eed9c7,
            "src": "star_empty.png",
            "top": "42%",
            "width": "10%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgRating3 = new kony.ui.Image2({
            "height": "6%",
            "id": "imgRating3",
            "isVisible": true,
            "left": "35%",
            "onTouchEnd": controller.AS_Image_g4472e67b3d947d293a5bfb59abf1380,
            "src": "star_empty.png",
            "top": "42%",
            "width": "10%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgRating4 = new kony.ui.Image2({
            "height": "6%",
            "id": "imgRating4",
            "isVisible": true,
            "left": "50%",
            "onTouchEnd": controller.AS_Image_e4c5d496599744b49a9629b162b540b9,
            "src": "star_empty.png",
            "top": "42%",
            "width": "10%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgRating5 = new kony.ui.Image2({
            "height": "6%",
            "id": "imgRating5",
            "isVisible": true,
            "left": "65%",
            "onTouchEnd": controller.AS_Image_e0fce97893904aaca4d6346dba7fe01c,
            "src": "star_empty.png",
            "top": "42%",
            "width": "10%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblAndUp = new kony.ui.Label({
            "height": "6%",
            "id": "lblAndUp",
            "isVisible": true,
            "left": "80%",
            "skin": "sknLbl2c3e50NutinoR120",
            "text": "& up",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "42%",
            "width": "20%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAndBelow = new kony.ui.Label({
            "height": "6%",
            "id": "lblAndBelow",
            "isVisible": false,
            "left": "70%",
            "skin": "sknLbl2c3e50NutinoR120",
            "text": "& below",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "48%",
            "width": "20%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblPriceL1 = new kony.ui.Label({
            "height": "6%",
            "id": "lblPriceL1",
            "isVisible": false,
            "left": "5%",
            "onTouchEnd": controller.AS_Label_b2718babf6d74b94a8c41b05324562bc,
            "skin": "sknLblFontDBDBDBNunitoR157",
            "text": "$",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "48%",
            "width": "10%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblPriceL2 = new kony.ui.Label({
            "height": "6%",
            "id": "lblPriceL2",
            "isVisible": false,
            "left": "15%",
            "onTouchEnd": controller.AS_Label_cbac5a461fe341b187814d2cca9326b3,
            "skin": "sknLblFontDBDBDBNunitoR157",
            "text": "$$",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "48%",
            "width": "12%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblPriceL3 = new kony.ui.Label({
            "height": "6%",
            "id": "lblPriceL3",
            "isVisible": false,
            "left": "30.00%",
            "onTouchEnd": controller.AS_Label_e7b0d5978b1340b2ba8af5a56ad87fac,
            "skin": "sknLblFontDBDBDBNunitoR157",
            "text": "$$$",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "48.00%",
            "width": "15%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblPriceL4 = new kony.ui.Label({
            "height": "6%",
            "id": "lblPriceL4",
            "isVisible": false,
            "left": "50%",
            "onTouchEnd": controller.AS_Label_d80125d3840741199542c0f892588abc,
            "skin": "sknLblFontDBDBDBNunitoR157",
            "text": "$$$$",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "48%",
            "width": "18%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxOpenNow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxOpenNow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_i3302339aef14689a25c260e68e47053,
            "skin": "sknFlxBorderF2F2F2",
            "top": "55%",
            "width": "100%",
            "zIndex": 3
        }, {}, {});
        flxOpenNow.setDefaultUnit(kony.flex.DP);
        var lblOpenNow = new kony.ui.Label({
            "height": "100%",
            "id": "lblOpenNow",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLbl2c3e50NutinoR120",
            "text": "Open Now",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "30%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgOpen = new kony.ui.Image2({
            "centerY": "50%",
            "height": "70%",
            "id": "imgOpen",
            "isVisible": true,
            "right": "5%",
            "src": "toggle_off.png",
            "width": "15%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxOpenNow.add(lblOpenNow, imgOpen);
        var lblResetAll = new kony.ui.Label({
            "centerX": "50%",
            "height": "8%",
            "id": "lblResetAll",
            "isVisible": true,
            "onTouchEnd": controller.AS_Label_jb1f38ab004744619112ff5948e58cd6,
            "skin": "sknLblFF033BNunitoR107",
            "text": "Reset all filters",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "70%",
            "width": "80%",
            "zIndex": 3
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        filterscreen.add(flxFilterHeader, lblSortby, lblRating, lblPrice, flxSortOptions, imgRating1, imgRating2, imgRating3, imgRating4, imgRating5, lblAndUp, lblAndBelow, lblPriceL1, lblPriceL2, lblPriceL3, lblPriceL4, flxOpenNow, lblResetAll);
        return filterscreen;
    }
})