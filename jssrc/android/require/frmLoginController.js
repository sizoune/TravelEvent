define({
    "AS_Button_af9775b516d6415eb7ab87a1acac2cc6": function AS_Button_af9775b516d6415eb7ab87a1acac2cc6(eventobject) {
        var self = this;
        return login.call(this);
    },
    "AS_Button_iac40618c4fa4f7c92c920a5a90ce550": function AS_Button_iac40618c4fa4f7c92c920a5a90ce550(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSignUp");
        ntf.navigate();
    }
})