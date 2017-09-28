define("frmSignUp", function() {
    return function(controller) {
        function addWidgetsfrmSignUp() {
            this.setDefaultUnit(kony.flex.DP);
            var flxLogo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "125dp",
                "id": "flxLogo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "top": "5%",
                "width": "125dp",
                "zIndex": 1
            }, {}, {});
            flxLogo.setDefaultUnit(kony.flex.DP);
            var imgLogo = new kony.ui.Image2({
                "height": "125dp",
                "id": "imgLogo",
                "isVisible": true,
                "left": "0",
                "src": "logo1.png",
                "top": "0",
                "width": "125dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLogo.add(imgLogo);
            var flxContentSignup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60%",
                "id": "flxContentSignup",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "top": "40%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContentSignup.setDefaultUnit(kony.flex.DP);
            var flxFullName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "61dp",
                "id": "flxFullName",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "1dp",
                "top": "2%",
                "width": "260dp",
                "zIndex": 1
            }, {}, {});
            flxFullName.setDefaultUnit(kony.flex.DP);
            var lblFullName = new kony.ui.Label({
                "id": "lblFullName",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0e40c2c7732ad48",
                "text": "FULL NAME",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1.00%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtFullName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "40dp",
                "id": "txtFullName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "secureTextEntry": false,
                "skin": "CopyslTextBox0d0b2228faeda4c",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "1%",
                "width": "260dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxLineFullName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxLineFullName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0be1cab7a0b7146",
                "top": "0dp",
                "width": "260dp",
                "zIndex": 1
            }, {}, {});
            flxLineFullName.setDefaultUnit(kony.flex.DP);
            flxLineFullName.add();
            flxFullName.add(lblFullName, txtFullName, flxLineFullName);
            var flxEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "61dp",
                "id": "flxEmail",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "1dp",
                "top": "2%",
                "width": "260dp",
                "zIndex": 1
            }, {}, {});
            flxEmail.setDefaultUnit(kony.flex.DP);
            var lblEmail = new kony.ui.Label({
                "id": "lblEmail",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0e40c2c7732ad48",
                "text": "EMAIL",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1.00%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtEmail = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "CopyslTextBox0d8dcf195018241",
                "height": "40dp",
                "id": "txtEmail",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_EMAIL,
                "secureTextEntry": false,
                "skin": "CopyslTextBox0d0b2228faeda4c",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "1%",
                "width": "260dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxLineEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxLineEmail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0be1cab7a0b7146",
                "top": "0dp",
                "width": "260dp",
                "zIndex": 1
            }, {}, {});
            flxLineEmail.setDefaultUnit(kony.flex.DP);
            flxLineEmail.add();
            flxEmail.add(lblEmail, txtEmail, flxLineEmail);
            var flxUsername = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "61dp",
                "id": "flxUsername",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "1dp",
                "top": "2%",
                "width": "260dp",
                "zIndex": 1
            }, {}, {});
            flxUsername.setDefaultUnit(kony.flex.DP);
            var lblUsername = new kony.ui.Label({
                "id": "lblUsername",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0e40c2c7732ad48",
                "text": "USERNAME",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1.00%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtUsername = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "40dp",
                "id": "txtUsername",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "secureTextEntry": false,
                "skin": "CopyslTextBox0d0b2228faeda4c",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "1%",
                "width": "260dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxLineUsername = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxLineUsername",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0be1cab7a0b7146",
                "top": "0dp",
                "width": "260dp",
                "zIndex": 1
            }, {}, {});
            flxLineUsername.setDefaultUnit(kony.flex.DP);
            flxLineUsername.add();
            flxUsername.add(lblUsername, txtUsername, flxLineUsername);
            var flxPassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "61dp",
                "id": "flxPassword",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "1dp",
                "top": "2%",
                "width": "260dp",
                "zIndex": 1
            }, {}, {});
            flxPassword.setDefaultUnit(kony.flex.DP);
            var lblPassword = new kony.ui.Label({
                "id": "lblPassword",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0e40c2c7732ad48",
                "text": "PASSWORD",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtPassword = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "CopyslTextBox0b492d2c3126742",
                "height": "40dp",
                "id": "txtPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "secureTextEntry": true,
                "skin": "CopyslTextBox0d0b2228faeda4c",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "1%",
                "width": "260dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxLinePassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxLinePassword",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0be1cab7a0b7146",
                "top": "0dp",
                "width": "260dp",
                "zIndex": 1
            }, {}, {});
            flxLinePassword.setDefaultUnit(kony.flex.DP);
            flxLinePassword.add();
            flxPassword.add(lblPassword, txtPassword, flxLinePassword);
            var flxButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "200dp",
                "id": "flxButton",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "top": "3%",
                "width": "260dp",
                "zIndex": 1
            }, {}, {});
            flxButton.setDefaultUnit(kony.flex.DP);
            var btnSignup = new kony.ui.Button({
                "focusSkin": "CopyslButtonGlossRed0f42a4a8a68ab4c",
                "height": "50dp",
                "id": "btnSignup",
                "isVisible": true,
                "left": "2dp",
                "onClick": controller.AS_Button_d29e7d0bd47544d0abde8d5aa1883f15,
                "skin": "sknSign",
                "text": "SIGN UP",
                "top": "10%",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnBack = new kony.ui.Button({
                "focusSkin": "CopyslButtonGlossBlue0hff419da346946",
                "height": "50dp",
                "id": "btnBack",
                "isVisible": true,
                "left": "2dp",
                "onClick": controller.AS_Button_b5afc048f49a476f91dfc6fd1ffe8dbf,
                "skin": "CopyslButtonGlossBlue0ibb01e807eb946",
                "text": "BACK",
                "top": "5%",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButton.add(btnSignup, btnBack);
            flxContentSignup.add(flxFullName, flxEmail, flxUsername, flxPassword, flxButton);
            var lblSignUp = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "32%",
                "height": 40,
                "id": "lblSignUp",
                "isVisible": true,
                "left": "144dp",
                "skin": "CopyslLabel0f226ccf304a14b",
                "text": "SIGN UP",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "192dp",
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            this.add(flxLogo, flxContentSignup, lblSignUp);
        };
        return [{
            "addWidgets": addWidgetsfrmSignUp,
            "enabledForIdleTimeout": false,
            "id": "frmSignUp",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0j5377a59406a42"
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