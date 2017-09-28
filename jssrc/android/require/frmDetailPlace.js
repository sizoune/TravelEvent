define("frmDetailPlace", function() {
    return function(controller) {
        function addWidgetsfrmDetailPlace() {
            this.setDefaultUnit(kony.flex.DP);
            var flxImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30%",
                "id": "flxImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxImage.setDefaultUnit(kony.flex.DP);
            var imageSlider = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgSlider": "kawah1.jpg"
                }, {
                    "imgSlider": "kawah3.jpg"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "imageSlider",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": false,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowTemplate": "flxImage",
                "scrollingEvents": {},
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
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
            flxImage.add(imageSlider);
            var flxUtama = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "72%",
                "horizontalScrollIndicator": true,
                "id": "flxUtama",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0fba125ee41c140",
                "top": "28%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxUtama.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "right": "3dp",
                "skin": "CopyslFbox0d371949aa35842",
                "top": "15dp",
                "zIndex": 5
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var lblNama = new kony.ui.Label({
                "id": "lblNama",
                "isVisible": true,
                "left": "6dp",
                "skin": "CopyslLabel0g11359f7a6824e",
                "text": "Nama",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "95.83%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblRating = new kony.ui.Label({
                "id": "lblRating",
                "isVisible": true,
                "left": "4dp",
                "skin": "CopyslLabel0e765468ee3cc4e",
                "text": "Rating",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "50dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblLokasi = new kony.ui.Label({
                "id": "lblLokasi",
                "isVisible": true,
                "left": "4dp",
                "skin": "CopyslLabel0eec6734186f141",
                "text": "Location",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "95dp",
                "width": "95.83%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDesc = new kony.ui.Label({
                "id": "lblDesc",
                "isVisible": false,
                "left": "5dp",
                "skin": "CopyslLabel0j5d0ac9ec9354c",
                "text": "Deskripsi",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "100dp",
                "width": "95.83%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxMain.add(lblNama, lblRating, lblLokasi, lblDesc);
            var btnBack = new kony.ui.Button({
                "bottom": "10dp",
                "focusSkin": "CopyslButtonGlossRed0je20070669c047",
                "height": "50dp",
                "id": "btnBack",
                "isVisible": true,
                "left": "10dp",
                "onClick": controller.AS_Button_j05aa1b1b99d48e69408304fd48dd4e1,
                "skin": "CopyslButtonGlossBlue0h8b3e4d717a247",
                "text": "Kembali",
                "width": "175dp",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUtama.add(flxMain, btnBack);
            var flxFAB = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxFAB",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_bd78e7a732c04504a92f06ef91159dd7,
                "right": "10dp",
                "skin": "CopyslFbox0c5bce540ae134f",
                "width": "50dp",
                "zIndex": 15
            }, {}, {});
            flxFAB.setDefaultUnit(kony.flex.DP);
            var imgArah = new kony.ui.Image2({
                "height": "100%",
                "id": "imgArah",
                "isVisible": true,
                "left": "-1dp",
                "src": "compass__1_.png",
                "top": "-1dp",
                "width": "100%",
                "zIndex": 15
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFAB.add(imgArah);
            this.add(flxImage, flxUtama, flxFAB);
        };
        return [{
            "addWidgets": addWidgetsfrmDetailPlace,
            "enabledForIdleTimeout": false,
            "id": "frmDetailPlace",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_df4bb137ea66492ba993bd144f083b83,
            "preShow": controller.AS_Form_c9c97f360b994ae289007e860e67c766,
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