$(".nav-link").on("click", hideContent);
$(".cancel").on("click", hideLog);

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