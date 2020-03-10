const error_p = document.querySelector('.error-p');
const error_img = document.querySelector('.error-img');
const email = document.querySelector('#email');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
	let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let word = email.value;

	if (!re.test(word)) {
		error_img.style.display = 'block';
		error_p.style.display = 'block';
		email.style.border = '2px solid hsl(0, 93%, 68%)';
	} else {
		error_img.style.display = 'none';
		error_p.style.display = 'none';
		email.style.border = '1px solid hsl(0, 80%, 86%)';
	}
});
