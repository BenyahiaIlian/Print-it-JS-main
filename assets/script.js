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

// Créé des constantes pour récupérer les éléments HTML avec lesquels tu vas travailler
// const arrowLeft
// const arrowRight
// const img
// const Tagline
// const dots




const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");

// Créer une variable avec un compteur à 0

let currentIndex = 0;

// Créer une fonction pour le changement d'image
// Modifier l'attribut src en fonction du tableau
// Intégrer la tagline dans la balise <p>
// Créer un événement au click sur la flèche de droite
// Mettre le compteur en positif : incrémente de +1 un objet
// Condition qui indique que si on arrive à la fin du tableau, on revient à 0
// Appeler la fonction pour le changement d'image


function onArrowLeftClick() {
	currentIndex= (currentIndex > 0)? currentIndex - 1 :slides.length -1;
}


function onArrowRightClick() {
	currentIndex= (currentIndex > 0)? currentIndex - 1 :slides.length -1;
}


function updateSlide(index) {
	const slide = slides[index];
	bannerImg.src = `./assets/images/slideshow/${slide.image}`;
	bannerText.innerHTML = slide.tagLine;
}


arrowLeft.addEventListener("click", function() {
	currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
	updateSlide(currentIndex);
});

arrowRight.addEventListener("click", function() {
	currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
	updateSlide(currentIndex);
});



dots.addEventListener("click", function(){
	currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
	updatedots(currentIndex);
})

dots.addEventListener("click", function(){
	currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
	updatedots(currentIndex);
})