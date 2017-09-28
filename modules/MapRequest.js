//Type your code here

var GOOGLE_API_KEY = "AIzaSyBhcP9YePJeT1FlMOcgH7WB9_b-teG7Uvc";
var TokenEventBrite = "HJ2XDA3GTYZATXHBWOZB";



var locNow;
var latitude;
var longitude;
var segTourist;
var segEvent;
var datPlace = [];
var placeId = [];

function getCurrentLocation(){
  kony.location.getCurrentPosition(successcallback, errorcallback);
  locNow = this.view.lblLokasiSekarang;
  segTourist = this.view.sgmRekomendasi;
  segEvent = this.view.segRekomendasiAcara;
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

function getEvent(){
  var requestMethod = constants.HTTP_METHOD_GET;
  var async = true;
  var urlEvent = "https://www.eventbriteapi.com/v3/events/search?location.latitude=";
  urlEvent = urlEvent.concat(latitude);
  urlEvent = urlEvent.concat("&location.longitude=");
  urlEvent = urlEvent.concat(longitude);
  urlEvent = urlEvent.concat("&token=");
  urlEvent = urlEvent.concat(TokenEventBrite);
  //   +latitude+"&location.longitude="+longitude+"&token="+TokenEventBrite;
  var httpRequestEvent = new kony.net.HttpRequest();
  httpRequestEvent.open(requestMethod, urlEvent,async);
  httpRequestEvent.setRequestHeader("Content-Type", "application/json");
  httpRequestEvent.send();
  httpRequestEvent.onReadyStateChange = function(){ HandleResponseEvent(httpRequestEvent) };
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
		getEvent();

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

        //         alert(segTourist.data);
        segTourist.widgetDataMap = {imgRekomendasi:"imgRekomendasi",lblNama:"lblNama",lblRating:"lblRating",lblPrice:"lblPrice",lblDistance:"lblDistance"};
        var uriimage = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400";
        for(i=0; i<lengthObject; i++){
          var gambar = poi[i]['photos'];
          var refPhoto;
          try{
            refPhoto= gambar[0]['photo_reference'];
          } catch(Exc) {
            refPhoto = "";
          }
          placeId.push(poi[i]['place_id'])
          //           alert(refPhoto);
          var name = poi[i]['name'];
          var rating = poi[i]['rating'];
          var price = 0;
          var distance = 0;
          var uri2 = uriimage.concat("&photoreference="+refPhoto);
          var uri3 = uri2.concat("&key=");
          var uri4 = uri3.concat(GOOGLE_API_KEY);
          var dati = {imgRekomendasi:uri4 ,lblNama:name,lblRating:rating,lblPrice:price,lblDistance:distance};
          datPlace.push(dati)
        }
        segTourist.setData(datPlace);
      }
      return;
    }
    else
    {

    }
  }

}

function HandleResponseEvent(objPoi){
  //   alert(objPoi);
  if(objPoi.readyState == 4 )
  {
    if (objPoi.response != null && objPoi.response != "")
    {
      //       alert(obj.response);
      var jsonObj = objPoi.response;

      if('error' in jsonObj){

        var obj = jsonObj['error']['message'];

      }else{

        var poi = jsonObj['events'];
        var lengthObject = Object.keys(poi).length;
        segEvent.widgetDataMap = {imgEvents:"imgEvents",lblNama:"lblNama",lblDatenTime:"lblDatenTime",lblDistance:"lblDistance",lblPrice:"lblPrice"};

        var datc = [];
        for(i=0; i<6; i++){

          var image = poi[i]['logo']['original']['url'];
          var dnt = poi[i]['start']['local']+"-"+poi[i]['end']['local'];
          var name = poi[i]['name']['text'];
          var price = 0;
          var distance = 0;
          var dati = {imgEvents:image ,lblNama:name,lblDatenTime:dnt,lblDistance:distance,lblPrice:price};
          datc.push(dati)

        }
        segEvent.setData(datc);
      }
      return;
    }
    else
    {

    }
  }

}


function klikRowutama() {
  var segSelectedIndex = segTourist.selectedIndex[1];
  kony.store.setItem("place_id", placeId[segSelectedIndex]);
  var ntf = new kony.mvc.Navigation("frmDetailPlace");
  ntf.navigate();
}

function cekAuth(){
  var status = kony.store.getItem("status");
  if (status == "berhasil"){
    alert("Anda sudah login");
  }   
  else{
    var ntf = new kony.mvc.Navigation("frmOptionLoginSingup");
  	ntf.navigate();
  }
}
