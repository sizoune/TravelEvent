define(function() {
    var konymp = konymp || {};
    var KonyLoggerModule = require("com/konymp/placelocator/KonyLogger");
    konymp.logger = (new KonyLoggerModule("autosuggest")) || function() {};
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            defineSetter(this, "currentLocationSkin", function(val) {
                konymp.logger.debug("#####Start setter currentLocationSkin #####", konymp.logger.FUNCTION_ENTRY);
                this.view.flxCurrentLocation.skin = val;
                konymp.logger.debug("#####End setter currentLocationSkin #####", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "currentLocationSkin", function() {
                konymp.logger.debug("#####Stat Getter currentLocationSkin #####", konymp.logger.FUNCTION_ENTRY);
                return this.view.flxCurrentLocation.skin;
            });
        },
        currentLocationSelected: function currentLocationSelected() {
            try {
                konymp.logger.debug("#####Start currentLocationSelected#####", konymp.logger.FUNCTION_ENTRY);
                if (this.currentLocationSelectionCallback) {
                    konymp.logger.info("#####currentLocationSelectionCallback#####", konymp.logger.SUCCESS_CALLBACK);
                    this.currentLocationSelectionCallback();
                }
                konymp.logger.debug("#####End currentLocationSelected#####", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in currentLocationSelected : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        getCurrentLocationCoordinates: function getCurrentLocationCoordinates() {
            try {
                konymp.logger.debug("#####Start  getCurrentLocationCoordinates#####", konymp.logger.FUNCTION_ENTRY);
                var positionoptions = {};
                kony.location.getCurrentPosition(this.getCurrentLocationCoordinatesSuccessCallback.bind(this), this.getCurrentLocationCoordinatesErrorCallback.bind(this), positionoptions);
                konymp.logger.debug("#####End  getCurrentLocationCoordinates#####", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                kony.application.dismissLoadingScreen();
                konymp.logger.error("#####Exception in getCurrentLocationCoordinates : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        getCurrentLocationCoordinatesSuccessCallback: function getCurrentLocationCoordinatesSuccessCallback(response) {
            try {
                konymp.logger.debug("#####Start getCurrentLocationCoordinatesSuccessCallback#####", konymp.logger.FUNCTION_ENTRY);
                if (this.fetchCurrentLocationSuccess) {
                    konymp.logger.debug("#####Success call back of getCurrentLocation#####", konymp.logger.SUCCESS_CALLBACK);
                    this.fetchCurrentLocationSuccess(response);
                }
                konymp.logger.debug("#####End getCurrentLocationCoordinatesSuccessCallback#####", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                kony.application.dismissLoadingScreen();
                konymp.logger.error("#####Exception in getCurrentLocationCoordinatesSuccessCallback : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        getCurrentLocationCoordinatesErrorCallback: function getCurrentLocationCoordinatesErrorCallback(error) {
            try {
                konymp.logger.debug("#####Start getCurrentLocationCoordinatesErrorCallback#####", konymp.logger.FUNCTION_ENTRY);
                kony.application.dismissLoadingScreen();
                if (this.fetchCurrentLocationFailure) {
                    konymp.logger.debug("#####Error call back of getCurrentLocation#####", konymp.logger.ERROR_CALLBACK);
                    this.fetchCurrentLocationFailure(error);
                }
                konymp.logger.debug("#####End getCurrentLocationCoordinatesErrorCallback#####", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in getCurrentLocationCoordinatesErrorCallback : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        dataSelected: function dataSelected(rowNumber) {
            try {
                konymp.logger.debug("#####Start dataSelected#####", konymp.logger.FUNCTION_ENTRY);
                if (this.addressSelected) {
                    var segData = this.view.flxSuggestion.segAutosuggest.data[rowNumber];
                    this.addressSelected(segData);
                }
                konymp.logger.debug("#####End dataSelected#####", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in dataSelected : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        setDataToSegment: function setDataToSegment(data, dataMappingObject) {
            try {
                konymp.logger.debug("#####Start  setDataToSegment#####", konymp.logger.FUNCTION_ENTRY);
                this.view.segAutosuggest.widgetDataMap = dataMappingObject;
                this.view.segAutosuggest.setData(data);
                konymp.logger.debug("#####End setDataToSegment#####", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in dataSelected : " + exception.message, konymp.logger.EXCEPTION);
            }
        }
    };
});