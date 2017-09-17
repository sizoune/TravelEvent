//Type your code here
var GOOGLE_API_KEY = "AIzaSyA9ZiU5azNIAPKnHDPWtz3LPXDn0ACWi9E";
var locNow;
var latitude;
var longitude;
var segTourist;
function getCurrentLocation(){
  kony.location.getCurrentPosition(successcallback, errorcallback);
  locNow = this.view.lblLokasiSekarang;
  segTourist = this.view.sgmRekomendasi;
}

function getNearbyPlace(){
//   kony.location.getCurrentPosition(successcallbackNearby, errorcallback);
  successcallbackNearby();
}

function successcallback(location){
  latitude = location.coords.latitude;
  longitude = location.coords.longitude;
  var urlPlace = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude;
  var httpRequestPlace = new kony.net.HttpRequest();
  var requestMethod = constants.HTTP_METHOD_GET;
  var async = true;
  httpRequestPlace.open(requestMethod, urlPlace,async);
  httpRequestPlace.setRequestHeader("Content-Type", "application/json");
  httpRequestPlace.send();
  httpRequestPlace.onReadyStateChange = function(){ HandleResponseLoc(httpRequestPlace) };
}

function successcallbackNearby(){
//   alert(latitude);
  var urlPoi = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+latitude+","+longitude+"&radius=500&types=poi&key="+GOOGLE_API_KEY;
  var httpRequestPoi = new kony.net.HttpRequest();
  var requestMethod = constants.HTTP_METHOD_GET;
  var async = true;
  httpRequestPoi.open(requestMethod, urlPoi,async);
  httpRequestPoi.setRequestHeader("Content-Type", "application/json");
  httpRequestPoi.send();
  httpRequestPoi.onReadyStateChange = function(){ HandleResponsePoi(httpRequestPoi) };
}

function requestPhotoSegment(reference){
  var url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+reference+"&key="+GOOGLE_API_KEY;
  var httpRequestPoi = new kony.net.HttpRequest();
//   var requestMethod = 
}

function errorcallback(error){
  alert("Error occurred"+ JSON.stringify(error));
}

function HandleResponseLoc(obj){
  if(obj.readyState == 4 )
  {
    if (obj.response != null && obj.response != "")
    {
      //       alert(obj.response);
      var jsonObj = obj.response;

      if('error' in jsonObj){

        var obj = jsonObj['error']['message'];

      }else{
//         alert(obj);
        var loc = jsonObj['results'][0];
        var panjangObject = Object.keys(jsonObj['results']).length;
//         alert(panjangObject);
        var address = loc['formatted_address'];
        locNow.text = address;
        successcallbackNearby();
        //         alert(this.view.lblTourist.text);
        //         this.view.lblLokasiSekarang.text = loc;
        //         frmTourist.lblLokasiSekarang.text = loc;
      }
      return;
    }
    else
    {

    }
  }
}

function HandleResponsePoi(objPoi){
  if(objPoi.readyState == 4 )
  {
    if (objPoi.response != null && objPoi.response != "")
    {
      //       alert(obj.response);
      var jsonObj = objPoi.response;

      if('error' in jsonObj){

        var obj = jsonObj['error']['message'];

      }else{
        
        var poi = jsonObj['results'];
        var lengthObject = Object.keys(poi).length;
//         alert(loc);
        var refPhoto = poi[1]['reference'];
        var name = poi[1]['name'];
        var rating = poi[1]['rating'];
        var price = 0;
        var distance = 0;
//         alert(segTourist.data);
        segTourist.widgetDataMap = {imgRekomendasi:"imgRekomendasi",lblNama:"lblNama",lblRating:"lblRating",lblPrice:"lblPrice",lblDistance:"lblDistance"};
        var image = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+refPhoto+"&key="+GOOGLE_API_KEY;
        var im = image+"&key="+GOOGLE_API_KEY;
        var uriimage = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=";
        var uri2 = uriimage.concat(refPhoto);
        var uri3 = uri2.concat("&key=");
        var uri4 = uri3.concat(GOOGLE_API_KEY)
//         var image = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyA9ZiU5azNIAPKnHDPWtz3LPXDn0ACWi9E";
        alert(image);
        var dataCoba = [{imgRekomendasi:image ,lblNama:name,lblRating:rating,lblPrice:price,lblDistance:distance}];
//         segTourist.addAll({imgRekomendasi:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+refPhoto+"&key="+GOOGLE_API_KEY,lblNama:name,lblRating:rating,lblPrice:price,lblDistance:distance});
        segTourist.setData(dataCoba);
//         for(i=1; i<=1; i++){
//           alert(poi[i]);
          
//         }
//         var address = loc['formatted_address'];
//         locNow.text = address;
        //         alert(this.view.lblTourist.text);
        //         this.view.lblLokasiSekarang.text = loc;
        //         frmTourist.lblLokasiSekarang.text = loc;
      }
      return;
    }
    else
    {

    }
  }

}