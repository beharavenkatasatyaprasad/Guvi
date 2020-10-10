function navBarResponsive(event) {
	event.preventDefault();
	var x = document.querySelector("#myTopnav");
	if (x.className === "topnav") {
		x.classList.add("responsive");
	} else {
		x.classList.add("topnav");
	}
}
//Adding action listener to nav bar
var $headerIcon = document.querySelector(".icon");
$headerIcon.addEventListener("click", navBarResponsive);

var formSubmit = document.querySelector(".signUpForm");
formSubmit.addEventListener("submit", function (event) {
	alert("Thanks for signing up ");
});
