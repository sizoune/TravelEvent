//Type your code here
var GOOGLE_API_KEY = "AIzaSyBhcP9YePJeT1FlMOcgH7WB9_b-teG7Uvc";
var placeid;
var URL ;
var photos, lblNama, lblRating, lblHarga, lblLokasi;
var data = [];

// function tampilkanDetail() {
//   //initComponents
//   photos = this.view.imageSlider;
//   lblNama = this.view.lblNama;
//   lblRating = this.view.lblRating;
//   lblHarga = this.view.lblHarga;
//   lblLokasi = this.view.lblLokasi;

//   placeid = kony.store.getItem("place_id");
//   getDetailPlace();
// }


// function getDetailPlace() {
//   var httpRequestPlace = new kony.net.HttpRequest();
//   var requestMethod = constants.HTTP_METHOD_GET;
//   var async = true;
//   httpRequestPlace.open(requestMethod, URL, async);
//   httpRequestPlace.setRequestHeader("Content-Type", "application/json");
//   httpRequestPlace.send();
//   httpRequestPlace.onReadyStateChange = function(){ HandleResponseLoc(httpRequestPlace);};
// }

// function HandleResponseLoc(obj){
//   if(obj.readyState == 4 ){
//     if (obj.response != null && obj.response != ""){
//       alert(obj.response);
//     }
//   }
// }

function getDetailPlace() {
  var httpRequestDetailPlace = new kony.net.HttpRequest();
  var requestMethod = constants.HTTP_METHOD_GET;
  var async = true;
  URL =  "https://maps.googleapis.com/maps/api/place/details/json?placeid="+placeid+"&key="+GOOGLE_API_KEY;
  httpRequestDetailPlace.open(requestMethod, URL, async);
  httpRequestDetailPlace.setRequestHeader("Content-Type", "application/json");
  httpRequestDetailPlace.send();
  httpRequestDetailPlace.onReadyStateChange = function(){ HandleResponseDetailLoc(httpRequestDetailPlace);};
}

function HandleResponseDetailLoc(obj){
  data = [];
  if(obj.readyState == 4 ){
    if (obj.response != null && obj.response != ""){
      var jsonObj = obj.response;
      if('error' in jsonObj){
        var obj = jsonObj['error']['message'];
      }else{
        var detail = jsonObj['result'];
        lblNama.text = detail['name'];
        photos.widgetDataMap = {imgSlider:"imgSlider"};
        var banyakGambar = Object.keys(detail['photos']).length;
        var objPhoto = detail['photos'];
        for(i=0; i<banyakGambar; i++){
          var refPhoto = objPhoto[i]['photo_reference'];
          var uriimage = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400";
          var uri2 = uriimage.concat("&photoreference="+refPhoto);
          var uri3 = uri2.concat("&key=");
          var uri4 = uri3.concat(GOOGLE_API_KEY);
          var dataKe = {imgSlider:uri4};
          data.push(dataKe);
        }
        photos.setData(data);
      }
    }
  }
}

