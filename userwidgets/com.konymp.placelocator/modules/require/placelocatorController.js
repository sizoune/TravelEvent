define(function() {
    var konymp = konymp || {};
    var KonyLoggerModule = require("com/konymp/placelocator/KonyLogger");
    konymp.logger = (new KonyLoggerModule("placelocator")) || function() {};
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.RECENT_SEARCH_KEY = "placeLocator_store_key";
            this.selecetedFromRecentSearch = false;
            this.CURRENT_LOCATION_IMAGE = "";
            this.mapAPIKey = null;
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            defineSetter(this, "currentLocationLabelText", function(val) {
                konymp.logger.debug("#####Start setter currentLocationLabelText", konymp.logger.FUNCTION_ENTRY);
                this.view.autoSuggest.currentLocationText = val;
                this.view.searchHeader.locationTbxText = val;
                this.view.searchHeader.locationPlaceHolder = val;
                CURRENT_LOCATION_VALUE = val;
                konymp.logger.debug("#####End setter currentLocationLabelText", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "currentLocationLabelText", function() {
                konymp.logger.debug("#####Start getter currentLocationLabelText", konymp.logger.FUNCTION_ENTRY);
                return this.view.searchHeader.LocatonTbxText;
            });
            defineSetter(this, "googleAPIKey", function(val) {
                konymp.logger.debug("#####Start setter googleAPIKey", konymp.logger.FUNCTION_ENTRY);
                this.mapAPIKey = val;
                konymp.logger.debug("#####End setter googleAPIKey", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "googleAPIKey", function() {
                konymp.logger.debug("#####Start getter googleAPIKey", konymp.logger.FUNCTION_ENTRY);
                return this.mapAPIKey;
            });
            defineSetter(this, "defaultSearchRadius", function(val) {
                konymp.logger.debug("#####Start setter defaultSearchRadius", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(val) && parseInt(val) !== null && parseInt(val) !== undefined) {
                        REUSABLE_SEARCH_RADIUS = parseInt(val);
                    } else {
                        REUSABLE_SEARCH_RADIUS = "2000";
                    }
                } catch (exception) {
                    REUSABLE_SEARCH_RADIUS = "2000";
                }
                konymp.logger.info("#####defaultSearchRadius value is : " + REUSABLE_SEARCH_RADIUS, konymp.logger.DEFAULT);
                konymp.logger.debug("#####End setter defaultSearchRadius", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "defaultSearchRadius", function() {
                konymp.logger.debug("#####Start getter defaultSearchRadius", konymp.logger.FUNCTION_ENTRY);
                return REUSABLE_SEARCH_RADIUS;
            });
            defineSetter(this, "currentLocationImage", function(val) {
                konymp.logger.debug("#####Start setter currentLocationImage", konymp.logger.FUNCTION_ENTRY);
                this.CURRENT_LOCATION_IMAGE = val;
                konymp.logger.debug("#####End setter currentLocationImage", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "currentLocationImage", function() {
                konymp.logger.debug("#####Start getter currentLocationImage", konymp.logger.FUNCTION_ENTRY);
                return this.CURRENT_LOCATION_IMAGE;
            });
        },
        selectedLocationForSearch: null,
        currentLocationData: {},
        selecetedFromRecentSearch: false,
        timeList: true,
        priceList: false,
        createDynamicMenu: function createDynamicMenu(menuData) {
            try {
                konymp.logger.debug("#####Start createDynamicMenu", konymp.logger.FUNCTION_ENTRY);
                if (this.createdDynamicMenu === null || this.createdDynamicMenu === undefined || this.createdDynamicMenu === false) {
                    this.createdDynamicMenu = true;
                    this.assignFunction();
                    this.timeList = true;
                    this.priceList = false;
                    if (menuData === null || menuData === undefined) {
                        konymp.logger.info("#####Setting default menu ", konymp.logger.DEFAULT);
                        menuData = [{
                                "placeTypeIcon_selected": "restaurants_selected.png",
                                "placeTypeIcon_unselected": "restaurants.png",
                                "browseKeyword": "restaurant",
                                "displayText": "Restaurants",
                                "mapPin": "restaurants_pin.png",
                                "mapPin_selected": "restaurants_pin_active.png"
                            },
                            {
                                "placeTypeIcon_selected": "coffee_shops_selected.png",
                                "placeTypeIcon_unselected": "coffee_shops.png",
                                "browseKeyword": "cafe",
                                "displayText": "Coffee Shops",
                                "mapPin": "coffee_shops_pin.png",
                                "mapPin_selected": "coffee_shops_pin_active.png"
                            },
                            {
                                "placeTypeIcon_selected": "bars_selected.png",
                                "placeTypeIcon_unselected": "bars.png",
                                "browseKeyword": "bar",
                                "displayText": "Bars",
                                "mapPin": "bars_pin.png",
                                "mapPin_selected": "bars_pin_active.png"
                            },
                            {
                                "placeTypeIcon_selected": "entertainment_selected.png",
                                "placeTypeIcon_unselected": "entertainment.png",
                                "browseKeyword": "movie_theater",
                                "displayText": "Entertainment",
                                "mapPin": "entertainment_pin.png",
                                "mapPin_selected": "entertainment_pin_active.png"
                            },
                            {
                                "placeTypeIcon_selected": "shopping_selected.png",
                                "placeTypeIcon_unselected": "shopping.png",
                                "browseKeyword": "shopping_mall",
                                "displayText": "Shopping",
                                "mapPin": "shopping_pin.png",
                                "mapPin_selected": "shopping_pin_active.png"
                            },
                            {
                                "placeTypeIcon_selected": "museums_selected.png",
                                "placeTypeIcon_unselected": "museums.png",
                                "browseKeyword": "museum",
                                "displayText": "Museums",
                                "mapPin": "museums_pin.png",
                                "mapPin_selected": "museums_pin_active.png"
                            },
                            {
                                "placeTypeIcon_selected": "banks_selected.png",
                                "placeTypeIcon_unselected": "banks.png",
                                "browseKeyword": "bank",
                                "displayText": "Banks",
                                "mapPin": "banks_pin.png",
                                "mapPin_selected": "banks_pin_active.png"
                            }
                        ];
                    }
                    for (var menuCount = 0; menuCount < menuData.length; menuCount++) {
                        menuData[menuCount].imgId = "img" + menuCount;
                    }
                    this.menuData = menuData;
                    this.view.menuComponent.creatDynamicMenu(menuData);
                    this.addRecentSearchData();
                }
                konymp.logger.debug("#####End createDynamicMenu", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in createDynamicMenu : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        assignFunction: function assignFunction() {
            try {
                konymp.logger.debug("#####Start assignFunction", konymp.logger.FUNCTION_ENTRY);
                this.view.searchHeader.locationTextChanged = this.searchLocationStart.bind(this);
                this.view.searchHeader.placeCategoryTextChanged = this.searchforCategory.bind(this);
                this.view.searchHeader.onTouchStartOfLocationTextBox = this.changeOfLocationStart.bind(this);
                this.view.searchHeader.onTouchStartOfCategoryTextBox = this.changeCategoryStart.bind(this);
                this.view.searchHeader.changeText = this.clearTextTriggered.bind(this);
                this.view.searchHeader.onEditLocationDone = this.onEditLocationDone.bind(this);
                this.view.menuComponent.onSearchSelectionClicked = this.searchSelectionSelected.bind(this);
                this.view.menuComponent.selectedUnselectedImage = this.selectedUnselectedImage.bind(this);
                this.view.autoSuggest.fetchCurrentLocationSuccess = this.getCurrentLocationCoordinatesSuccessCallback.bind(this);
                this.view.autoSuggest.fetchCurrentLocationFailure = this.getCurrentLocationCoordinatesErrorCallback.bind(this);
                this.view.autoSuggest.currentLocationSelectionCallback = this.currentLocationSelected.bind(this);
                this.view.listMapView.getDirectionsInvokedCallback = this.getDirection.bind(this);
                this.view.listMapView.successDrawMapRoute = this.drawRouteSuccess.bind(this);
                this.view.listMapView.refreshData = this.refreshData.bind(this);
                this.view.listMapView.callToInvoked = this.callInvoked.bind(this);
                this.view.listMapView.callSearchHere = this.callSearchHere.bind(this);
                this.view.listMapView.getCurrentLocation = this.navigateToCurrentLocation.bind(this);
                this.view.listMapView.customPinClick = this.customPinClick.bind(this);
                this.view.listMapView.onMapClick = this.mapClickOrChangeView.bind(this);
                this.view.listMapView.cancelMapsSuccess = this.setVisibilityOfShiftView.bind(this);
                this.view.listMapView.openMapsSuccess = this.setVisibilityOfShiftView.bind(this);
                this.view.listMapView.getPlaceDetails = this.getPlaceDetailsFromList.bind(this);
                this.view.filterScreen.customApplyFilter = this.applyFilter.bind(this);
                this.view.filterScreen.cancelFilter = this.cancelFilter.bind(this);
                this.view.searchHeader.btnClearLocationVisibility = true;
                this.view.flxScreen2.isVisible = false;
                konymp.logger.debug("#####End assignFunction", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in assignFunction : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        changeCategoryStart: function changeCategoryStart() {
            try {
                konymp.logger.debug("#####Start changeCategoryStart", konymp.logger.FUNCTION_ENTRY);
                this.view.autoSuggest.addressSelected = this.categoryChangeSelected.bind(this);
                this.view.autoSuggest.currentLocationVisibility = true;
                konymp.logger.debug("#####End changeCategoryStart", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in changeCategoryStart : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        changeOfLocationStart: function changeOfLocationStart() {
            try {
                konymp.logger.debug("#####Start changeOfLocationStart", konymp.logger.FUNCTION_ENTRY);
                this.view.autoSuggest.addressSelected = this.addressSelected.bind(this);
                this.view.flxScreen1.forceLayout();
                if (this.view.flxScreen2.isVisible === true) {
                    this.view.flxSearchedContent.setVisibility(false);
                    if (this.searchHeaderText !== null && this.searchHeaderText !== undefined) {
                        this.view.searchHeader.locationTbxText = this.searchHeaderText;
                    }
                    this.view.searchHeader.btnClearLocationVisibility = true;
                    this.view.searchHeader.forceLayoutOnComponent();
                    this.view.searchHeader.disableLocationTextBox(true);
                    this.addRecentSearchData();
                    this.cancelSearch();
                }
                var searchText = this.view.searchHeader.locationTbxText;
                if (searchText === "" || searchText.length < 1) {
                    this.view.menuComponent.searchSelectionVisibility = false;
                }
                konymp.logger.debug("#####End changeOfLocationStart", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in changeOfLocationStart : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        clearTextTriggered: function clearTextTriggered(textBoxName) {
            try {
                konymp.logger.debug("#####Start clearTextTriggered", konymp.logger.FUNCTION_ENTRY);
                if (textBoxName === "txtLocation") {
                    this.onEditLocationDone();
                }
                konymp.logger.debug("#####End clearTextTriggered", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in clearTextTriggered : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        categoryChangeSelected: function categoryChangeSelected() {
            try {
                konymp.logger.debug("#####Start categoryChangeSelected", konymp.logger.FUNCTION_ENTRY);
                var textCategory = this.view.searchHeader.categoryTbxText;
                if (!isNaN(textCategory) && textCategory !== null && textCategory.length >= 1) {
                    this.view.menuComponent.isVisible = false;
                    this.view.autoSuggest.currentLocationVisibility = false;
                } else {
                    this.view.menuComponent.isVisible = true;
                    this.view.autoSuggest.isVisible = false;
                }
                this.view.flxScreen1.forceLayout();
                konymp.logger.debug("#####End categoryChangeSelected", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in categoryChangeSelected : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        searchLocationStart: function searchLocationStart() {
            try {
                konymp.logger.debug("#####Start searchLocationStart", konymp.logger.FUNCTION_ENTRY);
                var searchText = this.view.searchHeader.locationTbxText;
                this.view.autoSuggest.isVisible = true;
                this.view.menuComponent.isVisible = false;
                this.view.flxScreen1.forceLayout();
                this.selectedLocationForSearch = null;
                if (searchText.length >= 1) {
                    this.callAutosuggestAPI(searchText);
                } else {
                    this.view.menuComponent.searchSelectionVisibility = false;
                }
                konymp.logger.debug("#####End searchLocationStart", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in searchLocationStart : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        callAutosuggestAPI: function callAutosuggestAPI(searchText) {
            try {
                konymp.logger.debug("#####Start callAutosuggestAPI", konymp.logger.FUNCTION_ENTRY);
                var objSvc = kony.sdk.getCurrentInstance().getObjectService("PlaceLocatorObjectServices", {
                    "access": "online"
                });
                var currentObj = this;
                var dataObject = new kony.sdk.dto.DataObject("AutoSuggestions");
                var queryParams = {
                    "searchText": searchText
                };
                if (this.mapAPIKey !== "null") {
                    queryParams.key = this.mapAPIKey;
                }
                var options = {
                    "dataObject": dataObject,
                    "queryParams": queryParams
                };
                konymp.logger.info("#####Query params for autosuggest : "+JSON.stringify(options),konymp.logger.DEFAULT);
                objSvc.fetch(options, currentObj.autoSuggestCallback.bind(currentObj), autoSuggestErrorCallback = function(res) {
                    konymp.logger.debug("#####Start autoSuggestErrorCallback", konymp.logger.FUNCTION_ENTRY);
                    konymp.logger.info("#####Failure in autoSuggestErrorCallback :  " + JSON.stringify(res), konymp.logger.ERROR_CALLBACK);
                    kony.application.dismissLoadingScreen();
                    alert("Error occured while fetching data Please try after some time..");
                    konymp.logger.debug("#####End autoSuggestErrorCallback", konymp.logger.FUNCTION_EXIT);
                });
                konymp.logger.debug("#####End callAutosuggestAPI", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in callAutosuggestAPI : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        autoSuggestCallback: function autoSuggestCallback(response) {
            try {
                konymp.logger.debug("#####Start autoSuggestCallback", konymp.logger.FUNCTION_ENTRY);
                if (response.records[0].Predictions !== undefined) {
                    konymp.logger.info("#####Data from service for autoSuggest is : " + JSON.stringify(response.records[0].Predictions), konymp.logger.SUCCESS_CALLBACK);
                    this.setDataToAutoSuggest(response.records[0].Predictions);
                }
                konymp.logger.debug("#####End autoSuggestCallback", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in autoSuggestCallback : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        setDataToAutoSuggest: function setDataToAutoSuggest(data) {
            try {
                konymp.logger.debug("#####Start setDataToAutoSuggest", konymp.logger.FUNCTION_ENTRY);
                var widgetMapping = {};
                widgetMapping["lblName"] = "description";
                this.view.autoSuggest.setDataToSegment(data, widgetMapping);
                konymp.logger.debug("#####End setDataToAutoSuggest", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in setDataToAutoSuggest : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        getCurrentLocationCoordinatesSuccessCallback: function getCurrentLocationCoordinatesSuccessCallback(successResponse) {
            try {
                konymp.logger.debug("#####Start getCurrentLocationCoordinatesSuccessCallback", konymp.logger.FUNCTION_ENTRY);
                konymp.logger.info("#####Current location : " + JSON.stringify(successResponse), konymp.logger.SUCCESS_CALLBACK);
                var location = [{
                    lat: successResponse.coords.latitude.toString(),
                    lon: successResponse.coords.longitude.toString(),
                    image: {
                        source: this.CURRENT_LOCATION_IMAGE,
                        anchor: kony.map.PIN_IMG_ANCHOR_CENTER
                    },
                    calloutData: {
                        name: ""
                    },
                    showcallout: false
                }];
                this.selectedLocationForSearch = location[0];
                if (this.view.searchHeader.locationTbxText === this.view.autoSuggest.currentLocationText) {
                    this.currentLocationData = location[0];
                }
                this.callNavigateToLocation = true;
                this.searchPlacesNearMe(location[0], null);
                konymp.logger.debug("#####End getCurrentLocationCoordinatesSuccessCallback", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                kony.application.dismissLoadingScreen();
                konymp.logger.error("#####Exception in getCurrentLocationCoordinatesSuccessCallback : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        getCurrentLocationCoordinatesErrorCallback: function getCurrentLocationCoordinatesErrorCallback(failureResponse) {
            try {
                konymp.logger.debug("#####Start getCurrentLocationCoordinatesErrorCallback", konymp.logger.FUNCTION_ENTRY);
                konymp.logger.info("#####Failure in retriving location details using GPS : " + JSON.stringify(failureResponse), konymp.logger.ERROR_CALLBACK);
                kony.application.dismissLoadingScreen();
                switch (failureResponse.code) {
                    case 1:
                        alert("GPS access denied...");
                        break;
                    case 2:
                        alert("Turn On GPS in settings..");
                        break;
                    case 3:
                        alert("TIMED OUT...!!");
                        break;
                }
                konymp.logger.debug("#####End getCurrentLocationCoordinatesErrorCallback", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in getCurrentLocationCoordinatesErrorCallback : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        currentLocationSelected: function currentLocationSelected() {
            try {
                konymp.logger.debug("#####Start currentLocationSelected", konymp.logger.FUNCTION_ENTRY);
                this.view.searchHeader.locationTbxText = this.view.autoSuggest.currentLocationText;
                this.view.autoSuggest.isVisible = false;
                this.view.menuComponent.isVisible = true;
                this.view.flxScreen1.forceLayout();
                var selectedCategory = this.view.menuComponent.getSelectedCategory();
                if (selectedCategory[0].length >= 1) {
                    this.view.menuComponent.searchSelectionVisibility = true;
                } else {
                    this.view.menuComponent.searchSelectionVisibility = false;
                }
                konymp.logger.debug("#####End currentLocationSelected", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in currentLocationSelected : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        addressSelected: function addressSelected(data) {
            try {
                konymp.logger.debug("#####Start addressSelected", konymp.logger.FUNCTION_ENTRY);
                var locationData = data.description;
                this.view.searchHeader.locationTbxText = locationData;
                this.view.menuComponent.isVisible = true;
                this.view.autoSuggest.isVisible = false;
                this.view.flxScreen1.forceLayout();
                this.selectedLocationForSearch = data;
                this.view.searchHeader.btnClearLocationVisibility = true;
                var selectedCategory = this.view.menuComponent.getSelectedCategory();
                if (selectedCategory[0].length >= 1) {
                    this.view.menuComponent.searchSelectionVisibility = true;
                }
                konymp.logger.debug("#####End addressSelected", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in addressSelected : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        selectedUnselectedImage: function selectedUnselectedImage(isSelected) {
            try {
                konymp.logger.debug("#####Start selectedUnselectedImage", konymp.logger.FUNCTION_ENTRY);
                var listValues = this.view.menuComponent.getSelectedCategory();
                var list = listValues[0];
                if (isSelected && ((this.selectedLocationForSearch !== null) || (this.view.searchHeader.locationTbxText === this.view.autoSuggest.currentLocationText))) {
                    if (this.view.searchHeader.locationTbxText !== "") {
                        this.view.menuComponent.searchSelectionVisibility = true;
                        this.view.menuComponent.forceLayoutTheComponent();
                    }
                } else {
                    if (list.length >= 1 && ((this.selectedLocationForSearch !== null) || (this.view.searchHeader.locationTbxText === this.view.autoSuggest.currentLocationText))) {
                        if (this.view.searchHeader.locationTbxText !== "") {
                            this.view.menuComponent.searchSelectionVisibility = true;
                        }
                    } else {
                        this.view.menuComponent.searchSelectionVisibility = false;
                        this.view.searchHeader.categoryTbxText = "";
                    }
                }
                this.view.searchHeader.forceLayoutOnComponent();
                konymp.logger.debug("#####End selectedUnselectedImage", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in selectedUnselectedImage : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        searchSelectionSelected: function searchSelectionSelected() {
            try {
                konymp.logger.debug("#####Start searchSelectionSelected", konymp.logger.FUNCTION_ENTRY);
                kony.application.showLoadingScreen("", "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
                if (this.selecetedFromRecentSearch === true) {
                    this.selecetedFromRecentSearch = false;
                    konymp.logger.info("#####Search Data from Available store Data : Recent Search location is choose.", konymp.logger.DEFAULT);
                    this.searchdataFromAvailableLocationCoordinates(this.selectedLocationForSearch);
                    return;
                }
                if (this.view.searchHeader.locationTbxText === "" || this.view.searchHeader.locationTbxText === null) {
                    this.view.menuComponent.searchSelectionVisibility = false;
                    this.view.menuComponent.forceLayoutTheComponent();
                    kony.application.dismissLoadingScreen();
                    alert("Enter location of search!!!");
                } else {
                    var segData = this.selectedLocationForSearch;
                    if (this.view.searchHeader.locationTbxText === this.view.autoSuggest.currentLocationText) {
                        konymp.logger.info("#####Current location search choosen", konymp.logger.DEFAULT);
                        this.view.autoSuggest.getCurrentLocationCoordinates();
                    } else if (segData === null || segData === undefined || (segData.place_id !== null && segData.place_id !== undefined)) {
                        konymp.logger.info("#####Search data of a place using the place ID is being called : " + JSON.stringify(segData), konymp.logger.DEFAULT);
                        this.getCoordinatesFromPlaceID(segData);
                    } else {
                        this.callNavigateToLocation = true;
                        konymp.logger.info("#####Search Place Near Me using the location already choose. It Already have data for selected location : " + JSON.stringify(segData), konymp.logger.DEFAULT);
                        this.searchPlacesNearMe(segData, null);
                    }
                }
                this.view.searchHeader.btnClearLocationVisibility = false;
                konymp.logger.debug("#####End searchSelectionSelected", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                kony.application.dismissLoadingScreen();
                konymp.logger.error("#####Exception in searchSelectionSelected : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        getCoordinatesFromPlaceID: function getCoordinatesFromPlaceID(place) {
            try {
                konymp.logger.debug("#####Start getCoordinatesFromPlaceID", konymp.logger.FUNCTION_ENTRY);
                var objSvc = kony.sdk.getCurrentInstance().getObjectService("PlaceLocatorObjectServices", {
                    "access": "online"
                });
                var currentObj = this;
                var dataObject = new kony.sdk.dto.DataObject("GetLocationCoordinatesUsingPlaceID");
                var queryParams = {
                    "placeID": place.place_id
                };
                if (this.mapAPIKey !== "null") {
                    queryParams.key = this.mapAPIKey;
                }
                var options = {
                    "dataObject": dataObject,
                    "queryParams": queryParams
                };
                objSvc.fetch(options, currentObj.getCoordinatesFromPlaceIDSuccessCallback.bind(currentObj, place), getCoordinatesFromPlaceIDSuccessCallback = function(res) {
                    konymp.logger.debug("#####Start getCoordinatesFromPlaceIDSuccessCallback", konymp.logger.FUNCTION_ENTRY);
                    konymp.logger.info("#####Failure in getPlaceID :  " + JSON.stringify(res), konymp.logger.ERROR_CALLBACK);
                    kony.application.dismissLoadingScreen();
                    alert("Error occured while fetching data Please try after some time..");
                    konymp.logger.debug("#####End getCoordinatesFromPlaceIDSuccessCallback", konymp.logger.FUNCTION_EXIT);
                });
                konymp.logger.debug("#####End getCoordinatesFromPlaceID", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                kony.application.dismissLoadingScreen();
                konymp.logger.error("#####Exception in getCoordinatesFromPlaceID : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        getCoordinatesFromPlaceIDSuccessCallback: function getCoordinatesFromPlaceIDSuccessCallback(place, response) {
            try {
                konymp.logger.debug("#####Start getCoordinatesFromPlaceIDSuccessCallback", konymp.logger.FUNCTION_ENTRY);
                konymp.logger.info("#####Response of get coordinates using placeID : " + JSON.stringify(response), konymp.logger.SUCCESS_CALLBACK);
                var locationData = response.records[0];
                var responseToReturn = {
                    coords: {
                        latitude: locationData.lat,
                        longitude: locationData.lng
                    }
                };
                place.lat = locationData.lat;
                place.lng = locationData.lng;
                this.storeSearchData(place);
                this.getCurrentLocationCoordinatesSuccessCallback(responseToReturn);
                konymp.logger.debug("#####End getCoordinatesFromPlaceIDSuccessCallback", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                kony.application.dismissLoadingScreen();
                konymp.logger.error("#####Exception in getCoordinatesFromPlaceIDSuccessCallback : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        searchPlacesNearMe: function searchPlacesNearMe(location, radiusRequired) {
            try {
                konymp.logger.debug("#####Start searchPlacesNearMe", konymp.logger.FUNCTION_ENTRY);
                var places = this.view.menuComponent.getSelectedCategory();
                var placeType = places[0].join("|");
                var radius = REUSABLE_SEARCH_RADIUS;
                if (radiusRequired !== null) {
                    radius = radiusRequired;
                }
                var objSvc = kony.sdk.getCurrentInstance().getObjectService("PlaceLocatorObjectServices", {
                    "access": "online"
                });
                var currentObj = this;
                var dataObject = new kony.sdk.dto.DataObject("SearchNearbyUsingCoordinates");
                var queryParams = {
                    "location": (location.lat + "," + location.lon).toString(),
                    "radius": radius.toString(),
                    "type": placeType
                };
                if (this.mapAPIKey !== "null") {
                    queryParams.key = this.mapAPIKey;
                }
                konymp.logger.info("#####Query params : " + JSON.stringify(queryParams), konymp.logger.DEFAULT);
                var options = {
                    "dataObject": dataObject,
                    "queryParams": queryParams
                };
                objSvc.fetch(options, currentObj.searchPlacesNearMeSuccessCallback.bind(currentObj), searchPlacesNearMeErrorCallback = function(res) {
                    konymp.logger.debug("#####Start searchPlacesNearMeErrorCallback", konymp.logger.FUNCTION_ENTRY);
                    konymp.logger.info("#####Failure in searchPlacesNearMeErrorCallback :  " + JSON.stringify(res), konymp.logger.ERROR_CALLBACK);
                    kony.application.dismissLoadingScreen();
                    alert("Error occured while fetching data Please try after some time..");
                    konymp.logger.debug("#####End searchPlacesNearMeErrorCallback", konymp.logger.FUNCTION_EXIT);
                });
                konymp.logger.debug("#####End searchPlacesNearMe", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                kony.application.dismissLoadingScreen();
                konymp.logger.error("#####Exception in searchPlacesNearMe : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        searchPlacesNearMeSuccessCallback: function searchPlacesNearMeSuccessCallback(response) {
            try {
                konymp.logger.debug("#####Start searchPlacesNearMeSuccessCallback", konymp.logger.FUNCTION_ENTRY);
                konymp.logger.info("#####Response of get places nearby : " + JSON.stringify(response), konymp.logger.SUCCESS_CALLBACK);
                var searchLoc = this.selectedLocationForSearch;
                var passData = [];
                passData.push(response);
                if (this.view.searchHeader.locationTbxText !== this.view.autoSuggest.currentLocationText) {
                    this.view.autoSuggest.fetchCurrentLocationSuccess = this.getCurrentLocationSuccess.bind(this, passData);
                    this.view.autoSuggest.fetchCurrentLocationFailure = this.getCurrentLocationError.bind(this, passData);
                    this.view.autoSuggest.getCurrentLocationCoordinates();
                    return;
                }
                passData.push(searchLoc);
                this.formatResponse(passData);
                kony.application.dismissLoadingScreen();
                konymp.logger.debug("#####End searchPlacesNearMeSuccessCallback", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                kony.application.dismissLoadingScreen();
                konymp.logger.error("#####Exception in searchPlacesNearMeSuccessCallback : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        getCurrentLocationSuccess: function getCurrentLocationSuccess(requiredData, response) {
            try {
                konymp.logger.debug("#####Start getCurrentLocationSuccess", konymp.logger.FUNCTION_ENTRY);
                this.view.autoSuggest.fetchCurrentLocationFailure = this.getCurrentLocationCoordinatesErrorCallback.bind(this);
                this.view.autoSuggest.fetchCurrentLocationSuccess = this.getCurrentLocationCoordinatesSuccessCallback.bind(this);
                konymp.logger.info("#####Response of get current location : " + JSON.stringify(response), konymp.logger.SUCCESS_CALLBACK);
                var location = [{
                    lat: response.coords.latitude.toString(),
                    lon: response.coords.longitude.toString(),
                    image: {
                        source: this.CURRENT_LOCATION_IMAGE,
                        anchor: kony.map.PIN_IMG_ANCHOR_CENTE
                    },
                    calloutData: {
                        name: ""
                    },
                    showcallout: false
                }];
                this.currentLocationData = location[0];
                requiredData.push(location[0]);
                this.formatResponse(requiredData);
                kony.application.dismissLoadingScreen();
                konymp.logger.debug("#####End getCurrentLocationSuccess", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                kony.application.dismissLoadingScreen();
                konymp.logger.error("#####Exception in getCurrentLocationSuccess : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        getCurrentLocationError: function getCurrentLocationError(requiredData, error) {
            try {
                konymp.logger.debug("#####Start getCurrentLocationError", konymp.logger.FUNCTION_ENTRY);
                this.view.autoSuggest.fetchCurrentLocationFailure = this.getCurrentLocationCoordinatesErrorCallback.bind(this);
                this.view.autoSuggest.fetchCurrentLocationSuccess = this.getCurrentLocationCoordinatesSuccessCallback.bind(this);
                konymp.logger.info("#####Error in getting current location : " + JSON.stringify(error), konymp.logger.ERROR_CALLBACK);
                kony.application.dismissLoadingScreen();
                switch (error.code) {
                    case 1:
                        alert("GPS access denied...");
                        break;
                    case 2:
                        alert("Turn On GPS in settings..");
                        break;
                    case 3:
                        alert("TIMED OUT...!!");
                        break;
                }
                this.formatResponse(requiredData);
                konymp.logger.debug("#####End getCurrentLocationError", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in getCurrentLocationError : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        searchforCategory: function searchforCategory() {
            try {
                konymp.logger.debug("#####Start searchforCategory", konymp.logger.FUNCTION_ENTRY);
                var searchText = this.view.searchHeader.categoryTbxText;
                this.view.autoSuggest.isVisible = true;
                this.view.menuComponent.isVisible = false;
                this.selectedLocationForSearch = null;
                if (searchText.length >= 2) {
                    this.callAutosuggestAPI(searchText);
                }
                konymp.logger.debug("#####End searchforCategory", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in searchforCategory : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        formatResponse: function formatResponse(passData) {
            try {
                konymp.logger.debug("#####Start formatResponse", konymp.logger.FUNCTION_ENTRY);
                var response = passData[0].records;
                konymp.logger.info("#####Data from response : " + JSON.stringify(response), konymp.logger.DEFAULT);
                var locData = [];
                var resultLength = response.length;
                var segmentData = [];
                var selectedType = this.view.menuComponent.getSelectedCategory();
                for (var i = 0; i < resultLength; i++) {
                    var timeList = "";
                    if (this.timeList) {
                        if (response[i].OpenNow !== null && response[i].OpenNow !== undefined) {
                            if (response[i].OpenNow === "true") {
                                timeList = "Open";
                            } else {
                                timeList = "Closed";
                            }
                        }
                    }
                    var phone = {
                        "isVisible": true
                    };
                    if (response[i].Phone === null || response[i].Phone === undefined || response[i].Phone.length === 0) {
                        konymp.logger.info("##### false : " + response[i].Name, konymp.logger.DEFAULT);
                        phone = {
                            "isVisible": false
                        };
                    }
                    var rating = response[i].Rating;
                    var ratingDisplayNumber = response[i].Rating;
                    var flxRating = {
                        "isVisible": true
                    };
                    if (response[i].Rating === null || response[i].Rating === undefined || response[i].Rating === "") {
                        rating = 0;
                        ratingDisplayNumber = "No rating";
                        flxRating = {
                            "isVisible": false
                        };
                    }
                    rating = (Math.round(parseFloat(rating) * 2) / 2).toFixed(1);
                    var img = [];
                    for (var imageCount = 0; imageCount < 5; imageCount++) {
                        if (rating >= 1) {
                            img[imageCount] = "star_full.png";
                            rating = rating - 1;
                        } else if (rating == 0.5) {
                            img[imageCount] = "star_half.png";
                            rating = rating - 0.5;
                        } else {
                            img[imageCount] = "star_empty.png";
                        }
                    }
                    locData.push({
                        lat: response[i].Latitude,
                        lon: response[i].Longitude,
                        id: i.toString(),
                        image: {
                            source: selectedType[1][0],
                            anchor: kony.map.PIN_IMG_ANCHOR_CENTER
                        },
                        calloutData: {
                            lblPlaceName: response[i].Name,
                            Rating: ratingDisplayNumber,
                            lblAddress: response[i].Vicinity,
                            lblPlaceType: selectedType[2][0],
                            lblDistance: "",
                            lblTiming: timeList,
                            PlaceID: response[i].PlaceID,
                            Phone: response[i].Phone,
                            flxCall: phone,
                            flxRating: flxRating,
                            index: i,
                            img1: img[0],
                            img2: img[1],
                            img3: img[2],
                            img4: img[3],
                            img5: img[4]
                        },
                        showcallout: true
                    });
                    var photo = null;
                    var imageURL = "no_image.png";
                    konymp.logger.info("#####PhotoReference : " + response[i].PhotoReference, konymp.logger.DEFAULT);
                    if (response[i].PhotoReference !== undefined) {
                        photo = response[i].PhotoReference;
                        imageURL = response[i].ImageURL;
                    }
                    segmentData.push({
                        lat: response[i].Latitude,
                        lon: response[i].Longitude,
                        Rating: ratingDisplayNumber,
                        lblPlaceName: response[i].Name,
                        lblAddress: response[i].Vicinity,
                        lblPlaceType: selectedType[2][0],
                        PlaceID: response[i].PlaceID,
                        lblDistance: "",
                        lblTiming: timeList,
                        imgItem: {
                            "src": imageURL
                        },
                        photoreference: photo,
                        flxCall: phone,
                        flxRating: flxRating,
                        Phone: response[i].Phone,
                        index: i,
                        img1: img[0],
                        img2: img[1],
                        img3: img[2],
                        img4: img[3],
                        img5: img[4],
                        lblLine: "test"
                    });
                }
                if (passData.length === 2) {
                    var searchLocation = passData[1];
                    searchLocation.id = "currentLocationPin";
                    locData.push(searchLocation);
                }
                if (resultLength === 0) {
                    this.view.lblNoResults.isVisible = true;
                } else {
                    this.view.lblNoResults.isVisible = false;
                }
                var widgetMapping = {};
                widgetMapping["lblPlaceName"] = "lblPlaceName";
                widgetMapping["lblAddress"] = "lblAddress";
                widgetMapping["lblPlaceType"] = "lblPlaceType";
                widgetMapping["lblDistance"] = "lblDistance";
                widgetMapping["lblTiming"] = "lblTiming";
                widgetMapping["lblRate"] = "Rating";
                widgetMapping["imgItem"] = "imgItem";
                widgetMapping["img1"] = "img1";
                widgetMapping["img2"] = "img2";
                widgetMapping["img3"] = "img3";
                widgetMapping["img4"] = "img4";
                widgetMapping["img5"] = "img5";
                widgetMapping["flxCall"] = "flxCall";
                widgetMapping["flxRating"] = "flxRating";
                widgetMapping["lblLine"] = "lblLine";
                var formattedData = {
                    "segmentWidgetMapping": widgetMapping,
                    "segmentData": segmentData,
                    "locationData": locData
                };
                this.serviceData = formattedData;
                if (this.callNavigateToLocation === true) {
                    this.view.listMapView.mapDataToSegmentAndMap(formattedData, {
                        "lat": this.selectedLocationForSearch.lat,
                        "lon": this.selectedLocationForSearch.lon
                    }, selectedType[1][0], selectedType[4][0], true);
                } else {
                    this.view.listMapView.mapDataToSegmentAndMap(formattedData, null, selectedType[1][0], selectedType[4][0], true);
                }
                this.view.flxScreen2.setVisibility(true);
                if (this.view.searchHeader.locationTbxText.replace(/\s*$/, "") !== "") {
                    this.searchHeaderText = this.view.searchHeader.locationTbxText;
                    var locationData = this.view.searchHeader.locationTbxText;
                    if (locationData.length > 30) {
                        locationData = locationData.substring(0, 30) + "...";
                    }
                    this.view.lblLocation.text = locationData;
                    this.view.searchHeader.locationTbxText = " ";
                }
                this.view.lblCategory.text = selectedType[2][0];
                this.view.searchHeader.disableLocationTextBox(false);
                this.view.flxSearchedContent.setVisibility(true);
                this.view.searchHeader.forceLayoutOnComponent();
                this.view.searchHeader.btnClearLocationVisibility = false;
                this.view.forceLayout();
                this.view.flxShiftViews.imgListMapView.src = "list_icon.png";
                this.view.flxShiftViews.lblListMapView.text = "List";
                this.view.filterScreen.resetFilters();
                kony.application.dismissLoadingScreen();
                konymp.logger.debug("#####End formatResponse", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in formatResponse : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        viewShift: function viewShift() {
            try {
                konymp.logger.debug("#####Start viewShift", konymp.logger.FUNCTION_ENTRY);
                this.mapClickOrChangeView();
                if (this.view.flxShiftViews.imgListMapView.src === "list_icon.png") {
                    this.view.listMapView.shiftToView("ListView");
                    this.view.flxShiftViews.imgListMapView.src = "map_icon.png";
                    this.view.flxShiftViews.lblListMapView.text = "Map";
                } else {
                    this.view.flxShiftViews.imgListMapView.src = "list_icon.png";
                    this.view.flxShiftViews.lblListMapView.text = "List";
                    this.view.listMapView.shiftToView("MapView");
                }
                konymp.logger.debug("#####End viewShift", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in viewShift : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        cancelSearch: function cancelSearch() {
            try {
                konymp.logger.debug("#####Start cancelSearch", konymp.logger.FUNCTION_ENTRY);
                this.view.flxScreen2.setVisibility(false);
                this.view.searchHeader.forceLayoutOnComponent();
                konymp.logger.debug("#####End cancelSearch", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in cancelSearch : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        getDirection: function getDirection(context) {
            try {
                konymp.logger.debug("#####Start getDirection", konymp.logger.FUNCTION_ENTRY);
                var selectedData;
                if (context !== null) {
                    var locationData = this.view.listMapView.locationData;
                    selectedData = locationData[context.rowIndex];
                } else {
                    selectedData = this.view.listMapView.selectedPinLocation;
                    selectedData.lblPlaceName = selectedData.calloutData.lblPlaceName;
                }
                this.view.lblSearchPlace.text = selectedData.lblPlaceName;
                var data = JSON.stringify(this.currentLocationData);
                if (data.lon !== null && data.lon !== undefined) {
                    var destination = selectedData.lat.toString() + "," + selectedData.lon.toString();
                    var origin = this.currentLocationData.lat.toString() + "," + this.currentLocationData.lon.toString();
                    //#ifdef iphone
                    this.view.flxShiftViews.setVisibility(false);
                    //#endif
                    this.view.listMapView.getDirections(origin, destination);
                } else {
                    kony.application.showLoadingScreen("", "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
                    this.view.autoSuggest.fetchCurrentLocationSuccess = this.getCurrentLocationForDirectionSuccessCallback.bind(this, selectedData);
                    this.view.autoSuggest.getCurrentLocationCoordinates();
                }
                konymp.logger.debug("#####End getDirection", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in getDirection : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        getCurrentLocationForDirectionSuccessCallback: function getCurrentLocationForDirectionSuccessCallback(destinationData, response) {
            try {
                konymp.logger.debug("#####Start getCurrentLocationForDirectionSuccessCallback", konymp.logger.FUNCTION_ENTRY);
                kony.application.dismissLoadingScreen();
                konymp.logger.info("#####Response of get coordinates for direction : " + JSON.stringify(response), konymp.logger.SUCCESS_CALLBACK);
                this.view.autoSuggest.fetchCurrentLocationSuccess = this.getCurrentLocationCoordinatesSuccessCallback.bind(this);
                var destination = destinationData.lat.toString() + "," + destinationData.lon.toString();
                var origin = response.coords.latitude.toString() + "," + response.coords.longitude.toString();
                //#ifdef iphone
                this.view.flxShiftViews.setVisibility(false);
                //#endif
                this.view.listMapView.getDirections(origin, destination);
                konymp.logger.debug("#####End getCurrentLocationForDirectionSuccessCallback", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in getCurrentLocationForDirectionSuccessCallback : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        setVisibilityOfShiftView: function setVisibilityOfShiftView() {
            try {
                konymp.logger.debug("#####Start setVisibilityOfShiftView", konymp.logger.FUNCTION_ENTRY);
                //#ifdef iphone
                this.view.flxShiftViews.setVisibility(true);
                //#endif
                konymp.logger.debug("#####End setVisibilityOfShiftView", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in setVisibilityOfShiftView : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        drawRouteSuccess: function drawRouteSuccess() {
            try {
                konymp.logger.debug("#####Start drawRouteSuccess", konymp.logger.FUNCTION_ENTRY);
                this.view.flxCloseRoutes.setVisibility(true);
                this.view.listMapView.mapRouteVisibility = true;
                this.view.flxShiftViews.isVisible = false;
                this.view.flxScreen1.forceLayout();
                konymp.logger.debug("#####End drawRouteSuccess", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in drawRouteSuccess : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        closeRoutes: function closeRoutes() {
            try {
                konymp.logger.debug("#####Start closeRoutes", konymp.logger.FUNCTION_ENTRY);
                this.view.flxCloseRoutes.setVisibility(false);
                this.view.listMapView.mapRouteVisibility = false;
                this.view.flxShiftViews.isVisible = true;
                konymp.logger.debug("#####End closeRoutes", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in closeRoutes : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        refreshData: function refreshData() {
            try {
                konymp.logger.debug("#####Start refreshData", konymp.logger.FUNCTION_ENTRY);
                this.searchSelectionSelected();
                konymp.logger.debug("#####End refreshData", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in refreshData : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        callInvoked: function callInvoked(selectedContext) {
            try {
                konymp.logger.debug("#####Start callInvoked", konymp.logger.FUNCTION_ENTRY);
                var phoneNumber;
                if (selectedContext !== null) {
                    var locationData = this.view.listMapView.locationData;
                    phoneNumber = locationData[selectedContext.rowIndex].Phone;
                } else {
                    phoneNumber = this.view.listMapView.selectedPinLocation.calloutData.Phone;
                }
                if (phoneNumber !== undefined && phoneNumber !== null) {
                    kony.phone.dial(phoneNumber);
                }
                konymp.logger.debug("#####End callInvoked", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in callInvoked : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        callSearchHere: function callSearchHere(radius, centerCoord) {
            try {
                konymp.logger.debug("#####Start callSearchHere", konymp.logger.FUNCTION_ENTRY);
                this.mapClickOrChangeView();
                this.searchPlacesNearMe(centerCoord, radius);
                this.callNavigateToLocation = false;
                konymp.logger.debug("#####End callSearchHere", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                kony.application.dismissLoadingScreen();
                konymp.logger.error("#####Exception in callSearchHere : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        navigateToCurrentLocation: function navigateToCurrentLocation() {
            try {
                konymp.logger.debug("#####Start navigateToCurrentLocation", konymp.logger.FUNCTION_ENTRY);
                this.view.autoSuggest.fetchCurrentLocationSuccess = this.getCurrentLocationNavigateToSuccess.bind(this);
                kony.application.showLoadingScreen("", "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
                this.mapClickOrChangeView();
                this.view.autoSuggest.getCurrentLocationCoordinates();
                konymp.logger.debug("#####End navigateToCurrentLocation", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in navigateToCurrentLocation : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        getCurrentLocationNavigateToSuccess: function getCurrentLocationNavigateToSuccess(response) {
            try {
                konymp.logger.debug("#####Start getCurrentLocationNavigateToSuccess", konymp.logger.FUNCTION_ENTRY);
                this.view.autoSuggest.fetchCurrentLocationSuccess = this.getCurrentLocationCoordinatesSuccessCallback.bind(this);
                var location = {
                    lat: response.coords.latitude,
                    lon: response.coords.longitude
                };
                this.view.listMapView.navigateToLocation(location);
                kony.application.dismissLoadingScreen();
                konymp.logger.debug("#####End getCurrentLocationNavigateToSuccess", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in getCurrentLocationNavigateToSuccess : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        onEditLocationDone: function onEditLocationDone() {
            try {
                konymp.logger.debug("#####Start onEditLocationDone", konymp.logger.FUNCTION_ENTRY);
                if (this.view.searchHeader.locationTbxText === "") {
                    this.view.searchHeader.locationTbxText = this.view.autoSuggest.currentLocationText;
                    this.view.autoSuggest.isVisible = false;
                    this.view.menuComponent.isVisible = true;
                    this.view.forceLayout();
                    var selectedCategory = this.view.menuComponent.getSelectedCategory();
                    if (selectedCategory[0].length >= 1) {
                        this.view.menuComponent.searchSelectionVisibility = true;
                    }
                }
                konymp.logger.debug("#####End onEditLocationDone", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in onEditLocationDone : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        storeSearchData: function storeSearchData(data) {
            try {
                konymp.logger.debug("#####Start storeSearchData", konymp.logger.FUNCTION_ENTRY);
                var existingSearchData = kony.store.getItem(this.RECENT_SEARCH_KEY);
                konymp.logger.info("#####Data in store : " + JSON.stringify(existingSearchData), konymp.logger.DATA_STORE);
                if (existingSearchData === null) {
                    konymp.logger.info("#####Data to store in store : " + JSON.stringify(data), konymp.logger.DATA_STORE);
                    kony.store.setItem(this.RECENT_SEARCH_KEY, [data]);
                    return;
                }
                var existingSearchDataLength = existingSearchData.length;
                var repeatedSearch = false;
                for (var i = 0; i < existingSearchDataLength; i++) {
                    if (data.place_id === existingSearchData[i].place_id) {
                        var repeatedElement = existingSearchData.splice(i, 1)[0];
                        existingSearchData.unshift(repeatedElement);
                        repeatedSearch = true;
                        break;
                    }
                }
                if (repeatedSearch === false) {
                    if (existingSearchDataLength >= 5) {
                        existingSearchData.pop();
                    }
                    existingSearchData.unshift(data);
                }
                kony.store.removeItem(this.RECENT_SEARCH_KEY);
                kony.store.setItem(this.RECENT_SEARCH_KEY, existingSearchData);
                konymp.logger.debug("#####End storeSearchData", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in storeSearchData : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        addRecentSearchData: function addRecentSearchData() {
            try {
                konymp.logger.debug("#####Start addRecentSearchData", konymp.logger.FUNCTION_ENTRY);
                var existingSearchData = kony.store.getItem(this.RECENT_SEARCH_KEY);
                if (existingSearchData !== null) {
                    konymp.logger.info("#####Data to add to recent search segment : " + JSON.stringify(existingSearchData), konymp.logger.DATA_STORE);
                    var widgetMapping = {};
                    widgetMapping["lblName"] = "description";
                    widgetMapping["lblRecentSearchHeader"] = "lblRecentSearchHeader";
                    var dataToInsert = [
                        [{
                            "lblRecentSearchHeader": "Recent Searches"
                        }, existingSearchData]
                    ];
                    this.view.segRecentSearch.widgetDataMap = widgetMapping;
                    this.view.segRecentSearch.setData(dataToInsert);
                    this.view.segRecentSearch.isVisible = true;
                } else {
                    this.view.segRecentSearch.isVisible = false;
                }
                konymp.logger.debug("#####End addRecentSearchData", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in addRecentSearchData : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        recentSearchItemSeleceted: function recentSearchItemSeleceted() {
            try {
                konymp.logger.debug("#####Start recentSearchItemSeleceted", konymp.logger.FUNCTION_ENTRY);
                var selecetdItem = this.view.segRecentSearch.selectedRowItems[0];
                this.selecetedFromRecentSearch = true;
                this.selectedLocationForSearch = selecetdItem;
                var locationData = selecetdItem.description;
                this.view.searchHeader.locationTbxText = locationData;
                this.view.menuComponent.isVisible = true;
                this.view.autoSuggest.isVisible = false;
                var selectedCategory = this.view.menuComponent.getSelectedCategory();
                if (selectedCategory[0].length >= 1) {
                    this.view.menuComponent.searchSelectionVisibility = true;
                }
                this.view.searchHeader.btnClearLocationVisibility = true;
                konymp.logger.debug("#####End recentSearchItemSeleceted", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in recentSearchItemSeleceted : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        searchdataFromAvailableLocationCoordinates: function searchdataFromAvailableLocationCoordinates(data) {
            try {
                konymp.logger.debug("#####Start searchdataFromAvailableLocationCoordinates", konymp.logger.FUNCTION_ENTRY);
                var responseToReturn = {
                    coords: {
                        latitude: data.lat,
                        longitude: data.lng
                    }
                };
                this.storeSearchData(data);
                this.getCurrentLocationCoordinatesSuccessCallback(responseToReturn);
                konymp.logger.debug("#####End searchdataFromAvailableLocationCoordinates", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in searchdataFromAvailableLocationCoordinates : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        customPinClick: function customPinClick(location) {
            try {
                konymp.logger.debug("#####Start customPinClick", konymp.logger.FUNCTION_ENTRY);
                if (this.view.flxShiftViews.bottom === "5%") {
                    this.animateShiftViews("28%", 0.25, 0);
                    this.view.listMapView.hideOrUnhideMapSegmentCallout("10", 0.25, 0.05);
                }
                konymp.logger.debug("#####End customPinClick", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in customPinClick : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        animateShiftViews: function animateShiftViews(bottomValue, time, delay) {
            try {
                konymp.logger.debug("#####Start animateShiftViews", konymp.logger.FUNCTION_ENTRY);
                this.view.flxShiftViews.animate(
                    kony.ui.createAnimation({
                        "100": {
                            "bottom": bottomValue,
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE_OUT
                            }
                        }
                    }), {
                        "delay": delay,
                        "iterationCount": 1,
                        "fillMode": kony.anim.FILL_MODE_FORWARDS,
                        "duration": time
                    }, {
                        "animationEnd": function() {}
                    });
                konymp.logger.debug("#####End animateShiftViews", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in animateShiftViews : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        mapClickOrChangeView: function mapClickOrChangeView() {
            try {
                konymp.logger.debug("#####Start mapClickOrChangeView", konymp.logger.FUNCTION_ENTRY);
                if (this.view.flxShiftViews.bottom !== "5%") {
                    this.animateShiftViews("5%", 0.25, 0.05);
                    this.view.listMapView.hideOrUnhideMapSegmentCallout("-250", 0.25, 0);
                }
                konymp.logger.debug("#####End mapClickOrChangeView", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in mapClickOrChangeView : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        enableFilterView: function enableFilterView() {
            try {
                konymp.logger.debug("#####Start enableFilterView", konymp.logger.FUNCTION_ENTRY);
                this.filterData = this.view.filterScreen.getAppliedFilter();
                this.animateFilterView("0%", 0, 0.25);
                konymp.logger.debug("#####End enableFilterView", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in enableFilterView : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        animateFilterView: function animateFilterView(topValue, delay, time) {
            try {
                konymp.logger.debug("#####Start animateFilterView", konymp.logger.FUNCTION_ENTRY);
                this.view.filterScreen.animate(
                    kony.ui.createAnimation({
                        "100": {
                            "top": topValue,
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE_OUT
                            }
                        }
                    }), {
                        "delay": delay,
                        "iterationCount": 1,
                        "fillMode": kony.anim.FILL_MODE_FORWARDS,
                        "duration": time
                    }, {
                        "animationEnd": function() {}
                    });
                konymp.logger.debug("#####End animateFilterView", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in animateFilterView : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        cancelFilter: function cancelFilter() {
            try {
                konymp.logger.debug("#####Start cancelFilter", konymp.logger.FUNCTION_ENTRY);
                this.animateFilterView("100%", 0, 0.25);
                if (this.filterData) {
                    this.view.filterScreen.setDatatoFilterScreen(this.filterData);
                } else {
                    this.view.filterScreen.resetFilters();
                }
                konymp.logger.debug("#####End cancelFilter", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in cancelFilter : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        applyFilter: function applyFilter(filterSortDetails) {
            try {
                konymp.logger.debug("#####Start placeLocator applyFilter", konymp.logger.FUNCTION_ENTRY);
                this.animateFilterView("100%", 0, 0.25);
                konymp.logger.info("##### data to set : " + JSON.stringify(filterSortDetails), konymp.logger.DEFAULT);
                konymp.logger.info("##### data of map :" + JSON.stringify(this.serviceData.locationData), konymp.logger.DEFAULT);
                konymp.logger.info("##### data of segment :" + JSON.stringify(this.serviceData.segmentData), konymp.logger.DEFAULT);
                kony.application.showLoadingScreen("", "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
                var filteredData = this.applyfilterLevel(filterSortDetails, [this.serviceData.locationData, this.serviceData.segmentData]);
                var sortedData = this.applySortLevel(filterSortDetails, filteredData);
                var selectedType = this.view.menuComponent.getSelectedCategory();
                var formattedData = {
                    "segmentData": sortedData[1],
                    "locationData": sortedData[0],
                    "segmentWidgetMapping": null
                };
                this.view.listMapView.mapDataToSegmentAndMap(formattedData, null, selectedType[1][0], selectedType[4][0], false);
                kony.application.dismissLoadingScreen();
                konymp.logger.debug("#####End placeLocator applyFilter", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                kony.application.dismissLoadingScreen();
                konymp.logger.error("#####Exception in applyFilter : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        applyfilterLevel: function applyfilterLevel(filterSortDetails, data) {
            try {
                konymp.logger.debug("#####Start applyfilterLevel", konymp.logger.FUNCTION_ENTRY);
                var dataLength = data[0].length;
                var returnData = [];
                returnData[0] = [];
                returnData[1] = [];
                for (var i = 0; i < dataLength; i++) {
                    if (data[0][i].calloutData.index === null || data[0][i].calloutData.index === undefined) {
                        returnData[0].push(data[0][i]);
                    } else {
                        if (data[0][i].calloutData.Rating !== null && data[0][i].calloutData.Rating !== undefined && parseInt(data[0][i].calloutData.Rating) >= filterSortDetails.ratingOption) {
                            if (filterSortDetails.openNowOption === true && data[0][i].calloutData.lblTiming === "Open") {
                                returnData[0].push(data[0][i]);
                                returnData[1].push(data[1][data[0][i].calloutData.index]);
                            } else if (filterSortDetails.openNowOption === false) {
                                returnData[0].push(data[0][i]);
                                returnData[1].push(data[1][data[0][i].calloutData.index]);
                            }
                        } else if (filterSortDetails.ratingOption === null) {
                            if (filterSortDetails.openNowOption === true && data[0][i].calloutData.lblTiming === "Open") {
                                returnData[0].push(data[0][i]);
                                returnData[1].push(data[1][data[0][i].calloutData.index]);
                            } else if (filterSortDetails.openNowOption === false) {
                                returnData[0].push(data[0][i]);
                                returnData[1].push(data[1][data[0][i].calloutData.index]);
                            }
                        }
                    }
                }
                konymp.logger.debug("#####End applyfilterLevel", konymp.logger.FUNCTION_ENTRY);
                return returnData;
            } catch (exception) {
                kony.application.dismissLoadingScreen();
                konymp.logger.error("#####Exception in applyfilterLevel : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        applySortLevel: function applySortLevel(filterSortDetails, data) {
            try {
                konymp.logger.debug("#####Start applySortLevel", konymp.logger.FUNCTION_ENTRY);
                var returnData = [];
                returnData[0] = [];
                returnData[1] = [];
                switch (filterSortDetails.sortOption) {
                    case "BestSort":
                        returnData = [data[0], data[1].sort(this.sortBy("index"))];
                        break;
                    case "RatingSort":
                        returnData = [data[0], data[1].sort(this.sortBy("Rating"))];
                        break;
                    case "AZSort":
                        returnData = [data[0], data[1].sort(this.sortBy("lblPlaceName"))];
                        break;
                    case "PriceSort":
                        alert("currently price is not available");
                        returnData = [data[0], data[1]];
                        break;
                    default:
                        returnData = [data[0], data[1]];
                        break;
                }
                konymp.logger.debug("#####End applySortLevel", konymp.logger.FUNCTION_ENTRY);
                return returnData;
            } catch (exception) {
                kony.application.dismissLoadingScreen();
                konymp.logger.error("#####Exception in applySortLevel : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        sortBy: function sortBy(prop) {
            return function(a, b) {
                if (a[prop] > b[prop]) {
                    return 1;
                } else if (a[prop] < b[prop]) {
                    return -1;
                }
                return 0;
            };
        },
        getPlaceDetailsFromList: function getPlaceDetailsFromList(placeDetails) {
            try {
                konymp.logger.debug("#####Start getPlaceDetailsFromList", konymp.logger.FUNCTION_ENTRY);
                if (this.getPlaceDetails) {
                    this.getPlaceDetails(placeDetails);
                }
                konymp.logger.debug("#####End getPlaceDetailsFromList", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in getPlaceDetailsFromList : " + exception.message, konymp.logger.EXCEPTION);
            }
        }
    };
});