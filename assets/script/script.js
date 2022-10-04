let displaySize = document.querySelector('.display-size');
const submitBtn = document.getElementById('submit');
const password = document.getElementById('passw');



const displayWidth = document.body.clientWidth;
const displayHeight = document.body.clientHeight;

displaySize.innerHTML = `<p>${displayWidth} x ${displayHeight}</p>`;

password.addEventListener('input', function(e) {
	let form = document.forms.form;

	console.log(form.elements.passw.value);
});
