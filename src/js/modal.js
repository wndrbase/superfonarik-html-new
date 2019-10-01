/*
(function(){

	var modal = document.querySelector('.modal'),
		items = modal.querySelectorAll('.modal__item'),
		btns = document.querySelectorAll('[data-modal]'),
		wrapper = document.querySelector('.wrapper'),
		windowScroll = 0;

	modal.addEventListener('click', function (e) {

		if(e.target.classList.contains('modal__box') || e.target.classList.contains('modal__close')){

			SF.hideModal();

		}

	});

	SF.hideModal = function() {

		modal.classList.add('visuallyhidden');

		document.body.classList.remove('modal-show');
		wrapper.style.top = 0;
		window.scrollTo(0,windowScroll);

		SF.activeModal = false;

		setTimeout(function(){

			document.body.classList.remove('scroll-behavior-off');

		});

		// clear video
		document.getElementById('modal-video').innerHTML = '';

	};

	SF.modalShow = function (selector, text) {

		document.body.classList.toggle('menu-open', selector == 'menu');

		document.body.classList.add('scroll-behavior-off');
		document.body.classList.remove('menu-show');

		if(!SF.activeModal){

			windowScroll = window.pageYOffset;

			wrapper.style.top = -windowScroll + 'px';

		}

		SF.activeModal = modal.querySelector('.modal__item--' + selector);

		if(selector == 'ok'){

			SF.activeModal.querySelector('.modal-form__ok').textContent = text;

		}

		Array.prototype.forEach.call(items, function(el){

			el.classList.toggle('visuallyhidden', el !== SF.activeModal);

		});

		modal.classList.remove('visuallyhidden');

		document.body.classList.add('modal-show');
		window.scrollTo(0,0);

		SF.activeModal.focus();

	};

	Array.prototype.forEach.call(btns, function(el){

		el.addEventListener('click', function(e) {
			e.preventDefault();

			SF.modalShow(this.getAttribute('data-modal'));

		});

	});

	Array.prototype.forEach.call(document.querySelectorAll('.modal a.menu__link'), function(el){

		el.addEventListener('click', function() {

			SF.hideModal();

			setTimeout(function(){

				window.scrollTo(0,document.querySelector(el.getAttribute('href')));

			},100);

		});

	});

})();*/