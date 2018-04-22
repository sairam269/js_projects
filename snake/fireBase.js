function FireBase(){

	var config = {
      apiKey: "AIzaSyD_iLdJw0D9lkR4CCqiBtySBV_9J6RKP5o",
      authDomain: "gamecorner-798d9.firebaseapp.com",
      databaseURL: "https://gamecorner-798d9.firebaseio.com",
      projectId: "gamecorner-798d9",
      storageBucket: "",
      messagingSenderId: "693722441087"
    };
  firebase.initializeApp(config);
  var storage = firebase.storage();
  var dataBase=firebase.database();

  this.fireBaseStore=function(gameName,score,user){
    var ref=database.ref("score"+gameName);
    var data={
      user:score
    }
  }
  ref.push(data);
}