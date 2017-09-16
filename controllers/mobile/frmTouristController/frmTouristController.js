define({ 

 //Type your controller code here 
  lokasiSekarang: function() {
    kony.location.getCurrentPosition(successcallback, errorcallback);
  },
  
  successcallback:function() {
    var latitude = location.coords.latitude;
  	var longitude = location.coords.longitude;
  	var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude;
  	var httpRequest = new kony.net.HttpRequest();
  	var requestMethod = constants.HTTP_METHOD_GET;
  	var async = true;
  	httpRequest.open(requestMethod, url,async);
  	httpRequest.setRequestHeader("Content-Type", "application/json");
  	httpRequest.send();
  	httpRequest.onReadyStateChange = function(){ HandleResponseLoc(httpRequest); }
  },
  
  errorcallback:function() {
    alert("Error occurred"+ JSON.stringify(error));
  },
  
  HandleResponseLoc:function(obj) {
    if(obj.readyState == 4 )
  {
    if (obj.response != null && obj.response != "")
    {
      //       alert(obj.response);
      var jsonObj = obj.response;

      if('error' in jsonObj){

        var obj = jsonObj['error']['message'];

      }else{
        var loc = jsonObj['results'][0];
        var address = loc['formatted_address'];
        alert(address);
        alert(this.view.lblTourist.text);
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

 });