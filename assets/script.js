const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");


let currentIndex = 0;

function onArrowLeftClick() {
	currentIndex = (currentIndex > 0)? currentIndex - 1 : slides.length -1;
}


function onArrowRightClick() {
	currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
}


function updateSlide(index) {
	const slide = slides[index];
	bannerImg.src = `./assets/images/slideshow/${slide.image}`;
	bannerText.innerHTML = slide.tagLine;
}

function updateDot(index){
	dots.forEach(dot => dot.classList.remove('dot_selected'));
	dots[index].classList.add('dot_selected');
}

arrowLeft.addEventListener("click", function() {
	onArrowLeftClick();
	updateSlide(currentIndex);
	updateDot(currentIndex);
});

arrowRight.addEventListener("click", function() {
	onArrowRightClick();
	updateSlide(currentIndex);
	updateDot(currentIndex);
});