checkAuth();

function checkAuth() {
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	  	console.log(user);
		$(".nav-link").on("click", browseFreely);
	  } else {
	   	console.log("not logged in");
	   	$(".nav-link").on("click", hideContent);
	  }
	});
}

$(".cancel").on("click", hideLog);
$(".vert-form").on("submit", doAuth);

function hideContent() {
	$(".content-contain").addClass("content-contain-hidden");
	setTimeout(function() {
		toggleVisCont();
	}, 200);
}

function toggleVisCont() {
	$(".content-contain-hidden").css("display", "none");
	showForm();
}

function showForm() {
	$(".login-contain").css("display", "block");
	setTimeout(function() {
		toggleLogCont();
	}, 50);
}

function toggleLogCont() {
	$(".login-contain").addClass("login-contain-visible");
}

function hideLog() {
	$(".login-contain").removeClass("login-contain-visible");
	setTimeout(function() {
		toggleVisLog();
	}, 200);
}

function toggleVisLog() {
	$(".login-contain").css("display", "none");
	showCont();
}

function showCont() {
	$(".content-contain-hidden").css("display", "block");
	setTimeout(function() {
		toggleVisContOn();
	}, 50);
}

function toggleVisContOn() {
	$(".content-contain").removeClass("content-contain-hidden");
}

function browseFreely() {
	location.assign("work-landing.html");
}

function doAuth(e) {

	e.preventDefault();

	var email = $("#email").val();
	var password = $("#password").val();

	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

	  var errorCode = error.code;
	  var errorMessage = error.message;

	  if(errorCode) {
	  	console.log(errorCode);
	  } else {
	  	console.log(errorMessage);
	  } 

	});

	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	  	console.log(user);
	  	location.assign("work-landing.html");
	  } else {
	   	console.log("not logged in");
	  }
	});

}





