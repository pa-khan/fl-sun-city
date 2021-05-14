var html = document.querySelector('html'),
		body = document.querySelector('body'),
		wrap = document.querySelector('.wrap');

var mailPattern = /^[0-9a-z_-]+@[0-9a-z_-]+.[a-z]{2,5}$/i;

var ham = document.querySelector('.header__ham'),
		nav = document.querySelector('.header__nav');

if (ham && nav) {
	ham.addEventListener('click', ()=>{
		nav.classList.toggle('--show');
	});
}


var offer = document.querySelector('.offer__slider');
if (offer) {
	new Swiper(offer, {
		loop: true,
		navigation: {
			prevEl: '.offer__arrow.arrow.--prev',
			nextEl: '.offer__arrow.arrow.--next',
		},
		pagination: {
			clickable: true,
			el: '.offer__pagination'
		}
	})
}

var team = document.querySelector('.team__wrap');
if (team) {
	new Swiper(team, {
		loop: true,
		navigation: {
			prevEl: '.team__arrow.arrow.--prev',
			nextEl: '.team__arrow.arrow.--next',
		},
		pagination: {
			clickable: true,
			el: '.team__pagination'
		}
	})
}

var reviews = document.querySelector('.reviews__wrap');
if (reviews) {
	new Swiper(reviews, {
		slidesPerView: 2,
		loop: true,
		navigation: {
			prevEl: '.reviews__arrow.arrow.--prev',
			nextEl: '.reviews__arrow.arrow.--next',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				spaceBetween: 20,
			},
			1170: {
				spaceBetween: 65,
			},
		}
	})
}

var map = document.getElementById('map');
if (map) {
	ymaps.ready(initMap);
	
	function initMap() {
		let positions = [
			[55.764525568969454,37.564562499999944],
			[55.72788606902426,37.585403500000005],
			[55.74929856898989,37.53964349999993],
			[55.70294156904948,37.57025800000001]
		]
		let myMap = new ymaps.Map (map, {
			center: [55.740565,37.566022],
			zoom: 12,
			controls: []
			},{
				suppressMapOpenBlock: true
		});
		for (let i = 0; i < positions.length; i++) {
			let placemark = new ymaps.Placemark(positions[i],{}, {
				hideIconOnBalloonOpen: false,
				iconLayout: 'default#image',
				iconImageHref: '_/uploads/marker.png',
				iconImageSize: [33, 45],
				iconImageOffset: [-16, -45],
			});  
			myMap.geoObjects.add(placemark);
			myMap.behaviors.disable('scrollZoom');
			myMap.behaviors.disable('multiTouch'); 
			myMap.behaviors.disable('drag');
		}
	}
}