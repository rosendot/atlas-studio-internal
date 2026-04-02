/**
 * FAQ Accordion
 *
 * Supports multiple accordions on one page.
 * Default: one item open at a time. Add .faq-accordion--multi to allow multiple.
 * See README.md for HTML structure.
 */
document.addEventListener('DOMContentLoaded', function () {
	var accordions = document.querySelectorAll('.faq-accordion');

	accordions.forEach(function (accordion) {
		var allowMulti = accordion.classList.contains('faq-accordion--multi');
		var items = accordion.querySelectorAll('.faq-accordion__item');

		items.forEach(function (item) {
			var question = item.querySelector('.faq-accordion__question');
			var answer = item.querySelector('.faq-accordion__answer');
			if (!question || !answer) return;

			question.addEventListener('click', function () {
				var isOpen = item.classList.contains('faq-accordion__item--open');

				if (!allowMulti) {
					// Close all other items
					items.forEach(function (other) {
						if (other !== item && other.classList.contains('faq-accordion__item--open')) {
							other.classList.remove('faq-accordion__item--open');
							var otherAnswer = other.querySelector('.faq-accordion__answer');
							if (otherAnswer) {
								otherAnswer.style.maxHeight = '0';
							}
							other.querySelector('.faq-accordion__question').setAttribute('aria-expanded', 'false');
						}
					});
				}

				if (isOpen) {
					item.classList.remove('faq-accordion__item--open');
					answer.style.maxHeight = '0';
					question.setAttribute('aria-expanded', 'false');
				} else {
					item.classList.add('faq-accordion__item--open');
					answer.style.maxHeight = answer.scrollHeight + 'px';
					question.setAttribute('aria-expanded', 'true');
				}
			});
		});
	});
});
