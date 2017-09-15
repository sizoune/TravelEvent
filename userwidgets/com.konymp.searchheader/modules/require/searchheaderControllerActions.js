define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_TextField_d40a8ca548054c5fb4e95502852500b2: function AS_TextField_d40a8ca548054c5fb4e95502852500b2(eventobject, changedtext) {
        var self = this;
        this.searchLocation();
    },
    AS_TextField_d58841e690554303982bed4108691e3b: function AS_TextField_d58841e690554303982bed4108691e3b(eventobject, x, y) {
        var self = this;
        this.changeLocationStart();
    },
    AS_TextField_fcabf0661af645f48ca7e4a198dfde07: function AS_TextField_fcabf0661af645f48ca7e4a198dfde07(eventobject, changedtext) {
        var self = this;
        this.searchPlaceOrCategory();
    },
    AS_TextField_jeaa0c3e9b614c8faa88a4c1cb50efea: function AS_TextField_jeaa0c3e9b614c8faa88a4c1cb50efea(eventobject, x, y) {
        var self = this;
        this.changeCategoryStart();
    },
    AS_Button_d58482fd66da4851bc8fea1b8e011398: function AS_Button_d58482fd66da4851bc8fea1b8e011398(eventobject) {
        var self = this;
        this.clearText("txtPlaceOrCategory");
    },
    AS_Button_ib9ed33b8bd14867971e7bb8a4d41f54: function AS_Button_ib9ed33b8bd14867971e7bb8a4d41f54(eventobject) {
        var self = this;
        this.clearText("txtLocation");
    }
});