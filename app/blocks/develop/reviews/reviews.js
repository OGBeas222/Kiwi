
const swiper = new Swiper('.reviews-content__bottom-con', {
	speed: 400,
	slidesPerView:'auto',
	slidesPerGroup:1,
	spaceBetween:85,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


const swiperPrev = document.querySelector('.reviews-slider__btn-left')
const swiperNext = document.querySelector('.reviews-slider__btn-right')

// swiperPrev.innerHTML= `
// <svg>
//   <use xlink:href="@symbol#reviews__Arrow_left"></use>
// </svg>
// `
 swiperNext.innerHTML= `<img width="15" height="15" src="static/reviews/" alt="1">`

swiperPrev.addEventListener('click', () => {
	mySwiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
	mySwiper.slideNext();
})
