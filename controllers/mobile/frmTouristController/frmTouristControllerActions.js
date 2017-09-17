define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_c91ff1f3b51a44c78c918de70dfab68e: function AS_FlexContainer_c91ff1f3b51a44c78c918de70dfab68e(eventobject) {
        var self = this;

        function MOVE_ACTION____d321e9c45fb0412aa2e3c976be9f2e65_Callback() {}
        function MOVE_ACTION____g8f4a7b6e78748108a57e4b1f5b59f8f_Callback() {}
        self.view.flxContentEvents.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "100%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0.15,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____g8f4a7b6e78748108a57e4b1f5b59f8f_Callback
        });
        self.view.flxContentTourist.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0.15,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____d321e9c45fb0412aa2e3c976be9f2e65_Callback
        });
        self.view.flxTourist2["isVisible"] = true;
        self.view.flxEvent2["isVisible"] = false;
    },
    AS_FlexContainer_c756e56e950147828e3a4ffbfcb92823: function AS_FlexContainer_c756e56e950147828e3a4ffbfcb92823(eventobject) {
        var self = this;

        function MOVE_ACTION____e0f88e2edaf04d9e8e11bdbd3f717bb4_Callback() {}
        function MOVE_ACTION____f3f973cfed734bfd886373163b45d094_Callback() {}
        self.view.flxContentTourist.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "-100%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0.15,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____f3f973cfed734bfd886373163b45d094_Callback
        });
        self.view.flxContentEvents.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0.15,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____e0f88e2edaf04d9e8e11bdbd3f717bb4_Callback
        });
        self.view.flxTourist2["isVisible"] = false;
        self.view.flxEvent2["isVisible"] = true;
    },
    AS_Form_eab5000d60c041bbb555d94461b9992b: function AS_Form_eab5000d60c041bbb555d94461b9992b(eventobject) {
        var self = this;
        return getCurrentLocation.call(this);
    }
});