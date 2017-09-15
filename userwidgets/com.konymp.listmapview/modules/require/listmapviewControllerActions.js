define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Map_i1f07d1447eb4687a71060f5b47f5e9b: function AS_Map_i1f07d1447eb4687a71060f5b47f5e9b(eventobject, location) {
        var self = this;
        this.pinClicked(location);
    },
    AS_FlexContainer_b60d80d1b80546d68ea637a07334451f: function AS_FlexContainer_b60d80d1b80546d68ea637a07334451f(eventobject) {
        var self = this;
        this.searchThisArea();
    },
    AS_Segment_bc81a1cfe966423fb42670f49b2f9c86: function AS_Segment_bc81a1cfe966423fb42670f49b2f9c86(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.placeSelected(rowNumber);
    },
    AS_Segment_d5bcd655b00446a7b923828867e6e215: function AS_Segment_d5bcd655b00446a7b923828867e6e215(seguiWidget, sectionIndex, rowIndex) {
        var self = this;
        this.changeselectedMapPin(rowIndex);
    },
    AS_Segment_c4e1a92347534674b4b9d9d1dbe75d1c: function AS_Segment_c4e1a92347534674b4b9d9d1dbe75d1c(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.placeSelected(rowNumber);
    },
    AS_Button_b38c55ac3004488aad060150853ff6e9: function AS_Button_b38c55ac3004488aad060150853ff6e9(eventobject) {
        var self = this;
        this.openAppleMaps();
    },
    AS_Button_ac198de7413b424789592b69f97aa64d: function AS_Button_ac198de7413b424789592b69f97aa64d(eventobject) {
        var self = this;
        this.openGoogleMaps();
    },
    AS_Button_bafdfd0903324bd58e744a7f9197e8f7: function AS_Button_bafdfd0903324bd58e744a7f9197e8f7(eventobject) {
        var self = this;
        this.cancelDirections();
    }
});