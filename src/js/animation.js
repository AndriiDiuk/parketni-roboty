export const startAnimation = () => {
	gsap.from('.header__title', 1.2, { opacity: 0, x: -100, delay: .1 });
	gsap.from('.header__title-price', 1.5, { opacity: 0, x: -80, delay: .002 });
	gsap.from('.phone-number', 1.2, { opacity: 0, x: 20, delay: .02 });
	gsap.from('.header__logo-link', 1.2, { opacity: 0, x: -20, delay: .02 });
	gsap.from('.burger', 1.2, { opacity: 0, x: 20, delay: .02 });
}

