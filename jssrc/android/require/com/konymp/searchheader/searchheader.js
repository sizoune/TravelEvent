define(function() {
    return function(controller) {
        var searchheader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "searchheader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "width": "100%"
        }, {}, {});
        searchheader.setDefaultUnit(kony.flex.DP);
        var flxHeaderHolder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxHeaderHolder",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeaderHolder.setDefaultUnit(kony.flex.DP);
        var flxHeaderSearch = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "flxHeaderSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0.00%",
            "skin": "sknFlex34495e",
            "top": "0.00%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeaderSearch.setDefaultUnit(kony.flex.DP);
        var lblSearch = new kony.ui.Label({
            "centerY": "50.11%",
            "height": "100%",
            "id": "lblSearch",
            "isVisible": false,
            "right": "5.00%",
            "skin": "sknLblffffffNunitoR91",
            "text": "Search",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblCancel = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblCancel",
            "isVisible": false,
            "left": "5%",
            "onTouchEnd": controller.Action15065818649835184,
            "skin": "sknLblffffffNunitoR91",
            "text": "Cancel",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxHeaderSearch.add(lblSearch, lblCancel);
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80%",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0.00%",
            "skin": "sknFlex34495e",
            "top": "0.00%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeader.setDefaultUnit(kony.flex.DP);
        var txtLocation = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "centerY": "40%",
            "focusSkin": "sknTbxNormal",
            "height": "65%",
            "id": "txtLocation",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "onDone": controller.Action15065818650776287,
            "onTextChange": controller.AS_TextField_d40a8ca548054c5fb4e95502852500b2,
            "onTouchStart": controller.AS_TextField_d58841e690554303982bed4108691e3b,
            "secureTextEntry": false,
            "skin": "sknTbxNormal",
            "text": "Current Location",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "width": "90%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [8, 0, 8, 0],
            "paddingInPixel": false
        }, {
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
            "placeholderSkin": "sknTbxPlaceHolderf2f2f2",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        });
        var txtPlaceOrCategory = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "51%",
            "centerY": "28%",
            "focusSkin": "sknTbxNormal",
            "height": "32%",
            "id": "txtPlaceOrCategory",
            "isVisible": false,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "onTextChange": controller.AS_TextField_fcabf0661af645f48ca7e4a198dfde07,
            "onTouchStart": controller.AS_TextField_jeaa0c3e9b614c8faa88a4c1cb50efea,
            "placeholder": "Search Place or Category",
            "secureTextEntry": false,
            "skin": "sknTbxNormal",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "width": "90%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [8, 0, 8, 0],
            "paddingInPixel": false
        }, {
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
            "placeholderSkin": "sknTbxPlaceHolderf2f2f2",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        });
        var imgSearch = new kony.ui.Image2({
            "centerX": "10%",
            "centerY": "28%",
            "height": "20%",
            "id": "imgSearch",
            "isVisible": false,
            "left": "22dp",
            "src": "search_icon.png",
            "top": "2dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgLocation = new kony.ui.Image2({
            "centerX": "10%",
            "centerY": "40%",
            "height": "55%",
            "id": "imgLocation",
            "isVisible": true,
            "left": "22dp",
            "src": "location_icon.png",
            "top": "2dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnClearSearch = new kony.ui.Button({
            "centerX": "90%",
            "centerY": "28%",
            "focusSkin": "sknBtnClear",
            "height": "20%",
            "id": "btnClearSearch",
            "isVisible": false,
            "onClick": controller.AS_Button_d58482fd66da4851bc8fea1b8e011398,
            "skin": "sknBtnClear",
            "width": "5%",
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnClearLocation = new kony.ui.Button({
            "centerX": "90%",
            "centerY": "40%",
            "focusSkin": "sknBtnClear",
            "height": "35%",
            "id": "btnClearLocation",
            "isVisible": false,
            "onClick": controller.AS_Button_ib9ed33b8bd14867971e7bb8a4d41f54,
            "skin": "sknBtnClear",
            "width": "5%",
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxHeader.add(txtLocation, txtPlaceOrCategory, imgSearch, imgLocation, btnClearSearch, btnClearLocation);
        flxHeaderHolder.add(flxHeaderSearch, flxHeader);
        searchheader.add(flxHeaderHolder);
        return searchheader;
    }
})