define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_df4bb137ea66492ba993bd144f083b83: function AS_Form_df4bb137ea66492ba993bd144f083b83(eventobject) {
        var self = this;

        function MOVE_ACTION____c8969f5fdee5425a93e78c53b0885c42_Callback() {}
        self.view.flxUtama.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "28%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0.5,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____c8969f5fdee5425a93e78c53b0885c42_Callback
        });
    },
    AS_Form_c9c97f360b994ae289007e860e67c766: function AS_Form_c9c97f360b994ae289007e860e67c766(eventobject) {
        var self = this;
        tampilkanDetail();
    }
});