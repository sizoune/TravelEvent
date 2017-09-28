define("frmTourist", function() {
    return function(controller) {
        function addWidgetsfrmTourist() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "bottom": "0%",
                "clipBounds": true,
                "height": "10%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "CopyslFbox0j92197c5228447",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxBackEvents = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "focusSkin": "CopyslFbox0fd3925f88c0244",
                "height": "100%",
                "id": "flxBackEvents",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_j68d26a911ff48faa4ca66e4e4590698,
                "skin": "CopyslFbox0c891f5b0e4ba49",
                "width": "28%",
                "zIndex": 1
            }, {}, {});
            flxBackEvents.setDefaultUnit(kony.flex.DP);
            flxBackEvents.add();
            var flxBackTourist = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "20%",
                "centerY": "50%",
                "clipBounds": true,
                "focusSkin": "CopyslFbox0fd3925f88c0244",
                "height": "100%",
                "id": "flxBackTourist",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_c358d3426f45494f9288830bf4b6a75e,
                "skin": "CopyslFbox0c891f5b0e4ba49",
                "width": "33%",
                "zIndex": 1
            }, {}, {});
            flxBackTourist.setDefaultUnit(kony.flex.DP);
            flxBackTourist.add();
            var flxBackUser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "80%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxBackUser",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "CopyslFbox0gba606f73ae847",
                "width": "33%",
                "zIndex": 1
            }, {}, {});
            flxBackUser.setDefaultUnit(kony.flex.DP);
            flxBackUser.add();
            var flxTourist = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "20%",
                "centerY": "50%",
                "clipBounds": true,
                "focusSkin": "CopyslFbox0ffede4a573ca45",
                "height": "100%",
                "id": "flxTourist",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_c91ff1f3b51a44c78c918de70dfab68e,
                "skin": "fboxSinga",
                "width": "33%",
                "zIndex": 1
            }, {}, {});
            flxTourist.setDefaultUnit(kony.flex.DP);
            var lblTourist = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "85%",
                "id": "lblTourist",
                "isVisible": true,
                "skin": "CopyslLabel0f52b108b48014b",
                "text": "Tourist Attraction",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgTourist = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "40%",
                "height": "60%",
                "id": "imgTourist",
                "isVisible": true,
                "left": 0,
                "skin": "slImage",
                "src": "location_map_flat.png",
                "top": 0,
                "width": "60%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTourist.add(lblTourist, imgTourist);
            var flxEvents = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "focusSkin": "CopyslFbox0fd3925f88c0244",
                "height": "100%",
                "id": "flxEvents",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_c756e56e950147828e3a4ffbfcb92823,
                "skin": "slFbox",
                "width": "28%",
                "zIndex": 1
            }, {}, {});
            flxEvents.setDefaultUnit(kony.flex.DP);
            var lblEvents = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "85%",
                "id": "lblEvents",
                "isVisible": true,
                "skin": "CopyslLabel0f52b108b48014b",
                "text": "Events",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgEvents = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "40%",
                "height": "60%",
                "id": "imgEvents",
                "isVisible": true,
                "left": 0,
                "skin": "slImage",
                "src": "event1.png",
                "top": 0,
                "width": "60%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEvents.add(lblEvents, imgEvents);
            var flxUser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "80%",
                "centerY": "50%",
                "clipBounds": true,
                "focusSkin": "CopyslFbox0fcb71bad52a04b",
                "height": "100%",
                "id": "flxUser",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_b352b8cfd2d5439e9a51ddc5eb8b08d4,
                "skin": "slFbox",
                "width": "33%",
                "zIndex": 1
            }, {}, {});
            flxUser.setDefaultUnit(kony.flex.DP);
            var lblUser = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "85%",
                "id": "lblUser",
                "isVisible": true,
                "skin": "CopyslLabel0f52b108b48014b",
                "text": "Account",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgUser = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "40%",
                "height": "60%",
                "id": "imgUser",
                "isVisible": true,
                "left": 0,
                "skin": "slImage",
                "src": "user1.png",
                "top": 0,
                "width": "60%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUser.add(lblUser, imgUser);
            flxHeader.add(flxBackEvents, flxBackTourist, flxBackUser, flxTourist, flxEvents, flxUser);
            var flxContentTourist = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "83%",
                "id": "flxContentTourist",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "CopyslFbox0eb19240a219843",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContentTourist.setDefaultUnit(kony.flex.DP);
            var flxRekomendasi = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.04%",
                "clipBounds": true,
                "height": "47dp",
                "id": "flxRekomendasi",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "23dp",
                "skin": "CopyslFbox0f56c1b60d6ee4c",
                "top": "10dp",
                "width": "87.55%",
                "zIndex": 1
            }, {}, {});
            flxRekomendasi.setDefaultUnit(kony.flex.DP);
            var lblRekomendasi = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "45%",
                "id": "lblRekomendasi",
                "isVisible": true,
                "skin": "CopyslLabel0ae815e5af95944",
                "text": "REKOMENDASI TEMPAT WISATA",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRekomendasi.add(lblRekomendasi);
            var flxScrollTourist = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "85%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollTourist",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "15dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrollTourist.setDefaultUnit(kony.flex.DP);
            var sgmRekomendasi = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "data": [{
                    "imgRekomendasi": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyA9ZiU5azNIAPKnHDPWtz3LPXDn0ACWi9E",
                    "lblDistance": "Label",
                    "lblNama": "Label",
                    "lblPrice": "Label",
                    "lblRating": "Label"
                }, {
                    "imgRekomendasi": "imagedrag.png",
                    "lblDistance": "Label",
                    "lblNama": "Label",
                    "lblPrice": "Label",
                    "lblRating": "Label"
                }, {
                    "imgRekomendasi": "imagedrag.png",
                    "lblDistance": "Label",
                    "lblNama": "Label",
                    "lblPrice": "Label",
                    "lblRating": "Label"
                }],
                "groupCells": false,
                "id": "sgmRekomendasi",
                "isVisible": true,
                "left": "25dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_h9a106c880784e7c835e46cd0e27681b,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "FBox0fb423bc6f8354f",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "64646400",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "8dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "imgRekomendasi": "imgRekomendasi",
                    "lblDistance": "lblDistance",
                    "lblNama": "lblNama",
                    "lblPrice": "lblPrice",
                    "lblRating": "lblRating"
                },
                "width": "95%",
                "zIndex": 1,
                "enableReordering": false
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxScrollTourist.add(sgmRekomendasi);
            flxContentTourist.add(flxRekomendasi, flxScrollTourist);
            var flxContentEvents = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "83%",
                "id": "flxContentEvents",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "100%",
                "skin": "CopyslFbox0eb19240a219843",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContentEvents.setDefaultUnit(kony.flex.DP);
            var flxRekomendasiAcara = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.04%",
                "clipBounds": true,
                "height": "47dp",
                "id": "flxRekomendasiAcara",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "23dp",
                "skin": "CopyslFbox0f56c1b60d6ee4c",
                "top": "10dp",
                "width": "87.55%",
                "zIndex": 1
            }, {}, {});
            flxRekomendasiAcara.setDefaultUnit(kony.flex.DP);
            var lblRekomendasiAcara = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "45%",
                "id": "lblRekomendasiAcara",
                "isVisible": true,
                "skin": "CopyslLabel0ae815e5af95944",
                "text": "REKOMENDASI ACARA",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRekomendasiAcara.add(lblRekomendasiAcara);
            var flxScrollEvents = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "85%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollEvents",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "15dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrollEvents.setDefaultUnit(kony.flex.DP);
            var segRekomendasiAcara = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "data": [{
                    "imgEvents": "imagedrag.png",
                    "lbDistance": "Label",
                    "lbPrice": "Label",
                    "lblNama": "Label",
                    "lblPrice": "Label"
                }, {
                    "imgEvents": "imagedrag.png",
                    "lbDistance": "Label",
                    "lbPrice": "Label",
                    "lblNama": "Label",
                    "lblPrice": "Label"
                }, {
                    "imgEvents": "imagedrag.png",
                    "lbDistance": "Label",
                    "lbPrice": "Label",
                    "lblNama": "Label",
                    "lblPrice": "Label"
                }],
                "groupCells": false,
                "id": "segRekomendasiAcara",
                "isVisible": true,
                "left": "25dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "CopyFBox0c8a19abc487a41",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "64646400",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "8dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "imgEvents": "imgEvents",
                    "lbDistance": "lbDistance",
                    "lbPrice": "lbPrice",
                    "lblNama": "lblNama",
                    "lblPrice": "lblPrice"
                },
                "width": "95%",
                "zIndex": 1,
                "enableReordering": false
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxScrollEvents.add(segRekomendasiAcara);
            flxContentEvents.add(flxRekomendasiAcara, flxScrollEvents);
            var flxLocation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "flxLocation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0if17e38f9a3441",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLocation.setDefaultUnit(kony.flex.DP);
            var imgLocation = new kony.ui.Image2({
                "centerX": "14%",
                "centerY": "50%",
                "height": "30dp",
                "id": "imgLocation",
                "isVisible": true,
                "left": "65dp",
                "skin": "slImage",
                "src": "location1.png",
                "top": "5dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLokasiSekarang = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "85.04%",
                "id": "flxLokasiSekarang",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "94dp",
                "skin": "slFbox",
                "top": "3dp",
                "width": "60%",
                "zIndex": 1
            }, {}, {});
            flxLokasiSekarang.setDefaultUnit(kony.flex.DP);
            var lblLokasiSekarang = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblLokasiSekarang",
                "isVisible": true,
                "maxNumberOfLines": 3,
                "skin": "singa",
                "text": "Lokasi Sekarang nih bro",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLokasiSekarang.add(lblLokasiSekarang);
            flxLocation.add(imgLocation, flxLokasiSekarang);
            this.add(flxHeader, flxContentTourist, flxContentEvents, flxLocation);
        };
        return [{
            "addWidgets": addWidgetsfrmTourist,
            "enabledForIdleTimeout": false,
            "id": "frmTourist",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_eab5000d60c041bbb555d94461b9992b,
            "skin": "CopyslForm0b1407d19e1914e"
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