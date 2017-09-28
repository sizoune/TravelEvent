define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_gc7a422c4be8469bb7f4f34d04cb6ff5: function AS_Button_gc7a422c4be8469bb7f4f34d04cb6ff5(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLogin");
        ntf.navigate();
    },
    AS_Button_d37bcefe73d74e108aa22fb52f46c1b7: function AS_Button_d37bcefe73d74e108aa22fb52f46c1b7(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSignUp");
        ntf.navigate();
    },
    AS_Form_a3eb455aab42470caeb25670efea35ee: function AS_Form_a3eb455aab42470caeb25670efea35ee(eventobject) {
        var self = this;

        function MOVE_ACTION____ce0247f9473345788ed84bc01063c766_Callback() {}
        function MOVE_ACTION____cd770cd82724494e8a9b92b1aabefdf6_Callback() {}
        self.view.flxContent.animate(
        kony.ui.createAnimation({
            "100": {
                "centerY": "50%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0.2,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____cd770cd82724494e8a9b92b1aabefdf6_Callback
        });
        self.view.flxLogo.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "5%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0.2,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____ce0247f9473345788ed84bc01063c766_Callback
        });
    }
});