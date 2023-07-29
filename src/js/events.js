import variables from "./variables.js";

const { btnBurger, navMobile, btnCloseBurger, navLinks } = variables;

btnBurger.addEventListener("click", () => {
	navMobile.classList.add('open-menu');
	document.documentElement.style.cssText = 'overflow:hidden';
});

btnCloseBurger.addEventListener("click", () => {
	navMobile.classList.remove('open-menu');
	document.documentElement.style.cssText = '';
});

Array.from(navLinks).map(link => {
	link.addEventListener('click', () => {
		navMobile.classList.remove('open-menu');
		document.documentElement.style.cssText = '';
	})
});

navMobile.addEventListener('click', (e) => {
	if (e.target.classList.contains('open-menu')) {
		navMobile.classList.remove('open-menu');
		document.documentElement.style.cssText = '';
	}
})

