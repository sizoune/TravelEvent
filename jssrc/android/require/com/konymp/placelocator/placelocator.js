define(function() {
    return function(controller) {
        var placelocator = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "placelocator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "preShow": controller.AS_FlexContainer_ea165c6e1b5a42bda7c339f10f02958e,
            "skin": "sknFlexffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        placelocator.setDefaultUnit(kony.flex.DP);
        var flxScreen1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxScreen1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxScreen1.setDefaultUnit(kony.flex.DP);
        var searchHeader = new com.konymp.searchheader({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "searchHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        searchHeader.cancelLabelText = "Cancel";
        searchHeader.locationPlaceHolder = "Current Location";
        searchHeader.headerSkin = "sknFlex34495e";
        searchHeader.textBoxSkin = "sknTbxNormal";
        searchHeader.cancelSearchButtonSkin = "sknLblffffffNunitoR91";
        searchHeader.clearBtnSkin = "sknBtnClear";
        searchHeader.textBoxOnFocusSkin = "sknTbxNormal";
        searchHeader.textBoxPlaceHolderSkin = "sknTbxPlaceHolderf2f2f2";
        searchHeader.clearBtnOnFocus = "sknBtnClear";
        var menuComponent = new com.konymp.menucomponent({
            "clipBounds": true,
            "height": "45%",
            "id": "menuComponent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "top": "10%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        menuComponent.titleText = "WHAT ARE YOU LOOKING FOR?";
        menuComponent.menuContainerSkin = "sknFlexffffff";
        var autoSuggest = new com.konymp.autosuggest({
            "clipBounds": true,
            "height": "40%",
            "id": "autoSuggest",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "top": "10%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        autoSuggest.currentLocationSkin = "sknFlexffffff";
        var flxSearchedContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxSearchedContent",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_a5ef4136774245c998c0f733e6994b18,
            "top": "0%",
            "width": "95%",
            "zIndex": 1
        }, {}, {});
        flxSearchedContent.setDefaultUnit(kony.flex.DP);
        var lblCategory = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblCategory",
            "isVisible": true,
            "left": "12%",
            "skin": "sknLbl2c3e50NutinoR107",
            "text": "label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [2, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblLocation = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblLocation",
            "isVisible": true,
            "left": "2%",
            "maxNumberOfLines": 2,
            "skin": "sknLbl7f8c8dNatoR91",
            "text": "label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 8, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxSearchedContent.add(lblCategory, lblLocation);
        var flxCloseRoutes = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxCloseRoutes",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_d9739c2b70c4432fb79d4564f98fb634,
            "skin": "sknFlex34495e",
            "top": "0%",
            "width": "100%",
            "zIndex": 3
        }, {}, {});
        flxCloseRoutes.setDefaultUnit(kony.flex.DP);
        var btnCloseRoutes = new kony.ui.Button({
            "centerY": "50%",
            "focusSkin": "btnCloseRoutes",
            "height": "30%",
            "id": "btnCloseRoutes",
            "isVisible": true,
            "left": "5%",
            "onClick": controller.AS_Button_h47883485f284b7398c0bd4f4b8a581e,
            "skin": "btnCloseRoutes",
            "width": "5%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSearchPlace = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblSearchPlace",
            "isVisible": true,
            "left": "64dp",
            "skin": "sknLblffffffNunitoR120",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCloseRoutes.add(btnCloseRoutes, lblSearchPlace);
        var segRecentSearch = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [
                [{
                        "lblRecentSearchHeader": "Recent Search"
                    },
                    [{
                        "lblName": ""
                    }]
                ],
                [{
                        "lblRecentSearchHeader": "Recent Search"
                    },
                    [{
                        "lblName": ""
                    }]
                ]
            ],
            "groupCells": false,
            "height": "45%",
            "id": "segRecentSearch",
            "isVisible": true,
            "left": "0%",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_ebd61fae8dd649ecac382e2286a41efb,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowTemplate": "flxAutoSuggest",
            "scrollingEvents": {},
            "sectionHeaderTemplate": "flxHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "64646400",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "55%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxAutoSuggest": "flxAutoSuggest",
                "flxHeader": "flxHeader",
                "lblLine": "lblLine",
                "lblName": "lblName",
                "lblRecentSearchHeader": "lblRecentSearchHeader"
            },
            "width": "100%",
            "zIndex": 3
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "dockSectionHeaders": true
        });
        flxScreen1.add(searchHeader, menuComponent, autoSuggest, flxSearchedContent, flxCloseRoutes, segRecentSearch);
        var flxScreen2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "93.80%",
            "id": "flxScreen2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "top": "10%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxScreen2.setDefaultUnit(kony.flex.DP);
        var listMapView = new com.konymp.listmapview({
            "clipBounds": true,
            "height": "100%",
            "id": "listMapView",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        listMapView.locationData = "null";
        listMapView.selectedPinLocation = "null";
        listMapView.mapData = "null";
        var flxShiftViews = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "5%",
            "centerX": "50%",
            "clipBounds": true,
            "height": "7%",
            "id": "flxShiftViews",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "sknFlex34495eRoundCorner",
            "width": "55%",
            "zIndex": 1
        }, {}, {});
        flxShiftViews.setDefaultUnit(kony.flex.DP);
        var imgListMapView = new kony.ui.Image2({
            "centerY": "50%",
            "height": "80%",
            "id": "imgListMapView",
            "isVisible": true,
            "left": "8%",
            "onTouchEnd": controller.AS_Image_gffdade6b75245f6b8a1b5fe2e65a227,
            "src": "list_icon.png",
            "width": "10%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgFilter = new kony.ui.Image2({
            "centerY": "50%",
            "height": "80%",
            "id": "imgFilter",
            "isVisible": true,
            "onTouchEnd": controller.AS_Image_a4aece6ddc134609a627e4248c8d58bd,
            "right": "8%",
            "src": "filter_icon.png",
            "width": "10%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblListMapView = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblListMapView",
            "isVisible": true,
            "left": "20%",
            "onTouchEnd": controller.AS_Label_a7da1ba1d8d74df8a9c3441a91898509,
            "skin": "sknLblffffffNunitoR120",
            "text": "List",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "25%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblFilter = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblFilter",
            "isVisible": true,
            "onTouchEnd": controller.AS_Label_d429eb6e26254302a6bff4ddbc5933b1,
            "right": "20%",
            "skin": "sknLblffffffNunitoR120",
            "text": "Filter",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 4, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblSeperator = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblSeperator",
            "isVisible": true,
            "skin": "sknLblBG363e42Opacity50",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "1dp",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxShiftViews.add(imgListMapView, imgFilter, lblListMapView, lblFilter, lblSeperator);
        var lblNoResults = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblNoResults",
            "isVisible": false,
            "skin": "sknLbl2c3e50NunitoB107",
            "text": "No Results Available",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxScreen2.add(listMapView, flxShiftViews, lblNoResults);
        var flxImages = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "0%",
            "id": "flxImages",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "top": "0dp",
            "width": "0%",
            "zIndex": 1
        }, {}, {});
        flxImages.setDefaultUnit(kony.flex.DP);
        var imgbankunSelected = new kony.ui.Image2({
            "height": "21dp",
            "id": "imgbankunSelected",
            "isVisible": true,
            "left": "9dp",
            "src": "banks.png",
            "top": "10dp",
            "width": "21dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgBankSelected = new kony.ui.Image2({
            "height": "22dp",
            "id": "imgBankSelected",
            "isVisible": true,
            "left": "39dp",
            "src": "banks_selected.png",
            "top": "10dp",
            "width": "26dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgBarUnselected = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgBarUnselected",
            "isVisible": true,
            "left": "0dp",
            "src": "bars.png",
            "top": "55dp",
            "width": "24dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgBarSelected = new kony.ui.Image2({
            "height": "18dp",
            "id": "imgBarSelected",
            "isVisible": true,
            "left": "33dp",
            "src": "bars_selected.png",
            "top": "55dp",
            "width": "24dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgCafeUnselected = new kony.ui.Image2({
            "height": "35dp",
            "id": "imgCafeUnselected",
            "isVisible": true,
            "left": "145dp",
            "src": "coffee_shops.png",
            "top": "0dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgCafePin = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgCafePin",
            "isVisible": true,
            "left": "200dp",
            "src": "coffee_shops_pin.png",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgCafeSelected = new kony.ui.Image2({
            "height": "16dp",
            "id": "imgCafeSelected",
            "isVisible": true,
            "left": "180dp",
            "src": "coffee_shops_selected.png",
            "top": "10dp",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgCurrentLocation = new kony.ui.Image2({
            "height": "30dp",
            "id": "imgCurrentLocation",
            "isVisible": true,
            "left": "72dp",
            "src": "current_location_mark.png",
            "top": "255dp",
            "width": "32dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgDirections = new kony.ui.Image2({
            "height": "26dp",
            "id": "imgDirections",
            "isVisible": true,
            "left": "200dp",
            "src": "directions_icon.png",
            "top": "125dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgOpen = new kony.ui.Image2({
            "height": "26dp",
            "id": "imgOpen",
            "isVisible": true,
            "left": "46dp",
            "src": "toggle_on.png",
            "top": "170dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgToggleOff = new kony.ui.Image2({
            "height": "26dp",
            "id": "imgToggleOff",
            "isVisible": true,
            "left": "88dp",
            "src": "toggle_off.png",
            "top": "167dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgMap = new kony.ui.Image2({
            "height": "26dp",
            "id": "imgMap",
            "isVisible": true,
            "left": "118dp",
            "src": "map_icon.png",
            "top": "167dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgCall = new kony.ui.Image2({
            "height": "26dp",
            "id": "imgCall",
            "isVisible": true,
            "left": "9dp",
            "src": "phone_icon.png",
            "top": "170dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgEntertainmentUnselected = new kony.ui.Image2({
            "height": "27dp",
            "id": "imgEntertainmentUnselected",
            "isVisible": true,
            "left": "137dp",
            "src": "entertainment.png",
            "top": "45dp",
            "width": "21dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgEntertainmentPin = new kony.ui.Image2({
            "height": "22dp",
            "id": "imgEntertainmentPin",
            "isVisible": true,
            "left": "195dp",
            "src": "entertainment_pin.png",
            "top": "45dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgEntertainmentPinActive = new kony.ui.Image2({
            "height": "22dp",
            "id": "imgEntertainmentPinActive",
            "isVisible": true,
            "left": "220dp",
            "src": "entertainment_pin_active.png",
            "top": "54dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgEntertainmentSelected = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgEntertainmentSelected",
            "isVisible": true,
            "left": "166dp",
            "src": "entertainment_selected.png",
            "top": "45dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgMuseumUnselected = new kony.ui.Image2({
            "height": "22dp",
            "id": "imgMuseumUnselected",
            "isVisible": true,
            "left": "0dp",
            "src": "museums.png",
            "top": "90dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgMuseumPin = new kony.ui.Image2({
            "height": "21dp",
            "id": "imgMuseumPin",
            "isVisible": true,
            "left": "57dp",
            "src": "museums_pin.png",
            "top": "90dp",
            "width": "23dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgMuseumPinActive = new kony.ui.Image2({
            "height": "21dp",
            "id": "imgMuseumPinActive",
            "isVisible": true,
            "left": "85dp",
            "src": "museums_pin_active.png",
            "top": "90dp",
            "width": "23dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgMuseumSelected = new kony.ui.Image2({
            "height": "23dp",
            "id": "imgMuseumSelected",
            "isVisible": true,
            "left": "27dp",
            "src": "museums_selected.png",
            "top": "90dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgNoImage = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgNoImage",
            "isVisible": true,
            "left": "235dp",
            "src": "no_image.png",
            "top": "121dp",
            "width": "21dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgRestaurantUnselected = new kony.ui.Image2({
            "height": "27dp",
            "id": "imgRestaurantUnselected",
            "isVisible": true,
            "left": "129dp",
            "src": "restaurants.png",
            "top": "72dp",
            "width": "19dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgRestaurantPin = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgRestaurantPin",
            "isVisible": true,
            "left": "170dp",
            "src": "restaurants_pin.png",
            "top": "75dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgRestaurantPinActive = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgRestaurantPinActive",
            "isVisible": true,
            "left": "200dp",
            "src": "restaurants_pin_active.png",
            "top": "76dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgRestaurantSelected = new kony.ui.Image2({
            "height": "23dp",
            "id": "imgRestaurantSelected",
            "isVisible": true,
            "left": "150dp",
            "src": "restaurants_selected.png",
            "top": "76dp",
            "width": "19dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgShoppingUnselected = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgShoppingUnselected",
            "isVisible": true,
            "left": "1dp",
            "src": "shopping.png",
            "top": "133dp",
            "width": "21dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgShoppingPin = new kony.ui.Image2({
            "height": "26dp",
            "id": "imgShoppingPin",
            "isVisible": true,
            "left": "57dp",
            "src": "shopping_pin.png",
            "top": "128dp",
            "width": "27dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgShoppingPinActive = new kony.ui.Image2({
            "height": "26dp",
            "id": "imgShoppingPinActive",
            "isVisible": true,
            "left": "84dp",
            "src": "shopping_pin_active.png",
            "top": "125dp",
            "width": "27dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgShoppingSelected = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgShoppingSelected",
            "isVisible": true,
            "left": "29dp",
            "src": "shopping_selected.png",
            "top": "128dp",
            "width": "21dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgEmptyStar = new kony.ui.Image2({
            "height": "22dp",
            "id": "imgEmptyStar",
            "isVisible": true,
            "left": "170dp",
            "src": "star_empty.png",
            "top": "125dp",
            "width": "23dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgBarPin = new kony.ui.Image2({
            "height": "27dp",
            "id": "imgBarPin",
            "isVisible": true,
            "left": "61dp",
            "src": "bars_pin.png",
            "top": "55dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgBarPinActive = new kony.ui.Image2({
            "height": "27dp",
            "id": "imgBarPinActive",
            "isVisible": true,
            "left": "92dp",
            "src": "bars_pin_active.png",
            "top": "55dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgFullStar = new kony.ui.Image2({
            "height": "21dp",
            "id": "imgFullStar",
            "isVisible": true,
            "left": "128dp",
            "src": "star_full.png",
            "top": "125dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgHalfStar = new kony.ui.Image2({
            "height": "18dp",
            "id": "imgHalfStar",
            "isVisible": true,
            "left": "150dp",
            "src": "star_half.png",
            "top": "125dp",
            "width": "22dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgBankPin = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgBankPin",
            "isVisible": true,
            "left": "98dp",
            "src": "banks_pin.png",
            "top": "10dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgBankActive = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgBankActive",
            "isVisible": true,
            "left": "67dp",
            "src": "banks_pin_active.png",
            "top": "10dp",
            "width": "31dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgCafePinActive = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgCafePinActive",
            "isVisible": true,
            "left": "230dp",
            "src": "coffee_shops_pin_active.png",
            "top": "10dp",
            "width": "31dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImages.add(imgbankunSelected, imgBankSelected, imgBarUnselected, imgBarSelected, imgCafeUnselected, imgCafePin, imgCafeSelected, imgCurrentLocation, imgDirections, imgOpen, imgToggleOff, imgMap, imgCall, imgEntertainmentUnselected, imgEntertainmentPin, imgEntertainmentPinActive, imgEntertainmentSelected, imgMuseumUnselected, imgMuseumPin, imgMuseumPinActive, imgMuseumSelected, imgNoImage, imgRestaurantUnselected, imgRestaurantPin, imgRestaurantPinActive, imgRestaurantSelected, imgShoppingUnselected, imgShoppingPin, imgShoppingPinActive, imgShoppingSelected, imgEmptyStar, imgBarPin, imgBarPinActive, imgFullStar, imgHalfStar, imgBankPin, imgBankActive, imgCafePinActive);
        var filterScreen = new com.konymp.filterscreen({
            "clipBounds": true,
            "height": "100%",
            "id": "filterScreen",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "skin": "sknFlxFFFFFF",
            "top": "100%",
            "width": "100%",
            "zIndex": 6
        }, {}, {});
        placelocator.add(flxScreen1, flxScreen2, flxImages, filterScreen);
        return placelocator;
    }
})