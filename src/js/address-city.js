
(function(form){

	if(form) {

		var input = form.querySelectorAll('[name="address-city"]');

		Array.prototype.forEach.call(input, function(elem){

			elem.addEventListener('change', function () {

				Array.prototype.forEach.call(input, function(el){

					el.closest('.btn').classList.toggle('is-active', el === elem);

				});

				var city = form.querySelector('[name="address-city"]:checked').value;

				PubSub.publish('addressCity', city);

			});

		});

		// а вот так слушаем события:

		PubSub.subscribe('addressCity', function(e,value){

			console.log(value);

		});

	};

})(document.querySelector('#address-city'));


(function(shop){

	if(shop) {

		shop.addEventListener('click', function (e) {

			var btn = e.target.closest('[data-show-map]');

			if(btn) {

				var placemark = btn.getAttribute('data-show-map'),
					scrollMap = document.querySelector('#address-city').getBoundingClientRect().top;

				if(scrollMap < 0) {

					window.scrollTo(0, scrollMap + window.pageYOffset);

				}

				PubSub.publish('addressShop', placemark);

			}

		});

		// а вот так слушаем события:

		PubSub.subscribe('addressShop', function(e,value){

			console.log(value);

		});

	};

})(document.querySelector('.address-shop'));