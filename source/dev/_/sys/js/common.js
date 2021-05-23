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

var clients = document.querySelector('.clients__slider');
if (clients) {
	new Swiper(clients, {
		slidesPerView: 5,
		loop: true,
		navigation: {
			prevEl: '.clients__arrow.arrow.--prev',
			nextEl: '.clients__arrow.arrow.--next',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1170: {
				spaceBetween: 20,
			},
		}
	})
}

var write = document.querySelector('.write__slider');
if (write) {
	new Swiper(write, {
		slidesPerView: 3,
		slidesPerColumn: 2,
		loop: true,
		loopAdditionalSlides: 15,
		navigation: {
			prevEl: '.write__arrow.arrow.--prev',
			nextEl: '.write__arrow.arrow.--next',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				slidesPerColumn: 2,
			},
			768: {
				slidesPerView: 2,
				slidesPerColumn: 2,
			},
			1170: {
				// spaceBetween: 20,
			},
		}
	})
}

var discounts = document.querySelectorAll('.discounts__sli');
if (discounts.length > 0) {
	discounts.forEach((discount)=>{
		console.log(discount)
		var slider    = discount.querySelector('.di__slider'), 
				arrowPrev = discount.querySelector('.di__arrow.arrow.--prev'),
				arrowNext = discount.querySelector('.di__arrow.arrow.--next');
		new Swiper(slider, {
			slidesPerView: 3,
			loop: true,
			loopAdditionalSlides: 3,
			navigation: {
				prevEl: arrowPrev,
				nextEl: arrowNext,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 2,
				},
				1440: {
					// spaceBetween: 20,
					slidesPerView: 3,
				},
			}
		})
	})
}


var gallery = document.querySelectorAll('.gallery__slider');
if (gallery.length > 0) {
	gallery.forEach((discount)=>{
		console.log(discount)
		var slider    = discount.querySelector('.g-sli__slider'), 
				arrowPrev = discount.querySelector('.g-sli__arrow.arrow.--prev'),
				arrowNext = discount.querySelector('.g-sli__arrow.arrow.--next');
		new Swiper(slider, {
			slidesPerView: 4,
			loop: true,
			loopAdditionalSlides: 3,
			navigation: {
				prevEl: arrowPrev,
				nextEl: arrowNext,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				767: {
					slidesPerView: 2,
				},
				1440: {
					// spaceBetween: 20,
					slidesPerView: 4,
					spaceBetween: 30
				},
			}
		})
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

// togs

var togs = $('.tog');

togs.each((i, tog)=>{
	var tog  = $(tog),
			head = tog.find('.tog__head'),
			body = tog.find('.tog__body');

	head.on('click', function(event) {
		body.slideToggle(300);
		tog.toggleClass('--open');
	});

	if (tog.hasClass('--open')) {
		body.slideDown(300);
	}
	
});


var tabsLinks = $('.t-nav__item'),
		orderCity = $('.order__city'),
		orderBtn  = $('.order__btn');
tabsLinks.each((i, link)=>{
	link = $(link);
	var name = link.attr('data-name'),
			href = link.attr('data-href');

	if (link.hasClass('--current')) {
		orderCity.text(name);
		orderBtn.attr('href', href);
	}
	link.on('click', function(event) {
		orderCity.text(name);
		orderBtn.attr('href', href);	
	});

});


var priceTabs = $('.price__tab');
priceTabs.each((i, tab)=>{
	tab = $(tab);
	var item = tab.find('.price__item .tog__head'),
			body = tab.find('.price__body');

	item.on('click', ()=>{
		if (tab.find('.price__item.--open').length>0) {
			body.addClass('--no-img');
		} else {
			body.removeClass('--no-img');
		}
	})
});