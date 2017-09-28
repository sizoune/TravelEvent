define("frmOptionLoginSignup", function() {
    return function(controller) {
        function addWidgetsfrmOptionLoginSignup() {
            this.setDefaultUnit(kony.flex.DP);
            var flxLogo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxLogo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "top": "30%",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxLogo.setDefaultUnit(kony.flex.DP);
            var imgLogo = new kony.ui.Image2({
                "height": "100%",
                "id": "imgLogo",
                "isVisible": true,
                "left": "0",
                "src": "logo1.png",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLogo.add(imgLogo);
            var flxContent = new kony.ui.FlexContainer({
                "bottom": "0dp",
                "clipBounds": true,
                "height": "220dp",
                "id": "flxContent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContent.setDefaultUnit(kony.flex.DP);
            var btnGoLogin = new kony.ui.Button({
                "bottom": "0dp",
                "centerX": "50%",
                "focusSkin": "CopyslButtonGlossRed0a53ed61842f14f",
                "height": "50dp",
                "id": "btnGoLogin",
                "isVisible": true,
                "onClick": controller.AS_Button_gc7a422c4be8469bb7f4f34d04cb6ff5,
                "skin": "CopyslButtonGlossBlue0fe260a617d4148",
                "text": "LOGIN",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnGoSignup = new kony.ui.Button({
                "bottom": "30%",
                "centerX": "50%",
                "focusSkin": "CopyslButtonGlossRed0ic49d853c7b04d",
                "height": "50dp",
                "id": "btnGoSignup",
                "isVisible": true,
                "onClick": controller.AS_Button_d37bcefe73d74e108aa22fb52f46c1b7,
                "skin": "CopyslButtonGlossBlue0jd985acc007547",
                "text": "SIGN UP",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxContent.add(btnGoLogin, btnGoSignup);
            this.add(flxLogo, flxContent);
        };
        return [{
            "addWidgets": addWidgetsfrmOptionLoginSignup,
            "enabledForIdleTimeout": false,
            "id": "frmOptionLoginSignup",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_a3eb455aab42470caeb25670efea35ee,
            "skin": "CopyslForm0j0c67378c72d48"
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