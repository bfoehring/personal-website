checkAuth();

function checkAuth() {
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	  	console.log(user);
	  } else {
	   	console.log("not logged in");
	   	location.assign("index.html");
	  }
	});
}