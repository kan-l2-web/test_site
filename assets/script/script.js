let displaySize = document.querySelector('.display-size');
const submitBtn = document.getElementById('submit');
const password = document.getElementById('passw');



const displayWidth = window.innerWidth;
const displayHeight = window.innerHeight;

displaySize.innerHTML = `<p>${displayWidth} X ${displayHeight}</p>`;

password.addEventListener('input', function(e) {
	let form = document.forms.form;

	console.log(form.elements.passw.value);
});
