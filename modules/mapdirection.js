var mapRef;

//Type your code here
function getDirectionArah() {
  mapRef = this.view.mapDirection;
  var data = kony.store.getItem("direction");
  //   alert(data);
  kony.application.openURL("https://maps.google.com/?saddr="+data.latasal+","+data.lngasal+"&daddr="+data.latakhir+","+data.lngakhir);
}