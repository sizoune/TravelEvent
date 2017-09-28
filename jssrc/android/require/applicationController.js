define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.konymp.autosuggest", "autosuggest", "autosuggestController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "autosuggest",
            "name": "com.konymp.autosuggest"
        });
        kony.mvc.registry.add("com.konymp.filterscreen", "filterscreen", "filterscreenController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "filterscreen",
            "name": "com.konymp.filterscreen"
        });
        kony.mvc.registry.add("com.konymp.listmapview", "listmapview", "listmapviewController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "listmapview",
            "name": "com.konymp.listmapview"
        });
        kony.mvc.registry.add("com.konymp.menucomponent", "menucomponent", "menucomponentController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "menucomponent",
            "name": "com.konymp.menucomponent"
        });
        kony.mvc.registry.add("com.konymp.searchheader", "searchheader", "searchheaderController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "searchheader",
            "name": "com.konymp.searchheader"
        });
        kony.mvc.registry.add("com.konymp.placelocator", "placelocator", "placelocatorController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "placelocator",
            "name": "com.konymp.placelocator"
        });
        kony.mvc.registry.add("CopyFBox0c8a19abc487a41", "CopyFBox0c8a19abc487a41", "CopyFBox0c8a19abc487a41Controller");
        kony.mvc.registry.add("FBox0fb423bc6f8354f", "FBox0fb423bc6f8354f", "FBox0fb423bc6f8354fController");
        kony.mvc.registry.add("flxAutoSuggest", "flxAutoSuggest", "flxAutoSuggestController");
        kony.mvc.registry.add("flxImage", "flxImage", "flxImageController");
        kony.mvc.registry.add("flexHolder", "flexHolder", "flexHolderController");
        kony.mvc.registry.add("flxHolder", "flxHolder", "flxHolderController");
        kony.mvc.registry.add("flxHeader", "flxHeader", "flxHeaderController");
        kony.mvc.registry.add("flxInvisible", "flxInvisible", "flxInvisibleController");
        kony.mvc.registry.add("frmDetailGambar", "frmDetailGambar", "frmDetailGambarController");
        kony.mvc.registry.add("frmDetailPlace", "frmDetailPlace", "frmDetailPlaceController");
        kony.mvc.registry.add("frmDirection", "frmDirection", "frmDirectionController");
        kony.mvc.registry.add(" ", "frmLogin", "frmLoginController");
        kony.mvc.registry.add("frmOptionLoginSignup", "frmOptionLoginSignup", "frmOptionLoginSignupController");
        kony.mvc.registry.add("frmSignUp", "frmSignUp", "frmSignUpController");
        kony.mvc.registry.add("frmTourist", "frmTourist", "frmTouristController");
        setAppBehaviors();
        if (typeof startBackgroundWorker != "undefined") {
            startBackgroundWorker();
        }
    },
    postAppInitCallBack: function() {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmTourist").navigate();
    }
});