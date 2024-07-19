import 'normalize.css';
import './styles/main.scss';


// Smooth Scroll

const links = document.querySelectorAll(".header__link, .footer__link");

for (const link of links) {
	link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
	e.preventDefault();
	const href = this.getAttribute("href");

	document.querySelector(href).scrollIntoView({
		behavior: "smooth"
	});
}

//Выпадашка

const formMessengerExample = document.getElementById('formMessengerExample');
const formMessengerList = document.getElementById('formMessengerList');
const dropdownLinks = formMessengerList.querySelectorAll('a');

formMessengerExample.addEventListener('click', function () {
	if (formMessengerList.style.display === 'block') {
		formMessengerList.style.display = 'none';
		formMessengerExample.classList.remove('rotate-180');
	} else {
		formMessengerList.style.display = 'block';
		formMessengerExample.classList.add('rotate-180');
	}
});

dropdownLinks.forEach(link => {
	link.addEventListener('click', function (event) {
		event.preventDefault();
		formMessengerExample.textContent = this.dataset.value;
		formMessengerList.style.display = 'none';
		formMessengerExample.classList.remove('rotate-180');
	});
});

window.addEventListener('click', function (event) {
	if (!event.target.matches('.form__messenger-cont')) {
		if (formMessengerList.style.display === 'block') {
			formMessengerList.style.display = 'none';
			formMessengerExample.classList.remove('rotate-180');
		}
	}
});

//Выпадашка Popap

const formMessengerExamplePopup = document.getElementById('formMessengerExamplePopup');
const formMessengerListPopup = document.getElementById('formMessengerListPopup');
const dropdownLinksPopup = formMessengerListPopup.querySelectorAll('a');

formMessengerExamplePopup.addEventListener('click', function () {
	if (formMessengerListPopup.style.display === 'block') {
		formMessengerListPopup.style.display = 'none';
		formMessengerExamplePopup.classList.remove('rotate-180');
	} else {
		formMessengerListPopup.style.display = 'block';
		formMessengerExamplePopup.classList.add('rotate-180');
	}
});

dropdownLinksPopup.forEach(link => {
	link.addEventListener('click', function (event) {
		event.preventDefault();
		formMessengerExamplePopup.textContent = this.dataset.value;
		formMessengerListPopup.style.display = 'none';
		formMessengerExamplePopup.classList.remove('rotate-180');
	});
});

window.addEventListener('click', function (event) {
	if (!event.target.matches('.form__messenger-cont')) {
		if (formMessengerListPopup.style.display === 'block') {
			formMessengerListPopup.style.display = 'none';
			formMessengerExamplePopup.classList.remove('rotate-180');
		}
	}
});
