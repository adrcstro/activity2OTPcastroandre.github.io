const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

let otp;

function sendOTP() {
	// Get the email address and generate a random 6-digit OTP code
	const email = document.getElementById('email').value;
	otp = Math.floor(100000 + Math.random() * 900000);

	// Show the OTP code in an alert
	alert(`Your OTP code is ${otp}.`);

	// Enable the OTP input field
	document.getElementById('otp').removeAttribute('disabled');
}

function verifyOTP() {
	// Get the OTP code from the input field
	const inputOTP = document.getElementById('otp').value;

	// Validate the OTP code
	if (inputOTP === "") {
		alert("Please enter the OTP code.");
		return;
	}

	if (inputOTP !== otp.toString()) {
		alert("Invalid OTP code.");
		return;
	}

	alert("OTP code verified successfully!");

	// Enable the login button
	document.getElementsByTagName('button')[2].removeAttribute('disabled');
}

function login() {
	// Get the username, password, email, and OTP code
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const email = document.getElementById('email').value;
	const inputOTP = document.getElementById('otp').value;

	// Validate the username, password, email, and OTP code
	if (username === "" || password === "" || email === "" || inputOTP === "") {
		alert("Please Enter the OTP-Code Before you login.");
		return;
	}

	if (inputOTP !== otp.toString()) {
		alert("Please verify the OTP code.");
		return;
	}

	// TODO: Validate the username and password against the database
	alert("Login successful!");
}
