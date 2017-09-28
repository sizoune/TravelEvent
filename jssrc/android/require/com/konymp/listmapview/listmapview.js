define(function() {
    return function(controller) {
        var listmapview = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "listmapview",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        listmapview.setDefaultUnit(kony.flex.DP);
        var flxMapView = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMapView",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlexffffff",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMapView.setDefaultUnit(kony.flex.DP);
        var mapLayout = new kony.ui.Map({
            "calloutTemplate": "flxInvisible",
            "calloutWidth": 80,
            "defaultPinImage": "bars_pin.png",
            "height": "100%",
            "id": "mapLayout",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.Action15065818637932759,
            "onPinClick": controller.AS_Map_i1f07d1447eb4687a71060f5b47f5e9b,
            "provider": constants.MAP_PROVIDER_GOOGLE,
            "top": "0%",
            "widgetDataMapForCallout": {
                "flxInvisible": "flxInvisible"
            },
            "width": "100%",
            "zIndex": 1
        }, {}, {
            "mode": constants.MAP_VIEW_MODE_NORMAL,
            "showZoomControl": true,
            "zoomLevel": 13
        });
        var flxSearchThisArea = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "8%",
            "clipBounds": true,
            "height": "7%",
            "id": "flxSearchThisArea",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_b60d80d1b80546d68ea637a07334451f,
            "skin": "sknFlxFFFFFFroundCorner",
            "top": "5%",
            "width": "60%",
            "zIndex": 1
        }, {}, {});
        flxSearchThisArea.setDefaultUnit(kony.flex.DP);
        var imgRefresh = new kony.ui.Image2({
            "centerY": "50%",
            "height": "50%",
            "id": "imgRefresh",
            "isVisible": true,
            "left": "10%",
            "src": "refresh_icon.png",
            "width": "10%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSearchHere = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "60%",
            "id": "lblSearchHere",
            "isVisible": true,
            "skin": "sknLbl34495eNatoR100",
            "text": "Search this area",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxSearchThisArea.add(imgRefresh, lblSearchHere);
        var flxNavigateToCurrentLoction = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "8%",
            "clipBounds": true,
            "height": 45,
            "id": "flxNavigateToCurrentLoction",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "85%",
            "onClick": controller.Action15065818639578965,
            "skin": "sknFlx34495eRound",
            "width": 45,
            "zIndex": 1
        }, {}, {});
        flxNavigateToCurrentLoction.setDefaultUnit(kony.flex.DP);
        var imgCurrentLocation = new kony.ui.Image2({
            "centerX": "45%",
            "centerY": "50%",
            "height": "70%",
            "id": "imgCurrentLocation",
            "isVisible": true,
            "src": "nearby_outline_icon.png",
            "width": "65%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxNavigateToCurrentLoction.add(imgCurrentLocation);
        var segMapCallout = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": -250,
            "data": [{
                "img1": "star_empty.png",
                "img2": "star_empty.png",
                "img3": "star_empty.png",
                "img4": "star_empty.png",
                "img5": "star_empty.png",
                "imgCall": "phone_icon.png",
                "imgGetDirections": "directions_icon.png",
                "imgItem": "imagedrag.png",
                "lblAddress": "Address",
                "lblCall": "Call",
                "lblDistance": "Distance",
                "lblGetDirections": "Directions",
                "lblLine": "Label",
                "lblPlaceName": "PlaceName",
                "lblRate": "Rate",
                "lblTiming": "Timing"
            }, {
                "img1": "star_empty.png",
                "img2": "star_empty.png",
                "img3": "star_empty.png",
                "img4": "star_empty.png",
                "img5": "star_empty.png",
                "imgCall": "phone_icon.png",
                "imgGetDirections": "directions_icon.png",
                "imgItem": "imagedrag.png",
                "lblAddress": "Address",
                "lblCall": "Call",
                "lblDistance": "Distance",
                "lblGetDirections": "Directions",
                "lblLine": "Label",
                "lblPlaceName": "PlaceName",
                "lblRate": "Rate",
                "lblTiming": "Timing"
            }, {
                "img1": "star_empty.png",
                "img2": "star_empty.png",
                "img3": "star_empty.png",
                "img4": "star_empty.png",
                "img5": "star_empty.png",
                "imgCall": "phone_icon.png",
                "imgGetDirections": "directions_icon.png",
                "imgItem": "imagedrag.png",
                "lblAddress": "Address",
                "lblCall": "Call",
                "lblDistance": "Distance",
                "lblGetDirections": "Directions",
                "lblLine": "Label",
                "lblPlaceName": "PlaceName",
                "lblRate": "Rate",
                "lblTiming": "Timing"
            }],
            "groupCells": false,
            "height": "25%",
            "id": "segMapCallout",
            "isVisible": true,
            "left": "0%",
            "needPageIndicator": false,
            "onRowClick": controller.AS_Segment_bc81a1cfe966423fb42670f49b2f9c86,
            "onSwipe": controller.AS_Segment_d5bcd655b00446a7b923828867e6e215,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowSkin": "sknSegmentFFFFFFTransparent",
            "rowTemplate": "flxHolder",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "64646400",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
            "widgetDataMap": {
                "flexLeftPane": "flexLeftPane",
                "flexRightPane": "flexRightPane",
                "flxBottomCard": "flxBottomCard",
                "flxCall": "flxCall",
                "flxContainer": "flxContainer",
                "flxDirections": "flxDirections",
                "flxHolder": "flxHolder",
                "flxHolder1": "flxHolder1",
                "flxRating": "flxRating",
                "flxTopCard": "flxTopCard",
                "img1": "img1",
                "img2": "img2",
                "img3": "img3",
                "img4": "img4",
                "img5": "img5",
                "imgCall": "imgCall",
                "imgGetDirections": "imgGetDirections",
                "imgItem": "imgItem",
                "lblAddress": "lblAddress",
                "lblCall": "lblCall",
                "lblDistance": "lblDistance",
                "lblGetDirections": "lblGetDirections",
                "lblLine": "lblLine",
                "lblPlaceName": "lblPlaceName",
                "lblRate": "lblRate",
                "lblTiming": "lblTiming"
            },
            "width": "100%",
            "zIndex": 2
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMapView.add(mapLayout, flxSearchThisArea, flxNavigateToCurrentLoction, segMapCallout);
        var flxListView = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxListView",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlexffffff",
            "top": "100%",
            "width": "100%",
            "zIndex": 3
        }, {}, {});
        flxListView.setDefaultUnit(kony.flex.DP);
        var segListView = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "img1": "star_empty.png",
                "img2": "star_empty.png",
                "img3": "star_empty.png",
                "img4": "star_empty.png",
                "img5": "star_empty.png",
                "imgCall": "",
                "imgGetDirections": "",
                "imgItem": "imagedrag.png",
                "lblAddress": "",
                "lblCall": "",
                "lblDistance": "",
                "lblGetDirections": "",
                "lblPlaceName": "",
                "lblPlaceType": "",
                "lblRate": "",
                "lblTiming": ""
            }],
            "groupCells": false,
            "height": "88%",
            "id": "segListView",
            "isVisible": true,
            "left": "0%",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_c4e1a92347534674b4b9d9d1dbe75d1c,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowTemplate": "flexHolder",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "34495e46",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flexHolder": "flexHolder",
                "flexLeftPane": "flexLeftPane",
                "flexRightPane": "flexRightPane",
                "flxBottomCard": "flxBottomCard",
                "flxCall": "flxCall",
                "flxContainer": "flxContainer",
                "flxDirections": "flxDirections",
                "flxHolder1": "flxHolder1",
                "flxRating": "flxRating",
                "flxTopCard": "flxTopCard",
                "img1": "img1",
                "img2": "img2",
                "img3": "img3",
                "img4": "img4",
                "img5": "img5",
                "imgCall": "imgCall",
                "imgGetDirections": "imgGetDirections",
                "imgItem": "imgItem",
                "lblAddress": "lblAddress",
                "lblCall": "lblCall",
                "lblDistance": "lblDistance",
                "lblGetDirections": "lblGetDirections",
                "lblLine": "lblLine",
                "lblPlaceName": "lblPlaceName",
                "lblPlaceType": "lblPlaceType",
                "lblRate": "lblRate",
                "lblTiming": "lblTiming"
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxListView.add(segListView);
        var flxMapRoute = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMapRoute",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlexffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, {}, {});
        flxMapRoute.setDefaultUnit(kony.flex.DP);
        var mapRoute = new kony.ui.Map({
            "calloutWidth": 80,
            "defaultPinImage": "pinb.png",
            "height": "100%",
            "id": "mapRoute",
            "isVisible": true,
            "left": "0dp",
            "provider": constants.MAP_PROVIDER_GOOGLE,
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, {}, {
            "mode": constants.MAP_VIEW_MODE_NORMAL,
            "showZoomControl": true,
            "zoomLevel": 4
        });
        flxMapRoute.add(mapRoute);
        listmapview.add(flxMapView, flxListView, flxMapRoute);
        return listmapview;
    }
})