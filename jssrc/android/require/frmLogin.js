define("frmLogin", function() {
    return function(controller) {
        function addWidgetsfrmLogin() {
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
            var flxContentLogin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70%",
                "id": "flxContentLogin",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "top": "30%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContentLogin.setDefaultUnit(kony.flex.DP);
            var flxUsername = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "61dp",
                "id": "flxUsername",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "1dp",
                "top": "2%",
                "width": "260dp",
                "zIndex": 1
            }, {}, {});
            flxUsername.setDefaultUnit(kony.flex.DP);
            var lblEmailLogin = new kony.ui.Label({
                "id": "lblEmailLogin",
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
            var txtEmailLogin = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "CopyslTextBox0aacf4e463d384b",
                "height": "40dp",
                "id": "txtEmailLogin",
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
            flxUsername.add(lblEmailLogin, txtEmailLogin, flxLineUsername);
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
            var lblPasswordLogin = new kony.ui.Label({
                "id": "lblPasswordLogin",
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
            var txtPasswordLogin = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "CopyslTextBox0e4a299a0c6134a",
                "height": "40dp",
                "id": "txtPasswordLogin",
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
            flxPassword.add(lblPasswordLogin, txtPasswordLogin, flxLinePassword);
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
            var btnForgotPassoword = new kony.ui.Button({
                "focusSkin": "CopyslButtonGlossRed0ce0d528213ca40",
                "id": "btnForgotPassoword",
                "isVisible": false,
                "right": "0dp",
                "skin": "CopyslButtonGlossBlue0cc277333fd2542",
                "text": "Forgot Password?",
                "top": "1%",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnLogin = new kony.ui.Button({
                "focusSkin": "CopyslButtonGlossRed0f42a4a8a68ab4c",
                "height": "50dp",
                "id": "btnLogin",
                "isVisible": true,
                "left": "2dp",
                "onClick": controller.AS_Button_c1bbd4de7389432c9ba3f557cb9278f3,
                "skin": "CopyslButtonGlossBlue0c280d85c51524d",
                "text": "LOGIN",
                "top": "10%",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButton.add(btnForgotPassoword, btnLogin);
            flxContentLogin.add(flxUsername, flxPassword, flxButton);
            this.add(flxLogo, flxContentLogin);
        };
        return [{
            "addWidgets": addWidgetsfrmLogin,
            "enabledForIdleTimeout": false,
            "id": "frmLogin",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0b1880415dff442"
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