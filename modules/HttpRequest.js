//Type your code here

function signup(){
  var email = this.view.txtEmail.text;
  var password = this.view.txtPassword.text;
  var url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCCMR1pmvXBNKWaMCdqowcOO2lXNC9PWrA";
  if(email === null || password === null){
    alert("Please fill email and password!");
  } else{
    if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad" )
      kony.application.showLoadingScreen("loadingscreen","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
    else
      kony.application.showLoadingScreen("loadingscreen","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);

    kony.timer.schedule("timerDismissLS", disLoadScrnAsync, 14,false);	
    var httpRequest = new kony.net.HttpRequest();
    var requestMethod = constants.HTTP_METHOD_POST;
    var async = true;
    httpRequest.open(requestMethod, url,async);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    var postdata = {
      "email": email,
      "password": password,
      "returnSecureToken": true};
    var jsonStr1 = JSON.stringify(postdata); 
    httpRequest.send(jsonStr1);
    //   httpclient2.send();
    httpRequest.onReadyStateChange = function(){ HandleResponseSign(httpRequest) }; 
  }
  //   var password = frmSignUp.txtPassword.text;
  //   if(email === "" || password === ""){
  //     alert("Please fill email and password!");
  //   }
  //   var httpclient2 = new kony.net.HttpRequest();
  //   var requestMethod = constants.HTTP_METHOD_GET;
  //   var async = true;
  //   httpclient2.open(requestMethod, url,async);
  //   httpclient2.setRequestHeader("Content-Type", "application/json");
  //   var postdata = {
  //     "userId": email,
  //     "password": password};
  //   httpclient2.send();
  //   httpclient2.onReadyStateChange = function(){ HandleResponce(httpclient2) }; 
}

function HandleResponseSign(obj)
{
  //   alert(obj.response);
  //    alert("Getting data "+obj.readyState+"   Status "+obj.status+" Response "+obj.response );
  if(obj.readyState == 4 )
  {
    if (obj.response != null && obj.response != "")
    {
//       alert(obj.response);
      var jsonObj = obj.response;

      if('error' in jsonObj){
        kony.timer.cancel("timerDismissLS");
        flag =0;
        kony.application.dismissLoadingScreen();	
        var obj = jsonObj['error']['message'];
        
        if(obj == "EMAIL_EXISTS"){
          alert("Email has been registered, please use another account!");
        }
      }else{
        kony.timer.cancel("timerDismissLS");
        flag =0;
        kony.application.dismissLoadingScreen();	
        var ntf = new kony.mvc.Navigation("frmLogin");
        ntf.navigate();
      }
      return;
    }
    else
    {

    }
  }
  //   else{
  //      var state = obj.status;
  //      alert("Readystate "+obj.readyState+"  Status = "+state);
  //     }

  //     if (obj.response != null && obj.response != "")
  //      {
  //         var jsonObj = obj.response;
  //         handleResponseOption(1,jsonObj);
  //      }
}

function disLoadScrnAsync()
{
// 	kony.print("current form is "+ JSON.stringify(kony.application.getCurrentForm().id));
// 	if(kony.application.getCurrentForm().id == "frmAsyncData")
// 	{
		kony.application.dismissLoadingScreen();
		httpRequest.abort();
// 	}
	kony.timer.cancel("timerDismissLS");
	flag =0;
}