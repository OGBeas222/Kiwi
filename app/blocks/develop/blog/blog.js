const slider = document.querySelector('.swiper');
const containerBlog = document.querySelector('.blog').childNodes[1];

function mobileSlider() {
	if (window.innerWidth <= 666 && slider.dataset.mobile === 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 'auto',
			slidesPerGroup: 1,
			spaceBetween: 27,
			slideClass: 'blog-card',
			simulateTouch:true ,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

		});

		if(slider.querySelector('.swiper-pagination').style.display === 'none'){
			slider.querySelector('.swiper-pagination').style.display = 'flex'
		}

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 666) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-initialized')) {
			slider.querySelector('.swiper-pagination').style.display = 'none';
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});
