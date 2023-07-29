export const startScrollAnimation = () => {
	const sr = ScrollReveal({
		origin: 'top',
		distance: '60px',
		duration: 900,
		delay: 20
	});

	sr.reveal('.our-works__image', { interval: 10 });
	sr.reveal('.equipment__card, .advantages__title', { origin: 'right', interval: 100 });
	sr.reveal('.advantages__card', { origin: 'left', interval: 10 });
	sr.reveal('.question__isons-wrap', { origin: 'top', delay: 10 });
	sr.reveal('.price__img,.contacts__title', { origin: 'left', distance: '10px', delay: 10 });
	sr.reveal('.price__table-item ,.contacts__phone-wrap', { origin: 'right', distance: '10px', delay: 30 });
}
export const startAnimation = () => {
	gsap.from('.header__title', 1.2, { opacity: 0, x: -100, delay: .1 });
	gsap.from('.phone-number', 1.2, { opacity: 0, x: 20, delay: .02 });
	gsap.from('.header__logo-link', 1.2, { opacity: 0, x: -20, delay: .02 });
	gsap.from('.burger', 1.2, { opacity: 0, x: 20, delay: .02 });
}

