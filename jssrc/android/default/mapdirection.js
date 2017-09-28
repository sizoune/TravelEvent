var mapRef;
//Type your code here
function getDirectionArah() {
    mapRef = this.view.mapDirection;
    var data = kony.store.getItem("direction");
    //   alert(data);
    var startLoc = {
        lat: data.latasal,
        lon: data.lngasal,
        image: {
            source: "location_icon.png",
            anchor: kony.map.PIN_IMG_ANCHOR_CENTER
        }
    };
    var endLoc = {
        lat: data.latakhir,
        lon: data.lngakhir,
        image: {
            source: "location.png",
            anchor: kony.map.PIN_IMG_ANCHOR_CENTER
        }
    };
    polylineData = {
        id: 1,
        locations: steps,
        startLocation: startLoc,
        endLocation: endLoc,
        polylineConfig: {
            lineWidth: 5,
            lineColor: color
        }
    };
    mapRef.addPolyline(polylineData);
}