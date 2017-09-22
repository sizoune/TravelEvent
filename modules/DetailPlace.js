//Type your code here
var GOOGLE_API_KEY = "AIzaSyA9ZiU5azNIAPKnHDPWtz3LPXDn0ACWi9E";
var placeid;
var URL = "https://maps.googleapis.com/maps/api/place/details/json?placeid="+placeid+"&key="+GOOGLE_API_KEY;
var photos, lblNama, lblRating, lblHarga, lblLokasi;

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