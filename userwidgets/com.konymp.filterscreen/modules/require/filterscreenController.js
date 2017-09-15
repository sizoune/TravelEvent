define(function() {
    var konymp = konymp || {};
    var KonyLoggerModule = require("com/konymp/placelocator/KonyLogger");
    konymp.logger = (new KonyLoggerModule("filterscreen")) || function() {};
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {

        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {

        },
        changeSortSelection: function changeSortSelection(eventObject) {
            try {
                konymp.logger.debug("#####Start changeSortSelection", konymp.logger.FUNCTION_ENTRY);
                var sortOptions = ["lblBestSort", "lblRatingSort", "lblPriceSort", "lblAZSort"];
                var sortOptionsCount = sortOptions.length;
                for (var i = 0; i < sortOptionsCount; i++) {
                    if (sortOptions[i] === eventObject.id) {
                        this.view.flxSortOptions[sortOptions[i]].skin = "sknBGLbl018ad1FontFFFFFFNunitoR91";
                    } else {
                        this.view.flxSortOptions[sortOptions[i]].skin = "sknLblbdc3c7NunitoR91";
                    }
                }
                konymp.logger.debug("#####End changeSortSelection", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in changeSortSelection : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        starRating: function starRating(eventObject) {
            try {
                konymp.logger.debug("#####Star startRating", konymp.logger.FUNCTION_ENTRY);
                var ratingCount = parseInt(eventObject.id.slice(-1));
                for (var i = 0; i < 5; i++) {
                    if ((i + 1) <= ratingCount) {
                        this.view["imgRating" + (i + 1)].src = "star_full.png";
                    } else {
                        this.view["imgRating" + (i + 1)].src = "star_empty.png";
                    }
                }
                konymp.logger.debug("#####End starRating", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in starRating : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        priceFilter: function priceFilter(eventObject) {
            try {
                konymp.logger.debug("#####Start priceFilter", konymp.logger.FUNCTION_ENTRY);
                var priceLevel = parseInt(eventObject.id.slice(-1));
                for (var i = 0; i < 4; i++) {
                    if ((i + 1) === priceLevel) {
                        this.view["lblPriceL" + (i + 1)].skin = "sknLblFont018ad1NunitoR157";
                    } else {
                        this.view["lblPriceL" + (i + 1)].skin = "sknLblFontDBDBDBNunitoR157";
                    }
                }
                konymp.logger.debug("#####End priceFilter", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in priceFilter : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        toggleOpenClose: function toggleOpenClose(eventObject) {
            try {
                konymp.logger.debug("#####Start toggleOpenClose", konymp.logger.FUNCTION_ENTRY);
                if (this.view.flxOpenNow.imgOpen.src === "toggle_on.png") {
                    this.view.flxOpenNow.imgOpen.src = "toggle_off.png";
                } else {
                    this.view.flxOpenNow.imgOpen.src = "toggle_on.png";
                }
                konymp.logger.debug("#####End toggleOpenClose", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in toggleOpenClose : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        resetFilters: function resetFilters() {
            try {
                konymp.logger.debug("#####Start resetFilters", konymp.logger.FUNCTION_ENTRY);
                this.changeSortSelection({
                    "id": "lblBestSort"
                });
                this.starRating({
                    "id": "imgRating0"
                });
                this.priceFilter({
                    "id": "lblPriceL0"
                });
                this.view.flxOpenNow.imgOpen.src = "toggle_off.png";
                konymp.logger.debug("#####End resetFilters", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in resetFilters : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        applyFilter: function applyFilter() {
            try {
                konymp.logger.debug("#####Start applyFilter", konymp.logger.FUNCTION_ENTRY);
                var response = this.getAppliedFilter();
                if (this.customApplyFilter) {
                    this.customApplyFilter(response);
                }
                konymp.logger.info("##### data to return : " + JSON.stringify(response), konymp.logger.DEFAULT);
                konymp.logger.debug("#####End applyFilter", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in applyFilter : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        getAppliedFilter: function getAppliedFilter() {
            try {
                konymp.logger.debug("#####Start getAppliedFilter", konymp.logger.FUNCTION_ENTRY);
                var sortOption = this.getSelecctedSortOption();
                var ratingOption = this.getRatingFilterOption();
                var priceOption = this.getPriceFilterOption();
                var openNowOption;
                if (this.view.flxOpenNow.imgOpen.src === "toggle_on.png") {
                    openNowOption = true;
                } else {
                    openNowOption = false;
                }
                var response = {
                    "sortOption": sortOption,
                    "ratingOption": ratingOption,
                    "priceOption": priceOption,
                    "openNowOption": openNowOption
                };
                konymp.logger.debug("#####End getAppliedFilter", konymp.logger.FUNCTION_EXIT);
                return response;
            } catch (exception) {
                konymp.logger.error("#####Exception in getAppliedFilter : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        getSelecctedSortOption: function getSelecctedSortOption() {
            try {
                konymp.logger.debug("#####Start getSelecctedSortOption", konymp.logger.FUNCTION_ENTRY);
                var sortOptions = ["lblBestSort", "lblRatingSort", "lblPriceSort", "lblAZSort"];
                var sortOptionsCount = sortOptions.length;
                for (var i = 0; i < sortOptionsCount; i++) {
                    if (this.view.flxSortOptions[sortOptions[i]].skin === "sknBGLbl018ad1FontFFFFFFNunitoR91") {
                        return sortOptions[i].slice(3);
                    }
                }
                konymp.logger.debug("#####End getSelecctedSortOption", konymp.logger.FUNCTION_EXIT);
                return null;
            } catch (exception) {
                konymp.logger.error("#####Exception in getSelecctedSortOption : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        getRatingFilterOption: function getRatingFilterOption() {
            try {
                konymp.logger.debug("#####Start getRatingFilterOption", konymp.logger.FUNCTION_ENTRY);
                for (var i = 0; i < 5; i++) {
                    if (this.view["imgRating" + (i + 1)].src === "star_empty.png") {
                        if (i === 0) {
                            return null;
                        }
                        return i;
                    }
                }
                konymp.logger.debug("#####End getRatingFilterOption", konymp.logger.FUNCTION_EXIT);
                return i;
            } catch (exception) {
                konymp.logger.error("#####Exception in getRatingFilterOption : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        getPriceFilterOption: function getPriceFilterOption() {
            try {
                konymp.logger.debug("#####Start getPriceFilterOption", konymp.logger.FUNCTION_ENTRY);
                for (var i = 0; i < 4; i++) {
                    if (this.view["lblPriceL" + (i + 1)].skin === "sknLblFont018ad1NunitoR157") {
                        return (i + 1);
                    }
                }
                konymp.logger.debug("#####End getPriceFilterOption", konymp.logger.FUNCTION_EXIT);
                return null;
            } catch (exception) {
                konymp.logger.error("#####Exception in getPriceFilterOption : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        setDatatoFilterScreen: function setDatatoFilterScreen(setDataJSON) {
            try {
                konymp.logger.debug("#####Start setDatatoFilterScreen", konymp.logger.FUNCTION_ENTRY);
                this.setSelecctedSortOption("lbl" + setDataJSON.sortOption);
                this.setRatingFilterOption(setDataJSON.ratingOption);
                this.setPriceFilterOption(setDataJSON.priceOption);
                var openNowOption;
                if (openNowOption === true) {
                    this.view.flxOpenNow.imgOpen.src = "toggle_on.png";
                } else {
                    this.view.flxOpenNow.imgOpen.src = "toggle_off.png";
                }
                konymp.logger.debug("#####End setDatatoFilterScreen", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in setDatatoFilterScreen : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        setSelecctedSortOption: function setSelecctedSortOption(sortOptionID) {
            try {
                konymp.logger.debug("#####Start setSelecctedSortOption", konymp.logger.FUNCTION_ENTRY);
                var sortOptions = ["lblBestSort", "lblRatingSort", "lblPriceSort", "lblAZSort"];
                var sortOptionsCount = sortOptions.length;
                for (var i = 0; i < sortOptionsCount; i++) {
                    if (sortOptions[i] === sortOptionID) {
                        this.view.flxSortOptions[sortOptions[i]].skin = "sknBGLbl018ad1FontFFFFFFNunitoR91";
                    } else {
                        this.view.flxSortOptions[sortOptions[i]].skin = "sknLblbdc3c7NunitoR91";
                    }
                }
                konymp.logger.debug("#####End setSelecctedSortOption", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in setSelecctedSortOption : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        setRatingFilterOption: function setRatingFilterOption(ratingOptionCount) {
            try {
                konymp.logger.debug("#####Start setRatingFilterOption", konymp.logger.FUNCTION_ENTRY);
                for (var i = 0; i < 5; i++) {
                    if (ratingOptionCount === null || (i + 1) > ratingOptionCount) {
                        this.view["imgRating" + (i + 1)].src = "star_empty.png";
                    } else {
                        this.view["imgRating" + (i + 1)].src = "star_full.png";
                    }
                }
                konymp.logger.debug("#####End setRatingFilterOption", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in setRatingFilterOption : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        setPriceFilterOption: function setPriceFilterOption(filterOptionCount) {
            try {
                konymp.logger.debug("#####Start setPriceFilterOption", konymp.logger.FUNCTION_ENTRY);
                for (var i = 0; i < 4; i++) {
                    if (filterOptionCount === null || filterOptionCount !== (i + 1)) {
                        this.view["lblPriceL" + (i + 1)].skin = "sknLblFontDBDBDBNunitoR157";
                    } else {
                        this.view["lblPriceL" + (i + 1)].skin = "sknLblFont018ad1NunitoR157";
                    }
                }
                konymp.logger.debug("#####End setPriceFilterOption", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error("#####Exception in setPriceFilterOption : " + exception.message, konymp.logger.EXCEPTION);
            }
        }
    };
});